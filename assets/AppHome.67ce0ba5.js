import{_ as D,a as t,c as l,r as H,u as z,a7 as F,ar as I,t as L,ab as P,h as r,i,p as a,N as _,F as A,ad as V,k as q,x as E,s as M,aa as R}from"./elevation.ecb899cd.js";const S={name:"AppHome",setup(){var h,g,f,C,x,k,y,w,b,N;const p=t((g=(h=l)==null?void 0:h.title)!=null?g:""),m=t((C=(f=l)==null?void 0:f.logo)!=null?C:""),d=t((y=(k=(x=l)==null?void 0:x.mobile)==null?void 0:k.title)!=null?y:{}),v=t((N=(b=(w=l)==null?void 0:w.pc)==null?void 0:b.menu)!=null?N:[]).value.filter(e=>e.type===2),u=H(v),s=t("zh-CN"),c=t("mobile"),n=z();return F(e=>{s.value=e}),I(e=>{c.value=e}),{components:u,lang:s,toComponent:e=>{n.push({path:`/${e.doc}`,query:{language:s.value,platform:c.value,replace:e.doc}}),!M()&&R()&&window.top.scrollToMenu(e.doc)},logo:m,title:p,description:d}}},T={class:"logo"},j={class:"varlet-home__title"},G=["src"],J={class:"varlet-home__desc"},K=["onClick"];function O(p,m,d,o,v,u){const s=L("var-site-icon"),c=P("ripple");return r(),i(A,null,[a("div",T,[a("h1",j,[a("img",{class:"varlet-home__image",src:o.logo},null,8,G),a("span",null,_(o.title),1)]),a("h2",J,_(o.description[o.lang]),1)]),(r(!0),i(A,null,V(o.components,n=>q((r(),i("div",{class:"varlet-home__cell",key:n.text,onClick:B=>o.toComponent(n)},[a("span",null,_(n.text[o.lang]),1),E(s,{name:"chevron-right",size:"14"})],8,K)),[[c]])),128))],64)}var U=D(S,[["render",O],["__scopeId","data-v-4a45b74c"]]);export{U as default};
