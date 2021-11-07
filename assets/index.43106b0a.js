import{I as m}from"./index.536d6075.js";import{B as E}from"./index.1a99b8c3.js";import{A as j}from"./AppType.eb8ea594.js";import{S as y}from"./index.411369e5.js";import{u as F,a as g,_ as S,b as B,c as U,w as D,d as $}from"./en-US.5c76beb1.js";import{c as d}from"./index.510439cf.js";import{_ as I}from"./elevation.7f6c0241.js";import{q as A,H as N,r,d as c,o as P,c as z,a as h,h as s,w as a,F as T,l as t,t as i}from"./vendor.ea41cd30.js";import"./index.b48b5fcc.js";import"./provide.35b3bb40.js";import"./components.b90d3f87.js";import"./shared.cba5a5a3.js";import"./elements.524bf92a.js";import"./index.dd35f607.js";import"./index.89b2169f.js";import"./index.92898db6.js";import"./lock.67e58c2a.js";import"./zIndex.c624737f.js";import"./index.931337ba.js";import"./index.c1a4d29c.js";var V={functionCall:"\u51FD\u6570\u8C03\u7528",componentCall:"\u7EC4\u4EF6\u8C03\u7528",preview:"\u57FA\u672C\u4F7F\u7528",callBack:"\u5904\u7406\u56DE\u8C03\u51FD\u6570",basicUse:"\u57FA\u672C\u4F7F\u7528",specifyInitialPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",displayCloseButton:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",listenCloseEvents:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",shutdownEvent:"\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002"},L={functionCall:"Function Call",componentCall:"Component Call",preview:"Basic use",callBack:"Handle callback function",basicUse:"Basic use",specifyInitialPosition:"Specify initial position",displayCloseButton:"Display the close button",listenCloseEvents:"Listen for close event",shutdownEvent:"The shutdown event was triggered."};const{add:b,use:H,pack:k,packs:me,merge:de}=F(),_=e=>{U(e),H(e)};g("zh-CN",S);g("en-US",B);b("zh-CN",V);b("en-US",L);const q=A({name:"ImagePreviewExample",components:{VarImagePreview:m.Component,VarButton:E,AppType:j},setup(){const e=["https://varlet.gitee.io/varlet-ui/cat.jpg","https://varlet.gitee.io/varlet-ui/cat2.jpg"],o=["https://varlet.gitee.io/varlet-ui/cat.jpg"],v=()=>{y({content:k.value.shutdownEvent,duration:1e3})},w=()=>{m({images:e,onChange:u=>{console.log("index",u)}})};D(_);const C=d.touchmoveForbid;return $(u=>{u==="pc"&&(d.touchmoveForbid=!1)}),N(()=>{d.touchmoveForbid=C}),{preview(){m(o)},previewCallback:w,pack:k,show:r(!1),currentShow:r(!1),closeShow:r(!1),closeEventShow:r(!1),images:r(e),image:r(o),handleCloseEvent:v}}}),G={class:"image-preview-demo"},J={class:"image-preview-demo"};function K(e,o,v,w,C,u){const f=c("app-type"),l=c("var-button"),p=c("var-image-preview");return P(),z(T,null,[h("div",G,[s(f,null,{default:a(()=>[t(i(e.pack.functionCall),1)]),_:1}),s(l,{type:"primary",block:"",onClick:e.preview},{default:a(()=>[t(i(e.pack.preview),1)]),_:1},8,["onClick"]),s(l,{type:"primary",block:"",onClick:e.previewCallback},{default:a(()=>[t(i(e.pack.callBack),1)]),_:1},8,["onClick"])]),h("div",J,[s(f,null,{default:a(()=>[t(i(e.pack.componentCall),1)]),_:1}),s(l,{type:"warning",block:"",onClick:o[0]||(o[0]=n=>e.show=!0)},{default:a(()=>[t(i(e.pack.basicUse),1)]),_:1}),s(p,{images:e.image,show:e.show,"onUpdate:show":o[1]||(o[1]=n=>e.show=n)},null,8,["images","show"]),s(l,{type:"warning",block:"",onClick:o[2]||(o[2]=n=>e.currentShow=!0)},{default:a(()=>[t(i(e.pack.specifyInitialPosition),1)]),_:1}),s(p,{images:e.images,show:e.currentShow,"onUpdate:show":o[3]||(o[3]=n=>e.currentShow=n),current:"https://varlet.gitee.io/varlet-ui/cat2.jpg"},null,8,["images","show"]),s(l,{type:"warning",block:"",onClick:o[4]||(o[4]=n=>e.closeShow=!0)},{default:a(()=>[t(i(e.pack.displayCloseButton),1)]),_:1}),s(p,{images:e.images,show:e.closeShow,"onUpdate:show":o[5]||(o[5]=n=>e.closeShow=n),closeable:!0},null,8,["images","show"]),s(l,{type:"warning",block:"",onClick:o[6]||(o[6]=n=>e.closeEventShow=!0)},{default:a(()=>[t(i(e.pack.listenCloseEvents),1)]),_:1}),s(p,{images:e.images,show:e.closeEventShow,"onUpdate:show":o[7]||(o[7]=n=>e.closeEventShow=n),onClose:e.handleCloseEvent},null,8,["images","show","onClose"])])],64)}var ce=I(q,[["render",K],["__scopeId","data-v-70a9600b"]]);export{ce as default};