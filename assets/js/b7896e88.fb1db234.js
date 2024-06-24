"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9464],{2846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(4848),s=t(8453);const o={sidebar_position:2,unlisted:!0},i=void 0,c={id:"sharedFunctions/GetPlayerCount",title:"GetPlayerCount",description:"This function is used to return the current amount of connected players.",source:"@site/docs/sharedFunctions/GetPlayerCount.mdx",sourceDirName:"sharedFunctions",slug:"/sharedFunctions/GetPlayerCount",permalink:"/m2n-wiki/docs/sharedFunctions/GetPlayerCount",draft:!1,unlisted:!0,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,unlisted:!0},sidebar:"docsSidebar"},a={},d=[];function u(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This function is used to return the current amount of connected players."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"No\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns"})}),"\n",(0,r.jsx)(n.p,{children:"integer - Current amount of connected players"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-squirrel",children:'addEventHandler("onPlayerConnect", function (playerid, name, ip, serial) {\r\n    if (getPlayerCount() >= getMaxPlayers()) {\r\n        sendPlayerMessageToAll("The server is full!", 0, 255, 0);\r\n    }\r\n    return 1;\r\n});\n'})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(6540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);