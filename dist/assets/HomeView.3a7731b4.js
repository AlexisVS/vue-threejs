import{r as se,W as T,S as R,P as z,T as k,o as oe,a as A,c as ie,A as ce,b as ue,C as de,O as he,G as pe,R as le,V as we,M,D as _e,d as B,e as me,f as G,g as je,h as ve}from"./index.dc5e85e4.js";const be={setup(E){let h=se(null),s=new T,r=new R,o=new z,H,e,m,j,v,p,b,f,g,x,l,S,V=new k;const D=()=>{O(),J(),N(),U(),X(),$(),q(),F(),L(),s.setAnimationLoop(L)},O=()=>{h.value.innerWidth=window.innerWidth,h.value.innerHeight=window.innerHeight},J=()=>{s=new T({canvas:h.value,antialias:!0,alpha:!0}),s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight),s.shadowMap.enabled=!0},N=()=>{r=new R,V.load("/vue-threejs/public/textures/8k_stars.jpg",function(a){r.background=a}),r.castShadow=!0,r.receiveShadow=!0},U=()=>{r.add(new ce)},X=()=>{const i=window.innerWidth/window.innerHeight,c=.1,t=1e3;o=new z(75,i,c,t),o.position.set(0,13,0),r.add(o)},n=(a,i,c,t,Y,d,u,P)=>{const W=new me(a,i,c);W.center();let w;if(u!=null){const C=new k().load(u);P==!0?w=new M({map:C}):w=new G({map:C})}else P==!0?w=new M({color:16711680}):w=new G({color:16711680});const _=new B(W,w);_.position.set(Y,t,d);const y=new je;return y.add(_),_.castShadow=!0,_.receiveShadow=!0,y.castShadow=!0,y.receiveShadow=!0,{object:y,mesh:_}},$=()=>{let t=new ue(16777215,1,0);t.castShadow=!0,t.shadow.mapSize.width=512,t.shadow.mapSize.height=512,t.shadow.camera.near=.1,t.shadow.camera.far=500,r.add(t),t=void 0,r.add(new de(o))},q=()=>{H=new he(o,s.domElement),H.update()},F=()=>{e=new pe,e.castShadow=!0,e.receiveShadow=!0,I(),K(),Q(),Z(),ee(),te(),ae(),re(),ne(),r.add(e)},I=()=>{m=n(1,64,32,0,0,0,"/vue-threejs/public/textures/8k_sun.jpg",!0),m.mesh.castShadow=!1,e.add(m.object)},K=()=>{j=n(1/22.7,64,32,0,1.4,0,"/vue-threejs/public/textures/8k_mercury.jpg"),e.add(j.object)},Q=()=>{v=n(1/11.3,64,32,0,1.7,0,"/vue-threejs/public/textures/4k_venus_atmosphere.jpg"),e.add(v.object)},Z=()=>{p=n(1/10.8,64,32,0,2,0,"/vue-threejs/public/textures/8k_earth_daymap.jpg"),b=n(1/80,64,32,0,.15,0,"/vue-threejs/public/textures/8k_moon.jpg"),p.mesh.add(b.object),e.add(p.object)},ee=()=>{f=n(1/20.8,64,32,0,2.5,0,"/vue-threejs/public/textures/8k_mars.jpg"),e.add(f.object)},te=()=>{g=n(1/.97,64,32,0,6.2,0,"/vue-threejs/public/textures/8k_jupiter.jpg"),e.add(g.object)},ae=()=>{l=n(1/1.14,64,32,0,10.6,0,"/vue-threejs/public/textures/8k_saturn.jpg");const a=new le(1/1.14,1/1.14+.85,256);var i=a.attributes.position,c=new we;for(let u=0;u<i.count;u++)c.fromBufferAttribute(i,u),a.attributes.uv.setXY(u,c.length()<1.5?0:1,1);let t=new k().load("/vue-threejs/public/textures/8k_saturn_ring_alpha.png");t.flipY=!1;const Y=new M({map:t,side:_e,transparent:!0}),d=new B(a,Y);a.center,d.rotation.x=1.57,d.receiveShadow=!0,d.castShadow=!0,l.mesh.add(d),e.add(l.object)},re=()=>{x=n(1/20.8,64,32,0,20.2,0,"/vue-threejs/public/textures/2k_uranus.jpg"),e.add(x.object)},ne=()=>{S=n(1/2.77,64,32,0,31.1,0,"/vue-threejs/public/textures/2k_neptune.jpg"),e.add(S.object)},L=()=>{e.rotateY(.001),m.object.rotateY(1e-4),j.object.rotateY(.01),v.object.rotateY(.00391),p.object.rotateY(.0024109),b.object.rotateY(.004),f.object.rotateY(.0012827988),g.object.rotateY(.00020323325),l.object.rotateY(8184523809e-14),x.object.rotateY(2870189171e-15),S.object.rotateY(146325241104e-17),j.mesh.rotateY(.01),v.mesh.rotateY(.01),p.mesh.rotateY(.01),b.mesh.rotateY(.14),f.mesh.rotateY(.004),g.mesh.rotateY(.004),l.mesh.rotateY(.004),x.mesh.rotateY(.004),S.mesh.rotateY(.004),o.updateProjectionMatrix(),s.render(r,o)};return window.addEventListener("resize",function(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}),oe(()=>{D()}),(a,i)=>(A(),ie("canvas",{id:"canvas",ref_key:"canvas",ref:h},null,512))}};const ge={setup(E){return(h,s)=>(A(),ve(be))}};export{ge as default};