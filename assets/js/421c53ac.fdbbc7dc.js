"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2841],{4483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(4848),r=t(8453);const s={sidebar_position:2},o="getVehicleModel",c={id:"serverFunctions/GetVehicleModel",title:"getVehicleModel",description:"This function is used to return a vehicles model ID.",source:"@site/docs/serverFunctions/GetVehicleModel.md",sourceDirName:"serverFunctions",slug:"/serverFunctions/GetVehicleModel",permalink:"/m2n-wiki/docs/serverFunctions/GetVehicleModel",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"getVehicleHornState",permalink:"/m2n-wiki/docs/serverFunctions/GetVehicleHornState"},next:{title:"getVehiclePlateText",permalink:"/m2n-wiki/docs/serverFunctions/GetVehiclePlateText"}},l={},d=[];function h(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getvehiclemodel",children:"getVehicleModel"}),"\n",(0,i.jsx)(n.p,{children:"This function is used to return a vehicles model ID."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(vehicleid: integer)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"vehicleid - The ID of the vehicle"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-squirrel",children:'function vehicleSpawnEvent(vehicleid) {\r\n    local vehicleModel = getVehicleModel(vehicleid);\r\n    if(vehicleModel == 42 || vehicleModel == 52) {\r\n        // Do something...\r\n    }\r\n    return 1;\r\n}\r\naddEventHandler("onVehicleSpawn", vehicleSpawnEvent);\r\n\n'})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);