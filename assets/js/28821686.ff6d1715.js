"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["22501"],{95464:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>p,assets:()=>l,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"release-notes/k8s/k8s-1_5_3","title":"Kubernetes Agent v1.5.3","description":"2024\uB144 01\uC6D4 30\uC77C","source":"@site/docs/release-notes/k8s/k8s-1.5.3.mdx","sourceDirName":"release-notes/k8s","slug":"/release-notes/k8s/k8s-1_5_3","permalink":"/whatap-docs/release-notes/k8s/k8s-1_5_3","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/k8s/k8s-1.5.3.mdx","tags":[],"version":"current","frontMatter":{"id":"k8s-1_5_3","title":"Kubernetes Agent v1.5.3","toc_max_heading_level":2,"pagination_next":"release-notes/k8s/k8s-1_5_2","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"Kubernetes Agent v1.5.2","permalink":"/whatap-docs/release-notes/k8s/k8s-1_5_2"}}'),r=s("85893"),i=s("50065");let o={id:"k8s-1_5_3",title:"Kubernetes Agent v1.5.3",toc_max_heading_level:2,pagination_next:"release-notes/k8s/k8s-1_5_2",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},a=void 0,l={},d=[];function c(e){let n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Cmdname:s,Status:t}=n;return!s&&u("Cmdname",!0),!t&&u("Status",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"2024\uB144 01\uC6D4 30\uC77C"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{children:"Fixed"})," \uBA54\uD2B8\uB9AC\uC2A4 \uC218\uC9D1 \uC2DC ",(0,r.jsx)("code",{children:"server_disk"}),", ",(0,r.jsx)("code",{children:"server_network"}),", ",(0,r.jsx)("code",{children:"server_base"})," \uCE74\uD14C\uACE0\uB9AC\uC758 \uC218\uC9D1 \uAC04\uACA9\uC744 5\uCD08 \uB2E8\uC704\uB85C \uB9DE\uCDA4"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{children:"Changed"})," \uBA54\uD2B8\uB9AD\uC2A4 \uC218\uC9D1 \uC2DC ",(0,r.jsx)("code",{children:"kube_node"})," \uCE74\uD14C\uACE0\uB9AC\uC5D0 \uB178\uB4DC\uC758 ",(0,r.jsx)("b",{children:"external-ip"}),", ",(0,r.jsx)("b",{children:"internal-ip"})," \uCD94\uAC00"]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uD504\uB85C\uC81D\uD2B8\uC758 ",(0,r.jsx)(s,{sid:"sitemap",className:"uitext"})," > ",(0,r.jsx)(s,{sid:"tag_count",className:"uitext"}),"\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"InternalIP"})}),"\n",(0,r.jsx)(n.p,{children:"\uD074\uB7EC\uC2A4\uD130 \uB0B4\uBD80\uC5D0\uC11C\uB9CC \uC811\uADFC\uD560 \uC218 \uC788\uB294 IP \uC8FC\uC18C\uC785\uB2C8\uB2E4. \uD074\uB7EC\uC2A4\uD130 \uC548\uC5D0 \uC788\uB294 \uB2E4\uB978 \uB178\uB4DC\uB098 \uD30C\uB4DC(Pods)\uAC00 \uC11C\uB85C \uD1B5\uC2E0\uD560 \uB54C \uC0AC\uC6A9\uD558\uB294 \uC8FC\uC18C\uC785\uB2C8\uB2E4. \uC774 \uB0B4\uBD80 IP \uC8FC\uC18C\uB294 \uD074\uB7EC\uC2A4\uD130 \uC678\uBD80\uC5D0\uC11C\uB294 \uC811\uADFC\uD560 \uC218 \uC5C6\uC73C\uBA70, \uC77C\uBC18\uC801\uC73C\uB85C \uD504\uB77C\uC774\uBE57 \uB124\uD2B8\uC6CC\uD06C \uC8FC\uC18C \uBC94\uC704\uC5D0\uC11C \uD560\uB2F9\uB429\uB2C8\uB2E4."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"ExternalIP"})}),"\n",(0,r.jsx)(n.p,{children:"\uC678\uBD80 \uB124\uD2B8\uC6CC\uD06C\uC5D0\uC11C \uC811\uADFC\uD560 \uC218 \uC788\uB294 \uB178\uB4DC\uC758 IP \uC8FC\uC18C\uC785\uB2C8\uB2E4. \uC774 \uC8FC\uC18C\uB97C \uD1B5\uD574 \uD074\uB7EC\uC2A4\uD130 \uC678\uBD80\uC758 \uC2DC\uC2A4\uD15C\uC774 \uB178\uB4DC\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBAA8\uB4E0 \uB178\uB4DC\uAC00 \uC678\uBD80 IP \uC8FC\uC18C\uB97C \uAC00\uC9C0\uACE0 \uC788\uB294 \uAC83\uC740 \uC544\uB2C8\uBA70, \uC678\uBD80 IP \uC8FC\uC18C\uAC00 \uD560\uB2F9\uB418\uB294 \uAC83\uC740 \uD074\uB7EC\uC2A4\uD130\uB97C \uAD6C\uC131\uD558\uB294 \uD658\uACBD(\uC608: \uD074\uB77C\uC6B0\uB4DC \uC81C\uACF5 \uC5C5\uCCB4, \uBCA0\uC5B4 \uBA54\uD0C8 \uD658\uACBD \uB4F1)\uC5D0 \uB530\uB77C \uB2E4\uB97C \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Agent download: ",(0,r.jsx)(n.a,{href:"https://repo.whatap.io/docker/kube_mon_1.5.3.tar",children:"kube_mon_1.5.3.tar"})]})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return o}});var t=s(67294);let r={},i=t.createContext(r);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);