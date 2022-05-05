import{A as d}from"./AppType.042e062b.js";import{B as o}from"./index.e9a64087.js";import{B as C}from"./index.9fd58e7c.js";import{C as n}from"./index.fbe96cef.js";import{S as s}from"./index.e1a54f2d.js";import{d as v}from"./index.5d153c96.js";import{u as y,a as m,_ as T,b as D,c as E}from"./en-US.fc3ce502.js";import{a as w,b as x}from"./utils.ffe55eac.js";import{a as i,f as F,h as k,n as a,ag as e,N as t,J as u,K as l}from"./vue-router.esm-bundler.c9213159.js";import"./index.e289ac8a.js";import"./components.78cffb68.js";import"./elements.7f2ac399.js";import"./index.8fb9de0f.js";import"./index.58b947ca.js";/* empty css               */import"./index.f8843d67.js";var A={themeColorBadge:"\u4E3B\u9898\u8272\u5FBD\u6807",dotBadge:"\u5706\u70B9\u5FBD\u6807",customContentBadge:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u6807\u7B7E",maximum:"\u6700\u5927\u503C",differentPositioningBadges:"\u4E0D\u540C\u5B9A\u4F4D\u5FBD\u6807",upperRight:"\u53F3\u4E0A",lowerRight:"\u53F3\u4E0B",upperLeft:"\u5DE6\u4E0A",lowerLeft:"\u5DE6\u4E0B",whetherToDisplayTheBadge:"\u662F\u5426\u663E\u793A\u5FBD\u6807",clickToChangeTheState:"\u70B9\u51FB\u6539\u53D8\u72B6\u6001",badge:"\u5FBD\u6807",customBadgeColors:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u989C\u8272",customBadgeIcons:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u56FE\u6807"},L={themeColorBadge:"Theme Color Badge",dotBadge:"Dot Badge",customContentBadge:"Custom Content Badge",maximum:"Maximum",differentPositioningBadges:"Different Positioning Badges",upperRight:"The Upper Right",lowerRight:"The Lower Right",upperLeft:"The Upper Left",lowerLeft:"The Lower Left",whetherToDisplayTheBadge:"Whether To Display The Badge",clickToChangeTheState:"Click To Change The State",badge:"Badge",customBadgeColors:"Custom Badge Colors",customBadgeIcons:"Custom Badge Icons"};const{add:c,use:b,pack:r,packs:Y,merge:Z}=y(),S=p=>{E(p),b(p)};m("zh-CN",T);m("en-US",D);c("zh-CN",A);c("en-US",L);const N={class:"example"},ee={setup(p){const h=i(88),B=i(188),f=i(99),g=i(!1),_=()=>{g.value=!g.value};return w(S),x(v),(R,U)=>(F(),k("div",N,[a(e(d),null,{default:t(()=>[u(l(e(r).themeColorBadge),1)]),_:1}),a(e(s),null,{default:t(()=>[a(e(o)),a(e(o),{type:"primary"}),a(e(o),{type:"info"}),a(e(o),{type:"warning"}),a(e(o),{type:"success"}),a(e(o),{type:"danger"})]),_:1}),a(e(d),null,{default:t(()=>[u(l(e(r).dotBadge),1)]),_:1}),a(e(o),{dot:"",type:"danger"}),a(e(d),null,{default:t(()=>[u(l(e(r).customContentBadge),1)]),_:1}),a(e(s),null,{default:t(()=>[a(e(o),{type:"danger",value:"badge"}),a(e(o),{type:"danger",value:"hot"}),a(e(o),{type:"danger",value:"66"})]),_:1}),a(e(d),null,{default:t(()=>[u(l(e(r).maximum),1)]),_:1}),a(e(s),null,{default:t(()=>[a(e(o),{type:"danger",value:h.value,"max-value":f.value},null,8,["value","max-value"]),a(e(o),{type:"danger",value:B.value,"max-value":f.value},null,8,["value","max-value"])]),_:1}),a(e(d),null,{default:t(()=>[u(l(e(r).differentPositioningBadges),1)]),_:1}),a(e(s),{size:[8,20]},{default:t(()=>[a(e(o),{type:"danger",position:"right-top"},{default:t(()=>[a(e(n),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).upperRight),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"right-bottom"},{default:t(()=>[a(e(n),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).lowerRight),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"left-top"},{default:t(()=>[a(e(n),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).upperLeft),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"left-bottom"},{default:t(()=>[a(e(n),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).lowerLeft),1)]),_:1})]),_:1})]),_:1}),a(e(d),null,{default:t(()=>[u(l(e(r).whetherToDisplayTheBadge),1)]),_:1}),a(e(C),{onClick:_},{default:t(()=>[u(l(e(r).clickToChangeTheState),1)]),_:1}),a(e(o),{type:"danger",position:"right-top",hidden:g.value},{default:t(()=>[a(e(n),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).badge),1)]),_:1})]),_:1},8,["hidden"]),a(e(d),null,{default:t(()=>[u(l(e(r).customBadgeColors),1)]),_:1}),a(e(o),{color:"#6200ea",position:"right-top"},{default:t(()=>[a(e(n),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).badge),1)]),_:1})]),_:1}),a(e(d),null,{default:t(()=>[u(l(e(r).customBadgeIcons),1)]),_:1}),a(e(o),{color:"#6200ea",position:"right-top",icon:"notebook"},{default:t(()=>[a(e(n),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).badge),1)]),_:1})]),_:1})]))}};export{ee as default};