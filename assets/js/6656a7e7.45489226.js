"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1282],{430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var i=n(4848),r=n(8453);const s={sidebar_position:2},l="setVehicleWheelTexture",c={id:"serverFunctions/SetVehicleWheelTexture",title:"setVehicleWheelTexture",description:"This function is used to set a vehicles wheel texture.",source:"@site/docs/serverFunctions/SetVehicleWheelTexture.md",sourceDirName:"serverFunctions",slug:"/serverFunctions/SetVehicleWheelTexture",permalink:"/m2n-wiki/docs/serverFunctions/SetVehicleWheelTexture",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"setVehicleTuningTable",permalink:"/m2n-wiki/docs/serverFunctions/SetVehicleTuningTable"},next:{title:"setVehicleWindowOpen",permalink:"/m2n-wiki/docs/serverFunctions/SetVehicleWindowOpen"}},o={},h=[];function d(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"setvehiclewheeltexture",children:"setVehicleWheelTexture"}),"\n",(0,i.jsx)(t.p,{children:"This function is used to set a vehicles wheel texture."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"(vehicleid: integer, wheelid: integer, textureid: integer)\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"vehicleid - The ID of the vehicle"}),"\n",(0,i.jsx)(t.li,{children:"wheelid - The ID of the wheel to set the wheel texture to"}),"\n",(0,i.jsx)(t.li,{children:"textureid - The ID of the texture to set"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-squirrel",children:'addCommandHandler("tune", function(playerid) {\r\n    if(isPlayerInVehicle(playerid)) {\r\n        local vehicleid = getPlayerVehicle(playerid);\r\n\r\n        setVehicleWheelTexture(vehicleid, 0, 11);\r\n        setVehicleWheelTexture(vehicleid, 1, 11);\r\n    }\r\n});\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var i=n(6540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);