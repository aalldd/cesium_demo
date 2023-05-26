/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 13:53:23
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-26 13:56:32
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
let viewer, pickModel;
const initViewer = () => {
  // viewer 是所有API的开始
  viewer = new Cesium.Viewer("cesiumContainer", {});

  const tileset = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
      url: Cesium.IonResource.fromAssetId(75343),
    })
  );
  viewer.flyTo(tileset);
  const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
  handler.setInputAction((event) => {
    // 拾取模型
    let pick = viewer.scene.pick(event.endPosition);
    if (pick) {
      if (pickModel) {
        pickModel.color = Cesium.Color.WHITE;
      }
      pick.color = Cesium.Color.ORANGERED;
      pickModel = pick;
    }
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
};

window.onload = initViewer;
