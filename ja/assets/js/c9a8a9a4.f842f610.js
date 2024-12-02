"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["34301"],{51362:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>t});var s=JSON.parse('{"id":"server/agent-remove","title":"\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u524A\u9664","description":"\u30B5\u30FC\u30D0\u30FC\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u524A\u9664\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/server/agent-remove.mdx","sourceDirName":"server","slug":"/server/agent-remove","permalink":"/ja/server/agent-remove","draft":false,"unlisted":false,"editUrl":"undefined/docs/server/agent-remove.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-remove","title":"\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u524A\u9664","description":"\u30B5\u30FC\u30D0\u30FC\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u524A\u9664\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002","keywords":["Server","\u524A\u9664","\u7BA1\u7406"],"isTranslationMissing":false},"sidebar":"serverSidebar","previous":{"title":"\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8","permalink":"/ja/server/agent-update"},"next":{"title":"\u30EA\u30BD\u30FC\u30B9\u30DC\u30FC\u30C9","permalink":"/ja/server/resourceboard"}}'),i=r("85893"),a=r("50065");let t={id:"agent-remove",title:"\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u524A\u9664",description:"\u30B5\u30FC\u30D0\u30FC\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u524A\u9664\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002",keywords:["Server","\u524A\u9664","\u7BA1\u7406"],isTranslationMissing:!1},l=void 0,c={},o=[{value:"Linux",id:"linux",level:3},{value:"Unix",id:"unix",level:3},{value:"Windows",id:"windows",level:3}];function d(e){let n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"linux",children:"Linux"}),(0,i.jsx)(n.p,{children:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3092\u524A\u9664\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Debian / Ubuntu"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"title=SH",children:"sudo apt-get remove whatap-infra\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CentOS / Amazon Linux / SUSE"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"title=SH",children:"sudo yum remove whatap-infra\n"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"unix",children:"Unix"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"FreeBSD"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"title=SH",children:"pkg delete whatap-infra\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"AIX"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"stopsrc -s whatap-infra\nrpm -e whatap-infra\nrm -rf /usr/whatap/infra\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Oracle Solaris"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pkgrm whatap-infra\nrm -rf /usr/whatap/infra\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"HP-UX"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"title='IA64 / PA-RISC'",children:"swremove whatap-infra\n"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"windows",children:"Windows"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u30B5\u30FC\u30D0\u30FC\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u524A\u9664\u30B3\u30DE\u30F3\u30C9\u3092\u7BA1\u7406\u8005\u6A29\u9650\u306Ecommand\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u5B9F\u884C\u3057\u307E\u3059\u3002","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"title=SH",children:'"C:\\Program Files\\WhatapInfra\\unins000.exe"\n'})}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u30D1\u30CD\u30EB\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u524A\u9664\u6A5F\u80FD\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n"]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return t}});var s=r(67294);let i={},a=s.createContext(i);function t(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);