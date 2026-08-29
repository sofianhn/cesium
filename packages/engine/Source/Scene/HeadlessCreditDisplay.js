import destroyObject from "../Core/destroyObject.js";

/**
 * A no-op credit display for headless and worker rendering contexts where DOM
 * elements are unavailable.
 *
 * @private
 * @constructor
 */
function HeadlessCreditDisplay() {
  this.container = {
    style: {
      visibility: "",
    },
  };
}

HeadlessCreditDisplay.prototype.addCreditToNextFrame = function () {};

HeadlessCreditDisplay.prototype.addStaticCredit = function () {};

HeadlessCreditDisplay.prototype.beginFrame = function () {};

HeadlessCreditDisplay.prototype.endFrame = function () {};

HeadlessCreditDisplay.prototype.update = function () {};

HeadlessCreditDisplay.prototype.destroy = function () {
  return destroyObject(this);
};

export default HeadlessCreditDisplay;
