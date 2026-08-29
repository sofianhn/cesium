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

import{a as t}from"./chunk-46RMHJ4F.js";import{a as c}from"./chunk-YJR5VO7J.js";import{a as s}from"./chunk-VCNFSRSF.js";import{b as m}from"./chunk-PD3UB5JC.js";import{a as d}from"./chunk-GVKNBVIN.js";function n(e){let r=e.radius??1,o={radii:new s(r,r,r),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,vertexFormat:e.vertexFormat};this._ellipsoidGeometry=new t(o),this._workerName="createSphereGeometry"}n.packedLength=t.packedLength;n.pack=function(e,r,a){return m.typeOf.object("value",e),t.pack(e._ellipsoidGeometry,r,a)};var l=new t,i={radius:void 0,radii:new s,vertexFormat:new c,stackPartitions:void 0,slicePartitions:void 0};n.unpack=function(e,r,a){let o=t.unpack(e,r,l);return i.vertexFormat=c.clone(o._vertexFormat,i.vertexFormat),i.stackPartitions=o._stackPartitions,i.slicePartitions=o._slicePartitions,d(a)?(s.clone(o._radii,i.radii),a._ellipsoidGeometry=new t(i),a):(i.radius=o._radii.x,new n(i))};n.createGeometry=function(e){return t.createGeometry(e._ellipsoidGeometry)};var G=n;export{G as a};
