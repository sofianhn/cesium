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

import{a as $,b as x,c as M}from"./chunk-UH5MNAW5.js";import{a as W}from"./chunk-OSLECHNC.js";import{a as g}from"./chunk-YJR5VO7J.js";import{a as X,b as V}from"./chunk-EFMMH46A.js";import{a as Z}from"./chunk-3QESBF75.js";import{a as U}from"./chunk-IFCBEGFZ.js";import{a as J}from"./chunk-JJKUNYMW.js";import{a as Q}from"./chunk-MZ35D7Z5.js";import{b as K,c as Y,d as B}from"./chunk-OAENLPGM.js";import{c as H}from"./chunk-A5IIAP62.js";import{a as N}from"./chunk-P2PY46XC.js";import{a as D,d as a}from"./chunk-XLQXCDEE.js";import{a as T,b as z}from"./chunk-VCNFSRSF.js";import{b as j}from"./chunk-L34JM65V.js";import{a as A}from"./chunk-PD3UB5JC.js";import{a as L}from"./chunk-GVKNBVIN.js";function te(o,t,n,e){let l=new Q;e.position&&(l.position=new B({componentDatatype:N.DOUBLE,componentsPerAttribute:3,values:o}));let i=t.length,h=o.length/3,w=(h-i*2)/(i*2),P=V.triangulate(t),R=(w-1)*i*6+P.length*2,r=J.createTypedArray(h,R),m,s,d,b,E,F,G=i*2,p=0;for(m=0;m<w-1;m++){for(s=0;s<i-1;s++)d=s*2+m*i*2,F=d+G,b=d+1,E=b+G,r[p++]=b,r[p++]=d,r[p++]=E,r[p++]=E,r[p++]=d,r[p++]=F;d=i*2-2+m*i*2,b=d+1,E=b+G,F=d+G,r[p++]=b,r[p++]=d,r[p++]=E,r[p++]=E,r[p++]=d,r[p++]=F}if(e.st||e.tangent||e.bitangent){let c=new Float32Array(h*2),C=1/(w-1),k=1/n.height,O=n.height/2,y,u,f=0;for(m=0;m<w;m++){for(y=m*C,u=k*(t[0].y+O),c[f++]=y,c[f++]=u,s=1;s<i;s++)u=k*(t[s].y+O),c[f++]=y,c[f++]=u,c[f++]=y,c[f++]=u;u=k*(t[0].y+O),c[f++]=y,c[f++]=u}for(s=0;s<i;s++)y=0,u=k*(t[s].y+O),c[f++]=y,c[f++]=u;for(s=0;s<i;s++)y=(w-1)*C,u=k*(t[s].y+O),c[f++]=y,c[f++]=u;l.st=new B({componentDatatype:N.FLOAT,componentsPerAttribute:2,values:new Float32Array(c)})}let q=h-i*2;for(m=0;m<P.length;m+=3){let c=P[m]+q,C=P[m+1]+q,k=P[m+2]+q;r[p++]=c,r[p++]=C,r[p++]=k,r[p++]=k+i,r[p++]=C+i,r[p++]=c+i}let _=new Y({attributes:l,indices:r,boundingSphere:H.fromVertices(o),primitiveType:K.TRIANGLES});if(e.normal&&(_=U.computeNormal(_)),e.tangent||e.bitangent){try{_=U.computeTangentAndBitangent(_)}catch{$("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}e.tangent||(_.attributes.tangent=void 0),e.bitangent||(_.attributes.bitangent=void 0),e.st||(_.attributes.st=void 0)}return _}function v(o){o=o??z.EMPTY_OBJECT;let t=o.polylinePositions,n=o.shapePositions;if(!L(t))throw new A("options.polylinePositions is required.");if(!L(n))throw new A("options.shapePositions is required.");this._positions=t,this._shape=n,this._ellipsoid=a.clone(o.ellipsoid??a.default),this._cornerType=o.cornerType??x.ROUNDED,this._vertexFormat=g.clone(o.vertexFormat??g.DEFAULT),this._granularity=o.granularity??j.RADIANS_PER_DEGREE,this._workerName="createPolylineVolumeGeometry";let e=1+t.length*T.packedLength;e+=1+n.length*D.packedLength,this.packedLength=e+a.packedLength+g.packedLength+2}v.pack=function(o,t,n){if(!L(o))throw new A("value is required");if(!L(t))throw new A("array is required");n=n??0;let e,l=o._positions,i=l.length;for(t[n++]=i,e=0;e<i;++e,n+=T.packedLength)T.pack(l[e],t,n);let h=o._shape;for(i=h.length,t[n++]=i,e=0;e<i;++e,n+=D.packedLength)D.pack(h[e],t,n);return a.pack(o._ellipsoid,t,n),n+=a.packedLength,g.pack(o._vertexFormat,t,n),n+=g.packedLength,t[n++]=o._cornerType,t[n]=o._granularity,t};var I=a.clone(a.UNIT_SPHERE),ee=new g,S={polylinePositions:void 0,shapePositions:void 0,ellipsoid:I,vertexFormat:ee,cornerType:void 0,granularity:void 0};v.unpack=function(o,t,n){if(!L(o))throw new A("array is required");t=t??0;let e,l=o[t++],i=new Array(l);for(e=0;e<l;++e,t+=T.packedLength)i[e]=T.unpack(o,t);l=o[t++];let h=new Array(l);for(e=0;e<l;++e,t+=D.packedLength)h[e]=D.unpack(o,t);let w=a.unpack(o,t,I);t+=a.packedLength;let P=g.unpack(o,t,ee);t+=g.packedLength;let R=o[t++],r=o[t];return L(n)?(n._positions=i,n._shape=h,n._ellipsoid=a.clone(w,n._ellipsoid),n._vertexFormat=g.clone(P,n._vertexFormat),n._cornerType=R,n._granularity=r,n):(S.polylinePositions=i,S.shapePositions=h,S.cornerType=R,S.granularity=r,new v(S))};var oe=new W;v.createGeometry=function(o){let t=o._positions,n=Z(t,T.equalsEpsilon),e=o._shape;if(e=M.removeDuplicatesFromShape(e),n.length<2||e.length<3)return;V.computeWindingOrder2D(e)===X.CLOCKWISE&&e.reverse();let l=W.fromPoints(e,oe),i=M.computePositions(n,e,l,o,!0);return te(i,e,l,o._vertexFormat)};var Ae=v;export{Ae as a};
