(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[8999],{7972:(n,t,e)=>{"use strict";e.d(t,{Z:()=>m});var o=e(6156),r=e(7875),a=e(4825);function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){(0,o.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var p=e(492),c=e(8337),u=e(6975),s=e(3638);const f=(0,r.aZ)({name:"VarPopup",inheritAttrs:!1,props:p.N,setup:function(n){var t=(0,u.C)((function(){return n.show}),3).zIndex,e=(0,s.Mc)().disabled;return(0,c.Zx)(n,"show","lockScroll"),(0,r.YP)((function(){return n.show}),(function(t){var e=n.onOpen,o=n.onClose;t?null==e||e():null==o||o()})),(0,s.hO)((function(){var t;return null===(t=n.onRouteChange)||void 0===t?void 0:t.call(n)})),{zIndex:t,disabled:e,hidePopup:function(){var t,e=n.closeOnClickOverlay,o=n.onClickOverlay;null==o||o(),e&&(null===(t=n["onUpdate:show"])||void 0===t||t.call(n,!1))}}}});var v=e(6062),d=e.n(v),y=e(7170);d()(y.Z,{insert:"head",singleton:!1}),y.Z.locals,f.render=function(n,t,e,o,l,p){return(0,r.wg)(),(0,r.j4)(r.lR,{to:n.teleport,disabled:!n.teleport||n.disabled},[(0,r.Wm)(a.uT,{name:"var-fade",onAfterEnter:n.onOpened,onAfterLeave:n.onClosed},{default:(0,r.w5)((function(){return[(0,r.wy)((0,r.Wm)("div",{class:"var--box var-popup",style:{zIndex:n.zIndex-2}},[n.overlay?((0,r.wg)(),(0,r.j4)("div",{key:0,class:["var-popup__overlay",[n.overlayClass]],style:i({zIndex:n.zIndex-1},n.overlayStyle),onClick:t[1]||(t[1]=function(){return n.hidePopup&&n.hidePopup.apply(n,arguments)})},null,6)):(0,r.kq)("v-if",!0),(0,r.Wm)(a.uT,{name:n.transition?n.transition:"var-pop-".concat(n.position)},{default:(0,r.w5)((function(){return[n.show?((0,r.wg)(),(0,r.j4)("div",(0,r.dG)({key:0,class:["var-popup__content var-elevation--3",["var-popup--".concat(n.position)]],style:{zIndex:n.zIndex}},n.$attrs),[(0,r.WI)(n.$slots,"default")],16)):(0,r.kq)("v-if",!0)]})),_:3},8,["name"])],4),[[a.F8,n.show]])]})),_:1},8,["onAfterEnter","onAfterLeave"])],8,["to","disabled"])};const b=f;b.install=function(n){n.component(b.name,b)};const m=b},492:(n,t,e)=>{"use strict";e.d(t,{N:()=>o});var o={show:{type:Boolean,default:!1},position:{type:String,default:"center",validator:function(n){return["top","bottom","right","left","center"].includes(n)}},transition:{type:String},overlay:{type:Boolean,default:!0},overlayClass:{type:String},overlayStyle:{type:Object},lockScroll:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},teleport:{},onOpen:{type:Function},onOpened:{type:Function},onClose:{type:Function},onClosed:{type:Function},onClickOverlay:{type:Function},onRouteChange:{type:Function},"onUpdate:show":{type:Function}}},9774:(n,t,e)=>{"use strict";e.d(t,{Z:()=>a});var o=e(2609),r=e.n(o)()((function(n){return n[1]}));r.push([n.id,"\n.custom-overlay {\n  background: rgba(0, 0, 0, 0.3);\n}\n",""]);const a=r},7170:(n,t,e)=>{"use strict";e.d(t,{Z:()=>a});var o=e(2609),r=e.n(o)()((function(n){return n[1]}));r.push([n.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n:root {\n  --popup-overlay-background-color: rgba(0, 0, 0, 0.6);\n  --popup-content-background-color: #fff;\n}\n.var-fade-enter-from,\n.var-fade-leave-to {\n  opacity: 0;\n}\n.var-fade-enter-active,\n.var-fade-leave-active {\n  transition: opacity 0.3s;\n}\n.var-pop-center-enter-from,\n.var-pop-center-leave-to {\n  transform: scale(0.3);\n}\n.var-pop-center-enter-active,\n.var-pop-center-leave-active {\n  transition: all 0.3s;\n}\n.var-pop-bottom-enter-from,\n.var-pop-bottom-leave-to {\n  transform: translateY(100%);\n}\n.var-pop-bottom-enter-active,\n.var-pop-bottom-leave-active {\n  transition: all 0.3s;\n}\n.var-pop-top-enter-from,\n.var-pop-top-leave-to {\n  transform: translateY(-100%);\n}\n.var-pop-top-enter-active,\n.var-pop-top-leave-active {\n  transition: all 0.3s;\n}\n.var-pop-left-enter-from,\n.var-pop-left-leave-to {\n  transform: translateX(-100%);\n}\n.var-pop-left-enter-active,\n.var-pop-left-leave-active {\n  transition: all 0.3s;\n}\n.var-pop-right-enter-from,\n.var-pop-right-leave-to {\n  transform: translateX(100%);\n}\n.var-pop-right-enter-active,\n.var-pop-right-leave-active {\n  transition: all 0.3s;\n}\n.var-popup {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.var-popup__overlay {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: var(--popup-overlay-background-color);\n}\n.var-popup__content {\n  overflow: auto;\n  background-color: var(--popup-content-background-color);\n}\n.var-popup--center {\n  position: relative;\n}\n.var-popup--bottom {\n  min-width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n.var-popup--top {\n  min-width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.var-popup--left {\n  min-height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.var-popup--right {\n  min-height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n",""]);const a=r},8951:(n,t,e)=>{"use strict";e.d(t,{Z:()=>a});var o=e(2609),r=e.n(o)()((function(n){return n[1]}));r.push([n.id,".mt-10[data-v-f5999ffe] {\n  margin-top: 10px;\n}\n.block[data-v-f5999ffe] {\n  padding: 20px 24px;\n  width: 250px;\n  color: #555;\n}\n",""]);const a=r},6489:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>H});var o=e(7875),r=e(349),a=(0,o.HX)("data-v-f5999ffe");(0,o.dD)("data-v-f5999ffe");var l={class:"block"},i={class:"block"},p={class:"block"},c={class:"block"},u={class:"block"},s={class:"block"},f={class:"block"},v={class:"block"};(0,o.Cn)();var d=a((function(n,t,e,d,y,b){var m=(0,o.up)("app-type"),h=(0,o.up)("var-button"),k=(0,o.up)("var-popup");return(0,o.wg)(),(0,o.j4)(o.HY,null,[(0,o.Wm)(m,null,{default:a((function(){return[(0,o.Uk)((0,r.zw)(d.pack.popupPosition),1)]})),_:1}),(0,o.Wm)(h,{class:"mt-10",type:"primary",block:"",onClick:t[1]||(t[1]=function(t){return n.center=!0})},{default:a((function(){return[(0,o.Uk)((0,r.zw)(d.pack.centerPopup),1)]})),_:1}),(0,o.Wm)(h,{class:"mt-10",type:"primary",block:"",onClick:t[2]||(t[2]=function(t){return n.bottom=!0})},{default:a((function(){return[(0,o.Uk)((0,r.zw)(d.pack.belowPopup),1)]})),_:1}),(0,o.Wm)(h,{class:"mt-10",type:"primary",block:"",onClick:t[3]||(t[3]=function(t){return n.top=!0})},{default:a((function(){return[(0,o.Uk)((0,r.zw)(d.pack.abovePopup),1)]})),_:1}),(0,o.Wm)(h,{class:"mt-10",type:"primary",block:"",onClick:t[4]||(t[4]=function(t){return n.left=!0})},{default:a((function(){return[(0,o.Uk)((0,r.zw)(d.pack.leftPopup),1)]})),_:1}),(0,o.Wm)(h,{class:"mt-10",type:"primary",block:"",onClick:t[5]||(t[5]=function(t){return n.right=!0})},{default:a((function(){return[(0,o.Uk)((0,r.zw)(d.pack.rightPopup),1)]})),_:1}),(0,o.Wm)(k,{show:n.center,"onUpdate:show":t[6]||(t[6]=function(t){return n.center=t})},{default:a((function(){return[(0,o.Wm)("div",l,(0,r.zw)(d.pack.text),1)]})),_:1},8,["show"]),(0,o.Wm)(k,{position:"bottom",show:n.bottom,"onUpdate:show":t[7]||(t[7]=function(t){return n.bottom=t})},{default:a((function(){return[(0,o.Wm)("div",i,(0,r.zw)(d.pack.text),1)]})),_:1},8,["show"]),(0,o.Wm)(k,{position:"top",show:n.top,"onUpdate:show":t[8]||(t[8]=function(t){return n.top=t})},{default:a((function(){return[(0,o.Wm)("div",p,(0,r.zw)(d.pack.text),1)]})),_:1},8,["show"]),(0,o.Wm)(k,{position:"left",show:n.left,"onUpdate:show":t[9]||(t[9]=function(t){return n.left=t})},{default:a((function(){return[(0,o.Wm)("div",c,(0,r.zw)(d.pack.text),1)]})),_:1},8,["show"]),(0,o.Wm)(k,{position:"right",show:n.right,"onUpdate:show":t[10]||(t[10]=function(t){return n.right=t})},{default:a((function(){return[(0,o.Wm)("div",u,(0,r.zw)(d.pack.text),1)]})),_:1},8,["show"]),(0,o.Wm)(m,null,{default:a((function(){return[(0,o.Uk)((0,r.zw)(d.pack.overlayStyle),1)]})),_:1}),(0,o.Wm)(h,{class:"mt-10",type:"primary",block:"",onClick:t[11]||(t[11]=function(t){return n.overlayClass=!0})},{default:a((function(){return[(0,o.Uk)((0,r.zw)(d.pack.overlayClass),1)]})),_:1}),(0,o.Wm)(k,{"overlay-class":"custom-overlay",show:n.overlayClass,"onUpdate:show":t[12]||(t[12]=function(t){return n.overlayClass=t})},{default:a((function(){return[(0,o.Wm)("div",s,(0,r.zw)(d.pack.text),1)]})),_:1},8,["show"]),(0,o.Wm)(h,{class:"mt-10",type:"primary",block:"",onClick:t[13]||(t[13]=function(t){return n.overlayStyle=!0})},{default:a((function(){return[(0,o.Uk)((0,r.zw)(d.pack.overlayStyles),1)]})),_:1}),(0,o.Wm)(k,{"overlay-style":{backgroundColor:"rgba(0, 0, 0, 0.3)"},show:n.overlayStyle,"onUpdate:show":t[14]||(t[14]=function(t){return n.overlayStyle=t})},{default:a((function(){return[(0,o.Wm)("div",f,(0,r.zw)(d.pack.text),1)]})),_:1},8,["overlay-style","show"]),(0,o.Wm)(m,null,{default:a((function(){return[(0,o.Uk)((0,r.zw)(d.pack.event),1)]})),_:1}),(0,o.Wm)(h,{class:"mt-10",type:"primary",block:"",onClick:t[15]||(t[15]=function(t){return n.event=!0})},{default:a((function(){return[(0,o.Uk)((0,r.zw)(d.pack.event),1)]})),_:1}),(0,o.Wm)(k,{show:n.event,"onUpdate:show":t[16]||(t[16]=function(t){return n.event=t}),onOpen:t[17]||(t[17]=function(){return d.Snackbar.info("open")}),onOpened:t[18]||(t[18]=function(){return d.Snackbar.success("opened")}),onClose:t[19]||(t[19]=function(){return d.Snackbar.warning("close")}),onClosed:t[20]||(t[20]=function(){return d.Snackbar.error("closed")})},{default:a((function(){return[(0,o.Wm)("div",v,(0,r.zw)(d.pack.text),1)]})),_:1},8,["show"])],64)})),y=e(6156),b=e(7972),m=e(5602),h=e(7984),k=e(9433),w=e(3638),g=e(641),O=e(7532),x=e(6208),P=e(926),z=(0,P.bU)(),C=z.add,S=z.use,_=z.pack,j=(z.packs,z.merge,function(n){(0,P.D$)(n),S(n)});(0,P.IH)("zh-CN",O.Z),(0,P.IH)("en-US",x.Z),C("zh-CN",{popupPosition:"弹出位置",centerPopup:"居中弹出",belowPopup:"下方弹出",abovePopup:"上方弹出",leftPopup:"左侧弹出",rightPopup:"右侧弹出",overlayStyle:"遮罩层样式",overlayClass:"遮罩层class",overlayStyles:"遮罩层style",event:"注册事件",text:"素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆, 冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。"}),C("en-US",{popupPosition:"Popup Position",centerPopup:"Center Popup",belowPopup:"Below Popup",abovePopup:"Above Popup",leftPopup:"Left Popup",rightPopup:"Right Popup",overlayStyle:"Overlay Style",overlayClass:"Overlay Class",overlayStyles:"Overlay Styles",event:"Event",text:"As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains on the carpet."});var W,Z=e(629);function U(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function I(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?U(Object(e),!0).forEach((function(t){(0,y.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):U(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}const A={name:"PopupExample",components:(W={},(0,y.Z)(W,b.Z.name,b.Z),(0,y.Z)(W,m.Z.name,m.Z),(0,y.Z)(W,"AppType",k.Z),W),setup:function(){var n=(0,g.qj)({center:!1,top:!1,bottom:!1,left:!1,right:!1,overlayClass:!1,overlayStyle:!1,event:!1});(0,w.jS)(j);var t=Z.Z.touchmoveForbid;return(0,w.Id)((function(n){"pc"===n&&(Z.Z.touchmoveForbid=!1)})),(0,o.Ah)((function(){Z.Z.touchmoveForbid=t})),I(I({pack:_},(0,g.BK)(n)),{},{Snackbar:h.ZP})}};var F=e(6062),D=e.n(F),E=e(9774);D()(E.Z,{insert:"head",singleton:!1}),E.Z.locals;var B=e(8951);D()(B.Z,{insert:"head",singleton:!1}),B.Z.locals,A.render=d,A.__scopeId="data-v-f5999ffe";const H=A},4699:(n,t,e)=>{"use strict";e.d(t,{Z:()=>r});var o=e(2961);function r(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],o=!0,r=!1,a=void 0;try{for(var l,i=n[Symbol.iterator]();!(o=(l=i.next()).done)&&(e.push(l.value),!t||e.length!==t);o=!0);}catch(n){r=!0,a=n}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return e}}(n,t)||(0,o.Z)(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);