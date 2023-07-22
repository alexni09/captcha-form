import{k as m,T as h,l as _,h as f,m as b,o as c,f as l,b as e,e as d,i as v,p as x,u as i,a as g}from"./app-b7522ee4.js";import{_ as y}from"./InputError-34dba910.js";const w={class:"p-6"},k=e("h1",{class:"text-3xl"},"Captcha Form",-1),C=["onSubmit"],S={class:"mt-2 flex flex-row place-items-center py-3"},B=["src"],M={key:1,class:"animate-pulse w-56 h-9 border-2 border-slate-300 rounded-sm"},V=e("div",{class:"px-2 grid grid-cols-6 gap-2 h-full w-full items-center"},[e("div",{class:"h-2 bg-slate-200 rounded-md col-span-3"}),e("div",{class:"h-2 bg-slate-200 rounded-md col-span-1"}),e("div",{class:"h-2 bg-slate-200 rounded-md col-span-2"})],-1),F=[V],N=["onClick"],T=e("button",{class:"mt-3 py-1 px-4 w-fit border-2 border-gray-700 rounded-md cursor-pointer",type:"submit"},"Submit",-1),P={__name:"CaptchaForm",setup(D){const s=m(null),t=h({captcha:""}),o=async()=>{s.value=null,t.captcha="",await axios.get("/api/captcha-reload").then(a=>{s.value=a.data.url}).catch(a=>{console.log(a)})},p=()=>{t.post(route("captcha.verify"))};_(()=>{o()});const r=f(()=>t.errors.captcha!=null?"Captcha does not match. (Please reload if needed.)":void 0);return b(r,()=>{o()}),(a,n)=>(c(),l("div",w,[k,e("form",{class:"flex flex-col w-96",onSubmit:d(p,["prevent"])},[e("div",S,[s.value!==null?(c(),l("img",{key:0,src:s.value},null,8,B)):(c(),l("div",M,F)),e("button",{class:"ml-4 py-2 px-4 text-xl font-semibold w-fit border-2 border-gray-700 rounded-md cursor-pointer",onClick:d(o,["prevent"])},"↻",8,N)]),v(e("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=u=>i(t).captcha=u)},null,512),[[x,i(t).captcha]]),g(y,{class:"mt-3",message:r.value},null,8,["message"]),T],40,C)]))}};export{P as default};
