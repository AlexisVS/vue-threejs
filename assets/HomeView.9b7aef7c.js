import{r as oe,W as T,S as R,P as z,T as k,o as se,a as A,c as ie,A as ce,b as de,C as ue,O as pe,G as le,R as he,V as we,M,D as _e,d as B,e as me,f as G,g as be,h as je}from"./index.6c55c9a7.js";const ve={setup(E){let p=oe(null),o=new T,n=new R,s=new z,H,e,m,b,j,l,v,f,g,x,h,S,V=new k;const D=()=>{O(),J(),N(),U(),X(),$(),q(),F(),L(),o.setAnimationLoop(L)},O=()=>{p.value.innerWidth=window.innerWidth,p.value.innerHeight=window.innerHeight},J=()=>{o=new T({canvas:p.value,antialias:!0,alpha:!0}),o.setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight),o.shadowMap.enabled=!0},N=()=>{n=new R,V.load("/public/textures/8k_stars.jpg",function(a){n.background=a}),n.castShadow=!0,n.receiveShadow=!0},U=()=>{n.add(new ce)},X=()=>{const i=window.innerWidth/window.innerHeight,c=.1,t=1e3;s=new z(75,i,c,t),s.position.set(0,13,0),n.add(s)},r=(a,i,c,t,Y,u,d,P)=>{const W=new me(a,i,c);W.center();let w;if(d!=null){const C=new k().load(d);P==!0?w=new M({map:C}):w=new G({map:C})}else P==!0?w=new M({color:16711680}):w=new G({color:16711680});const _=new B(W,w);_.position.set(Y,t,u);const y=new be;return y.add(_),_.castShadow=!0,_.receiveShadow=!0,y.castShadow=!0,y.receiveShadow=!0,{object:y,mesh:_}},$=()=>{let t=new de(16777215,1,0);t.castShadow=!0,t.shadow.mapSize.width=512,t.shadow.mapSize.height=512,t.shadow.camera.near=.1,t.shadow.camera.far=500,n.add(t),t=void 0,n.add(new ue(s))},q=()=>{H=new pe(s,o.domElement),H.update()},F=()=>{e=new le,e.castShadow=!0,e.receiveShadow=!0,I(),K(),Q(),Z(),ee(),te(),ae(),ne(),re(),n.add(e)},I=()=>{m=r(1,64,32,0,0,0,"/public/textures/8k_sun.jpg",!0),m.mesh.castShadow=!1,e.add(m.object)},K=()=>{b=r(1/22.7,64,32,0,1.4,0,"/public/textures/8k_mercury.jpg"),e.add(b.object)},Q=()=>{j=r(1/11.3,64,32,0,1.7,0,"/public/textures/4k_venus_atmosphere.jpg"),e.add(j.object)},Z=()=>{l=r(1/10.8,64,32,0,2,0,"/public/textures/8k_earth_daymap.jpg"),v=r(1/80,64,32,0,.15,0,"/public/textures/8k_moon.jpg"),l.mesh.add(v.object),e.add(l.object)},ee=()=>{f=r(1/20.8,64,32,0,2.5,0,"/public/textures/8k_mars.jpg"),e.add(f.object)},te=()=>{g=r(1/.97,64,32,0,6.2,0,"/public/textures/8k_jupiter.jpg"),e.add(g.object)},ae=()=>{h=r(1/1.14,64,32,0,10.6,0,"/public/textures/8k_saturn.jpg");const a=new he(1/1.14,1/1.14+.85,256);var i=a.attributes.position,c=new we;for(let d=0;d<i.count;d++)c.fromBufferAttribute(i,d),a.attributes.uv.setXY(d,c.length()<1.5?0:1,1);let t=new k().load("/public/textures/8k_saturn_ring_alpha.png");t.flipY=!1;const Y=new M({map:t,side:_e,transparent:!0}),u=new B(a,Y);a.center,u.rotation.x=1.57,u.receiveShadow=!0,u.castShadow=!0,h.mesh.add(u),e.add(h.object)},ne=()=>{x=r(1/20.8,64,32,0,20.2,0,"/public/textures/2k_uranus.jpg"),e.add(x.object)},re=()=>{S=r(1/2.77,64,32,0,31.1,0,"/public/textures/2k_neptune.jpg"),e.add(S.object)},L=()=>{e.rotateY(.001),m.object.rotateY(1e-4),b.object.rotateY(.01),j.object.rotateY(.00391),l.object.rotateY(.0024109),v.object.rotateY(.004),f.object.rotateY(.0012827988),g.object.rotateY(.00020323325),h.object.rotateY(8184523809e-14),x.object.rotateY(2870189171e-15),S.object.rotateY(146325241104e-17),b.mesh.rotateY(.01),j.mesh.rotateY(.01),l.mesh.rotateY(.01),v.mesh.rotateY(.14),f.mesh.rotateY(.004),g.mesh.rotateY(.004),h.mesh.rotateY(.004),x.mesh.rotateY(.004),S.mesh.rotateY(.004),s.updateProjectionMatrix(),o.render(n,s)};return window.addEventListener("resize",function(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)}),se(()=>{D()}),(a,i)=>(A(),ie("canvas",{id:"canvas",ref_key:"canvas",ref:p},null,512))}};const ge={setup(E){return(p,o)=>(A(),je(ve))}};export{ge as default};
