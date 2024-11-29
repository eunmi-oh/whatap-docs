"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["20536"],{36959:function(e,n,t){t.d(n,{ZP:function(){return a},d$:function(){return i}});var r=t(85893),s=t(50065);let i=[];function o(e){let n={a:"a",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.apdex.org/",children:"Application Performance Index(Apdex)"}),"\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC131\uB2A5 \uC9C0\uD45C\uC785\uB2C8\uB2E4. \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uACE0\uAC1D \uB9CC\uC871\uB3C4\uB97C \uCE21\uC815\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uB9CC\uC871\uB3C4\uC5D0 \uB300\uD55C \uC9C0\uD45C\uB85C \uD65C\uC6A9\uD560 \uC218 \uC788\uC73C\uBA70, 0 ~ 1 \uC0AC\uC774\uC758 \uAC12\uC744 \uAC16\uC2B5\uB2C8\uB2E4."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"(\uB9CC\uC871 \uD69F\uC218 + (\uD5C8\uC6A9 \uD69F\uC218 * 0.5)) / \uC804\uCCB4 \uC694\uCCAD \uC218"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uB9CC\uC871 (Satisfied, S): \uC5C5\uBB34\uCC98\uB9AC\uC5D0 \uC804\uD600 \uBB38\uC81C \uC5C6\uC74C \u2264 1.2\uCD08 (\uB9CC\uC871 S \uAE30\uBCF8\uAC12)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uD5C8\uC6A9 (Tolerating, T): \uC0AC\uC6A9\uC790\uAC00 \uC9C0\uC5F0\uC744 \uB290\uB07C\uB098 \uC5C5\uBB34\uCC98\uB9AC\uB294 \uAC00\uB2A5 \u2264 4.8\uCD08 (\uB9CC\uC871 S * 4)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uBD88\uB9CC (Frustrated, F): \uC5C5\uBB34\uCC98\uB9AC\uAC00 \uBD88\uAC00\uB2A5 > 4.8\uCD08 (\uD5C8\uC6A9 T \uCD08\uACFC \uBC0F \uC624\uB958)"}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},34877:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>a});var r=JSON.parse('{"id":"golang/agent-apdex","title":"Apdex","description":"Go \uC5D0\uC774\uC804\uD2B8 Apdex\uC5D0 \uB300\uD55C \uC124\uBA85\uC785\uB2C8\uB2E4.","source":"@site/docs/golang/agent-apdex.mdx","sourceDirName":"golang","slug":"/golang/agent-apdex","permalink":"/golang/agent-apdex","draft":false,"unlisted":false,"editUrl":"undefined/docs/golang/agent-apdex.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-apdex","title":"Apdex","description":"Go \uC5D0\uC774\uC804\uD2B8 Apdex\uC5D0 \uB300\uD55C \uC124\uBA85\uC785\uB2C8\uB2E4.","keywords":["Apdex","Go","\uC124\uC815\uD558\uAE30","\uC560\uD50C\uB9AC\uCF00\uC774\uC158"],"isTranslationMissing":false},"sidebar":"goSidebar","previous":{"title":"\uC0AC\uC6A9\uC790 \uC218","permalink":"/golang/agent-number-of-user"},"next":{"title":"\uD1B5\uACC4","permalink":"/golang/agent-static"}}'),s=t("85893"),i=t("50065"),o=t("36959");let a={id:"agent-apdex",title:"Apdex",description:"Go \uC5D0\uC774\uC804\uD2B8 Apdex\uC5D0 \uB300\uD55C \uC124\uBA85\uC785\uB2C8\uB2E4.",keywords:["Apdex","Go","\uC124\uC815\uD558\uAE30","\uC560\uD50C\uB9AC\uCF00\uC774\uC158"],isTranslationMissing:!1},l=void 0,d={},c=[...o.d$];function p(e){let n={code:"code",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"apdex_time"})," ",(0,s.jsx)("span",{class:"type",children:"millisecond"})]}),"\n",(0,s.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,s.jsx)(n.code,{children:"1200"})]}),"\n",(0,s.jsx)(n.p,{children:"\uB9CC\uC871 S \uAE30\uBCF8\uAC12\uC740 \uC5D0\uC774\uC804\uD2B8 \uC124\uC815 \uBA54\uB274\uC5D0\uC11C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n","\n",(0,s.jsx)(o.ZP,{})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var r=t(67294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);