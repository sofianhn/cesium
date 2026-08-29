import Cartesian2 from "../Core/Cartesian2.js";
import Cartesian3 from "../Core/Cartesian3.js";
import Color from "../Core/Color.js";
import defined from "../Core/defined.js";
import Ellipsoid from "../Core/Ellipsoid.js";
import Ion from "../Core/Ion.js";
import OffscreenEngineMessageType from "../Core/OffscreenCanvasEngineProtocol.js";
import Globe from "../Scene/Globe.js";
import ImageryLayer from "../Scene/ImageryLayer.js";
import Moon from "../Scene/Moon.js";
import OpenStreetMapImageryProvider from "../Scene/OpenStreetMapImageryProvider.js";
import Scene from "../Scene/Scene.js";
import SkyAtmosphere from "../Scene/SkyAtmosphere.js";
import SkyBox from "../Scene/SkyBox.js";
import Sun from "../Scene/Sun.js";
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

    try {
      scene.initializeFrame();
      scene.render();
    } catch (error) {
      self.postMessage({
        type: OffscreenEngineMessageType.ERROR,
        message: error.message,
        stack: error.stack,
      });
    }
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

function configureSceneEnvironment(data) {
  const ellipsoid = Ellipsoid.WGS84;
  const simpleGlobe = data.simpleGlobe === true;

  scene.globe = new Globe(ellipsoid);
  scene.globe.enableLighting = false;
  scene.globe.showGroundAtmosphere = !simpleGlobe;
  scene.globe.showWaterEffect = !simpleGlobe;
  scene.globe.dynamicAtmosphereLighting = false;
  scene.globe.dynamicAtmosphereLightingFromSun = false;

  if (!simpleGlobe) {
    scene.skyBox = SkyBox.createEarthSkyBox();
    scene.sun = new Sun();
    scene.moon = new Moon();
    scene.moon.show = false;
    scene.skyAtmosphere = new SkyAtmosphere(ellipsoid);
  } else {
    scene.sun = undefined;
    scene.moon = undefined;
    scene.skyBox = undefined;
    scene.skyAtmosphere = undefined;
  }

  scene.camera.constrainedAxis = Cartesian3.UNIT_Z;
  resetCameraView();
}

function resetCameraView() {
  scene.camera.setView({
    destination: Cartesian3.fromDegrees(-98.0, 40.0, 20000000.0),
  });
}

function addImagery(data) {
  if (data.useOpenStreetMapImagery === true) {
    scene.imageryLayers.add(
      new ImageryLayer(
        new OpenStreetMapImageryProvider({
          url: "https://tile.openstreetmap.org/",
        }),
      ),
    );
    return;
  }

  if (data.useWorldImagery !== false) {
    scene.imageryLayers.add(ImageryLayer.fromWorldImagery());
  }
}

function shouldUseGlobe(data) {
  if (data.useGlobe === false) {
    return false;
  }

  return (
    data.useWorldImagery !== false ||
    data.useOpenStreetMapImagery === true ||
    data.useWorldTerrain === true
  );
}

function handleInit(data) {
  if (defined(data.baseUrl)) {
    self.CESIUM_BASE_URL = data.baseUrl;
  }

  if (defined(data.ionAccessToken)) {
    Ion.defaultAccessToken = data.ionAccessToken;
  }

  const canvas = data.canvas;
  const pixelRatio = data.pixelRatio ?? 1.0;
  canvas.width = Math.max(1, Math.floor(data.width * pixelRatio));
  canvas.height = Math.max(1, Math.floor(data.height * pixelRatio));

  const simpleGlobe = data.simpleGlobe === true;

  scene = new Scene({
    canvas: data.canvas,
    contextOptions: data.contextOptions,
    orderIndependentTranslucency: !simpleGlobe,
    msaaSamples: simpleGlobe ? 1 : 4,
    scene3DOnly: simpleGlobe,
  });

  scene.resize(data.width, data.height, data.pixelRatio);

  if (shouldUseGlobe(data)) {
    configureSceneEnvironment(data);
    addImagery(data);

    if (data.useWorldTerrain === true) {
      scene.terrain = Terrain.fromWorldTerrain();
    }
  }

  if (defined(data.backgroundColor)) {
    scene.backgroundColor = Color.fromBytes(
      data.backgroundColor[0],
      data.backgroundColor[1],
      data.backgroundColor[2],
      data.backgroundColor[3] ?? 255,
    );
  } else if (shouldUseGlobe(data)) {
    scene.backgroundColor = Color.fromBytes(25, 45, 85, 255);
  }

  startRenderLoop();
  self.postMessage({
    type: OffscreenEngineMessageType.READY,
    drawingBufferWidth: scene.drawingBufferWidth,
    drawingBufferHeight: scene.drawingBufferHeight,
  });
}

function handleResize(data) {
  if (!defined(scene)) {
    return;
  }

  scene.resize(data.width, data.height, data.pixelRatio);
  resetCameraView();
}

function handleCameraDrag(data) {
  if (!defined(scene)) {
    return;
  }

  const camera = scene.camera;
  const sensitivity = 0.005;
  camera.rotateRight(data.deltaX * sensitivity);
  camera.rotateUp(-data.deltaY * sensitivity);
}

function handleCameraZoom(data) {
  if (!defined(scene)) {
    return;
  }

  const camera = scene.camera;
  const amount =
    Math.abs(data.delta) * (camera.positionCartographic.height * 0.001 + 1.0);
  if (data.delta > 0) {
    camera.zoomIn(amount);
  } else {
    camera.zoomOut(amount);
  }
}

function handleSamplePixel(data) {
  if (!defined(scene)) {
    self.postMessage({
      type: OffscreenEngineMessageType.SAMPLE_PIXEL_RESULT,
      id: data.id,
      color: undefined,
    });
    return;
  }

  scene.render();

  const pixelRatio = scene.pixelRatio;
  const pixelX = Math.floor(data.x * pixelRatio);
  const pixelY = Math.floor(
    scene.drawingBufferHeight - data.y * pixelRatio - 1,
  );

  const pixels = scene.context.readPixels({
    x: pixelX,
    y: pixelY,
    width: 1,
    height: 1,
  });

  self.postMessage({
    type: OffscreenEngineMessageType.SAMPLE_PIXEL_RESULT,
    id: data.id,
    color: [pixels[0], pixels[1], pixels[2], pixels[3]],
  });
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
      case OffscreenEngineMessageType.SAMPLE_PIXEL:
        handleSamplePixel(data);
        break;
      case OffscreenEngineMessageType.CAMERA_DRAG:
        handleCameraDrag(data);
        break;
      case OffscreenEngineMessageType.CAMERA_ZOOM:
        handleCameraZoom(data);
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
