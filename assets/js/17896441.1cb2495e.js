"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["87048"],{79424:function(e,t,a){a.d(t,{Z:function(){return o}}),a(67294);var i=a(16550),n=a(2933);function o(){var e;let t,a=(0,i.TH)(),{i18n:{currentLocale:o}}=(0,n.Z)();return e="nodejs"===(t="ko"==o?a.pathname.split("/")[2]:a.pathname.split("/")[3])?"-nodejs":"java"===t?"-java":"php"===t?"-php":"python"===t?"-python":"golang"===t?"-golang":"dotnet"===t?"-dotnet":"server"===t?"-server":"kubernetes"===t?"-k8s":"postgresql"===t?"-postgresql":"oracle-cloud"===t?"-oci":"oracle-pro"===t?"-oracle-pro":"oracle"===t?"-oracle-pro":"oracle-v1"===t?"-oracle":"mysql"===t?"-mysql":"mssql-v1"===t?"-mssql":"mssql"===t?"-mssql":"tibero"===t?"-tibero":"cubrid-v1"===t?"-cubrid-v1":"cubrid"===t?"-cubrid":"altibase"===t?"-altibase":"altibase-v1"===t?"-altibase-v1":"redis"===t?"-redis":"mongodb"===t?"-mongodb":"url"===t?"-url":"amazon-cloudwatch"===t?"-aws-cloudwatch":"amazon-ecs"===t?"-aws-ecs":"azure"===t?"-azure":"ncloud"===t?"-ncloud":"aws-log"===t?"-aws-log":"log"===t?"-log":"browser"===t?"-browser":"npm"===t?"-npm":"feature"===t?"-feature":""}},37702:function(e,t,a){a.d(t,{Z:()=>W});var i,n=a("85893"),o=a("67294");let r={btnwrapper:"btnwrapper_gsW7",modalclosebtn:"modalclosebtn_OJca",modalopenbtn:"modalopenbtn_jIdz",modalcontainer:"modalcontainer_Uwxb",modalcontent:"modalcontent_3du5",h1Title:"h1Title_z2LJ",submitbtn:"submitbtn_ZER8",emaildesc:"emaildesc_yLrM"};var s=a("96025"),l=a("80626"),_=JSON.parse('{"fvv":1,"pageHistory":0,"fbzx":"7163460488620654395","action":"e/1FAIpQLSemcyCE9n_zq8rHzKWtuuywnzggYq9NeFsB4w3FwLSKI_v6iA","title":"Feedback","description":"","fields":[{"label":"\uC774 \uBB38\uC11C\uAC00 \uB3C4\uC6C0\uC774 \uB418\uC5C8\uB098\uC694?;components.feedback.question","description":null,"type":"RADIO","id":"857652938","options":[{"label":"\uD83D\uDE0A Good","custom":false},{"label":"\uD83D\uDE2B Bad","custom":false}],"required":true},{"label":"\uBB38\uC11C url \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.","description":null,"type":"SHORT_ANSWER","id":"199330391","required":false},{"label":"\uD3C9\uAC00\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC54C\uB824\uC8FC\uC138\uC694.;components.feedback.details","description":null,"type":"LONG_ANSWER","id":"1718017240","required":false},{"label":"\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uB0A8\uACA8\uC8FC\uC138\uC694.(Option);components.feedback.email","description":null,"type":"SHORT_ANSWER","id":"1036772456","required":false}],"fieldsOrder":{"199330391":1,"857652938":0,"1036772456":3,"1718017240":2}}'),d=a("64390");let c=d.default.div`
  display: flex;
  flex-direction: column;
`,p=d.default.div`
  display: flex;

  & label {
    margin: 0 10px;
  }
`;function h(e){let{id:t}=e,{options:a,customOption:i}=(0,l.xB)(t);return(0,n.jsxs)(c,{children:[a.map(e=>(0,n.jsxs)(p,{children:[(0,n.jsx)("input",{type:"checkbox",id:e.id,...e.registerOption()}),(0,n.jsx)("label",{htmlFor:e.id,children:e.label})]},e.id)),i&&(0,n.jsxs)(p,{children:[(0,n.jsx)("input",{type:"checkbox",id:i.id,...i.registerOption()}),(0,n.jsx)("label",{htmlFor:i.id,children:"Outra"}),(0,n.jsx)("input",{type:"text",placeholder:"Resposta aqui",...i.registerCustomInput()})]})]})}let g=d.default.div`
  display: flex;
  flex-direction: column;
`,m=d.default.div`
  display: flex;

  & label {
    margin: 0 10px;
  }
`,u=d.default.span`
  color: red;
  padding: 10px 0;
