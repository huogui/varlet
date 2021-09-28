import{_ as A,c as r,r as H,g as O,M as R,s as G,i as F,a as e,m as W,P as J,C as K,R as Q,I as X}from"./IconSfc.b6073932.js";import{o as c,c as u,a as N,r as l,g as s,u as Y,b as Z,d as T,e as U,f as I,t as L,h as C,w as P,i as f,v as y,n as ee,F as k,j as w,k as M,l as te,m as S,T as oe,p as $,q as ne,s as _e,x as ae,y as re,z as ie,A as pe,B as se,C as ce}from"./vendor.bac705d4.js";const me={name:"AppMobile",props:{componentName:{type:String},language:{type:String},replace:{type:String}}},he={class:"varlet-site-mobile var-elevation--3"},de={class:"varlet-site-mobile-content"},ue=["src"];function le(o,_,n,t,m,i){return c(),u("div",he,[N("div",de,[N("iframe",{src:`./mobile.html#/${n.componentName}?language=${n.language}&platform=pc&replace=${n.replace}`},null,8,ue)])])}var Ee=A(me,[["render",le],["__scopeId","data-v-64a53243"]]);const ve={name:"AppHeader",props:{language:{type:String}},setup(){const o=l(s(r,"title")),_=l(s(r,"logo")),n=l(s(r,"pc.header.i18n")),t=l(s(r,"pc.header.github")),m=l(!1),i=Y(),p=Z(()=>H(n.value));return{logo:_,title:o,languages:n,nonEmptyLanguages:p,github:t,isOpenMenu:m,handleLanguageChange:a=>{const{menuName:d}=O();i.replace(`/${a}/${d}`),m.value=!1}}}},Ce={class:"varlet-site-header"},Ne={class:"varlet-site-header__lead"},Te=["src"],be={key:1,class:"varlet-site-header__title"},ze={class:"varlet-site-header__tail"},Ae=["href"];function Ie(o,_,n,t,m,i){const p=T("var-icon"),h=T("var-cell"),a=U("ripple");return c(),u("div",Ce,[N("div",Ne,[t.logo?(c(),u("img",{key:0,class:"varlet-site-header__logo",src:t.logo,alt:"logo"},null,8,Te)):I("v-if",!0),t.title?(c(),u("div",be,L(t.title),1)):I("v-if",!0)]),N("div",ze,[t.languages?(c(),u("div",{key:0,class:"varlet-site-header__language",onMouseenter:_[0]||(_[0]=d=>t.isOpenMenu=!0),onMouseleave:_[1]||(_[1]=d=>t.isOpenMenu=!1)},[C(p,{name:"translate",size:"26px",color:"#666"}),C(p,{name:"chevron-down",color:"#666"}),C(oe,{name:"fade"},{default:P(()=>[f(N("div",{class:"varlet-site-header__language-list var-elevation--5",style:ee({pointerEvents:t.isOpenMenu?"auto":"none"})},[(c(!0),u(k,null,w(t.nonEmptyLanguages,(d,b)=>f((c(),M(h,{key:b,class:S({"varlet-site-header__language-list--active":n.language===b}),onClick:V=>t.handleLanguageChange(b)},{default:P(()=>[te(L(d),1)]),_:2},1032,["class","onClick"])),[[a]])),128))],4),[[y,t.isOpenMenu]])]),_:1})],32)):I("v-if",!0),t.github?(c(),u("a",{key:1,class:"varlet-site-header__link",target:"_blank",href:t.github},[C(p,{name:"github",color:"#666",size:28})],8,Ae)):I("v-if",!0)])])}var Le=A(ve,[["render",Ie],["__scopeId","data-v-15d54e16"]]);const fe={name:"AppSidebar",props:{menu:{type:Array},menuName:{type:String},language:{type:String}},emits:["change"],setup(o,{emit:_}){const n=$(R),t=l(s(r,"themes"));return{menuTypes:n,themes:t,changeRoute:i=>{i.type===R.TITLE||o.menuName===i.doc||_("change",i)}}}},ge={class:"varlet-site-sidebar var-elevation--3"},Oe={key:0,class:"varlet-site-sidebar__item--title"},Re={key:1,class:"varlet-site-sidebar__item--link"};function Pe(o,_,n,t,m,i){const p=T("var-cell"),h=U("ripple");return c(),u("div",ge,[(c(!0),u(k,null,w(n.menu,(a,d)=>f((c(),M(p,{class:S(["varlet-site-sidebar__item",{"varlet-site-sidebar__item--active":a.doc===n.menuName,"varlet-site-sidebar__link":a.type!==t.menuTypes.TITLE,"varlet-site-sidebar__title":a.type===t.menuTypes.TITLE}]),key:d,onClick:b=>t.changeRoute(a)},{default:P(()=>[a.type===t.menuTypes.TITLE?(c(),u("span",Oe,L(a.text[n.language]),1)):(c(),u("span",Re,L(a.text[n.language]),1))]),_:2},1032,["class","onClick"])),[[h,{touchmoveForbid:!1,disabled:a.type===t.menuTypes.TITLE,color:t.themes["color-side-bar"]}]])),128))])}var Se=A(fe,[["render",Pe],["__scopeId","data-v-251bcda4"]]);const De=ne({components:{AppMobile:Ee,AppHeader:Le,AppSidebar:Se},setup(){const o=s(r,"defaultLanguage"),_=l(s(r,"pc.menu",[])),n=l(s(r,"useMobile")),t=s(r,"mobile.redirect"),m=l(""),i=l(null),p=l(""),h=l(null),a=_e(),d=E=>{const v=_.value.find(g=>g.doc===E);return(v==null?void 0:v.type)===R.COMPONENT?E:t.slice(1)},b=()=>{const{language:E,menuName:v}=O();if(F()&&n.value){window.location.href=`./mobile.html#/${v}?language=${E||o}&platform=mobile`;return}ie(()=>{const g=document.querySelector(".varlet-site-sidebar").getElementsByClassName("var-cell"),j=_.value.findIndex(q=>q.doc===v);j!==-1&&g[j].scrollIntoView({block:"center",inline:"start"})})},V=E=>{h.value.scrollTop=0,i.value=d(E.doc),p.value=E.doc};return ae(()=>b()),re(()=>a.path,()=>{const{language:E,menuName:v}=O();!E||!v||(i.value=d(v),p.value=v,m.value=E,document.title=s(r,"pc.title")[E])},{immediate:!0}),G(r),{menu:_,language:m,componentName:i,menuName:p,doc:h,useMobile:n,handleSidebarChange:V}}}),Ve={class:"varlet-site"},je={class:"varlet-site-content"};function Ue(o,_,n,t,m,i){const p=T("app-header"),h=T("app-sidebar"),a=T("router-view"),d=T("app-mobile");return c(),u("div",Ve,[C(p,{language:o.language},null,8,["language"]),N("div",je,[C(h,{language:o.language,menu:o.menu,"menu-name":o.menuName,onChange:o.handleSidebarChange},null,8,["language","menu","menu-name","onChange"]),N("div",{class:S(["varlet-site-doc-container",[!o.useMobile&&"varlet-site-doc-container--pc-only"]]),ref:"doc"},[C(a)],2),f(C(d,{"component-name":o.componentName,language:o.language,replace:o.menuName},null,8,["component-name","language","replace"]),[[y,o.useMobile]])])])}var ye=A(De,[["render",Ue]]),x=[{path:"/en-US/action-sheet",component:()=>e(()=>import("./en-US.ee741b69.js"),["assets/en-US.ee741b69.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/action-sheet",component:()=>e(()=>import("./zh-CN.4bfb0ed6.js"),["assets/zh-CN.4bfb0ed6.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/app-bar",component:()=>e(()=>import("./en-US.5efc1c90.js"),["assets/en-US.5efc1c90.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/app-bar",component:()=>e(()=>import("./zh-CN.af5a3707.js"),["assets/zh-CN.af5a3707.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/back-top",component:()=>e(()=>import("./en-US.13291293.js"),["assets/en-US.13291293.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/back-top",component:()=>e(()=>import("./zh-CN.31d19bc1.js"),["assets/zh-CN.31d19bc1.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/badge",component:()=>e(()=>import("./en-US.0c17a0ef.js"),["assets/en-US.0c17a0ef.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/badge",component:()=>e(()=>import("./zh-CN.e25ed9a1.js"),["assets/zh-CN.e25ed9a1.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/button",component:()=>e(()=>import("./en-US.f7ab8881.js"),["assets/en-US.f7ab8881.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/button",component:()=>e(()=>import("./zh-CN.48f708b8.js"),["assets/zh-CN.48f708b8.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/card",component:()=>e(()=>import("./en-US.9cba6602.js"),["assets/en-US.9cba6602.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/card",component:()=>e(()=>import("./zh-CN.308431bf.js"),["assets/zh-CN.308431bf.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/cell",component:()=>e(()=>import("./en-US.1476ac8e.js"),["assets/en-US.1476ac8e.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/cell",component:()=>e(()=>import("./zh-CN.4ab98ee3.js"),["assets/zh-CN.4ab98ee3.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/checkbox",component:()=>e(()=>import("./zh-CN.f8f2957b.js"),["assets/zh-CN.f8f2957b.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/checkbox-group",component:()=>e(()=>import("./en-US.ab72492c.js"),["assets/en-US.ab72492c.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/checkbox-group",component:()=>e(()=>import("./zh-CN.115254ee.js"),["assets/zh-CN.115254ee.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/chip",component:()=>e(()=>import("./en-US.fa38fae1.js"),["assets/en-US.fa38fae1.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/chip",component:()=>e(()=>import("./zh-CN.f4ae2cf2.js"),["assets/zh-CN.f4ae2cf2.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/col",component:()=>e(()=>import("./zh-CN.5f970e69.js"),["assets/zh-CN.5f970e69.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/collapse",component:()=>e(()=>import("./en-US.13880083.js"),["assets/en-US.13880083.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/collapse",component:()=>e(()=>import("./zh-CN.3115f25f.js"),["assets/zh-CN.3115f25f.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/collapse-item",component:()=>e(()=>import("./zh-CN.1bcff78c.js"),["assets/zh-CN.1bcff78c.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/countdown",component:()=>e(()=>import("./en-US.c2b1a7e1.js"),["assets/en-US.c2b1a7e1.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/countdown",component:()=>e(()=>import("./zh-CN.4b5c58c8.js"),["assets/zh-CN.4b5c58c8.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/counter",component:()=>e(()=>import("./en-US.c8610f36.js"),["assets/en-US.c8610f36.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/counter",component:()=>e(()=>import("./zh-CN.4529fef9.js"),["assets/zh-CN.4529fef9.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/date-picker",component:()=>e(()=>import("./en-US.b6f00f5c.js"),["assets/en-US.b6f00f5c.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/date-picker",component:()=>e(()=>import("./zh-CN.86ab111c.js"),["assets/zh-CN.86ab111c.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/dialog",component:()=>e(()=>import("./en-US.57a38c04.js"),["assets/en-US.57a38c04.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/dialog",component:()=>e(()=>import("./zh-CN.5ba52c3d.js"),["assets/zh-CN.5ba52c3d.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/divider",component:()=>e(()=>import("./en-US.77322f4b.js"),["assets/en-US.77322f4b.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/divider",component:()=>e(()=>import("./zh-CN.2ec4769e.js"),["assets/zh-CN.2ec4769e.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/form",component:()=>e(()=>import("./en-US.c64e3bae.js"),["assets/en-US.c64e3bae.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/form",component:()=>e(()=>import("./zh-CN.5c05585e.js"),["assets/zh-CN.5c05585e.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/form-details",component:()=>e(()=>import("./en-US.e61c613b.js"),["assets/en-US.e61c613b.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/form-details",component:()=>e(()=>import("./zh-CN.8936c7c5.js"),["assets/zh-CN.8936c7c5.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/icon",component:()=>e(()=>import("./en-US.5070c123.js"),["assets/en-US.5070c123.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/icon",component:()=>e(()=>import("./zh-CN.9ac11ae8.js"),["assets/zh-CN.9ac11ae8.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/image",component:()=>e(()=>import("./en-US.6938b26e.js"),["assets/en-US.6938b26e.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/image",component:()=>e(()=>import("./zh-CN.4c220bde.js"),["assets/zh-CN.4c220bde.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/image-preview",component:()=>e(()=>import("./en-US.66a62bda.js"),["assets/en-US.66a62bda.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/image-preview",component:()=>e(()=>import("./zh-CN.07056a71.js"),["assets/zh-CN.07056a71.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/index-anchor",component:()=>e(()=>import("./zh-CN.e26ca871.js"),["assets/zh-CN.e26ca871.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/index-bar",component:()=>e(()=>import("./en-US.27ff35fb.js"),["assets/en-US.27ff35fb.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/index-bar",component:()=>e(()=>import("./zh-CN.049ac649.js"),["assets/zh-CN.049ac649.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/input",component:()=>e(()=>import("./en-US.ed102777.js"),["assets/en-US.ed102777.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/input",component:()=>e(()=>import("./zh-CN.a3828eab.js"),["assets/zh-CN.a3828eab.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/lazy",component:()=>e(()=>import("./en-US.485e5beb.js"),["assets/en-US.485e5beb.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/lazy",component:()=>e(()=>import("./zh-CN.c453411d.js"),["assets/zh-CN.c453411d.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/list",component:()=>e(()=>import("./en-US.eede1256.js"),["assets/en-US.eede1256.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/list",component:()=>e(()=>import("./zh-CN.d46b26ba.js"),["assets/zh-CN.d46b26ba.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/loading",component:()=>e(()=>import("./en-US.35f99706.js"),["assets/en-US.35f99706.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/loading",component:()=>e(()=>import("./zh-CN.4fd917dc.js"),["assets/zh-CN.4fd917dc.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/locale",component:()=>e(()=>import("./en-US.bceddb79.js"),["assets/en-US.bceddb79.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/locale",component:()=>e(()=>import("./zh-CN.28319e11.js"),["assets/zh-CN.28319e11.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/menu",component:()=>e(()=>import("./en-US.452d97fb.js"),["assets/en-US.452d97fb.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/menu",component:()=>e(()=>import("./zh-CN.b7fb3f1a.js"),["assets/zh-CN.b7fb3f1a.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/option",component:()=>e(()=>import("./zh-CN.ff7ce12f.js"),["assets/zh-CN.ff7ce12f.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/pagination",component:()=>e(()=>import("./en-US.a43f4c5f.js"),["assets/en-US.a43f4c5f.js","assets/Disabled.b0d23f27.js","assets/Disabled.e1b20b97.css","assets/index.9d10c9b7.js","assets/index.e805fb68.css","assets/index.53dcbc58.js","assets/index.e19f596b.css","assets/vendor.bac705d4.js","assets/elements.0f1b5e0a.js","assets/shared.5973ad73.js","assets/zIndex.148a12e4.js","assets/index.389a472f.js","assets/index.2bc3e789.css","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/index.049652a9.js","assets/index.2e8ee155.css","assets/index.1082cf64.js","assets/index.7f4826e2.css","assets/index.bf8c0244.js","assets/index.b105c91c.css","assets/provide.cdb45fa0.js","assets/provide.0d9a5195.css","assets/components.7d95671e.js","assets/en-US.41b73ea2.js"])},{path:"/zh-CN/pagination",component:()=>e(()=>import("./zh-CN.383b290e.js"),["assets/zh-CN.383b290e.js","assets/Disabled.b0d23f27.js","assets/Disabled.e1b20b97.css","assets/index.9d10c9b7.js","assets/index.e805fb68.css","assets/index.53dcbc58.js","assets/index.e19f596b.css","assets/vendor.bac705d4.js","assets/elements.0f1b5e0a.js","assets/shared.5973ad73.js","assets/zIndex.148a12e4.js","assets/index.389a472f.js","assets/index.2bc3e789.css","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/index.049652a9.js","assets/index.2e8ee155.css","assets/index.1082cf64.js","assets/index.7f4826e2.css","assets/index.bf8c0244.js","assets/index.b105c91c.css","assets/provide.cdb45fa0.js","assets/provide.0d9a5195.css","assets/components.7d95671e.js","assets/en-US.41b73ea2.js"])},{path:"/en-US/picker",component:()=>e(()=>import("./en-US.362fe859.js"),["assets/en-US.362fe859.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/picker",component:()=>e(()=>import("./zh-CN.37f50624.js"),["assets/zh-CN.37f50624.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/popup",component:()=>e(()=>import("./en-US.36cf5c77.js"),["assets/en-US.36cf5c77.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/popup",component:()=>e(()=>import("./zh-CN.e90a1277.js"),["assets/zh-CN.e90a1277.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/progress",component:()=>e(()=>import("./en-US.bc413e88.js"),["assets/en-US.bc413e88.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/progress",component:()=>e(()=>import("./zh-CN.ce8119e9.js"),["assets/zh-CN.ce8119e9.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/pull-refresh",component:()=>e(()=>import("./en-US.35005ead.js"),["assets/en-US.35005ead.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/pull-refresh",component:()=>e(()=>import("./zh-CN.bdf413bf.js"),["assets/zh-CN.bdf413bf.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/radio",component:()=>e(()=>import("./zh-CN.b5346ef7.js"),["assets/zh-CN.b5346ef7.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/radio-group",component:()=>e(()=>import("./en-US.68485aca.js"),["assets/en-US.68485aca.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/radio-group",component:()=>e(()=>import("./zh-CN.ca638633.js"),["assets/zh-CN.ca638633.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/rate",component:()=>e(()=>import("./en-US.7140a9ab.js"),["assets/en-US.7140a9ab.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/rate",component:()=>e(()=>import("./zh-CN.538f9915.js"),["assets/zh-CN.538f9915.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/ripple",component:()=>e(()=>import("./en-US.74a5bca4.js"),["assets/en-US.74a5bca4.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/ripple",component:()=>e(()=>import("./zh-CN.131b0451.js"),["assets/zh-CN.131b0451.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/row",component:()=>e(()=>import("./en-US.f67c5d3c.js"),["assets/en-US.f67c5d3c.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/row",component:()=>e(()=>import("./zh-CN.ee58b949.js"),["assets/zh-CN.ee58b949.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/select",component:()=>e(()=>import("./en-US.0bfe0d92.js"),["assets/en-US.0bfe0d92.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/select",component:()=>e(()=>import("./zh-CN.b8e00f35.js"),["assets/zh-CN.b8e00f35.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/skeleton",component:()=>e(()=>import("./en-US.341fefe1.js"),["assets/en-US.341fefe1.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/skeleton",component:()=>e(()=>import("./zh-CN.238b49a5.js"),["assets/zh-CN.238b49a5.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/slider",component:()=>e(()=>import("./en-US.7a2c3a5b.js"),["assets/en-US.7a2c3a5b.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/slider",component:()=>e(()=>import("./zh-CN.dfef64b7.js"),["assets/zh-CN.dfef64b7.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/snackbar",component:()=>e(()=>import("./en-US.7e7c9ddb.js"),["assets/en-US.7e7c9ddb.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/snackbar",component:()=>e(()=>import("./zh-CN.27b2abbf.js"),["assets/zh-CN.27b2abbf.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/step",component:()=>e(()=>import("./zh-CN.bb20483c.js"),["assets/zh-CN.bb20483c.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/steps",component:()=>e(()=>import("./en-US.d2782339.js"),["assets/en-US.d2782339.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/steps",component:()=>e(()=>import("./zh-CN.9a6d2a57.js"),["assets/zh-CN.9a6d2a57.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/sticky",component:()=>e(()=>import("./en-US.112cae3b.js"),["assets/en-US.112cae3b.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/sticky",component:()=>e(()=>import("./zh-CN.843ae38a.js"),["assets/zh-CN.843ae38a.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/style-provider",component:()=>e(()=>import("./en-US.4a415896.js"),["assets/en-US.4a415896.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/style-provider",component:()=>e(()=>import("./zh-CN.ebfe345b.js"),["assets/zh-CN.ebfe345b.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/styles",component:()=>e(()=>import("./en-US.80ea7865.js"),["assets/en-US.80ea7865.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/styles",component:()=>e(()=>import("./zh-CN.c5e243bf.js"),["assets/zh-CN.c5e243bf.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/swipe",component:()=>e(()=>import("./en-US.36ca5162.js"),["assets/en-US.36ca5162.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/swipe",component:()=>e(()=>import("./zh-CN.17f1421e.js"),["assets/zh-CN.17f1421e.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/swipe-item",component:()=>e(()=>import("./zh-CN.bdf0a99b.js"),["assets/zh-CN.bdf0a99b.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/switch",component:()=>e(()=>import("./en-US.744c7cdf.js"),["assets/en-US.744c7cdf.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/switch",component:()=>e(()=>import("./zh-CN.496705a0.js"),["assets/zh-CN.496705a0.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/tab",component:()=>e(()=>import("./zh-CN.fb499782.js"),["assets/zh-CN.fb499782.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/tab-item",component:()=>e(()=>import("./zh-CN.1cd785e8.js"),["assets/zh-CN.1cd785e8.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/table",component:()=>e(()=>import("./en-US.e02138f2.js"),["assets/en-US.e02138f2.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/table",component:()=>e(()=>import("./zh-CN.f6b97b6e.js"),["assets/zh-CN.f6b97b6e.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/tabs",component:()=>e(()=>import("./en-US.0a6d8093.js"),["assets/en-US.0a6d8093.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/tabs",component:()=>e(()=>import("./zh-CN.2d69ec63.js"),["assets/zh-CN.2d69ec63.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/tabs-items",component:()=>e(()=>import("./zh-CN.9deb4018.js"),["assets/zh-CN.9deb4018.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/time-picker",component:()=>e(()=>import("./en-US.d18f7ef5.js"),["assets/en-US.d18f7ef5.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/time-picker",component:()=>e(()=>import("./zh-CN.21682430.js"),["assets/zh-CN.21682430.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/uploader",component:()=>e(()=>import("./en-US.9ddb749e.js"),["assets/en-US.9ddb749e.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/uploader",component:()=>e(()=>import("./zh-CN.6af8167b.js"),["assets/zh-CN.6af8167b.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/browserAdaptation",component:()=>e(()=>import("./browserAdaptation.en-US.7866bf40.js"),["assets/browserAdaptation.en-US.7866bf40.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/browserAdaptation",component:()=>e(()=>import("./browserAdaptation.zh-CN.74e0c762.js"),["assets/browserAdaptation.zh-CN.74e0c762.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/cli",component:()=>e(()=>import("./cli.en-US.17d15c8c.js"),["assets/cli.en-US.17d15c8c.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/cli",component:()=>e(()=>import("./cli.zh-CN.7886657c.js"),["assets/cli.zh-CN.7886657c.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/customTheme",component:()=>e(()=>import("./customTheme.en-US.9f15d3b4.js"),["assets/customTheme.en-US.9f15d3b4.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/customTheme",component:()=>e(()=>import("./customTheme.zh-CN.8203c724.js"),["assets/customTheme.zh-CN.8203c724.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/home",component:()=>e(()=>import("./home.en-US.0d944953.js"),["assets/home.en-US.0d944953.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/home",component:()=>e(()=>import("./home.zh-CN.d975375c.js"),["assets/home.zh-CN.d975375c.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/ide",component:()=>e(()=>import("./ide.en-US.4c5fff03.js"),["assets/ide.en-US.4c5fff03.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/ide",component:()=>e(()=>import("./ide.zh-CN.bfe8733f.js"),["assets/ide.zh-CN.bfe8733f.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/importOnDemand",component:()=>e(()=>import("./importOnDemand.en-US.2dede4ae.js"),["assets/importOnDemand.en-US.2dede4ae.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/importOnDemand",component:()=>e(()=>import("./importOnDemand.zh-CN.24734bcc.js"),["assets/importOnDemand.zh-CN.24734bcc.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/openSourceGuide",component:()=>e(()=>import("./openSourceGuide.en-US.ea39ec18.js"),["assets/openSourceGuide.en-US.ea39ec18.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/openSourceGuide",component:()=>e(()=>import("./openSourceGuide.zh-CN.231bfcbc.js"),["assets/openSourceGuide.zh-CN.231bfcbc.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/en-US/quickstart",component:()=>e(()=>import("./quickstart.en-US.c16c2dd7.js"),["assets/quickstart.en-US.c16c2dd7.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])},{path:"/zh-CN/quickstart",component:()=>e(()=>import("./quickstart.zh-CN.e74e2871.js"),["assets/quickstart.zh-CN.e74e2871.js","assets/IconSfc.b6073932.js","assets/IconSfc.f6c0a94d.css","assets/vendor.bac705d4.js"])}];function ke(){let o;const _=s(r,"themes.color-progress-track"),n=s(r,"themes.color-progress"),t=$({style:{position:"fixed",width:"100%",left:0,top:0,zIndex:10086},trackColor:_,color:n,lineWidth:3,value:0}),m=()=>{o=window.setTimeout(()=>{if(t.value>=95)return;let h=Math.random();t.value<70&&(h=Math.round(5*Math.random())),t.value+=h,m()},200)},i=()=>{t.value=0,setTimeout(()=>t.color=n,200),m()},p=()=>{t.value=100,setTimeout(()=>t.color=_,300),window.clearTimeout(o)};return W(J,t),{start:i,end:p}}const we=s(r,"defaultLanguage"),B=s(r,"pc.redirect"),Me=s(r,"mobile.redirect");B&&x.push({path:"/:pathMatch(.*)*",redirect:`/${we}${B}`});const z=pe({history:se(),routes:x});let D=!0;const{start:$e,end:xe}=ke();z.beforeEach((o,_)=>{if(o.path===_.path)return!1;D=!1,setTimeout(()=>!D&&$e(),200),window._hmt&&o.path&&window._hmt.push(["_trackPageview",`/#${o.fullPath}`])});z.afterEach(()=>{D=!0,xe()});Object.defineProperty(window,"onMobileRouteChange",{value:(o,_,n)=>{if(o===Me){z.replace(`/${_}/${n}`);return}z.replace(`/${_}${o}`)}});ce(ye).use(z).use(K).use(Q).use(X).mount("#app");
