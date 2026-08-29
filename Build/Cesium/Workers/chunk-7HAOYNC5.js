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

import{a as y}from"./chunk-3BERLVP2.js";import{a as h}from"./chunk-MZ35D7Z5.js";import{b as A,c as O,d as p}from"./chunk-FTKOGYKN.js";import{c as d}from"./chunk-YIS6UKLN.js";import{a}from"./chunk-P2PY46XC.js";import{a as m,b as u}from"./chunk-VCNFSRSF.js";import{a as b,b as r}from"./chunk-PD3UB5JC.js";import{a as s}from"./chunk-GVKNBVIN.js";var B=new m;function f(n){n=n??u.EMPTY_OBJECT;let t=n.minimum,e=n.maximum;if(r.typeOf.object("min",t),r.typeOf.object("max",e),s(n.offsetAttribute)&&n.offsetAttribute===y.TOP)throw new b("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._min=m.clone(t),this._max=m.clone(e),this._offsetAttribute=n.offsetAttribute,this._workerName="createBoxOutlineGeometry"}f.fromDimensions=function(n){n=n??u.EMPTY_OBJECT;let t=n.dimensions;r.typeOf.object("dimensions",t),r.typeOf.number.greaterThanOrEquals("dimensions.x",t.x,0),r.typeOf.number.greaterThanOrEquals("dimensions.y",t.y,0),r.typeOf.number.greaterThanOrEquals("dimensions.z",t.z,0);let e=m.multiplyByScalar(t,.5,new m);return new f({minimum:m.negate(e,new m),maximum:e,offsetAttribute:n.offsetAttribute})};f.fromAxisAlignedBoundingBox=function(n){return r.typeOf.object("boundindBox",n),new f({minimum:n.minimum,maximum:n.maximum})};f.packedLength=2*m.packedLength+1;f.pack=function(n,t,e){return r.typeOf.object("value",n),r.defined("array",t),e=e??0,m.pack(n._min,t,e),m.pack(n._max,t,e+m.packedLength),t[e+m.packedLength*2]=n._offsetAttribute??-1,t};var w=new m,l=new m,_={minimum:w,maximum:l,offsetAttribute:void 0};f.unpack=function(n,t,e){r.defined("array",n),t=t??0;let c=m.unpack(n,t,w),o=m.unpack(n,t+m.packedLength,l),i=n[t+m.packedLength*2];return s(e)?(e._min=m.clone(c,e._min),e._max=m.clone(o,e._max),e._offsetAttribute=i===-1?void 0:i,e):(_.offsetAttribute=i===-1?void 0:i,new f(_))};f.createGeometry=function(n){let t=n._min,e=n._max;if(m.equals(t,e))return;let c=new h,o=new Uint16Array(24),i=new Float64Array(24);i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,c.position=new p({componentDatatype:a.DOUBLE,componentsPerAttribute:3,values:i}),o[0]=4,o[1]=5,o[2]=5,o[3]=6,o[4]=6,o[5]=7,o[6]=7,o[7]=4,o[8]=0,o[9]=1,o[10]=1,o[11]=2,o[12]=2,o[13]=3,o[14]=3,o[15]=0,o[16]=0,o[17]=4,o[18]=1,o[19]=5,o[20]=2,o[21]=6,o[22]=3,o[23]=7;let x=m.subtract(e,t,B),k=m.magnitude(x)*.5;if(s(n._offsetAttribute)){let E=i.length,T=n._offsetAttribute===y.NONE?0:1,z=new Uint8Array(E/3).fill(T);c.applyOffset=new p({componentDatatype:a.UNSIGNED_BYTE,componentsPerAttribute:1,values:z})}return new O({attributes:c,indices:o,primitiveType:A.LINES,boundingSphere:new d(m.ZERO,k),offsetAttribute:n._offsetAttribute})};var v=f;export{v as a};
