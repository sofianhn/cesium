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

import{c as k,e as _,f as F}from"./chunk-5QLBVETQ.js";import{a as g}from"./chunk-MZ35D7Z5.js";import{b,c as y,d as N}from"./chunk-2B3YTN4I.js";import{c as O}from"./chunk-SXTMLKDV.js";import{u as a}from"./chunk-P2FOFSJH.js";import{a as T}from"./chunk-P2PY46XC.js";import{a as s}from"./chunk-VCNFSRSF.js";import{b as h}from"./chunk-PD3UB5JC.js";import{a as d}from"./chunk-GVKNBVIN.js";var l=0,A=1;function P(e){h.typeOf.object("options",e),h.typeOf.object("options.frustum",e.frustum),h.typeOf.object("options.origin",e.origin),h.typeOf.object("options.orientation",e.orientation);let o=e.frustum,t=e.orientation,u=e.origin,r=e._drawNearPlane??!0,p,m;o instanceof _?(p=l,m=_.packedLength):o instanceof k&&(p=A,m=k.packedLength),this._frustumType=p,this._frustum=o.clone(),this._origin=s.clone(u),this._orientation=a.clone(t),this._drawNearPlane=r,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+m+s.packedLength+a.packedLength}P.pack=function(e,o,t){h.typeOf.object("value",e),h.defined("array",o),t=t??0;let u=e._frustumType,r=e._frustum;return o[t++]=u,u===l?(_.pack(r,o,t),t+=_.packedLength):(k.pack(r,o,t),t+=k.packedLength),s.pack(e._origin,o,t),t+=s.packedLength,a.pack(e._orientation,o,t),t+=a.packedLength,o[t]=e._drawNearPlane?1:0,o};var j=new _,C=new k,E=new a,G=new s;P.unpack=function(e,o,t){h.defined("array",e),o=o??0;let u=e[o++],r;u===l?(r=_.unpack(e,o,j),o+=_.packedLength):(r=k.unpack(e,o,C),o+=k.packedLength);let p=s.unpack(e,o,G);o+=s.packedLength;let m=a.unpack(e,o,E);o+=a.packedLength;let w=e[o]===1;if(!d(t))return new P({frustum:r,origin:p,orientation:m,_drawNearPlane:w});let n=u===t._frustumType?t._frustum:void 0;return t._frustum=r.clone(n),t._frustumType=u,t._origin=s.clone(p,t._origin),t._orientation=a.clone(m,t._orientation),t._drawNearPlane=w,t};P.createGeometry=function(e){let o=e._frustumType,t=e._frustum,u=e._origin,r=e._orientation,p=e._drawNearPlane,m=new Float64Array(24);F._computeNearFarPlanes(u,r,o,t,m);let w=new g({position:new N({componentDatatype:T.DOUBLE,componentsPerAttribute:3,values:m})}),n,i,L=p?2:1,c=new Uint16Array(8*(L+1)),f=p?0:1;for(;f<2;++f)n=p?f*8:0,i=f*4,c[n]=i,c[n+1]=i+1,c[n+2]=i+1,c[n+3]=i+2,c[n+4]=i+2,c[n+5]=i+3,c[n+6]=i+3,c[n+7]=i;for(f=0;f<2;++f)n=(L+f)*8,i=f*4,c[n]=i,c[n+1]=i+4,c[n+2]=i+1,c[n+3]=i+5,c[n+4]=i+2,c[n+5]=i+6,c[n+6]=i+3,c[n+7]=i+7;return new y({attributes:w,indices:c,primitiveType:b.LINES,boundingSphere:O.fromVertices(m)})};var M=P;export{M as a};
