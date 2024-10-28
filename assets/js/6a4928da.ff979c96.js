"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[92194],{

/***/ 81098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// NAMESPACE OBJECT: ./src/components/Autocomplete/icons.js
var icons_namespaceObject = {};
__webpack_require__.r(icons_namespaceObject);
__webpack_require__.d(icons_namespaceObject, {
  API: () => (API),
  Account: () => (Account),
  Billing: () => (Billing),
  Book: () => (Book),
  Bookexpand: () => (Bookexpand),
  Docs: () => (Docs),
  FAQ: () => (FAQ),
  Home: () => (Home),
  IntegratedManage: () => (IntegratedManage),
  MXQL: () => (MXQL),
  Metrics: () => (Metrics),
  Mobile: () => (Mobile),
  Multifactor: () => (Multifactor),
  Newfunc: () => (Newfunc),
  Notes: () => (Notes),
  Project: () => (Project),
  Proxy: () => (Proxy),
  Support: () => (Support),
  Tools: () => (Tools),
  UserBehavior: () => (UserBehavior),
  WhaTaplogo: () => (WhaTaplogo)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 66 modules
var Layout = __webpack_require__(38103);
;// CONCATENATED MODULE: ./src/pages/renew/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"frontheading":"frontheading_rzmP","homehero":"homehero_IZR1","textleft":"textleft_I9dL","white":"white_Y8SA","newdoc":"newdoc_SJD5","underline":"underline_WuJU","newfunc":"newfunc__GoX","guidelink":"guidelink_SWNB","appcontainer":"appcontainer_AqcP","aa-Autocomplete":"aa-Autocomplete_fHFR","justifycontentcenter":"justifycontentcenter_eHCM","justifycardcontent":"justifycardcontent_aJwH","gettingStart":"gettingStart_iOkq","flexcolumn":"flexcolumn_iXJh","flexContainer":"flexContainer_lnPo","textcenter":"textcenter_kKjR","flexProd":"flexProd_iGTO","document":"document_e86O","product":"product_OzUz","type":"type_I67K","tag":"tag_kLmU","alignDocument":"alignDocument_Lx0N","alignCenter":"alignCenter_Dwgg","logo":"logo_HIFU","doculogo":"doculogo_fIUg","logoDocu":"logoDocu_bWKh","desc":"desc_ehOV","title":"title_VoOx","beta":"beta_KeEB","rightarrowcontainer":"rightarrowcontainer_f7eH","rightarrow":"rightarrow_aZnU","downarrow":"downarrow_ZE1C","innercontent":"innercontent_I0dQ","small":"small_UU3X","inline":"inline_kcFA","iconumber":"iconumber_wGmr"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(3248);
// EXTERNAL MODULE: ./node_modules/@meilisearch/autocomplete-client/dist/autocomplete-client.umd.js
var autocomplete_client_umd = __webpack_require__(61237);
// EXTERNAL MODULE: ./node_modules/@algolia/autocomplete-theme-classic/dist/theme.min.css
var theme_min = __webpack_require__(58160);
// EXTERNAL MODULE: ./node_modules/@algolia/autocomplete-js/dist/esm/autocomplete.js + 74 modules
var autocomplete = __webpack_require__(42960);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
;// CONCATENATED MODULE: ./src/components/Autocomplete/Autocomplete.js
function _defineProperty(obj, key, value) {
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
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}




function Autocomplete(props) {
    const containerRef = (0,react.useRef)(null);
    const panelRootRef = (0,react.useRef)(null);
    const rootRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        if (!containerRef.current) {
            return undefined;
        }
        const search = (0,autocomplete/* autocomplete */.n)(_objectSpread({
            container: containerRef.current,
            renderer: {
                createElement: react.createElement,
                Fragment: react.Fragment,
                render: ()=>{}
            },
            render ({ children  }, root) {
                if (!panelRootRef.current || rootRef.current !== root) {
                    var ref;
                    rootRef.current = root;
                    (ref = panelRootRef.current) === null || ref === void 0 ? void 0 : ref.unmount();
                    panelRootRef.current = (0,client.createRoot)(root);
                }
                panelRootRef.current.render(children);
            }
        }, props));
        return ()=>{
            search.destroy();
        };
    }, [
        props
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: containerRef,
        className: "searchbox"
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28618);
;// CONCATENATED MODULE: ./src/components/Autocomplete/ProductItem.js




function ProductItem({ hit , components  }) {
    const docsURL = "https://docs.whatap.io";
    const titles = [
        hit.hierarchy_radio_lvl0,
        hit.hierarchy_radio_lvl1,
        hit.hierarchy_radio_lvl2,
        hit.hierarchy_radio_lvl3,
        hit.hierarchy_radio_lvl4,
        hit.hierarchy_radio_lvl5
    ];
    const title = titles.filter((element, i)=>element !== null);
    const durl = hit.url.replace(docsURL, "").replace("#__docusaurus_skipToContent_fallback", "");
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "aa-ItemContent",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "aa-ItemTitle",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.A, {
                        to: durl,
                        target: "_blank",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                children: title[0]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "hit-breadcrums",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "hit-name lvl0",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components.Highlight, {
                                            attribute: "hierarchy_lvl0",
                                            hit: hit
                                        })
                                    }),
                                    hit.hierarchy_lvl1 && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "hit-name",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components.Highlight, {
                                            attribute: "hierarchy_lvl1",
                                            hit: hit
                                        })
                                    }),
                                    hit.hierarchy_lvl2 && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "hit-name",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components.Highlight, {
                                            attribute: "hierarchy_lvl2",
                                            hit: hit
                                        })
                                    }),
                                    hit.hierarchy_lvl3 && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "hit-name",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components.Highlight, {
                                            attribute: "hierarchy_lvl3",
                                            hit: hit
                                        })
                                    }),
                                    hit.hierarchy_lvl4 && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "hit-name",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components.Highlight, {
                                            attribute: "hierarchy_lvl4",
                                            hit: hit
                                        })
                                    }),
                                    hit.hierarchy_lvl5 && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "hit-name last",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components.Highlight, {
                                            attribute: "hierarchy_lvl5",
                                            hit: hit
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    hit.content && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "content",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components.Snippet, {
                            attribute: "content",
                            hit: hit
                        })
                    })
                ]
            }, hit.id)
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(90062);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(92469);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(61917);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(15418);
;// CONCATENATED MODULE: ./src/components/Autocomplete/icons.js


