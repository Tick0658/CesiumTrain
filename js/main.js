const viewer = new Cesium.Viewer("cesiumContainer", {
    baseLayer: Cesium.ImageryLayer.fromProviderAsync(
      Cesium.TileMapServiceImageryProvider.fromUrl(
        Cesium.buildModuleUrl("../Assets/Textures/NaturalEarthII")
      )
    ),
    baseLayerPicker: false,
    geocoder: false,
  });
  
const scene = viewer.scene;
//viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));


  

viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(135, 35, 5000000.0),
});

viewer.entities.add({
  id: "Tokyo",
  position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
  point: {
    color: Cesium.Color.RED,
    pixelSize: 8,
  },
});

