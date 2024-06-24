"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5937],{7948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(4848),s=t(8453);const o={sidebar_position:2},i="getPlayerCount",c={id:"serverFunctions/GetPlayerCount",title:"getPlayerCount",description:"This function is used to return the current amount of players in the server .",source:"@site/docs/serverFunctions/GetPlayerCount.md",sourceDirName:"serverFunctions",slug:"/serverFunctions/GetPlayerCount",permalink:"/m2n-wiki/docs/serverFunctions/GetPlayerCount",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"getDistanceBetweenPoints3D",permalink:"/m2n-wiki/docs/serverFunctions/GetDistanceBetweenPoints3D"},next:{title:"getPlayerHealth",permalink:"/m2n-wiki/docs/serverFunctions/GetPlayerHealth"}},a={},l=[];function u(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"getplayercount",children:"getPlayerCount"}),"\n",(0,r.jsx)(n.p,{children:"This function is used to return the current amount of players in the server ."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"No\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns"})}),"\n",(0,r.jsx)(n.p,{children:"integer - Number of players"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-squirrel",children:'addEventHandler("onPlayerDisconnect", function(playerid, reason) {\r\n    local totalPlayers = GetPlayerCount();\r\n    sendPlayerMessageToAll(getPlayerName(playerid) + " left the server. There is currently " +\r\ntotalPlayers + " player(s) online!");\r\n});\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(6540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);