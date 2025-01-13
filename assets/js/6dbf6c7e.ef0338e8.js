"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["55987"],{5158:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>d,default:()=>p,assets:()=>a,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"release-notes/php/php-2_8_0","title":"PHP Agent v2.8.0","description":"2024\uB144 06\uC6D4 19\uC77C","source":"@site/docs/release-notes/php/php-2.8.0.mdx","sourceDirName":"release-notes/php","slug":"/release-notes/php/php-2_8_0","permalink":"/whatap-docs/release-notes/php/php-2_8_0","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/php/php-2.8.0.mdx","tags":[],"version":"current","frontMatter":{"id":"php-2_8_0","title":"PHP Agent v2.8.0","toc_max_heading_level":2,"pagination_next":"release-notes/php/php-2_7_2","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"PHP Agent v2.8.1","permalink":"/whatap-docs/release-notes/php/php-2_8_1"},"next":{"title":"PHP Agent v2.7.2","permalink":"/whatap-docs/release-notes/php/php-2_7_2"}}'),s=n("85893"),i=n("50065");let l={id:"php-2_8_0",title:"PHP Agent v2.8.0",toc_max_heading_level:2,pagination_next:"release-notes/php/php-2_7_2",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},d=void 0,a={},c=[];function h(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Status:n}=t;return!n&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"2024\uB144 06\uC6D4 19\uC77C"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(n,{children:"New"})," linux aarch64 \uC9C0\uC6D0"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(n,{children:"Changed"})," \uAE30\uC874 ",(0,s.jsx)(t.em,{children:"paramkey.txt"})," \uB300\uC2E0 ",(0,s.jsx)(t.em,{children:"security.conf"})," \uD30C\uC77C \uC0AC\uC6A9"]}),"\n",(0,s.jsxs)(t.p,{children:["\uAE30\uC874 ",(0,s.jsx)(t.em,{children:"security.conf"})," \uD30C\uC77C\uC758 ",(0,s.jsx)(t.code,{children:"paramkey"})," \uD0A4\uC758 \uAC12\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uAE30\uBCF8\uAC12\uC740 \uBB34\uC791\uC704\uAC12\uC774 \uC544\uB2CC ",(0,s.jsx)(t.code,{children:"WHATAP"}),"\uC73C\uB85C \uC9C0\uC815\uB3C4\uB85D \uBCC0\uACBD\uD569\uB2C8\uB2E4. ",(0,s.jsx)(t.code,{children:"WHATAP"})," \uC9C0\uC815\uB418\uBA74 \uD0A4 \uC785\uB825\uC5C6\uC774 \uBCF5\uD638\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(n,{children:"Changed"})," SQL \uBB38\uC7A5\uC758 \uC815\uADDC\uD654 \uC635\uC158 \uC124\uC815 \uBCC0\uACBD"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["SQL \uBB38\uC7A5\uC5D0\uC11C \uD30C\uB77C\uBBF8\uD130\uB97C \uBD84\uB9AC\uD558\uC5EC \uC815\uADDC\uD654\uD558\uB294 \uAE30\uB2A5\uC744 \uD56D\uC0C1 \uD65C\uC131\uD654\uD558\uC138\uC694. ",(0,s.jsx)(t.code,{children:"whatap.trace_sql_normalize_enabled"})," \uC635\uC158\uC744 \uD56D\uC0C1 ",(0,s.jsx)(t.code,{children:"true"}),"\uB85C \uC124\uC815\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"\uC774\uBBF8 \uC815\uADDC\uD654 \uC635\uC158\uC744 \uBE44\uD65C\uC131\uD654(\uC815\uADDC\uD654 \uC911\uC9C0 \uC124\uC815)\uD55C \uC0C1\uD0DC\uB77C\uBA74, \uC815\uADDC\uD654\uD574\uC11C \uD30C\uB77C\uBBF8\uD130\uB97C \uBCC4\uB3C4 \uD45C\uAE30\uD558\uB294 \uC124\uC815\uC744 \uD65C\uC131\uD654\uD558\uC138\uC694."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"whatap.profile_sql_param_enabled"})," \uC635\uC158\uC744 ",(0,s.jsx)(t.code,{children:"true"}),"\uB85C \uC124\uC815\uD558\uC138\uC694."]}),"\n",(0,s.jsx)(t.li,{children:"\uC815\uADDC\uD654\uB41C \uD30C\uB77C\uBBF8\uD130\uB97C \uBCC4\uB3C4 \uC554\uD638\uD654\uD558\uC5EC \uC218\uC9D1\uD569\uB2C8\uB2E4."}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"security.conf"}),"\uC758 ",(0,s.jsx)(t.code,{children:"paramkey"}),"\uB85C \uBCF5\uD638\uD654\uD558\uC5EC \uB370\uC774\uD130\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\uB2E4\uC6B4\uB85C\uB4DC"})}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"OS"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\uD30C\uC77C \uD615\uC2DD"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\uC544\uD0A4\uD14D\uCC98"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\uB2E4\uC6B4\uB85C\uB4DC"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{rowSpan:"2",children:"Red Hat / CentOS / Amazon linux"}),(0,s.jsx)(t.td,{rowSpan:"2",style:{textAlign:"center"},children:"RPM"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"x86 x64"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://repo.whatap.io/centos/6/x86_64/whatap-php-2.8-0.x86_64.rpm",children:"\uB2E4\uC6B4\uB85C\uB4DC"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"aarch64"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://repo.whatap.io/centos/7/aarch64/whatap-php-2.8-0.aarch64.rpm",children:"\uB2E4\uC6B4\uB85C\uB4DC"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{rowSpan:"2",children:"Ubuntu 12 and above / Debian"}),(0,s.jsx)(t.td,{rowSpan:"2",style:{textAlign:"center"},children:"DEB"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"amd64"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://repo.whatap.io/debian/unstable/whatap-php_2.8.0_amd64.deb",children:"\uB2E4\uC6B4\uB85C\uB4DC"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"arm64"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://repo.whatap.io/debian/unstable/whatap-php_2.8.0_arm64.deb",children:"\uB2E4\uC6B4\uB85C\uB4DC"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{rowSpan:"2",children:"Alpine linux"}),(0,s.jsx)(t.td,{rowSpan:"2",style:{textAlign:"center"},children:"tar gzip"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"x86 x64"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://repo.whatap.io/alpine/x86_64/whatap-php-2.8.0.tar.gz",children:"\uB2E4\uC6B4\uB85C\uB4DC"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"aarch64"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://repo.whatap.io/alpine/aarch64/whatap-php-2.8.0.tar.gz",children:"\uB2E4\uC6B4\uB85C\uB4DC"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Freebsd 10 and above"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"TXZ"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"x86 x64"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://repo.whatap.io/freebsd/10/whatap-php-2.8.0.txz",children:"\uB2E4\uC6B4\uB85C\uB4DC"})})]})]})]})]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var r=n(67294);let s={},i=r.createContext(s);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);