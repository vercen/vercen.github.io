import{d as h,R as v,G as k,S as x,U as C,c as w,f as p,C as a,V as u,Q as V,i as m,F as b,j as S,u as l,W as A,o as s,X as B,a as n,P as D,n as i,_ as I}from"./t63I15iJ.js";import{u as N}from"./BfLqdTst.js";import{q as L}from"./kJ6j94WI.js";import P from"./Bvcsb5Yf.js";import q from"./ycNnzNtM.js";import{f as E}from"./Cw6_m0ZM.js";import"./C_gm745W.js";import"./BhNlkjnB.js";import"./3l7zLyuf.js";const F={class:"gallery"},M={class:"gallery-header"},R={class:"gallery-grid"},T={class:"gallery-item-info"},j=h({__name:"gallery",async setup(z){let r,d;v(),k({title:"生活图片",meta:[{name:"description",content:"分享生活中的美好瞬间"}]}),x().setAside(["blog-stats"]);const{data:_}=([r,d]=C(()=>N("gallery_posts",()=>L("gallery").only(["_path","title","description","date","image","type"]).sort({date:-1}).find(),{default:()=>[]})),r=await r,d(),r),y=w(()=>{var o;return((o=_.value)==null?void 0:o.map(t=>({url:t.image,title:t.title,description:t.description,date:t.date,path:t._path,type:t.type||"image"})))||[]}),f=o=>E(new Date(o),"yyyy-MM-dd");return(o,t)=>{const g=B,c=A;return s(),p("div",F,[a("div",M,[a("h1",null,[u(c,{class:"mobile-only",to:"/"},{default:m(()=>[u(g,{name:"ph:caret-left-bold"})]),_:1}),t[0]||(t[0]=V("我的相册 "))])]),t[1]||(t[1]=a("p",null,"记录生活中的美好瞬间",-1)),a("div",R,[(s(!0),p(b,null,S(l(y),e=>(s(),n(c,{key:e.url,to:e.path,class:"gallery-item"},{default:m(()=>[e.type==="image"?(s(),n(l(P),{key:0,src:e.url,alt:e.title,zoom:!1},null,8,["src","alt"])):e.type==="video"?(s(),n(l(q),{key:1,type:e.videoType,id:e.videoId,width:"100%",ratio:"16/9"},null,8,["type","id"])):D("",!0),a("div",T,[a("h3",null,i(e.title),1),a("p",null,i(e.description),1),a("time",null,i(f(e.date)),1)])]),_:2},1032,["to"]))),128))])])}}}),O=I(j,[["__scopeId","data-v-8b193813"]]);export{O as default};
