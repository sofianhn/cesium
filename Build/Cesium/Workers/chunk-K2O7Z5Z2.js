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

import{a as Ve,d as Ge}from"./chunk-TQWYYJ5H.js";import{a as z}from"./chunk-EIVHFYAU.js";import{a as ke}from"./chunk-2QVARIV7.js";import{a as De}from"./chunk-KXGUROWT.js";import{c as qe}from"./chunk-A5IIAP62.js";import{v as Ye,w as P}from"./chunk-ID66MOOJ.js";import{b as W}from"./chunk-QCIAVSKB.js";import{a as _e,d as Le}from"./chunk-XLQXCDEE.js";import{a as f}from"./chunk-VCNFSRSF.js";import{b as B}from"./chunk-L34JM65V.js";import{a as y}from"./chunk-PD3UB5JC.js";import{a as c}from"./chunk-GVKNBVIN.js";var We={NONE:0,LERC:1};Object.freeze(We);var Et=We;var l={};l.DEFAULT_STRUCTURE=Object.freeze({heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1});var fe=new f,gt=new W,ht=new f,dt=new f;l.computeVertices=function(e){if(!c(e)||!c(e.heightmap))throw new y("options.heightmap is required.");if(!c(e.width)||!c(e.height))throw new y("options.width and options.height are required.");if(!c(e.nativeRectangle))throw new y("options.nativeRectangle is required.");if(!c(e.skirtHeight))throw new y("options.skirtHeight is required.");let Te=Math.cos,Ee=Math.sin,ze=Math.sqrt,j=Math.atan,X=Math.exp,Z=B.PI_OVER_TWO,S=B.toRadians,J=e.heightmap,r=e.width,s=e.height,C=e.skirtHeight,je=C>0,_=e.isGeographic??!0,w=e.ellipsoid??Le.default,u=1/w.maximumRadius,o=P.clone(e.nativeRectangle),T=P.clone(e.rectangle),M,x,L,A;c(T)?(M=T.west,x=T.south,L=T.east,A=T.north):_?(M=S(o.west),x=S(o.south),L=S(o.east),A=S(o.north)):(M=o.west*u,x=Z-2*j(X(-o.south*u)),L=o.east*u,A=Z-2*j(X(-o.north*u)));let E=e.relativeToCenter,pe=c(E);E=pe?E:f.ZERO;let O=e.includeWebMercatorT??!1,Se=e.exaggeration??1,Xe=e.exaggerationRelativeHeight??0,K=Se!==1,I=e.structure??l.DEFAULT_STRUCTURE,Ze=I.heightScale??l.DEFAULT_STRUCTURE.heightScale,Je=I.heightOffset??l.DEFAULT_STRUCTURE.heightOffset,Q=I.elementsPerHeight??l.DEFAULT_STRUCTURE.elementsPerHeight,we=I.stride??l.DEFAULT_STRUCTURE.stride,xe=I.elementMultiplier??l.DEFAULT_STRUCTURE.elementMultiplier,Ke=I.isBigEndian??l.DEFAULT_STRUCTURE.isBigEndian,Y=P.computeWidth(o),q=P.computeHeight(o),Qe=Y/(r-1),$e=q/(s-1);_||(Y*=u,q*=u);let $=w.radiiSquared,et=$.x,tt=$.y,it=$.z,v=65536,H=-65536,Ie=Ye.eastNorthUpToFixedFrame(E,w),ot=W.inverseTransformation(Ie,gt),ee,Ne;O&&(ee=z.geodeticLatitudeToMercatorAngle(x),Ne=1/(z.geodeticLatitudeToMercatorAngle(A)-ee));let N=ht;N.x=Number.POSITIVE_INFINITY,N.y=Number.POSITIVE_INFINITY,N.z=Number.POSITIVE_INFINITY;let R=dt;R.x=Number.NEGATIVE_INFINITY,R.y=Number.NEGATIVE_INFINITY,R.z=Number.NEGATIVE_INFINITY;let te=Number.POSITIVE_INFINITY,b=r*s,nt=C>0?r*2+s*2:0,p=b+nt,D=new Array(p),Re=new Array(p),Ue=new Array(p),Ce=O?new Array(p):[],Me=K?new Array(p):[],ie=0,oe=s,ne=0,re=r;je&&(--ie,++oe,--ne,++re);let V=1e-5;for(let i=ie;i<oe;++i){let m=i;m<0&&(m=0),m>=s&&(m=s-1);let a=o.north-$e*m;_?a=S(a):a=Z-2*j(X(-a*u));let ae=(a-x)/(A-x);ae=B.clamp(ae,0,1);let k=i===ie,G=i===oe-1;C>0&&(k?a+=V*q:G&&(a-=V*q));let be=Te(a),ce=Ee(a),Fe=it*ce,ye;O&&(ye=(z.geodeticLatitudeToMercatorAngle(a)-ee)*Ne);for(let F=ne;F<re;++F){let g=F;g<0&&(g=0),g>=r&&(g=r-1);let le=m*(r*we)+g*we,t;if(Q===1)t=J[le];else{t=0;let n;if(Ke)for(n=0;n<Q;++n)t=t*xe+J[le+n];else for(n=Q-1;n>=0;--n)t=t*xe+J[le+n]}t=t*Ze+Je,H=Math.max(H,t),v=Math.min(v,t);let h=o.west+Qe*g;_?h=S(h):h=h*u;let me=(h-M)/(L-M);me=B.clamp(me,0,1);let d=m*r+g;if(C>0){let n=F===ne,ue=F===re-1,mt=k||G||n||ue;if((k||G)&&(n||ue))continue;mt&&(t-=C,n?(d=b+(s-m-1),h-=V*Y):G?d=b+s+(r-g-1):ue?(d=b+s+r+m,h+=V*Y):k&&(d=b+s+r+s+g))}let ge=be*Te(h),he=be*Ee(h),Be=et*ge,Pe=tt*he,de=1/ze(Be*ge+Pe*he+Fe*ce),at=Be*de,ct=Pe*de,lt=Fe*de,U=new f;U.x=at+ge*t,U.y=ct+he*t,U.z=lt+ce*t,W.multiplyByPoint(ot,U,fe),f.minimumByComponent(fe,N,N),f.maximumByComponent(fe,R,R),te=Math.min(te,t),D[d]=U,Ue[d]=new _e(me,ae),Re[d]=t,O&&(Ce[d]=ye),K&&(Me[d]=w.geodeticSurfaceNormal(U))}}let rt=qe.fromPoints(D),Ae;c(T)&&(Ae=ke.fromRectangle(T,v,H,w));let Oe;pe&&(Oe=new Ve(w).computeHorizonCullingPointPossiblyUnderEllipsoid(E,D,v));let st=new De(N,R,E),se=new Ge(E,st,te,H,Ie,!1,O,K,Se,Xe),ve=new Float32Array(p*se.stride),He=0;for(let i=0;i<p;++i)He=se.encode(ve,He,D[i],Ue[i],Re[i],void 0,Ce[i],Me[i]);return{vertices:ve,maximumHeight:H,minimumHeight:v,encoding:se,boundingSphere3D:rt,orientedBoundingBox:Ae,occludeePointInScaledSpace:Oe}};var yt=l;export{Et as a,yt as b};
