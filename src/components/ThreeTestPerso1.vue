<template class="container-three-test-perso1">
  <canvas id="canvas" ref="canvas"></canvas>
</template>

<script setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted, ref, useCssVars } from 'vue';


// 0. Define variable
let canvas = ref(null),
  renderer = new THREE.WebGLRenderer,
  scene = new THREE.Scene,
  camera = new THREE.PerspectiveCamera,
  sphereGeometry,
  material,
  sphereMesh,
  sphereMesh2,
  sunLight = [],
  controls,
  solarSystem,
  sun,
  mercury,
  venus,
  earth,
  moon,
  mars,
  jupiter,
  uranus,
  saturne,
  neptune,
  textureLoader = new THREE.TextureLoader()

// 0 init
const init = () => {
  initCanvas();
  createRenderer();
  createScene();
  addHelper();
  createCamera();
  createLight();
  createControls();
  initSolarSystem();
  animate();
  renderer.setAnimationLoop(animate);
}

// 1. Target canvas element or create canvas element 
const initCanvas = () => {
  canvas.value.innerWidth = window.innerWidth
  canvas.value.innerHeight = window.innerHeight
}

// 1. Create renderer
const createRenderer = () => {
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
}

// 2. Create scene
const createScene = () => {
  scene = new THREE.Scene()
  textureLoader.load('/public/textures/8k_stars.jpg', function (texture) {
    scene.background = texture;
  });
  scene.castShadow = true;
  scene.receiveShadow = true;
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
  camera.position.set(0, 13, 0);
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
 * @param texture
 * path of the texture
 * @param x
 * Position x of sphere
 * @param y
 * Position y of sphere
 * @param z
 * position z of sphere
 * @return THREE.Mesh
 */
const makeSphere = (radius, widthSegments, heightSegments, x, y, z, texture, sun) => {
  // Define geometry
  const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

  // Self center the object
  geometry.center();

  //Define material
  let sphereMaterial;

  // Define texture define material
  if (texture != null) {
    const sphereTexture = new THREE.TextureLoader().load(texture);
    if (sun == true) {
      sphereMaterial = new THREE.MeshBasicMaterial({ map: sphereTexture });
    } else {
      sphereMaterial = new THREE.MeshStandardMaterial({ map: sphereTexture });
    }
  } else {
    if (sun == true) {
      sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    } else {
      sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    }
  }

  // Define mesh
  const mesh = new THREE.Mesh(geometry, sphereMaterial);

  // Set position
  mesh.position.set(y, x, z)

  // Define Object3D for movement
  const object = new THREE.Object3D();

  // Add mesh to Object3D
  object.add(mesh)

  // add shadow
  mesh.castShadow = true; //default is false
  mesh.receiveShadow = true; //default
  object.castShadow = true; //default is false
  object.receiveShadow = true; //default

  return { object, mesh };
}

// 4. Create sphere geometry

// const createGeometry = () => {
//   const radius = 1;
//   const widthSegments = 64;
//   const heightSegments = 32;
//   sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
// }

// // 5. Create material
// const createMaterial = () => {
//   const color = new THREE.Color(0xff0000);
//   material = new THREE.MeshToonMaterial({ color: color });
// }

// // 6. Create mesh
// const createSphereMesh = () => {
//   sphereMesh = new THREE.Mesh(sphereGeometry, material);
//   sphereMesh.position.set(0, 0, 0);
//   scene.add(sphereMesh);

//   sphereMesh2 = new THREE.Mesh(sphereGeometry, material)
//   sphereMesh2.position.set(2.1, 0, 0);
//   scene.add(sphereMesh2);
// }

// 7. Create light
const createLight = () => {
  const hex = 0xffffff;
  const intensity = 1;
  const distance = 0;
  const decay = 10;

  let light = new THREE.PointLight(hex, intensity, distance);

  //shadow
  light.castShadow = true;
  light.shadow.mapSize.width = 512; // default
  light.shadow.mapSize.height = 512; // default
  light.shadow.camera.near = 0.1; // default
  light.shadow.camera.far = 500; // default

  scene.add(light);
  sunLight.push(...sunLight, light);
  light = undefined;

  scene.add(new THREE.CameraHelper(camera))

}

const createControls = () => {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.update();
}

const initSolarSystem = () => {
  solarSystem = new THREE.Group()
  solarSystem.castShadow = true;
  solarSystem.receiveShadow = true;
  initSun();
  initMercury();
  initVenus();
  initEarthSystem();
  initMars();
  initJupiter();
  initSaturne();
  initUranus();
  initNeptune();
  scene.add(solarSystem);
}

const initSun = () => {
  sun = makeSphere(1, 64, 32, 0, 0, 0, '/public/textures/8k_sun.jpg', true);
  sun.mesh.castShadow = false;
  solarSystem.add(sun.object);
}

const initMercury = () => {
  mercury = makeSphere(1 / 22.7, 64, 32, 0, 1.4, 0, '/public/textures/8k_mercury.jpg')
  solarSystem.add(mercury.object);
}
const initVenus = () => {
  venus = makeSphere(1 / 11.3, 64, 32, 0, 1.7, 0, '/public/textures/4k_venus_atmosphere.jpg')
  solarSystem.add(venus.object);
}

const initEarthSystem = () => {
  earth = makeSphere(1 / 10.8, 64, 32, 0, 2, 0, '/public/textures/8k_earth_daymap.jpg');
  moon = makeSphere(1 / 80, 64, 32, 0, 0.15, 0, '/public/textures/8k_moon.jpg')
  earth.mesh.add(moon.object);
  solarSystem.add(earth.object)
}

const initMars = () => {
  mars = makeSphere(1 / 20.8, 64, 32, 0, 2.5, 0, '/public/textures/8k_mars.jpg')
  solarSystem.add(mars.object);
};

const initJupiter = () => {
  jupiter = makeSphere(1 / 0.97, 64, 32, 0, 6.2, 0, '/public/textures/8k_jupiter.jpg')
  solarSystem.add(jupiter.object);
}

const initSaturne = () => {
  saturne = makeSphere(1 / 1.14, 64, 32, 0, 10.6, 0, '/public/textures/8k_saturn.jpg')

  // Add ring
  const geometry = new THREE.RingBufferGeometry(1 / 1.14, 1 / 1.14 + 0.85, 256);
  var pos = geometry.attributes.position;
  var v3 = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v3.fromBufferAttribute(pos, i);
    geometry.attributes.uv.setXY(i, v3.length() < 1.5 ? 0 : 1, 1);
  }
  let texture = new THREE.TextureLoader().load('/public/textures/8k_saturn_ring_alpha.png');
  texture.flipY = false;

  const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true });
  const ring = new THREE.Mesh(geometry, material);
  geometry.center
  ring.rotation.x = 1.57;
  ring.receiveShadow = true;
  ring.castShadow = true;
  saturne.mesh.add(ring)

  solarSystem.add(saturne.object);
};

