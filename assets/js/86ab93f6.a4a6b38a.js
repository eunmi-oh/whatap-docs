"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["49934"],{32794:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>p,assets:()=>l,toc:()=>d,frontMatter:()=>a});var t=JSON.parse('{"id":"release-notes/k8s/k8s-1_7_7","title":"Kubernetes Agent v1.7.7","description":"2024\uB144 07\uC6D4 11\uC77C","source":"@site/docs/release-notes/k8s/k8s-1.7.7.mdx","sourceDirName":"release-notes/k8s","slug":"/release-notes/k8s/k8s-1_7_7","permalink":"/whatap-docs/release-notes/k8s/k8s-1_7_7","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/k8s/k8s-1.7.7.mdx","tags":[],"version":"current","frontMatter":{"id":"k8s-1_7_7","title":"Kubernetes Agent v1.7.7","toc_max_heading_level":2,"pagination_next":"release-notes/k8s/k8s-1_7_6","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Kubernetes Agent v1.7.8","permalink":"/whatap-docs/release-notes/k8s/k8s-1_7_8"},"next":{"title":"Kubernetes Agent v1.7.6","permalink":"/whatap-docs/release-notes/k8s/k8s-1_7_6"}}'),r=s("85893"),i=s("50065");let a={id:"k8s-1_7_7",title:"Kubernetes Agent v1.7.7",toc_max_heading_level:2,pagination_next:"release-notes/k8s/k8s-1_7_6",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},o=void 0,l={},d=[];function c(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components},{Status:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"2024\uB144 07\uC6D4 11\uC77C"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{children:"Feature"})," Java \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uCFE0\uBC84\uB124\uD2F0\uC2A4 \uC5D0\uC774\uC804\uD2B8 \uC5F0\uB3D9 \uBC29\uC2DD \uCD94\uAC00"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Java \uC5D0\uC774\uC804\uD2B8 \uCEE8\uD14C\uC774\uB108 \uD658\uACBD\uBCC0\uC218\uC5D0 ",(0,r.jsx)(n.code,{children:"WHATAP_JAVA_AGENT_PATH"})," \uAC12\uC744 \uCD94\uAC00\uD574 \uCEE8\uD14C\uC774\uB108 ID \uC5F0\uB3D9 \uAE30\uB2A5 \uCD94\uAC00"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\uC5D0\uC774\uC804\uD2B8 \uD504\uB85C\uC138\uC2A4 ID\uB97C \uC774\uC6A9\uD558\uC5EC proc \uC815\uBCF4 \uC870\uD68C, \uD574\uB2F9 \uC815\uBCF4\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCEE8\uD14C\uC774\uB108 process name\uC5D0\uC11C \uC640\uD0ED \uC790\uBC14 \uD648(",(0,r.jsx)(n.code,{children:"$WHATAP_HOME"}),") \uCD94\uCD9C"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\uC704 \uACFC\uC815\uC5D0\uC11C \uC640\uD0ED \uC790\uBC14 \uD648(",(0,r.jsx)(n.code,{children:"$WHATAP_HOME"}),")\uC744 \uCC3E\uC9C0 \uBABB\uD558\uBA74 runtimeAPI\uB97C \uC0AC\uC6A9\uD574 \uC5D0\uC774\uC804\uD2B8 \uC774\uBBF8\uC9C0\uC5D0\uC11C \uC640\uD0ED \uC790\uBC14 \uD648 \uCD94\uCD9C"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uC5D0\uC774\uC804\uD2B8\uC758 \uBC84\uC804\uACFC \uD615\uC2DD \uCCB4\uD06C\uD558\uACE0, \uB2E4\uC74C\uC744 \uAE30\uC900 \uCDA9\uC871\uD574\uC57C valid \uBC84\uC804\uC73C\uB85C containerID \uC5F0\uB3D9 \uAE30\uB2A5 \uC218\uD589"}),"\n",(0,r.jsxs)(n.p,{children:["1. \uD30C\uC77C \uC774\uB984\uC774 ",(0,r.jsxs)(n.em,{children:["whatap.agent-",(0,r.jsx)(n.code,{children:"X.Y.Z"}),".jar"]}),"\uC774\uACE0 \uBC84\uC804 \uC815\uBCF4\uAC00 2.2.33\uBCF4\uB2E4 \uD06C\uAC70\uB098 \uAC19\uC740 \uACBD\uC6B0(",(0,r.jsx)(n.code,{children:"X.Y.Z"})," >= 2.2.33)"]}),"\n",(0,r.jsxs)(n.p,{children:["2. \uD30C\uC77C \uC774\uB984\uC774 ",(0,r.jsx)(n.em,{children:"whatap.agent.kube.jar"}),"\uC778 \uACBD\uC6B0"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{children:"Changed"})," \uC774\uBCA4\uD2B8 \uC218\uC9D1 \uBC29\uC2DD \uBCC0\uACBD: \uC5D0\uC774\uC804\uD2B8 \uAE30\uB3D9 \uC2DC\uC810 \uC774\uD6C4 \uC0DD\uC131\uB41C \uC774\uBCA4\uD2B8\uC5D0 \uB300\uD574\uC11C\uB9CC \uB370\uC774\uD130 \uC218\uC9D1(",(0,r.jsx)(n.code,{children:"kube_event"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Agent download: ",(0,r.jsx)(n.a,{href:"https://repo.whatap.io/docker/kube_mon_1.7.7.tar",children:"kube_mon_1.7.7.tar"})]})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var t=s(67294);let r={},i=t.createContext(r);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);