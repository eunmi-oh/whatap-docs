"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["66198"],{4626:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>d,assets:()=>a,toc:()=>p,frontMatter:()=>i});var s=JSON.parse('{"id":"kubernetes/create-name-space-project","title":"\uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD504\uB85C\uC81D\uD2B8 \uB9CC\uB4E4\uAE30","description":"\uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.","source":"@site/docs/kubernetes/create-name-space-project.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/create-name-space-project","permalink":"/whatap-docs/kubernetes/create-name-space-project","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/create-name-space-project.mdx","tags":[],"version":"current","frontMatter":{"id":"create-name-space-project","title":"\uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD504\uB85C\uC81D\uD2B8 \uB9CC\uB4E4\uAE30","description":"\uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.","keywords":["\uCFE0\uBC84\uB124\uD2F0\uC2A4","\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uBAA8\uB2C8\uD130\uB9C1","\uB124\uC784\uC2A4\uD398\uC774\uC2A4"],"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"Docker Go \uC124\uCE58","permalink":"/whatap-docs/kubernetes/install-docker-go"},"next":{"title":"\uC5D0\uC774\uC804\uD2B8 \uBB38\uC81C \uD574\uACB0","permalink":"/whatap-docs/kubernetes/agent-troubleshooting"}}'),r=t("85893"),c=t("50065");let i={id:"create-name-space-project",title:"\uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD504\uB85C\uC81D\uD2B8 \uB9CC\uB4E4\uAE30",description:"\uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.",keywords:["\uCFE0\uBC84\uB124\uD2F0\uC2A4","\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uBAA8\uB2C8\uD130\uB9C1","\uB124\uC784\uC2A4\uD398\uC774\uC2A4"],isTranslationMissing:!1},o=void 0,a={},p=[];function l(e){let n={admonition:"admonition",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components},{ImgLang:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImgLang",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\uB2E4\uC74C\uACFC \uAC19\uC740 \uC0C1\uD669\uC77C \uB54C \uD074\uB7EC\uC2A4\uD130 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD504\uB85C\uC81D\uD2B8 \uBD84\uB9AC\uB97C \uACE0\uB824\uD569\uB2C8\uB2E4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uB2E8\uC77C \uD074\uB7EC\uC2A4\uD130(Master) \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC874\uC7AC\uD558\uB294 \uB9AC\uC18C\uC2A4 \uC218\uAC00 \uB9CE\uACE0, \uCFE0\uBC84\uB124\uD2F0\uC2A4 Namespace \uAE30\uC900 \uBD84\uB9AC \uAC00\uB2A5\uD55C \uACBD\uC6B0"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uCFE0\uBC84\uB124\uD2F0\uC2A4 Namespace\uB9C8\uB2E4 \uBD80\uC11C \uB610\uB294 \uB2F4\uB2F9\uC790\uAC00 \uB2EC\uB77C \uD2B9\uC815 Namespace\uB9CC \uBAA8\uB2C8\uD130\uB9C1\uD574\uC57C \uD560 \uACBD\uC6B0"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\uD074\uB7EC\uC2A4\uD130 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC788\uB294 \uAC01 \uCFE0\uBC84\uB124\uD2F0\uC2A4 Namespace\uB97C \uBCC4\uB3C4\uC758 \uC640\uD0ED \uB124\uC784\uC2A4\uD398\uC774\uC2A4\uB85C \uBD84\uB9AC\uD558\uB824\uBA74 ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uAD00\uB9AC"})})," > ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uAD00\uB9AC"})})," \uBA54\uB274\uB97C \uD1B5\uD574 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(t,{img:"whatap_kubernetes_namespace_project_mgt.png",desc:"\uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uAD00\uB9AC"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uAD00\uB9AC"})})," > ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uAD00\uB9AC"})})," \uBA54\uB274\uB294 \uD074\uB7EC\uC2A4\uD130 \uD504\uB85C\uC81D\uD2B8 \uC120\uD0DD \uC2DC\uC5D0\uB9CC \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB294 \uD574\uB2F9 \uBA54\uB274\uB85C \uC9C4\uC785\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."]})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uBAA9\uB85D"})}),"\uC5D0 ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"+ \uD504\uB85C\uC81D\uD2B8 \uCD94\uAC00"})})," \uBC84\uD2BC\uC774 \uD45C\uC2DC\uB418\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uBC84\uD2BC\uC744 \uB20C\uB7EC \uC640\uD0ED \uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uC774\uB984\uC744 \uC785\uB825\uD55C \uB2E4\uC74C ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uD655\uC778"})})," \uBC84\uD2BC\uC744 \uC120\uD0DD\uD558\uC138\uC694."]}),"\n",(0,r.jsx)(t,{img:"whatap_kubernetes_create_namespace_project_popup.png",desc:"\uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131"}),"\n",(0,r.jsxs)(n.p,{children:["\uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uBA74 \uC0C8\uB85C\uC6B4 \uBCC4\uB3C4\uC758 \uD504\uB85C\uC81D\uD2B8\uB85C \uBD84\uB9AC\uB418\uAE30 \uB54C\uBB38\uC5D0 ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uBAA9\uB85D"})}),"\uC5D0\uC11C \uB354 \uC774\uC0C1 \uD074\uB7EC\uC2A4\uD130 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB294 \uD655\uC778\uC774 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4."]}),"\n",(0,r.jsx)(n.p,{children:"\uD074\uB7EC\uC2A4\uD130 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD504\uB85C\uC81D\uD2B8\uB85C \uBD84\uB9AC\uB418\uC5B4 \uCD94\uAC00\uB41C Namespace\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD604\uD669 \uC815\uBCF4\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4."}),"\n",(0,r.jsx)(t,{img:"whatap_kubernetes_namespace_project_mgt_complete.png",desc:"\uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131 \uC644\uB8CC"}),"\n",(0,r.jsxs)(n.p,{children:["\uD074\uB7EC\uC2A4\uD130 \uD504\uB85C\uC81D\uD2B8 \uD558\uC704\uC5D0 \uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD55C \uACBD\uC6B0 \uD074\uB7EC\uC2A4\uD130 \uD504\uB85C\uC81D\uD2B8\uB97C \uD3EC\uD568\uD55C \uD504\uB85C\uC81D\uD2B8 \uBAA9\uB85D \uD655\uC778 \uBC0F \uD504\uB85C\uC81D\uD2B8 \uAC04 \uC774\uB3D9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uB300\uC2DC\uBCF4\uB4DC"})})," > ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uCEE8\uD14C\uC774\uB108 \uB9F5"})})," \uBA54\uB274 \uD654\uBA74 \uC704\uC5D0 \uD504\uB85C\uC81D\uD2B8 \uBAA9\uB85D \uBC15\uC2A4\uB97C \uC120\uD0DD\uD558\uC138\uC694."]}),"\n",(0,r.jsx)(t,{img:"whatap_kubernetes_container_map_namespace_project_list.png",desc:"\uCEE8\uD14C\uC774\uB108 \uB9F5 \uBA54\uB274 \uD504\uB85C\uC81D\uD2B8 \uBAA9\uB85D"})]})}function d(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(67294);let r={},c=s.createContext(r);function i(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);