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

import{b as v,c as w}from"./chunk-UH5MNAW5.js";import{a as k}from"./chunk-OSLECHNC.js";import{a as S,b as G}from"./chunk-EFMMH46A.js";import{a as q}from"./chunk-3QESBF75.js";import{a as g}from"./chunk-JJKUNYMW.js";import{a as R}from"./chunk-MZ35D7Z5.js";import{b,c as A,d as O}from"./chunk-OAENLPGM.js";import{c as D}from"./chunk-A5IIAP62.js";import{a as C}from"./chunk-P2PY46XC.js";import{a as y,d as m}from"./chunk-XLQXCDEE.js";import{a,b as T}from"./chunk-VCNFSRSF.js";import{b as E}from"./chunk-L34JM65V.js";import{a as d}from"./chunk-PD3UB5JC.js";import{a as u}from"./chunk-GVKNBVIN.js";function U(i,t){let o=new R;o.position=new O({componentDatatype:C.DOUBLE,componentsPerAttribute:3,values:i});let e=t.length,r=o.position.values.length/3,l=i.length/3/e,p=g.createTypedArray(r,2*e*(l+1)),c,n,f=0;c=0;let h=c*e;for(n=0;n<e-1;n++)p[f++]=n+h,p[f++]=n+h+1;for(p[f++]=e-1+h,p[f++]=h,c=l-1,h=c*e,n=0;n<e-1;n++)p[f++]=n+h,p[f++]=n+h+1;for(p[f++]=e-1+h,p[f++]=h,c=0;c<l-1;c++){let L=e*c,B=L+e;for(n=0;n<e;n++)p[f++]=n+L,p[f++]=n+B}return new A({attributes:o,indices:g.createTypedArray(r,p),boundingSphere:D.fromVertices(i),primitiveType:b.LINES})}function P(i){i=i??T.EMPTY_OBJECT;let t=i.polylinePositions,o=i.shapePositions;if(!u(t))throw new d("options.polylinePositions is required.");if(!u(o))throw new d("options.shapePositions is required.");this._positions=t,this._shape=o,this._ellipsoid=m.clone(i.ellipsoid??m.default),this._cornerType=i.cornerType??v.ROUNDED,this._granularity=i.granularity??E.RADIANS_PER_DEGREE,this._workerName="createPolylineVolumeOutlineGeometry";let e=1+t.length*a.packedLength;e+=1+o.length*y.packedLength,this.packedLength=e+m.packedLength+2}P.pack=function(i,t,o){if(!u(i))throw new d("value is required");if(!u(t))throw new d("array is required");o=o??0;let e,r=i._positions,s=r.length;for(t[o++]=s,e=0;e<s;++e,o+=a.packedLength)a.pack(r[e],t,o);let l=i._shape;for(s=l.length,t[o++]=s,e=0;e<s;++e,o+=y.packedLength)y.pack(l[e],t,o);return m.pack(i._ellipsoid,t,o),o+=m.packedLength,t[o++]=i._cornerType,t[o]=i._granularity,t};var N=m.clone(m.UNIT_SPHERE),_={polylinePositions:void 0,shapePositions:void 0,ellipsoid:N,height:void 0,cornerType:void 0,granularity:void 0};P.unpack=function(i,t,o){if(!u(i))throw new d("array is required");t=t??0;let e,r=i[t++],s=new Array(r);for(e=0;e<r;++e,t+=a.packedLength)s[e]=a.unpack(i,t);r=i[t++];let l=new Array(r);for(e=0;e<r;++e,t+=y.packedLength)l[e]=y.unpack(i,t);let p=m.unpack(i,t,N);t+=m.packedLength;let c=i[t++],n=i[t];return u(o)?(o._positions=s,o._shape=l,o._ellipsoid=m.clone(p,o._ellipsoid),o._cornerType=c,o._granularity=n,o):(_.polylinePositions=s,_.shapePositions=l,_.cornerType=c,_.granularity=n,new P(_))};var W=new k;P.createGeometry=function(i){let t=i._positions,o=q(t,a.equalsEpsilon),e=i._shape;if(e=w.removeDuplicatesFromShape(e),o.length<2||e.length<3)return;G.computeWindingOrder2D(e)===S.CLOCKWISE&&e.reverse();let r=k.fromPoints(e,W),s=w.computePositions(o,e,r,i,!1);return U(s,e)};var pe=P;export{pe as a};
