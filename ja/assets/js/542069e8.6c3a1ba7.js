"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["27301"],{85113:function(e,n,i){i.r(n),i.d(n,{metadata:()=>c,contentTitle:()=>l,default:()=>d,assets:()=>j,toc:()=>r,frontMatter:()=>t});var c=JSON.parse('{"id":"kubernetes/namespace","title":"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u7BA1\u7406","description":"\u30AF\u30E9\u30B9\u30BF\u30FC\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u3001\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u7BA1\u7406\u30E1\u30CB\u30E5\u30FC\u3092\u4F7F\u7528\u3057\u3066\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u7BA1\u7406\u3067\u304D\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/kubernetes/namespace.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/namespace","permalink":"/ja/kubernetes/namespace","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/namespace.mdx","tags":[],"version":"current","frontMatter":{"id":"namespace","title":"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u7BA1\u7406","description":"\u30AF\u30E9\u30B9\u30BF\u30FC\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u3001\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u7BA1\u7406\u30E1\u30CB\u30E5\u30FC\u3092\u4F7F\u7528\u3057\u3066\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u7BA1\u7406\u3067\u304D\u307E\u3059\u3002","keywords":["Kubernetes","Kubernetes\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0"],"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"\uC124\uC815\uD558\uAE30","permalink":"/ja/kubernetes/set-agent"},"next":{"title":"\u9023\u643A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7BA1\u7406","permalink":"/ja/kubernetes/correlations"}}'),M=i("85893"),s=i("50065");let t={id:"namespace",title:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u7BA1\u7406",description:"\u30AF\u30E9\u30B9\u30BF\u30FC\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u3001\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u7BA1\u7406\u30E1\u30CB\u30E5\u30FC\u3092\u4F7F\u7528\u3057\u3066\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u7BA1\u7406\u3067\u304D\u307E\u3059\u3002",keywords:["Kubernetes","Kubernetes\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0"],isTranslationMissing:!1},l=void 0,j={},r=[{value:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7BA1\u7406",id:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7BA1\u7406",level:2},{value:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210",id:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210",level:3},{value:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u524A\u9664",id:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u524A\u9664",level:3}];function A(e){let n={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",section:"section",strong:"strong",...(0,s.a)(),...e.components},{ImgLang:c}=n;return!c&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImgLang",!0),(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(n.p,{children:["\u30DB\u30FC\u30E0\u753B\u9762 > \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u9078\u629E > ",(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"\u7BA1\u7406"})})," > ",(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u7BA1\u7406"})})]}),"\n",(0,M.jsxs)(n.p,{children:["\u30AF\u30E9\u30B9\u30BF\u30FC\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8(",(0,M.jsx)("code",{class:"my",children:"CP"}),")\u3067",(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u7BA1\u7406"})}),"\u30E1\u30CB\u30E5\u30FC\u3092\u901A\u3058\u3066\u3001\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u7BA1\u7406\u3067\u304D\u307E\u3059\u3002\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u3001\u5F53\u8A72\u30E1\u30CB\u30E5\u30FC\u3078\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,M.jsxs)(n.admonition,{type:"note",children:[(0,M.jsxs)(n.p,{children:["\u30AF\u30E9\u30B9\u30BF\u30FC\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E",(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9"})})," > ",(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"\u30B3\u30F3\u30C6\u30CA\u30DE\u30C3\u30D7"})}),"\u30E1\u30CB\u30E5\u30FC\u753B\u9762\u306E\u4E0A\u306B\u3001\u4E0B\u4F4D\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u307E\u305F\u306F",(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u72B6\u614B"})}),"\u304A\u3088\u3073",(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u7BA1\u7406"})}),"\u30E1\u30CB\u30E5\u30FC\u304B\u3089\u79FB\u52D5\u3067\u304D\u308B\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002"]}),(0,M.jsx)(c,{img:"k8s-namespace-project-list-check.png",desc:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u79FB\u52D5"})]}),"\n",(0,M.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,M.jsx)(n.h2,{id:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7BA1\u7406",children:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7BA1\u7406"}),(0,M.jsx)(c,{img:"k8s-namespace-mng.png",desc:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u7BA1\u7406"}),(0,M.jsxs)(n.p,{children:["\u30DA\u30FC\u30B8\u4E0A\u6BB5\u306E",(0,M.jsx)(n.img,{alt:"number-1",src:i(12979).Z+"",width:"35",height:"35"}),"\u9818\u57DF\u3067\u306F\u3001\u5168\u4F53\u5BFE\u8C61\u6570\u304A\u3088\u3073\u4E3B\u8981\u306A\u30EA\u30BD\u30FC\u30B9\u306E\u6570\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002",(0,M.jsx)(n.img,{alt:"number-2",src:i(39701).Z+"",width:"35",height:"35"})," ",(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u4E00\u89A7"})}),"\u9818\u57DF\u304B\u3089\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u691C\u7D22\u3001\u8FFD\u52A0\u304A\u3088\u3073\u524A\u9664\u304C\u3067\u304D\u307E\u3059\u3002"]})]}),"\n",(0,M.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,M.jsx)(n.h3,{id:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210",children:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210"}),(0,M.jsxs)(n.p,{children:[(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u4E00\u89A7"})}),"\u304B\u3089\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u9805\u76EE\u306E",(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"+ \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u8FFD\u52A0"})}),"\u30DC\u30BF\u30F3\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u8FFD\u52A0"})}),"\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u8868\u793A\u3055\u308C\u308B\u3068",(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"\u78BA\u8A8D"})}),"\u30DC\u30BF\u30F3\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),(0,M.jsxs)(n.admonition,{type:"note",children:[(0,M.jsx)(n.mdxAdmonitionTitle,{}),(0,M.jsx)(n.p,{children:(0,M.jsx)(n.strong,{children:"\u6CE8\u610F\u4E8B\u9805"})}),(0,M.jsxs)(n.p,{children:["\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u305D\u306E\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u306F\u30AF\u30E9\u30B9\u30BF\u30FC\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8(",(0,M.jsx)("code",{class:"my",children:"CP"}),")\u304B\u3089\u5225\u306EWhaTap\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u5206\u96E2\u3055\u308C\u307E\u3059\u3002\u8FFD\u52A0\u3055\u308C\u305F\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u3001\u65B0\u305F\u306A",(0,M.jsx)(n.strong,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC"}),"\u304C\u4ED8\u4E0E\u3055\u308C\u307E\u3059\u3002"]}),(0,M.jsxs)(n.p,{children:["\u5206\u96E2\u3055\u308C\u305F\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u8A2D\u5B9A\u5185\u306E",(0,M.jsx)(n.strong,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC"}),"\u3092\u65B0\u305F\u306B\u8FFD\u52A0\u3055\u308C\u305F\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E",(0,M.jsx)(n.strong,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC"}),"\u306B\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]})]})]}),"\n",(0,M.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,M.jsx)(n.h3,{id:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u524A\u9664",children:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u524A\u9664"}),(0,M.jsxs)(n.ol,{children:["\n",(0,M.jsxs)(n.li,{children:["\n",(0,M.jsxs)(n.p,{children:[(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u4E00\u89A7"})}),"\u3067\u524A\u9664\u3059\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u9805\u76EE\u306E\u53F3\u5074\u306E",(0,M.jsx)(n.img,{alt:"\u8A2D\u5B9A\u30A2\u30A4\u30B3\u30F3",src:i(45522).Z+"",width:"20",height:"20"})," ",(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"\u8A2D\u5B9A"})}),"\u30A2\u30A4\u30B3\u30F3\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,M.jsxs)(n.li,{children:["\n",(0,M.jsxs)(n.p,{children:[(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7BA1\u7406"})}),"\u30E1\u30CB\u30E5\u30FC\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,M.jsxs)(n.li,{children:["\n",(0,M.jsxs)(n.p,{children:["\u753B\u9762\u53F3\u4E0A\u306E",(0,M.jsx)(n.strong,{children:(0,M.jsx)(n.em,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u524A\u9664"})}),"\u30DC\u30BF\u30F3\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n"]}),(0,M.jsx)(n.admonition,{type:"caution",children:(0,M.jsx)(n.p,{children:"\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u524A\u9664\u3059\u308B\u5834\u5408\u3001\u30E6\u30FC\u30B6\u30FC\u4E00\u89A7\u60C5\u5831\u3068\u53CE\u96C6\u3057\u305F\u30C7\u30FC\u30BF\u306F\u3059\u3079\u3066\u524A\u9664\u3055\u308C\u307E\u3059\u3002\u524A\u9664\u3057\u305F\u30C7\u30FC\u30BF\u306F\u5FA9\u5143\u3067\u304D\u306A\u3044\u306E\u3067\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"})}),(0,M.jsx)(n.admonition,{type:"note",children:(0,M.jsxs)(n.p,{children:["\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7BA1\u7406\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,M.jsx)(n.a,{href:"../project/project-manage",children:"\u6B21\u306E\u6587\u66F8"}),"\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]})})]})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,M.jsx)(n,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}},45522:function(e,n,i){i.d(n,{Z:function(){return c}});let c="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmb3VuZGF0aW9uPSJbb2JqZWN0IE9iamVjdF0iIGNsYXNzPSJJbm5lckljb25zdHlsZWRfX0ljb24tY2gtZnJvbnRfX3NjLTE5N2g1YmItMCBka0RyT3IiIGRlZmF1bHRvcGFjaXR5PSIxIiBob3ZlcmVkb3BhY2l0eT0iMSIgbWFyZ2ludG9wPSIwIiBtYXJnaW5yaWdodD0iMCIgbWFyZ2luYm90dG9tPSIwIiBtYXJnaW5sZWZ0PSIwIiB3aXRodGhlbWU9InRydWUiPjxwYXRoIGZpbGw9IiM3OTc5NzkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS44MzM1NCAxMC4wMDAxQzUuODMzNTQgNy42OTkzOSA3LjY5ODgxIDUuODMzNDIgMTAuMDAwMiA1LjgzMzQyQzEyLjMwMDkgNS44MzM0MiAxNC4xNjY5IDcuNjk5MzkgMTQuMTY2OSAxMC4wMDAxQzE0LjE2NjkgMTIuMzAwOCAxMi4zMDA5IDE0LjE2NjcgMTAuMDAwMiAxNC4xNjY3QzcuNjk4ODEgMTQuMTY2NyA1LjgzMzU0IDEyLjMwMDggNS44MzM1NCAxMC4wMDAxWk0xOC4zMzM1IDExLjI1MDFWOC43NTAwOEwxNi40NzUyIDguNDQwMDhDMTYuMzA5NCA3Ljc1NTA4IDE2LjAzOTQgNy4xMTE3NSAxNS42Nzk0IDYuNTI2NzVMMTYuNzc2IDQuOTkwOTFMMTUuMDA4NSAzLjIyMzQxTDEzLjQ3MjcgNC4zMjA5MUMxMi44ODc3IDMuOTYwOTEgMTIuMjQ1MiAzLjY5MDkxIDExLjU2MDIgMy41MjUwOEwxMS4yNTAyIDEuNjY2NzVIOC43NTAyTDguNDQwMiAzLjUyNTA4QzcuNzU1MiAzLjY5MDkxIDcuMTExODcgMy45NjA5MSA2LjUyNjg3IDQuMzIwOTFMNC45OTEwNCAzLjIyMzQxTDMuMjIzNTQgNC45OTA5MUw0LjMyMDIgNi41MjY3NUMzLjk2MTA0IDcuMTExNzUgMy42OTAyIDcuNzU1MDggMy41MjUyIDguNDQwMDhMMS42NjY4NyA4Ljc1MDA4VjExLjI1MDFMMy41MjUyIDExLjU2MDFDMy42OTAyIDEyLjI0NTEgMy45NjEwNCAxMi44ODg0IDQuMzIwMiAxMy40NzM0TDMuMjIzNTQgMTUuMDA5Mkw0Ljk5MTA0IDE2Ljc3NjdMNi41MjY4NyAxNS42NzkyQzcuMTExODcgMTYuMDM4NCA3Ljc1NTIgMTYuMzA5MiA4LjQ0MDIgMTYuNDc1MUw4Ljc1MDIgMTguMzMzNEgxMS4yNTAyTDExLjU2MDIgMTYuNDc1MUMxMi4yNDUyIDE2LjMwOTIgMTIuODg3NyAxNi4wMzg0IDEzLjQ3MjcgMTUuNjc5MkwxNS4wMDg1IDE2Ljc3NjdMMTYuNzc2IDE1LjAwOTJMMTUuNjc5NCAxMy40NzM0QzE2LjAzOTQgMTIuODg4NCAxNi4zMDk0IDEyLjI0NTEgMTYuNDc1MiAxMS41NjAxTDE4LjMzMzUgMTEuMjUwMVoiPjwvcGF0aD48L3N2Zz4="},12979:function(e,n,i){i.d(n,{Z:function(){return c}});let c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII="},39701:function(e,n,i){i.d(n,{Z:function(){return c}});let c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII="},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return t}});var c=i(67294);let M={},s=c.createContext(M);function t(e){let n=c.useContext(s);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(M):e.components||M:t(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);