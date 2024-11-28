"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["50141"],{6306:function(M,j,N){N.r(j),N.d(j,{metadata:()=>I,contentTitle:()=>x,default:()=>A,assets:()=>i,toc:()=>z,frontMatter:()=>T});var I=JSON.parse('{"id":"kubernetes/container-images","title":"\uCEE8\uD14C\uC774\uB108 \uC774\uBBF8\uC9C0","description":"\uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB294 \uC774\uBBF8\uC9C0 \uC815\uBCF4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.","source":"@site/docs/kubernetes/container-images.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/container-images","permalink":"/whatap-docs/kubernetes/container-images","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/container-images.mdx","tags":[],"version":"current","frontMatter":{"id":"container-images","title":"\uCEE8\uD14C\uC774\uB108 \uC774\uBBF8\uC9C0","description":"\uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB294 \uC774\uBBF8\uC9C0 \uC815\uBCF4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.","keywords":["\uCFE0\uBC84\uB124\uD2F0\uC2A4","\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uBAA8\uB2C8\uD130\uB9C1","\uCEE8\uD14C\uC774\uB108","\uCEE8\uD14C\uC774\uB108 \uC774\uBBF8\uC9C0"],"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"\uCEE8\uD14C\uC774\uB108 \uBCFC\uB968","permalink":"/whatap-docs/kubernetes/resource-container-volume"},"next":{"title":"Out Of Memory Killed \uCEE8\uD14C\uC774\uB108","permalink":"/whatap-docs/kubernetes/analysis-oom-container"}}'),D=N("85893"),g=N("50065");let T={id:"container-images",title:"\uCEE8\uD14C\uC774\uB108 \uC774\uBBF8\uC9C0",description:"\uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB294 \uC774\uBBF8\uC9C0 \uC815\uBCF4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.",keywords:["\uCFE0\uBC84\uB124\uD2F0\uC2A4","\uCFE0\uBC84\uB124\uD2F0\uC2A4 \uBAA8\uB2C8\uD130\uB9C1","\uCEE8\uD14C\uC774\uB108","\uCEE8\uD14C\uC774\uB108 \uC774\uBBF8\uC9C0"],isTranslationMissing:!1},x=void 0,i={},z=[{value:" \uD544\uD130",id:"-\uD544\uD130",level:3},{value:" CSV \uB2E4\uC6B4\uB85C\uB4DC",id:"-csv-\uB2E4\uC6B4\uB85C\uB4DC",level:3},{value:" \uCEE8\uD14C\uC774\uB108 \uC0C1\uC138 \uBCF4\uAE30",id:"-\uCEE8\uD14C\uC774\uB108-\uC0C1\uC138-\uBCF4\uAE30",level:3}];function u(M){let j={blockquote:"blockquote",code:"code",em:"em",h3:"h3",img:"img",p:"p",section:"section",strong:"strong",...(0,g.a)(),...M.components},{Cmdname:I}=j;return!I&&function(M,j){throw Error("Expected "+(j?"component":"object")+" `"+M+"` to be defined: you likely forgot to import, pass, or provide it.")}("Cmdname",!0),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(j.p,{children:["\uD648 \uD654\uBA74 > \uD504\uB85C\uC81D\uD2B8 \uC120\uD0DD > ",(0,D.jsx)(I,{sid:"container",className:"uitext"})," > ",(0,D.jsx)(I,{sid:"containerImages",className:"uitext"})]}),"\n",(0,D.jsxs)(j.p,{children:[(0,D.jsx)(I,{sid:"containerImages",className:"uitext"})," \uBA54\uB274\uB97C \uD1B5\uD574 \uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB294 \uC774\uBBF8\uC9C0 \uC815\uBCF4\uC640 \uD574\uB2F9 \uC774\uBBF8\uC9C0\uB97C \uAE30\uBC18\uC73C\uB85C \uC2E4\uD589 \uC911\uC778 \uCEE8\uD14C\uC774\uB108\uC758 \uAC1C\uC218 \uBC0F CPU, Memory \uC0AC\uC6A9 \uCD1D\uB7C9\uC744 \uBAA9\uB85D \uD615\uC2DD\uC73C\uB85C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]}),"\n",(0,D.jsx)(j.p,{children:(0,D.jsx)(j.img,{alt:"\uCEE8\uD14C\uC774\uB108 \uC774\uBBF8\uC9C0",src:N(22449).Z+"",width:"1200",height:"678"})}),"\n",(0,D.jsxs)(j.section,{className:"remark-sectionize-h3",children:[(0,D.jsxs)(j.h3,{id:"-\uD544\uD130",children:[(0,D.jsx)(j.img,{src:N(14844).Z+"",width:"35",height:"35"})," \uD544\uD130"]}),(0,D.jsxs)(j.p,{children:["\uD544\uD130 \uCC3D\uC5D0\uC11C ",(0,D.jsx)(I,{sid:"TTL06740",className:"uitext"})," \uC120\uD0DD \uC2DC ",(0,D.jsx)(j.em,{children:(0,D.jsx)(j.strong,{children:"Registry"})}),", ",(0,D.jsx)(j.em,{children:(0,D.jsx)(j.strong,{children:"Name"})}),", ",(0,D.jsx)(j.em,{children:(0,D.jsx)(j.strong,{children:"Tag"})}),", ",(0,D.jsx)(j.em,{children:(0,D.jsx)(j.strong,{children:"Repo Digest"})}),"\uC5D0 \uB300\uD55C \uD544\uD130 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4."]})]}),"\n",(0,D.jsxs)(j.section,{className:"remark-sectionize-h3",children:[(0,D.jsxs)(j.h3,{id:"-csv-\uB2E4\uC6B4\uB85C\uB4DC",children:[(0,D.jsx)(j.img,{src:N(37586).Z+"",width:"35",height:"35"})," CSV \uB2E4\uC6B4\uB85C\uB4DC"]}),(0,D.jsxs)(j.p,{children:["\uC0C1\uB2E8 \uC624\uB978\uCABD\uC758 ",(0,D.jsx)(I,{sid:"sms_summary_download_csv",className:"uitext"})," \uBC84\uD2BC \uC120\uD0DD \uC2DC \uC6D0\uBCF8 \uB370\uC774\uD130\uB97C ",(0,D.jsx)(j.em,{children:"CSV"})," \uD615\uC2DD\uC758 \uD30C\uC77C\uB85C \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD30C\uC77C\uBA85\uC740 ",(0,D.jsx)(j.code,{children:"kubernetes_container_images_"})," \uB4A4\uC5D0 \uD504\uB85C\uC81D\uD2B8 \uCF54\uB4DC\uC640 \uB370\uC774\uD130 \uC870\uD68C \uC2DC\uC810\uC758 \uD0C0\uC784\uC2A4\uD0EC\uD504\uB97C \uB367\uBD99\uC5EC \uC0DD\uC131\uD569\uB2C8\uB2E4."]}),(0,D.jsxs)(j.blockquote,{children:["\n",(0,D.jsxs)(j.p,{children:["\uC608, ",(0,D.jsx)(j.em,{children:"kubernetes_container_images_{pcode}_{timestamp}.csv"})]}),"\n"]})]}),"\n",(0,D.jsxs)(j.section,{className:"remark-sectionize-h3",children:[(0,D.jsxs)(j.h3,{id:"-\uCEE8\uD14C\uC774\uB108-\uC0C1\uC138-\uBCF4\uAE30",children:[(0,D.jsx)(j.img,{src:N(75375).Z+"",width:"35",height:"35"})," \uCEE8\uD14C\uC774\uB108 \uC0C1\uC138 \uBCF4\uAE30"]}),(0,D.jsxs)(j.p,{children:[(0,D.jsx)(j.em,{children:(0,D.jsx)(j.strong,{children:"Name"})})," \uCEEC\uB7FC \uC624\uB978\uCABD ",(0,D.jsx)(j.img,{alt:"\uC0C1\uC138 \uBCF4\uAE30 \uC544\uC774\uCF58",src:N(2466).Z+"",width:"24",height:"24"})," ",(0,D.jsx)(I,{sid:"TLT07247",className:"uitext"})," \uC544\uC774\uCF58 \uC120\uD0DD \uC2DC \uD574\uB2F9 \uC774\uBBF8\uC9C0\uAC00 \uAC80\uC0C9\uB41C ",(0,D.jsx)(I,{sid:"container_list",className:"uitext"})," \uBA54\uB274\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4."]})]})]})}function A(M={}){let{wrapper:j}={...(0,g.a)(),...M.components};return j?(0,D.jsx)(j,{...M,children:(0,D.jsx)(u,{...M})}):u(M)}},14844:function(M,j,N){N.d(j,{Z:function(){return I}});let I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTcuNSIgY3k9IjE3LjUiIHI9IjE3LjUiIGZpbGw9IiNGOUMxMkEiLz4KPHBhdGggZD0iTTE5LjY3MTkgMjIuNTYyNVYxNC4xNDA2QzE5LjY3MTkgMTMuNTU3MyAxOS41ODg1IDEzLjA4ODUgMTkuNDIxOSAxMi43MzQ0QzE5LjI2NTYgMTIuMzgwMiAxOS4wMzEyIDEyLjEyNSAxOC43MTg4IDExLjk2ODhDMTguNDE2NyAxMS44MDIxIDE4LjAzNjUgMTEuNzE4OCAxNy41NzgxIDExLjcxODhDMTcuMDk5IDExLjcxODggMTYuNjkyNyAxMS44MTc3IDE2LjM1OTQgMTIuMDE1NkMxNi4wMzY1IDEyLjIxMzUgMTUuNzkxNyAxMi40ODQ0IDE1LjYyNSAxMi44MjgxQzE1LjQ1ODMgMTMuMTYxNSAxNS4zNzUgMTMuNTQ2OSAxNS4zNzUgMTMuOTg0NEgxMS43MzQ0QzExLjczNDQgMTMuMzA3MyAxMS44Njk4IDEyLjY1NjIgMTIuMTQwNiAxMi4wMzEyQzEyLjQyMTkgMTEuNDA2MiAxMi44MjI5IDEwLjg0OSAxMy4zNDM4IDEwLjM1OTRDMTMuODY0NiA5Ljg2OTc5IDE0LjQ5NDggOS40ODQzOCAxNS4yMzQ0IDkuMjAzMTJDMTUuOTc0IDguOTIxODggMTYuNzk2OSA4Ljc4MTI1IDE3LjcwMzEgOC43ODEyNUMxOC43ODY1IDguNzgxMjUgMTkuNzUgOC45NjM1NCAyMC41OTM4IDkuMzI4MTJDMjEuNDM3NSA5LjY4MjI5IDIyLjA5OSAxMC4yNjA0IDIyLjU3ODEgMTEuMDYyNUMyMy4wNjc3IDExLjg1NDIgMjMuMzEyNSAxMi44OTU4IDIzLjMxMjUgMTQuMTg3NVYyMi4wNzgxQzIzLjMxMjUgMjIuODU5NCAyMy4zNTk0IDIzLjU1NzMgMjMuNDUzMSAyNC4xNzE5QzIzLjU1NzMgMjQuNzc2IDIzLjY5NzkgMjUuMzAyMSAyMy44NzUgMjUuNzVWMjZIMjAuMTcxOUMyMC4wMDUyIDI1LjU5MzggMTkuODgwMiAyNS4wNzI5IDE5Ljc5NjkgMjQuNDM3NUMxOS43MTM1IDIzLjgwMjEgMTkuNjcxOSAyMy4xNzcxIDE5LjY3MTkgMjIuNTYyNVpNMjAuMTU2MiAxNS43MDMxTDIwLjE3MTkgMTguMDYyNUgxOC40MjE5QzE3LjkwMSAxOC4wNjI1IDE3LjQzMjMgMTguMTM1NCAxNy4wMTU2IDE4LjI4MTJDMTYuNTk5IDE4LjQxNjcgMTYuMjQ0OCAxOC42MTQ2IDE1Ljk1MzEgMTguODc1QzE1LjY3MTkgMTkuMTI1IDE1LjQ1MzEgMTkuNDMyMyAxNS4yOTY5IDE5Ljc5NjlDMTUuMTUxIDIwLjE2MTUgMTUuMDc4MSAyMC41NjI1IDE1LjA3ODEgMjFDMTUuMDc4MSAyMS41MzEyIDE1LjE1MSAyMS45NjM1IDE1LjI5NjkgMjIuMjk2OUMxNS40NTMxIDIyLjYzMDIgMTUuNjc3MSAyMi44ODAyIDE1Ljk2ODggMjMuMDQ2OUMxNi4yNzA4IDIzLjIwMzEgMTYuNjM1NCAyMy4yODEyIDE3LjA2MjUgMjMuMjgxMkMxNy42NDU4IDIzLjI4MTIgMTguMTUxIDIzLjE1NjIgMTguNTc4MSAyMi45MDYyQzE5LjAxNTYgMjIuNjQ1OCAxOS4zNDkgMjIuMzMzMyAxOS41NzgxIDIxLjk2ODhDMTkuODE3NyAyMS42MDQyIDE5LjkxMTUgMjEuMjcwOCAxOS44NTk0IDIwLjk2ODhMMjAuNjg3NSAyMi40ODQ0QzIwLjYwNDIgMjIuODgwMiAyMC40NDc5IDIzLjI5NjkgMjAuMjE4OCAyMy43MzQ0QzIwIDI0LjE3MTkgMTkuNzEzNSAyNC41ODg1IDE5LjM1OTQgMjQuOTg0NEMxOS4wMDUyIDI1LjM4MDIgMTguNTc4MSAyNS43MDMxIDE4LjA3ODEgMjUuOTUzMUMxNy41NzgxIDI2LjE5MjcgMTcgMjYuMzEyNSAxNi4zNDM4IDI2LjMxMjVDMTUuMzk1OCAyNi4zMTI1IDE0LjU1MjEgMjYuMTE0NiAxMy44MTI1IDI1LjcxODhDMTMuMDcyOSAyNS4zMjI5IDEyLjQ4OTYgMjQuNzU1MiAxMi4wNjI1IDI0LjAxNTZDMTEuNjQ1OCAyMy4yNjU2IDExLjQzNzUgMjIuMzY5OCAxMS40Mzc1IDIxLjMyODFDMTEuNDM3NSAyMC40ODQ0IDExLjU3ODEgMTkuNzE4OCAxMS44NTk0IDE5LjAzMTJDMTIuMTQwNiAxOC4zNDM4IDEyLjU1NzMgMTcuNzU1MiAxMy4xMDk0IDE3LjI2NTZDMTMuNjYxNSAxNi43NjU2IDE0LjM1NDIgMTYuMzgwMiAxNS4xODc1IDE2LjEwOTRDMTYuMDMxMiAxNS44Mzg1IDE3LjAxNTYgMTUuNzAzMSAxOC4xNDA2IDE1LjcwMzFIMjAuMTU2MloiIGZpbGw9IiMzMzMzMzMiLz4KPC9zdmc+Cg=="},37586:function(M,j,N){N.d(j,{Z:function(){return I}});let I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTcuNSIgY3k9IjE3LjUiIHI9IjE3LjUiIGZpbGw9IiNGOUMxMkEiLz4KPHBhdGggZD0iTTEyLjg0MzggNUgxNi40Njg4VjI1LjM3NUwxNi4xODc1IDI5SDEyLjg0MzhWNVpNMjUuNTc4MSAxOS44OTA2VjIxLjIxODhDMjUuNTc4MSAyMi41NzI5IDI1LjQ2MzUgMjMuNzU1MiAyNS4yMzQ0IDI0Ljc2NTZDMjUuMDA1MiAyNS43NzYgMjQuNjYxNSAyNi42MTk4IDI0LjIwMzEgMjcuMjk2OUMyMy43NDQ4IDI3Ljk3NCAyMy4xNzE5IDI4LjQ3OTIgMjIuNDg0NCAyOC44MTI1QzIxLjc5NjkgMjkuMTQ1OCAyMC45OTQ4IDI5LjMxMjUgMjAuMDc4MSAyOS4zMTI1QzE5LjIyNCAyOS4zMTI1IDE4LjQ4NDQgMjkuMTI1IDE3Ljg1OTQgMjguNzVDMTcuMjQ0OCAyOC4zNjQ2IDE2LjcyNCAyNy44MjgxIDE2LjI5NjkgMjcuMTQwNkMxNS44ODAyIDI2LjQ0MjcgMTUuNTQ2OSAyNS42MTQ2IDE1LjI5NjkgMjQuNjU2MkMxNS4wNTczIDIzLjY5NzkgMTQuODgwMiAyMi42NDA2IDE0Ljc2NTYgMjEuNDg0NFYxOS42MjVDMTQuODY5OCAxOC40Njg4IDE1LjA0MTcgMTcuNDExNSAxNS4yODEyIDE2LjQ1MzFDMTUuNTMxMiAxNS40ODQ0IDE1Ljg2NDYgMTQuNjU2MiAxNi4yODEyIDEzLjk2ODhDMTYuNjk3OSAxMy4yNzA4IDE3LjIxODggMTIuNzM0NCAxNy44NDM4IDEyLjM1OTRDMTguNDY4OCAxMS45NzQgMTkuMjA4MyAxMS43ODEyIDIwLjA2MjUgMTEuNzgxMkMyMC45ODk2IDExLjc4MTIgMjEuNzk2OSAxMS45NDc5IDIyLjQ4NDQgMTIuMjgxMkMyMy4xNzE5IDEyLjYxNDYgMjMuNzQ0OCAxMy4xMTk4IDI0LjIwMzEgMTMuNzk2OUMyNC42NjE1IDE0LjQ2MzUgMjUuMDA1MiAxNS4zMDczIDI1LjIzNDQgMTYuMzI4MUMyNS40NjM1IDE3LjMzODUgMjUuNTc4MSAxOC41MjYgMjUuNTc4MSAxOS44OTA2Wk0yMS45Mzc1IDIxLjIxODhWMTkuODkwNkMyMS45Mzc1IDE5LjAzNjUgMjEuODkwNiAxOC4yOTY5IDIxLjc5NjkgMTcuNjcxOUMyMS43MTM1IDE3LjA0NjkgMjEuNTYyNSAxNi41MzEyIDIxLjM0MzggMTYuMTI1QzIxLjEzNTQgMTUuNzA4MyAyMC44NDM4IDE1LjM5NTggMjAuNDY4OCAxNS4xODc1QzIwLjA5MzggMTQuOTc5MiAxOS42MTk4IDE0Ljg3NSAxOS4wNDY5IDE0Ljg3NUMxOC41NDY5IDE0Ljg3NSAxOC4xMTQ2IDE0Ljk3NCAxNy43NSAxNS4xNzE5QzE3LjM5NTggMTUuMzY5OCAxNy4wOTM4IDE1LjY1MSAxNi44NDM4IDE2LjAxNTZDMTYuNTkzOCAxNi4zNjk4IDE2LjM5NTggMTYuNzgxMiAxNi4yNSAxNy4yNUMxNi4xMDQyIDE3LjcwODMgMTYuMDA1MiAxOC4yMDMxIDE1Ljk1MzEgMTguNzM0NFYyMi4zNzVDMTYuMDI2IDIzLjA3MjkgMTYuMTcxOSAyMy43MTM1IDE2LjM5MDYgMjQuMjk2OUMxNi42MTk4IDI0Ljg4MDIgMTYuOTQ3OSAyNS4zNDM4IDE3LjM3NSAyNS42ODc1QzE3LjgxMjUgMjYuMDMxMiAxOC4zODAyIDI2LjIwMzEgMTkuMDc4MSAyNi4yMDMxQzE5LjYzMDIgMjYuMjAzMSAyMC4wODg1IDI2LjEwOTQgMjAuNDUzMSAyNS45MjE5QzIwLjgxNzcgMjUuNzM0NCAyMS4xMDk0IDI1LjQzNzUgMjEuMzI4MSAyNS4wMzEyQzIxLjU1NzMgMjQuNjI1IDIxLjcxMzUgMjQuMTA5NCAyMS43OTY5IDIzLjQ4NDRDMjEuODkwNiAyMi44NDkgMjEuOTM3NSAyMi4wOTM4IDIxLjkzNzUgMjEuMjE4OFoiIGZpbGw9IiMzMzMzMzMiLz4KPC9zdmc+Cg=="},75375:function(M,j,N){N.d(j,{Z:function(){return I}});let I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTcuNSIgY3k9IjE3LjUiIHI9IjE3LjUiIGZpbGw9IiNGOUMxMkEiLz4KPHBhdGggZD0iTTE3LjgyODEgMjMuMjY1NkMxOC4yOTY5IDIzLjI2NTYgMTguNzEzNSAyMy4xNjY3IDE5LjA3ODEgMjIuOTY4OEMxOS40NTMxIDIyLjc3MDggMTkuNzUgMjIuNDYzNSAxOS45Njg4IDIyLjA0NjlDMjAuMTg3NSAyMS42MTk4IDIwLjMwNzMgMjEuMDY3NyAyMC4zMjgxIDIwLjM5MDZIMjMuNzVDMjMuNzI5MiAyMS41ODg1IDIzLjQ1MzEgMjIuNjM1NCAyMi45MjE5IDIzLjUzMTJDMjIuMzkwNiAyNC40MTY3IDIxLjY4MjMgMjUuMTA0MiAyMC43OTY5IDI1LjU5MzhDMTkuOTIxOSAyNi4wNzI5IDE4Ljk0NzkgMjYuMzEyNSAxNy44NzUgMjYuMzEyNUMxNi43NjA0IDI2LjMxMjUgMTUuNzg2NSAyNi4xMzU0IDE0Ljk1MzEgMjUuNzgxMkMxNC4xMzAyIDI1LjQxNjcgMTMuNDQ3OSAyNC44OTA2IDEyLjkwNjIgMjQuMjAzMUMxMi4zNjQ2IDIzLjUxNTYgMTEuOTU4MyAyMi42ODIzIDExLjY4NzUgMjEuNzAzMUMxMS40MjcxIDIwLjcxMzUgMTEuMjk2OSAxOS41ODMzIDExLjI5NjkgMTguMzEyNVYxNi43ODEyQzExLjI5NjkgMTUuNTIwOCAxMS40MjcxIDE0LjM5NTggMTEuNjg3NSAxMy40MDYyQzExLjk1ODMgMTIuNDE2NyAxMi4zNjQ2IDExLjU3ODEgMTIuOTA2MiAxMC44OTA2QzEzLjQ0NzkgMTAuMjAzMSAxNC4xMzAyIDkuNjgyMjkgMTQuOTUzMSA5LjMyODEyQzE1Ljc3NiA4Ljk2MzU0IDE2Ljc0NDggOC43ODEyNSAxNy44NTk0IDguNzgxMjVDMTkuMDQ2OSA4Ljc4MTI1IDIwLjA3MjkgOS4wMzEyNSAyMC45Mzc1IDkuNTMxMjVDMjEuODEyNSAxMC4wMjA4IDIyLjQ5NDggMTAuNzM5NiAyMi45ODQ0IDExLjY4NzVDMjMuNDc0IDEyLjYzNTQgMjMuNzI5MiAxMy43OTY5IDIzLjc1IDE1LjE3MTlIMjAuMzI4MUMyMC4zMDczIDE0LjQ0MjcgMjAuMTk3OSAxMy44MzMzIDIwIDEzLjM0MzhDMTkuODAyMSAxMi44NDM4IDE5LjUyMDggMTIuNDY4OCAxOS4xNTYyIDEyLjIxODhDMTguODAyMSAxMS45Njg4IDE4LjM1NDIgMTEuODQzOCAxNy44MTI1IDExLjg0MzhDMTcuMjE4OCAxMS44NDM4IDE2LjcyOTIgMTEuOTU4MyAxNi4zNDM4IDEyLjE4NzVDMTUuOTY4OCAxMi40MDYyIDE1LjY3NzEgMTIuNzI5MiAxNS40Njg4IDEzLjE1NjJDMTUuMjcwOCAxMy41ODMzIDE1LjEzMDIgMTQuMTA0MiAxNS4wNDY5IDE0LjcxODhDMTQuOTc0IDE1LjMyMjkgMTQuOTM3NSAxNi4wMTA0IDE0LjkzNzUgMTYuNzgxMlYxOC4zMTI1QzE0LjkzNzUgMTkuMTA0MiAxNC45NzQgMTkuODA3MyAxNS4wNDY5IDIwLjQyMTlDMTUuMTE5OCAyMS4wMjYgMTUuMjU1MiAyMS41NDE3IDE1LjQ1MzEgMjEuOTY4OEMxNS42NjE1IDIyLjM5NTggMTUuOTU4MyAyMi43MTg4IDE2LjM0MzggMjIuOTM3NUMxNi43MjkyIDIzLjE1NjIgMTcuMjI0IDIzLjI2NTYgMTcuODI4MSAyMy4yNjU2WiIgZmlsbD0iIzMzMzMzMyIvPgo8L3N2Zz4K"},2466:function(M,j,N){N.d(j,{Z:function(){return I}});let I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDRIMjBDMjEuMDM1MyA0IDIxLjg5MzQgNC43OTcyMyAyMS45OTA4IDUuODA4MUwyMiA2VjkuMzMzMzNIMjBWNkg0VjE4SDE0VjIwSDRDMi45NjQ3MSAyMCAyLjEwNjU3IDE5LjIwMjggMi4wMDkyIDE4LjE5MTlMMiAxOFY2QzIgNC45NjQ3MSAyLjc5NzIzIDQuMTA2NTcgMy44MDgxIDQuMDA5Mkw0IDRaTTIwLjQ1NjcgMTkuMjFMMTcuNTQ2NyAxNi4zQzE2Ljg1NjcgMTYuNzQgMTYuMDM2NyAxNyAxNS4xNTY3IDE3QzEyLjY3NjcgMTcgMTAuNjY2NyAxNC45OSAxMC42NjY3IDEyLjVDMTAuNjY2NyAxMC4wMSAxMi42NzY3IDggMTUuMTY2NyA4QzE3LjY1NjcgOCAxOS42NjY3IDEwLjAxIDE5LjY2NjcgMTIuNUMxOS42NjY3IDEzLjM4IDE5LjQwNjcgMTQuMTkgMTguOTY2NyAxNC44OUwyMS44NzY3IDE3Ljc5TDIwLjQ1NjcgMTkuMjFaTTE1LjE2NjcgMTBDMTMuNzg2NyAxMCAxMi42NjY3IDExLjEyIDEyLjY2NjcgMTIuNUMxMi42NjY3IDEzLjg4IDEzLjc4NjcgMTUgMTUuMTY2NyAxNUMxNi41NDY3IDE1IDE3LjY2NjcgMTMuODggMTcuNjY2NyAxMi41QzE3LjY2NjcgMTEuMTIgMTYuNTQ2NyAxMCAxNS4xNjY3IDEwWiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K"},22449:function(M,j,N){N.d(j,{Z:function(){return I}});let I=N.p+"assets/images/k8s-container-img-61fa9df57e941c76fd78511b482254c3.png"},50065:function(M,j,N){N.d(j,{Z:function(){return x},a:function(){return T}});var I=N(67294);let D={},g=I.createContext(D);function T(M){let j=I.useContext(g);return I.useMemo(function(){return"function"==typeof M?M(j):{...j,...M}},[j,M])}function x(M){let j;return j=M.disableParentContext?"function"==typeof M.components?M.components(D):M.components||D:T(M.components),I.createElement(g.Provider,{value:j},M.children)}}}]);