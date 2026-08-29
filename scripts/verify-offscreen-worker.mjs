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

function looksLikeEarthImagery(rgb) {
  if (!Array.isArray(rgb) || rgb.length < 3) {
    return false;
  }
  const [r, g, b] = rgb;
  const sum = r + g + b;

  if (r === 25 && g === 45 && b === 85) {
    return false;
  }

  // Globe base color without draped imagery.
  if (r < 8 && g < 8 && b >= 120 && b <= 140) {
    return false;
  }

  // Saturated blue sphere / atmosphere with no imagery tiles.
  if (b > 170 && r < 35 && g < 50) {
    return false;
  }

  if (sum < 120) {
    return false;
  }

  return sum >= 360 || (g >= 55 && r >= 20);
}

async function runCase(page, label, options) {
  return page.evaluate(
    async ({ label, options }) => {
      function looksLikeEarthImagery(rgb) {
        if (!Array.isArray(rgb) || rgb.length < 3) {
          return false;
        }
        const [r, g, b] = rgb;
        const sum = r + g + b;
        if (r === 25 && g === 45 && b === 85) {
          return false;
        }
        if (r < 8 && g < 8 && b >= 120 && b <= 140) {
          return false;
        }
        if (b > 170 && r < 35 && g < 50) {
          return false;
        }
        if (sum < 120) {
          return false;
        }
        return sum >= 360 || (g >= 55 && r >= 20);
      }

      const workerErrors = [];

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
        });
        return worker;
      };

      const container = document.getElementById("cesiumContainer");
      container.innerHTML = "";
      container.style.cssText = "width:960px;height:540px";

      let center;
      let samples;
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
        await new Promise((r) => setTimeout(r, 10000));

        const points = [
          [480, 270],
          [320, 220],
          [640, 220],
          [400, 360],
          [560, 360],
        ];
        samples = [];
        for (const [x, y] of points) {
          samples.push(await widget.samplePixel(x, y));
        }
        center = samples[0];
        widget.destroy();
      } catch (e) {
        initError = e.message || String(e);
      }

      Worker = NativeWorker;

      const earthLikeCount = (samples ?? []).filter(looksLikeEarthImagery).length;
      const showsEarthImagery =
        looksLikeEarthImagery(center) && earthLikeCount >= 1;

      return {
        label,
        initError,
        center,
        samples,
        earthLikeCount,
        showsEarthImagery,
        workerErrors,
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
    await new Promise((r) => setTimeout(r, 8000));
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
  const baselineShowsEarth = looksLikeEarthImagery(mainCenter);
  console.log("\n=== MAIN THREAD BASELINE ===");
  console.log("center rgb:", mainCenter);
  console.log("showsEarthImagery:", baselineShowsEarth);

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
  let failed = !baselineShowsEarth;
  for (const [label, options] of cases) {
    const result = await runCase(page, label, options);
    console.log(JSON.stringify(result, null, 2));
    if (label !== "worker-background-only") {
      if (result.workerErrors.length > 0 || !result.showsEarthImagery) {
        failed = true;
      }
    } else if (result.showsEarthImagery) {
      failed = true;
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
