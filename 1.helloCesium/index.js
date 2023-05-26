/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 10:11:01
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-26 10:21:17
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
  const viewer = new Cesium.Viewer("sceneContainer", {
    imageryProvider: ersi, //自定义图层,默认的是谷歌的影像图层
    baseLayerPicker: false, //隐藏图层选择控件
    terrainProvider: Cesium.createWorldTerrain({
      requestWaterMask: true, //水面特效
    }), //地形图层
  });
};

window.onload=initViewer
