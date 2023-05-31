/*
 * @Author: wangshiyang
 * @Date: 2023-05-31 10:04:24
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-05-31 11:11:05
 * @Description: 请填写简介
 */
class CesiumLabel3D {
    constructor(viewer, position, label) {
        this.viewer = viewer;
        this.position = position;
        this.label = label;

        this.initDom();
        this.initEvent();
    }

    initDom() {
        this.$htmlContainer = document.createElement("div");
        this.$htmlContainer.classList.add("label3d-container");
        this.$htmlContainer.innerHTML = this.label;
        this.viewer.cesiumWidget.container.appendChild(this.$htmlContainer);
        this.viewer.scene.postRender.addEventListener(this.postRenderEvent, this);
    }

    initEvent() {
        this.viewer.scene.postRender.addEventListener(this.postRenderEventHandle, this);
    }

    postRenderEventHandle() {
        const canvasHeight = this.viewer.scene.canvas.height;
        const windowPosition = new Cesium.Cartesian2();
        Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.viewer.scene, this.position, windowPosition);
        this.$htmlContainer.style.position='absolute'
        this.$htmlContainer.style.bottom = canvasHeight - windowPosition.y + 10 + "px";
        const elWidth = this.$htmlContainer.offsetWidth;
        this.$htmlContainer.style.left = windowPosition.x - (elWidth / 2) + "px";


        const cameraPosition = this.viewer.camera.position;
        let height = this.viewer.scene.globe.ellipsoid.cartesianToCartographic(cameraPosition).height;
        height += this.viewer.scene.globe.ellipsoid.maximumRadius;
        if (!(Cesium.Cartesian3.distance(cameraPosition, this.position) > height)) {
            this.$htmlContainer.style.display = "block"
        } else {
            this.$htmlContainer.style.display = "none";
        }
    }

    remove() {
        this.viewer.scene.postRender.removeEventListener(this.postRenderEventHandle, this);
    }
}