"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["32599"],{6866:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>h,default:()=>g,assets:()=>p,toc:()=>m,frontMatter:()=>u});var i=JSON.parse('{"id":"altibase/troubleshooting","title":"Troubleshooting","description":"You can check the problems that may occur during database agent installation.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/altibase/troubleshooting.mdx","sourceDirName":"altibase","slug":"/altibase/troubleshooting","permalink":"/en/altibase/troubleshooting","draft":false,"unlisted":false,"editUrl":"undefined/docs/altibase/troubleshooting.mdx","tags":[],"version":"current","frontMatter":{"id":"troubleshooting","title":"Troubleshooting","description":"You can check the problems that may occur during database agent installation.","keywords":["Altibase","DATABASE","Troubleshooting","Agent"],"isTranslationMissing":false},"sidebar":"altibaseSidebar","previous":{"title":"Installation checking items","permalink":"/en/altibase/after-install-agent"},"next":{"title":"Configuration","permalink":"/en/altibase/agent-settings"}}'),o=t("85893"),s=t("50065"),r=t("1746"),a=t("53898"),l=t("83831"),c=t("9307"),d=t("23896");let u={id:"troubleshooting",title:"Troubleshooting",description:"You can check the problems that may occur during database agent installation.",keywords:["Altibase","DATABASE","Troubleshooting","Agent"],isTranslationMissing:!1},h=void 0,p={},m=[...r.d$,...a.d$,...l.d$,{value:"Constraints",id:"constraints",level:2},...c.d$,...d.d$];function f(e){let n={h2:"h2",p:"p",section:"section",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.ZP,{product:"Altibase"}),"\n",(0,o.jsx)(n.p,{children:"Check for possible problems upon database agent installation."}),"\n","\n",(0,o.jsx)(a.ZP,{}),"\n","\n",(0,o.jsx)(l.ZP,{}),"\n",(0,o.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,o.jsx)(n.h2,{id:"constraints",children:"Constraints"}),(0,o.jsx)(c.ZP,{}),(0,o.jsx)(d.ZP,{})]})]})}function g(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},23896:function(e,n,t){t.d(n,{ZP:function(){return a},d$:function(){return s}});var i=t(85893),o=t(50065);let s=[{value:"Duplicate agent names (ONAME) impossible to be used",id:"duplicate-agent-names-oname-impossible-to-be-used",level:3}];function r(e){let n={a:"a",h3:"h3",li:"li",p:"p",section:"section",ul:"ul",...(0,o.a)(),...e.components},{InDoc:t,Xclude:s}=n;return!t&&l("InDoc",!0),!s&&l("Xclude",!0),(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"duplicate-agent-names-oname-impossible-to-be-used",children:"Duplicate agent names (ONAME) impossible to be used"}),(0,i.jsx)(n.p,{children:"WhaTap DBX monitoring uses the agent's IP address and port to identify the agent. If the database server to be monitored in the user environment uses the same IP and port, the WhaTap server cannot identify the server instance."}),(0,i.jsx)(s,{product:"oracle-pro",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the server instance is not dynamically expanded, you can bypass it by manually setting a name for database identification by seeing ",(0,i.jsx)(n.a,{href:"agent-dbx-settings#naming",children:"the following"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the databases to be monitored use internal addresses or duplicate IPs due to network virtualization, use separate database naming patterns by seeing ",(0,i.jsx)(n.a,{href:"agent-dbx-settings#naming",children:"the following"}),"."]}),"\n"]}),"\n"]})}),(0,i.jsx)(t,{product:"oracle-pro",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the server instance is not dynamically expanded, you can bypass it by manually setting a name for database identification by seeing ",(0,i.jsx)(n.a,{href:"agent-settings#naming",children:"the following"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the databases to be monitored use internal addresses or duplicate IPs due to network virtualization, use separate database naming patterns by seeing ",(0,i.jsx)(n.a,{href:"agent-settings#naming",children:"the following"}),"."]}),"\n"]}),"\n"]})})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}function l(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},53898:function(e,n,t){t.d(n,{ZP:function(){return a},d$:function(){return s}});var i=t(85893),o=t(50065);let s=[{value:"Firewall configuration checking",id:"firewall-configuration-checking",level:2}];function r(e){let n={h2:"h2",p:"p",section:"section",...(0,o.a)(),...e.components};return(0,i.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,i.jsx)(n.h2,{id:"firewall-configuration-checking",children:"Firewall configuration checking"}),(0,i.jsx)(n.p,{children:"Unblock your firewall. Monitoring data cannot be sent to the server if the TCP outbound firewall is set for the WhaTap server."})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},83831:function(e,n,t){t.d(n,{ZP:function(){return a},d$:function(){return s}});var i=t(85893),o=t(50065);let s=[{value:"How to check the firewall",id:"how-to-check-the-firewall",level:3}];function r(e){let n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",section:"section",...(0,o.a)(),...e.components},{Cmdname:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Cmdname",!0),(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"how-to-check-the-firewall",children:"How to check the firewall"}),(0,i.jsxs)(n.p,{children:["It is normal only when the following connection-related information appears after executing the ",(0,i.jsx)(n.code,{children:"telnet"})," command. (",(0,i.jsx)(n.code,{children:"telnet [Server IP] [Server Port]"}),")"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"title='Example'",children:"$ telnet 52.193.60.176 6600\nTrying 52.193.60.176...\nConnected to 52.193.60.176.\nEscape character is '^]'.\n"})}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The WhaTap collection server data can be found in ",(0,i.jsx)(t,{sid:"side_management",className:"uitext"})," > ",(0,i.jsx)(t,{sid:"agent_installation",className:"uitext"}),"."]})})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},9307:function(e,n,t){t.d(n,{ZP:function(){return a},d$:function(){return s}});var i=t(85893),o=t(50065);let s=[{value:"Multiple regions impossible to be selected as a single project",id:"multiple-regions-impossible-to-be-selected-as-a-single-project",level:3}];function r(e){let n={a:"a",h3:"h3",li:"li",p:"p",section:"section",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,i.jsx)(n.h3,{id:"multiple-regions-impossible-to-be-selected-as-a-single-project",children:"Multiple regions impossible to be selected as a single project"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.a,{href:"https://services.whatap.io",children:"WhaTap monitoring service"})," website, when creating a project, you cannot select multiple regions. When using multiple regions, create separate projects."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If servers exist in multiple regions as in the cloud environment, the collection servers must be located in each region to avoid constraints on the performance data collection such as network latency."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"WhaTap builds collection servers for each region to meet customer requirements."}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},1746:function(e,n,t){t.d(n,{ZP:function(){return a},d$:function(){return s}});var i=t(85893),o=t(50065);let s=[];function r(e){let n={admonition:"admonition",p:"p",...(0,o.a)(),...e.components},{ReturnLink:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ReturnLink",!0),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["This document has been created based on the ",e.product," Monitoring V2. For the ",e.product," monitoring V1 document, see ",(0,i.jsx)(t,{children:"the following"}),"."]})})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(67294);let o={},s=i.createContext(o);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);