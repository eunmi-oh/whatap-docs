"use strict";(self.webpackChunkwhatap_docs=self.webpackChunkwhatap_docs||[]).push([["32213"],{74701:function(e,t,n){n.r(t),n.d(t,{default:()=>D});var a=n("85893"),i=n("67294"),o=n("67026"),r=n("82743"),l=n("84681"),s=n("69369"),c=n("85609"),d=n("96025"),u=n("69599"),m=n("10346");let h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function p(){let{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e,[n,a]=(0,i.useState)(!1),o=(0,i.useRef)(!1),{startScroll:r,cancelScroll:l}=(0,u.Ct)();return(0,u.RF)((e,n)=>{let{scrollY:i}=e,r=n?.scrollY;if(!!r)o.current?o.current=!1:i>=r?(l(),a(!1)):i<t?a(!1):i+window.innerHeight<document.documentElement.scrollHeight&&a(!0)}),(0,m.S)(e=>{e.location.hash&&(o.current=!0,a(!1))}),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return(0,a.jsx)("button",{"aria-label":(0,d.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",l.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var b=n("17504"),x=n("16550"),f=n("54704"),j=n("29697"),k=n("11179"),_=n("71915"),g=n("91434");let v=e=>{let{sidebar:t,path:n}=e,i=(0,_.e)();return(0,a.jsx)("ul",{className:(0,o.Z)(l.k.docs.docSidebarMenu,"menu__list"),children:(0,a.jsx)(g.Z,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&i.toggle(),"link"===e.type&&i.toggle()},level:1})})},C=i.memo(function(e){return(0,a.jsx)(k.Zo,{component:v,props:e})});function S(e){let t=(0,f.i)();return(0,a.jsxs)(a.Fragment,{children:[("desktop"===t||"ssr"===t)&&(0,a.jsx)(j.Z,{...e}),"mobile"===t&&(0,a.jsx)(C,{...e})]})}var T=n("74575");let I="expandButton_TmdG",Z="expandButtonIcon_i1dp";function N(e){let{toggleSidebar:t}=e;return(0,a.jsx)("div",{className:I,title:(0,d.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,d.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,a.jsx)(T.Z,{className:Z})})}let w={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function y(e){let{children:t}=e,n=(0,c.V)();return(0,a.jsx)(i.Fragment,{children:t},n?.name??"noSidebar")}function L(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e,{pathname:s}=(0,x.TH)(),[c,d]=(0,i.useState)(!1),u=(0,i.useCallback)(()=>{c&&d(!1),!c&&(0,b.n)()&&d(!0),r(e=>!e)},[r,c]);return(0,a.jsx)("aside",{className:(0,o.Z)(l.k.docs.docSidebarContainer,w.docSidebarContainer,n&&w.docSidebarContainerHidden),onTransitionEnd:e=>{if(!!e.currentTarget.classList.contains(w.docSidebarContainer))n&&d(!0)},children:(0,a.jsx)(y,{children:(0,a.jsxs)("div",{className:(0,o.Z)(w.sidebarViewport,c&&w.sidebarViewportHidden),children:[(0,a.jsx)(S,{sidebar:t,path:s,onCollapse:u,isHidden:c}),c&&(0,a.jsx)(N,{toggleSidebar:u})]})})})}let B={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function E(e){let{hiddenSidebarContainer:t,children:n}=e,i=(0,c.V)();return(0,a.jsx)("main",{className:(0,o.Z)(B.docMainContainer,(t||!i)&&B.docMainContainerEnhanced),children:(0,a.jsx)("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",B.docItemWrapper,t&&B.docItemWrapperEnhanced),children:n})})}let A="docRoot_UBD9",H="docsWrapper_hBAB";function M(e){let{children:t}=e,n=(0,c.V)(),[o,r]=(0,i.useState)(!1);return(0,a.jsxs)("div",{className:H,children:[(0,a.jsx)(p,{}),(0,a.jsxs)("div",{className:A,children:[n&&(0,a.jsx)(L,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:r}),(0,a.jsx)(E,{hiddenSidebarContainer:o,children:t})]})]})}var R=n("74593");function D(e){let t=(0,s.SN)(e);if(!t)return(0,a.jsx)(R.Z,{});let{docElement:n,sidebarName:i,sidebarItems:d}=t;return(0,a.jsx)(r.FG,{className:(0,o.Z)(l.k.page.docsDocPage),children:(0,a.jsx)(c.b,{name:i,items:d,children:(0,a.jsx)(M,{children:n})})})}},91434:function(e,t,n){n.d(t,{Z:()=>Z});var a=n("85893"),i=n("67294"),o=n("69369"),r=n("85346");let l=Symbol("EmptyContext"),s=i.createContext(l);function c(e){let{children:t}=e,[n,o]=(0,i.useState)(null),r=(0,i.useMemo)(()=>({expandedItem:n,setExpandedItem:o}),[n]);return(0,a.jsx)(s.Provider,{value:r,children:t})}var d=n("67026"),u=n("30140"),m=n("57455"),h=n("84681"),p=n("79246"),b=n("83012"),x=n("96025"),f=n("7227");function j(e){let{collapsed:t,categoryLabel:n,onClick:i}=e;return(0,a.jsx)("button",{"aria-label":t?(0,x.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,x.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:i})}function k(e){let{item:t,onItemClick:n,activePath:c,level:x,index:k,..._}=e,{items:g,label:v,collapsible:C,className:S,href:T}=t,{docs:{sidebar:{autoCollapseCategories:I}}}=(0,u.L)(),N=function(e){let t=(0,f.Z)();return(0,i.useMemo)(()=>{if(e.href&&!e.linkUnlisted)return e.href;if(!t&&!!e.collapsible)return(0,o.LM)(e)},[e,t])}(t),w=(0,o._F)(t,c),y=(0,p.Mg)(T,c),{collapsed:L,setCollapsed:B}=(0,m.u)({initialState:()=>!!C&&!w&&t.collapsed}),{expandedItem:E,setExpandedItem:A}=function(){let e=(0,i.useContext)(s);if(e===l)throw new r.i6("DocSidebarItemsExpandedStateProvider");return e}(),H=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!L;A(e?null:k),B(e)};return!function(e){let{isActive:t,collapsed:n,updateCollapsed:a}=e,o=(0,r.D9)(t);(0,i.useEffect)(()=>{t&&!o&&n&&a(!1)},[t,o,n,a])}({isActive:w,collapsed:L,updateCollapsed:H}),(0,i.useEffect)(()=>{C&&null!=E&&E!==k&&I&&B(!0)},[C,E,k,B,I]),(0,a.jsxs)("li",{className:(0,d.Z)(h.k.docs.docSidebarItemCategory,h.k.docs.docSidebarItemCategoryLevel(x),"menu__list-item",{"menu__list-item--collapsed":L},S),children:[(0,a.jsxs)("div",{className:(0,d.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":y}),children:[(0,a.jsx)(b.Z,{className:(0,d.Z)("menu__link",{"menu__link--sublist":C,"menu__link--sublist-caret":!T&&C,"menu__link--active":w}),onClick:C?e=>{n?.(t),T?H(!1):(e.preventDefault(),H())}:()=>{n?.(t)},"aria-current":y?"page":void 0,role:C&&!T?"button":void 0,"aria-expanded":C&&!T?!L:void 0,href:C?N??"#":N,..._,children:v}),T&&C&&(0,a.jsx)(j,{collapsed:L,categoryLabel:v,onClick:e=>{e.preventDefault(),H()}})]}),(0,a.jsx)(m.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:L,children:(0,a.jsx)(Z,{items:g,tabIndex:L?-1:0,onItemClick:n,activePath:c,level:x+1})})]})}var _=n("63150"),g=n("62425");let v={menuExternalLink:"menuExternalLink_NmtK"};function C(e){let{item:t,onItemClick:n,activePath:i,level:r,index:l,...s}=e,{href:c,label:u,className:m,autoAddBaseUrl:p}=t,x=(0,o._F)(t,i),f=(0,_.Z)(c);return(0,a.jsx)("li",{className:(0,d.Z)(h.k.docs.docSidebarItemLink,h.k.docs.docSidebarItemLinkLevel(r),"menu__list-item",m),children:(0,a.jsxs)(b.Z,{className:(0,d.Z)("menu__link",!f&&v.menuExternalLink,{"menu__link--active":x}),autoAddBaseUrl:p,"aria-current":x?"page":void 0,to:c,...f&&{onClick:n?()=>n(t):void 0},...s,children:[u,!f&&(0,a.jsx)(g.Z,{})]})},u)}let S={menuHtmlItem:"menuHtmlItem_M9Kj"};function T(e){let{item:t,level:n,index:i}=e,{value:o,defaultStyle:r,className:l}=t;return(0,a.jsx)("li",{className:(0,d.Z)(h.k.docs.docSidebarItemLink,h.k.docs.docSidebarItemLinkLevel(n),r&&[S.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:o}},i)}function I(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,a.jsx)(k,{item:t,...n});case"html":return(0,a.jsx)(T,{item:t,...n});default:return(0,a.jsx)(C,{item:t,...n})}}let Z=(0,i.memo)(function(e){let{items:t,...n}=e,i=(0,o.f)(t,n.activePath);return(0,a.jsx)(c,{children:i.map((e,t)=>(0,a.jsx)(I,{item:e,index:t,...n},t))})})},74575:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(85893);function i(e){return(0,a.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,a.jsxs)("g",{fill:"#7a7a7a",children:[(0,a.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,a.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}n(67294)},74593:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(85893);n(67294);var i=n(67026),o=n(96025),r=n(34403);function l(e){let{className:t}=e;return(0,a.jsx)("main",{className:(0,i.Z)("container margin-vert--xl",t),children:(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,a.jsx)(r.Z,{as:"h1",className:"hero__title",children:(0,a.jsx)(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,a.jsx)("p",{children:(0,a.jsx)(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,a.jsx)("p",{children:(0,a.jsx)(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);