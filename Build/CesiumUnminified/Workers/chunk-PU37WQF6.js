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
  Check_default
} from "./chunk-FYMTAL37.js";

// packages/engine/Source/Core/srgbToLinear.js
function srgbToLinear(value) {
  Check_default.defined("value", value);
  if (value <= 0.04045) {
    return value * 0.07739938080495357;
  }
  return Math.pow(
    // eslint-disable-next-line no-loss-of-precision
    (value + 0.055) * 0.9478672985781991,
    2.4
  );
}
var srgbToLinear_default = srgbToLinear;

export {
  srgbToLinear_default
};
