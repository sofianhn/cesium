import defined from "./defined.js";
import { getOffscreenCanvasClientDimensions } from "./offscreenCanvasClientDimensions.js";

/**
 * Returns the CSS layout width of a canvas. For {@link HTMLCanvasElement}, this is
 * <code>clientWidth</code>. For {@link OffscreenCanvas}, which has no layout box,
 * this uses dimensions set by {@link Scene#resize} when available, otherwise
 * falls back to <code>width</code>.
 *
 * @function
 *
 * @param {HTMLCanvasElement|OffscreenCanvas} canvas The canvas.
 * @returns {number} The canvas width in CSS pixels.
 */
function getCanvasClientWidth(canvas) {
  if (typeof canvas.clientWidth === "number") {
    return canvas.clientWidth;
  }

  const offscreenDimensions = getOffscreenCanvasClientDimensions(canvas);
  if (defined(offscreenDimensions)) {
    return offscreenDimensions.width;
  }

  return canvas.width;
}

export default getCanvasClientWidth;
