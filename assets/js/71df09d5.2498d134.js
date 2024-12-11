"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["25320"],{58088:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>t});var r=JSON.parse('{"id":"server/agent-remove","title":"\uC5D0\uC774\uC804\uD2B8 \uC0AD\uC81C","description":"\uC11C\uBC84 \uC5D0\uC774\uC804\uD2B8 \uC0AD\uC81C \uBC29\uBC95\uC5D0 \uB300\uD574 \uC548\uB0B4\uD569\uB2C8\uB2E4.","source":"@site/docs/server/agent-remove.mdx","sourceDirName":"server","slug":"/server/agent-remove","permalink":"/whatap-docs/server/agent-remove","draft":false,"unlisted":false,"editUrl":"undefined/docs/server/agent-remove.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-remove","title":"\uC5D0\uC774\uC804\uD2B8 \uC0AD\uC81C","description":"\uC11C\uBC84 \uC5D0\uC774\uC804\uD2B8 \uC0AD\uC81C \uBC29\uBC95\uC5D0 \uB300\uD574 \uC548\uB0B4\uD569\uB2C8\uB2E4.","keywords":["Server","\uC0AD\uC81C","\uAD00\uB9AC\uD558\uAE30"],"isTranslationMissing":false},"sidebar":"serverSidebar","previous":{"title":"\uC5D0\uC774\uC804\uD2B8 \uC5C5\uB370\uC774\uD2B8","permalink":"/whatap-docs/server/agent-update"},"next":{"title":"UI \uC0AC\uC6A9 \uC548\uB0B4","permalink":"/whatap-docs/server/usage-ui"}}'),i=s("85893"),a=s("50065");let t={id:"agent-remove",title:"\uC5D0\uC774\uC804\uD2B8 \uC0AD\uC81C",description:"\uC11C\uBC84 \uC5D0\uC774\uC804\uD2B8 \uC0AD\uC81C \uBC29\uBC95\uC5D0 \uB300\uD574 \uC548\uB0B4\uD569\uB2C8\uB2E4.",keywords:["Server","\uC0AD\uC81C","\uAD00\uB9AC\uD558\uAE30"],isTranslationMissing:!1},l=void 0,c={},o=[{value:"Linux",id:"linux",level:3},{value:"Unix",id:"unix",level:3},{value:"Windows",id:"windows",level:3}];function d(e){let n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"linux",children:"Linux"}),(0,i.jsx)(n.p,{children:"\uC124\uCE58\uB41C \uC5D0\uC774\uC804\uD2B8\uB97C \uC0AD\uC81C\uD558\uB824\uBA74 \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC2E4\uD589\uD558\uC138\uC694."}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Debian / Ubuntu"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"title=SH",children:"sudo apt-get remove whatap-infra\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CentOS / Amazon Linux / SUSE"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"title=SH",children:"sudo yum remove whatap-infra\n"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"unix",children:"Unix"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"FreeBSD"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"title=SH",children:"pkg delete whatap-infra\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"AIX"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"stopsrc -s whatap-infra\nrpm -e whatap-infra\nrm -rf /usr/whatap/infra\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Oracle Solaris"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pkgrm whatap-infra\nrm -rf /usr/whatap/infra\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"HP-UX"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"title='IA64 / PA-RISC'",children:"swremove whatap-infra\n"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"windows",children:"Windows"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\uC11C\uBC84 \uBAA8\uB2C8\uD130\uB9C1 \uC5D0\uC774\uC804\uD2B8 \uC0AD\uC81C \uBA85\uB839\uC744 \uAD00\uB9AC\uC790 \uAD8C\uD55C\uC758 command \uCC3D\uC5D0\uC11C \uC2E4\uD589\uD569\uB2C8\uB2E4.","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"title=SH",children:'"C:\\Program Files\\WhatapInfra\\unins000.exe"\n'})}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\uC81C\uC5B4\uD310\uC758 \uD504\uB85C\uADF8\uB7A8 \uC0AD\uC81C \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var r=s(67294);let i={},a=r.createContext(i);function t(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);