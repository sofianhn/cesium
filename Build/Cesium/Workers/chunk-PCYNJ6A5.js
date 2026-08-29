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

import{a as s}from"./chunk-OZOQXGXI.js";import{a as d}from"./chunk-YJR5VO7J.js";import{d as l}from"./chunk-XLQXCDEE.js";import{a,b as p}from"./chunk-VCNFSRSF.js";import{b as u}from"./chunk-PD3UB5JC.js";import{a as c}from"./chunk-GVKNBVIN.js";function n(e){e=e??p.EMPTY_OBJECT;let r=e.radius;u.typeOf.number("radius",r);let o={center:e.center,semiMajorAxis:r,semiMinorAxis:r,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new s(o),this._workerName="createCircleGeometry"}n.packedLength=s.packedLength;n.pack=function(e,r,o){return u.typeOf.object("value",e),s.pack(e._ellipseGeometry,r,o)};var h=new s({center:new a,semiMajorAxis:1,semiMinorAxis:1}),t={center:new a,radius:void 0,ellipsoid:l.clone(l.default),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new d,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};n.unpack=function(e,r,o){let i=s.unpack(e,r,h);return t.center=a.clone(i._center,t.center),t.ellipsoid=l.clone(i._ellipsoid,t.ellipsoid),t.ellipsoid=l.clone(i._ellipsoid,h._ellipsoid),t.height=i._height,t.extrudedHeight=i._extrudedHeight,t.granularity=i._granularity,t.vertexFormat=d.clone(i._vertexFormat,t.vertexFormat),t.stRotation=i._stRotation,t.shadowVolume=i._shadowVolume,c(o)?(t.semiMajorAxis=i._semiMajorAxis,t.semiMinorAxis=i._semiMinorAxis,o._ellipseGeometry=new s(t),o):(t.radius=i._semiMajorAxis,new n(t))};n.createGeometry=function(e){return s.createGeometry(e._ellipseGeometry)};n.createShadowVolume=function(e,r,o){let i=e._ellipseGeometry._granularity,m=e._ellipseGeometry._ellipsoid,_=r(i,m),x=o(i,m);return new n({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:m,stRotation:e._ellipseGeometry._stRotation,granularity:i,extrudedHeight:_,height:x,vertexFormat:d.POSITION_ONLY,shadowVolume:!0})};Object.defineProperties(n.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}});var j=n;export{j as a};
