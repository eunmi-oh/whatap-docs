"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["8402"],{76640:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>r,default:()=>a,assets:()=>l,toc:()=>x,frontMatter:()=>d});var t=JSON.parse('{"id":"reference/changes-db-xos-metrics-guide","title":"XOS2 \uC9C0\uD45C \uD3D0\uAE30 \uC548\uB0B4","description":"\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBAA8\uB2C8\uD130\uB9C1\uC5D0\uC11C XOS \uC5D0\uC774\uC804\uD2B8\uB97C \uD1B5\uD574 \uC81C\uACF5\uB418\uB294 2\uAC1C\uC758 CPU \uC9C0\uD45C\uB97C DBX \uC5D0\uC774\uC804\uD2B8 v1.7.0\uBD80\uD130 \uD1B5\uD569\uD574 \uC81C\uACF5\uB420 \uC608\uC815\uC785\uB2C8\uB2E4.","source":"@site/docs/reference/changes-db-xos-metrics.mdx","sourceDirName":"reference","slug":"/reference/changes-db-xos-metrics-guide","permalink":"/whatap-docs/reference/changes-db-xos-metrics-guide","draft":false,"unlisted":false,"editUrl":"undefined/docs/reference/changes-db-xos-metrics.mdx","tags":[],"version":"current","frontMatter":{"id":"changes-db-xos-metrics-guide","title":"XOS2 \uC9C0\uD45C \uD3D0\uAE30 \uC548\uB0B4","description":"\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBAA8\uB2C8\uD130\uB9C1\uC5D0\uC11C XOS \uC5D0\uC774\uC804\uD2B8\uB97C \uD1B5\uD574 \uC81C\uACF5\uB418\uB294 2\uAC1C\uC758 CPU \uC9C0\uD45C\uB97C DBX \uC5D0\uC774\uC804\uD2B8 v1.7.0\uBD80\uD130 \uD1B5\uD569\uD574 \uC81C\uACF5\uB420 \uC608\uC815\uC785\uB2C8\uB2E4.","keywords":["\uB370\uC774\uD130\uBCA0\uC774\uC2A4","XOS \uC5D0\uC774\uC804\uD2B8"],"displayed_sidebar":"dbSidebar","isTranslationMissing":false},"sidebar":"dbSidebar","next":{"title":"RDS CloudWatch Metric \uC218\uC9D1 \uAD8C\uD55C \uC124\uC815","permalink":"/whatap-docs/reference/cloudwatch-metric-guide"}}'),i=n("85893"),c=n("50065");let d={id:"changes-db-xos-metrics-guide",title:"XOS2 \uC9C0\uD45C \uD3D0\uAE30 \uC548\uB0B4",description:"\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBAA8\uB2C8\uD130\uB9C1\uC5D0\uC11C XOS \uC5D0\uC774\uC804\uD2B8\uB97C \uD1B5\uD574 \uC81C\uACF5\uB418\uB294 2\uAC1C\uC758 CPU \uC9C0\uD45C\uB97C DBX \uC5D0\uC774\uC804\uD2B8 v1.7.0\uBD80\uD130 \uD1B5\uD569\uD574 \uC81C\uACF5\uB420 \uC608\uC815\uC785\uB2C8\uB2E4.",keywords:["\uB370\uC774\uD130\uBCA0\uC774\uC2A4","XOS \uC5D0\uC774\uC804\uD2B8"],displayed_sidebar:"dbSidebar",isTranslationMissing:!1},r=void 0,l={},x=[{value:"XOS \uC9C0\uD45C \uBCC0\uACBD \uC0AC\uD56D",id:"xos-\uC9C0\uD45C-\uBCC0\uACBD-\uC0AC\uD56D",level:2},{value:"DBX \uC5D0\uC774\uC804\uD2B8 \uC5C5\uB370\uC774\uD2B8\uD558\uAE30",id:"dbx-\uC5D0\uC774\uC804\uD2B8-\uC5C5\uB370\uC774\uD2B8\uD558\uAE30",level:2},{value:"\uBCC0\uACBD\uB41C \uC9C0\uD45C \uD655\uC778\uD558\uAE30",id:"\uBCC0\uACBD\uB41C-\uC9C0\uD45C-\uD655\uC778\uD558\uAE30",level:2}];function o(e){let s={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",section:"section",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{Cmdname:t,ImgLang:d,Link:r}=s;return!t&&h("Cmdname",!0),!d&&h("ImgLang",!0),!r&&h("Link",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC11C\uBC84\uC5D0 XOS \uC5D0\uC774\uC804\uD2B8\uB97C \uC124\uCE58\uD558\uBA74 \uC11C\uBC84\uC758 \uC790\uC6D0 \uC0C1\uD0DC\uB97C \uBAA8\uB2C8\uD130\uB9C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC218\uC9D1\uD558\uB294 \uC8FC\uC694 \uC9C0\uD45C\uB294 \uB2E4\uC74C \uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC138\uC694."}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(r,{to:"https://docs.whatap.io/postgresql/instance-monitoring#column-info",target:"_blank",children:(0,i.jsx)(t,{sid:"instance_monitoring"})})," - ",(0,i.jsx)("b",{children:"Process information"})," \uD0ED\uC744 \uD655\uC778\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(r,{to:"https://docs.whatap.io/postgresql/metrics-data-list",target:"_blank",children:"\uBA54\uD2B8\uB9AD\uC2A4 \uC9C0\uD45C"})," - ",(0,i.jsx)("b",{children:"XOS"})," \uCE74\uD14C\uACE0\uB9AC\uC758 \uC9C0\uD45C"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsxs)(s.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(s.h2,{id:"xos-\uC9C0\uD45C-\uBCC0\uACBD-\uC0AC\uD56D",children:"XOS \uC9C0\uD45C \uBCC0\uACBD \uC0AC\uD56D"}),(0,i.jsxs)(s.p,{children:["\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBAA8\uB2C8\uD130\uB9C1\uC5D0\uC11C\uB294 CPU \uC0AC\uC6A9\uB7C9\uACFC \uAD00\uB828\uD574 ",(0,i.jsx)(s.code,{children:"CPU(xos)"}),", ",(0,i.jsx)(s.code,{children:"CPU(xos2)"})," \uC9C0\uD45C \uB450 \uAC00\uC9C0\uB97C \uC81C\uACF5\uD558\uACE0 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. DBX \uC5D0\uC774\uC804\uD2B8 1.7.0 \uBC84\uC804 \uC774\uC0C1\uC5D0\uC11C\uB294 \uB450 \uC9C0\uD45C\uAC00 \uD558\uB098\uC758 \uB2E8\uC704\uB85C \uD1B5\uD569\uB420 \uC608\uC815\uC785\uB2C8\uB2E4."]}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"center"},children:"\uBCC0\uACBD \uC804 \uC9C0\uD45C \uC774\uB984"}),(0,i.jsx)(s.th,{style:{textAlign:"center"},children:"\uBCC0\uACBD \uD6C4 \uC9C0\uD45C \uC774\uB984"}),(0,i.jsx)(s.th,{style:{textAlign:"center"},children:"\uB2E8\uC704"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"center"},children:[(0,i.jsx)(s.code,{children:"cpu(xos2)"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"cpu(xos)"})]}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:(0,i.jsx)(s.code,{children:"cpu(xos)"})}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"\uC0AC\uC6A9\uB960(%)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"center"},children:[(0,i.jsx)(s.code,{children:"cpu_idle(xos2)"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"cpu_idle(xos)"})]}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:(0,i.jsx)(s.code,{children:"cpu_idle(xos)"})}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"%"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"center"},children:[(0,i.jsx)(s.code,{children:"cpu_sys(xos2)"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"cpu_sys(xos)"})]}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:(0,i.jsx)(s.code,{children:"cpu_sys(xos)"})}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"%"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"center"},children:[(0,i.jsx)(s.code,{children:"cpu_user(xos2)"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"cpu_user(xos)"})]}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:(0,i.jsx)(s.code,{children:"cpu_user(xos)"})}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"%"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{style:{textAlign:"center"},children:[(0,i.jsx)(s.code,{children:"cpu_iowait(xos2)"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"cpu_iowait(xos)"})]}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:(0,i.jsx)(s.code,{children:"cpu_iowait(xos)"})}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"%"})]})]})]}),(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["DBX \uC5D0\uC774\uC804\uD2B8 1.7.0 \uBC84\uC804 \uC774\uD558\uC5D0\uC11C ",(0,i.jsx)(s.code,{children:"cpu(xos)"})," \uC9C0\uD45C\uC758 \uAC12\uC774 9000\uC774\uB77C\uBA74 ",(0,i.jsx)(s.code,{children:"cpu(xos2)"})," \uC9C0\uD45C\uC758 \uAC12\uC740 90\uC73C\uB85C \uC218\uC9D1\uB418\uC5C8\uC2B5\uB2C8\uB2E4."]})}),(0,i.jsxs)(s.p,{children:["DBX \uC5D0\uC774\uC804\uD2B8\uB97C 1.7.0 \uBC84\uC804\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD55C \uD6C4\uC5D0 \uAE30\uC874 \uC9C0\uD45C\uB85C \uACBD\uACE0 \uC54C\uB9BC\uC744 \uC124\uC815\uD588\uAC70\uB098 \uB300\uC2DC\uBCF4\uB4DC\uB97C \uAD6C\uC131\uD588\uB2E4\uBA74 \uC9C0\uD45C \uC124\uC815\uC744 \uBCC0\uACBD\uD574\uC57C \uD569\uB2C8\uB2E4. ",(0,i.jsx)(t,{sid:"event_statistic",className:"uitext"})," > ",(0,i.jsx)(t,{sid:"event_setting",className:"uitext"})," \uBA54\uB274\uC5D0\uC11C \uC124\uC815\uD55C \uC784\uACC4\uAC12\uC740 \uC790\uB3D9 \uC804\uD658\uB429\uB2C8\uB2E4. \uC774\uBBF8 \uC124\uC815\uD55C \uACBD\uACE0 \uC54C\uB9BC \uC911 \uC704 5\uAC00\uC9C0 \uC9C0\uD45C\uB97C \uC0AC\uC6A9\uD55C \uC54C\uB9BC\uC774 \uC81C\uB300\uB85C \uC804\uD658\uB410\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694. \uB2E4\uC74C \uB0B4\uC6A9\uC744 \uCC38\uACE0\uD558\uC138\uC694."]})]}),"\n",(0,i.jsxs)(s.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(s.h2,{id:"dbx-\uC5D0\uC774\uC804\uD2B8-\uC5C5\uB370\uC774\uD2B8\uD558\uAE30",children:"DBX \uC5D0\uC774\uC804\uD2B8 \uC5C5\uB370\uC774\uD2B8\uD558\uAE30"}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)(t,{sid:"management",className:"uitext"})," > ",(0,i.jsx)(t,{sid:"agent_update",className:"uitext"})," \uBA54\uB274\uC5D0\uC11C 1.7.0 \uBC84\uC804 \uC774\uD558\uC758 \uC5D0\uC774\uC804\uD2B8\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uC138\uC694."]}),(0,i.jsx)(d,{img:"changes/refer-db-agent-update-170.png",desc:"\uC5D0\uC774\uC804\uD2B8 \uC5C5\uB370\uC774\uD2B8"}),(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["\uC5D0\uC774\uC804\uD2B8 \uC5C5\uB370\uC774\uD2B8\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,i.jsx)(s.a,{href:"../postgresql/agent-manage",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]})})]}),"\n",(0,i.jsxs)(s.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(s.h2,{id:"\uBCC0\uACBD\uB41C-\uC9C0\uD45C-\uD655\uC778\uD558\uAE30",children:"\uBCC0\uACBD\uB41C \uC9C0\uD45C \uD655\uC778\uD558\uAE30"}),(0,i.jsxs)(s.p,{children:["DBX \uC5D0\uC774\uC804\uD2B8 \uC5C5\uB370\uC774\uD2B8 \uD6C4 ",(0,i.jsx)(t,{sid:"event_statistic",className:"uitext"})," > ",(0,i.jsx)(t,{sid:"event_setting",className:"uitext"})," \uBA54\uB274\uC758 ",(0,i.jsx)(t,{sid:"database",className:"uitext"})," \uD0ED\uC5D0\uC11C ",(0,i.jsx)(s.code,{children:"cpu(xos2)"})," \uC9C0\uD45C\uAC00 ",(0,i.jsx)(s.code,{children:"cpu(xos)"})," \uC9C0\uD45C\uB85C \uBCC0\uACBD\uB410\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694."]}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"DBX \uC5D0\uC774\uC804\uD2B8 \uC5C5\uB370\uC774\uD2B8 \uC804"})}),"\n",(0,i.jsx)(d,{img:"changes/refer-db-alert-xos2.png",desc:"\uC774\uBCA4\uD2B8 \uC124\uC815"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"DBX \uC5D0\uC774\uC804\uD2B8 \uC5C5\uB370\uC774\uD2B8 \uD6C4"})}),"\n",(0,i.jsx)(d,{img:"changes/refer-db-alert-xos.png",desc:"\uC774\uBCA4\uD2B8 \uC124\uC815"}),"\n"]}),"\n"]}),(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsx)(s.p,{children:"\uC0AC\uC6A9\uC790\uAC00 \uC124\uC815\uD55C \uBA54\uD2B8\uB9AD\uC2A4 \uC54C\uB9BC\uACFC \uB300\uC2DC\uBCF4\uB4DC\uC758 \uC124\uC815\uB4E4\uC740 \uC9C1\uC811 \uC218\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(t,{sid:"event_statistic",className:"uitext"})," > ",(0,i.jsx)(t,{sid:"event_setting",className:"uitext"})," \uBA54\uB274\uC758 ",(0,i.jsx)(t,{sid:"metrics",className:"uitext"})," \uD0ED\uC5D0\uC11C ",(0,i.jsx)("code",{children:"cpu(xos2)"})," \uC9C0\uD45C\uB85C \uC124\uC815\uD55C \uC774\uBCA4\uD2B8\uB97C ",(0,i.jsx)("code",{children:"cpu(xos)"})," \uC9C0\uD45C\uB85C \uBCC0\uACBD\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\uB2E4\uC74C \uBA54\uB274 \uACBD\uB85C\uC5D0\uC11C ",(0,i.jsx)(s.code,{children:"cpu(xos2)"})," \uC9C0\uD45C\uB97C ",(0,i.jsx)(s.code,{children:"cpu(xos)"})," \uC9C0\uD45C\uB85C \uBCC0\uACBD\uD574\uC57C\uD560 \uC124\uC815\uC774 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(t,{sid:"dashboard",className:"uitext"})," > ",(0,i.jsx)(t,{sid:"instance_monitoring",className:"uitext"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(t,{sid:"dashboard",className:"uitext"})," > ",(0,i.jsx)(t,{sid:"flexboard",className:"uitext"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["3\uC6D4 \uC815\uAE30 \uC11C\uBE44\uC2A4 \uBC30\uD3EC(2024.3.27 18:00) \uD6C4 \uB300\uC2DC\uBCF4\uB4DC\uC5D0\uC11C ",(0,i.jsx)(s.code,{children:"cpu(xos)"})," \uC9C0\uD45C\uAC00 \uAE30\uC874\uACFC \uB2E4\uB974\uAC8C \uD45C\uC2DC\uB41C\uB2E4\uBA74 DBX \uC5D0\uC774\uC804\uD2B8\uB97C 1.7.0 \uBC84\uC804 \uC774\uC0C1\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD558\uC138\uC694. \uC5D0\uC774\uC804\uD2B8 \uC5C5\uB370\uC774\uD2B8\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,i.jsx)(s.a,{href:"../postgresql/agent-manage",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\uB3C4\uC6C0\uC774 \uD544\uC694\uD55C \uACE0\uAC1D\uC758 \uACBD\uC6B0 ",(0,i.jsx)(s.a,{href:"https://service.whatap.io",children:"\uC640\uD0ED \uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4"})," \uD654\uBA74 \uC624\uB978\uCABD \uC704\uC5D0 ",(0,i.jsx)(s.img,{alt:"\uCC44\uD305 \uBB38\uC758 \uC544\uC774\uCF58",src:n(78986).Z+"",width:"24",height:"24"})," ",(0,i.jsx)(s.strong,{children:"\uCC44\uD305 \uBB38\uC758"}),"\uB97C \uD1B5\uD574\uC11C \uC9C0\uC6D0\uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n"]})})]})]})}function a(e={}){let{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function h(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},78986:function(e,s,n){n.d(s,{Z:function(){return t}});let t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIKICAgIGQ9Ik0yIDEyQzIgNi40NzcgNi40NzggMiAxMiAyczEwIDQuNDc3IDEwIDEwYTkuOTUyIDkuOTUyIDAgMDEtMS43NDQgNS42NEwyMiAyMmwtNC4zNi0xLjc0NEE5Ljk1MiA5Ljk1MiAwIDAxMTIgMjJDNi40NzggMjIgMiAxNy41MjMgMiAxMnoiCiAgICBmaWxsPSIjMjk2Q0YyIiAvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIgogICAgZD0iTTkgMTIuNWExLjUgMS41IDAgMTEtMyAwIDEuNSAxLjUgMCAwMTMgMHptNC41IDBhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6bTMgMS41YTEuNSAxLjUgMCAxMDAtMyAxLjUgMS41IDAgMDAwIDN6IgogICAgZmlsbD0iI2ZmZiIgLz4KPC9zdmc+"},50065:function(e,s,n){n.d(s,{Z:function(){return r},a:function(){return d}});var t=n(67294);let i={},c=t.createContext(i);function d(e){let s=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);