"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["64043"],{17581:function(e,n,a){a.d(n,{ZP:function(){return o},d$:function(){return i}});var t=a(85893),r=a(50065);let i=[];function s(e){let n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Link:a}=n;return!a&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Link",!0),(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("b",{children:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"}),": ",(0,t.jsxs)(a,{to:`https://repo.whatap.io/maven/io/whatap/whatap.agent/${e.ver}/whatap.agent-${e.ver}.jar`,children:["Java Agent v",e.ver]})]}),(0,t.jsxs)(n.p,{children:["Java\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3092\u6700\u521D\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5834\u5408\u306F\u3001\u6B21\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u6700\u521D\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,t.jsx)(n.a,{href:"../../java/install-agent",children:"\u6B21\u306E\u6587\u66F8"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget https://api.whatap.io/agent/whatap.agent.java.tar.gz\n"})})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},28003:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"release-notes/java/java-2_2_35","title":"Java Agent v2.2.35","description":"2024\u5E7406\u670820\u65E5","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/java/java-2.2.35.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_35","permalink":"/ja/release-notes/java/java-2_2_35","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.35.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_35","title":"Java Agent v2.2.35","toc_max_heading_level":2,"pagination_next":"release-notes/java/java-2_2_34","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Java Agent v2.2.36","permalink":"/ja/release-notes/java/java-2_2_36"},"next":{"title":"Java Agent v2.2.34","permalink":"/ja/release-notes/java/java-2_2_34"}}'),r=a("85893"),i=a("50065"),s=a("17581");let o={id:"java-2_2_35",title:"Java Agent v2.2.35",toc_max_heading_level:2,pagination_next:"release-notes/java/java-2_2_34",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},l=void 0,c={},d=[...s.d$];function p(e){let n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Status:a}=n;return!a&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"2024\u5E7406\u670820\u65E5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(a,{children:"Feature"})," spring-boot-3.0.5\u4EE5\u964D(spring-webflux-6.0.7\u4EE5\u964D) \u30D0\u30FC\u30B8\u30E7\u30F3\u3067WebClient\u4F7F\u7528\u6642\u3001\u9023\u643A\u8FFD\u8DE1\u6A5F\u80FD\u3092\u8FFD\u52A0"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:'title="whatap.conf"',children:"weaving=spring-boot-3.0\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(a,{children:"Fixed"})," spring-boot-2.5\u672A\u6E80\u3067spring-cloud-gateway\u3092\u901A\u3058\u3066\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u3092\u547C\u3073\u51FA\u3059\u3068\u3001\u63A5\u7D9A\u3055\u308C\u306A\u3044\u554F\u984C\u3092\u4FEE\u6B63"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:'title="whatap.conf"',children:"weaving=spring-boot-2.1\n"})}),"\n"]}),"\n"]}),"\n","\n",(0,r.jsx)(s.ZP,{ver:"2.2.35"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return s}});var t=a(67294);let r={},i=t.createContext(r);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);