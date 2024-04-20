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

function processPart() {
  dataSource.process(czmlPath).then(function () {
    //if (!viewer.trackedEntity) {
    vehicleEntity = dataSource.entities.getById("Satellite/ISS");
    //}
  });
}

const viewer = Init();
const czmlPath = "../CesiumCzml.txt";
let vehicleEntity;

const dataSource = new Cesium.CzmlDataSource();
viewer.dataSources.add(dataSource);

//viewer.dataSources.add(Cesium.GeoJsonDataSource.load('../cities.topojson', {}));


processPart();

viewer.clock.onTick.addEventListener(function (clock) {
  //console.log(clock.currentTime);
  if (vehicleEntity) {
    const fuel = vehicleEntity.position.getValue(clock.currentTime);
    console.log(fuel);
  }
});
