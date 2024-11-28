"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["83904"],{50194:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>p,assets:()=>a,toc:()=>d,frontMatter:()=>c});var s=JSON.parse('{"id":"php/agent-httpcapi","title":"HTTPC, API Call","description":"PHP \uC5D0\uC774\uC804\uD2B8 HTTPC, API Call \uC124\uC815\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.","source":"@site/docs/php/agent-httpcapi.mdx","sourceDirName":"php","slug":"/php/agent-httpcapi","permalink":"/whatap-docs/php/agent-httpcapi","draft":false,"unlisted":false,"editUrl":"undefined/docs/php/agent-httpcapi.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-httpcapi","title":"HTTPC, API Call","description":"PHP \uC5D0\uC774\uC804\uD2B8 HTTPC, API Call \uC124\uC815\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.","keywords":["PHP","HTTPC","API Call","\uC124\uC815\uD558\uAE30","\uC560\uD50C\uB9AC\uCF00\uC774\uC158"],"isTranslationMissing":false},"sidebar":"phpSidebar","previous":{"title":"DB, SQL","permalink":"/whatap-docs/php/agent-dbsql"},"next":{"title":"\uC0AC\uC6A9\uC790 \uC218","permalink":"/whatap-docs/php/agent-number-of-user"}}'),t=r("85893"),l=r("50065");let c={id:"agent-httpcapi",title:"HTTPC, API Call",description:"PHP \uC5D0\uC774\uC804\uD2B8 HTTPC, API Call \uC124\uC815\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.",keywords:["PHP","HTTPC","API Call","\uC124\uC815\uD558\uAE30","\uC560\uD50C\uB9AC\uCF00\uC774\uC158"],isTranslationMissing:!1},i=void 0,a={},d=[];function o(e){let n={admonition:"admonition",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"whatap.profile_httpc_resource_enabled"})," ",(0,t.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,t.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsx)(n.p,{children:"\uD2B8\uB808\uC774\uC2A4\uC5D0\uC11C HTTP Call \uC2A4\uD15D\uC774 \uC218\uC9D1\uB420 \uB54C \uD574\uB2F9 \uC2A4\uD15D\uC5D0\uC11C \uC0AC\uC6A9\uD55C CPU \uC640 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC744 \uCD94\uC801\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"whatap.trace_httpc_normalize_enabled"})," ",(0,t.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,t.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,t.jsx)(n.code,{children:"true"})]}),"\n",(0,t.jsx)(n.p,{children:"\uD2B8\uB79C\uC7AD\uC158 \uB0B4 HTTPC URL\uC744 \uD30C\uC2F1\uD558\uC5EC \uC815\uADDC\uD654\uD558\uB294 \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"whatap.trace_httpc_normalize_urls"})," ",(0,t.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,t.jsx)(n.p,{children:"\uC815\uADDC\uD654 \uD560 HTTPC URL \uD328\uD134\uC744 \uC815\uC758\uD569\uB2C8\uB2E4. \uD638\uCD9C URL \uD328\uD134\uC744 \uD30C\uC2F1\uD558\uC5EC \uD328\uC2A4 \uD30C\uB77C\uBBF8\uD130\uB97C \uC81C\uAC70\uD569\uB2C8\uB2E4."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\uC608\uC2DC, ",(0,t.jsx)(n.code,{children:"/a/{v}/b"}),"\uB77C\uACE0 \uC120\uC5B8\uD558\uBA74 ",(0,t.jsx)(n.code,{children:"a/123/b"})," \u2192 ",(0,t.jsx)(n.code,{children:"a/{v}/b"}),"\uB85C \uCE58\uD658\uD569\uB2C8\uB2E4. \uC5EC\uB7EC \uAC1C\uB97C \uB4F1\uB85D\uD560 \uB54C\uB294 \uC27C\uD45C(,)\uB97C \uAD6C\uBD84\uC790\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uCE58\uD658 \uD328\uD134 \uC815\uB9AC \uD6C4 \uBCF4\uC644\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"whatap.profile_curl_return_enabled"})," ",(0,t.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,t.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,t.jsx)(n.code,{children:"true"})]}),"\n",(0,t.jsxs)(n.p,{children:["\uAC12\uC774 ",(0,t.jsx)(n.code,{children:"true"}),"\uC774\uBA74 curl \uB77C\uC774\uBE0C\uB7EC\uB9AC \uD568\uC218\uC758 \uACB0\uACFC\uAC00 'false' \uC77C \uB54C \uC624\uB958\uB85C \uD45C\uAE30\uD558\uB294 \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"whatap.profile_curl_error_info_enabled"})," ",(0,t.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,t.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,t.jsx)(n.code,{children:"true"})]}),"\n",(0,t.jsxs)(n.p,{children:["\uAC12\uC774 ",(0,t.jsx)(n.code,{children:"true"}),"\uC774\uBA74 curl \uB77C\uC774\uBE0C\uB7EC\uB9AC \uD568\uC218\uC758 \uACB0\uACFC\uAC12\uC774 ",(0,t.jsx)(n.code,{children:"false"})," \uC77C \uB54C \uC5D0\uB7EC \uBA54\uC2DC\uC9C0 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB294 \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4. ",(0,t.jsx)(n.code,{children:"whatap.profile_curl_return_enabled"})," \uC124\uC815\uC774 ",(0,t.jsx)(n.code,{children:"false"}),"\uC778 \uACBD\uC6B0\uB294 \uC801\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["cURL \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC758 \uC624\uB958 \uD0C0\uC785\uC740 ",(0,t.jsx)(n.code,{children:"HttpConnectionReturnFalse"})," \uB4A4\uC5D0 \uC624\uB958 \uBC88\uD638\uAC00 \uCD94\uAC00\uB41C \uD615\uC2DD\uC785\uB2C8\uB2E4."]}),"\n",(0,t.jsxs)(n.li,{children:["\uD638\uCD9C URL\uC758 http \uACB0\uACFC \uCF54\uB4DC\uAC00 400 \uC774\uC0C1\uC778 \uACBD\uC6B0 \uC624\uB958 \uD0C0\uC785\uC744 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4. ",(0,t.jsx)(n.code,{children:"HttpConnectionServerError(\uACB0\uACFC\uCF54\uB4DC)"})," \uC608\uC2DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4. ",(0,t.jsx)(n.code,{children:"HttpConnectionReturnFalse(6)"}),", ",(0,t.jsx)(n.code,{children:"HttpConnectionServerError(500)"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"whatap.profile_curl_error_ignore_empty"})," ",(0,t.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,t.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,t.jsx)(n.code,{children:"true"})]}),"\n",(0,t.jsxs)(n.p,{children:["\uAC12\uC774 ",(0,t.jsx)(n.code,{children:"false"}),"\uC774\uBA74 \uC624\uB958 \uCF54\uB4DC \uB610\uB294 \uC624\uB958 \uBA54\uC2DC\uC9C0 \uB0B4\uC6A9\uC774 \uC5C6\uC744 \uB54C \uC815\uC0C1 \uACB0\uACFC\uB85C \uD45C\uAE30\uD569\uB2C8\uB2E4. ",(0,t.jsx)(n.code,{children:"whatap.profile_curl_return_enabled"})," \uC124\uC815\uC774 ",(0,t.jsx)(n.code,{children:"false"}),"\uC778 \uACBD\uC6B0\uB294 \uC801\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n"]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return c}});var s=r(67294);let t={},l=s.createContext(t);function c(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);