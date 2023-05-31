/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 13:53:23
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-31 15:20:38
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

  const setView = () => {
    let flyToOpts = {
      destination: {
        x: -3689145.550576342,
        y: 9014321.046112215,
        z: 3271299.847963448
      },
      orientation: {
        heading: 6.152898109215222,
        pitch: -1.2244489846093436,
        roll: 0.0000496938359031418
      }
    };
    viewer.scene.camera.setView(flyToOpts);
  };

  initRegion();
  initLabel();
  setView();
};

window.onload = initViewer;
