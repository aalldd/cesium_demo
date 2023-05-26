/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 10:27:35
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-26 10:54:10
 * @Description: 请填写简介
 */
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ODAzN2EzOS1kZDMzLTQ5Y2UtYjYxMi1jMzQxNTdiMTUzN2IiLCJpZCI6NDU5NDIsImlhdCI6MTYxNTYyNDQyOX0.BucgmI6OJ-7ixj7rcQ_Qyg45DkvdHmaLrFwyMYitLcI";

const initViewer = () => {
  // viewer 是所有API的开始
  viewer = new Cesium.Viewer("cesiumContainer", {
    infoBox: false, //隐藏信息框
    selectionIndicator: false, //隐藏选中框
  });
  //CallbackProperty   生成一个动态的实体
  let lon=120,
    lat=30,
    num = 0;

  const linePos=()=>{
    lon=lon+num;
    lat=lon+num;
    return Cesium.Cartesian3.fromDegreesArray([120, 30, lon, lat]);
  }
  const line = viewer.entities.add({
    polyline: {
      positions: new Cesium.CallbackProperty(linePos, false), //不传false动不起来
      width: 5,
      material: Cesium.Color.YELLOW,
    },
  });
  viewer.zoomTo(line);
  requestAnimationFrame(()=>{
    num+=0.005;
  })

  //Cesium.Cartesian3.fromDegreesArray([120, 30, 121, 31])
};

window.onload = initViewer;
