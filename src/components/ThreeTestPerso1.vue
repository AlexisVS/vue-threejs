<template class="container-three-test-perso1">
  <canvas id="canvas" ref="canvas"></canvas>
</template>

<script setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted, ref } from 'vue';


// 0. Define variable
let canvas = ref(null),
  renderer = new THREE.WebGLRenderer,
  scene = new THREE.Scene,
  camera = new THREE.PerspectiveCamera,
  sphereGeometry,
  material,
  sphereMesh,
  sphereMesh2,
  light,
  controls,
  earth,
  moon,
  sun,
  solarSystem,
  mercury,
  venus,
  earthSystem,
  textureLoader = new THREE.TextureLoader()


// 1. Target canvas element or create canvas element 
const initCanvas = () => {
  canvas.value.innerWidth = window.innerWidth
  canvas.value.innerHeight = window.innerHeight
}

// 1. Create renderer
const createRenderer = () => {
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// 2. Create scene
const createScene = () => {
  scene = new THREE.Scene()
  // textureLoader.load('https://data.1freewallpapers.com/detail/stars-space-black-darkness.jpg', function (texture) {
  //   scene.background = texture;
  // });
}

// 2.5 Add Helper
const addHelper = () => {
  scene.add(new THREE.AxesHelper());
}

// 3. Create camera
const createCamera = () => {
  const fov = 75;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 1000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 5, 0);
  // camera.updateMatrix()
  scene.add(camera);
}

// 3.1 make sphere

/**
 * Create a sphereMesh
 * @param radius
 * Radius of the sphere
 * @param widthSegment
 * Width of the sphere
 * @param heightSegment
 * Height of the sphere
 * @param x
 * Position x of sphere
 * @param y
 * Position y of sphere
 * @param z
 * position z of sphere
 * @return THREE.Mesh
 */
const makeSphere = (radius, widthSegments, heightSegments, x, y, z) => {
  const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
  geometry.center();
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(y, x, z)
  const object = new THREE.Object3D();
  object.add(mesh)
  return { object, mesh };
}

// 4. Create sphere geometry

const createGeometry = () => {
  const radius = 1;
  const widthSegments = 64;
  const heightSegments = 32;
  sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
}

// 5. Create material
const createMaterial = () => {
  const color = new THREE.Color(0xff0000);
  material = new THREE.MeshToonMaterial({ color: color });
}

// 6. Create mesh
const createSphereMesh = () => {
  sphereMesh = new THREE.Mesh(sphereGeometry, material);
  sphereMesh.position.set(0, 0, 0);
  scene.add(sphereMesh);

  sphereMesh2 = new THREE.Mesh(sphereGeometry, material)
  sphereMesh2.position.set(2.1, 0, 0);
  scene.add(sphereMesh2);
}

// 7. Create light
const createLight = () => {
  const hex = 0xffff00;
  const intensity = 10;
  const distance = 10;
  const decay = 10;
  light = new THREE.PointLight(hex, intensity, distance, decay);
  scene.add(light);
}

const createControls = () => {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.update();
}

const initSolarSystem = () => {
  solarSystem = new THREE.Group()
  initSun();
  initMercury();
  initVenus();
  initEarthSystem();
  scene.add(solarSystem);
}

const initSun = () => {
  sun = makeSphere(1, 64, 32, 0, 0, 0);
  solarSystem.add(sun.object);
}

const initMercury = () => {
  mercury = makeSphere(1 / 22.7, 64, 32, 0, 1.6, 0)
  solarSystem.add(mercury.object);
}
const initVenus = () => {
  venus = makeSphere(1 / 11.3, 64, 32, 0, 2.2, 0)
  solarSystem.add(venus.object);
}

const initEarthSystem = () => {
  // earthSystem = new THREE.Group();
  earth = makeSphere(1 / 10.8, 64, 32, 0, 2.8, 0);
  moon = makeSphere(1 / 80, 64, 32, 0, 0.15, 0)
  earth.mesh.add(moon.object);
  // earthSystem.add(earth);
  solarSystem.add(earth.object)
}

const animate = () => {
  solarSystem.rotateY(0.00001);
  // earthSystem.rotateY(1 * Math.PI);
  sun.object.rotateY(0.004 * Math.PI);
  mercury.object.rotateY(0.004);
  venus.object.rotateY(0.003);
  earth.object.rotateY(0.001);
  moon.object.rotateY(0.0004);


  mercury.mesh.rotateY(1);
  venus.mesh.rotateY(1.1);
  earth.mesh.rotateY(0.01);
  moon.mesh.rotateY(0.014);


  renderer.render(scene, camera);
};


window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

onMounted(() => {
  initCanvas();
  createRenderer();
  createScene();
  addHelper();
  createCamera();
  createMaterial();
  // createSphereMesh();
  createLight();
  createControls();
  initSolarSystem();
  animate();
  renderer.setAnimationLoop(animate);
});

</script>

<style>

body {
  background: url('../assets/stars-space-black-darkness.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
#canvas {
  width: 100%;
}
</style>