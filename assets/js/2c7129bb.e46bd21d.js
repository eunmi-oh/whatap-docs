"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["9578"],{68479:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>l});var i=JSON.parse('{"id":"altibase-v1/flexboard-metric-widget","title":"\uBA54\uD2B8\uB9AD\uC2A4 \uC704\uC82F","description":"\uD504\uB85C\uC81D\uD2B8\uC758 \uC131\uB2A5 \uC9C0\uD45C\uB97C \uB098\uD0C0\uB0B4\uB294 \uBA54\uD2B8\uB9AD\uC2A4 \uB370\uC774\uD130\uB97C \uC704\uC82F \uD615\uD0DC\uB85C \uB300\uC2DC\uBCF4\uB4DC\uC5D0 \uCD94\uAC00\uD558\uB294 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4. \uBA54\uD2B8\uB9AD\uC2A4\uB294 \uCE74\uD14C\uACE0\uB9AC\uB85C \uBD84\uB958\uB418\uACE0, \uD0DC\uADF8\uB97C \uC774\uC6A9\uD574 \uB370\uC774\uD130\uB97C \uD0D0\uC0C9\uD560 \uC218 \uC788\uC73C\uBA70, \uD14C\uC774\uBE14 \uC704\uC82F\uACFC \uC2DC\uB9AC\uC988 \uC704\uC82F \uB450 \uAC00\uC9C0 \uC720\uD615\uC73C\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4.","source":"@site/docs/altibase-v1/flexboard-metric-widget.mdx","sourceDirName":"altibase-v1","slug":"/altibase-v1/flexboard-metric-widget","permalink":"/whatap-docs/altibase-v1/flexboard-metric-widget","draft":false,"unlisted":false,"editUrl":"undefined/docs/altibase-v1/flexboard-metric-widget.mdx","tags":[],"version":"current","frontMatter":{"id":"flexboard-metric-widget","title":"\uBA54\uD2B8\uB9AD\uC2A4 \uC704\uC82F","description":"\uD504\uB85C\uC81D\uD2B8\uC758 \uC131\uB2A5 \uC9C0\uD45C\uB97C \uB098\uD0C0\uB0B4\uB294 \uBA54\uD2B8\uB9AD\uC2A4 \uB370\uC774\uD130\uB97C \uC704\uC82F \uD615\uD0DC\uB85C \uB300\uC2DC\uBCF4\uB4DC\uC5D0 \uCD94\uAC00\uD558\uB294 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4. \uBA54\uD2B8\uB9AD\uC2A4\uB294 \uCE74\uD14C\uACE0\uB9AC\uB85C \uBD84\uB958\uB418\uACE0, \uD0DC\uADF8\uB97C \uC774\uC6A9\uD574 \uB370\uC774\uD130\uB97C \uD0D0\uC0C9\uD560 \uC218 \uC788\uC73C\uBA70, \uD14C\uC774\uBE14 \uC704\uC82F\uACFC \uC2DC\uB9AC\uC988 \uC704\uC82F \uB450 \uAC00\uC9C0 \uC720\uD615\uC73C\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4.","keywords":["Altibase","Flex \uBCF4\uB4DC","\uBA54\uD2B8\uB9AD\uC2A4","\uC704\uC82F"],"isTranslationMissing":false},"sidebar":"altibasev1Sidebar","previous":{"title":"Flex \uBCF4\uB4DC \uAD00\uB9AC\uD558\uAE30","permalink":"/whatap-docs/altibase-v1/flexboard-manage"},"next":{"title":"\uC704\uC82F \uAD00\uB9AC\uD558\uAE30","permalink":"/whatap-docs/altibase-v1/flexboard-widget-manage"}}'),s=n("85893"),r=n("50065"),a=n("4815");let l={id:"flexboard-metric-widget",title:"\uBA54\uD2B8\uB9AD\uC2A4 \uC704\uC82F",description:"\uD504\uB85C\uC81D\uD2B8\uC758 \uC131\uB2A5 \uC9C0\uD45C\uB97C \uB098\uD0C0\uB0B4\uB294 \uBA54\uD2B8\uB9AD\uC2A4 \uB370\uC774\uD130\uB97C \uC704\uC82F \uD615\uD0DC\uB85C \uB300\uC2DC\uBCF4\uB4DC\uC5D0 \uCD94\uAC00\uD558\uB294 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4. \uBA54\uD2B8\uB9AD\uC2A4\uB294 \uCE74\uD14C\uACE0\uB9AC\uB85C \uBD84\uB958\uB418\uACE0, \uD0DC\uADF8\uB97C \uC774\uC6A9\uD574 \uB370\uC774\uD130\uB97C \uD0D0\uC0C9\uD560 \uC218 \uC788\uC73C\uBA70, \uD14C\uC774\uBE14 \uC704\uC82F\uACFC \uC2DC\uB9AC\uC988 \uC704\uC82F \uB450 \uAC00\uC9C0 \uC720\uD615\uC73C\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4.",keywords:["Altibase","Flex \uBCF4\uB4DC","\uBA54\uD2B8\uB9AD\uC2A4","\uC704\uC82F"],isTranslationMissing:!1},c=void 0,o={},d=[...a.d$];function x(e){return(0,s.jsx)(a.ZP,{})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},4815:function(e,t,n){n.d(t,{ZP:function(){return l},d$:function(){return r}});var i=n(85893),s=n(50065);let r=[{value:"\uBA54\uD2B8\uB9AD\uC2A4\uB780?",id:"\uBA54\uD2B8\uB9AD\uC2A4\uB780",level:2},{value:"\uBA54\uD2B8\uB9AD\uC2A4 \uC704\uC82F \uC885\uB958",id:"\uBA54\uD2B8\uB9AD\uC2A4-\uC704\uC82F-\uC885\uB958",level:2}];function a(e){let t={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",section:"section",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Cmdname:r}=t;return!r&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Cmdname",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(t.h2,{id:"\uBA54\uD2B8\uB9AD\uC2A4\uB780",children:"\uBA54\uD2B8\uB9AD\uC2A4\uB780?"}),(0,i.jsxs)(t.p,{children:["\uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC218\uC9D1 \uC911\uC778 \uC22B\uC790\uB85C\uB41C \uC131\uB2A5 \uC9C0\uD45C\uB97C ",(0,i.jsx)(t.strong,{children:"\uBA54\uD2B8\uB9AD\uC2A4"}),"\uB77C\uACE0 \uBD80\uB985\uB2C8\uB2E4. \uBA54\uD2B8\uB9AD\uC2A4\uB294 '\uCE74\uD14C\uACE0\uB9AC'\uB85C \uBD84\uB958\uB418\uBA70, \uCE74\uD14C\uACE0\uB9AC\uBCC4 \uD0DC\uADF8\uB97C \uC774\uC6A9\uD574 \uB370\uC774\uD130\uB97C \uD0D0\uC0C9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\uCE74\uD14C\uACE0\uB9AC"}),"(Category): \uAD00\uB828\uD55C \uC9C0\uD45C\uB4E4\uC744 \uBB36\uB294 \uB2E8\uC704"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\uD0DC\uADF8"}),"(Tags): \uC218\uC9D1 \uB300\uC0C1\uC744 \uAD6C\uBD84\uD560 \uC218 \uC788\uB294 \uACE0\uC720 \uC815\uBCF4\uAC00 \uD3EC\uD568\uB41C \uB370\uC774\uD130"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"\uD544\uB4DC"}),"(Fields): \uC5D0\uC774\uC804\uD2B8\uB85C\uBD80\uD130 \uC218\uC9D1\uD55C \uC9C0\uD45C"]}),"\n"]}),(0,i.jsxs)(t.p,{children:["\uBA54\uD2B8\uB9AD\uC2A4\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,i.jsx)(t.a,{href:"metrics-intro",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]})]}),"\n",(0,i.jsxs)(t.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(t.h2,{id:"\uBA54\uD2B8\uB9AD\uC2A4-\uC704\uC82F-\uC885\uB958",children:"\uBA54\uD2B8\uB9AD\uC2A4 \uC704\uC82F \uC885\uB958"}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(r,{sid:"all_metrics",className:"uitext"}),"\uC5D0\uC11C \uCD94\uAC00\uD560 \uC218 \uC788\uB294 \uC704\uC82F \uC720\uD615\uC740 \uCE74\uD14C\uACE0\uB9AC\uC5D0 \uB300\uD55C \uD0DC\uADF8\uC640 \uD544\uB4DC \uC815\uBCF4\uB97C \uB098\uC5F4\uD55C \uD14C\uC774\uBE14 \uD615\uC2DD\uC758 \uC704\uC82F, \uB2E8\uC77C \uD544\uB4DC\uC5D0 \uB300\uD55C \uCD94\uC774 \uADF8\uB798\uD504\uB85C \uB098\uB215\uB2C8\uB2E4."]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\uD14C\uC774\uBE14 \uC704\uC82F"}),": \uC120\uD0DD\uD55C \uBA54\uD2B8\uB9AD\uC2A4 \uCE74\uD14C\uACE0\uB9AC\uC5D0 \uB300\uD55C \uB370\uC774\uD130\uB97C \uD45C \uD615\uC2DD\uC73C\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"\uD14C\uC774\uBE14 \uC704\uC82F",src:n(11472).Z+"",width:"2000",height:"528"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\uC2DC\uB9AC\uC988 \uC704\uC82F"}),": \uC120\uD0DD\uD55C \uBA54\uD2B8\uB9AD\uC2A4 \uCE74\uD14C\uACE0\uB9AC\uC758 \uC120\uD0DD \uD544\uB4DC\uC5D0 \uB300\uD55C \uB370\uC774\uD130\uB97C \uC2DC\uB9AC\uC988 \uCC28\uD2B8 \uD615\uC2DD\uC73C\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"\uC2DC\uB9AC\uC988 \uC704\uC82F",src:n(2410).Z+"",width:"944",height:"608"})}),"\n"]}),"\n"]}),(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["\uBA54\uD2B8\uB9AD\uC2A4 \uC704\uC82F \uC124\uC815\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,i.jsx)(t.a,{href:"flexboard-widget-manage#changedata-metric-widget",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]})})]})]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},2410:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/metric-widget-series-8447e2ccaf09b818078c358628a72356.png"},11472:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/metric-widget-table-f7534c613ceaab178fb1f1480bb4eaf9.png"},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var i=n(67294);let s={},r=i.createContext(s);function a(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);