`;function b(e){let{id:t}=e,{options:a,customOption:i,error:o}=(0,l.Ge)(t);return(0,n.jsxs)(g,{children:[a.map(e=>(0,n.jsxs)(m,{children:[(0,n.jsx)("input",{type:"radio",id:e.id,...e.registerOption()}),(0,n.jsx)("label",{htmlFor:e.id,children:e.label})]},e.id)),i&&(0,n.jsxs)(m,{children:[(0,n.jsx)("input",{type:"radio",id:i.id,...i.registerOption()}),(0,n.jsx)("label",{htmlFor:i.id,children:"Outra"}),(0,n.jsx)("input",{type:"text",placeholder:"Resposta aqui",...i.registerCustomInput()})]}),(0,n.jsx)(u,{children:o&&"This field is required"})]})}function T(e){let{id:t,location:a}=e,{register:i}=(0,l.Tx)(t);return"199330391"==t?(0,n.jsx)("div",{children:(0,n.jsx)("input",{type:"text",value:a,...i()})}):(0,n.jsx)("div",{children:(0,n.jsx)("input",{type:"text",...i()})})}function w(e){let{id:t}=e,{register:a}=(0,l.yO)(t);return(0,n.jsx)("div",{children:(0,n.jsx)("textarea",{type:"text",...a()})})}let y=d.default.div`
  display: table;
`,f=d.default.header`
  display: table-row;
`,v=d.default.div`
  display: table-row;
`,C=d.default.div`
  display: table-cell;
  padding: 5px;
`;function S(e){let{id:t}=e,{columns:a,renderGrid:i}=(0,l.bk)(t);return(0,n.jsxs)(y,{children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(C,{}),a.map(e=>(0,n.jsx)(C,{children:e.label},e.label))]}),i(e=>(0,n.jsxs)(v,{children:[(0,n.jsx)(C,{children:e.label}),e.renderColumns(e=>(0,n.jsx)(C,{children:(0,n.jsx)("input",{type:"radio",...e.registerColumn()})},e.label))]},e.label))]})}let k=d.default.div`
  display: table;
`,L=d.default.header`
  display: table-row;
`,j=d.default.div`
  display: table-row;
`,D=d.default.div`
  display: table-cell;
  padding: 5px;
`;function x(e){let{id:t}=e,{columns:a,renderGrid:i}=(0,l.ck)(t);return(0,n.jsxs)(k,{children:[(0,n.jsxs)(L,{children:[(0,n.jsx)(D,{}),a.map(e=>(0,n.jsx)(D,{children:e.label},e.label))]}),i(e=>(0,n.jsxs)(j,{children:[(0,n.jsx)(D,{children:e.label}),e.renderColumns(e=>(0,n.jsx)(D,{children:(0,n.jsx)("input",{type:"checkbox",...e.registerColumn()})},e.label))]},e.label))]})}function P(e){let{id:t}=e,{register:a,options:i}=(0,l.M$)(t);return(0,n.jsx)("div",{children:(0,n.jsxs)("select",{...a(),children:[(0,n.jsx)("option",{value:"",children:"Select option"}),i.map(e=>(0,n.jsx)("option",{value:e.label,children:e.label},e.label))]})})}let N=d.default.div`
  display: flex;
  align-items: center;

  & * {
    margin: 0 10px;
  }
  margin-bottom 10px;
`,A=d.default.span`
  color: red;
`;function I(e){let{id:t}=e,{options:a,legend:i,error:o}=(0,l.mP)(t);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(N,{children:[(0,n.jsx)("div",{children:i.labelFirst}),a.map(e=>(0,n.jsx)("input",{type:"radio",...e.registerOption()},e.id)),(0,n.jsx)("div",{children:i.labelLast})]}),(0,n.jsx)(A,{children:o&&"This field is required"})]})}var M=a("16550");function R(){return(R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)({}).hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(null,arguments)}let U=e=>{let{title:t,titleId:a,...n}=e;return o.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,className:"SVGInline-svg",style:{width:16,height:16},viewBox:"0 0 24 24","aria-labelledby":a},n),t?o.createElement("title",{id:a},t):null,i||(i=o.createElement("path",{fill:"#757575",fillRule:"evenodd",d:"M19.778 5.636 13.414 12l6.364 6.364-1.414 1.414L12 13.414l-6.364 6.364-1.414-1.414L10.586 12 4.222 5.636l1.414-1.414L12 10.586l6.364-6.364z"})))},q=d.default.form`
  max-width: 580px;
  margin: 0 auto;
  padding: 15px;
`,O=d.default.div`
  margin-bottom: 20px;
`,B=d.default.h3`
  font-size: 1.1rem;
  margin-bottom: 10px;
`,E=d.default.p`
  font-size: 0.8rem;
  color: #5c5c5c;
  margin-top: 0px;