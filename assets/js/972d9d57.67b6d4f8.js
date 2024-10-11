"use strict";(self.webpackChunkrta_docs=self.webpackChunkrta_docs||[]).push([[66],{4251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>m});var n=r(4848),s=r(8453),i=r(6025),o=r(5871),c=r(1122);const a={sidebar_position:1,sidebar_label:"Introduction",title:"Introduction"},l="Fintech Primitives (FP) Product Suite",u={id:"introduction",title:"Introduction",description:"Learn about the FP Services and how to facilitate mutual fund investments for your investors.",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/introduction",permalink:"/rta-docs/docs/introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction",title:"Introduction"},sidebar:"sidebar",next:{title:"MF Orders",permalink:"/rta-docs/docs/category/mf-orders"}},d={},m=[{value:"Resources",id:"resources",level:2},{value:"Platform as a Service",id:"platform-as-a-service",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"fintech-primitives-fp-product-suite",children:"Fintech Primitives (FP) Product Suite"})}),"\n",(0,n.jsx)(t.p,{children:"Learn about the FP Services and how to facilitate mutual fund investments for your investors."}),"\n",(0,n.jsx)(o.A,{items:[{label:"MF Orders",type:"link",href:"/docs/mf-orders/lumpsum-orders/create-a-purchase-order",description:"Enable lumpsum and sip investments for your investors"}]}),"\n",(0,n.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsx)(t.p,{children:"You can access all the FP services via APIs."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Read through the specs at ",(0,n.jsx)(t.a,{href:"https://fintechprimitives.com/api",children:"API Documentation"})]}),"\n",(0,n.jsxs)(t.li,{children:["Try the APIs through our ",(0,n.jsx)(t.a,{href:"https://www.postman.com/fintechprimitives/workspace/fp-apis/",children:"Postman Collection"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"platform-as-a-service",children:"Platform as a Service"}),"\n",(0,n.jsx)(c.A,{alt:"FP Diagram",sources:{light:(0,i.Ay)("/img/fp_diagram_light.png"),dark:(0,i.Ay)("/img/fp_diagram_dark.png")}})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5871:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(6540),s=r(4164),i=r(6972),o=r(8774),c=r(4586);const a=["zero","one","two","few","many","other"];function l(e){return a.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,c.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function m(){const e=d();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),i=r.pluralForms.indexOf(s);return n[Math.min(i,n.length-1)]}(r,t,e)}}var h=r(6654),p=r(1312),f=r(1107);const x={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=r(4848);function v(e){let{href:t,children:r}=e;return(0,g.jsx)(o.A,{href:t,className:(0,s.A)("card padding--lg",x.cardContainer),children:r})}function j(e){let{href:t,icon:r,title:n,description:i}=e;return(0,g.jsxs)(v,{href:t,children:[(0,g.jsxs)(f.A,{as:"h2",className:(0,s.A)("text--truncate",x.cardTitle),title:n,children:[r," ",n]}),i&&(0,g.jsx)("p",{className:(0,s.A)("text--truncate",x.cardDescription),title:i,children:i})]})}function b(e){let{item:t}=e;const r=(0,i.Nr)(t),n=function(){const{selectMessage:e}=m();return t=>e(t,(0,p.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,g.jsx)(j,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function P(e){let{item:t}=e;const r=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.cC)(t.docId??void 0);return(0,g.jsx)(j,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(P,{item:t});case"category":return(0,g.jsx)(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function F(e){let{className:t}=e;const r=(0,i.$S)();return(0,g.jsx)(w,{items:r.items,className:t})}function w(e){const{items:t,className:r}=e;if(!t)return(0,g.jsx)(F,{...e});const n=(0,i.d1)(t);return(0,g.jsx)("section",{className:(0,s.A)("row",r),children:n.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(y,{item:e})},t)))})}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(6540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);