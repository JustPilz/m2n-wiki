"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3133],{7832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(4848),s=t(8453);const o={sidebar_position:2},r="getDistanceBetweenPoints2D",c={id:"serverFunctions/GetDistanceBetweenPoints2D",title:"getDistanceBetweenPoints2D",description:"This function is used to return the distance between two 2D points.",source:"@site/docs/serverFunctions/GetDistanceBetweenPoints2D.md",sourceDirName:"serverFunctions",slug:"/serverFunctions/GetDistanceBetweenPoints2D",permalink:"/m2n-wiki/docs/serverFunctions/GetDistanceBetweenPoints2D",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"fromRGB",permalink:"/m2n-wiki/docs/serverFunctions/FromRGB"},next:{title:"getDistanceBetweenPoints3D",permalink:"/m2n-wiki/docs/serverFunctions/GetDistanceBetweenPoints3D"}},a={},d=[];function l(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getdistancebetweenpoints2d",children:"getDistanceBetweenPoints2D"}),"\n",(0,i.jsx)(n.p,{children:"This function is used to return the distance between two 2D points."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(pointX: float, pointY: float, pointX2: float, pointY2: float)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"pointX - The X coordinate of the first point"}),"\n",(0,i.jsx)(n.li,{children:"pointY - The Y coordinate of the first point"}),"\n",(0,i.jsx)(n.li,{children:"pointX2 - The X coordinate of the second point"}),"\n",(0,i.jsx)(n.li,{children:"pointY2 - The Y coordinate of the second point"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Returns"})}),"\n",(0,i.jsx)(n.p,{children:"float - distance"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-squirrel",children:'addCommandHandler("getdistance", function(playerid) {\r\n    local myPos = getPlayerPosition(playerid);\r\n    local dis  = getDistanceBetweenPoints2D(400.0, 200.0, myPos[0], myPos[1]);\r\n    sendPlayerMessage(playerid, "Distance between points: " + dis + ".");\r\n});\r\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);