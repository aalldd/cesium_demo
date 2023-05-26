/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 13:53:23
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-26 13:58:14
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
  const position = Cesium.Cartesian3.fromDegrees(114, 30, 300);
  const orientation = Cesium.Transforms.headingPitchRollQuaternion(
    position,
    Cesium.HeadingPitchRoll.fromDegrees(90, 0, 0)
  );
  const entity = viewer.entities.add({
    position,
    orientation,
    model: {
      uri: "../assets/Cesium_Air.glb",
      minimumPixelSize: 200, //模型最小像素尺寸
      maximumScale: 5000, //最大比例尺大小
    },
  });
  viewer.zoomTo(entity);
};

window.onload = initViewer;
