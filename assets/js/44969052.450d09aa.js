"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["44542"],{86943:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>t,frontMatter:()=>r});var i=JSON.parse('{"id":"release-notes/db/dbx-1_6_5","title":"DBX v1.6.5","description":"\uACF5\uD1B5","source":"@site/docs/release-notes/db/dbx-1.6.5.mdx","sourceDirName":"release-notes/db","slug":"/release-notes/db/dbx-1_6_5","permalink":"/whatap-docs/release-notes/db/dbx-1_6_5","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/db/dbx-1.6.5.mdx","tags":[],"version":"current","frontMatter":{"id":"dbx-1_6_5","title":"DBX v1.6.5","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}'),c=s("85893"),l=s("50065");let r={id:"dbx-1_6_5",title:"DBX v1.6.5",toc_max_heading_level:2,displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},d=void 0,a={},t=[{value:"\uACF5\uD1B5",id:"\uACF5\uD1B5",level:2},{value:"PostgreSQL",id:"postgresql",level:2},{value:"Oracle",id:"oracle",level:2},{value:"MySQL",id:"mysql",level:2},{value:"Tibero",id:"tibero",level:2},{value:"CUBRID",id:"cubrid",level:2},{value:"Redis",id:"redis",level:2},{value:"MongoDB",id:"mongodb",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,c.jsx)(n.h2,{id:"\uACF5\uD1B5",children:"\uACF5\uD1B5"}),(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\uC5D0\uC774\uC804\uD2B8 \uC5C5\uB370\uC774\uD2B8 \uAE30\uB2A5 \uCD94\uAC00: MySQL, PostgreSQL \uC0C1\uD488\uC758 ",(0,c.jsx)(n.code,{children:"node_state"})," \uC9C0\uD45C \uCD94\uAC00"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"whatap.conf"})," \uD30C\uC77C\uC758 ",(0,c.jsx)(n.code,{children:"slow_query_log"})," \uC635\uC158\uAC12\uC744 \uB300\uC18C\uBB38\uC790 \uAD6C\uBD84\uD558\uC9C0 \uC54A\uB3C4\uB85D \uC218\uC815"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"xos \uC5D0\uC774\uC804\uD2B8\uC758 tcp \uD1B5\uC2E0 \uAE30\uB2A5 \uCD94\uAC00"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ini",metastring:"title=whatap.conf",children:"use_tcp=1\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"cpu_cores"})," \uC9C0\uD45C \uCD94\uAC00 \uBC0F rds cpu core \uC5D0\uB7EC \uC218\uC815"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"cpu core \uC218 \uC5D0\uB7EC \uC218\uC815"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"sql text literal \uBCC0\uC218 '$' \uBB38\uC790 \uB4F1 \uCC98\uB9AC\uD558\uB3C4\uB85D \uC218\uC815"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["CloudWatch ",(0,c.jsx)(n.code,{children:"assume-role"})," \uCD94\uAC00"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ini",metastring:"title=whatap.conf",children:"aws_arn=''\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"autoscale assume-role \uAE30\uB2A5 \uCD94\uAC00"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"DocumentDB, CloudWatch \uC815\uBCF4 \uC218\uC9D1 \uAE30\uB2A5 \uCD94\uAC00"}),"\n"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,c.jsx)(n.h2,{id:"postgresql",children:"PostgreSQL"}),(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"slowoquery"})," \uC218\uC9D1 \uAE30\uB2A5 \uCD94\uAC00"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"replay_lag"}),", ",(0,c.jsx)(n.code,{children:"replication_broken"}),", ",(0,c.jsx)(n.code,{children:"replication_count"})," \uC9C0\uD45C \uCD94\uAC00"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"session count"})," \uC218\uC9D1\uC744 \uC704\uD55C \uBC84\uC804 \uCC98\uB9AC init \uC218\uC815"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"max_connection"})," \uC9C0\uD45C \uCD94\uAC00"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"lock \uCFFC\uB9AC \uAC1C\uC120(9.6 \uBC84\uC804 \uC774\uC0C1 \uC9C0\uC6D0)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ini",metastring:"title=whatap.conf",children:"lock_update=true\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"uptime"})," \uC9C0\uD45C \uCD94\uAC00"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Aurora PostgreSQL"}),": ",(0,c.jsx)(n.code,{children:"instance_name"})," \uC9C0\uD45C\uB97C \uAC00\uC838\uC624\uAE30 \uC704\uD574 \uCD94\uAC00\uD558\uB358 ",(0,c.jsx)(n.em,{children:"whatap.conf"})," \uD30C\uC77C\uC758 ",(0,c.jsx)(n.code,{children:"rds_instance={instance_name}"})," \uC635\uC158\uC744 ",(0,c.jsx)(n.code,{children:"cloud_watch_instance"}),"\uB85C \uBCC0\uACBD"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ini",metastring:"title=whatap.conf",children:"cloud_watch_instance={instance_name}\n"})}),"\n"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,c.jsx)(n.h2,{id:"oracle",children:"Oracle"}),(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:(0,c.jsx)(n.strong,{children:"\uD14C\uC774\uBE14\uC2A4\uD398\uC774\uC2A4 \uC0AC\uC774\uC988"})})," \uBA54\uB274\uC5D0 temp \uD30C\uC77C \uC0AC\uC774\uC988 \uC870\uD68C \uAE30\uB2A5 \uCD94\uAC00"]})]}),"\n",(0,c.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,c.jsx)(n.h2,{id:"mysql",children:"MySQL"}),(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Aurora MySQL: replication \uC815\uBCF4 \uCD94\uAC00"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"active session"})," \uC218\uC9D1 \uC2DC ",(0,c.jsx)(n.code,{children:"command"}),", ",(0,c.jsx)(n.code,{children:"user"})," \uBCC4 \uD544\uD130\uB9C1 \uAE30\uB2A5 \uCD94\uAC00"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ini",metastring:"title=whatap.conf",children:"skip_command='{command name}'\nskip_user='{user name}'\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"max_connection"})," \uC9C0\uD45C \uCD94\uAC00"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"RDS MySQL driver \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uC635\uC158 \uCD94\uAC00"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ini",metastring:"title=whatap.conf",children:"rds_driver=true\n"})}),"\n"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,c.jsx)(n.h2,{id:"tibero",children:"Tibero"}),(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:(0,c.jsx)(n.strong,{children:"\uD14C\uC774\uBE14\uC2A4\uD398\uC774\uC2A4 \uC0AC\uC774\uC988"})})," \uBA54\uB274\uC5D0 temp \uD30C\uC77C \uC0AC\uC774\uC988 \uC870\uD68C \uAE30\uB2A5 \uCD94\uAC00"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"session stat"})," \uC218\uC9D1 \uC2DC API \uC0AC\uC6A9 \uAE30\uB2A5 \uCD94\uAC00"]}),"\n"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,c.jsx)(n.h2,{id:"cubrid",children:"CUBRID"}),(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\uD14C\uC774\uBE14 \uC0AC\uC774\uC988 \uC99D\uAC10 \uAE30\uB2A5 \uCD94\uAC00(xcub \uC5D0\uC774\uC804\uD2B8 0.9.6 \uBC84\uC804 \uC774\uC0C1 \uD544\uC694)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ini",metastring:"title=whatap.conf",children:"tables=1\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\uD0AC\uC138\uC158(kill session) \uAE30\uB2A5 \uCD94\uAC00"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\uD14C\uC774\uBE14\uC0AC\uC774\uC988 \uC99D\uAC10 \uBC84\uC804\uBCC4 \uB0B4\uC6A9 \uC218\uC815"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"pageSize"})," \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD30C\uB77C\uBBF8\uD130 \uB0B4\uC6A9 \uCD94\uAC00, CUBRID ",(0,c.jsx)(n.code,{children:"tps"}),", ",(0,c.jsx)(n.code,{children:"qps"}),", ",(0,c.jsx)(n.code,{children:"psize"}),", ",(0,c.jsx)(n.code,{children:"executions"})," \uC9C0\uD45C \uCD94\uAC00, CUBRID ",(0,c.jsx)(n.code,{children:"broker"}),"\uAC00 broker1, query_editor, \uC774 \uB450 \uAC00\uC9C0\uAC00 \uC544\uB2D0 \uACBD\uC6B0 ",(0,c.jsx)(n.em,{children:"whatap.conf"})," \uD30C\uC77C\uC5D0 ",(0,c.jsx)(n.code,{children:"broker="}),"\uC5D0 \uAE30\uC785"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ini",metastring:"title=whatap.conf",children:"broker=broker1,broker2,query_editor\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"pagesize"})," \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD30C\uB77C\uBBF8\uD130 \uC624\uB958 \uC218\uC815"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\uD14C\uC774\uBE14 \uC0AC\uC774\uC988 \uC99D\uAC10 \uB85C\uADF8 \uB0B4\uC6A9 \uC218\uC815"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"tps"}),", ",(0,c.jsx)(n.code,{children:"qps"})," \uC9C0\uD45C \uB4A4\uBC14\uB00C\uC5C8\uB358 \uB0B4\uC6A9 \uC218\uC815"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"broker_count"})," \uC9C0\uD45C \uCD94\uAC00"]}),"\n"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,c.jsx)(n.h2,{id:"redis",children:"Redis"}),(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"active session"})," \uC218\uC9D1 on/off \uAE30\uB2A5 \uCD94\uAC00(",(0,c.jsx)(n.em,{children:"whatap.conf"})," \uD30C\uC77C\uC5D0 ",(0,c.jsx)(n.code,{children:"active_session=true/false"})," \uCD94\uAC00)"]}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ini",metastring:"title=whatap.conf",children:"active_session=true/false\n"})})]}),"\n",(0,c.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,c.jsx)(n.h2,{id:"mongodb",children:"MongoDB"}),(0,c.jsx)(n.p,{children:"cpu \uAC1C\uC218 \uC5D0\uB7EC \uC218\uC815"})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var i=s(67294);let c={},l=i.createContext(c);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);