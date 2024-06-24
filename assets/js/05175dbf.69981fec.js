"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2361],{1338:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var i=t(4848),r=t(8453);const o={sidebar_position:2},s="getVehicleRotation",c={id:"serverFunctions/GetVehicleRotation",title:"getVehicleRotation",description:"This function is used to get a vehicles current rotation position.",source:"@site/docs/serverFunctions/GetVehicleRotation.md",sourceDirName:"serverFunctions",slug:"/serverFunctions/GetVehicleRotation",permalink:"/m2n-wiki/docs/serverFunctions/GetVehicleRotation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"getVehicleRespawnTime",permalink:"/m2n-wiki/docs/serverFunctions/GetVehicleRespawnTime"},next:{title:"getVehicleSirenState",permalink:"/m2n-wiki/docs/serverFunctions/GetVehicleSirenState"}},l={},a=[];function d(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getvehiclerotation",children:"getVehicleRotation"}),"\n",(0,i.jsx)(n.p,{children:"This function is used to get a vehicles current rotation position."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(vehcileid: integer)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"vehcileid - The vehicleid you would like to get the rotation of"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Returns"})}),"\n",(0,i.jsx)(n.p,{children:"array - The vehicles RX, R Y and RZ position"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-squirrel",children:'function playerSpawnEvent(playerid) {\r\n    local vehicleid = createVehicle(0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\r\n    setVehiclePosition(vehicleid, 20.0, 20.0, 1.0);\r\n\r\n    local rotPos = getVehiclePosition(vehicleid);\r\n    log("Vehicle " + vehicleid + " rotation position is " + rotPos[0] + ", " + rotPos[1] + ", " +\r\nrotPos[2] + ".");\r\n    return 1;\r\n}\r\naddEventHandler("onPlayerSpawn", playerSpawnEvent);\r\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(6540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);