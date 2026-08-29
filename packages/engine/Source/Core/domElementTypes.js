import defined from "./defined.js";

function hasDomType(name) {
  return typeof globalThis[name] !== "undefined";
}

/**
 * @private
 */
function isDomInstance(value, typeName) {
  return hasDomType(typeName) && value instanceof globalThis[typeName];
}

/**
 * @private
 */
export function isHtmlCanvasElement(value) {
  return isDomInstance(value, "HTMLCanvasElement");
}

/**
 * @private
 */
export function isHtmlImageElement(value) {
  return isDomInstance(value, "HTMLImageElement");
}

/**
 * @private
 */
export function isHtmlVideoElement(value) {
  return isDomInstance(value, "HTMLVideoElement");
}

/**
 * Returns true when a value can be used as a texture/image source in both
 * main-thread and worker contexts.
 *
 * @private
 */
export function isImageLikeSource(value) {
  if (!defined(value)) {
    return false;
  }

  return (
    typeof value === "string" ||
    isHtmlCanvasElement(value) ||
    (typeof OffscreenCanvas !== "undefined" &&
      value instanceof OffscreenCanvas) ||
    isHtmlImageElement(value) ||
    isHtmlVideoElement(value) ||
    value instanceof ImageData ||
    value instanceof ImageBitmap
  );
}