function Bookexpand() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "27",
        viewBox: "0 0 32 27",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M16.3977 5.67045C16.3977 4.46492 16.8766 3.30877 17.729 2.45633C18.5815 1.60389 19.7376 1.125 20.9432 1.125H30.0341C30.3355 1.125 30.6245 1.24472 30.8376 1.45783C31.0507 1.67094 31.1704 1.95998 31.1704 2.26136V20.4432C31.1704 20.7446 31.0507 21.0336 30.8376 21.2467C30.6245 21.4598 30.3355 21.5795 30.0341 21.5795H20.9432C19.7376 21.5795 18.5815 22.0584 17.729 22.9109C16.8766 23.7633 16.3977 24.9195 16.3977 26.125",
                stroke: "currentColor",
                "stroke-width": "3",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M1.625 20.4432C1.625 20.7446 1.74472 21.0336 1.95783 21.2467C2.17094 21.4598 2.45998 21.5795 2.76136 21.5795H11.8523C13.0578 21.5795 14.214 22.0584 15.0664 22.9109C15.9188 23.7633 16.3977 24.9195 16.3977 26.125V5.67045C16.3977 4.46492 15.9188 3.30877 15.0664 2.45633C14.214 1.60389 13.0578 1.125 11.8523 1.125H2.76136C2.45998 1.125 2.17094 1.24472 1.95783 1.45783C1.74472 1.67094 1.625 1.95998 1.625 2.26136V20.4432Z",
                stroke: "currentColor",
                "stroke-width": "3",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })
        ]
    });
}
function Metrics() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "29",
        height: "25",
        viewBox: "0 0 29 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M28.5398 14.2699C28.5398 18.5223 26.6798 22.3402 23.7289 24.9545L21.8853 23.1199C23.7448 21.5184 25.094 19.3409 25.6559 16.8644H22.7021V14.2699H25.9452C25.9452 11.8462 25.2067 9.59493 23.9424 7.72896L21.6081 10.0633L19.7735 8.22869L22.2525 5.7497C20.4612 4.07076 18.1402 2.95021 15.5672 2.66578V6.48631H12.9726V2.66578C10.3995 2.95022 8.07847 4.07083 6.28715 5.74986L8.76597 8.22868L6.93137 10.0633L4.59724 7.72916C3.33301 9.59509 2.59452 11.8462 2.59452 14.2699H5.83768V16.8644H2.88384C3.45055 19.3619 4.81793 21.5554 6.70185 23.1606L4.86244 25C1.88171 22.3846 0 18.547 0 14.2699C0 6.38885 6.38885 0 14.2699 0C22.1509 0 28.5398 6.38885 28.5398 14.2699ZM19.4639 10.8283C19.8476 11.212 19.8476 11.8241 19.4639 12.2078L16.7765 14.8952C16.8339 15.1095 16.8644 15.3347 16.8644 15.5672C16.8644 17.0001 15.7028 18.1617 14.2699 18.1617C12.837 18.1617 11.6754 17.0001 11.6754 15.5672C11.6754 14.1342 12.837 12.9726 14.2699 12.9726C14.5023 12.9726 14.7276 13.0032 14.942 13.0605L17.5946 10.4079C17.9918 10.0107 18.6463 10.0107 19.0435 10.4079L19.4639 10.8283Z",
            fill: "currentColor"
        })
    });
}
function MXQL() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "75",
        height: "25",
        viewBox: "0 0 75 25",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M63.1497 20.2514V0.307312H65.6636V18.0168H74.3787V20.2514H63.1497Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M58.7289 10.2514C58.7289 11.8715 58.5054 13.3426 58.0585 14.6648C57.6302 15.987 56.9877 17.1043 56.1311 18.0168C55.2745 18.9292 54.2037 19.5996 52.9188 20.0279L57.6953 25H54.092L50.2372 20.5028C50.1255 20.5028 50.0045 20.5028 49.8741 20.5028C49.7624 20.5214 49.6507 20.5307 49.5389 20.5307C47.9747 20.5307 46.6153 20.2886 45.4607 19.8045C44.3061 19.3017 43.3471 18.6034 42.5836 17.7095C41.8201 16.797 41.2521 15.7076 40.8797 14.4413C40.5073 13.175 40.321 11.7691 40.321 10.2235C40.321 8.17505 40.6562 6.38734 41.3266 4.86034C41.997 3.33333 43.0119 2.14153 44.3713 1.28492C45.7493 0.428305 47.4812 0 49.5669 0C51.5594 0 53.2354 0.428305 54.5948 1.28492C55.9542 2.12291 56.9784 3.31471 57.6674 4.86034C58.375 6.38734 58.7289 8.18436 58.7289 10.2514ZM42.9747 10.2514C42.9747 11.9274 43.2075 13.3706 43.673 14.581C44.1386 15.7914 44.8555 16.7225 45.8238 17.3743C46.8108 18.0261 48.0492 18.352 49.5389 18.352C51.0473 18.352 52.2764 18.0261 53.2261 17.3743C54.1944 16.7225 54.9114 15.7914 55.3769 14.581C55.8425 13.3706 56.0752 11.9274 56.0752 10.2514C56.0752 7.73743 55.5538 5.77281 54.511 4.35754C53.4682 2.92365 51.8201 2.2067 49.5669 2.2067C48.0585 2.2067 46.8108 2.53259 45.8238 3.18436C44.8555 3.81751 44.1386 4.73929 43.673 5.94972C43.2075 7.14153 42.9747 8.57542 42.9747 10.2514Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M39.0532 20.2514H36.204L30.9247 11.5922L25.5616 20.2514H22.908L29.5281 9.86039L23.327 0.307312H26.1202L31.0085 8.12854L35.9247 0.307312H38.5784L32.4052 9.80452L39.0532 20.2514Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M8.96295 20.2514L2.3987 2.76541H2.28697C2.32421 3.13785 2.35214 3.61271 2.37077 4.18999C2.40801 4.76728 2.43594 5.40042 2.45457 6.08944C2.47319 6.75983 2.4825 7.44884 2.4825 8.15648V20.2514H0.164062V0.307312H3.87915L10.0244 16.6481H10.1361L16.3931 0.307312H20.0803V20.2514H17.5942V7.98888C17.5942 7.33711 17.6035 6.69465 17.6222 6.0615C17.6408 5.40973 17.6687 4.80452 17.706 4.24586C17.7432 3.66858 17.7711 3.18441 17.7898 2.79335H17.678L11.03 20.2514H8.96295Z",
                fill: "currentColor"
            })
        ]
    });
}
function FAQ() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M0 12.5C0 5.59625 5.5975 0 12.5 0C19.4025 0 25 5.59625 25 12.5C25 15.1163 24.1938 17.5425 22.82 19.55L25 25L19.55 22.82C17.5425 24.1938 15.1163 25 12.5 25C5.5975 25 0 19.4037 0 12.5ZM12.5 22.5C14.8544 22.5 17.0188 21.6863 18.7273 20.3249L21.3137 21.1982L20.4096 18.6195C21.72 16.9282 22.5 14.8052 22.5 12.5C22.5 6.97715 18.0228 2.5 12.5 2.5C6.97715 2.5 2.5 6.97715 2.5 12.5C2.5 18.0228 6.97715 22.5 12.5 22.5ZM17.287 11.8848C17.287 13.0078 17.1093 13.9803 16.7539 14.8022C16.4108 15.596 15.9905 16.0157 15.5333 16.4723L15.4844 16.5212L17.54 18.0697L15.9605 19.5508L13.4377 17.557C13.1068 17.6275 12.7514 17.6628 12.3716 17.6628C11.4168 17.6628 10.5636 17.4281 9.81221 16.9588C9.0608 16.4895 8.48029 15.8209 8.07068 14.9528C7.66106 14.0847 7.45355 13.0838 7.44812 11.9499V11.2826C7.44812 10.1269 7.65293 9.10699 8.06254 8.22266C8.47216 7.33832 9.04995 6.66152 9.79594 6.19222C10.5419 5.72293 11.3951 5.48828 12.3553 5.48828C13.3319 5.48828 14.1932 5.72021 14.9392 6.18408C15.6852 6.64795 16.2616 7.31526 16.6685 8.18604C17.0754 9.05681 17.2816 10.07 17.287 11.2256V11.8848ZM14.6668 11.4014V11.9184C14.6668 13.034 14.4663 13.8821 14.0652 14.4626C13.6642 15.0431 13.0891 15.3334 12.3402 15.3334C11.6001 15.3334 11.025 15.0318 10.6151 14.4286C10.2052 13.8254 10.0002 12.9887 10.0002 11.9184V11.3402C10.009 10.2789 10.2184 9.45695 10.6284 8.87418C11.0383 8.29141 11.6045 8.00003 12.3269 8.00003C13.0714 8.00003 13.6475 8.28801 14.0553 8.86398C14.463 9.43994 14.6668 10.2857 14.6668 11.4014Z",
            fill: "currentColor"
        })
    });
}
function Book() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "31",
        height: "25",
        viewBox: "0 0 31 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M27.7778 0H2.77778C1.25 0 0 1.32353 0 2.94118V22.0588C0 23.6765 1.25 25 2.77778 25H27.7778C29.3056 25 30.5556 23.6765 30.5556 22.0588V2.94118C30.5556 1.32353 29.3056 0 27.7778 0ZM2.77778 22.2222V2.77778H13.8889V22.2222H2.77778ZM27.7778 22.2222H16.6667V2.77778H27.7778V22.2222ZM4.16667 6.94444H12.5V9.02778H4.16667V6.94444ZM18.0556 6.94444H26.3889V9.02778H18.0556V6.94444ZM4.16667 11.3889H12.5V13.4722H4.16667V11.3889ZM18.0556 11.3889H26.3889V13.4722H18.0556V11.3889ZM4.16667 15.8334H12.5V17.9167H4.16667V15.8334ZM18.0556 15.8334H26.3889V17.9167H18.0556V15.8334Z",
            fill: "currentColor"
        })
    });
}
function Docs() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "23",
        height: "25",
        viewBox: "0 0 23 25",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M20 7.5H2.5V20C2.5 21.3807 3.61929 22.5 5 22.5H20V7.5ZM0 5V20C0 22.7614 2.23858 25 5 25H22.5V5H0Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M0 7.5V3.75L2.5 7.5H0Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M12.5 10H10V12.5H12.5V10Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M12.5 13.75H10V20H12.5V13.75Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M3.375 2.5H22.5V0H3.375C1.51104 0 0 1.67893 0 3.75C0 5.82107 1.51104 7.5 3.375 7.5H22.5V5H3.375C2.75368 5 2.25 4.44036 2.25 3.75C2.25 3.05964 2.75368 2.5 3.375 2.5Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M21.25 2.5H20.875C20.2537 2.5 19.75 3.05964 19.75 3.75C19.75 4.44036 20.2537 5 20.875 5H21.25V7.5H20.875C19.011 7.5 17.5 5.82107 17.5 3.75C17.5 1.67893 19.011 0 20.875 0H21.25V2.5Z",
                fill: "currentColor"
            })
        ]
    });
}
function Proxy() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "21",
        height: "25",
        viewBox: "0 0 21 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M10.2273 0L0 4.54545V11.3636C0 17.6705 4.36364 23.5682 10.2273 25C16.0909 23.5682 20.4545 17.6705 20.4545 11.3636V4.54545L10.2273 0ZM10.2271 12.4886H18.1816C17.5794 17.1705 14.4544 21.3409 10.2271 22.6477V12.5H2.27254V6.02274L10.2271 2.48864V12.4886Z",
            fill: "currentColor"
        })
    });
}
function API() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "49",
        height: "26",
        viewBox: "0 0 49 26",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M16.5763 22.1855L0.679932 14.7626V12.5917L16.5763 4.18833V7.79477L5.40682 13.5021L16.5763 18.5791V22.1855Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M31.2868 0.862L22.5333 25.862H18.2966L27.0501 0.862H31.2868Z",
                fill: "black"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M32.8559 18.5791L44.0254 13.5371L32.8559 7.79477V4.18833L48.7522 12.5917V14.7626L32.8559 22.1855V18.5791Z",
                fill: "currentColor"
            })
        ]
    });
}
function UserBehavior() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "27",
        height: "26",
        viewBox: "0 0 27 26",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M10.094 3.10533C11.0414 2.76305 12.0351 2.56454 13.0401 2.51823L12.9249 0.0185547C11.8192 0.0695038 10.7308 0.267343 9.6879 0.600722L9.24378 0.751864L10.094 3.10533ZM8.26111 3.98564C7.40305 4.51035 6.62877 5.16075 5.96521 5.91755L4.0837 4.26782L4.40416 3.91617C5.16605 3.11163 6.02574 2.41947 6.95568 1.85082L8.26111 3.98564ZM3.7118 10.3817C3.84225 9.78912 4.02749 9.20564 4.26732 8.63614C4.43169 8.24884 4.60551 7.89662 4.80015 7.55466L2.62545 6.3168C2.38623 6.73706 2.16882 7.17559 1.97527 7.63156C1.72828 8.21343 1.52872 8.80354 1.37484 9.39758L1.26798 9.84378L3.7118 10.3817ZM3.48125 12.3491C3.46447 13.355 3.60076 14.3581 3.88351 15.3243L1.48188 16.0271L1.35875 15.5752C1.09102 14.5152 0.960771 13.4166 0.979267 12.3074L3.48125 12.3491ZM6.4382 19.6259C5.7246 18.9169 5.12269 18.1032 4.65136 17.2138L2.44029 18.3854C2.95166 19.3504 3.59006 20.2513 4.34424 21.0601L4.67452 21.401L6.4382 19.6259ZM10.7535 22.1489C10.3639 22.0374 9.97922 21.9018 9.60075 21.7421C9.02925 21.4995 8.50241 21.2189 8.00502 20.894L6.63656 22.9889C7.24941 23.3893 7.90606 23.7412 8.60351 24.0372C8.92509 24.1737 9.24918 24.2957 9.57507 24.4035L10.0651 24.5547L10.7535 22.1489ZM23.9115 5.54149L26.0284 4.28721L20.4772 2.76069L18.9898 8.45776L21.654 6.87915C22.7389 8.48281 23.3731 10.4203 23.3731 12.507C23.3731 18.0349 18.9221 22.5163 13.4316 22.5163C13.2502 22.5163 13.07 22.5114 12.891 22.5017V25.0032C13.0982 25.0134 13.3068 25.0186 13.5165 25.0186C20.4265 25.0186 26.0282 19.4169 26.0282 12.507C26.0282 9.92863 25.2483 7.53247 23.9115 5.54149ZM14.4985 6.25122H12.1894V13.7184L18.491 17.5117L19.6455 15.6748L14.4985 12.5983V6.25122Z",
            fill: "currentColor"
        })
    });
}
function Tools() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M14.8801 10.4509C15.9393 7.71945 15.3508 4.51299 13.1149 2.25659C10.7613 -0.11857 7.23081 -0.593601 4.40644 0.712736L9.46676 5.81933L5.93631 9.38206L0.758309 4.27547C-0.653872 7.12566 -0.065463 10.6884 2.28817 13.0636C4.52413 15.32 7.70153 15.9137 10.4082 14.8449L20.1885 24.6437C20.6593 25.1188 21.3653 25.1188 21.8361 24.6437L24.5428 21.9123C25.1312 21.4373 25.1312 20.606 24.6604 20.2497L14.8801 10.4509Z",
            fill: "currentColor"
        })
    });
}
function IntegratedManage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "28",
        height: "25",
        viewBox: "0 0 28 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M27.7778 11.1111V0H18.0556V4.16667H9.72222V0H0V11.1111H9.72222V6.94444H12.5V20.8333H18.0556V25H27.7778V13.8889H18.0556V18.0556H15.2778V6.94444H18.0556V11.1111H27.7778ZM6.94438 8.33334H2.77771V2.77779H6.94438V8.33334ZM20.8333 16.6667H24.9999V22.2222H20.8333V16.6667ZM20.8333 2.77779H24.9999V8.33334H20.8333V2.77779Z",
            fill: "currentColor"
        })
    });
}
function Project() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "23",
        height: "25",
        viewBox: "0 0 23 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M12.5 25H22.5V16.25H18.75V11.25H16.25H12.5V8.75H16.25V0H6.25V8.75H10V11.25H3.75V16.25H0V25H10V16.25H6.25V13.75H16.25V16.25H12.5V25ZM10 6.25H12.5H13.75V2.5H8.75V6.25H10ZM7.5 18.75V22.5H2.5V18.75H7.5ZM20 18.75V22.5H15V18.75H20Z",
            fill: "currentColor"
        })
    });
}
function Billing() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M12.5 0C5.6 0 0 5.6 0 12.5C0 19.4 5.6 25 12.5 25C19.4 25 25 19.4 25 12.5C25 5.6 19.4 0 12.5 0ZM12.5 22.5C6.9875 22.5 2.5 18.0125 2.5 12.5C2.5 6.9875 6.9875 2.5 12.5 2.5C18.0125 2.5 22.5 6.9875 22.5 12.5C22.5 18.0125 18.0125 22.5 12.5 22.5ZM12.8875 11.425C10.675 10.8625 9.96255 10.25 9.96255 9.3375C9.96255 8.2875 10.95 7.55 12.5875 7.55C14.3125 7.55 14.9625 8.375 15.0125 9.6H17.15C17.0875 7.925 16.0625 6.3875 14.0375 5.8875V3.75H11.125V5.8625C9.23755 6.2625 7.72505 7.4875 7.72505 9.375C7.72505 11.6125 9.58755 12.7375 12.3 13.3875C14.7375 13.9625 15.225 14.825 15.225 15.725C15.225 16.3875 14.7375 17.4625 12.6 17.4625C10.6 17.4625 9.81255 16.5625 9.70005 15.4125H7.55005C7.67505 17.5375 9.25005 18.7375 11.125 19.125V21.25H14.05V19.1625C15.95 18.8 17.45 17.7125 17.4625 15.7C17.45 12.95 15.0875 12 12.8875 11.425V11.425Z",
            fill: "currentColor"
        })
    });
}
function Multifactor() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "37",
        height: "25",
        viewBox: "0 0 37 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M10.9375 0C13.9635 0 16.388 2.44271 16.388 5.46875C16.388 8.49479 13.9635 10.9375 10.9375 10.9375C7.91146 10.9375 5.46875 8.49479 5.46875 5.46875C5.46875 2.44271 7.91146 0 10.9375 0ZM0 25V20.4427C0 16.1953 6.6901 14.0625 10.9375 14.0625C15.1849 14.0625 21.875 16.1953 21.875 20.4427V25H0ZM25.1687 13.5971L34.375 3.90625L36.3506 5.94235L25.1687 17.4479L18.75 10.742L20.7256 8.70586L25.1687 13.5971Z",
            fill: "currentColor"
        })
    });
}
function Account() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "22",
        height: "25",
        viewBox: "0 0 22 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M16.388 5.46875C16.388 2.44271 13.9635 0 10.9375 0C7.91146 0 5.46875 2.44271 5.46875 5.46875C5.46875 8.49479 7.91146 10.9375 10.9375 10.9375C13.9635 10.9375 16.388 8.49479 16.388 5.46875ZM0 20.4427V25H21.875V20.4427C21.875 16.1953 15.1849 14.0625 10.9375 14.0625C6.6901 14.0625 0 16.1953 0 20.4427Z",
            fill: "currentColor"
        })
    });
}
function Notes() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M14.7432 7.94422C14.9718 7.71558 15.2631 7.55987 15.5802 7.49677C15.8972 7.43368 16.2259 7.46604 16.5246 7.58975C16.8234 7.71347 17.0787 7.92299 17.2583 8.19181C17.4379 8.46063 17.5338 8.77669 17.5338 9.1C17.5338 9.42332 17.4379 9.73937 17.2583 10.0082C17.0787 10.277 16.8234 10.4865 16.5246 10.6103C16.2259 10.734 15.8972 10.7663 15.5802 10.7032C15.2631 10.6401 14.9718 10.4844 14.7432 10.2558C14.5903 10.1046 14.4689 9.92465 14.3861 9.72626C14.3032 9.52786 14.2605 9.315 14.2605 9.1C14.2605 8.885 14.3032 8.67214 14.3861 8.47375C14.4689 8.27535 14.5903 8.09537 14.7432 7.94422ZM15.899 12.2957C16.6384 12.2953 17.3547 12.0384 17.926 11.569C18.4973 11.0996 18.8881 10.4467 19.0319 9.7214C19.1758 8.99613 19.0637 8.24343 18.7148 7.59155C18.3658 6.93966 17.8017 6.42892 17.1184 6.14635C16.4352 5.86377 15.6751 5.82685 14.9676 6.04186C14.2602 6.25688 13.6492 6.71053 13.2387 7.32553C12.8283 7.94052 12.6437 8.67882 12.7166 9.41461C12.7894 10.1504 13.1151 10.8382 13.6382 11.3607C13.9349 11.6578 14.2873 11.8933 14.6752 12.0538C15.0631 12.2143 15.4789 12.2966 15.8987 12.296L15.899 12.2957ZM14.064 22.5175L13.6607 18.891C14.2719 18.6195 14.8678 18.315 15.4459 17.9788C16.2346 17.5194 16.9879 17.002 17.6997 16.4308L17.9453 18.6354L14.064 22.5161V22.5175ZM6.30964 15.925C6.46557 15.0919 6.67961 14.2708 6.95017 13.4676L11.5311 18.0485C10.728 18.3195 9.90684 18.5336 9.07369 18.6893L6.30964 15.925ZM1.86954 23.1291C3.03752 22.9702 4.14757 22.523 5.09956 21.8279C6.05156 21.1329 6.81556 20.2117 7.32265 19.1476L5.85188 17.6755C4.78756 18.1825 3.86622 18.9466 3.17098 19.8987C2.47574 20.8508 2.02848 21.961 1.86954 23.1291ZM2.48257 10.9352L6.3638 7.05342L8.56788 7.29924C7.99668 8.01097 7.47926 8.76422 7.01989 9.55276C6.68402 10.131 6.37952 10.727 6.1077 11.338L2.48257 10.9347V10.9352ZM15.3432 3.72994C11.9044 5.48808 9.16501 8.36235 7.57403 11.8816L13.1183 17.4255C16.6374 15.8346 19.5115 13.0951 21.2693 9.65637C21.0088 8.42781 20.2157 7.08397 19.0652 5.9343C17.9147 4.78462 16.5712 3.98966 15.3432 3.72994ZM22.1815 7.59701C22.8922 5.66877 23.3057 3.64367 23.4076 1.59114C21.355 1.69322 19.3298 2.10663 17.4014 2.8172C19.4596 3.86557 21.133 5.53883 22.1815 7.59701ZM23.7664 7.78256C24.5526 5.53503 24.9688 3.17482 24.9989 0.793953C25.0005 0.689247 24.9811 0.585277 24.9418 0.488216C24.9025 0.391155 24.8441 0.302983 24.77 0.228936C24.696 0.154888 24.6078 0.0964744 24.5108 0.0571637C24.4137 0.017853 24.3097 -0.00155332 24.205 9.70876e-05C21.8242 0.0300348 19.4639 0.446168 17.2164 1.23227C15.0838 1.97869 13.0959 3.0875 11.3403 4.50991C10.8169 4.93598 10.3168 5.38976 9.84199 5.8693L6.16326 5.45904C6.04675 5.44605 5.92881 5.45949 5.81821 5.49834C5.70761 5.5372 5.60718 5.60048 5.52439 5.68348L0.228778 10.9791C0.124771 11.0831 0.0522451 11.2144 0.0195461 11.3578C-0.0131529 11.5012 -0.00469548 11.6509 0.0439449 11.7897C0.0925853 11.9285 0.179432 12.0508 0.294489 12.1424C0.409547 12.234 0.548139 12.2913 0.694315 12.3076L5.51273 12.8437C5.15094 13.8918 4.87877 14.9687 4.69915 16.0628C4.67526 16.2063 4.6921 16.3536 4.74776 16.488C3.40391 17.2256 2.27917 18.3056 1.48778 19.6185C0.696384 20.9313 0.266517 22.4303 0.241833 23.963C0.240139 24.0667 0.259077 24.1696 0.297546 24.2659C0.336016 24.3621 0.393247 24.4498 0.465909 24.5237C0.538572 24.5976 0.625214 24.6564 0.720792 24.6965C0.81637 24.7366 0.918975 24.7573 1.02263 24.7574C1.02707 24.7577 1.03153 24.7577 1.03597 24.7574C2.56869 24.7327 4.06757 24.3027 5.38032 23.5112C6.69306 22.7196 7.77289 21.5947 8.51011 20.2507C8.60485 20.2899 8.70642 20.3101 8.80898 20.3101C8.85152 20.3102 8.89398 20.3066 8.93592 20.2995C10.0301 20.12 11.107 19.8478 12.155 19.4857L12.691 24.3047C12.7073 24.4509 12.7646 24.5896 12.8562 24.7048C12.9479 24.8199 13.0702 24.9068 13.2091 24.9555C13.3479 25.0046 13.4978 25.0133 13.6414 24.9805C13.785 24.9478 13.9163 24.8749 14.0202 24.7705L19.3152 19.474C19.3984 19.3913 19.4617 19.2909 19.5006 19.1803C19.5395 19.0697 19.5528 18.9517 19.5397 18.8352L19.1305 15.1567C19.6103 14.682 20.0642 14.1819 20.4902 13.6584C21.9122 11.9029 23.0206 9.9151 23.7664 7.78256Z",
            fill: "currentColor"
        })
    });
}
function Newfunc() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                cx: "12.5",
                cy: "12.5",
                r: "12.5",
                fill: "#296cf2"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M17.3078 6.73077V18.2692H15.3847L9.61546 9.61539V18.2692H7.69238L7.69238 6.73077H9.61546L15.3931 14.4231V6.73077H17.3078Z",
                fill: "#ffffff"
            })
        ]
    });
}
function Mobile() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19",
        height: "25",
        viewBox: "0 0 19 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M18.125 25V0H0V25H18.125ZM14.7266 3.4091H3.39844V18.1818H14.7266V3.4091ZM15.8594 2.27272H2.26562V22.7273H15.8594V2.27272ZM8.92969 19.3182C8.3774 19.3182 7.92969 19.7659 7.92969 20.3182V20.5909C7.92969 21.1432 8.3774 21.5909 8.92969 21.5909H9.19531C9.7476 21.5909 10.1953 21.1432 10.1953 20.5909V20.3182C10.1953 19.7659 9.7476 19.3182 9.19531 19.3182H8.92969Z",
            fill: "currentColor"
        })
    });
}
function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "29",
        height: "25",
        viewBox: "0 0 29 25",
        fill: "none",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M12.3639 0.631477C13.3326 -0.210492 14.7924 -0.210492 15.7611 0.631477L27.2667 10.6315C28.0601 11.3211 28.3352 12.4183 27.958 13.3885C27.5807 14.3586 26.6296 15 25.5681 15H24.2897V22.5C24.2897 23.8807 23.145 25 21.7329 25H15.3408V23.0112H15.3406V17.8976H12.784V23.0112H12.784V25H6.39211C4.98003 25 3.83531 23.8807 3.83531 22.5V15H2.55691C1.49538 15 0.544262 14.3586 0.167014 13.3885C-0.210234 12.4183 0.0648657 11.3211 0.858264 10.6315L12.3639 0.631477ZM10.2272 22.5V15.3408H11.5055L15.3406 15.3408H17.8974H17.8975V17.8976H17.8974V22.5H21.7329V12.5H25.5681L14.0625 2.5L2.55691 12.5H6.39211V22.5H10.2272Z",
            fill: "currentColor"
        })
    });
}
function Support() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "27",
        height: "27",
        viewBox: "0 0 27 27",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M13.5 16.9091C15.3828 16.9091 16.9091 15.3828 16.9091 13.5C16.9091 11.6172 15.3828 10.0909 13.5 10.0909C11.6172 10.0909 10.0909 11.6172 10.0909 13.5C10.0909 15.3828 11.6172 16.9091 13.5 16.9091Z",
                stroke: "currentColor",
                "stroke-width": "2.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M21.9091 16.9091C21.7578 17.2518 21.7127 17.632 21.7795 18.0007C21.8464 18.3693 22.0221 18.7095 22.2841 18.9773L22.3523 19.0455C22.5636 19.2565 22.7312 19.5072 22.8456 19.7831C22.96 20.059 23.0188 20.3547 23.0188 20.6534C23.0188 20.9521 22.96 21.2478 22.8456 21.5237C22.7312 21.7996 22.5636 22.0503 22.3523 22.2614C22.1412 22.4727 21.8905 22.6403 21.6146 22.7547C21.3387 22.8691 21.043 22.9279 20.7443 22.9279C20.4456 22.9279 20.1499 22.8691 19.874 22.7547C19.5981 22.6403 19.3474 22.4727 19.1364 22.2614L19.0682 22.1932C18.8004 21.9312 18.4602 21.7555 18.0916 21.6886C17.7229 21.6218 17.3427 21.6669 17 21.8182C16.6639 21.9622 16.3773 22.2014 16.1753 22.5063C15.9734 22.8112 15.8651 23.1684 15.8636 23.5341V23.7273C15.8636 24.33 15.6242 24.9081 15.198 25.3343C14.7718 25.7606 14.1937 26 13.5909 26C12.9881 26 12.4101 25.7606 11.9838 25.3343C11.5576 24.9081 11.3182 24.33 11.3182 23.7273V23.625C11.3094 23.2489 11.1876 22.8841 10.9688 22.5781C10.7499 22.2721 10.444 22.039 10.0909 21.9091C9.74816 21.7578 9.36796 21.7127 8.99933 21.7795C8.6307 21.8464 8.29054 22.0221 8.02273 22.2841L7.95455 22.3523C7.74347 22.5636 7.49281 22.7312 7.21691 22.8456C6.941 22.96 6.64526 23.0188 6.34659 23.0188C6.04792 23.0188 5.75218 22.96 5.47627 22.8456C5.20037 22.7312 4.94971 22.5636 4.73864 22.3523C4.52733 22.1412 4.35969 21.8905 4.24532 21.6146C4.13095 21.3387 4.07208 21.043 4.07208 20.7443C4.07208 20.4456 4.13095 20.1499 4.24532 19.874C4.35969 19.5981 4.52733 19.3474 4.73864 19.1364L4.80682 19.0682C5.06879 18.8004 5.24453 18.4602 5.31137 18.0916C5.37821 17.7229 5.33309 17.3427 5.18182 17C5.03777 16.6639 4.79859 16.3773 4.49371 16.1753C4.18884 15.9734 3.83158 15.8651 3.46591 15.8636H3.27273C2.66996 15.8636 2.09189 15.6242 1.66567 15.198C1.23945 14.7718 1 14.1937 1 13.5909C1 12.9881 1.23945 12.4101 1.66567 11.9838C2.09189 11.5576 2.66996 11.3182 3.27273 11.3182H3.375C3.75113 11.3094 4.11591 11.1876 4.42193 10.9688C4.72795 10.7499 4.96104 10.444 5.09091 10.0909C5.24218 9.74816 5.2873 9.36796 5.22046 8.99933C5.15362 8.6307 4.97788 8.29054 4.71591 8.02273L4.64773 7.95455C4.43642 7.74347 4.26878 7.49281 4.15441 7.21691C4.04004 6.941 3.98117 6.64526 3.98117 6.34659C3.98117 6.04792 4.04004 5.75218 4.15441 5.47627C4.26878 5.20037 4.43642 4.94971 4.64773 4.73864C4.8588 4.52733 5.10946 4.35969 5.38536 4.24532C5.66127 4.13095 5.95701 4.07208 6.25568 4.07208C6.55435 4.07208 6.8501 4.13095 7.126 4.24532C7.40191 4.35969 7.65256 4.52733 7.86364 4.73864L7.93182 4.80682C8.19964 5.06879 8.53979 5.24453 8.90842 5.31137C9.27705 5.37821 9.65725 5.33309 10 5.18182H10.0909C10.427 5.03777 10.7137 4.79859 10.9156 4.49371C11.1175 4.18884 11.2258 3.83158 11.2273 3.46591V3.27273C11.2273 2.66996 11.4667 2.09189 11.8929 1.66567C12.3192 1.23945 12.8972 1 13.5 1C14.1028 1 14.6808 1.23945 15.1071 1.66567C15.5333 2.09189 15.7727 2.66996 15.7727 3.27273V3.375C15.7742 3.74067 15.8825 4.09793 16.0844 4.4028C16.2863 4.70768 16.573 4.94686 16.9091 5.09091C17.2518 5.24218 17.632 5.2873 18.0007 5.22046C18.3693 5.15362 18.7095 4.97788 18.9773 4.71591L19.0455 4.64773C19.2565 4.43642 19.5072 4.26878 19.7831 4.15441C20.059 4.04004 20.3547 3.98117 20.6534 3.98117C20.9521 3.98117 21.2478 4.04004 21.5237 4.15441C21.7996 4.26878 22.0503 4.43642 22.2614 4.64773C22.4727 4.8588 22.6403 5.10946 22.7547 5.38536C22.8691 5.66127 22.9279 5.95701 22.9279 6.25568C22.9279 6.55435 22.8691 6.8501 22.7547 7.126C22.6403 7.40191 22.4727 7.65256 22.2614 7.86364L22.1932 7.93182C21.9312 8.19964 21.7555 8.53979 21.6886 8.90842C21.6218 9.27705 21.6669 9.65725 21.8182 10V10.0909C21.9622 10.427 22.2014 10.7137 22.5063 10.9156C22.8112 11.1175 23.1684 11.2258 23.5341 11.2273H23.7273C24.33 11.2273 24.9081 11.4667 25.3343 11.8929C25.7606 12.3192 26 12.8972 26 13.5C26 14.1028 25.7606 14.6808 25.3343 15.1071C24.9081 15.5333 24.33 15.7727 23.7273 15.7727H23.625C23.2593 15.7742 22.9021 15.8825 22.5972 16.0844C22.2923 16.2863 22.0531 16.573 21.9091 16.9091Z",
                stroke: "currentColor",
                "stroke-width": "2.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })
        ]
    });
}
function WhaTaplogo() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "31",
        height: "25",
        viewBox: "0 0 31 25",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M17.241 0H13.7949V24.9946H17.241V0Z",
                fill: "#80BA01"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M10.3435 8.6205H6.89746V24.9946H10.3435V8.6205Z",
                fill: "#FFB902"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M3.44604 17.241H0V25H3.44604V17.241Z",
                fill: "#F25022"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M30.1693 0H20.6873V24.9946H24.1387V3.44603H30.1693V0Z",
                fill: "#19A0E5"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/pages/renew/index.js
















