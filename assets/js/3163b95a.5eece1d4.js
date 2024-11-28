"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["4779"],{27033:function(e,n,s){s.r(n),s.d(n,{metadata:()=>o,contentTitle:()=>r,default:()=>d,assets:()=>i,toc:()=>a,frontMatter:()=>t});var o=JSON.parse('{"id":"php/php-os/gcae","title":"Google Cloud App Engine","description":"Google Cloud App Engine","source":"@site/docs/php/php-os/gcae.mdx","sourceDirName":"php/php-os","slug":"/php/php-os/gcae","permalink":"/whatap-docs/php/php-os/gcae","draft":false,"unlisted":false,"editUrl":"undefined/docs/php/php-os/gcae.mdx","tags":[],"version":"current","frontMatter":{"id":"gcae","title":"Google Cloud App Engine","description":"Google Cloud App Engine","keywords":["Google Cloud App Engine","PHP"],"isTranslationMissing":false},"sidebar":"phpSidebar","previous":{"title":"Alpine Linux","permalink":"/whatap-docs/php/php-os/alpine-linux"},"next":{"title":"AWS Elastic beanstalk","permalink":"/whatap-docs/php/php-os/aws-eb"}}'),p=s("85893"),c=s("50065");let t={id:"gcae",title:"Google Cloud App Engine",description:"Google Cloud App Engine",keywords:["Google Cloud App Engine","PHP"],isTranslationMissing:!1},r=void 0,i={},a=[{value:"Custom Docker",id:"custom-docker",level:2},{value:"PHP \uBAA8\uB2C8\uD130\uB9C1 \uC5D0\uC774\uC804\uD2B8 \uC124\uCE58",id:"php-\uBAA8\uB2C8\uD130\uB9C1-\uC5D0\uC774\uC804\uD2B8-\uC124\uCE58",level:2},{value:"\uBC29\uD654\uBCBD \uADDC\uCE59 \uCD94\uAC00",id:"\uBC29\uD654\uBCBD-\uADDC\uCE59-\uCD94\uAC00",level:2},{value:"\uBC30\uD3EC \uBC0F \uC778\uC2A4\uD134\uC2A4 \uD655\uC778",id:"\uBC30\uD3EC-\uBC0F-\uC778\uC2A4\uD134\uC2A4-\uD655\uC778",level:2}];function l(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",...(0,c.a)(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,p.jsx)(n.h2,{id:"custom-docker",children:"Custom Docker"}),(0,p.jsx)(n.p,{children:"\uAD6C\uAE00 \uC571 \uC5D4\uC9C4(Google Cloud App Engine)\uC5D0 PHP \uBAA8\uB2C8\uD130\uB9C1 \uC5D0\uC774\uC804\uD2B8\uB97C \uC124\uCE58\uD558\uAE30 \uC704\uD574\uC11C\uB294 Custom docker\uB97C \uC774\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4."}),(0,p.jsxs)(n.p,{children:["\uAD6C\uAE00 \uC571 \uC5D4\uC9C4 PHP\uC758 ",(0,p.jsx)(n.strong,{children:"\uAE30\uBCF8\uD615\uC740 PHP \uD655\uC7A5\uD615 \uBAA8\uB4C8 \uBC0F \uC11C\uBE44\uC2A4 \uB370\uBAAC\uC744 \uC2E4\uD589\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"}),". Docker Container\uB97C \uD1B5\uD574 \uC124\uCE58\uD558\uC138\uC694."]}),(0,p.jsxs)(n.p,{children:["\uAD6C\uAE00 \uC571 \uC5D4\uC9C4\uC758 \uC124\uC815 \uD30C\uC77C\uC778 ",(0,p.jsx)(n.em,{children:"app.yaml"})," \uD30C\uC77C\uC5D0 ",(0,p.jsx)(n.code,{children:"flex"})," \uD658\uACBD, ",(0,p.jsx)(n.code,{children:"custom"})," \uB7F0\uD0C0\uC784\uC73C\uB85C \uC124\uC815\uD558\uC138\uC694."]}),(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-yaml",metastring:"title=SH",children:"$ vi app.yaml\nenv: flex\nruntime: custom\n"})}),(0,p.jsxs)(n.p,{children:["Custom Docker\uB85C \uC2E4\uD589\uD558\uAE30 \uC704\uD574\uC11C\uB294 ",(0,p.jsx)(n.code,{children:"flex"})," \uD658\uACBD\uACFC ",(0,p.jsx)(n.code,{children:"custom"})," \uB7F0\uD0C0\uC784\uC73C\uB85C \uC124\uC815\uB41C ",(0,p.jsx)(n.em,{children:"app.yaml"})," \uD30C\uC77C\uACFC \uB3D9\uC77C\uD55C \uC704\uCE58\uC5D0 ",(0,p.jsx)(n.em,{children:"Dockerfile"}),"\uC744 \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uAD6C\uAE00 \uC571 \uC5D4\uC9C4\uC758 \uAE30\uBCF8 php Docker \uC774\uBBF8\uC9C0\uB97C \uCC38\uC870\uD558\uC138\uC694."]}),(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-docker",metastring:"title=Docker",children:"# google-appengine php php56, php70, php71\nFROM gcr.io/google-appengine/php56\n"})})]}),"\n",(0,p.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,p.jsx)(n.h2,{id:"php-\uBAA8\uB2C8\uD130\uB9C1-\uC5D0\uC774\uC804\uD2B8-\uC124\uCE58",children:"PHP \uBAA8\uB2C8\uD130\uB9C1 \uC5D0\uC774\uC804\uD2B8 \uC124\uCE58"}),(0,p.jsx)(n.p,{children:"PHP \uBAA8\uB2C8\uD130\uB9C1 \uC5D0\uC774\uC804\uD2B8\uB97C \uC124\uCE58\uD558\uC138\uC694."}),(0,p.jsxs)(n.ol,{children:["\n",(0,p.jsxs)(n.li,{children:["\n",(0,p.jsx)(n.p,{children:"\uB77C\uC774\uBE0C\uB7EC\uB9AC(wget)\uB97C \uC124\uCE58\uD558\uC138\uC694."}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-docker",children:"RUN apt-get install wget -y\n"})}),"\n"]}),"\n",(0,p.jsxs)(n.li,{children:["\n",(0,p.jsx)(n.p,{children:"php-fpm \uC2E4\uD589 \uBA85\uB839\uC5B4 \uB9C1\uD06C\uB97C \uC0DD\uC131\uD558\uC138\uC694."}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-docker",children:"RUN ln -s /opt/php/sbin/php-fpm /usr/bin/php-fpm\n"})}),"\n"]}),"\n",(0,p.jsxs)(n.li,{children:["\n",(0,p.jsx)(n.p,{children:"whatap \uB9AC\uD3EC\uC9C0\uD1A0\uB9AC \uBC0F whatap-php \uD328\uD0A4\uC9C0\uB97C \uC124\uCE58\uD558\uC138\uC694."}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-docker",children:"RUN wget http://repo.whatap.io/debian/release.gpg -O -| apt-key add -\nRUN wget http://repo.whatap.io/debian/whatap-repo_1.0_all.deb\nRUN dpkg -i whatap-repo_1.0_all.deb\nRUN apt-get update\nRUN apt-get install whatap-php\n"})}),"\n"]}),"\n",(0,p.jsxs)(n.li,{children:["\n",(0,p.jsx)(n.p,{children:"PHP \uD655\uC7A5 \uBAA8\uB4C8 \uBC0F whatap-php \uC11C\uBE44\uC2A4\uB97C \uC124\uC815\uD558\uC138\uC694."}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-docker",children:'#RUN (echo "[ \uBC1C\uAE09\uB41C \uC561\uC138\uC2A4 \uD0A4 ]"; echo "[ \uBC1C\uAE09\uB41C \uC11C\uBC84 IP ]")|/usr/whatap/php/install.sh\nRUN (echo "xxxxxxxx"; echo "1.1.1.1/2.2.2.2")|/usr/whatap/php/install.sh\n'})}),"\n",(0,p.jsx)(n.admonition,{type:"note",children:(0,p.jsxs)(n.p,{children:["PHP \uBAA8\uB2C8\uD130\uB9C1 \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131 \uD6C4 ",(0,p.jsx)(n.strong,{children:"\uC561\uC138\uC2A4 \uD0A4"}),"\uC640 \uC11C\uBC84 IP\uAC00 \uBC1C\uAE09\uB429\uB2C8\uB2E4. ",(0,p.jsx)(n.em,{children:"/"})," \uAD6C\uBD84\uC790\uB85C \uC5EC\uB7EC \uAC1C\uC758 IP \uBC1C\uAE09\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."]})}),"\n"]}),"\n",(0,p.jsxs)(n.li,{children:["\n",(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.code,{children:"supervisor"}),"\uB97C \uD1B5\uD574 whatap-php \uC11C\uBE44\uC2A4\uB97C \uC2E4\uD589\uD558\uC138\uC694."]}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-docker",children:'RUN echo "[program:whatap-php]" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "command = /etc/init.d/whatap-php start" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "stdout_logfile = /dev/stdout" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "stdout_logfile_maxbytes=0" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "stderr_logfile = /dev/stderr" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "stderr_logfile_maxbytes=0" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "user = root" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "autostart = true" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "autorestart = true" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "priority = 10" >> /etc/supervisor/conf.d/whatap.conf\n'})}),"\n"]}),"\n"]})]}),"\n",(0,p.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,p.jsx)(n.h2,{id:"\uBC29\uD654\uBCBD-\uADDC\uCE59-\uCD94\uAC00",children:"\uBC29\uD654\uBCBD \uADDC\uCE59 \uCD94\uAC00"}),(0,p.jsx)(n.p,{children:"\uAD6C\uAE00 \uC571 \uC5D4\uC9C4\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uB124\uD2B8\uC6CC\uD06C\uB97C \uB300\uC0C1\uC73C\uB85C \uBC29\uD654\uBCBD \uADDC\uCE59\uC744 \uCD94\uAC00\uD558\uC138\uC694. \uBC1C\uAE09\uBC1B\uC740 \uC11C\uBC84 IP\uC5D0 \uB300\uD574 6600 \uD3EC\uD2B8\uB97C \uD1B5\uD55C TCP \uC1A1\uC2E0\uC744 \uD5C8\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4."})]}),"\n",(0,p.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,p.jsx)(n.h2,{id:"\uBC30\uD3EC-\uBC0F-\uC778\uC2A4\uD134\uC2A4-\uD655\uC778",children:"\uBC30\uD3EC \uBC0F \uC778\uC2A4\uD134\uC2A4 \uD655\uC778"}),(0,p.jsxs)(n.p,{children:["Google Cloud SDK\uB97C \uD1B5\uD574\uC11C \uC124\uC815\uB41C ",(0,p.jsx)(n.em,{children:"app.yaml"})," \uD30C\uC77C\uACFC ",(0,p.jsx)(n.em,{children:"Dockerfile"})," \uC744 \uBC30\uD3EC\uD558\uC138\uC694."]}),(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-bash",metastring:"title=SH",children:"$ gcloud app deploy\n"})}),(0,p.jsx)(n.p,{children:"\uAD6C\uAE00 \uD074\uB77C\uC6B0\uB4DC \uCF58\uC194\uC5D0\uC11C \uC571 \uC5D4\uC9C4\uC758 \uC0DD\uC131\uB41C \uC778\uC2A4\uD134\uC2A4\uB97C \uD655\uC778\uD558\uC138\uC694."})]})]})}function d(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(l,{...e})}):l(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return t}});var o=s(67294);let p={},c=o.createContext(p);function t(e){let n=o.useContext(c);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(p):e.components||p:t(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);