"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["87179"],{22629:function(e,n,o){o.r(n),o.d(n,{metadata:()=>s,contentTitle:()=>t,default:()=>d,assets:()=>i,toc:()=>l,frontMatter:()=>r});var s=JSON.parse('{"id":"php/php-os/gcae","title":"Google Cloud App Engine","description":"Google Cloud App Engine","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/php/php-os/gcae.mdx","sourceDirName":"php/php-os","slug":"/php/php-os/gcae","permalink":"/ja/php/php-os/gcae","draft":false,"unlisted":false,"editUrl":"undefined/docs/php/php-os/gcae.mdx","tags":[],"version":"current","frontMatter":{"id":"gcae","title":"Google Cloud App Engine","description":"Google Cloud App Engine","keywords":["Google Cloud App Engine","PHP"],"isTranslationMissing":false},"sidebar":"phpSidebar","previous":{"title":"Alpine Linux","permalink":"/ja/php/php-os/alpine-linux"},"next":{"title":"AWS Elastic beanstalk","permalink":"/ja/php/php-os/aws-eb"}}'),p=o("85893"),c=o("50065");let r={id:"gcae",title:"Google Cloud App Engine",description:"Google Cloud App Engine",keywords:["Google Cloud App Engine","PHP"],isTranslationMissing:!1},t=void 0,i={},l=[{value:"Custom Docker",id:"custom-docker",level:2},{value:"PHP\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",id:"php\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",level:2},{value:"\u30D5\u30A1\u30A4\u30A2\u30A6\u30A9\u30FC\u30EB\u30EB\u30FC\u30EB\u306E\u8FFD\u52A0",id:"\u30D5\u30A1\u30A4\u30A2\u30A6\u30A9\u30FC\u30EB\u30EB\u30FC\u30EB\u306E\u8FFD\u52A0",level:2},{value:"\u914D\u5E03\u304A\u3088\u3073\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u78BA\u8A8D",id:"\u914D\u5E03\u304A\u3088\u3073\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u78BA\u8A8D",level:2}];function a(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",...(0,c.a)(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,p.jsx)(n.h2,{id:"custom-docker",children:"Custom Docker"}),(0,p.jsx)(n.p,{children:"GoogleApp\u30A8\u30F3\u30B8\u30F3(Google Cloud App Engine)\u306BPHP\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u306B\u306F\u3001Custom docker\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),(0,p.jsxs)(n.p,{children:["GoogleApp\u30A8\u30F3\u30B8\u30F3PHP\u306E",(0,p.jsx)(n.strong,{children:"\u57FA\u672C\u578B\u306F\u3001PHP\u62E1\u5F35\u578B\u30E2\u30B8\u30E5\u30FC\u30EB\u304A\u3088\u3073\u30B5\u30FC\u30D3\u30B9\u30C7\u30FC\u30E2\u30F3\u3092\u5B9F\u884C\u3067\u304D\u307E\u305B\u3093"}),"\u3002Docker Container\u7D4C\u7531\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),(0,p.jsxs)(n.p,{children:["GoogleApp\u30A8\u30F3\u30B8\u30F3\u306E\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3067\u3042\u308B",(0,p.jsx)(n.em,{children:"app.yaml"}),"\u30D5\u30A1\u30A4\u30EB\u306B",(0,p.jsx)(n.code,{children:"flex"}),"\u74B0\u5883\u3001",(0,p.jsx)(n.code,{children:"custom"}),"\u30E9\u30F3\u30BF\u30A4\u30E0\u3092\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-yaml",metastring:"title=SH",children:"$ vi app.yaml\nenv: flex\nruntime: custom\n"})}),(0,p.jsxs)(n.p,{children:["Custom Docker\u3067\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001",(0,p.jsx)(n.code,{children:"flex"}),"\u74B0\u5883\u3068",(0,p.jsx)(n.code,{children:"custom"}),"\u30E9\u30F3\u30BF\u30A4\u30E0\u3067\u8A2D\u5B9A\u3055\u308C\u305F",(0,p.jsx)(n.em,{children:"app.yaml"}),"\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u3058\u5834\u6240\u306B",(0,p.jsx)(n.em,{children:"Dockerfile"}),"\u3092\u4F5C\u6210\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002GoogleApp\u30A8\u30F3\u30B8\u30F3\u306E\u57FA\u672Cphp Docker\u753B\u50CF\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-docker",metastring:"title=Docker",children:"# google-appengine php php56, php70, php71\nFROM gcr.io/google-appengine/php56\n"})})]}),"\n",(0,p.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,p.jsx)(n.h2,{id:"php\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",children:"PHP\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"}),(0,p.jsx)(n.p,{children:"PHP\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),(0,p.jsxs)(n.ol,{children:["\n",(0,p.jsxs)(n.li,{children:["\n",(0,p.jsx)(n.p,{children:"\u30E9\u30A4\u30D6\u30E9\u30EA\u30FC(wget)\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-docker",children:"RUN apt-get install wget -y\n"})}),"\n"]}),"\n",(0,p.jsxs)(n.li,{children:["\n",(0,p.jsx)(n.p,{children:"php-fpm\u5B9F\u884C\u30B3\u30DE\u30F3\u30C9\u306E\u30EA\u30F3\u30AF\u3092\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-docker",children:"RUN ln -s /opt/php/sbin/php-fpm /usr/bin/php-fpm\n"})}),"\n"]}),"\n",(0,p.jsxs)(n.li,{children:["\n",(0,p.jsx)(n.p,{children:"WhaTap\u30EA\u30DD\u30B8\u30C8\u30EA\u304A\u3088\u3073\u3001Whatap-php\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-docker",children:"RUN wget http://repo.whatap.io/debian/release.gpg -O -| apt-key add -\nRUN wget http://repo.whatap.io/debian/whatap-repo_1.0_all.deb\nRUN dpkg -i whatap-repo_1.0_all.deb\nRUN apt-get update\nRUN apt-get install whatap-php\n"})}),"\n"]}),"\n",(0,p.jsxs)(n.li,{children:["\n",(0,p.jsx)(n.p,{children:"PHP\u62E1\u5F35\u30E2\u30B8\u30E5\u30FC\u30EB\u304A\u3088\u3073whatap-php\u30B5\u30FC\u30D3\u30B9\u3092\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-docker",children:'#RUN (echo "[\u767A\u884C\u3055\u308C\u305F\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC]"; echo "[\u767A\u884C\u3055\u308C\u305F\u30B5\u30FC\u30D0\u30FCIP]")|/usr/whatap/php/install.sh\nRUN (echo "xxxxxxxx"; echo "1.1.1.1/2.2.2.2")|/usr/whatap/php/install.sh\n'})}),"\n",(0,p.jsx)(n.admonition,{type:"note",children:(0,p.jsxs)(n.p,{children:["PHP\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210\u5F8C\u3001",(0,p.jsx)(n.strong,{children:"\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC"}),"\u3068\u30B5\u30FC\u30D0\u30FCIP\u304C\u767A\u884C\u3055\u308C\u307E\u3059\u3002_/_\u3092\u533A\u5207\u308A\u6587\u5B57\u3068\u3057\u3066\u8907\u6570\u306EIP\u767A\u884C\u304C\u53EF\u80FD\u3067\u3059\u3002"]})}),"\n"]}),"\n",(0,p.jsxs)(n.li,{children:["\n",(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.code,{children:"supervisor"}),"\u3092\u4F7F\u7528\u3057\u3066whatap-php\u30B5\u30FC\u30D3\u30B9\u3092\u5B9F\u884C\u3057\u3066\u304F\u305F\u3055\u3044\u3002"]}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-docker",children:'RUN echo "[program:whatap-php]" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "command = /etc/init.d/whatap-php start" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "stdout_logfile = /dev/stdout" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "stdout_logfile_maxbytes=0" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "stderr_logfile = /dev/stderr" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "stderr_logfile_maxbytes=0" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "user = root" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "autostart = true" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "autorestart = true" >> /etc/supervisor/conf.d/whatap.conf\nRUN echo "priority = 10" >> /etc/supervisor/conf.d/whatap.conf\n'})}),"\n"]}),"\n"]})]}),"\n",(0,p.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,p.jsx)(n.h2,{id:"\u30D5\u30A1\u30A4\u30A2\u30A6\u30A9\u30FC\u30EB\u30EB\u30FC\u30EB\u306E\u8FFD\u52A0",children:"\u30D5\u30A1\u30A4\u30A2\u30A6\u30A9\u30FC\u30EB\u30EB\u30FC\u30EB\u306E\u8FFD\u52A0"}),(0,p.jsx)(n.p,{children:"GoogleApp\u30A8\u30F3\u30B8\u30F3\u3067\u4F7F\u7528\u3059\u308B\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u30D5\u30A1\u30A4\u30A2\u30A6\u30A9\u30FC\u30EB\u30EB\u30FC\u30EB\u3092\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u767A\u884C\u3055\u308C\u305F\u30B5\u30FC\u30D0\u30FCIP\u306B\u5BFE\u3057\u30666600\u756A\u30DD\u30FC\u30C8\u3092\u7D4C\u7531\u3057\u3066TCP\u9001\u4FE1\u3092\u8A31\u53EF\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"})]}),"\n",(0,p.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,p.jsx)(n.h2,{id:"\u914D\u5E03\u304A\u3088\u3073\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u78BA\u8A8D",children:"\u914D\u5E03\u304A\u3088\u3073\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u78BA\u8A8D"}),(0,p.jsxs)(n.p,{children:["Google Cloud SDK\u3092\u4F7F\u7528\u3057\u3066\u8A2D\u5B9A\u3055\u308C\u305F",(0,p.jsx)(n.em,{children:"app.yaml"}),"\u30D5\u30A1\u30A4\u30EB\u3068",(0,p.jsx)(n.em,{children:"Dockerfile"}),"\u3092\u30C7\u30D7\u30ED\u30A4\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-bash",metastring:"title=SH",children:"$ gcloud app deploy\n"})}),(0,p.jsx)(n.p,{children:"Google\u30AF\u30E9\u30A6\u30C9\u30B3\u30F3\u30BD\u30FC\u30EB\u304B\u3089\u30A2\u30D7\u30EA\u30A8\u30F3\u30B8\u30F3\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"})]})]})}function d(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(a,{...e})}):a(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return r}});var s=o(67294);let p={},c=s.createContext(p);function r(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(p):e.components||p:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);