"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["40912"],{34520:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>a,assets:()=>c,toc:()=>o,frontMatter:()=>t});var i=JSON.parse('{"id":"kubernetes/node-details","title":"\uB178\uB4DC \uC0C1\uC138","description":"\uB178\uB4DC \uC0C1\uC138 \uC815\uBCF4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","source":"@site/docs/kubernetes/node-details.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/node-details","permalink":"/whatap-docs/kubernetes/node-details","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/node-details.mdx","tags":[],"version":"current","frontMatter":{"id":"node-details","title":"\uB178\uB4DC \uC0C1\uC138","description":"\uB178\uB4DC \uC0C1\uC138 \uC815\uBCF4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","keywords":["\uCFE0\uBC84\uB124\uD2F0\uC2A4","\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uBAA8\uB2C8\uD130\uB9C1","\uD074\uB7EC\uC2A4\uD130","\uB178\uB4DC \uC0C1\uC138"],"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"\uB178\uB4DC \uBAA9\uB85D","permalink":"/whatap-docs/kubernetes/resource-node-list"},"next":{"title":"\uB178\uB4DC \uB514\uC2A4\uD06C \uBAA9\uB85D","permalink":"/whatap-docs/kubernetes/node-disk-list"}}'),r=s("85893"),d=s("50065");let t={id:"node-details",title:"\uB178\uB4DC \uC0C1\uC138",description:"\uB178\uB4DC \uC0C1\uC138 \uC815\uBCF4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",keywords:["\uCFE0\uBC84\uB124\uD2F0\uC2A4","\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uBAA8\uB2C8\uD130\uB9C1","\uD074\uB7EC\uC2A4\uD130","\uB178\uB4DC \uC0C1\uC138"],isTranslationMissing:!1},l=void 0,c={},o=[{value:"\uC0C1\uB2E8 \uCC28\uD2B8",id:"\uC0C1\uB2E8-\uCC28\uD2B8",level:3},{value:"\uCEE8\uD14C\uC774\uB108 \uBC0F Pod \uC0C1\uC138 \uC815\uBCF4",id:"\uCEE8\uD14C\uC774\uB108-\uBC0F-pod-\uC0C1\uC138-\uC815\uBCF4",level:3},{value:"\uCEE8\uD14C\uC774\uB108",id:"\uCEE8\uD14C\uC774\uB108",level:4},{value:"Pod",id:"pod",level:4}];function h(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",section:"section",strong:"strong",ul:"ul",...(0,d.a)(),...e.components},{Cmdname:s,ImgLang:i}=n;return!s&&x("Cmdname",!0),!i&&x("ImgLang",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\uD648 \uD654\uBA74 > \uD504\uB85C\uC81D\uD2B8 \uC120\uD0DD > ",(0,r.jsx)(s,{sid:"cluster",className:"uitext"})," > ",(0,r.jsx)(s,{sid:"node_detail",className:"uitext"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uB178\uB4DC \uC0C1\uC138"})})," \uD654\uBA74\uC740 \uC0C1\uB2E8\uC758 4\uAC1C \uCC28\uD2B8\uC640 \uB178\uB4DC \uB0B4 ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uCEE8\uD14C\uC774\uB108"})})," \uBC0F ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Pod"})})," \uC0C1\uC138 \uC815\uBCF4\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uB178\uB4DC \uC140\uB809\uD130\uB97C \uD1B5\uD574 \uC870\uD68C\uB97C \uC6D0\uD558\uB294 \uB178\uB4DC\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(i,{img:"k8s-resource-node-detail.png",desc:"\uB178\uB4DC \uC0C1\uC138 \uD654\uBA74"}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsx)(n.p,{children:"5\uCD08 \uC8FC\uAE30\uB85C \uCD5C\uADFC 1\uBD84 \uB370\uC774\uD130\uB97C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4."})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"\uC0C1\uB2E8-\uCC28\uD2B8",children:"\uC0C1\uB2E8 \uCC28\uD2B8"}),(0,r.jsx)(n.p,{children:"\uB2E4\uC74C\uACFC \uAC19\uC740 4\uAC1C\uC758 \uCC28\uD2B8 \uC815\uBCF4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"CPU Usage"})}),": \uB178\uB4DC\uC758 CPU \uC0AC\uC6A9\uB7C9\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Memory Usage"})}),": \uB178\uB4DC\uC758 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Network"})}),": \uB178\uB4DC\uC758 \uB124\uD2B8\uC6CC\uD06C \uC778\uD130\uD398\uC774\uC2A4\uC758 \uC785\uCD9C\uB825 \uD2B8\uB798\uD53D\uACFC \uC624\uB958 \uD328\uD0B7\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Disk Usage"})}),": \uB178\uB4DC\uC758 Disk \uC0AC\uC6A9\uB7C9\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(n.section,{className:"remark-sectionize-h3",children:(0,r.jsx)(n.h3,{id:"\uCEE8\uD14C\uC774\uB108-\uBC0F-pod-\uC0C1\uC138-\uC815\uBCF4",children:"\uCEE8\uD14C\uC774\uB108 \uBC0F Pod \uC0C1\uC138 \uC815\uBCF4"})}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h4",children:[(0,r.jsx)(n.h4,{id:"\uCEE8\uD14C\uC774\uB108",children:"\uCEE8\uD14C\uC774\uB108"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uCEE8\uD14C\uC774\uB108"})})," \uD0ED \uC120\uD0DD \uC2DC \uB178\uB4DC \uB0B4 \uCEE8\uD14C\uC774\uB108 \uC0C1\uC138 \uC815\uBCF4 \uC0C1\uB2E8\uC5D0\uC11C ",(0,r.jsx)(n.code,{children:"cpu_quota"}),", ",(0,r.jsx)(n.code,{children:"cpu_request"}),", ",(0,r.jsx)(n.code,{children:"cpu_total_milli"}),", ",(0,r.jsx)(n.code,{children:"mem_limit"}),", ",(0,r.jsx)(n.code,{children:"mem_request"}),", ",(0,r.jsx)(n.code,{children:"mem_working_set"})," \uC9C0\uD45C\uC758 \uD569\uACC4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uC6D0\uD558\uB294 \uCEEC\uB7FC \uC120\uD0DD \uC2DC \uD574\uB2F9 \uCEEC\uB7FC \uAE30\uC900\uC73C\uB85C \uCEE8\uD14C\uC774\uB108 \uBAA9\uB85D\uC744 \uC815\uB82C\uD574 \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\uCEE8\uD14C\uC774\uB108 \uC120\uD0DD \uC2DC ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uCEE8\uD14C\uC774\uB108 \uBAA9\uB85D"})})," \uBA54\uB274\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,r.jsx)(n.a,{href:"resource-container-list",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h4",children:[(0,r.jsx)(n.h4,{id:"pod",children:"Pod"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Pod"})})," \uD0ED \uC120\uD0DD \uC2DC Pod \uC0C1\uC138 \uC815\uBCF4\uB97C \uC870\uD68C\uD569\uB2C8\uB2E4. \uC0C1\uC138 \uC815\uBCF4 \uC0C1\uB2E8\uC5D0\uC11C ",(0,r.jsx)(n.code,{children:"cpu_quota"}),", ",(0,r.jsx)(n.code,{children:"cpu_request"}),", ",(0,r.jsx)(n.code,{children:"cpu_total_milli"}),", ",(0,r.jsx)(n.code,{children:"mem_limit"}),", ",(0,r.jsx)(n.code,{children:"mem_request"}),", ",(0,r.jsx)(n.code,{children:"mem_working_set"})," \uC9C0\uD45C\uC758 \uD569\uACC4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uC6D0\uD558\uB294 \uCEEC\uB7FC \uC120\uD0DD \uC2DC \uD574\uB2F9 \uCEEC\uB7FC \uAE30\uC900\uC73C\uB85C Pod \uBAA9\uB85D\uC744 \uC815\uB82C\uD574 \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Pod \uC120\uD0DD \uC2DC ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Pod \uBAA9\uB85D"})})," \uBA54\uB274\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,r.jsx)(n.a,{href:"resource-pod-list",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]}),"\n"]}),"\n"]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function x(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var i=s(67294);let r={},d=i.createContext(r);function t(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);