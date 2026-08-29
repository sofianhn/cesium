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
  AttributeCompression_default
} from "./chunk-COANWERU.js";
import {
  Cartographic_default
} from "./chunk-SSMYIYFJ.js";
import {
  Cartesian3_default
} from "./chunk-LXRGAO5E.js";
import {
  Math_default
} from "./chunk-7PWBMOHW.js";

// packages/engine/Source/Core/decodeVectorPolylinePositions.js
var maxShort = 32767;
var scratchBVCartographic = new Cartographic_default();
var scratchEncodedPosition = new Cartesian3_default();
function decodeVectorPolylinePositions(positions, rectangle, minimumHeight, maximumHeight, ellipsoid) {
  const positionsLength = positions.length / 3;
  const uBuffer = positions.subarray(0, positionsLength);
  const vBuffer = positions.subarray(positionsLength, 2 * positionsLength);
  const heightBuffer = positions.subarray(
    2 * positionsLength,
    3 * positionsLength
  );
  AttributeCompression_default.zigZagDeltaDecode(uBuffer, vBuffer, heightBuffer);
  const decoded = new Float64Array(positions.length);
  for (let i = 0; i < positionsLength; ++i) {
    const u = uBuffer[i];
    const v = vBuffer[i];
    const h = heightBuffer[i];
    const lon = Math_default.lerp(rectangle.west, rectangle.east, u / maxShort);
    const lat = Math_default.lerp(rectangle.south, rectangle.north, v / maxShort);
    const alt = Math_default.lerp(minimumHeight, maximumHeight, h / maxShort);
    const cartographic = Cartographic_default.fromRadians(
      lon,
      lat,
      alt,
      scratchBVCartographic
    );
    const decodedPosition = ellipsoid.cartographicToCartesian(
      cartographic,
      scratchEncodedPosition
    );
    Cartesian3_default.pack(decodedPosition, decoded, i * 3);
  }
  return decoded;
}
var decodeVectorPolylinePositions_default = decodeVectorPolylinePositions;

export {
  decodeVectorPolylinePositions_default
};
