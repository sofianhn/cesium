import { getCanvasClientHeight, getCanvasClientWidth } from "../../index.js";

describe("Core/getCanvasClientWidth", function () {
  it("returns clientWidth for HTMLCanvasElement", function () {
    const canvas = document.createElement("canvas");
    canvas.width = 100;
    canvas.height = 200;
    Object.defineProperty(canvas, "clientWidth", {
      value: 50,
      configurable: true,
    });
    Object.defineProperty(canvas, "clientHeight", {
      value: 75,
      configurable: true,
    });

    expect(getCanvasClientWidth(canvas)).toBe(50);
  });

  it("returns width for OffscreenCanvas", function () {
    if (typeof OffscreenCanvas === "undefined") {
      return;
    }

    const canvas = new OffscreenCanvas(128, 64);
    expect(getCanvasClientWidth(canvas)).toBe(128);
  });
});

describe("Core/getCanvasClientHeight", function () {
  it("returns clientHeight for HTMLCanvasElement", function () {
    const canvas = document.createElement("canvas");
    canvas.width = 100;
    canvas.height = 200;
    Object.defineProperty(canvas, "clientWidth", {
      value: 50,
      configurable: true,
    });
    Object.defineProperty(canvas, "clientHeight", {
      value: 75,
      configurable: true,
    });

    expect(getCanvasClientHeight(canvas)).toBe(75);
  });

  it("returns height for OffscreenCanvas", function () {
    if (typeof OffscreenCanvas === "undefined") {
      return;
    }

    const canvas = new OffscreenCanvas(128, 64);
    expect(getCanvasClientHeight(canvas)).toBe(64);
  });
});
