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
  // ArcGIS影像图层
  const ersi = new Cesium.ArcGisMapServerImageryProvider({
    url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
  });
  // viewer 是所有API的开始
  const viewer = new Cesium.Viewer("cesiumContainer", {
    baseLayerPicker: false, //隐藏图层选择控件
    animation: false, //是否显示动画控件
    timeline: false, //是否显示时间轴控件
    fullscreenButton: false, //是否显示全屏按钮
    geocoder: false, //是否显示搜索框
    homeButton: false, //是否显示主页按钮
    navigationHelpButton: false, //是否显示帮助按钮
    sceneModePicker: false, //是否显示投影方式按钮
  });
};

window.onload=initViewer
