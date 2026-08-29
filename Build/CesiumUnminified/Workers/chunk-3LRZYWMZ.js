/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.144.0
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  WebGLConstants_default
} from "./chunk-YGFVAGYF.js";

// packages/engine/Source/Renderer/PixelDatatype.js
var PixelDatatype = {
  UNSIGNED_BYTE: WebGLConstants_default.UNSIGNED_BYTE,
  UNSIGNED_SHORT: WebGLConstants_default.UNSIGNED_SHORT,
  UNSIGNED_INT: WebGLConstants_default.UNSIGNED_INT,
  FLOAT: WebGLConstants_default.FLOAT,
  HALF_FLOAT: WebGLConstants_default.HALF_FLOAT_OES,
  UNSIGNED_INT_24_8: WebGLConstants_default.UNSIGNED_INT_24_8,
  UNSIGNED_SHORT_4_4_4_4: WebGLConstants_default.UNSIGNED_SHORT_4_4_4_4,
  UNSIGNED_SHORT_5_5_5_1: WebGLConstants_default.UNSIGNED_SHORT_5_5_5_1,
  UNSIGNED_SHORT_5_6_5: WebGLConstants_default.UNSIGNED_SHORT_5_6_5
};
PixelDatatype.toWebGLConstant = function(pixelDatatype, context) {
  switch (pixelDatatype) {
    case PixelDatatype.UNSIGNED_BYTE:
      return WebGLConstants_default.UNSIGNED_BYTE;
    case PixelDatatype.UNSIGNED_SHORT:
      return WebGLConstants_default.UNSIGNED_SHORT;
    case PixelDatatype.UNSIGNED_INT:
      return WebGLConstants_default.UNSIGNED_INT;
    case PixelDatatype.FLOAT:
      return WebGLConstants_default.FLOAT;
    case PixelDatatype.HALF_FLOAT:
      return context.webgl2 ? WebGLConstants_default.HALF_FLOAT : WebGLConstants_default.HALF_FLOAT_OES;
    case PixelDatatype.UNSIGNED_INT_24_8:
      return WebGLConstants_default.UNSIGNED_INT_24_8;
    case PixelDatatype.UNSIGNED_SHORT_4_4_4_4:
      return WebGLConstants_default.UNSIGNED_SHORT_4_4_4_4;
    case PixelDatatype.UNSIGNED_SHORT_5_5_5_1:
      return WebGLConstants_default.UNSIGNED_SHORT_5_5_5_1;
    case PixelDatatype.UNSIGNED_SHORT_5_6_5:
      return PixelDatatype.UNSIGNED_SHORT_5_6_5;
  }
};
PixelDatatype.isPacked = function(pixelDatatype) {
  return pixelDatatype === PixelDatatype.UNSIGNED_INT_24_8 || pixelDatatype === PixelDatatype.UNSIGNED_SHORT_4_4_4_4 || pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_5_5_1 || pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_6_5;
};
PixelDatatype.sizeInBytes = function(pixelDatatype) {
  switch (pixelDatatype) {
    case PixelDatatype.UNSIGNED_BYTE:
      return 1;
    case PixelDatatype.UNSIGNED_SHORT:
    case PixelDatatype.UNSIGNED_SHORT_4_4_4_4:
    case PixelDatatype.UNSIGNED_SHORT_5_5_5_1:
    case PixelDatatype.UNSIGNED_SHORT_5_6_5:
    case PixelDatatype.HALF_FLOAT:
      return 2;
    case PixelDatatype.UNSIGNED_INT:
    case PixelDatatype.FLOAT:
    case PixelDatatype.UNSIGNED_INT_24_8:
      return 4;
  }
};
PixelDatatype.validate = function(pixelDatatype) {
  return pixelDatatype === PixelDatatype.UNSIGNED_BYTE || pixelDatatype === PixelDatatype.UNSIGNED_SHORT || pixelDatatype === PixelDatatype.UNSIGNED_INT || pixelDatatype === PixelDatatype.FLOAT || pixelDatatype === PixelDatatype.HALF_FLOAT || pixelDatatype === PixelDatatype.UNSIGNED_INT_24_8 || pixelDatatype === PixelDatatype.UNSIGNED_SHORT_4_4_4_4 || pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_5_5_1 || pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_6_5;
};
PixelDatatype.getTypedArrayConstructor = function(pixelDatatype) {
  const sizeInBytes = PixelDatatype.sizeInBytes(pixelDatatype);
  if (sizeInBytes === Uint8Array.BYTES_PER_ELEMENT) {
    return Uint8Array;
  } else if (sizeInBytes === Uint16Array.BYTES_PER_ELEMENT) {
    return Uint16Array;
  } else if (sizeInBytes === Float32Array.BYTES_PER_ELEMENT && pixelDatatype === PixelDatatype.FLOAT) {
    return Float32Array;
  }
  return Uint32Array;
};
Object.freeze(PixelDatatype);
var PixelDatatype_default = PixelDatatype;

