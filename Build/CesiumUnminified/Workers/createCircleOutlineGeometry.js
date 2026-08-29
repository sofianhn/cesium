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
  CircleOutlineGeometry_default
} from "./chunk-ZORVAJUW.js";
import "./chunk-YP3TOQD4.js";
import "./chunk-JO3NA5NS.js";
import "./chunk-SXSP3JHS.js";
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
import {
  Cartesian3_default
} from "./chunk-LXRGAO5E.js";
import "./chunk-7PWBMOHW.js";
import "./chunk-FYMTAL37.js";
import {
  defined_default
} from "./chunk-UZL6LXRS.js";
import "./chunk-RV2BMK2J.js";

// packages/engine/Source/Workers/createCircleOutlineGeometry.js
function createCircleOutlineGeometry(circleGeometry, offset) {
  if (defined_default(offset)) {
    circleGeometry = CircleOutlineGeometry_default.unpack(circleGeometry, offset);
  }
  circleGeometry._ellipseGeometry._center = Cartesian3_default.clone(
    circleGeometry._ellipseGeometry._center
  );
  circleGeometry._ellipseGeometry._ellipsoid = Ellipsoid_default.clone(
    circleGeometry._ellipseGeometry._ellipsoid
  );
  return CircleOutlineGeometry_default.createGeometry(circleGeometry);
}
var createCircleOutlineGeometry_default = createCircleOutlineGeometry;
export {
  createCircleOutlineGeometry_default as default
};
