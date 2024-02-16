"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[88714,50914],{

/***/ 26388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(50118);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(23891);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/searchUtils.js
var searchUtils = __webpack_require__(81395);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js
var docsUtils = __webpack_require__(51538);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsVersion.js
var docsVersion = __webpack_require__(13296);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsSidebar.js
var docsSidebar = __webpack_require__(1088);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 67 modules
var Layout = __webpack_require__(98636);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(15418);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(52204);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
var useLocationChange = __webpack_require__(83922);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useBackToTopButton.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


/** Wires the logic for the back to top button. */ function useBackToTopButton({ threshold }) {
    const [shown, setShown] = (0,react.useState)(false);
    const isFocusedAnchor = (0,react.useRef)(false);
    const { startScroll, cancelScroll } = (0,scrollUtils/* useSmoothScrollTo */.gk)();
    (0,scrollUtils/* useScrollPosition */.Mq)(({ scrollY: scrollTop }, lastPosition)=>{
        const lastScrollTop = lastPosition === null || lastPosition === void 0 ? void 0 : lastPosition.scrollY;
        // Component is just being mounted. Not really a scroll event from the user.
        // Ignore it.
        if (!lastScrollTop) {
            return;
        }
        if (isFocusedAnchor.current) {
            // This scroll position change is triggered by navigating to an anchor.
            // Ignore it.
            isFocusedAnchor.current = false;
        } else if (scrollTop >= lastScrollTop) {
            // The user has scrolled down to "fight against" the animation. Cancel any
            // animation under progress.
            cancelScroll();
            setShown(false);
        } else if (scrollTop < threshold) {
            // Scrolled to the minimum position; hide the button.
            setShown(false);
        } else if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
            setShown(true);
        }
    });
    (0,useLocationChange/* useLocationChange */.$)((locationChangeEvent)=>{
        if (locationChangeEvent.location.hash) {
            isFocusedAnchor.current = true;
            setShown(false);
        }
    });
    return {
        shown,
        scrollToTop: ()=>startScroll(0)
    };
} //# sourceMappingURL=useBackToTopButton.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"backToTopButton":"backToTopButton_sjWU","backToTopButtonShow":"backToTopButtonShow_xfvO"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function BackToTopButton() {
    const { shown, scrollToTop } = useBackToTopButton({
        threshold: 300
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        "aria-label": (0,Translate/* translate */.T)({
            id: 'theme.BackToTopButton.buttonAriaLabel',
            message: 'Scroll back to top',
            description: 'The ARIA label for the back to top button'
        }),
        className: (0,clsx_m/* default */.A)('clean-btn', ThemeClassNames/* ThemeClassNames */.G.common.backToTopButton, styles_module.backToTopButton, shown && styles_module.backToTopButtonShow),
        type: "button",
        onClick: scrollToTop
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/accessibilityUtils.js
var accessibilityUtils = __webpack_require__(4249);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(93577);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(53114);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Logo/index.js
var Logo = __webpack_require__(65485);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Arrow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}


function IconArrow(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", _object_spread_props(_object_spread({
        width: "20",
        height: "20",
        "aria-hidden": "true"
    }, props), {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            fill: "#7a7a7a",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CollapseButton_styles_module = ({"collapseSidebarButton":"collapseSidebarButton_PEFL","collapseSidebarButtonIcon":"collapseSidebarButtonIcon_kv0_"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function CollapseButton({ onClick }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        type: "button",
        title: (0,Translate/* translate */.T)({
            id: 'theme.docs.sidebar.collapseButtonTitle',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar'
        }),
        "aria-label": (0,Translate/* translate */.T)({
            id: 'theme.docs.sidebar.collapseButtonAriaLabel',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar'
        }),
        className: (0,clsx_m/* default */.A)('button button--secondary button--outline', CollapseButton_styles_module.collapseSidebarButton),
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconArrow, {
            className: CollapseButton_styles_module.collapseSidebarButtonIcon
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/announcementBar.js
var announcementBar = __webpack_require__(72501);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(25576);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docSidebarItemsExpandedState.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


const EmptyContext = Symbol('EmptyContext');
const Context = /*#__PURE__*/ react.createContext(EmptyContext);
/**
 * Should be used to wrap one sidebar category level. This provider syncs the
 * expanded states of all sibling categories, and categories can choose to
 * collapse itself if another one is expanded.
 */ function DocSidebarItemsExpandedStateProvider({ children }) {
    const [expandedItem, setExpandedItem] = (0,react.useState)(null);
    const contextValue = (0,react.useMemo)(()=>({
            expandedItem,
            setExpandedItem
        }), [
        expandedItem
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Context.Provider, {
        value: contextValue,
        children: children
    });
}
function useDocSidebarItemsExpandedState() {
    const value = (0,react.useContext)(Context);
    if (value === EmptyContext) {
        throw new reactUtils/* ReactContextError */.dV('DocSidebarItemsExpandedStateProvider');
    }
    return value;
} //# sourceMappingURL=docSidebarItemsExpandedState.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(98202);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(93989);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(89546);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(12075);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Category/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Category_define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function Category_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            Category_define_property(target, key, source[key]);
        });
    }
    return target;
}
function Category_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function Category_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        Category_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}









// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed }) {
    const wasActive = (0,reactUtils/* usePrevious */.ZC)(isActive);
    (0,react.useEffect)(()=>{
        const justBecameActive = isActive && !wasActive;
        if (justBecameActive && collapsed) {
            updateCollapsed(false);
        }
    }, [
        isActive,
        wasActive,
        collapsed,
        updateCollapsed
    ]);
}
/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */ function useCategoryHrefWithSSRFallback(item) {
    const isBrowser = (0,useIsBrowser/* default */.A)();
    return (0,react.useMemo)(()=>{
        if (item.href) {
            return item.href;
        }
        // In these cases, it's not necessary to render a fallback
        // We skip the "findFirstCategoryLink" computation
        if (isBrowser || !item.collapsible) {
            return undefined;
        }
        return (0,docsUtils/* findFirstCategoryLink */._o)(item);
    }, [
        item,
        isBrowser
    ]);
}
function Category_CollapseButton({ categoryLabel, onClick }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        "aria-label": (0,Translate/* translate */.T)({
            id: 'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel',
            message: "Toggle the collapsible sidebar category '{label}'",
            description: 'The ARIA label to toggle the collapsible sidebar category'
        }, {
            label: categoryLabel
        }),
        type: "button",
        className: "clean-btn menu__caret",
        onClick: onClick
    });
}
function DocSidebarItemCategory(_param) {
    var { item, onItemClick, activePath, level, index } = _param, props = _object_without_properties(_param, [
        "item",
        "onItemClick",
        "activePath",
        "level",
        "index"
    ]);
    const { items, label, collapsible, className, href } = item;
    const { docs: { sidebar: { autoCollapseCategories } } } = (0,useThemeConfig/* useThemeConfig */.p)();
    const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
    const isActive = (0,docsUtils/* isActiveSidebarItem */.w8)(item, activePath);
    const isCurrentPage = (0,routesUtils/* isSamePath */.ys)(href, activePath);
    const { collapsed, setCollapsed } = (0,Collapsible/* useCollapsible */.u)({
        // Active categories are always initialized as expanded. The default
        // (`item.collapsed`) is only used for non-active categories.
        initialState: ()=>{
            if (!collapsible) {
                return false;
            }
            return isActive ? false : item.collapsed;
        }
    });
    const { expandedItem, setExpandedItem } = useDocSidebarItemsExpandedState();
    // Use this instead of `setCollapsed`, because it is also reactive
    const updateCollapsed = (toCollapsed = !collapsed)=>{
        setExpandedItem(toCollapsed ? null : index);
        setCollapsed(toCollapsed);
    };
    useAutoExpandActiveCategory({
        isActive,
        collapsed,
        updateCollapsed
    });
    (0,react.useEffect)(()=>{
        if (collapsible && expandedItem != null && expandedItem !== index && autoCollapseCategories) {
            setCollapsed(true);
        }
    }, [
        collapsible,
        expandedItem,
        index,
        setCollapsed,
        autoCollapseCategories
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        className: (0,clsx_m/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemCategory, ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemCategoryLevel(level), 'menu__list-item', {
            'menu__list-item--collapsed': collapsed
        }, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,clsx_m/* default */.A)('menu__list-item-collapsible', {
                    'menu__list-item-collapsible--active': isCurrentPage
                }),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, Category_object_spread_props(Category_object_spread({
                        className: (0,clsx_m/* default */.A)('menu__link', {
                            'menu__link--sublist': collapsible,
                            'menu__link--sublist-caret': !href && collapsible,
                            'menu__link--active': isActive
                        }),
                        onClick: collapsible ? (e)=>{
                            onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
                            if (href) {
                                updateCollapsed(false);
                            } else {
                                e.preventDefault();
                                updateCollapsed();
                            }
                        } : ()=>{
                            onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
                        },
                        "aria-current": isCurrentPage ? 'page' : undefined,
                        "aria-expanded": collapsible ? !collapsed : undefined,
                        href: collapsible ? hrefWithSSRFallback !== null && hrefWithSSRFallback !== void 0 ? hrefWithSSRFallback : '#' : hrefWithSSRFallback
                    }, props), {
                        children: label
                    })),
                    href && collapsible && /*#__PURE__*/ (0,jsx_runtime.jsx)(Category_CollapseButton, {
                        categoryLabel: label,
                        onClick: (e)=>{
                            e.preventDefault();
                            updateCollapsed();
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N, {
                lazy: true,
                as: "ul",
                className: "menu__list",
                collapsed: collapsed,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_DocSidebarItems, {
                    items: items,
                    tabIndex: collapsed ? -1 : 0,
                    onItemClick: onItemClick,
                    activePath: activePath,
                    level: level + 1
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(11410);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/index.js + 1 modules
var ExternalLink = __webpack_require__(8096);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Link_styles_module = ({"menuExternalLink":"menuExternalLink_NmtK"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Link_define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function Link_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            Link_define_property(target, key, source[key]);
        });
    }
    return target;
}
function Link_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function Link_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        Link_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function Link_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = Link_object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function Link_object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}









function DocSidebarItemLink(_param) {
    var { item, onItemClick, activePath, level, index } = _param, props = Link_object_without_properties(_param, [
        "item",
        "onItemClick",
        "activePath",
        "level",
        "index"
    ]);
    const { href, label, className, autoAddBaseUrl } = item;
    const isActive = (0,docsUtils/* isActiveSidebarItem */.w8)(item, activePath);
    const isInternalLink = (0,isInternalUrl/* default */.A)(href);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        className: (0,clsx_m/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLink, ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLinkLevel(level), 'menu__list-item', className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.A, Link_object_spread_props(Link_object_spread({
            className: (0,clsx_m/* default */.A)('menu__link', !isInternalLink && Link_styles_module.menuExternalLink, {
                'menu__link--active': isActive
            }),
            autoAddBaseUrl: autoAddBaseUrl,
            "aria-current": isActive ? 'page' : undefined,
            to: href
        }, isInternalLink && {
            onClick: onItemClick ? ()=>onItemClick(item) : undefined
        }, props), {
            children: [
                label,
                !isInternalLink && /*#__PURE__*/ (0,jsx_runtime.jsx)(ExternalLink/* default */.A, {})
            ]
        }))
    }, label);
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Html_styles_module = ({"menuHtmlItem":"menuHtmlItem_M9Kj"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocSidebarItemHtml({ item, level, index }) {
    const { value, defaultStyle, className } = item;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        className: (0,clsx_m/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLink, ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLinkLevel(level), defaultStyle && [
            Html_styles_module.menuHtmlItem,
            'menu__list-item'
        ], className),
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: {
            __html: value
        }
    }, index);
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function DocSidebarItem_define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function DocSidebarItem_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            DocSidebarItem_define_property(target, key, source[key]);
        });
    }
    return target;
}
function DocSidebarItem_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = DocSidebarItem_object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function DocSidebarItem_object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}





