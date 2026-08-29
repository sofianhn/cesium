/**
 * Verify live GitHub Pages demos show Earth imagery (not a blue sphere).
 * Run: node scripts/verify-github-pages.mjs
 */
/* eslint-disable */
import { chromium } from "@playwright/test";

const URLS = {
  worker: "https://sofianhn.github.io/cesium/Apps/OffscreenCanvasWorkerDemo.html",
  baseline:
    "https://sofianhn.github.io/cesium/Apps/MainThreadGlobeDemo.html",
};

function parseCenterRgb(status) {
  const match = status.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!match) {
    return undefined;
  }
  return [Number(match[1]), Number(match[2]), Number(match[3])];
}

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

async function inspectDemo(page, url, label) {
  const pageErrors = [];
  const workerErrors = [];

  page.on("pageerror", (e) => pageErrors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") {
      pageErrors.push(m.text());
    }
  });

  await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForTimeout(14000);

  const status = await page.locator("#statusText").innerText();
  const center = parseCenterRgb(status);
  const showsEarthImagery = looksLikeEarthImagery(center);

  if (label === "worker") {
    const captured = await page.evaluate(() => window.__workerErrors || []);
    workerErrors.push(...captured);
  }

  const hasErrorText =
    /failed|error|black|dark rgb\(0, 0, 0\)/i.test(status) &&
    !/Rendering · center rgb/.test(status);

  return {
    label,
    url,
    status,
    center,
    showsEarthImagery,
    pageErrors,
    workerErrors,
    hasErrorText,
    ok:
      pageErrors.length === 0 &&
      workerErrors.length === 0 &&
      !hasErrorText &&
      showsEarthImagery &&
      !status.startsWith("Starting"),
  };
}

async function main() {
  const browser = await chromium.launch({
    args: ["--use-angle=gl", "--ignore-gpu-blocklist"],
  });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  await page.addInitScript(() => {
    window.__workerErrors = [];
    const NativeWorker = Worker;
    Worker = function (url, opts) {
      const worker = new NativeWorker(url, opts);
      worker.addEventListener("message", (event) => {
        if (event.data?.type === "error" || event.data?.type === "ERROR") {
          window.__workerErrors.push(event.data.message);
        }
      });
      return worker;
    };
  });

  const results = [];
  for (const [label, url] of Object.entries(URLS)) {
    results.push(await inspectDemo(page, url, label));
  }

  await browser.close();

  for (const result of results) {
    console.log(JSON.stringify(result, null, 2));
  }

  const failed = results.some((r) => !r.ok);
  if (failed) {
    console.error("\nLIVE PAGES VERIFICATION FAILED");
    process.exit(1);
  }
  console.log("\nLIVE PAGES VERIFICATION PASSED");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
