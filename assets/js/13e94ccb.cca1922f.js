"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["25787"],{25658:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>l,frontMatter:()=>i});var t=JSON.parse('{"id":"npm/set-aws-resource-options","title":"AWS \uB9AC\uC18C\uC2A4 \uC815\uBCF4 \uC218\uC9D1 \uC635\uC158","description":"AWS \uD658\uACBD\uC5D0\uC11C \uB9AC\uC18C\uC2A4 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uC5EC \uD1A0\uD3F4\uB85C\uC9C0 \uD654\uBA74\uC5D0 \uD45C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","source":"@site/docs/npm/set-aws-resource-options.mdx","sourceDirName":"npm","slug":"/npm/set-aws-resource-options","permalink":"/whatap-docs/npm/set-aws-resource-options","draft":false,"unlisted":false,"editUrl":"undefined/docs/npm/set-aws-resource-options.mdx","tags":[],"version":"current","frontMatter":{"id":"set-aws-resource-options","title":"AWS \uB9AC\uC18C\uC2A4 \uC815\uBCF4 \uC218\uC9D1 \uC635\uC158","description":"AWS \uD658\uACBD\uC5D0\uC11C \uB9AC\uC18C\uC2A4 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uC5EC \uD1A0\uD3F4\uB85C\uC9C0 \uD654\uBA74\uC5D0 \uD45C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","keywords":["\uB124\uD2B8\uC6CC\uD06C \uC131\uB2A5 \uBAA8\uB2C8\uD130\uB9C1","\uC5D0\uC774\uC804\uD2B8","AWS","Amazon Linux"],"isTranslationMissing":false},"sidebar":"npmsidebar","previous":{"title":"\uC5D0\uC774\uC804\uD2B8 \uC124\uCE58","permalink":"/whatap-docs/npm/install-agent"},"next":{"title":"tagRule \uC124\uC815\uD558\uAE30","permalink":"/whatap-docs/npm/set-tagrule"}}'),c=s("85893"),r=s("50065");let i={id:"set-aws-resource-options",title:"AWS \uB9AC\uC18C\uC2A4 \uC815\uBCF4 \uC218\uC9D1 \uC635\uC158",description:"AWS \uD658\uACBD\uC5D0\uC11C \uB9AC\uC18C\uC2A4 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uC5EC \uD1A0\uD3F4\uB85C\uC9C0 \uD654\uBA74\uC5D0 \uD45C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",keywords:["\uB124\uD2B8\uC6CC\uD06C \uC131\uB2A5 \uBAA8\uB2C8\uD130\uB9C1","\uC5D0\uC774\uC804\uD2B8","AWS","Amazon Linux"],isTranslationMissing:!1},o=void 0,a={},l=[{value:"EC2 \uD658\uACBD\uC5D0\uC11C AWS \uB9AC\uC18C\uC2A4 \uAD8C\uD55C \uC124\uC815",id:"set-aws-resource-ec2",level:2},{value:"AWS IAM \uC124\uC815\uD558\uAE30",id:"aws-iam-\uC124\uC815\uD558\uAE30",level:3},{value:"EKS \uD658\uACBD\uC5D0\uC11C AWS \uB9AC\uC18C\uC2A4 \uAD8C\uD55C \uC124\uC815",id:"set-aws-resource-eks",level:2},{value:"AWS IAM \uC124\uC815\uD558\uAE30",id:"aws-iam-\uC124\uC815\uD558\uAE30-1",level:3},{value:"Service Account \uC124\uC815\uD558\uAE30",id:"service-account-\uC124\uC815\uD558\uAE30",level:3}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",section:"section",strong:"strong",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"AWS \uD658\uACBD\uC5D0\uC11C \uB124\uD2B8\uC6CC\uD06C \uC131\uB2A5 \uBAA8\uB2C8\uD130\uB9C1\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 \uAC01 \uB9AC\uC18C\uC2A4(LB \uB4F1)\uC5D0 \uC5F0\uACB0\uB41C EC2 \uB124\uD2B8\uC6CC\uD06C \uC778\uD130\uD398\uC774\uC2A4(ENI) \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uC5EC \uD1A0\uD3F4\uB85C\uC9C0\uC5D0 \uD45C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. AWS \uC694\uC18C\uC5D0 \uC5D0\uC774\uC804\uD2B8\uB97C \uC9C1\uC811 \uC124\uCE58\uD560 \uC218 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 \uC218\uC9D1\uB41C IP \uAE30\uC900\uC73C\uB85C \uC5F0\uAD00\uB41C ENI\uB97C \uD655\uC778\uD558\uC5EC \uD45C\uD604\uD569\uB2C8\uB2E4."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"Example",src:s(36558).Z+"",width:"800",height:"316"})}),"\n",(0,c.jsxs)(n.p,{children:["AWS\uC758 ELB\uB97C \uD1B5\uD574 \uB0B4\uBD80\uC5D0 \uD2B8\uB798\uD53D\uC774 \uC778\uAC00\uB418\uB294 \uACBD\uC6B0 \uADF8\uB9BC\uACFC \uAC19\uC774 ENI\uC5D0 \uD45C\uD604\uB41C \uC815\uBCF4\uB97C \uD1B5\uD574 \uD1A0\uD3F4\uB85C\uC9C0\uC5D0 \uD45C\uD604\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. AWS ENI\uC5D0 ",(0,c.jsx)(n.code,{children:"Description"})," \uD544\uB4DC\uB97C \uAE30\uC900\uC73C\uB85C \uD45C\uD604\uD569\uB2C8\uB2E4. \uB9CC\uC57D ",(0,c.jsx)(n.code,{children:"Description"})," \uD544\uB4DC\uC5D0 \uC544\uBB34\uB7F0 \uC815\uBCF4\uB97C \uB0A8\uAE30\uC9C0 \uC54A\uC740 \uACBD\uC6B0 ",(0,c.jsx)(n.code,{children:"NetworkInterfaceId"})," \uC18D\uC131\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4."]}),"\n",(0,c.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,c.jsx)(n.h2,{id:"set-aws-resource-ec2",children:"EC2 \uD658\uACBD\uC5D0\uC11C AWS \uB9AC\uC18C\uC2A4 \uAD8C\uD55C \uC124\uC815"}),(0,c.jsxs)(n.p,{children:["AWS EC2\uC5D0 ",(0,c.jsx)(n.strong,{children:"NPM"})," \uC5D0\uC774\uC804\uD2B8\uB97C \uC124\uCE58\uD560 \uACBD\uC6B0 IAM \uC124\uC815\uC744 \uD1B5\uD574 AWS\uC758 \uB9AC\uC18C\uC2A4 \uC815\uBCF4\uB97C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",children:"AWS \uC124\uC815 \uAC00\uC774\uB4DC"})})})]}),"\n",(0,c.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,c.jsx)(n.h3,{id:"aws-iam-\uC124\uC815\uD558\uAE30",children:"AWS IAM \uC124\uC815\uD558\uAE30"}),(0,c.jsxs)(n.p,{children:["AWS IAM \uC815\uCC45 \uC124\uC815 \uACFC\uC815\uC5D0\uC11C \uCD5C\uC18C \uAD8C\uD55C\uC744 \uC9C0\uC815\uD558\uB3C4\uB85D \uC694\uAD6C\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. ",(0,c.jsx)(n.strong,{children:"NPM"}),"\uC5D0\uC11C AWS \uB9AC\uC18C\uC2A4 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB824\uBA74 ",(0,c.jsx)(n.code,{children:"ec2:DescribeNetworkInterfaces"})," \uAD8C\uD55C\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."]}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n              //...\n              "ec2:DescribeNetworkInterfaces"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n'})}),(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["\uC815\uCC45 \uBC0F \uAD8C\uD55C\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,c.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#policy-syntax",children:"\uB2E4\uC74C \uB9C1\uD06C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]})})]}),"\n",(0,c.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,c.jsx)(n.h2,{id:"set-aws-resource-eks",children:"EKS \uD658\uACBD\uC5D0\uC11C AWS \uB9AC\uC18C\uC2A4 \uAD8C\uD55C \uC124\uC815"}),(0,c.jsxs)(n.p,{children:["AWS EKS\uC5D0\uC11C ",(0,c.jsx)(n.strong,{children:"NPM"})," \uC5D0\uC774\uC804\uD2B8\uB97C \uC124\uCE58\uD558\uB294 \uACBD\uC6B0 SeviceAccount\uB97C \uD1B5\uD574 AWS\uC758 \uB9AC\uC18C\uC2A4 \uC815\uBCF4\uB97C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html",children:"AWS \uC124\uC815 \uAC00\uC774\uB4DC"})})})]}),"\n",(0,c.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,c.jsx)(n.h3,{id:"aws-iam-\uC124\uC815\uD558\uAE30-1",children:"AWS IAM \uC124\uC815\uD558\uAE30"}),(0,c.jsxs)(n.p,{children:["AWS IAM \uC815\uCC45 \uC124\uC815 \uACFC\uC815\uC5D0\uC11C \uCD5C\uC18C \uAD8C\uD55C\uC744 \uC9C0\uC815\uD558\uB3C4\uB85D \uC694\uAD6C\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. ",(0,c.jsx)(n.strong,{children:"NPM"}),"\uC5D0\uC11C AWS \uB9AC\uC18C\uC2A4 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB824\uBA74 ",(0,c.jsx)(n.code,{children:"ec2:DescribeNetworkInterfaces"})," \uAD8C\uD55C\uC774 \uD544\uC694 \uD569\uB2C8\uB2E4."]}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n              //...\n              "ec2:DescribeNetworkInterfaces"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n'})}),(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["\uC815\uCC45 \uBC0F \uAD8C\uD55C\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,c.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#policy-syntax",children:"\uB2E4\uC74C \uB9C1\uD06C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]})})]}),"\n",(0,c.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,c.jsx)(n.h3,{id:"service-account-\uC124\uC815\uD558\uAE30",children:"Service Account \uC124\uC815\uD558\uAE30"}),(0,c.jsxs)(n.p,{children:["AWS EKS \uC124\uC815 \uACFC\uC815\uC5D0\uC11C IAM\uACFC \uCFE0\uBC84\uB124\uD2F0\uC2A4\uC758 Service Account\uB97C \uC5F0\uACB0\uD574\uC57C \uD558\uACE0, ",(0,c.jsx)(n.strong,{children:"NPM"}),"\uC5D0\uC11C AWS \uB9AC\uC18C\uC2A4 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB824\uBA74 IAM\uACFC NPM\uC758 Service Account\uB97C \uC5F0\uACB0\uD574\uC57C \uD569\uB2C8\uB2E4."]}),(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"NPM"}),"\uC5D0\uC11C\uB294 \uB2E4\uC74C\uC758 Service Account\uB97C \uC0AC\uC6A9\uD558\uC138\uC694."]}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:"namespace : whatap-npm-ns\nservice_account : whatap-npm\n"})}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",metastring:"title='example'",children:"kubectl annotate serviceaccount -n whatap-npm-ns whatap-npm eks.amazonaws.com/role-arn=arn:aws:iam::$account_id:role/$role\n"})})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},36558:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/npm-aws-resource-example-7283d5ee26552538c0cf9390ebac4d00.png"},50065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(67294);let c={},r=t.createContext(c);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);