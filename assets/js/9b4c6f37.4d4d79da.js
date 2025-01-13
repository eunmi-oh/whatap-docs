"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["212"],{35427:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"release-notes/dotnet/dotnet-2_1_6","title":".NET Agent v2.1.6","description":"2023\uB144 10\uC6D4 5\uC77C","source":"@site/docs/release-notes/dotnet/dotnet-2.1.6.mdx","sourceDirName":"release-notes/dotnet","slug":"/release-notes/dotnet/dotnet-2_1_6","permalink":"/whatap-docs/release-notes/dotnet/dotnet-2_1_6","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/dotnet/dotnet-2.1.6.mdx","tags":[],"version":"current","frontMatter":{"id":"dotnet-2_1_6","title":".NET Agent v2.1.6","toc_max_heading_level":2,"pagination_next":"release-notes/dotnet/dotnet-2_1_5","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":".NET Agent v2.1.5","permalink":"/whatap-docs/release-notes/dotnet/dotnet-2_1_5"}}'),r=t("85893"),i=t("50065");let o={id:"dotnet-2_1_6",title:".NET Agent v2.1.6",toc_max_heading_level:2,pagination_next:"release-notes/dotnet/dotnet-2_1_5",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},d=void 0,l={},c=[];function a(e){let n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Status:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"2023\uB144 10\uC6D4 5\uC77C"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{children:"Feature"})," HTTP request body \uCD94\uC801 \uAE30\uB2A5 \uCD94\uAC00"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"profile_http_body_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.p,{children:"HTTP request\uC758 body\uB97C \uD2B8\uB808\uC774\uC2A4 \uB0B4\uC5ED\uC5D0 \uAE30\uB85D\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"profile_http_body_url_prefix"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsx)(n.p,{children:"\uD2B8\uB808\uC774\uC2A4 \uB0B4\uC5ED\uC5D0 http body \uC815\uBCF4\uB97C \uAE30\uB85D\uD560 \uB300\uC0C1 URL\uC758 prefix\uB97C \uC815\uC758\uD560 \uB54C \uC0AC\uC6A9\uD569\uB2C8\uB2E4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{children:"Feature"})," \uC0AC\uC6A9\uC790 \uB85C\uADF8 \uCD94\uC801 \uAE30\uB2A5 \uCD94\uAC00"]}),"\n",(0,r.jsx)(n.p,{children:"\uD2B8\uB808\uC774\uC2A4 \uB0B4\uC5ED\uC5D0 \uC0AC\uC6A9\uC790\uAC00 \uC9C1\uC811 \uB85C\uADF8 \uBA54\uC2DC\uC9C0\uB97C \uB0A8\uAE38 \uC218 \uC788\uB294 \uAE30\uB2A5\uC785\uB2C8\uB2E4. \uB85C\uADF8\uB97C \uB0A8\uAE30\uAE30 \uC704\uD574\uC11C\uB294 \uB2E4\uC74C\uC758 \uB2E8\uACC4\uB97C \uC9C4\uD589\uD558\uC138\uC694."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uB85C\uADF8\uB97C \uB0A8\uAE30\uB824\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0 cs \uD30C\uC77C\uC744 \uCD94\uAC00\uD558\uACE0 \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uC138\uC694."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"using System;\n\nnamespace Whatap.UserLog\n{\n    public static class Tracer\n    {\n        public static void Trace(string message)\n        {\n            // \uC544\uBB34\uB7F0 \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uC9C0 \uC54A\uC544\uB3C4 \uB429\uB2C8\uB2E4.\n            // \uC774 \uBA54\uC18C\uB4DC \uC548\uC758 \uCF54\uB4DC\uB294 Whatap \uC5D0\uC774\uC804\uD2B8\uC5D0 \uC758\uD574\uC11C \uBB34\uC2DC\uB418\uAE30 \uB54C\uBB38\uC5D0 \uC2E4\uD589\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\n        }\n    }\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\uB85C\uADF8\uB97C \uB0A8\uAE30\uACE0 \uC2F6\uC740 \uC704\uCE58\uC5D0\uC11C ",(0,r.jsx)(n.code,{children:'Tracer.Trace("\uB85C\uADF8 \uBB38\uC790\uC5F4")'}),"\uC640 \uAC19\uC740 \uD615\uC2DD\uC73C\uB85C \uCF54\uB4DC\uB97C \uCD94\uAC00\uD558\uC138\uC694."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'public string UserFunction(int value)\n{\n    Tracer.Trace($"started... {value}");\n    ...\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(t,{children:"Fixed"})," Windows Communication Foundation(WCF, \uC6F9\uC11C\uBE44\uC2A4) \uAD00\uB828 \uC624\uB958 \uC218\uC815"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"webservice_method_prefix"})," \uC635\uC158\uC774 ",(0,r.jsx)(n.code,{children:"null"})," \uBB38\uC790\uC5F4 \uC0C1\uD0DC\uC5D0\uC11C ",(0,r.jsx)(n.code,{children:"webservice_method_enabled=true"}),"\uB85C \uC124\uC815\uD558\uBA74 \uCD94\uC801 \uB300\uC0C1\uC774 WCF\uB97C \uD3EC\uD568\uD55C \uBAA8\uB4E0 \uBA54\uC18C\uB4DC\uB85C \uD655\uB300\uB418\uC5B4\uC11C, \uBAA8\uB2C8\uD130\uB9C1\uD560 \uC218 \uC5C6\uB294 \uB300\uC0C1\uC774 \uD3EC\uD568\uB418\uB294 \uBC84\uADF8\uB97C \uC218\uC815\uD558\uC600\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(67294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);