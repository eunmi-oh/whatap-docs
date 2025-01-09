"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["5739"],{51786:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>j,assets:()=>c,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"release-notes/java/java-2_2_15","title":"Java Agent v2.2.15","description":"2023\uB144 8\uC6D4 31\uC77C","source":"@site/docs/release-notes/java/java-2.2.15.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_15","permalink":"/whatap-docs/release-notes/java/java-2_2_15","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.15.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_15","title":"Java Agent v2.2.15","toc_max_heading_level":2,"pagination_next":"release-notes/java/java-2_2_14","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"Java Agent v2.2.14","permalink":"/whatap-docs/release-notes/java/java-2_2_14"}}'),s=a("85893"),r=a("50065");let i={id:"java-2_2_15",title:"Java Agent v2.2.15",toc_max_heading_level:2,pagination_next:"release-notes/java/java-2_2_14",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},l=void 0,c={},d=[];function o(e){let n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Link:a,Status:t}=n;return!a&&x("Link",!0),!t&&x("Status",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"2023\uB144 8\uC6D4 31\uC77C"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{children:"Feature"})," kafka-clients-2.4.0 \uCD94\uC801"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"weaving=kafka-clients-2.4.0\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{children:"Feature"})," \uD2B9\uC815 \uC5D0\uB7EC \uCF54\uB4DC\uB97C \uAC00\uC9C4 ",(0,s.jsx)("code",{children:"java.sql.SQLException"})," \uBB34\uC2DC \uAE30\uB2A5 \uCD94\uAC00"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# example\nignore_sql_error_code_set=22001,2009\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{children:"Feature"})," \uD2B8\uB79C\uC7AD\uC158\uC5D0\uC11C \uC5D0\uB7EC \uC2A4\uD0DD \uD45C\uC2DC \uAE30\uB2A5 \uCD94\uAC00: \uD2B8\uB79C\uC7AD\uC158\uC5D0\uC11C \uC5EC\uB7EC \uAC1C\uC758 \uC5D0\uB7EC \uBC1C\uC0DD \uC2DC \uCCAB\uBC88\uC9F8 \uC5D0\uB7EC\uC758 \uC2A4\uD0DD \uD45C\uC2DC"]}),"\n",(0,s.jsx)(n.p,{children:"\uD2B8\uB79C\uC7AD\uC158 \uC5D0\uB7EC \uC2A4\uD0DD\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uB2E4\uC74C \uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC138\uC694."}),"\n",(0,s.jsx)(a,{to:"../../java/agent-transaction-error-stack",target:"_blank",className:"ext-link",children:"\uD2B8\uB79C\uC7AD\uC158 \uC5D0\uB7EC \uC2A4\uD0DD"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{children:"Changed"})," ",(0,s.jsx)("code",{children:"java.sql.SQLException"})," \uBC1C\uC0DD \uC2DC \uC5D0\uB7EC \uCF54\uB4DC \uD45C\uC2DC \uAE30\uBCF8\uAC12\uC744 ",(0,s.jsx)("code",{children:"true"}),"\uB85C \uC218\uC815"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# default\ntrace_sql_errorcode_enabled=true\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{children:"Changed"})," \uC0AC\uC6A9\uC790 \uC815\uC758 exception\uC744 \uC6B0\uC120\uD558\uB3C4\uB85D ",(0,s.jsx)("code",{children:"trace_exception_overwrite_enabled"})," \uAE30\uBCF8\uAC12\uC744 ",(0,s.jsx)("code",{children:"true"}),"\uB85C \uC218\uC815"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# default\ntrace_exception_overwrite_enabled=true\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{children:"Changed"})," ",(0,s.jsx)("code",{children:"java.util.Date"})," \uD0C0\uC785\uC758 SQL \uD30C\uB77C\uBBF8\uD130 \uB370\uC774\uD130 \uC218\uC9D1"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{children:"Fixed"})," Java \uC5D0\uC774\uC804\uD2B8\uC758 logsink \uAE30\uB2A5 \uC0AC\uC6A9 \uC2DC \uB85C\uADF8\uAC00 ",(0,s.jsx)("code",{children:"null"}),"\uC778 \uACBD\uC6B0\uC5D0 \uB300\uD55C \uCC98\uB9AC \uCD94\uAC00"]}),"\n"]}),"\n"]})]})}function j(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}function x(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return i}});var t=a(67294);let s={},r=t.createContext(s);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);