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
  // viewer 是所有API的开始
  const viewer = new Cesium.Viewer("cesiumContainer", {});
  // 经纬度转笛卡尔坐标
  const cartesian1 = Cesium.Cartesian3.fromDegrees(110, 20, 200);
  const cartesian2 = Cesium.Cartesian3.fromDegrees(110, 20, 300);
  console.log(cartesian1, cartesian2);

  // 笛卡尔转经纬度弧度坐标
  let cartographic = Cesium.Cartographic.fromCartesian(cartesian1);
  // 弧度坐标转角度坐标
  // let lon = 180 / Math.PI * cartographic.longitude
  // let lat = 180 / Math.PI * cartographic.latitude
  let lon = Cesium.Math.toDegrees(cartographic.longitude);
  let lat = Cesium.Math.toDegrees(cartographic.latitude);
  console.log(lon, lat);
};

window.onload=initViewer
