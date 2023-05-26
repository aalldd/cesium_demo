/*
 * @Author: wangshiyang
 * @Date: 2023-05-26 13:59:53
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-26 14:06:41
 * @Description: 请填写简介
 */
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ODAzN2EzOS1kZDMzLTQ5Y2UtYjYxMi1jMzQxNTdiMTUzN2IiLCJpZCI6NDU5NDIsImlhdCI6MTYxNTYyNDQyOX0.BucgmI6OJ-7ixj7rcQ_Qyg45DkvdHmaLrFwyMYitLcI";
let viewer, pickModel;
const initViewer = () => {
  // viewer是所有API的开始
  viewer = new Cesium.Viewer("cesiumContainer", {
    shouldAnimate: true, //动画效果
    shadows: true, //显示阴影
  });

  const position = Cesium.Cartesian3.fromDegrees(114, 30, 300);
  const orientation = Cesium.Transforms.headingPitchRollQuaternion(
    position,
    Cesium.HeadingPitchRoll.fromDegrees(-90, 0, 0)
  );
  const model = viewer.entities.add({
    position,
    orientation,
    model: {
      uri: "../assets/Cesium_Air.glb",
      minimumPixelSize: 20, //模型最小像素
      maximumScale: 5000, //最大比例尺大小
      scale: 1,
    },
  });
  viewer.zoomTo(model);
  const computeEmitterModelMatrix = (heading, pitch, roll) => {
    let hpr = Cesium.HeadingPitchRoll.fromDegrees(heading, pitch, roll);
    let trs = new Cesium.TranslationRotationScale();
    trs.translation = Cesium.Cartesian3.fromElements(0, 0, 0);
    trs.rotation = Cesium.Quaternion.fromHeadingPitchRoll(hpr);
    let Matrix4 = Cesium.Matrix4.fromTranslationRotationScale(trs);
    return Matrix4;
  };
  viewer.scene.primitives.add(
    new Cesium.ParticleSystem({
      image: "../assets/fire.png",
      imageSize: new Cesium.Cartesian2(20, 20), //尺寸
      startScale: 1.0, //初始大小
      endScale: 4.0, //最后大小
      particleLife: 3.0, ////设置每一个粒子存在的时间
      speed: 5.0, //发射粒子的速度
      emitter: new Cesium.CircleEmitter(2), //设置发射器(圆形发射器)
      // emitter: new Cesium.BoxEmitter(new Cesium.Cartesian3(10, 10, 10)),
      emissionRate: 5, //例子发射数量
      modelMatrix: model.computeModelMatrix(
        viewer.clock.startTime, //时间控件中的起始时间
        new Cesium.Matrix4() //4*4矩阵数据
      ), //设置位置
      lifetime: 16, //生命期属性为所需的持续时间
      // loop: false,  //只循环一次
      emitterModelMatrix: computeEmitterModelMatrix(0, 0, 0),
    })
  );
};

window.onload = initViewer;
