"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["62295"],{26491:function(e,n,t){t.d(n,{ZP:function(){return o},d$:function(){return i}});var a=t(85893),r=t(50065);let i=[];function s(e){let n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Link:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Link",!0),(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"\uB2E4\uC6B4\uB85C\uB4DC"}),": ",(0,a.jsxs)(t,{to:`https://repo.whatap.io/maven/io/whatap/whatap.agent/${e.ver}/whatap.agent-${e.ver}.jar`,children:["Java Agent v",e.ver]})]}),(0,a.jsxs)(n.p,{children:["Java \uC5D0\uC774\uC804\uD2B8\uB97C \uCC98\uC74C \uC124\uCE58\uD558\uB294 \uACBD\uC6B0 \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC774\uC6A9\uD574 \uD328\uD0A4\uC9C0\uB97C \uBA3C\uC800 \uC124\uCE58\uD558\uC138\uC694. \uC5D0\uC774\uC804\uD2B8 \uC124\uCE58\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,a.jsx)(n.a,{href:"../../java/install-agent",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget https://api.whatap.io/agent/whatap.agent.java.tar.gz\n"})})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},51367:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>j,assets:()=>d,toc:()=>c,frontMatter:()=>o});var a=JSON.parse('{"id":"release-notes/java/java-2_2_37","title":"Java Agent v2.2.37","description":"2024\uB144 07\uC6D4 31\uC77C","source":"@site/docs/release-notes/java/java-2.2.37.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_37","permalink":"/whatap-docs/release-notes/java/java-2_2_37","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.37.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_37","title":"Java Agent v2.2.37","toc_max_heading_level":2,"pagination_next":"release-notes/java/java-2_2_36","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"Java Agent v2.2.36","permalink":"/whatap-docs/release-notes/java/java-2_2_36"}}'),r=t("85893"),i=t("50065"),s=t("26491");let o={id:"java-2_2_37",title:"Java Agent v2.2.37",toc_max_heading_level:2,pagination_next:"release-notes/java/java-2_2_36",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},l=void 0,d={},c=[...s.d$];function p(e){let n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Cmdname:t,Status:a}=n;return!t&&x("Cmdname",!0),!a&&x("Status",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"2024\uB144 07\uC6D4 31\uC77C"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(a,{priority:"1",children:"Feature"})," spring-boot ExceptionHandler\uB97C \uD1B5\uACFC\uD558\uB294 \uC608\uC678(exception)\uAC00 \uBC1C\uC0DD\uD558\uBA74 \uC774\uC804\uC5D0 \uBC1C\uC0DD\uD55C \uC608\uC678\uB97C \uB300\uCCB4"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{sid:"TTL06209",className:"uitext"})," \uCC3D\uC758 ",(0,r.jsx)(t,{sid:"TTL06125",className:"uitext"})," \uD0ED\uC5D0\uC11C \uC608\uC678(exception)\uB97C spring-boot\uC758 ExceptionHandler\uC5D0 \uB4F1\uB85D\uD55C \uC608\uC678(exception)\uB85C \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:'title="whatap.conf"\u3153',children:"# default: true\ntrace_exception_handler_overwrite_enabled=true\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(a,{priority:"1",children:"Changed"})," ",(0,r.jsx)(n.code,{children:"trace_http_parameter_enabled"})," \uC635\uC158\uC758 \uAC12\uC774 ",(0,r.jsx)(n.code,{children:"true"}),"\uC77C \uB54C, HTTP \uD30C\uB77C\uBBF8\uD130 \uD0A4\uC5D0 \uD574\uB2F9\uD558\uB294 \uAC12(value)\uAC00 \uC5C6\uAC70\uB098 HTTP \uD30C\uB77C\uBBF8\uD130\uAC00 \uC5C6\uB294 \uACBD\uC6B0 ",(0,r.jsx)(t,{sid:"TTL06209",className:"uitext"})," \uCC3D\uC5D0\uC11C HTTP \uD30C\uB77C\uBBF8\uD130 \uC2A4\uD15D\uC744 \uC0DD\uC131\uD558\uC9C0 \uC54A\uB3C4\uB85D \uC218\uC815"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(a,{priority:"0",children:"Fixed"})," Windows \uD658\uACBD\uC5D0\uC11C \uAE30\uBCF8 CPU \uC218\uC9D1\uC774 \uC548 \uB418\uB294 \uBB38\uC81C \uC218\uC815"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(a,{priority:"0",children:"Fixed"})," Windows \uD658\uACBD\uC5D0\uC11C sigar \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uD65C\uC6A9\uD560 \uB54C \uBAA8\uB2C8\uD130\uB9C1 \uC9C0\uD45C\uAC00 \uC218\uC9D1\uB418\uC9C0 \uC54A\uB294 \uBB38\uC81C \uC218\uC815"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(a,{priority:"0",children:"Fixed"})," Windows \uD658\uACBD\uC5D0\uC11C oshi \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uD65C\uC6A9\uD560 \uB54C \uBAA8\uB2C8\uD130\uB9C1 \uC9C0\uD45C\uAC00 \uC218\uC9D1\uB418\uC9C0 \uC54A\uB294 \uBB38\uC81C \uC218\uC815"]}),"\n"]}),"\n"]}),"\n","\n",(0,r.jsx)(s.ZP,{ver:"2.2.37"})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}function x(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var a=t(67294);let r={},i=a.createContext(r);function s(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);