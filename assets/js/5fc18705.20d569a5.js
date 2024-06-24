"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9840],{6964:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(4848),i=t(8453);const o={sidebar_position:2},s="getWorldFromScreen",c={id:"clientFunctions/graphics/GetWorldFromScreen",title:"getWorldFromScreen",description:"This function is used to get a world position from the clients screen.",source:"@site/docs/clientFunctions/graphics/GetWorldFromScreen.md",sourceDirName:"clientFunctions/graphics",slug:"/clientFunctions/graphics/GetWorldFromScreen",permalink:"/m2n-wiki/docs/clientFunctions/graphics/GetWorldFromScreen",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"getScreenSize",permalink:"/m2n-wiki/docs/clientFunctions/graphics/GetScreenSize"},next:{title:"isChatVisible",permalink:"/m2n-wiki/docs/clientFunctions/graphics/IsChatVisible"}},l={},d=[];function a(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"getworldfromscreen",children:"getWorldFromScreen"}),"\n",(0,r.jsx)(n.p,{children:"This function is used to get a world position from the clients screen."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"(x: float, y: float, depth: float)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"x - The X of the position on the screen"}),"\n",(0,r.jsx)(n.li,{children:"y - The Y of the position on the screen"}),"\n",(0,r.jsx)(n.li,{children:"depth - The depth from the camera to the pointeger"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns"})}),"\n",(0,r.jsx)(n.p,{children:"array - X, Y and Z positions"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-squirrel",children:'addEventHandler("onClientKeyPress", function(key, state) {\r\n    if(key == "l" && state == "down") {\r\n        local size = getScreenSize();\r\n        local position = getWorldFromScreen(size[0] / 2, size[1] / 2, 30);\r\n\r\n        setPlayerPosition(position[0], position[1], position[2]);\r\n    }\r\n});\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);