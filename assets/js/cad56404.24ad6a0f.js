"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["71166"],{21071:function(e,n,s){s.d(n,{ZP:function(){return c},d$:function(){return l}});var t=s(85893),r=s(50065);let l=[];function i(e){let n={a:"a",admonition:"admonition",p:"p",...(0,r.a)(),...e.components};return(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["OpenTelemetry \uBAA8\uB2C8\uD130\uB9C1\uC740 \uBCA0\uD0C0 \uBC84\uC804\uC73C\uB85C \uC608\uAE30\uCE58 \uC54A\uC740 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC911\uC694\uD55C \uB370\uC774\uD130\uB098 \uC6B4\uC601 \uD658\uACBD\uC5D0\uC11C\uB294 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD53C\uB4DC\uBC31\uC774\uB098 \uBB38\uC81C\uC810\uC774 \uBC1C\uC0DD\uD558\uBA74 \uC9C0\uC6D0 \uD300(",(0,t.jsx)(n.a,{href:"mailto:support@whatap.io",children:"support@whatap.io"}),")\uC73C\uB85C \uBB38\uC758\uD558\uC138\uC694."]})})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},64681:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>a,assets:()=>h,toc:()=>o,frontMatter:()=>c});var t=JSON.parse('{"id":"opentelemetry/set-agent","title":"\uC124\uC815\uD558\uAE30","description":"\uC5D0\uC774\uC804\uD2B8 \uC124\uC815\uC744 \uD1B5\uD574 OpenTelemetry\uB85C\uBD80\uD130 \uB2E4\uC591\uD55C \uC9C0\uD45C\uB97C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","source":"@site/docs/opentelemetry/set-agent.mdx","sourceDirName":"opentelemetry","slug":"/opentelemetry/set-agent","permalink":"/whatap-docs/opentelemetry/set-agent","draft":false,"unlisted":false,"editUrl":"undefined/docs/opentelemetry/set-agent.mdx","tags":[],"version":"current","frontMatter":{"id":"set-agent","title":"\uC124\uC815\uD558\uAE30","description":"\uC5D0\uC774\uC804\uD2B8 \uC124\uC815\uC744 \uD1B5\uD574 OpenTelemetry\uB85C\uBD80\uD130 \uB2E4\uC591\uD55C \uC9C0\uD45C\uB97C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","isTranslationMissing":false},"sidebar":"otelSidebar","previous":{"title":"\uC5D0\uC774\uC804\uD2B8 \uC124\uCE58","permalink":"/whatap-docs/opentelemetry/install-agent"},"next":{"title":"OTEL Agent v0.2.2","permalink":"/whatap-docs/release-notes/otel/otel-v0_2_2"}}'),r=s("85893"),l=s("50065"),i=s("21071");let c={id:"set-agent",title:"\uC124\uC815\uD558\uAE30",description:"\uC5D0\uC774\uC804\uD2B8 \uC124\uC815\uC744 \uD1B5\uD574 OpenTelemetry\uB85C\uBD80\uD130 \uB2E4\uC591\uD55C \uC9C0\uD45C\uB97C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",isTranslationMissing:!1},d=void 0,h={},o=[...i.d$,{value:"\uC5D0\uC774\uC804\uD2B8",id:"\uC5D0\uC774\uC804\uD2B8",level:2},{value:"Trace",id:"trace",level:2},{value:"Metric",id:"metric",level:2},{value:"Log",id:"log",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",section:"section",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{Head:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})}),"\n","\n",(0,r.jsx)(i.ZP,{}),"\n",(0,r.jsx)(n.p,{children:"OpenTelemetry\uB85C\uBD80\uD130 \uB2E4\uC591\uD55C \uC9C0\uD45C\uB97C \uC218\uC9D1\uD558\uACE0 \uCC98\uB9AC\uD558\uB3C4\uB85D \uC5D0\uC774\uC804\uD2B8\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"\uC5D0\uC774\uC804\uD2B8",children:"\uC5D0\uC774\uC804\uD2B8"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_grpc_server_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsx)(n.p,{children:"OpenTelemetry protocol(OTLP)\uB97C \uD1B5\uD574 \uC804\uB2EC\uB418\uB294 \uB370\uC774\uD130\uB97C \uC218\uC2E0\uD558\uAE30 \uC704\uD55C Grpc \uC11C\uBC84\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_grpc_server_port"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"6600"})]}),"\n",(0,r.jsx)(n.p,{children:"Grpc \uC11C\uBC84\uC758 Listen \uD3EC\uD2B8\uC785\uB2C8\uB2E4."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\uD3EC\uD2B8 \uBC88\uD638\uB97C \uBCC0\uACBD \uD6C4\uC5D0\uB294 whatap-otel \uC11C\uBE44\uC2A4\uB97C \uC7AC\uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_grpc_server_gzip_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.p,{children:["Grpc \uC11C\uBC84\uC5D0\uC11C \uC77D\uB294 \uB370\uC774\uD130\uC758 \uC554\uD638\uD654\uB85C ",(0,r.jsx)(n.code,{children:"gzip"}),"\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"debug_otel_grpc_server_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.p,{children:"OpenTelemetry Trace \uB370\uC774\uD130 \uCC98\uB9AC\uC5D0 \uAD00\uB828\uB41C \uB514\uBC84\uADF8 \uB85C\uADF8\uC758 \uCD9C\uB825\uC744 \uD65C\uC131\uD654\uD569\uB2C8\uB2E4."}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"trace",children:"Trace"}),(0,r.jsxs)(n.p,{children:["OpenTelemetry Trace \uB370\uC774\uD130 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC5D0\uC774\uC804\uD2B8 \uC124\uC815 \uC635\uC158\uC785\uB2C8\uB2E4. \uC640\uD0ED\uC740 OpenTelemetry Trace \uAD6C\uC131 \uC694\uC18C\uC778 ",(0,r.jsx)(n.strong,{children:"Span"}),"\uC758 ",(0,r.jsx)(n.code,{children:"attributes"})," \uAC1D\uCCB4\uB85C\uBD80\uD130 \uAC12\uC744 \uAC00\uC838\uC640 \uBAA8\uB2C8\uD130\uB9C1 \uC815\uBCF4\uB85C \uD65C\uC6A9\uD569\uB2C8\uB2E4."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Span"}),"\uC758 ",(0,r.jsx)(n.code,{children:"attributes"})," \uAC1D\uCCB4\uAC00 \uC640\uD0ED\uC758 \uC5D0\uC774\uC804\uD2B8 \uC124\uC815\uACFC \uC5B4\uB5BB\uAC8C \uC5F0\uAD00\uB418\uB294\uC9C0 \uB2E4\uC74C \uCF54\uB4DC\uB97C \uCC38\uC870\uD558\uC138\uC694."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"title='OpenTelemetry - Span example' showLineNumbers {18,22,24}",children:'{\n    "name": "/v1/sys/health",\n    "context": {\n        "trace_id": "7bba9f33312b3dbb8b2c2c62bb7abe2d",\n        "span_id": "086e83747d0e381e"\n    },\n    "parent_id": "",\n    "start_time": "2021-10-22 16:04:01.209458162 +0000 UTC",\n    "end_time": "2021-10-22 16:04:01.209514132 +0000 UTC",\n    "status_code": "STATUS_CODE_OK",\n    "status_message": "",\n    "attributes": {\n        "net.transport": "IP.TCP",\n        "net.peer.ip": "172.17.0.1",\n        "net.peer.port": "51820",\n        "net.host.ip": "10.177.2.152",\n        "net.host.port": "26040",\n        "http.method": "GET",\n        "http.target": "/v1/sys/health",\n        "http.server_name": "mortar-gateway",\n        "http.route": "/v1/sys/health",\n        "http.user_agent": "Consul Health Check",\n        "http.scheme": "http",\n        "http.host": "10.177.2.152:26040",\n        "http.flavor": "1.1"\n    },\n    "events": [\n        {\n            "name": "",\n            "message": "OK",\n            "timestamp": "2021-10-22 16:04:01.209512872 +0000 UTC"\n        }\n    ]\n}\n'})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:'title="whatap.conf"',children:"otel_attr_tx_host_keys=http.host\notel_attr_tx_method_keys=http.method\notel_attr_tx_useragent_keys=http.user_agent\n"})}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\uC640\uD0ED\uC758 \uD2B8\uB808\uC774\uC2A4 \uBD84\uC11D\uACFC \uAD00\uB828\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,r.jsx)(n.a,{href:"../java/dashboard-hitmap-trace#anlaysis-trace",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["OpenTelemetry\uC758 Trace \uB370\uC774\uD130 \uCC98\uB9AC\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/concepts/signals/traces/",children:"\uB2E4\uC74C \uB9C1\uD06C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["OpenTelemetry\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uC18D\uC131(",(0,r.jsx)(n.code,{children:"attributes"}),")\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uB2E4\uC74C \uB9C1\uD06C\uB97C \uCC38\uC870\uD558\uC138\uC694."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/semconv/database/database-spans/",children:"Database"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/semconv/attributes-registry/error/",children:"Error"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/semconv/attributes-registry/host/",children:"Host"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/semconv/attributes-registry/http/",children:"HTTP"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/semconv/attributes-registry/network/",children:"Network"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/semconv/attributes-registry/url/",children:"URL"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/semconv/attributes-registry/user-agent/",children:"User agent"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_trace_server_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsx)(n.p,{children:"OpenTelemetry Trace \uB370\uC774\uD130 \uCC98\uB9AC\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_trace_queue_size"})," ",(0,r.jsx)("span",{class:"type",children:"Int"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"5000"})]}),"\n",(0,r.jsx)(n.p,{children:"OpenTelemetry Trace \uB370\uC774\uD130 \uCC98\uB9AC\uB97C \uC704\uD55C \uD050 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_span_collector_max"})," ",(0,r.jsx)("span",{class:"type",children:"Int"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"100000"})]}),"\n",(0,r.jsx)(n.p,{children:"OpenTelemetry Trace \uB370\uC774\uD130\uC758 Span \uB370\uC774\uD130 \uBC84\uD37C\uC758 \uCD5C\uB300 \uD06C\uAE30(\uAC1C\uC218)\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_dbcon_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"sql.system,db.connection_string,db.system"})]}),"\n",(0,r.jsxs)(n.p,{children:["DB Connection \uC815\uBCF4\uB85C \uD65C\uC6A9\uD560 \uC18D\uC131 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694. \uD574\uB2F9 \uC815\uBCF4\uB97C \uD65C\uC6A9\uD574 \uC640\uD0ED\uC5D0\uC11C\uB294 ",(0,r.jsx)(n.strong,{children:"DB Connection"})," \uC2A4\uD15D\uC73C\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_sql_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"db.statement,sql.query"})]}),"\n",(0,r.jsxs)(n.p,{children:["SQL \uCFFC\uB9AC \uC815\uBCF4\uB85C \uD65C\uC6A9\uD560 \uC18D\uC131 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694. \uD574\uB2F9 \uC815\uBCF4\uB97C \uD65C\uC6A9\uD574 \uC640\uD0ED\uC5D0\uC11C\uB294 ",(0,r.jsx)(n.strong,{children:"SQL"})," \uC2A4\uD15D\uC73C\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_httpc_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"url.full,http.url,http.target"})]}),"\n",(0,r.jsxs)(n.p,{children:["HTTP call \uC815\uBCF4\uB85C \uD65C\uC6A9\uD560 \uC18D\uC131 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694. \uD574\uB2F9 \uC815\uBCF4\uB97C \uD65C\uC6A9\uD574 \uC640\uD0ED\uC5D0\uC11C\uB294 ",(0,r.jsx)(n.strong,{children:"HTTP Call"})," \uC2A4\uD15D\uC73C\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_tx_url_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"http.url,http.route,http.target,tyk.api.path,http.url"})]}),"\n",(0,r.jsx)(n.p,{children:"\uD2B8\uB79C\uC7AD\uC158\uC758 \uC11C\uBE44\uC2A4 URL \uC815\uBCF4\uB85C \uD65C\uC6A9\uD560 \uC18D\uC131 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_tx_host_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"http.host"})]}),"\n",(0,r.jsx)(n.p,{children:"\uD2B8\uB79C\uC7AD\uC158\uC758 \uD638\uC2A4\uD2B8 \uC815\uBCF4\uB85C \uD65C\uC6A9\uD560 \uC18D\uC131 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_tx_method_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"http.method,http.request.method"})]}),"\n",(0,r.jsx)(n.p,{children:"HTTP Method \uC815\uBCF4\uB85C \uD65C\uC6A9\uD560 \uC18D\uC131 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_tx_status_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"http.status_code"})]}),"\n",(0,r.jsx)(n.p,{children:"\uD2B8\uB79C\uC7AD\uC158\uC758 HTTP \uC0C1\uD0DC \uCF54\uB4DC \uC815\uBCF4\uB85C \uD65C\uC6A9\uD560 \uC18D\uC131 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_tx_useragent_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"http.user_agent"})]}),"\n",(0,r.jsx)(n.p,{children:"\uD2B8\uB79C\uC7AD\uC158\uC758 User-Agent \uC815\uBCF4\uB85C \uD65C\uC6A9\uD560 \uC18D\uC131 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_tx_clientip_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"net.peer.ip,net.socket.peer.addr"})]}),"\n",(0,r.jsx)(n.p,{children:"\uD2B8\uB79C\uC7AD\uC158\uC758 \uD074\uB77C\uC774\uC5B8\uD2B8 IP \uC815\uBCF4\uB85C \uD65C\uC6A9\uD560 \uC18D\uC131 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_tx_referer_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsx)(n.p,{children:"\uD2B8\uB79C\uC7AD\uC158\uC758 HTTP Referer \uC815\uBCF4\uB85C \uD65C\uC6A9\uD560 \uC18D\uC131 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_attr_error_keys"})," ",(0,r.jsx)("span",{class:"type",children:"String"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"error.type"})]}),"\n",(0,r.jsx)(n.p,{children:"\uD2B8\uB79C\uC7AD\uC158\uC758 \uC5D0\uB7EC \uC815\uBCF4\uB85C \uD65C\uC6A9\uD560 \uC18D\uC131 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694."}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"metric",children:"Metric"}),(0,r.jsx)(n.p,{children:"OpenTelemetry Metric \uB370\uC774\uD130 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC5D0\uC774\uC804\uD2B8 \uC124\uC815 \uC635\uC158\uC785\uB2C8\uB2E4."}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["OpenTelemetry\uC758 Metric \uB370\uC774\uD130 \uCC98\uB9AC\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/concepts/signals/metrics/",children:"\uB2E4\uC74C \uB9C1\uD06C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_metric_server_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.p,{children:"OpenTelemetry Metric \uB370\uC774\uD130 \uCC98\uB9AC\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_metric_queue_size"})," ",(0,r.jsx)("span",{class:"type",children:"Int"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"5000"})]}),"\n",(0,r.jsx)(n.p,{children:"Opentelemetry Metric \uB370\uC774\uD130 \uCC98\uB9AC\uB97C \uC704\uD55C \uD050 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4."}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"log",children:"Log"}),(0,r.jsx)(n.p,{children:"OpenTelemetry Log \uB370\uC774\uD130 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC5D0\uC774\uC804\uD2B8 \uC124\uC815 \uC635\uC158\uC785\uB2C8\uB2E4."}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["OpenTelemetry\uC758 Log \uB370\uC774\uD130 \uCC98\uB9AC\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 ",(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/concepts/signals/logs/",children:"\uB2E4\uC74C \uB9C1\uD06C"}),"\uB97C \uCC38\uC870\uD558\uC138\uC694."]})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_log_server_enabled"})," ",(0,r.jsx)("span",{class:"type",children:"Boolean"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.p,{children:"Opentelemetry Log \uB370\uC774\uD130 \uCC98\uB9AC\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otel_log_queue_size"})," ",(0,r.jsx)("span",{class:"type",children:"Int"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8\uAC12 ",(0,r.jsx)(n.code,{children:"5000"})]}),"\n",(0,r.jsx)(n.p,{children:"Opentelemetry Log \uB370\uC774\uD130 \uCC98\uB9AC\uB97C \uC704\uD55C \uD050 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4."}),"\n"]}),"\n"]})]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(67294);let r={},l=t.createContext(r);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);