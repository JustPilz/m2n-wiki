"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1022],{3166:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=t(4848),r=t(8453);const i={sidebar_position:2},o="callEvent",l={id:"serverFunctions/CallEvent",title:"callEvent",description:"This function is used to call an event created by addEventHandler",source:"@site/docs/serverFunctions/CallEvent.md",sourceDirName:"serverFunctions",slug:"/serverFunctions/CallEvent",permalink:"/m2n-wiki/docs/serverFunctions/CallEvent",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"attachBlipToVehicle",permalink:"/m2n-wiki/docs/serverFunctions/AttachBlipToVehicle"},next:{title:"clamp",permalink:"/m2n-wiki/docs/serverFunctions/Clamp"}},c={},a=[];function d(n){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"callevent",children:"callEvent"}),"\n",(0,s.jsx)(e.p,{children:"This function is used to call an event created by addEventHandler"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"(event: string, (optional args): ...)\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"event - The event name"}),"\n",(0,s.jsx)(e.li,{children:"(optional args) - Arguments to pass onto the event"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"The event was not called"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-squirrel",children:'addEventHandler("onScriptInit", function() {\r\n    // Call customEvent and pass 53 as an argument\r\n    callEvent("customEvent", 53);\r\n});\r\n\r\naddEventHandler("customEvent", function(total) {\r\n    // This would output "Total is: 53"\r\n    log("Total is: " + total);\r\n});\n'})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>l});var s=t(6540);const r={},i=s.createContext(r);function o(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);