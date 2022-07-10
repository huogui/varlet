import{U as p}from"./index.77021f4e.js";import{B as g}from"./index.579068bc.js";import{S as A}from"./index.39902596.js";import{I as y}from"./index.388f0ba6.js";import{D as B}from"./index.e5d9ff1e.js";import{S as v}from"./index.1f1f8977.js";import{A as d}from"./AppType.12f592ea.js";import{d as C}from"./index.5d153c96.js";import{a as R,b as z}from"./utils.0c1f0941.js";import{u as w,a as j,_ as S,b as D,c as L}from"./en-US.ee95b3a9.js";import{_ as M,r as T,f,h as c,t as l,ag as e,P as r,F as V,ai as N,aj as k,M as o,N as i,ad as I,l as P}from"./elevation.b6664af0.js";import"./provide.24680078.js";import"./components.1dfa4f07.js";import"./index.7c703776.js";import"./lock.220e1e94.js";import"./index.907bdd7e.js";import"./zIndex.b5e81158.js";/* empty css               */import"./index.2db234e1.js";import"./index.368aec1b.js";import"./provide.c5def022.js";import"./elements.e9a3cb11.js";import"./index.7cfb5b26.js";import"./index.6f8d2b65.js";import"./shared.f68fafdb.js";import"./index.3a3df279.js";var O={basicUsage:"\u57FA\u672C\u4F7F\u7528",preview:"\u6587\u4EF6\u9884\u89C8",state:"\u4E0A\u4F20\u72B6\u6001",maxlength:"\u6587\u4EF6\u6570\u91CF\u9650\u5236",maxsize:"\u6587\u4EF6\u5927\u5C0F\u9650\u5236",beforeRead:"\u4E0A\u4F20\u9884\u5904\u7406",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",validate:"\u5B57\u6BB5\u6821\u9A8C",validateMessage:"\u5B58\u5728\u4E0A\u4F20\u5931\u8D25\u7684\u6587\u4EF6",style:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",upload:"\u4E0A\u4F20",beforeRemove:"\u5220\u9664\u524D\u5904\u7406",removeTitle:"\u662F\u5426\u5220\u9664?",removeMessage:"\u5220\u9664\u540E\u65E0\u6CD5\u64A4\u56DE",fileSizeExceedsLimit:"\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236",fileLessThen:"\u6587\u4EF6\u5C0F\u4E8E1M\uFF0C\u4E0A\u4F20\u6210\u529F",fileLargeThen:"\u6587\u4EF6\u5927\u4E8E1M\uFF0C\u4E0D\u80FD\u4E0A\u4F20",customRender:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u6587\u4EF6\u5217\u8868"},$={basicUsage:"Basic Usage",preview:"File Preview",state:"Upload State",maxlength:"File Maxlength",maxsize:"File Size Limit",beforeRead:"Upload Preprocessing",disabled:"Disabled",readonly:"Readonly",validate:"Validate",validateMessage:"There is a file that failed to upload",style:"Customize upload styles",upload:"Upload",beforeRemove:"Remove Preprocessing",removeTitle:"Delete or not?",removeMessage:"Cannot be withdrawn after deletion",fileSizeExceedsLimit:"file size exceeds limit",fileLessThen:"the file is less than 1M, the upload is successful",fileLargeThen:"the file is larger than 1M and cannot be uploaded",customRender:"Custom render file list"};const{add:F,use:q,pack:s,packs:Ue,merge:be}=w(),G=m=>{L(m),q(m)};j("zh-CN",S);j("en-US",D);F("zh-CN",O);F("en-US",$);const H=m=>(N("data-v-5ed71666"),m=m(),k(),m),J=["src"],K=H(()=>P("div",{class:"space"},null,-1)),Q={setup(m){const t=T({files:[],files2:[{url:"https://varlet-varletjs.vercel.app/cat.jpg",cover:"https://varlet-varletjs.vercel.app/cat.jpg"},{url:"https://www.runoob.com/try/demo_source/mov_bbb.mp4",cover:"https://varlet-varletjs.vercel.app/cover.jpg"}],files3:[{url:"https://varlet-varletjs.vercel.app/cat.jpg",cover:"https://varlet-varletjs.vercel.app/cat.jpg",state:"loading"},{url:"https://varlet-varletjs.vercel.app/cat.jpg",cover:"https://varlet-varletjs.vercel.app/cat.jpg",state:"success"},{url:"https://varlet-varletjs.vercel.app/cat.jpg",cover:"https://varlet-varletjs.vercel.app/cat.jpg",state:"error"}],files4:[],files5:[],files6:[],files7:[],files8:[],files9:[],files10:[{url:"https://varlet-varletjs.vercel.app/cat.jpg",cover:"https://varlet-varletjs.vercel.app/cat.jpg",state:"error"}],files11:[{url:"https://varlet-varletjs.vercel.app/cat.jpg",cover:"https://varlet-varletjs.vercel.app/cat.jpg"}],files12:[{url:"https://varlet-varletjs.vercel.app/cat.jpg",cover:"https://varlet-varletjs.vercel.app/cat.jpg",state:"loading"},{url:"https://varlet-varletjs.vercel.app/cat.jpg",cover:"https://varlet-varletjs.vercel.app/cat.jpg",state:"success"},{url:"https://varlet-varletjs.vercel.app/cat.jpg",cover:"https://varlet-varletjs.vercel.app/cat.jpg",state:"error"}]}),h=n=>console.log(n),E=n=>{n.state="loading",setTimeout(()=>{n.state="success"},1e3)},U=()=>{v.warning(s.value.fileSizeExceedsLimit)},b=n=>n.file.size<=1*1024*1024?(v.success(s.value.fileLessThen),!0):(v.warning(s.value.fileLargeThen),!1),_=async()=>await B({title:s.value.removeTitle,message:s.value.removeMessage})==="confirm";return R(G),z(C),(n,u)=>(f(),c(V,null,[l(e(d),null,{default:r(()=>[o(i(e(s).basicUsage),1)]),_:1}),l(e(p),{modelValue:e(t).files,"onUpdate:modelValue":u[0]||(u[0]=a=>e(t).files=a),onAfterRead:h},null,8,["modelValue"]),l(e(d),null,{default:r(()=>[o(i(e(s).preview),1)]),_:1}),l(e(p),{modelValue:e(t).files2,"onUpdate:modelValue":u[1]||(u[1]=a=>e(t).files2=a)},null,8,["modelValue"]),l(e(d),null,{default:r(()=>[o(i(e(s).state),1)]),_:1}),l(e(p),{modelValue:e(t).files3,"onUpdate:modelValue":u[2]||(u[2]=a=>e(t).files3=a),onAfterRead:E},null,8,["modelValue"]),l(e(d),null,{default:r(()=>[o(i(e(s).maxlength),1)]),_:1}),l(e(p),{modelValue:e(t).files4,"onUpdate:modelValue":u[3]||(u[3]=a=>e(t).files4=a),maxlength:1},null,8,["modelValue"]),l(e(d),null,{default:r(()=>[o(i(e(s).maxsize),1)]),_:1}),l(e(p),{modelValue:e(t).files5,"onUpdate:modelValue":u[4]||(u[4]=a=>e(t).files5=a),maxsize:1024,onOversize:U},null,8,["modelValue"]),l(e(d),null,{default:r(()=>[o(i(e(s).beforeRead),1)]),_:1}),l(e(p),{modelValue:e(t).files7,"onUpdate:modelValue":u[5]||(u[5]=a=>e(t).files7=a),onBeforeRead:b},null,8,["modelValue"]),l(e(d),null,{default:r(()=>[o(i(e(s).disabled),1)]),_:1}),l(e(p),{disabled:"",modelValue:e(t).files8,"onUpdate:modelValue":u[6]||(u[6]=a=>e(t).files8=a)},null,8,["modelValue"]),l(e(d),null,{default:r(()=>[o(i(e(s).readonly),1)]),_:1}),l(e(p),{readonly:"",modelValue:e(t).files9,"onUpdate:modelValue":u[7]||(u[7]=a=>e(t).files9=a)},null,8,["modelValue"]),l(e(d),null,{default:r(()=>[o(i(e(s).beforeRemove),1)]),_:1}),l(e(p),{modelValue:e(t).files11,"onUpdate:modelValue":u[8]||(u[8]=a=>e(t).files11=a),onBeforeRemove:_},null,8,["modelValue"]),l(e(d),null,{default:r(()=>[o(i(e(s).style),1)]),_:1}),l(e(p),{modelValue:e(t).files6,"onUpdate:modelValue":u[9]||(u[9]=a=>e(t).files6=a)},{default:r(()=>[l(e(g),{type:"primary"},{default:r(()=>[o(i(e(s).upload),1)]),_:1})]),_:1},8,["modelValue"]),l(e(d),null,{default:r(()=>[o(i(e(s).validate),1)]),_:1}),l(e(p),{rules:[(a,x)=>x.getError().length===0||e(s).validateMessage],modelValue:e(t).files10,"onUpdate:modelValue":u[10]||(u[10]=a=>e(t).files10=a)},null,8,["rules","modelValue"]),l(e(d),null,{default:r(()=>[o(i(e(s).customRender),1)]),_:1}),l(e(A),null,{default:r(()=>[(f(!0),c(V,null,I(e(t).files12,a=>(f(),c("img",{class:"custom-uploader-file",key:a.id,src:a.cover},null,8,J))),128)),l(e(p),{"hide-list":"",modelValue:e(t).files12,"onUpdate:modelValue":u[11]||(u[11]=a=>e(t).files12=a)},{default:r(()=>[l(e(g),{round:"",type:"primary"},{default:r(()=>[l(e(y),{size:28,name:"upload"})]),_:1})]),_:1},8,["modelValue"])]),_:1}),K],64))}};var _e=M(Q,[["__scopeId","data-v-5ed71666"]]);export{_e as default};