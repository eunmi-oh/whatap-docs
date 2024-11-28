"use strict";(self.webpackChunkWhaTap_Docs=self.webpackChunkWhaTap_Docs||[]).push([["39854"],{73111:function(e,l,s){s.r(l),s.d(l,{default:()=>p});var t=s("85893");s("67294");var a=s("67026"),n=s("82743"),i=s("84681"),r=s("58267"),o=s("94207"),c=s("84315"),m=s("34403"),u=s("21389");let g={authorListItem:"authorListItem_n3yI"};function d(e){let{author:l}=e;return(0,t.jsx)("li",{className:g.authorListItem,children:(0,t.jsx)(u.Z,{as:"h2",author:l,count:l.count})})}function h(e){let{authors:l}=e;return(0,t.jsx)("section",{className:(0,a.Z)("margin-vert--lg",g.authorsListSection),children:(0,t.jsx)("ul",{children:l.map(e=>(0,t.jsx)(d,{author:e},e.key))})})}function p(e){let{authors:l,sidebar:s}=e,u=(0,r.HV)();return(0,t.jsxs)(n.FG,{className:(0,a.Z)(i.k.wrapper.blogPages,i.k.page.blogAuthorsListPage),children:[(0,t.jsx)(n.d,{title:u}),(0,t.jsx)(c.Z,{tag:"blog_authors_list"}),(0,t.jsxs)(o.Z,{sidebar:s,children:[(0,t.jsx)(m.Z,{as:"h1",children:u}),(0,t.jsx)(h,{authors:l})]})]})}},58267:function(e,l,s){s.d(l,{HV:function(){return i},Wi:function(){return n}}),s(85893),s(67294);var t=s(96025),a=s(43115);function n(e){let l=function(){let{selectMessage:e}=(0,a.c)();return l=>e(l,(0,t.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:l}))}();return(0,t.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:l(e.count),tagName:e.label})}let i=()=>(0,t.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},43115:function(e,l,s){s.d(l,{c:function(){return o}});var t=s(67294),a=s(2933);let n=["zero","one","two","few","many","other"];function i(e){return n.filter(l=>e.includes(l))}let r={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,a.Z)();return(0,t.useMemo)(()=>{try{return function(e){let l=new Intl.PluralRules(e);return{locale:e,pluralForms:i(l.resolvedOptions().pluralCategories),select:e=>l.select(e)}}(e)}catch(l){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${l.message}
`),r}},[e])}();return{selectMessage:(l,s)=>(function(e,l,s){let t=e.split("|");if(1===t.length)return t[0];t.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);let a=s.select(l);return t[Math.min(s.pluralForms.indexOf(a),t.length-1)]})(s,l,e)}}},65774:function(e,l,s){s.d(l,{Z:()=>k});var t=s("85893"),a=s("67294"),n=s("54704"),i=s("67026"),r=s("96025"),o=s("41835");let c={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",news:"news_mTGW",iflang:"iflang_yyvc",iflink:"iflink_TnhG"};var m=s("83012");let u=(0,a.memo)(function(e){let{sidebar:l}=e,a=s(24426),n=(0,o.cH)(l.items),u=e=>{let l=n.find(l=>l.permalink.replace("/whatap-docs","").replace(/(\/en|\/ja)/g,"")===e);return l?l.title:e};return(0,t.jsx)("aside",{className:"col col--3",children:(0,t.jsx)("nav",{className:(0,i.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,r.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:(0,t.jsx)("ul",{className:(0,i.Z)(c.sidebarItemList,"clean-list"),children:a.map((e,l)=>(0,t.jsxs)("li",{className:e.className?c[e.className]:"",children:[(0,t.jsx)("div",{children:e.link?(0,t.jsx)(m.Z,{isNavLink:!0,to:e.link,children:e.tr_code?(0,t.jsx)(t.Fragment,{children:(0,r.I)({id:`${e.tr_code}`})}):(0,t.jsx)(t.Fragment,{children:e.label})}):(0,t.jsx)("span",{children:e.label})}),(0,t.jsx)("ul",{children:e.items.map((e,l)=>(0,t.jsx)("li",{className:e.className?c[e.className]:"",children:(0,t.jsx)(m.Z,{isNavLink:!0,to:e.link,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive,children:u(e.link)})},l))})]},l))})})})});var g=s("11179"),d=s("70537");let h="yearGroupHeading_fvTq",p=e=>{let{items:l}=e;return(0,t.jsx)(o.Ne,{items:l,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function b(e){let{sidebar:l}=e,s=(0,o.cH)(l.items);return(0,t.jsx)(d.Z,{items:s,ListComponent:p,yearGroupHeadingClassName:h})}let f=(0,a.memo)(function(e){return(0,t.jsx)(g.Zo,{component:b,props:e})});function k(e){let{sidebar:l}=e,s=(0,n.i)();return l?.items.length?"mobile"===s?(0,t.jsx)(f,{sidebar:l}):(0,t.jsx)(u,{sidebar:l}):null}},24426:function(e){e.exports=JSON.parse('[{"type":"category","label":"\uC0C8\uB85C\uC6B4 \uAE30\uB2A5","tr_code":"theme.blog.newFeatures","link":"/blog/","className":"iflink","items":[{"link":"/blog/index","className":"iflang"},{"link":"/blog/overview","className":"news"}]},{"type":"category","label":"2024","className":"iflang","link":"/blog/tags/2024","items":[{"link":"/blog/2024-3q-summary","className":"iflang"},{"link":"/blog/2024-2q-summary","className":"iflang"},{"link":"/blog/2024-1q-summary","className":"iflang"}]},{"type":"category","label":"2023","className":"iflang","link":"/blog/tags/2023","items":[{"link":"/blog/2023-4q-summary","className":"iflang"},{"link":"/blog/2023-3q-summary","className":"iflang"}]}]')}}]);