"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["72062"],{7579:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"release-notes/java/java-2_2_4","title":"Java Agent v2.2.4","description":"2023\uB144 5\uC6D4 25\uC77C","source":"@site/docs/release-notes/java/java-2.2.4.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_4","permalink":"/whatap-docs/release-notes/java/java-2_2_4","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.4.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_4","title":"Java Agent v2.2.4","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}'),i=s("85893"),r=s("50065");let l={id:"java-2_2_4",title:"Java Agent v2.2.4",toc_max_heading_level:2,displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},a=void 0,c={},o=[{value:"\uC2E0\uAE30\uB2A5 <sup><Status>New</Status></sup>",id:"\uC2E0\uAE30\uB2A5-new",level:2},{value:"\uC5C5\uB370\uC774\uD2B8 <sup><Status>Change</Status></sup>",id:"\uC5C5\uB370\uC774\uD2B8-change",level:2},{value:"\uBC84\uADF8 \uC218\uC815 <sup><Status>Fixed</Status></sup>",id:"\uBC84\uADF8-\uC218\uC815-fixed",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Status:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"2023\uB144 5\uC6D4 25\uC77C"}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsxs)(n.h2,{id:"\uC2E0\uAE30\uB2A5-new",children:["\uC2E0\uAE30\uB2A5 ",(0,i.jsx)("sup",{children:(0,i.jsx)(s,{children:"New"})})]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\uD2B8\uB808\uC774\uC2A4 URL \uC774\uB984 \uC218\uC815 \uAE30\uB2A5 \uCD94\uAC00"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# \uD638\uCD9C \uBA54\uC18C\uB4DC\uC758 \uC804\uCCB4 \uACBD\uB85C, \uC640\uC77C\uB4DC\uCE74\uB4DC(*) \uC0AC\uC6A9 \uAC00\uB2A5\nhook_tx_name_patterns=ab.cd.ef.GH.ij\n\n# class, method, string, return \uC911 \uD0DD1\nhook_tx_name_mode=method\n"})}),"\n",(0,i.jsx)(n.p,{children:"\uC608\uC2DC, \uD2B9\uC815 URL \uD638\uCD9C + \uD2B9\uC815 method\uB97C \uD638\uCD9C\uD558\uB294 \uBC29\uBC95"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"io.home.test.TestController.test1"}),"\uC5D0 \uB4F1\uB85D\uD55C URL \uD638\uCD9C \uC2DC ",(0,i.jsx)(n.code,{children:"test100000()"})," \uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD558\uB294 \uACBD\uC6B0: ",(0,i.jsx)(n.code,{children:"/api/100000+test1+test100000"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\uD2B8\uB808\uC774\uC2A4 \uB370\uC774\uD130 \uC0D8\uD50C\uB9C1 \uAE30\uB2A5 \uCD94\uAC00"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# \uAE30\uBCF8\uAC12\n# \uD2B8\uB808\uC774\uC2A4 \uB370\uC774\uD130 \uC0D8\uD50C\uB9C1 \uC218\uC9D1 \uC5EC\uBD80\ntrace_sampling_enabled=false\n\n# \uD2B8\uB808\uC774\uC2A4 \uB370\uC774\uD130 \uC0D8\uD50C\uB9C1 \uC218\n# \uC9C0\uC815\uD55C \uC0D8\uD50C\uB9C1 \uC218\uB97C \uCD08\uACFC\uD558\uB294 \uB370\uC774\uD130\uB294 \uC804\uC1A1\uD558\uC9C0 \uC54A\uC74C\n# 5\uCD08\uB9C8\uB2E4 \uCD08\uAE30\uD654\ntrace_sampling_tps=10000\n\n# \uD2B8\uB808\uC774\uC2A4 \uB370\uC774\uD130 \uC804\uC1A1 \uC5EC\uBD80\ntrace_send_enabled=true\n\n# \uD2B8\uB808\uC774\uC2A4 \uB370\uC774\uD130 \uC0D8\uD50C\uB9C1 \uB514\uBC84\uADF8 \uC635\uC158\ndebug_trace_samling=false\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\uC218\uC9D1\uD558\uB294 SQL \uB370\uC774\uD130 \uBB34\uC2DC \uAE30\uB2A5 \uCD94\uAC00"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# \uB4F1\uB85D\uD55C SQL hash \uAC12\uACFC \uC77C\uCE58\uD558\uB294 SQL \uBB38\uC740 \uBB34\uC2DC\nignore_sql_hash_set=\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\uD2B9\uC815 \uC11C\uBE44\uC2A4\uC5D0\uC11C \uD2B9\uC815 exception \uBB34\uC2DC \uAE30\uB2A5 \uCD94\uAC00"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# exception:service_url \uB4F1\uB85D\n# \uC27C\uD45C(,)\uB97C \uAD6C\uBD84\uC790\uB85C \uC0AC\uC6A9\n# \uC608\uC2DC, java.util.concurrent.TimeoutException:/api/test/timeout,org.springframework.web.util.NestedServletException:/api/posts/test/cexception\nignore_exception_tx_pattern=\n"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsxs)(n.h2,{id:"\uC5C5\uB370\uC774\uD2B8-change",children:["\uC5C5\uB370\uC774\uD2B8 ",(0,i.jsx)("sup",{children:(0,i.jsx)(s,{children:"Change"})})]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Java \uC5D0\uC774\uC804\uD2B8 \uB0B4\uC7A5 \uC624\uD508 \uC18C\uC2A4 \uD50C\uB7EC\uADF8\uC778\uC758 ",(0,i.jsx)(n.strong,{children:"webflux-5.x"}),", ",(0,i.jsx)(n.strong,{children:"webflux-6.x"})," \uC5C5\uB370\uC774\uD2B8"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"spring-r2dbc"}),"\uC640 \uC5F0\uACC4\uCD94\uC801\uD558\uAE30 \uC704\uD574 ",(0,i.jsx)(n.strong,{children:"spring-webflux"})," \uD50C\uB7EC\uADF8\uC778 \uC218\uC815"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Remote Call\uC5D0 driver \uC815\uBCF4 \uCD94\uAC00. \uC608\uC2DC, RabbitMQ, AMQP, Kafka, \u2026"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Http Call\uC5D0 driver \uC815\uBCF4 \uCD94\uAC00. \uC608\uC2DC, ApacheClient, UrlCon, Webflux, \u2026"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["LogSink\uC758 ",(0,i.jsx)(n.code,{children:"#RemoteTrace"})," \uCE74\uD14C\uACE0\uB9AC \uC774\uB984\uC744 ",(0,i.jsx)(n.code,{children:"#RemoteAccessStatus"}),"\uB85C \uC218\uC815"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"logsink on/off \uAE30\uB2A5\uC744 \uC7AC\uAE30\uB3D9 \uC5C6\uC774 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uC218\uC815"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# \uAE30\uBCF8\uAC12\nhooklog_enabled=true\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"HttpURLConnection, WebLogic URLConnection\uC744 \uCD5C\uCD08 \uD638\uCD9C \uC2DC\uC5D0\uB3C4 \uCD94\uC801\uD560 \uC218 \uC788\uB3C4\uB85D \uAE30\uB2A5 \uCD94\uAC00"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# \uAE30\uBCF8\uAC12\nhook_HttpURLConnection_startup_enabled=false\nhook_HttpURLConnection_weblogic_startup_enabled=false\n"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsxs)(n.h2,{id:"\uBC84\uADF8-\uC218\uC815-fixed",children:["\uBC84\uADF8 \uC218\uC815 ",(0,i.jsx)("sup",{children:(0,i.jsx)(s,{children:"Fixed"})})]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["SQL \uD30C\uB77C\uBBF8\uD130 ",(0,i.jsx)(n.strong,{children:"BigDecimal"})," \uC218\uC9D1 \uBB38\uC81C \uC218\uC815"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ECS"})," \uD658\uACBD\uC5D0\uC11C \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uD0A4\uAC12 \uD638\uCD9C \uC2DC \uC5D0\uB7EC \uC218\uC815"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Webflux"})," \uC0AC\uC6A9 \uC2DC ",(0,i.jsx)(n.strong,{children:"RemoteIP"})," \uAE30\uBC18 \uC0AC\uC6A9\uC790 \uCE74\uC6B4\uD305 \uBC84\uADF8 \uC218\uC815"]}),"\n"]}),"\n"]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var t=s(67294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);