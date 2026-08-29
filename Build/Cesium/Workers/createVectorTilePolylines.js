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

import{a as W}from"./chunk-KSE6WBR7.js";import{b as _}from"./chunk-2RYSIQ6V.js";import"./chunk-6QRBUUKV.js";import{a as A}from"./chunk-JJKUNYMW.js";import{c as S,w as k}from"./chunk-P2FOFSJH.js";import"./chunk-QCIAVSKB.js";import"./chunk-P2PY46XC.js";import"./chunk-LP5YXEIX.js";import"./chunk-2VS56G3P.js";import{d as g}from"./chunk-XLQXCDEE.js";import{a as t}from"./chunk-VCNFSRSF.js";import"./chunk-L34JM65V.js";import"./chunk-PD3UB5JC.js";import"./chunk-GVKNBVIN.js";import"./chunk-PEHMOUDX.js";var K=new k,V=new g,z=new t,I={min:void 0,max:void 0};function nt(n){n=new Float64Array(n);let o=0;I.min=n[o++],I.max=n[o++],k.unpack(n,o,K),o+=k.packedLength,g.unpack(n,o,V),o+=g.packedLength,t.unpack(n,o,z)}function ot(n){let o=n.length,m=new Uint32Array(o+1),w=0;for(let f=0;f<o;++f)m[f]=w,w+=n[f];return m[o]=w,m}var C=new t,M=new t,O=new t,et=new t,G=new t;function st(n,o){let m=new Uint16Array(n.positions),w=new Uint16Array(n.widths),f=new Uint32Array(n.counts),Y=new Uint16Array(n.batchIds);nt(n.packedBuffer);let q=K,J=V,E=z,Q=I.min,X=I.max,e=W(m,q,Q,X,J),U=e.length/3,h=U*4-4,N=new Float32Array(h*3),T=new Float32Array(h*3),v=new Float32Array(h*3),P=new Float32Array(h*2),D=new Uint16Array(h),y=0,R=0,Z=0,c,d=0,F=f.length;for(c=0;c<F;++c){let r=f[c],$=w[c],j=Y[c];for(let a=0;a<r;++a){let l;if(a===0){let s=t.unpack(e,d*3,C),x=t.unpack(e,(d+1)*3,M);l=t.subtract(s,x,O),t.add(s,l,l)}else l=t.unpack(e,(d+a-1)*3,O);let H=t.unpack(e,(d+a)*3,et),p;if(a===r-1){let s=t.unpack(e,(d+r-1)*3,C),x=t.unpack(e,(d+r-2)*3,M);p=t.subtract(s,x,G),t.add(s,p,p)}else p=t.unpack(e,(d+a+1)*3,G);t.subtract(l,E,l),t.subtract(H,E,H),t.subtract(p,E,p);let B=a===0?2:0,tt=a===r-1?2:4;for(let s=B;s<tt;++s){t.pack(H,N,y),t.pack(l,T,y),t.pack(p,v,y),y+=3;let x=s-2<0?-1:1;P[R++]=2*(s%2)-1,P[R++]=x*$,D[Z++]=j}}d+=r}let i=A.createTypedArray(h,U*6-6),u=0,b=0;for(F=U-1,c=0;c<F;++c)i[b++]=u,i[b++]=u+2,i[b++]=u+1,i[b++]=u+1,i[b++]=u+2,i[b++]=u+3,u+=4;o.push(N.buffer,T.buffer,v.buffer),o.push(P.buffer,D.buffer,i.buffer);let L={indexDatatype:i.BYTES_PER_ELEMENT===2?A.UNSIGNED_SHORT:A.UNSIGNED_INT,currentPositions:N.buffer,previousPositions:T.buffer,nextPositions:v.buffer,expandAndWidth:P.buffer,batchIds:D.buffer,indices:i.buffer};if(n.keepDecodedPositions){let r=ot(f);o.push(e.buffer,r.buffer),L=S(L,{decodedPositions:e.buffer,decodedPositionOffsets:r.buffer})}return L}var lt=_(st);export{lt as default};
