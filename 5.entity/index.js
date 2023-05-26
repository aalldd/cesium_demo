/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 10:27:35
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-26 10:30:29
 * @Description: 请填写简介
 */
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ODAzN2EzOS1kZDMzLTQ5Y2UtYjYxMi1jMzQxNTdiMTUzN2IiLCJpZCI6NDU5NDIsImlhdCI6MTYxNTYyNDQyOX0.BucgmI6OJ-7ixj7rcQ_Qyg45DkvdHmaLrFwyMYitLcI";
const initViewer = () => {
  // viewer 是所有API的开始

  const viewer = new Cesium.Viewer("cesiumContainer", {
    infoBox: false, //隐藏信息框
    selectionIndicator: false, //隐藏选中框
  });

  //entity
  //写法一
  //点
  const point = new Cesium.Entity({
    position: Cesium.Cartesian3.fromDegrees(120, 30),
    point: {
      color: Cesium.Color.BLUE,
      pixelSize: 20,
    },
  });
  viewer.entities.add(point); //添加实体

  //写法二(推荐)
  viewer.entities.add({
    id: "point2",
    position: Cesium.Cartesian3.fromDegrees(121, 30),
    point: {
      color: Cesium.Color.RED,
      pixelSize: 20,
    },
  });

  const tag = viewer.entities.add({
    position: new Cesium.Cartesian3.fromDegrees(116.0, 39.9, 10),
    billboard: {
      image: "../assets/position.png",
      scale: 0.3,
      // color: Cesium.Color.YELLOWGREEN,
      width: 230,
      // height:100
    },
  });

  //标题
  const label = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(112, 30),
    label: {
      text: "Cesium",
      fillColor: Cesium.Color.YELLOWGREEN,
      showBackground: true,
      backgroundColor: new Cesium.Color(255, 255, 0),
    },
  });

  //线
  const polyline = viewer.entities.add({
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArray([
        120, 20, 121, 20, 121, 20.5,
      ]),
      width: 10,
      material: Cesium.Color.YELLOW,
    },
  });

  //面
  const polygon = viewer.entities.add({
    polygon: {
      hierarchy: {
        positions: Cesium.Cartesian3.fromDegreesArray([
          100, 20, 100, 25, 115, 20,
        ]),
      },
      material: Cesium.Color.RED.withAlpha(0.5),
      extrudedHeight: 200000, //拉伸的最高高度
      height: 100000, //拉伸最小高度
      outline: true, //是否显示外线
      outlineColor: Cesium.Color.WHITE,
      fill: false, //是否填充
    },
  });

  //盒子(立方体)
  const box = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(119, 30, 3000),
    box: {
      dimensions: new Cesium.Cartesian3(2000, 1000, 3000),
      material: Cesium.Color.BLUEVIOLET,
    },
  });

  //椭圆
  const ellipse = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(118, 30),
    ellipse: {
      semiMajorAxis: 500, //半长轴
      semiMinorAxis: 300, //半短轴
      material: Cesium.Color.YELLOWGREEN,
      rotation: Math.PI / 2, //旋转角度
    },
  });
  viewer.zoomTo(ellipse); //跳转到实体

  //矩形
  const rectangle = viewer.entities.add({
    rectangle: {
      coordinates: Cesium.Rectangle.fromDegrees(120, 40, 123, 45),
      material: "../assets/dog.jpg", //可以用自定义图片填充
      extrudedHeight: 30000,
    },
  });
};

window.onload = initViewer;
