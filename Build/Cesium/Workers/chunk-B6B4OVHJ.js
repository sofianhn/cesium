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

import{a as z}from"./chunk-KPCMRTVE.js";import{a as q}from"./chunk-JJKUNYMW.js";import{a as N}from"./chunk-MZ35D7Z5.js";import{b as R,c as S,d as M}from"./chunk-FTKOGYKN.js";import{c as T}from"./chunk-YIS6UKLN.js";import{a as D}from"./chunk-P2PY46XC.js";import{d as l}from"./chunk-XLQXCDEE.js";import{a as h,b as C}from"./chunk-VCNFSRSF.js";import{b}from"./chunk-L34JM65V.js";import{a as H}from"./chunk-PD3UB5JC.js";import{a as r}from"./chunk-GVKNBVIN.js";var B=new h,G=new h;function w(i){i=i??C.EMPTY_OBJECT;let o=i.positions,e=i.maximumHeights,t=i.minimumHeights;if(!r(o))throw new H("options.positions is required.");if(r(e)&&e.length!==o.length)throw new H("options.positions and options.maximumHeights must have the same length.");if(r(t)&&t.length!==o.length)throw new H("options.positions and options.minimumHeights must have the same length.");let s=i.granularity??b.RADIANS_PER_DEGREE,m=i.ellipsoid??l.default;this._positions=o,this._minimumHeights=t,this._maximumHeights=e,this._granularity=s,this._ellipsoid=l.clone(m),this._workerName="createWallOutlineGeometry";let n=1+o.length*h.packedLength+2;r(t)&&(n+=t.length),r(e)&&(n+=e.length),this.packedLength=n+l.packedLength+1}w.pack=function(i,o,e){if(!r(i))throw new H("value is required");if(!r(o))throw new H("array is required");e=e??0;let t,s=i._positions,m=s.length;for(o[e++]=m,t=0;t<m;++t,e+=h.packedLength)h.pack(s[t],o,e);let n=i._minimumHeights;if(m=r(n)?n.length:0,o[e++]=m,r(n))for(t=0;t<m;++t)o[e++]=n[t];let c=i._maximumHeights;if(m=r(c)?c.length:0,o[e++]=m,r(c))for(t=0;t<m;++t)o[e++]=c[t];return l.pack(i._ellipsoid,o,e),e+=l.packedLength,o[e]=i._granularity,o};var U=l.clone(l.UNIT_SPHERE),k={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:U,granularity:void 0};w.unpack=function(i,o,e){if(!r(i))throw new H("array is required");o=o??0;let t,s=i[o++],m=new Array(s);for(t=0;t<s;++t,o+=h.packedLength)m[t]=h.unpack(i,o);s=i[o++];let n;if(s>0)for(n=new Array(s),t=0;t<s;++t)n[t]=i[o++];s=i[o++];let c;if(s>0)for(c=new Array(s),t=0;t<s;++t)c[t]=i[o++];let _=l.unpack(i,o,U);o+=l.packedLength;let u=i[o];return r(e)?(e._positions=m,e._minimumHeights=n,e._maximumHeights=c,e._ellipsoid=l.clone(_,e._ellipsoid),e._granularity=u,e):(k.positions=m,k.minimumHeights=n,k.maximumHeights=c,k.granularity=u,new w(k))};w.fromConstantHeights=function(i){i=i??C.EMPTY_OBJECT;let o=i.positions;if(!r(o))throw new H("options.positions is required.");let e,t,s=i.minimumHeight,m=i.maximumHeight,n=r(s),c=r(m);if(n||c){let u=o.length;e=n?new Array(u):void 0,t=c?new Array(u):void 0;for(let g=0;g<u;++g)n&&(e[g]=s),c&&(t[g]=m)}let _={positions:o,maximumHeights:t,minimumHeights:e,ellipsoid:i.ellipsoid};return new w(_)};w.createGeometry=function(i){let o=i._positions,e=i._minimumHeights,t=i._maximumHeights,s=i._granularity,m=i._ellipsoid,n=z.computePositions(m,o,t,e,s,!1);if(!r(n))return;let c=n.bottomPositions,_=n.topPositions,u=_.length,g=u*2,f=new Float64Array(g),y=0;u/=3;let p;for(p=0;p<u;++p){let E=p*3,A=h.fromArray(_,E,B),L=h.fromArray(c,E,G);f[y++]=L.x,f[y++]=L.y,f[y++]=L.z,f[y++]=A.x,f[y++]=A.y,f[y++]=A.z}let W=new N({position:new M({componentDatatype:D.DOUBLE,componentsPerAttribute:3,values:f})}),P=g/3;g=2*P-4+P;let a=q.createTypedArray(P,g),d=0;for(p=0;p<P-2;p+=2){let E=p,A=p+2,L=h.fromArray(f,E*3,B),v=h.fromArray(f,A*3,G);if(h.equalsEpsilon(L,v,b.EPSILON10))continue;let O=p+1,F=p+3;a[d++]=O,a[d++]=E,a[d++]=O,a[d++]=F,a[d++]=E,a[d++]=A}return a[d++]=P-2,a[d]=P-1,new S({attributes:W,indices:a,primitiveType:R.LINES,boundingSphere:T.fromVertices(f)})};var ei=w;export{ei as a};
