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

import{b as d}from"./chunk-ECBAJ3RB.js";import{c as n}from"./chunk-XLQXCDEE.js";import{a as e}from"./chunk-VCNFSRSF.js";import{b as a}from"./chunk-L34JM65V.js";var s=32767,x=new n,A=new e;function D(r,c,m,l,p){let t=r.length/3,i=r.subarray(0,t),h=r.subarray(t,2*t),f=r.subarray(2*t,3*t);d.zigZagDeltaDecode(i,h,f);let u=new Float64Array(r.length);for(let o=0;o<t;++o){let g=i[o],C=h[o],y=f[o],b=a.lerp(c.west,c.east,g/s),w=a.lerp(c.south,c.north,C/s),B=a.lerp(m,l,y/s),P=n.fromRadians(b,w,B,x),v=p.cartographicToCartesian(P,A);e.pack(v,u,o*3)}return u}var F=D;export{F as a};
