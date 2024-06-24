"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6160],{942:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var i=t(4848),r=t(8453);const o={sidebar_position:2},s="attachBlipToPed",c={id:"serverFunctions/AttachBlipToPed",title:"attachBlipToPed",description:"This function is used to attach a blip to a ped.",source:"@site/docs/serverFunctions/AttachBlipToPed.md",sourceDirName:"serverFunctions",slug:"/serverFunctions/AttachBlipToPed",permalink:"/m2n-wiki/docs/serverFunctions/AttachBlipToPed",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"addEventHandler",permalink:"/m2n-wiki/docs/serverFunctions/AddEventHandler"},next:{title:"attachBlipToPlayer",permalink:"/m2n-wiki/docs/serverFunctions/AttachBlipToPlayer"}},d={},a=[];function l(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"attachbliptoped",children:"attachBlipToPed"}),"\n",(0,i.jsx)(n.p,{children:"This function is used to attach a blip to a ped."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(blipid: integer, pedid: integer)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"blipid - The ID of the blip you want to destroy"}),"\n",(0,i.jsx)(n.li,{children:"pedid - The ID of the ped"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-squirrel",children:'addEventHandler("onPlayerSpawn", function(playerid) {\r\n    local pedid = createPed(0, 100.0, 100.0, -20.0, 0.0, 0.0, 0.0);\r\n    local blipid = createBlip(-300.0, 120.0, 0, 1);\r\n    attachBlipToPed(blipid, pedid);\r\n    return 1;\r\n});\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(6540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);