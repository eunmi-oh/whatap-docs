"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["40565"],{41835:function(e,t,a){a.d(t,{CS:()=>b,wj:()=>r,nO:()=>m,iZ:()=>p,n4:()=>o,Ne:()=>_,ci:()=>Z,cH:()=>y});var n=a("85893"),l=a("67294"),i=a("85346"),s=a("78312");function r(){let e=(0,s.Z)(),t=e?.data?.blogMetadata;if(!t)throw Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}let c=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:i=!1}=e,s=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}),[t,a])}({content:a,isBlogPostPage:i});return(0,n.jsx)(c.Provider,{value:s,children:t})}function m(){let e=(0,l.useContext)(c);if(null===e)throw new i.i6("BlogPostProvider");return e}var u=a("4757"),d=a("2933");let g=e=>new Date(e).toISOString();function h(e){let t=e.map(x);return{author:1===t.length?t[0]:t}}function f(e,t,a){return e?{image:function(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function b(e){let{siteConfig:t}=(0,d.Z)(),{withBaseUrl:a}=(0,u.Cg)(),{metadata:{blogDescription:n,blogTitle:l,permalink:i}}=e,s=`${t.url}${i}`;return{"@context":"https://schema.org","@type":"Blog","@id":s,mainEntityOfPage:s,headline:l,description:n,blogPost:e.items.map(e=>(function(e,t,a){let{assets:n,frontMatter:l,metadata:i}=e,{date:s,title:r,description:c,lastUpdatedAt:o}=i,m=n.image??l.image,u=l.keywords??[],d=`${t.url}${i.permalink}`,b=o?g(o):void 0;return{"@type":"BlogPosting","@id":d,mainEntityOfPage:d,url:d,headline:r,name:r,description:c,datePublished:s,...b?{dateModified:b}:{},...h(i.authors),...f(m,a,r),...u?{keywords:u}:{}}})(e.content,t,a))}}function p(){let e=r(),{assets:t,metadata:a}=m(),{siteConfig:n}=(0,d.Z)(),{withBaseUrl:l}=(0,u.Cg)(),{date:i,title:s,description:c,frontMatter:o,lastUpdatedAt:b}=a,p=t.image??o.image,x=o.keywords??[],j=b?g(b):void 0,N=`${n.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":N,mainEntityOfPage:N,url:N,headline:s,name:s,description:c,datePublished:i,...j?{dateModified:j}:{},...h(a.authors),...f(p,l,s),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}}}function x(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}var j=a("16550"),N=a("83012"),v=a("38341"),k=a("79246");function y(e){let{pathname:t}=(0,j.TH)();return(0,l.useMemo)(()=>e.filter(e=>{var a,n;return a=e,n=t,(!a.unlisted||!!(0,k.Mg)(a.permalink,n))&&!0}),[e,t])}function Z(e){let t=Object.entries((0,v.vM)(e,e=>`${new Date(e.date).getFullYear()}`));return t.reverse(),t}function _(e){let{items:t,ulClassName:a,liClassName:l,linkClassName:i,linkActiveClassName:s}=e;return(0,n.jsx)("ul",{className:a,children:t.map(e=>(0,n.jsx)("li",{className:l,children:(0,n.jsx)(N.Z,{isNavLink:!0,to:e.permalink,className:i,activeClassName:s,children:e.title})},e.permalink))})}},94207:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(85893);a(67294);var l=a(67026),i=a(88714),s=a(65774);function r(e){let{sidebar:t,toc:a,children:r,...c}=e,o=t&&t.items.length>0;return(0,n.jsx)(i.Z,{...c,children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(s.Z,{sidebar:t}),(0,n.jsx)("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:r}),a&&(0,n.jsx)("div",{className:"col col--2",children:a})]})})})}},70537:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(85893),l=a(67294),i=a(30140),s=a(41835),r=a(34403);function c(e){let{year:t,yearGroupHeadingClassName:a,children:l}=e;return(0,n.jsxs)("div",{role:"group",children:[(0,n.jsx)(r.Z,{as:"h3",className:a,children:t}),l]})}let o=(0,l.memo)(function(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:l}=e;if(!(0,i.L)().blog.sidebar.groupByYear)return(0,n.jsx)(l,{items:t});{let e=(0,s.ci)(t);return(0,n.jsx)(n.Fragment,{children:e.map(e=>{let[t,i]=e;return(0,n.jsx)(c,{year:t,yearGroupHeadingClassName:a,children:(0,n.jsx)(l,{items:i})},t)})})}})},39559:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(85893);a(67294);var l=a(67026),i=a(45520),s=a(82743),r=a(84681),c=a(94207),o=a(45600),m=a(84315),u=a(34403);function d(e){let{tags:t,sidebar:a}=e,d=(0,i.M)();return(0,n.jsxs)(s.FG,{className:(0,l.Z)(r.k.wrapper.blogPages,r.k.page.blogTagsListPage),children:[(0,n.jsx)(s.d,{title:d}),(0,n.jsx)(m.Z,{tag:"blog_tags_list"}),(0,n.jsxs)(c.Z,{sidebar:a,children:[(0,n.jsx)(u.Z,{as:"h1",children:d}),(0,n.jsx)(o.Z,{tags:t})]})]})}},48627:function(e,t,a){a.d(t,{Z:()=>r});var n=a("85893");a("67294");var l=a("67026"),i=a("83012");let s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function r(e){let{permalink:t,label:a,count:r,description:c}=e;return(0,n.jsxs)(i.Z,{href:t,title:c,className:(0,l.Z)(s.tag,r?s.tagWithCount:s.tagRegular),children:[a,r&&(0,n.jsx)("span",{children:r})]})}},45600:function(e,t,a){a.d(t,{Z:()=>o});var n=a("85893");a("67294");var l=a("45520"),i=a("48627"),s=a("34403");let r="tag_Nnez";function c(e){let{letterEntry:t}=e;return(0,n.jsxs)("article",{children:[(0,n.jsx)(s.Z,{as:"h2",id:t.letter,children:t.letter}),(0,n.jsx)("ul",{className:"padding--none",children:t.tags.map(e=>(0,n.jsx)("li",{className:r,children:(0,n.jsx)(i.Z,{...e})},e.permalink))}),(0,n.jsx)("hr",{})]})}function o(e){let{tags:t}=e,a=(0,l.P)(t);return(0,n.jsx)("section",{className:"margin-vert--lg",children:a.map(e=>(0,n.jsx)(c,{letterEntry:e},e.letter))})}},45520:function(e,t,a){a.d(t,{M:function(){return l},P:function(){return i}});var n=a(96025);let l=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function i(e){let t={};return Object.values(e).forEach(e=>{let a=e.label[0].toUpperCase();t[a]??=[],t[a].push(e)}),Object.entries(t).sort((e,t)=>{let[a]=e,[n]=t;return a.localeCompare(n)}).map(e=>{let[t,a]=e;return{letter:t,tags:a.sort((e,t)=>e.label.localeCompare(t.label))}})}},65774:function(e,t,a){a.d(t,{Z:()=>x});var n=a("85893"),l=a("67294"),i=a("54704"),s=a("67026"),r=a("96025"),c=a("41835");let o={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",news:"news_mTGW",iflang:"iflang_yyvc",iflink:"iflink_TnhG"};var m=a("83012");let u=(0,l.memo)(function(e){let{sidebar:t}=e,l=a(24426),i=(0,c.cH)(t.items),u=e=>{let t=i.find(t=>t.permalink.replace("/whatap-docs","").replace(/(\/en|\/ja)/g,"")===e);return t?t.title:e};return(0,n.jsx)("aside",{className:"col col--3",children:(0,n.jsx)("nav",{className:(0,s.Z)(o.sidebar,"thin-scrollbar"),"aria-label":(0,r.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:(0,n.jsx)("ul",{className:(0,s.Z)(o.sidebarItemList,"clean-list"),children:l.map((e,t)=>(0,n.jsxs)("li",{className:e.className?o[e.className]:"",children:[(0,n.jsx)("div",{children:e.link?(0,n.jsx)(m.Z,{isNavLink:!0,to:e.link,children:e.tr_code?(0,n.jsx)(n.Fragment,{children:(0,r.I)({id:`${e.tr_code}`})}):(0,n.jsx)(n.Fragment,{children:e.label})}):(0,n.jsx)("span",{children:e.label})}),(0,n.jsx)("ul",{children:e.items.map((e,t)=>(0,n.jsx)("li",{className:e.className?o[e.className]:"",children:(0,n.jsx)(m.Z,{isNavLink:!0,to:e.link,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive,children:u(e.link)})},t))})]},t))})})})});var d=a("11179"),g=a("70537");let h="yearGroupHeading_fvTq",f=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function b(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)(g.Z,{items:a,ListComponent:f,yearGroupHeadingClassName:h})}let p=(0,l.memo)(function(e){return(0,n.jsx)(d.Zo,{component:b,props:e})});function x(e){let{sidebar:t}=e,a=(0,i.i)();return t?.items.length?"mobile"===a?(0,n.jsx)(p,{sidebar:t}):(0,n.jsx)(u,{sidebar:t}):null}},24426:function(e){e.exports=JSON.parse('[{"type":"category","label":"\uC0C8\uB85C\uC6B4 \uAE30\uB2A5","tr_code":"theme.blog.newFeatures","link":"/blog/","className":"iflink","items":[{"link":"/blog/index","className":"iflang"},{"link":"/blog/overview","className":"news"}]},{"type":"category","label":"2024","className":"iflang","link":"/blog/tags/2024","items":[{"link":"/blog/2024-3q-summary","className":"iflang"},{"link":"/blog/2024-2q-summary","className":"iflang"},{"link":"/blog/2024-1q-summary","className":"iflang"}]},{"type":"category","label":"2023","className":"iflang","link":"/blog/tags/2023","items":[{"link":"/blog/2023-4q-summary","className":"iflang"},{"link":"/blog/2023-3q-summary","className":"iflang"}]}]')}}]);