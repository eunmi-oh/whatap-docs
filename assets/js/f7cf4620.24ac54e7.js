"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["28199"],{64900:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>o,assets:()=>d,toc:()=>h,frontMatter:()=>i});var s=JSON.parse('{"id":"kubernetes/uninstall-agent-en","title":"Agent deletion","description":"It provides the method how to delete the Kubernetes agent.","source":"@site/docs/kubernetes/uninstall-agent-en.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/uninstall-agent-en","permalink":"/whatap-docs/kubernetes/uninstall-agent-en","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/uninstall-agent-en.mdx","tags":[{"inline":true,"label":"Kubernetes","permalink":"/whatap-docs/tags/kubernetes"},{"inline":true,"label":"Kubernetes Monitoring","permalink":"/whatap-docs/tags/kubernetes-monitoring"},{"inline":true,"label":"Management","permalink":"/whatap-docs/tags/management"},{"inline":true,"label":"Agent","permalink":"/whatap-docs/tags/agent"},{"inline":true,"label":"Agent deletion","permalink":"/whatap-docs/tags/agent-deletion"}],"version":"current","frontMatter":{"id":"uninstall-agent-en","title":"Agent deletion","description":"It provides the method how to delete the Kubernetes agent.","tags":["Kubernetes","Kubernetes Monitoring","Management","Agent","Agent deletion"],"toc_max_heading_level":3,"isTranslationMissing":false}}'),l=t("85893"),a=t("50065");let i={id:"uninstall-agent-en",title:"Agent deletion",description:"It provides the method how to delete the Kubernetes agent.",tags:["Kubernetes","Kubernetes Monitoring","Management","Agent","Agent deletion"],toc_max_heading_level:3,isTranslationMissing:!1},r=void 0,d={},h=[{value:"Deleting the Kubernetes agent",id:"deleting-the-kubernetes-agent",level:2},{value:"YAML file name of the Kubernetes agent",id:"yaml-file-name-of-the-kubernetes-agent",level:4},{value:"In case the YAML file exists",id:"in-case-the-yaml-file-exists",level:3},{value:"In case the YAML file does not exist",id:"in-case-the-yaml-file-does-not-exist",level:3},{value:"Uninstalling the agent upon installation based on the Helm chart",id:"uninstall-agent-helm-chart",level:3}];function c(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",section:"section",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,l.jsx)(n.h2,{id:"deleting-the-kubernetes-agent",children:"Deleting the Kubernetes agent"}),(0,l.jsxs)(n.p,{children:["In the agent installation procedure, check the ",(0,l.jsx)(n.em,{children:"YAML"})," file name that matches the downloaded Kubernetes version and Container Runtime, and then proceed with the procedure to delete the Kubernetes agent."]})]}),"\n",(0,l.jsxs)(n.section,{className:"remark-sectionize-h4",children:[(0,l.jsx)(n.h4,{id:"yaml-file-name-of-the-kubernetes-agent",children:"YAML file name of the Kubernetes agent"}),(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Docker"}),(0,l.jsx)(n.th,{children:"YAML file name"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Kubernetes 1.16 or later"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.em,{children:"whatap_kube_1.16.yaml"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Kubernetes 1.16 or later (GPU version)"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.em,{children:"whatap_kube_1.16_gpu.yaml"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Below Kubernetes 1.16"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.em,{children:"whatap_kube.yaml"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Below Kubernetes 1.16 (GPU version)"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.em,{children:"whatap_kube_gpu.yaml"})})]})]})]}),(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Containerd"}),(0,l.jsx)(n.th,{children:"YAML file name"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Kubernetes 1.16 or later"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.em,{children:"whatap_kube_containerd_1.16.yaml"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Kubernetes 1.16 or later (GPU version)"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.em,{children:"whatap_kube_containerd_1.16_gpu.yaml"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Below Kubernetes 1.16"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.em,{children:"whatap_kube_containerd.yaml"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Below Kubernetes 1.16 (GPU version)"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.em,{children:"whatap_kube_containerd_gpu.yaml"})})]})]})]}),(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"CRIO	YAML"}),(0,l.jsx)(n.th,{children:"File name"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Kubernetes 1.16 or later"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.em,{children:"whatap_kube_crio_1.16.yaml"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Kubernetes 1.16 or later (GPU version)"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.em,{children:"whatap_kube_crio_1.16_gpu.yaml"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Below Kubernetes 1.16"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.em,{children:"whatap_kube_crio.yaml"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Below Kubernetes 1.16 (GPU version)"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.em,{children:"whatap_kube_crio_gpu.yaml"})})]})]})]})]}),"\n",(0,l.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,l.jsx)(n.h3,{id:"in-case-the-yaml-file-exists",children:"In case the YAML file exists"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Delete the Kubernetes agent installed with the ",(0,l.jsx)(n.em,{children:"YAML"})," file name downloaded during the installation procedure. Modify the notation of the following command to your ",(0,l.jsx)(n.em,{children:"YAML"})," file name, and then run it."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"kubectl delete -f < user's own YAML file name >\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"If the Kubernetes agent has been deleted successfully, you can see the following:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'namespace "whatap-monitoring" deleted\nserviceaccount "whatap" deleted\nclusterrole.rbac.authorization.k8s.io "whatap" deleted\nconfigmap "node-start-script" deleted\nclusterrolebinding.rbac.authorization.k8s.io "whatap" deleted\ndaemonset.apps "whatap-node-agent" deleted\nconfigmap "master-start-script" deleted\ndeployment.apps "whatap-master-agent" deleted\nservice "whatap-master-agent" deleted\n'})}),"\n"]}),"\n"]})]}),"\n",(0,l.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,l.jsx)(n.h3,{id:"in-case-the-yaml-file-does-not-exist",children:"In case the YAML file does not exist"}),(0,l.jsxs)(n.admonition,{type:"caution",children:[(0,l.jsx)(n.mdxAdmonitionTitle,{}),(0,l.jsx)(n.p,{children:"If you have created custom resources directly in the whatap-monitoring namespace, those resources are deleted also."})]}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Execute the following command to delete the Kubernetes agent."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"kubectl delete namespace whatap-monitoring\nkubectl delete clusterrolebinding whatap\nkubectl delete clusterrole whatap\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"If the Kubernetes agent has been deleted successfully, you can see the following:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'namespace "whatap-monitoring" deleted\nclusterrolebinding.rbac.authorization.k8s.io "whatap" deleted\nclusterrole.rbac.authorization.k8s.io "whatap" deleted\n'})}),"\n"]}),"\n"]})]}),"\n",(0,l.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,l.jsx)(n.h3,{id:"uninstall-agent-helm-chart",children:"Uninstalling the agent upon installation based on the Helm chart"}),(0,l.jsx)(n.p,{children:"Execute the following command to uninstall the WhaTap Kubernetes agent application."}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Uninstall release\nhelm uninstall whatap-kube-agent\n"})})]})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(67294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);