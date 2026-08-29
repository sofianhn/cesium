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

import{a as v}from"./chunk-XLQXCDEE.js";import{a as I}from"./chunk-VCNFSRSF.js";import{a as w,b as B}from"./chunk-PD3UB5JC.js";import{a as e}from"./chunk-GVKNBVIN.js";var y={};y.clipTriangleAtAxisAlignedThreshold=function(n,a,f,o,p,i){if(!e(n))throw new w("threshold is required.");if(!e(a))throw new w("keepAbove is required.");if(!e(f))throw new w("u0 is required.");if(!e(o))throw new w("u1 is required.");if(!e(p))throw new w("u2 is required.");e(i)?i.length=0:i=[];let m,c,h;a?(m=f<n,c=o<n,h=p<n):(m=f>n,c=o>n,h=p>n);let R=m+c+h,O,q,s,b,g,d;return R===1?m?(O=(n-f)/(o-f),q=(n-f)/(p-f),i.push(1),i.push(2),q!==1&&(i.push(-1),i.push(0),i.push(2),i.push(q)),O!==1&&(i.push(-1),i.push(0),i.push(1),i.push(O))):c?(s=(n-o)/(p-o),b=(n-o)/(f-o),i.push(2),i.push(0),b!==1&&(i.push(-1),i.push(1),i.push(0),i.push(b)),s!==1&&(i.push(-1),i.push(1),i.push(2),i.push(s))):h&&(g=(n-p)/(f-p),d=(n-p)/(o-p),i.push(0),i.push(1),d!==1&&(i.push(-1),i.push(2),i.push(1),i.push(d)),g!==1&&(i.push(-1),i.push(2),i.push(0),i.push(g))):R===2?!m&&f!==n?(b=(n-o)/(f-o),g=(n-p)/(f-p),i.push(0),i.push(-1),i.push(1),i.push(0),i.push(b),i.push(-1),i.push(2),i.push(0),i.push(g)):!c&&o!==n?(d=(n-p)/(o-p),O=(n-f)/(o-f),i.push(1),i.push(-1),i.push(2),i.push(1),i.push(d),i.push(-1),i.push(0),i.push(1),i.push(O)):!h&&p!==n&&(q=(n-f)/(p-f),s=(n-o)/(p-o),i.push(2),i.push(-1),i.push(0),i.push(2),i.push(q),i.push(-1),i.push(1),i.push(2),i.push(s)):R!==3&&(i.push(0),i.push(1),i.push(2)),i};y.computeBarycentricCoordinates=function(n,a,f,o,p,i,m,c,h){if(!e(n))throw new w("x is required.");if(!e(a))throw new w("y is required.");if(!e(f))throw new w("x1 is required.");if(!e(o))throw new w("y1 is required.");if(!e(p))throw new w("x2 is required.");if(!e(i))throw new w("y2 is required.");if(!e(m))throw new w("x3 is required.");if(!e(c))throw new w("y3 is required.");let R=f-m,O=m-p,q=i-c,s=o-c,b=1/(q*R+O*s),g=a-c,d=n-m,A=(q*d+O*g)*b,C=(-s*d+R*g)*b,D=1-A-C;return e(h)?(h.x=A,h.y=C,h.z=D,h):new I(A,C,D)};y.computeLineSegmentLineSegmentIntersection=function(n,a,f,o,p,i,m,c,h){B.typeOf.number("x00",n),B.typeOf.number("y00",a),B.typeOf.number("x01",f),B.typeOf.number("y01",o),B.typeOf.number("x10",p),B.typeOf.number("y10",i),B.typeOf.number("x11",m),B.typeOf.number("y11",c);let R=(m-p)*(a-i)-(c-i)*(n-p),O=(f-n)*(a-i)-(o-a)*(n-p),q=(c-i)*(f-n)-(m-p)*(o-a);if(q===0)return;let s=R/q,b=O/q;if(s>=0&&s<=1&&b>=0&&b<=1)return e(h)||(h=new v),h.x=n+s*(f-n),h.y=a+s*(o-a),h};var E=y;export{E as a};
