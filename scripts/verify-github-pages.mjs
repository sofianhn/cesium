/**
 * Verify live GitHub Pages demos have no worker errors and show globe pixels.
 * Run: node scripts/verify-github-pages.mjs
 */
/* eslint-disable */
import { chromium } from "@playwright/test";

const URLS = {
  worker: "https://sofianhn.github.io/cesium/Apps/OffscreenCanvasWorkerDemo.html",
  baseline:
    "https://sofianhn.github.io/cesium/Apps/MainThreadGlobeDemo.html",
};

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
  await page.waitForTimeout(12000);

  const status = await page.locator("#statusText").innerText();

  if (label === "worker") {
    const captured = await page.evaluate(() => window.__workerErrors || []);
    workerErrors.push(...captured);
  }

  const failedRequests = [];
  page.on("requestfailed", (r) => {
    failedRequests.push(r.url());
  });

  const isBackgroundOnly = /rgb\(25, 45, 85\)/.test(status);
  const hasErrorText =
    /failed|error|black|dark rgb\(0, 0, 0\)/i.test(status) &&
    !/Rendering · center rgb/.test(status);

  return {
    label,
    url,
    status,
    pageErrors,
    workerErrors,
    isBackgroundOnly,
    hasErrorText,
    ok:
      pageErrors.length === 0 &&
      workerErrors.length === 0 &&
      !hasErrorText &&
      (label === "baseline" || !isBackgroundOnly) &&
      !status.startsWith("Starting"),
  };
}

async function main() {
  const browser = await chromium.launch({
    args: ["--use-angle=gl", "--ignore-gpu-blocklist"],
  });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  if (URLS.worker.includes("sofianhn.github.io")) {
    await page.addInitScript(() => {
      window.__workerErrors = [];
      const NativeWorker = Worker;
      Worker = function (url, opts) {
        const worker = new NativeWorker(url, opts);
        worker.addEventListener("message", (event) => {
          if (event.data?.type === "error") {
            window.__workerErrors.push(event.data.message);
          }
        });
        return worker;
      };
    });
  }

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
