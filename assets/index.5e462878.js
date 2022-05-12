var te=Object.defineProperty;var U=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var X=(e,s,r)=>s in e?te(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,J=(e,s)=>{for(var r in s||(s={}))ne.call(s,r)&&X(e,r,s[r]);if(U)for(var r of U(s))re.call(s,r)&&X(e,r,s[r]);return e};import{d as ue,a as S,t as V,c as se,s as d,i as oe}from"./components.27c76418.js";import{F as ie,u as de}from"./provide.63ba3e6d.js";import{a as ce}from"./elements.929d6d9b.js";import{d as me,a as $,r as ve,b as k,w as K,e as be,_ as he,t as fe,h as w,i as F,p as m,H as o,K as g,F as Ve,ad as ge,J as Se,x as ye,n as pe,N as ke}from"./elevation.ecb899cd.js";function ze(e){return["always","normal","never"].includes(e)}const Ne={modelValue:{type:[Number,Array],default:0},step:{type:[Number,String],default:1},range:{type:Boolean,default:!1},labelVisible:{type:String,default:"normal",validator:ze},activeColor:{type:String},trackColor:{type:String},thumbColor:{type:String},labelColor:{type:String},labelTextColor:{type:String},trackHeight:{type:[String,Number]},thumbSize:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rules:{type:Array},onChange:{type:Function},onStart:{type:Function},onEnd:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:Ce,classes:Te}=se("slider");var j=(e=>(e.First="1",e.Second="2",e))(j||{});const $e=me({name:"VarSlider",components:{VarFormDetails:ie},props:Ne,setup(e){const{bindForm:s,form:r}=de(),{errorMessage:P,validateWithTrigger:D,validate:M,resetValidation:z}=ue(),u=()=>M(e.rules,e.modelValue),c=()=>({startPosition:0,currentLeft:0,active:!1,percentValue:0}),q=()=>pe(()=>D(["onChange"],"onChange",e.rules,e.modelValue)),T=$(null),v=$(0),N=$(!1),n=ve({["1"]:c(),["2"]:c()}),b=k(()=>v.value/100*V(e.step)),G=k(()=>{let a=[{value:e.modelValue,enumValue:"1"}];return e.range&&d(e.modelValue)&&(a=[{value:e.modelValue[0],enumValue:"1"},{value:e.modelValue[1],enumValue:"2"}]),a}),O=a=>{let l;return e.thumbSize!==void 0&&(l=n[a.enumValue].active?`${3*V(e.thumbSize)}px`:"0px"),{height:l,width:l}},Q=a=>e.labelVisible==="always"?!0:e.labelVisible==="never"?!1:n[a].active,Y=k(()=>{const{activeColor:a,range:l,modelValue:t}=e,h=l&&d(t)?Math.abs(t[0]-t[1]):t,i=l&&d(t)?Math.min(t[0],t[1]):0;return{width:`${h}%`,left:`${i}%`,background:a}}),y=k(()=>e.disabled||(r==null?void 0:r.disabled.value)),C=k(()=>e.readonly||(r==null?void 0:r.readonly.value)),B=(a,l)=>{let t=[];const{step:h,range:i,modelValue:f,onChange:ae}=e,I=V(h),p=Math.round(a/b.value)*I,le=n[l].percentValue;if(n[l].percentValue=p/I,i&&d(f)&&(t=l==="1"?[p,f[1]]:[f[0],p]),le!==p){const R=i?t:p;S(ae,R),S(e["onUpdate:modelValue"],R),q()}},Z=a=>{if(!e.range)return"1";const l=n["1"].percentValue*b.value,t=n["2"].percentValue*b.value,h=Math.abs(a-l),i=Math.abs(a-t);return h<=i?"1":"2"},_=(a,l)=>{v.value||(v.value=T.value.offsetWidth),!(y.value||C.value)&&(S(e.onStart),N.value=!0,n[l].startPosition=a.touches[0].clientX)},x=(a,l)=>{if(y.value||C.value||!N.value)return;let t=a.touches[0].clientX-n[l].startPosition+n[l].currentLeft;n[l].active=!0,t<=0?t=0:t>=v.value&&(t=v.value),B(t,l)},W=a=>{const{range:l,modelValue:t,onEnd:h}=e;if(y.value||C.value)return;let i=[];n[a].currentLeft=n[a].percentValue*b.value,n[a].active=!1;const f=n[a].percentValue;l&&d(t)&&(i=a==="1"?[f,t[1]]:[t[0],f]),S(h,l?i:f),N.value=!1},ee=a=>{if(y.value||C.value||a.target.closest(".var-slider__thumb"))return;const l=a.clientX-ce(a.currentTarget),t=Z(l);B(l,t),W(t)},E=()=>{const a=V(e.step);return isNaN(a)?(console.warn('[Varlet] Slider: type of prop "step" should be Number'),!1):a<1||a>100?(console.warn('[Varlet] Slider: "step" should be >= 0 and <= 100'),!1):parseInt(`${e.step}`,10)!==a?(console.warn('[Varlet] Slider: "step" should be an Integer'),!1):!0},A=()=>{const{range:a,modelValue:l}=e;return a&&!d(l)?(console.error('[Varlet] Slider: "modelValue" should be an Array'),!1):!a&&d(l)?(console.error('[Varlet] Slider: "modelValue" should be a Number'),!1):a&&d(l)&&l.length<2?(console.error('[Varlet] Slider: "modelValue" should have two value'),!1):!0},H=(a=e.modelValue,l=V(e.step))=>{e.range&&d(a)?(n["1"].percentValue=a[0]/l,n["1"].currentLeft=n["1"].percentValue*b.value,n["2"].percentValue=a[1]/l,n["2"].currentLeft=n["2"].percentValue*b.value):oe(a)&&(n["1"].currentLeft=a/l*b.value)};return K([()=>e.modelValue,()=>e.step],([a,l])=>{!E()||!A()||N.value||H(a,V(l))}),K(v,()=>H()),be(()=>{!E()||!A()||(v.value=T.value.offsetWidth)}),S(s,{reset:()=>{const a=e.range?[0,0]:0;S(e["onUpdate:modelValue"],a),z()},validate:u,resetValidation:z}),{n:Ce,classes:Te,Thumbs:j,sliderEl:T,getFillStyle:Y,isDisabled:y,errorMessage:P,thumbsProps:n,thumbList:G,toNumber:V,getRippleSize:O,showLabel:Q,start:_,move:x,end:W,click:ee}}}),we=["onTouchstart","onTouchmove","onTouchend","onTouchcancel"];function Fe(e,s,r,P,D,M){const z=fe("var-form-details");return w(),F("div",{class:o(e.n())},[m("div",{class:o(e.classes(e.n("block"),[e.isDisabled,e.n("--disabled")],[e.errorMessage,e.n("--error")])),style:g({height:e.thumbSize===void 0?e.thumbSize:`${3*e.toNumber(e.thumbSize)}px`,margin:e.thumbSize===void 0?e.thumbSize:`0 ${e.toNumber(e.thumbSize)/2}px`}),ref:"sliderEl",onClick:s[0]||(s[0]=(...u)=>e.click&&e.click(...u))},[m("div",{class:o(e.n("track"))},[m("div",{class:o(e.n("track-background")),style:g({background:e.trackColor,height:e.trackHeight+"px"})},null,6),m("div",{class:o(e.n("track-fill")),style:g(e.getFillStyle)},null,6)],2),(w(!0),F(Ve,null,ge(e.thumbList,u=>(w(),F("div",{class:o(e.n("thumb")),key:u.enumValue,style:g({left:`${u.value}%`,zIndex:e.thumbsProps[u.enumValue].active?1:void 0}),onTouchstart:c=>e.start(c,u.enumValue),onTouchmove:c=>e.move(c,u.enumValue),onTouchend:c=>e.end(u.enumValue),onTouchcancel:c=>e.end(u.enumValue)},[Se(e.$slots,"button",{currentValue:u.value},()=>[m("div",{class:o(e.n("thumb-block")),style:g({background:e.thumbColor,height:e.thumbSize+"px",width:e.thumbSize+"px"})},null,6),m("div",{class:o(e.classes(e.n("thumb-ripple"),[e.thumbsProps[u.enumValue].active,e.n("thumb-ripple--active")])),style:g(J({background:e.thumbColor},e.getRippleSize(u)))},null,6),m("div",{class:o(e.classes(e.n("thumb-label"),[e.showLabel(u.enumValue),e.n("thumb-label--active")])),style:g({background:e.labelColor,color:e.labelTextColor,height:e.thumbSize===void 0?e.thumbSize:`${2*e.toNumber(e.thumbSize)}px`,width:e.thumbSize===void 0?e.thumbSize:`${2*e.toNumber(e.thumbSize)}px`})},[m("span",null,ke(u.value),1)],6)])],46,we))),128))],6),ye(z,{"error-message":e.errorMessage,class:o(e.n("form")),"var-slider-cover":""},null,8,["error-message","class"])],2)}var L=he($e,[["render",Fe]]);L.install=function(e){e.component(L.name,L)};export{L as S};