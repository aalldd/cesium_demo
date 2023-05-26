/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 10:27:35
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-26 14:05:25
 * @Description: 请填写简介
 */
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ODAzN2EzOS1kZDMzLTQ5Y2UtYjYxMi1jMzQxNTdiMTUzN2IiLCJpZCI6NDU5NDIsImlhdCI6MTYxNTYyNDQyOX0.BucgmI6OJ-7ixj7rcQ_Qyg45DkvdHmaLrFwyMYitLcI";

const initViewer = () => {
  // viewer 是所有API的开始
  //dataSources
  viewer = new Cesium.Viewer("cesiumContainer", {});
  let dataSource;
  let entities;
  // 加载geoJSON数据
    // const linestring1 = turf.lineString([
    //   [-24, 63],
    //   [-23, 60],
    //   [-25, 65],
    //   [-20, 69],
    // ]);
    // const promise = Cesium.GeoJsonDataSource.load(linestring1);
    // promise.then((res) => {
    //   dataSource=res
    //   const entity = res.entities.values[0];
    //   viewer.entities.add(entity);
    //   viewer.zoomTo(entity);
    // });

    // 加载多个线
    // const multiLine = turf.multiLineString([
    //   [
    //     [0, 0],
    //     [2, 2],
    //   ],
    //   [
    //     [4, 4],
    //     [6, 6],
    //   ],
    //   [
    //     [8, 8],
    //     [10, 10],
    //   ],
    // ]);
    // Cesium.GeoJsonDataSource.load(multiLine).then((res) => {
    //   viewer.dataSources.add(res);
    //   dataSource = res;
    //   viewer.zoomTo(res);
    // });

    // const polygon = turf.polygon([
    //   [
    //     [-5, 52],
    //     [-4, 56],
    //     [-2, 51],
    //     [-5, 52],
    //   ],
    // ]);
    // const promise = Cesium.GeoJsonDataSource.load(polygon);
    // viewer.dataSources.add(promise); //可以添加promise
    // viewer.zoomTo(promise); //可以跳转promise

  // 加载topojson数据
    // const promise = Cesium.GeoJsonDataSource.load("../assets/usa.topojson");
    // viewer.dataSources.add(promise);
    // viewer.zoomTo(promise);

  //   加载KML数据
  console.log(Cesium.KmlDataSource)
  const promise = Cesium.KmlDataSource.load("../assets/gdp2008.kmz");
  viewer.dataSources.add(promise);
  viewer.zoomTo(promise);


  // const toDel = () => {
  //   viewer.dataSources.removeAll();
  //   viewer.entities.removeAll()
  // };
  // const btn=document.querySelector('.btn')
  // btn.addEventListener('click',toDel)
  //   加载czml数据
  //   Cesium.CzmlDataSource;
};

window.onload = initViewer;
