import{d as v,c as h,a as i,i as c,a9 as y,o as t,V as l,C as a,P as d,L as D,X as I,n,u as o,W as C,f as _,aa as T,ab as N,j as V,ac as b,F as B,Q as A,ad as F,ae as L,_ as $}from"./C9oyRWrv.js";const j={class:"avatar"},w={class:"name"},z={class:"title"},E={class:"site-content"},M={class:"site-info"},P=["title"],Q={class:"desc-content"},S={class:"date"},W={key:0},X=v({__name:"FeedCard",props:{author:{},sitenick:{},title:{},desc:{},link:{},feed:{},icon:{},avatar:{},archs:{},date:{},comment:{},error:{}},setup(f){const m=f,g=h(()=>F(m.link)),p=h(()=>L(m.link));return(e,q)=>{const u=D,s=I,k=y("Tooltip");return t(),i(k,{delay:200,interactive:"","hide-on-click":"toggle"},{content:c(()=>[a("div",E,[l(u,{class:"site-icon",src:e.icon,alt:e.title??e.sitenick??e.author},null,8,["src","alt"]),a("div",M,[a("h3",null,n(e.title??e.sitenick??e.author),1),a("code",{class:"domain",title:("getDomainType"in e?e.getDomainType:o(T))(o(g))},[a("span",null,n(("getDomain"in e?e.getDomain:o(N))(e.link)),1),o(p)?(t(),i(s,{key:0,class:"domain-mark",name:o(p)},null,8,["name"])):d("",!0)],8,P)]),(t(!0),_(B,null,V(e.archs,r=>(t(),i(s,{key:r,class:"arch",name:("getArchIcon"in e?e.getArchIcon:o(b))(r),title:r},null,8,["name","title"]))),128))]),a("div",Q,[a("div",S,n(e.date),1),a("p",null,n(e.error??e.desc),1),e.comment?(t(),_("p",W,[l(s,{name:"ph:chat-centered-dots-bold"}),A(" "+n(e.comment),1)])):d("",!0)])]),default:c(()=>[l(o(C),{class:"feed-card gradient-card",to:e.error?void 0:e.link,"data-error":e.error},{default:c(()=>[a("div",j,[l(u,{src:e.avatar??e.icon,alt:e.author,loading:"lazy",title:e.feed?void 0:"无订阅源"},null,8,["src","alt","title"]),e.feed?d("",!0):(t(),i(s,{key:0,class:"no-feed",name:"ph:bell-simple-slash-bold"}))]),a("span",w,n(e.author),1),a("span",z,n(e.sitenick),1)]),_:1},8,["to","data-error"])]),_:1})}}}),H=$(X,[["__scopeId","data-v-f8da3d46"]]);export{H as default};
