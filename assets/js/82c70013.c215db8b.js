"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["12295"],{60289:function(e,t,n){n.r(t),n.d(t,{metadata:()=>d,contentTitle:()=>a,default:()=>x,assets:()=>i,toc:()=>c,frontMatter:()=>l});var d=JSON.parse('{"id":"java/agent-weaving","title":"\uC624\uD508\uC18C\uC2A4 \uCD94\uC801","description":"\uC790\uBC14(Java) \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uB098 \uC624\uD508\uC18C\uC2A4 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC5D0\uC774\uC804\uD2B8\uB97C \uD1B5\uD574 \uCD94\uC801\uD558\uB294 \uC124\uC815 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. Java \uC5D0\uC774\uC804\uD2B8 \uC124\uC815 \uD30C\uC77C(whatap.conf)\uC5D0 weaving \uC635\uC158\uC744 \uCD94\uAC00\uD558\uC5EC \uC124\uC815\uD558\uBA70, \uB2E4\uC591\uD55C \uD504\uB808\uC784\uC6CC\uD06C \uBC0F \uB77C\uC774\uBE0C\uB7EC\uB9AC \uBC84\uC804\uC5D0 \uB300\uC751\uD558\uB294 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4.","source":"@site/docs/java/agent-weaving.mdx","sourceDirName":"java","slug":"/java/agent-weaving","permalink":"/whatap-docs/java/agent-weaving","draft":false,"unlisted":false,"editUrl":"undefined/docs/java/agent-weaving.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-weaving","title":"\uC624\uD508\uC18C\uC2A4 \uCD94\uC801","description":"\uC790\uBC14(Java) \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uB098 \uC624\uD508\uC18C\uC2A4 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC5D0\uC774\uC804\uD2B8\uB97C \uD1B5\uD574 \uCD94\uC801\uD558\uB294 \uC124\uC815 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. Java \uC5D0\uC774\uC804\uD2B8 \uC124\uC815 \uD30C\uC77C(whatap.conf)\uC5D0 weaving \uC635\uC158\uC744 \uCD94\uAC00\uD558\uC5EC \uC124\uC815\uD558\uBA70, \uB2E4\uC591\uD55C \uD504\uB808\uC784\uC6CC\uD06C \uBC0F \uB77C\uC774\uBE0C\uB7EC\uB9AC \uBC84\uC804\uC5D0 \uB300\uC751\uD558\uB294 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4.","keywords":["Java","\uC5D0\uC774\uC804\uD2B8","\uC624\uD508\uC18C\uC2A4 \uCD94\uC801","Weaving"],"isTranslationMissing":false},"sidebar":"javaSidebar","previous":{"title":"Java 1.6 \uBC84\uC804 \uBBF8\uB9CC","permalink":"/whatap-docs/java/add-jvm-opt/java-under-ver"},"next":{"title":"\uC124\uCE58 \uC810\uAC80 \uC0AC\uD56D","permalink":"/whatap-docs/java/install-check"}}'),r=n("85893"),s=n("50065");let l={id:"agent-weaving",title:"\uC624\uD508\uC18C\uC2A4 \uCD94\uC801",description:"\uC790\uBC14(Java) \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uB098 \uC624\uD508\uC18C\uC2A4 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC5D0\uC774\uC804\uD2B8\uB97C \uD1B5\uD574 \uCD94\uC801\uD558\uB294 \uC124\uC815 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. Java \uC5D0\uC774\uC804\uD2B8 \uC124\uC815 \uD30C\uC77C(whatap.conf)\uC5D0 weaving \uC635\uC158\uC744 \uCD94\uAC00\uD558\uC5EC \uC124\uC815\uD558\uBA70, \uB2E4\uC591\uD55C \uD504\uB808\uC784\uC6CC\uD06C \uBC0F \uB77C\uC774\uBE0C\uB7EC\uB9AC \uBC84\uC804\uC5D0 \uB300\uC751\uD558\uB294 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4.",keywords:["Java","\uC5D0\uC774\uC804\uD2B8","\uC624\uD508\uC18C\uC2A4 \uCD94\uC801","Weaving"],isTranslationMissing:!1},a=void 0,i={},c=[{value:"\uC9C0\uC6D0 \uC624\uD508\uC18C\uC2A4 \uBAA9\uB85D",id:"\uC9C0\uC6D0-\uC624\uD508\uC18C\uC2A4-\uBAA9\uB85D",level:2},{value:"Java \uC5D0\uC774\uC804\uD2B8\uC758 CVE \uC624\uD0D0 \uBC29\uC9C0",id:"java-\uC5D0\uC774\uC804\uD2B8\uC758-cve-\uC624\uD0D0-\uBC29\uC9C0",level:2}];function j(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",section:"section",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Link:n}=t;return!n&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Link",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["\uC790\uBC14(Java) \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uB098 \uC624\uD508\uC18C\uC2A4 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC5D0\uC774\uC804\uD2B8\uB97C \uD1B5\uD574 \uCD94\uC801\uD558\uB294 \uC124\uC815 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774\uB294 Java \uC5D0\uC774\uC804\uD2B8 \uC124\uC815 \uD30C\uC77C(",(0,r.jsx)(t.em,{children:"whatap.conf"}),") \uD30C\uC77C\uC5D0 ",(0,r.jsx)(t.code,{children:"weaving"})," \uC635\uC158\uC744 \uCD94\uAC00\uD558\uC5EC \uC124\uC815\uD558\uBA70, \uB2E4\uC591\uD55C \uD504\uB808\uC784\uC6CC\uD06C \uBC0F \uB77C\uC774\uBE0C\uB7EC\uB9AC \uBC84\uC804\uC5D0 \uB300\uC751\uD558\uB294 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(t.p,{children:"\uC608\uB97C \uB4E4\uC5B4, \uD504\uB808\uC784\uC6CC\uD06C\uB098 \uC624\uD508\uC18C\uC2A4\uB85C spring-boot-3.x, feign-client-11, okhttp3-4.4 \uC0AC\uC6A9 \uC2DC \uB2E4\uC74C\uACFC \uAC19\uC774 \uC635\uC158\uC744 \uC124\uC815\uD558\uC138\uC694."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"weaving=spring-boot-3.0,feign-11,okhttp3-4.4\n"})}),"\n",(0,r.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(t.h2,{id:"\uC9C0\uC6D0-\uC624\uD508\uC18C\uC2A4-\uBAA9\uB85D",children:"\uC9C0\uC6D0 \uC624\uD508\uC18C\uC2A4 \uBAA9\uB85D"}),(0,r.jsx)(t.p,{children:"Java \uC5D0\uC774\uC804\uD2B8\uB97C \uD1B5\uD574 \uCD94\uC801\uD558\uACE0 \uC788\uB294 \uD504\uB808\uC784\uC6CC\uD06C \uB610\uB294 \uC624\uD508\uC18C\uC2A4\uC5D0 \uB300\uD55C \uC124\uC815 \uBC29\uBC95\uC740 \uB2E4\uC74C\uC744 \uCC38\uC870\uD558\uC138\uC694."}),(0,r.jsx)("div",{class:"weaving-table",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\uD504\uB808\uC784\uC6CC\uD06C/\uC624\uD508\uC18C\uC2A4"}),(0,r.jsx)(t.th,{children:"\uBC84\uC804"}),(0,r.jsx)(t.th,{children:"\uC124\uC815"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\uC5D0\uC774\uC804\uD2B8 \uCD5C\uC18C \uBC84\uC804"}),(0,r.jsx)(t.th,{children:"\uBE44\uACE0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"apache-camel-cxf"}),(0,r.jsx)(t.td,{children:"camel-cxf-3.15 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=camel-cxf-3.15"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_27",target:"_blank",children:"v2.2.27"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"apache-camel-netty"}),(0,r.jsx)(t.td,{children:"camel-netty4 2.25 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=camel-netty4-2.25"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_42",target:"_blank",children:"v2.2.42"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{rowSpan:"2",children:"apache-camel-seda"}),(0,r.jsx)(t.td,{children:"camel-seda-2.22 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=camel-seda-2.22"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_20",target:"_blank",children:"v2.2.20"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"camel-seda-3.2 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=camel-seda-3.2"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_20",target:"_blank",children:"v2.2.20"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"db2"}),(0,r.jsx)(t.td,{children:"db2-11.5 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=db2-11.5"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_18",target:"_blank",children:"v2.2.18"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{rowSpan:"2",children:"dynamodb"}),(0,r.jsx)(t.td,{children:"dynamodb-1.11"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=dynamodb-1.11"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_39",target:"_blank",children:"v2.2.39"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dynamodb-2.25"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=dynamodb-2.25"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_39",target:"_blank",children:"v2.2.39"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"feign-client"}),(0,r.jsx)(t.td,{children:"feign-11 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=feign-11"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_6",target:"_blank",children:"v2.2.6"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hystrix"}),(0,r.jsx)(t.td,{children:"hystrix-1.5 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=hystrix-1.5"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_0#v20_21",target:"_blank",children:"v2.0_21"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{rowSpan:"2",children:"kafka"}),(0,r.jsx)(t.td,{children:"kafka-clients-2.4.0 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=kafka-clients-2.4.0"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_15",target:"_blank",children:"v2.2.15"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"reactor-kafka-1.3 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=reactor-kafka-1.3"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_5",target:"_blank",children:"v2.2.5"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"logback"}),(0,r.jsx)(t.td,{children:"logback-1.2.8 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=logback-1.2.8"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_28",target:"_blank",children:"v2.2.28"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"agent-log#excludeappender",children:"\uD2B9\uC815 appender \uC81C\uC678\uD558\uB294 \uC5D0\uC774\uC804\uD2B8 \uC635\uC158 \uC81C\uACF5"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"log4j2"}),(0,r.jsx)(t.td,{children:"log4j-2.17 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=log4j-2.17"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_28",target:"_blank",children:"v2.2.28"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"agent-log#excludeappender",children:"\uD2B9\uC815 appender \uC81C\uC678\uD558\uB294 \uC5D0\uC774\uC804\uD2B8 \uC635\uC158 \uC81C\uACF5"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{rowSpan:"6",children:"mongodb, mongodb-reactive"}),(0,r.jsx)(t.td,{children:"mongodb-3.8.2 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=mongodb-3.8.2"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_11",target:"_blank",children:"v2.2.11"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mongodb-4.0.3 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=mongodb-4.0.3"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_11",target:"_blank",children:"v2.2.11"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mongodb-4.4 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=mongodb-4.4"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_11",target:"_blank",children:"v2.2.11"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mongodb-4.8 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=mongodb-4.8"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_11",target:"_blank",children:"v2.2.11"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mongodb-4.11 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=mongodb-4.11"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_45",target:"_blank",children:"v2.2.45"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mongodb-5.0 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=mongodb-5.0"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_45",target:"_blank",children:"v2.2.45"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{rowSpan:"2",children:"mule framework"}),(0,r.jsx)(t.td,{children:"mule-3.9.5 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=mule-3.9.5"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_23",target:"_blank",children:"v2.2.23"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mule-4.5 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=mule-4.5"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_23",target:"_blank",children:"v2.2.23"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okhttp"}),(0,r.jsx)(t.td,{children:"okhttp-2.7 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=okhttp-2.7"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_0#v20_15",target:"_blank",children:"v2.0_15"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{rowSpan:"2",children:"quarkus, quarkus-reactive"}),(0,r.jsx)(t.td,{children:"quarkus-reactive-1.13 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=quarkus-reactive-1.13"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_19",target:"_blank",children:"v2.2.19"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"quarkus-reactive-2.10 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=quarkus-reactive-2.10"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_19",target:"_blank",children:"v2.2.19"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{rowSpan:"3",children:"redis(jedis)"}),(0,r.jsx)(t.td,{children:"jedis-2.9.0 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=jedis-2.9.0"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_43",target:"_blank",children:"v2.2.43"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"jedis-2.9.3 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=jedis-2.9.3"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_0#v20_33",target:"_blank",children:"v2.0_33"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"jedis-3.2 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=jedis-3.2"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_0#v20_09",target:"_blank",children:"v2.0_09"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{rowSpan:"4",children:"redis(lettuce)"}),(0,r.jsx)(t.td,{children:"lettuce-5.1 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=lettuce-5.1"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_7",target:"_blank",children:"v2.2.7"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lettuce-6.2 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=lettuce-6.2"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_16",target:"_blank",children:"v2.2.16"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okhttp3 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=okhttp3"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_0#v20_15",target:"_blank",children:"v2.0_15"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"okhttp3-4.4"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=okhttp3-4.4"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_9",target:"_blank",children:"v2.2.9"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rabbitmq"}),(0,r.jsx)(t.td,{children:"reactor-rabbitmq-1.2 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=reactor-rabbitmq-1.2"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_0#v20_06",target:"_blank",children:"v2.0_06"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"retrofit"}),(0,r.jsx)(t.td,{children:"retrofit-2.5 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=retrofit-2.5"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_39",target:"_blank",children:"v2.2.39"})}),(0,r.jsx)(t.td,{children:"okhttp \uC124\uC815\uACFC \uB3D9\uC2DC \uC0AC\uC6A9 \uBD88\uAC00"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ribbon"}),(0,r.jsx)(t.td,{children:"ribbon"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=ribbon"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_10",target:"_blank",children:"v2.2.10"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"logback"}),(0,r.jsx)(t.td,{children:"logback-1.2.8 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=logback-1.2.8"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_28",target:"_blank",children:"v2.2.28"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"agent-log#excludeappender",children:"\uD2B9\uC815 appender \uC81C\uC678\uD558\uB294 \uC5D0\uC774\uC804\uD2B8 \uC635\uC158 \uC81C\uACF5"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"log4j2"}),(0,r.jsx)(t.td,{children:"log4j-2.17 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=log4j-2.17"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_28",target:"_blank",children:"v2.2.28"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"agent-log#excludeappender",children:"\uD2B9\uC815 appender \uC81C\uC678\uD558\uB294 \uC5D0\uC774\uC804\uD2B8 \uC635\uC158 \uC81C\uACF5"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{rowSpan:"5",children:"spring-boot"}),(0,r.jsx)(t.td,{children:"spring-boot-2.1 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=spring-boot-2.1"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_23",target:"_blank",children:"v2.2.23"})}),(0,r.jsx)(t.td,{children:"kafka-clients, r2dbc-mysql, spring-cloud-gateway, spring-webflux, tomcat9, undertow \uD3EC\uD568"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spring-boot-2.5 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=spring-boot-2.5"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_9",target:"_blank",children:"v2.2.9"})}),(0,r.jsx)(t.td,{children:"kafka-clients, r2dbc-mysql, redis(lettuce), spring-cloud-gateway, spring-webflux, tomcat9, undertow \uD3EC\uD568"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spring-boot-2.7 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=spring-boot-2.7"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_9",target:"_blank",children:"v2.2.9"})}),(0,r.jsx)(t.td,{children:"jasync-r2dbc-mysql, kafka-clients, r2dbc-mysql, redis(lettuce), spring-cloud-gateway, spring-webflux, tomcat9, undertow \uD3EC\uD568"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spring-boot-3.0 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=spring-boot-3.0"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_9",target:"_blank",children:"v2.2.9"})}),(0,r.jsx)(t.td,{children:"jasync-r2dbc-mysql, kafka-clients, r2dbc-mysql, redis(lettuce), spring-cloud-gateway,spring-webflux, tomcat10, undertow \uD3EC\uD568"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spring-boot-3.2 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=spring-boot-3.2"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_38",target:"_blank",children:"v2.2.38"})}),(0,r.jsx)(t.td,{children:"jasync-r2dbc-mysql, spring-kafka, spring-kafka-batch, r2dbc-mysql, redis(lettuce), spring-cloud-gateway, spring-webflux, tomcat10, undertow \uD3EC\uD568"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{rowSpan:"2",children:"tomcat"}),(0,r.jsx)(t.td,{children:"tomcat9"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=tomcat9"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_5",target:"_blank",children:"v2.2.5"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tomcat10"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=tomcat10"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_5",target:"_blank",children:"v2.2.5"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{rowSpan:"2",children:"undertow"}),(0,r.jsx)(t.td,{children:"undertow-2.2 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=undertow-2.2"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_39",target:"_blank",children:"v2.2.39"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"undertow-2.3 \uC774\uC0C1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=undertow-2.3"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_14",target:"_blank",children:"v2.2.14"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{rowSpan:"3",children:"vertx"}),(0,r.jsx)(t.td,{children:"vertx-3.5.3"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=vertx-3.5.3"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_42",target:"_blank",children:"v2.2.42"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vertx-3.9"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=vertx-3.9"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_44",target:"_blank",children:"v2.2.44"})}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vertx-4.5"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"weaving=vertx-4.5"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(n,{to:"../release-notes/java/java-2_2_39",target:"_blank",children:"v2.2.39"})}),(0,r.jsx)(t.td,{children:"-"})]})]})]})})]}),"\n",(0,r.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(t.h2,{id:"java-\uC5D0\uC774\uC804\uD2B8\uC758-cve-\uC624\uD0D0-\uBC29\uC9C0",children:"Java \uC5D0\uC774\uC804\uD2B8\uC758 CVE \uC624\uD0D0 \uBC29\uC9C0"}),(0,r.jsx)(t.p,{children:"Java \uC5D0\uC774\uC804\uD2B8\uC758 CVE \uCDE8\uC57D\uC810 \uC624\uD0D0 \uBC29\uC9C0 \uBC0F \uBD88\uD544\uC694\uD55C \uB77C\uC774\uBE0C\uB7EC\uB9AC \uD074\uB798\uC2A4 \uC81C\uAC70 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4."}),(0,r.jsx)(t.p,{children:"CVE \uCDE8\uC57D\uC810\uC774 \uAC80\uCD9C\uB418\uB354\uB77C\uB3C4, Java \uC5D0\uC774\uC804\uD2B8\uAC00 \uC2E4\uC81C\uB85C \uCDE8\uC57D\uD558\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Java \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC815\uBCF4\uB97C \uBAA8\uB2C8\uD130\uB9C1\uD558\uAE30 \uC704\uD574 \uC5D0\uC774\uC804\uD2B8\uC5D0\uB294 \uB2E4\uC591\uD55C \uB77C\uC774\uBE0C\uB7EC\uB9AC \uD074\uB798\uC2A4\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC9C0\uB9CC, \uC2E4\uC81C\uB85C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294\uB2E4\uBA74 \uB85C\uB529\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. Java \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uD2B9\uC815 \uD074\uB798\uC2A4\uAC00 \uB85C\uB529\uB420 \uB54C\uC5D0\uB9CC \uCD94\uC801 \uD074\uB798\uC2A4\uC640 \uBA54\uC18C\uB4DC\uAC00 \uACB0\uD569\uB418\uC5B4 \uBAA8\uB2C8\uD130\uB9C1\uC774 \uC774\uB8E8\uC5B4\uC9C0\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4."}),(0,r.jsx)(t.p,{children:"\uB530\uB77C\uC11C, CVE \uCDE8\uC57D\uC810 \uAC80\uC0AC \uC2DC \uC18C\uD504\uD2B8\uC6E8\uC5B4\uC758 \uC774\uB984\uACFC \uBC84\uC804\uB9CC\uC744 \uAE30\uBC18\uC73C\uB85C \uACBD\uACE0\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uB7EC \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uAC80\uCD9C\uB418\uB354\uB77C\uB3C4, \uC2E4\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uD574\uB2F9 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC73C\uBA74 \uCDE8\uC57D\uC810\uC774 \uB178\uCD9C\uB418\uC9C0 \uC54A\uC73C\uBBC0\uB85C \uBC18\uB4DC\uC2DC \uCDE8\uC57D\uD55C \uC0C1\uD0DC\uC778 \uAC83\uC740 \uC544\uB2D9\uB2C8\uB2E4."}),(0,r.jsx)(t.p,{children:"\uB9CC\uC57D Java \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uD574\uB2F9 \uBC84\uC804\uC744 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uCD94\uC801 \uD074\uB798\uC2A4\uB97C \uC0AD\uC81C\uD558\uB824\uBA74 \uC544\uB798 \uBA85\uB839\uC5B4\uB97C \uC2E4\uD589\uD558\uC138\uC694. \uB2E8, Java \uC5D0\uC774\uC804\uD2B8\uAC00 \uC5C5\uB370\uC774\uD2B8\uB420 \uB54C\uB9C8\uB2E4 \uC0AD\uC81C \uC791\uC5C5\uC744 \uB2E4\uC2DC \uC218\uD589\uD574\uC57C \uD569\uB2C8\uB2E4."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"java -cp whatap.agent-X.Y.Z.jar whatap.agent.setup.RemoveWeaving -remove [weaving jar filename]\n"})}),(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:["\uD2B9\uC815 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uD074\uB798\uC2A4\uB97C \uC81C\uAC70\uD558\uB294 \uBA85\uB839\uC5B4\uB294 ",(0,r.jsx)(t.strong,{children:"Java \uC5D0\uC774\uC804\uD2B8 2.2.37 \uBC84\uC804"})," \uC774\uC0C1\uC5D0\uC11C \uC9C0\uC6D0\uD569\uB2C8\uB2E4."]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\uC0AC\uC6A9\uBC95"}),": ",(0,r.jsx)(t.code,{children:"java -cp whatap.agent-X.Y.Z.jar whatap.agent.setup.RemoveWeaving [arguments] [weaving jar filename]"})]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Example"',children:"java -cp whatap.agent-2.2.37.jar whatap.agent.setup.RemoveWeaving -remove spring-boot-2.5.jar spring-boot-2.7.jar\n"})}),(0,r.jsx)(t.p,{children:"Arguments:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"-r"})," \uB610\uB294 ",(0,r.jsx)(t.code,{children:"-remove"}),": Java \uC5D0\uC774\uC804\uD2B8\uC5D0\uC11C weaving jar \uD30C\uC77C\uC744 \uC0AD\uC81C\uD558\uACE0 \uC0C8\uB85C\uC6B4 Java \uC5D0\uC774\uC804\uD2B8\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"-l"})," \uB610\uB294 ",(0,r.jsx)(t.code,{children:"-list"}),": weaving jar \uD30C\uC77C \uBAA9\uB85D\uC744 \uCD9C\uB825\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"-d"})," \uB610\uB294 ",(0,r.jsx)(t.code,{children:"-debug"}),": \uB514\uBC84\uADF8 \uB85C\uAE45(debug logging)\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"-e"})," \uB610\uB294 ",(0,r.jsx)(t.code,{children:"-error"}),": \uC5D0\uB7EC\uC5D0 \uB300\uD55C \uD480 \uC2A4\uD0DD \uD2B8\uB808\uC774\uC2A4 \uC815\uBCF4\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"-h"})," \uB610\uB294 ",(0,r.jsx)(t.code,{children:"-help"}),": \uB3C4\uC6C0\uB9D0 \uCD9C\uB825\uD558\uACE0 \uC885\uB8CC\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n"]})]})]})]})}function x(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var d=n(67294);let r={},s=d.createContext(r);function l(e){let t=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);