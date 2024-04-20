function Init() {
  const viewer = new Cesium.Viewer("cesiumContainer", {
    //baseLayer: Cesium.ImageryLayer.fromProviderAsync(
      //Cesium.TileMapServiceImageryProvider.fromUrl(
    //    Cesium.buildModuleUrl("/Build/Cesium/Assets/Textures/NaturalEarthII")
    //  )
    //),
    //baseLayerPicker: false,
    //geocoder: false,
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


processPart();

//viewer.dataSources.add(Cesium.GeoJsonDataSource.load('../../geoMap/JapanMap/cities/cities.topojson', {}));
/*viewer.dataSources.add(Cesium.GeoJsonDataSource.load('../../geoMap/JapanMap/prefs/prefs.topojson', {stroke: Cesium.Color.HOTPINK,
  fill: Cesium.Color.PINK,
  strokeWidth: 3,
  markerSymbol: '?'}));*/
viewer.dataSources.add(Cesium.GeoJsonDataSource.load('../../geoMap/WorldMap/world.geojson', {
  
}));

viewer.clock.onTick.addEventListener(function (clock) {
  //console.log(clock.currentTime);
  if (vehicleEntity) {
    const fuel = vehicleEntity.position.getValue(clock.currentTime);
    console.log(fuel);
  }
});