// packages/engine/Source/Core/PixelFormat.js
var PixelFormat = {
  /**
   * A pixel format containing a depth value.
   *
   * @type {number}
   * @constant
   */
  DEPTH_COMPONENT: WebGLConstants_default.DEPTH_COMPONENT,
  /**
   * A pixel format containing a depth and stencil value, most often used with {@link PixelDatatype.UNSIGNED_INT_24_8}.
   *
   * @type {number}
   * @constant
   */
  DEPTH_STENCIL: WebGLConstants_default.DEPTH_STENCIL,
  /**
   * A pixel format containing an alpha channel.
   *
   * @type {number}
   * @constant
   */
  ALPHA: WebGLConstants_default.ALPHA,
  /**
   * A pixel format containing a red channel
   *
   * @type {number}
   * @constant
   */
  RED: WebGLConstants_default.RED,
  /**
   * A pixel format containing red and green channels.
   *
   * @type {number}
   * @constant
   */
  RG: WebGLConstants_default.RG,
  /**
   * A pixel format containing red, green, and blue channels.
   *
   * @type {number}
   * @constant
   */
  RGB: WebGLConstants_default.RGB,
  /**
   * A pixel format containing red, green, blue, and alpha channels.
   *
   * @type {number}
   * @constant
   */
  RGBA: WebGLConstants_default.RGBA,
  /**
   * A pixel format containing a red channel as an integer.
   * @type {number}
   * @constant
   */
  RED_INTEGER: WebGLConstants_default.RED_INTEGER,
  /**
   * A pixel format containing red and green channels as integers.
   * @type {number}
   * @constant
   */
  RG_INTEGER: WebGLConstants_default.RG_INTEGER,
  /**
   * A pixel format containing red, green, and blue channels as integers.
   * @type {number}
   * @constant
   */
  RGB_INTEGER: WebGLConstants_default.RGB_INTEGER,
  /**
   * A pixel format containing red, green, blue, and alpha channels as integers.
   * @type {number}
   * @constant
   */
  RGBA_INTEGER: WebGLConstants_default.RGBA_INTEGER,
  /**
   * A pixel format containing a luminance (intensity) channel.
   *
   * @type {number}
   * @constant
   */
  LUMINANCE: WebGLConstants_default.LUMINANCE,
  /**
   * A pixel format containing luminance (intensity) and alpha channels.
   *
   * @type {number}
   * @constant
   */
  LUMINANCE_ALPHA: WebGLConstants_default.LUMINANCE_ALPHA,
  /**
   * A pixel format containing red, green, and blue channels that is DXT1 compressed.
   *
   * @type {number}
   * @constant
   */
  RGB_DXT1: WebGLConstants_default.COMPRESSED_RGB_S3TC_DXT1_EXT,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is DXT1 compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA_DXT1: WebGLConstants_default.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is DXT3 compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA_DXT3: WebGLConstants_default.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is DXT5 compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA_DXT5: WebGLConstants_default.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  /**
   * A pixel format containing red, green, and blue channels that is PVR 4bpp compressed.
   *
   * @type {number}
   * @constant
   */
  RGB_PVRTC_4BPPV1: WebGLConstants_default.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,
  /**
   * A pixel format containing red, green, and blue channels that is PVR 2bpp compressed.
   *
   * @type {number}
   * @constant
   */
  RGB_PVRTC_2BPPV1: WebGLConstants_default.COMPRESSED_RGB_PVRTC_2BPPV1_IMG,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is PVR 4bpp compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA_PVRTC_4BPPV1: WebGLConstants_default.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is PVR 2bpp compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA_PVRTC_2BPPV1: WebGLConstants_default.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is ASTC compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA_ASTC: WebGLConstants_default.COMPRESSED_RGBA_ASTC_4x4_WEBGL,
  /**
   * A pixel format containing red, green, and blue channels that is ETC1 compressed.
   *
   * @type {number}
   * @constant
   */
  RGB_ETC1: WebGLConstants_default.COMPRESSED_RGB_ETC1_WEBGL,
  /**
   * A pixel format containing red, green, and blue channels that is ETC2 compressed.
   *
   * @type {number}
   * @constant
   */
  RGB8_ETC2: WebGLConstants_default.COMPRESSED_RGB8_ETC2,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is ETC2 compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA8_ETC2_EAC: WebGLConstants_default.COMPRESSED_RGBA8_ETC2_EAC,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is BC7 compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA_BC7: WebGLConstants_default.COMPRESSED_RGBA_BPTC_UNORM
};
PixelFormat.componentsLength = function(pixelFormat) {
  switch (pixelFormat) {
    case PixelFormat.RGB:
    case PixelFormat.RGB_INTEGER:
      return 3;
    case PixelFormat.RGBA:
    case PixelFormat.RGBA_INTEGER:
      return 4;
    case PixelFormat.LUMINANCE_ALPHA:
    case PixelFormat.RG:
    case PixelFormat.RG_INTEGER:
      return 2;
    case PixelFormat.ALPHA:
    case PixelFormat.RED:
    case PixelFormat.RED_INTEGER:
    case PixelFormat.LUMINANCE:
      return 1;
    default:
      return 1;
  }
};
PixelFormat.validate = function(pixelFormat) {
  return pixelFormat === PixelFormat.DEPTH_COMPONENT || pixelFormat === PixelFormat.DEPTH_STENCIL || pixelFormat === PixelFormat.ALPHA || pixelFormat === PixelFormat.RED || pixelFormat === PixelFormat.RG || pixelFormat === PixelFormat.RGB || pixelFormat === PixelFormat.RGBA || pixelFormat === PixelFormat.RED_INTEGER || pixelFormat === PixelFormat.RG_INTEGER || pixelFormat === PixelFormat.RGB_INTEGER || pixelFormat === PixelFormat.RGBA_INTEGER || pixelFormat === PixelFormat.LUMINANCE || pixelFormat === PixelFormat.LUMINANCE_ALPHA || pixelFormat === PixelFormat.RGB_DXT1 || pixelFormat === PixelFormat.RGBA_DXT1 || pixelFormat === PixelFormat.RGBA_DXT3 || pixelFormat === PixelFormat.RGBA_DXT5 || pixelFormat === PixelFormat.RGB_PVRTC_4BPPV1 || pixelFormat === PixelFormat.RGB_PVRTC_2BPPV1 || pixelFormat === PixelFormat.RGBA_PVRTC_4BPPV1 || pixelFormat === PixelFormat.RGBA_PVRTC_2BPPV1 || pixelFormat === PixelFormat.RGBA_ASTC || pixelFormat === PixelFormat.RGB_ETC1 || pixelFormat === PixelFormat.RGB8_ETC2 || pixelFormat === PixelFormat.RGBA8_ETC2_EAC || pixelFormat === PixelFormat.RGBA_BC7;
};
PixelFormat.isColorFormat = function(pixelFormat) {
  return pixelFormat === PixelFormat.RED || pixelFormat === PixelFormat.ALPHA || pixelFormat === PixelFormat.RGB || pixelFormat === PixelFormat.RGBA || pixelFormat === PixelFormat.LUMINANCE || pixelFormat === PixelFormat.LUMINANCE_ALPHA;
};
PixelFormat.isDepthFormat = function(pixelFormat) {
  return pixelFormat === PixelFormat.DEPTH_COMPONENT || pixelFormat === PixelFormat.DEPTH_STENCIL;
};
PixelFormat.isCompressedFormat = function(pixelFormat) {
  return pixelFormat === PixelFormat.RGB_DXT1 || pixelFormat === PixelFormat.RGBA_DXT1 || pixelFormat === PixelFormat.RGBA_DXT3 || pixelFormat === PixelFormat.RGBA_DXT5 || pixelFormat === PixelFormat.RGB_PVRTC_4BPPV1 || pixelFormat === PixelFormat.RGB_PVRTC_2BPPV1 || pixelFormat === PixelFormat.RGBA_PVRTC_4BPPV1 || pixelFormat === PixelFormat.RGBA_PVRTC_2BPPV1 || pixelFormat === PixelFormat.RGBA_ASTC || pixelFormat === PixelFormat.RGB_ETC1 || pixelFormat === PixelFormat.RGB8_ETC2 || pixelFormat === PixelFormat.RGBA8_ETC2_EAC || pixelFormat === PixelFormat.RGBA_BC7;
};
PixelFormat.isDXTFormat = function(pixelFormat) {
  return pixelFormat === PixelFormat.RGB_DXT1 || pixelFormat === PixelFormat.RGBA_DXT1 || pixelFormat === PixelFormat.RGBA_DXT3 || pixelFormat === PixelFormat.RGBA_DXT5;
};
PixelFormat.isPVRTCFormat = function(pixelFormat) {
  return pixelFormat === PixelFormat.RGB_PVRTC_4BPPV1 || pixelFormat === PixelFormat.RGB_PVRTC_2BPPV1 || pixelFormat === PixelFormat.RGBA_PVRTC_4BPPV1 || pixelFormat === PixelFormat.RGBA_PVRTC_2BPPV1;
};
PixelFormat.isASTCFormat = function(pixelFormat) {
  return pixelFormat === PixelFormat.RGBA_ASTC;
};
PixelFormat.isETC1Format = function(pixelFormat) {
  return pixelFormat === PixelFormat.RGB_ETC1;
};
PixelFormat.isETC2Format = function(pixelFormat) {
  return pixelFormat === PixelFormat.RGB8_ETC2 || pixelFormat === PixelFormat.RGBA8_ETC2_EAC;
};
PixelFormat.isBC7Format = function(pixelFormat) {
  return pixelFormat === PixelFormat.RGBA_BC7;
};
PixelFormat.compressedTextureSizeInBytes = function(pixelFormat, width, height) {
  switch (pixelFormat) {
    case PixelFormat.RGB_DXT1:
    case PixelFormat.RGBA_DXT1:
    case PixelFormat.RGB_ETC1:
    case PixelFormat.RGB8_ETC2:
      return Math.floor((width + 3) / 4) * Math.floor((height + 3) / 4) * 8;
    case PixelFormat.RGBA_DXT3:
    case PixelFormat.RGBA_DXT5:
    case PixelFormat.RGBA_ASTC:
    case PixelFormat.RGBA8_ETC2_EAC:
      return Math.floor((width + 3) / 4) * Math.floor((height + 3) / 4) * 16;
    case PixelFormat.RGB_PVRTC_4BPPV1:
    case PixelFormat.RGBA_PVRTC_4BPPV1:
      return Math.floor((Math.max(width, 8) * Math.max(height, 8) * 4 + 7) / 8);
    case PixelFormat.RGB_PVRTC_2BPPV1:
    case PixelFormat.RGBA_PVRTC_2BPPV1:
      return Math.floor(
        (Math.max(width, 16) * Math.max(height, 8) * 2 + 7) / 8
      );
    case PixelFormat.RGBA_BC7:
      return Math.ceil(width / 4) * Math.ceil(height / 4) * 16;
    default:
      return 0;
  }
};
PixelFormat.textureSizeInBytes = function(pixelFormat, pixelDatatype, width, height) {
  let componentsLength = PixelFormat.componentsLength(pixelFormat);
  if (PixelDatatype_default.isPacked(pixelDatatype)) {
    componentsLength = 1;
  }
  return componentsLength * PixelDatatype_default.sizeInBytes(pixelDatatype) * width * height;
};
PixelFormat.texture3DSizeInBytes = function(pixelFormat, pixelDatatype, width, height, depth) {
  let componentsLength = PixelFormat.componentsLength(pixelFormat);
  if (PixelDatatype_default.isPacked(pixelDatatype)) {
    componentsLength = 1;
  }
  return componentsLength * PixelDatatype_default.sizeInBytes(pixelDatatype) * width * height * depth;
};
PixelFormat.alignmentInBytes = function(pixelFormat, pixelDatatype, width) {
  const mod = PixelFormat.textureSizeInBytes(pixelFormat, pixelDatatype, width, 1) % 4;
  return mod === 0 ? 4 : mod === 2 ? 2 : 1;
};
PixelFormat.createTypedArray = function(pixelFormat, pixelDatatype, width, height) {
  const constructor = PixelDatatype_default.getTypedArrayConstructor(pixelDatatype);
  const size = PixelFormat.componentsLength(pixelFormat) * width * height;
  return new constructor(size);
};
PixelFormat.flipY = function(bufferView, pixelFormat, pixelDatatype, width, height) {
  if (height === 1) {
    return bufferView;
  }
  const flipped = PixelFormat.createTypedArray(
    pixelFormat,
    pixelDatatype,
    width,
    height
  );
  const numberOfComponents = PixelFormat.componentsLength(pixelFormat);
  const textureWidth = width * numberOfComponents;
  for (let i = 0; i < height; ++i) {
    const row = i * width * numberOfComponents;
    const flippedRow = (height - i - 1) * width * numberOfComponents;
    for (let j = 0; j < textureWidth; ++j) {
      flipped[flippedRow + j] = bufferView[row + j];
    }
  }
  return flipped;
};
PixelFormat.toInternalFormat = function(pixelFormat, pixelDatatype, context) {
  if (!context.webgl2) {
    return pixelFormat;
  }
  if (pixelFormat === PixelFormat.DEPTH_STENCIL) {
    return WebGLConstants_default.DEPTH24_STENCIL8;
  }
  if (pixelFormat === PixelFormat.DEPTH_COMPONENT) {
    if (pixelDatatype === PixelDatatype_default.UNSIGNED_SHORT) {
      return WebGLConstants_default.DEPTH_COMPONENT16;
    } else if (pixelDatatype === PixelDatatype_default.UNSIGNED_INT) {
      return WebGLConstants_default.DEPTH_COMPONENT24;
    }
  }
  if (pixelDatatype === PixelDatatype_default.FLOAT) {
    switch (pixelFormat) {
      case PixelFormat.RGBA:
        return WebGLConstants_default.RGBA32F;
      case PixelFormat.RGB:
        return WebGLConstants_default.RGB32F;
      case PixelFormat.RG:
        return WebGLConstants_default.RG32F;
      case PixelFormat.RED:
        return WebGLConstants_default.R32F;
    }
  }
  if (pixelDatatype === PixelDatatype_default.HALF_FLOAT) {
    switch (pixelFormat) {
      case PixelFormat.RGBA:
        return WebGLConstants_default.RGBA16F;
      case PixelFormat.RGB:
        return WebGLConstants_default.RGB16F;
      case PixelFormat.RG:
        return WebGLConstants_default.RG16F;
      case PixelFormat.RED:
        return WebGLConstants_default.R16F;
    }
  }
  if (pixelDatatype === PixelDatatype_default.UNSIGNED_BYTE) {
    switch (pixelFormat) {
      case PixelFormat.RGBA:
        return WebGLConstants_default.RGBA8;
      case PixelFormat.RGB:
        return WebGLConstants_default.RGB8;
      case PixelFormat.RG:
        return WebGLConstants_default.RG8;
      case PixelFormat.RED:
        return WebGLConstants_default.R8;
    }
  }
  if (pixelDatatype === PixelDatatype_default.INT) {
    switch (pixelFormat) {
      case PixelFormat.RGBA_INTEGER:
        return WebGLConstants_default.RGBA32I;
      case PixelFormat.RGB_INTEGER:
        return WebGLConstants_default.RGB32I;
      case PixelFormat.RG_INTEGER:
        return WebGLConstants_default.RG32I;
      case PixelFormat.RED_INTEGER:
        return WebGLConstants_default.R32I;
    }
  }
  if (pixelDatatype === PixelDatatype_default.UNSIGNED_INT) {
    switch (pixelFormat) {
      case PixelFormat.RGBA_INTEGER:
        return WebGLConstants_default.RGBA32UI;
      case PixelFormat.RGB_INTEGER:
        return WebGLConstants_default.RGB32UI;
      case PixelFormat.RG_INTEGER:
        return WebGLConstants_default.RG32UI;
      case PixelFormat.RED_INTEGER:
        return WebGLConstants_default.R32UI;
    }
  }
  return pixelFormat;
};
Object.freeze(PixelFormat);
var PixelFormat_default = PixelFormat;

