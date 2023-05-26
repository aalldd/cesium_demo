/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 10:27:35
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-26 10:38:46
 * @Description: 请填写简介
 */
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ODAzN2EzOS1kZDMzLTQ5Y2UtYjYxMi1jMzQxNTdiMTUzN2IiLCJpZCI6NDU5NDIsImlhdCI6MTYxNTYyNDQyOX0.BucgmI6OJ-7ixj7rcQ_Qyg45DkvdHmaLrFwyMYitLcI";
let viewer,
  point1,
  point2,
  point3,
  bluePoints = [];

const toDel = () => {
  //直接删除
  //viewer.entities.remove(point);
  //先查后删
  //const entity = viewer.entities.getById("point1");
  //viewer.entities.remove(entity);
  //通过id删除
  //viewer.entities.removeById("point1");

  //分组删除
  //   bluePoints.forEach((item) => {
  //     viewer.entities.remove(item);
  //   });
  //   bluePoints = []; //不要忘了
  //   console.log(viewer.entities);

  //全部删除
  viewer.entities.removeAll();
};

const initViewer = () => {
  // viewer 是所有API的开始

  viewer = new Cesium.Viewer("cesiumContainer", {
    infoBox: false, //隐藏信息框
    selectionIndicator: false, //隐藏选中框
  });

  point1 = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(121, 30),
    point: {
      color: Cesium.Color.BLUE,
      pixelSize: 20,
    },
  });
  bluePoints.push(point1);
  point2 = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(121.0001, 30),
    point: {
      color: Cesium.Color.BLUE,
      pixelSize: 20,
    },
  });
  bluePoints.push(point2);

  point3 = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(121.0002, 30),
    point: {
      color: Cesium.Color.RED,
      pixelSize: 20,
    },
  });

  viewer.zoomTo(point1);
  const btn=document.querySelector('.btn')
  btn.addEventListener('click',toDel)
};



window.onload = initViewer;
