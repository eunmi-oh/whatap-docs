"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["76389"],{3487:function(e,n,s){s.r(n),s.d(n,{metadata:()=>c,contentTitle:()=>r,default:()=>h,assets:()=>t,toc:()=>d,frontMatter:()=>i});var c=JSON.parse('{"id":"release-notes/java/java-2_2_3","title":"Java Agent v2.2.3","description":"2023\uB144 2\uC6D4 14\uC77C","source":"@site/docs/release-notes/java/java-2.2.3.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_3","permalink":"/whatap-docs/release-notes/java/java-2_2_3","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.3.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_3","title":"Java Agent v2.2.3","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}'),l=s("85893"),a=s("50065");let i={id:"java-2_2_3",title:"Java Agent v2.2.3",toc_max_heading_level:2,displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},r=void 0,t={},d=[{value:"\uC2E0\uAE30\uB2A5 <sup><Status>New</Status></sup>",id:"\uC2E0\uAE30\uB2A5-new",level:2},{value:"\uC5C5\uB370\uC774\uD2B8 <sup><Status>Change</Status></sup>",id:"\uC5C5\uB370\uC774\uD2B8-change",level:2},{value:"\uBC84\uADF8 \uC218\uC815 <sup><Status>Fixed</Status></sup>",id:"\uBC84\uADF8-\uC218\uC815-fixed",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Status:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"2023\uB144 2\uC6D4 14\uC77C"}),"\n",(0,l.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,l.jsxs)(n.h2,{id:"\uC2E0\uAE30\uB2A5-new",children:["\uC2E0\uAE30\uB2A5 ",(0,l.jsx)("sup",{children:(0,l.jsx)(s,{children:"New"})})]}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"spring-webflux-6.x"})," \uCD94\uC801 \uCD94\uAC00"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"weaving=webflux-6.0\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"database connection close\uB97C step\uC5D0 \uD45C\uC2DC"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"close \uD45C\uC2DC \uD074\uB798\uC2A4 \uC815\uBCF4 \uBAA9\uB85D"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"org.apache.commons.dbcp.PoolingDataSource$PoolGuardConnectionWrapper.close()V"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"org.apache.tomcat.dbcp.dbcp.PoolingDataSource$PoolGuardConnectionWrapper.close()V"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"org.apache.tomcat.dbcp.dbcp2.PoolingDataSource$PoolGuardConnectionWrapper.close()V"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"org.apache.commons.dbcp2.PoolingDataSource$PoolGuardConnectionWrapper.close()V"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"com.zaxxer.hikari.pool.ProxyConnection.close()V"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["patterns \uC124\uC815\uC744 \uD1B5\uD574\uC11C database connection close\uB97C \uD45C\uC2DC\uD560 \uD074\uB798\uC2A4 \uCD94\uAC00 \uAC00\uB2A5 (\uAE30\uBCF8\uAC12 ",(0,l.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"hook_connection_close_default_enabled=true\nhook_connection_close_patterns=a.b.c.D\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"jdbc url \uD45C\uC2DC \uC124\uC815 \uCD94\uAC00"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"jdbc_url_enabled=false"}),"\uB85C \uC124\uC815 \uC2DC \uC790\uBC14 \uC5D0\uC774\uC804\uD2B8\uAC00 \uCD94\uC801\uD558\uACE0 \uC788\uB294 database connection \uC815\uBCF4\uB97C url\uC774 \uC544\uB2CC \uD074\uB798\uC2A4\uB85C \uD45C\uC2DC (\uAE30\uBCF8\uAC12 ",(0,l.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"jdbc_url_enabled=true\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"database connection pool \uD074\uB798\uC2A4 \uD45C\uC2DC \uC124\uC815 \uCD94\uAC00"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["database connection pool\uC758 \uD074\uB798\uC2A4 \uC774\uB984\uC744 jdbc url \uB370\uC774\uD130 \uB4A4\uC5D0 \uD45C\uC2DC\uD558\uC5EC connection pool\uC758 \uC815\uBCF4\uB97C \uCD94\uAC00\uB85C \uD655\uC778\uD560 \uC218 \uC788\uB3C4\uB85D \uC124\uC815 \uCD94\uAC00 (\uAE30\uBCF8\uAC12 ",(0,l.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"trace_dbc_append_classname_enabled=false\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"database connection \uC815\uBCF4\uB97C \uC790\uC138\uD558\uAC8C \uD45C\uC2DC\uD558\uAE30 \uC704\uD55C \uC608\uC2DC"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"jdbc_url"}),' + "@\uD074\uB798\uC2A4 \uC815\uBCF4"; connection close \uC815\uBCF4; \uD45C\uC2DC']}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"trace_dbc_append_classname_enabled=true\ntrace_dbc_close_enabled=true\ntrace_dbc_wrap_enabled=true\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["kubernetes \uB9C8\uC2A4\uD130 \uC5D0\uC774\uC804\uD2B8 \uC5F0\uACB0 \uC5EC\uBD80 \uC124\uC815 \uCD94\uAC00 (\uAE30\uBCF8\uAC12 ",(0,l.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"kube_agent_connect_enabled=false\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["(batch) \uC561\uD2F0\uBE0C \uC2A4\uD0DD \uC218\uC9D1 \uC5EC\uBD80 \uC124\uC815 \uCD94\uAC00 (\uAE30\uBCF8\uAC12 ",(0,l.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"active_stack_enabled=false\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["(batch) batch job\uC5D0 \uD2B8\uB79C\uC7AD\uC158\uC744 \uBD84\uB9AC\uD558\uC5EC \uCD94\uC801 \uAE30\uB2A5 \uCD94\uAC00 (\uAE30\uBCF8\uAC12 ",(0,l.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"split_trace_enabled=false\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["(batch) batch job\uC758 \uC2DC\uC791 \uD2B8\uB79C\uC7AD\uC158\uC758 \uCD5C\uB300 step \uC124\uC815 \uCD94\uAC00 (\uAE30\uBCF8\uAC12 ",(0,l.jsx)(n.code,{children:"2000"}),")"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"trace_batch_main_step_max_count=2000\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"(batch) \uC2E4\uC2DC\uAC04\uC73C\uB85C \uBD84\uB9AC\uB41C \uD2B8\uB79C\uC7AD\uC158 \uCD94\uC801 \uC608\uC2DC"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"trace_batch_main_step_max_count=2000\nsplit_trace_enabled=true\n"})}),"\n"]}),"\n"]})]}),"\n",(0,l.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,l.jsxs)(n.h2,{id:"\uC5C5\uB370\uC774\uD2B8-change",children:["\uC5C5\uB370\uC774\uD2B8 ",(0,l.jsx)("sup",{children:(0,l.jsx)(s,{children:"Change"})})]}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\uC790\uBC14\uC5D0\uC774\uC804\uD2B8 \uB0B4\uC7A5 \uC624\uD508\uC18C\uC2A4 \uD50C\uB7EC\uADF8\uC778\uC758 ",(0,l.jsx)(n.strong,{children:"webflux-5.x"})," \uC5C5\uB370\uC774\uD2B8"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"ResultSet\uC758 fetch time\uC744 system time\uC5D0\uC11C jvm\uC758 nanotime\uC73C\uB85C \uC218\uC815"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"service_patterns"}),'\uB85C \uD2B8\uB79C\uC7AD\uC158\uC744 \uB4F1\uB85D\uD558\uB294 \uACBD\uC6B0 \uD2B8\uB79C\uC7AD\uC158 \uC774\uB984\uC744 "\uD074\uB798\uC2A4#\uBA54\uC11C\uB4DC" \uBC29\uC2DD\uC73C\uB85C \uD45C\uC2DC']}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["SQL \uBAA8\uB2C8\uD130\uB9C1 \uC2DC null sql\uC774 \uC804\uB2EC\uB418\uB294 \uACBD\uC6B0 step\uC5D0 ",(0,l.jsx)(n.strong,{children:"sql is null"})," \uD45C\uC2DC"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"(batch) DeadLock \uC81C\uAC70"}),"\n"]}),"\n"]})]}),"\n",(0,l.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,l.jsxs)(n.h2,{id:"\uBC84\uADF8-\uC218\uC815-fixed",children:["\uBC84\uADF8 \uC218\uC815 ",(0,l.jsx)("sup",{children:(0,l.jsx)(s,{children:"Fixed"})})]}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"ResultSet wrapper \uC774\uC911 \uCE74\uC6B4\uD305 \uBC84\uADF8 \uC218\uC815"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"SQL parameter\uC758 Big Decimal \uC218\uC9D1 \uBC84\uADF8 \uC218\uC815"}),"\n"]}),"\n"]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return i}});var c=s(67294);let l={},a=c.createContext(l);function i(e){let n=c.useContext(a);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);