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
  WallOutlineGeometry_default
} from "./chunk-VUOISRSY.js";
import "./chunk-B2CKRAQ7.js";
import "./chunk-MVI7CHK6.js";
import "./chunk-LTCZOISU.js";
import "./chunk-ZQLQQ4N7.js";
import "./chunk-NMOZJIR6.js";
import "./chunk-N3NJBB2J.js";
import "./chunk-5YEYJFVE.js";
import "./chunk-JWT66AFL.js";
import "./chunk-PARVEZOO.js";
import "./chunk-WEONV5TX.js";
import "./chunk-6JN7R5TR.js";
import "./chunk-CQNFIAZU.js";
import "./chunk-GGIBQQ4X.js";
import "./chunk-DYPD7ACK.js";
import "./chunk-6ARPYBNB.js";
import "./chunk-YGFVAGYF.js";
import "./chunk-H3H5G46F.js";
import {
  Ellipsoid_default
} from "./chunk-SSMYIYFJ.js";
import "./chunk-LXRGAO5E.js";
import "./chunk-7PWBMOHW.js";
import "./chunk-FYMTAL37.js";
import {
  defined_default
} from "./chunk-UZL6LXRS.js";
import "./chunk-RV2BMK2J.js";

// packages/engine/Source/Workers/createWallOutlineGeometry.js
function createWallOutlineGeometry(wallGeometry, offset) {
  if (defined_default(offset)) {
    wallGeometry = WallOutlineGeometry_default.unpack(wallGeometry, offset);
  }
  wallGeometry._ellipsoid = Ellipsoid_default.clone(wallGeometry._ellipsoid);
  return WallOutlineGeometry_default.createGeometry(wallGeometry);
}
var createWallOutlineGeometry_default = createWallOutlineGeometry;
export {
  createWallOutlineGeometry_default as default
};
