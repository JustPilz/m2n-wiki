"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2634],{1042:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(4848),s=r(8453);const i={sidebar_position:2},o="onPlayerConnect",l={id:"serverEvents/player/OnPlayerConnect",title:"onPlayerConnect",description:"This event is triggered when a player connects to the server",source:"@site/docs/serverEvents/player/OnPlayerConnect.md",sourceDirName:"serverEvents/player",slug:"/serverEvents/player/OnPlayerConnect",permalink:"/m2n-wiki/docs/serverEvents/player/OnPlayerConnect",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"onPlayerChat",permalink:"/m2n-wiki/docs/serverEvents/player/OnPlayerChat"},next:{title:"onPlayerConnectionRejected",permalink:"/m2n-wiki/docs/serverEvents/player/OnPlayerConnectionRejected"}},a={},c=[];function d(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"onplayerconnect",children:"onPlayerConnect"}),"\n",(0,t.jsx)(n.p,{children:"This event is triggered when a player connects to the server"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"(playerid: integer, name: string, ip: string, serial: string)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"playerid - The ID of the player"}),"\n",(0,t.jsx)(n.li,{children:"name - The players nickname"}),"\n",(0,t.jsx)(n.li,{children:"ip - The IP address of the player"}),"\n",(0,t.jsx)(n.li,{children:"serial - The players serial"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-squirrel",children:'addEventHandler("onPlayerConnect", function(playerid, name, ip, serial) {\r\n    log(playerid + " joined the server!");\r\n    return 1;\r\n});\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(6540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);