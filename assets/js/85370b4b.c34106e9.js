"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["20604"],{34382:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"release-notes/k8s/k8s-1_5_7","title":"Kubernetes Agent v1.5.7","description":"2024\uB144 03\uC6D4 07\uC77C","source":"@site/docs/release-notes/k8s/k8s-1.5.7.mdx","sourceDirName":"release-notes/k8s","slug":"/release-notes/k8s/k8s-1_5_7","permalink":"/whatap-docs/release-notes/k8s/k8s-1_5_7","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/k8s/k8s-1.5.7.mdx","tags":[],"version":"current","frontMatter":{"id":"k8s-1_5_7","title":"Kubernetes Agent v1.5.7","toc_max_heading_level":2,"pagination_next":"release-notes/k8s/k8s-1_5_6","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"Kubernetes Agent v1.5.6","permalink":"/whatap-docs/release-notes/k8s/k8s-1_5_6"}}'),r=s("85893"),i=s("50065");let o={id:"k8s-1_5_7",title:"Kubernetes Agent v1.5.7",toc_max_heading_level:2,pagination_next:"release-notes/k8s/k8s-1_5_6",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},a=void 0,l={},d=[];function c(e){let n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Status:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"2024\uB144 03\uC6D4 07\uC77C"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{children:"Feature"})," whatap-node-helper\uB294 \uB178\uB4DC \uB514\uC2A4\uD06C \uBC0F \uCEE8\uD14C\uC774\uB108\uC758 \uC774\uBBF8\uC9C0, \uC131\uB2A5 \uB370\uC774\uD130\uB97C \uC218\uC9D1\uD569\uB2C8\uB2E4. \uD574\uB2F9 \uCEE8\uD14C\uC774\uB108\uC758 \uB85C\uAE45 \uBC0F \uC124\uC815 \uAE30\uB2A5\uC744 \uCD94\uAC00\uD574 \uB514\uBC84\uAE45\uACFC \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD560 \uACBD\uC6B0 \uD574\uB2F9 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uC635\uC158 \uCC98\uB9AC\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"collect_volume_detail_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uB178\uB4DC \uC5D0\uC774\uC804\uD2B8\uC5D0\uC11C \uBAA8\uB4E0 \uCEE8\uD14C\uC774\uB108\uC5D0 \uB300\uD55C ",(0,r.jsx)(n.code,{children:"exec df"})," \uBA85\uB839\uC5B4\uB97C \uC774\uC6A9\uD574 \uCEE8\uD14C\uC774\uB108 \uBCFC\uB968 \uC815\uBCF4 \uC870\uD68C\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4. \uB178\uB4DC\uC5D0 \uC2E4\uD589 \uC911\uC778 \uBAA8\uB4E0 \uCEE8\uD14C\uC774\uB108\uC758 \uC2A4\uD1A0\uB9AC\uC9C0 \uC0AC\uC6A9\uB7C9 \uBC0F \uBCFC\uB968 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB294 \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"inject_container_id_to_apm_agent_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uC640\uD0ED APM \uCEE8\uD14C\uC774\uB108\uC5D0 ",(0,r.jsx)(n.code,{children:"exec"}),"\uB97C \uC774\uC6A9\uD55C container ID \uC8FC\uC785\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4. \uC640\uD0ED APM\uC73C\uB85C \uC2DD\uBCC4\uB418\uB294 \uCEE8\uD14C\uC774\uB108\uC758 ID\uB97C \uC790\uB3D9\uC73C\uB85C \uCD94\uCD9C\uD558\uACE0, \uC774\uB97C APM \uB3C4\uAD6C\uC5D0 \uC8FC\uC785\uD558\uC5EC \uC131\uB2A5 \uBAA8\uB2C8\uD130\uB9C1 \uB370\uC774\uD130\uC640 \uCEE8\uD14C\uC774\uB108\uB97C \uC5F0\uACB0\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\uC774 \uC635\uC158\uC740 ",(0,r.jsx)(n.a,{href:"../java/java-2_2_33",children:"Java \uC5D0\uC774\uC804\uD2B8 2.2.33 \uBC84\uC804"})," \uC774\uC0C1\uBD80\uD130 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{children:"Changed"})," \uB9C8\uC2A4\uD130 \uC5D0\uC774\uC804\uD2B8\uC5D0\uC11C \uCFE0\uBC84\uB124\uD2F0\uC2A4 \uC774\uBCA4\uD2B8 \uC218\uC9D1 \uC2DC, \uC5D0\uC774\uC804\uD2B8\uAC00 \uC7AC\uAE30\uB3D9\uB418\uBA74 \uC774\uBCA4\uD2B8 \uC911\uBCF5 \uC218\uC9D1\uC744 \uC911\uC9C0\uD558\uB294 \uB85C\uC9C1\uC744 \uC0AD\uC81C\uD558\uC600\uC2B5\uB2C8\uB2E4. \uC11C\uBC84 \uC0AC\uC774\uB4DC\uC5D0\uC11C \uC911\uBCF5 \uC774\uBCA4\uD2B8 \uB4DC\uB86D \uB85C\uC9C1\uC744 \uC218\uD589\uD558\uB3C4\uB85D \uBCC0\uACBD\uD558\uC600\uC2B5\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\uC911\uBCF5 \uC218\uC9D1 \uC6D0\uC778"}),": \uB9C8\uC2A4\uD130 \uC5D0\uC774\uC804\uD2B8\uB97C \uC7AC\uAE30\uB3D9\uD558\uBA74 \uCFE0\uBC84\uB124\uD2F0\uC2A4 \uD074\uB7EC\uC2A4\uD130\uC5D0\uC11C \uC544\uC9C1 \uC800\uC7A5\uD558\uACE0 \uC788\uB294 \uC774\uBCA4\uD2B8\uC77C \uACBD\uC6B0 \uC774\uBBF8 \uC218\uC9D1\uD588\uB354\uB77C\uB3C4, \uC5D0\uC774\uC804\uD2B8 \uC785\uC7A5\uC5D0\uC11C\uB294 \uC54C\uC9C0 \uBABB\uD558\uAE30 \uB54C\uBB38\uC5D0 \uB2E4\uC2DC \uC77D\uC5B4 \uC624\uAC8C \uB418\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(s,{children:"Fixed"})," watchLog \uAE30\uB2A5\uC744 \uC774\uC6A9\uD558\uBA74 \uB178\uB4DC \uC2DC\uC2A4\uD15C\uC758 \uD2B9\uC815 \uB85C\uADF8 \uD30C\uC77C(\uC608, ",(0,r.jsx)("em",{children:"/var/log/message"}),")\uC744 \uC640\uD0ED \uB300\uC2DC\uBCF4\uB4DC\uC5D0\uC11C \uAC10\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC2DC\uC2A4\uD15C\uC758 \uB85C\uADF8 \uB85C\uD14C\uC774\uC158 \uB85C\uC9C1\uC5D0 \uC758\uD574 \uD30C\uC77C\uC774 \uBCC0\uACBD\uB41C \uACBD\uC6B0 \uB85C\uADF8\uC758 \uCD94\uAC00 \uC218\uC9D1\uC744 \uC2E4\uD328\uD558\uB294 \uBC84\uADF8\uB97C \uC218\uC815\uD588\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Agent download: ",(0,r.jsx)(n.a,{href:"https://repo.whatap.io/docker/kube_mon_1.5.7.tar",children:"kube_mon_1.5.7.tar"})]})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return o}});var t=s(67294);let r={},i=t.createContext(r);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);