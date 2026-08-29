/**
 * Verification harness for OffscreenCanvas worker globe rendering.
 * Run: node scripts/verify-offscreen-worker.mjs
 */
/* eslint-disable */
import { chromium } from "@playwright/test";

const BASE = "http://127.0.0.1:8080";
const GPU_ARGS = [
  "--use-angle=gl",
  "--ignore-gpu-blocklist",
  "--enable-webgl",
  "--enable-webgl2",
];

async function runCase(page, label, options) {
  return page.evaluate(
    async ({ label, options }) => {
      const workerErrors = [];
      const workerLogs = [];

      const NativeWorker = Worker;
      Worker = function (url, opts) {
        const worker = new NativeWorker(url, opts);
        worker.addEventListener("message", (event) => {
          const data = event.data;
          if (data?.type === "error" || data?.type === "ERROR") {
            workerErrors.push({
              type: data.type,
              message: data.message,
              stack: data.stack?.slice?.(0, 500),
            });
          }
          workerLogs.push(data?.type ?? "unknown");
        });
        return worker;
      };

      const container = document.getElementById("cesiumContainer");
      container.innerHTML = "";
      container.style.cssText = "width:960px;height:540px";

      let center;
      let initError;
      try {
        const widget = new Cesium.OffscreenCesiumWidget(container, {
          pixelRatio: 1,
          backgroundColor: [25, 45, 85, 255],
          contextOptions: {
            webgl: { preserveDrawingBuffer: true, alpha: false },
          },
          ...options,
        });
        await widget.readyPromise;
        widget.resize();
        await new Promise((r) => setTimeout(r, 8000));
        center = await widget.samplePixel(480, 270);
        widget.destroy();
      } catch (e) {
        initError = e.message || String(e);
      }

      Worker = NativeWorker;

      const sum = Array.isArray(center)
        ? center[0] + center[1] + center[2]
        : 0;
      const isBackgroundOnly =
        Array.isArray(center) &&
        center[0] === 25 &&
        center[1] === 45 &&
        center[2] === 85;

      return {
        label,
        initError,
        center,
        sum,
        isBackgroundOnly,
        workerErrors,
        workerMessageTypes: [...new Set(workerLogs)],
      };
    },
    { label, options },
  );
}

async function runMainBaseline(page) {
  return page.evaluate(async () => {
    const container = document.getElementById("cesiumContainer");
    container.innerHTML = "";
    container.style.cssText = "width:960px;height:540px";
    const viewer = new Cesium.Viewer(container, {
      animation: false,
      timeline: false,
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: false,
      navigationHelpButton: false,
      fullscreenButton: false,
      infoBox: false,
      selectionIndicator: false,
      creditContainer: document.createElement("div"),
      contextOptions: { webgl: { preserveDrawingBuffer: true } },
    });
    viewer.resolutionScale = 1;
    viewer.scene.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(-98, 40, 20000000),
    });
    await new Promise((r) => setTimeout(r, 6000));
    const s = viewer.scene;
    s.render();
    const pr = s.pixelRatio;
    const p = s.context.readPixels({
      x: Math.floor(480 * pr),
      y: Math.floor(s.drawingBufferHeight - 270 * pr - 1),
      width: 1,
      height: 1,
    });
    viewer.destroy();
    return [p[0], p[1], p[2]];
  });
}

async function main() {
  const browser = await chromium.launch({ args: GPU_ARGS });
  const page = await browser.newPage();
  const pageErrors = [];
  page.on("pageerror", (e) => pageErrors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") {
      pageErrors.push(m.text());
    }
  });

  await page.goto(`${BASE}/Specs/e2e/cesium.html`);
  await page.addScriptTag({ path: "/workspace/Build/Cesium/Cesium.js" });
  await page.evaluate(() => {
    window.CESIUM_BASE_URL = "/Build/Cesium/";
  });

  const mainCenter = await runMainBaseline(page);
  console.log("\n=== MAIN THREAD BASELINE ===");
  console.log("center rgb:", mainCenter);
  console.log(
    "shows globe:",
    mainCenter[0] + mainCenter[1] + mainCenter[2] > 60 &&
      !(mainCenter[0] === 25 && mainCenter[1] === 45 && mainCenter[2] === 85),
  );

  const cases = [
    ["worker-ion-default", { useWorldImagery: true, simpleGlobe: false }],
    ["worker-ion-simpleGlobe", { useWorldImagery: true, simpleGlobe: true }],
    [
      "worker-osm-simpleGlobe",
      {
        useWorldImagery: false,
        useOpenStreetMapImagery: true,
        simpleGlobe: true,
      },
    ],
    [
      "worker-background-only",
      {
        useWorldImagery: false,
        useOpenStreetMapImagery: false,
        useGlobe: false,
        backgroundColor: [25, 45, 85, 255],
      },
    ],
  ];

  console.log("\n=== WORKER CASES ===");
  let failed = false;
  for (const [label, options] of cases) {
    const result = await runCase(page, label, options);
    console.log(JSON.stringify(result, null, 2));
    if (label !== "worker-background-only") {
      if (result.workerErrors.length > 0 || result.isBackgroundOnly) {
        failed = true;
      }
    }
  }

  console.log("\n=== PAGE ERRORS (main thread) ===");
  console.log(pageErrors.slice(0, 10).join("\n---\n") || "(none)");

  await browser.close();

  if (failed) {
    console.error("\nVERIFICATION FAILED");
    process.exit(1);
  }
  console.log("\nVERIFICATION PASSED");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
