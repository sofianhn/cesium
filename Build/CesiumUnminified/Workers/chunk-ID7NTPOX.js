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
  Cartesian2_default
} from "./chunk-SSMYIYFJ.js";
import {
  Cartesian3_default
} from "./chunk-LXRGAO5E.js";
import {
  Check_default,
  DeveloperError_default
} from "./chunk-FYMTAL37.js";
import {
  defined_default
} from "./chunk-UZL6LXRS.js";

// packages/engine/Source/Core/Intersections2D.js
var Intersections2D = {};
Intersections2D.clipTriangleAtAxisAlignedThreshold = function(threshold, keepAbove, u0, u1, u2, result) {
  if (!defined_default(threshold)) {
    throw new DeveloperError_default("threshold is required.");
  }
  if (!defined_default(keepAbove)) {
    throw new DeveloperError_default("keepAbove is required.");
  }
  if (!defined_default(u0)) {
    throw new DeveloperError_default("u0 is required.");
  }
  if (!defined_default(u1)) {
    throw new DeveloperError_default("u1 is required.");
  }
  if (!defined_default(u2)) {
    throw new DeveloperError_default("u2 is required.");
  }
  if (!defined_default(result)) {
    result = [];
  } else {
    result.length = 0;
  }
  let u0Behind;
  let u1Behind;
  let u2Behind;
  if (keepAbove) {
    u0Behind = u0 < threshold;
    u1Behind = u1 < threshold;
    u2Behind = u2 < threshold;
  } else {
    u0Behind = u0 > threshold;
    u1Behind = u1 > threshold;
    u2Behind = u2 > threshold;
  }
  const numBehind = u0Behind + u1Behind + u2Behind;
  let u01Ratio;
  let u02Ratio;
  let u12Ratio;
  let u10Ratio;
  let u20Ratio;
  let u21Ratio;
  if (numBehind === 1) {
    if (u0Behind) {
      u01Ratio = (threshold - u0) / (u1 - u0);
      u02Ratio = (threshold - u0) / (u2 - u0);
      result.push(1);
      result.push(2);
      if (u02Ratio !== 1) {
        result.push(-1);
        result.push(0);
        result.push(2);
        result.push(u02Ratio);
      }
      if (u01Ratio !== 1) {
        result.push(-1);
        result.push(0);
        result.push(1);
        result.push(u01Ratio);
      }
    } else if (u1Behind) {
      u12Ratio = (threshold - u1) / (u2 - u1);
      u10Ratio = (threshold - u1) / (u0 - u1);
      result.push(2);
      result.push(0);
      if (u10Ratio !== 1) {
        result.push(-1);
        result.push(1);
        result.push(0);
        result.push(u10Ratio);
      }
      if (u12Ratio !== 1) {
        result.push(-1);
        result.push(1);
        result.push(2);
        result.push(u12Ratio);
      }
    } else if (u2Behind) {
      u20Ratio = (threshold - u2) / (u0 - u2);
      u21Ratio = (threshold - u2) / (u1 - u2);
      result.push(0);
      result.push(1);
      if (u21Ratio !== 1) {
        result.push(-1);
        result.push(2);
        result.push(1);
        result.push(u21Ratio);
      }
      if (u20Ratio !== 1) {
        result.push(-1);
        result.push(2);
        result.push(0);
        result.push(u20Ratio);
      }
    }
  } else if (numBehind === 2) {
    if (!u0Behind && u0 !== threshold) {
      u10Ratio = (threshold - u1) / (u0 - u1);
      u20Ratio = (threshold - u2) / (u0 - u2);
      result.push(0);
      result.push(-1);
      result.push(1);
      result.push(0);
      result.push(u10Ratio);
      result.push(-1);
      result.push(2);
      result.push(0);
      result.push(u20Ratio);
    } else if (!u1Behind && u1 !== threshold) {
      u21Ratio = (threshold - u2) / (u1 - u2);
      u01Ratio = (threshold - u0) / (u1 - u0);
      result.push(1);
      result.push(-1);
      result.push(2);
      result.push(1);
      result.push(u21Ratio);
      result.push(-1);
      result.push(0);
      result.push(1);
      result.push(u01Ratio);
    } else if (!u2Behind && u2 !== threshold) {
      u02Ratio = (threshold - u0) / (u2 - u0);
      u12Ratio = (threshold - u1) / (u2 - u1);
      result.push(2);
      result.push(-1);
      result.push(0);
      result.push(2);
      result.push(u02Ratio);
      result.push(-1);
      result.push(1);
      result.push(2);
      result.push(u12Ratio);
    }
  } else if (numBehind !== 3) {
    result.push(0);
    result.push(1);
    result.push(2);
  }
  return result;
};
Intersections2D.computeBarycentricCoordinates = function(x, y, x1, y1, x2, y2, x3, y3, result) {
  if (!defined_default(x)) {
    throw new DeveloperError_default("x is required.");
  }
  if (!defined_default(y)) {
    throw new DeveloperError_default("y is required.");
  }
  if (!defined_default(x1)) {
    throw new DeveloperError_default("x1 is required.");
  }
  if (!defined_default(y1)) {
    throw new DeveloperError_default("y1 is required.");
  }
  if (!defined_default(x2)) {
    throw new DeveloperError_default("x2 is required.");
  }
  if (!defined_default(y2)) {
    throw new DeveloperError_default("y2 is required.");
  }
  if (!defined_default(x3)) {
    throw new DeveloperError_default("x3 is required.");
  }
  if (!defined_default(y3)) {
    throw new DeveloperError_default("y3 is required.");
  }
  const x1mx3 = x1 - x3;
  const x3mx2 = x3 - x2;
  const y2my3 = y2 - y3;
  const y1my3 = y1 - y3;
  const inverseDeterminant = 1 / (y2my3 * x1mx3 + x3mx2 * y1my3);
  const ymy3 = y - y3;
  const xmx3 = x - x3;
  const l1 = (y2my3 * xmx3 + x3mx2 * ymy3) * inverseDeterminant;
  const l2 = (-y1my3 * xmx3 + x1mx3 * ymy3) * inverseDeterminant;
  const l3 = 1 - l1 - l2;
  if (defined_default(result)) {
    result.x = l1;
    result.y = l2;
    result.z = l3;
    return result;
  }
  return new Cartesian3_default(l1, l2, l3);
};
Intersections2D.computeLineSegmentLineSegmentIntersection = function(x00, y00, x01, y01, x10, y10, x11, y11, result) {
  Check_default.typeOf.number("x00", x00);
  Check_default.typeOf.number("y00", y00);
  Check_default.typeOf.number("x01", x01);
  Check_default.typeOf.number("y01", y01);
  Check_default.typeOf.number("x10", x10);
  Check_default.typeOf.number("y10", y10);
  Check_default.typeOf.number("x11", x11);
  Check_default.typeOf.number("y11", y11);
  const numerator1A = (x11 - x10) * (y00 - y10) - (y11 - y10) * (x00 - x10);
  const numerator1B = (x01 - x00) * (y00 - y10) - (y01 - y00) * (x00 - x10);
  const denominator1 = (y11 - y10) * (x01 - x00) - (x11 - x10) * (y01 - y00);
  if (denominator1 === 0) {
    return;
  }
  const ua1 = numerator1A / denominator1;
  const ub1 = numerator1B / denominator1;
  if (ua1 >= 0 && ua1 <= 1 && ub1 >= 0 && ub1 <= 1) {
    if (!defined_default(result)) {
      result = new Cartesian2_default();
    }
    result.x = x00 + ua1 * (x01 - x00);
    result.y = y00 + ua1 * (y01 - y00);
    return result;
  }
};
var Intersections2D_default = Intersections2D;

export {
  Intersections2D_default
};
