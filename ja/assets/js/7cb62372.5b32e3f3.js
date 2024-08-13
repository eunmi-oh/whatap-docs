"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[98191],{

/***/ 68281:
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
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/db/dbx-agent.json
const dbx_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_8_1","ver":"v1.8.1","date":"2024-06-27","Lists":[{"ver":"v1.8.1","hash":"v181","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> XOSエージェントv1.1.8fアップデート</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_8_2","ver":"v1.8.2","date":"2024-06-28","Lists":[{"ver":"v1.8.2","hash":"v182","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> communication fail errorメッセージを追加</p>","category":"MySQL"},{"ver":"v1.8.2","hash":"v182","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <em>setup.bat</em>ファイルのバックアップファイル(.bak)を追加</p>","category":"MySQL"},{"ver":"v1.8.2","hash":"v182","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <em>setup.sh</em>ファイルをdemonで実行時、default yes → noに修正</p>","category":"MySQL"},{"ver":"v1.8.2","hash":"v182","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>データベース名のバグを修正</p>","category":"MySQL"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_7_7","ver":"v1.7.7","date":"2024-06-18","Lists":[{"ver":"v1.7.7","hash":"v177","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> PostgreSQL 9.6バージョンのreplication delayバグ修正</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_7_6","ver":"v1.7.6","date":"2024-05-20","Lists":[{"ver":"v1.7.6","hash":"v176","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Autoscale EventPackにStatus On修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_9_0","ver":"v1.9.0","date":"2024-07-04","Lists":[{"ver":"v1.9.0","hash":"v190","product":"DBX","type":"New","desc":"<p><code class=\\"New\\">New</code> Oracle V2のリリースに伴う機能を追加</p>","category":"Oracle","details":"<ul>\\n<li>\\n<p><code>ora_hidden_param=true</code>オプションを設定すると、hidden parameter機能を追加</p>\\n</li>\\n<li>\\n<p><code>ora_invalid_object=true</code>オプションを設定すると、invalid objectを収集</p>\\n</li>\\n<li>\\n<p><code>ora_unusable_index=true</code>オプションを設定すると、unsable indexを収集</p>\\n</li>\\n<li>\\n<p>planの変化チェックと保存機能を追加</p>\\n</li>\\n<li>\\n<p>bindパラメータの保存機能を追加</p>\\n</li>\\n<li>\\n<p>segment sizeを収集</p>\\n</li>\\n<li>\\n<p><code>sorts (disk)</code>、<code>user rollbacks</code>メトリクスを追加</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_8_0","ver":"v1.8.0","date":"2024-06-26","Lists":[{"ver":"v1.8.0","hash":"v180","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>迅速なエージェント設定のための<em>setup.sh</em>追加</p>","category":"MySQL"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_7_5","ver":"v1.7.5","date":"2024-05-17","Lists":[{"ver":"v1.7.5","hash":"v175","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> DB Connection Failed発生すると、<code>fatal count</code>を転送するように修正</p>","category":"MongoDB, Redis"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_7_8","ver":"v1.7.8","date":"2024-06-21","Lists":[{"ver":"v1.7.8","hash":"v178","product":"DBX","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> DB Connection通知元服機能を削除</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_7_1","ver":"v1.7.1","date":"2024-03-28","Lists":[{"ver":"v1.7.1","hash":"v171","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Whatapで実行するクエリに収集クエリであることがわかるコメントを追加</p>","category":"Postgresql, Oracle"},{"ver":"v1.7.1","hash":"v171","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <strong>DocumentDB</strong>の<strong>process</strong>および<strong>replication delay</strong>処理バグ修正</p>","category":"MongoDB"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_7_3","ver":"v1.7.3","date":"2024-04-23","Lists":[{"ver":"v1.7.3","hash":"v173","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 通知の復元オフ(OFF) 機能を改善</p>","category":"共通"},{"ver":"v1.7.3","hash":"v173","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> slave brokenチェックバグを修正</p>","category":"MySQL"},{"ver":"v1.7.3","hash":"v173","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>delta</code>1秒値オプションの追加: エージェントで5秒単位で収集したデータを秒単位で換算して報告するオプション</p>","category":"Oracle"},{"ver":"v1.7.3","hash":"v173","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>sqlstat</code>指標を追加</p>","category":"Oracle"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_6_33","ver":"v1.6.33","date":"2024-03-13","Lists":[{"ver":"v1.6.33","hash":"v1633","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>エージェントのインストール ファイルに<em>setup.sh</em>を追加</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_6_32","ver":"v1.6.32","date":"2024-03-11","Lists":[{"ver":"v1.6.32","hash":"v1632","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>データベースパラメータのリアルタイム照会ロジックの修正、<code>unit</code>、<code>start_time</code>, <code>uptime</code>データ追加</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_7_4","ver":"v1.7.4","date":"2024-05-16","Lists":[{"ver":"v1.7.4","hash":"v174","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <span class=\\"uitext\\">管理</span> &gt; <span class=\\"uitext\\">エージェントリスト</span>メニューに<strong>Agent IP</strong>(エージェントIPアドレス) を追加</p>","category":"共通"},{"ver":"v1.7.4","hash":"v174","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <strong>DB connection failed</strong>文章を修正</p>","category":"共通"},{"ver":"v1.7.4","hash":"v174","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>OOM発生時HeapDumpFileを生成しないように修正</p>","category":"共通"},{"ver":"v1.7.4","hash":"v174","product":"DBX","type":"Feature","desc":"<li><code class=\\"Feature\\">Feature</code> <strong>connection fail</strong> / <strong>success</strong>通知を追加</li>","category":"MongoDB, Redis"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_7_2","ver":"v1.7.2","date":"2024-03-29","Lists":[{"ver":"v1.7.2","hash":"v172","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Agent infoの<code>db_loc</code>情報エラーを修正(AWS RDS)</p>","category":"MySQL"},{"ver":"v1.7.2","hash":"v172","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> MongoDbSize <code>type</code>エラーを修正</p>","category":"MongoDB"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_7_0","ver":"v1.7.0","date":"2024-03-25","Lists":[{"ver":"v1.7.0","hash":"v170","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>cpu</code>指標で<code>xos2</code>指標を廃止し<code>xos</code>指標を百分率値に変更</p>","category":"共通"},{"ver":"v1.7.0","hash":"v170","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> MongoDB <code class=\\"my\\">V2</code>追加</p>","category":"MongoDB","details":"<ul>\\n<li>\\n<p>カテゴリ名の統一</p>\\n<ul>\\n<li><code>agentinfo</code> → <code>db_agentinfo</code></li>\\n<li><code>session</code> → <code>db_mongo_active_session</code></li>\\n<li><code>stat</code> → <code>db_mongodb_counter</code></li>\\n<li><code>dbsize</code> → <code>db_dbsize</code></li>\\n</ul>\\n</li>\\n<li>\\n<p>基本指標の簡素化</p>\\n<p><code>v2=true</code>に設定すると<code>serverStatus</code>値のうち<code>opcounters</code>、<code>globalLock</code>、<code>extra_info</code>、<code>connections</code>、<code>network</code>、<code>mem</code>、<code>opLatencies</code>、<code>asserts</code>指標のみを収集・保存</p>\\n<div class=\\"theme-admonition theme-admonition-note admonition_xJq3 alert alert--secondary\\"><div class=\\"admonitionHeading_Gvgb\\"><span class=\\"admonitionIcon_Rf37\\"><svg viewbox=\\"0 0 14 16\\"><path fill-rule=\\"evenodd\\" d=\\"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z\\"></path></svg></span>ノート</div><div class=\\"admonitionContent_BuS1\\"><p><code>v2=false</code>が既定値であり、v1と同様に<code>serverStatus</code>結果をすべて収集します。</p></div></div>\\n</li>\\n<li>\\n<p>指標追加オプション：<code>category=network,repl,indexStats…</code>などserverStatusのoutputを追加で指定すると追加収集が可能</p>\\n</li>\\n<li>\\n<p>データベースサイズの収集情報の追加:<code>index size</code>、<code>storage size</code>、<code>total size</code>収集</p>\\n</li>\\n<li>\\n<p>Collection sizeの新規収集：<code>storage size</code>、<code>index size</code>、<code>total size</code>を収集</p>\\n</li>\\n<li>\\n<p>これまでアンダーバーで表記していたxos指標(<code>xos_cpu</code>、<code>xos_mem</code>など)を製品の統一性のために、括弧に変更した値も一緒に送信</p>\\n</li>\\n</ul>"},{"ver":"v1.7.0","hash":"v170","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Redis <code class=\\"my\\">V2</code>追加</p>","category":"Redis","details":"<ul>\\n<li>\\n<p>カテゴリ名の統一</p>\\n<ul>\\n<li><code>agentinfo</code> → <code>db_agentinfo</code></li>\\n<li><code>session</code> → <code>db_redis_active_session</code></li>\\n<li><code>stat</code> → <code>db_redis_couter</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><code>db_redis_clusterinfo</code>、<code>db_redis_clusternodes</code>、<code>db_redis_master</code>、<code>db_redis_slave</code>カテゴリを追加</p>\\n</li>\\n<li>\\n<p>これまでアンダーバーで表記していたxos指標(<code>xos_cpu</code>、<code>xos_mem</code>など)を製品の統一性のために、括弧に変更した値も一緒に送信</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_6_35","ver":"v1.6.35","date":"2024-03-15","Lists":[{"ver":"v1.6.35","hash":"v1635","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>db_agentinfo</code>修正：<code>dbInstNo</code>、<code>db_inst no</code>指標を<code>db_inst_id</code>指標に統一</p>","category":"Postgresql/Oracle/MySQL"},{"ver":"v1.6.35","hash":"v1635","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>エージェントのインストール ファイルに<em>setup.bat</em>を追加</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_6_31","ver":"v1.6.31","date":"2024-03-04","Lists":[{"ver":"v1.6.31","hash":"v1631","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>エージェントが終了し、再起動する時の既定値として解消通知を受けられるように処理</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_6_25","ver":"v1.6.25","date":"2024-02-26","Lists":[{"ver":"v1.6.25","hash":"v1625","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>active_session</code>指標の収集時<code>state</code>条件に対するオプション処理を追加</p>","category":"PostgreSQL","details":"<ul>\\n<li><code>state</code>値が<code>idle</code>でない場合：<code>pg_opt=0</code>(default)</li>\\n<li><code>state</code>値が<code>active</code>の場合：<code>pg_opt=1</code></li>\\n<li><code>state</code>値が<code>active</code>または<code>idle in transaction</code>の場合：<code>pg_opt=2</code></li>\\n</ul>"},{"ver":"v1.6.25","hash":"v1625","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> object、table収集オプションの既定値を<code>true</code>に修正</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_6_30","ver":"v1.6.30","date":"2024-02-29","Lists":[{"ver":"v1.6.30","hash":"v1630","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>イベント解消の通知機能を追加</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_6_24","ver":"v1.6.24","date":"2024-02-21","Lists":[{"ver":"v1.6.24","hash":"v1624","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> PostgreSQL 14バージョン以降で<code>active_session</code>指標の収集時<code>query_id</code>を追加</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_6_23","ver":"v1.6.23","date":"2024-02-20","Lists":[{"ver":"v1.6.23","hash":"v1623","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>テーブルレイアウトのリアルタイム照会機能を追加</p>","category":"MySQL"},{"ver":"v1.6.23","hash":"v1623","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Redis cluster、replica情報を追加</p>","category":"Redis"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_6_22","ver":"v1.6.22","date":"2024-02-15","Lists":[{"ver":"v1.6.22","hash":"v1622","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>エージェントの設定値の形式がbooleanであれば<code>true</code> / <code>false</code>値で統一</p>","category":"共通"},{"ver":"v1.6.22","hash":"v1622","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>redo entries</code>指標を追加</p>","category":"Oracle"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_6_26","ver":"v1.6.26","date":"2024-02-28","Lists":[{"ver":"v1.6.26","hash":"v1626","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code class=\\"my\\">V2</code>アップグレードに関し、waitevent収集のクエリバグ及びmulti構成バグを修正</p>","category":"Oracle"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_6_21","ver":"v1.6.21","date":"2024-02-07","Lists":[{"ver":"v1.6.21","hash":"v1621","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> PG SQLの統計データが収集されないバグを修正</p>","category":"PostgreSQL"},{"ver":"v1.6.21","hash":"v1621","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>rep_gap_max</code>指標を追加</p>","category":"Altibase"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_6_20","ver":"v1.6.20","date":"2024-02-02","Lists":[{"ver":"v1.6.20","hash":"v1620","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>データベース通知の復元のためのstatefulを追加</p>","category":"共通"},{"ver":"v1.6.20","hash":"v1620","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Redis autoscale機能を追加</p>","category":"Redis"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_6_19","ver":"v1.6.19","date":"2024-02-01","Lists":[{"ver":"v1.6.19","hash":"v1619","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> DBXエージェントのログファイル名を<em>dbx.log</em>から<em>whatap.log</em>に変更</p>","details":"<ul>\\n<li>変更前：25MB基準で過去のログは<em>dbx.log.n</em>ファイルに分離されました。</li>\\n<li>変更後：現在の日付の起動ログは<em>whatap.log</em>ファイルに記録され、日付が変更されると<em>whatap-yyyymmdd.log</em>ファイルに分離されます。 ファイルサイズの制限なしで60日まで保存します。</li>\\n</ul>"},{"ver":"v1.6.19","hash":"v1619","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>エージェント起動時AgentInfo bootParam init順序によるNullPointerExeceptionバグを修正</p>"},{"ver":"v1.6.19","hash":"v1619","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>disk_usage_interval=60</code>オプションを基本収集するように変更</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_6_18","ver":"v1.6.18","date":"2024-01-25","Lists":[{"ver":"v1.6.18","hash":"v1618","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>データベースの通知も復旧メッセージを受け取るよう<code>uuid</code>、<code>statefulset</code>を追加</p>","category":"共通"},{"ver":"v1.6.18","hash":"v1618","product":"DBX","type":"Changed","desc":"<li><code class=\\"Changed\\">Changed</code> <code>show slave status</code>コマンドによるconnection fullが発生しないように、timeout3回以上発生した場合、リトライしないように変更</li>","category":"MySQL"}]},{"url":"https://docs.whatap.io/ja/release-notes/db/dbx-1_6_17","ver":"v1.6.17","date":"2024-01-16","Lists":[{"ver":"v1.6.17","hash":"v1617","product":"DBX","type":"Fixed","desc":"<li><code class=\\"Fixed\\">Fixed</code> MariaDB 10.2バージョン以下のslave情報収集に関するバグを修正</li>","category":"MySQL"}]}]');
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/db/dbx-agent.mdx


const frontMatter = {
	id: 'dbx-agent',
	title: 'DBX Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/db/dbx-agent",
  "title": "DBX Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/db/dbx-agent.mdx",
  "sourceDirName": "release-notes/db",
  "slug": "/release-notes/db/dbx-agent",
  "permalink": "/ja/release-notes/db/dbx-agent",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/db/dbx-agent.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "dbx-agent",
    "title": "DBX Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Kubernetes Agent旧バージョン",
    "permalink": "/ja/release-notes/k8s/k8s-previous"
  },
  "next": {
    "title": "DBX v1.9.0",
    "permalink": "/ja/release-notes/db/dbx-1_9_0"
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
        filePath: dbx_agent_namespaceObject,
        sort: "date",
        category: "agent",
        platform: "db"
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