"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["36002"],{79524:function(e,n,s){s.d(n,{ZP:function(){return c},d$:function(){return i}});var r=s(85893),t=s(50065);let i=[{value:"User Counter",id:"user-counter",level:2},{value:"User types",id:"user-types",level:3},{value:"User counting",id:"user-counting",level:3},{value:"Service Counter",id:"service-counter",level:2},{value:"Resource Counter",id:"resource-counter",level:2},{value:"DB connection pool counter",id:"db-connection-pool-counter",level:3},{value:"Importing data sources into JMX",id:"importing-data-sources-into-jmx",level:4},{value:"ThreadPool counter",id:"threadpool-counter",level:3},{value:"In case of using the Jconsole",id:"in-case-of-using-the-jconsole",level:4},{value:"Checking the result",id:"checking-the-result",level:4},{value:"Apdex",id:"apdex",level:2}];function o(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The WhaTap agent collects various data related to the application performance. The data can be broadly classified into 3 categories:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"User"}),": Real-time user or visitor"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Service"}),": Transaction, SQL, outbound call count and response, error rate, etc."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Resource"}),": System and process resource usage"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"user-counter",children:"User Counter"}),(0,r.jsx)(n.p,{children:"User is a client using the monitoring system. In the client, users are counted based on the browser."}),(0,r.jsx)(n.p,{children:"In the web system performance, user is important because it is the start point that generates the load. For user tracing, it is required to consider what criteria users are classified with and how to count them."})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"user-types",children:"User types"}),(0,r.jsx)(n.p,{children:"The WhaTap agent provides various options to identify users."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Remote IP"})}),"\n",(0,r.jsx)(n.p,{children:"Remote IP is used by default to identify the user. Remote IP has limitations when distinguishing actual users."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Cookie"})}),"\n",(0,r.jsxs)(n.p,{children:["Users are identified using the cookie. UUID is saved in the cookie named ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"WHATAP"})})," for all connected clients."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"trace_user_using_ip=false\n\n# Java agent v2.2.0 or later\nwclient_using_ip=false\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Header Key"})}),"\n",(0,r.jsx)(n.p,{children:"Users can be identified using the value passed to the HTTP header."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"user_header_ticket=USER\n\n# Java agent v2.2.0 or later\nwclient_header_ticket=USER\n"})}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"user-counting",children:"User counting"}),(0,r.jsx)(n.p,{children:"Depending on the counting method, it is used differently. Real-time users are measured to see how many users are using the system. Daily Active User is a measure for business management on how many users are interested in the service for a day."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Real-time user"})}),"\n",(0,r.jsx)(n.p,{children:"The number of users is counted in the last 5 minutes. Users are counted by shifting every 5 seconds. The numbers counted on each server are merged through the HyperLogLog algorithm."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Daily Active User"})," (",(0,r.jsx)(n.strong,{children:"DAU"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"The users who accessed the system for a day are counted. The number of users logged in for 24 hours is calculated through HyperLogLog."}),"\n"]}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"WhaTap collects byte blocks for user data by the server to count long-term users. If the data is merged by HyperLogLog, the visitors for more than a month can be theoretically calculated."})})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"service-counter",children:"Service Counter"}),(0,r.jsx)(n.p,{children:"Performance metrics for transactions include the number of SQLs or outbound calls used by transactions, the number of response time errors, etc."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Transaction Counter"})}),"\n",(0,r.jsx)(n.p,{children:"A counter starts measuring when any transaction is performed."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Count"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Response Time"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Error Count"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Active Transaction Counter"})}),"\n",(0,r.jsx)(n.p,{children:"It counts the number of transactions in progress."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Count"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Active Status"})}),"\n",(0,r.jsx)(n.p,{children:"Progress status is fixed into five: METHOD, SQL, HTTPC, DBC, SOCKET."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"METHOD - Calling a general function"}),"\n",(0,r.jsx)(n.li,{children:"SQL - Running DB SQL"}),"\n",(0,r.jsx)(n.li,{children:"HTTPC - Calling an HTTP outbound API (service)"}),"\n",(0,r.jsx)(n.li,{children:"DBC - DB connection is requrested; it is usually taken from the pool"}),"\n",(0,r.jsx)(n.li,{children:"SOCKET - Connecting the TCP session"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"SQL"})}),"\n",(0,r.jsx)(n.p,{children:"It counts the status of SQL running."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Count"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Response Time"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Error Count"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Patch Count"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"HTTP Call"})}),"\n",(0,r.jsx)(n.p,{children:"It counts outbound HTTP calls."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Count"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Response Time"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Error Count"})}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"resource-counter",children:"Resource Counter"}),(0,r.jsx)(n.p,{children:"It counts the server resources or resource uses inside the node processes."}),(0,r.jsx)(n.hr,{}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CPU"})," (sys, usr, wait, steal, irq, cores)"]}),"\n",(0,r.jsx)(n.p,{children:"CPU usage %. The data is collected for each type. Steal is meaningful only in the virtual environment. The number of CPU cores is also collected."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Process CPU"})}),"\n",(0,r.jsx)(n.p,{children:"CPU % used by the Java process."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Memory"})}),"\n",(0,r.jsx)(n.p,{children:"System memory usage (%)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Swap"})}),"\n",(0,r.jsx)(n.p,{children:"Swap memory usage (%)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Disk"})}),"\n",(0,r.jsx)(n.p,{children:"Disk is the Java process utilization (%) of the current directory"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Heap"})," (Total, Used, Perm)"]}),"\n",(0,r.jsx)(n.p,{children:"Total, Used, and Perm amounts of the Java heap memory. The data unit is KBytes."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GC"})," (Count, Time)"]}),"\n",(0,r.jsx)(n.p,{children:"Sum of the numbers of GCs and the times that occurred for 5 seconds."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"ObjectPendingFinalizationCount"})}),"\n",(0,r.jsx)(n.p,{children:"The number of objects waiting to finalize() during a GC call. As the value increases, the GC time may be delayed."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Thread"})," (start Count, Count, Daemon, Peak Count)"]}),"\n",(0,r.jsx)(n.p,{children:"It collects the numbers of threads from the start of JVM, number of running threads, number of daemons, and the maximum number of threads. You can make judgment about whether the thread pool is required."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DB Connection Count"})," (active,idle)"]}),"\n",(0,r.jsx)(n.p,{children:"It collects the idle count and active count in the connection pool."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Tomcat Thread Pool"})," (active, queueSize)"]}),"\n",(0,r.jsx)(n.p,{children:"It collects the performance data once the Tomcat's executor thread pool has been set."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:"title='XML'",children:'    <Executor name="tomcatThreadPool" namePrefix="catalina-exec-"\n    maxThreads="50" minSpareThreads="2" maxQueueSize="78"/>\n'})}),"\n"]}),"\n"]}),(0,r.jsx)(n.hr,{})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"db-connection-pool-counter",children:"DB connection pool counter"}),(0,r.jsx)(n.p,{children:'DB connection pool is called "DataSource." It is usually provided by WAS, but in some cases, any open source pool is used. Usage data is sometimes exposed as JMX, but not always.'}),(0,r.jsx)(n.p,{children:"WhaTap provides 2 different methods. The direct inquiry is performed by a single BCI and another method uses JMX. The BCI method is used by default and as a secondary method, the JMX method is provided."}),(0,r.jsx)(n.p,{children:"The following is the ByteCode Injection class associated with the default values for each option."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:"title='hikari_pool_enabled=false'",children:"com.zaxxer.hikari.pool.HikariPool\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:"title='dbcp_pool_enabled=true'",children:"org.apache.commons.dbcp.BasicDataSource\norg.apache.commons.dbcp2.BasicDataSource\norg.apache.tomcat.dbcp.dbcp.BasicDataSource\norg.apache.tomcat.dbcp.dbcp2.BasicDataSource\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:"title='tomcat_pool_enabled=true'",children:"org.apache.tomcat.jdbc.pool.ConnectionPool\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:"title='weblogic_pool_enabled=true'",children:"weblogic.jdbc.common.internal.ConnectionPool\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:"title='jeus_pool_enabled=true'",children:"jeus.jdbc.connectionpool.ConnectionPoolImpl\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:"title='jboss_pool_enabled=true'",children:"org.jboss.jca.core.connectionmanager.pool.PoolStatisticsImpl\n"})}),(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["If the BCI-related option is changed, you have to ",(0,r.jsx)(n.strong,{children:"restart"})," the service. Even after a class has been instrumented, it needs to be registered in the tracing table. Accordingly, redefinition does not work during execution."]})})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h4",children:[(0,r.jsx)(n.h4,{id:"importing-data-sources-into-jmx",children:"Importing data sources into JMX"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"If dbcp_pool_enabled==true, tomcat_ds_enabled=false\nIf weblogic_pool_enabled== true, weblogic_ds_enabled=false\n"})}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Check the ",(0,r.jsx)(n.strong,{children:"option auto determination"})," details."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Declare the option value of the related pool to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Change the DataSource-related option value to ",(0,r.jsx)(n.code,{children:"true"}),". The default value is ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"title='whatap.conf'",children:"tomcat_ds_enabled=false\nweblogic_ds_enabled=false\n"})}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"threadpool-counter",children:"ThreadPool counter"}),(0,r.jsx)(n.p,{children:"ThreadPool counters are collected through the JMX Mbean data. This metric may not be collected in some environments, although collection is fine for many use cases such as Tomcat."}),(0,r.jsx)(n.p,{children:"Additional settings are required for collection. The related settings are as follows:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf' {1,3,5} showLineNumbers",children:'jmx_threadpool_objectname=Catalina:type=ThreadPool,name="http-bio-8080"\n// Set the name of JMX ThreadPool MBean\njmx_threadpool_atter_activecount=connectionCount\n// Set the attribute representing the activecount value.\njmx_threadpool_atter_queuesize=maxThreads\n// Set the attribute representing the maxThreads value.\n'})}),(0,r.jsx)(n.p,{children:"Check the Mbean names such as JMX ThreadPool ObjectName and AttributeName through the JMX monitoring tool or see the Mbean documents for each WAS."}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["See the active WAS and framework-related ",(0,r.jsx)(n.a,{href:"https://www.ibm.com/support/knowledgecenter/ko/SS7K4U_liberty/com.ibm.websphere.wlp.zseries.doc/ae/rwlp_mon_threadpool.html",children:"document"})," and check the Mbean information."]})})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h4",children:[(0,r.jsx)(n.h4,{id:"in-case-of-using-the-jconsole",children:"In case of using the Jconsole"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ObjectName"})," : Catalina"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"type"})," : ThreadPool"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"name"}),' : "http-bio-8080"']}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://img.whatap.io/media/agent_java/data/threadpool_jmx01.png",alt:""})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ActiveName"})," : connectionCount"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QueueName"})," : maxThreads"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://img.whatap.io/media/agent_java/data/threadpool_jmx02.png",alt:""})}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h4",children:[(0,r.jsx)(n.h4,{id:"checking-the-result",children:"Checking the result"}),(0,r.jsx)(n.p,{children:"If the setting is finished, you can view the data from the counter as follows:"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://img.whatap.io/media/agent_java/data/threadpool_counter.png",alt:"Performance counter - normal status"})})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"apdex",children:"Apdex"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://img.whatap.io/media/agent_php/data/tinified/apdex.png",alt:""})}),(0,r.jsx)(n.p,{children:"Apdex (Appliccation Performance Index) is a performance metric that complies with the open standards. Apdex is based on the response time and is quantified as percentages of satisfied and accepted requests out of total requests. The Apdex graph has been added to the dashboard."}),(0,r.jsx)(n.p,{children:"Apdex can be used as a metric for user satisfaction and have a value between 0 and 1."}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"(Number of satisfied cases + (Number of tolerating cases * 0.5))/Total number of requests"}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Status"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Satisfied (",(0,r.jsx)(n.strong,{children:"S"}),")"]}),(0,r.jsxs)(n.td,{children:["No problem with the work \u2264 1.2 secs (",(0,r.jsx)(n.strong,{children:"S"})," as the default)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Tolerating (",(0,r.jsx)(n.strong,{children:"T"}),")"]}),(0,r.jsxs)(n.td,{children:["Users feel delay but working is possible \u2264 4.8 secs (",(0,r.jsx)(n.strong,{children:"S"})," * 4)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Frustrated (",(0,r.jsx)(n.strong,{children:"F"}),")"]}),(0,r.jsx)(n.td,{children:"Working is impossible > 4.8 secs (exceeds T and error)"})]})]})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"whatap.apdex_time"})," ",(0,r.jsx)("span",{class:"type",children:"millisecond"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default ",(0,r.jsx)(n.code,{children:"1200"})]}),"\n",(0,r.jsxs)(n.p,{children:["The default value (",(0,r.jsx)(n.strong,{children:"S"}),") can be modified in Agent CONFIG."]}),"\n"]}),"\n"]})]})]})}function c(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},5936:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>c});var r=JSON.parse('{"id":"java/metrics-performance-counter","title":"Application performance counter","description":"It guides you to the performance counter.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/java/metrics-performance-counter.mdx","sourceDirName":"java","slug":"/java/metrics-performance-counter","permalink":"/en/java/metrics-performance-counter","draft":false,"unlisted":false,"editUrl":"undefined/docs/java/metrics-performance-counter.mdx","tags":[],"version":"current","frontMatter":{"id":"metrics-performance-counter","title":"Application performance counter","description":"It guides you to the performance counter.","keywords":["Java","Metrics","Application","Performance counter","UI"],"isTranslationMissing":false},"sidebar":"javaSidebar","previous":{"title":"Application metrics","permalink":"/en/java/metrics-app"},"next":{"title":"Metrics Chart","permalink":"/en/java/metrics-chart-v2"}}'),t=s("85893"),i=s("50065"),o=s("79524");let c={id:"metrics-performance-counter",title:"Application performance counter",description:"It guides you to the performance counter.",keywords:["Java","Metrics","Application","Performance counter","UI"],isTranslationMissing:!1},a=void 0,l={},d=[...o.d$];function h(e){return(0,t.jsx)(o.ZP,{})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var r=s(67294);let t={},i=r.createContext(t);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);