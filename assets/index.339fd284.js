import{A as _}from"./AppType.eb8ea594.js";import{L as y}from"./index.b8b0c6dd.js";import{u as m,a as i,_ as u,b as f,c as v,w as h}from"./en-US.64d12132.js";import{_ as g}from"./elevation.7f6c0241.js";import{d as n,o as z,c as x,a as s,h as e,w as p,l as d,t as l}from"./vendor.ea41cd30.js";import"./shared.af52c411.js";var C={type:"\u7C7B\u578B",size:"\u5927\u5C0F",color:"\u989C\u8272"},b={type:"Type",size:"Size",color:"Color"};const{add:r,use:k,pack:N,packs:O,merge:P}=m(),w=a=>{v(a),k(a)};i("zh-CN",u);i("en-US",f);r("zh-CN",C);r("en-US",b);const j={name:"LoadingExample",components:{VarLoading:y,AppType:_},setup(){return h(w),{pack:N}}},L={class:"loading-demo"},S={class:"loading-demo__type"},B={class:"loading-demo__type-block"},U={class:"loading-demo__type"},T={class:"loading-demo__type-block"},V={class:"loading-demo__size"},A={class:"loading-demo__size-block"};function $(a,E,D,t,F,I){const c=n("app-type"),o=n("var-loading");return z(),x("div",L,[s("div",S,[e(c,null,{default:p(()=>[d(l(t.pack.type),1)]),_:1}),s("div",B,[e(o,{type:"circle"}),e(o,{type:"cube"}),e(o,{type:"wave"}),e(o,{type:"rect"}),e(o,{type:"disappear"})])]),s("div",U,[e(c,null,{default:p(()=>[d(l(t.pack.color),1)]),_:1}),s("div",T,[e(o,{type:"circle",style:{color:"#2979ff"}}),e(o,{type:"cube",style:{color:"#2979ff"}}),e(o,{type:"wave",style:{color:"#2979ff"}}),e(o,{type:"rect",style:{color:"#2979ff"}}),e(o,{type:"disappear",style:{color:"#2979ff"}})])]),s("div",V,[e(c,null,{default:p(()=>[d(l(t.pack.size),1)]),_:1}),s("div",A,[e(o,{type:"circle",radius:"12"}),e(o,{type:"cube",size:"small"}),e(o,{type:"wave",size:"small"}),e(o,{type:"rect",size:"small"}),e(o,{type:"disappear",size:"small"})])])])}var Q=g(j,[["render",$],["__scopeId","data-v-017fd4e6"]]);export{Q as default};