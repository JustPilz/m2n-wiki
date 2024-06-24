"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5167,4959],{1430:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=i(4848),r=i(8453),s=i(8472);const a={id:"server-get-players",sidebar_position:2,title:"getPlayers",description:"This function is used to retrieve table of all current connected players."},c="getPlayers Shared",l={id:"serverFunctions/server-get-players",title:"getPlayers",description:"This function is used to retrieve table of all current connected players.",source:"@site/docs/serverFunctions/GetPlayers.mdx",sourceDirName:"serverFunctions",slug:"/serverFunctions/server-get-players",permalink:"/m2n-wiki/docs/serverFunctions/server-get-players",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"server-get-players",sidebar_position:2,title:"getPlayers",description:"This function is used to retrieve table of all current connected players."},sidebar:"docsSidebar",previous:{title:"getPlayerWeapon",permalink:"/m2n-wiki/docs/serverFunctions/GetPlayerWeapon"},next:{title:"getTickCount",permalink:"/m2n-wiki/docs/serverFunctions/GetTickCount"}},o={},d=[...s.toc];function p(e){const n={h1:"h1",img:"img",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"getplayers-shared",children:["getPlayers ",(0,t.jsx)(n.img,{alt:"Shared",src:i(1739).A+"",width:"47",height:"20"})]}),"\n",(0,t.jsx)(s.default,{})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8472:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var t=i(4848),r=i(8453);const s={sidebar_position:2,unlisted:!0},a=void 0,c={id:"sharedFunctions/GetPlayers",title:"GetPlayers",description:"This function is used to retrieve table (playerid : playerName) of all current connected players.",source:"@site/docs/sharedFunctions/GetPlayers.mdx",sourceDirName:"sharedFunctions",slug:"/sharedFunctions/GetPlayers",permalink:"/m2n-wiki/docs/sharedFunctions/GetPlayers",draft:!1,unlisted:!0,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,unlisted:!0},sidebar:"docsSidebar"},l={},o=[];function d(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This function is used to retrieve table (playerid : playerName) of all current connected players."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-squirrel",children:"getPlayers();\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns"})}),"\n",(0,t.jsx)(n.p,{children:"table - Table with all currently connected players. For each table entry 'key' is an playerId and 'value' is an player name."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-squirrel",children:'//SERVER\r\naddEventHandler("onPlayerDisconnected", function(playerid, reason) {\r\n    local players = getPlayers();\r\n    local list = "";\r\n    foreach (idx, name in players) {\r\n        list += ", " + name;\r\n    }\r\n    sendPlayerMessageToAll("Still active players: " + list);\r\n});\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1739:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDciIGhlaWdodD0iMjAiIHJvbGU9ImltZyIgYXJpYS1sYWJlbD0ic2hhcmVkIj48dGl0bGU+c2hhcmVkPC90aXRsZT48bGluZWFyR3JhZGllbnQgaWQ9InMiIHgyPSIwIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjYmJiIiBzdG9wLW9wYWNpdHk9Ii4xIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLW9wYWNpdHk9Ii4xIi8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9InIiPjxyZWN0IHdpZHRoPSI0NyIgaGVpZ2h0PSIyMCIgcng9IjMiIGZpbGw9IiNmZmYiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNyKSI+PHJlY3Qgd2lkdGg9IjAiIGhlaWdodD0iMjAiIGZpbGw9IiMwMDdlYzYiLz48cmVjdCB4PSIwIiB3aWR0aD0iNDciIGhlaWdodD0iMjAiIGZpbGw9IiMwMDdlYzYiLz48cmVjdCB3aWR0aD0iNDciIGhlaWdodD0iMjAiIGZpbGw9InVybCgjcykiLz48L2c+PGcgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IlZlcmRhbmEsR2VuZXZhLERlamFWdSBTYW5zLHNhbnMtc2VyaWYiIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGZvbnQtc2l6ZT0iMTEwIj48dGV4dCBhcmlhLWhpZGRlbj0idHJ1ZSIgeD0iMjM1IiB5PSIxNTAiIGZpbGw9IiMwMTAxMDEiIGZpbGwtb3BhY2l0eT0iLjMiIHRyYW5zZm9ybT0ic2NhbGUoLjEpIiB0ZXh0TGVuZ3RoPSIzNzAiPnNoYXJlZDwvdGV4dD48dGV4dCB4PSIyMzUiIHk9IjE0MCIgdHJhbnNmb3JtPSJzY2FsZSguMSkiIGZpbGw9IiNmZmYiIHRleHRMZW5ndGg9IjM3MCI+c2hhcmVkPC90ZXh0PjwvZz48L3N2Zz4="},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var t=i(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);