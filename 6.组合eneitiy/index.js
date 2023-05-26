/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 10:32:14
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-26 10:32:16
 * @Description: 请填写简介
 */
/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 10:27:35
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-26 10:30:29
 * @Description: 请填写简介
 */
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ODAzN2EzOS1kZDMzLTQ5Y2UtYjYxMi1jMzQxNTdiMTUzN2IiLCJpZCI6NDU5NDIsImlhdCI6MTYxNTYyNDQyOX0.BucgmI6OJ-7ixj7rcQ_Qyg45DkvdHmaLrFwyMYitLcI";
const initViewer = () => {
  // viewer 是所有API的开始

  // viewer 是所有API的开始
  viewer = new Cesium.Viewer("cesiumContainer", {
    infoBox: false, //隐藏信息框
    selectionIndicator: false, //隐藏选中框
  });

  const tag = viewer.entities.add({
    position: new Cesium.Cartesian3.fromDegrees(120.5, 30, 100),
    billboard: {
      image: "../assets/position.png",
      scale: 0.3,
      color: Cesium.Color.RED,
      width: 230,
    },
  });
  const line = viewer.entities.add({
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        120.5, 30, 0, 120.5, 30, 100,
      ]),
      width: 1,
      material: Cesium.Color.AQUA,
    },
  });
  const label = viewer.entities.add({
    position: new Cesium.Cartesian3.fromDegrees(120.5, 30, 100),
    label: {
      text: "某小区",
      font: "13px",
      fillColor: Cesium.Color.WHITE,
      pixelOffset: new Cesium.Cartesian2(0, -40),
    },
  });
  viewer.zoomTo(tag); //跳转到实体

  console.log(viewer.entities);
  const arr = [1, 2, 3, 4, 5];
  arr.forEach((item) => {
    let lon = 120.5 + Math.random() * 0.002;
    let lat = 30.0 + Math.random() * 0.002;
    viewer.entities.add({
      id: item,
      position: new Cesium.Cartesian3.fromDegrees(lon, lat, 100),
      billboard: {
        image: "../assets/position.png",
        scale: 0.3,
        color: Cesium.Color.fromRandom({ alpha: 1 }),
      },
      polyline: {
        positions: Cesium.Cartesian3.fromDegreesArrayHeights([
          lon,
          lat,
          0,
          lon,
          lat,
          100,
        ]),
        width: 1,
        material: Cesium.Color.AQUA,
      },
      label: {
        text: "某小区" + item,
        font: "13px",
        fillColor: Cesium.Color.WHITE,
        pixelOffset: new Cesium.Cartesian2(0, -40),
      },
    });
  });
};

window.onload = initViewer;
