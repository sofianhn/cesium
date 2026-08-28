import defined from "./defined.js";
import { getOffscreenCanvasClientDimensions } from "./offscreenCanvasClientDimensions.js";

/**
 * Returns the CSS layout height of a canvas. For {@link HTMLCanvasElement}, this is
 * <code>clientHeight</code>. For {@link OffscreenCanvas}, which has no layout box,
 * this uses dimensions set by {@link Scene#resize} when available, otherwise
 * falls back to <code>height</code>.
 *
 * @function
 *
 * @param {HTMLCanvasElement|OffscreenCanvas} canvas The canvas.
 * @returns {number} The canvas height in CSS pixels.
 */
function getCanvasClientHeight(canvas) {
  if (typeof canvas.clientHeight === "number") {
    return canvas.clientHeight;
  }

  const offscreenDimensions = getOffscreenCanvasClientDimensions(canvas);
  if (defined(offscreenDimensions)) {
    return offscreenDimensions.height;
  }

  return canvas.height;
}

export default getCanvasClientHeight;
