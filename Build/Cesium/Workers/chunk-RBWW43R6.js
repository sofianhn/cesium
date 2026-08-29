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

import{a as m}from"./chunk-YJR5VO7J.js";import{a as x}from"./chunk-MZ35D7Z5.js";import{b as v,c as l,d as c}from"./chunk-FTKOGYKN.js";import{c as A}from"./chunk-YIS6UKLN.js";import{a as i}from"./chunk-P2PY46XC.js";import{a as f,b as w}from"./chunk-VCNFSRSF.js";import{b as s}from"./chunk-PD3UB5JC.js";import{a as F}from"./chunk-GVKNBVIN.js";function p(n){n=n??w.EMPTY_OBJECT;let e=n.vertexFormat??m.DEFAULT;this._vertexFormat=e,this._workerName="createPlaneGeometry"}p.packedLength=m.packedLength;p.pack=function(n,e,o){return s.typeOf.object("value",n),s.defined("array",e),o=o??0,m.pack(n._vertexFormat,e,o),e};var b=new m,d={vertexFormat:b};p.unpack=function(n,e,o){s.defined("array",n),e=e??0;let a=m.unpack(n,e,b);return F(o)?(o._vertexFormat=m.clone(a,o._vertexFormat),o):new p(d)};var u=new f(-.5,-.5,0),y=new f(.5,.5,0);p.createGeometry=function(n){let e=n._vertexFormat,o=new x,a,r;if(e.position){if(r=new Float64Array(12),r[0]=u.x,r[1]=u.y,r[2]=0,r[3]=y.x,r[4]=u.y,r[5]=0,r[6]=y.x,r[7]=y.y,r[8]=0,r[9]=u.x,r[10]=y.y,r[11]=0,o.position=new c({componentDatatype:i.DOUBLE,componentsPerAttribute:3,values:r}),e.normal){let t=new Float32Array(12);t[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=1,t[9]=0,t[10]=0,t[11]=1,o.normal=new c({componentDatatype:i.FLOAT,componentsPerAttribute:3,values:t})}if(e.st){let t=new Float32Array(8);t[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=1,t[5]=1,t[6]=0,t[7]=1,o.st=new c({componentDatatype:i.FLOAT,componentsPerAttribute:2,values:t})}if(e.tangent){let t=new Float32Array(12);t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=1,t[7]=0,t[8]=0,t[9]=1,t[10]=0,t[11]=0,o.tangent=new c({componentDatatype:i.FLOAT,componentsPerAttribute:3,values:t})}if(e.bitangent){let t=new Float32Array(12);t[0]=0,t[1]=1,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=1,t[8]=0,t[9]=0,t[10]=1,t[11]=0,o.bitangent=new c({componentDatatype:i.FLOAT,componentsPerAttribute:3,values:t})}a=new Uint16Array(6),a[0]=0,a[1]=1,a[2]=2,a[3]=0,a[4]=2,a[5]=3}return new l({attributes:o,indices:a,primitiveType:v.TRIANGLES,boundingSphere:new A(f.ZERO,Math.sqrt(2))})};var C=p;export{C as a};