function DocSidebarItem(_param) {
    var { item } = _param, props = DocSidebarItem_object_without_properties(_param, [
        "item"
    ]);
    switch(item.type){
        case 'category':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItemCategory, DocSidebarItem_object_spread({
                item: item
            }, props));
        case 'html':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItemHtml, DocSidebarItem_object_spread({
                item: item
            }, props));
        case 'link':
        default:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItemLink, DocSidebarItem_object_spread({
                item: item
            }, props));
    }
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function DocSidebarItems_define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function DocSidebarItems_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            DocSidebarItems_define_property(target, key, source[key]);
        });
    }
    return target;
}
function DocSidebarItems_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = DocSidebarItems_object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function DocSidebarItems_object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}




// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems(_param) {
    var { items } = _param, props = DocSidebarItems_object_without_properties(_param, [
        "items"
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItemsExpandedStateProvider, {
        children: items.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItem, DocSidebarItems_object_spread({
                item: item,
                index: index
            }, props), index))
    });
}
// Optimize sidebar at each "level"
/* harmony default export */ const theme_DocSidebarItems = (/*#__PURE__*/(0,react.memo)(DocSidebarItems));

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Content_styles_module = ({"menu":"menu_SIkG","menuWithAnnouncementBar":"menuWithAnnouncementBar_GW3s"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function useShowAnnouncementBar() {
    const { isActive } = (0,announcementBar/* useAnnouncementBar */.Mj)();
    const [showAnnouncementBar, setShowAnnouncementBar] = (0,react.useState)(isActive);
    (0,scrollUtils/* useScrollPosition */.Mq)(({ scrollY })=>{
        if (isActive) {
            setShowAnnouncementBar(scrollY === 0);
        }
    }, [
        isActive
    ]);
    return isActive && showAnnouncementBar;
}
function DocSidebarDesktopContent({ path, sidebar, className }) {
    const showAnnouncementBar = useShowAnnouncementBar();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
        "aria-label": (0,Translate/* translate */.T)({
            id: 'theme.docs.sidebar.navAriaLabel',
            message: 'Docs sidebar',
            description: 'The ARIA label for the sidebar navigation'
        }),
        className: (0,clsx_m/* default */.A)('menu thin-scrollbar', Content_styles_module.menu, showAnnouncementBar && Content_styles_module.menuWithAnnouncementBar, className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
            className: (0,clsx_m/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarMenu, 'menu__list'),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_DocSidebarItems, {
                items: sidebar,
                activePath: path,
                level: 1
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/theme/DocSidebar/Desktop/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Desktop_styles_module = ({"sidebar":"sidebar_mhZE","sidebarWithHideableNavbar":"sidebarWithHideableNavbar__6UL","sidebarHidden":"sidebarHidden__LRd","sidebarLogo":"sidebarLogo_F_0z"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(90062);
;// CONCATENATED MODULE: ./src/theme/DocSidebar/Desktop/index.js










function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
    const { navbar: { hideOnScroll }, docs: { sidebar: { hideable } } } = (0,useThemeConfig/* useThemeConfig */.p)();
    const { i18n: { currentLocale } } = (0,useDocusaurusContext/* default */.A)();
    let whataphome, docshome;
    if (currentLocale == 'ko') {
        whataphome = 'https://www.whatap.io';
        docshome = '/';
    } else {
        whataphome = 'https://www.whatap.io/' + currentLocale;
        docshome = '/' + currentLocale;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx_m/* default */.A)(Desktop_styles_module.sidebar, hideOnScroll && Desktop_styles_module.sidebarWithHideableNavbar, isHidden && Desktop_styles_module.sidebarHidden),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "hold-menu",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: docshome,
                                className: "home",
                                children: (0,Translate/* translate */.T)({
                                    id: "docs_Name",
                                    message: "WhaTap Docs"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: whataphome,
                                target: "_blank",
                                className: "ext",
                                children: (0,Translate/* translate */.T)({
                                    id: "whatap_link_go",
                                    message: "와탭 홈페이지 바로가기"
                                })
                            })
                        })
                    ]
                })
            }),
            hideOnScroll && /*#__PURE__*/ (0,jsx_runtime.jsx)(Logo/* default */.A, {
                tabIndex: -1,
                className: Desktop_styles_module.sidebarLogo
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarDesktopContent, {
                path: path,
                sidebar: sidebar
            }),
            hideable && /*#__PURE__*/ (0,jsx_runtime.jsx)(CollapseButton, {
                onClick: onCollapse
            })
        ]
    });
}
/* harmony default export */ const Desktop = (/*#__PURE__*/react.memo(DocSidebarDesktop));

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(11628);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js
var navbarMobileSidebar = __webpack_require__(24937);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





