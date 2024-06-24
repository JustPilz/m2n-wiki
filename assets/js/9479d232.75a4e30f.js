"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1573],{8513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=n(4848),r=n(8453);const s={sidebar_position:2},c="getVehiclePlateText",l={id:"serverFunctions/GetVehiclePlateText",title:"getVehiclePlateText",description:"This function is used to return a vehicles plate text.",source:"@site/docs/serverFunctions/GetVehiclePlateText.md",sourceDirName:"serverFunctions",slug:"/serverFunctions/GetVehiclePlateText",permalink:"/m2n-wiki/docs/serverFunctions/GetVehiclePlateText",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"getVehicleModel",permalink:"/m2n-wiki/docs/serverFunctions/GetVehicleModel"},next:{title:"getVehiclePosition",permalink:"/m2n-wiki/docs/serverFunctions/GetVehiclePosition"}},o={},a=[];function d(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"getvehicleplatetext",children:"getVehiclePlateText"}),"\n",(0,i.jsx)(t.p,{children:"This function is used to return a vehicles plate text."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"(vehicleid: integer)\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"vehicleid - The ID of the vehicle"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Returns"})}),"\n",(0,i.jsx)(t.p,{children:"string - The vehicles plate text"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-squirrel",children:'function vehicleSpawnEvent(vehicleid) {\r\n    setVehiclePlateText(vehicleid, "Hello");\r\n    log("Vehicle " + vehicleid + " plate: " + getVehiclePlateText(vehicleid));\r\n    return 1;\r\n}\r\naddEventHandler("onVehicleSpawn", vehicleSpawnEvent);\r\n\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var i=n(6540);const r={},s=i.createContext(r);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);