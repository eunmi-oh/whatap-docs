"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["69920"],{48146:function(g,i,s){s.r(i),s.d(i,{metadata:()=>I,contentTitle:()=>A,default:()=>c,assets:()=>l,toc:()=>a,frontMatter:()=>C});var I=JSON.parse('{"id":"aws-log/flexboard-manage","title":"Flex \uBCF4\uB4DC \uAD00\uB9AC\uD558\uAE30","description":"Flex \uBCF4\uB4DC\uC5D0\uC11C \uB300\uC2DC\uBCF4\uB4DC\uB97C \uD3B8\uC9D1\uD558\uACE0 \uAD00\uB9AC\uD558\uB294 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4. \uB300\uC2DC\uBCF4\uB4DC\uC758 \uC774\uB984 \uBCC0\uACBD, \uD504\uB85C\uC81D\uD2B8 \uC120\uD0DD, \uB808\uC774\uC544\uC6C3 \uC870\uC815 \uB4F1\uC744 \uD3EC\uD568\uD558\uBA70, \uC704\uC82F\uC758 \uCD94\uAC00, \uC774\uB3D9, \uD06C\uAE30 \uC870\uC808, \uC0AD\uC81C \uBC29\uBC95\uB3C4 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C, \uC704\uC82F\uC758 \uB370\uC774\uD130 \uC18C\uC2A4\uB97C \uC120\uD0DD\uD558\uB294 \uBC29\uBC95\uACFC \uB300\uC2DC\uBCF4\uB4DC\uC758 json \uD615\uC2DD\uC73C\uB85C\uC758 \uB0B4\uBCF4\uB0B4\uAE30 \uAE30\uB2A5\uB3C4 \uC81C\uACF5\uD569\uB2C8\uB2E4.","source":"@site/docs/aws-log/flexboard-manage.mdx","sourceDirName":"aws-log","slug":"/aws-log/flexboard-manage","permalink":"/whatap-docs/aws-log/flexboard-manage","draft":false,"unlisted":false,"editUrl":"undefined/docs/aws-log/flexboard-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"flexboard-manage","title":"Flex \uBCF4\uB4DC \uAD00\uB9AC\uD558\uAE30","description":"Flex \uBCF4\uB4DC\uC5D0\uC11C \uB300\uC2DC\uBCF4\uB4DC\uB97C \uD3B8\uC9D1\uD558\uACE0 \uAD00\uB9AC\uD558\uB294 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4. \uB300\uC2DC\uBCF4\uB4DC\uC758 \uC774\uB984 \uBCC0\uACBD, \uD504\uB85C\uC81D\uD2B8 \uC120\uD0DD, \uB808\uC774\uC544\uC6C3 \uC870\uC815 \uB4F1\uC744 \uD3EC\uD568\uD558\uBA70, \uC704\uC82F\uC758 \uCD94\uAC00, \uC774\uB3D9, \uD06C\uAE30 \uC870\uC808, \uC0AD\uC81C \uBC29\uBC95\uB3C4 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C, \uC704\uC82F\uC758 \uB370\uC774\uD130 \uC18C\uC2A4\uB97C \uC120\uD0DD\uD558\uB294 \uBC29\uBC95\uACFC \uB300\uC2DC\uBCF4\uB4DC\uC758 json \uD615\uC2DD\uC73C\uB85C\uC758 \uB0B4\uBCF4\uB0B4\uAE30 \uAE30\uB2A5\uB3C4 \uC81C\uACF5\uD569\uB2C8\uB2E4.","keywords":["Flex \uBCF4\uB4DC","\uC704\uC82F","AWS Log"],"isTranslationMissing":false},"sidebar":"awslogSidebar","previous":{"title":"Flex \uBCF4\uB4DC \uB9CC\uB4E4\uAE30","permalink":"/whatap-docs/aws-log/flexboard-create"},"next":{"title":"\uBA54\uD2B8\uB9AD\uC2A4 \uC704\uC82F","permalink":"/whatap-docs/aws-log/flexboard-metric-widget"}}'),e=s("85893"),n=s("50065"),t=s("38887");let C={id:"flexboard-manage",title:"Flex \uBCF4\uB4DC \uAD00\uB9AC\uD558\uAE30",description:"Flex \uBCF4\uB4DC\uC5D0\uC11C \uB300\uC2DC\uBCF4\uB4DC\uB97C \uD3B8\uC9D1\uD558\uACE0 \uAD00\uB9AC\uD558\uB294 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4. \uB300\uC2DC\uBCF4\uB4DC\uC758 \uC774\uB984 \uBCC0\uACBD, \uD504\uB85C\uC81D\uD2B8 \uC120\uD0DD, \uB808\uC774\uC544\uC6C3 \uC870\uC815 \uB4F1\uC744 \uD3EC\uD568\uD558\uBA70, \uC704\uC82F\uC758 \uCD94\uAC00, \uC774\uB3D9, \uD06C\uAE30 \uC870\uC808, \uC0AD\uC81C \uBC29\uBC95\uB3C4 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C, \uC704\uC82F\uC758 \uB370\uC774\uD130 \uC18C\uC2A4\uB97C \uC120\uD0DD\uD558\uB294 \uBC29\uBC95\uACFC \uB300\uC2DC\uBCF4\uB4DC\uC758 json \uD615\uC2DD\uC73C\uB85C\uC758 \uB0B4\uBCF4\uB0B4\uAE30 \uAE30\uB2A5\uB3C4 \uC81C\uACF5\uD569\uB2C8\uB2E4.",keywords:["Flex \uBCF4\uB4DC","\uC704\uC82F","AWS Log"],isTranslationMissing:!1},A=void 0,l={},a=[...t.d$];function d(g){return(0,e.jsx)(t.ZP,{})}function c(g={}){let{wrapper:i}={...(0,n.a)(),...g.components};return i?(0,e.jsx)(i,{...g,children:(0,e.jsx)(d,{...g})}):d(g)}},38887:function(g,i,s){s.d(i,{ZP:function(){return C},d$:function(){return n}});var I=s(85893),e=s(50065);let n=[{value:"Flex \uBCF4\uB4DC \uD3B8\uC9D1\uD558\uAE30",id:"flex-\uBCF4\uB4DC-\uD3B8\uC9D1\uD558\uAE30",level:2},{value:"Flex \uBCF4\uB4DC \uC0AD\uC81C\uD558\uAE30",id:"flex-\uBCF4\uB4DC-\uC0AD\uC81C\uD558\uAE30",level:2}];function t(g){let i={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",section:"section",strong:"strong",ul:"ul",...(0,e.a)(),...g.components},{Cmdname:n,ImgLang:t,UI:C}=i;return!n&&A("Cmdname",!0),!t&&A("ImgLang",!0),!C&&A("UI",!0),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,I.jsx)(i.h2,{id:"flex-\uBCF4\uB4DC-\uD3B8\uC9D1\uD558\uAE30",children:"Flex \uBCF4\uB4DC \uD3B8\uC9D1\uD558\uAE30"}),(0,I.jsxs)(i.p,{children:[(0,I.jsx)(n,{sid:"side_flexboard",className:"uitext"})," \uBA54\uB274\uC758 ",(0,I.jsx)(n,{sid:"dashboard_list",className:"uitext"}),"\uC5D0\uC11C ",(0,I.jsx)(i.img,{alt:"\uD3B8\uC9D1 \uC544\uC774\uCF58",src:s(78831).Z+"",width:"24",height:"24"})," \uBC84\uD2BC\uC744 \uC120\uD0DD\uD558\uC138\uC694. \uD654\uBA74 \uC624\uB978\uCABD\uC5D0 Flex \uBCF4\uB4DC \uAD00\uB9AC \uCC3D\uC774 \uB098\uD0C0\uB0A9\uB2C8\uB2E4."]}),(0,I.jsxs)(i.admonition,{type:"note",children:[(0,I.jsx)(i.p,{children:(0,I.jsx)(i.strong,{children:"Flex \uBCF4\uB4DC \uD3B8\uC9D1 \uAE30\uB2A5 \uAD8C\uD55C \uC548\uB0B4"})}),(0,I.jsxs)(i.ul,{children:["\n",(0,I.jsxs)(i.li,{children:["\n",(0,I.jsxs)(i.p,{children:["\uD648 \uD654\uBA74 > ",(0,I.jsx)(n,{sid:"side_integratedFlexboard",className:"uitext"})]}),"\n",(0,I.jsx)(i.p,{children:"\uAC1C\uC778 \uACC4\uC815 \uB300\uC2DC\uBCF4\uB4DC\uB85C \uAD8C\uD55C\uC5D0 \uB530\uB978 \uC601\uD5A5\uC740 \uC5C6\uC73C\uB098 \uC77D\uAE30 \uC804\uC6A9\uC73C\uB85C \uACF5\uC720\uB41C \uB300\uC2DC\uBCF4\uB4DC\uC758 \uACBD\uC6B0 \uC218\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."}),"\n"]}),"\n",(0,I.jsxs)(i.li,{children:["\n",(0,I.jsxs)(i.p,{children:["\uD648 \uD654\uBA74 > \uD504\uB85C\uC81D\uD2B8 \uC120\uD0DD > ",(0,I.jsx)(n,{sid:"side_dashboard",className:"uitext"})," > ",(0,I.jsx)(n,{sid:"side_flexboard",className:"uitext"})]}),"\n",(0,I.jsxs)(i.p,{children:["\uD504\uB85C\uC81D\uD2B8 ",(0,I.jsx)(i.strong,{children:"\uC218\uC815"})," \uAD8C\uD55C \uB610\uB294 ",(0,I.jsx)(i.strong,{children:"\uD504\uB85C\uC81D\uD2B8 \uD50C\uB809\uC2A4\uBCF4\uB4DC \uD3B8\uC9D1"})," \uAD8C\uD55C, ",(0,I.jsx)(i.strong,{children:"Site Admin"})," \uAD8C\uD55C\uC744 \uAC00\uC9C4 \uC0AC\uC6A9\uC790\uAC00 \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,I.jsxs)(i.li,{children:["\n",(0,I.jsxs)(i.p,{children:["\uBA64\uBC84 \uAD8C\uD55C\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,I.jsx)(i.a,{href:"../project/project-structure#member-auth",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]}),"\n"]}),"\n"]})]}),(0,I.jsx)(t,{img:"flexboard-manage.png",desc:"Flex \uBCF4\uB4DC \uAD00\uB9AC"}),(0,I.jsx)(i.p,{children:"\uC124\uC815\uD560 \uC218 \uC788\uB294 \uC18D\uC131\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4."}),(0,I.jsxs)(i.ul,{children:["\n",(0,I.jsxs)(i.li,{children:["\n",(0,I.jsxs)(i.p,{children:[(0,I.jsx)(n,{sid:"rename",className:"uitext"}),": \uB300\uC2DC\uBCF4\uB4DC\uC758 \uC774\uB984\uC744 \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,I.jsxs)(i.li,{children:["\n",(0,I.jsxs)(i.p,{children:[(0,I.jsx)(n,{sid:"project",className:"uitext"}),": \uB300\uC2DC\uBCF4\uB4DC \uC704\uC82F\uC5D0 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC62C \uD504\uB85C\uC81D\uD2B8\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,I.jsx)(i.admonition,{type:"note",children:(0,I.jsxs)(i.p,{children:["\uC774 \uC635\uC158\uC740 \uD648 \uD654\uBA74 > ",(0,I.jsx)(n,{sid:"side_integratedFlexboard",className:"uitext"})," \uBA54\uB274\uC5D0\uC11C\uB9CC \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]})}),"\n"]}),"\n",(0,I.jsxs)(i.li,{children:["\n",(0,I.jsx)(n,{sid:"layout",className:"uitext"}),"\n",(0,I.jsxs)(i.ul,{children:["\n",(0,I.jsxs)(i.li,{children:["\n",(0,I.jsx)(i.p,{children:"\uC704\uC82F\uC744 \uC120\uD0DD\uD558\uACE0 \uB4DC\uB798\uADF8\uD558\uC5EC \uC704\uCE58\uB97C \uC774\uB3D9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]}),"\n",(0,I.jsxs)(i.li,{children:["\n",(0,I.jsx)(i.p,{children:"\uC704\uC82F \uC624\uB978\uCABD \uC544\uB798\uB97C \uB9C8\uC6B0\uC2A4\uB85C \uC120\uD0DD\uD55C \uB2E4\uC74C \uB4DC\uB798\uADF8\uD574 \uC704\uC82F\uC758 \uD06C\uAE30\uB97C \uC870\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n"]}),"\n",(0,I.jsxs)(i.li,{children:["\n",(0,I.jsxs)(i.p,{children:["\uC704\uC82F\uC744 \uC0AD\uC81C\uD558\uB824\uBA74 \uC704\uC82F \uC624\uB978\uCABD \uC704\uC5D0 ",(0,I.jsx)(i.img,{alt:"\uC0AD\uC81C \uC544\uC774\uCF58",src:s(52407).Z+"",width:"24",height:"24"})," \uBC84\uD2BC\uC744 \uC120\uD0DD\uD558\uC138\uC694."]}),"\n"]}),"\n"]}),"\n",(0,I.jsx)(i.admonition,{type:"note",children:(0,I.jsxs)(i.p,{children:["\uD648 \uD654\uBA74 > ",(0,I.jsx)(n,{sid:"side_integratedFlexboard",className:"uitext"})," \uBA54\uB274\uB85C \uC9C4\uC785\uD55C \uACBD\uC6B0, \uAC01 \uC704\uC82F\uB9C8\uB2E4 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC62C \uD504\uB85C\uC81D\uD2B8\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC704\uC82F \uC624\uB978\uCABD \uC704\uC5D0 ",(0,I.jsx)(i.img,{alt:"\uCD94\uAC00 \uC544\uC774\uCF58",src:s(92388).Z+"",width:"24",height:"24"})," \uBC84\uD2BC\uC744 \uD074\uB9AD\uD55C \uB2E4\uC74C \uC6D0\uD558\uB294 \uD504\uB85C\uC81D\uD2B8\uB97C \uC120\uD0DD\uD558\uC138\uC694. \uD504\uB85C\uC81D\uD2B8\uB97C \uAC80\uC0C9\uD574 \uC120\uD0DD\uD560 \uC218 \uC788\uACE0, \uB2E4\uC911 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC120\uD0DD\uC744 \uC644\uB8CC\uD55C \uB2E4\uC74C ",(0,I.jsx)(n,{sid:"apply",className:"uitext"})," \uBC84\uD2BC\uC744 \uC120\uD0DD\uD558\uC138\uC694."]})}),"\n"]}),"\n",(0,I.jsxs)(i.li,{children:["\n",(0,I.jsxs)(i.p,{children:[(0,I.jsx)(n,{sid:"widget",className:"uitext"}),(0,I.jsx)(C,{children:".json"}),": \uB300\uC2DC\uBCF4\uB4DC\uC758 \uC704\uC82F \uC124\uC815\uC744 json \uD615\uC2DD\uC73C\uB85C \uBD88\uB7EC\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4. ",(0,I.jsx)(i.img,{alt:"\uBCF5\uC0AC \uC544\uC774\uCF58",src:s(12939).Z+"",width:"24",height:"24"})," \uBC84\uD2BC\uC744 \uC120\uD0DD\uD558\uBA74 json \uB0B4\uC6A9\uC744 \uBCF5\uC0AC\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,I.jsxs)(i.li,{children:["\n",(0,I.jsxs)(i.p,{children:[(0,I.jsx)(n,{sid:"option",className:"uitext"}),(0,I.jsx)(C,{children:".json"}),": \uB300\uC2DC\uBCF4\uB4DC\uC5D0 \uC124\uC815\uB41C \uC635\uC158\uC744 json \uD615\uC2DD\uC73C\uB85C \uBD88\uB7EC\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4. ",(0,I.jsx)(i.img,{alt:"\uBCF5\uC0AC \uC544\uC774\uCF58",src:s(12939).Z+"",width:"24",height:"24"})," \uBC84\uD2BC\uC744 \uC120\uD0DD\uD558\uBA74 json \uB0B4\uC6A9\uC744 \uBCF5\uC0AC\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n"]})]}),"\n",(0,I.jsxs)(i.section,{className:"remark-sectionize-h2",children:[(0,I.jsx)(i.h2,{id:"flex-\uBCF4\uB4DC-\uC0AD\uC81C\uD558\uAE30",children:"Flex \uBCF4\uB4DC \uC0AD\uC81C\uD558\uAE30"}),(0,I.jsxs)(i.p,{children:[(0,I.jsx)(n,{sid:"side_flexboard",className:"uitext"})," > ",(0,I.jsx)(n,{sid:"dashboard_list",className:"uitext"}),"\uC5D0\uC11C \uC0AD\uC81C\uD558\uB824\uB294 \uD56D\uBAA9\uC758 \uC624\uB978\uCABD\uC5D0 ",(0,I.jsx)(i.img,{alt:"\uC0AD\uC81C \uC544\uC774\uCF58",src:s(52407).Z+"",width:"24",height:"24"})," \uBC84\uD2BC\uC744 \uC120\uD0DD\uD558\uC138\uC694. \uD655\uC778 \uBA54\uC2DC\uC9C0\uAC00 \uB098\uD0C0\uB098\uBA74 ",(0,I.jsx)(n,{sid:"delete",className:"uitext"})," \uBC84\uD2BC\uC744 \uC120\uD0DD\uD558\uC138\uC694."]}),(0,I.jsx)(i.admonition,{type:"note",children:(0,I.jsxs)(i.ul,{children:["\n",(0,I.jsx)(i.li,{children:"\uB300\uC2DC\uBCF4\uB4DC \uC18C\uC720\uC790\uAC00 \uB300\uC2DC\uBCF4\uB4DC\uB97C \uC0AD\uC81C\uD558\uB294 \uACBD\uC6B0 \uB300\uC2DC\uBCF4\uB4DC\uB97C \uACF5\uC720\uD55C \uBAA8\uB4E0 \uC0AC\uC6A9\uC790 \uACC4\uC815\uC5D0\uC11C\uB3C4 \uD574\uB2F9 \uB300\uC2DC\uBCF4\uB4DC\uB97C \uC0AD\uC81C\uD569\uB2C8\uB2E4."}),"\n",(0,I.jsxs)(i.li,{children:["\uB300\uC2DC\uBCF4\uB4DC\uB97C \uACF5\uC720 \uBC1B\uC740 \uC0AC\uC6A9\uC790\uAC00 \uB300\uC2DC\uBCF4\uB4DC\uB97C \uC0AD\uC81C\uD558\uBA74, \uD574\uB2F9 \uC0AC\uC6A9\uC790\uC758 ",(0,I.jsx)(n,{sid:"dashboard_list",className:"uitext"}),"\uC5D0\uC11C\uB9CC \uC0AD\uC81C\uD569\uB2C8\uB2E4. \uC6D0\uBCF8 \uB300\uC2DC\uBCF4\uB4DC\uB294 \uADF8\uB300\uB85C \uC720\uC9C0\uD569\uB2C8\uB2E4."]}),"\n"]})})]})]})}function C(g={}){let{wrapper:i}={...(0,e.a)(),...g.components};return i?(0,I.jsx)(i,{...g,children:(0,I.jsx)(t,{...g})}):t(g)}function A(g,i){throw Error("Expected "+(i?"component":"object")+" `"+g+"` to be defined: you likely forgot to import, pass, or provide it.")}},92388:function(g,i,s){s.d(i,{Z:function(){return I}});let I="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcGx1czwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjAuMDAwMDAwLCAtNzgyLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0ic3VnZ2VzdGVkLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDczNy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1wbHVzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjAuMDAwMDAwLCA0NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTksMCBMOSw3IEwxNiw3IEwxNiw5IEw5LDkgTDksMTYgTDcsMTYgTDcsOC45OTkgTDAsOSBMMCw3IEw3LDYuOTk5IEw3LDAgTDksMCBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},12939:function(g,i,s){s.d(i,{Z:function(){return I}});let I="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtY29weTwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjAuMDAwMDAwLCAtMTM5NS4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImVkaXRvci1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAxMzUwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljLWNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyMC4wMDAwMDAsIDQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuMDAwMDAwLCAyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNLTMuMTI2Mzg4MDRlLTEzLDEuNDIxMDg1NDdlLTE0IEMtMy4xMjYzODgwNGUtMTMsMS40MjEwODU0N2UtMTQgLTUuOTY4NTU4OThlLTEzLDAuOSAtNS45Njg1NTg5OGUtMTMsMiBMLTEuNzYyMTQ1OThlLTEyLDE3IEwyLDE3IEwyLDIgTDEzLDIgTDEzLDEuOTUzOTkyNTJlLTE0IEwtMy4xMjYzODgwNGUtMTMsMS40MjEwODU0N2UtMTQgWiBNNCw0IEM0LDQgNCw0LjkgNCw2IEw0LDE4IEM0LDE5LjEgNCwyMCA0LDIwIEwxOCwyMCBDMTgsMjAgMTgsMTkuMSAxOCwxOCBMMTgsNiBDMTgsNC45IDE4LDQgMTgsNCBMNCw0IFogTTYsMTggTDYsNiBMMTYsNiBMMTYsMTggTDYsMTggWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},78831:function(g,i,s){s.d(i,{Z:function(){return I}});let I="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZWRpdDwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OC4wMDAwMDAsIC0xMzk1LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iZWRpdG9yLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDEzNTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtZWRpdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguMDAwMDAwLCA0NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLDE4IEwyMCwyMCBMMCwyMCBMMCwxOCBMMjAsMTggWiBNMTIuOTM5MzM5OCwxIEwxNy45MzMyMTA4LDYuMDA2NDA3NzggTDE3LjkwMSw2LjAzOCBMMTcuOTAzNzA4NSw2LjA0IEw4LjAwNDIxMzU2LDE1LjkzOTQ5NDkgTDgsMTUuOTM1IEw4LDE1Ljk0IEwzLDE1Ljk0IEwzLDEwLjk0IEwzLjAwNSwxMC45NCBMMywxMC45MzU1MzM5IEwxMi44OTk0OTQ5LDEuMDM2MDM4OTcgTDEyLjkwMSwxLjAzOCBMMTIuOTM5MzM5OCwxIFogTTEyLjkzNSwzLjgyOCBMNSwxMS43NjMgTDUsMTMuOTQgTDcuMTc1LDEzLjk0IEwxNS4xMDgsNi4wMDYgTDEyLjkzNSwzLjgyOCBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},52407:function(g,i,s){s.d(i,{Z:function(){return I}});let I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwIDIySDRWNmgydjE0aDEyVjZoMnYxNnptMi0xOGgtNWwtMS4xNDMtMkg4LjE0M0w3IDRIMnYyaDIwVjR6IgogICAgZmlsbD0iIzc1NzU3NSIgLz4KICA8cGF0aCBkPSJNOSA4aDJ2MTBIOVY4ek0xMyA4aDJ2MTBoLTJWOHoiIGZpbGw9IiM3NTc1NzUiIC8+Cjwvc3ZnPg=="},50065:function(g,i,s){s.d(i,{Z:function(){return C},a:function(){return t}});var I=s(67294);let e={},n=I.createContext(e);function t(g){let i=I.useContext(n);return I.useMemo(function(){return"function"==typeof g?g(i):{...i,...g}},[i,g])}function C(g){let i;return i=g.disableParentContext?"function"==typeof g.components?g.components(e):g.components||e:t(g.components),I.createElement(n.Provider,{value:i},g.children)}}}]);