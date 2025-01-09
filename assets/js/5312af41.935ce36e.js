"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["12556"],{84484:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>x,assets:()=>d,toc:()=>h,frontMatter:()=>a});var t=JSON.parse('{"id":"server/agent-network","title":"\uC5D0\uC774\uC804\uD2B8 \uD1B5\uC2E0 \uC124\uC815","description":"\uC5D0\uC774\uC804\uD2B8\uC640 \uC11C\uBC84 \uAC04\uC758 \uC5F0\uACB0\uC5D0 \uAD00\uD55C \uC124\uC815\uC785\uB2C8\uB2E4.","source":"@site/docs/server/agent-network.mdx","sourceDirName":"server","slug":"/server/agent-network","permalink":"/whatap-docs/server/agent-network","draft":false,"unlisted":false,"editUrl":"undefined/docs/server/agent-network.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-network","title":"\uC5D0\uC774\uC804\uD2B8 \uD1B5\uC2E0 \uC124\uC815","description":"\uC5D0\uC774\uC804\uD2B8\uC640 \uC11C\uBC84 \uAC04\uC758 \uC5F0\uACB0\uC5D0 \uAD00\uD55C \uC124\uC815\uC785\uB2C8\uB2E4.","keywords":["Server","\uC5D0\uC774\uC804\uD2B8","\uD1B5\uC2E0 \uC124\uC815"],"isTranslationMissing":false},"sidebar":"serverSidebar","previous":{"title":"\uC5D0\uC774\uC804\uD2B8 \uC774\uB984 \uC2DD\uBCC4","permalink":"/whatap-docs/server/agent-name"},"next":{"title":"\uC708\uB3C4\uC6B0 \uC131\uB2A5 \uCE74\uC6B4\uD130 \uC124\uC815","permalink":"/whatap-docs/server/agent-pcounter"}}'),i=r("85893"),s=r("50065");function o(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(n.h2,{id:"network--security",children:"Network & security"}),(0,i.jsx)(n.p,{children:"\uC640\uD0ED\uC740 \uC5D0\uC774\uC804\uD2B8\uC5D0 \uC11C\uBC84 \uBC29\uD5A5\uC744 TCP \uC5F0\uACB0 \uD6C4 \uBAA8\uB2C8\uD130\uB9C1 \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD569\uB2C8\uB2E4."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://img.whatap.io/media/agent_node/agent_net.png",alt:"\uC640\uD0ED \uC5D0\uC774\uC804\uD2B8 \uB124\uD2B8\uC6CC\uD06C"})}),(0,i.jsx)(n.p,{children:"\uC5D0\uC774\uC804\uD2B8\uB294 \uD558\uB098\uC758 TCP \uC138\uC158\uC744 \uD1B5\uD574\uC11C \uB370\uC774\uD130 \uC804\uC1A1\uACFC \uC11C\uBC84\uC758 \uC81C\uC5B4 \uC694\uCCAD\uC744 \uCC98\uB9AC\uD569\uB2C8\uB2E4. Node \uC5D0\uC774\uC804\uD2B8\uB294 UDP\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. Node \uC5D0\uC774\uC804\uD2B8\uC5D0\uC11C \uC640\uD0ED \uC218\uC9D1 \uC11C\uBC84 \uBC29\uD5A5\uC73C\uB85C \uBC29\uD654\uBCBD\uC744 \uAC1C\uBC29\uD569\uB2C8\uB2E4."})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"\uC218\uC9D1-\uC11C\uBC84-\uC8FC\uC18C\uC640-\uD3EC\uD2B8",children:"\uC218\uC9D1 \uC11C\uBC84 \uC8FC\uC18C\uC640 \uD3EC\uD2B8"}),(0,i.jsx)(n.p,{children:"\uC640\uD0ED \uC11C\uBC84\uB294 \uB370\uC774\uD130 \uB9AC\uC804 \uC11C\uBC84\uC640 \uD504\uB860\uD2B8 \uC11C\uBC84, \uC720\uB808\uCE74 \uB4F1\uC73C\uB85C \uAD6C\uBD84\uD569\uB2C8\uB2E4. \uB370\uC774\uD130 \uB9AC\uC804\uC5D0\uB294 \uB2E4\uC2DC Proxy, Yard, Gateway, Keeper \uB4F1\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC5D0\uC774\uC804\uD2B8\uB294 \uADF8\uC911\uC5D0 Proxy \uC11C\uBC84\uC640 \uD1B5\uC2E0\uC744 \uD569\uB2C8\uB2E4."}),(0,i.jsxs)(n.p,{children:["Node \uC5D0\uC774\uC804\uD2B8\uC5D0 \uC640\uD0ED \uC11C\uBC84\uC758 proxy \uC11C\uBC84\uC758 \uC8FC\uC18C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.(\uC608, ",(0,i.jsx)(n.code,{children:"whatap.server.host=10.0.3.1/10.0.3.2"}),") \uC11C\uBC84 \uC8FC\uC18C\uB97C \uC124\uC815\uD560 \uB54C\uB294 proxy \uC11C\uBC84 \uC22B\uC790\uB9CC\uD07C \uC785\uB825\uD569\uB2C8\uB2E4. \uC640\uD0ED \uC11C\uBC84\uB294 \uC124\uCE58 \uBC29\uC2DD\uC5D0 \uB530\uB77C\uC11C proxy \uC11C\uBC84\uB97C 1\uAC1C \uB610\uB294 \uC5EC\uB7EC \uAC1C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,i.jsx)(n.p,{children:"\uC640\uD0ED Proxy \uC11C\uBC84\uB294 6600 \uD3EC\uD2B8\uC5D0\uC11C \uB9AC\uC2A4\uB2DD(Listening)\uD569\uB2C8\uB2E4. \uC5D0\uC774\uC804\uD2B8\uC5D0\uC11C \uBCC4\uB3C4 \uC124\uC815\uC744 \uD558\uC9C0 \uC54A\uC73C\uBA74 \uC5D0\uC774\uC804\uD2B8\uB294 6600 \uD3EC\uD2B8\uB85C \uC811\uC18D\uC744 \uC2DC\uB3C4\uD569\uB2C8\uB2E4."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"whatap.server.port=6600\n"})}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"\uB450 \uAC1C\uC758 Proxy \uC11C\uBC84\uAC00 \uC11C\uB85C \uC0C1\uC774\uD55C \uD3EC\uD2B8\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC5EC\uB7EC \uB300\uC758 Proxy \uC11C\uBC84\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 \uB9AC\uC2A4\uB2DD(Listening) \uD3EC\uD2B8\uB294 \uB3D9\uC77C\uD574\uC57C \uD569\uB2C8\uB2E4."})})]}),"\n",(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"\uD1B5\uC2E0-\uC5F0\uACB0-\uBC0F-\uBCF4\uC548",children:"\uD1B5\uC2E0 \uC5F0\uACB0 \uBC0F \uBCF4\uC548"}),(0,i.jsx)(n.p,{children:"\uC640\uD0ED\uC740 \uD37C\uBE14\uB9AD \uB124\uD2B8\uC6CC\uD06C\uC5D0\uC11C \uBAA8\uB2C8\uD130\uB9C1 \uB370\uC774\uD130\uB97C \uC218\uC9D1\uD558\uB294 \uAC83\uC744 \uC804\uC81C\uB85C \uC124\uACC4\uD588\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uBAA8\uB4E0 \uBAA8\uB2C8\uD130\uB9C1 \uB370\uC774\uD130\uB97C \uC554\uD638\uD654\uD574 \uC11C\uBC84\uB85C \uC804\uC1A1\uD569\uB2C8\uB2E4. \uB9CE\uC740 \uB370\uC774\uD130\uB97C \uC554\uD638\uD654 \uC804\uC1A1\uD558\uBA74 \uC624\uBC84\uD5E4\uB4DC\uB97C \uC720\uBC1C\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC640\uD0ED\uC740 \uB370\uC774\uD130\uB97C \uC120\uBCC4\uC801\uC73C\uB85C \uC554\uD638\uD654\uD569\uB2C8\uB2E4. \uC5D0\uC774\uC804\uD2B8\uC640 \uC11C\uBC84 \uC0AC\uC774\uC758 \uD1B5\uC2E0 \uACFC\uC815\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4."}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131 \uBA54\uB274\uC5D0\uC11C ",(0,i.jsx)(n.strong,{children:"\uD504\uB85C\uC81D\uD2B8 \uC561\uC138\uC2A4 \uD0A4"}),"\uB97C \uC0DD\uC131\uD558\uACE0 \uBCF5\uC0AC\uD558\uC138\uC694."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\uD504\uB85C\uC81D\uD2B8 \uC561\uC138\uC2A4 \uD0A4"}),"\uC5D0\uB294 \uBE44\uBC00\uD0A4\uB97C \uD3EC\uD568\uD569\uB2C8\uB2E4. \uC678\uBD80\uC5D0 \uC54C\uB824\uC9C0\uC9C0 \uC54A\uB3C4\uB85D \uC8FC\uC758\uD558\uC138\uC694."]}),"\n",(0,i.jsx)(n.li,{children:"\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC11C\uBC84\uB97C \uB2E4\uC2DC \uC2DC\uC791\uD558\uC138\uC694."}),"\n",(0,i.jsx)(n.li,{children:"\uC640\uD0ED \uC5D0\uC774\uC804\uD2B8\uB294 \uC11C\uBC84\uB85C TCP \uC138\uC158\uC744 \uC5F0\uACB0\uD569\uB2C8\uB2E4."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\uD504\uB85C\uC81D\uD2B8 \uC561\uC138\uC2A4 \uD0A4"}),"\uC5D0 \uD3EC\uD568\uB41C \uD1B5\uC2E0\uC6A9 \uBE44\uBC00\uD0A4\uB97C \uAC00\uC9C0\uACE0 \uB370\uC774\uD130\uB97C \uC554\uD638\uD654\uD574 \uC0C8\uB85C\uC6B4 \uC138\uC158\uC6A9 \uBCF4\uC548 \uD0A4\uB97C \uC694\uCCAD\uD569\uB2C8\uB2E4."]}),"\n",(0,i.jsx)(n.li,{children:"\uC11C\uBC84\uB294 \uC5D0\uC774\uC804\uD2B8\uAC00 \uC694\uCCAD\uD55C \uC138\uC158\uC6A9 \uBCF4\uC548 \uD0A4\uB97C \uC0C8\uB85C \uB9CC\uB4E4\uC5B4 \uC5D0\uC774\uC804\uD2B8\uC5D0 \uB0B4\uB824\uBCF4\uB0C5\uB2C8\uB2E4."}),"\n",(0,i.jsx)(n.li,{children:"\uC138\uC158\uC6A9 \uBCF4\uC548\uD0A4\uB294 2\uAC1C\uC758 \uC554\uD638 \uD0A4\uB97C \uD3EC\uD568\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. ASC \uC54C\uACE0\uB9AC\uC998\uC6A9 \uC554\uD638 \uD0A4\uC640 \uB2E8\uC21C \uC554\uD638\uB97C \uC704\uD55C \uC554\uD638 \uD0A4\uC785\uB2C8\uB2E4."}),"\n",(0,i.jsx)(n.li,{children:"\uC774\uD6C4\uC5D0 \uC5D0\uC774\uC804\uD2B8\uB294 \uD14D\uC2A4\uD2B8\uC640 \uC81C\uC5B4 \uB4F1 \uC911\uC694\uD55C \uB370\uC774\uD130\uB294 ASC \uC554\uD638 \uD0A4\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC22B\uC790 \uB370\uC774\uD130\uC640 \uAC19\uC774 \uC0C1\uB300\uC801\uC73C\uB85C \uC548\uC804\uD55C \uB370\uC774\uD130\uB294 \uB2E8\uC21C \uC554\uD638\uD654\uB97C \uAC70\uCCD0 \uB370\uC774\uD130\uB97C \uC11C\uBC84\uC5D0 \uC804\uC1A1\uD569\uB2C8\uB2E4."}),"\n"]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"\uBCC0\uACBD \uC0AC\uD56D\uC744 \uC801\uC6A9\uD558\uB824\uBA74 \uC11C\uBC84\uB97C \uC7AC\uC2DC\uC791\uD558\uC138\uC694."})})]})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}let a={id:"agent-network",title:"\uC5D0\uC774\uC804\uD2B8 \uD1B5\uC2E0 \uC124\uC815",description:"\uC5D0\uC774\uC804\uD2B8\uC640 \uC11C\uBC84 \uAC04\uC758 \uC5F0\uACB0\uC5D0 \uAD00\uD55C \uC124\uC815\uC785\uB2C8\uB2E4.",keywords:["Server","\uC5D0\uC774\uC804\uD2B8","\uD1B5\uC2E0 \uC124\uC815"],isTranslationMissing:!1},l=void 0,d={},h=[{value:"Network &amp; security",id:"network--security",level:2},{value:"\uC218\uC9D1 \uC11C\uBC84 \uC8FC\uC18C\uC640 \uD3EC\uD2B8",id:"\uC218\uC9D1-\uC11C\uBC84-\uC8FC\uC18C\uC640-\uD3EC\uD2B8",level:3},{value:"\uD1B5\uC2E0 \uC5F0\uACB0 \uBC0F \uBCF4\uC548",id:"\uD1B5\uC2E0-\uC5F0\uACB0-\uBC0F-\uBCF4\uC548",level:3}];function p(e){return(0,i.jsx)(c,{})}function x(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var t=r(67294);let i={},s=t.createContext(i);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);