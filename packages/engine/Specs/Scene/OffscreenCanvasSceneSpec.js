import {
  getCanvasClientHeight,
  getCanvasClientWidth,
  Scene,
} from "../../index.js";

import getWebGLStub from "../../../../Specs/getWebGLStub.js";

function createOffscreenScene(canvas, options) {
  options = options ?? {};
  options.canvas = canvas;
  options.contextOptions = options.contextOptions ?? {};
  if (window.webglStub) {
    options.contextOptions.getWebGLStub = getWebGLStub;
  }
  return new Scene(options);
}

describe(
  "Scene/OffscreenCanvas",
  function () {
    it("creates and renders with OffscreenCanvas", function () {
      if (typeof OffscreenCanvas === "undefined") {
        return;
      }

      const canvas = new OffscreenCanvas(64, 64);
      const scene = createOffscreenScene(canvas);

      scene.resize(64, 64, 1.0);
      scene.render();

      expect(getCanvasClientWidth(scene.canvas)).toBe(64);
      expect(getCanvasClientHeight(scene.canvas)).toBe(64);
      expect(scene.drawingBufferWidth).toBe(64);
      expect(scene.drawingBufferHeight).toBe(64);

      scene.destroy();
    });

    it("supports pixel ratio when resizing OffscreenCanvas", function () {
      if (typeof OffscreenCanvas === "undefined") {
        return;
      }

      const canvas = new OffscreenCanvas(1, 1);
      const scene = createOffscreenScene(canvas);

      scene.resize(100, 50, 2.0);

      expect(getCanvasClientWidth(scene.canvas)).toBe(100);
      expect(getCanvasClientHeight(scene.canvas)).toBe(50);
      expect(scene.canvas.width).toBe(200);
      expect(scene.canvas.height).toBe(100);
      expect(scene.pixelRatio).toBe(2.0);

      scene.destroy();
    });

    it("accepts an injected WebGL context", function () {
      if (typeof OffscreenCanvas === "undefined" || window.webglStub) {
        return;
      }

      const canvas = new OffscreenCanvas(32, 32);
      const glContext = canvas.getContext("webgl2", {
        antialias: false,
        stencil: true,
      });

      if (!glContext) {
        return;
      }

      const scene = new Scene({
        canvas: canvas,
        contextOptions: {
          glContext: glContext,
        },
      });

      expect(scene.context._gl).toBe(glContext);

      scene.resize(32, 32, 1.0);
      scene.render();

      scene.destroy();
    });
  },
  "WebGL",
);
