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

import{a as k}from"./chunk-YDNPUBIV.js";import{a as L}from"./chunk-3BERLVP2.js";import{a as D}from"./chunk-JJKUNYMW.js";import{a as N}from"./chunk-MZ35D7Z5.js";import{b as P,c as y,d as A}from"./chunk-2B3YTN4I.js";import{c as S}from"./chunk-SXTMLKDV.js";import{a as R}from"./chunk-P2PY46XC.js";import{a as _}from"./chunk-XLQXCDEE.js";import{a as T,b as C}from"./chunk-VCNFSRSF.js";import{a as E,b as m}from"./chunk-PD3UB5JC.js";import{a as h}from"./chunk-GVKNBVIN.js";var V=new _;function b(t){t=t??C.EMPTY_OBJECT;let e=t.length,o=t.topRadius,f=t.bottomRadius,i=t.slices??128,r=Math.max(t.numberOfVerticalLines??16,0);if(m.typeOf.number("options.positions",e),m.typeOf.number("options.topRadius",o),m.typeOf.number("options.bottomRadius",f),m.typeOf.number.greaterThanOrEquals("options.slices",i,3),h(t.offsetAttribute)&&t.offsetAttribute===L.TOP)throw new E("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._length=e,this._topRadius=o,this._bottomRadius=f,this._slices=i,this._numberOfVerticalLines=r,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}b.packedLength=6;b.pack=function(t,e,o){return m.typeOf.object("value",t),m.defined("array",e),o=o??0,e[o++]=t._length,e[o++]=t._topRadius,e[o++]=t._bottomRadius,e[o++]=t._slices,e[o++]=t._numberOfVerticalLines,e[o]=t._offsetAttribute??-1,e};var p={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};b.unpack=function(t,e,o){m.defined("array",t),e=e??0;let f=t[e++],i=t[e++],r=t[e++],a=t[e++],d=t[e++],c=t[e];return h(o)?(o._length=f,o._topRadius=i,o._bottomRadius=r,o._slices=a,o._numberOfVerticalLines=d,o._offsetAttribute=c===-1?void 0:c,o):(p.length=f,p.topRadius=i,p.bottomRadius=r,p.slices=a,p.numberOfVerticalLines=d,p.offsetAttribute=c===-1?void 0:c,new b(p))};b.createGeometry=function(t){let e=t._length,o=t._topRadius,f=t._bottomRadius,i=t._slices,r=t._numberOfVerticalLines;if(e<=0||o<0||f<0||o===0&&f===0)return;let a=i*2,d=k.computePositions(e,o,f,i,!1),c=i*2,w;if(r>0){let l=Math.min(r,i);w=Math.round(i/l),c+=l}let s=D.createTypedArray(a,c*2),u=0,n;for(n=0;n<i-1;n++)s[u++]=n,s[u++]=n+1,s[u++]=n+i,s[u++]=n+1+i;if(s[u++]=i-1,s[u++]=0,s[u++]=i+i-1,s[u++]=i,r>0)for(n=0;n<i;n+=w)s[u++]=n,s[u++]=n+i;let O=new N;O.position=new A({componentDatatype:R.DOUBLE,componentsPerAttribute:3,values:d}),V.x=e*.5,V.y=Math.max(f,o);let M=new S(T.ZERO,_.magnitude(V));if(h(t._offsetAttribute)){e=d.length;let l=t._offsetAttribute===L.NONE?0:1,g=new Uint8Array(e/3).fill(l);O.applyOffset=new A({componentDatatype:R.UNSIGNED_BYTE,componentsPerAttribute:1,values:g})}return new y({attributes:O,indices:s,primitiveType:P.LINES,boundingSphere:M,offsetAttribute:t._offsetAttribute})};var X=b;export{X as a};
