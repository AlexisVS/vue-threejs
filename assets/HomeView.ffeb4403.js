import{r as se,W as R,S as z,P as B,T as k,o as oe,a as A,c as ie,A as ce,b as ue,O as de,G as he,R as we,V as pe,M,D as le,d as C,e as _e,f as G,g as me,h as je}from"./index.8c01ae2e.js";const ve={setup(E){let h=se(null),n=new R,s=new z,o=new B,H,e,m,j,v,w,f,g,x,b,p,S,V=new k;const D=()=>{O(),J(),N(),U(),X(),$(),q(),F(),L(),n.setAnimationLoop(L)},O=()=>{h.value.innerWidth=window.innerWidth,h.value.innerHeight=window.innerHeight},J=()=>{n=new R({canvas:h.value,antialias:!0,alpha:!0}),n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0},N=()=>{s=new z,V.load("/vue-threejs/textures/8k_stars.jpg",function(r){s.background=r}),s.castShadow=!0,s.receiveShadow=!0},U=()=>{s.add(new ce)},X=()=>{const i=window.innerWidth/window.innerHeight,c=.1,t=1e3;o=new B(75,i,c,t),o.position.set(0,13,0),s.add(o)},a=(r,i,c,t,Y,d,u,P)=>{const W=new _e(r,i,c);W.center();let l;if(u!=null){const T=new k().load(u);P==!0?l=new M({map:T}):l=new G({map:T})}else P==!0?l=new M({color:16711680}):l=new G({color:16711680});const _=new C(W,l);_.position.set(Y,t,d);const y=new me;return y.add(_),_.castShadow=!0,_.receiveShadow=!0,y.castShadow=!0,y.receiveShadow=!0,{object:y,mesh:_}},$=()=>{let t=new ue(16777215,1,0);t.castShadow=!0,t.shadow.mapSize.width=512,t.shadow.mapSize.height=512,t.shadow.camera.near=.1,t.shadow.camera.far=500,s.add(t)},q=()=>{H=new de(o,n.domElement),H.update()},F=()=>{e=new he,e.castShadow=!0,e.receiveShadow=!0,I(),K(),Q(),Z(),ee(),te(),re(),ae(),ne(),s.add(e)},I=()=>{m=a(1,64,32,0,0,0,"/vue-threejs/textures/8k_sun.jpg",!0),m.mesh.castShadow=!1,e.add(m.object)},K=()=>{j=a(1/22.7,64,32,0,1.4,0,"/vue-threejs/textures/8k_mercury.jpg"),e.add(j.object)},Q=()=>{v=a(1/11.3,64,32,0,1.7,0,"/vue-threejs/textures/4k_venus_atmosphere.jpg"),e.add(v.object)},Z=()=>{w=a(1/10.8,64,32,0,2,0,"/vue-threejs/textures/8k_earth_daymap.jpg"),f=a(1/80,64,32,0,.15,0,"/vue-threejs/textures/8k_moon.jpg"),w.mesh.add(f.object),e.add(w.object)},ee=()=>{g=a(1/20.8,64,32,0,2.5,0,"/vue-threejs/textures/8k_mars.jpg"),e.add(g.object)},te=()=>{x=a(1/.97,64,32,0,6.2,0,"/vue-threejs/textures/8k_jupiter.jpg"),e.add(x.object)},re=()=>{p=a(1/1.14,64,32,0,10.6,0,"/vue-threejs/textures/8k_saturn.jpg");const r=new we(1/1.14,1/1.14+.85,256);var i=r.attributes.position,c=new pe;for(let u=0;u<i.count;u++)c.fromBufferAttribute(i,u),r.attributes.uv.setXY(u,c.length()<1.5?0:1,1);let t=new k().load("/vue-threejs/textures/8k_saturn_ring_alpha.png");t.flipY=!1;const Y=new M({map:t,side:le,transparent:!0}),d=new C(r,Y);r.center,d.rotation.x=1.57,d.receiveShadow=!0,d.castShadow=!0,p.mesh.add(d),e.add(p.object)},ae=()=>{b=a(1/20.8,64,32,0,20.2,0,"/vue-threejs/textures/2k_uranus.jpg"),e.add(b.object)},ne=()=>{S=a(1/2.77,64,32,0,31.1,0,"/vue-threejs/textures/2k_neptune.jpg"),e.add(S.object)},L=()=>{e.rotateY(.001),m.object.rotateY(1e-4),j.object.rotateY(.01),v.object.rotateY(.00391),w.object.rotateY(.0024109),f.object.rotateY(.004),g.object.rotateY(.0012827988),x.object.rotateY(.00020323325),p.object.rotateY(8184523809e-14),b.object.rotateY(2870189171e-15),S.object.rotateY(146325241104e-17),j.mesh.rotateY(.01),v.mesh.rotateY(.01),w.mesh.rotateY(.01),f.mesh.rotateY(.14),g.mesh.rotateY(.004),x.mesh.rotateY(.004),p.mesh.rotateY(.004),b.mesh.rotateY(.004),S.mesh.rotateY(.004),o.updateProjectionMatrix(),n.render(s,o)};return window.addEventListener("resize",function(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}),oe(()=>{D()}),(r,i)=>(A(),ie("canvas",{id:"canvas",ref_key:"canvas",ref:h},null,512))}};const ge={setup(E){return(h,n)=>(A(),je(ve))}};export{ge as default};