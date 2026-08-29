import { OffscreenCesiumWidget } from "../../index.js";

describe("Widget/OffscreenCesiumWidget", function () {
  let container;

  beforeEach(function () {
    container = document.createElement("div");
    container.style.width = "256px";
    container.style.height = "256px";
    document.body.appendChild(container);
  });

  afterEach(function () {
    document.body.removeChild(container);
  });

  it("constructs when transferControlToOffscreen is supported", async function () {
    if (
      typeof HTMLCanvasElement === "undefined" ||
      typeof HTMLCanvasElement.prototype.transferControlToOffscreen !==
        "function"
    ) {
      return;
    }

    // Worker WebGL contexts cannot use the main-thread WebGL stub.
    if (window.webglStub) {
      return;
    }

    const widget = new OffscreenCesiumWidget(container, {
      useWorldImagery: false,
      useWorldTerrain: false,
    });

    await widget.readyPromise;

    expect(widget.canvas).toBeDefined();
    expect(widget.isDestroyed()).toBe(false);

    widget.destroy();
    expect(widget.isDestroyed()).toBe(true);
  });
});
