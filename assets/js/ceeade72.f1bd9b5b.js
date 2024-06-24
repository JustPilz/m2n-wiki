"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9071],{9740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(4848),s=t(8453);const i={sidebar_position:2},o="onPlayerChat",a={id:"serverEvents/player/OnPlayerChat",title:"onPlayerChat",description:'This event is triggered when the client sends some messages to the chat. Returning "false" you can prevent other players to see messages he is sending to the server.',source:"@site/docs/serverEvents/player/OnPlayerChat.md",sourceDirName:"serverEvents/player",slug:"/serverEvents/player/OnPlayerChat",permalink:"/m2n-wiki/docs/serverEvents/player/OnPlayerChat",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"onPlayerChangeWeapon",permalink:"/m2n-wiki/docs/serverEvents/player/OnPlayerChangeWeapon"},next:{title:"onPlayerConnect",permalink:"/m2n-wiki/docs/serverEvents/player/OnPlayerConnect"}},l={},c=[];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"onplayerchat",children:"onPlayerChat"}),"\n",(0,r.jsx)(n.p,{children:'This event is triggered when the client sends some messages to the chat. Returning "false" you can prevent other players to see messages he is sending to the server.'}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"info",children:(0,r.jsx)(n.p,{children:"To prevent other clients from seeing their own sent message, you need to listen to OnClientChat client event, and block it (or forward it)."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"(playerid: integer, text: string)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"playerid - Playerid that sent the message"}),"\n",(0,r.jsx)(n.li,{children:"text - The text which was typed into the chat"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns"})}),"\n",(0,r.jsx)(n.p,{children:"Return 0 (false) if you want to prevent sending the text to other clients, 1 (true) otherwise"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-squirrel",children:'addEventHandler("onPlayerChat", function(playerid, text) {\r\n    log(playerid + " said " + text);\r\n    return 1;\r\n});\r\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);