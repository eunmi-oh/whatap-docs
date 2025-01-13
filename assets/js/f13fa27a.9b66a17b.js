"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["56028"],{58934:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"cubrid-v1/monitoring-intro","title":"CUBRID V1 \uBAA8\uB2C8\uD130\uB9C1","description":"\uC640\uD0ED \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4(DBX)\uC740 Query \uAE30\uBC18\uC73C\uB85C \uB370\uC774\uD130\uB97C \uC218\uC9D1\uD558\uC5EC \uC131\uB2A5 \uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.","source":"@site/docs/cubrid-v1/monitoring-intro.mdx","sourceDirName":"cubrid-v1","slug":"/cubrid-v1/monitoring-intro","permalink":"/whatap-docs/cubrid-v1/monitoring-intro","draft":false,"unlisted":false,"editUrl":"undefined/docs/cubrid-v1/monitoring-intro.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-intro","title":"CUBRID V1 \uBAA8\uB2C8\uD130\uB9C1","description":"\uC640\uD0ED \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4(DBX)\uC740 Query \uAE30\uBC18\uC73C\uB85C \uB370\uC774\uD130\uB97C \uC218\uC9D1\uD558\uC5EC \uC131\uB2A5 \uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.","displayed_sidebar":"cubridV1Sidebar","hide_table_of_contents":false,"keywords":["CUBRID","\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBAA8\uB2C8\uD130\uB9C1","\uB370\uC774\uD130\uBCA0\uC774\uC2A4","\uBAA8\uB2C8\uD130\uB9C1","DBX"],"isTranslationMissing":false},"sidebar":"cubridV1Sidebar","next":{"title":"\uC9C0\uC6D0 \uD658\uACBD","permalink":"/whatap-docs/cubrid-v1/monitoring-support"}}'),i=s("85893"),r=s("50065");let l={id:"monitoring-intro",title:"CUBRID V1 \uBAA8\uB2C8\uD130\uB9C1",description:"\uC640\uD0ED \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4(DBX)\uC740 Query \uAE30\uBC18\uC73C\uB85C \uB370\uC774\uD130\uB97C \uC218\uC9D1\uD558\uC5EC \uC131\uB2A5 \uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.",displayed_sidebar:"cubridV1Sidebar",hide_table_of_contents:!1,keywords:["CUBRID","\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBAA8\uB2C8\uD130\uB9C1","\uB370\uC774\uD130\uBCA0\uC774\uC2A4","\uBAA8\uB2C8\uD130\uB9C1","DBX"],isTranslationMissing:!1},d=void 0,c={},o=[{value:"CUBRID \uBAA8\uB2C8\uD130\uB9C1 \uD2B9\uC7A5\uC810",id:"cubrid-\uBAA8\uB2C8\uD130\uB9C1-\uD2B9\uC7A5\uC810",level:2},{value:"\uC9C0\uC6D0 \uAE30\uB2A5",id:"\uC9C0\uC6D0-\uAE30\uB2A5",level:2}];function x(e){let n={h2:"h2",li:"li",p:"p",section:"section",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\uC640\uD0ED \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4(DBX)\uC740 Query \uAE30\uBC18\uC73C\uB85C \uB370\uC774\uD130\uB97C \uC218\uC9D1\uD558\uC5EC \uC131\uB2A5 \uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC131\uB2A5 \uAD00\uB9AC\uB294 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uC131\uB2A5\uC744 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uAC10\uC2DC\uD558\uACE0 \uBB38\uC81C\uC810\uC744 \uC9C4\uB2E8, \uBD84\uC11D\uD569\uB2C8\uB2E4. \uBB38\uC81C\uAC00 \uB418\uB294 SQL\uC744 \uD29C\uB2DD\uD558\uACE0 \uC801\uC6A9\uD558\uC5EC \uC774\uC288\uAC00 \uD574\uACB0\uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4."}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(n.h2,{id:"cubrid-\uBAA8\uB2C8\uD130\uB9C1-\uD2B9\uC7A5\uC810",children:"CUBRID \uBAA8\uB2C8\uD130\uB9C1 \uD2B9\uC7A5\uC810"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\uC2E4\uC2DC\uAC04 DB \uBAA8\uB2C8\uD130\uB9C1"})}),"\n",(0,i.jsx)(n.p,{children:"\uC2E4\uC2DC\uAC04\uC73C\uB85C DB \uC131\uB2A5\uC9C0\uD45C\uC640 \uC218\uD589 \uC911\uC778 SQL\uC744 \uC218\uC9D1\uD558\uC5EC \uBB38\uC81C\uC810\uC758 \uBD84\uC11D\uACFC \uC131\uB2A5 \uCD5C\uC801\uD654\uC5D0 \uD544\uC694\uD55C \uB370\uC774\uD130\uB97C \uACF5\uC720\uD558\uACE0 \uB370\uC774\uD130 \uAE30\uBC18\uC758 \uC758\uC0AC\uACB0\uC815\uC744 \uAC00\uB2A5\uD558\uAC8C \uD569\uB2C8\uB2E4. Active Session, Lock Tree \uB4F1 \uC7A5\uC560\uC758 \uC8FC\uC694 \uAD00\uC2EC\uC0AC\uB4E4\uB85C \uB41C \uB300\uC2DC\uBCF4\uB4DC\uB97C \uC81C\uACF5\uD558\uACE0 \uC54C\uB9BC \uBC1C\uC0DD \uB0B4\uC6A9\uC744 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uAC10\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD2B9\uC815 SQL\uC758 Plan \uC815\uBCF4 \uD655\uC778\uC744 \uD1B5\uD574 SQL \uD29C\uB2DD\uC758 \uB2E8\uC11C\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\uD2B9\uC815 \uC2DC\uC810 \uBD84\uC11D"})}),"\n",(0,i.jsx)(n.p,{children:"\uC9C0\uD45C\uC758 \uB2E8\uAE30 \uCD94\uC774, \uC7A5\uAE30 \uCD94\uC774, \uC9C0\uD45C \uBE44\uAD50 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uC5EC \uC9C0\uB098\uAC04 \uC2DC\uC810\uC758 \uBB38\uC81C \uC0C1\uD669\uC744 \uBD84\uC11D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. SQL, Lock Tree, Parallel Query, \uD14C\uC774\uBE14\uC2A4\uD398\uC774\uC2A4 \uC99D\uAC10 \uB4F1\uC758 \uC774\uB825 \uC815\uBCF4 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.  \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD30C\uB77C\uBBF8\uD130 \uBCC0\uACBD \uB0B4\uC5ED\uC744 \uCD94\uC801\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\uB300\uC6A9\uB7C9 \uADDC\uBAA8\uC5D0\uB3C4 \uD6A8\uC728\uC801\uC778 \uAD6C\uC870"})}),"\n",(0,i.jsx)(n.p,{children:"\uB2E4\uC218\uC758 DB \uC11C\uBC84 \uAD00\uB9AC \uC2DC\uC5D0\uB3C4 \uB2E8\uC77C\uD654\uB41C \uC131\uB2A5 \uB370\uC774\uD130 \uC218\uC9D1 \uBC0F \uD6A8\uC728\uC801\uC778 \uB370\uC774\uD130 \uC800\uC7A5 \uAD6C\uC870\uB97C \uD1B5\uD574 \uCD5C\uC801\uC758 \uBD84\uC11D\uD658\uACBD\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\uD1B5\uD569 \uBAA8\uB2C8\uD130\uB9C1"})}),"\n",(0,i.jsx)(n.p,{children:"\uC560\uD50C\uB9AC\uCF00\uC774\uC158, \uC11C\uBC84, \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBAA8\uB2C8\uD130\uB9C1 \uC81C\uD488\uC744 \uBAA8\uB450 \uC124\uCE58\uD558\uBA74 \uC11C\uBE44\uC2A4 \uC774\uC0C1 \uD604\uC0C1 \uD30C\uC545 \uC2DC \uC5F0\uACC4\uB41C \uBDF0\uB97C \uD1B5\uD574 \uC7A5\uC560 \uBC1C\uC0DD \uC2DC \uBE60\uB978 \uC6D0\uC778 \uBD84\uC11D\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"WhaTap SaaS"})}),"\n",(0,i.jsx)(n.p,{children:"\uB2E4\uC591\uD55C \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC81C\uD488\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uACE0 \uC6D4\uAD6C\uB3C5 \uBC29\uC2DD\uC73C\uB85C \uC0AC\uC6A9 \uAE30\uAC04\uC744 \uC790\uC720\uB86D\uAC8C \uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. (\uC124\uCE58\uD615\uC73C\uB85C\uB3C4 \uC81C\uACF5 \uAC00\uB2A5)"}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(n.h2,{id:"\uC9C0\uC6D0-\uAE30\uB2A5",children:"\uC9C0\uC6D0 \uAE30\uB2A5"}),(0,i.jsx)(n.p,{children:"\uB2E4\uC74C\uC740 \uC774\uC6A9 \uAC00\uB2A5\uD55C \uAE30\uB2A5\uB4E4\uC785\uB2C8\uB2E4."}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\uCE74\uD14C\uACE0\uB9AC"}),(0,i.jsx)(n.th,{children:"\uB370\uC774\uD130\uBCA0\uC774\uC2A4"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"CUBRID"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{rowSpan:"4",children:"Monitoring"}),(0,i.jsx)(n.td,{children:"Instance List"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Instancs Monitoring"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Multi DataBase (tenant)"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-no",children:"\u274C"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Slow Query"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-no",children:"\u274C"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{rowSpan:"6",children:"Analysis"}),(0,i.jsx)(n.td,{children:"Trends"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Trends Compare"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Lock Tree"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Parallel Query Tree"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-no",children:"\u274C"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Dead Lock"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-no",children:"\u274C"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DB Parameter"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{rowSpan:"4",children:"Statistics"}),(0,i.jsx)(n.td,{children:"SQL Stat"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Table Size"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Database(TableSpace) Size"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SGA Size"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-no",children:"\u274C"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Report"}),(0,i.jsx)(n.td,{children:"Daily / Weekly / Monthly Report"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{rowSpan:"4",children:"Event"}),(0,i.jsx)(n.td,{children:"Event List"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Event Stat"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Event Setting"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Notification"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{rowSpan:"3",children:"Management"}),(0,i.jsx)(n.td,{children:"Agent Setup"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Agent List"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Project Management"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)("span",{class:"emoji-ok",children:"\u2705"})})]})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(67294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);