"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["72580"],{68109:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>a,default:()=>g,assets:()=>o,toc:()=>d,frontMatter:()=>i});var l=JSON.parse('{"id":"release-notes/golang/golang-0_3_2","title":"Go Agent v0.3.2","description":"2024\u5E7403\u670806\u65E5","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/golang/golang-0.3.2.mdx","sourceDirName":"release-notes/golang","slug":"/release-notes/golang/golang-0_3_2","permalink":"/ja/release-notes/golang/golang-0_3_2","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/golang/golang-0.3.2.mdx","tags":[],"version":"current","frontMatter":{"id":"golang-0_3_2","title":"Go Agent v0.3.2","toc_max_heading_level":2,"pagination_next":"release-notes/golang/golang-0_3_1","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Go Agent v0.3.3","permalink":"/ja/release-notes/golang/golang-0_3_3"},"next":{"title":"Go Agent v0.3.1","permalink":"/ja/release-notes/golang/golang-0_3_1"}}'),s=t("85893"),r=t("50065");let i={id:"golang-0_3_2",title:"Go Agent v0.3.2",toc_max_heading_level:2,pagination_next:"release-notes/golang/golang-0_3_1",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},a=void 0,o={},d=[];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{Status:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"2024\u5E7403\u670806\u65E5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{children:"Changed"}),"\u30ED\u30B0\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u30D5\u30A1\u30A4\u30EB\u540D\u306B\u65E5\u4ED8\u5F62\u5F0F\u306E\u5909\u6570\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u4FEE\u6B63"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Python ",(0,s.jsx)(n.code,{children:"strftime()"}),"\u4F7F\u7528\u3092\u57FA\u6E96\u306B\u4FEE\u6B63\u3057\u307E\u3059\u3002 \u4F8B\u300120240101: %Y%m%d"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t,{children:"Fixed"})," gRPC\u30D8\u30C3\u30C0\u30FC\u53CE\u96C6\u30A8\u30E9\u30FC\u3092\u4FEE\u6B63"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"go-api(import library)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/whatap/go-api@latest\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u30B5\u30FC\u30D3\u30B9\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"OS\u540D"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Red Hat / CentOS / Amazon linux"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"x86 x64"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"RPM"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.a,{href:"https://repo.whatap.io/centos/6/x86_64/whatap-agent-0.3-2.x86_64.rpm",children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Ubuntu 12 and above / Debian"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"amd64"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"DEB"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.a,{href:"https://repo.whatap.io/debian/unstable/whatap-agent_0.3.2_amd64.deb",children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Alpine linux"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"x86 x64"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"tar gzip"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.a,{href:"https://repo.whatap.io/alpine/x86_64/whatap-agent-0.3.2.tar.gz",children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})})]})]})]}),"\n"]}),"\n"]})]})]})}function g(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var l=t(67294);let s={},r=l.createContext(s);function i(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);