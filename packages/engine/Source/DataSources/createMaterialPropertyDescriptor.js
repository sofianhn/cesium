import Color from "../Core/Color.js";
import {
  isHtmlCanvasElement,
  isHtmlVideoElement,
} from "../Core/domElementTypes.js";
import DeveloperError from "../Core/DeveloperError.js";
import Resource from "../Core/Resource.js";
import ColorMaterialProperty from "./ColorMaterialProperty.js";
import createPropertyDescriptor from "./createPropertyDescriptor.js";
import ImageMaterialProperty from "./ImageMaterialProperty.js";

function createMaterialProperty(value) {
  if (value instanceof Color) {
    return new ColorMaterialProperty(value);
  }

  if (
    typeof value === "string" ||
    value instanceof Resource ||
    isHtmlCanvasElement(value) ||
    (typeof OffscreenCanvas !== "undefined" &&
      value instanceof OffscreenCanvas) ||
    isHtmlVideoElement(value) ||
    value instanceof ImageBitmap
  ) {
    const result = new ImageMaterialProperty();
    result.image = value;
    return result;
  }

  //>>includeStart('debug', pragmas.debug);
  throw new DeveloperError(`Unable to infer material type: ${value}`);
  //>>includeEnd('debug');
}

/**
 * @private
 */
function createMaterialPropertyDescriptor(name, configurable) {
  return createPropertyDescriptor(name, configurable, createMaterialProperty);
}
export default createMaterialPropertyDescriptor;
