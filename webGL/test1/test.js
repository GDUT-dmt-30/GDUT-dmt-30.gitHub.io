
//创建threejs的场景
var scene = new THREE.Scene();

// 创建透视摄像机 并且初始化位置
var camera = new THREE.PerspectiveCamera(
    45, //视场角
    window.innerWidth / window.innerHeight, // 长宽比
    1, // 近景裁剪
    1000 // 远景裁剪
);
camera.position.z = 20;
camera.position.x = 0;
camera.position.y = 5;
camera.lookAt(new THREE.Vector3(0, 10, 0));//确保摄像机望向坐标原点

//创建 webGL的渲染器 这里的设置和上一节一致
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

//为渲染器开启 阴影贴图
renderer.shadowMap.enabled = true;

//开启这个 阴影效果会抗锯齿 但是也会卡许多
//renderer.shadowMapType = THREE.PCFSoftShadowMap;

//官方说明：Sets device pixel ratio. This is usually used for HiDPI device to prevent bluring output canvas.
//大意就是针对HiDPI设备（比如使用苹果Retina的）进行的设置，防止输出画面被施加模糊
renderer.setPixelRatio( window.devicePixelRatio );

//启用orbit摄像机 需要OrbitControls.js文件支持 可以实现环绕摄像机 支持缩放、平移功能
var controls = new THREE.OrbitControls( camera, renderer.domElement );

//将渲染器绑定到html的特定div上 方便以后的DOM操作
document.getElementById('webgl').appendChild(renderer.domElement);

//调用update函数
update(renderer, scene, camera, controls);