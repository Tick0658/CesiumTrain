var target = "";
const czmlPath="../CesiumCzml.txt"
const dataSource =  new Cesium.CzmlDataSource();
let a;

fetch(czmlPath)
  .then((response) => response.text())
  .then((data) => {

    target = JSON.parse(data);
    viewer.dataSources.add(dataSource.load(target))
    a =dataSource.getById("document")
    console.log(a)
    //viewer.dataSources.add(Cesium.CzmlDataSource.load(target))
  })
  .catch((error) => {
    console.error("エラー:", error);
  });