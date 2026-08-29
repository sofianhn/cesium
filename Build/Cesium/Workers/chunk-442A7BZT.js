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

import{a as L}from"./chunk-KCDTAI5E.js";import{b as l}from"./chunk-GK2MM245.js";import{a as O}from"./chunk-3QESBF75.js";import{a as G}from"./chunk-GVGJ6WLI.js";import{a as w}from"./chunk-IFCBEGFZ.js";import{a as P}from"./chunk-JJKUNYMW.js";import{a as k}from"./chunk-MZ35D7Z5.js";import{b as H,c as u,d as b}from"./chunk-OAENLPGM.js";import{c as g}from"./chunk-A5IIAP62.js";import{a as d}from"./chunk-P2PY46XC.js";import{a,b as f}from"./chunk-VCNFSRSF.js";import{b as m}from"./chunk-PD3UB5JC.js";import{a as h}from"./chunk-GVKNBVIN.js";function C(o){let e=o.length,t=new Float64Array(e*3),r=P.createTypedArray(e,e*2),n=0,y=0;for(let i=0;i<e;i++){let p=o[i];t[n++]=p.x,t[n++]=p.y,t[n++]=p.z,r[y++]=i,r[y++]=(i+1)%e}let s=new k({position:new b({componentDatatype:d.DOUBLE,componentsPerAttribute:3,values:t})});return new u({attributes:s,indices:r,primitiveType:H.LINES})}function c(o){o=o??f.EMPTY_OBJECT;let e=o.polygonHierarchy;m.defined("options.polygonHierarchy",e),this._polygonHierarchy=e,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=l.computeHierarchyPackedLength(e,a)+1}c.fromPositions=function(o){o=o??f.EMPTY_OBJECT,m.defined("options.positions",o.positions);let e={polygonHierarchy:{positions:o.positions}};return new c(e)};c.pack=function(o,e,t){return m.typeOf.object("value",o),m.defined("array",e),t=t??0,t=l.packPolygonHierarchy(o._polygonHierarchy,e,t,a),e[t]=o.packedLength,e};var E={polygonHierarchy:{}};c.unpack=function(o,e,t){m.defined("array",o),e=e??0;let r=l.unpackPolygonHierarchy(o,e,a);e=r.startingIndex,delete r.startingIndex;let n=o[e];return h(t)||(t=new c(E)),t._polygonHierarchy=r,t.packedLength=n,t};c.createGeometry=function(o){let e=o._polygonHierarchy,t=e.positions;if(t=O(t,a.equalsEpsilon,!0),t.length<3||!L.validOutline(t))return;let n=l.polygonOutlinesFromHierarchy(e,!1);if(n.length===0)return;let y=[];for(let p=0;p<n.length;p++){let T=new G({geometry:C(n[p])});y.push(T)}let s=w.combineInstances(y)[0],i=g.fromPoints(e.positions);return new u({attributes:s.attributes,indices:s.indices,primitiveType:s.primitiveType,boundingSphere:i})};var U=c;export{U as a};
