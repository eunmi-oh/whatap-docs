"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["19128"],{10152:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>t});var i=JSON.parse('{"id":"kubernetes/pending-pod-status","title":"Pending Pod \uD604\uD669","description":"\uC640\uD0ED Pending Pod \uD604\uD669 \uBA54\uB274\uB97C \uC548\uB0B4\uD569\uB2C8\uB2E4.","source":"@site/docs/kubernetes/pending-pod-status.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/pending-pod-status","permalink":"/whatap-docs/kubernetes/pending-pod-status","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/pending-pod-status.mdx","tags":[],"version":"current","frontMatter":{"id":"pending-pod-status","title":"Pending Pod \uD604\uD669","description":"\uC640\uD0ED Pending Pod \uD604\uD669 \uBA54\uB274\uB97C \uC548\uB0B4\uD569\uB2C8\uB2E4.","keywords":["\uCFE0\uBC84\uB124\uD2F0\uC2A4","\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uBAA8\uB2C8\uD130\uB9C1","\uC6CC\uD06C\uB85C\uB4DC","Pending Pod"],"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"Pod \uBAA9\uB85D","permalink":"/whatap-docs/kubernetes/resource-pod-list"},"next":{"title":"\uCEE8\uD14C\uC774\uB108 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBAA9\uB85D","permalink":"/whatap-docs/kubernetes/resource-application-list"}}'),d=s("85893"),o=s("50065");let t={id:"pending-pod-status",title:"Pending Pod \uD604\uD669",description:"\uC640\uD0ED Pending Pod \uD604\uD669 \uBA54\uB274\uB97C \uC548\uB0B4\uD569\uB2C8\uB2E4.",keywords:["\uCFE0\uBC84\uB124\uD2F0\uC2A4","\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uBAA8\uB2C8\uD130\uB9C1","\uC6CC\uD06C\uB85C\uB4DC","Pending Pod"],isTranslationMissing:!1},r=void 0,l={},c=[{value:"Pending Pod \uBAA9\uB85D",id:"pending-pod-\uBAA9\uB85D",level:2},{value:"\uADF8\uB8F9\uD654\uC640 QoS Class \uC870\uD68C",id:"\uADF8\uB8F9\uD654\uC640-qos-class-\uC870\uD68C",level:4},{value:"\uD544\uD130",id:"\uD544\uD130",level:4},{value:"Pending Pod \uC0C1\uC138",id:"pending-pod-detail",level:2},{value:"Suggestions",id:"suggestions",level:4},{value:"Event",id:"event",level:4},{value:"Log",id:"log",level:4}];function a(e){let n={a:"a",admonition:"admonition",em:"em",h2:"h2",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",section:"section",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{ImgLang:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImgLang",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["\uD648 \uD654\uBA74 > \uD504\uB85C\uC81D\uD2B8 \uC120\uD0DD > ",(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"\uC6CC\uD06C\uB85C\uB4DC"})})," > ",(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"Pending Pod \uD604\uD669"})})]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.mdxAdmonitionTitle,{}),(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\uC694\uAD6C \uC0AC\uD56D"})}),(0,d.jsx)(n.p,{children:"\uC640\uD0ED \uCFE0\uBC84\uB124\uD2F0\uC2A4 \uC5D0\uC774\uC804\uD2B8 1.7.0 \uBC84\uC804 \uC774\uC0C1\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."})]}),"\n",(0,d.jsx)(n.p,{children:"Pending \uC0C1\uD0DC\uC758 Pod \uD604\uD669\uC744 \uC870\uD68C\uD558\uC5EC \uAC01 Pod\uC758 \uB300\uAE30 \uC6D0\uC778\uC744 \uC885\uD569\uC801\uC73C\uB85C \uBD84\uC11D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD074\uB7EC\uC2A4\uD130 \uB0B4\uC5D0 \uB9CE\uC740 Pending Pod\uAC00 \uC788\uC744\uC218\uB85D \uC2DC\uC2A4\uD15C\uC758 \uD6A8\uC728\uC131\uACFC \uC548\uC815\uC131\uC774 \uC800\uD558\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Pending \uC0C1\uD0DC\uC758 Pod\uB97C \uBAA8\uB2C8\uD130\uB9C1\uD574 \uC774\uB7EC\uD55C \uBB38\uC81C\uB97C \uC870\uAE30\uC5D0 \uBC1C\uACAC\uD558\uACE0 \uD574\uACB0\uD568\uC73C\uB85C\uC368 \uD074\uB7EC\uC2A4\uD130\uC758 \uC548\uC815\uC131\uC744 \uC720\uC9C0\uD558\uC138\uC694."}),"\n","\n",(0,d.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,d.jsx)(n.h2,{id:"pending-pod-\uBAA9\uB85D",children:"Pending Pod \uBAA9\uB85D"}),(0,d.jsxs)(n.p,{children:["\uD604\uC7AC Pending \uC0C1\uD0DC\uC778 Pod \uBAA9\uB85D\uC744 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC01 Pending Pod\uB9C8\uB2E4 QoS Class, Pod \uC774\uB984, \uD0C0\uC784\uC2A4\uD0EC\uD504, \uC774\uBCA4\uD2B8 \uBA54\uC2DC\uC9C0, \uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uBC0F \uD574\uB2F9 Pod\uC758 \uBC30\uD3EC \uC815\uBCF4\uB97C \uAC04\uB7B5\uD788 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Pod \uC120\uD0DD \uC2DC Pending Pod \uC0C1\uC138\uB97C \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,d.jsx)(n.a,{href:"#pending-pod-detail",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]}),(0,d.jsx)(s,{img:"k8s-pending-pod-status.png",desc:"Pending Pod \uBAA9\uB85D"})]}),"\n",(0,d.jsxs)(n.section,{className:"remark-sectionize-h4",children:[(0,d.jsx)(n.h4,{id:"\uADF8\uB8F9\uD654\uC640-qos-class-\uC870\uD68C",children:"\uADF8\uB8F9\uD654\uC640 QoS Class \uC870\uD68C"}),(0,d.jsxs)(n.p,{children:["\uC624\uBE0C\uC81D\uD2B8\uBCC4 ",(0,d.jsx)(n.strong,{children:"\uADF8\uB8F9\uD654"})," \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uD2B9\uC815 \uB124\uC784\uC2A4\uD398\uC774\uC2A4, \uB178\uB4DC \uB610\uB294 \uB808\uD50C\uB9AC\uCE74\uC14B\uC5D0 \uAD00\uB828\uB41C \uBAA8\uB4E0 Peding Pod\uC758 \uC0C1\uD0DC \uC815\uBCF4\uB97C \uC27D\uAC8C \uD655\uC778\uD574 \uBB38\uC81C \uC2DD\uBCC4 \uBC0F \uBD84\uC11D\uC5D0 \uC6A9\uC774\uD569\uB2C8\uB2E4. \uB610\uD55C ",(0,d.jsx)(n.strong,{children:"QoS Class\uBCC4 Pending \uC0C1\uD0DC\uC758 Pod \uAC1C\uC218"}),"\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. QoS Class \uC120\uD0DD \uC2DC \uD574\uB2F9 QoS Class\uC5D0 \uC18D\uD558\uB294 Pod\uB97C \uBAA9\uB85D\uC5D0\uC11C \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,d.jsx)(s,{img:"k8s-pending-pod-status-gr-qos.png",desc:"Pending Pod \uADF8\uB8F9\uD654\uC640 QoS Class \uC870\uD68C"}),(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.mdxAdmonitionTitle,{}),(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"QoS Class"}),"(Quality of Service Class)\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,d.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod/",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]})]})]}),"\n",(0,d.jsxs)(n.section,{className:"remark-sectionize-h4",children:[(0,d.jsx)(n.h4,{id:"\uD544\uD130",children:"\uD544\uD130"}),(0,d.jsx)(n.p,{children:"\uD544\uD130 \uAE30\uB2A5\uC744 \uD1B5\uD574 \uCD94\uAC00\uC801\uC778 \uC870\uAC74\uBCC4 \uAC80\uC0C9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC0C1\uB2E8 \uD544\uD130 \uC120\uD0DD\uCC3D \uC678\uC5D0 \uBAA9\uB85D\uC758 \uAC01 Pending Pod \uD558\uB2E8\uC758 \uD0DC\uADF8\uB97C \uD1B5\uD574 \uD544\uD130 \uAE30\uB2A5\uC744 \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD0DC\uADF8 \uC120\uD0DD \uC2DC \uD574\uB2F9 \uC624\uBE0C\uC81D\uD2B8\uC5D0 \uB300\uD55C \uC77C\uCE58 \uC870\uAC74\uC774 \uCD94\uAC00\uB418\uACE0 \uC870\uAC74\uC5D0 \uB9DE\uB294 \uD0DC\uADF8\uB294 \uD30C\uB780\uC0C9\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4."}),(0,d.jsx)(s,{img:"k8s-pending-pod-status-filter.png",desc:"Pending Pod \uD544\uD130 sc"})]}),"\n",(0,d.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,d.jsx)(n.h2,{id:"pending-pod-detail",children:"Pending Pod \uC0C1\uC138"}),(0,d.jsxs)(n.p,{children:["Pending Pod \uBAA9\uB85D\uC5D0\uC11C Pod \uC120\uD0DD \uC2DC \uD574\uB2F9 Pod\uC5D0 \uB300\uD55C \uC0C1\uC138 \uC815\uBCF4\uB97C ",(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"Suggestions"})}),", ",(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"Event"})}),", ",(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"Log"})})," \uD0ED\uC744 \uD1B5\uD574 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,d.jsx)(s,{img:"k8s-pending-pod-status-detail.png",desc:"Pending Pod \uC0C1\uC138"})]}),"\n",(0,d.jsxs)(n.section,{className:"remark-sectionize-h4",children:[(0,d.jsx)(n.h4,{id:"suggestions",children:"Suggestions"}),(0,d.jsx)(n.p,{children:"\uD604\uC7AC Pod\uAC00 Pending \uC0C1\uD0DC\uC5D0 \uC788\uB294 \uC6D0\uC778\uACFC \uBB38\uC81C \uD574\uACB0\uC744 \uC704\uD55C \uB2E4\uC591\uD55C \uC815\uBCF4\uB97C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC81C\uACF5\uD569\uB2C8\uB2E4."}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"QoS Class \uBD84\uC11D"})}),"\n",(0,d.jsx)(n.p,{children:"QoS Class\uB97C \uBD84\uC11D\uD574 \uC2A4\uCF00\uC904\uB9C1 \uAD8C\uC7A5 \uC0AC\uD56D\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\uC0C1\uC138 \uB370\uC774\uD130 \uC218\uC9D1 \uC2DC\uAC01"})}),"\n",(0,d.jsx)(n.p,{children:"\uD574\uB2F9 \uC0C1\uC138 \uC815\uBCF4\uAC00 \uC218\uC9D1\uB41C \uC2DC\uAC04\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Pending Pod \uC774\uBCA4\uD2B8 \uBA54\uC2DC\uC9C0 \uBC0F \uBB38\uC81C \uD574\uACB0 \uC81C\uC548"})}),"\n",(0,d.jsx)(n.p,{children:"\uC774\uBCA4\uD2B8 \uBA54\uC2DC\uC9C0\uB97C \uD655\uC778\uD558\uACE0 \uC774\uB97C \uAE30\uBC18\uC73C\uB85C \uBB38\uC81C \uC2DD\uBCC4 \uBC0F \uD574\uACB0\uCC45\uC744 \uC81C\uC548\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\uBB38\uC81C \uAD00\uB828 \uC815\uBCF4"})}),"\n",(0,d.jsx)(n.p,{children:"\uBC1C\uC0DD\uD55C \uBB38\uC81C\uC640 \uAD00\uB828\uD55C \uC815\uBCF4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uBCFC\uB968 \uB9C8\uC6B4\uD2B8 \uACFC\uC815\uC5D0 \uBB38\uC81C\uAC00 \uC788\uB2E4\uBA74 \uBCFC\uB968 \uAD00\uB828 \uC124\uC815\uC744 \uC548\uB0B4\uD558\uACE0, \uB178\uB4DC \uB9AC\uC18C\uC2A4\uC5D0 \uBB38\uC81C\uAC00 \uC788\uB2E4\uBA74 \uD574\uB2F9 \uB9AC\uC18C\uC2A4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uB294 \uAD00\uB828 \uC815\uBCF4\uB97C \uC548\uB0B4\uD569\uB2C8\uB2E4."}),"\n"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.section,{className:"remark-sectionize-h4",children:[(0,d.jsx)(n.h4,{id:"event",children:"Event"}),(0,d.jsxs)(n.p,{children:["\uC120\uD0DD\uD55C Pod\uC5D0\uC11C \uC2E4\uD589 \uC911\uC778 \uCEE8\uD14C\uC774\uB108\uC758 \uC774\uBCA4\uD2B8 \uC815\uBCF4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. ",(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"\uCEE8\uD14C\uC774\uB108 \uB9F5"})}),"\uC758 ",(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"\uC774\uBCA4\uD2B8"})})," \uD0ED\uACFC \uB3D9\uC77C\uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,d.jsx)(n.a,{href:"https://docs.whatap.io/kubernetes/container-map-event",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]})]}),"\n",(0,d.jsxs)(n.section,{className:"remark-sectionize-h4",children:[(0,d.jsx)(n.h4,{id:"log",children:"Log"}),(0,d.jsxs)(n.p,{children:["\uC120\uD0DD\uD55C Pod\uC5D0\uC11C \uC2E4\uD589 \uC911\uC778 \uCEE8\uD14C\uC774\uB108\uC758 \uB85C\uADF8 \uC815\uBCF4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. ",(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"\uCEE8\uD14C\uC774\uB108 \uB9F5"})}),"\uC758 ",(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"Log"})})," \uD0ED\uACFC \uB3D9\uC77C\uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,d.jsx)(n.a,{href:"https://docs.whatap.io/kubernetes/container-map-log",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]}),(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.mdxAdmonitionTitle,{}),(0,d.jsx)(n.p,{children:"\uCEE8\uD14C\uC774\uB108 \uB85C\uADF8\uB294 \uCEE8\uD14C\uC774\uB108\uAC00 \uC2E4\uD589\uB41C \uC774\uD6C4\uC5D0\uB9CC \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB9CC\uC77C Pod\uAC00 \uCEE8\uD14C\uC774\uB108 \uC2E4\uD589 \uC804 Pending \uC0C1\uD0DC\uC5D0 \uBA38\uBB3C\uB7EC \uC788\uB2E4\uBA74 \uD574\uB2F9 Pod\uC758 \uCEE8\uD14C\uC774\uB108 \uB85C\uADF8\uB97C \uD655\uC778\uD558\uB294 \uAC83\uC774 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4."})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return t}});var i=s(67294);let d={},o=i.createContext(d);function t(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);