"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["47293"],{62204:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(85893);a(67294);var n=a(83012),i=a(96025),s=a(82743),l=a(11437),c=a(88714),d=a(34403);function h(e){let{year:t,posts:a}=e,i=(0,l.P)({day:"numeric",month:"long",timeZone:"UTC"}),s=e=>i.format(new Date(e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{as:"h3",id:t,children:t}),(0,r.jsx)("ul",{children:a.map(e=>(0,r.jsx)("li",{children:(0,r.jsxs)(n.Z,{to:e.metadata.permalink,children:[s(e.metadata.date)," - ",e.metadata.title]})},e.metadata.date))})]})}function o(e){let{years:t}=e;return(0,r.jsx)("section",{className:"margin-vert--lg",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:t.map((e,t)=>(0,r.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,r.jsx)(h,{...e})},t))})})})}function m(e){let{archive:t}=e,a=(0,i.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),n=(0,i.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),l=Array.from(t.blogPosts.reduce((e,t)=>{let a=t.metadata.date.split("-")[0],r=e.get(a)??[];return e.set(a,[t,...r])},new Map),e=>{let[t,a]=e;return{year:t,posts:a}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.d,{title:a,description:n}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("header",{className:"hero hero--primary",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(d.Z,{as:"h1",className:"hero__title",children:a}),(0,r.jsx)("p",{className:"hero__subtitle",children:n})]})}),(0,r.jsx)("main",{children:l.length>0&&(0,r.jsx)(o,{years:l})})]})]})}},11437:function(e,t,a){a.d(t,{P:function(){return n}});var r=a(2933);function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:t}}=(0,r.Z)(),a=function(){let{i18n:{currentLocale:e,localeConfigs:t}}=(0,r.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}}}]);