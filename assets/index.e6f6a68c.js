import{L as Q}from"./index.e00eb038.js";import{R as j}from"./index.e90d7f16.js";import{c as J,b as O}from"./elements.929d6d9b.js";import{o as Z,i as q,c as G,a as E}from"./components.27c76418.js";import{p as K,u as W,a as z,_ as X,b as Y,c as ee}from"./en-US.7c11d5b3.js";import{d as te,a as R,e as ae,D as ie,_ as oe,n as ne,t as se,ab as le,h as m,i as y,J as U,l as $,p as b,H as T,N as l,x as s,k as re,M as c,r as de,at as ue,ag as t,au as k,P as o,F as x,ad as w,j as A}from"./elevation.ecb899cd.js";import{C as S}from"./index.5646cd5e.js";import{T as fe,a as D}from"./index.41a780d4.js";import{T as me}from"./index.d07fc8ce.js";import{T as I}from"./index.b2b552f4.js";import{d as pe}from"./index.5d153c96.js";import{a as ge,b as ce}from"./utils.d9e2b944.js";import"./index.b2e2f57c.js";/* empty css               */import"./index.8fdf16ce.js";import"./index.277f9f68.js";import"./index.fb509c4f.js";import"./provide.8cab8c37.js";import"./provide.19fd38ae.js";import"./index.cfbd6901.js";const ve={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String},onLoad:{type:Function},"onUpdate:loading":{type:Function},"onUpdate:error":{type:Function}};const{n:he,classes:Te}=G("list"),ke=te({name:"VarList",directives:{Ripple:j},components:{VarLoading:Q},props:ve,setup(e){const a=R(null),C=R(null);let p;const L=()=>{E(e["onUpdate:error"],!1),E(e["onUpdate:loading"],!0),E(e.onLoad)},v=()=>{const d=p===window?window.innerHeight:p.getBoundingClientRect().bottom,{bottom:g}=C.value.getBoundingClientRect();return Math.floor(g)-O(e.offset)<=d},r=async()=>{await ne();const{loading:d,finished:g,error:B}=e;!d&&!g&&!B&&v()&&L()};return ae(()=>{p=J(a.value),e.immediateCheck&&r(),p.addEventListener("scroll",r)}),ie(()=>{p.removeEventListener("scroll",r)}),{pack:K,listEl:a,detectorEl:C,dt:Z,isNumber:q,load:L,check:r,n:he,classes:Te}}});function ye(e,a,C,p,L,v){const r=se("var-loading"),d=le("ripple");return m(),y("div",{class:T(e.classes(e.n(),"var--box")),ref:"listEl"},[U(e.$slots,"default"),e.loading?U(e.$slots,"loading",{key:0},()=>[b("div",{class:T(e.n("loading"))},[b("div",{class:T(e.n("loading-text"))},l(e.dt(e.loadingText,e.pack.listLoadingText)),3),s(r,{size:"mini",radius:10})],2)]):$("v-if",!0),e.finished?U(e.$slots,"finished",{key:1},()=>[b("div",{class:T(e.n("finished"))},l(e.dt(e.finishedText,e.pack.listFinishedText)),3)]):$("v-if",!0),e.error?U(e.$slots,"error",{key:2},()=>[re((m(),y("div",{class:T(e.n("error")),onClick:a[0]||(a[0]=(...g)=>e.load&&e.load(...g))},[c(l(e.dt(e.errorText,e.pack.listErrorText)),1)],2)),[[d]])]):$("v-if",!0),b("div",{class:T(e.n("detector")),ref:"detectorEl"},null,2)],2)}var F=oe(ke,[["render",ye]]);F.install=function(e){e.component(F.name,F)};var Fe={basicUsage:"\u57FA\u672C\u4F7F\u7528",loadFail:"\u52A0\u8F7D\u5931\u8D25",tipText:"\u63D0\u793A\u6587\u5B57",loadingText:"\u6B63\u5728\u52AA\u529B\u8F93\u51FA",errorText:"\u51FA\u9519\u4E86\u51FA\u9519\u4E86",finishedText:"\u4E00\u6EF4\u90FD\u6CA1\u6709\u4E86",listItem:"\u5217\u8868\u9879"},Ce={basicUsage:"Basic Usage",loadFail:"Load Fail",tipText:"Tip Text",loadingText:"loading QAQ",errorText:"error TNT",finishedText:"finished ORZ",listItem:"List Item"};const{add:V,use:Le,pack:f,packs:Je,merge:Oe}=W(),Ue=e=>{ee(e),Le(e)};z("zh-CN",X);z("en-US",Y);V("zh-CN",Fe);V("en-US",Ce);const Ze={setup(e){const a=de({loading:!1,loading2:!1,loading3:!1,finished:!1,finished2:!1,finished3:!1,error:!1,list:[],list2:[],list3:[],current:0}),{list:C,list2:p,list3:L,loading:v,loading2:r,loading3:d,finished:g,finished2:B,finished3:_,error:N,current:h}=ue(a),M=()=>{if(a.current!==0){a.loading=!1;return}setTimeout(()=>{for(let u=0;u<20;u++)a.list.push(a.list.length+1);a.loading=!1,a.list.length>=60&&(a.finished=!0)},1e3)},P=()=>{if(a.current!==1){a.loading2=!1;return}setTimeout(()=>{if(a.list2.length===40){a.error=!0,a.loading2=!1;return}for(let u=0;u<20;u++)a.list2.push(a.list2.length+1);a.loading2=!1},1e3)},H=()=>{if(a.current!==2){a.loading3=!1;return}setTimeout(()=>{for(let u=0;u<20;u++)a.list3.push(a.list3.length+1);a.loading3=!1,a.list3.length>=60&&(a.finished3=!0)},1e3)};return ge(Ue),ce(pe),(u,n)=>(m(),y(x,null,[s(t(fe),{active:t(h),"onUpdate:active":n[0]||(n[0]=i=>k(h)?h.value=i:null),sticky:"","offset-top":"14.4vw",style:{"margin-bottom":"10px"}},{default:o(()=>[s(t(D),null,{default:o(()=>[c(l(t(f).basicUsage),1)]),_:1}),s(t(D),null,{default:o(()=>[c(l(t(f).loadFail),1)]),_:1}),s(t(D),null,{default:o(()=>[c(l(t(f).tipText),1)]),_:1})]),_:1},8,["active"]),s(t(me),{active:t(h),"onUpdate:active":n[5]||(n[5]=i=>k(h)?h.value=i:null)},{default:o(()=>[s(t(I),null,{default:o(()=>[s(t(F),{finished:t(g),loading:t(v),"onUpdate:loading":n[1]||(n[1]=i=>k(v)?v.value=i:null),onLoad:M},{default:o(()=>[(m(!0),y(x,null,w(t(C),i=>(m(),A(t(S),{key:i},{default:o(()=>[c(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","loading"])]),_:1}),s(t(I),null,{default:o(()=>[s(t(F),{finished:t(B),error:t(N),"onUpdate:error":n[2]||(n[2]=i=>k(N)?N.value=i:null),loading:t(r),"onUpdate:loading":n[3]||(n[3]=i=>k(r)?r.value=i:null),onLoad:P},{default:o(()=>[(m(!0),y(x,null,w(t(p),i=>(m(),A(t(S),{key:i},{default:o(()=>[c(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["finished","error","loading"])]),_:1}),s(t(I),null,{default:o(()=>[s(t(F),{"loading-text":t(f).loadingText,"finished-text":t(f).finishedText,"error-text":t(f).errorText,finished:t(_),loading:t(d),"onUpdate:loading":n[4]||(n[4]=i=>k(d)?d.value=i:null),onLoad:H},{default:o(()=>[(m(!0),y(x,null,w(t(L),i=>(m(),A(t(S),{key:i},{default:o(()=>[c(l(t(f).listItem)+": "+l(i),1)]),_:2},1024))),128))]),_:1},8,["loading-text","finished-text","error-text","finished","loading"])]),_:1})]),_:1},8,["active"])],64))}};export{Ze as default};