const initUranus = () => {
  uranus = makeSphere(1 / 20.8, 64, 32, 0, 20.2, 0, '/public/textures/2k_uranus.jpg')
  solarSystem.add(uranus.object);
};

const initNeptune = () => {
  neptune = makeSphere(1 / 2.77, 64, 32, 0, 31.1, 0, '/public/textures/2k_neptune.jpg')
  solarSystem.add(neptune.object);
};


const animate = () => {
  // Global object
  solarSystem.rotateY(0.001);

  // Object3D
  sun.object.rotateY(0.0001);
  mercury.object.rotateY(0.01);
  venus.object.rotateY(0.00391);
  earth.object.rotateY(0.0024109);
  moon.object.rotateY(0.004);
  mars.object.rotateY(0.0012827988);
  jupiter.object.rotateY(0.00020323325);
  saturne.object.rotateY(0.00008184523809);
  uranus.object.rotateY(0.000002870189171);
  neptune.object.rotateY(0.00000146325241104);

  // Mesh
  mercury.mesh.rotateY(0.01);
  venus.mesh.rotateY(0.01);
  earth.mesh.rotateY(0.01);
  moon.mesh.rotateY(0.14);
  mars.mesh.rotateY(0.004);
  jupiter.mesh.rotateY(0.004);
  saturne.mesh.rotateY(0.004);
  uranus.mesh.rotateY(0.004);
  neptune.mesh.rotateY(0.004);

  camera.updateProjectionMatrix();

  renderer.render(scene, camera);
};


window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

onMounted(() => {
  init();
});

</script>

<style>
#canvas {
  width: 100%;
}
</style>