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

import{a as b}from"./chunk-2VS56G3P.js";import{b as g}from"./chunk-PD3UB5JC.js";import{a as y}from"./chunk-GVKNBVIN.js";function l(t,e){return(t&e)!==0}var a=l;var w=[1,2,4,8],V=15,x=16,T=64,k=128;function i(t,e,c,n,d,h){this._bits=t,this.cnodeVersion=e,this.imageryVersion=c,this.terrainVersion=n,this.imageryProvider=d,this.terrainProvider=h,this.ancestorHasTerrain=!1,this.terrainState=void 0}i.clone=function(t,e){return y(e)?(e._bits=t._bits,e.cnodeVersion=t.cnodeVersion,e.imageryVersion=t.imageryVersion,e.terrainVersion=t.terrainVersion,e.imageryProvider=t.imageryProvider,e.terrainProvider=t.terrainProvider):e=new i(t._bits,t.cnodeVersion,t.imageryVersion,t.terrainVersion,t.imageryProvider,t.terrainProvider),e.ancestorHasTerrain=t.ancestorHasTerrain,e.terrainState=t.terrainState,e};i.prototype.setParent=function(t){this.ancestorHasTerrain=t.ancestorHasTerrain||this.hasTerrain()};i.prototype.hasSubtree=function(){return a(this._bits,x)};i.prototype.hasImagery=function(){return a(this._bits,T)};i.prototype.hasTerrain=function(){return a(this._bits,k)};i.prototype.hasChildren=function(){return a(this._bits,V)};i.prototype.hasChild=function(t){return a(this._bits,w[t])};i.prototype.getChildBitmask=function(){return this._bits&V};var S=i;var U=1953029805,_=2917034100;function m(t,e){if(m.passThroughDataForTesting)return e;g.typeOf.object("key",t),g.typeOf.object("data",e);let c=t.byteLength;if(c===0||c%4!==0)throw new b("The length of key must be greater than 0 and a multiple of 4.");let n=new DataView(e),d=n.getUint32(0,!0);if(d===U||d===_)return e;let h=new DataView(t),r=0,p=e.byteLength,u=p-p%8,f=c,o,s=8;for(;r<u;)for(s=(s+8)%24,o=s;r<u&&o<f;)n.setUint32(r,n.getUint32(r,!0)^h.getUint32(o,!0),!0),n.setUint32(r+4,n.getUint32(r+4,!0)^h.getUint32(o+4,!0),!0),r+=8,o+=24;if(r<p)for(o>=f&&(s=(s+8)%24,o=s);r<p;)n.setUint8(r,n.getUint8(r)^h.getUint8(o)),r++,o++}m.passThroughDataForTesting=!1;var H=m;export{S as a,H as b};
