"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["40686"],{3026:function(e,n,t){t.d(n,{ZP:function(){return o},d$:function(){return i}});var a=t(85893),r=t(50065);let i=[];function s(e){let n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Link:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Link",!0),(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Download"}),": ",(0,a.jsxs)(t,{to:`https://repo.whatap.io/maven/io/whatap/whatap.agent/${e.ver}/whatap.agent-${e.ver}.jar`,children:["Java Agent v",e.ver]})]}),(0,a.jsxs)(n.p,{children:["To install the Java agent for the first time, install the package first using the following command. For more information about agent installation, see ",(0,a.jsx)(n.a,{href:"../../java/install-agent",children:"the following"}),"."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget https://api.whatap.io/agent/whatap.agent.java.tar.gz\n"})})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},41861:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>o});var a=JSON.parse('{"id":"release-notes/java/java-2_2_27","title":"Java Agent v2.2.27","description":"February 6, 2024","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/java/java-2.2.27.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_27","permalink":"/en/release-notes/java/java-2_2_27","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.27.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_27","title":"Java Agent v2.2.27","toc_max_heading_level":2,"pagination_next":"release-notes/java/java-2_2_26","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"Java Agent v2.2.26","permalink":"/en/release-notes/java/java-2_2_26"}}'),r=t("85893"),i=t("50065"),s=t("3026");let o={id:"java-2_2_27",title:"Java Agent v2.2.27",toc_max_heading_level:2,pagination_next:"release-notes/java/java-2_2_26",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},l=void 0,c={},d=[...s.d$];function p(e){let n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Status:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"February 6, 2024"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{children:"Feature"})," Expanded the mule-3.9.5 tracing range."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:'title="whatap.conf"',children:"# requires agent restart\nweaving=mule-3.9.5\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{children:"Feature"})," camel-cxf-3.15 tracing"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:'title="whatap.conf"',children:"# requires agent restart\nweaving=camel-cxf-3.15\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{children:"Feature"})," Added the ",(0,r.jsx)("code",{children:"OracleCallableStatement"})," tracing."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{children:"Deprecated"})," Redis key collection is stopped when using the Lettuce driver."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{children:"Fixed"})," Separated querystring from the request URL when using netty in spring-boot."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{children:"Fixed"})," Fixed the issue where the request HTTP parameters cannot be collected when using netty in spring-boot."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{children:"Fixed"})," Fixed the display error in the transaction count and error count."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{children:"Deprecate"})," Redis value collection is stopped when using the Lettuce driver."]}),"\n"]}),"\n"]}),"\n","\n",(0,r.jsx)(s.ZP,{ver:"2.2.27"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var a=t(67294);let r={},i=a.createContext(r);function s(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);