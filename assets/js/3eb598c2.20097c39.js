"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["54900"],{5304:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>s});var i=JSON.parse('{"id":"release-notes/golang/golang-0_1_9","title":"Go Agent v0.1.9","description":"\uBC30\uD3EC\uC77C: 2022-04-27","source":"@site/docs/release-notes/golang/golang-0.1.9.mdx","sourceDirName":"release-notes/golang","slug":"/release-notes/golang/golang-0_1_9","permalink":"/release-notes/golang/golang-0_1_9","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/golang/golang-0.1.9.mdx","tags":[],"version":"current","frontMatter":{"id":"golang-0_1_9","title":"Go Agent v0.1.9","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}'),t=r("85893"),c=r("50065");r("37016"),r("13348");let s={id:"golang-0_1_9",title:"Go Agent v0.1.9",toc_max_heading_level:2,displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},a=void 0,l={},o=[{value:"\uBCA0\uD0C0 - \uBC84\uADF8 \uC218\uC815",id:"\uBCA0\uD0C0---\uBC84\uADF8-\uC218\uC815",level:2},{value:"panic \uC0C1\uD669\uC5D0\uC11C \uC6F9 \uD2B8\uB79C\uC7AD\uC158 \uC815\uBCF4\uAC00 \uC218\uC9D1 \uC548\uB418\uB294 \uC624\uB958 \uC218\uC815",id:"panic-\uC0C1\uD669\uC5D0\uC11C-\uC6F9-\uD2B8\uB79C\uC7AD\uC158-\uC815\uBCF4\uAC00-\uC218\uC9D1-\uC548\uB418\uB294-\uC624\uB958-\uC218\uC815",level:3},{value:"\uBCA0\uD0C0 - \uC5C5\uB370\uC774\uD2B8",id:"\uBCA0\uD0C0---\uC5C5\uB370\uC774\uD2B8",level:2},{value:"http status code \uC218\uC9D1",id:"http-status-code-\uC218\uC9D1",level:3},{value:"github.com/labstack/echo",id:"githubcomlabstackecho",level:3},{value:"echo/v4 \uC9C0\uC6D0",id:"echov4-\uC9C0\uC6D0",level:4},{value:"echo\uC758 HTTPErrorHandler Wrapper \uCD94\uAC00",id:"echo\uC758-httperrorhandler-wrapper-\uCD94\uAC00",level:4},{value:"\uB85C\uADF8 \uCD9C\uB825",id:"\uB85C\uADF8-\uCD9C\uB825",level:3},{value:"Http Method\uB97C \uC9C0\uC815\uD574\uC11C \uC218\uC9D1\uC744 \uC81C\uC678\uD560 \uC218 \uC788\uB294 \uC124\uC815 \uCD94\uAC00",id:"http-method\uB97C-\uC9C0\uC815\uD574\uC11C-\uC218\uC9D1\uC744-\uC81C\uC678\uD560-\uC218-\uC788\uB294-\uC124\uC815-\uCD94\uAC00",level:3}];function d(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",section:"section",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\uBC30\uD3EC\uC77C: 2022-04-27"}),"\n",(0,t.jsx)(n.section,{className:"remark-sectionize-h2",children:(0,t.jsx)(n.h2,{id:"\uBCA0\uD0C0---\uBC84\uADF8-\uC218\uC815",children:"\uBCA0\uD0C0 - \uBC84\uADF8 \uC218\uC815"})}),"\n",(0,t.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,t.jsx)(n.h3,{id:"panic-\uC0C1\uD669\uC5D0\uC11C-\uC6F9-\uD2B8\uB79C\uC7AD\uC158-\uC815\uBCF4\uAC00-\uC218\uC9D1-\uC548\uB418\uB294-\uC624\uB958-\uC218\uC815",children:"panic \uC0C1\uD669\uC5D0\uC11C \uC6F9 \uD2B8\uB79C\uC7AD\uC158 \uC815\uBCF4\uAC00 \uC218\uC9D1 \uC548\uB418\uB294 \uC624\uB958 \uC218\uC815"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"net/http"}),"\n",(0,t.jsx)(n.li,{children:"github.com/labstack/echo"}),"\n",(0,t.jsx)(n.li,{children:"github.com/gorilla/mux"}),"\n",(0,t.jsx)(n.li,{children:"github.com/go-gonic/gin"}),"\n"]}),(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"recover()"}),"\uB97C \uD1B5\uD574\uC11C \uC624\uB958 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uC9C0\uB9CC, \uB2E4\uC2DC \uB3D9\uC77C\uD55C panic\uB97C \uBC1C\uC0DD\uC2DC\uD0B5\uB2C8\uB2E4."]})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:"title='Go'",children:'defer func() {\n  // panic \n  \n  x := recover()\n  var err error = nil\n  if x != nil {\n    err = fmt.Errorf("Panic: %v", x)\n    \n    // panic \uC815\uBCF4 \uC218\uC9D1\n    trace.Error(ctx, err)\n    err = nil\n  }\n\n  ...\n\n  // \uB2E4\uC2DC panic \uBC1C\uC0DD\n\n  if x != nil {\n    panic(x)\n  }\n}()\n'})})]}),"\n",(0,t.jsx)(n.section,{className:"remark-sectionize-h2",children:(0,t.jsx)(n.h2,{id:"\uBCA0\uD0C0---\uC5C5\uB370\uC774\uD2B8",children:"\uBCA0\uD0C0 - \uC5C5\uB370\uC774\uD2B8"})}),"\n",(0,t.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,t.jsx)(n.h3,{id:"http-status-code-\uC218\uC9D1",children:"http status code \uC218\uC9D1"}),(0,t.jsx)(n.p,{children:"400 \uC774\uC0C1\uC758 status code\uB294 \uC624\uB958\uBA54\uC138\uC9C0\uB85C \uC218\uC9D1\uD569\uB2C8\uB2E4."})]}),"\n",(0,t.jsx)(n.section,{className:"remark-sectionize-h3",children:(0,t.jsx)(n.h3,{id:"githubcomlabstackecho",children:"github.com/labstack/echo"})}),"\n",(0,t.jsxs)(n.section,{className:"remark-sectionize-h4",children:[(0,t.jsx)(n.h4,{id:"echov4-\uC9C0\uC6D0",children:"echo/v4 \uC9C0\uC6D0"}),(0,t.jsx)(n.p,{children:"\uAE30\uC874 echo/whatapecho \uD328\uD0A4\uC9C0 \uB300\uC2E0\uC5D0 echo/v4/whatapecho\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:"title='Go'",children:'import (\n  "github.com/labstack/echo"\n  \n  "github.com/whatap/go-api/trace"\n  "github.com/whatap/go-api/instrumentation/github.com/labstack/echo/v4/whatapecho"\n)\n'})})]}),"\n",(0,t.jsxs)(n.section,{className:"remark-sectionize-h4",children:[(0,t.jsx)(n.h4,{id:"echo\uC758-httperrorhandler-wrapper-\uCD94\uAC00",children:"echo\uC758 HTTPErrorHandler Wrapper \uCD94\uAC00"}),(0,t.jsx)(n.p,{children:"HTTPErrorHandler\uB97C \uD1B5\uD574\uC11C \uC624\uB958 \uC815\uBCF4\uB97C \uCD94\uAC00\uB85C \uC218\uC9D1\uD569\uB2C8\uB2E4."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"echo.Context.Error()"})," \uD568\uC218\uAC00 \uD638\uCD9C\uB420 \uB54C \uC624\uB958 \uC815\uBCF4\uB97C \uC218\uC9D1\uD569\uB2C8\uB2E4.Recover \uBBF8\uB4E4\uC6E8\uC5B4\uAC00 \uCC98\uB9AC\uD55C panic \uC815\uBCF4\uB97C \uC218\uC9D1\uD569\uB2C8\uB2E4."]}),(0,t.jsxs)(n.p,{children:["whatapecho \uBBF8\uB4E4\uC6E8\uC5B4\uAC00 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC2E4\uD589 \uB418\uBA74 HTTPErrorHandler \uC815\uBCF4\uB97C \uCD5C\uB300\uD55C \uB9CE\uC774 \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBBF8\uB4E4\uC6E8\uC5B4 \uB4F1\uB85D\uC744 \uCD5C\uC0C1\uB2E8\uC5D0\uC11C \uC124\uC815\uD558\uACE0, ",(0,t.jsx)(n.code,{children:"Pre()"})," \uD568\uC218\uB97C \uD1B5\uD574 \uB4F1\uB85D\uD569\uB2C8\uB2E4."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:"title='Go'",children:"func main() {\n  ...\n\n  e := echo.New()\n  //echo DefaultHTTPErrorHandler wrapper\n  e.HTTPErrorHandler = whatapecho.WrapHTTPErrorHandler(e.DefaultHTTPErrorHandler)\n  e.Pre(whatapecho.Middleware())\n  e.Use(middleware.Recover())\n  ...\n}\n"})})]}),"\n",(0,t.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,t.jsx)(n.h3,{id:"\uB85C\uADF8-\uCD9C\uB825",children:"\uB85C\uADF8 \uCD9C\uB825"}),(0,t.jsx)(n.p,{children:"debug \uC635\uC158\uC744 \uC124\uC815\uD558\uBA74 \uBAA8\uB2C8\uD130\uB9C1 \uAD00\uB828\uB41C \uB85C\uADF8\uB97C \uCD9C\uB825\uD569\uB2C8\uB2E4."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"debug=true\n"})}),(0,t.jsx)(n.p,{children:"\uD2B8\uB79C\uC7AD\uC158, DB \uCEE4\uB125\uC158, Sql \uC2E4\uD589, Http \uC678\uBD80 \uD638\uCD9C\uC5D0 \uB300\uD55C \uB85C\uADF8\uB97C \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4."})]}),"\n",(0,t.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,t.jsx)(n.h3,{id:"http-method\uB97C-\uC9C0\uC815\uD574\uC11C-\uC218\uC9D1\uC744-\uC81C\uC678\uD560-\uC218-\uC788\uB294-\uC124\uC815-\uCD94\uAC00",children:"Http Method\uB97C \uC9C0\uC815\uD574\uC11C \uC218\uC9D1\uC744 \uC81C\uC678\uD560 \uC218 \uC788\uB294 \uC124\uC815 \uCD94\uAC00"}),(0,t.jsx)(n.p,{children:"\uC9C0\uC815\uD55C uri \uC5D0 \uB300\uD574\uC11C \uD2B9\uC815 HTTP Method\uB85C \uC694\uCCAD\uB418\uB294 \uD2B8\uB79C\uC7AD\uC158\uC758 \uC218\uC9D1\uC744 \uC81C\uC678\uD569\uB2C8\uB2E4. \uCF64\uB9C8(,) \uAD6C\uBD84\uC73C\uB85C \uC5EC\uB7EC\uAC1C\uC758 uri, Method\uB97C \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uC18C\uBB38\uC790 \uAD6C\uBD84\uC740 \uC5C6\uC2B5\uB2C8\uB2E4."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ignore_http_method_urls"})}),"\n",(0,t.jsx)(n.p,{children:'#Default : ""#'}),"\n",(0,t.jsx)(n.p,{children:"#Type : String#"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ignore_http_method"})}),"\n",(0,t.jsx)(n.p,{children:'#Default : ""#'}),"\n",(0,t.jsx)(n.p,{children:"#Type : String#"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"ignore_http_method_urls=/index, /sql/select\nignore_http_method=options, connect\n"})}),"\n"]}),"\n"]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},37016:function(e,n,r){r.d(n,{Z:function(){return t}});var i=r(85893);function t(e){let{children:n,priority:r}=e;return r?(0,i.jsx)("code",{className:n,type:r,children:n}):(0,i.jsx)("code",{className:n,children:n})}r(67294)},13348:function(e,n,r){r.d(n,{Z:function(){return t}});var i=r(85893);function t(e){let{children:n}=e;return(0,i.jsx)("span",{className:"uitext",children:n})}r(67294)},50065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var i=r(67294);let t={},c=i.createContext(t);function s(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);