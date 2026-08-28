import defined from "./defined.js";

const dimensionsByCanvas = new WeakMap();

/**
 * @typedef {object} OffscreenCanvasClientDimensions
 * @property {number} width
 * @property {number} height
 */

/**
 * Stores the CSS pixel dimensions for an {@link OffscreenCanvas}.
 *
 * @param {OffscreenCanvas} canvas The offscreen canvas.
 * @param {number} width The width in CSS pixels.
 * @param {number} height The height in CSS pixels.
 * @private
 */
function setOffscreenCanvasClientDimensions(canvas, width, height) {
  dimensionsByCanvas.set(canvas, {
    width: width,
    height: height,
  });
}

/**
 * @param {OffscreenCanvas} canvas The offscreen canvas.
 * @returns {OffscreenCanvasClientDimensions|undefined}
 * @private
 */
function getOffscreenCanvasClientDimensions(canvas) {
  return dimensionsByCanvas.get(canvas);
}

/**
 * @param {OffscreenCanvas} canvas The offscreen canvas.
 * @private
 */
function clearOffscreenCanvasClientDimensions(canvas) {
  if (defined(dimensionsByCanvas.get(canvas))) {
    dimensionsByCanvas.delete(canvas);
  }
}

export {
  clearOffscreenCanvasClientDimensions,
  getOffscreenCanvasClientDimensions,
  setOffscreenCanvasClientDimensions,
};
