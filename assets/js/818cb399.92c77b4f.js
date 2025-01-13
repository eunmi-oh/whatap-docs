"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["97857"],{60523:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>p,assets:()=>c,toc:()=>l,frontMatter:()=>r});var a=JSON.parse('{"id":"kubernetes/agent-manage","title":"\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uC5D0\uC774\uC804\uD2B8","description":"\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uB0B4\uC5D0 \uC2E4\uD589 \uC911\uC778 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBAA8\uB2C8\uD130\uB9C1\uC744 \uC704\uD574 \uC124\uCE58\uD55C \uC5D0\uC774\uC804\uD2B8 \uAD6C\uC131\uC5D0 \uB300\uD574 \uC54C\uC544\uBD05\uB2C8\uB2E4.","source":"@site/docs/kubernetes/agent-manage.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/agent-manage","permalink":"/whatap-docs/kubernetes/agent-manage","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/agent-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-manage","title":"\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uC5D0\uC774\uC804\uD2B8","description":"\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uB0B4\uC5D0 \uC2E4\uD589 \uC911\uC778 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBAA8\uB2C8\uD130\uB9C1\uC744 \uC704\uD574 \uC124\uCE58\uD55C \uC5D0\uC774\uC804\uD2B8 \uAD6C\uC131\uC5D0 \uB300\uD574 \uC54C\uC544\uBD05\uB2C8\uB2E4.","keywords":["\uCFE0\uBC84\uB124\uD2F0\uC2A4","\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uBAA8\uB2C8\uD130\uB9C1","\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBAA8\uB2C8\uD130\uB9C1","\uC5D0\uC774\uC804\uD2B8"],"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"\uC5F0\uACC4 \uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC","permalink":"/whatap-docs/kubernetes/correlations"},"next":{"title":"\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uC5D0\uC774\uC804\uD2B8 \uBAA9\uB85D","permalink":"/whatap-docs/kubernetes/agent-list"}}'),s=t("85893"),i=t("50065");let r={id:"agent-manage",title:"\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uC5D0\uC774\uC804\uD2B8",description:"\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uB0B4\uC5D0 \uC2E4\uD589 \uC911\uC778 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBAA8\uB2C8\uD130\uB9C1\uC744 \uC704\uD574 \uC124\uCE58\uD55C \uC5D0\uC774\uC804\uD2B8 \uAD6C\uC131\uC5D0 \uB300\uD574 \uC54C\uC544\uBD05\uB2C8\uB2E4.",keywords:["\uCFE0\uBC84\uB124\uD2F0\uC2A4","\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uBAA8\uB2C8\uD130\uB9C1","\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBAA8\uB2C8\uD130\uB9C1","\uC5D0\uC774\uC804\uD2B8"],isTranslationMissing:!1},o=void 0,c={},l=[{value:"\uC5D0\uC774\uC804\uD2B8 \uAD6C\uC131",id:"\uC5D0\uC774\uC804\uD2B8-\uAD6C\uC131",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{ImgLang:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImgLang",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uB0B4\uC5D0 \uC2E4\uD589 \uC911\uC778 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBAA8\uB2C8\uD130\uB9C1\uC744 \uC704\uD574 \uC124\uCE58\uD55C \uC5D0\uC774\uC804\uD2B8 \uAD6C\uC131\uC5D0 \uB300\uD574 \uC54C\uC544\uBD05\uB2C8\uB2E4."}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,s.jsx)(n.h2,{id:"\uC5D0\uC774\uC804\uD2B8-\uAD6C\uC131",children:"\uC5D0\uC774\uC804\uD2B8 \uAD6C\uC131"}),(0,s.jsx)(n.p,{children:"\uC640\uD0ED \uCFE0\uBC84\uB124\uD2F0\uC2A4 \uC124\uCE58 \uC2DC \uAE30\uBCF8\uC801\uC73C\uB85C \uC0AC\uC6A9\uC790 \uCFE0\uBC84\uB124\uD2F0\uC2A4 \uD658\uACBD\uC758 <whatap-monitoring> Namespace \uD558\uC704\uC5D0 \uC5D0\uC774\uC804\uD2B8\uC6A9 \uB9AC\uC18C\uC2A4\uB97C \uAD6C\uC131\uD569\uB2C8\uB2E4."}),(0,s.jsx)(n.p,{children:"\uB9C8\uC2A4\uD130 \uC5D0\uC774\uC804\uD2B8\uB294 Deployment, \uB178\uB4DC \uC5D0\uC774\uC804\uD2B8\uB294 DaemonSet \uD615\uD0DC\uC785\uB2C8\uB2E4. \uB2E4\uC74C\uC740 \uC0AC\uC6A9\uC790 \uCFE0\uBC84\uB124\uD2F0\uC2A4 \uD658\uACBD\uC5D0 \uC124\uCE58\uB41C \uC640\uD0ED \uC5D0\uC774\uC804\uD2B8\uB97C \uD655\uC778\uD558\uB294 \uBC29\uBC95\uC785\uB2C8\uB2E4."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\uB9C8\uC2A4\uD130 \uC5D0\uC774\uC804\uD2B8"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl get deployments -n whatap-monitoring \nkubectl get pods -l=name=whatap-master-agent -n whatap-monitoring\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\uB178\uB4DC \uC5D0\uC774\uC804\uD2B8"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl get daemonsets -n whatap-monitoring\nkubectl get pods -l=name=whatap-node-agent -n whatap-monitoring\n"})}),"\n"]}),"\n"]}),(0,s.jsx)(n.p,{children:"\uB2E4\uC74C\uC740 <whatap-monitoring> Namespace \uB0B4\uC5D0\uC11C \uC2E4\uD589 \uC911\uC778 \uB9C8\uC2A4\uD130 \uC5D0\uC774\uC804\uD2B8, \uB178\uB4DC \uC5D0\uC774\uC804\uD2B8 \uD615\uD0DC\uC758 \uC608\uC785\uB2C8\uB2E4."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl get pods -n whatap-monitoring\nNAME                                   READY   STATUS    RESTARTS   AGE\nwhatap-master-agent-57f4499567-ltbbr   1/1     Running   0          3d19h\nwhatap-node-agent-5q8rj                2/2     Running   0          21h\nwhatap-node-agent-6nb2z                2/2     Running   0          30h\nwhatap-node-agent-8m2vk                2/2     Running   0          21h\nwhatap-node-agent-9thmw                2/2     Running   0          3h31m\nwhatap-node-agent-kpv7d                2/2     Running   0          21h\n"})}),(0,s.jsx)(n.p,{children:"\uB2E4\uC74C\uC740 \uC640\uD0ED \uCFE0\uBC84\uB124\uD2F0\uC2A4 \uCEE8\uD14C\uC774\uB108 \uB9F5 \uC0C1\uC5D0 \uD45C\uC2DC\uB41C <whatap-monitoring> Namespace \uC785\uB2C8\uB2E4."}),(0,s.jsx)(t,{img:"whatap_kubernetes_container_whatap_monitoring.png",desc:"\uCEE8\uD14C\uC774\uB108 \uB9F5 \uB0B4 whatap-monitoring Namespace"})]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var a=t(67294);let s={},i=a.createContext(s);function r(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);