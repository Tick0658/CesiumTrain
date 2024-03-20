const viewer = new Cesium.Viewer("cesiumContainer", {
  baseLayer: Cesium.ImageryLayer.fromProviderAsync(
    Cesium.TileMapServiceImageryProvider.fromUrl(
      Cesium.buildModuleUrl("/Build/Cesium/Assets/Textures/NaturalEarthII")
    )
  ),
  //baseLayerPicker: false,
  geocoder: false,
});

const scene = viewer.scene;
//viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));
viewer.entities.add({
  id: "Tokyo",
  position: Cesium.Cartesian3.fromDegrees(136.881637,35.170694),
  point: {
    color: Cesium.Color.RED,
    pixelSize: 8,
  },
});
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(135, 35, 5000000.0),
});


