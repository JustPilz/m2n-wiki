"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5313],{1:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var s=t(4848),i=t(8453);const o={sidebar_position:2},r="showPedName",d={id:"clientFunctions/ped/ShowPedName",title:"showPedName",description:"This function is used to toggle a peds name.",source:"@site/docs/clientFunctions/ped/ShowPedName.md",sourceDirName:"clientFunctions/ped",slug:"/clientFunctions/ped/ShowPedName",permalink:"/m2n-wiki/docs/clientFunctions/ped/ShowPedName",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"setPedName",permalink:"/m2n-wiki/docs/clientFunctions/ped/SetPedName"},next:{title:"Player",permalink:"/m2n-wiki/docs/category/player"}},c={},a=[];function l(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"showpedname",children:"showPedName"}),"\n",(0,s.jsx)(n.p,{children:"This function is used to toggle a peds name."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"(pedid: integer, show: boolean)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"pedid - The ID of the ped"}),"\n",(0,s.jsx)(n.li,{children:"show - Show or hide the peds name"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-squirrel",children:'addEventHandler("onScriptInit", function() {\r\n    local myPed = createPed(0, 120.0, 160.0, -20.0, 0.0, 0.0, 0.0);\r\n\r\n    setPedName(myPed, "Adam Baldwin");\r\n    showPedName(myPed, true);\r\n});\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);