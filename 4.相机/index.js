/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 10:11:01
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-26 10:23:07
 * @Description: 请填写简介
 */
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ODAzN2EzOS1kZDMzLTQ5Y2UtYjYxMi1jMzQxNTdiMTUzN2IiLCJpZCI6NDU5NDIsImlhdCI6MTYxNTYyNDQyOX0.BucgmI6OJ-7ixj7rcQ_Qyg45DkvdHmaLrFwyMYitLcI";
const initViewer = () => {
  const viewer = new Cesium.Viewer("cesiumContainer", {});
  const position = Cesium.Cartesian3.fromDegrees(110, 20, 20000);

  // setView通过定义相机的飞行目的，直接跳转到目的地
  //   viewer.camera.setView({
  //     destination: position,
  //     orientation: {
  //       // 默认(0,-90,0)
  //       heading: Cesium.Math.toRadians(0),
  //       pitch: Cesium.Math.toRadians(-90),
  //       roll: Cesium.Math.toRadians(0),
  //     },
  //   });

  //flyTo快速切换视角,带飞行动画,可以设置飞行时长
  //   setTimeout(() => {
  //     viewer.camera.flyTo({
  //       destination: position,
  //       duration: 3,
  //     });
  //   }, 2000);

  // lookAt将视角固定在设置的点上，可以选择视角，但不能改变位置
  const position2 = Cesium.Cartesian3.fromDegrees(110, 20);
  viewer.camera.lookAt(
    position2,
    new Cesium.HeadingPitchRange(
      Cesium.Math.toRadians(0),
      Cesium.Math.toRadians(-90),
      20000
    )
  );
};

window.onload = initViewer;
