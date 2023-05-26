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

  // entity
  // 调用方便，封装完美
  // 是基于primitive的封装

  // primitive
  // 更接近底层
  // 可以绘制高级图形、组合图形
  // 由Geometry(几何形状)、(Appearance)外观组成

  // 1. Draw a translucent ellipse on the surface with a checkerboard pattern
  //   const primitive = new Cesium.Primitive({
  //     geometryInstances: new Cesium.GeometryInstance({
  //       geometry: new Cesium.EllipseGeometry({
  //         center: Cesium.Cartesian3.fromDegrees(-100.0, 20.0),
  //         semiMinorAxis: 500000.0,
  //         semiMajorAxis: 1000000.0,
  //         rotation: Cesium.Math.PI_OVER_FOUR,
  //         vertexFormat: Cesium.VertexFormat.POSITION_AND_ST,
  //       }),
  //     }),
  //     appearance: new Cesium.EllipsoidSurfaceAppearance({
  //       material: new Cesium.Material({
  //         fabric: {
  //           type: "Color",
  //           uniforms: {
  //             color: new Cesium.Color(0.0, 0.0, 1.0, 1.0),
  //           },
  //         },
  //       }),
  //     }),
  //   });
  //   viewer.scene.primitives.add(primitive);

  // 2. Draw different instances each with a unique color
  const rectangleInstance = new Cesium.GeometryInstance({
    geometry: new Cesium.RectangleGeometry({
      rectangle: Cesium.Rectangle.fromDegrees(-140.0, 30.0, -100.0, 40.0),
      vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT,
    }),
    attributes: {
      color: new Cesium.ColorGeometryInstanceAttribute(0.0, 1.0, 1.0, 0.5),
    },
  });
  const PolygonInstance = new Cesium.GeometryInstance({
    geometry: new Cesium.PolygonGeometry({
      polygonHierarchy: new Cesium.PolygonHierarchy(
        Cesium.Cartesian3.fromDegreesArray([-100.0, 43.0, -100, 27, -90, 35])
      ),
    }),
    attributes: {
      color: new Cesium.ColorGeometryInstanceAttribute(0.0, 1.0, 1.0, 0.5),
    },
  });
  //两个几何实例组成了一个primitive
  const primitive = new Cesium.Primitive({
    geometryInstances: [rectangleInstance, PolygonInstance],
    appearance: new Cesium.PerInstanceColorAppearance(),
  });
  viewer.scene.primitives.add(primitive);
};

window.onload = initViewer;
