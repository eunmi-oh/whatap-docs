"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["85757"],{50699:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>d,default:()=>p,assets:()=>r,toc:()=>l,frontMatter:()=>o});var a=JSON.parse('{"id":"nodejs/agent-manage","title":"Management","description":"It explains how to update or delete the Node.js agent.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/nodejs/agent-manage.mdx","sourceDirName":"nodejs","slug":"/nodejs/agent-manage","permalink":"/en/nodejs/agent-manage","draft":false,"unlisted":false,"editUrl":"undefined/docs/nodejs/agent-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-manage","title":"Management","description":"It explains how to update or delete the Node.js agent.","keywords":["Node.js","Management","Close Pending","Update"],"isTranslationMissing":false},"sidebar":"nodejsSidebar","previous":{"title":"Topology map","permalink":"/en/nodejs/agent-topology"},"next":{"title":"Dashboard","permalink":"/en/nodejs/dashboard-intro"}}'),s=t("85893"),i=t("50065");let o={id:"agent-manage",title:"Management",description:"It explains how to update or delete the Node.js agent.",keywords:["Node.js","Management","Close Pending","Update"],isTranslationMissing:!1},d=void 0,r={},l=[{value:"Agent Update",id:"agent-update",level:2},{value:"Deleting (stopping) the agent",id:"deleting-stopping-the-agent",level:2}];function c(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(n.h2,{id:"agent-update",children:"Agent Update"}),(0,s.jsxs)(n.p,{children:["It stops the application and updates it by using ",(0,s.jsx)(n.code,{children:"npm"}),". After an update, restart the application."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title='SH'",children:"$ npm update whatap\n"})}),(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"To download a specific version, specify the version as follows:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title='SH'",children:"$ npm install whatap@{version}\n"})})]})]}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(n.h2,{id:"deleting-stopping-the-agent",children:"Deleting (stopping) the agent"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Delete the agent code inserted into your source (e.g. app.js)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:"title='app.js'",children:"var whatap=require('whatap').NodeAgent; // deletion\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Stop the application and update the module by using ",(0,s.jsx)(n.code,{children:"npm"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title='SH'",children:"$ npm uninstall whatap\n"})}),"\n"]}),"\n"]})]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var a=t(67294);let s={},i=a.createContext(s);function o(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);