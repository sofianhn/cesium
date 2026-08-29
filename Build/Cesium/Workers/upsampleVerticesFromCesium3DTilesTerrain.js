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

import{g as u}from"./chunk-7JXUBC34.js";import"./chunk-I4YBJOEH.js";import"./chunk-TQWYYJ5H.js";import{b as f}from"./chunk-2RYSIQ6V.js";import"./chunk-EIVHFYAU.js";import"./chunk-2QVARIV7.js";import"./chunk-7TQOI22K.js";import"./chunk-KXGUROWT.js";import"./chunk-ECBAJ3RB.js";import"./chunk-MNBGE4N4.js";import"./chunk-SUMJ7BN4.js";import"./chunk-JJKUNYMW.js";import"./chunk-A5IIAP62.js";import"./chunk-635BMVFD.js";import"./chunk-ID66MOOJ.js";import"./chunk-QCIAVSKB.js";import"./chunk-P2PY46XC.js";import"./chunk-LP5YXEIX.js";import"./chunk-2VS56G3P.js";import"./chunk-XLQXCDEE.js";import"./chunk-VCNFSRSF.js";import"./chunk-L34JM65V.js";import"./chunk-PD3UB5JC.js";import"./chunk-GVKNBVIN.js";import"./chunk-PEHMOUDX.js";function h(c,d){let e=u.upsampleMesh(c),t=e.vertices.buffer,i=e.indices.buffer,s=e.westIndicesSouthToNorth.buffer,o=e.southIndicesEastToWest.buffer,r=e.eastIndicesNorthToSouth.buffer,n=e.northIndicesWestToEast.buffer;return d.push(t,i,s,o,r,n),{verticesBuffer:t,indicesBuffer:i,vertexCountWithoutSkirts:e.vertexCountWithoutSkirts,indexCountWithoutSkirts:e.indexCountWithoutSkirts,encoding:e.encoding,westIndicesBuffer:s,southIndicesBuffer:o,eastIndicesBuffer:r,northIndicesBuffer:n,minimumHeight:e.minimumHeight,maximumHeight:e.maximumHeight,boundingSphere:e.boundingSphere3D,orientedBoundingBox:e.orientedBoundingBox,horizonOcclusionPoint:e.horizonOcclusionPoint}}var I=f(h);export{I as default};
