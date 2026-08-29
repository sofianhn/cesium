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
  RectangleOutlineGeometry_default
} from "./chunk-5AVVL6SO.js";
import "./chunk-XNXS47OW.js";
import "./chunk-SXSP3JHS.js";
import "./chunk-ZG36RVXV.js";
import "./chunk-NMOZJIR6.js";
import "./chunk-JWT66AFL.js";
import "./chunk-PARVEZOO.js";
import "./chunk-WEONV5TX.js";
import "./chunk-6JN7R5TR.js";
import "./chunk-CQNFIAZU.js";
import {
  Rectangle_default
} from "./chunk-GGIBQQ4X.js";
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

// packages/engine/Source/Workers/createRectangleOutlineGeometry.js
function createRectangleOutlineGeometry(rectangleGeometry, offset) {
  if (defined_default(offset)) {
    rectangleGeometry = RectangleOutlineGeometry_default.unpack(
      rectangleGeometry,
      offset
    );
  }
  rectangleGeometry._ellipsoid = Ellipsoid_default.clone(rectangleGeometry._ellipsoid);
  rectangleGeometry._rectangle = Rectangle_default.clone(rectangleGeometry._rectangle);
  return RectangleOutlineGeometry_default.createGeometry(rectangleGeometry);
}
var createRectangleOutlineGeometry_default = createRectangleOutlineGeometry;
export {
  createRectangleOutlineGeometry_default as default
};
