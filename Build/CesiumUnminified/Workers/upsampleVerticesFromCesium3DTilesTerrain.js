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

import {
  Cesium3DTilesTerrainGeometryProcessor_default
} from "./chunk-6G6HGDQ6.js";
import "./chunk-MZU6WQJA.js";
import "./chunk-XVFUCYKZ.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-3XOCI6YV.js";
import "./chunk-TPIVAMNA.js";
import "./chunk-FLWL4KPH.js";
import "./chunk-RMFJSNEO.js";
import "./chunk-LPW7FM5M.js";
import "./chunk-COANWERU.js";
import "./chunk-N3NJBB2J.js";
import "./chunk-5YEYJFVE.js";
import "./chunk-JWT66AFL.js";
import "./chunk-6JN7R5TR.js";
import "./chunk-CQNFIAZU.js";
import "./chunk-GGIBQQ4X.js";
import "./chunk-DYPD7ACK.js";
import "./chunk-6ARPYBNB.js";
import "./chunk-YGFVAGYF.js";
import "./chunk-H3H5G46F.js";
import "./chunk-SSMYIYFJ.js";
import "./chunk-LXRGAO5E.js";
import "./chunk-7PWBMOHW.js";
import "./chunk-FYMTAL37.js";
import "./chunk-UZL6LXRS.js";
import "./chunk-RV2BMK2J.js";

// packages/engine/Source/Workers/upsampleVerticesFromCesium3DTilesTerrain.js
function upsampleVerticesFromCesium3DTilesTerrain(options, transferableObjects) {
  const mesh = Cesium3DTilesTerrainGeometryProcessor_default.upsampleMesh(options);
  const verticesBuffer = mesh.vertices.buffer;
  const indicesBuffer = mesh.indices.buffer;
  const westIndicesBuffer = mesh.westIndicesSouthToNorth.buffer;
  const southIndicesBuffer = mesh.southIndicesEastToWest.buffer;
  const eastIndicesBuffer = mesh.eastIndicesNorthToSouth.buffer;
  const northIndicesBuffer = mesh.northIndicesWestToEast.buffer;
  transferableObjects.push(
    verticesBuffer,
    indicesBuffer,
    westIndicesBuffer,
    southIndicesBuffer,
    eastIndicesBuffer,
    northIndicesBuffer
  );
  const result = {
    verticesBuffer,
    indicesBuffer,
    vertexCountWithoutSkirts: mesh.vertexCountWithoutSkirts,
    indexCountWithoutSkirts: mesh.indexCountWithoutSkirts,
    encoding: mesh.encoding,
    westIndicesBuffer,
    southIndicesBuffer,
    eastIndicesBuffer,
    northIndicesBuffer,
    minimumHeight: mesh.minimumHeight,
    maximumHeight: mesh.maximumHeight,
    boundingSphere: mesh.boundingSphere3D,
    orientedBoundingBox: mesh.orientedBoundingBox,
    horizonOcclusionPoint: mesh.horizonOcclusionPoint
  };
  return result;
}
var upsampleVerticesFromCesium3DTilesTerrain_default = createTaskProcessorWorker_default(
  upsampleVerticesFromCesium3DTilesTerrain
);
export {
  upsampleVerticesFromCesium3DTilesTerrain_default as default
};
