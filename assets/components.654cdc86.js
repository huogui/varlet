var L=Object.defineProperty;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var h=(n,t,e)=>t in n?L(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,u=(n,t)=>{for(var e in t||(t={}))v.call(t,e)&&h(n,e,t[e]);if(d)for(var e of d(t))m.call(t,e)&&h(n,e,t[e]);return n};var p=(n,t)=>{var e={};for(var r in n)v.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&d)for(var r of d(n))t.indexOf(r)<0&&m.call(n,r)&&(e[r]=n[r]);return e};import{r as P,x as l,H as g,O as N,P as V,p as O,Q as w,b as A,R as x,z as C,N as f,E as j,S as U,G as H,U as M}from"./vendor.ea41cd30.js";import{d as R,r as I}from"./shared.af52c411.js";function G(n,t){return Array.isArray(t)?t.reduce((e,r)=>(e[r]=n[r],e),{}):n[t]}function S(n){const t=j(n),e=document.createElement("div");return document.body.appendChild(e),{instance:t.mount(e),unmount(){t.unmount(),document.body.removeChild(e)}}}function Q(n,t={},e={}){const r={setup(){return()=>H(n,u(u({},t),e))}},{unmount:o}=S(r);return{unmountInstance:o}}function W(n){const t=[],e=r=>{if(r==null?void 0:r.component){e(r==null?void 0:r.component.subTree);return}Array.isArray(r==null?void 0:r.children)&&r.children.forEach(o=>{M(o)&&(t.push(o),e(o))})};return e(n),t}function q(n){const t=O([]),e=f(),r=()=>{const s=W(e.subTree);t.sort((c,y)=>s.indexOf(c.vnode)-s.indexOf(y.vnode))};return w(n,{collect:s=>{t.push(s),r()},clear:s=>{I(t,s)},instances:t}),{length:A(()=>t.length)}}function F(n){if(!E(n))return{index:null};const t=x(n),{collect:e,clear:r,instances:o}=t,a=f();return l(()=>{C().then(()=>e(a))}),g(()=>{C().then(()=>r(a))}),{index:A(()=>o.indexOf(a))}}function J(n){const t=[],e=a=>{t.push(a)},r=a=>{I(t,a)};return{childProviders:t,bindChildren:a=>{w(n,u({collect:e,clear:r},a))}}}function X(n){if(!E(n))return{parentProvider:null,bindParent:null};const i=x(n),{collect:e,clear:r}=i;return{parentProvider:p(i,["collect","clear"]),bindParent:s=>{l(()=>e(s)),U(()=>r(s))}}}function E(n){const t=f();return n in t.provides}function Y(){const n=P(""),t=async(o,a,i)=>!R(o)||!o.length?!0:!(await Promise.all(o.map(c=>c(a,i)))).some(c=>c!==!0?(n.value=String(c),!0):!1);return{errorMessage:n,validate:t,resetValidation:()=>{n.value=""},validateWithTrigger:async(o,a,i,s,c)=>{o.includes(a)&&await t(i,s,c)&&(n.value="")}}}function Z(n){l(()=>{window.addEventListener("hashchange",n),window.addEventListener("popstate",n)}),g(()=>{window.removeEventListener("hashchange",n),window.removeEventListener("popstate",n)})}function _(){const n=P(!1);return N(()=>{n.value=!1}),V(()=>{n.value=!0}),{disabled:n}}export{X as a,J as b,_ as c,Z as d,q as e,F as f,Q as m,G as p,Y as u};