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
  viewer = new Cesium.Viewer("cesiumContainer", {});

  // 添加在primitives里面
    const tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(75343),
      })
    );
    viewer.flyTo(tileset);

//   const tileset = viewer.scene.primitives.add(
//     new Cesium.Cesium3DTileset({
//       url: "/src/assets/b3dm/tileset.json",
//     })
//   );
  viewer.flyTo(tileset);
};

window.onload = initViewer;
