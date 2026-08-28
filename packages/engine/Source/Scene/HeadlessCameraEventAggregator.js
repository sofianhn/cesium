import Cartesian2 from "../Core/Cartesian2.js";
import destroyObject from "../Core/destroyObject.js";

/**
 * A no-op camera event aggregator for headless and worker rendering contexts
 * where DOM event handling is unavailable.
 *
 * @private
 * @constructor
 */
function HeadlessCameraEventAggregator() {
  this._currentMousePosition = new Cartesian2();
}

Object.defineProperties(HeadlessCameraEventAggregator.prototype, {
  currentMousePosition: {
    get: function () {
      return this._currentMousePosition;
    },
  },

  anyButtonDown: {
    get: function () {
      return false;
    },
  },
});

HeadlessCameraEventAggregator.prototype.isMoving = function () {
  return false;
};

HeadlessCameraEventAggregator.prototype.getMovement = function () {
  return undefined;
};

HeadlessCameraEventAggregator.prototype.getLastMovement = function () {
  return undefined;
};

HeadlessCameraEventAggregator.prototype.isButtonDown = function () {
  return false;
};

HeadlessCameraEventAggregator.prototype.getStartMousePosition = function () {
  return undefined;
};

HeadlessCameraEventAggregator.prototype.getButtonPressTime = function () {
  return undefined;
};

HeadlessCameraEventAggregator.prototype.getButtonReleaseTime = function () {
  return undefined;
};

HeadlessCameraEventAggregator.prototype.reset = function () {};

HeadlessCameraEventAggregator.prototype.isDestroyed = function () {
  return false;
};

HeadlessCameraEventAggregator.prototype.destroy = function () {
  return destroyObject(this);
};

export default HeadlessCameraEventAggregator;
