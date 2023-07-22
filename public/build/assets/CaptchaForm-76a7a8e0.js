import{k as m,T as h,l as _,h as f,m as b,o as l,f as r,b as e,e as n,i as v,p as x,u as i,q as g,a as y}from"./app-537b3215.js";import{_ as w}from"./InputError-34d43556.js";const k={class:"p-6"},C=e("h1",{class:"text-3xl"},"Captcha Form",-1),S=["onSubmit"],B={class:"mt-2 flex flex-row place-items-center py-3"},M=["src"],V={key:1,class:"animate-pulse w-56 h-9 border-2 border-slate-300 rounded-sm"},F=e("div",{class:"px-2 grid grid-cols-6 gap-2 h-full w-full items-center"},[e("div",{class:"h-2 bg-slate-200 rounded-md col-span-3"}),e("div",{class:"h-2 bg-slate-200 rounded-md col-span-1"}),e("div",{class:"h-2 bg-slate-200 rounded-md col-span-2"})],-1),K=[F],N=["onClick"],T=e("button",{class:"mt-3 py-1 px-4 w-fit border-2 border-gray-700 rounded-md cursor-pointer",type:"submit"},"Submit",-1),I={__name:"CaptchaForm",setup(q){const s=m(null),t=h({captcha:""}),c=async()=>{s.value=null,t.captcha="",await axios.get("/api/captcha-reload").then(o=>{s.value=o.data.url}).catch(o=>{console.log(o)})},p=()=>{t.post(route("captcha.verify"))};_(()=>{c()});const d=f(()=>t.errors.captcha!=null?"Captcha does not match. (Please reload if needed.)":void 0);return b(d,()=>{c()}),(o,a)=>(l(),r("div",k,[C,e("form",{class:"flex flex-col w-96",onSubmit:n(p,["prevent"])},[e("div",B,[s.value!==null?(l(),r("img",{key:0,src:s.value},null,8,M)):(l(),r("div",V,K)),e("button",{class:"ml-4 py-2 px-4 text-xl font-semibold w-fit border-2 border-gray-700 rounded-md cursor-pointer",onClick:n(c,["prevent"])},"↻",8,N)]),v(e("input",{type:"text",onKeydown:a[0]||(a[0]=g(n(()=>{},["prevent"]),["enter"])),"onUpdate:modelValue":a[1]||(a[1]=u=>i(t).captcha=u)},null,544),[[x,i(t).captcha]]),y(w,{class:"mt-3",message:d.value},null,8,["message"]),T],40,S)]))}};export{I as default};
