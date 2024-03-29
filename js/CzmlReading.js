var _target = "";

fetch("../CesiumCzml.txt")
  .then((response) => response.text())
  .then((data) => {
    _target = JSON.parse(data);
    viewer.dataSources.add(Cesium.CzmlDataSource.load(_target))
  })
  .catch((error) => {
    console.error("エラー:", error);
  });