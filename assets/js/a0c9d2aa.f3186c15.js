"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["44885"],{46479:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>o,toc:()=>l,frontMatter:()=>i});var t=JSON.parse('{"id":"java/agent-performance","title":"\uC5D0\uC774\uC804\uD2B8 \uC131\uB2A5","description":"\uC790\uBC14(Java) \uC5D0\uC774\uC804\uD2B8\uC758 \uC131\uB2A5 \uAD00\uB828 \uC635\uC158\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4. \uB3D9\uC2DC\uC5D0 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uCD5C\uB300 \uD2B8\uB79C\uC7AD\uC158 \uC218\uC640 \uD2B8\uB79C\uC7AD\uC158 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uB294 \uBC84\uD37C\uC758 \uCD08\uAE30 \uD06C\uAE30 \uC124\uC815\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uC2DC\uC2A4\uD15C\uC758 \uBD80\uD558\uC640 \uC790\uC6D0 \uC0AC\uC6A9\uC744 \uCD5C\uC801\uD654\uD558\uB294 \uB370 \uC911\uC694\uD55C \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4.","source":"@site/docs/java/agent-performance.mdx","sourceDirName":"java","slug":"/java/agent-performance","permalink":"/whatap-docs/java/agent-performance","draft":false,"unlisted":false,"editUrl":"undefined/docs/java/agent-performance.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-performance","title":"\uC5D0\uC774\uC804\uD2B8 \uC131\uB2A5","description":"\uC790\uBC14(Java) \uC5D0\uC774\uC804\uD2B8\uC758 \uC131\uB2A5 \uAD00\uB828 \uC635\uC158\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4. \uB3D9\uC2DC\uC5D0 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uCD5C\uB300 \uD2B8\uB79C\uC7AD\uC158 \uC218\uC640 \uD2B8\uB79C\uC7AD\uC158 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uB294 \uBC84\uD37C\uC758 \uCD08\uAE30 \uD06C\uAE30 \uC124\uC815\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uC2DC\uC2A4\uD15C\uC758 \uBD80\uD558\uC640 \uC790\uC6D0 \uC0AC\uC6A9\uC744 \uCD5C\uC801\uD654\uD558\uB294 \uB370 \uC911\uC694\uD55C \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4.","keywords":["Java","\uC560\uD50C\uB9AC\uCF00\uC774\uC158","\uC5D0\uC774\uC804\uD2B8"],"isTranslationMissing":false},"sidebar":"javaSidebar","previous":{"title":"\uC5D0\uC774\uC804\uD2B8 \uD1B5\uC2E0 \uC124\uC815","permalink":"/whatap-docs/java/agent-network"},"next":{"title":"\uC5D0\uC774\uC804\uD2B8 \uB85C\uADF8 \uC124\uC815","permalink":"/whatap-docs/java/agent-log"}}'),s=a("85893"),r=a("50065");let i={id:"agent-performance",title:"\uC5D0\uC774\uC804\uD2B8 \uC131\uB2A5",description:"\uC790\uBC14(Java) \uC5D0\uC774\uC804\uD2B8\uC758 \uC131\uB2A5 \uAD00\uB828 \uC635\uC158\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4. \uB3D9\uC2DC\uC5D0 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uCD5C\uB300 \uD2B8\uB79C\uC7AD\uC158 \uC218\uC640 \uD2B8\uB79C\uC7AD\uC158 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uB294 \uBC84\uD37C\uC758 \uCD08\uAE30 \uD06C\uAE30 \uC124\uC815\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uC2DC\uC2A4\uD15C\uC758 \uBD80\uD558\uC640 \uC790\uC6D0 \uC0AC\uC6A9\uC744 \uCD5C\uC801\uD654\uD558\uB294 \uB370 \uC911\uC694\uD55C \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4.",keywords:["Java","\uC560\uD50C\uB9AC\uCF00\uC774\uC158","\uC5D0\uC774\uC804\uD2B8"],isTranslationMissing:!1},c=void 0,o={},l=[{value:"whatap.agent.2.1.0 \uBC84\uC804 \uBBF8\uB9CC",id:"whatapagent210-\uBC84\uC804-\uBBF8\uB9CC",level:3}];function d(e){let n={code:"code",h3:"h3",li:"li",p:"p",section:"section",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\uC790\uBC14(Java) \uC5D0\uC774\uC804\uD2B8\uC758 \uC131\uB2A5 \uAD00\uB828 \uC635\uC158\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4. \uB3D9\uC2DC\uC5D0 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uCD5C\uB300 \uD2B8\uB79C\uC7AD\uC158 \uC218\uC640 \uD2B8\uB79C\uC7AD\uC158 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uB294 \uBC84\uD37C\uC758 \uCD08\uAE30 \uD06C\uAE30 \uC124\uC815\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uC2DC\uC2A4\uD15C\uC758 \uBD80\uD558\uC640 \uC790\uC6D0 \uC0AC\uC6A9\uC744 \uCD5C\uC801\uD654\uD558\uB294 \uB370 \uC911\uC694\uD55C \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4."}),"\n",(0,s.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,s.jsx)(n.h3,{id:"whatapagent210-\uBC84\uC804-\uBBF8\uB9CC",children:"whatap.agent.2.1.0 \uBC84\uC804 \uBBF8\uB9CC"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"whatap.tx_max_count"})," ",(0,s.jsx)("span",{class:"type",children:"Int"})]}),"\n",(0,s.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,s.jsx)(n.code,{children:"5000"})]}),"\n",(0,s.jsx)(n.p,{children:"\uD2B8\uB79C\uC7AD\uC158\uC744 \uCD5C\uB300 \uC800\uC7A5\uD558\uB294 \uAC1C\uC218\uC785\uB2C8\uB2E4. \uB3D9\uC2DC\uC5D0 \uCC98\uB9AC\uD558\uB294 \uD2B8\uB79C\uC7AD\uC158\uC774 \uB9CE\uC744 \uACBD\uC6B0 \uD574\uB2F9 \uD06C\uAE30\uB97C \uB354 \uB298\uB824\uC8FC\uC138\uC694."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"whatap.tx_default_capacity"})," ",(0,s.jsx)("span",{class:"type",children:"Int"})]}),"\n",(0,s.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,s.jsx)(n.code,{children:"101"})]}),"\n",(0,s.jsx)(n.p,{children:"\uD2B8\uB79C\uC7AD\uC158\uC744 \uC800\uC7A5\uD558\uB294 \uBC84\uD37C\uC758 \uC2DC\uC791 \uD06C\uAE30\uC785\uB2C8\uB2E4."}),"\n"]}),"\n"]})]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return c},a:function(){return i}});var t=a(67294);let s={},r=t.createContext(s);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);