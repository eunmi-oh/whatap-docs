"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[60065],{

/***/ 79672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/mobile/mobile-app.json
const mobile_app_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/ja/release-notes/mobile/mobile-app-v1_0_6","ver":"v1.0.6","date":"2024-01-26","Lists":[{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>ユーザーに<b>通知設定</b>権限がない場合、プロジェクト内の<span class=\\"uitext\\">設定</span>メニューで<span class=\\"uitext\\"></span>オプションが見えないように修正</p>","category":"共通"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>プロジェクト一覧で「データなし」と表示される現象を修正</p>","category":"共通"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> OTP認証機能を使用する際に、無効なキーを入力するとメッセージを表示するように修正</p>","category":"共通"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>多言語翻訳を修正</p>","category":"共通"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>プロジェクトの読み込み時間を改善</p>","category":"共通"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>画面間の移動時間を改善</p>","category":"共通"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>チャート凡例で多言語タイトルの表示問題を修正</p>","category":"共通"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <span class=\\"uitext\\">ダッシュボード</span>に表示されるチャートの順序を変更</p>","category":"Application"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <span class=\\"uitext\\">アクティブトランザクション</span>チャートのエージェント表示順序を名前順に変更</p>","category":"Application"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <span class=\\"uitext\\">AJAX Hitmap</span>チャートのデータが表示されないエラーを修正</p>","category":"Browser"}]},{"url":"https://docs.whatap.io/ja/release-notes/mobile/mobile-app-v1_0_9","ver":"v1.0.9","date":"2024-06-05","Lists":[{"ver":"v1.0.9","hash":"v109","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>コンテナイベントの発生時間がエラーとして表示される問題を修正</p>"},{"ver":"v1.0.9","hash":"v109","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>通知が発生した場合、正常に登録されたモバイルが削除され、通知を受信できない問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/mobile/mobile-app-v1_0_10","ver":"v1.0.10","date":"2024-07-04","Lists":[{"ver":"v1.0.10","hash":"v1010","product":"WhaTap Mobile App","type":"New","desc":"<p><code class=\\"New\\">New</code> <span class=\\"uitext\\">Home</span>画面を追加</p>"},{"ver":"v1.0.10","hash":"v1010","product":"WhaTap Mobile App","type":"New","desc":"<p><code class=\\"New\\">New</code>プロジェクトのお気に入り機能を追加</p>"},{"ver":"v1.0.10","hash":"v1010","product":"WhaTap Mobile App","type":"New","desc":"<p><code class=\\"New\\">New</code>ログイン状態画面を追加</p>"},{"ver":"v1.0.10","hash":"v1010","product":"WhaTap Mobile App","type":"New","desc":"<p><code class=\\"New\\">New</code>モバイル通知テスト機能を追加</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/mobile/mobile-app-v1_0_8","ver":"v1.0.8","date":"2024-03-25","Lists":[{"ver":"v1.0.8","hash":"v108","product":"WhaTap Mobile App","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>これまでリストのみ表示していた通知メッセージの受信詳細を確認できるように修正</p>"},{"ver":"v1.0.8","hash":"v108","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> iOSアプリの終了状態でのプッシュ受信のエラーを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/mobile/mobile-app-v1_0_7","ver":"v1.0.7","date":"2024-01-31","Lists":[{"ver":"v1.0.7","hash":"v107","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>アクティブなエージェント数が一致しない問題を修正</p>","category":"Application"},{"ver":"v1.0.7","hash":"v107","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>Windowsエージェントの場合、CPUチャートのグラフが生成されない問題を修正</p>","category":"Server"},{"ver":"v1.0.7","hash":"v107","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>Networkチャートのグラフが生成されない問題を修正</p>","category":"Server"},{"ver":"v1.0.7","hash":"v107","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>MySQL製品で<span class=\\"uitext\\">Thread Connected チャート</span>のグラフが生成されない問題を修正</p>","category":"Database"}]}]');
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/mobile/index.mdx


const frontMatter = {
	id: 'index',
	title: 'WhaTap Mobile Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/mobile/index",
  "title": "WhaTap Mobile Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/mobile/index.mdx",
  "sourceDirName": "release-notes/mobile",
  "slug": "/release-notes/mobile/",
  "permalink": "/ja/release-notes/mobile/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/mobile/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "WhaTap Mobile Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Service旧バージョン",
    "permalink": "/ja/release-notes/service/service-previous"
  },
  "next": {
    "title": "v1.0.10",
    "permalink": "/ja/release-notes/mobile/mobile-app-v1_0_10"
  }
};
const assets = {

};




const toc = [{
  "value": "Release history for 2024",
  "id": "release-history-for-2024",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head, ImportJson} = _components;
  if (!Head) _missingMdxReference("Head", true);
  if (!ImportJson) _missingMdxReference("ImportJson", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("meta", {
        name: "robots",
        content: "noindex, nofollow"
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "release-history-for-2024",
        children: "Release history for 2024"
      }), (0,jsx_runtime.jsx)(ImportJson, {
        filePath: mobile_app_namespaceObject,
        sort: "date",
        category: "agent"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);