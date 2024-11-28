"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["53955"],{48874:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>t,default:()=>a,assets:()=>d,toc:()=>o,frontMatter:()=>l});var i=JSON.parse('{"id":"dotnet/quick-start","title":"\uBE60\uB978 \uC124\uCE58 \uBC0F \uBB38\uC81C \uD574\uACB0","description":"\uC640\uD0ED .NET \uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4 \uAE30\uB2A5\uC744 \uBE60\uB974\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uC548\uB0B4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.","source":"@site/docs/dotnet/quick-start.mdx","sourceDirName":"dotnet","slug":"/dotnet/quick-start","permalink":"/whatap-docs/dotnet/quick-start","draft":false,"unlisted":false,"editUrl":"undefined/docs/dotnet/quick-start.mdx","tags":[],"version":"current","frontMatter":{"id":"quick-start","title":"\uBE60\uB978 \uC124\uCE58 \uBC0F \uBB38\uC81C \uD574\uACB0","description":"\uC640\uD0ED .NET \uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4 \uAE30\uB2A5\uC744 \uBE60\uB974\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uC548\uB0B4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.","toc_max_heading_level":2,"keywords":["\uC560\uD50C\uB9AC\uCF00\uC774\uC158",".NET","\uC5D0\uC774\uC804\uD2B8 \uC124\uCE58","\uD2B8\uB7EC\uBE14\uC288\uD305","\uBE60\uB978 \uC2DC\uC791\uD558\uAE30"],"isTranslationMissing":false},"sidebar":"dotNetSidebar","previous":{"title":"\uC124\uCE58 \uBB38\uC81C \uD574\uACB0","permalink":"/whatap-docs/dotnet/agent-troubleshooting"},"next":{"title":"\uC124\uC815\uD558\uAE30","permalink":"/whatap-docs/dotnet/set-agent"}}'),r=s("85893"),c=s("50065");let l={id:"quick-start",title:"\uBE60\uB978 \uC124\uCE58 \uBC0F \uBB38\uC81C \uD574\uACB0",description:"\uC640\uD0ED .NET \uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4 \uAE30\uB2A5\uC744 \uBE60\uB974\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uC548\uB0B4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.",toc_max_heading_level:2,keywords:["\uC560\uD50C\uB9AC\uCF00\uC774\uC158",".NET","\uC5D0\uC774\uC804\uD2B8 \uC124\uCE58","\uD2B8\uB7EC\uBE14\uC288\uD305","\uBE60\uB978 \uC2DC\uC791\uD558\uAE30"],isTranslationMissing:!1},t=void 0,d={},o=[{value:"\uC5D0\uC774\uC804\uD2B8 \uC124\uCE58 \uC2DC",id:"\uC5D0\uC774\uC804\uD2B8-\uC124\uCE58-\uC2DC",level:2},{value:"\uC708\uB3C4\uC6B0 \uC11C\uBC84 2008 \uB610\uB294 .NET 4.6.1 \uBBF8\uB9CC \uBC84\uC804 \uC0AC\uC6A9\uD560 \uACBD\uC6B0",id:"\uC708\uB3C4\uC6B0-\uC11C\uBC84-2008-\uB610\uB294-net-461-\uBBF8\uB9CC-\uBC84\uC804-\uC0AC\uC6A9\uD560-\uACBD\uC6B0",level:3},{value:"\uC5D0\uC774\uC804\uD2B8 \uC124\uCE58 \uD6C4",id:"\uC5D0\uC774\uC804\uD2B8-\uC124\uCE58-\uD6C4",level:2},{value:"\uB370\uC774\uD130\uAC00 \uC218\uC9D1\uB418\uC9C0 \uC54A\uB294 \uACBD\uC6B0",id:"\uB370\uC774\uD130\uAC00-\uC218\uC9D1\uB418\uC9C0-\uC54A\uB294-\uACBD\uC6B0",level:3},{value:"\uD788\uD2B8\uB9F5 \uB370\uC774\uD130\uAC00 \uC218\uC9D1\uB418\uC9C0 \uC54A\uB294 \uACBD\uC6B0",id:"\uD788\uD2B8\uB9F5-\uB370\uC774\uD130\uAC00-\uC218\uC9D1\uB418\uC9C0-\uC54A\uB294-\uACBD\uC6B0",level:3},{value:"\uC9C0\uC6D0 \uD658\uACBD \uD655\uC778\uC774 \uC5B4\uB835\uAC70\uB098 \uC9C0\uC6D0 \uB300\uC0C1\uC778 \uACBD\uC6B0",id:"\uC9C0\uC6D0-\uD658\uACBD-\uD655\uC778\uC774-\uC5B4\uB835\uAC70\uB098-\uC9C0\uC6D0-\uB300\uC0C1\uC778-\uACBD\uC6B0",level:3},{value:"WCF \uBC0F \uACF5\uC2DD \uBBF8\uC9C0\uC6D0 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uBAA8\uB2C8\uD130\uB9C1",id:"wcf-\uBC0F-\uACF5\uC2DD-\uBBF8\uC9C0\uC6D0-\uB77C\uC774\uBE0C\uB7EC\uB9AC-\uBAA8\uB2C8\uD130\uB9C1",level:2},{value:"\uC124\uC815 \uC635\uC158",id:"\uC124\uC815-\uC635\uC158",level:3},{value:"\uC0AC\uC6A9 \uC608\uC2DC",id:"\uC0AC\uC6A9-\uC608\uC2DC",level:3},{value:"whatap.conf \uC218\uC815",id:"whatapconf-\uC218\uC815",level:4},{value:"\uB124\uC784\uC2A4\uD398\uC774\uC2A4\uC640 \uD074\uB798\uC2A4 \uC774\uB984 \uCC3E\uAE30",id:"\uB124\uC784\uC2A4\uD398\uC774\uC2A4\uC640-\uD074\uB798\uC2A4-\uC774\uB984-\uCC3E\uAE30",level:2},{value:"WCF\uC758 \uACBD\uC6B0",id:"wcf\uC758-\uACBD\uC6B0",level:3},{value:"Web Service\uC758 \uACBD\uC6B0",id:"web-service\uC758-\uACBD\uC6B0",level:3},{value:"\uC124\uC815 \uC608\uC2DC",id:"\uC124\uC815-\uC608\uC2DC",level:3},{value:"\uD2B8\uB79C\uC7AD\uC158\uC740 \uC7A1\uD788\uC9C0\uB9CC \uC2A4\uD15D \uC815\uBCF4\uAC00 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uAC70\uB098 \uB108\uBB34 \uC801\uC744 \uB54C",id:"\uD2B8\uB79C\uC7AD\uC158\uC740-\uC7A1\uD788\uC9C0\uB9CC-\uC2A4\uD15D-\uC815\uBCF4\uAC00-\uD45C\uC2DC\uB418\uC9C0-\uC54A\uAC70\uB098-\uB108\uBB34-\uC801\uC744-\uB54C",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,c.a)(),...e.components},{Cmdname:s,ImgLang:i}=n;return!s&&x("Cmdname",!0),!i&&x("ImgLang",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"\uC5D0\uC774\uC804\uD2B8-\uC124\uCE58-\uC2DC",children:"\uC5D0\uC774\uC804\uD2B8 \uC124\uCE58 \uC2DC"}),(0,r.jsxs)(n.p,{children:["\uC5D0\uC774\uC804\uD2B8 \uC124\uCE58\uC758 \uACBD\uC6B0 \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131\uBD80\uD130 \uBAA8\uB2C8\uD130\uB9C1 \uD65C\uC131\uD654 \uB2E8\uACC4\uAE4C\uC9C0 ",(0,r.jsx)(n.a,{href:"install-agent",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694. \uC5D0\uC774\uC804\uD2B8 \uC124\uCE58 \uD6C4 ",(0,r.jsx)(n.strong,{children:"IIS"}),"\uAC00 ",(0,r.jsx)(n.strong,{children:"\uC7AC\uC2DC\uC791"}),"\uB429\uB2C8\uB2E4."]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"\uC708\uB3C4\uC6B0-\uC11C\uBC84-2008-\uB610\uB294-net-461-\uBBF8\uB9CC-\uBC84\uC804-\uC0AC\uC6A9\uD560-\uACBD\uC6B0",children:"\uC708\uB3C4\uC6B0 \uC11C\uBC84 2008 \uB610\uB294 .NET 4.6.1 \uBBF8\uB9CC \uBC84\uC804 \uC0AC\uC6A9\uD560 \uACBD\uC6B0"}),(0,r.jsx)(n.p,{children:"\uC640\uD0ED .NET \uC5D0\uC774\uC804\uD2B8\uB294 \uC708\uB3C4\uC6B0 \uC11C\uBC84 2012 \uC774\uC0C1 \uBC0F .NET Framework 4.6.1 \uC774\uC0C1 \uC0AC\uC6A9\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4. \uADF8 \uC774\uD558\uC758 \uBC84\uC804\uC744 \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 \uB2E4\uC74C \uB9C1\uD06C\uC758 \uC124\uCE58 \uD504\uB85C\uADF8\uB7A8\uC744 \uC0AC\uC6A9\uD558\uC138\uC694."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://repo.whatap.io/windows/whatap_dotnet_450.exe",children:"\uC124\uCE58 \uD504\uB85C\uADF8\uB7A8"})}),"\n"]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"\uC5D0\uC774\uC804\uD2B8-\uC124\uCE58-\uD6C4",children:"\uC5D0\uC774\uC804\uD2B8 \uC124\uCE58 \uD6C4"}),(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uC624\uB958 \uBC0F \uB85C\uADF8 \uC804\uB2EC"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uC624\uB958 \uBC1C\uC0DD \uC2DC \uC624\uB958 \uD654\uBA74\uC744 \uCEA1\uCCD0\uD55C \uC774\uBBF8\uC9C0 \uB610\uB294 \uD574\uB2F9 \uD14D\uC2A4\uD2B8\uB97C \uC804\uB2EC\uD574 \uC8FC\uC138\uC694."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uC5D0\uC774\uC804\uD2B8 \uB85C\uADF8 \uD30C\uC77C\uC744 \uC804\uB2EC\uD574 \uC8FC\uC138\uC694. \uB2E4\uC74C \uACBD\uB85C\uC5D0\uC11C \uB85C\uADF8 \uD30C\uC77C\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD574\uB2F9 \uC624\uB958\uAC00 \uC5C6\uB294 \uACBD\uC6B0 \uD3F4\uB354\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"C:\\Program Files\\WhaTap .NET\\logs"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"C:\\ProgramData\\WhaTap"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"\uB370\uC774\uD130\uAC00-\uC218\uC9D1\uB418\uC9C0-\uC54A\uB294-\uACBD\uC6B0",children:"\uB370\uC774\uD130\uAC00 \uC218\uC9D1\uB418\uC9C0 \uC54A\uB294 \uACBD\uC6B0"}),(0,r.jsx)(i,{img:"dotnet-trst01.png",desc:"\uB370\uC774\uD130 \uBBF8\uC218\uC9D1"}),(0,r.jsxs)(n.p,{children:["\uC608\uC2DC\uC640 \uAC19\uC774 ",(0,r.jsx)(s,{sid:"TTL07975",className:"uitext"}),"\uC5D0\uC11C \uBAA8\uB4E0 \uC815\uBCF4\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uC218\uC9D1\uB418\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uB2E4\uC74C\uC744 \uD655\uC778\uD558\uC138\uC694."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uC561\uC138\uC2A4 \uD0A4\uC640 \uC218\uC9D1 \uC11C\uBC84 \uC815\uBCF4\uAC00 \uC815\uD655\uD558\uAC8C \uC785\uB825\uB418\uC5B4\uC788\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\uD574\uB2F9 \uC11C\uBC84\uC758 \uBC29\uD654\uBCBD \uC124\uC815\uC744 \uD655\uC778\uD558\uC138\uC694. \uC544\uC6C3\uBC14\uC6B4\uB4DC ",(0,r.jsx)(n.strong,{children:"6600"})," \uD3EC\uD2B8\uAC00 \uC5F4\uB824\uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4."]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"\uD788\uD2B8\uB9F5-\uB370\uC774\uD130\uAC00-\uC218\uC9D1\uB418\uC9C0-\uC54A\uB294-\uACBD\uC6B0",children:"\uD788\uD2B8\uB9F5 \uB370\uC774\uD130\uAC00 \uC218\uC9D1\uB418\uC9C0 \uC54A\uB294 \uACBD\uC6B0"}),(0,r.jsx)(i,{img:"dotnet-trst02.png",desc:"\uD788\uD2B8\uB9F5 \uB370\uC774\uD130 \uBBF8\uC218\uC9D1"}),(0,r.jsxs)(n.p,{children:["\uC608\uC2DC\uC640 \uAC19\uC774 \uD788\uD2B8\uB9F5 \uC815\uBCF4\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uC218\uC9D1\uB418\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uB300\uC0C1 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC9C0\uC6D0 \uD658\uACBD\uC5D0 \uD574\uB2F9\uD558\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694. \uC9C0\uC6D0 \uD658\uACBD\uC740 ",(0,r.jsx)(n.a,{href:"https://docs.whatap.io/dotnet/supported-spec",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"\uC9C0\uC6D0-\uD658\uACBD-\uD655\uC778\uC774-\uC5B4\uB835\uAC70\uB098-\uC9C0\uC6D0-\uB300\uC0C1\uC778-\uACBD\uC6B0",children:"\uC9C0\uC6D0 \uD658\uACBD \uD655\uC778\uC774 \uC5B4\uB835\uAC70\uB098 \uC9C0\uC6D0 \uB300\uC0C1\uC778 \uACBD\uC6B0"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\uB300\uC0C1 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 ",(0,r.jsx)(n.em,{children:"web.config"})," \uD30C\uC77C\uC744 \uC804\uB2EC\uD574 \uC8FC\uC138\uC694."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\uB300\uC0C1 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C(",(0,r.jsx)(n.em,{children:"*.csproj"}),")\uC744 \uC804\uB2EC\uD574 \uC8FC\uC138\uC694."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uB2E4\uC74C \uB9C1\uD06C\uB97C \uD1B5\uD574 .NET \uC5D0\uC774\uC804\uD2B8 \uC9C0\uC6D0 \uD658\uACBD\uC5D0 \uD574\uB2F9\uD558\uB294\uC9C0 AI\uB97C \uD65C\uC6A9\uD558\uC5EC \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://whatap-dotnet.s3.ap-northeast-2.amazonaws.com/analysis.html",children:".NET \uC5D0\uC774\uC804\uD2B8 \uC9C0\uC6D0 \uD658\uACBD \uBD84\uC11D"})}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"wcf-\uBC0F-\uACF5\uC2DD-\uBBF8\uC9C0\uC6D0-\uB77C\uC774\uBE0C\uB7EC\uB9AC-\uBAA8\uB2C8\uD130\uB9C1",children:"WCF \uBC0F \uACF5\uC2DD \uBBF8\uC9C0\uC6D0 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uBAA8\uB2C8\uD130\uB9C1"}),(0,r.jsx)(n.p,{children:"WCF(Windows Communication Foundation)\uC640 \uAC19\uC774 \uC640\uD0ED .NET \uC5D0\uC774\uC804\uD2B8\uAC00 \uACF5\uC2DD\uC801\uC73C\uB85C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uBAA8\uB2C8\uD130\uB9C1\uD558\uB824\uBA74 \uB2E4\uC74C \uC548\uB0B4\uB97C \uD655\uC778\uD558\uC138\uC694."}),(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsx)(n.p,{children:"\uAD11\uBC94\uC704\uD55C \uC124\uC815 \uC2DC \uACFC\uB3C4\uD55C \uD2B8\uB798\uD53D\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."})]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"\uC124\uC815-\uC635\uC158",children:"\uC124\uC815 \uC635\uC158"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"webservice_method_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAC12\uC744 ",(0,r.jsx)(n.code,{children:"true"}),"\uB85C \uC124\uC815 \uC2DC \uC6F9 \uC11C\uBE44\uC2A4\uB97C \uCD94\uC801\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsx)(n.p,{children:"\uD574\uB2F9 \uC635\uC158\uC744 \uBCC0\uACBD\uD55C \uD6C4\uC5D0\uB294 IIS\uB97C \uB2E4\uC2DC \uC2DC\uC791\uD574\uC57C \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4."})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"webservice_method_prefix"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsx)(n.p,{children:"\uAC12\uC5D0 \uCD94\uC801\uD560 \uBA54\uC18C\uB4DC\uAC00 \uC815\uC758\uB418\uC5B4\uC788\uB294 \uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uBC0F \uD074\uB798\uC2A4 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uBA54\uC18C\uB4DC\uAC00 \uC18C\uC18D\uB41C \uD074\uB798\uC2A4 \uC774\uB984\uAE4C\uC9C0 \uC785\uB825 \uC2DC \uD574\uB2F9 \uD074\uB798\uC2A4 \uB0B4\uC758 \uBAA8\uB4E0 Public \uBA54\uC18C\uB4DC\uAC00 \uCD94\uC801 \uB300\uC0C1\uC774 \uB429\uB2C8\uB2E4."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\uC870\uAC74\uC5D0 \uB9DE\uB294 \uBA54\uC18C\uB4DC\uAC00 \uC6F9 \uC11C\uBE44\uC2A4\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC544\uB3C4 \uCD94\uC801 \uB300\uC0C1\uC774 \uB429\uB2C8\uB2E4. \uC774 \uC635\uC158\uC758 \uACBD\uC6B0 WCF\uC640 \uC6F9 \uC11C\uBE44\uC2A4 \uBAA8\uB2C8\uD130\uB9C1\uC744 \uC704\uD574 \uC124\uACC4\uB418\uC5C8\uC9C0\uB9CC \uB2E4\uC591\uD55C \uBAA9\uC801\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsx)(n.p,{children:"\uD574\uB2F9 \uC635\uC158\uC744 \uBCC0\uACBD\uD55C \uD6C4\uC5D0\uB294 IIS\uB97C \uB2E4\uC2DC \uC2DC\uC791\uD574\uC57C \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4."})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"webservice_method_prefix_realtime"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})," ",(0,r.jsx)(n.a,{href:"../release-notes/dotnet/dotnet-2_3_6",children:(0,r.jsx)("code",{className:"my",children:".NET Agent v2.3.6 or later"})})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAC12\uC744 ",(0,r.jsx)(n.code,{children:"true"}),"\uB85C \uC124\uC815\uD558\uBA74 ",(0,r.jsx)(n.code,{children:"webservice_method_prefix"})," \uB300\uC0C1\uC744 \uC774\uC804\uACFC \uAC19\uC774 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uCC98\uB9AC\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"webservice_method_timeout"})," ",(0,r.jsx)("span",{class:"type",children:"Milliseconds"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"5000"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uBAA8\uB2C8\uD130\uB9C1 \uB300\uC0C1\uC774 \uB418\uB294 \uBA54\uC18C\uB4DC\uAC00 \uD2B9\uC815 \uC2DC\uAC04 \uB0B4\uC5D0 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC744 \uACBD\uC6B0 \uC790\uB3D9\uC73C\uB85C \uD0C0\uC784\uC544\uC6C3\uC744 \uC124\uC815\uD569\uB2C8\uB2E4. \uAE30\uBCF8\uAC12\uC740 5\uCD08(",(0,r.jsx)(n.code,{children:"5000"}),"ms)\uC785\uB2C8\uB2E4."]}),"\n","\n"]}),"\n"]})]}),"\n",(0,r.jsx)(n.section,{className:"remark-sectionize-h3",children:(0,r.jsx)(n.h3,{id:"\uC0AC\uC6A9-\uC608\uC2DC",children:"\uC0AC\uC6A9 \uC608\uC2DC"})}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h4",children:[(0,r.jsx)(n.h4,{id:"whatapconf-\uC218\uC815",children:"whatap.conf \uC218\uC815"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf' {11,12} ",children:"license= ## \uC5D1\uC138\uC2A4 \uD0A4\nwhatap.server.host=15.165.146.117\nwhatap.server.port=6600\napp_process_name=w3wp.exe\ntag_counter_enabled=true\nperfcounter.enabled=true\napp_name= ## \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC774\uB984\nOID= ## \uC5D0\uC774\uC804\uD2B8 ID\n\nwebservice_method_enabled=true\nwebservice_method_prefix=Whatap.Service.Controller, Whatap.DotNet.Examples.Service1\nwebservice_method_timeout=10000\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"webservice_method_prefix"})," \uC635\uC158\uC73C\uB85C \uCD94\uC801\uD560 \uB124\uC784\uC2A4\uD398\uC774\uC2A4 \uD3EC\uD568 \uBA54\uC18C\uB4DC\uC758 \uD638\uCD9C \uACBD\uB85C\uB97C \uC9C0\uC815\uD588\uAE30 \uB54C\uBB38\uC5D0 \uB2E4\uC74C \uC911 \uD558\uB098\uC77C \uACBD\uC6B0 \uD568\uC218\uC758 \uC2DC\uC791\uACFC \uC885\uB8CC\uAC00 \uD2B8\uB79C\uC7AD\uC158\uC73C\uB85C \uCC98\uB9AC\uB429\uB2C8\uB2E4."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Whatap.Service.Controller"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Whatap.DotNet.Examples.Service1"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"webservice_method_timeout"}),"\uB97C ",(0,r.jsx)(n.code,{children:"10000"})," \uBC00\uB9AC\uCD08\uB85C \uC9C0\uC815\uD588\uAE30 \uB54C\uBB38\uC5D0 10\uCD08\uAC00 \uC9C0\uB09C \uD2B8\uB79C\uC7AD\uC158\uC740 \uC790\uB3D9\uC73C\uB85C \uC885\uB8CC \uCC98\uB9AC\uB429\uB2C8\uB2E4."]}),"\n"]}),"\n"]}),(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsxs)(n.p,{children:["\uB2E4\uC74C\uACFC \uAC19\uC774 ",(0,r.jsx)(s,{sid:"side_management",className:"uitext"})," > ",(0,r.jsx)(s,{sid:"agent_configuration",className:"uitext"})," \uBA54\uB274\uB97C \uD1B5\uD574 \uC124\uC815\uC744 \uBCC0\uACBD\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,r.jsx)(i,{img:"dotnet-trst03.png",desc:"\uC5D0\uC774\uC804\uD2B8 \uC124\uC815"})]})]}),"\n",(0,r.jsx)(n.section,{className:"remark-sectionize-h2",children:(0,r.jsx)(n.h2,{id:"\uB124\uC784\uC2A4\uD398\uC774\uC2A4\uC640-\uD074\uB798\uC2A4-\uC774\uB984-\uCC3E\uAE30",children:"\uB124\uC784\uC2A4\uD398\uC774\uC2A4\uC640 \uD074\uB798\uC2A4 \uC774\uB984 \uCC3E\uAE30"})}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"wcf\uC758-\uACBD\uC6B0",children:"WCF\uC758 \uACBD\uC6B0"}),(0,r.jsxs)(n.p,{children:["WCF\uC758 \uACBD\uC6B0 \uBC30\uD3EC \uD3F4\uB354\uC5D0\uC11C ",(0,r.jsx)(n.em,{children:"*.svc"})," \uD30C\uC77C\uC744 \uCC3E\uC2B5\uB2C8\uB2E4. \uC774 \uD30C\uC77C\uC744 \uBA54\uBAA8\uC7A5 \uB4F1 \uD14D\uC2A4\uD2B8 \uD3B8\uC9D1\uAE30\uB85C \uC5F4\uC5B4 ",(0,r.jsx)(n.code,{children:"Service"})," \uD56D\uBAA9\uC5D0 \uBA85\uC2DC\uB41C \uAC12\uC744 \uD655\uC778\uD558\uC138\uC694. \uD574\uB2F9 \uAC12\uC774 ",(0,r.jsx)(n.code,{children:"webservice_method_prefix"}),"\uC5D0 \uCD94\uAC00\uD574\uC57C \uD560 \uC815\uBCF4\uC785\uB2C8\uB2E4."]}),(0,r.jsx)(i,{img:"dotnet-quick-pic-01.png",desc:"WCF \uC124\uC815 \uC608\uC2DC"})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"web-service\uC758-\uACBD\uC6B0",children:"Web Service\uC758 \uACBD\uC6B0"}),(0,r.jsxs)(n.p,{children:["Web Service\uC758 \uACBD\uC6B0 \uBC30\uD3EC \uD3F4\uB354\uC5D0\uC11C ",(0,r.jsx)(n.em,{children:"*.asmx"})," \uD30C\uC77C\uC744 \uCC3E\uC2B5\uB2C8\uB2E4. \uC774 \uD30C\uC77C\uC744 \uBA54\uBAA8\uC7A5\uC73C\uB85C \uC5F4\uC5B4 ",(0,r.jsx)(n.code,{children:"Class"})," \uD56D\uBAA9\uC5D0 \uBA85\uC2DC\uB41C \uAC12\uC744 \uD655\uC778\uD558\uC138\uC694. \uC774 \uAC12\uC774 ",(0,r.jsx)(n.code,{children:"webservice_method_prefix"}),"\uC5D0 \uCD94\uAC00\uD574\uC57C \uD560 \uC815\uBCF4\uC785\uB2C8\uB2E4."]}),(0,r.jsx)(i,{img:"dotnet-quick-pic-02.png",desc:"Web Service \uC124\uC815 \uC608\uC2DC"})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"\uC124\uC815-\uC608\uC2DC",children:"\uC124\uC815 \uC608\uC2DC"}),(0,r.jsx)(n.p,{children:"\uB2E4\uC74C\uC758 \uC124\uC815 \uC608\uC2DC\uB97C \uCC38\uC870\uD558\uC138\uC694."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"webservice_method_enabled=true\nwebservice_method_prefix=wcfServer.Service1, WebServiceDemo.WebService\n"})})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"\uD2B8\uB79C\uC7AD\uC158\uC740-\uC7A1\uD788\uC9C0\uB9CC-\uC2A4\uD15D-\uC815\uBCF4\uAC00-\uD45C\uC2DC\uB418\uC9C0-\uC54A\uAC70\uB098-\uB108\uBB34-\uC801\uC744-\uB54C",children:"\uD2B8\uB79C\uC7AD\uC158\uC740 \uC7A1\uD788\uC9C0\uB9CC \uC2A4\uD15D \uC815\uBCF4\uAC00 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uAC70\uB098 \uB108\uBB34 \uC801\uC744 \uB54C"}),(0,r.jsxs)(n.p,{children:["\uD2B8\uB79C\uC7AD\uC158\uC740 \uAC10\uC9C0\uB418\uC9C0\uB9CC \uC2A4\uD15D \uC815\uBCF4\uAC00 \uBCF4\uC774\uC9C0 \uC54A\uAC70\uB098 \uBD80\uC871\uD55C \uACBD\uC6B0, ",(0,r.jsx)(n.code,{children:"Method hook"}),"\uC744 \uD1B5\uD574 \uBAA8\uB2C8\uD130\uB9C1 \uBC94\uC704\uB97C \uD655\uB300\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C \uC124\uC815 \uC608\uC2DC\uB97C \uCC38\uC870\uD558\uC138\uC694. \uC608\uC2DC \uC124\uC815\uC744 \uD1B5\uD574 \uAE30\uBCF8 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0\uC11C \uBAA8\uB2C8\uD130\uB9C1 \uBC94\uC704\uC5D0\uC11C \uC81C\uC678\uB41C \uD56D\uBAA9\uC744 \uC2A4\uD15D \uC815\uBCF4\uB85C \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"hook_methods_enabled=true\nhook_methods_prefix=System.Net.Http.HttpClient., System.Net.WebRequest., System.Data., System.Net.Http.,\n# hook_methods_ignores=get,set\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"hook_methods_prefix"}),": \uC9C0\uC815\uB41C \uAC12\uC73C\uB85C \uC2DC\uC791\uD558\uB294 \uBAA8\uB4E0 \uBA54\uC18C\uB4DC\uB97C \uC2A4\uD15D\uC5D0 \uD45C\uC2DC\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"hook_methods_ignores"}),": \uC9C0\uC815\uB41C \uAC12\uC73C\uB85C \uC2DC\uC791\uD558\uB294 \uBAA8\uB4E0 \uBA54\uC18C\uB4DC\uB97C \uBAA8\uB2C8\uD130\uB9C1\uC5D0\uC11C \uC81C\uC678\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n"]})]})]})}function a(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function x(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return l}});var i=s(67294);let r={},c=i.createContext(r);function l(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);