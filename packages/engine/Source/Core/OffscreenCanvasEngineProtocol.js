/**
 * Message types used by {@link OffscreenCesiumWidget} and the Cesium engine worker.
 *
 * @enum {string}
 * @private
 */
const OffscreenEngineMessageType = {
  INIT: "init",
  READY: "ready",
  RESIZE: "resize",
  PICK: "pick",
  PICK_RESULT: "pickResult",
  DESTROY: "destroy",
  DESTROYED: "destroyed",
  START_RENDER_LOOP: "startRenderLoop",
  STOP_RENDER_LOOP: "stopRenderLoop",
  ERROR: "error",
};

export default Object.freeze(OffscreenEngineMessageType);
