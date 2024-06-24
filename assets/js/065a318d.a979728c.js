"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4251],{877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var i=t(4848),o=t(8453);const s={sidebar_position:2},r="isPointInTube",c={id:"serverFunctions/IsPointInTube",title:"isPointInTube",description:"This function is used to check if a point is within a 3D tube.",source:"@site/docs/serverFunctions/IsPointInTube.md",sourceDirName:"serverFunctions",slug:"/serverFunctions/IsPointInTube",permalink:"/m2n-wiki/docs/serverFunctions/IsPointInTube",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"isPointInCircle3D",permalink:"/m2n-wiki/docs/serverFunctions/IsPointInCircle3D"},next:{title:"isVehiclePartOpen",permalink:"/m2n-wiki/docs/serverFunctions/IsVehiclePartOpen"}},l={},u=[];function a(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ispointintube",children:"isPointInTube"}),"\n",(0,i.jsx)(n.p,{children:"This function is used to check if a point is within a 3D tube."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(pointX: float, pointY: float, pointZ: float, tubeX: float, tubeY: float, tubeZ: float, height: float, radius: float)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"pointX - The X coordinate of the point"}),"\n",(0,i.jsx)(n.li,{children:"pointY - The Y coordinate of the point"}),"\n",(0,i.jsx)(n.li,{children:"pointZ - The Z coordinate of the point"}),"\n",(0,i.jsx)(n.li,{children:"tubeX - The X coordinate of the tube"}),"\n",(0,i.jsx)(n.li,{children:"tubeY - The Y coordinate of the tube"}),"\n",(0,i.jsx)(n.li,{children:"tubeZ - The Z coordinate of the tube"}),"\n",(0,i.jsx)(n.li,{children:"height - The height of the tube"}),"\n",(0,i.jsx)(n.li,{children:"radius - The radius of the tube"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The point is not in the 3D tube"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-squirrel",children:'addCommandHandler("checktube" , function(playerid) {\r\n        local myPos = getPlayerPosition(playerid);\r\n        local check = isPointInTube(myPos[0], myPos[1], myPos[2], 0, 0, 0, 50, 80);\r\n        if(check) {\r\n            sendPlayerMessage(playerid, "You are within the 3D tube!");\r\n        }\r\n});\r\n\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);