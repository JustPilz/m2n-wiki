"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6289],{8253:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=i(4848),r=i(8453);const s={sidebar_position:2},l="getVehicleTuningTable",c={id:"serverFunctions/GetVehicleTuningTable",title:"getVehicleTuningTable",description:"This function is used to get a vehicles tuning table.",source:"@site/docs/serverFunctions/GetVehicleTuningTable.md",sourceDirName:"serverFunctions",slug:"/serverFunctions/GetVehicleTuningTable",permalink:"/m2n-wiki/docs/serverFunctions/GetVehicleTuningTable",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"getVehicleSpeed",permalink:"/m2n-wiki/docs/serverFunctions/GetVehicleSpeed"},next:{title:"getVehicleWheelTexture",permalink:"/m2n-wiki/docs/serverFunctions/GetVehicleWheelTexture"}},o={},a=[];function d(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"getvehicletuningtable",children:"getVehicleTuningTable"}),"\n",(0,t.jsx)(n.p,{children:"This function is used to get a vehicles tuning table."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"(vehicleid: integer)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"vehicleid - The ID of the vehicle"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns"})}),"\n",(0,t.jsx)(n.p,{children:"integer - The tuning table"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-squirrel",children:'addCommandHandler("tune", function(playerid) {\r\n    if(isPlayerInVehicle(playerid)) {\r\n        local vehicleid = getPlayerVehicle(playerid);\r\n        if(getVehicleTuningTable(vehicleid) != 3) {\r\n            setVehicleTuningTable(vehicleid, 3);\r\n        } else {\r\n            sendPlayerMessage(playerid, "You have already tuned your vehicle!");\r\n        }\r\n    }\r\n});\r\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(6540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);