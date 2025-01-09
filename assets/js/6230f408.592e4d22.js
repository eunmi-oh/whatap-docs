"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["55800"],{89980:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>j,assets:()=>c,toc:()=>o,frontMatter:()=>r});var t=JSON.parse('{"id":"release-notes/java/java-2_2_16","title":"Java Agent v2.2.16","description":"2023\uB144 9\uC6D4 8\uC77C","source":"@site/docs/release-notes/java/java-2.2.16.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_16","permalink":"/whatap-docs/release-notes/java/java-2_2_16","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.16.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_16","title":"Java Agent v2.2.16","toc_max_heading_level":2,"pagination_next":"release-notes/java/java-2_2_15","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"Java Agent v2.2.15","permalink":"/whatap-docs/release-notes/java/java-2_2_15"}}'),s=a("85893"),i=a("50065");let r={id:"java-2_2_16",title:"Java Agent v2.2.16",toc_max_heading_level:2,pagination_next:"release-notes/java/java-2_2_15",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},l=void 0,c={},o=[];function d(e){let n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Status:a}=n;return!a&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"2023\uB144 9\uC6D4 8\uC77C"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(a,{children:"Feature"})," Java 20 \uC9C0\uC6D0 (\uC790\uBC14 \uC635\uC158 \uD544\uC694)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--add-opens=java.base/java.lang=ALL-UNNAMED\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(a,{children:"Feature"})," Redis\uC758 Lettuce \uB4DC\uB77C\uC774\uBC84 \uCD94\uC801"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"weaving=lettuce-6.2\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(a,{children:"Feature"})," spring-boot-3.0 \uC124\uC815\uC5D0 Lettuce \uC124\uC815 \uD3EC\uD568"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"weaving=spring-boot-3.0\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(a,{children:"Changed"})," ",(0,s.jsx)("code",{children:"oracle.jdbc.driver.OraclePreparedStatement"})," \uCD94\uC801 \uC81C\uC678\uD558\uB294 \uC635\uC158 \uCD94\uAC00"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# default\nhook_pstmt_oracle_enabled=true\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(a,{children:"Fixed"})," kafka-clients-2.4.0 \uCD94\uC801 \uC2DC \uBC1C\uC0DD\uD558\uB294 kafka \uD5E4\uB354 \uB85C\uADF8 \uC81C\uAC70"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(a,{children:"Fixed"})," okhttp-2.7, okhttp3-3.14, okhttp3-4.4 \uCD94\uC801 \uC2DC HTTP Call \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uC9C0 \uBABB\uD558\uB294 \uBB38\uC81C \uC218\uC815"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(a,{children:"Fixed"})," SQL \uD638\uCD9C \uC2DC \uBC1C\uC0DD\uD560 \uC218 \uC788\uB294 ",(0,s.jsx)("code",{children:"java.sql.Date"})," \uCC38\uC870 \uC5D0\uB7EC \uC218\uC815"]}),"\n"]}),"\n"]})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return r}});var t=a(67294);let s={},i=t.createContext(s);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);