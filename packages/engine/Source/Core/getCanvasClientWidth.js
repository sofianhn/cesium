/**
 * Returns the CSS layout width of a canvas. For {@link HTMLCanvasElement}, this is
 * <code>clientWidth</code>. For {@link OffscreenCanvas}, which has no layout box,
 * this falls back to <code>width</code>.
 *
 * @function
 *
 * @param {HTMLCanvasElement|OffscreenCanvas} canvas The canvas.
 * @returns {number} The canvas width in CSS pixels.
 */
function getCanvasClientWidth(canvas) {
  return canvas.clientWidth ?? canvas.width;
}

export default getCanvasClientWidth;
