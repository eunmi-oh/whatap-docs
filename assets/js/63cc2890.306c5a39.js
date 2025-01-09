"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["23195"],{46759:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>h,assets:()=>t,toc:()=>a,frontMatter:()=>d});var l=JSON.parse('{"id":"mxql/mxql-guide","title":"MXQL \uBB38\uBC95 \uAC00\uC774\uB4DC","description":"MXQL \uBB38\uBC95 \uAC00\uC774\uB4DC\uB97C \uC54C\uC544\uBD05\uB2C8\uB2E4.","source":"@site/docs/mxql/mxql-guide.mdx","sourceDirName":"mxql","slug":"/mxql/mxql-guide","permalink":"/whatap-docs/mxql/mxql-guide","draft":false,"unlisted":false,"editUrl":"undefined/docs/mxql/mxql-guide.mdx","tags":[],"version":"current","frontMatter":{"id":"mxql-guide","title":"MXQL \uBB38\uBC95 \uAC00\uC774\uB4DC","description":"MXQL \uBB38\uBC95 \uAC00\uC774\uB4DC\uB97C \uC54C\uC544\uBD05\uB2C8\uB2E4.","keywords":["MXQL","MXQL \uBB38\uBC95 \uAC00\uC774\uB4DC"],"isTranslationMissing":false},"sidebar":"learningSidebar","previous":{"title":"MXQL","permalink":"/whatap-docs/mxql/mxql-overview"},"next":{"title":"\uBA54\uD2B8\uB9AD\uC2A4 \uC120\uD0DD","permalink":"/whatap-docs/mxql/mxql-select"}}'),i=s("85893"),c=s("50065");let d={id:"mxql-guide",title:"MXQL \uBB38\uBC95 \uAC00\uC774\uB4DC",description:"MXQL \uBB38\uBC95 \uAC00\uC774\uB4DC\uB97C \uC54C\uC544\uBD05\uB2C8\uB2E4.",keywords:["MXQL","MXQL \uBB38\uBC95 \uAC00\uC774\uB4DC"],isTranslationMissing:!1},r=void 0,t={},a=[{value:"\uD615\uC2DD",id:"\uD615\uC2DD",level:2},{value:"\uD14C\uC2A4\uD2B8 \uD658\uACBD",id:"test-env",level:2},{value:"\uB2E8\uACC4\uBCC4 \uAD6C\uC131",id:"\uB2E8\uACC4\uBCC4-\uAD6C\uC131",level:2},{value:"\uC8FC\uC11D",id:"\uC8FC\uC11D",level:2},{value:"MetricValue(\uBCF5\uD569\uAC12)",id:"metric-value",level:2},{value:"MetricValue \uD0C0\uC785\uC758 \uB370\uC774\uD130 \uC774\uC6A9 \uBC29\uBC95",id:"metricvalue-\uD0C0\uC785\uC758-\uB370\uC774\uD130-\uC774\uC6A9-\uBC29\uBC95",level:2},{value:"MetricValue \uD0C0\uC785\uC758 \uAE30\uBCF8 \uC5F0\uC0B0 <code>avg</code>",id:"metricvalue-\uD0C0\uC785\uC758-\uAE30\uBCF8-\uC5F0\uC0B0-avg",level:2},{value:"\uC0AC\uC804 \uC815\uC758 MXQL \uCFFC\uB9AC\uBB38",id:"custom-mxql",level:2},{value:"\uCC38\uACE0\uC790\uB8CC",id:"\uCC38\uACE0\uC790\uB8CC",level:2},{value:"\uBC14\uC778\uB4DC \uBCC0\uC218(\uD30C\uB77C\uBBF8\uD130)",id:"bind-parameter",level:3},{value:"\uB370\uC774\uD130 \uB85C\uB529\uBC29\uC2DD",id:"\uB370\uC774\uD130-\uB85C\uB529\uBC29\uC2DD",level:3},{value:"SaaS \uC11C\uBE44\uC2A4\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uC0AC\uC804 \uC815\uC758\uB41C MXQL \uCFFC\uB9AC \uBAA9\uB85D",id:"custom-query-saas",level:2},{value:"\uC5D0\uC774\uC804\uD2B8\uBCC4 \uC561\uD2F0\uBE0CTX \uAC74\uC218, \uAC74\uC218, \uCD5C\uADFC15\uCD08",id:"\uC5D0\uC774\uC804\uD2B8\uBCC4-\uC561\uD2F0\uBE0Ctx-\uAC74\uC218-\uAC74\uC218-\uCD5C\uADFC15\uCD08",level:3},{value:"\uC5D0\uC774\uC804\uD2B8 \uBCC4 \uC0C1\uC138\uC815\uBCF4 &amp; \uC5D0\uC774\uC804\uD2B8\uBCC4 \uC561\uD2F0\uBE0CTX \uAC74\uC218, \uAC74\uC218, \uCD5C\uADFC15\uCD08",id:"\uC5D0\uC774\uC804\uD2B8-\uBCC4-\uC0C1\uC138\uC815\uBCF4--\uC5D0\uC774\uC804\uD2B8\uBCC4-\uC561\uD2F0\uBE0Ctx-\uAC74\uC218-\uAC74\uC218-\uCD5C\uADFC15\uCD08",level:3}];function x(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{ImgLang:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImgLang",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(n.h2,{id:"\uD615\uC2DD",children:"\uD615\uC2DD"}),(0,i.jsxs)(n.p,{children:["MXQL\uC740 \uAC01 \uB77C\uC778\uB9C8\uB2E4 ",(0,i.jsx)(n.strong,{children:"\uBA85\uB839\uC5B4"}),"\uC640 ",(0,i.jsx)(n.strong,{children:"\uC624\uD37C\uB79C\uB4DC"}),"\uB85C \uAD6C\uC131\uB418\uBA70 \uB744\uC5B4\uC4F0\uAE30\uB85C \uAD6C\uBD84\uD569\uB2C8\uB2E4."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"<\uBA85\uB839\uC5B4> <\uC624\uD37C\uB79C\uB4DC>\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"\uBA85\uB839\uC5B4"}),"\uB294 \uD55C \uB2E8\uC5B4\uC758 \uC608\uC57D\uC5B4\uC785\uB2C8\uB2E4. ",(0,i.jsx)(n.code,{children:"\uBA85\uB839\uC5B4"}),"\uB294 \uB300\uBB38\uC790\uB85C \uC785\uB825\uD558\uBA70 ",(0,i.jsx)(n.code,{children:"\uC624\uD37C\uB79C\uB4DC"}),"\uB294 \uC18C\uBB38\uC790\uB85C \uC785\uB825\uD569\uB2C8\uB2E4. ",(0,i.jsx)(n.code,{children:"\uBA85\uB839\uC5B4"}),"\uB9C8\uB2E4 \uC785\uB825 \uAC00\uB2A5\uD55C ",(0,i.jsx)(n.code,{children:"\uC624\uD37C\uB79C\uB4DC"}),"\uC758 \uD615\uC2DD\uC740 \uC815\uD574\uC838 \uC788\uC2B5\uB2C8\uB2E4. ",(0,i.jsx)(n.code,{children:"\uC624\uD37C\uB79C\uB4DC"}),"\uC5D0\uB294 4\uAC00\uC9C0 \uD0C0\uC785\uC758 \uAC12\uC774 \uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\uC624\uD37C\uB79C\uB4DC\uAC00 \uC5C6\uB294 \uACBD\uC6B0"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"TAGLOAD\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\uBB38\uC790\uC5F4(\uC22B\uC790 \uD639\uC740 \uB2E8\uC5B4)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CATEGORY app_counter\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\uBB38\uC790\uC5F4 \uBC30\uC5F4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT [ time, pcode ]\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"JSON \uBB38\uC790\uC5F4 \uD0C0\uC785"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"FILTER { key : tx_count, value : 5}\n"})}),"\n"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:"title='Sample MXQL query'",children:"CATEGORY app_counter\nTAGLOAD\nSELECT [ time, pcode ]\nFILTER { key : tx_count, value : 5}\n"})})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(n.h2,{id:"test-env",children:"\uD14C\uC2A4\uD2B8 \uD658\uACBD"}),(0,i.jsxs)(n.p,{children:["\uD648 \uD654\uBA74 > \uD504\uB85C\uC81D\uD2B8 \uC120\uD0DD > ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"\uC0AC\uC774\uD2B8\uB9F5"})})," > ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"\uC2E4\uD5D8\uC2E4"})})," > ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"MXQL \uB370\uC774\uD130 \uC870\uD68C"})})," \uBA54\uB274\uC5D0\uC11C MXQL \uCFFC\uB9AC\uB97C \uD14C\uC2A4\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,i.jsx)(s,{img:"mxql-7.png",desc:"MXQL \uB370\uC774\uD130 \uC870\uD68C"}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["\uBA54\uD2B8\uB9AD\uC2A4\uC5D0\uB294 \uD0DC\uADF8\uC640 \uD544\uB4DC\uAC00 \uAD6C\uBD84\uB418\uC5B4 \uC788\uC9C0\uB9CC ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"MXQL \uB370\uC774\uD130 \uC870\uD68C"})})," \uBA54\uB274\uC5D0\uC11C\uB294 \uD0DC\uADF8\uC640 \uD544\uB4DC\uC758 \uAD6C\uBD84 \uC5C6\uC774 \uD45C\uD604\uD569\uB2C8\uB2E4."]})})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(n.h2,{id:"\uB2E8\uACC4\uBCC4-\uAD6C\uC131",children:"\uB2E8\uACC4\uBCC4 \uAD6C\uC131"}),(0,i.jsxs)(n.p,{children:["MXQL\uC740 \uB2E8\uACC4\uBCC4 \uAD6C\uC131\uC744 \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uAC01 \uB2E8\uACC4\uBCC4\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 ",(0,i.jsx)(n.strong,{children:"\uBA85\uB839\uC5B4"}),"\uC758 \uC885\uB958\uAC00 \uC815\uD574\uC838 \uC788\uC73C\uBA70 \uAC01 \uB2E8\uACC4\uC758 \uC774\uB984\uACFC \uD2B9\uC9D5\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4."]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\uBA54\uD2B8\uB9AD\uC2A4 \uC120\uD0DD"}),": \uC5B4\uB5A4 \uC5D0\uC774\uC804\uD2B8\uC5D0\uC11C \uC218\uC9D1\uD55C \uC5B4\uB5A4 \uBA54\uD2B8\uB9AD\uC2A4\uB97C \uC0AC\uC6A9\uD560\uC9C0 \uC120\uD0DD\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\uBA54\uD2B8\uB9AD\uC2A4 \uB85C\uB529"}),": \uC774\uC804 \uB2E8\uACC4\uC5D0\uC11C \uC124\uC815\uD55C \uAC12\uB4E4\uC744 \uC0AC\uC6A9\uD574\uC11C \uBA54\uD2B8\uB9AD\uC2A4\uB97C \uBD88\uB7EC\uC635\uB2C8\uB2E4. \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0 ",(0,i.jsx)(n.code,{children:"TAGLOAD"}),"\uB97C \uC774\uC6A9\uD558\uBA70, \uD2B9\uC218\uD55C \uACBD\uC6B0\uC5D0\uB9CC ",(0,i.jsx)(n.code,{children:"FLEXLOAD"}),"\uB97C \uC774\uC6A9\uD558\uC138\uC694. ",(0,i.jsx)(n.code,{children:"FLEXLOAD"}),"\uB97C \uC0AC\uC6A9\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uB294 ",(0,i.jsx)(n.a,{href:"mxql-loading#flexload-items",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\uBA54\uD2B8\uB9AD\uC2A4 \uAC00\uACF5"}),": \uC774\uC804 \uB2E8\uACC4\uC5D0\uC11C \uBD88\uB7EC\uC628 \uBA54\uD2B8\uB9AD\uC2A4\uC5D0 \uB300\uD574\uC11C \uB2E8\uACC4\uBCC4\uB85C \uAC00\uACF5\uC744 \uC218\uD589\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:"title='Example'",children:'# \uBA54\uD2B8\uB9AD\uC2A4 \uC120\uD0DD \uB2E8\uACC4\nCATEGORY app_counter -- \uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD\n\n# \uBA54\uD2B8\uB9AD\uC2A4 \uB85C\uB529 \uB2E8\uACC4\nTAGLOAD -- \uB370\uC774\uD130 1000\uAC1C \uC870\uD68C\n\n# \uBA54\uD2B8\uB9AD\uC2A4 \uAC00\uACF5 \uB2E8\uACC4\nSELECT [time, oid, active_tx_count, tx_count, tx_error] -- 1000\uAC1C \uB370\uC774\uD130\uC758 5\uAC1C \uD544\uB4DC\uB9CC \uB2E4\uC74C \uB2E8\uACC4\uB85C \uC804\uB2EC\nFILTER {expr : "tx_count > 40"}        -- \uB370\uC774\uD130 1000\uAC1C \uC911 100\uAC1C\uB9CC \uD1B5\uACFC\nFILTER {expr : "active_tx_count > 10"} -- \uB370\uC774\uD130 100\uAC1C \uC911 10\uAC1C\uB9CC \uD1B5\uACFC\nFILTER {expr : "tx_error < 3"}        -- \uB370\uC774\uD130 10\uAC1C \uC911 3\uAC1C\uB9CC \uD1B5\uACFC\n'})}),(0,i.jsx)(n.p,{children:"\uB2E4\uC74C\uC740 \uBA54\uD2B8\uB9AD\uC2A4 \uAC00\uACF5 \uB2E8\uACC4\uB97C \uBAA8\uB450 \uD1B5\uACFC\uD55C \uBA54\uD2B8\uB9AD\uC2A4 \uC608\uC2DC\uC785\uB2C8\uB2E4."}),(0,i.jsx)(s,{img:"mxql_metrics_calculate_example.png",desc:"\uC608\uC2DC"})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(n.h2,{id:"\uC8FC\uC11D",children:"\uC8FC\uC11D"}),(0,i.jsx)(n.p,{children:'"#" \uB610\uB294 "--"\uC73C\uB85C \uC2DC\uC791\uD558\uB294 \uBB38\uC7A5\uC740 \uBB34\uC2DC\uB429\uB2C8\uB2E4.'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:"title='Example'",children:"# \uB370\uC774\uD130 \uC870\uD68C \uC124\uC815\nCATEGORY app_counter\n\n# \uB370\uC774\uD130 \uC870\uD68C\nTAGLOAD\n\n# \uB370\uC774\uD130 \uAC00\uACF5\nSELECT [ time, pcode ]\nFILTER { key : tx_count, value : 5}\n"})})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(n.h2,{id:"metric-value",children:"MetricValue(\uBCF5\uD569\uAC12)"}),(0,i.jsxs)(n.p,{children:["MetricValue(\uBCF5\uD569\uAC12)\uC740 \uBA54\uD2B8\uB9AD\uC2A4 \uAC00\uACF5 \uB2E8\uACC4\uC5D0\uC11C \uC790\uC8FC \uC0AC\uC6A9\uD558\uB294 \uC5F0\uC0B0\uC744 \uD3B8\uB9AC\uD558\uAC8C \uC9C0\uC6D0\uD558\uB294 MXQL\uC758 \uC790\uB8CC \uAD6C\uC870\uC785\uB2C8\uB2E4. \uBA54\uD2B8\uB9AD\uC2A4 \uAC00\uACF5 \uB2E8\uACC4\uC758 ",(0,i.jsx)(n.a,{href:"mxql-calculate#group",children:"GROUP"}),", ",(0,i.jsx)(n.a,{href:"mxql-calculate#update",children:"UPDATE"})," \uBA85\uB839\uC5B4\uB294 \uBA54\uD2B8\uB9AD\uC2A4\uAC00 MetricValue \uD615\uD0DC\uB85C \uC800\uC7A5\uB418\uC5B4 \uC788\uC744 \uB54C\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,i.jsx)(n.p,{children:"\uC608\uB97C \uB4E4\uC5B4 \uB2E4\uC74C\uACFC \uAC19\uC740 \uB370\uC774\uD130\uAC00 \uC788\uB2E4\uACE0 \uAC00\uC815\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4."}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"time"}),(0,i.jsx)(n.th,{children:"tx_count"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2021/06/24 13:40:00"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2021/06/24 13:40:10"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2021/06/24 13:40:20"}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2021/06/24 13:40:30"}),(0,i.jsx)(n.td,{children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2021/06/24 13:40:40"}),(0,i.jsx)(n.td,{children:"5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2021/06/24 13:40:50"}),(0,i.jsx)(n.td,{children:"6"})]})]})]}),(0,i.jsxs)(n.p,{children:["\uC704 \uB370\uC774\uD130\uB97C 30\uCD08 \uAC04\uACA9\uC73C\uB85C ",(0,i.jsx)(n.a,{href:"mxql-calculate#group",children:"GROUP"}),"\uC758 merge \uC635\uC158\uC744 \uC9C4\uD589\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD615\uD0DC\uB85C \uB370\uC774\uD130\uB97C \uBCC0\uD615\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"time"}),(0,i.jsx)(n.th,{children:"tx_count"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2021/06/24 13:40:00 ~ 2021/06/24 13:40:20"}),(0,i.jsx)(n.td,{children:"1,2,3\uC5D0 \uB300\uD55C MetricValue"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2021/06/24 13:40:30 ~ 2021/06/24 13:40:50"}),(0,i.jsx)(n.td,{children:"4,5,6\uC5D0 \uB300\uD55C MetricValue"})]})]})]}),(0,i.jsx)(n.p,{children:"\uB370\uC774\uD130\uB97C MetricValue\uB85C \uBCC0\uD658\uD558\uBA74 \uCD1D 6\uAC00\uC9C0 \uC635\uC158\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\uC635\uC158"}),(0,i.jsx)(n.th,{children:"\uAE30\uB2A5"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sum"}),(0,i.jsx)(n.td,{children:"MetricValue\uC5D0 \uD3EC\uD568\uB41C \uAC12\uC744 \uB354\uD569\uB2C8\uB2E4."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"min"}),(0,i.jsx)(n.td,{children:"MetricValue\uC5D0 \uD3EC\uD568\uB41C \uAC12 \uC911 \uCD5C\uC18C\uAC12\uC744 \uAD6C\uD569\uB2C8\uB2E4."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"max"}),(0,i.jsx)(n.td,{children:"MetricValue\uC5D0 \uD3EC\uD568\uB41C \uAC12 \uC911 \uCD5C\uB300\uAC12\uC744 \uAD6C\uD569\uB2C8\uB2E4."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"last"}),(0,i.jsx)(n.td,{children:"MetricValue\uC5D0 \uD3EC\uD568\uB41C \uAC12 \uC911 \uB9C8\uC9C0\uB9C9\uC5D0 \uCD94\uAC00\uB41C \uAC12\uC744 \uAD6C\uD569\uB2C8\uB2E4."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"avg"}),(0,i.jsx)(n.td,{children:"MetricValue\uC5D0 \uD3EC\uD568\uB41C \uAC12\uC758 \uD3C9\uADE0\uC744 \uAD6C\uD569\uB2C8\uB2E4."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cnt"}),(0,i.jsx)(n.td,{children:"MetricValue\uC5D0 \uD3EC\uD568\uB41C \uAC12\uC758 \uAC2F\uC218\uB97C \uAD6C\uD569\uB2C8\uB2E4."})]})]})]}),(0,i.jsxs)(n.p,{children:["MetricValue \uC635\uC158\uC740 ",(0,i.jsx)(n.a,{href:"mxql-calculate#update",children:"UPDATE"})," \uBA85\uB839\uC5B4\uB97C \uD1B5\uD574 \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:"title='UPDATE'",children:"CATEGORY app_counter\nTAGLOAD\nSELECT [ time, okindName, okind, apdex_satisfied, apdex_tolerated, apdex_total]\n-- GROUP \uBA85\uB839\uC5B4\uC758 merge \uC635\uC158\uC744 \uD1B5\uD574 MetricValue\uB85C \uBCC0\uD658\uD560 field\uB97C \uC124\uC815\nGROUP { timeunit:5000, pk:okind, last:okindName, merge:[apdex_satisfied, apdex_tolerated, apdex_total] }\n-- UPDATE \uBA85\uB839\uC5B4\uB97C \uD1B5\uD574 sum \uC635\uC158\uC744 \uC801\uC6A9\nUPDATE { key:[apdex_satisfied, apdex_tolerated, apdex_total], value:sum }\n"})})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(n.h2,{id:"metricvalue-\uD0C0\uC785\uC758-\uB370\uC774\uD130-\uC774\uC6A9-\uBC29\uBC95",children:"MetricValue \uD0C0\uC785\uC758 \uB370\uC774\uD130 \uC774\uC6A9 \uBC29\uBC95"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"GROUP"})," \uBA85\uB839\uC5B4\uC758 merge \uC635\uC158\uC5D0 \uD544\uB4DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CATEGORY app_counter\nTAGLOAD\nSELECT [ time, okindName, okind, apdex_satisfied, apdex_tolerated, apdex_total]\n-- GROUP \uBA85\uB839\uC5B4\uC758 merge \uC635\uC158\uC744 \uD1B5\uD574 MetricValue\uB85C \uBCC0\uD658\uD560 field\uB97C \uC124\uC815\nGROUP { timeunit:5000, pk:okind, last:okindName, merge:[apdex_satisfied, apdex_tolerated, apdex_total] }\n-- UPDATE \uBA85\uB839\uC5B4\uB97C \uD1B5\uD574 sum \uC635\uC158\uC744 \uC801\uC6A9\nUPDATE { key:[apdex_satisfied, apdex_tolerated, apdex_total], value:sum }\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\uC218\uC9D1\uC11C\uBC84\uC5D0 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD560 \uB54C\uBD80\uD130 \uBAA8\uB4E0 \uD544\uB4DC\uC5D0\uB294 MetricValue \uD615\uC2DD\uC73C\uB85C \uC800\uC7A5\uB41C \uCE74\uD14C\uACE0\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"\uC0AC\uC774\uD2B8\uB9F5"})})," > ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"\uBD84\uC11D"})})," > ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"\uBA54\uD2B8\uB9AD\uC2A4 \uC870\uD68C"})})," > ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"\uCE74\uD14C\uACE0\uB9AC"})})," \uC635\uC158\uC5D0\uB294 ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"\uAE30\uBCF8"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"5\uBD84"})}),", ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"1\uC2DC\uAC04"})})," \uB2E8\uC704\uB85C \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uCE74\uD14C\uACE0\uB9AC\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC11C ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"5\uBD84"})})," \uB610\uB294 ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"1\uC2DC\uAC04"})}),"\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uCE74\uD14C\uACE0\uB9AC\uAC00 MetricValue \uD615\uC2DD\uC73C\uB85C \uC800\uC7A5\uB41C \uCE74\uD14C\uACE0\uB9AC\uC785\uB2C8\uB2E4."]}),"\n",(0,i.jsx)(s,{img:"mxql-3.png",desc:"MetricValue \uD615\uC2DD\uC73C\uB85C \uC124\uC815\uD560 \uC218 \uC788\uB294 \uCE74\uD14C\uACE0\uB9AC \uBAA9\uB85D"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"5\uBD84"})})," \uB610\uB294 ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"1\uC2DC\uAC04"})}),"\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uB294 \uCE74\uD14C\uACE0\uB9AC\uC758 \uC774\uB984\uC5D0 ",(0,i.jsx)(n.code,{children:"{m5}"})," \uB610\uB294 ",(0,i.jsx)(n.code,{children:"{h1}"}),"\uC744 \uC870\uD569\uD558\uBA74 ",(0,i.jsx)(n.code,{children:"GROUP"})," \uBA85\uB839\uC5B4\uC758 merge \uC635\uC158\uC744 \uC801\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uBC14\uB85C ",(0,i.jsx)(n.code,{children:"UPDATE"})," \uBA85\uB839\uC5B4\uC758 ",(0,i.jsx)(n.code,{children:"sum"})," \uC635\uC158\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CATEGORY app_counter{m5}\nTAGLOAD\nSELECT [time, pname, host_ip, pid, httpc_count]\n-- GROUP \uBA85\uB839\uC5B4\uB97C \uC801\uC6A9\uD558\uC9C0 \uC54A\uC544\uB3C4 \uC774\uBBF8 \uB370\uC774\uD130\uAC00 MetricValue \uD0C0\uC785\uC774\uAE30 \uB54C\uBB38\uC5D0 UPDATE \uBA85\uB839\uC5B4\uB97C \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\nUPDATE { key : httpc_count, value : avg }\n"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsxs)(n.h2,{id:"metricvalue-\uD0C0\uC785\uC758-\uAE30\uBCF8-\uC5F0\uC0B0-avg",children:["MetricValue \uD0C0\uC785\uC758 \uAE30\uBCF8 \uC5F0\uC0B0 ",(0,i.jsx)(n.code,{children:"avg"})]}),(0,i.jsxs)(n.p,{children:["MetricValue \uD615\uC2DD \uD544\uB4DC\uC758 \uAE30\uBCF8 \uCD9C\uB825 \uD615\uD0DC\uB294 ",(0,i.jsx)(n.code,{children:"avg"}),"\uC785\uB2C8\uB2E4. \uC989 MetricValue \uD615\uC2DD\uC758 \uD544\uB4DC\uB294 \uBCC4\uB3C4\uC758 \uC635\uC158\uC744 \uC124\uC815\uD558\uC9C0 \uC54A\uC73C\uBA74 ",(0,i.jsx)(n.code,{children:"avg"}),"\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4. \uB2E4\uC74C \uB450 \uCFFC\uB9AC\uB294 \uAC19\uC740 \uACB0\uACFC\uB97C \uAC00\uC9D1\uB2C8\uB2E4."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"avg\uB97C \uC9C0\uC815\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CATEGORY app_counter\nTAGLOAD\nSELECT [time, pcode,pname, tps]\nGROUP  {timeunit:5000, pk:pcode, last: pname, merge:tps}\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"avg\uB97C \uC9C0\uC815\uD55C \uACBD\uC6B0"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CATEGORY app_counter\nTAGLOAD\nSELECT [time, pcode,pname, tps]\nGROUP  {timeunit:5000, pk:pcode, last: pname, merge:tps}\nUPDATE {key:tps, value:avg}\n"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(n.h2,{id:"custom-mxql",children:"\uC0AC\uC804 \uC815\uC758 MXQL \uCFFC\uB9AC\uBB38"}),(0,i.jsx)(n.p,{children:"MXQL \uCFFC\uB9AC\uB97C \uC9C1\uC811 \uC791\uC131\uD558\uC9C0 \uC54A\uACE0 \uC0AC\uC804\uC5D0 \uC815\uC758\uB41C MXQL \uCFFC\uB9AC\uD30C\uC77C\uC758 \uACBD\uB85C\uB97C \uC124\uC815\uD574 MXQL\uC744 \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 '\uC5D0\uC774\uC804\uD2B8\uBCC4 \uC561\uD2F0\uBE0CTX \uAC74\uC218', '<\uAD6C\uAC04\uBCC4> \uAC74\uC218', '\uCD5C\uADFC 15\uCD08'\uB97C \uAD6C\uD558\uB294 MXQL \uCFFC\uB9AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"HEADER {  act0$:I, act3$:I, act8$:I, act$:I}\nTIME-RANGE {duration:15s, etime:$etime}\nOIDSET {oid:$oid, okind:$okind, onode:$onode}\nCATEGORY app_counter\n\nTAGLOAD {backward:true}\n\nSELECT [oid, oname, active_tx_0, active_tx_3, active_tx_8, active_tx_count, pcode]\nFIRST-ONLY {key:oid}\nRENAME {src:active_tx_0,  dst:act0}\nRENAME {src:active_tx_3,  dst:act3}\nRENAME {src:active_tx_8,  dst:act8}\nRENAME {src:active_tx_count,  dst:act}\nCREATE {key:_id_, from:oid}\nCREATE {key:_name_, from:oname}\n\nINJECT default\n"})}),(0,i.jsx)(n.p,{children:"\uB9CC\uC57D \uC704 \uCFFC\uB9AC\uAC00 \uC218\uC9D1\uC11C\uBC84\uC5D0 \uB4F1\uB85D\uB418\uC5B4 \uC788\uB2E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC785\uB825\uD558\uB294 \uAC83\uB9CC\uC73C\uB85C \uAC19\uC740 \uB370\uC774\uD130\uB97C \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC124\uC815\uD55C \uACBD\uB85C\uC5D0 \uC800\uC7A5\uD55C \uC11C\uBC84\uC758 \uD30C\uC77C \uB0B4\uC6A9\uC744 \uC77D\uC5B4\uC11C \uD638\uCD9C\uD574\uC8FC\uB294 \uBC29\uC2DD\uC785\uB2C8\uB2E4. \uC0AC\uC804 \uC815\uC758\uD55C \uD30C\uC77C\uC758 \uACBD\uB85C\uB97C \uC785\uB825\uD558\uC138\uC694."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"/app/act_tx/act_tx_oid\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#custom-query-saas",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uCFFC\uB9AC\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]})]}),"\n",(0,i.jsx)(n.section,{className:"remark-sectionize-h2",children:(0,i.jsx)(n.h2,{id:"\uCC38\uACE0\uC790\uB8CC",children:"\uCC38\uACE0\uC790\uB8CC"})}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"bind-parameter",children:"\uBC14\uC778\uB4DC \uBCC0\uC218(\uD30C\uB77C\uBBF8\uD130)"}),(0,i.jsxs)(n.p,{children:["MXQL\uC5D0\uC11C\uB294 \uBC14\uC778\uB4DC \uBCC0\uC218\uB97C \uC0AC\uC6A9\uD560 \uC218\uC788\uC2B5\uB2C8\uB2E4. \uBC14\uC778\uB4DC \uBCC0\uC218\uB294 ",(0,i.jsx)(n.code,{children:"$"}),"\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4. \uB610\uD55C value\uC5D0 \uD574\uB2F9\uD558\uB294 \uBD80\uBD84\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SKIP $skip_value\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SKIP [$skip_value]\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SKIP {value:$skip_value}\n"})}),(0,i.jsx)(n.p,{children:"key\uB85C \uBC14\uC778\uB4DC \uBCC0\uC218\uB97C \uC804\uB2EC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SKIP {$option:10}\n"})}),(0,i.jsx)(n.p,{children:"\uCFFC\uB9AC\uC5D0\uC11C \uBC14\uC778\uB4DC \uBCC0\uC218\uB97C \uC0AC\uC6A9\uD588\uC73C\uBA74 MXQL\uC744 \uC2E4\uD589\uD560 \uB54C \uC785\uB825\uD560 \uAC12\uC744 \uC804\uB2EC\uD574\uC57C \uD569\uB2C8\uB2E4."}),(0,i.jsx)(s,{img:"mxql-1.png",desc:"\uBC14\uC778\uB4DC \uBCC0\uC218 \uC124\uC815 \uC608\uC2DC"}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"\uBC14\uC778\uB4DC \uBCC0\uC218\uC758 \uC774\uB984\uC740 \uB300\uC18C\uBB38\uC790 \uC54C\uD30C\uBCB3\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC22B\uC790 \uBC0F \uD2B9\uC218\uBB38\uC790\uB294 \uBC14\uC778\uB4DC \uBCC0\uC218\uC758 \uC774\uB984\uC5D0 \uD3EC\uD568\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."})})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"\uB370\uC774\uD130-\uB85C\uB529\uBC29\uC2DD",children:"\uB370\uC774\uD130 \uB85C\uB529\uBC29\uC2DD"}),(0,i.jsxs)(n.p,{children:["MXQL\uC5D0\uC11C \uC870\uD68C\uD560 \uC218 \uC788\uB294 \uB370\uC774\uD130\uB294 ",(0,i.jsx)(n.a,{href:"../metrics/common-metrics-intro",children:"\uBA54\uD2B8\uB9AD\uC2A4"}),"\uC758 \uD615\uC2DD\uC5D0 \uB530\uB77C\uC11C \uD06C\uAC8C \uB450 \uAC00\uC9C0\uB85C \uB098\uB20C \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\uBA54\uD2B8\uB9AD\uC2A4\uC758 \uB370\uC774\uD130\uAC00 \uD0DC\uADF8\uC640 \uD544\uB4DC\uC5D0 \uB098\uB204\uC5B4\uC11C \uC800\uC7A5\uB41C \uB370\uC774\uD130 (",(0,i.jsx)(n.a,{href:"mxql-loading#tagload",children:"TAGLOAD"}),"\uB97C \uC0AC\uC6A9\uD574\uC11C \uB85C\uB4DC\uD560 \uC218 \uC788\uB294 \uB370\uC774\uD130)"]}),"\n",(0,i.jsxs)(n.li,{children:["\uBA54\uD2B8\uB9AD\uC2A4\uC5D0 \uBAA8\uB4E0 \uB370\uC774\uD130\uAC00 \uD544\uB4DC\uC5D0 \uC800\uC7A5\uB41C \uB370\uC774\uD130 (",(0,i.jsx)(n.a,{href:"mxql-loading#flexload",children:"FLEXLOAD"}),"\uB97C \uC0AC\uC6A9\uD574\uC11C \uB85C\uB4DC\uD560 \uC218 \uC788\uB294 \uB370\uC774\uD130)"]}),"\n"]}),(0,i.jsxs)(n.p,{children:["\uB300\uBD80\uBD84\uC758 \uCE74\uD14C\uACE0\uB9AC\uB294 ",(0,i.jsx)(n.code,{children:"TAGLOAD"}),"\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. ",(0,i.jsx)(n.a,{href:"mxql-loading#flexload-items",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uC5D0 \uD3EC\uD568\uB41C \uCE74\uD14C\uACE0\uB9AC\uC758 \uB370\uC774\uD130\uB97C \uC0AC\uC6A9\uD560 \uACBD\uC6B0\uC5D0\uB9CC ",(0,i.jsx)(n.code,{children:"FLEXLOAD"}),"\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4."]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(n.h2,{id:"custom-query-saas",children:"SaaS \uC11C\uBE44\uC2A4\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uC0AC\uC804 \uC815\uC758\uB41C MXQL \uCFFC\uB9AC \uBAA9\uB85D"}),(0,i.jsxs)(n.p,{children:["MXQL \uCFFC\uB9AC\uB97C \uC9C1\uC811 \uC791\uC131\uD558\uC9C0 \uC54A\uACE0 \uACBD\uB85C(path)\uB85C \uC124\uC815\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC758 \uC8FC\uB41C \uBAA9\uC801\uC740 \uBCF5\uC7A1\uD55C \uCFFC\uB9AC\uB97C \uAC04\uD3B8\uD558\uAC8C \uD638\uCD9C\uD558\uAE30 \uC704\uD568\uC774 \uC544\uB2C8\uB77C, \uAD00\uB9AC\uC790\uAC00 \uC9C1\uC811 \uBCF8\uC778\uC758 \uC758\uB3C4\uB300\uB85C \uCFFC\uB9AC\uB97C \uC791\uC131\uD558\uACE0 \uC774\uB97C \uC0AC\uC6A9\uD558\uB294\uB370 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774\uBBF8 Yard\uC5D0 \uC5B4\uB5A4 \uCFFC\uB9AC\uB4E4\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uACE0 \uC0AC\uC6A9\uD558\uAE30\uBCF4\uB2E4 \uC9C1\uC811 \uCFFC\uB9AC\uB97C \uB4F1\uB85D\uD558\uB294 \uBC29\uD5A5\uC73C\uB85C \uD65C\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. ",(0,i.jsx)(n.code,{children:"JOIN"})," \uBA85\uB839\uC5B4\uB97C \uC0AC\uC6A9\uD574\uC57C\uD558\uB294 \uACBD\uC6B0\uB294 MXQL \uCFFC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 \uC911\uC5D0\uC11C\uB3C4 \uD2B9\uBCC4\uD55C \uACBD\uC6B0\uC774\uAE30 \uB54C\uBB38\uC5D0 \uAD00\uB9AC\uC790\uAC00 \uC9C1\uC811 \uCFFC\uB9AC\uB97C \uB4F1\uB85D\uD558\uACE0 \uD574\uB2F9 \uD30C\uC77C\uC758 \uACBD\uB85C(path)\uB97C \uC0AC\uC6A9\uD558\uB3C4\uB85D \uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"yard.conf"})," \uD30C\uC77C\uC758 ",(0,i.jsx)(n.code,{children:"mxql_root"}),"\uC5D0 \uC124\uC815\uD55C \uACBD\uB85C \uC544\uB798\uC5D0 \uB4F1\uB85D\uD558\uACE0 \uC2F6\uC740 \uCFFC\uB9AC\uB97C \uD30C\uC77C\uB85C \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. (default ./mxql)"]})})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"\uC5D0\uC774\uC804\uD2B8\uBCC4-\uC561\uD2F0\uBE0Ctx-\uAC74\uC218-\uAC74\uC218-\uCD5C\uADFC15\uCD08",children:"\uC5D0\uC774\uC804\uD2B8\uBCC4 \uC561\uD2F0\uBE0CTX \uAC74\uC218, \uAC74\uC218, \uCD5C\uADFC15\uCD08"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\uACBD\uB85C : ",(0,i.jsx)(n.em,{children:"/app/act_tx/act_tx_oid"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\uCFFC\uB9AC :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"HEADER {  act0$:I, act3$:I, act8$:I, act$:I}\n\nTIME-RANGE {duration:15s, etime:$etime}\n\nOIDSET {oid:$oid, okind:$okind, onode:$onode}\n\nCATEGORY app_counter\n\nTAGLOAD {backward:true}\n\nSELECT [oid, oname, active_tx_0, active_tx_3, active_tx_8, active_tx_count]\nFIRST-ONLY {key:oid}\nRENAME {src:active_tx_0,  dst:act0}\nRENAME {src:active_tx_3,  dst:act3}\nRENAME {src:active_tx_8,  dst:act8}\nRENAME {src:active_tx_count,  dst:act}\n\nCREATE {key:_id_, from:oid}\nCREATE {key:_name_, from:oname}\n"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"\uC5D0\uC774\uC804\uD2B8-\uBCC4-\uC0C1\uC138\uC815\uBCF4--\uC5D0\uC774\uC804\uD2B8\uBCC4-\uC561\uD2F0\uBE0Ctx-\uAC74\uC218-\uAC74\uC218-\uCD5C\uADFC15\uCD08",children:"\uC5D0\uC774\uC804\uD2B8 \uBCC4 \uC0C1\uC138\uC815\uBCF4 & \uC5D0\uC774\uC804\uD2B8\uBCC4 \uC561\uD2F0\uBE0CTX \uAC74\uC218, \uAC74\uC218, \uCD5C\uADFC15\uCD08"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\uACBD\uB85C : ",(0,i.jsx)(n.em,{children:"/app/act_tx/agent_with_tx"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\uCFFC\uB9AC :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CATEGORY agent_list\n\nOIDSET {oid:$oid, okind:$okind, onode:$onode}\n\nFLEXLOAD\n\nJOIN {query:'/app/act_tx/act_tx_oid', pk:oid, field:[act0,act3,act8, act] }\n\nUPDATE {key:act0, notnull:0}\nUPDATE {key:act3, notnull:0}\nUPDATE {key:act8, notnull:0}\nUPDATE {key:act, notnull:0}\n\nRENAME {src:[act0, act3, act8, act],  dst:[normal, slow, verySlow, total]}\n\nINJECT default\n"})}),"\n"]}),"\n"]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return d}});var l=s(67294);let i={},c=l.createContext(i);function d(e){let n=l.useContext(c);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);