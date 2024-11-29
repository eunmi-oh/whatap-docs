"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["13876"],{73130:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>c,assets:()=>d,toc:()=>h,frontMatter:()=>l});var r=JSON.parse('{"id":"release-notes/php/php-2_8_2","title":"PHP Agent v2.8.2","description":"September 11, 2024","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/php/php-2.8.2.mdx","sourceDirName":"release-notes/php","slug":"/release-notes/php/php-2_8_2","permalink":"/en/release-notes/php/php-2_8_2","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/php/php-2.8.2.mdx","tags":[],"version":"current","frontMatter":{"id":"php-2_8_2","title":"PHP Agent v2.8.2","toc_max_heading_level":2,"pagination_next":"release-notes/php/php-2_8_1","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"PHP Agent Release Notes","permalink":"/en/release-notes/php/"},"next":{"title":"PHP Agent v2.8.1","permalink":"/en/release-notes/php/php-2_8_1"}}'),i=n("85893"),s=n("50065");let l={id:"php-2_8_2",title:"PHP Agent v2.8.2",toc_max_heading_level:2,pagination_next:"release-notes/php/php-2_8_1",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},a=void 0,d={},h=[];function o(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Status:n}=t;return!n&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"September 11, 2024"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(n,{priority:"1",children:"New"})," Added the option to prioritize environment variables over the agent configuration file (",(0,i.jsx)(t.em,{children:"whatap.ini"}),")."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Agent settings are applied in the order of ",(0,i.jsx)(t.em,{children:"whatap.ini"})," and then ",(0,i.jsx)(t.strong,{children:"environment variables"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["When the ",(0,i.jsx)(t.code,{children:"whatap.use_env_first"})," option (default value: ",(0,i.jsx)(t.code,{children:"false"}),") is set, environment variables take precedence over the settings in the ",(0,i.jsx)(t.em,{children:"whatap.ini"})," file."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ini",metastring:'title="whatap.ini"',children:"whatap.use_env_first=true\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Alternatively, you can set the environment variable as ",(0,i.jsx)(t.code,{children:"WHATAP_USE_ENV_FIRST=true"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(n,{priority:"0",children:"Fixed"})," Fixed the recognition error for the ",(0,i.jsx)(t.code,{children:"OKIND"})," environment variable."]}),"\n",(0,i.jsxs)(t.p,{children:["You can set ",(0,i.jsx)(t.code,{children:"okind"})," by using the ",(0,i.jsx)(t.code,{children:"OKIND"})," or ",(0,i.jsx)(t.code,{children:"WHATAP_OKIND"})," environment variable."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Download"})}),(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"OS Name"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"File format"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Architecture"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Download"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{rowSpan:"2",children:"Red Hat / CentOS / Amazon linux"}),(0,i.jsx)(t.td,{rowSpan:"2",style:{textAlign:"center"},children:"RPM"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x86 x64"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://repo.whatap.io/centos/6/x86_64/whatap-php-2.8-2.x86_64.rpm",children:"Download"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"aarch64"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://repo.whatap.io/centos/7/aarch64/whatap-php-2.8-2.aarch64.rpm",children:"Download"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{rowSpan:"2",children:"Ubuntu 12 and above / Debian"}),(0,i.jsx)(t.td,{rowSpan:"2",style:{textAlign:"center"},children:"DEB"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"amd64"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://repo.whatap.io/debian/unstable/whatap-php_2.8.2_amd64.deb",children:"Download"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"arm64"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://repo.whatap.io/debian/unstable/whatap-php_2.8.2_arm64.deb",children:"Download"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{rowSpan:"2",children:"Alpine linux"}),(0,i.jsx)(t.td,{rowSpan:"2",style:{textAlign:"center"},children:"tar gzip"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x86 x64"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://repo.whatap.io/alpine/x86_64/whatap-php-2.8.2.tar.gz",children:"Download"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"aarch64"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://repo.whatap.io/alpine/aarch64/whatap-php-2.8.2.tar.gz",children:"Download"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Freebsd 10 or later"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"TXZ"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x86 x64"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://repo.whatap.io/freebsd/10/whatap-php-2.8.2.txz",children:"Download"})})]})]})]})]})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var r=n(67294);let i={},s=r.createContext(i);function l(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);