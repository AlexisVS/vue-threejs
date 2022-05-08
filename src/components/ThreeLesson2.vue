<template>
  <canvas ref="canvasThreeLesson2"></canvas>
</template>

<script setup>
import * as THREE from 'three';
import { onMounted, ref } from 'vue';

let canvasThreeLesson2 = ref(null);
onMounted(() => { createHelloCube() });

function createHelloCube () {

  // Define CANVAS

  console.log([
    document.getElementById('canvasThreeLesson2'),
    canvas,
  ]);

  // Define Renderer
  let renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true });
  // renderer.setSize(window.innerWidth, window.innerHeight);


  // // Define PERSPECTIVE CAMERA
  const fov = 150; // Field of view
  const aspect = window.innerWidth / window.innerHeight;  // Aspect ratio
  const near = 0.1; // Distance for begin capture
  const far = 5; // Distance for end capture
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;
  camera.position.x = 4;

  // Define scene
  const scene = new THREE.Scene();

  scene.background = new THREE.Color(0x000000);

  // Define Box Geometry
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1; // profondeur
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  // Define Material
  const material = new THREE.MeshBasicMaterial({ color: 0x00eeee });

  // // Define Cube
  // const cube = new THREE.Mesh(geometry, material);

  // Add cubes
  const cubes = [
    makeInstance(geometry, 0x00ffff, 0),
    makeInstance(geometry, 0xff00ff, -2),
    makeInstance(geometry, 0xffff00, 2),
    makeInstance(geometry, 0xffff00, 4),
  ];

  // Add cube to scene
  // scene.add(cube);

  // Renderer render the scene and camera
  renderer.render(scene, camera);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // add Renderer to the DOM
  // document.body.appendChild(renderer.domElement);
  renderer.render(scene,camera);

  // Loop animation
  // function render (time) {
  //   time *= 0.001;  // convert time to seconds

  //   cube.rotation.x = time;
  //   cube.rotation.y = time;

  //   renderer.render(scene, camera);

  //   requestAnimationFrame(render);
  // }

  function makeInstance (geometry, color, x) {
    const material = new THREE.MeshPhongMaterial({ color });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.x = x;

    return cube;
  }

  function addLight () {
    const color = 0xFFFF00;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }
  addLight();

  function render (time) {
    time *= 0.001;  // convert time to seconds

    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * .1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
// createHelloCube();

</script>

<style scoped>
canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>