import { test, expect } from "./test.js";

test("OffscreenCesiumWidget initializes and renders in a worker", async ({
  cesiumPage,
}) => {
  test.setTimeout(120000);

  const consoleErrors = [];
  cesiumPage.page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });
  cesiumPage.page.on("pageerror", (error) => {
    consoleErrors.push(error.message);
  });

  await cesiumPage.goto();

  const result = await cesiumPage.page.evaluate(async () => {
    if (
      typeof HTMLCanvasElement === "undefined" ||
      typeof HTMLCanvasElement.prototype.transferControlToOffscreen !==
        "function"
    ) {
      return { supported: false };
    }

    const container = document.getElementById("cesiumContainer");
    const widget = new Cesium.OffscreenCesiumWidget(container, {
      useWorldImagery: false,
      useWorldTerrain: false,
      backgroundColor: [100, 149, 237, 255],
    });

    await widget.readyPromise;
    widget.resize();

    await new Promise((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const canvas = widget.canvas;
    const centerX = Math.floor(canvas.clientWidth / 2);
    const centerY = Math.floor(canvas.clientHeight / 2);
    const pixel = await widget.samplePixel(centerX, centerY);
    const hasVisiblePixels =
      Array.isArray(pixel) && pixel[0] + pixel[1] + pixel[2] > 10;

    widget.destroy();

    return {
      supported: true,
      ready: true,
      clientWidth: canvas.clientWidth,
      clientHeight: canvas.clientHeight,
      pixel: pixel,
      hasVisiblePixels: hasVisiblePixels,
    };
  });

  expect(result.supported, "transferControlToOffscreen must be supported").toBe(
    true,
  );
  expect(result.ready).toBe(true);
  expect(result.clientWidth).toBeGreaterThan(0);
  expect(result.clientHeight).toBeGreaterThan(0);
  expect(
    result.hasVisiblePixels,
    "expected the worker-rendered frame to be visible on the display canvas",
  ).toBe(true);
  expect(consoleErrors, `console errors: ${consoleErrors.join("\n")}`).toEqual(
    [],
  );
});
