/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 13:53:23
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-26 13:53:26
 * @Description: 请填写简介
 */
/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 13:49:21
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-26 13:49:24
 * @Description: 请填写简介
 */
/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 10:27:35
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-26 13:48:45
 * @Description: 请填写简介
 */
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ODAzN2EzOS1kZDMzLTQ5Y2UtYjYxMi1jMzQxNTdiMTUzN2IiLCJpZCI6NDU5NDIsImlhdCI6MTYxNTYyNDQyOX0.BucgmI6OJ-7ixj7rcQ_Qyg45DkvdHmaLrFwyMYitLcI";

const initViewer = () => {
  // viewer 是所有API的开始
  viewer = new Cesium.Viewer("cesiumContainer", {
    terrainProvider: Cesium.createWorldTerrain(),
  });
  let arr = [];
  const line = viewer.entities.add({
    polyline: {
      positions: [],
      material: Cesium.Color.YELLOW,
      width: 5,
    },
  });

  handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
  handler.setInputAction((event) => {
    // 返回一个笛卡尔坐标
    let position = viewer.scene.pickPosition(event.position);
    // 如果有这个坐标
    if (Cesium.defined(position)) {
      viewer.entities.add({
        position: position,
        point: {
          color: Cesium.Color.RED,
          pixelSize: 20,
        },
      });
      //   每次点击给线的positions重新赋值
      arr.push(position);
      line.polyline.positions = arr;
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK); //左键点击事件
  handler.setInputAction(() => {
    viewer.entities.removeAll();
    viewer.entities.add(line);
    handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
    handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK);
  }, Cesium.ScreenSpaceEventType.RIGHT_CLICK); //右键点击事件
};

window.onload = initViewer;
