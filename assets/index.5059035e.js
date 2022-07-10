import{I as L}from"./index.388f0ba6.js";import{c as M,f as A}from"./elements.e9a3cb11.js";import{d as F,a as l,b as S,w as U,o as D,_ as V,W as N,s as H,f as g,h as E,l as z,t as Y,H as T,K as J,J as K,e as W,i as C,P as b,ag as w,ad as X,M as j,N as q,F as G}from"./elevation.b6664af0.js";import{c as Q}from"./components.1dfa4f07.js";import{C as Z}from"./index.b4e970f0.js";import{d as x}from"./index.5d153c96.js";import{b as ee}from"./utils.0c1f0941.js";const ae={modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},animationDuration:{type:[Number,String],default:300},successDuration:{type:[Number,String],default:2e3},bgColor:{type:String},successBgColor:{type:String},color:{type:String},successColor:{type:String},onRefresh:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:oe,classes:te}=Q("pull-refresh"),f=100,h=-50,I=150,ne=F({name:"VarPullRefresh",components:{VarIcon:L},props:ae,setup(e){let o,v;const u=l(null),c=l(0),n=l(h),s=l("arrow-down"),a=l("default"),r=l(!1),i=l(!0),d=S(()=>a.value!=="loading"&&a.value!=="success"&&!e.disabled),R=S(()=>({transform:`translate3d(0px, ${n.value}px, 0px) translate(-50%, 0)`,transition:r.value?`transform ${e.animationDuration}ms`:void 0,background:e.successBgColor||e.bgColor,color:e.successColor||e.color})),_=S(()=>a.value==="success"),k=()=>new Promise(t=>{window.setTimeout(()=>{i.value=!0,t()},I)}),B=t=>{!d.value||(a.value="pulling",c.value=t.touches[0].clientY)},O=t=>{const m=A(o);if(m>0||!d.value)return;m===0&&n.value>h&&t.cancelable&&t.preventDefault();const p=(t.touches[0].clientY-c.value)/2+h;n.value=p>=f?f:p,n.value>=f*.2?(i.value=!1,s.value="refresh",v=k()):s.value="arrow-down"},P=async()=>{var t,m;!d.value||(r.value=!0,n.value>=f*.2?(await v,a.value="loading",n.value=f*.3,(t=e["onUpdate:modelValue"])==null||t.call(e,!0),(m=e.onRefresh)==null||m.call(e)):(a.value="loosing",s.value="arrow-down",n.value=h,setTimeout(()=>{r.value=!1},N(e.animationDuration))))},$=()=>{setTimeout(()=>{a.value="default",s.value="arrow-down",r.value=!1},N(e.animationDuration))};return U(()=>e.modelValue,t=>{t===!1&&(r.value=!0,a.value="success",s.value="checkbox-marked-circle",setTimeout(()=>{n.value=h,$()},N(e.successDuration)))}),D(()=>{o=M(u.value)}),{n:oe,classes:te,iconHasChanged:i,ICON_TRANSITION:I,refreshStatus:a,freshNode:u,touchStart:B,touchMove:O,touchEnd:P,iconName:s,controlStyle:R,isSuccess:_}}});function se(e,o,v,u,c,n){const s=H("var-icon");return g(),E("div",{ref:"freshNode",class:T(e.n()),onTouchstart:o[0]||(o[0]=(...a)=>e.touchStart&&e.touchStart(...a)),onTouchmove:o[1]||(o[1]=(...a)=>e.touchMove&&e.touchMove(...a)),onTouchend:o[2]||(o[2]=(...a)=>e.touchEnd&&e.touchEnd(...a)),onTouchcancel:o[3]||(o[3]=(...a)=>e.touchEnd&&e.touchEnd(...a))},[z("div",{class:T(e.classes(e.n("control"),"var-elevation--2",[e.isSuccess,e.n("control-success")])),style:J(e.controlStyle)},[Y(s,{name:e.iconName,transition:e.ICON_TRANSITION,class:T(e.classes(e.n("icon"),[e.refreshStatus==="loading"&&e.iconHasChanged,e.n("animation")])),"var-pull-refresh-cover":""},null,8,["name","transition","class"])],6),K(e.$slots,"default")],34)}var y=V(ne,[["render",se]]);y.install=function(e){e.component(y.name,y)};const le={setup(e){const o=Array(10).fill("List Item"),v=Array(10).fill("This is new List Item"),u=l(!1),c=l(o),n=()=>{setTimeout(()=>{c.value=c.value[0]==="List Item"?v:o,u.value=!1},2e3)},s=a=>{a.preventDefault()};return D(()=>{document.body.addEventListener("touchmove",s,{passive:!1})}),W(()=>{document.body.removeEventListener("touchmove",s)}),ee(x),(a,r)=>(g(),C(w(y),{onRefresh:n,modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=i=>u.value=i),"success-duration":"2000"},{default:b(()=>[(g(!0),E(G,null,X(c.value,(i,d)=>(g(),C(w(Z),{key:d,border:""},{default:b(()=>[j(q(i+" "+(d+1)),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}};var fe=V(le,[["__scopeId","data-v-3162bf9d"]]);export{fe as default};