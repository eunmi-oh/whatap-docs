"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["90395"],{40330:function(e,s,d){d.r(s),d.d(s,{metadata:()=>r,contentTitle:()=>c,default:()=>j,assets:()=>l,toc:()=>h,frontMatter:()=>t});var r=JSON.parse('{"id":"amazon-ecs/metrics-ecs","title":"Amazon ECS \uC9C0\uD45C","description":"Amazon ECS \uC9C0\uD45C\uB97C \uC548\uB0B4\uD569\uB2C8\uB2E4.","source":"@site/docs/amazon-ecs/metrics-ecs.mdx","sourceDirName":"amazon-ecs","slug":"/amazon-ecs/metrics-ecs","permalink":"/whatap-docs/amazon-ecs/metrics-ecs","draft":false,"unlisted":false,"editUrl":"undefined/docs/amazon-ecs/metrics-ecs.mdx","tags":[],"version":"current","frontMatter":{"id":"metrics-ecs","title":"Amazon ECS \uC9C0\uD45C","description":"Amazon ECS \uC9C0\uD45C\uB97C \uC548\uB0B4\uD569\uB2C8\uB2E4.","toc_max_heading_level":2,"displayed_sidebar":"awsecsSidebar","keywords":["Amazon ECS","\uBA54\uD2B8\uB9AD\uC2A4"],"isTranslationMissing":false},"sidebar":"awsecsSidebar","previous":{"title":"\uBA54\uD2B8\uB9AD\uC2A4","permalink":"/whatap-docs/amazon-ecs/metrics-intro"},"next":{"title":"\uBA54\uD2B8\uB9AD\uC2A4 \uC870\uD68C","permalink":"/whatap-docs/amazon-ecs/metrics-search"}}'),n=d("85893"),i=d("50065");let t={id:"metrics-ecs",title:"Amazon ECS \uC9C0\uD45C",description:"Amazon ECS \uC9C0\uD45C\uB97C \uC548\uB0B4\uD569\uB2C8\uB2E4.",toc_max_heading_level:2,displayed_sidebar:"awsecsSidebar",keywords:["Amazon ECS","\uBA54\uD2B8\uB9AD\uC2A4"],isTranslationMissing:!1},c=void 0,l={},h=[{value:"<code>ecs_service</code>",id:"ecs_service",level:2},{value:"Tags",id:"tags",level:3},{value:"Fields",id:"fields",level:3},{value:"<code>ecs_deployment</code>",id:"ecs_deployment",level:2},{value:"Tags",id:"tags-1",level:3},{value:"Fields",id:"fields-1",level:3},{value:"<code>ecs_node</code>",id:"ecs_node",level:2},{value:"Tags",id:"tags-2",level:3},{value:"Fields",id:"fields-2",level:3},{value:"<code>ecs_task</code>",id:"ecs_task",level:2},{value:"Tags",id:"tags-3",level:3},{value:"Fields",id:"fields-3",level:3}];function x(e){let s={admonition:"admonition",code:"code",h2:"h2",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",section:"section",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsx)(s.mdxAdmonitionTitle,{}),(0,n.jsxs)(s.p,{children:["\uC640\uD0ED ECS \uBA54\uD2B8\uB9AD\uC2A4 ",(0,n.jsx)(s.strong,{children:"\uCE74\uD14C\uACE0\uB9AC"}),"\uC758 \uD45C\uAE30\uB294 \uC811\uB450\uC0AC(",(0,n.jsx)(s.code,{children:"ecs_"}),")\uB97C \uD65C\uC6A9\uD569\uB2C8\uB2E4."]})]}),"\n",(0,n.jsxs)("div",{className:"metricslist",children:[(0,n.jsx)(s.section,{className:"remark-sectionize-h2",children:(0,n.jsx)(s.h2,{id:"ecs_service",children:(0,n.jsx)(s.code,{children:"ecs_service"})})}),(0,n.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,n.jsx)(s.h3,{id:"tags",children:"Tags"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\uD0DC\uADF8\uBA85"}),(0,n.jsx)(s.th,{children:"\uC124\uBA85"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ClusterArn"}),(0,n.jsx)(s.td,{children:"Amazon Resource Name(ARN)\uC73C\uB85C ECS \uD074\uB7EC\uC2A4\uD130\uB97C \uC2DD\uBCC4\uD569\uB2C8\uB2E4. \uAC01 \uD074\uB7EC\uC2A4\uD130\uB294 \uACE0\uC720\uD55C ARN\uC744 \uAC00\uC9C0\uBA70 \uC11C\uBE44\uC2A4\uAC00 \uBC30\uD3EC\uB41C \uD074\uB7EC\uC2A4\uD130\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"LaunchType"}),(0,n.jsxs)(s.td,{children:["ECS \uC11C\uBE44\uC2A4\uC758 \uC2DC\uC791 \uC720\uD615\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. ",(0,n.jsx)(s.code,{children:"EC2"})," \uB610\uB294 ",(0,n.jsx)(s.code,{children:"FARGATE"}),"\uB97C \uAC12\uC73C\uB85C \uAC00\uC9D1\uB2C8\uB2E4. \uC11C\uBE44\uC2A4\uAC00 EC2 \uC778\uC2A4\uD134\uC2A4\uC5D0\uC11C \uC2E4\uD589\uB418\uB294\uC9C0 \uC544\uB2C8\uBA74 \uC11C\uBC84\uB9AC\uC2A4 Fargate\uC5D0\uC11C \uC2E4\uD589\uB418\uB294\uC9C0 \uD45C\uC2DC\uD569\uB2C8\uB2E4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"PlatformVersion"}),(0,n.jsx)(s.td,{children:"Fargate \uC791\uC5C5\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uD50C\uB7AB\uD3FC \uBC84\uC804\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. Fargate \uC778\uD504\uB77C\uC758 \uD2B9\uC815 \uBC84\uC804\uC744 \uB098\uD0C0\uB0B4\uACE0 \uD638\uD658\uC131 \uBC0F \uAE30\uB2A5 \uC9C0\uC6D0\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"PropagateTags"}),(0,n.jsxs)(s.td,{children:["\uC11C\uBE44\uC2A4\uAC00 \uD0DC\uC2A4\uD06C\uC5D0 \uD0DC\uADF8\uB97C \uC804\uB2EC\uD558\uB294 \uBC29\uBC95\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. ",(0,n.jsx)(s.code,{children:"TASK_DEFINITION"})," \uB610\uB294 ",(0,n.jsx)(s.code,{children:"SERVICE"})," \uAC12\uC744 \uAC00\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC11C\uBE44\uC2A4 \uB610\uB294 \uD0DC\uC2A4\uD06C \uC815\uC758\uC5D0\uC11C \uD0DC\uADF8\uB97C \uC0C1\uC18D\uBC1B\uC2B5\uB2C8\uB2E4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"RoleArn"}),(0,n.jsx)(s.td,{children:"\uC11C\uBE44\uC2A4\uAC00 \uC0AC\uC6A9\uD558\uB294 IAM \uC5ED\uD560\uC758 ARN\uC785\uB2C8\uB2E4. \uC774 \uC5ED\uD560\uC740 ECS\uAC00 \uC11C\uBE44\uC2A4\uC5D0 \uB300\uD574 \uC2E4\uD589\uD560 \uC218 \uC788\uB294 \uC791\uC5C5\uC744 \uC815\uC758\uD569\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"CreatedBy"}),(0,n.jsx)(s.td,{children:"\uC11C\uBE44\uC2A4\uB97C \uC0DD\uC131\uD55C \uC0AC\uC6A9\uC790\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uC758 \uC2DD\uBCC4\uC790\uB098 \uC774\uB984\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"SchedulingStrategy"}),(0,n.jsxs)(s.td,{children:["\uC11C\uBE44\uC2A4\uC758 \uC2A4\uCF00\uC904\uB9C1 \uC804\uB7B5\uC73C\uB85C ",(0,n.jsx)(s.code,{children:"REPLICA"})," \uB610\uB294 ",(0,n.jsx)(s.code,{children:"DAEMON"})," \uAC12\uC744 \uAC00\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD0DC\uC2A4\uD06C \uBC30\uD3EC \uBC29\uC2DD\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ServiceArn"}),(0,n.jsx)(s.td,{children:"ECS \uC11C\uBE44\uC2A4\uC758 ARN\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC11C\uBE44\uC2A4\uC758 \uACE0\uC720\uD55C \uC2DD\uBCC4\uC790\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ServiceName"}),(0,n.jsx)(s.td,{children:"\uC0AC\uC6A9\uC790\uAC00 \uC9C0\uC815\uD55C ECS \uC11C\uBE44\uC2A4\uC758 \uC774\uB984\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{rowSpan:"2",children:"TaskDefinition"}),(0,n.jsx)(s.td,{children:"\uC11C\uBE44\uC2A4\uC5D0\uC11C \uC2E4\uD589\uB418\uB294 \uD0DC\uC2A4\uD06C \uC815\uC758\uC758 \uC774\uB984\uACFC \uAC1C\uC815 \uBC88\uD638\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."})]}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:["\uC608, ",(0,n.jsx)(s.code,{children:"my-task:1"})]})}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"DeploymentControllerType"}),(0,n.jsxs)(s.td,{children:["\uBC30\uD3EC \uCEE8\uD2B8\uB864\uB7EC \uC720\uD615\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. ",(0,n.jsx)(s.code,{children:"ECS"})," \uB610\uB294 ",(0,n.jsx)(s.code,{children:"CODE_DEPLOY"}),"\uB97C \uAC12\uC73C\uB85C \uAC00\uC9D1\uB2C8\uB2E4. \uBC30\uD3EC \uBC29\uBC95\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"HealthCheckGracePeriodSeconds"}),(0,n.jsx)(s.td,{children:"\uC11C\uBE44\uC2A4 \uC2DC\uC791 \uD6C4 \uD5EC\uC2A4 \uCCB4\uD06C \uC720\uC608 \uAE30\uAC04(\uCD08)\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC774 \uAE30\uAC04 \uB3D9\uC548 \uC11C\uBE44\uC2A4\uB294 \uD5EC\uC2A4 \uCCB4\uD06C \uC2E4\uD328\uB97C \uBB34\uC2DC\uD569\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Tags"}),(0,n.jsx)(s.td,{children:"\uC11C\uBE44\uC2A4\uC5D0 \uC5F0\uACB0\uB41C \uD0DC\uADF8\uC758 \uD0A4-\uAC12 \uC30D \uBAA9\uB85D\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uAC01 \uD0DC\uADF8\uB294 \uC11C\uBE44\uC2A4\uC5D0 \uCD94\uAC00\uC801\uC778 \uBA54\uD0C0 \uB370\uC774\uD130\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."})]})]})]})]}),(0,n.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\uD544\uB4DC\uBA85"}),(0,n.jsx)(s.th,{children:"\uC124\uBA85"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{rowSpan:"2",children:"Status"}),(0,n.jsx)(s.td,{children:"\uC11C\uBE44\uC2A4\uC758 \uD604\uC7AC \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."})]}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:["\uC608, ",(0,n.jsx)(s.code,{children:"ACTIVE"}),", ",(0,n.jsx)(s.code,{children:"DRAINING"}),", ",(0,n.jsx)(s.code,{children:"INACTIVE"})]})}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"CreatedAt"}),(0,n.jsx)(s.td,{children:"\uC11C\uBE44\uC2A4\uAC00 \uC0DD\uC131\uB41C \uC2DC\uAC04\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uD0C0\uC784\uC2A4\uD0EC\uD504\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"DesiredCount"}),(0,n.jsx)(s.td,{children:"\uC11C\uBE44\uC2A4\uC5D0\uC11C \uC6D0\uD558\uB294 \uD0DC\uC2A4\uD06C\uC758 \uC218\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC11C\uBE44\uC2A4\uAC00 \uD56D\uC0C1 \uC720\uC9C0\uD558\uB824\uACE0 \uD558\uB294 \uD0DC\uC2A4\uD06C\uC758 \uC218\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"PendingCount"}),(0,n.jsx)(s.td,{children:"\uD604\uC7AC \uB300\uAE30 \uC911\uC778 \uD0DC\uC2A4\uD06C\uC758 \uC218\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC544\uC9C1 \uC2DC\uC791\uB418\uC9C0 \uC54A\uC740 \uD0DC\uC2A4\uD06C\uC758 \uC218\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"RunningCount"}),(0,n.jsx)(s.td,{children:"\uD604\uC7AC \uC2E4\uD589 \uC911\uC778 \uD0DC\uC2A4\uD06C\uC758 \uC218\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."})]})]})]})]}),(0,n.jsx)(s.section,{className:"remark-sectionize-h2",children:(0,n.jsx)(s.h2,{id:"ecs_deployment",children:(0,n.jsx)(s.code,{children:"ecs_deployment"})})}),(0,n.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,n.jsx)(s.h3,{id:"tags-1",children:"Tags"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\uD0DC\uADF8\uBA85"}),(0,n.jsx)(s.th,{children:"\uC124\uBA85"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Id"}),(0,n.jsx)(s.td,{children:"ECS \uBC30\uD3EC\uC758 \uACE0\uC720 \uC2DD\uBCC4\uC790\uC785\uB2C8\uB2E4. \uAC01 \uBC30\uD3EC\uB294 \uACE0\uC720\uD55C ID\uB97C \uAC00\uC9C0\uBA70 \uC774\uB97C \uD1B5\uD574 \uD2B9\uC815 \uBC30\uD3EC\uB97C \uC2DD\uBCC4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"LaunchType"}),(0,n.jsxs)(s.td,{children:["ECS \uBC30\uD3EC\uC758 \uC2DC\uC791 \uC720\uD615\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. ",(0,n.jsx)(s.code,{children:"EC2"})," \uB610\uB294 ",(0,n.jsx)(s.code,{children:"FARGATE"}),"\uB97C \uAC12\uC73C\uB85C \uAC00\uC9D1\uB2C8\uB2E4. \uC11C\uBE44\uC2A4\uAC00 EC2 \uC778\uC2A4\uD134\uC2A4\uC5D0\uC11C \uC2E4\uD589\uB418\uB294\uC9C0 \uC544\uB2C8\uBA74 \uC11C\uBC84\uB9AC\uC2A4 Fargate\uC5D0\uC11C \uC2E4\uD589\uB418\uB294\uC9C0 \uD45C\uC2DC\uD569\uB2C8\uB2E4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"PlatformVersion"}),(0,n.jsx)(s.td,{children:"Fargate \uC791\uC5C5\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uD50C\uB7AB\uD3FC \uBC84\uC804\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. Fargate \uC778\uD504\uB77C\uC758 \uD2B9\uC815 \uBC84\uC804\uC744 \uB098\uD0C0\uB0B4\uACE0 \uD638\uD658\uC131 \uBC0F \uAE30\uB2A5 \uC9C0\uC6D0\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{rowSpan:"2",children:"TaskDefinition"}),(0,n.jsx)(s.td,{children:"\uBC30\uD3EC \uC2DC \uC2E4\uD589\uB418\uB294 \uD0DC\uC2A4\uD06C \uC815\uC758\uC758 \uC774\uB984\uACFC \uAC1C\uC815 \uBC88\uD638\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."})]}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:["\uC608, ",(0,n.jsx)(s.code,{children:"my-task:1"})]})})]})]})]}),(0,n.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,n.jsx)(s.h3,{id:"fields-1",children:"Fields"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\uD544\uB4DC\uBA85"}),(0,n.jsx)(s.th,{children:"\uC124\uBA85"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{rowSpan:"2",children:"Status"}),(0,n.jsx)(s.td,{children:"\uBC30\uD3EC\uC758 \uD604\uC7AC \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4. \uBC30\uD3EC\uC758 \uC9C4\uD589 \uC0C1\uD669\uACFC \uACB0\uACFC\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4."})]}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:["\uC608, ",(0,n.jsx)(s.code,{children:"PRIMARY"}),", ",(0,n.jsx)(s.code,{children:"ACTIVE"}),", ",(0,n.jsx)(s.code,{children:"FAILED"})]})}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"CreatedAt"}),(0,n.jsx)(s.td,{children:"\uBC30\uD3EC\uAC00 \uC0DD\uC131\uB41C \uC2DC\uAC04\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uD0C0\uC784\uC2A4\uD0EC\uD504\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"DesiredCount"}),(0,n.jsx)(s.td,{children:"\uBC30\uD3EC\uC5D0\uC11C \uC6D0\uD558\uB294 \uD0DC\uC2A4\uD06C\uC758 \uC218\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4. \uBC30\uD3EC\uAC00 \uD56D\uC0C1 \uC720\uC9C0\uD558\uB824\uACE0 \uD558\uB294 \uD0DC\uC2A4\uD06C\uC758 \uC218\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"PendingCount"}),(0,n.jsx)(s.td,{children:"\uD604\uC7AC \uB300\uAE30 \uC911\uC778 \uD0DC\uC2A4\uD06C\uC758 \uC218\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC544\uC9C1 \uC2DC\uC791\uB418\uC9C0 \uC54A\uC740 \uD0DC\uC2A4\uD06C\uC758 \uC218\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"RunningCount"}),(0,n.jsx)(s.td,{children:"\uD604\uC7AC \uC2E4\uD589 \uC911\uC778 \uD0DC\uC2A4\uD06C\uC758 \uC218\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"UpdatedAt"}),(0,n.jsx)(s.td,{children:"\uBC30\uD3EC\uAC00 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB41C \uC2DC\uAC04\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uD0C0\uC784\uC2A4\uD0EC\uD504\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4."})]})]})]})]}),(0,n.jsx)(s.section,{className:"remark-sectionize-h2",children:(0,n.jsx)(s.h2,{id:"ecs_node",children:(0,n.jsx)(s.code,{children:"ecs_node"})})}),(0,n.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,n.jsx)(s.h3,{id:"tags-2",children:"Tags"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\uD0DC\uADF8\uBA85"}),(0,n.jsx)(s.th,{children:"\uC124\uBA85"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Ec2InstanceId"}),(0,n.jsx)(s.td,{children:"ECS \uD074\uB7EC\uC2A4\uD130\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 EC2 \uC778\uC2A4\uD134\uC2A4\uC758 \uACE0\uC720 \uC2DD\uBCC4\uC790\uC785\uB2C8\uB2E4. \uAC01 \uC778\uC2A4\uD134\uC2A4\uB294 \uACE0\uC720\uD55C ID\uB97C \uAC00\uC9D1\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uD2B9\uC815 \uC778\uC2A4\uD134\uC2A4\uB97C \uC2DD\uBCC4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ContainerInstanceArn"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4\uC758 Amazon Resource Name(ARN)\uC785\uB2C8\uB2E4. \uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4\uC758 \uACE0\uC720 \uC2DD\uBCC4\uC790\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"DockerVersion"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4\uC5D0\uC11C \uC2E4\uD589 \uC911\uC778 Docker\uC758 \uBC84\uC804\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. Docker\uC758 \uD2B9\uC815 \uBC84\uC804\uC744 \uC2DD\uBCC4\uD558\uACE0 \uD638\uD658\uC131\uACFC \uAE30\uB2A5 \uC9C0\uC6D0\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"AgentVersion"}),(0,n.jsx)(s.td,{children:"ECS \uC5D0\uC774\uC804\uD2B8\uC758 \uBC84\uC804\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. ECS \uC5D0\uC774\uC804\uD2B8\uB294 ECS \uD074\uB7EC\uC2A4\uD130\uC640 \uD1B5\uC2E0\uD569\uB2C8\uB2E4. \uBC84\uC804 \uAE30\uC900\uC73C\uB85C \uD638\uD658\uC131\uACFC \uAE30\uB2A5 \uC9C0\uC6D0\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"PendingTasksCount"}),(0,n.jsx)(s.td,{children:"\uD604\uC7AC \uB300\uAE30 \uC911\uC778 \uD0DC\uC2A4\uD06C\uC758 \uC218\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC544\uC9C1 \uC2DC\uC791\uB418\uC9C0 \uC54A\uC740 \uD0DC\uC2A4\uD06C\uC758 \uC218\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"RunningTasksCount"}),(0,n.jsx)(s.td,{children:"\uD604\uC7AC \uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4\uC5D0\uC11C \uC2E4\uD589\uB418\uACE0 \uC788\uB294 \uD0DC\uC2A4\uD06C\uC758 \uC218\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Tags"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC5F0\uACB0\uB41C \uD0DC\uADF8\uC758 \uD0A4-\uAC12 \uC30D \uBAA9\uB85D\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uAC01 \uD0DC\uADF8\uB294 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uCD94\uAC00\uC801\uC778 \uBA54\uD0C0\uB370\uC774\uD130\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Version"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4\uC758 \uB0B4\uBD80 \uBC84\uC804\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC778\uC2A4\uD134\uC2A4\uC758 \uAD6C\uC131 \uBC84\uC804\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4."})]})]})]})]}),(0,n.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,n.jsx)(s.h3,{id:"fields-2",children:"Fields"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\uD544\uB4DC\uBA85"}),(0,n.jsx)(s.th,{children:"\uC124\uBA85"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{rowSpan:"2",children:"Status"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4\uC758 \uD604\uC7AC \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."})]}),(0,n.jsx)(s.tr,{children:(0,n.jsxs)(s.td,{children:["\uC608, ",(0,n.jsx)(s.code,{children:"ACTIVE"}),", ",(0,n.jsx)(s.code,{children:"DRAINING"}),", ",(0,n.jsx)(s.code,{children:"INACTIVE"})]})}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"StatusReason"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4\uC758 \uD604\uC7AC \uC0C1\uD0DC\uC5D0 \uB300\uD55C \uC124\uBA85 \uBC0F \uBCC0\uACBD \uC6D0\uC778\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"RegisteredAt"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108 \uC778\uC2A4\uD134\uC2A4\uAC00 ECS \uD074\uB7EC\uC2A4\uD130\uC5D0 \uB4F1\uB85D\uB41C \uC2DC\uAC04\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uD0C0\uC784\uC2A4\uD0EC\uD504\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4."})]})]})]})]}),(0,n.jsx)(s.section,{className:"remark-sectionize-h2",children:(0,n.jsx)(s.h2,{id:"ecs_task",children:(0,n.jsx)(s.code,{children:"ecs_task"})})}),(0,n.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,n.jsx)(s.h3,{id:"tags-3",children:"Tags"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\uD0DC\uADF8\uBA85"}),(0,n.jsx)(s.th,{children:"\uC124\uBA85"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"containerId"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uC758 \uACE0\uC720 \uC2DD\uBCC4\uC790\uC785\uB2C8\uB2E4. \uAC01 \uCEE8\uD14C\uC774\uB108\uB294 \uACE0\uC720\uD55C ID\uB97C \uAC00\uC9C0\uACE0 \uD2B9\uC815 \uCEE8\uD14C\uC774\uB108\uB97C \uC2DD\uBCC4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"containerName"}),(0,n.jsx)(s.td,{children:"\uC0AC\uC6A9\uC790\uAC00 \uC9C0\uC815\uD55C \uCEE8\uD14C\uC774\uB108\uC758 \uC774\uB984\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"agentOid"}),(0,n.jsx)(s.td,{children:"\uC5D0\uC774\uC804\uD2B8\uC758 OID(Object Identifier)\uC785\uB2C8\uB2E4. \uC5D0\uC774\uC804\uD2B8\uC758 \uACE0\uC720 \uC2DD\uBCC4\uC790\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"agentPcode"}),(0,n.jsx)(s.td,{children:"\uC5D0\uC774\uC804\uD2B8\uC758 \uCF54\uB4DC\uC785\uB2C8\uB2E4. \uC5D0\uC774\uC804\uD2B8\uC758 \uC2DD\uBCC4\uC744 \uB3D5\uB294 \uCF54\uB4DC \uAC12\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"command"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108 \uC2DC\uC791 \uC2DC \uC2E4\uD589\uB418\uB294 \uBA85\uB839\uC5B4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"containerKey"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uC758 \uD574\uC2DC\uB41C \uD0A4 \uAC12\uC73C\uB85C \uCEE8\uD14C\uC774\uB108 ID\uB97C \uD574\uC2DC\uD558\uC5EC \uC0DD\uC131\uB41C \uACE0\uC720 \uD0A4\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"created"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uAC00 \uC0DD\uC131\uB41C \uC2DC\uAC04\uC785\uB2C8\uB2E4. \uD0C0\uC784\uC2A4\uD0EC\uD504\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"image"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uAC00 \uC2E4\uD589 \uC911\uC778 \uC774\uBBF8\uC9C0\uC758 \uC774\uB984\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"imageHash"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108 \uC774\uBBF8\uC9C0\uC758 \uD574\uC2DC \uAC12\uC785\uB2C8\uB2E4. \uC774\uBBF8\uC9C0 \uC774\uB984\uC744 \uD574\uC2DC\uD558\uC5EC \uC0DD\uC131\uB41C \uACE0\uC720 \uAC12\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"imageId"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108 \uC774\uBBF8\uC9C0\uC758 ID\uC785\uB2C8\uB2E4. \uC774\uBBF8\uC9C0\uC758 \uACE0\uC720 \uC2DD\uBCC4\uC790\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"onode"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uAC00 \uC2E4\uD589 \uC911\uC778 \uB178\uB4DC\uC758 \uACE0\uC720 \uC2DD\uBCC4\uC790\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"onodeName"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uAC00 \uC2E4\uD589 \uC911\uC778 \uB178\uB4DC\uC758 \uC774\uB984\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"dimension"}),(0,n.jsx)(s.td,{children:"\uD0DC\uC2A4\uD06C ARN\uACFC \uCEE8\uD14C\uC774\uB108 ID\uB97C \uC870\uD569\uD55C \uBB38\uC790\uC5F4\uC785\uB2C8\uB2E4. \uBAA8\uB2C8\uD130\uB9C1 \uBC0F \uC2DD\uBCC4\uC744 \uB3D5\uB294 \uC815\uBCF4\uC785\uB2C8\uB2E4."})]})]})]})]}),(0,n.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,n.jsx)(s.h3,{id:"fields-3",children:"Fields"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\uD544\uB4DC\uBA85"}),(0,n.jsx)(s.th,{children:"\uC124\uBA85"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cpu_user"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC0AC\uC6A9\uC790 \uBAA8\uB4DC\uC5D0\uC11C \uC0AC\uC6A9\uB41C CPU \uC2DC\uAC04\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cpu_user_millis"}),(0,n.jsx)(s.td,{children:"\uC0AC\uC6A9\uC790 \uBAA8\uB4DC\uC5D0\uC11C \uC0AC\uC6A9\uB41C CPU \uC2DC\uAC04(\uBC00\uB9AC\uCD08)\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cpu_sys"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC2DC\uC2A4\uD15C \uBAA8\uB4DC\uC5D0\uC11C \uC0AC\uC6A9\uB41C CPU \uC2DC\uAC04\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cpu_sys_millis"}),(0,n.jsx)(s.td,{children:"\uC2DC\uC2A4\uD15C \uBAA8\uB4DC\uC5D0\uC11C \uC0AC\uC6A9\uB41C CPU \uC2DC\uAC04(\uBC00\uB9AC\uCD08)\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cpu_total"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC0AC\uC6A9\uB41C \uC804\uCCB4 CPU \uC2DC\uAC04\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cpu_total_millis"}),(0,n.jsx)(s.td,{children:"\uC804\uCCB4 CPU \uC2DC\uAC04(\uBC00\uB9AC\uCD08)\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mem_usage"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uC758 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mem_totalrss"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uC758 \uC804\uCCB4 RSS(Resident Set Size) \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"blkio_rbps"}),(0,n.jsx)(s.td,{children:"\uBE14\uB85D I/O \uC77D\uAE30 \uC18D\uB3C4(\uBC14\uC774\uD2B8/\uCD08)\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"blkio_riops"}),(0,n.jsx)(s.td,{children:"\uBE14\uB85D I/O \uC77D\uAE30 \uC791\uC5C5 \uC218(I/O \uC791\uC5C5/\uCD08)\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"blkio_wbps"}),(0,n.jsx)(s.td,{children:"\uBE14\uB85D I/O \uC4F0\uAE30 \uC18D\uB3C4(\uBC14\uC774\uD2B8/\uCD08)\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"blkio_wiops"}),(0,n.jsx)(s.td,{children:"\uBE14\uB85D I/O \uC4F0\uAE30 \uC791\uC5C5 \uC218(I/O \uC791\uC5C5/\uCD08)\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mem_percent"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC758 \uBC31\uBD84\uC728\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cpu_quota"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uC5D0 \uD560\uB2F9\uB41C CPU \uD560\uB2F9\uB7C9\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cpu_quota_percent"}),(0,n.jsx)(s.td,{children:"\uD560\uB2F9\uB41C CPU\uC758 \uBC31\uBD84\uC728\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mem_limit"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uC5D0 \uD560\uB2F9\uB41C \uBA54\uBAA8\uB9AC \uD55C\uB3C4\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cpu_request"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uC5D0 \uC694\uCCAD\uB41C CPU \uC790\uC6D0\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mem_request"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uC5D0 \uC694\uCCAD\uB41C \uBA54\uBAA8\uB9AC \uC790\uC6D0\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cpu_throttledperiods"}),(0,n.jsx)(s.td,{children:"CPU \uC2A4\uB85C\uD2C0\uB41C \uAE30\uAC04\uC758 \uC218\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cpu_throttledtime"}),(0,n.jsx)(s.td,{children:"CPU \uC2A4\uB85C\uD2C0\uB41C \uC2DC\uAC04\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mem_failcnt"}),(0,n.jsx)(s.td,{children:"\uBA54\uBAA8\uB9AC \uD560\uB2F9 \uC2E4\uD328 \uD69F\uC218\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mem_maxusage"}),(0,n.jsx)(s.td,{children:"\uBA54\uBAA8\uB9AC\uC758 \uCD5C\uB300 \uC0AC\uC6A9\uB7C9\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mem_per_request"}),(0,n.jsx)(s.td,{children:"\uC694\uCCAD\uB41C \uBA54\uBAA8\uB9AC\uC758 \uBC31\uBD84\uC728\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mem_totalcache"}),(0,n.jsx)(s.td,{children:"\uCE90\uC2DC\uB41C \uBA54\uBAA8\uB9AC\uC758 \uCD1D\uB7C9\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mem_totalpgfault"}),(0,n.jsx)(s.td,{children:"\uC804\uCCB4 \uD398\uC774\uC9C0 \uD3F4\uD2B8 \uC218\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mem_totalrss_percent"}),(0,n.jsx)(s.td,{children:"\uC804\uCCB4 RSS \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC758 \uBC31\uBD84\uC728\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mem_totalunevictable"}),(0,n.jsx)(s.td,{children:"\uC804\uCCB4 \uBE44\uD1F4\uAC70 \uAC00\uB2A5 \uBA54\uBAA8\uB9AC\uC758 \uC591\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mem_workingset"}),(0,n.jsx)(s.td,{children:"\uC791\uC5C5 \uC138\uD2B8\uC758 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mem_inactivefile"}),(0,n.jsx)(s.td,{children:"\uBE44\uD65C\uC131 \uD30C\uC77C \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"network_rbps"}),(0,n.jsx)(s.td,{children:"\uB124\uD2B8\uC6CC\uD06C \uC77D\uAE30 \uC18D\uB3C4(\uBC14\uC774\uD2B8/\uCD08)\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"network_rdropped"}),(0,n.jsx)(s.td,{children:"\uB124\uD2B8\uC6CC\uD06C \uC77D\uAE30 \uB4DC\uB86D \uC218\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"network_rerror"}),(0,n.jsx)(s.td,{children:"\uB124\uD2B8\uC6CC\uD06C \uC77D\uAE30 \uC624\uB958 \uC218\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"network_riops"}),(0,n.jsx)(s.td,{children:"\uB124\uD2B8\uC6CC\uD06C \uC77D\uAE30 \uC791\uC5C5 \uC218(I/O \uC791\uC5C5/\uCD08)\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"network_wbps"}),(0,n.jsx)(s.td,{children:"\uB124\uD2B8\uC6CC\uD06C \uC4F0\uAE30 \uC18D\uB3C4(\uBC14\uC774\uD2B8/\uCD08)\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"network_wdropped"}),(0,n.jsx)(s.td,{children:"\uB124\uD2B8\uC6CC\uD06C \uC4F0\uAE30 \uB4DC\uB86D \uC218\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"network_werror"}),(0,n.jsx)(s.td,{children:"\uB124\uD2B8\uC6CC\uD06C \uC4F0\uAE30 \uC624\uB958 \uC218\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"network_wiops"}),(0,n.jsx)(s.td,{children:"\uB124\uD2B8\uC6CC\uD06C \uC4F0\uAE30 \uC791\uC5C5 \uC218(I/O \uC791\uC5C5/\uCD08)\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"node_cpu"}),(0,n.jsx)(s.td,{children:"\uB178\uB4DC\uC758 CPU \uC0AC\uC6A9\uB7C9\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"node_mem"}),(0,n.jsx)(s.td,{children:"\uB178\uB4DC\uC758 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"restart_count"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108 \uC7AC\uC2DC\uC791 \uD69F\uC218\uC785\uB2C8\uB2E4."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{rowSpan:"2",children:"state"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uC758 \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC0C1\uD0DC\uB294 \uC5EC\uB7EC \uB2E8\uACC4\uB85C \uB098\uB269\uB2C8\uB2E4."})]}),(0,n.jsx)(s.tr,{children:(0,n.jsx)(s.td,{children:"\uC608, \uC2E4\uD589 \uC911, \uC911\uC9C0\uB428"})}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"status"}),(0,n.jsx)(s.td,{children:"\uCEE8\uD14C\uC774\uB108\uC758 \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4. \uD14D\uC2A4\uD2B8 \uAC12\uC73C\uB85C \uC0C1\uD0DC\uB97C \uC124\uBA85\uD569\uB2C8\uB2E4."})]})]})]})]})]})]})}function j(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},50065:function(e,s,d){d.d(s,{Z:function(){return c},a:function(){return t}});var r=d(67294);let n={},i=r.createContext(n);function t(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);