<template>
  <canvas id="canvas" ref="canvas"></canvas>
</template>

<script setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted, ref } from 'vue';


// 0. Define variable
let canvas = ref(null),
  renderer,
  scene,
  camera,
  sphereGeometry,
  material,
  sphereMesh,
  sphereMesh2,
  light,
  controls

// 1. Target canvas element or create canvas element 
const initCanvas = () => {
  canvas.value.innerWidth = window.innerWidth
  canvas.value.innerHeight = window.innerHeight
}

// 1. Create renderer
const createRenderer = () => {
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value });
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// 2. Create scene
const createScene = () => {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x999999)
}

// 3. Create camera
const createCamera = () => {
  const fov = 75;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 10;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 2, 5);
  scene.add(camera);
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
  material = new THREE.MeshBasicMaterial({ color: color });
}

// 6. Create mesh
const createSphereMesh = () => {
  sphereMesh = new THREE.Mesh(sphereGeometry, material);
  sphereMesh.position.set(0, 2, 0);
  scene.add(sphereMesh);

  sphereMesh2 = new THREE.Mesh(sphereGeometry, material)
  sphereMesh2.position.set(2, 0, 0);
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
}

const updateRender = () => {
  window.requestAnimationFrame(updateRender);
  // controls.update();
  renderer.render(scene, camera);
};

onMounted(() => {
  initCanvas();
  createRenderer();
  createScene();
  createCamera();
  createGeometry();
  createMaterial();
  createSphereMesh();
  createLight();
  updateRender();
  createControls();
});

</script>

<style scoped>
#canvas {
  width: 100%
}
</style>