import{a as u,t as o}from"./shared.506a394a.js";import{t as p}from"./elements.6395be39.js";import{_ as c}from"./elevation.f7de2a7a.js";import{d as f,r as l,y as d,o as v,l as g,p as y,n as h,Q as z,z as S}from"./vendor.efca09d3.js";const k={name:{type:String},size:{type:[Number,String]},color:{type:String},namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},onClick:{type:Function}};const U=f({name:"VarIcon",props:k,setup(e){const n=l(""),a=l(!1);return d(()=>e.name,async(s,i)=>{const{transition:t}=e;if(i==null||o(t)===0){n.value=s;return}a.value=!0,await S(),setTimeout(()=>{i!=null&&(n.value=s),a.value=!1},o(t))},{immediate:!0}),{nextName:n,shrinking:a,isURL:u,toNumber:o,toSizeUnit:p}}});function C(e,n,a,m,s,i){return v(),g(z(e.isURL(e.name)?"img":"i"),{class:y(["var-icon",[`${e.namespace}--set`,e.isURL(e.name)?"var-icon__image":`${e.namespace}-${e.nextName}`,e.shrinking?"var-icon--shrinking":null]]),style:h({color:e.color,transition:`transform ${e.toNumber(e.transition)}ms`,width:e.isURL(e.name)?e.toSizeUnit(e.size):null,height:e.isURL(e.name)?e.toSizeUnit(e.size):null,fontSize:e.toSizeUnit(e.size)}),src:e.isURL(e.name)?e.nextName:null,onClick:e.onClick},null,8,["class","style","src","onClick"])}var r=c(U,[["render",C]]);r.install=function(e){e.component(r.name,r)};export{r as I,k as p};