const searchClient = (0,autocomplete_client_umd.meilisearchAutocompleteClient)({
    url: 'https://meilsearch.whatap.io',
    apiKey: 'dgoMBc2t6fVzILDGqhh63uBXACGOmJbKNnE_Xv8_Hqk'
});
function App() {
    const { i18n: { currentLocale  }  } = (0,useDocusaurusContext/* default */.A)();
    const lang = currentLocale;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: styles_module.appcontainer,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Autocomplete, {
            openOnFocus: false,
            getSources: ({ query  })=>[
                    {
                        sourceId: 'products',
                        getItems () {
                            const description = (0,autocomplete_client_umd.getMeilisearchResults)({
                                searchClient: searchClient,
                                queries: [
                                    {
                                        indexName: 'whatap',
                                        query,
                                        params: {
                                            hitsPerPage: 10,
                                            attributesToSnippet: [
                                                'description:10'
                                            ],
                                            snippetEllipsisText: '...',
                                            filters: [
                                                `lang=${lang} AND hierarchy_lvl0!=Documentation`
                                            ]
                                        }
                                    }
                                ]
                            });
                            return description;
                        },
                        templates: {
                            item ({ item , components  }) {
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProductItem, {
                                    hit: item,
                                    components: components
                                });
                            }
                        }
                    }, 
                ],
            onSubmit: (event)=>{
                // Code to run when the form submits
                const Searchparam = event.state.query;
                if (Searchparam) {
                    const searchUrl = `search?whatap%5Bquery%5D=${encodeURIComponent(Searchparam)}`;
                    window.location.href = searchUrl;
                }
            }
        })
    });
}
function Step({ children , order  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* default */.A)('guide-col d-flex', styles_module.flexcolumn),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: styles_module.innercontent,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: (0,useBaseUrl/* default */.Ay)(`/img/number-0${order}.png`),
                    className: styles_module.iconumber
                }),
                children
            ]
        })
    });
}
function RightArrow() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: styles_module.rightarrowcontainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                className: styles_module.rightarrow,
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1",
                viewBox: "0 0 100 100",
                preserveAspectRatio: "none",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M0,0 L100,50 L0,100"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                className: styles_module.downarrow,
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1",
                viewBox: "0 0 100 100",
                preserveAspectRatio: "none",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M0 0 L50 100 L100 0"
                })
            })
        ]
    });
}
function Description({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
        className: (0,clsx/* default */.A)(styles_module.textleft, styles_module.small),
        children: children
    });
}
function ThereeSteps() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: (0,clsx/* default */.A)(styles_module.gettingStart, styles_module.guide, styles_module.justifycontentcenter),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                order: 1,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.A, {
                    to: "quick-guide/#account",
                    className: styles_module.guidelink,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                            as: "h5",
                            className: styles_module.inline,
                            children: (0,Translate/* translate */.T)({
                                id: "index.pages.register",
                                message: "회원 가입"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                            children: (0,Translate/* translate */.T)({
                                id: "index.pages.register.desc",
                                message: "와탭 모니터링 서비스를 이용하려면 회원 가입을 진행하세요. 15일간 무료 체험할 수 있습니다."
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RightArrow, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                order: 2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.A, {
                    to: "quick-guide/#cproject",
                    className: styles_module.guidelink,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                            as: "h5",
                            className: styles_module.inline,
                            children: (0,Translate/* translate */.T)({
                                id: "index.pages.project",
                                message: "프로젝트 생성"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                            children: (0,Translate/* translate */.T)({
                                id: "index.pages.project.desc",
                                message: "프로젝트를 생성하고 액세스 키를 발급 받으세요."
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RightArrow, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                order: 3,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.A, {
                    to: "quick-guide/#install",
                    className: styles_module.guidelink,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                            as: "h5",
                            className: styles_module.inline,
                            children: (0,Translate/* translate */.T)({
                                id: "index.pages.agentInstall",
                                message: "에이전트 설치"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                            children: (0,Translate/* translate */.T)({
                                id: "index.pages.agentInstall.desc",
                                message: "모니터링 대상에 에이전트를 설치하세요."
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RightArrow, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                order: 4,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.A, {
                    to: "quick-guide/#dashboard",
                    className: styles_module.guidelink,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                            as: "h5",
                            className: styles_module.inline,
                            children: (0,Translate/* translate */.T)({
                                id: "index.pages.viewDashboard",
                                message: "대시보드 조회하기"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                            children: (0,Translate/* translate */.T)({
                                id: "index.pages.viewDashboard.desc",
                                message: "에이전트 설치 후 데이터가 와탭 서버로 전달되면 대시보드 메뉴에서 프로젝트의 전체 현황을 실시간으로 조회할 수 있습니다."
                            })
                        })
                    ]
                })
            })
        ]
    });
}
function FlexCard({ icons , product , type , url , children , status  }) {
    if (type === 'document') {
        const IconComponent = icons_namespaceObject[icons];
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: styles_module.flexProd,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                to: url,
                className: styles_module.alignDocument,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: styles_module.document,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: styles_module.logoDocu,
                            children: IconComponent ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
                                className: styles_module.doculogo
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: (0,useBaseUrl/* default */.Ay)(`/img/${icons}`),
                                className: styles_module.doculogo
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: styles_module.title,
                            children: children
                        })
                    ]
                })
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: styles_module.flexProd,
        children: [
            status ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: styles_module.beta,
                children: status
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                to: url,
                className: styles_module.alignCenter,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: styles_module.product,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: styles_module.logo,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: (0,useBaseUrl/* default */.Ay)(`/img/${icons}`)
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: styles_module.desc,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: styles_module.title,
                                    children: product
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: styles_module.type,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                        className: (0,clsx/* default */.A)(`${type}`, styles_module.tag),
                                        children: type
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                    children: children
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function RecommendedDoc() {
    const { i18n: { currentLocale  }  } = (0,useDocusaurusContext/* default */.A)();
    if (currentLocale == "ko") {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                    to: (0,useBaseUrl/* default */.Ay)("kubernetes/node-map"),
                    className: (0,clsx/* default */.A)(styles_module.white, styles_module.underline),
                    children: "\uB178\uB4DC \uB9F5"
                }),
                ",\xa0",
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                    to: (0,useBaseUrl/* default */.Ay)("java/linked-projects"),
                    className: (0,clsx/* default */.A)(styles_module.white, styles_module.underline),
                    children: "APM: \uC5F0\uACC4 \uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC"
                }),
                ",\xa0",
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                    to: (0,useBaseUrl/* default */.Ay)("postgresql/linked-projects"),
                    className: (0,clsx/* default */.A)(styles_module.white, styles_module.underline),
                    children: "DB: \uC5F0\uACC4 \uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC"
                }),
                ",\xa0",
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                    to: (0,useBaseUrl/* default */.Ay)("postgresql/cloudsettings"),
                    className: (0,clsx/* default */.A)(styles_module.white, styles_module.underline),
                    children: "DB: \uD074\uB77C\uC6B0\uB4DC \uC124\uC815"
                })
            ]
        });
    } else if (currentLocale == "en") {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                    to: (0,useBaseUrl/* default */.Ay)("kubernetes/node-map"),
                    className: (0,clsx/* default */.A)(styles_module.white, styles_module.underline),
                    children: "Node Map"
                }),
                ",\xa0",
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.A, {
                    to: (0,useBaseUrl/* default */.Ay)("java/linked-projects"),
                    className: (0,clsx/* default */.A)(styles_module.white, styles_module.underline),
                    children: [
                        "Metrics Chart ",
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                            className: (0,clsx/* default */.A)(styles_module.newfunc),
                            children: "New"
                        })
                    ]
                }),
                ",\xa0",
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.A, {
                    to: (0,useBaseUrl/* default */.Ay)("kubernetes/pod-init-perform-v2"),
                    className: (0,clsx/* default */.A)(styles_module.white, styles_module.underline),
                    children: [
                        "Pod Startup Analysis ",
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                            className: (0,clsx/* default */.A)(styles_module.newfunc),
                            children: "New"
                        })
                    ]
                }),
                ",\xa0",
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                    to: (0,useBaseUrl/* default */.Ay)("reference/script-manager"),
                    className: (0,clsx/* default */.A)(styles_module.white, styles_module.underline),
                    children: "Script Manager"
                })
            ]
        });
    } else if (currentLocale == "ja") {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                    to: (0,useBaseUrl/* default */.Ay)("kubernetes/node-map"),
                    className: (0,clsx/* default */.A)(styles_module.white, styles_module.underline),
                    children: "\u30CE\u30FC\u30C9\u30DE\u30C3\u30D7"
                }),
                ",\xa0",
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.A, {
                    to: (0,useBaseUrl/* default */.Ay)("java/linked-projects"),
                    className: (0,clsx/* default */.A)(styles_module.white, styles_module.underline),
                    children: [
                        "\u30E1\u30C8\u30EA\u30AF\u30B9\u30C1\u30E3\u30FC\u30C8 ",
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                            className: (0,clsx/* default */.A)(styles_module.newfunc),
                            children: "New"
                        })
                    ]
                }),
                ",\xa0",
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.A, {
                    to: (0,useBaseUrl/* default */.Ay)("kubernetes/pod-init-perform-v2"),
                    className: (0,clsx/* default */.A)(styles_module.white, styles_module.underline),
                    children: [
                        "Pod\u8D77\u52D5\u5206\u6790 ",
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                            className: (0,clsx/* default */.A)(styles_module.newfunc),
                            children: "New"
                        })
                    ]
                }),
                ",\xa0",
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                    to: (0,useBaseUrl/* default */.Ay)("reference/script-manager"),
                    className: (0,clsx/* default */.A)(styles_module.white, styles_module.underline),
                    children: "\u30B9\u30AF\u30EA\u30D7\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC"
                })
            ]
        });
    }
}
function pages() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Head/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.homehero,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: styles_module.frontheading,
                        children: (0,Translate/* translate */.T)({
                            id: "index.pages.welcome.para",
                            message: "와탭 Docs 페이지에 오신 것을 진심으로 환영합니다."
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(App, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (0,clsx/* default */.A)(styles_module.white, styles_module.textleft, styles_module.newdoc),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.welcome.recommend",
                                    message: "추천 문서: "
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(RecommendedDoc, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ThereeSteps, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: (0,clsx/* default */.A)('row nav-tiles', styles_module.justifycardcontent),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                        as: "h2",
                        className: styles_module.textcenter,
                        children: (0,Translate/* translate */.T)({
                            id: "index.pages.section.gettingStart",
                            message: "시작하기 전에"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.flexContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "WhaTaplogo",
                                type: "document",
                                url: "whatap-overview",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.gettingStart.whatapOverview",
                                            message: "와탭 모니터링 서비스"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.gettingStart.whatapOverview.desc",
                                            message: "다양한 플랫폼을 아우르는 통합 모니터링"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Support",
                                type: "document",
                                url: "support-env",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.gettingStart.support",
                                            message: "지원 환경"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.gettingStart.support.desc",
                                            message: "서비스를 이용하기 전에 지원 환경을 확인하세요."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Home",
                                type: "document",
                                url: "main-ui-intro-v2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.gettingStart.home",
                                            message: "홈 화면 안내"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.gettingStart.home.desc",
                                            message: "서비스 초기 화면 사용 방법을 안내합니다."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Mobile",
                                type: "document",
                                url: "mobile-app",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.gettingStart.mobileApp",
                                            message: "모바일 앱"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.gettingStart.mobileApp.desc",
                                            message: "모바일 앱 사용 방법을 안내합니다."
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: (0,clsx/* default */.A)('row nav-tiles', styles_module.justifycardcontent),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                        as: "h2",
                        className: styles_module.textcenter,
                        children: (0,Translate/* translate */.T)({
                            id: "index.pages.section.product",
                            message: "상품"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.flexContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-java-l.svg",
                                product: "Java",
                                type: "Application",
                                url: "java/introduction",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.java",
                                    message: "WAS, 배치 애플리케이션 등 JVM 환경에서 동작하는 모든 애플리케이션에 적용할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-nodejs-l.svg",
                                product: "Node.js",
                                type: "Application",
                                url: "nodejs/introduction",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.nodejs",
                                    message: "비동기 기반 트랜잭션 분석을 통해 단일 스레드 플로우를 10초마다 분석해 병목구간이나 에러 내역을 파악할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-php-l.svg",
                                product: "PHP",
                                type: "Application",
                                url: "php/introduction",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.php",
                                    message: "PHP 8.3, Alpine Linux까지 적용 가능하며, 트레이스 상에서 SQL, HTTP 호출, Redis 호출 정보를 확인할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-python-l.svg",
                                product: "Python",
                                type: "Application",
                                url: "python/introduction",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.python",
                                    message: "웹 프레임워크, 서버, 배치 등 주요 애플리케이션에 적용 가능하며, DB 쿼리, 외부 호출을 추적해 지연 구간을 식별할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-dotnet-l.svg",
                                product: ".NET",
                                type: "Application",
                                url: "dotnet/introduction",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.dotnet",
                                    message: ".NET 프레임워크 4.5를 대응해 .NET 기반의 IIS, Console, 서비스, 윈도우 응용 프로그램을 모니터링합니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-go-l.svg",
                                product: "Go",
                                type: "Application",
                                url: "golang/introduction",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.go",
                                    message: "Go API를 이용해 Go 애플리케이션의 웹 요청 및 응답 트랜잭션, 일반 단위 트랜잭션, SQL, HTTP 호출 등을 추적할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-server-l.svg",
                                product: "Server",
                                type: "Server",
                                url: "server/introduction",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.server",
                                    message: "물리 서버 및 클라우드, 스케일 아웃 환경에도 적용 가능하며, 대규모 자원 및 사용률이 높은 위험 자원의 모니터링, 인벤토리 관리를 지원합니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-kubernetes-l.svg",
                                product: "Kubernetes",
                                type: "Container",
                                url: "kubernetes/introduction",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.k8s",
                                    message: "쿠버네티스 클러스터, 노드, 애플리케이션, 로그를 한번에 한눈에 확인할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-postgresql-l.svg",
                                product: "PostgreSQL",
                                type: "Database",
                                url: "postgresql/monitoring-intro",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.postgresql",
                                    message: "성능지표 및 SQL, Lock, Slow SQL을 모니터링하고 추이 분석 및 비교할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-oracle-l.svg",
                                product: "Oracle",
                                type: "Database",
                                url: "oracle/monitoring-intro",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.oracle",
                                    message: "성능 지표 및 SQL, Lock, 병렬 쿼리 정보를 모니터링하고 추이 분석 및 비교할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-oracle-l.svg",
                                product: "Oracle Pro",
                                type: "Database",
                                url: "oracle-pro/monitoring-intro",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.oraclePro",
                                    message: "데이터베이스 서버의 메모리에 직접 접근하여 부하없이 성능정보를 1초에 수십번까지 모니터링할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-mysql-l.svg",
                                product: "MySQL",
                                type: "Database",
                                url: "mysql/monitoring-intro",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.mysql",
                                    message: "MySQL, MariaDB의 성능 지표 및 SQL, Lock, Slow SQL을 모니터링하고 추이 분석 및 비교할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-mssql-l.svg",
                                product: "SQL Server",
                                type: "Database",
                                url: "mssql/monitoring-intro",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.mssql",
                                    message: "성능 지표 및 SQL, Lock 정보를 모니터링하고 추이 분석 및 비교할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-tibero-l.svg",
                                product: "Tibero",
                                type: "Database",
                                url: "tibero/monitoring-intro",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.tibero",
                                    message: "성능 지표 및 SQL, Lock, 병렬 쿼리 정보를 모니터링하고 추이 분석 및 비교할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-cubrid-l.svg",
                                product: "CUBRID",
                                type: "Database",
                                url: "cubrid/monitoring-intro",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.cubrid",
                                    message: "성능 지표 및 SQL, Lock, 병렬 쿼리 정보를 모니터링하고 추이 분석 및 비교할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-altibase-l.svg",
                                product: "Altibase",
                                type: "Database",
                                url: "altibase/monitoring-intro",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.altibase",
                                    message: "성능 지표 및 SQL, Lock, 병렬 쿼리 정보를 모니터링하고 추이 분석 및 비교할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-redis-l.svg",
                                product: "Redis",
                                type: "Database",
                                url: "redis/monitoring-intro",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.redis",
                                    message: "성능 지표 모니터링과 추이 분석 및 비교할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-mongodb-l.svg",
                                product: "Mongodb",
                                type: "Database",
                                url: "mongodb/monitoring-intro",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.mongodb",
                                    message: "성능 지표 모니터링과 추이 분석 및 비교할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-url-l.svg",
                                product: "URL",
                                type: "URL",
                                url: "url/url-intro",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.url",
                                    message: "운영 중인 사이트의 최종 사용자 입장에서 HTTP 상태 코드로 접속 문제를 자동으로 확인할 수 있습니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-rum-l.svg",
                                product: "Browser",
                                type: "Browser",
                                url: "browser",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.browser",
                                    message: "브라우저 애플리케이션에 접속한 최종 사용자의 상호 작용에 관한 성능을 모니터링하고 분석합니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-aws-l.svg",
                                product: "Amazon CloudWatch",
                                type: "Cloud",
                                url: "amazon-cloudwatch/install-agent",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.awsCloudWatch",
                                    message: "Amazon CloudWatch API를 통해 주기적으로 메트릭을 검색하고 저장합니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-aws-ecs-l.svg",
                                product: "Amazon ECS",
                                type: "Cloud",
                                url: "amazon-ecs/introduction",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.awsEcs",
                                    message: "META API 및 cgroup 디렉토리를 통해 도커 컨테이너별 자원 사용량을 실시간으로 수집합니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-aws-log-l.svg",
                                product: "AWS Log",
                                type: "Cloud",
                                url: "aws-log/introduction",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.awsLog",
                                    message: "AWS Resource에서 생성되어 AWS S3, AWS CloudWatch Log Group에 저장되는 로그들을 수집, 저장합니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-azure-l.svg",
                                product: "Azure Monitor",
                                type: "Cloud",
                                url: "azure/install-agent",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.azure",
                                    message: "Azure Monitor API를 통해 주기적으로 메트릭을 검색하고 저장합니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-naver-l.svg",
                                product: "Naver Cloud Monitoring",
                                type: "Cloud",
                                url: "ncloud/install-agent",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.ncloud",
                                    message: "Naver Cloud Monitoring API를 통해 주기적으로 메트릭을 검색하고 저장합니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-oracle-l.svg",
                                product: "Oracle Cloud Monitor",
                                type: "Cloud",
                                url: "oracle-cloud/install-agent",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.oci",
                                    message: "Oracle Cloud Monitor API를 통해 주기적으로 메트릭을 검색하고 저장합니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-npm-l.svg",
                                product: "Network Performance Monitoring",
                                type: "Network",
                                url: "npm/introduction",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.network",
                                    message: "프로세스의 네트워크 통신 정보를 가시화하여 성능 분석 및 장애 파악에 사용합니다."
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexCard, {
                                icons: "index-icon/product-feature-l.svg",
                                product: "Feature Project",
                                type: "Features",
                                url: "features/introduction",
                                status: "Beta",
                                children: (0,Translate/* translate */.T)({
                                    id: "index.pages.section.product.feature",
                                    message: "기존 모니터링 제품을 사용자가 모니터링하고자 하는 소프트웨어에 맞게 재포장해 최적화된 모니터링 솔루션을 제공합니다."
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: (0,clsx/* default */.A)('row nav-tiles', styles_module.justifycardcontent),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                        as: "h2",
                        className: styles_module.textcenter,
                        children: (0,Translate/* translate */.T)({
                            id: "index.pages.section.management",
                            message: "관리"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.flexContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Account",
                                type: "document",
                                url: "account/account-manage",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.account",
                                            message: "계정 관리"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.account.desc",
                                            message: "회원 가입을 통해 계정을 생성하고 관리하세요."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Multifactor",
                                type: "document",
                                url: "account/mfa",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.multiFactor",
                                            message: "멀티팩터 인증"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.multiFactor.desc",
                                            message: "멀티팩터 인증을 통해 보안을 강화하세요."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Multifactor",
                                type: "document",
                                url: "account/sso",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.sso",
                                            message: "SSO 계정 연동"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.sso.desc",
                                            message: "하나의 아이디와 비밀번호를 이용해 간편하게 로그인하세요."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Billing",
                                type: "document",
                                url: "management/billing",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.billing",
                                            message: "결제"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.billing.desc",
                                            message: "트라이얼로 무료로 시작하고 필요한 만큼 이용하세요."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Project",
                                type: "document",
                                url: "project/project-manage",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.project",
                                            message: "프로젝트 관리"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.project.desc",
                                            message: "프로젝트는 모니터링 단위입니다. 프로젝트에 대해 알아보세요."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "IntegratedManage",
                                type: "document",
                                url: "project/integrated-manage",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.organize",
                                            message: "통합 관리"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.organize.desc",
                                            message: "조직과 그룹, 프로젝트를 체계적으로 관리할 수 있습니다."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Tools",
                                type: "document",
                                url: "management/maintenance",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.maintenance",
                                            message: "정비 계획"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.maintenance.desc",
                                            message: "등록한 작업 시간에 알림을 일시 중지할 수 있습니다."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "UserBehavior",
                                type: "document",
                                url: "management/userbehavior",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.userbehavior",
                                            message: "사용자 행위"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.management.userbehavior.desc",
                                            message: "프로젝트에서 수행 중인 사용자의 행동을 추적할 수 있습니다."
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: (0,clsx/* default */.A)('row nav-tiles', styles_module.justifycardcontent),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                        as: "h2",
                        className: styles_module.textcenter,
                        children: (0,Translate/* translate */.T)({
                            id: "index.pages.section.updates",
                            message: "최신 업데이트"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.flexContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Newfunc",
                                type: "document",
                                url: "blog",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.updates.news",
                                            message: "새로운 기능"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.updates.news.desc",
                                            message: "새롭게 출시된 기능을 확인해보세요."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Notes",
                                type: "document",
                                url: "release-notes",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.updates.release",
                                            message: "릴리스 노트"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.updates.release.desc",
                                            message: "최신 릴리스 정보를 빠르게 확인하세요."
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: (0,clsx/* default */.A)('row nav-tiles', styles_module.justifycardcontent),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                        as: "h2",
                        className: styles_module.textcenter,
                        children: (0,Translate/* translate */.T)({
                            id: "index.pages.section.reference",
                            message: "참조"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.flexContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "API",
                                type: "document",
                                url: "openapi-spec",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.reference.openApi",
                                            message: "Open API"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.reference.openApi.desc",
                                            message: "Open API를 통해 모니터링 데이터를 추출할 수 있습니다."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Proxy",
                                type: "document",
                                url: "software-proxy",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.reference.proxy",
                                            message: "소프트웨어 프록시"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.reference.proxy.desc",
                                            message: "외부망 접근을 차단하고 단일 채널로 와탭에 데이터를 전송할 수 있습니다."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Docs",
                                type: "document",
                                url: "welcome-to-whatapdocs",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.reference.docs",
                                            message: "기술 문서 안내"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.reference.docs.desc",
                                            message: "WhaTap Docs 페이지 활용법을 안내합니다."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Book",
                                type: "document",
                                url: "license/licenses",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.reference.license",
                                            message: "라이선스"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.reference.license.desc",
                                            message: "오픈 소스 라이선스와 사용하는 라이브러리를 안내합니다."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "FAQ",
                                type: "document",
                                url: "faq",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.reference.faq",
                                            message: "FAQ"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.reference.faq.desc",
                                            message: "자주 묻는 질문을 확인하고 문제를 해결하세요."
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: (0,clsx/* default */.A)('row nav-tiles', styles_module.justifycardcontent),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                        as: "h2",
                        className: styles_module.textcenter,
                        children: (0,Translate/* translate */.T)({
                            id: "index.pages.section.learn",
                            message: "학습하기"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.flexContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Bookexpand",
                                type: "document",
                                url: "learning-guides",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.learn.learning",
                                            message: "학습하기"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.learn.learning.desc",
                                            message: "빠른 이해와 효율적인 이용을 위해 학습 자료를 제공합니다."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "MXQL",
                                type: "document",
                                url: "mxql/mxql-overview",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.learn.mxql",
                                            message: "MXQL"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.learn.mxql.desc",
                                            message: "MXQL은 메트릭스를 유연한게 조회하기 위한 쿼리 언어입니다."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Metrics",
                                type: "document",
                                url: "metrics/common-metrics-intro",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.learn.metrics",
                                            message: "메트릭스"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.learn.metrics.desc",
                                            message: "메트릭스는 모니터링 대상으로부터 수집한 데이터입니다."
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexCard, {
                                icons: "Book",
                                type: "document",
                                url: "glossary",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                                        as: "h5",
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.learn.glossary",
                                            message: "용어 사전"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Description, {
                                        children: (0,Translate/* translate */.T)({
                                            id: "index.pages.section.learn.glossary.desc",
                                            message: "모니터링 서비스를 더욱 편리하게 이용할 수 있도록 용어 사전을 제공합니다."
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ })

}]);