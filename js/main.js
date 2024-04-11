const viewer = Init();
const scene = viewer.scene;

viewer.entities.add({
  id: "Tokyo",
  position: Cesium.Cartesian3.fromDegrees(136.881637, 35.170694),
  point: {
    color: Cesium.Color.RED,
    pixelSize: 8,
  },
});
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(135, 35, 5000000.0),
});


/*window.addEventListener("DOMContentLoaded", function () {
  setInterval(() => {
    console.log(viewer.clock.currentTime);
  }, 500);
  
});*/



viewer.clock.onTick.addEventListener(function (clock) {
  //console.log(clock.currentTime);
});
