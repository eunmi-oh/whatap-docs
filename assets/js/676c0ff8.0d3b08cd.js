"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["57276"],{43482:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>o,assets:()=>l,toc:()=>a,frontMatter:()=>c});var i=JSON.parse('{"id":"python/advanced-feature","title":"\uACE0\uAE09 \uAE30\uB2A5","description":"Python \uC5D0\uC774\uC804\uD2B8\uC758 \uACE0\uAE09 \uAE30\uB2A5\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4.","source":"@site/docs/python/advanced-feature.mdx","sourceDirName":"python","slug":"/python/advanced-feature","permalink":"/whatap-docs/python/advanced-feature","draft":false,"unlisted":false,"editUrl":"undefined/docs/python/advanced-feature.mdx","tags":[],"version":"current","frontMatter":{"id":"advanced-feature","title":"\uACE0\uAE09 \uAE30\uB2A5","description":"Python \uC5D0\uC774\uC804\uD2B8\uC758 \uACE0\uAE09 \uAE30\uB2A5\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4.","keywords":["Python","\uACE0\uAE09 \uAE30\uB2A5"],"isTranslationMissing":false},"sidebar":"pySidebar","previous":{"title":"\uD1B5\uACC4","permalink":"/whatap-docs/python/agent-static"},"next":{"title":"\uC5D0\uC774\uC804\uD2B8 \uC0AD\uC81C","permalink":"/whatap-docs/python/agent-remove"}}'),r=s("85893"),t=s("50065");let c={id:"advanced-feature",title:"\uACE0\uAE09 \uAE30\uB2A5",description:"Python \uC5D0\uC774\uC804\uD2B8\uC758 \uACE0\uAE09 \uAE30\uB2A5\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4.",keywords:["Python","\uACE0\uAE09 \uAE30\uB2A5"],isTranslationMissing:!1},d=void 0,l={},a=[{value:"\uC11C\uBC84\uBA85 \uC784\uC758 \uBD80\uC5EC\uC640 \uAD00\uB9AC",id:"custom-naming",level:2},{value:"\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uBA85 \uC9C0\uC815 \uC635\uC158",id:"\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uBA85-\uC9C0\uC815-\uC635\uC158",level:3},{value:"\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uBA85 \uD328\uD134",id:"\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uBA85-\uD328\uD134",level:3},{value:"Open File Descriptor \uC0AC\uC6A9\uB7C9 \uC218\uC9D1",id:"open-file-descriptor-usage-collection",level:2},{value:"\uD65C\uC131\uD654 \uC635\uC158",id:"\uD65C\uC131\uD654-\uC635\uC158",level:3},{value:"\uC218\uC9D1 \uBA54\uD2B8\uB9AD\uC2A4",id:"\uC218\uC9D1-\uBA54\uD2B8\uB9AD\uC2A4",level:3},{value:"AES 256 \uC554\uD638\uD654 \uC801\uC6A9",id:"aes-256-\uC554\uD638\uD654-\uC801\uC6A9",level:2},{value:"\uC81C\uC57D \uC0AC\uD56D",id:"\uC81C\uC57D-\uC0AC\uD56D",level:2},{value:"\uBCF5\uC218 \uB9AC\uC804\uC744 \uB2E8\uC77C \uD504\uB85C\uC81D\uD2B8\uB85C \uC120\uD0DD \uBD88\uAC00",id:"\uBCF5\uC218-\uB9AC\uC804\uC744-\uB2E8\uC77C-\uD504\uB85C\uC81D\uD2B8\uB85C-\uC120\uD0DD-\uBD88\uAC00",level:3},{value:"\uC5D0\uC774\uC804\uD2B8 \uC774\uB984(ONAME) \uC911\uBCF5 \uC0AC\uC6A9 \uBD88\uAC00",id:"\uC5D0\uC774\uC804\uD2B8-\uC774\uB984oname-\uC911\uBCF5-\uC0AC\uC6A9-\uBD88\uAC00",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"custom-naming",children:"\uC11C\uBC84\uBA85 \uC784\uC758 \uBD80\uC5EC\uC640 \uAD00\uB9AC"}),(0,r.jsx)(n.p,{children:"\uC5D0\uC774\uC804\uD2B8\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC11C\uBC84 \uC885\uB958\uC640 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC11C\uBC84\uC758 IP, \uC11C\uBE44\uC2A4 \uD3EC\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC790\uB3D9\uC73C\uB85C \uC11C\uBC84\uBA85\uC744 \uBD80\uC5EC\uD569\uB2C8\uB2E4."})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uBA85-\uC9C0\uC815-\uC635\uC158",children:"\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uBA85 \uC9C0\uC815 \uC635\uC158"}),(0,r.jsxs)(n.p,{children:["\uAE30\uBCF8 \uD328\uD134 \uBCC0\uACBD\uC740 ",(0,r.jsx)(n.em,{children:"whatap.conf"}),"\uC5D0\uC11C \uC124\uC815 \uAC00\uB2A5\uD569\uB2C8\uB2E4."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"object_name default: {type}-{ip2}-{ip3}-{process}\n"})})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uBA85-\uD328\uD134",children:"\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uBA85 \uD328\uD134"}),(0,r.jsx)(n.p,{children:"\uD504\uB85C\uC81D\uD2B8\uC5D0 \uB4F1\uB85D\uB41C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC11C\uBC84\uBCC4\uB85C \uB3D9\uC77C\uD55C \uC774\uB984\uC774 \uC0AC\uC6A9\uB418\uBA74 \uC548 \uB429\uB2C8\uB2E4. \uC11C\uBC84\uBA85\uC744 \uACE0\uC815\uC73C\uB85C \uC0AC\uC6A9\uD558\uC9C0 \uB9C8\uC138\uC694. Internal ip address\uB85C \uC778\uD574 \uC11C\uBC84 IP\uAC00 \uC911\uBCF5\uB418\uB294 \uACBD\uC6B0\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC11C\uBC84\uBA85\uC744 \uADF8\uB8F9 \uB2E8\uC704\uB85C \uD328\uD134\uD654\uD558\uC5EC \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uD328\uD134 \uC635\uC158"})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\uC124\uC815"}),(0,r.jsx)(n.th,{children:"\uC124\uBA85"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"app_name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ip#"}),(0,r.jsx)(n.td,{children:"Ip\uB97C .\uC73C\uB85C \uB098\uB204\uC5C8\uC744 \uB54C #\uBC88\uC9F8 \uC790\uB9AC(0\uBD80\uD130)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"app_process_name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hostname"}),(0,r.jsx)(n.td,{children:"\uD638\uC2A4\uD2B8 \uBA85"})]})]})]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"open-file-descriptor-usage-collection",children:"Open File Descriptor \uC0AC\uC6A9\uB7C9 \uC218\uC9D1"}),(0,r.jsx)(n.p,{children:"Python \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C Open File Descriptor \uC0AC\uC6A9\uB7C9\uC744 \uBAA8\uB2C8\uD130\uB9C1\uD558\uB294 \uAC83\uC740 \uC2DC\uC2A4\uD15C \uC790\uC6D0 \uAD00\uB9AC\uC5D0 \uD544\uC218\uC801\uC785\uB2C8\uB2E4. \uD30C\uC77C \uB514\uC2A4\uD06C\uB9BD\uD130\uB294 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uB3D9\uC2DC\uC5D0 \uC5F4 \uC218 \uC788\uB294 \uD30C\uC77C\uC758 \uC218\uB97C \uC81C\uD55C\uD558\uB294 \uC911\uC694\uD55C \uB9AC\uC18C\uC2A4\uC774\uBBC0\uB85C, \uC0AC\uC6A9\uB7C9\uC774 \uD55C\uACC4\uC5D0 \uB3C4\uB2EC\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0C8\uB85C\uC6B4 \uD30C\uC77C\uC744 \uC5F4 \uC218 \uC5C6\uAC8C \uB418\uC5B4 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBB38\uC81C\uB294 \uD2B9\uD788 \uBA40\uD2F0\uC2A4\uB808\uB4DC \uBC0F \uBA40\uD2F0\uD504\uB85C\uC138\uC2A4 \uD658\uACBD\uC5D0\uC11C \uBE48\uBC88\uD558\uAC8C \uBC1C\uC0DD\uD569\uB2C8\uB2E4."}),(0,r.jsx)(n.p,{children:"\uB610\uD55C \uD30C\uC77C \uB514\uC2A4\uD06C\uB9BD\uD130 \uB204\uC218 \uBC1C\uC0DD \uC2DC \uC790\uC6D0 \uACE0\uAC08\uB85C \uC778\uD574 \uC2DC\uC2A4\uD15C \uC131\uB2A5\uC774 \uC800\uD558\uB418\uACE0 \uC548\uC815\uC131\uC774 \uC190\uC0C1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uAE30\uB2A5\uC740 \uD30C\uC77C \uB514\uC2A4\uD06C\uB9BD\uD130 \uC0AC\uC6A9\uB7C9\uC744 \uBAA8\uB2C8\uD130\uB9C1\uD558\uC5EC \uC0AC\uC6A9\uB7C9\uC774 \uB192\uC740 \uC2DC\uC810\uC744 \uD30C\uC545\uD558\uACE0, \uD544\uC694\uC2DC \uD30C\uC77C \uB514\uC2A4\uD06C\uB9BD\uD130 \uD55C\uACC4\uB97C \uC99D\uAC00\uC2DC\uD0A4\uAC70\uB098 \uB204\uC218\uB97C \uD574\uACB0\uD560 \uC218 \uC788\uB3C4\uB85D \uB3D5\uC2B5\uB2C8\uB2E4."}),(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uC694\uAD6C \uC0AC\uD56D"})}),(0,r.jsx)(n.p,{children:"\uC640\uD0ED Python \uC5D0\uC774\uC804\uD2B8 1.7.2 \uBC84\uC804 \uC774\uC0C1\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."})]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"\uD65C\uC131\uD654-\uC635\uC158",children:"\uD65C\uC131\uD654 \uC635\uC158"}),(0,r.jsxs)(n.p,{children:["\uB2E4\uC74C \uC608\uC2DC\uB97C \uCC38\uC870\uD558\uC5EC ",(0,r.jsx)(n.em,{children:"whatap.conf"})," \uD30C\uC77C\uC744 \uC218\uC815\uD558\uC138\uC694."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"#\uC218\uC9D1 \uAE30\uB2A5 on/off \uC124\uC815\nopen_file_descriptor_enabled=true\n\n#\uC218\uC9D1 \uC8FC\uAE30 \uC124\uC815\uC73C\uB85C \uC0DD\uB7B5 \uC2DC \uAE30\uBCF8\uAC12 60\uCD08\nopen_file_descriptor_interval=60\n"})})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"\uC218\uC9D1-\uBA54\uD2B8\uB9AD\uC2A4",children:"\uC218\uC9D1 \uBA54\uD2B8\uB9AD\uC2A4"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\uC774\uB984"}),(0,r.jsx)(n.th,{children:"\uC124\uBA85"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"current_nofile_pct"})}),(0,r.jsx)(n.td,{children:"\uD604\uC7AC Open File Descriptor \uC0AC\uC6A9\uB7C9 \uBE44\uC728(%)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"currnet_nofile"})}),(0,r.jsx)(n.td,{children:"\uD604\uC7AC Open File Descriptor \uAC1C\uC218"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"max_nofile"})}),(0,r.jsx)(n.td,{children:"\uD504\uB85C\uC138\uC2A4\uC758 \uCD5C\uB300 Open File Descriptor \uD5C8\uC6A9 \uAC1C\uC218"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pid"})}),(0,r.jsx)(n.td,{children:"\uD504\uB85C\uC138\uC2A4 ID"})]})]})]})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h2",children:[(0,r.jsx)(n.h2,{id:"aes-256-\uC554\uD638\uD654-\uC801\uC6A9",children:"AES 256 \uC554\uD638\uD654 \uC801\uC6A9"}),(0,r.jsx)(n.p,{children:"\uC640\uD0ED \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBAA8\uB2C8\uD130\uB9C1 \uC5D0\uC774\uC804\uD2B8\uB294 \uC218\uC9D1\uB41C \uB370\uC774\uD130\uB97C \uC554\uD638\uD654\uD558\uC5EC \uC11C\uBC84\uB85C \uC804\uC1A1\uD569\uB2C8\uB2E4. \uB370\uC774\uD130\uC758 \uC911\uC694\uB3C4\uB098 \uC124\uC815\uC5D0 \uB530\uB77C \uC774\uB97C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),(0,r.jsx)(n.p,{children:"\uAE30\uBCF8\uC801\uC73C\uB85C XOR \uC5F0\uC0B0\uACFC AES \uC54C\uACE0\uB9AC\uC998\uC744 \uD1B5\uD55C \uC554\uD638\uD654\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uD3C9\uBB38\uC744 128\uBE44\uD2B8 \uB2E8\uC704\uB85C \uB098\uB204\uC5B4 \uC554\uD638\uD654, \uBCF5\uD638\uD654\uB97C \uC218\uD589\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uC758 \uC124\uC815\uC5D0 \uB530\uB77C 256\uBE44\uD2B8\uAE4C\uC9C0 \uD655\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uC124\uC815\uD558\uAE30"})}),"\n",(0,r.jsxs)(n.p,{children:["\uC5D0\uC774\uC804\uD2B8\uAC00 \uC124\uCE58\uB41C \uB514\uB809\uD130\uB9AC\uC5D0\uC11C ",(0,r.jsx)(n.em,{children:"whatap.conf"})," \uD30C\uC77C\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC124\uC815\uC744 \uCD94\uAC00\uD558\uC138\uC694."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:"title='whatap.conf'",children:"license={\uC561\uC138\uC2A4 \uD0A4}\nwhatap.server.host={\uC218\uC9D1 \uC11C\uBC84 IP}\ncypher_level=256\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uB2E4\uC2DC \uC2DC\uC791\uD558\uAE30"})}),"\n",(0,r.jsx)(n.p,{children:"\uC124\uC815\uC744 \uCD94\uAC00\uD55C \uD6C4 WAS\uB97C \uB2E4\uC2DC \uC2DC\uC791\uD569\uB2C8\uB2E4."}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(n.section,{className:"remark-sectionize-h2",children:(0,r.jsx)(n.h2,{id:"\uC81C\uC57D-\uC0AC\uD56D",children:"\uC81C\uC57D \uC0AC\uD56D"})}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"\uBCF5\uC218-\uB9AC\uC804\uC744-\uB2E8\uC77C-\uD504\uB85C\uC81D\uD2B8\uB85C-\uC120\uD0DD-\uBD88\uAC00",children:"\uBCF5\uC218 \uB9AC\uC804\uC744 \uB2E8\uC77C \uD504\uB85C\uC81D\uD2B8\uB85C \uC120\uD0DD \uBD88\uAC00"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://service.whatap.io",children:"\uC640\uD0ED \uBAA8\uB2C8\uD130\uB9C1 \uC11C\uBE44\uC2A4"}),"\uC5D0\uC11C ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"\uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131"})})," \uC2DC \uC9C0\uC5ED(Region)\uC740 \uC911\uBCF5 \uC120\uD0DD\uC774 \uBD88\uAC00\uD558\uBA70 \uBCF5\uC218\uC758 \uC9C0\uC5ED\uC744 \uD65C\uC6A9\uD558\uB294 \uACBD\uC6B0 \uBCC4\uB3C4\uC758 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4."]}),(0,r.jsx)(n.p,{children:"\uD074\uB77C\uC6B0\uB4DC \uD658\uACBD\uACFC \uAC19\uC774 \uBCF5\uC218\uC758 \uC9C0\uC5ED\uC5D0 \uC11C\uBC84\uAC00 \uC874\uC7AC\uD55C\uB2E4\uBA74, \uB124\uD2B8\uC6CC\uD06C latency \uB4F1 \uC131\uB2A5 \uC815\uBCF4 \uC218\uC9D1 \uC0C1\uC758 \uC81C\uC57D \uC0AC\uD56D\uC744 \uD68C\uD53C\uD558\uAE30 \uC704\uD574 \uC9C0\uC5ED \uB2E8\uC704\uB85C \uC218\uC9D1 \uC11C\uBC84\uB97C \uC704\uCE58\uC2DC\uCF1C\uC57C \uD569\uB2C8\uB2E4. \uC640\uD0ED\uC740 \uACE0\uAC1D \uC694\uAD6C \uC0AC\uD56D\uC5D0 \uBD80\uC751\uD558\uAE30 \uC704\uD558\uC5EC \uC9C0\uC5ED \uBCC4\uB85C \uC218\uC9D1 \uC11C\uBC84\uB97C \uAD6C\uCD95\uD569\uB2C8\uB2E4."})]}),"\n",(0,r.jsxs)(n.section,{className:"remark-sectionize-h3",children:[(0,r.jsx)(n.h3,{id:"\uC5D0\uC774\uC804\uD2B8-\uC774\uB984oname-\uC911\uBCF5-\uC0AC\uC6A9-\uBD88\uAC00",children:"\uC5D0\uC774\uC804\uD2B8 \uC774\uB984(ONAME) \uC911\uBCF5 \uC0AC\uC6A9 \uBD88\uAC00"}),(0,r.jsx)(n.p,{children:"\uC640\uD0ED \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uBAA8\uB2C8\uD130\uB9C1\uC740 \uC5D0\uC774\uC804\uD2B8\uC758 \uC2DD\uBCC4\uC744 \uC704\uD55C \uC6A9\uB3C4\uB85C \uC5D0\uC774\uC804\uD2B8\uC758 IP \uC8FC\uC18C\uC640 Port \uC815\uBCF4\uB97C \uD65C\uC6A9\uD569\uB2C8\uB2E4. \uB9CC\uC57D \uC0AC\uC6A9\uC790 \uD658\uACBD\uC758 \uBAA8\uB2C8\uD130\uB9C1 \uB300\uC0C1 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC11C\uBC84\uAC00 \uB3D9\uC77C IP, \uB3D9\uC77C Port\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 \uC640\uD0ED \uC11C\uBC84\uC5D0\uC11C \uD574\uB2F9 \uC11C\uBC84 \uC778\uC2A4\uD134\uC2A4\uB97C \uAD6C\uBD84\uD560 \uC218 \uC5C6\uAC8C \uB429\uB2C8\uB2E4."}),(0,r.jsxs)(n.p,{children:["\uC11C\uBC84 \uC778\uC2A4\uD134\uC2A4\uAC00 \uB3D9\uC801\uC73C\uB85C \uD655\uC7A5\uB418\uB294 \uD658\uACBD\uC774 \uC544\uB2C8\uB77C\uBA74 ",(0,r.jsx)(n.a,{href:"#custom-naming",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uACE0\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC2DD\uBCC4\uC744 \uC704\uD55C \uBA85\uCE6D\uC744 \uC9C1\uC811 \uC9C0\uC815\uD558\uB294 \uBC29\uC2DD\uC744 \uD1B5\uD574 \uC6B0\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,r.jsxs)(n.p,{children:["\uBAA8\uB2C8\uD130\uB9C1 \uB300\uC0C1 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 internal address \uB610\uB294 \uB124\uD2B8\uC6CC\uD06C \uAC00\uC0C1\uD654\uB85C \uC778\uD574 \uC911\uBCF5\uB41C IP\uB97C \uC0AC\uC6A9\uD560 \uACBD\uC6B0 ",(0,r.jsx)(n.a,{href:"#custom-naming",children:"\uB2E4\uC74C \uBB38\uC11C"}),"\uB97C \uCC38\uACE0\uD558\uC5EC \uBCC4\uB3C4\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uBA85 \uD328\uD134\uC744 \uD65C\uC6A9\uD569\uB2C8\uB2E4."]})]})]})}function o(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var i=s(67294);let r={},t=i.createContext(r);function c(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);