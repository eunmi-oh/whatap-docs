"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["54185"],{48235:function(e,a,t){t.r(a),t.d(a,{metadata:()=>r,contentTitle:()=>i,default:()=>d,assets:()=>u,toc:()=>p,frontMatter:()=>c});var r=JSON.parse('{"id":"server/server-os/server-aws","title":"Elastic Beanstalk","description":"Elastic Beanstalk \uD658\uACBD\uC5D0\uC11C \uC640\uD0ED \uC11C\uBC84 \uBAA8\uB2C8\uD130\uB9C1 \uC5D0\uC774\uC804\uD2B8\uB97C \uC124\uCE58\uD558\uB294 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.","source":"@site/docs/server/server-os/sv-aws.mdx","sourceDirName":"server/server-os","slug":"/server/server-os/server-aws","permalink":"/whatap-docs/server/server-os/server-aws","draft":false,"unlisted":false,"editUrl":"undefined/docs/server/server-os/sv-aws.mdx","tags":[],"version":"current","frontMatter":{"id":"server-aws","title":"Elastic Beanstalk","description":"Elastic Beanstalk \uD658\uACBD\uC5D0\uC11C \uC640\uD0ED \uC11C\uBC84 \uBAA8\uB2C8\uD130\uB9C1 \uC5D0\uC774\uC804\uD2B8\uB97C \uC124\uCE58\uD558\uB294 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.","keywords":["Server","\uC124\uCE58\uD558\uAE30","Elastic Beanstalk","AWS"],"isTranslationMissing":false},"sidebar":"serverSidebar","previous":{"title":"\uC11C\uBC84 \uCEF4\uD4E8\uD130 \uC774\uC678\uC758 \uACBD\uC6B0","permalink":"/whatap-docs/server/server-os/server-other"},"next":{"title":"\uC124\uCE58 \uC810\uAC80 \uC0AC\uD56D","permalink":"/whatap-docs/server/install-check"}}'),n=t("85893"),s=t("50065"),o=t("47902"),l=t("5525");let c={id:"server-aws",title:"Elastic Beanstalk",description:"Elastic Beanstalk \uD658\uACBD\uC5D0\uC11C \uC640\uD0ED \uC11C\uBC84 \uBAA8\uB2C8\uD130\uB9C1 \uC5D0\uC774\uC804\uD2B8\uB97C \uC124\uCE58\uD558\uB294 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.",keywords:["Server","\uC124\uCE58\uD558\uAE30","Elastic Beanstalk","AWS"],isTranslationMissing:!1},i=void 0,u={},p=[];function h(e){let a={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Elastic Beanstalk"}),"\uB97C \uC774\uC6A9\uD574 \uBC30\uD3EC\uD560 \uACBD\uC6B0 \uC640\uD0ED \uC5D0\uC774\uC804\uD2B8\uB97C \uC801\uC6A9\uD558\uB294 \uBC29\uBC95\uC785\uB2C8\uB2E4."]}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Linux \uC124\uCE58 \uD658\uACBD\uC5D0 \uB530\uB77C \uB2E4\uC74C\uC758 \uB0B4\uC6A9\uC744 Elastic Beanstalk ",(0,n.jsx)(a.strong,{children:"\uC124\uCE58 \uC2A4\uD06C\uB9BD\uD2B8"}),"\uC5D0 \uCD94\uAC00\uD558\uC138\uC694."]}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"whatap.server.host"}),"\uC640 ",(0,n.jsx)(a.code,{children:"license"})," \uC989 ",(0,n.jsx)(a.strong,{children:"\uD504\uB85C\uC81D\uD2B8 \uC561\uC138\uC2A4 \uD0A4"}),"\uB294 \uC0AC\uC6A9\uC790\uC5D0 \uB9DE\uAC8C \uC785\uB825\uD569\uB2C8\uB2E4."]})}),"\n",(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(l.Z,{value:"du",label:"Debian / Ubuntu",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'wget http://repo.whatap.io/debian/release.gpg -O -|sudo apt-key add -\nwget http://repo.whatap.io/debian/whatap-repo_1.0_all.deb\nsudo dpkg -i whatap-repo_1.0_all.deb\nsudo apt-get update\nsudo apt-get install whatap-infra\necho "license={LICENSE_INFO}" |sudo tee /usr/whatap/infra/conf/whatap.conf\necho "whatap.server.host={HOST_IP}" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\necho "createdtime=`date +%s%N`" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\nsudo service whatap-infra restart\n'})})}),(0,n.jsx)(l.Z,{value:"co",label:"CentOS",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'sudo rpm --import http://repo.whatap.io/centos/release.gpg\nsudo rpm -Uvh http://repo.whatap.io/centos/5/noarch/whatap-repo-1.0-1.noarch.rpm\nsudo yum install whatap-infra\necho "license={LICENSE_INFO}" |sudo tee /usr/whatap/infra/conf/whatap.conf\necho "whatap.server.host={HOST_IP}" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\necho "createdtime=`date +%s%N`" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\nsudo service whatap-infra restart\n'})})}),(0,n.jsx)(l.Z,{value:"al",label:"Amazon Linux",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'sudo rpm --import http://repo.whatap.io/centos/release.gpg\necho "[whatap]" | sudo tee /etc/yum.repos.d/whatap.repo > /dev/null\necho "name=whatap packages for enterprise linux" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\necho "baseurl=http://repo.whatap.io/centos/latest/\\$basearch" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\necho "enabled=1" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\necho "gpgcheck=0" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\nsudo yum install whatap-infra\necho "license={LICENSE_INFO}" |sudo tee /usr/whatap/infra/conf/whatap.conf\necho "whatap.server.host={HOST_IP}" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\necho "createdtime=date +%s%N" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\nsudo service whatap-infra restart\n'})})})]}),"\n",(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(l.Z,{value:"suse",label:"SUSE",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'sudo rpm --import http://repo.whatap.io/suse/release.gpg\necho "[whatap]" | sudo tee /etc/zypp/repos.d/whatap.repo > /dev/null\necho "name=whatap packages for enterprise linux" | sudo tee -a /etc/zypp/repos.d/whatap.repo > /dev/null\necho "baseurl=http://repo.whatap.io/suse/12/x86_64" | sudo tee -a /etc/zypp/repos.d/whatap.repo > /dev/null\necho "enabled=1" | sudo tee -a /etc/zypp/repos.d/whatap.repo > /dev/null\necho "gpgcheck=1" | sudo tee -a /etc/zypp/repos.d/whatap.repo > /dev/null\nsudo zypper refresh\nsudo zypper install whatap-infra\necho "license={LICENSE_INFO}" |sudo tee /usr/whatap/infra/conf/whatap.conf\necho "whatap.server.host={HOST_IP}" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\necho "createdtime=`date +%s%N`" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\nsudo /etc/init.d/whatap-infra restart\n'})})}),(0,n.jsx)(l.Z,{value:"fb",label:"FreeBSD",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'wget http://repo.whatap.io/freebsd/10/whatap-infra.txz\npkg install whatap-infra.txz\necho "license={LICENSE_INFO}" |tee /usr/whatap/infra/conf/whatap.conf\necho "whatap.server.host={HOST_IP}" |tee -a /usr/whatap/infra/conf/whatap.conf\necho "createdtime=`date +%s%N`" |tee -a /usr/whatap/infra/conf/whatap.conf\nservice whatap_infra restart\n'})})})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["\uB2E4\uC74C ",(0,n.jsx)(a.strong,{children:"\uBA85\uB839\uC5B4"}),"\uB97C \uC218\uC815\uD558\uC138\uC694."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'echo "createdtime=date +%s%N" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n'})}),"\n",(0,n.jsx)(a.p,{children:"\uC124\uCE58 \uD6C4 \uC11C\uBC84 \uBAA8\uB2C8\uD130\uB9C1\uC744 Beanstalk\uC5D0 \uD3EC\uD568\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBC30\uD3EC \uC2DC \uC11C\uBC84 \uBAA8\uB2C8\uD130\uB9C1 \uC2E0\uADDC \uBAA9\uB85D\uC774 \uBC18\uBCF5\uC801\uC73C\uB85C \uC0DD\uC131\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,n.jsx)(a.p,{children:"\uC640\uD0ED \uC5D0\uC774\uC804\uD2B8 \uB0B4\uBD80 \uC544\uC774\uB514\uAC00 \uC704\uC758 \uBA85\uB839\uC774 \uC2E4\uD589\uB420 \uB54C\uB9C8\uB2E4 \uC0C8\uB85C \uBC1C\uAE09\uB418\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uCD94\uD6C4 \uBC30\uD3EC \uC2DC \uC2E0\uADDC \uBAA9\uB85D\uC774 \uCD94\uAC00\uB85C \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uB3C4\uB85D \uB2E4\uC74C\uACFC \uAC19\uC774 \uC218\uC815\uD558\uC138\uC694."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'echo "createdtime=12345678" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n'})}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5525:function(e,a,t){t.d(a,{Z:()=>o});var r=t("85893");t("67294");var n=t("67026");let s="tabItem_Ymn6";function o(e){let{children:a,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s,o),hidden:t,children:a})}},47902:function(e,a,t){t.d(a,{Z:()=>g});var r=t("85893"),n=t("67294"),s=t("67026"),o=t("69599"),l=t("16550"),c=t("32000"),i=t("4520"),u=t("38341"),p=t("76009");function h(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function d(e){let{value:a,tabValues:t}=e;return t.some(e=>e.value===a)}var f=t("7227");let w="tabList__CuJ",v="tabItem_LNqP";function m(e){let{className:a,block:t,selectedValue:n,selectValue:l,tabValues:c}=e,i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),p=e=>{let a=e.currentTarget,t=c[i.indexOf(a)].value;t!==n&&(u(a),l(t))},h=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{let t=i.indexOf(e.currentTarget)+1;a=i[t]??i[0];break}case"ArrowLeft":{let t=i.indexOf(e.currentTarget)-1;a=i[t]??i[i.length-1]}}a?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},a),children:c.map(e=>{let{value:a,label:t,attributes:o}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>i.push(e),onKeyDown:h,onClick:p,...o,className:(0,s.Z)("tabs__item",v,o?.className,{"tabs__item--active":n===a}),children:t??a},a)})})}function x(e){let{lazy:a,children:t,selectedValue:o}=e,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){let e=l.find(e=>e.props.value===o);return e?(0,n.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==o}))})}function b(e){let a=function(e){let{defaultValue:a,queryString:t=!1,groupId:r}=e,s=function(e){let{values:a,children:t}=e;return(0,n.useMemo)(()=>{let e=a??h(t).map(e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}});return!function(e){let a=(0,u.lx)(e,(e,a)=>e.value===a.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[a,t])}(e),[o,f]=(0,n.useState)(()=>(function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:a,tabValues:s})),[w,v]=function(e){let{queryString:a=!1,groupId:t}=e,r=(0,l.k6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t}),o=(0,i._X)(s);return[o,(0,n.useCallback)(e=>{if(!s)return;let a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})},[s,r])]}({queryString:t,groupId:r}),[m,x]=function(e){var a;let{groupId:t}=e;let r=(a=t)?`docusaurus.tab.${a}`:null,[s,o]=(0,p.Nk)(r);return[s,(0,n.useCallback)(e=>{if(!!r)o.set(e)},[r,o])]}({groupId:r}),b=(()=>{let e=w??m;return d({value:e,tabValues:s})?e:null})();return(0,c.Z)(()=>{b&&f(b)},[b]),{selectedValue:o,selectValue:(0,n.useCallback)(e=>{if(!d({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);f(e),v(e),x(e)},[v,x,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container",w),children:[(0,r.jsx)(m,{...a,...e}),(0,r.jsx)(x,{...a,...e})]})}function g(e){let a=(0,f.Z)();return(0,r.jsx)(b,{...e,children:h(e.children)},String(a))}},50065:function(e,a,t){t.d(a,{Z:function(){return l},a:function(){return o}});var r=t(67294);let n={},s=r.createContext(n);function o(e){let a=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);