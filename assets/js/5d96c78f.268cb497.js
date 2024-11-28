"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["48142"],{6859:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>d,assets:()=>l,toc:()=>p,frontMatter:()=>o});var t=JSON.parse('{"id":"php/php-os/aws-eb","title":"AWS Elastic beanstalk","description":"AWS Elastic beanstalk","source":"@site/docs/php/php-os/aws-eb.mdx","sourceDirName":"php/php-os","slug":"/php/php-os/aws-eb","permalink":"/whatap-docs/php/php-os/aws-eb","draft":false,"unlisted":false,"editUrl":"undefined/docs/php/php-os/aws-eb.mdx","tags":[],"version":"current","frontMatter":{"id":"aws-eb","title":"AWS Elastic beanstalk","description":"AWS Elastic beanstalk","keywords":["AWS Elastic beanstalk","PHP"],"isTranslationMissing":false},"sidebar":"phpSidebar","previous":{"title":"Google Cloud App Engine","permalink":"/whatap-docs/php/php-os/gcae"},"next":{"title":"Docker \uD658\uACBD \uC124\uCE58","permalink":"/whatap-docs/php/install-agent-docker"}}'),r=s("85893"),a=s("50065");let o={id:"aws-eb",title:"AWS Elastic beanstalk",description:"AWS Elastic beanstalk",keywords:["AWS Elastic beanstalk","PHP"],isTranslationMissing:!1},i=void 0,l={},p=[];function c(e){let n={admonition:"admonition",code:"code",em:"em",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Elastic Beanstalk Configuration files"}),"(",(0,r.jsx)(n.em,{children:".ebextensions"}),")\uB97C \uD1B5\uD574\uC11C \uC124\uCE58\uD569\uB2C8\uB2E4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:".ebextensions"})," \uB514\uB809\uD130\uB9AC\uC5D0 \uC544\uB798 ",(0,r.jsx)(n.em,{children:"config"})," \uD30C\uC77C\uC744 \uCD94\uAC00\uD55C \uD6C4 \uC2E0\uADDC \uBC84\uC804\uC744 \uBC30\uD3EC\uD558\uC138\uC694. \uADF8\uB9AC\uACE0 ",(0,r.jsx)(n.code,{children:"commands"})," \uBA85\uB839\uC5B4\uB97C \uC2E4\uD589\uD558\uC138\uC694."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\uC640\uD0ED ",(0,r.jsx)(n.strong,{children:"\uB9AC\uD3EC\uC9C0\uD1A0\uB9AC"}),"\uB97C \uB4F1\uB85D\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\uD328\uD0A4\uC9C0"}),"\uB97C \uC124\uCE58\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"install.sh"})," ",(0,r.jsx)(n.strong,{children:"\uC124\uC815 \uC2A4\uD06C\uB9BD\uD2B8"}),"\uB97C \uD1B5\uD574\uC11C ",(0,r.jsx)(n.strong,{children:"PHP \uD655\uC7A5 \uBAA8\uB4C8"}),"\uC744 \uC124\uC815\uD558\uC138\uC694."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:"title=SH",children:'$ vi 01-WhaTap_install_repository_php.config\n\ncommands:\n  01_Install_whatap_repository:\n    command: sudo rpm --import http://repo.whatap.io/centos/release.gpg\n    ignoreErrors: true\n  02_Install_whatap_repository:\n    command: echo "[whatap]" | sudo tee /etc/yum.repos.d/whatap.repo > /dev/null\n    ignoreErrors: true\n  03_Install_whatap_repository:\n    command: echo "name=whatap packages for enterprise linux" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n    ignoreErrors: true\n  04_Install_whatap_repository:\n    command: echo "baseurl=http://repo.whatap.io/centos/latest/\\$basearch" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n    ignoreErrors: true\n  05_Install_whatap_repository:\n    command: echo "enabled=1" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n    ignoreErrors: true\n  06_Install_whatap_repository:\n    command: echo "gpgcheck=0" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n    ignoreErrors: true\n  07_Install_whatap_php:\n    command: sudo yum install -y whatap-php\n    ignoreErrors: true\n  08_Install_whatap_php_install.sh:\n    command: (echo "[\uC561\uC138\uC2A4 \uD0A4 \uC9C0\uC815]"; echo "[\uC11C\uBC84 IP \uC9C0\uC815(a.a.a.a/b.b.b.b)")| sudo /usr/whatap/php/install.sh\n    ignoreErrors: true\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\uC561\uC138\uC2A4 \uD0A4"}),"\uC640 ",(0,r.jsx)(n.strong,{children:"\uC11C\uBC84 IP"}),"\uB294 ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC"})})," > ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uC5D0\uC774\uC804\uD2B8 \uC124\uCE58"})})," \uD398\uC774\uC9C0\uC5D0\uC11C \uBC1C\uAE09\uBC1B\uACE0 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Beanstalk\uC5D0 \uC0C8\uB85C\uC6B4 \uBC84\uC804\uC744 \uBC30\uD3EC\uD558\uC138\uC694. PHP \uBAA8\uB2C8\uD130\uB9C1 \uC5D0\uC774\uC804\uD2B8\uAC00 \uC124\uCE58\uB429\uB2C8\uB2E4."}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var t=s(67294);let r={},a=t.createContext(r);function o(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);