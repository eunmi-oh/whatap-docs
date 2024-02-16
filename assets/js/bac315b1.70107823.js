"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[88051],{

/***/ 15680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xA: () => (/* binding */ MDXProvider),
/* harmony export */   yg: () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 85792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15680);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */ function _define_property(obj, key, value) {
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


const frontMatter = {
    id: 'mobile-app',
    title: 'WhaTap 모바일 앱',
    description: '와탭 모바일 앱을 통해 이용 가능한 기능에 대해 안내합니다.',
    tags: [
        'WhaTap',
        '모바일',
        '앱'
    ],
    displayed_sidebar: 'indexSidebar'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "mobile-app",
    "id": "mobile-app",
    "title": "WhaTap 모바일 앱",
    "description": "와탭 모바일 앱을 통해 이용 가능한 기능에 대해 안내합니다.",
    "source": "@site/docs/mobile-app.mdx",
    "sourceDirName": ".",
    "slug": "/mobile-app",
    "permalink": "/whatap-docs/mobile-app",
    "draft": false,
    "editUrl": "undefined/docs/mobile-app.mdx",
    "tags": [
        {
            "label": "WhaTap",
            "permalink": "/whatap-docs/tags/wha-tap"
        },
        {
            "label": "모바일",
            "permalink": "/whatap-docs/tags/모바일"
        },
        {
            "label": "앱",
            "permalink": "/whatap-docs/tags/앱"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "mobile-app",
        "title": "WhaTap 모바일 앱",
        "description": "와탭 모바일 앱을 통해 이용 가능한 기능에 대해 안내합니다.",
        "tags": [
            "WhaTap",
            "모바일",
            "앱"
        ],
        "displayed_sidebar": "indexSidebar"
    },
    "sidebar": "indexSidebar",
    "previous": {
        "title": "빠른 시작하기",
        "permalink": "/whatap-docs/quick-guide"
    },
    "next": {
        "title": "와탭 결제 계정 안내",
        "permalink": "/whatap-docs/about-billing"
    }
};
const assets = {};
const toc = [
    {
        value: '앱 설치하기',
        id: 'dada3d0ee7e361bad7d19f1dd96e05f4',
        level: 2
    },
    {
        value: '로그인하기',
        id: 'ac3ea01111337c06c3969b2d535337f2',
        level: 2
    },
    {
        value: '초기 화면 안내',
        id: '4900cf48bac5e30814f09512c18875fa',
        level: 2
    },
    {
        value: '주요 메뉴 알아보기',
        id: 'fb046a2eb3f99973d4348afa2074e2d4',
        level: 3
    },
    {
        value: '공지사항 확인하기',
        id: 'f315b6390986f7ec1bb01489e982630e',
        level: 3
    },
    {
        value: '상품 종류별 확인하기',
        id: '8e74337624c2b665a7463e968b626f4b',
        level: 3
    },
    {
        value: '프로젝트 현황 확인하기',
        id: 'e97177b5162ac343349846ac03e6212f',
        level: 3
    },
    {
        value: '프로젝트 검색하기',
        id: 'b8f85764d904d2401f20ccf54ad7cc31',
        level: 3
    },
    {
        value: '조직별 확인하기',
        id: '392a97edc522f048880f26ab55a29633',
        level: 3
    },
    {
        value: '프로젝트',
        id: 'fb2eece6f8746f39ede1f98c58d2730c',
        level: 2
    },
    {
        value: '프로젝트 목록 확인하기',
        id: '982e80dcfa91d38e4dfd7d2507a8b6be',
        level: 3
    },
    {
        value: '대시보드 살펴보기',
        id: 'd1b4ddc71ea6512bd94aa87d10e3a78c',
        level: 3
    },
    {
        value: '프로젝트별 알림 확인하기',
        id: '00eb10b0be6fe8104785a99aaf653277',
        level: 3
    },
    {
        value: '프로젝트 설정 확인하기',
        id: '9e3bd2f2a70fbeb5297ff52d8455b2f0',
        level: 3
    },
    {
        value: '통합 알림',
        id: '6df98f20941be17b6e955a6c0e1153d3',
        level: 2
    },
    {
        value: '계정 설정',
        id: '3518ccd39bba16e461d64bf75f209f92',
        level: 2
    },
    {
        value: '앱 기본 언어 변경하기',
        id: '4b442da576063963cf8afe1cb3b2d5fe',
        level: 3
    },
    {
        value: '기본 조직 설정하기',
        id: '5519c33fac468559f5137171d8ee9677',
        level: 3
    },
    {
        value: '알림 수신 설정하기',
        id: '3b0ae19db04b5962b295cd2511398344',
        level: 3
    },
    {
        value: 'OTP 인증하기',
        id: 'mobileotp',
        level: 3
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", props);
    };
const Appname = makeShortcode("Appname");
const ImgLang = makeShortcode("ImgLang");
const Cmdname = makeShortcode("Cmdname");
const Link = makeShortcode("Link");
const layoutProps = {
    toc
};
const MDXLayout = "wrapper";
function MDXContent(_param) {
    var { components } = _param, props = _object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `와탭 모바일 앱을 통해 이용 가능한 기능에 대해 안내합니다. 앱을 통해 사용자의 프로젝트 현황을 파악하고, 설정된 이벤트의 알림을 실시간으로 받을 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `모바일 앱을 통해 제공하는 기능은 다음과 같습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `대시보드`), `: 프로젝트 목록을 확인하고, 조직별, 카테고리별로 프로젝트 목록을 확인할 수 있으며, 각 프로젝트별 주요 지표들을 모니터링할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `프로젝트 검색`), `: 프로젝트 이름 또는 코드를 이용해 원하는 프로젝트를 검색할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `공지사항`), `: 와탭 모니터링 서비스의 주요 공지사항을 확인할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `통합 알림 기능`), `: 프로젝트별로 설정한 주요 알림을 받을 수 있으며, 지난 알림 목록을 확인할 수도 있습니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `모바일 앱은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://service.whatap.io"
    }, `service.whatap.io`), ` 서비스를 지원합니다. 설치형 서비스는 지원하지 않습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `지원하는 상품 종류는 다음과 같습니다. 향후 업데이트를 통해 지원 범위를 확대하겠습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "li"
    }, `Application`), `: Java, PHP, Python, Node.js, .NET, Go`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "li"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "li"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "li"
    }, `Kubernetes`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "li"
    }, `URL`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "li"
    }, `Browser`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `모바일 앱에서는 프로젝트 그룹 기능을 지원하지 않습니다.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "dada3d0ee7e361bad7d19f1dd96e05f4"
    }, `앱 설치하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `와탭 모바일 앱은 안드로이드와 iOS 환경을 지원합니다. 다음 링크로 이동하거나 QR 코드를 스캔해 앱을 설치할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("th", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "th",
        "href": "https://apps.apple.com/us/app/whatap-mobile/id6450067434"
    }, `iOS`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("th", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "th",
        "href": "https://play.google.com/store/apps/details?id=io.whatap.lion"
    }, `Android`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "QR",
        src: (__webpack_require__(87203)/* ["default"] */ .A),
        width: "600",
        height: "600"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), `iOS 12 버전 이상`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "QR",
        src: (__webpack_require__(17581)/* ["default"] */ .A),
        width: "600",
        height: "600"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("br", null), `Android 5.0 버전 이상`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "ac3ea01111337c06c3969b2d535337f2"
    }, `로그인하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `앱을 처음 사용하는 사용자는 로그인해야 합니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://service.whatap.io"
    }, `와탭 모니터링 서비스`), `에서 가입한 이메일과 비밀번호를 입력한 다음 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "get_started",
        className: "uitext",
        mdxType: "Appname"
    }), ` 버튼을 탭하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "mobile/mobile-app-login.png",
        desc: "로그인",
        className: "mobile",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `사용자 계정이 없다면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "account/account-manage"
    }, `다음 문서`), `의 안내에 따라 회원 가입을 진행하세요. 모바일 앱에서는 회원 가입할 수 없습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "4900cf48bac5e30814f09512c18875fa"
    }, `초기 화면 안내`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `로그인을 완료했거나 앱을 처음 실행했다면 사용자가 소속된 프로젝트 목록을 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "mobile/mobile-app-home.png",
        desc: "초기 화면",
        className: "mobile",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "fb046a2eb3f99973d4348afa2074e2d4"
    }, `주요 메뉴 알아보기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `모바일 앱은 다음의 주요 메뉴로 구성되어 있습니다. 화면 아래에 메뉴를 탭하면 각 메뉴의 주요 기능을 이용할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "mobile/mobile-app-main-tab.png",
        desc: "주요 메뉴",
        className: "mobile",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "projects",
        className: "uitext",
        mdxType: "Appname"
    }), ": 사용자가 소속되어 있거나 관리 중인 프로젝트 목록을 확인할 수 있습니다. 개별 프로젝트의 상세 정보를 확인하고, 주요 지표를 조회할 수 있습니다. 또한 검색을 통해 원하는 프로젝트를 필터링할 수 있습니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "alerts",
        className: "uitext",
        mdxType: "Appname"
    }), ": 개별 프로젝트에서 설정된 이벤트의 알림을 최신 순으로 확인할 수 있습니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "account",
        className: "uitext",
        mdxType: "Appname"
    }), ": 사용자의 계정 정보를 확인할 수 있으며, 언어 및 알림 수신 변경, OTP 인증을 설정할 수 있습니다.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "f315b6390986f7ec1bb01489e982630e"
    }, `공지사항 확인하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `와탭 모니터링 서비스의 공지사항을 확인하려면 화면 오른쪽 위, 모서리에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "알림 아이콘",
        src: (__webpack_require__(23451)/* ["default"] */ .A),
        width: "45",
        height: "45"
    }), ` 버튼을 탭하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `공지사항 이전 화면으로 돌아가려면 화면 오른쪽 위, 모서리에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "닫기 아이콘",
        src: (__webpack_require__(71046)/* ["default"] */ .A),
        width: "24",
        height: "24"
    }), ` 버튼을 탭하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "8e74337624c2b665a7463e968b626f4b"
    }, `상품 종류별 확인하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `프로젝트 목록을 상품 종류별로 확인할 수 있습니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `화면 왼쪽 위, 모서리에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "카테고리 아이콘",
        src: (__webpack_require__(67735)/* ["default"] */ .A),
        width: "45",
        height: "45"
    }), ` 버튼을 탭하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `상품 목록이 나타나면 원하는 항목을 선택하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "mobile/mobile-app-category-list.png",
        desc: "카테고리 목록",
        className: "mobile-l",
        mdxType: "ImgLang"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `선택한 상품 항목에 해당하는 프로젝트만 목록에 표시됩니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "e97177b5162ac343349846ac03e6212f"
    }, `프로젝트 현황 확인하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `전체 프로젝트를 상품별로 분류한 목록을 확인할 수 있습니다. 초기 화면 위에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "아이콘",
        src: (__webpack_require__(1975)/* ["default"] */ .A),
        width: "45",
        height: "45"
    }), ` 버튼을 탭하세요. 각 상품에 해당하는 프로젝트 목록을 확인할 수 있고, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "learn_more",
        className: "uitext",
        mdxType: "Appname"
    }), ` 버튼을 탭하면 상품 소개 페이지로 이동합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "mobile/mobile-app-project-all-status.png",
        desc: "프로젝트 현황",
        className: "mobile",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "b8f85764d904d2401f20ccf54ad7cc31"
    }, `프로젝트 검색하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `프로젝트 목록이 많아 프로젝트를 찾기 어렵다면 검색을 통해서 원하는 프로젝트를 찾을 수 있습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "search",
        className: "uitext",
        mdxType: "Appname"
    }), ` 입력란에 찾으려는 프로젝트 이름 또는 프로젝트 코드를 입력한 다음 키보드의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `완료`), `를 탭하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "392a97edc522f048880f26ab55a29633"
    }, `조직별 확인하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `조직별로 설정된 프로젝트 목록을 확인하려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "org",
        className: "uitext",
        mdxType: "Appname"
    }), `에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "none_org",
        className: "uitext",
        mdxType: "Appname"
    }), `을 탭한 다음 원하는 조직을 탭하세요. 선택한 조직에 해당하는 프로젝트 목록만 표시됩니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "mobile/mobile-app-org.png",
        desc: "조직 선택",
        className: "mobile",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "fb2eece6f8746f39ede1f98c58d2730c"
    }, `프로젝트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `화면 아래에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "projects",
        className: "uitext",
        mdxType: "Appname"
    }), ` 메뉴를 탭하세요. 다음의 주요 기능을 제공합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `사용자가 소속되어 있거나 관리 중인 프로젝트 목록을 확인할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `개별 프로젝트의 상세 정보를 확인하고 주요 지표를 조회할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `조직 단위로 프로젝트 목록을 분류하고 검색을 통해 원하는 프로젝트를 필터링할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `상품 분류별로 프로젝트를 확인하고 필터링할 수 있습니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `프로젝트 목록에서 확인할 수 있는 상품 종류는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Application`), ` 및 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Server`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Database`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Kubernetes`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `URL`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Browser`), `입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "982e80dcfa91d38e4dfd7d2507a8b6be"
    }, `프로젝트 목록 확인하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `하나의 프로젝트는 다음과 같이 카드 뷰 형태로 표시되며, 프로젝트의 주요 지표, 기본 정보 등으로 구성되어 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "mobile/mobile-app-project-card.png",
        desc: "프로젝트 카드",
        className: "mobile",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `프로젝트의 가장 위에는 프로젝트의 이름을 표시합니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "detail",
        className: "uitext",
        mdxType: "Appname"
    }), ` 버튼을 탭하면 더 많은 지표를 확인할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `프로젝트의 가운데 섹션에는 대표되는 지표를 표시합니다. 상품의 종류에 따라 표시되는 지표는 다를 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Application`), `: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "active_transaction",
        mdxType: "Appname"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Server`), `: CPU 사용률`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Database`), `: 액티브 세션`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Kubernetes`), `: 쿠버네티스 구성 요소에 대한 요약 정보`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `URL`), `: 전체 URL 개수와 정상, 에러 상태의 URL 개수 표시`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Browser`), `: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "page_load",
        mdxType: "Cmdname"
    }), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "timeline",
        mdxType: "Cmdname"
    }))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `프로젝트의 가장 아래에는 상품 종류, 상품 이름, 리전, 프로젝트 코드, 구독 형태 등의 정보를 표시합니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "d1b4ddc71ea6512bd94aa87d10e3a78c"
    }, `대시보드 살펴보기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `프로젝트 목록에서 각 프로젝트의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "detail",
        className: "uitext",
        mdxType: "Appname"
    }), ` 버튼을 탭하면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "dashboard",
        className: "uitext",
        mdxType: "Appname"
    }), ` 화면으로 이동할 수 있습니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "mobile/mobile-app-project-dashboard.png",
        desc: "대시보드",
        className: "mobile",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `화면 오른쪽 위, 모서리에서 프로젝트 코드 정보를 확인할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `프로젝트와 관련한 상세 정보 및 에이전트, 서버 정보는 가장 위에 배치된 섹션에서 확인할 수 있습니다. `)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "standard_time",
        className: "uitext",
        mdxType: "Appname"
    }), "에 표시된 시간 기준으로 10분, 30분, 1시간 동안의 지표를 조회할 수 있습니다. ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "latest",
        className: "uitext",
        mdxType: "Appname"
    }), " 항목에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "10 Min"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "30 Min"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "1 Hour"), " 버튼을 탭하세요."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `그 외 각 상품별 대표되는 주요 지표들이 배치되어 있습니다. 다음 목록에서 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("details", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("summary", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "Appication")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "active_status",
        className: "uitext",
        mdxType: "Appname"
    }), ": 액티브 트랜잭션의 진행 상태와 각 진행 상태의 액티브 트랜잭션 수를 확인할 수 있는 차트입니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "active_transaction",
        className: "uitext",
        mdxType: "Appname"
    }), ": 에이전트별 진행 중인 액티브 트랜잭션을 확인할 수 있는 차트입니다. 차트에 표시된 색상은 액티브 트랜잭션의 응답 시간입니다. ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "normal"
    }, "파랑색(Normal)"), "은 3초 이내, ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "slow"
    }, "주황색(Slow)"), "은 3~8초, ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "vslow"
    }, "빨간색(Very slow)"), "은 8초 이상을 의미합니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "Hitmap"), ": 종료된 트랜잭션의 응답 시간을 분포도로 표현한 차트입니다. ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "TX trace"), " 버튼을 탭하면 트랜잭션 목록을 확인할 수 있는 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "transaction_list",
        className: "uitext",
        mdxType: "Appname"
    }), " 화면으로 이동합니다. 에러가 발생한 트랜잭션 목록을 확인하려면 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "All"), " 버튼을 탭하세요."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "Apdex"), ": ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Link, {
        to: "https://www.apdex.org/",
        mdxType: "Link"
    }, "Application Performance Index(Apdex)"), "는 애플리케이션 성능 지표입니다. 웹 애플리케이션의 고객 만족도를 측정합니다. 사용자 만족도에 대한 지표로 활용할 수 있으며, 0 ~ 1 사이의 값을 갖습니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "TPS"), ": 초당 처리한 트랜잭션 건수입니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "average_res_time",
        className: "uitext",
        mdxType: "Appname"
    }), ": 애플리케이션 서버가 사용자에게 요청 결과를 반환하는 데 걸리는 평균 시간입니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "system_cpu",
        className: "uitext",
        mdxType: "Appname"
    }), ": 애플리케이션 서버의 CPU 사용량입니다."))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("details", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("summary", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "Server")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "CPU Resource Map"), ": 전체 서버들의 CPU 사용량을 나타내는 분포도입니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "CPU Top 5"), ": CPU의 최대 점유율 기준으로 상위 5개의 프로세스 목록입니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "Memory Top 5"), ": 메모리의 최대 점유율 기준으로 상위 5개의 프로세스 목록입니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "Disk Top 5"), ": : 가장 많은 디스크 I/O 사용량 기준으로 상위 5개의 프로세스 목록입니다."))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("details", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("summary", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "Database")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "thread_running_top10",
        className: "uitext",
        mdxType: "Appname"
    }), ": 인스턴스 별 쿼리를 실행 중인 상위 10개의 세션 수입니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "thread_connected_top10",
        className: "uitext",
        mdxType: "Appname"
    }), ": 인스턴스 별 현재 접속되어 있는 상위 10개의 세션 수입니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "Active Sessions"), ": 조회 시간 동안 쿼리를 실행 중인 세션 수를 에이전트별로 표현한 시계열 차트입니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "thread_connected_chart",
        className: "uitext",
        mdxType: "Appname"
    }), ": 조회 시간 동안 현재 접속된 세션 수를 에이전트별로 표현한 시계열 차트입니다.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        parentName: "li",
        "type": "info"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Database`), ` 상품의 경우 화면 아래에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "list",
        className: "uitext",
        mdxType: "Appname"
    }), ` 메뉴를 탭하면 인스턴스별 지표를 확인할 수 있습니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("details", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("summary", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "Kubernetes")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "TTL06263",
        className: "uitext",
        mdxType: "Cmdname"
    }), ": 상태별로 진행 중인 컨테이너 개수를 표시합니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "TTL06265",
        className: "uitext",
        mdxType: "Cmdname"
    }), ": 상태별로 진행 중인 Pod의 개수를 표시합니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "pod_count_chart",
        className: "uitext",
        mdxType: "Appname"
    }), ": 조회 시간 동안 상태별로 진행 중인 Pod의 개수를 표현한 시계열 차트입니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "Node CPU"), ": 조회 시간 동안 개별 노드의 CPU 사용률을 표현한 시계열 차트입니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "Node Memory"), ": 조회 시간 동안 개별 노드의 메모리 사용률을 표현한 시계열 차트입니다.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        parentName: "li",
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Kubernetes`), ` 상품의 경우 화면 아래에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "list",
        className: "uitext",
        mdxType: "Appname"
    }), ` 메뉴를 탭하면 컨테이너 목록을 확인할 수 있습니다. 개별 컨테이너에 대한 상세 정보를 조회할 수 있습니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("details", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("summary", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "URL")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `사용자가 등록한 URL 목록과 각 URL의 HTTP 상태 코드를 확인할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("details", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("summary", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "Browser")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "page_load_timeline",
        className: "uitext",
        mdxType: "Appname"
    }), ": 페이지 로드 시간과 로드 단계별 과정을 평균 시간으로 표현한 차트입니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "Pageload Hitmap"), ": 조회 시간 동안 페이지 로드의 응답 시간 분포를 표현한 차트입니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "AJAX Hitmap"), ": 조회 시간 동안 AJAX의 응답 시간 분포를 표현한 차트입니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "TTL06188",
        className: "uitext",
        mdxType: "Cmdname"
    }), ": 조회 시간 동안 발생한 에러 건수와 페이지별로 발생한 에러 건수 중 상위 N개를 표시합니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "TTL06189",
        className: "uitext",
        mdxType: "Cmdname"
    }), ": 조회 시간 동안 발생한 에러 메시지 건수와 각 에러 메시지별 오류 수의 합계 중 상위 N개를 표시합니다."))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "00eb10b0be6fe8104785a99aaf653277"
    }, `프로젝트별 알림 확인하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `개별 프로젝트에서 설정한 이벤트로 전송된 알림 목록을 확인할 수 있습니다. 화면 아래에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "alert",
        className: "uitext",
        mdxType: "Appname"
    }), ` 메뉴를 탭하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "mobile/mobile-app-project-alert.png",
        desc: "알림",
        className: "mobile",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "9e3bd2f2a70fbeb5297ff52d8455b2f0"
    }, `프로젝트 설정 확인하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `개별 프로젝트의 상세 정보와 알림 설정, 사용자 정보 등을 확인할 수 있습니다. 화면 아래에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "setting",
        className: "uitext",
        mdxType: "Appname"
    }), ` 메뉴를 탭하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "mobile/mobile-app-project-setting.png",
        desc: "설정",
        className: "mobile",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "project_info",
        className: "uitext",
        mdxType: "Appname"
    }), ": 프로젝트의 상세 정보를 확인할 수 있습니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "alert_settins",
        className: "uitext",
        mdxType: "Appname"
    }), ": 현재 프로젝트의 알림을 설정할 수 있습니다.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "receive_settings",
        className: "uitext",
        mdxType: "Appname"
    }), ": 현재 프로젝트에서 설정된 알림 수신 여부를 설정할 수 있습니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "range_of_reception",
        className: "uitext",
        mdxType: "Appname"
    }), ": ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "total",
        className: "uitext",
        mdxType: "Appname"
    }), " 알림을 수신할지 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "warning",
        className: "uitext",
        mdxType: "Appname"
    }), " 수준의 알림만 수신할지 선택할 수 있습니다."))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "user_info",
        className: "uitext",
        mdxType: "Appname"
    }), ": 현재 사용자의 정보를 확인할 수 있습니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "member_info",
        className: "uitext",
        mdxType: "Appname"
    }), ": 프로젝트에 소속된 전체 사용자 정보를 확인할 수 있습니다.")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "6df98f20941be17b6e955a6c0e1153d3"
    }, `통합 알림`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `모든 프로젝트의 알림을 확인하려면 모바일 앱 초기 화면에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "alerts",
        className: "uitext",
        mdxType: "Appname"
    }), ` 메뉴를 탭하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "mobile/mobile-app-alerts.png",
        desc: "알림",
        className: "mobile",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `모든 프로젝트의 알림을 최신 순으로 확인할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `각 알림의 프로젝트 이름을 탭하면 해당 프로젝트로 이동할 수 있습니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `최대 7일 동안의 알림 내역을 조회할 수 있습니다. 향후 업데이트를 통해 조회 범위를 확대할 예정입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "3518ccd39bba16e461d64bf75f209f92"
    }, `계정 설정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `모바일 앱 초기 화면에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "account",
        className: "uitext",
        mdxType: "Appname"
    }), ` 메뉴를 탭하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "mobile/mobile-app-account.png",
        desc: "계정",
        className: "mobile",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "account",
        className: "uitext",
        mdxType: "Appname"
    }), " 메뉴에서 제공하는 기능은 다음과 같습니다.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `사용자 계정 정보 확인, 언어 및 조직 설정`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `알림 수신 설정`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `OTP 인증 기능`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "4b442da576063963cf8afe1cb3b2d5fe"
    }, `앱 기본 언어 변경하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `모바일 앱의 기본 언어를 변경하려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "lang",
        className: "uitext",
        mdxType: "Appname"
    }), ` 항목에서 선호하는 언어를 탭하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "5519c33fac468559f5137171d8ee9677"
    }, `기본 조직 설정하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "projects",
        className: "uitext",
        mdxType: "Appname"
    }), " 메뉴에서 표시되는 프로젝트 목록을 조직에 해당하는 프로젝트 목록으로 기본 설정할 수 있습니다. ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "org",
        className: "uitext",
        mdxType: "Appname"
    }), " 항목에서 선호하는 조직을 선택하세요.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "3b0ae19db04b5962b295cd2511398344"
    }, `알림 수신 설정하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `모바일 앱을 통해 알림을 수신하거나 수신 설정을 해제할 수 있습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "setup_alarm",
        className: "uitext",
        mdxType: "Appname"
    }), ` 섹션에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "porject",
        className: "uitext",
        mdxType: "Appname"
    }), ` 항목을 탭하여 원하는 설정을 적용하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "mobileotp"
    }, `OTP 인증하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `와탭 모바일 앱을 통해 OTP 인증을 설정하고 웹 서비스에서 로그인 시 입력할 수 있는 OTP 인증키를 제공합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://service.whatap.io"
    }, `와탭 모니터링 서비스`), `로 로그인하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `화면 오른쪽 위에 프로필 아이콘을 선택하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `드롭다운 메뉴가 나타나면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "MNU07360",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 메뉴를 선택하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "my_profile",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴로 이동하면 페이지를 아래로 스크롤하여 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "two_factor_auth",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 섹션으로 이동하세요."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "create_otp_key",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 버튼을 선택하면 QR 코드가 표시됩니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `와탭 모바일 앱에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Appname, {
        sid: "account",
        className: "uitext",
        mdxType: "Appname"
    }), ` 메뉴로 이동하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "OTP"), " 섹션에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "uitext"
    }, "QR"), " 버튼을 탭하세요."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `카메라가 실행되면 웹 페이지에 표시된 QR 코드를 스캔하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `와탭 모바일 앱에 OTP 키가 표시됩니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `OTP 키를 웹 페이지에 입력하고 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "validate_otp_token",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 버튼을 선택하세요.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `OTP 인증 과정을 완료합니다. 이후 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://service.whatap.io"
    }, `와탭 모니터링 서비스`), `로 로그인한 다음 OTP 인증키를 요구하면 모바일 앱에서 제공하는 OTP 키를 입력하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `멀티팩터 인증에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "account/mfa#otp"
    }, `다음 문서`), `를 참조하세요.`)));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 71046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtY2xvc2U8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTMyLjAwMDAwMCwgLTc4Mi4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9InN1Z2dlc3RlZC1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCA3MzcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtY2xvc2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg5Mi4wMDAwMDAsIDQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMsMiBMMTMsMTEgTDIyLDExIEwyMiwxMyBMMTMsMTMgTDEzLDIyIEwxMSwyMiBMMTEsMTMgTDIsMTMgTDIsMTEgTDExLDExIEwxMSwyIEwxMywyIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgMTIuMDAwMDAwKSByb3RhdGUoLTMxNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTIuMDAwMDAwLCAtMTIuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 67735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOWSURBVHgB7Vi5SmVBED1vcV9QNHBBREFcEBEjxUwwMjAy1MDMxG+Y/zAUDDQwNTYSEQQjUdxww33FXd/MqZlzae88mYejFx70gebe193VdepUVV801tjYmEKWIY4shCcdFTzpqOBJRwVPOip40lEhY9Jvb282YrEY4vG4PYlUKmWDCM/9a/6zSGa60XWcDiLDfdorMNh0a+G5TIP5FGkprhFWj5kIE3YJcihzRCKR+CvQLyUtEpoTadepyIRt3ff/KZGMSbtOwylNp6DmqTrHR4p/K2mppyYMN1o6NcNz4dJiWXw7aRJOJpP2fHl5wevrqxFRDes93GxucLThMycnJ7Bz6zsTZHzlyTkdUSE+3XSTjAhxncHxyXUFF77yuP4ZtQOlafz09BQQopK5ubnm4P7+HlVVVRgeHsbAwACKioqwurqKiYkJLC8vB3a06evrw8jICFpaWnB9fY3p6WnMzs7i+PjY1GVQ1dXVGB0dRX9/PwoKCrCwsIDJyUksLi7aOQySyMvLs/083232RHl5+Q+RdpVQ8/CAX3uMyNDQEOrq6lBSUoLa2lpzvrGxgaOjIzu4u7sbY2NjaG9vR2Fhoe1rbm7G+fm5BXl7e4uKigqMj49jcHDQ3umnqakJpaWl2NrawunpadC8Ih/+SMXd9KvGuFlGz8/PqKysRFdXl5HUOoPs7e1FW1tboGBPT4+RJFmWB0Hbzs5Os+UeZqyhocGyxd/qEQbc2tr6m9SfEmTmOMKNHpSHGsH9TLubpbpqmcEogIeHh+BWoOJ0pIxxXiXHQUVZdgT3ibQa86MbycU7peWAg+88kHV1cXGB/f19I0SSXKPj7e1tnJycWF3m5+dbCZydnQU1SFuedXBwgKurKwt0fX0de3t772qWZ66srFh5iIf8u1/XoP9U0yKubqYRoyfYiHd3dygrK0NNTY0RXltbw9TUFObn540QibLxqCRLgCVyc3ODubk5a8bDw0MjwKxwsGzYKyRGsjMzM9aQPEdZU4bETYjpP0z6mrndS3JUh2kk2HwcnKfCu7u7wVXHQx8fH1FcXIyOjg4LjhlaWlrC5eWlkaMdn7Rl89XX1xvxzc1N7OzsWDDc49axK2JQOi5pLarWqDQP4lPElQEdSqL8TWdUicpQedpzL28RvnNNV6h6hmdzXmXAOQmlstF9L2Hekc4m+D+3ooInHRU86ajgSUcFTzoqeNJRwZOOCp50VPgJLPFzrBTaTEoAAAAASUVORK5CYII=");

/***/ }),

/***/ 23451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU7SURBVHgB7Zk5S21LEIXrOM8jKgYmoiCKYCYGaioG/gMTA1Njs4eBobm/QQURBAMFM8VAQUFEAwXFQHCe53e+vnfttz3vtsHuhyK8Bc3ps4fq1dVV1dW1U42Nje/2w5BlPxD/k/4q5Phu5Obm2tvbm728vFh2drbl5OS4Pi0rK8tSqZSFgPeRT3t//+VWyKXPNZCXlxc9QysqKnL3vZq+vLz89UBa0OPjoz0/P7tGv7Cw0ELx+vrq5KEQyKAkjQdZEURJTBClPT09OfJeTdfW1trFxYV7gQFubm7cdQaiD/kQQPb+/t4eHh5cH7kFBQWWn59vd3d3rs+4TEIry5j0vaQReH19bd3d3dbb2+smUVNT42Z7cnJipaWlFoLb21un0fLycvefsZB9cHBgq6urtrOz47TMOFyHNISdqfqEnp2dWV9fn42Ojlp7e7sbhBcxDZaIl0OBHNkxmmYS9Le3t924Gxsb0T3G1Zhem0azAwMD1tra6v4XFxf/4wjpgeIOkqQByGACALk0FNPc3Gz9/f2OJCahYADoezWNPdfV1UW2J+cT6dDo4TT2Ww4NR2QCOBwab2lpcZNCUfwqyrjo5RMISQQALRsmIkgzIU3agxDE+U9fJHFSVljhVs96Na0XgLSBRyNYXq3IIq3p2cnJSVteXnYrNDw87JYaIhBFo1qlP63WB4dLk8VBNRl+XfizQMQJSGNMZHFx0a0Qzoz3Q0DPygGTIvGb2sW0CroW3xBcTE2TpcX9QI6YFIk1LdIiLig6EF9ZTkUaIOLylaRIrGmftjQB7JlwhakolGkl5AdJkZh0pkl8EPp765UzyZ5lOth4CBKvUzxaxCEbR5siSOQQcaJHqHkEkwaZmgaQE0HZthC6MSU2D7So3FfOBjmuEePR7unpqdO44qwmF2rTQesUdy6IYwpot7Oz0wYHBx3Rtra26L4IK4/+ctJxk0DrkFWm1tXVZT09PRE5pZbc084agsSkZZdoUHkBpIBOIfzqejzahO6IQY4oexUBnSs3Nzft+Pg4SjObmprcfeI2z4QQdmNbQsR3Oh2XAL/r6+s2NDRkIyMjtrS0FJmSNM/GE4IgmxbxzHBGZsYqcPphEspFlH5yDvwW0iKrkoImgP2WlJRYR0eHI19fX+80jDPK5kPjtJe0cgb1lezoFKN7bB7xkEYf06AJcsp4xMmM3wqB8TFpJF6UMxhHBwSvTaMViLDEEsgRTEur5U7akKkNSgcLnQeV1jIWpyWlARrXq2lu8nBVVZUTxMsVFRXRROiHQAlV3FSkEMalhKBjVjyjdKmBT6gOmRKiOgd2ykRCoUyPMXQUUxTa3d21+fl5x0FFG5mryxp9QjU7qj3SgOppKysrdnh4aCFQFamsrCz6z0T29/dtbW3Ntra2ojxcfgPxTzWt7Te+GfC7sLBgY2NjTngIVCOMH8HwI8bjOhEIovTjTvrpaVzJuyqnCJuennaE0XJ1dbWFktbpXjUPmYyuy69UhdJJ3hs9lI1hGjw8MzNj4+PjzgkbGhosFBBUGnt1dRUVNBXWCK2QVaiED1w+reWpHADm5uYcYfJjbJqqaegGoSXX1p55HSjvVojUxD6N0xCcnZ21iYkJOzo6+uDJ34nsysrKv/50A9Is09TUlO3t7TnCSkEzd7evRsr3SQ5bIxxhw3iycgv65+fn/1rWr4TXPDB6VS1Vv8C2VLn/TnhJU3yELGbCBGh4PF4dWgIIhZc027XiMxp2xew02bQPRN9fvgufRg9SUH3MAcRT7Pq/+LoVgtRP/Db+N30tEk//cAFFAAAAAElFTkSuQmCC");

/***/ }),

/***/ 1975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQzSURBVHgB7Zm5SixBFIZrxnHfEERQBFExERHRNzAwEgx8BCMxUhOfwcxcBRNzAzNDl8REAyMVH0Dc9+1evwN/UdPTcu9MQ4PQPwzdXcup/6xVxeT+fMP9MuTdL0RGOi1kpNNCRjotZKTTgpH++vpybIyfn5++gza1f3x8WJvG0C68vr5ae5Kf5L+/v9uTNZ6enjyPKHLhNs5gJhYKBfsBBOpdfRpbVVXlcrmcS4qXlxdXXV1tCki+wJr0hbAR0hgSkIEIGoYWyOfz9gtJyhvRhcpFXV1d0bc8zFpvb28lpM3SDELbhoYG3/H8/GyDIRRam3dZBKEoiTJJIOUxmowVejsKW01W1GQJYNLV1ZU9UQrwjjIQRjGFSJIfMjDE4+OjtzxtWJmcicKrUltb6y3JhJqaGrPi9va229zcdE1NTW5mZsaNj49b+87OjtvY2DDBSeNa+QHZyclJNzU15VpaWoxDHArhJD3lbgjt7u66g4MDC53p6Wkv6Pr62u3t7ZlXojFZLlhH1h4dHXX19fXWzre8XkJasclkLK6CwmQmoQR9QDHHGBIUJdRXKZAJh/v7e18tVArj4tqXPFUIJiu+6To5OXEXFxcmACv09PTYxPPzc3d0dGRKJiUdxvfg4KDr7e315TVq5RLSaCitIck3yQYxtaOQrMB70nIHVFrxdjS3WCtanQqhtiEUIiIcJce3FEgKyQ4rmLwel+Q2WqSUiEDP/f19CwXie2RkxPX19dn4s7Mzd3x8bKHxU5b/L7QWXh0aGnLDw8OebMiphLSSTZmrOrm1teXW19eteiwvL7uBgQHrOzw8dEtLS1ZH5dIkYH1Iz8/PG3GMqF06iiKfR12NMre3t0YKcqoaqiAolbTcaV2de7CwwkWlsCQ0pSUTwz0eIbh9YmLCdXZ22mQsoGTkfW5uzsbqdFYplHD8xsbGimL6nyVPpJkkK9LOt+q3LG0afwuMO4WVC3kOI+FRyOqdZzQZ/SkPAkzGwpBAU5U9gZhDCH3hETZpBUGW8iIsb+FGF8JbWlmKdpBXQrK5KEn6+/vtTADu7u7c6empa2xsLLo8VAKMo5ju7u52XV1dPuTivOjPHqocaPfw8GCdJOHa2ppbXV21A9PKyoodZnSQWlxcNCWTJiOGuLm5MTkLCwtudnbWyEI8biu3L5UVxae+sSJtHR0ddv0Jj5Ha5knSuONjOcCLGI21eFeV+ikRrSV66NZ5ghBob2+3fp60a+vmnTYWwgtJQJ5gGIi2trZ6LhgDYykkhZI7YlghIIbbEESo8FSyAg7tbW1t/hJaKZCH4peXl665udnChBMfXo8LPSMdbpU6GBHXCEABNNZtRTqG98ikOyIhwY7LOtpMwnti9MDk74i666n8xSVAuGWrX4KTQEb76dAfRS77JyAlZKTTQkY6LWSk00JGOi38StJ/AcymbRjJCeRDAAAAAElFTkSuQmCC");

/***/ }),

/***/ 17581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYAQMAAACEqAqfAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADEUlEQVR4nO3bQW7jMAyFYQFZZDlH8FFyNPtoPoqPkGUXBTiRKFGk3RYoMIth8L/NjGzpc1eEKDulEEIIeWWVkO11aZGn3hvDU+rdW7z0iYWFhZXc2oulLn602fe4+F5nK615WXPZHQsLC+sNrKWtsNk21Cy+kO5zOGryEwsLC+v9rEe43fJHPtTSu6JDLCwsrDe2Tou1rrYt55j8mxqNhYWFlcayaOU8mtWG0meXOTzGk+YyLCwsLCxvhUzr5ouynWO6uz5YWFhYua1vc5t0mftVacPfBgsLC+s/t2Zd/ZybSndSuZfayofOvlzLLBYWFlZ+y42V7g22Zhn0PNZ03/os4+/AwsLCSmyVXhtD7CVO6XtMyxdbzllXsbCwsPJaI+6wsaaVyrXTLfF54XU3FhYWVn7LvuYZ+fq7x/rfUVetOT9OfxEWFhYWVpnduc4WsWZdrGTLHIbe3U45sbCwsBJba5tidTW8ptFLR3GFdG+L7mM3u5dyeT+EhYWFlc/SQup+PSPdOr3EuT5YL8XeHQsLCyunpbdlFNKtXQzfgJ/6bY0rs9fvhrCwsLCyWj/9puX09js058el38bCwsLKaO19Rd9UPnqDLX62td86+T5Zu4uFhYWV2NL0yjn7bfetzzGnzQfbMPbuWFhYWFhzth1c1ti3Pg99yhfD+s9ezr07FhYWVk6r1kaZe846+zlo6XdDniVsbmPvjoWFhZXZ6hm3rVnX9CeNPaaruudzACwsLKzM1ukXL5djTdtULvKcwxrfb2NhYWHltnoLvb0uLWMXOY8ie5ndrN+22JOwsLCwEluX1NnhNY3RY7FtKldfZrGwsLASW6uEhMqpdKirxW9Iz+eWWFhYWFjzaLLE2e5bHyvZ8yEf/u+IvTsWFhZWVssWnw4uax5+scb91Gbvw2/OAbCwsLDyWuKb9XG3ZSujle9rtZXHwsLCektLRoOtcaeeo/3uL8MDjYWFhZXaslzqathyKqxDGSeTP/buWFhYWGmskC1WzlVE/FfeVnX7k2ri7wyxsLCwMlqEEEL+Yf4Ckl7rw+cbI+wAAAAASUVORK5CYII=");

/***/ }),

/***/ 87203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYAQMAAACEqAqfAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC60lEQVR4nO3dQXLjIBCFYVSz8DJH8FF0NOloOoqPkKUXLjHTTQMN0aQqKZyRa/63wgI+ZQWIIDsEQgghJ841dtlKVXvhLX16SPnSd3rHwsLCwnqK9Qg1k3T9FeOaut7k2iwlubDLJ638Y7lOYcHCwsLCeg1rzjPAZFOF1dbKNfer1jV1umNhYWFh/aCVx/t+8b+X2QELCwsL619ZOt7H0rydAOI35g4sLCwsrJNYJXnuiMnSlBtpvr6fg4WFhYX1fatLu77XycCG9Ek2zrPVBgsLCwvrGdZxFlc7S+M11Duvn3TEwsLCwjqpdY01Oj2UclNpZ1d0MllkMpF5RJ8GLhXHwsLCwhpt5SW8ZU5d6402KS09LuXdujT7OVhYWFhYA63cXKLjvW6cv8Um5VB43YO5hT5YWFhYWCe3NHZhTl1DesfTH2wJZX0f3cGWw2cFLCwsLKwRluWSmufxfonHuZUOtgcT3ZMBFhYWFtZg6yqft1Qb3evxoYz3mkP873swWFhYWFjns7T5pW21Bn+jS9/1Xiq7uQMLCwsLa6yVm5dL+s7Pe3sjj5fy3lZiYWFhYZ3fstT9nHfnav96VlHz+X4OFhYWFtYYq/7rsy7hg/tuLL3R4jbky9PA7l4AxcLCwsJ6mmWjdn3nJ5b38Muye5IxXicA24PZXU8sLCwsrBewbDbo1vTWYpbymtt3VrcHg4WFhYU13NJRO7q03ymuXetv85Ts7WFzLCwsLKzB1kHq+UJdgm9S9hvna7C/ogYLCwsL6+yWv6LZXHPNnJvnDZpV1vTtxPJRx8LCwsIaYT1cv8mdY2kql8ayyrwH0zwrYGFhYWGNtebUyH4/ra7J2xzvwdyPz8FgYWFhYb2QdQs5ZQ8mRyrrSRcsLCwsrJ+zNNbLV2rWtKavWa0lFhYWFtYTrJI63tvXfge37J7sn5vRnXTZxMXCwsLCegWrS507ygWN/RDEQ9x76vnxnR8sLCwsrJEWIYSQ/yC/Ad628qx4qX+OAAAAAElFTkSuQmCC");

/***/ })

}]);