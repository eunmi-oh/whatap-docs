"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["91564"],{75789:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>p,assets:()=>a,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"release-notes/k8s/k8s-1_7_15","title":"Kubernetes Agent v1.7.15","description":"2024\uB144 10\uC6D4 30\uC77C","source":"@site/docs/release-notes/k8s/k8s-1.7.15.mdx","sourceDirName":"release-notes/k8s","slug":"/release-notes/k8s/k8s-1_7_15","permalink":"/whatap-docs/release-notes/k8s/k8s-1_7_15","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/k8s/k8s-1.7.15.mdx","tags":[],"version":"current","frontMatter":{"id":"k8s-1_7_15","title":"Kubernetes Agent v1.7.15","toc_max_heading_level":2,"pagination_next":"release-notes/k8s/k8s-1_7_14","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Kubernetes Agent v1.7.16","permalink":"/whatap-docs/release-notes/k8s/k8s-1_7_16"},"next":{"title":"Kubernetes Agent v1.7.14","permalink":"/whatap-docs/release-notes/k8s/k8s-1_7_14"}}'),i=s("85893"),r=s("50065");let o={id:"k8s-1_7_15",title:"Kubernetes Agent v1.7.15",toc_max_heading_level:2,pagination_next:"release-notes/k8s/k8s-1_7_14",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},l=void 0,a={},d=[];function c(e){let n={a:"a",admonition:"admonition",code:"code",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Cmdname:s,Status:t}=n;return!s&&x("Cmdname",!0),!t&&x("Status",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"2024\uB144 10\uC6D4 30\uC77C"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{priority:"1",children:"New"}),"  ",(0,i.jsx)(s,{sid:"side_management",className:"uitext"})," > ",(0,i.jsx)(s,{sid:"side_agentSetting",className:"uitext"})," \uBA54\uB274\uC5D0\uC11C \uB85C\uADF8 \uD544\uD130\uB9C1 \uAE30\uB2A5 \uCD94\uAC00"]}),"\n",(0,i.jsx)(n.p,{children:"\uD2B9\uC815 \uCEE8\uD14C\uC774\uB108 \uB85C\uADF8 \uC218\uC9D1\uC744 \uC81C\uC5B4\uD560 \uC218 \uC788\uB294 \uB85C\uADF8 \uD544\uD130\uB9C1 \uAE30\uB2A5\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uD574\uB2F9 \uAE30\uB2A5\uC744 \uD1B5\uD574 \uC0AC\uC6A9\uC790\uB294 \uB124\uC784\uC2A4\uD398\uC774\uC2A4, Pod \uC774\uB984, \uCEE8\uD14C\uC774\uB108 \uC774\uB984 \uB4F1\uC744 \uAE30\uC900\uC73C\uB85C \uB85C\uADF8 \uC218\uC9D1\uC744 \uC138\uBD84\uD654\uD560 \uC218 \uC788\uC73C\uBA70, \uD544\uC694\uC5D0 \uB530\uB77C \uD2B9\uC815 \uCEE8\uD14C\uC774\uB108\uC758 \uB85C\uADF8 \uC218\uC9D1\uC744 \uD5C8\uC6A9 \uB610\uB294 \uCC28\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"log_filter_enabled"})," ",(0,i.jsx)("span",{class:"type",children:"bool"})]}),"\n",(0,i.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsx)(n.p,{children:"\uB85C\uADF8 \uD544\uD130 \uC0AC\uC6A9 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"log_filter_allow_list"})," ",(0,i.jsx)("span",{class:"type",children:"list"})]}),"\n",(0,i.jsx)(n.p,{children:"\uD5C8\uC6A9\uD560 \uB85C\uADF8\uC758 \uB9AC\uC2A4\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. \uD544\uD130\uB9C1 \uC801\uC6A9 \uC2DC \uD3EC\uD568\uD560 \uD56D\uBAA9\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"log_filter_deny_list"})," ",(0,i.jsx)("span",{class:"type",children:"list"})]}),"\n",(0,i.jsx)(n.p,{children:"\uC81C\uC678\uD560 \uB85C\uADF8\uC758 \uB9AC\uC2A4\uD2B8\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. \uD544\uD130\uB9C1 \uC801\uC6A9 \uC2DC \uC81C\uC678\uD560 \uD56D\uBAA9\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsxs)(n.p,{children:["\uB85C\uADF8 \uD544\uD130\uB9C1 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,i.jsx)(n.a,{href:"../../kubernetes/log",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Agent download: ",(0,i.jsx)(n.a,{href:"https://repo.whatap.io/docker/kube_mon_1.7.15.tar",children:"kube_mon_1.7.15.tar"})]})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function x(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var t=s(67294);let i={},r=t.createContext(i);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);