"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["44765"],{6854:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>x,assets:()=>t,toc:()=>a,frontMatter:()=>r});var i=JSON.parse('{"id":"release-notes/db/dbx-1_6_8","title":"DBX v1.6.8","description":"2023\uB144 8\uC6D4 18\uC77C","source":"@site/docs/release-notes/db/dbx-1.6.8.mdx","sourceDirName":"release-notes/db","slug":"/release-notes/db/dbx-1_6_8","permalink":"/whatap-docs/release-notes/db/dbx-1_6_8","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/db/dbx-1.6.8.mdx","tags":[],"version":"current","frontMatter":{"id":"dbx-1_6_8","title":"DBX v1.6.8","toc_max_heading_level":2,"pagination_next":"release-notes/db/dbx-1_6_7","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"DBX v1.6.7","permalink":"/whatap-docs/release-notes/db/dbx-1_6_7"}}'),l=s("85893"),d=s("50065");let r={id:"dbx-1_6_8",title:"DBX v1.6.8",toc_max_heading_level:2,pagination_next:"release-notes/db/dbx-1_6_7",displayed_sidebar:"releaseSidebar",isTranslationMissing:!1},c=void 0,t={},a=[{value:"\uACF5\uD1B5",id:"\uACF5\uD1B5",level:2},{value:"PostgreSQL V2",id:"postgresql-v2",level:2},{value:"MySQL V2",id:"mysql-v2",level:2}];function o(e){let n={em:"em",h2:"h2",hr:"hr",li:"li",p:"p",section:"section",ul:"ul",...(0,d.a)(),...e.components},{Status:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Status",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"2023\uB144 8\uC6D4 18\uC77C"}),"\n",(0,l.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,l.jsx)(n.h2,{id:"\uACF5\uD1B5",children:"\uACF5\uD1B5"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(s,{children:"Feature"})," \uC5D0\uC774\uC804\uD2B8 \uC124\uCE58 \uD30C\uC77C \uC218\uC815"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["XOS \uC5D0\uC774\uC804\uD2B8 \uC5C5\uB370\uC774\uD2B8: ",(0,l.jsx)(n.em,{children:"whatap.agent.xos-1.1.6g"})]}),"\n",(0,l.jsx)(n.p,{children:"PostgreSQL\uC758 \uC2AC\uB85C\uC6B0 \uCFFC\uB9AC \uC218\uC9D1 \uC815\uBCF4\uC5D0 app, user, db, client, pid \uC815\uBCF4 \uCD94\uAC00"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"CUBRID \uC124\uCE58 \uD3B8\uC758\uB97C \uC704\uD574 tar \uD30C\uC77C\uC5D0 xcub \uBAA8\uB4C8 \uD3EC\uD568"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(s,{children:"Fixed"})," autoscale \uC54C\uB9BC \uAE30\uB2A5 \uC218\uC815"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Scale in / out \uC2DC \uC54C\uB78C \uBC1C\uC0DD \uBC0F \uC5D0\uC774\uC804\uD2B8 \uB3D9\uC791 check \uAE30\uB2A5 \uCD94\uAC00"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Autoscale \uC5D0\uC774\uC804\uD2B8\uC758 stat \uCE74\uD14C\uACE0\uB9AC \uC0AD\uC81C"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),(0,l.jsx)(n.hr,{})]}),"\n",(0,l.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,l.jsx)(n.h2,{id:"postgresql-v2",children:"PostgreSQL V2"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(s,{children:"Feature"})," ",(0,l.jsx)("code",{children:"db_postgresql_used_dml"})," \uCE74\uD14C\uACE0\uB9AC \uCD94\uAC00"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(s,{children:"Feature"})," ",(0,l.jsx)("em",{children:"whatap.conf"})," \uD30C\uC77C\uC758 ",(0,l.jsx)("code",{children:"pg_dml"})," \uC635\uC158\uC744 ",(0,l.jsx)("code",{children:"pg_dml_interval"}),"\uACFC ",(0,l.jsx)("code",{children:"pg_dml_limit"}),"\uC73C\uB85C \uBD84\uB9AC"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(s,{children:"Fixed"})," replication \uC218\uC9D1 \uCFFC\uB9AC \uC218\uC815(slot\uCD94\uAC00) \uBC0F version\uC5D0 \uB530\uB978 \uCFFC\uB9AC \uBD84\uB9AC"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(s,{children:"Fixed"})," \uC2AC\uB85C\uC6B0 \uCFFC\uB9AC \uC218\uC9D1 \uC815\uBCF4\uC5D0 app, user, db, client, pid \uC815\uBCF4 \uCD94\uAC00(XOS \uC5D0\uC774\uC804\uD2B8 \uC5C5\uB370\uC774\uD2B8 \uD544\uC694)"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(s,{children:"Fixed"})," active session\uC758 ",(0,l.jsx)("code",{children:"backend_xid"}),", ",(0,l.jsx)("code",{children:"backend_xmin"})," \uD0C0\uC785\uC744 ",(0,l.jsx)("span",{class:"api",children:"int"}),"\uC5D0\uC11C ",(0,l.jsx)("span",{class:"api",children:"long"}),"\uC73C\uB85C \uBCC0\uACBD"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(s,{children:"Fixed"})," ",(0,l.jsx)("code",{children:"blks_hit_ratio"}),", ",(0,l.jsx)("code",{children:"index_hit_ratio"}),", ",(0,l.jsx)("code",{children:"table_hit_ratio"})," \uC218\uC2DD \uBCC0\uACBD"]}),"\n"]}),"\n"]}),(0,l.jsx)(n.hr,{})]}),"\n",(0,l.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,l.jsx)(n.h2,{id:"mysql-v2",children:"MySQL V2"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(s,{children:"Feature"})," ",(0,l.jsx)("code",{children:"db_mysql_active_session"}),", ",(0,l.jsx)("code",{children:"db_mysql_deadlock"}),", ",(0,l.jsx)("code",{children:"db_mysql_tables"})," \uCE74\uD14C\uACE0\uB9AC \uCD94\uAC00"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(s,{children:"Feature"})," agentinfo\uB97C \uD0DC\uADF8 \uCE74\uC6B4\uD2B8\uB85C \uC804\uC1A1"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(s,{children:"Fixed"})," ",(0,l.jsx)("code",{children:"db_mysql_tables"})," \uCE74\uD14C\uACE0\uB9AC\uC758 ",(0,l.jsx)("code",{children:"filesize"})," \uC218\uC9D1 \uC635\uC158\uC758 \uAE30\uBCF8\uAC12\uC744 ",(0,l.jsx)("code",{children:"true"}),"\uB85C \uC218\uC815"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(s,{children:"Fixed"})," active session state \uC624\uD0C0 \uC218\uC815"]}),"\n"]}),"\n"]})]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var i=s(67294);let l={},d=i.createContext(l);function r(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);