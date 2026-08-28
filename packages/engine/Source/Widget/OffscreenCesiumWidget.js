import buildModuleUrl from "../Core/buildModuleUrl.js";
import defined from "../Core/defined.js";
import destroyObject from "../Core/destroyObject.js";
import DeveloperError from "../Core/DeveloperError.js";
import FeatureDetection from "../Core/FeatureDetection.js";
import Frozen from "../Core/Frozen.js";
import getCanvasClientHeight from "../Core/getCanvasClientHeight.js";
import getCanvasClientWidth from "../Core/getCanvasClientWidth.js";
import OffscreenEngineMessageType from "../Core/OffscreenCanvasEngineProtocol.js";
import RuntimeError from "../Core/RuntimeError.js";
import getElement from "../DataSources/getElement.js";

function createEngineWorker() {
  if (!FeatureDetection.supportsEsmWebWorkers()) {
    throw new RuntimeError(
      "This browser does not support ECMAScript modules in web workers.",
    );
  }

  return new Worker(buildModuleUrl("Workers/cesiumEngineWorker.js"), {
    type: "module",
  });
}

function supportsTransferControlToOffscreen() {
  return (
    typeof HTMLCanvasElement !== "undefined" &&
    typeof HTMLCanvasElement.prototype.transferControlToOffscreen === "function"
  );
}

/**
 * A widget that renders Cesium in a Web Worker using {@link https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas|OffscreenCanvas}.
 * The main thread owns a display {@link HTMLCanvasElement} for presentation and input,
 * while the worker owns the WebGL context and {@link Scene}.
 *
 * @alias OffscreenCesiumWidget
 * @constructor
 *
 * @param {Element|string} container The DOM element or ID that will contain the widget.
 * @param {object} [options] Object with the following properties:
 * @param {ContextOptions} [options.contextOptions] Context and WebGL creation properties passed to {@link Scene}.
 * @param {number} [options.pixelRatio] The pixel ratio to use when sizing the canvas buffer. Defaults to <code>window.devicePixelRatio</code>.
 * @param {boolean} [options.useWorldImagery=true] If true, add Cesium ion world imagery to the scene.
 * @param {boolean} [options.useWorldTerrain=false] If true, add Cesium ion world terrain to the scene.
 *
 * @exception {DeveloperError} container is required.
 * @exception {RuntimeError} transferControlToOffscreen or ESM web workers are not supported.
 *
 * @example
 * const widget = new Cesium.OffscreenCesiumWidget("cesiumContainer");
 * await widget.readyPromise;
 */
function OffscreenCesiumWidget(container, options) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(container)) {
    throw new DeveloperError("container is required.");
  }

  if (!supportsTransferControlToOffscreen()) {
    throw new RuntimeError("transferControlToOffscreen is not supported.");
  }
  //>>includeEnd('debug');

  container = getElement(container);
  options = options ?? Frozen.EMPTY_OBJECT;

  const element = document.createElement("div");
  element.className = "cesium-widget";
  container.appendChild(element);

  const canvas = document.createElement("canvas");
  canvas.oncontextmenu = function () {
    return false;
  };
  canvas.onselectstart = function () {
    return false;
  };
  element.appendChild(canvas);

  const offscreen = canvas.transferControlToOffscreen();
  const pixelRatio = options.pixelRatio ?? window.devicePixelRatio;

  this._element = element;
  this._container = container;
  this._canvas = canvas;
  this._pixelRatio = pixelRatio;
  this._pickRequestId = 0;
  this._pickRequests = {};
  this._destroyed = false;

  let resolveReady;
  let rejectReady;
  this._readyPromise = new Promise(function (resolve, reject) {
    resolveReady = resolve;
    rejectReady = reject;
  });

  const worker = createEngineWorker();
  this._worker = worker;

  worker.onmessage = (event) => {
    this._handleWorkerMessage(event.data);
  };

  worker.onerror = (event) => {
    const error = new RuntimeError(
      event.message ?? "OffscreenCesiumWidget worker failed.",
    );
    if (defined(rejectReady)) {
      rejectReady(error);
      rejectReady = undefined;
      resolveReady = undefined;
    }
  };

  const width = getCanvasClientWidth(canvas);
  const height = getCanvasClientHeight(canvas);

  worker.postMessage(
    {
      type: OffscreenEngineMessageType.INIT,
      canvas: offscreen,
      width: width,
      height: height,
      pixelRatio: pixelRatio,
      contextOptions: options.contextOptions,
      useWorldImagery: options.useWorldImagery ?? true,
      useWorldTerrain: options.useWorldTerrain ?? false,
    },
    [offscreen],
  );

  this._resolveReady = resolveReady;
  this._rejectReady = rejectReady;

  if (typeof ResizeObserver !== "undefined") {
    this._resizeObserver = new ResizeObserver(() => {
      this.resize();
    });
    this._resizeObserver.observe(canvas);
  } else if (defined(window.addEventListener)) {
    this._resizeListener = () => {
      this.resize();
    };
    window.addEventListener("resize", this._resizeListener, false);
  }
}

