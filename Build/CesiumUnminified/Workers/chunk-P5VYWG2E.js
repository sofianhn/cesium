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
  RuntimeError_default
} from "./chunk-H3H5G46F.js";
import {
  Check_default
} from "./chunk-FYMTAL37.js";
import {
  defined_default
} from "./chunk-UZL6LXRS.js";

// packages/engine/Source/Core/isBitSet.js
function isBitSet(bits, mask) {
  return (bits & mask) !== 0;
}
var isBitSet_default = isBitSet;

// packages/engine/Source/Core/GoogleEarthEnterpriseTileInformation.js
var childrenBitmasks = [1, 2, 4, 8];
var anyChildBitmask = 15;
var cacheFlagBitmask = 16;
var imageBitmask = 64;
var terrainBitmask = 128;
function GoogleEarthEnterpriseTileInformation(bits, cnodeVersion, imageryVersion, terrainVersion, imageryProvider, terrainProvider) {
  this._bits = bits;
  this.cnodeVersion = cnodeVersion;
  this.imageryVersion = imageryVersion;
  this.terrainVersion = terrainVersion;
  this.imageryProvider = imageryProvider;
  this.terrainProvider = terrainProvider;
  this.ancestorHasTerrain = false;
  this.terrainState = void 0;
}
GoogleEarthEnterpriseTileInformation.clone = function(info, result) {
  if (!defined_default(result)) {
    result = new GoogleEarthEnterpriseTileInformation(
      info._bits,
      info.cnodeVersion,
      info.imageryVersion,
      info.terrainVersion,
      info.imageryProvider,
      info.terrainProvider
    );
  } else {
    result._bits = info._bits;
    result.cnodeVersion = info.cnodeVersion;
    result.imageryVersion = info.imageryVersion;
    result.terrainVersion = info.terrainVersion;
    result.imageryProvider = info.imageryProvider;
    result.terrainProvider = info.terrainProvider;
  }
  result.ancestorHasTerrain = info.ancestorHasTerrain;
  result.terrainState = info.terrainState;
  return result;
};
GoogleEarthEnterpriseTileInformation.prototype.setParent = function(parent) {
  this.ancestorHasTerrain = parent.ancestorHasTerrain || this.hasTerrain();
};
GoogleEarthEnterpriseTileInformation.prototype.hasSubtree = function() {
  return isBitSet_default(this._bits, cacheFlagBitmask);
};
GoogleEarthEnterpriseTileInformation.prototype.hasImagery = function() {
  return isBitSet_default(this._bits, imageBitmask);
};
GoogleEarthEnterpriseTileInformation.prototype.hasTerrain = function() {
  return isBitSet_default(this._bits, terrainBitmask);
};
GoogleEarthEnterpriseTileInformation.prototype.hasChildren = function() {
  return isBitSet_default(this._bits, anyChildBitmask);
};
GoogleEarthEnterpriseTileInformation.prototype.hasChild = function(index) {
  return isBitSet_default(this._bits, childrenBitmasks[index]);
};
GoogleEarthEnterpriseTileInformation.prototype.getChildBitmask = function() {
  return this._bits & anyChildBitmask;
};
var GoogleEarthEnterpriseTileInformation_default = GoogleEarthEnterpriseTileInformation;

// packages/engine/Source/Core/decodeGoogleEarthEnterpriseData.js
var compressedMagic = 1953029805;
var compressedMagicSwap = 2917034100;
function decodeGoogleEarthEnterpriseData(key, data) {
  if (decodeGoogleEarthEnterpriseData.passThroughDataForTesting) {
    return data;
  }
  Check_default.typeOf.object("key", key);
  Check_default.typeOf.object("data", data);
  const keyLength = key.byteLength;
  if (keyLength === 0 || keyLength % 4 !== 0) {
    throw new RuntimeError_default(
      "The length of key must be greater than 0 and a multiple of 4."
    );
  }
  const dataView = new DataView(data);
  const magic = dataView.getUint32(0, true);
  if (magic === compressedMagic || magic === compressedMagicSwap) {
    return data;
  }
  const keyView = new DataView(key);
  let dp = 0;
  const dpend = data.byteLength;
  const dpend64 = dpend - dpend % 8;
  const kpend = keyLength;
  let kp;
  let off = 8;
  while (dp < dpend64) {
    off = (off + 8) % 24;
    kp = off;
    while (dp < dpend64 && kp < kpend) {
      dataView.setUint32(
        dp,
        dataView.getUint32(dp, true) ^ keyView.getUint32(kp, true),
        true
      );
      dataView.setUint32(
        dp + 4,
        dataView.getUint32(dp + 4, true) ^ keyView.getUint32(kp + 4, true),
        true
      );
      dp += 8;
      kp += 24;
    }
  }
  if (dp < dpend) {
    if (kp >= kpend) {
      off = (off + 8) % 24;
      kp = off;
    }
    while (dp < dpend) {
      dataView.setUint8(dp, dataView.getUint8(dp) ^ keyView.getUint8(kp));
      dp++;
      kp++;
    }
  }
}
decodeGoogleEarthEnterpriseData.passThroughDataForTesting = false;
var decodeGoogleEarthEnterpriseData_default = decodeGoogleEarthEnterpriseData;

export {
  GoogleEarthEnterpriseTileInformation_default,
  decodeGoogleEarthEnterpriseData_default
};
