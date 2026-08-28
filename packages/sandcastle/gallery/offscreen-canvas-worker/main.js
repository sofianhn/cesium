import * as Cesium from "cesium";
import Sandcastle from "Sandcastle";

const supportsOffscreen =
  typeof HTMLCanvasElement !== "undefined" &&
  typeof HTMLCanvasElement.prototype.transferControlToOffscreen ===
    "function" &&
  typeof OffscreenCanvas !== "undefined";

if (!supportsOffscreen) {
  window.alert(
    "This demo requires a browser that supports transferControlToOffscreen.",
  );
} else {
  const widget = new Cesium.OffscreenCesiumWidget("cesiumContainer", {
    useWorldImagery: true,
    useWorldTerrain: false,
  });

  widget.readyPromise
    .then(function () {
      document.getElementById("loadingOverlay").style.display = "none";
      widget.resize();
    })
    .catch(function (error) {
      window.alert(`Failed to initialize OffscreenCesiumWidget: ${error}`);
    });

  Sandcastle.addToolbarButton("Pick center", async function () {
    const canvas = widget.canvas;
    const x = canvas.clientWidth / 2;
    const y = canvas.clientHeight / 2;
    const picked = await widget.pick(x, y);
    window.alert(
      picked ? `Picked object id: ${picked.id}` : "Nothing picked at center",
    );
  });
}
