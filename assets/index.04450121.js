import{F as E,u as N}from"./provide.538f2bd7.js";import{d as W,a as n,c as B,y}from"./components.5cba9644.js";import{u as S}from"./index.153cbdc4.js";import{_ as w}from"./elevation.4d11ec3f.js";import{d as D,b as c,y as b,e as q,o as P,c as j,a as H,G as I,p as _,i as J,z as K}from"./vendor.49f89f0d.js";function L(e){return["horizontal","vertical"].includes(e)}const O={modelValue:{type:Array,default:()=>[]},max:{type:[String,Number]},direction:{type:String,default:"horizontal",validator:L},validateTrigger:{type:Array,default:["onChange"]},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:Q,classes:R}=B("checkbox-group"),X=D({name:"VarCheckboxGroup",components:{VarFormDetails:E},props:O,setup(e){const d=c(()=>e.max),u=c(()=>e.modelValue.length),{length:m,checkboxes:r,bindCheckboxes:h}=S(),{bindForm:s}=N(),{errorMessage:v,validateWithTrigger:x,validate:A,resetValidation:l}=W(),F=c(()=>v.value),G=a=>{K(()=>{const{validateTrigger:o,rules:t,modelValue:z}=e;x(o,a,t,z)})},f=a=>{n(e["onUpdate:modelValue"],a),n(e.onChange,a),G("onChange")},U=a=>{const{modelValue:o}=e;o.includes(a)||f([...o,a])},$=a=>{const{modelValue:o}=e;!o.includes(a)||f(o.filter(t=>t!==a))},g=()=>r.forEach(({sync:a})=>a(e.modelValue)),V=()=>{r.forEach(a=>a.resetWithAnimation())},M=()=>{const a=r.map(({checkedValue:t})=>t.value),o=y(a);return V(),n(e["onUpdate:modelValue"],o),o},T=()=>{const a=r.filter(({checked:t})=>!t.value).map(({checkedValue:t})=>t.value),o=y(a);return V(),n(e["onUpdate:modelValue"],o),o},p=()=>{n(e["onUpdate:modelValue"],[]),l()},k=()=>A(e.rules,e.modelValue);b(()=>e.modelValue,g,{deep:!0}),b(()=>m.value,g);const C={max:d,checkedCount:u,onChecked:U,onUnchecked:$,validate:k,resetValidation:l,reset:p,errorMessage:F};return h(C),n(s,C),{errorMessage:v,n:Q,classes:R,checkAll:M,inverseAll:T,reset:p,validate:k,resetValidation:l}}});function Y(e,d,u,m,r,h){const s=q("var-form-details");return P(),j("div",{class:_(e.n("wrap"))},[H("div",{class:_(e.classes(e.n(),e.n(`--${e.direction}`)))},[I(e.$slots,"default")],2),J(s,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var i=w(X,[["render",Y]]);i.install=function(e){e.component(i.name,i)};export{i as C};