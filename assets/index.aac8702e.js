var N=Object.defineProperty,E=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var k=(e,t,n)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))V.call(t,n)&&k(e,n,t[n]);if(F)for(var n of F(t))j.call(t,n)&&k(e,n,t[n]);return e},v=(e,t)=>E(e,I(t));import{A as z}from"./AppType.eb8ea594.js";import{t as _}from"./elements.227b31a2.js";import{l as b,t as A}from"./shared.2d2ec151.js";import{_ as C}from"./elevation.7f6c0241.js";import{q as $,p as L,b as S,x as M,a1 as q,Z as H,o as B,c as D,B as R,m as W,n as Z,t as l,f as G,d as w,a as o,h as a,w as d,F as J,l as c}from"./vendor.ea41cd30.js";import{I as K}from"./index.7850413d.js";import{u as O,a as T,_ as P,b as Q,c as X,w as Y}from"./en-US.64d12132.js";const ee={inset:{type:[Boolean,Number,String],default:!1},vertical:{type:Boolean,default:!1},description:{type:String},margin:{type:String},dashed:{type:Boolean,default:!1}};const te=$({name:"VarDivider",props:ee,setup(e,{slots:t}){const n=L({withText:!1}),i=S(()=>b(e.inset)?e.inset:!0),h=S(()=>{const{inset:s,vertical:r,margin:f}=e,x={margin:f};if(b(s)||s===0)return u({},x);const y=A(s),g=Math.abs(y)+(s+"").replace(y+"","");return r?v(u({},x),{height:`calc(80% - ${_(g)})`}):v(u({},x),{width:`calc(100% - ${_(g)})`,left:y>0?_(g):_(0)})}),p=()=>{var s;n.withText=Boolean((s=t.default)==null?void 0:s.call(t).length)||Boolean(e.description)};return M(()=>{p()}),q(()=>{p()}),v(u({},H(n)),{style:h,isInset:i})}}),ae={key:0,class:"var-divider__text"};function ne(e,t,n,i,h,p){return B(),D("div",{class:W(["var-divider var--box",[e.vertical?"var-divider--vertical":null,e.withText?"var-divider--with-text":null,e.isInset?"var-divider--inset":null,e.dashed?"var-divider--dashed":null]]),style:Z(e.style)},[R(e.$slots,"default",{},()=>[e.description?(B(),D("span",ae,l(e.description),1)):G("v-if",!0)])],6)}var m=C(te,[["render",ne]]);m.install=function(e){e.component(m.name,m)};var se={basicUsage:"\u57FA\u672C\u4F7F\u7528",dashed:"\u865A\u7EBF",inset:"\u7F29\u8FDB",vertical:"\u5782\u76F4\u5206\u5272\u7EBF",text:"\u6587\u5B57",withDesc:"\u5E26\u6709\u6587\u5B57\u63CF\u8FF0\u7684\u5206\u5272\u7EBF",withDescText:"\u6587\u5B57\u63CF\u8FF0",custom:"\u81EA\u5B9A\u4E49"},ie={basicUsage:"Basic Usage",dashed:"Dashed Divider",inset:"Inset Divider",vertical:"Vertical Divider",text:"Text",withDesc:"The Divider with description",withDescText:"Description",custom:"Custom"};const{add:U,use:re,pack:le,packs:ge,merge:Be}=O(),oe=e=>{X(e),re(e)};T("zh-CN",P);T("en-US",Q);U("zh-CN",se);U("en-US",ie);const de={name:"DividerExample",components:{VarIcon:K,VarDivider:m,AppType:z},setup(){return Y(oe),{pack:le}}},ce={class:"vertical-divider-wrapper"};function ue(e,t,n,i,h,p){const s=w("app-type"),r=w("var-divider"),f=w("var-icon");return B(),D(J,null,[o("div",null,[a(s,null,{default:d(()=>[c(l(i.pack.basicUsage),1)]),_:1}),a(r)]),o("div",null,[a(s,null,{default:d(()=>[c(l(i.pack.dashed),1)]),_:1}),a(r,{dashed:""})]),o("div",null,[a(s,null,{default:d(()=>[c(l(i.pack.inset),1)]),_:1}),a(r,{inset:""}),a(r,{inset:36,margin:"36px 0"}),a(r,{inset:"-36px"})]),o("div",null,[a(s,null,{default:d(()=>[c(l(i.pack.vertical),1)]),_:1}),o("div",ce,[o("span",null,l(i.pack.text),1),a(r,{vertical:""}),o("span",null,l(i.pack.text),1),a(r,{vertical:""}),o("span",null,l(i.pack.text),1)])]),o("div",null,[a(s,null,{default:d(()=>[c(l(i.pack.withDesc),1)]),_:1}),a(r,{description:i.pack.withDescText},null,8,["description"])]),o("div",null,[a(s,null,{default:d(()=>[c(l(i.pack.custom),1)]),_:1}),a(r,null,{default:d(()=>[a(f,{name:"heart-outline",style:{margin:"0 16px",color:"rgb(41, 121, 255)"}})]),_:1})])],64)}var De=C(de,[["render",ue],["__scopeId","data-v-2055987c"]]);export{De as default};