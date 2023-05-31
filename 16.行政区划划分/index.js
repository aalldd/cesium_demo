/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 13:53:23
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-31 11:16:02
 * @Description: 请填写简介
 */
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ODAzN2EzOS1kZDMzLTQ5Y2UtYjYxMi1jMzQxNTdiMTUzN2IiLCJpZCI6NDU5NDIsImlhdCI6MTYxNTYyNDQyOX0.BucgmI6OJ-7ixj7rcQ_Qyg45DkvdHmaLrFwyMYitLcI";
let viewer, pickModel;
const initViewer = () => {
  // viewer 是所有API的开始
  viewer = new Cesium.Viewer("cesiumContainer", {
    shouldAnimate: true, //动画效果
    shadows: true, //是否显示阴影
  });
  const initRegion = () => {
    new Cesium.GeoJsonDataSource()
      .load("./chinaregion.json")
      .then((geoJsonDataSource) => {
        viewer.dataSources.add(geoJsonDataSource);
        //设置面的颜色
        geoJsonDataSource.entities.values.forEach((entity) => {
          entity.polygon.material = Cesium.Color.fromRandom().withAlpha(0.4);
        });
      });
  };
  const initLabel = () => {
    fetch("./chinalabel.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let features = res.features;
        let label3d;
        features.forEach((feature) => {
          let coordinates = feature.geometry.coordinates;
          let label = feature.properties.NAME;
          let position = Cesium.Cartesian3.fromDegrees(
            coordinates[0],
            coordinates[1],
            0
          );
          label3d = new CesiumLabel3D(viewer, position, label);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const position = Cesium.Cartesian3.fromDegrees(110, 20, 20000);
  //设置视图
  setTimeout(() => {
    viewer.camera.flyTo({
      destination: position,
      duration: 3,
    });
  }, 2000);

  initRegion();
  initLabel();
};

window.onload = initViewer;
