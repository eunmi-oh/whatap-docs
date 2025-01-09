"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["67753"],{65557:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"release-notes/golang/golang-0_4_1","title":"Go Agent v0.4.1","description":"2024\uB144 08\uC6D4 28\uC77C","source":"@site/docs/release-notes/golang/golang-0.4.1.mdx","sourceDirName":"release-notes/golang","slug":"/release-notes/golang/golang-0_4_1","permalink":"/whatap-docs/release-notes/golang/golang-0_4_1","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/golang/golang-0.4.1.mdx","tags":[],"version":"current","frontMatter":{"id":"golang-0_4_1","title":"Go Agent v0.4.1","toc_max_heading_level":2,"pagination_next":"release-notes/golang/golang-0_4_0","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Go Agent v0.4.2","permalink":"/whatap-docs/release-notes/golang/golang-0_4_2"},"next":{"title":"Go Agent v0.4.0","permalink":"/whatap-docs/release-notes/golang/golang-0_4_0"}}'),r=t("85893"),i=t("50065");let l={id:"golang-0_4_1",title:"Go Agent v0.4.1",toc_max_heading_level:2,pagination_next:"release-notes/golang/golang-0_4_0",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},a=void 0,d={},c=[];function o(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Status:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"2024\uB144 08\uC6D4 28\uC77C"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{priority:"1",children:"New"})," Standard output \uB85C\uADF8 \uC218\uC9D1 \uAE30\uB2A5 \uCD94\uAC00"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:'title="whatap.conf"',children:"logsink_enabled=true\nlogsink_stdout_enabled=true\nlogsink_zip_enabled=true # optional\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"logsink_zip_enabled"})," \uC635\uC158\uC744 \uC801\uC6A9\uD558\uBA74 \uB85C\uADF8 \uB370\uC774\uD130\uB97C \uC801\uB2F9\uB7C9\uC73C\uB85C \uBAA8\uC544\uC11C \uC555\uCD95 \uC804\uC1A1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{priority:"1",children:"New"})," \uC5D0\uC774\uC804\uD2B8 \uC124\uC815 \uD30C\uC77C(",(0,r.jsx)(n.em,{children:"whatap.conf"}),")\uBCF4\uB2E4 \uD658\uACBD \uBCC0\uC218\uB97C \uC6B0\uC120 \uCC98\uB9AC\uD558\uB294 \uC635\uC158 \uCD94\uAC00"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\uAE30\uC874 \uC5D0\uC774\uC804\uD2B8 \uC124\uC815\uC740 ",(0,r.jsx)(n.em,{children:"whatap.conf"}),", \uD658\uACBD \uBCC0\uC218 \uC21C\uC11C\uB85C \uC801\uC6A9\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"use_env_first"})," (\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"false"}),") \uC635\uC158\uC744 \uC124\uC815\uD558\uBA74 ",(0,r.jsx)(n.em,{children:"whatap.conf"})," \uD30C\uC77C\uC758 \uC124\uC815\uBCF4\uB2E4 \uD658\uACBD \uBCC0\uC218\uB97C \uC6B0\uC120 \uC801\uC6A9\uD569\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:'title="whatap.conf"',children:"use_env_first=true\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"WHATAP_USE_ENV_FIRST=true"})," \uD615\uC2DD\uC73C\uB85C \uD658\uACBD \uBCC0\uC218\uB97C \uC774\uC6A9\uD574 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{priority:"1",children:"Changed"})," \uB2E4\uC74C \uC5D0\uC774\uC804\uD2B8 \uC635\uC158\uC758 \uAE30\uBCF8\uAC12 \uC218\uC815"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"TCP read timeout \uC2DC\uAC04\uC744 30\uCD08\uC5D0\uC11C 120\uCD08\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:'title="whatap.conf"',children:"net_so_time=120000\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"TCP write buffer \uAC12\uC744 8Mb\uC5D0\uC11C 2Mb\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:'title="whatap.conf"',children:"net_write_buffer_size=2*1024*1024\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{priority:"0",children:"Fixed"})," ",(0,r.jsx)(n.code,{children:"OKIND"})," \uD658\uACBD \uBCC0\uC218 \uC778\uC2DD \uC624\uB958 \uC218\uC815"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"OKIND"})," \uB610\uB294 ",(0,r.jsx)(n.code,{children:"WHATAP_OKIND"})," \uD658\uACBD \uBCC0\uC218\uB85C ",(0,r.jsx)(n.code,{children:"okind"}),"\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uB2E4\uC6B4\uB85C\uB4DC"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"go-api(import library)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go get github.com/whatap/go-api@latest\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uC11C\uBE44\uC2A4 \uC5D0\uC774\uC804\uD2B8"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"OS"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"\uD30C\uC77C \uD615\uC2DD"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"\uC544\uD0A4\uD14D\uCC98"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"\uB2E4\uC6B4\uB85C\uB4DC"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{rowSpan:"2",children:"Red Hat / CentOS / Amazon linux"}),(0,r.jsx)(n.td,{rowSpan:"2",style:{textAlign:"center"},children:"RPM"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"x86 x64"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.a,{href:"https://repo.whatap.io/centos/6/x86_64/whatap-agent-0.4-1.x86_64.rpm",children:"\uB2E4\uC6B4\uB85C\uB4DC"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"aarch64"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.a,{href:"https://repo.whatap.io/centos/7/aarch64/whatap-agent-0.4-1.aarch64.rpm",children:"\uB2E4\uC6B4\uB85C\uB4DC"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{rowSpan:"2",children:"Ubuntu 12 and above / Debian"}),(0,r.jsx)(n.td,{rowSpan:"2",style:{textAlign:"center"},children:"DEB"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"amd64"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.a,{href:"https://repo.whatap.io/debian/unstable/whatap-agent_0.4.1_amd64.deb",children:"\uB2E4\uC6B4\uB85C\uB4DC"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"arm64"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.a,{href:"https://repo.whatap.io/debian/unstable/whatap-agent_0.4.1_arm64.deb",children:"\uB2E4\uC6B4\uB85C\uB4DC"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{rowSpan:"2",children:"Alpine linux"}),(0,r.jsx)(n.td,{rowSpan:"2",style:{textAlign:"center"},children:"tar gzip"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"x86 x64"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.a,{href:"https://repo.whatap.io/alpine/x86_64/whatap-agent-0.4.1.tar.gz",children:"\uB2E4\uC6B4\uB85C\uB4DC"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"aarch64"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.a,{href:"https://repo.whatap.io/alpine/aarch64/whatap-agent-0.4.1.tar.gz",children:"\uB2E4\uC6B4\uB85C\uB4DC"})})]})]})]}),"\n"]}),"\n"]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(67294);let r={},i=s.createContext(r);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);