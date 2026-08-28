import Cartesian2 from "../Core/Cartesian2.js";
import defined from "../Core/defined.js";
import OffscreenEngineMessageType from "../Core/OffscreenCanvasEngineProtocol.js";
import ImageryLayer from "../Scene/ImageryLayer.js";
import Scene from "../Scene/Scene.js";
import Terrain from "../Scene/Terrain.js";

let scene;
let animationFrameId;
let rendering = false;

function startRenderLoop() {
  if (rendering || !defined(scene)) {
    return;
  }
  rendering = true;

  function frame() {
    if (!defined(scene) || !rendering) {
      return;
    }

    scene.initializeFrame();
    scene.render();
    animationFrameId = requestAnimationFrame(frame);
  }

  animationFrameId = requestAnimationFrame(frame);
}

function stopRenderLoop() {
  rendering = false;
  if (defined(animationFrameId)) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = undefined;
  }
}

function destroyEngine() {
  stopRenderLoop();
  if (defined(scene)) {
    scene.destroy();
    scene = undefined;
  }
}

function serializePick(picked) {
  if (!defined(picked)) {
    return undefined;
  }

  return {
    id: picked.id,
  };
}

function handleInit(data) {
  scene = new Scene({
    canvas: data.canvas,
    contextOptions: data.contextOptions,
  });

  scene.resize(data.width, data.height, data.pixelRatio);

  if (data.useWorldImagery !== false) {
    scene.imageryLayers.add(ImageryLayer.fromWorldImagery());
  }

  if (data.useWorldTerrain === true) {
    scene.terrain = Terrain.fromWorldTerrain();
  }

  startRenderLoop();
  self.postMessage({
    type: OffscreenEngineMessageType.READY,
  });
}

function handleResize(data) {
  if (!defined(scene)) {
    return;
  }

  scene.resize(data.width, data.height, data.pixelRatio);
}

function handlePick(data) {
  if (!defined(scene)) {
    self.postMessage({
      type: OffscreenEngineMessageType.PICK_RESULT,
      id: data.id,
      picked: undefined,
    });
    return;
  }

  const picked = scene.pick(new Cartesian2(data.x, data.y));
  self.postMessage({
    type: OffscreenEngineMessageType.PICK_RESULT,
    id: data.id,
    picked: serializePick(picked),
  });
}

self.onmessage = function (event) {
  const data = event.data;
  try {
    switch (data.type) {
      case OffscreenEngineMessageType.INIT:
        handleInit(data);
        break;
      case OffscreenEngineMessageType.RESIZE:
        handleResize(data);
        break;
      case OffscreenEngineMessageType.PICK:
        handlePick(data);
        break;
      case OffscreenEngineMessageType.DESTROY:
        destroyEngine();
        self.postMessage({
          type: OffscreenEngineMessageType.DESTROYED,
        });
        break;
      case OffscreenEngineMessageType.START_RENDER_LOOP:
        startRenderLoop();
        break;
      case OffscreenEngineMessageType.STOP_RENDER_LOOP:
        stopRenderLoop();
        break;
      default:
        break;
    }
  } catch (error) {
    self.postMessage({
      type: OffscreenEngineMessageType.ERROR,
      message: error.message,
      stack: error.stack,
    });
  }
};
