"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["93606"],{75701:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>j,assets:()=>c,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"release-notes/java/java-2_2_19","title":"Java Agent v2.2.19","description":"2023\uB144 10\uC6D4 10\uC77C","source":"@site/docs/release-notes/java/java-2.2.19.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_19","permalink":"/whatap-docs/release-notes/java/java-2_2_19","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.19.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_19","title":"Java Agent v2.2.19","toc_max_heading_level":2,"pagination_next":"release-notes/java/java-2_2_18","isTranslationMissing":false},"next":{"title":"Java Agent v2.2.18","permalink":"/whatap-docs/release-notes/java/java-2_2_18"}}'),t=a("85893"),r=a("50065");let i={id:"java-2_2_19",title:"Java Agent v2.2.19",toc_max_heading_level:2,pagination_next:"release-notes/java/java-2_2_18",isTranslationMissing:!1},l=void 0,c={},o=[];function d(e){let n={code:"code",em:"em",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Status:a}=n;return!a&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"2023\uB144 10\uC6D4 10\uC77C"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(a,{children:"Feature"})," quarkus-reactive-1.13 \uCD94\uC801"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"quarkus-resteasy-reactive-1.13.6.FINAL.jar"})," \uC774\uC0C1"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"weaving=quarkus-reactive-1.13\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(a,{children:"Feature"})," quarkus-reactive-2.10 \uCD94\uC801"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"quarkus-resteasy-reactive-2.10.0.FINAL.jar"})," \uC774\uC0C1"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"weaving=quarkus-reactive-2.10\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(a,{children:"Feature"})," Spring Boot 2.5 \uC774\uC0C1\uC758 Webflux \uC11C\uBE44\uC2A4\uC5D0\uC11C \uC5D1\uD2F0\uBE0C \uC2A4\uD0DD \uCD94\uC801"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(a,{children:"Feature"})," \uD2B8\uB79C\uC7AD\uC158\uC758 thread id \uCD94\uC801"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# default: false\ntrace_thread_id_enabled=false\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(a,{children:"Changed"})," \uC790\uBC14 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBA54\uD2B8\uB9AD \uC9C0\uD45C(",(0,t.jsx)("code",{children:"java_memory"}),", ",(0,t.jsx)("code",{children:"java_gc"}),", ",(0,t.jsx)("code",{children:"java_os"}),") \uC218\uC9D1 \uD65C\uC131\uD654"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# default: true\nperfx_java_enabled=true\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(a,{children:"Changed"})," Java 20 \uBC84\uC804\uC758 system property \uAC12 \uB300\uC751"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(a,{children:"Changed"})," Java 6, Java 7, Java 8\uC758 ASM api \uBC84\uC804\uC744 ASM5\uC5D0\uC11C ASM6\uC73C\uB85C \uC218\uC815"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(a,{children:"Fixed"})," spring-boot-3.0 \uCD94\uC801 \uC2DC \uC798\uBABB\uB41C \uBC84\uC804\uC758 \uB85C\uADF8\uAC00 \uD45C\uC2DC\uB418\uB294 \uBC84\uADF8 \uC218\uC815"]}),"\n"]}),"\n"]})]})}function j(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return i}});var s=a(67294);let t={},r=s.createContext(t);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);