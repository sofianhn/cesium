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

import{a as d}from"./chunk-MZ35D7Z5.js";import{b as f,c as s,d as y}from"./chunk-FTKOGYKN.js";import{c as u}from"./chunk-YIS6UKLN.js";import{a as c}from"./chunk-P2PY46XC.js";import{a as m}from"./chunk-VCNFSRSF.js";import{b as i}from"./chunk-PD3UB5JC.js";import{a as p}from"./chunk-GVKNBVIN.js";function o(){this._workerName="createPlaneOutlineGeometry"}o.packedLength=0;o.pack=function(r,t){return i.defined("value",r),i.defined("array",t),t};o.unpack=function(r,t,e){return i.defined("array",r),p(e)?e:new o};var n=new m(-.5,-.5,0),a=new m(.5,.5,0);o.createGeometry=function(){let r=new d,t=new Uint16Array(8),e=new Float64Array(12);return e[0]=n.x,e[1]=n.y,e[2]=n.z,e[3]=a.x,e[4]=n.y,e[5]=n.z,e[6]=a.x,e[7]=a.y,e[8]=n.z,e[9]=n.x,e[10]=a.y,e[11]=n.z,r.position=new y({componentDatatype:c.DOUBLE,componentsPerAttribute:3,values:e}),t[0]=0,t[1]=1,t[2]=1,t[3]=2,t[4]=2,t[5]=3,t[6]=3,t[7]=0,new s({attributes:r,indices:t,primitiveType:f.LINES,boundingSphere:new u(m.ZERO,Math.sqrt(2))})};var v=o;export{v as a};
