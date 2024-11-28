"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["85303"],{69735:function(n,e,s){s.r(e),s.d(e,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>t});var r=JSON.parse('{"id":"aws-log/install-aws-log-vpc","title":"WhaTap Forwarder\uC5D0 VPC \uC124\uC815\uD558\uAE30","description":"WhaTap Forwarder\uB97C VPC \uD658\uACBD\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uCD94\uAC00 \uC124\uC815\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4.","source":"@site/docs/aws-log/install-aws-log-vpc.mdx","sourceDirName":"aws-log","slug":"/aws-log/install-aws-log-vpc","permalink":"/whatap-docs/aws-log/install-aws-log-vpc","draft":false,"unlisted":false,"editUrl":"undefined/docs/aws-log/install-aws-log-vpc.mdx","tags":[],"version":"current","frontMatter":{"id":"install-aws-log-vpc","title":"WhaTap Forwarder\uC5D0 VPC \uC124\uC815\uD558\uAE30","description":"WhaTap Forwarder\uB97C VPC \uD658\uACBD\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uCD94\uAC00 \uC124\uC815\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4.","toc_max_heading_level":2,"keywords":["AWS Log","\uC124\uCE58\uD558\uAE30"],"isTranslationMissing":false},"sidebar":"awslogSidebar","previous":{"title":"\uC124\uCE58\uD558\uAE30","permalink":"/whatap-docs/aws-log/install-aws-log"},"next":{"title":"\uC790\uC6D0 \uC0AD\uC81C\uD558\uAE30","permalink":"/whatap-docs/aws-log/delete-aws-resource"}}'),i=s("85893"),l=s("50065");let t={id:"install-aws-log-vpc",title:"WhaTap Forwarder\uC5D0 VPC \uC124\uC815\uD558\uAE30",description:"WhaTap Forwarder\uB97C VPC \uD658\uACBD\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uCD94\uAC00 \uC124\uC815\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4.",toc_max_heading_level:2,keywords:["AWS Log","\uC124\uCE58\uD558\uAE30"],isTranslationMissing:!1},a=void 0,c={},o=[{value:"Lambda \uC2E4\uD589 \uAD8C\uD55C \uC218\uC815",id:"lambda-\uC2E4\uD589-\uAD8C\uD55C-\uC218\uC815",level:2},{value:"VPC \uC124\uC815",id:"vpc-\uC124\uC815",level:2}];function d(n){let e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["\uBCF8 \uBB38\uC11C\uB294 ",(0,i.jsx)("span",{class:"vpcbold",children:"VPC"})," \uD658\uACBD\uC5D0\uC11C ",(0,i.jsx)(e.strong,{children:"WhaTap Forwarder"}),"\uB97C \uC0AC\uC6A9\uD558\uAE30 \uC704\uD55C \uCD94\uAC00 \uC124\uC815\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4. \uBA3C\uC800 ",(0,i.jsx)(e.strong,{children:"WhaTap Forwarder"}),"\uB97C \uC124\uCE58\uD558\uC138\uC694. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,i.jsx)(e.a,{href:"../aws-log/install-aws-log#install-whatap-forwarder",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"WhaTap Forwarder"}),"\uB294 AWS Cloudwatch LogGroup\uACFC S3\uC5D0 \uC313\uC778 AWS Log\uB97C \uC218\uC9D1\uD569\uB2C8\uB2E4. \uC124\uCE58\uB294 AWS Lambda Function\uC73C\uB85C \uC9C4\uD589\uD569\uB2C8\uB2E4. AWS Lambda\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C ",(0,i.jsx)("span",{class:"vpcbold",children:"VPC"}),"(Virtual Private Cloud)\uC5D0\uC11C \uC2DC\uC791\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uB2E4\uC74C\uACFC \uAC19\uC740 \uCD94\uAC00 \uC124\uC815\uC744 \uD1B5\uD574 ",(0,i.jsx)(e.strong,{children:"WhaTap Forwarder"}),"\uB97C ",(0,i.jsx)("span",{class:"vpcbold",children:"VPC"})," \uD658\uACBD\uC5D0\uC11C \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,i.jsxs)(e.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(e.h2,{id:"lambda-\uC2E4\uD589-\uAD8C\uD55C-\uC218\uC815",children:"Lambda \uC2E4\uD589 \uAD8C\uD55C \uC218\uC815"}),(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["AWS Lambda Function \uCF58\uC194\uC5D0\uC11C ",(0,i.jsx)(e.strong,{children:"WhaTap Forwarder"}),"\uB97C \uC120\uD0DD\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"Configuration"})})," \uD0ED\uC758 ",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"Permissions"})})," \uBA54\uB274\uC5D0\uC11C ",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"Execution role"})}),"\uC744 \uD655\uC778 \uD6C4 \uC120\uD0DD\uD574 AWS IAM \uCF58\uC194\uB85C \uC774\uB3D9\uD558\uC138\uC694."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Lambda \uC2E4\uD589 \uC5ED\uD560",src:s(63639).Z+"",width:"1200",height:"665"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["IAM \uCF58\uC194 ",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"Permissions"})})," \uD0ED\uC758 ",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"Permissions policies"})})," \uBA54\uB274\uB85C \uC774\uB3D9\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\uC815\uCC45 \uBAA9\uB85D\uC5D0\uC11C ",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"forwarderpolicy"})}),"\uB97C \uC120\uD0DD\uD574 \uC815\uCC45 \uD3B8\uC9D1 \uD654\uBA74\uC73C\uB85C \uC774\uB3D9\uD558\uC138\uC694."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"IAM \uCF58\uC194",src:s(61988).Z+"",width:"1184",height:"970"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"JSON"})})," \uD0ED\uC744 \uC120\uD0DD \uD6C4 \uB2E4\uC74C \uC815\uCC45\uC744 \uBCF5\uC0AC\uD574 \uBD99\uC5EC\uB123\uAE30 \uD558\uC138\uC694. \uD574\uB2F9 \uC815\uCC45\uC740 ",(0,i.jsx)(e.em,{children:"ENI"}),"\uB97C \uC0DD\uC131, \uC815\uC758, \uC0AD\uC81C\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n"]}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",metastring:"title='IAM Policy'",children:'\n{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Action": [\n                "logs:CreateLogGroup",\n                "logs:CreateLogStream",\n                "logs:PutLogEvents"\n            ],\n            "Resource": "arn:aws:logs:{AWS REGION}:{AWS ACCOUNT ID}:log-group:/aws/lambda/*",\n            "Effect": "Allow"\n        },\n        \n            "Action": [\n                "s3:Get*",\n                "s3:List*",\n                "s3-object-lambda:Get*",\n                "s3-object-lambda:List*"\n            ],\n            "Resource": "*",\n            "Effect": "Allow"\n        },\n        {\n            "Action": [\n                "ec2:CreateNetworkInterface",\n                "ec2:DescribeNetworkInterfaces",\n                "ec2:DeleteNetworkInterface"\n            ],\n            "Resource": "*",\n            "Effect": "Allow"\n        }\n    ]\n}\n\n'})})]}),"\n",(0,i.jsxs)(e.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(e.h2,{id:"vpc-\uC124\uC815",children:"VPC \uC124\uC815"}),(0,i.jsx)("div",{class:"vpcb",children:(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["AWS Lambda Function \uCF58\uC194\uC5D0\uC11C ",(0,i.jsx)(e.strong,{children:"WhaTap Forwarder"}),"\uB97C \uC120\uD0DD\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"Configuration"})})," \uD0ED\uC758 ",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"VPC"})})," \uBA54\uB274\uC5D0\uC11C ",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"Edit"})})," \uBC84\uD2BC\uC744 \uC120\uD0DD\uD574 VPC \uD3B8\uC9D1 \uD654\uBA74\uC73C\uB85C \uC774\uB3D9\uD558\uC138\uC694."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"VPC \uD3B8\uC9D1",src:s(93237).Z+"",width:"1200",height:"788"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\uB2E4\uC74C\uC744 \uCC38\uC870\uD574 ",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"VPC"})}),"\uC640 ",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"Subnets"})})," \uBC0F ",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"Security groups"})})," \uC9C0\uC815 \uD6C4 ",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"Save"})})," \uBC84\uD2BC\uC744 \uC120\uD0DD\uD574 \uC800\uC7A5\uD558\uC138\uC694."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\uC11C\uBE0C\uB137\uACFC \uBCF4\uC548 \uADF8\uB8F9",src:s(24625).Z+"",width:"1200",height:"1634"})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Subnets"})}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"NAT Gateway"}),"\uC758 ",(0,i.jsx)(e.strong,{children:"Public IP"}),"\uB85C ",(0,i.jsx)(e.strong,{children:"IGW"}),"\uB97C \uD1B5\uD574 \uC778\uD130\uB137\uC5D0 \uC811\uC18D\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"IGW"}),"\uB97C \uD1B5\uD574 \uC778\uD130\uB137\uC5D0 \uC811\uC18D\uD558\uAE30 \uC704\uD574\uC11C\uB294 ",(0,i.jsx)(e.strong,{children:"Public IP"}),"\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. Lambda\uC758 ",(0,i.jsx)(e.em,{children:"ENI"}),"\uB294 ",(0,i.jsx)(e.strong,{children:"Public IP"}),"\uB97C \uD560\uB2F9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Private Subnet"})," \uC989 \uC778\uD130\uB137 Gateway\uB85C \uC694\uCCAD\uC774 \uBC14\uB85C \uAC00\uC9C0 \uC54A\uACE0 ",(0,i.jsx)(e.strong,{children:"NAT Gateway"}),"\uB85C \uC544\uC6C3\uBC14\uC6B4\uB4DC \uD2B8\uB798\uD53D\uC774 \uB77C\uC6B0\uD305\uB418\uB294 \uC11C\uBE0C\uB137\uC744 \uACE8\uB77C\uC57C\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Private Subnet"})," \uBC0F ",(0,i.jsx)(e.strong,{children:"Public Subnet"}),"\uC758 ",(0,i.jsx)(e.strong,{children:"WhaTap Forwarder"})]}),"\n"]}),"\n"]}),(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\uC11C\uBE0C\uB137 sc",src:s(69877).Z+"",width:"1966",height:"1598"})})]}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Security groups"})}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\uC544\uC6C3\uBC14\uC6B4\uB4DC"}),"\uAC00 \uC5F4\uB824\uC788\uB294 \uBCF4\uC548 \uADF8\uB8F9\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."]}),"\n"]})]}),"\n"]}),"\n"]})})]})]})}function h(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},69877:function(n,e,s){s.d(e,{Z:function(){return r}});let r=s.p+"assets/images/whatap-forwarder-subnet-819daf45d92178f9b4f78e4f7e564274.png"},61988:function(n,e,s){s.d(e,{Z:function(){return r}});let r=s.p+"assets/images/whatap-forwarder-vpc-aws-iam-9571fc082f4ccc3d33a4aaf6a5a2b661.png"},93237:function(n,e,s){s.d(e,{Z:function(){return r}});let r=s.p+"assets/images/whatap-forwarder-vpc-edit-a23f3f0901f183706bdabf3525bae2af.png"},63639:function(n,e,s){s.d(e,{Z:function(){return r}});let r=s.p+"assets/images/whatap-forwarder-vpc-lambda-b775b4eba6d4079e51782ad4f18f269f.png"},24625:function(n,e,s){s.d(e,{Z:function(){return r}});let r=s.p+"assets/images/whatap-forwarder-vpc-sg-607b7df3b79ad74b450215bd39edb8ad.png"},50065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return t}});var r=s(67294);let i={},l=r.createContext(i);function t(n){let e=r.useContext(l);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);