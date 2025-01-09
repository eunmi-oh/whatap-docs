"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["40607"],{10693:function(s,e,i){i.r(e),i.d(e,{metadata:()=>n,contentTitle:()=>r,default:()=>a,assets:()=>t,toc:()=>h,frontMatter:()=>d});var n=JSON.parse('{"id":"mssql/database-size","title":"\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0AC\uC774\uC988","description":"SQL Server \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uBCC4 \uD14C\uC774\uBE14\uC758 \uC0AC\uC774\uC988\uB97C \uC9D1\uACC4\uD558\uC5EC \uCD94\uC774 \uC815\uBCF4\uB97C \uCC28\uD2B8\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4.","source":"@site/docs/mssql/database-size.mdx","sourceDirName":"mssql","slug":"/mssql/database-size","permalink":"/whatap-docs/mssql/database-size","draft":false,"unlisted":false,"editUrl":"undefined/docs/mssql/database-size.mdx","tags":[],"version":"current","frontMatter":{"id":"database-size","title":"\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0AC\uC774\uC988","description":"SQL Server \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uBCC4 \uD14C\uC774\uBE14\uC758 \uC0AC\uC774\uC988\uB97C \uC9D1\uACC4\uD558\uC5EC \uCD94\uC774 \uC815\uBCF4\uB97C \uCC28\uD2B8\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4.","keywords":["SQL Server","\uB370\uC774\uD130\uBCA0\uC774\uC2A4","\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0AC\uC774\uC988"],"isTranslationMissing":false},"sidebar":"mssqlSidebar","previous":{"title":"\uD504\uB85C\uC2DC\uC800 \uD1B5\uACC4","permalink":"/whatap-docs/mssql/procedure-stat"},"next":{"title":"\uBCF4\uACE0\uC11C","permalink":"/whatap-docs/mssql/report-intro"}}'),l=i("85893"),c=i("50065");let d={id:"database-size",title:"\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0AC\uC774\uC988",description:"SQL Server \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uBCC4 \uD14C\uC774\uBE14\uC758 \uC0AC\uC774\uC988\uB97C \uC9D1\uACC4\uD558\uC5EC \uCD94\uC774 \uC815\uBCF4\uB97C \uCC28\uD2B8\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4.",keywords:["SQL Server","\uB370\uC774\uD130\uBCA0\uC774\uC2A4","\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0AC\uC774\uC988"],isTranslationMissing:!1},r=void 0,t={},h=[{value:"\uAE30\uBCF8 \uD654\uBA74 \uC548\uB0B4",id:"\uAE30\uBCF8-\uD654\uBA74-\uC548\uB0B4",level:2},{value:"\uCEEC\uB7FC \uD56D\uBAA9 \uC548\uB0B4",id:"\uCEEC\uB7FC-\uD56D\uBAA9-\uC548\uB0B4",level:3},{value:"\uC624\uBE0C\uC81D\uD2B8 \uC0C1\uC138 \uC815\uBCF4 \uC870\uD68C\uD558\uAE30",id:"\uC624\uBE0C\uC81D\uD2B8-\uC0C1\uC138-\uC815\uBCF4-\uC870\uD68C\uD558\uAE30",level:3},{value:"\uCEEC\uB7FC \uD56D\uBAA9 \uC548\uB0B4",id:"\uCEEC\uB7FC-\uD56D\uBAA9-\uC548\uB0B4-1",level:3}];function j(s){let e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,c.a)(),...s.components},{Cmdname:n,ImgLang:d,UI:r}=e;return!n&&x("Cmdname",!0),!d&&x("ImgLang",!0),!r&&x("UI",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["\uD648 \uD654\uBA74 > \uD504\uB85C\uC81D\uD2B8 \uC120\uD0DD > ",(0,l.jsx)(n,{sid:"side_reportStat",className:"uitext"})," > ",(0,l.jsx)(n,{sid:"side_dbSize",className:"uitext"})]}),"\n",(0,l.jsx)(e.p,{children:"\uB370\uC774\uD130\uBCA0\uC774\uC2A4\uBCC4 \uD14C\uC774\uBE14\uC758 \uC0AC\uC774\uC988\uB97C \uC9D1\uACC4\uD558\uC5EC \uCD94\uC774 \uC815\uBCF4\uB97C \uCC28\uD2B8\uB85C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uC6A9\uB7C9\uC774 \uC99D\uAC00\uD558\uB294 \uCD94\uC138\uB97C \uC2DD\uBCC4\uD558\uC5EC \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC6A9\uB7C9\uC774 \uBE60\uB974\uAC8C \uC99D\uAC00\uD560 \uACBD\uC6B0\uB97C \uBBF8\uB9AC \uD30C\uC545\uD574 \uB300\uBE44\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,l.jsx)(e.p,{children:"\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0AC\uC774\uC988\uB294 \uC131\uB2A5\uC5D0\uB3C4 \uD070 \uC601\uD5A5\uC744 \uBBF8\uCE60 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC774\uC988\uC758 \uC99D\uAC00\uB85C \uCFFC\uB9AC\uC758 \uC2E4\uD589 \uC2DC\uAC04\uC774 \uB298\uC5B4\uB0A0 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC131\uB2A5 \uBB38\uC81C \uD574\uACB0\uC744 \uC900\uBE44\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC798\uBABB\uB41C \uCFFC\uB9AC\uB098 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uAD6C\uC870 \uBB38\uC81C\uB85C \uC0AC\uC774\uC988\uAC00 \uC99D\uAC00\uD560 \uC218 \uC788\uB294 \uBB38\uC81C\uB97C \uBBF8\uB9AC \uD30C\uC545\uD558\uACE0 \uC608\uBC29\uD558\uB294 \uAC83\uB3C4 \uD544\uC694\uD569\uB2C8\uB2E4."}),"\n",(0,l.jsx)(e.p,{children:"\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0AC\uC774\uC988\uC758 \uCD94\uC774\uB97C \uD1B5\uD574 \uC0AC\uC6A9\uB7C9 \uD328\uD134 \uBC0F \uB370\uC774\uD130 \uC131\uC7A5\uC744 \uC774\uD574\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBBF8\uB798 \uC6A9\uB7C9 \uC694\uAD6C \uC0AC\uD56D\uC744 \uC608\uCE21\uD558\uACE0 \uC870\uCE58\uB97C \uCDE8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBCC0\uD654\uB97C \uBAA8\uB2C8\uD130\uB9C1\uD558\uB294 \uAC83\uC740 \uB9AC\uC18C\uC2A4 \uBC0F \uBE44\uC6A9\uC744 \uCD5C\uC801\uD654\uD558\uB294\uB370 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4."}),"\n",(0,l.jsxs)(e.section,{className:"remark-sectionize-h2",children:[(0,l.jsx)(e.h2,{id:"\uAE30\uBCF8-\uD654\uBA74-\uC548\uB0B4",children:"\uAE30\uBCF8 \uD654\uBA74 \uC548\uB0B4"}),(0,l.jsx)(d,{img:"db-database-size-mssql.png",desc:"Database size"}),(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(n,{sid:"time",className:"uitext"}),"\uC5D0\uC11C \uC870\uD68C\uD558\uACE0 \uC2F6\uC740 \uC2DC\uAC04\uC744 \uC124\uC815\uD558\uC138\uC694. \uB179\uC0C9 \uBC84\uD2BC\uC744 \uC120\uD0DD\uD574 \uC870\uD68C \uC2DC\uAC04\uC744 \uC120\uD0DD\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(n,{sid:"instance",className:"uitext"}),"\uC5D0\uC11C \uC870\uD68C\uD558\uB824\uB294 \uB300\uC0C1\uC744 \uC120\uD0DD\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.img,{alt:"\uAC80\uC0C9 \uC544\uC774\uCF58",src:i(58938).Z+"",width:"35",height:"29"})," \uBC84\uD2BC\uC744 \uC120\uD0DD\uD558\uC138\uC694."]}),"\n"]}),"\n"]}),(0,l.jsx)(e.admonition,{type:"note",children:(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\uC870\uD68C \uC2DC\uAC04\uC740 \uCD5C\uB300 3\uC8FC\uAE4C\uC9C0 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. 3\uC77C \uC774\uC0C1 \uC870\uD68C\uD560 \uACBD\uC6B0 \uADF8\uB798\uD504\uC5D0\uB294 1\uC77C \uD3C9\uADE0\uC73C\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4."}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(n,{sid:"time",className:"uitext"})," \uC635\uC158 \uC774\uC6A9 \uBC29\uBC95\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,l.jsx)(e.a,{href:"usage-ui#timeselector",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]}),"\n"]}),"\n"]})})]}),"\n",(0,l.jsxs)(e.section,{className:"remark-sectionize-h2",children:[(0,l.jsx)(e.h2,{id:"TTL06025",children:(0,l.jsx)(n,{sid:"TTL06025"})}),(0,l.jsx)(e.p,{children:"\uC870\uD68C\uD55C \uC2DC\uAC04 \uB3D9\uC548 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uC800\uC7A5 \uC6A9\uB7C9 \uBCC0\uD654\uB97C \uADF8\uB798\uD504\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD06C\uAE30\uC758 \uC99D\uAC00 \uB610\uB294 \uAC10\uC18C \uCD94\uC138\uB97C \uD55C\uB208\uC5D0 \uD30C\uC545\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\uD2B9\uC815 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uC800\uC7A5 \uC6A9\uB7C9 \uC99D\uAC00 \uCD94\uC138\uB97C \uD655\uC778\uD558\uC5EC \uB370\uC774\uD130 \uC99D\uAC00 \uD328\uD134\uC744 \uC608\uCE21\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\uC5EC\uB7EC \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uC800\uC7A5 \uC6A9\uB7C9 \uBCC0\uD654\uB97C \uBE44\uAD50\uD558\uC5EC, \uC800\uC7A5\uC18C\uB97C \uAC00\uC7A5 \uB9CE\uC774 \uC18C\uBE44\uD558\uB294 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB97C \uC2DD\uBCC4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]}),"\n"]}),(0,l.jsx)(d,{img:"db-database-size-select-db-mssql.png",desc:"Database size"}),(0,l.jsx)(e.p,{children:"\uCC28\uD2B8\uC5D0\uC11C \uAC01 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uD06C\uAE30\uB97C \uC0C9\uC0C1\uC73C\uB85C \uAD6C\uBD84\uD558\uC5EC \uD45C\uC2DC\uD558\uBA70, \uB9C8\uC6B0\uC2A4\uB97C \uCC28\uD2B8 \uC704\uB85C \uC624\uBC84\uD55C \uC0C1\uD0DC\uC5D0\uC11C \uC88C\uC6B0\uB85C \uC774\uB3D9\uD558\uC138\uC694. \uD2B9\uC815 \uC2DC\uC810\uC758 \uAC01 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD06C\uAE30\uB97C \uD234\uD301\uC744 \uD1B5\uD574 \uC0C1\uC138\uD788 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\uC2DC\uAC04 \uCD95"}),"(X \uCD95): \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC800\uC7A5 \uACF5\uAC04 \uBCC0\uD654\uAC00 \uAE30\uB85D\uB41C \uC2DC\uAC04\uC785\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\uC6A9\uB7C9 \uCD95"}),"(Y\uCD95): \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uCD1D \uD06C\uAE30(MiB \uB2E8\uC704)\uC785\uB2C8\uB2E4. \uC2DC\uAC04\uC5D0 \uB530\uB77C \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uAC00 \uCC28\uC9C0\uD558\uB294 \uC6A9\uB7C9\uC758 \uBCC0\uD654\uB97C \uC2DC\uAC01\uC801\uC73C\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n"]})]}),"\n",(0,l.jsxs)(e.section,{className:"remark-sectionize-h2",children:[(0,l.jsx)(e.h2,{id:"TTL06026",children:(0,l.jsx)(n,{sid:"TTL06026"})}),(0,l.jsx)(e.p,{children:"\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBC0F \uD30C\uC77C \uADF8\uB8F9\uC758 \uC800\uC7A5 \uC6A9\uB7C9\uACFC \uC0AC\uC6A9 \uD604\uD669\uC744 \uC138\uBD80\uC801\uC73C\uB85C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uD30C\uC77C \uD06C\uAE30, \uC0AC\uC6A9\uB7C9, \uCD5C\uB300 \uD06C\uAE30 \uB4F1\uC744 \uD1B5\uD574 \uC800\uC7A5 \uACF5\uAC04\uC758 \uD6A8\uC728\uC131\uC744 \uBD84\uC11D\uD558\uACE0, \uC6A9\uB7C9 \uBD80\uC871 \uC2DC \uC0AC\uC804 \uC870\uCE58\uB97C \uCDE8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),(0,l.jsx)(d,{img:"db-database-size-details-db-mssql.png",desc:"Database size"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\uAC01 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC640 \uD30C\uC77C \uADF8\uB8F9\uC758 \uC0AC\uC6A9\uB7C9\uC744 \uD2B8\uB9AC \uAD6C\uC870\uB85C \uD655\uC7A5\uD558\uC5EC \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\uB3D9\uC77C \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uB2E4\uB978 \uC2DC\uAC04\uB300 \uC0AC\uC6A9\uB7C9 \uBCC0\uD654\uB97C \uBE44\uAD50\uD558\uC5EC \uB370\uC774\uD130 \uC99D\uAC00\uB7C9\uC744 \uBD84\uC11D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(r,{children:"USAGE"})," \uAC12\uC774 \uB192\uC740 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uB610\uB294 \uD30C\uC77C \uADF8\uB8F9\uC744 \uC2DD\uBCC4\uD558\uC5EC \uC800\uC7A5 \uC6A9\uB7C9 \uBD80\uC871 \uBB38\uC81C\uB97C \uC0AC\uC804\uC5D0 \uC608\uBC29\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n"]})]}),"\n",(0,l.jsxs)(e.section,{className:"remark-sectionize-h3",children:[(0,l.jsx)(e.h3,{id:"\uCEEC\uB7FC-\uD56D\uBAA9-\uC548\uB0B4",children:"\uCEEC\uB7FC \uD56D\uBAA9 \uC548\uB0B4"}),(0,l.jsxs)(e.p,{children:[(0,l.jsx)(n,{sid:"TTL06026",className:"uitext"})," \uC139\uC158\uC758 \uAC01 \uCEEC\uB7FC\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uB2E4\uC74C\uC744 \uCC38\uC870\uD558\uC138\uC694."]}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"DB NAME/FILE GROUP"})}),": \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC774\uB984 \uBC0F \uD574\uB2F9 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uD30C\uC77C \uADF8\uB8F9 \uC774\uB984\uC785\uB2C8\uB2E4. \uAC01 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC640 \uD30C\uC77C \uADF8\uB8F9\uC758 \uAD6C\uC870\uB97C \uD2B8\uB9AC \uD615\uD0DC\uB85C \uD655\uC7A5\uD558\uAC70\uB098 \uCD95\uC18C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"MAX SIZE"})}),": \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uB610\uB294 \uD30C\uC77C \uADF8\uB8F9\uC758 \uC124\uC815\uB41C \uCD5C\uB300 \uD06C\uAE30\uC785\uB2C8\uB2E4. ",(0,l.jsx)(r,{children:"UNLIMITED"}),"\uB294 \uD06C\uAE30 \uC81C\uD55C\uC774 \uC5C6\uB294 \uACBD\uC6B0\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"SIZE"})}),": \uD604\uC7AC \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uB610\uB294 \uD30C\uC77C \uADF8\uB8F9\uC758 \uCD1D \uD06C\uAE30\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"USED"})}),": \uC2E4\uC81C \uC0AC\uC6A9 \uC911\uC778 \uC800\uC7A5 \uACF5\uAC04 \uD06C\uAE30\uC785\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"USAGE"})}),": \uC0AC\uC6A9\uB960\uC744 \uBC31\uBD84\uC728(%)\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD06C\uAE30 \uB300\uBE44 \uC0AC\uC6A9 \uC911\uC778 \uC6A9\uB7C9\uC758 \uBE44\uC728\uB85C, \uC0AC\uC6A9\uB960\uC774 \uB192\uC740 \uACBD\uC6B0 \uCD94\uAC00 \uC6A9\uB7C9 \uD655\uBCF4\uB97C \uAC80\uD1A0\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"CHANGED AMOUNT"})}),": \uC870\uD68C \uC2DC\uAC04 \uBC94\uC704 \uB3D9\uC548 \uC0AC\uC6A9\uB7C9\uC758 \uBCC0\uD654\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4."]}),"\n"]}),"\n"]})]}),"\n",(0,l.jsxs)(e.section,{className:"remark-sectionize-h2",children:[(0,l.jsx)(e.h2,{id:"TTL06572",children:(0,l.jsx)(n,{sid:"TTL06572"})}),(0,l.jsxs)(e.p,{children:[(0,l.jsx)(n,{sid:"TTL06026",className:"uitext"})," \uC139\uC158\uC5D0\uC11C \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB97C \uC120\uD0DD\uD558\uBA74 \uD574\uB2F9 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uB0B4\uC758 \uC0AC\uC774\uC988 TOP 50\uC5D0 \uD574\uB2F9\uD558\uB294 \uD14C\uC774\uBE14\uBCC4 \uC0AC\uC774\uC988\uB97C \uBAA9\uB85D\uC73C\uB85C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC800\uC7A5 \uACF5\uAC04\uC744 \uAC00\uC7A5 \uB9CE\uC774 \uC0AC\uC6A9\uD558\uB294 \uC0C1\uC704 50\uAC1C\uC758 \uD14C\uC774\uBE14\uC5D0 \uB300\uD55C \uC815\uBCF4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uB300\uADDC\uBAA8 \uB370\uC774\uD130\uB97C \uBCF4\uC720\uD55C \uD14C\uC774\uBE14\uC744 \uC2DD\uBCC4\uD558\uACE0 \uCD5C\uC801\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,l.jsx)(d,{img:"db-database-size-top50-mssql.png",desc:"Database size"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\uAC00\uC7A5 \uB9CE\uC740 \uC800\uC7A5 \uACF5\uAC04\uC744 \uC0AC\uC6A9\uD558\uB294 \uD14C\uC774\uBE14\uC744 \uBE60\uB974\uAC8C \uC2DD\uBCC4\uD558\uC5EC, \uB370\uC774\uD130 \uAD6C\uC870 \uCD5C\uC801\uD654\uB098 \uC800\uC7A5\uC18C \uAD00\uB9AC\uB97C \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(r,{children:"UNUSED SPACE SIZE"})," \uAC12\uC744 \uD655\uC778\uD558\uC5EC \uBD88\uD544\uC694\uD558\uAC8C \uB9CE\uC740 \uC5EC\uC720 \uACF5\uAC04\uC744 \uCC28\uC9C0\uD558\uB294 \uD14C\uC774\uBE14\uC744 \uD30C\uC545\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\uAC01 \uD14C\uC774\uBE14\uC758 \uD589 \uC218\uB97C \uBE44\uAD50\uD558\uC5EC, \uB370\uC774\uD130\uB7C9\uC774 \uBE44\uC815\uC0C1\uC801\uC73C\uB85C \uB9CE\uC740 \uD14C\uC774\uBE14\uC744 \uC2DD\uBCC4\uD558\uACE0 \uCD94\uAC00 \uBD84\uC11D \uBC0F \uD29C\uB2DD \uC791\uC5C5\uC744 \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]}),"\n"]}),(0,l.jsx)(e.admonition,{type:"note",children:(0,l.jsxs)(e.p,{children:[(0,l.jsx)(n,{sid:"TTL06572",className:"uitext"})," \uC139\uC158\uC5D0\uC11C \uD14C\uC774\uBE14 \uCEEC\uB7FC\uC758 \uC21C\uC11C\uB97C \uBCC0\uACBD\uD558\uAC70\uB098 \uD2B9\uC815 \uCEEC\uB7FC\uC744 \uC228\uAE30\uB824\uBA74 \uC624\uB978\uCABD \uC0C1\uB2E8\uC5D0 ",(0,l.jsx)(e.img,{alt:"\uCEEC\uB7FC \uC544\uC774\uCF58",src:i(98546).Z+"",width:"24",height:"24"})," \uBC84\uD2BC\uC744 \uC120\uD0DD\uD558\uC138\uC694. \uCEEC\uB7FC \uC124\uC815\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,l.jsx)(e.a,{href:"instance-monitoring#change-column",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]})})]}),"\n",(0,l.jsxs)(e.section,{className:"remark-sectionize-h3",children:[(0,l.jsx)(e.h3,{id:"\uC624\uBE0C\uC81D\uD2B8-\uC0C1\uC138-\uC815\uBCF4-\uC870\uD68C\uD558\uAE30",children:"\uC624\uBE0C\uC81D\uD2B8 \uC0C1\uC138 \uC815\uBCF4 \uC870\uD68C\uD558\uAE30"}),(0,l.jsxs)(e.p,{children:[(0,l.jsx)(r,{children:"TABLENAME"})," \uCEEC\uB7FC \uD56D\uBAA9\uC744 \uC120\uD0DD\uD558\uBA74 \uD574\uB2F9 \uD14C\uC774\uBE14\uC758 \uC624\uBE0C\uC81D\uD2B8 \uC0C1\uC138 \uC815\uBCF4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uB294 ",(0,l.jsx)(r,{children:"Object Detail"})," \uCC3D\uC774 \uC5F4\uB9BD\uB2C8\uB2E4."]}),(0,l.jsxs)(e.p,{children:[(0,l.jsx)(r,{children:"Object Detail"})," \uAE30\uB2A5\uC744 \uC774\uC6A9\uD558\uB824\uBA74 SQL Server\uC5D0\uC11C \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC801\uC808\uD55C \uC624\uBE0C\uC81D\uD2B8 \uC870\uD68C \uAD8C\uD55C\uC744 \uBD80\uC5EC\uD574\uC57C \uD569\uB2C8\uB2E4. \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC2E4\uD589\uD558\uC5EC \uAD8C\uD55C\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"grant view any definition to {DB_User};\n"})})]}),"\n",(0,l.jsxs)(e.section,{className:"remark-sectionize-h3",children:[(0,l.jsx)(e.h3,{id:"\uCEEC\uB7FC-\uD56D\uBAA9-\uC548\uB0B4-1",children:"\uCEEC\uB7FC \uD56D\uBAA9 \uC548\uB0B4"}),(0,l.jsxs)(e.p,{children:[(0,l.jsx)(n,{sid:"TTL06572",className:"uitext"})," \uC139\uC158\uC758 \uAC01 \uCEEC\uB7FC\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uB2E4\uC74C\uC744 \uCC38\uC870\uD558\uC138\uC694."]}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"DB"})}),": \uD14C\uC774\uBE14\uC774 \uC18D\uD55C \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uC774\uB984\uC785\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"FILEGROUP"})}),": \uD574\uB2F9 \uD14C\uC774\uBE14\uC774 \uC800\uC7A5\uB41C \uD30C\uC77C \uADF8\uB8F9\uC758 \uC774\uB984\uC785\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"SCHEMANAME"})}),": \uD14C\uC774\uBE14\uC774 \uC18D\uD55C \uC2A4\uD0A4\uB9C8\uC758 \uC774\uB984\uC785\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"TABLENAME"})}),": \uD14C\uC774\uBE14\uC758 \uC774\uB984\uC785\uB2C8\uB2E4. \uD14C\uC774\uBE14 \uC774\uB984\uC744 \uD074\uB9AD\uD558\uBA74 \uC624\uBE0C\uC81D\uD2B8\uC758 \uC0C1\uC138 \uC815\uBCF4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uB294 ",(0,l.jsx)(r,{children:"Object Detail"})," \uCC3D\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"TOTAL SPACE SIZE"})}),": \uD14C\uC774\uBE14\uC774 \uC0AC\uC6A9\uD558\uB294 \uCD1D \uC800\uC7A5 \uACF5\uAC04\uC758 \uD06C\uAE30(MiB)\uC785\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"USED SPACE SIZE"})}),": \uD14C\uC774\uBE14\uC5D0\uC11C \uC2E4\uC81C\uB85C \uC0AC\uC6A9 \uC911\uC778 \uACF5\uAC04\uC758 \uD06C\uAE30(MiB)\uC785\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"UNUSED SPACE SIZE"})}),": \uD14C\uC774\uBE14\uC5D0\uC11C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uC5EC\uC720 \uACF5\uAC04\uC758 \uD06C\uAE30(MiB)\uC785\uB2C8\uB2E4. \uC774 \uAC12\uC774 \uD06C\uBA74 \uD14C\uC774\uBE14 \uAD6C\uC870\uB97C \uCD5C\uC801\uD654\uD558\uAC70\uB098 \uB370\uC774\uD130\uB97C \uC815\uB9AC\uD560 \uD544\uC694\uAC00 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:(0,l.jsx)(e.strong,{children:"ROWS"})}),": \uD14C\uC774\uBE14\uC5D0 \uC800\uC7A5\uB41C \uB370\uC774\uD130 \uD589(Row)\uC758 \uAC1C\uC218\uC785\uB2C8\uB2E4."]}),"\n"]}),"\n"]})]})]})}function a(s={}){let{wrapper:e}={...(0,c.a)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(j,{...s})}):j(s)}function x(s,e){throw Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},58938:function(s,e,i){i.d(e,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGYxMDZkYi1mOWQ1LTRkNWItYjg1Mi01N2E4OWQ4N2NiODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM0RjAyQzM1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM0RjAyQzI1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzM1ZWVmNC1mYjZhLTRkNzctOWI5MS0yZDViNTU2OTE4YTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRmMTA2ZGItZjlkNS00ZDViLWI4NTItNTdhODlkODdjYjgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xFhE8QAAA2NJREFUeNrMl0tIVGEUx//fd2fm3nGaZHwkA+KjFylBWG5amG10GRGW9AKjRVFRCSJEQUPRokioNulCAhFsV2LiKogIwl7SoiyVsdJ8Vb5G5z3f1/luumk12lynw2WGy1zm/L7z+J9zmZRy4u1gIs/XEV78OC5g0xjostwSEojTR6mXw3fYcO3aok2y15/j83suL7rBgeI8bj4opfUwbOnAw5MCoOv5DVdAG8luvPR1RuqbCUSsAcTfluNmmA5J+MdFlA8Q2cZcjrhAWkz5Vf4VB3dQgUik15R/xcFV7mSaaZR/xcH/9U9SeRDbarpAUJ5HpgVkhO6X4pyZzZDjYogl1ghG04DpRYm5XxKHKm3YV26HywkMjAnc64nBPyxQULh6eUgahpOPnwGJBYrGk6sZ2LvDhukFIEhtWbWToa5Kx/nmEDpexFDs5dZGJhKTCISBRw1OE+Ts/RAePIubVWfYgYcXDbRecELjEh29CRR4Vt6lSR9hbFbi+G4NVWU2HL0dRHtXFN4sIN8D2DWJGl8IbwYTuFLrhJ2OGFuFbvGkW4+iUlvhwMB3gc6XceQVa9BtzJxluW6OGNVO0+MICjYwVJdwTAWkNTBqqAkHQyZ1y3xQQvw1TNUYcdDvs4t/ALLWUVfFLYqMjZ5iVDOfRhIo26TByABmCIovAdmpyySlsWKbRrUFvKKu8mRYBKPMlcnQ1B2lAgVaTuoI07rhnxCYmJMY9gtkehnqDxjo7o2i/wvdZzDruimXQt9PJ/a1h+E7ZmB7iw3NPREMEFRlqYb6/QZ0BzA+Q3pE7R+MSLh0tqJNYEWil0/6cas7ZgLcrHPi7imnOXVVeNueRjFFqWo8qMPjAk7fCUN4AbfBTMVOKYzqKFU7RTkMne/i6Hq/gHJS2zxKX983gbFRWgGoXlQdNdTocFOxn2kNmxEy7Cz1kVmW+CLaP9QM+kAR6hsF1uu0JRJYiIr8WlsEBqXrRLWOwuwohmhPUaKY1NwrOReYp293qlbJWFzS5gZku1R6JBykRUnOqQBHCk05tZNzDwlgMCrNhUlaVcBJAxGEqT1W6cxaGF9e+dJpy6svj9LgSTOL6V9x8K30vuT/IUwNSYcpv8q/4uDXjxj08gIM0ZxR4VqrlC37Un6Vf8XB/qd37d8CDAAmlWmEg71//QAAAABJRU5ErkJggg=="},98546:function(s,e,i){i.d(e,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtY29sdW1uPC90aXRsZT4gLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Mi4wMDAwMDAsIC0zMDMxLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iYXBwbGljYXRpb24taWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMjM0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1jb2x1bW4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4wMDAwMDAsIDY4NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgNC4wMDAwMDApIiBpZD0iU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwwIEwwLDE2IEwyMCwxNiBMMjAsMCBMMCwwIFogTTEyLDIgTDEyLDE0IEw4LDE0IEw4LDIgTDEyLDIgWiBNMiwyIEw2LDIgTDYsMTQgTDIsMTQgTDIsMiBaIE0xOCwxNCBMMTQsMTQgTDE0LDIgTDE4LDIgTDE4LDE0IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},50065:function(s,e,i){i.d(e,{Z:function(){return r},a:function(){return d}});var n=i(67294);let l={},c=n.createContext(l);function d(s){let e=n.useContext(c);return n.useMemo(function(){return"function"==typeof s?s(e):{...e,...s}},[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:d(s.components),n.createElement(c.Provider,{value:e},s.children)}}}]);