// eslint-disable-next-line react/function-component-definition
const DocSidebarMobileSecondaryMenu = ({ sidebar, path })=>{
    const mobileSidebar = (0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        className: (0,clsx_m/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarMenu, 'menu__list'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_DocSidebarItems, {
            items: sidebar,
            activePath: path,
            onItemClick: (item)=>{
                // Mobile sidebar should only be closed if the category has a link
                if (item.type === 'category' && item.href) {
                    mobileSidebar.toggle();
                }
                if (item.type === 'link') {
                    mobileSidebar.toggle();
                }
            },
            level: 1
        })
    });
};
function DocSidebarMobile(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(content/* NavbarSecondaryMenuFiller */.GX, {
        component: DocSidebarMobileSecondaryMenu,
        props: props
    });
}
/* harmony default export */ const Mobile = (/*#__PURE__*/react.memo(DocSidebarMobile));

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function DocSidebar_define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function DocSidebar_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            DocSidebar_define_property(target, key, source[key]);
        });
    }
    return target;
}





function DocSidebar(props) {
    const windowSize = (0,useWindowSize/* useWindowSize */.l)();
    // Desktop sidebar visible on hydration: need SSR rendering
    const shouldRenderSidebarDesktop = windowSize === 'desktop' || windowSize === 'ssr';
    // Mobile sidebar not visible on hydration: can avoid SSR rendering
    const shouldRenderSidebarMobile = windowSize === 'mobile';
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            shouldRenderSidebarDesktop && /*#__PURE__*/ (0,jsx_runtime.jsx)(Desktop, DocSidebar_object_spread({}, props)),
            shouldRenderSidebarMobile && /*#__PURE__*/ (0,jsx_runtime.jsx)(Mobile, DocSidebar_object_spread({}, props))
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/ExpandButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ExpandButton_styles_module = ({"expandButton":"expandButton_m80_","expandButtonIcon":"expandButtonIcon_BlDH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/ExpandButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocPageLayoutSidebarExpandButton({ toggleSidebar }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: ExpandButton_styles_module.expandButton,
        title: (0,Translate/* translate */.T)({
            id: 'theme.docs.sidebar.expandButtonTitle',
            message: 'Expand sidebar',
            description: 'The ARIA label and title attribute for expand button of doc sidebar'
        }),
        "aria-label": (0,Translate/* translate */.T)({
            id: 'theme.docs.sidebar.expandButtonAriaLabel',
            message: 'Expand sidebar',
            description: 'The ARIA label and title attribute for expand button of doc sidebar'
        }),
        tabIndex: 0,
        role: "button",
        onKeyDown: toggleSidebar,
        onClick: toggleSidebar,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconArrow, {
            className: ExpandButton_styles_module.expandButtonIcon
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Sidebar_styles_module = ({"docSidebarContainer":"docSidebarContainer_b6E3","docSidebarContainerHidden":"docSidebarContainerHidden_b3ry","sidebarViewport":"sidebarViewport_Xe31"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 








// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange({ children }) {
    const sidebar = (0,docsSidebar/* useDocsSidebar */.t)();
    var _sidebar_name;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
        children: children
    }, (_sidebar_name = sidebar === null || sidebar === void 0 ? void 0 : sidebar.name) !== null && _sidebar_name !== void 0 ? _sidebar_name : 'noSidebar');
}
function DocPageLayoutSidebar({ sidebar, hiddenSidebarContainer, setHiddenSidebarContainer }) {
    const { pathname } = (0,react_router/* useLocation */.zy)();
    const [hiddenSidebar, setHiddenSidebar] = (0,react.useState)(false);
    const toggleSidebar = (0,react.useCallback)(()=>{
        if (hiddenSidebar) {
            setHiddenSidebar(false);
        }
        // onTransitionEnd won't fire when sidebar animation is disabled
        // fixes https://github.com/facebook/docusaurus/issues/8918
        if (!hiddenSidebar && (0,accessibilityUtils/* prefersReducedMotion */.O)()) {
            setHiddenSidebar(true);
        }
        setHiddenSidebarContainer((value)=>!value);
    }, [
        setHiddenSidebarContainer,
        hiddenSidebar
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("aside", {
        className: (0,clsx_m/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarContainer, Sidebar_styles_module.docSidebarContainer, hiddenSidebarContainer && Sidebar_styles_module.docSidebarContainerHidden),
        onTransitionEnd: (e)=>{
            if (!e.currentTarget.classList.contains(Sidebar_styles_module.docSidebarContainer)) {
                return;
            }
            if (hiddenSidebarContainer) {
                setHiddenSidebar(true);
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ResetOnSidebarChange, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,clsx_m/* default */.A)(Sidebar_styles_module.sidebarViewport, hiddenSidebar && Sidebar_styles_module.sidebarViewportHidden),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebar, {
                        sidebar: sidebar,
                        path: pathname,
                        onCollapse: toggleSidebar,
                        isHidden: hiddenSidebar
                    }),
                    hiddenSidebar && /*#__PURE__*/ (0,jsx_runtime.jsx)(DocPageLayoutSidebarExpandButton, {
                        toggleSidebar: toggleSidebar
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Main_styles_module = ({"docMainContainer":"docMainContainer_gTbr","docMainContainerEnhanced":"docMainContainerEnhanced_Uz_u","docItemWrapperEnhanced":"docItemWrapperEnhanced_czyv"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocPageLayoutMain({ hiddenSidebarContainer, children }) {
    const sidebar = (0,docsSidebar/* useDocsSidebar */.t)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
        className: (0,clsx_m/* default */.A)(Main_styles_module.docMainContainer, (hiddenSidebarContainer || !sidebar) && Main_styles_module.docMainContainerEnhanced),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (0,clsx_m/* default */.A)('container padding-top--md padding-bottom--lg', Main_styles_module.docItemWrapper, hiddenSidebarContainer && Main_styles_module.docItemWrapperEnhanced),
            children: children
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Layout_styles_module = ({"docPage":"docPage__5DB","docsWrapper":"docsWrapper_BCFX","themedComponent--light":"themedComponent--light_NU7w"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function DocPageLayout({ children }) {
    const sidebar = (0,docsSidebar/* useDocsSidebar */.t)();
    const [hiddenSidebarContainer, setHiddenSidebarContainer] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.A, {
        wrapperClassName: Layout_styles_module.docsWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BackToTopButton, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: Layout_styles_module.docPage,
                children: [
                    sidebar && /*#__PURE__*/ (0,jsx_runtime.jsx)(DocPageLayoutSidebar, {
                        sidebar: sidebar.items,
                        hiddenSidebarContainer: hiddenSidebarContainer,
                        setHiddenSidebarContainer: setHiddenSidebarContainer
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DocPageLayoutMain, {
                        hiddenSidebarContainer: hiddenSidebarContainer,
                        children: children
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NotFound.js
var NotFound = __webpack_require__(50914);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(63067);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function DocPage_define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function DocPage_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            DocPage_define_property(target, key, source[key]);
        });
    }
    return target;
}








function DocPageMetadata(props) {
    const { versionMetadata } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchMetadata/* default */.A, {
                version: versionMetadata.version,
                tag: (0,searchUtils/* docVersionSearchTag */.tU)(versionMetadata.pluginId, versionMetadata.version)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be, {
                children: versionMetadata.noIndex && /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                })
            })
        ]
    });
}
function DocPage(props) {
    const { versionMetadata } = props;
    const currentDocRouteMetadata = (0,docsUtils/* useDocRouteMetadata */.mz)(props);
    if (!currentDocRouteMetadata) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(NotFound["default"], {});
    }
    const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocPageMetadata, DocPage_object_spread({}, props)),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* HtmlClassNameProvider */.e3, {
                className: (0,clsx_m/* default */.A)(// TODO: it should be removed from here
                ThemeClassNames/* ThemeClassNames */.G.wrapper.docsPages, ThemeClassNames/* ThemeClassNames */.G.page.docsDocPage, props.versionMetadata.className),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(docsVersion/* DocsVersionProvider */.n, {
                    version: versionMetadata,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(docsSidebar/* DocsSidebarProvider */.V, {
                        name: sidebarName,
                        items: sidebarItems,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DocPageLayout, {
                            children: docElement
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 50914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15418);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50118);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98636);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function NotFound() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .PageMetadata */ .be, {
                title: (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)({
                    id: 'theme.NotFound.title',
                    message: 'Page Not Found'
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
                    className: "container margin-vert--xl",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col col--6 col--offset-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                    className: "hero__title",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                                        id: "theme.NotFound.title",
                                        description: "The title of the 404 page",
                                        children: "Page Not Found"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                                        id: "theme.NotFound.p1",
                                        description: "The first paragraph of the 404 page",
                                        children: "We could not find what you were looking for."
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                                        id: "theme.NotFound.p2",
                                        description: "The 2nd paragraph of the 404 page",
                                        children: "Please contact the owner of the site that linked you to the original URL and let them know their link is broken."
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}


/***/ })

}]);