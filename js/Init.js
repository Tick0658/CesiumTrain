function Init() {
    const viewer = new Cesium.Viewer("cesiumContainer", {
      baseLayer: Cesium.ImageryLayer.fromProviderAsync(
        Cesium.TileMapServiceImageryProvider.fromUrl(
          Cesium.buildModuleUrl("/Build/Cesium/Assets/Textures/NaturalEarthII")
        )
      ),
      //baseLayerPicker: false,
      geocoder: false,
    });
  
    return viewer;
  }