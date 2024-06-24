"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1062],{3249:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var i=r(4848),s=r(8453);const t={sidebar_position:2},c="repairVehicle",o={id:"serverFunctions/RepairVehicle",title:"repairVehicle",description:"This function is used to repair a vehicle.",source:"@site/docs/serverFunctions/RepairVehicle.md",sourceDirName:"serverFunctions",slug:"/serverFunctions/RepairVehicle",permalink:"/m2n-wiki/docs/serverFunctions/RepairVehicle",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"removePlayerWeapon",permalink:"/m2n-wiki/docs/serverFunctions/RemovePlayerWeapon"},next:{title:"respawnPlayer",permalink:"/m2n-wiki/docs/serverFunctions/RespawnPlayer"}},l={},a=[];function d(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"repairvehicle",children:"repairVehicle"}),"\n",(0,i.jsx)(n.p,{children:"This function is used to repair a vehicle."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(vehicleid: integer)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"vehicleid - The ID of the vehicle"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-squirrel",children:'addCommandHandler("fix", function(playerid) {\r\n        if(isPlayerInVehicle(playerid)) {\r\n            local vehicleid = getPlayerVehicle(playerid);\r\n            repairVehicle(vehicleid);\r\n        }\r\n});\r\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var i=r(6540);const s={},t=i.createContext(s);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);