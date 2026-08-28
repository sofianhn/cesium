/**
 * Returns the CSS layout height of a canvas. For {@link HTMLCanvasElement}, this is
 * <code>clientHeight</code>. For {@link OffscreenCanvas}, which has no layout box,
 * this falls back to <code>height</code>.
 *
 * @function
 *
 * @param {HTMLCanvasElement|OffscreenCanvas} canvas The canvas.
 * @returns {number} The canvas height in CSS pixels.
 */
function getCanvasClientHeight(canvas) {
  return canvas.clientHeight ?? canvas.height;
}

export default getCanvasClientHeight;
