"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["7631"],{87107:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>d,default:()=>p,assets:()=>a,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"release-notes/php/php-2_8_0","title":"PHP Agent v2.8.0","description":"2024\u5E7406\u670819\u65E5","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/php/php-2.8.0.mdx","sourceDirName":"release-notes/php","slug":"/release-notes/php/php-2_8_0","permalink":"/ja/release-notes/php/php-2_8_0","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/php/php-2.8.0.mdx","tags":[],"version":"current","frontMatter":{"id":"php-2_8_0","title":"PHP Agent v2.8.0","toc_max_heading_level":2,"pagination_next":"release-notes/php/php-2_7_2","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"PHP Agent v2.8.1","permalink":"/ja/release-notes/php/php-2_8_1"},"next":{"title":"PHP Agent v2.7.2","permalink":"/ja/release-notes/php/php-2_7_2"}}'),s=n("85893"),i=n("50065");let l={id:"php-2_8_0",title:"PHP Agent v2.8.0",toc_max_heading_level:2,pagination_next:"release-notes/php/php-2_7_2",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},d=void 0,a={},c=[];function h(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Status:n}=t;return!n&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"2024\u5E7406\u670819\u65E5"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(n,{children:"New"})," linux aarch64\u5BFE\u5FDC"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(n,{children:"Changed"}),"\u65E2\u5B58",(0,s.jsx)(t.em,{children:"paramkey.txt"}),"\u4EE3\u308F\u308A\u306B",(0,s.jsx)(t.em,{children:"security.conf"}),"\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u7528"]}),"\n",(0,s.jsxs)(t.p,{children:["\u65E2\u5B58",(0,s.jsx)(t.em,{children:"security.conf"}),"\u30D5\u30A1\u30A4\u30EB\u306E",(0,s.jsx)(t.code,{children:"paramkey"}),"\u30AD\u30FC\u5024\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306F\u3001\u30E9\u30F3\u30C0\u30E0\u5024\u3067\u306F\u306A\u304F",(0,s.jsx)(t.code,{children:"WHATAP"}),"\u306B\u6307\u5B9A\u3059\u308B\u3088\u3046\u306B\u5909\u66F4\u3057\u307E\u3059\u3002 ",(0,s.jsx)(t.code,{children:"WHATAP"}),"\u6307\u5B9A\u3055\u308C\u308B\u3068\u3001\u30AD\u30FC\u306E\u5165\u529B\u306A\u3057\u3067\u5FA9\u53F7\u5316\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(n,{children:"Changed"})," SQL\u6587\u7AE0\u306E\u6B63\u898F\u5316\u30AA\u30D7\u30B7\u30E7\u30F3\u8A2D\u5B9A\u306E\u5909\u66F4"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["SQL\u6587\u7AE0\u3067\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u5206\u96E2\u3057\u3066\u3001\u6B63\u898F\u5316\u3059\u308B\u6A5F\u80FD\u3092\u5E38\u306B\u6709\u52B9\u306B\u3057\u307E\u3059\u3002 ",(0,s.jsx)(t.code,{children:"whatap.trace_sql_normalize_enabled"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u5E38\u306B",(0,s.jsx)(t.code,{children:"true"}),"\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"\u65E2\u306B\u6B63\u898F\u5316\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u7121\u52B9\u306B(\u6B63\u898F\u5316\u306E\u4E2D\u6B62\u8A2D\u5B9A)\u3057\u305F\u72B6\u614B\u3067\u3042\u308C\u3070\u3001\u6B63\u898F\u5316\u3057\u3066\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u5225\u8868\u8A18\u3059\u308B\u8A2D\u5B9A\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"whatap.profile_sql_param_enabled"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092",(0,s.jsx)(t.code,{children:"true"}),"\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(t.li,{children:"\u6B63\u898F\u5316\u3055\u308C\u305F\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u3001\u5225\u306B\u6697\u53F7\u5316\u3057\u3066\u53CE\u96C6\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"security.conf"}),"\u306E",(0,s.jsx)(t.code,{children:"paramkey"}),"\u306B\u5FA9\u53F7\u5316\u3057\u3066\u30C7\u30FC\u30BF\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"OS\u540D"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{rowSpan:"2",children:"Red Hat / CentOS / Amazon linux"}),(0,s.jsx)(t.td,{rowSpan:"2",style:{textAlign:"center"},children:"RPM"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"x86 x64"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://repo.whatap.io/centos/6/x86_64/whatap-php-2.8-0.x86_64.rpm",children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"aarch64"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://repo.whatap.io/centos/7/aarch64/whatap-php-2.8-0.aarch64.rpm",children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{rowSpan:"2",children:"Ubuntu 12 and above / Debian"}),(0,s.jsx)(t.td,{rowSpan:"2",style:{textAlign:"center"},children:"DEB"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"amd64"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://repo.whatap.io/debian/unstable/whatap-php_2.8.0_amd64.deb",children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"arm64"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://repo.whatap.io/debian/unstable/whatap-php_2.8.0_arm64.deb",children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{rowSpan:"2",children:"Alpine linux"}),(0,s.jsx)(t.td,{rowSpan:"2",style:{textAlign:"center"},children:"tar gzip"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"x86 x64"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://repo.whatap.io/alpine/x86_64/whatap-php-2.8.0.tar.gz",children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"aarch64"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://repo.whatap.io/alpine/aarch64/whatap-php-2.8.0.tar.gz",children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Freebsd 10\u4EE5\u964D"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"TXZ"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"x86 x64"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://repo.whatap.io/freebsd/10/whatap-php-2.8.0.txz",children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})})]})]})]})]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var r=n(67294);let s={},i=r.createContext(s);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);