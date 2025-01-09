"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["26132"],{92453:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"release-notes/java/java-2_2_20","title":"Java Agent v2.2.20","description":"2023\uB144 10\uC6D4 19\uC77C","source":"@site/docs/release-notes/java/java-2.2.20.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_20","permalink":"/whatap-docs/release-notes/java/java-2_2_20","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.20.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_20","title":"Java Agent v2.2.20","toc_max_heading_level":2,"pagination_next":"release-notes/java/java-2_2_19","isTranslationMissing":false},"next":{"title":"Java Agent v2.2.19","permalink":"/whatap-docs/release-notes/java/java-2_2_19"}}'),s=a("85893"),i=a("50065");let r={id:"java-2_2_20",title:"Java Agent v2.2.20",toc_max_heading_level:2,pagination_next:"release-notes/java/java-2_2_19",isTranslationMissing:!1},o=void 0,l={},c=[];function d(e){let n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Status:a}=n;return!a&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"2023\uB144 10\uC6D4 19\uC77C"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(a,{children:"Feature"})," apache-camel-seda-2.22 \uCD94\uC801"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"weaving=camel-seda-2.22\n\n# default: false\ntrace_camel_header_enabled=false\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(a,{children:"Feature"})," apache-camel-seda-3.2 \uCD94\uC801"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"weaving=camel-seda-3.2\n\n# default: false\ntrace_camel_header_enabled=false\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(a,{children:"Feature"})," ",(0,s.jsx)(n.code,{children:"biz_exceptions_status"})," \uC635\uC158 \uCD94\uAC00"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"biz_exceptions_status=java.util.concurrent.TimeoutException:400&404&408,java.lang.Exception:200\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uC774 \uC635\uC158\uC744 \uC801\uC6A9\uD558\uBA74 \uD788\uD2B8\uB9F5 info(\uD30C\uB780\uC0C9)\uB85C \uD45C\uC2DC\uD558\uACE0 \uC5D0\uB7EC \uD1B5\uACC4\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(a,{children:"Feature"})," MongoDB \uB3D9\uAE30 \uBC29\uC2DD \uCD94\uC801(mongodb-3.8.2, mongodb-4.0.3, mongodb-4.4, mongodb-4.8)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# example\nweaving=mongodb-4.0.3\n\n# spring-boot-3.x user\n# spring-boot-3.x: mongodb-4.8\nweaving=spring-boot-3.0\n\n# spring-boot-2.7.x user\n# spring-boot-2.7.x: mongodb-4.4\nweaving=spring-boot-2.7\n\n# spring-boot-2.5.x user\n# spring-boot-2.5.x: mongodb-4.0.3\nweaving=spring-boot-2.5\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(a,{children:"Changed"})," ",(0,s.jsx)("code",{children:"biz_exceptions"})," \uCC98\uB9AC\uD55C \uC5D0\uB7EC\uB97C \uC5D0\uB7EC \uD1B5\uACC4\uB85C \uC218\uC9D1"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(a,{children:"Fixed"})," SQL \uD30C\uC2F1 \uC624\uB958 \uC218\uC815"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(a,{children:"Deprecated"})," Jedis, Tomcat, JMX metric \uC9C0\uD45C(",(0,s.jsx)("code",{children:"java_jedis"}),", ",(0,s.jsx)("code",{children:"perfx_jmx_interval"}),", ",(0,s.jsx)("code",{children:"perfx_tomcat_enabled"}),") \uC218\uC9D1 \uC911\uB2E8"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"# deprecated\nperfx_jedis_enabled=false\nperfx_jmx_enabled=false\nperfx_tomcat_enabled=false\n"})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return r}});var t=a(67294);let s={},i=t.createContext(s);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);