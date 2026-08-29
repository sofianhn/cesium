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

import{a as t}from"./chunk-E4PHTCYT.js";import{d as m}from"./chunk-XLQXCDEE.js";import{a as o,b as d}from"./chunk-VCNFSRSF.js";import{b as a}from"./chunk-PD3UB5JC.js";import{a as c}from"./chunk-GVKNBVIN.js";function l(e){e=e??d.EMPTY_OBJECT;let n=e.radius;a.typeOf.number("radius",n);let s={center:e.center,semiMajorAxis:n,semiMinorAxis:n,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,numberOfVerticalLines:e.numberOfVerticalLines};this._ellipseGeometry=new t(s),this._workerName="createCircleOutlineGeometry"}l.packedLength=t.packedLength;l.pack=function(e,n,s){return a.typeOf.object("value",e),t.pack(e._ellipseGeometry,n,s)};var u=new t({center:new o,semiMajorAxis:1,semiMinorAxis:1}),i={center:new o,radius:void 0,ellipsoid:m.clone(m.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,numberOfVerticalLines:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0};l.unpack=function(e,n,s){let r=t.unpack(e,n,u);return i.center=o.clone(r._center,i.center),i.ellipsoid=m.clone(r._ellipsoid,i.ellipsoid),i.height=r._height,i.extrudedHeight=r._extrudedHeight,i.granularity=r._granularity,i.numberOfVerticalLines=r._numberOfVerticalLines,c(s)?(i.semiMajorAxis=r._semiMajorAxis,i.semiMinorAxis=r._semiMinorAxis,s._ellipseGeometry=new t(i),s):(i.radius=r._semiMajorAxis,new l(i))};l.createGeometry=function(e){return t.createGeometry(e._ellipseGeometry)};var _=l;export{_ as a};
