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

import{a as e}from"./chunk-BPVYWSQ2.js";import{a}from"./chunk-VCNFSRSF.js";import{b as c}from"./chunk-PD3UB5JC.js";import{a as d}from"./chunk-GVKNBVIN.js";function o(i){let t=i.radius??1,r={radii:new a(t,t,t),stackPartitions:i.stackPartitions,slicePartitions:i.slicePartitions,subdivisions:i.subdivisions};this._ellipsoidGeometry=new e(r),this._workerName="createSphereOutlineGeometry"}o.packedLength=e.packedLength;o.pack=function(i,t,s){return c.typeOf.object("value",i),e.pack(i._ellipsoidGeometry,t,s)};var u=new e,n={radius:void 0,radii:new a,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};o.unpack=function(i,t,s){let r=e.unpack(i,t,u);return n.stackPartitions=r._stackPartitions,n.slicePartitions=r._slicePartitions,n.subdivisions=r._subdivisions,d(s)?(a.clone(r._radii,n.radii),s._ellipsoidGeometry=new e(n),s):(n.radius=r._radii.x,new o(n))};o.createGeometry=function(i){return e.createGeometry(i._ellipsoidGeometry)};var k=o;export{k as a};
