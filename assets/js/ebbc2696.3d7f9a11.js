"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["83425"],{47304:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>p,assets:()=>a,toc:()=>l,frontMatter:()=>o});var t=JSON.parse('{"id":"release-notes/nodejs/nodejs-0_4_86","title":"Node.js Agent v0.4.86","description":"2024\uB144 01\uC6D4 04\uC77C","source":"@site/docs/release-notes/nodejs/nodejs-0.4.86.mdx","sourceDirName":"release-notes/nodejs","slug":"/release-notes/nodejs/nodejs-0_4_86","permalink":"/whatap-docs/release-notes/nodejs/nodejs-0_4_86","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/nodejs/nodejs-0.4.86.mdx","tags":[],"version":"current","frontMatter":{"id":"nodejs-0_4_86","title":"Node.js Agent v0.4.86","toc_max_heading_level":2,"pagination_next":"release-notes/nodejs/nodejs-0_4_83","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"Node.js Agent v0.4.83","permalink":"/whatap-docs/release-notes/nodejs/nodejs-0_4_83"}}'),r=s("85893"),i=s("50065");let o={id:"nodejs-0_4_86",title:"Node.js Agent v0.4.86",toc_max_heading_level:2,pagination_next:"release-notes/nodejs/nodejs-0_4_83",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},d=void 0,a={},l=[];function c(e){let n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Status:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"2024\uB144 01\uC6D4 04\uC77C"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{children:"Feature"})," \uC5D0\uC774\uC804\uD2B8 \uC635\uC158 \uCD94\uAC00"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"httpc_status_ignore"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"Empty"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uBB34\uC2DC\uD560 ",(0,r.jsx)(n.code,{children:"HTTPC_ERROR"})," \uCF54\uB4DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. \uC5EC\uB7EC \uAC12\uC744 \uB300\uC0C1\uC73C\uB85C \uD560 \uACBD\uC6B0 \uC27C\uD45C(,)\uB97C \uAD6C\uBD84\uC790\uB85C \uC0AC\uC6A9\uD558\uC138\uC694."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"httpc_status_ignore=404,500\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"httpc_status_ignore_set"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"Empty"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"whatap.error.HTTPC_ERROR"}),"\uB97C \uBB34\uC2DC\uD569\uB2C8\uB2E4. \uC5EC\uB7EC \uAC12\uC744 \uB300\uC0C1\uC73C\uB85C \uD560 \uACBD\uC6B0 \uC27C\uD45C(,)\uB97C \uAD6C\uBD84\uC790\uB85C \uC774\uC6A9\uD558\uC138\uC694."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"httpc_status_ignore_set=/a/b/c:400,/a/ab/c:404"}),"\uC640 \uAC19\uC774 \uC124\uC815\uD558\uC138\uC694. \uC774\uB54C url\uC740 \uD1B5\uACC4/\uC5D0\uB7EC \uBD84\uC11D\uC5D0\uC11C ",(0,r.jsx)(n.code,{children:"HTTPC_URL"})," \uAC12\uC744 \uC785\uB825\uD569\uB2C8\uB2E4."]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{children:"Fixed"})," MariaDB \uBAA8\uB2C8\uD130\uB9C1 \uC548 \uB418\uB294 \uBB38\uC81C \uC218\uC815"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{children:"Fixed"})," SQL(MySQL, SQL Server) \uCEE4\uB125\uC158 \uC815\uBCF4 \uCD9C\uB825 \uC624\uB958 \uC218\uC815"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\uD328\uD0A4\uC9C0 \uC815\uBCF4: ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/whatap",children:"https://www.npmjs.com/package/whatap"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uC124\uCE58 \uBC0F \uC801\uC6A9 \uBC29\uBC95"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i whatap\n"})}),"\n"]}),"\n"]})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var t=s(67294);let r={},i=t.createContext(r);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);