<template>
  <Renderer ref="renderer" orbitCtrl="true">
    <Camera :position="{ z: 10 }" />
    <Scene>
      <AmbientLight :position="{ y: 70, z: 20 }" color="rgba(255,0,255,1)" />
      <PointLight :position="{ y: 50, z: 50 }" />
      <Mesh ref="mesh">
        <boxGeometry ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }" />
        <LambertMaterial />
      </Mesh>
    </Scene>
  </Renderer>
</template>

<script>
import { render } from "vue";

export default {
  mounted () {
    const renderer = this.$refs.renderer;
    renderer.three.setSize(window.innerWidth, window.innerHeight)
    // const box = this.$refs.box.mesh;
    const mesh = this.$refs.mesh.mesh
    renderer.onBeforeRender(() => {
      // box.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    });
  },
};
</script>
