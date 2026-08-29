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

import{g as f}from"./chunk-V4GVME3V.js";import"./chunk-I4YBJOEH.js";import"./chunk-K2VLA3RL.js";import{b as u}from"./chunk-2RYSIQ6V.js";import"./chunk-EIVHFYAU.js";import"./chunk-HI4YI7ZZ.js";import"./chunk-SBEVXBDC.js";import"./chunk-KXGUROWT.js";import"./chunk-6QRBUUKV.js";import"./chunk-6M3ZBAB3.js";import"./chunk-SUMJ7BN4.js";import"./chunk-JJKUNYMW.js";import"./chunk-SXTMLKDV.js";import"./chunk-635BMVFD.js";import"./chunk-P2FOFSJH.js";import"./chunk-QCIAVSKB.js";import"./chunk-P2PY46XC.js";import"./chunk-LP5YXEIX.js";import"./chunk-2VS56G3P.js";import"./chunk-XLQXCDEE.js";import"./chunk-VCNFSRSF.js";import"./chunk-L34JM65V.js";import"./chunk-PD3UB5JC.js";import"./chunk-GVKNBVIN.js";import"./chunk-PEHMOUDX.js";function a(c,d){return f.createMesh(c).then(function(e){let t=e.vertices.buffer,r=e.indices.buffer,s=e.westIndicesSouthToNorth.buffer,o=e.southIndicesEastToWest.buffer,i=e.eastIndicesNorthToSouth.buffer,n=e.northIndicesWestToEast.buffer;return d.push(t,r,s,o,i,n),{verticesBuffer:t,indicesBuffer:r,vertexCountWithoutSkirts:e.vertexCountWithoutSkirts,indexCountWithoutSkirts:e.indexCountWithoutSkirts,encoding:e.encoding,westIndicesBuffer:s,southIndicesBuffer:o,eastIndicesBuffer:i,northIndicesBuffer:n}})}var T=u(a);export{T as default};
