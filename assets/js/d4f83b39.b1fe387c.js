"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["55378"],{79454:function(i,s,I){I.r(s),I.d(s,{metadata:()=>n,contentTitle:()=>c,default:()=>A,assets:()=>g,toc:()=>j,frontMatter:()=>l});var n=JSON.parse('{"id":"kubernetes/pod-init-perform","title":"Pod \uC2DC\uC791 \uBD84\uC11D","description":"Pod \uC2DC\uC791 \uBD84\uC11D \uAE30\uB2A5\uC744 \uD65C\uC6A9\uD558\uBA74 Pod \uC2DC\uC791\uC2DC \uD53C\uD06C \uC0AC\uC6A9\uB7C9\uACFC \uCD08\uAE30\uD654 \uC2DC\uAC04\uC744 \uBD84\uC11D\uD558\uC5EC \uCD5C\uC801\uC758 Initial Delay \uC124\uC815\uC5D0 \uB3C4\uC6C0\uC744 \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","source":"@site/docs/kubernetes/pod-init-perform.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/pod-init-perform","permalink":"/whatap-docs/kubernetes/pod-init-perform","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/pod-init-perform.mdx","tags":[],"version":"current","frontMatter":{"id":"pod-init-perform","title":"Pod \uC2DC\uC791 \uBD84\uC11D","description":"Pod \uC2DC\uC791 \uBD84\uC11D \uAE30\uB2A5\uC744 \uD65C\uC6A9\uD558\uBA74 Pod \uC2DC\uC791\uC2DC \uD53C\uD06C \uC0AC\uC6A9\uB7C9\uACFC \uCD08\uAE30\uD654 \uC2DC\uAC04\uC744 \uBD84\uC11D\uD558\uC5EC \uCD5C\uC801\uC758 Initial Delay \uC124\uC815\uC5D0 \uB3C4\uC6C0\uC744 \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","keywords":["\uCFE0\uBC84\uB124\uD2F0\uC2A4","\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uBAA8\uB2C8\uD130\uB9C1","\uBD84\uC11D","Pod \uCD08\uAE30\uD654","Pod \uC2DC\uC791 \uBD84\uC11D"],"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"Pod \uC2DC\uC791 \uBD84\uC11D","permalink":"/whatap-docs/kubernetes/pod-init-perform-v2"},"next":{"title":"\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD788\uD2B8\uB9F5","permalink":"/whatap-docs/kubernetes/trs-view"}}'),e=I("85893"),M=I("50065");let l={id:"pod-init-perform",title:"Pod \uC2DC\uC791 \uBD84\uC11D",description:"Pod \uC2DC\uC791 \uBD84\uC11D \uAE30\uB2A5\uC744 \uD65C\uC6A9\uD558\uBA74 Pod \uC2DC\uC791\uC2DC \uD53C\uD06C \uC0AC\uC6A9\uB7C9\uACFC \uCD08\uAE30\uD654 \uC2DC\uAC04\uC744 \uBD84\uC11D\uD558\uC5EC \uCD5C\uC801\uC758 Initial Delay \uC124\uC815\uC5D0 \uB3C4\uC6C0\uC744 \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",keywords:["\uCFE0\uBC84\uB124\uD2F0\uC2A4","\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uBAA8\uB2C8\uD130\uB9C1","\uBD84\uC11D","Pod \uCD08\uAE30\uD654","Pod \uC2DC\uC791 \uBD84\uC11D"],isTranslationMissing:!1},c=void 0,g={},j=[{value:"\uAE30\uBCF8 \uD654\uBA74 \uC548\uB0B4",id:"\uAE30\uBCF8-\uD654\uBA74-\uC548\uB0B4",level:2},{value:"\uCEEC\uB7FC \uC548\uB0B4",id:"\uCEEC\uB7FC-\uC548\uB0B4",level:2}];function d(i){let s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",section:"section",strong:"strong",ul:"ul",...(0,M.a)(),...i.components},{Cmdname:n,ImgLang:l}=s;return!n&&t("Cmdname",!0),!l&&t("ImgLang",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(s.p,{children:["\uD648 \uD654\uBA74 > \uD504\uB85C\uC81D\uD2B8 \uC120\uD0DD > ",(0,e.jsx)(s.em,{children:(0,e.jsx)(s.strong,{children:"\uBD84\uC11D"})})," > ",(0,e.jsx)(s.em,{children:(0,e.jsx)(s.strong,{children:"Pod \uC2DC\uC791 \uBD84\uC11D"})})]}),"\n",(0,e.jsxs)(s.admonition,{type:"note",children:[(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"\uC640\uD0ED \uB178\uB4DC \uC5D0\uC774\uC804\uD2B8 \uBC84\uC804 1.4.2 \uBBF8\uB9CC"})}),(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["\uC2E0\uADDC ",(0,e.jsx)(s.a,{href:"pod-init-perform-v2",children:"Pod \uC2DC\uC791 \uBD84\uC11D"})," \uBA54\uB274 \uB300\uC2E0 \uAE30\uC874 \uBA54\uB274(\uAD6C ",(0,e.jsx)(s.strong,{children:"Pod \uCD08\uAE30\uD654 \uC131\uB2A5"}),") \uD654\uBA74\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["\uD074\uB7EC\uC2A4\uD130 \uD504\uB85C\uC81D\uD2B8(",(0,e.jsx)("code",{class:"my",children:"CP"}),")\uC778 \uACBD\uC6B0\uB9CC \uC811\uADFC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n"]})]}),"\n",(0,e.jsx)(s.p,{children:"Springboot\uB97C \uD3EC\uD568\uD55C JVM \uAE30\uBC18 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uCD08\uAE30\uD654 \uC2DC\uC810\uC5D0 \uB9CE\uC740 \uC790\uC6D0\uC744 \uC0AC\uC6A9\uD574 Liveness \uCCB4\uD06C\uC5D0 \uC2E4\uD328\uD558\uB294 \uACBD\uC6B0\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uB9CC\uC57D \uC77C\uC815 \uD69F\uC218 \uC774\uC0C1 Liveness \uCCB4\uD06C\uC5D0 \uC2E4\uD328\uD558\uB294 \uACBD\uC6B0 \uD574\uB2F9 Pod\uAC00 \uC0AD\uC81C\uB418\uACE0 \uBB34\uD55C \uC7AC\uC2DC\uC791 \uD604\uC0C1\uC774 \uBC1C\uC0DD\uD558\uC5EC \uBC30\uD3EC \uC2E4\uD328\uB85C \uC774\uC5B4\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),"\n",(0,e.jsxs)(s.p,{children:["\uC640\uD0ED \uCFE0\uBC84\uB124\uD2F0\uC2A4\uC758 ",(0,e.jsx)(s.em,{children:(0,e.jsx)(s.strong,{children:"Pod \uC2DC\uC791 \uBD84\uC11D"})})," \uAE30\uB2A5\uC744 \uD65C\uC6A9\uD558\uBA74 Pod \uC2DC\uC791 \uC2DC \uD53C\uD06C \uC0AC\uC6A9\uB7C9\uACFC \uCD08\uAE30\uD654 \uC2DC\uAC04\uC744 \uBD84\uC11D\uD558\uC5EC \uCD5C\uC801\uC758 Initial Delay(Liveness \uCCB4\uD06C \uBA74\uC81C \uC2DC\uAC04) \uC124\uC815\uC5D0 \uB3C4\uC6C0\uC744 \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,e.jsxs)(s.section,{className:"remark-sectionize-h2",children:[(0,e.jsx)(s.h2,{id:"\uAE30\uBCF8-\uD654\uBA74-\uC548\uB0B4",children:"\uAE30\uBCF8 \uD654\uBA74 \uC548\uB0B4"}),(0,e.jsx)(l,{img:"k8s-pod-init-perform.png",desc:"Pod \uC2DC\uC791 \uBD84\uC11D"}),(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.img,{alt:"number 01",src:I(56499).Z+"",width:"35",height:"35"})," \uC601\uC5ED \uC88C\uCE21 \uC0C1\uB2E8\uC5D0\uC11C \uC0C1\uD0DC\uBCC4 Pod \uAC1C\uC218\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.img,{alt:"number 01",src:I(56499).Z+"",width:"35",height:"35"})," \uC601\uC5ED \uC6B0\uCE21 \uC0C1\uB2E8\uC5D0\uC11C ",(0,e.jsx)(s.img,{alt:"\uC0C8\uB85C\uACE0\uCE68 \uC544\uC774\uCF58",src:I(2431).Z+"",width:"24",height:"24"})," ",(0,e.jsx)(s.em,{children:(0,e.jsx)(s.strong,{children:"\uC0C8\uB85C \uACE0\uCE68"})})," \uC544\uC774\uCF58\uC744 \uC120\uD0DD\uD574 \uC0C8\uB85C \uACE0\uCE68\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.img,{alt:"number 01",src:I(56499).Z+"",width:"35",height:"35"})," \uC601\uC5ED \uC88C\uCE21\uC5D0\uC11C ",(0,e.jsx)(s.img,{alt:"\uCEEC\uB7FC \uC120\uD0DD \uC544\uC774\uCF58",src:I(78221).Z+"",width:"20",height:"20"})," ",(0,e.jsx)(s.em,{children:(0,e.jsx)(s.strong,{children:"\uCEEC\uB7FC \uC120\uD0DD"})})," \uC544\uC774\uCF58\uC744 \uC120\uD0DD\uD574 \uCEEC\uB7FC\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.img,{alt:"number 01",src:I(56499).Z+"",width:"35",height:"35"})," \uC601\uC5ED \uC6B0\uCE21 \uC785\uB825\uCC3D\uC5D0\uC11C Pod ",(0,e.jsx)(n,{sid:"name",className:"uitext"})," \uB610\uB294 ",(0,e.jsx)(n,{sid:"qosClass",className:"uitext"}),"\uB97C \uAC80\uC0C9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.img,{alt:"number 02",src:I(5178).Z+"",width:"35",height:"35"})," \uC601\uC5ED\uC5D0\uC11C \uC6D0\uD558\uB294 \uCEEC\uB7FC\uC744 \uC120\uD0DD \uC2DC \uD574\uB2F9 \uCEEC\uB7FC \uAE30\uC900\uC73C\uB85C \uBAA9\uB85D\uC744 \uC815\uB82C\uD574 \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n"]}),"\n"]})]}),"\n",(0,e.jsxs)(s.section,{className:"remark-sectionize-h2",children:[(0,e.jsx)(s.h2,{id:"\uCEEC\uB7FC-\uC548\uB0B4",children:"\uCEEC\uB7FC \uC548\uB0B4"}),(0,e.jsx)(l,{img:"k8s-pod-init-perform-cl.png",desc:"Pod \uCD08\uAE30\uD654 \uC131\uB2A5 \uCEEC\uB7FC"}),(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.em,{children:(0,e.jsx)(s.strong,{children:"Pod \uC2DC\uC791 \uBD84\uC11D"})})," \uBAA9\uB85D\uC740 \uB2E4\uC74C\uACFC \uAC19\uC774 ",(0,e.jsx)(n,{sid:"pod_info",className:"uitext"}),"\uC640 Pod \uCD08\uAE30\uD654 \uD0C0\uC784\uB77C\uC778\uC5D0 \uB530\uB77C \uCEEC\uB7FC\uC744 \uBD84\uB958\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]})]}),"\n",(0,e.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,e.jsx)(s.h3,{id:"",children:(0,e.jsx)(n,{sid:"pod_info",className:"b600"})}),(0,e.jsxs)(s.p,{children:["Pod\uC758 ",(0,e.jsx)(n,{sid:"name",className:"uitext"}),"\uACFC ",(0,e.jsx)(n,{sid:"phase",className:"uitext"}),", ",(0,e.jsx)(n,{sid:"qosClass",className:"uitext"}),", ",(0,e.jsx)(n,{sid:"startTime",className:"uitext"}),"\uC5D0 \uB300\uD55C \uC815\uBCF4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"phase",className:"uitext"}),": Pod\uC758 \uB77C\uC774\uD504 \uC0AC\uC774\uD074\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.img,{alt:"\uC77C\uC2DC\uC815\uC9C0 \uC544\uC774\uCF58",src:I(43799).Z+"",width:"24",height:"24"})," Pending: \uCFE0\uBC84\uB124\uD2F0\uC2A4 \uD074\uB7EC\uC2A4\uD130 \uB0B4\uBD80\uC5D0\uC11C Pod \uC2DC\uC791\uC774 \uC2B9\uC778\uB418\uC5C8\uC9C0\uB9CC \uCEE8\uD14C\uC774\uB108\uAC00 \uC0DD\uC131\uB418\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.img,{alt:"\uC815\uC0C1 \uC544\uC774\uCF58",src:I(68128).Z+"",width:"24",height:"24"})," Running: Pod\uAC00 \uB178\uB4DC\uC5D0 \uBC14\uC778\uB529\uB418\uACE0 \uBAA8\uB4E0 \uCEE8\uD14C\uC774\uB108\uAC00 \uC0DD\uC131\uB418\uACE0 \uD558\uB098 \uC774\uC0C1\uC758 \uCEE8\uD14C\uC774\uB108\uAC00 \uC544\uC9C1 \uC2E4\uD589 \uC911\uC774\uAC70\uB098 \uC2DC\uC791 \uB610\uB294 \uC7AC\uC2DC\uC791 \uC911\uC5D0 \uC788\uB294 \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.img,{alt:"\uC131\uACF5 \uC544\uC774\uCF58",src:I(43956).Z+"",width:"24",height:"24"})," Succeeded: Pod\uC758 \uBAA8\uB4E0 \uCEE8\uD14C\uC774\uB108\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uC885\uB8CC\uB418\uC5C8\uC73C\uBA70 \uC7AC\uC2DC\uC791\uB418\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.img,{alt:"\uC704\uD5D8 \uC544\uC774\uCF58",src:I(56744).Z+"",width:"24",height:"24"})," Failed: Pod\uC758 \uCEE8\uD14C\uC774\uB108 \uC911 \uD558\uB098 \uC774\uC0C1\uC758 \uCEE8\uD14C\uC774\uB108\uAC00 \uC2E4\uD328\uD574 \uC885\uB8CC\uB41C \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.img,{alt:"\uBBF8\uC9C0 \uC544\uC774\uCF58",src:I(91433).Z+"",width:"24",height:"24"})," Unknown: \uC5B4\uB5A4 \uC774\uC720\uB85C Pod\uC640 \uD1B5\uC2E0\uD560 \uC218 \uC5C6\uB294 \uC0C1\uD0DC\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"qosClass",className:"uitext"}),": Pod\uC758 Quality of Service\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4. QoS \uD074\uB798\uC2A4\uB294 \uB9AC\uC18C\uC2A4 \uBD80\uC871 \uC2DC Pod\uC758 \uC6B0\uC120 \uC21C\uC704\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4. \uC6B0\uC120 \uC21C\uC704\uAC00 \uB192\uC740 Pod\uAC00 \uC6B0\uC120 \uC21C\uC704\uAC00 \uB0AE\uC740 Pod\uBCF4\uB2E4 \uBA3C\uC800 \uC885\uB8CC\uB429\uB2C8\uB2E4."]}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"Guaranteed: \uB178\uB4DC\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uB9AC\uC18C\uC2A4\uB97C \uBCF4\uC7A5\uBC1B\uACE0 \uB2E4\uB978 Pod\uBCF4\uB2E4 \uC6B0\uC120\uC801\uC73C\uB85C \uD560\uB2F9\uD569\uB2C8\uB2E4. \uAC00\uC7A5 \uB9C8\uC9C0\uB9C9\uC5D0 \uC885\uB8CC\uB429\uB2C8\uB2E4."}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"Pod\uC758 \uBAA8\uB4E0 \uCEE8\uD14C\uC774\uB108\uAC00 CPU \uBC0F \uBA54\uBAA8\uB9AC request\uB97C \uAC00\uC9C0\uACE0 \uC788\uB294 \uACBD\uC6B0\uC785\uB2C8\uB2E4."}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"Pod\uC758 \uBAA8\uB4E0 \uCEE8\uD14C\uC774\uB108\uAC00 CPU \uBC0F \uBA54\uBAA8\uB9AC limit\uC744 \uAC00\uC9C0\uACE0 \uC788\uC73C\uBA70 \uD574\uB2F9 \uAC12\uC774 request\uC640 \uB3D9\uC77C\uD55C \uACBD\uC6B0\uC785\uB2C8\uB2E4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"Burstable: Pod\uB294 \uB178\uB4DC \uB9AC\uC18C\uC2A4\uAC00 \uBD80\uC871\uD55C \uACBD\uC6B0\uC5D0\uB294 \uC77C\uBD80 \uB9AC\uC18C\uC2A4\uB97C \uD560\uB2F9\uD569\uB2C8\uB2E4."}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"Guaranteed \uD074\uB798\uC2A4\uC758 \uC870\uAC74\uC744 \uCDA9\uC871\uD558\uC9C0 \uBABB\uD558\uB294 \uACBD\uC6B0\uC785\uB2C8\uB2E4."}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"Pod\uC758 \uCEE8\uD14C\uC774\uB108 \uC911 \uD558\uB098\uB77C\uB3C4 CPU \uBC0F \uBA54\uBAA8\uB9AC\uC5D0 \uB300\uD55C request \uB610\uB294 limit\uC774 \uC124\uC815\uB41C \uACBD\uC6B0\uC785\uB2C8\uB2E4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"BestEffort: \uB9AC\uC18C\uC2A4 request\uB098 limit\uC774 \uC5C6\uAE30\uC5D0 \uB2E4\uB978 Pod\uBCF4\uB2E4 \uC6B0\uC120 \uC21C\uC704\uAC00 \uB0AE\uC2B5\uB2C8\uB2E4. \uAC00\uC7A5 \uBA3C\uC800 \uC885\uB8CC\uB429\uB2C8\uB2E4."}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsx)(s.li,{children:"Pod\uC758 \uBAA8\uB4E0 \uCEE8\uD14C\uC774\uB108\uAC00 CPU\uBC0F \uBA54\uBAA8\uB9AC\uC5D0 \uB300\uD55C request\uC640 limit\uC774 \uC5C6\uB294 \uACBD\uC6B0\uC785\uB2C8\uB2E4."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"startTime",className:"uitext"}),": Pod\uAC00 \uC2DC\uC791\uB41C \uC2DC\uAC04 \uB610\uB294 \uC0DD\uC131\uB41C \uC2DC\uAC04\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n"]})]}),"\n",(0,e.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,e.jsx)(s.h3,{id:"-1",children:(0,e.jsx)(n,{sid:"ITM07179",className:"b600"})}),(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07179",className:"uitext"}),"\uC740 \uCD5C\uCD08 \uBA54\uD2B8\uB9AD\uC2A4 \uB370\uC774\uD130\uAC00 \uC218\uC9D1\uB41C \uC2DC\uC810\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07175",className:"uitext"}),": \uCD08\uAE30\uD654\uAC00 \uC2DC\uC791\uB41C \uC2DC\uC810\uC5D0 \uB300\uD55C \uB370\uC774\uD130\uB85C \uCCAB \uB370\uC774\uD130 \uC218\uC9D1 \uC2DC\uAC04\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07170",className:"uitext"}),": \uCD08\uAE30\uD654 \uC2DC\uC791 \uC2DC CPU limit\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07169",className:"uitext"}),": \uCD08\uAE30\uD654 \uC2DC\uC791 \uC2DC CPU request\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07171",className:"uitext"}),": \uCD08\uAE30\uD654 \uC2DC\uC791 \uC2DC \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C CPU \uC81C\uD55C\uC744 \uCD08\uACFC\uD558\uB294 \uC0AC\uC6A9 \uC2DC\uB3C4 \uBC1C\uC0DD \uC2DC \uC99D\uAC00\uD558\uB294 \uAC12\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07173",className:"uitext"}),": \uCD08\uAE30\uD654 \uC2DC\uC791 \uC2DC \uC124\uC815\uD55C \uBA54\uBAA8\uB9AC limit\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07172",className:"uitext"}),": \uCD08\uAE30\uD654 \uC2DC\uC791 \uC2DC \uC694\uCCAD\uD55C \uBA54\uBAA8\uB9AC request\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07174",className:"uitext"}),": \uCD08\uAE30\uD654 \uC2DC\uC791 \uC2DC \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uBA54\uBAA8\uB9AC \uC81C\uD55C\uC744 \uCD08\uACFC\uD558\uB294 \uC0AC\uC6A9 \uC2DC\uB3C4 \uBC1C\uC0DD \uC2DC \uC99D\uAC00\uD558\uB294 \uAC12\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n"]})]}),"\n",(0,e.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,e.jsx)(s.h3,{id:"-2",children:(0,e.jsx)(n,{sid:"ITM07178",className:"b600"})}),(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07178",className:"uitext"}),"\uC740 \uCD08\uAE30\uD654 \uC2DC\uC791 \uD6C4 5\uBD84\uAC04 \uB370\uC774\uD130\uC758 CpuByLimit \uD3C9\uADE0 \uAC12\uBCF4\uB2E4 \uB0AE\uC740 CpuByLimit \uAC12\uC758 \uB370\uC774\uD130\uAC00 \uBC1C\uC0DD\uD55C \uC774\uC804 \uC2DC\uC810\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07164",className:"uitext"}),": Pod \uCD08\uAE30\uD654\uC5D0 \uC18C\uC694\uB41C \uC2DC\uAC04\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n",(0,e.jsxs)(s.blockquote,{children:["\n",(0,e.jsx)(s.p,{children:"\uCD08\uAE30\uD654 \uC2DC\uC791 \uC2DC 5\uBD84\uAC04\uC758 \uB370\uC774\uD130 \uC911 CpuByLimit\uC758 \uD3C9\uADE0 \uAC12\uBCF4\uB2E4 \uB0AE\uC740 CpuByLimit \uAC12\uC774 \uC218\uC9D1\uB41C \uC2DC\uAC04 - \uCCAB \uB370\uC774\uD130 \uC218\uC9D1 \uC2DC\uAC04"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07162",className:"uitext"}),": \uCD08\uAE30\uD654 \uC911 \uC0AC\uC6A9\uD55C CpuByLimit\uC758 \uD3C9\uADE0 \uAC12\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07163",className:"uitext"}),": \uCD08\uAE30\uD654 \uC911 \uD574\uB2F9 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC0AC\uC6A9\uD55C \uBA54\uBAA8\uB9AC \uCD5C\uB300 \uC0AC\uC6A9\uB7C9\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n"]}),(0,e.jsx)(s.admonition,{type:"note",children:(0,e.jsxs)(s.p,{children:["CpuByLimit(",(0,e.jsx)(s.code,{children:"cpu_per_quota"}),")\uC740 CPU Limit \uAE30\uC900 CPU \uC804\uCCB4 \uC0AC\uC6A9\uB960\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]})})]}),"\n",(0,e.jsxs)(s.section,{className:"remark-sectionize-h3",children:[(0,e.jsx)(s.h3,{id:"-3",children:(0,e.jsx)(n,{sid:"ITM07177",className:"b600"})}),(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07177",className:"uitext"}),"\uB294 \uCD08\uAE30\uD654 \uC2DC\uC791 \uD6C4 5\uBD84\uAC04 \uB370\uC774\uD130\uC758 CpuByLimit \uD3C9\uADE0 \uAC12\uBCF4\uB2E4 \uB0AE\uC740 CpuByLimit \uAC12\uC758 \uB370\uC774\uD130\uAC00 \uBC1C\uC0DD\uD55C \uC2DC\uC810\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07176",className:"uitext"}),": \uCD08\uAE30\uD654 \uC644\uB8CC \uC2DC\uC810\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07165",className:"uitext"}),": \uCD08\uAE30\uD654 \uC644\uB8CC \uD6C4 \uC0AC\uC6A9\uD55C CpuByLimit\uC758 \uD3C9\uADE0 \uAC12\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07166",className:"uitext"}),": \uCD08\uAE30\uD654 \uC644\uB8CC \uD6C4 \uD574\uB2F9 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC0AC\uC6A9\uD55C \uBA54\uBAA8\uB9AC \uCD5C\uB300 \uC0AC\uC6A9\uB7C9\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(n,{sid:"ITM07167",className:"uitext"}),": \uCD08\uAE30\uD654 \uC644\uB8CC \uD6C4 5\uBD84 \uB3D9\uC548\uC758 \uBC00\uB9AC\uCD08 \uB2E8\uC704 \uC2DC\uAC04\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."]}),"\n"]}),"\n"]})]})]})}function A(i={}){let{wrapper:s}={...(0,M.a)(),...i.components};return s?(0,e.jsx)(s,{...i,children:(0,e.jsx)(d,{...i})}):d(i)}function t(i,s){throw Error("Expected "+(s?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}},43956:function(i,s,I){I.d(s,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDMTcuNTIyOCAyIDIyIDYuNDc3MTUgMjIgMTJDMjIgMTcuNTIyOCAxNy41MjI4IDIyIDEyIDIyQzYuNDc3MTUgMjIgMiAxNy41MjI4IDIgMTJDMiA2LjQ3NzE1IDYuNDc3MTUgMiAxMiAyWiIgZmlsbD0iIzQ0ODVGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjQ2MDggOEwxNyA5LjUxNDM5TDEwLjQzOCAxNkw3IDEyLjU0NDZMOC41MjM3NyAxMS4wNDUzTDEwLjQzOCAxMy4wNzE4TDE1LjQ2MDggOFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},68128:function(i,s,I){I.d(s,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDMTcuNTIyOCAyIDIyIDYuNDc3MTUgMjIgMTJDMjIgMTcuNTIyOCAxNy41MjI4IDIyIDEyIDIyQzYuNDc3MTUgMjIgMiAxNy41MjI4IDIgMTJDMiA2LjQ3NzE1IDYuNDc3MTUgMiAxMiAyWiIgZmlsbD0iIzAwQjU0MyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjQ2MTEgOEwxNy4wMDAyIDkuNTE0MzlMMTAuNDM4MiAxNkw3LjAwMDI0IDEyLjU0NDZMOC41MjQwMSAxMS4wNDUzTDEwLjQzODIgMTMuMDcxOEwxNS40NjExIDhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},78221:function(i,s,I){I.d(s,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiPjwvcGF0aD4KICAgICAgICA8cGF0aCBjbGFzcz0iZmlsbGVyIiBmaWxsPSIjNzU3NTc1IiBkPSJNMjAgMkg0Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6TTggMjBINHYtNGg0djR6bTAtNkg0di00aDR2NHptMC02SDRWNGg0djR6bTYgMTJoLTR2LTRoNHY0em0wLTZoLTR2LTRoNHY0em0wLTZoLTRWNGg0djR6bTYgMTJoLTR2LTRoNHY0em0wLTZoLTR2LTRoNHY0em0wLTZoLTRWNGg0djR6Ij48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="},91433:function(i,s,I){I.d(s,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyQzE3LjUyMjggMiAyMiA2LjQ3NzE1IDIyIDEyQzIyIDE3LjUyMjggMTcuNTIyOCAyMiAxMiAyMkM2LjQ3NzE1IDIyIDIgMTcuNTIyOCAyIDEyQzIgNi40NzcxNSA2LjQ3NzE1IDIgMTIgMlpNMTIgNEM3LjU4MTcyIDQgNCA3LjU4MTcyIDQgMTJDNCAxNi40MTgzIDcuNTgxNzIgMjAgMTIgMjBDMTYuNDE4MyAyMCAyMCAxNi40MTgzIDIwIDEyQzIwIDcuNTgxNzIgMTYuNDE4MyA0IDEyIDRaTTEyIDZDOS43OSA2IDggNy43OSA4IDEwSDEwQzEwIDguOSAxMC45IDggMTIgOEMxMy4xIDggMTQgOC45IDE0IDEwQzE0IDEwLjg3OTIgMTMuNDIwMiAxMS4zMjM2IDEyLjc3MDQgMTEuODIxN0MxMS45NDIxIDEyLjQ1NjYgMTEgMTMuMTc4NyAxMSAxNUgxM0MxMyAxMy45MDQ2IDEzLjcxMSAxMy4yODMzIDE0LjQ0MDggMTIuNjQ1NUMxNS4yMSAxMS45NzMzIDE2IDExLjI4MjkgMTYgMTBDMTYgNy43OSAxNC4yMSA2IDEyIDZaTTEzIDE4VjE2SDExVjE4SDEzWiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K"},56744:function(i,s,I){I.d(s,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjE0MjUgNC40NjYxNUMxMS41MzU0IDMuODQ1MDIgMTIuNDQwNCAzLjg0NDUyIDEyLjgzMzkgNC40NjUyM0wyMi4zNDI0IDE5LjQ2MDFDMjIuNzY1NyAyMC4xMjc2IDIyLjI4NjcgMjEgMjEuNDk3IDIxSDIuNTAzMDNDMS43MTM4MSAyMSAxLjIzNDc1IDIwLjEyODYgMS42NTcwMSAxOS40NjExTDExLjE0MjUgNC40NjYxNVoiIGZpbGw9IiNERjM3MzciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAxNkgxMVYxOEgxM1YxNlpNMTMgMTBIMTFWMTVIMTNWMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},43799:function(i,s,I){I.d(s,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcGF1c2U8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUyLjAwMDAwMCwgLTc4Mi4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9InN1Z2dlc3RlZC1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCA3MzcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcGF1c2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4wMDAwMDAsIDQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMDAwMDAwLCA1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMywwIEwzLDE0IEwwLDE0IEwwLDAgTDMsMCBaIE0xMCwwIEwxMCwxNCBMNywxNCBMNywwIEwxMCwwIFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},2431:function(i,s,I){I.d(s,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcmVmcmVzaDwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NDcuMDAwMDAwLCAtMjI0Mi4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9InRpbWUtaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQzLjAwMDAwMCwgMjE5Ny4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1yZWZyZXNoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDQuMDAwMDAwLCA0NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLDIyIEwxNC41LDE4LjkwNzQyNDIgTDEwLDE2IEwxMCwyMiBaIE0xMCw2LjEgTDUuNSwzLjAwNzQyNDE5IEwxMCwwLjEgTDEwLDYuMSBaIiBpZD0iSWNvbiIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjQzNDgwMDEsNi4xMjI3ODYxOCBMNC4wMzc5MDMwOSw3LjMzMDI0MzQ5IEMzLjM3OTczNzcsOC4zOTcyNjMxNiAzLDkuNjU0Mjg1MzQgMywxMSBDMywxNC44NjU5OTMyIDYuMTM0MDA2NzUsMTggMTAsMTggQzEwLjU3Nzg3NjQsMTggMTEuMTM5Mzk3OCwxNy45Mjk5NzU5IDExLjY3NjU0MTksMTcuNzk3OTQ5OSBMMTMuNjAyNjQ2OCwxOS4yNDk5NjQ0IEMxMi40OTk1MTY3LDE5LjczMjM2NjYgMTEuMjgxMDEyOSwyMCAxMCwyMCBDNS4wMjk0MzcyNSwyMCAxLDE1Ljk3MDU2MjcgMSwxMSBDMSw5LjIwMjUwMTgxIDEuNTI2OTUwOTYsNy41MjgwNzk2MSAyLjQzNDgwMDEsNi4xMjI3ODYxOCBaIE0xMCwyIEMxNC45NzA1NjI3LDIgMTksNi4wMjk0MzcyNSAxOSwxMSBDMTksMTIuODI1MzY5NyAxOC40NTY1ODA4LDE0LjUyMzgxNzEgMTcuNTIyNjk1MSwxNS45NDIzODk0IEwxNS45MjA5ODg2LDE0LjczNTU4MjMgQzE2LjYwNDQyNSwxMy42NTQ1ODg3IDE3LDEyLjM3MzQ5MDEgMTcsMTEgQzE3LDcuMTM0MDA2NzUgMTMuODY1OTkzMiw0IDEwLDQgQzkuMzg3ODEyMTcsNCA4Ljc5Mzk3OTE2LDQuMDc4NTg2MzUgOC4yMjgwMzg3Nyw0LjIyNjIyMTI3IEw2LjMxNTQ1ODEzLDIuNzg2MzM3ODkgQzcuNDQwMDU3NCwyLjI4MTA3ODU5IDguNjg3MjAzOTksMiAxMCwyIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},56499:function(i,s,I){I.d(s,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII="},5178:function(i,s,I){I.d(s,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII="},50065:function(i,s,I){I.d(s,{Z:function(){return c},a:function(){return l}});var n=I(67294);let e={},M=n.createContext(e);function l(i){let s=n.useContext(M);return n.useMemo(function(){return"function"==typeof i?i(s):{...s,...i}},[s,i])}function c(i){let s;return s=i.disableParentContext?"function"==typeof i.components?i.components(e):i.components||e:l(i.components),n.createElement(M.Provider,{value:s},i.children)}}}]);