// packages/engine/Source/Core/VulkanConstants.js
var VulkanConstants = {
  VK_FORMAT_UNDEFINED: 0,
  VK_FORMAT_R4G4_UNORM_PACK8: 1,
  VK_FORMAT_R4G4B4A4_UNORM_PACK16: 2,
  VK_FORMAT_B4G4R4A4_UNORM_PACK16: 3,
  VK_FORMAT_R5G6B5_UNORM_PACK16: 4,
  VK_FORMAT_B5G6R5_UNORM_PACK16: 5,
  VK_FORMAT_R5G5B5A1_UNORM_PACK16: 6,
  VK_FORMAT_B5G5R5A1_UNORM_PACK16: 7,
  VK_FORMAT_A1R5G5B5_UNORM_PACK16: 8,
  VK_FORMAT_R8_UNORM: 9,
  VK_FORMAT_R8_SNORM: 10,
  VK_FORMAT_R8_USCALED: 11,
  VK_FORMAT_R8_SSCALED: 12,
  VK_FORMAT_R8_UINT: 13,
  VK_FORMAT_R8_SINT: 14,
  VK_FORMAT_R8_SRGB: 15,
  VK_FORMAT_R8G8_UNORM: 16,
  VK_FORMAT_R8G8_SNORM: 17,
  VK_FORMAT_R8G8_USCALED: 18,
  VK_FORMAT_R8G8_SSCALED: 19,
  VK_FORMAT_R8G8_UINT: 20,
  VK_FORMAT_R8G8_SINT: 21,
  VK_FORMAT_R8G8_SRGB: 22,
  VK_FORMAT_R8G8B8_UNORM: 23,
  VK_FORMAT_R8G8B8_SNORM: 24,
  VK_FORMAT_R8G8B8_USCALED: 25,
  VK_FORMAT_R8G8B8_SSCALED: 26,
  VK_FORMAT_R8G8B8_UINT: 27,
  VK_FORMAT_R8G8B8_SINT: 28,
  VK_FORMAT_R8G8B8_SRGB: 29,
  VK_FORMAT_B8G8R8_UNORM: 30,
  VK_FORMAT_B8G8R8_SNORM: 31,
  VK_FORMAT_B8G8R8_USCALED: 32,
  VK_FORMAT_B8G8R8_SSCALED: 33,
  VK_FORMAT_B8G8R8_UINT: 34,
  VK_FORMAT_B8G8R8_SINT: 35,
  VK_FORMAT_B8G8R8_SRGB: 36,
  VK_FORMAT_R8G8B8A8_UNORM: 37,
  VK_FORMAT_R8G8B8A8_SNORM: 38,
  VK_FORMAT_R8G8B8A8_USCALED: 39,
  VK_FORMAT_R8G8B8A8_SSCALED: 40,
  VK_FORMAT_R8G8B8A8_UINT: 41,
  VK_FORMAT_R8G8B8A8_SINT: 42,
  VK_FORMAT_R8G8B8A8_SRGB: 43,
  VK_FORMAT_B8G8R8A8_UNORM: 44,
  VK_FORMAT_B8G8R8A8_SNORM: 45,
  VK_FORMAT_B8G8R8A8_USCALED: 46,
  VK_FORMAT_B8G8R8A8_SSCALED: 47,
  VK_FORMAT_B8G8R8A8_UINT: 48,
  VK_FORMAT_B8G8R8A8_SINT: 49,
  VK_FORMAT_B8G8R8A8_SRGB: 50,
  VK_FORMAT_A8B8G8R8_UNORM_PACK32: 51,
  VK_FORMAT_A8B8G8R8_SNORM_PACK32: 52,
  VK_FORMAT_A8B8G8R8_USCALED_PACK32: 53,
  VK_FORMAT_A8B8G8R8_SSCALED_PACK32: 54,
  VK_FORMAT_A8B8G8R8_UINT_PACK32: 55,
  VK_FORMAT_A8B8G8R8_SINT_PACK32: 56,
  VK_FORMAT_A8B8G8R8_SRGB_PACK32: 57,
  VK_FORMAT_A2R10G10B10_UNORM_PACK32: 58,
  VK_FORMAT_A2R10G10B10_SNORM_PACK32: 59,
  VK_FORMAT_A2R10G10B10_USCALED_PACK32: 60,
  VK_FORMAT_A2R10G10B10_SSCALED_PACK32: 61,
  VK_FORMAT_A2R10G10B10_UINT_PACK32: 62,
  VK_FORMAT_A2R10G10B10_SINT_PACK32: 63,
  VK_FORMAT_A2B10G10R10_UNORM_PACK32: 64,
  VK_FORMAT_A2B10G10R10_SNORM_PACK32: 65,
  VK_FORMAT_A2B10G10R10_USCALED_PACK32: 66,
  VK_FORMAT_A2B10G10R10_SSCALED_PACK32: 67,
  VK_FORMAT_A2B10G10R10_UINT_PACK32: 68,
  VK_FORMAT_A2B10G10R10_SINT_PACK32: 69,
  VK_FORMAT_R16_UNORM: 70,
  VK_FORMAT_R16_SNORM: 71,
  VK_FORMAT_R16_USCALED: 72,
  VK_FORMAT_R16_SSCALED: 73,
  VK_FORMAT_R16_UINT: 74,
  VK_FORMAT_R16_SINT: 75,
  VK_FORMAT_R16_SFLOAT: 76,
  VK_FORMAT_R16G16_UNORM: 77,
  VK_FORMAT_R16G16_SNORM: 78,
  VK_FORMAT_R16G16_USCALED: 79,
  VK_FORMAT_R16G16_SSCALED: 80,
  VK_FORMAT_R16G16_UINT: 81,
  VK_FORMAT_R16G16_SINT: 82,
  VK_FORMAT_R16G16_SFLOAT: 83,
  VK_FORMAT_R16G16B16_UNORM: 84,
  VK_FORMAT_R16G16B16_SNORM: 85,
  VK_FORMAT_R16G16B16_USCALED: 86,
  VK_FORMAT_R16G16B16_SSCALED: 87,
  VK_FORMAT_R16G16B16_UINT: 88,
  VK_FORMAT_R16G16B16_SINT: 89,
  VK_FORMAT_R16G16B16_SFLOAT: 90,
  VK_FORMAT_R16G16B16A16_UNORM: 91,
  VK_FORMAT_R16G16B16A16_SNORM: 92,
  VK_FORMAT_R16G16B16A16_USCALED: 93,
  VK_FORMAT_R16G16B16A16_SSCALED: 94,
  VK_FORMAT_R16G16B16A16_UINT: 95,
  VK_FORMAT_R16G16B16A16_SINT: 96,
  VK_FORMAT_R16G16B16A16_SFLOAT: 97,
  VK_FORMAT_R32_UINT: 98,
  VK_FORMAT_R32_SINT: 99,
  VK_FORMAT_R32_SFLOAT: 100,
  VK_FORMAT_R32G32_UINT: 101,
  VK_FORMAT_R32G32_SINT: 102,
  VK_FORMAT_R32G32_SFLOAT: 103,
  VK_FORMAT_R32G32B32_UINT: 104,
  VK_FORMAT_R32G32B32_SINT: 105,
  VK_FORMAT_R32G32B32_SFLOAT: 106,
  VK_FORMAT_R32G32B32A32_UINT: 107,
  VK_FORMAT_R32G32B32A32_SINT: 108,
  VK_FORMAT_R32G32B32A32_SFLOAT: 109,
  VK_FORMAT_R64_UINT: 110,
  VK_FORMAT_R64_SINT: 111,
  VK_FORMAT_R64_SFLOAT: 112,
  VK_FORMAT_R64G64_UINT: 113,
  VK_FORMAT_R64G64_SINT: 114,
  VK_FORMAT_R64G64_SFLOAT: 115,
  VK_FORMAT_R64G64B64_UINT: 116,
  VK_FORMAT_R64G64B64_SINT: 117,
  VK_FORMAT_R64G64B64_SFLOAT: 118,
  VK_FORMAT_R64G64B64A64_UINT: 119,
  VK_FORMAT_R64G64B64A64_SINT: 120,
  VK_FORMAT_R64G64B64A64_SFLOAT: 121,
  VK_FORMAT_B10G11R11_UFLOAT_PACK32: 122,
  VK_FORMAT_E5B9G9R9_UFLOAT_PACK32: 123,
  VK_FORMAT_D16_UNORM: 124,
  VK_FORMAT_X8_D24_UNORM_PACK32: 125,
  VK_FORMAT_D32_SFLOAT: 126,
  VK_FORMAT_S8_UINT: 127,
  VK_FORMAT_D16_UNORM_S8_UINT: 128,
  VK_FORMAT_D24_UNORM_S8_UINT: 129,
  VK_FORMAT_D32_SFLOAT_S8_UINT: 130,
  VK_FORMAT_BC1_RGB_UNORM_BLOCK: 131,
  VK_FORMAT_BC1_RGB_SRGB_BLOCK: 132,
  VK_FORMAT_BC1_RGBA_UNORM_BLOCK: 133,
  VK_FORMAT_BC1_RGBA_SRGB_BLOCK: 134,
  VK_FORMAT_BC2_UNORM_BLOCK: 135,
  VK_FORMAT_BC2_SRGB_BLOCK: 136,
  VK_FORMAT_BC3_UNORM_BLOCK: 137,
  VK_FORMAT_BC3_SRGB_BLOCK: 138,
  VK_FORMAT_BC4_UNORM_BLOCK: 139,
  VK_FORMAT_BC4_SNORM_BLOCK: 140,
  VK_FORMAT_BC5_UNORM_BLOCK: 141,
  VK_FORMAT_BC5_SNORM_BLOCK: 142,
  VK_FORMAT_BC6H_UFLOAT_BLOCK: 143,
  VK_FORMAT_BC6H_SFLOAT_BLOCK: 144,
  VK_FORMAT_BC7_UNORM_BLOCK: 145,
  VK_FORMAT_BC7_SRGB_BLOCK: 146,
  VK_FORMAT_ETC2_R8G8B8_UNORM_BLOCK: 147,
  VK_FORMAT_ETC2_R8G8B8_SRGB_BLOCK: 148,
  VK_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK: 149,
  VK_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK: 150,
  VK_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK: 151,
  VK_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK: 152,
  VK_FORMAT_EAC_R11_UNORM_BLOCK: 153,
  VK_FORMAT_EAC_R11_SNORM_BLOCK: 154,
  VK_FORMAT_EAC_R11G11_UNORM_BLOCK: 155,
  VK_FORMAT_EAC_R11G11_SNORM_BLOCK: 156,
  VK_FORMAT_ASTC_4x4_UNORM_BLOCK: 157,
  VK_FORMAT_ASTC_4x4_SRGB_BLOCK: 158,
  VK_FORMAT_ASTC_5x4_UNORM_BLOCK: 159,
  VK_FORMAT_ASTC_5x4_SRGB_BLOCK: 160,
  VK_FORMAT_ASTC_5x5_UNORM_BLOCK: 161,
  VK_FORMAT_ASTC_5x5_SRGB_BLOCK: 162,
  VK_FORMAT_ASTC_6x5_UNORM_BLOCK: 163,
  VK_FORMAT_ASTC_6x5_SRGB_BLOCK: 164,
  VK_FORMAT_ASTC_6x6_UNORM_BLOCK: 165,
  VK_FORMAT_ASTC_6x6_SRGB_BLOCK: 166,
  VK_FORMAT_ASTC_8x5_UNORM_BLOCK: 167,
  VK_FORMAT_ASTC_8x5_SRGB_BLOCK: 168,
  VK_FORMAT_ASTC_8x6_UNORM_BLOCK: 169,
  VK_FORMAT_ASTC_8x6_SRGB_BLOCK: 170,
  VK_FORMAT_ASTC_8x8_UNORM_BLOCK: 171,
  VK_FORMAT_ASTC_8x8_SRGB_BLOCK: 172,
  VK_FORMAT_ASTC_10x5_UNORM_BLOCK: 173,
  VK_FORMAT_ASTC_10x5_SRGB_BLOCK: 174,
  VK_FORMAT_ASTC_10x6_UNORM_BLOCK: 175,
  VK_FORMAT_ASTC_10x6_SRGB_BLOCK: 176,
  VK_FORMAT_ASTC_10x8_UNORM_BLOCK: 177,
  VK_FORMAT_ASTC_10x8_SRGB_BLOCK: 178,
  VK_FORMAT_ASTC_10x10_UNORM_BLOCK: 179,
  VK_FORMAT_ASTC_10x10_SRGB_BLOCK: 180,
  VK_FORMAT_ASTC_12x10_UNORM_BLOCK: 181,
  VK_FORMAT_ASTC_12x10_SRGB_BLOCK: 182,
  VK_FORMAT_ASTC_12x12_UNORM_BLOCK: 183,
  VK_FORMAT_ASTC_12x12_SRGB_BLOCK: 184,
  VK_FORMAT_G8B8G8R8_422_UNORM: 1000156e3,
  VK_FORMAT_B8G8R8G8_422_UNORM: 1000156001,
  VK_FORMAT_G8_B8_R8_3PLANE_420_UNORM: 1000156002,
  VK_FORMAT_G8_B8R8_2PLANE_420_UNORM: 1000156003,
  VK_FORMAT_G8_B8_R8_3PLANE_422_UNORM: 1000156004,
  VK_FORMAT_G8_B8R8_2PLANE_422_UNORM: 1000156005,
  VK_FORMAT_G8_B8_R8_3PLANE_444_UNORM: 1000156006,
  VK_FORMAT_R10X6_UNORM_PACK16: 1000156007,
  VK_FORMAT_R10X6G10X6_UNORM_2PACK16: 1000156008,
  VK_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16: 1000156009,
  VK_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16: 1000156010,
  VK_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16: 1000156011,
  VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16: 1000156012,
  VK_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16: 1000156013,
  VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16: 1000156014,
  VK_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16: 1000156015,
  VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16: 1000156016,
  VK_FORMAT_R12X4_UNORM_PACK16: 1000156017,
  VK_FORMAT_R12X4G12X4_UNORM_2PACK16: 1000156018,
  VK_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16: 1000156019,
  VK_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16: 1000156020,
  VK_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16: 1000156021,
  VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16: 1000156022,
  VK_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16: 1000156023,
  VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16: 1000156024,
  VK_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16: 1000156025,
  VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16: 1000156026,
  VK_FORMAT_G16B16G16R16_422_UNORM: 1000156027,
  VK_FORMAT_B16G16R16G16_422_UNORM: 1000156028,
  VK_FORMAT_G16_B16_R16_3PLANE_420_UNORM: 1000156029,
  VK_FORMAT_G16_B16R16_2PLANE_420_UNORM: 1000156030,
  VK_FORMAT_G16_B16_R16_3PLANE_422_UNORM: 1000156031,
  VK_FORMAT_G16_B16R16_2PLANE_422_UNORM: 1000156032,
  VK_FORMAT_G16_B16_R16_3PLANE_444_UNORM: 1000156033,
  VK_FORMAT_PVRTC1_2BPP_UNORM_BLOCK_IMG: 1000054e3,
  VK_FORMAT_PVRTC1_4BPP_UNORM_BLOCK_IMG: 1000054001,
  VK_FORMAT_PVRTC2_2BPP_UNORM_BLOCK_IMG: 1000054002,
  VK_FORMAT_PVRTC2_4BPP_UNORM_BLOCK_IMG: 1000054003,
  VK_FORMAT_PVRTC1_2BPP_SRGB_BLOCK_IMG: 1000054004,
  VK_FORMAT_PVRTC1_4BPP_SRGB_BLOCK_IMG: 1000054005,
  VK_FORMAT_PVRTC2_2BPP_SRGB_BLOCK_IMG: 1000054006,
  VK_FORMAT_PVRTC2_4BPP_SRGB_BLOCK_IMG: 1000054007,
  VK_FORMAT_ASTC_4x4_SFLOAT_BLOCK_EXT: 1000066e3,
  VK_FORMAT_ASTC_5x4_SFLOAT_BLOCK_EXT: 1000066001,
  VK_FORMAT_ASTC_5x5_SFLOAT_BLOCK_EXT: 1000066002,
  VK_FORMAT_ASTC_6x5_SFLOAT_BLOCK_EXT: 1000066003,
  VK_FORMAT_ASTC_6x6_SFLOAT_BLOCK_EXT: 1000066004,
  VK_FORMAT_ASTC_8x5_SFLOAT_BLOCK_EXT: 1000066005,
  VK_FORMAT_ASTC_8x6_SFLOAT_BLOCK_EXT: 1000066006,
  VK_FORMAT_ASTC_8x8_SFLOAT_BLOCK_EXT: 1000066007,
  VK_FORMAT_ASTC_10x5_SFLOAT_BLOCK_EXT: 1000066008,
  VK_FORMAT_ASTC_10x6_SFLOAT_BLOCK_EXT: 1000066009,
  VK_FORMAT_ASTC_10x8_SFLOAT_BLOCK_EXT: 1000066010,
  VK_FORMAT_ASTC_10x10_SFLOAT_BLOCK_EXT: 1000066011,
  VK_FORMAT_ASTC_12x10_SFLOAT_BLOCK_EXT: 1000066012,
  VK_FORMAT_ASTC_12x12_SFLOAT_BLOCK_EXT: 1000066013,
  VK_FORMAT_G8B8G8R8_422_UNORM_KHR: 1000156e3,
  VK_FORMAT_B8G8R8G8_422_UNORM_KHR: 1000156001,
  VK_FORMAT_G8_B8_R8_3PLANE_420_UNORM_KHR: 1000156002,
  VK_FORMAT_G8_B8R8_2PLANE_420_UNORM_KHR: 1000156003,
  VK_FORMAT_G8_B8_R8_3PLANE_422_UNORM_KHR: 1000156004,
  VK_FORMAT_G8_B8R8_2PLANE_422_UNORM_KHR: 1000156005,
  VK_FORMAT_G8_B8_R8_3PLANE_444_UNORM_KHR: 1000156006,
  VK_FORMAT_R10X6_UNORM_PACK16_KHR: 1000156007,
  VK_FORMAT_R10X6G10X6_UNORM_2PACK16_KHR: 1000156008,
  VK_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16_KHR: 1000156009,
  VK_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16_KHR: 1000156010,
  VK_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16_KHR: 1000156011,
  VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16_KHR: 1000156012,
  VK_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16_KHR: 1000156013,
  VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16_KHR: 1000156014,
  VK_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16_KHR: 1000156015,
  VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16_KHR: 1000156016,
  VK_FORMAT_R12X4_UNORM_PACK16_KHR: 1000156017,
  VK_FORMAT_R12X4G12X4_UNORM_2PACK16_KHR: 1000156018,
  VK_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16_KHR: 1000156019,
  VK_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16_KHR: 1000156020,
  VK_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16_KHR: 1000156021,
  VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16_KHR: 1000156022,
  VK_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16_KHR: 1000156023,
  VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16_KHR: 1000156024,
  VK_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16_KHR: 1000156025,
  VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16_KHR: 1000156026,
  VK_FORMAT_G16B16G16R16_422_UNORM_KHR: 1000156027,
  VK_FORMAT_B16G16R16G16_422_UNORM_KHR: 1000156028,
  VK_FORMAT_G16_B16_R16_3PLANE_420_UNORM_KHR: 1000156029,
  VK_FORMAT_G16_B16R16_2PLANE_420_UNORM_KHR: 1000156030,
  VK_FORMAT_G16_B16_R16_3PLANE_422_UNORM_KHR: 1000156031,
  VK_FORMAT_G16_B16R16_2PLANE_422_UNORM_KHR: 1000156032,
  VK_FORMAT_G16_B16_R16_3PLANE_444_UNORM_KHR: 1000156033
};
Object.freeze(VulkanConstants);
var VulkanConstants_default = VulkanConstants;

export {
  PixelDatatype_default,
  PixelFormat_default,
  VulkanConstants_default
};
