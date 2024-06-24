"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9899],{3536:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var t=r(4848),a=r(8453);const l={sidebar_position:2},s="onPlayerChangeHealth",i={id:"serverEvents/player/OnPlayerChangeHealth",title:"onPlayerChangeHealth",description:"This event is triggered when a players health changes",source:"@site/docs/serverEvents/player/OnPlayerChangeHealth.md",sourceDirName:"serverEvents/player",slug:"/serverEvents/player/OnPlayerChangeHealth",permalink:"/m2n-wiki/docs/serverEvents/player/OnPlayerChangeHealth",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Player Events",permalink:"/m2n-wiki/docs/category/player-events-1"},next:{title:"onPlayerChangeNick",permalink:"/m2n-wiki/docs/serverEvents/player/OnPlayerChangeNick"}},o={},h=[];function c(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"onplayerchangehealth",children:"onPlayerChangeHealth"}),"\n",(0,t.jsx)(n.p,{children:"This event is triggered when a players health changes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"(playerid: integer, newHealth: float, oldHealth: float)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"playerid - The ID of the player"}),"\n",(0,t.jsx)(n.li,{children:"newHealth - The players new (current) health"}),"\n",(0,t.jsx)(n.li,{children:"oldHealth - The players old health"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-squirrel",children:'addEventHandler("onPlayerChangeHealth", function(playerid, newHealth, oldHealth) {\r\n    if(newHealth < 400)\r\n    {\r\n        log("Your health is low, you should seek medical advise!");\r\n    }\r\n    return 1;\r\n});\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(6540);const a={},l=t.createContext(a);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);