Object.defineProperties(OffscreenCesiumWidget.prototype, {
  /**
   * Gets the display canvas element. Rendering occurs on a transferred
   * {@link OffscreenCanvas} in the worker.
   *
   * @memberof OffscreenCesiumWidget.prototype
   * @type {HTMLCanvasElement}
   * @readonly
   */
  canvas: {
    get: function () {
      return this._canvas;
    },
  },

  /**
   * A promise that resolves when the worker scene has been initialized.
   *
   * @memberof OffscreenCesiumWidget.prototype
   * @type {Promise<void>}
   * @readonly
   */
  readyPromise: {
    get: function () {
      return this._readyPromise;
    },
  },
});

/**
 * @private
 */
OffscreenCesiumWidget.prototype._handleWorkerMessage = function (data) {
  if (this._destroyed) {
    return;
  }

  switch (data.type) {
    case OffscreenEngineMessageType.READY:
      if (defined(this._resolveReady)) {
        this._resolveReady();
        this._resolveReady = undefined;
        this._rejectReady = undefined;
      }
      break;
    case OffscreenEngineMessageType.PICK_RESULT: {
      const request = this._pickRequests[data.id];
      if (defined(request)) {
        request.resolve(data.picked);
        delete this._pickRequests[data.id];
      }
      break;
    }
    case OffscreenEngineMessageType.ERROR:
      if (defined(this._rejectReady)) {
        this._rejectReady(new RuntimeError(data.message));
        this._resolveReady = undefined;
        this._rejectReady = undefined;
      }
      break;
    default:
      break;
  }
};

/**
 * Updates the canvas size in the worker.
 */
OffscreenCesiumWidget.prototype.resize = function () {
  if (this._destroyed) {
    return;
  }

  const canvas = this._canvas;
  const width = getCanvasClientWidth(canvas);
  const height = getCanvasClientHeight(canvas);

  this._worker.postMessage({
    type: OffscreenEngineMessageType.RESIZE,
    width: width,
    height: height,
    pixelRatio: this._pixelRatio,
  });
};

/**
 * Picks an object at the given window coordinates in the worker scene.
 *
 * @param {number} x The x coordinate in CSS pixels relative to the canvas.
 * @param {number} y The y coordinate in CSS pixels relative to the canvas.
 * @returns {Promise<object|undefined>} A promise that resolves to the picked object metadata, if any.
 */
OffscreenCesiumWidget.prototype.pick = function (x, y) {
  //>>includeStart('debug', pragmas.debug);
  if (!defined(x) || !defined(y)) {
    throw new DeveloperError("x and y are required.");
  }
  //>>includeEnd('debug');

  const id = ++this._pickRequestId;
  const widget = this;

  return new Promise(function (resolve, reject) {
    widget._pickRequests[id] = {
      resolve: resolve,
      reject: reject,
    };

    widget._worker.postMessage({
      type: OffscreenEngineMessageType.PICK,
      id: id,
      x: x,
      y: y,
    });
  });
};

/**
 * @returns {boolean} true if this object was destroyed; otherwise, false.
 */
OffscreenCesiumWidget.prototype.isDestroyed = function () {
  return this._destroyed;
};

/**
 * Destroys the widget and terminates the worker.
 */
OffscreenCesiumWidget.prototype.destroy = function () {
  if (this._destroyed) {
    return;
  }

  this._destroyed = true;

  if (defined(this._resizeObserver)) {
    this._resizeObserver.disconnect();
    this._resizeObserver = undefined;
  }

  if (defined(this._resizeListener) && defined(window.removeEventListener)) {
    window.removeEventListener("resize", this._resizeListener, false);
    this._resizeListener = undefined;
  }

  if (defined(this._worker)) {
    this._worker.postMessage({
      type: OffscreenEngineMessageType.DESTROY,
    });
    this._worker.terminate();
    this._worker = undefined;
  }

  destroyObject(this);
};

export default OffscreenCesiumWidget;
