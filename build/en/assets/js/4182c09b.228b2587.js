"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[73996],{

/***/ 58840:
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'tx-profile',
	title: 'Transaction search',
	description: 'You can search for the desired transaction based on the individual transaction\'s performance properties.',
	tags: [
		'Kubernetes',
		'Kubernetes Monitoring',
		'Application',
		'Transactions'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/tx-profile",
  "title": "Transaction search",
  "description": "You can search for the desired transaction based on the individual transaction's performance properties.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/kubernetes/tx-profile.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/tx-profile",
  "permalink": "/en/kubernetes/tx-profile",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/tx-profile.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Kubernetes",
      "permalink": "/en/tags/kubernetes"
    },
    {
      "inline": true,
      "label": "Kubernetes Monitoring",
      "permalink": "/en/tags/kubernetes-monitoring"
    },
    {
      "inline": true,
      "label": "Application",
      "permalink": "/en/tags/application"
    },
    {
      "inline": true,
      "label": "Transactions",
      "permalink": "/en/tags/transactions"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "tx-profile",
    "title": "Transaction search",
    "description": "You can search for the desired transaction based on the individual transaction's performance properties.",
    "tags": [
      "Kubernetes",
      "Kubernetes Monitoring",
      "Application",
      "Transactions"
    ]
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "Daily Application Status",
    "permalink": "/en/kubernetes/application-daily-stat"
  },
  "next": {
    "title": "Alert",
    "permalink": "/en/kubernetes/set-notice"
  }
};
const assets = {

};



const toc = [{
  "value": "Select Column",
  "id": "select-column",
  "level": 2
}, {
  "value": "Apply Filter",
  "id": "apply-filter",
  "level": 2
}, {
  "value": "Elapsed Time",
  "id": "elapsed-time",
  "level": 3
}, {
  "value": "Error Message",
  "id": "error-message",
  "level": 3
}, {
  "value": "HTTP Call Count",
  "id": "http-call-count",
  "level": 3
}, {
  "value": "SQL Count",
  "id": "sql-count",
  "level": 3
}, {
  "value": "SQL Fetch Count",
  "id": "sql-fetch-count",
  "level": 3
}, {
  "value": "Transactions",
  "id": "transactions",
  "level": 3
}, {
  "value": "Client IP",
  "id": "client-ip",
  "level": 3
}, {
  "value": "Domain",
  "id": "domain",
  "level": 3
}, {
  "value": "UserAgent",
  "id": "useragent",
  "level": 3
}, {
  "value": "Referer",
  "id": "referer",
  "level": 3
}, {
  "value": "Transaction ID",
  "id": "transaction-id",
  "level": 3
}, {
  "value": "Multi Transaction ID",
  "id": "multi-transaction-id",
  "level": 3
}, {
  "value": "WClientID",
  "id": "wclientid",
  "level": 3
}, {
  "value": "Login ID",
  "id": "login-id",
  "level": 3
}, {
  "value": "Downloading the searched results",
  "id": "downloading-the-searched-results",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Application"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Analysis"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Transaction Search"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Transaction Search"
        })
      }), ", you can view the statistics on the performance and execution status for each transaction for a specific period of time. You can view all transactions and their errors. The provided information allows you to see which transactions are busy and resource-consuming. The transactions are filtered in various ways depending on the transaction properties, making it useful for finding transactions with specific conditions."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "k8s-analysis-tx-profile.png",
      desc: "Transaction Search"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Set the search time in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Leader line 1",
        src: (__webpack_require__(31511)/* ["default"] */ .A) + "",
        width: "35",
        height: "35"
      }), " area, and then select search targets from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Container"
        })
      }), " options. If you select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Search icon",
        src: (__webpack_require__(29413)/* ["default"] */ .A) + "",
        width: "35",
        height: "29"
      }), ", the search results appear in the table. If you select desired items from the result list in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Leader line 2",
        src: (__webpack_require__(47228)/* ["default"] */ .A) + "",
        width: "35",
        height: "35"
      }), " area, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Transaction Info"
        })
      }), " window appears. For the detailed information on the transaction trace analysis using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Transaction Info"
        })
      }), " window, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "../java/trs-profile#transaction-info",
        children: "the following"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["To search for transactions in error, click ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "show_only_error",
              className: "uitext"
            }), " and then select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Search icon",
              src: (__webpack_require__(29413)/* ["default"] */ .A) + "",
              width: "35",
              height: "29"
            }), "."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "It is recommended to set the search time as short as possible because a response delay may occur depending on the search conditions."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "select-column",
        children: "Select Column"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["If you click ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Column selection icon",
          src: (__webpack_require__(13890)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Select column"
          })
        }), " in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Leader line 2",
          src: (__webpack_require__(47228)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " area, the column selection window appears as follows. Select desired columns."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-tx-profile-clm.png",
        desc: "Select column"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "apply-filter",
        children: "Apply Filter"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["You can perform detailed search using filters in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(27440)/* ["default"] */ .A) + "",
          children: "Leader line 1"
        }), " area. It supports data exploration using various search conditions. Multiple filters can also be applied. Specify desired filters and then select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Search icon",
          src: (__webpack_require__(29413)/* ["default"] */ .A) + "",
          width: "35",
          height: "29"
        }), "."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "Some filters may not be supported depending on the product."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["When applying multiple filters, to search by the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06107",
                className: "uitext"
              }), " filter, only the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06111",
                className: "uitext"
              }), " filter can be added."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "elapsed-time",
        children: "Elapsed Time"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-analysis-tx-profile-el.png",
        desc: "Elapsed time"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Search is performed based on the transaction response time. Search by entering two values above and below the reference."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "error-message",
        children: "Error Message"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-analysis-tx-profile-err.png",
        desc: "Error message"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Search is performed based on the transaction error message. In the default state, error-related columns may not be seen. Select a column to check."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Transactions in error are displayed in red."
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "http-call-count",
        children: "HTTP Call Count"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-analysis-tx-profile-httpc.png",
        desc: "HTTP call count"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["It searches the transactions in which the number of calls for external HTTP services is greater than or equal to the input value. For example images, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "5"
          })
        }), " or more cases are viewed."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "sql-count",
        children: "SQL Count"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-analysis-tx-profile-sqlcount.png",
        desc: "SQL count"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "It searches the transactions in which the number of SQL executions per transaction is greater than or equal to the set input value. It is used to search for transactions that exceptionally call an excessive number of SQLs."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "sql-fetch-count",
        children: "SQL Fetch Count"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-analysis-tx-profile-sqlfetchcount.png",
        desc: "SQL fetch count"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "After execution of SQL, the transactions whose count is the input value or more based on the number of DB patches. It is used to search transactions that perform excessive data patching."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "transactions",
        children: "Transactions"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-analysis-tx-profile-tx.png",
        desc: "URL"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Search is performed based on the transaction. The entered search string is compared for a search based on whether it is included or not (partial match)."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "client-ip",
        children: "Client IP"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-analysis-tx-profile-cl-ip.png",
        desc: "IP"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "The transactions are searched based on the client IP. However, IP strings are searched using PREFIX comparison (forward match)."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "domain",
        children: "Domain"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-analysis-tx-profile-dm.png",
        desc: "Domain"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Transactions are retrieved based on the HTTP service domain (host", ":port", "). The search conditions must match the domain completely (full match)."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "useragent",
        children: "UserAgent"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-analysis-tx-profile-user-agent.png",
        desc: "User agent"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Search transactions based on the user agent (partial match)."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "referer",
        children: "Referer"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Search transactions based on the referer string."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Agents in their default settings do not collect referer data. If the referer configuration is required, see the following to add the related settings."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "../java/analysis-apm-trs#stat-referer",
                children: "Java"
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "../nodejs/analysis-apm-trs#stat-referer",
                children: "Node.js"
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "../python/analysis-apm-trs#stat-referer",
                children: "Python"
              })
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "transaction-id",
        children: "Transaction ID"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-analysis-tx-profile-tx-id.png",
        desc: "Transaction ID"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Search transactions based on their transaction ID (full match). For transaction IDs, the search indexes are created for searching at a high speed."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["The transaction ID can be found in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06125",
                className: "uitext"
              }), " tab of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06527",
                className: "uitext"
              }), " window. For more information, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "../java/trs-profile#anlaysis-trace-record-summary",
                children: "the following"
              }), "."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "If you are not using the latest version of the agent, a full scan may occur rather than using indexes."
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "multi-transaction-id",
        children: "Multi Transaction ID"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-analysis-tx-profile-mtxid.png",
        desc: "Multi transaction ID"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Search transactions based on the multi-transaction ID (full match)."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["The multi-transaction ID can be found in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06125",
                className: "uitext"
              }), " tab of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06527",
                className: "uitext"
              }), " window. For more information, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "../java/trs-multi-trace#trace-multi-tx",
                children: "the following"
              }), "."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "If you are not using the latest version of the agent, a full scan may occur rather than using indexes."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["When searching with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06107",
                className: "uitext"
              }), " filter applied, only the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06111",
                className: "uitext"
              }), " filter can be additionally applied."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "wclientid",
        children: "WClientID"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-analysis-tx-profile-wcl.png",
        desc: "Client ID"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["The client ID (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "wClientId"
        }), ") is an ID given by the WhaTap agent to identify users. Transactions are searched based on this ID (full match). There is no separate index for searching."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "WhaTap basically stores the client-related information."
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "login-id",
        children: "Login ID"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Search transactions based on the login ID."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Agents in their default settings do not collect login IDs. For more information about the login ID setting, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "../java/script-plugin#common-plugin",
            children: "the following"
          }), " to add settings."]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "downloading-the-searched-results",
        children: "Downloading the searched results"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "The searched results can be downloaded as a CSV file according to the filter conditions set by the user."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["Click ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Search icon",
              src: (__webpack_require__(29413)/* ["default"] */ .A) + "",
              width: "35",
              height: "29"
            }), " to view the searched results."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["Select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Download icon",
              src: (__webpack_require__(54010)/* ["default"] */ .A) + "",
              width: "49",
              height: "24"
            }), "."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Enter the maximum number of CSV lines. You can save the searched results as many lines as you enter."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["Select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "download",
              className: "uitext"
            }), " to download the CSV file."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["The CSV file name's format is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.em, {
            children: ["profile_", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{pcode}"
            }), "_", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "YYMMDD"
            }), ".csv"]
          }), "."]
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 27440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/number-01-f53e7cf4b28c6a036fdcbf06a8a12b72.png");

/***/ }),

/***/ 54010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0OSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43NSAxMS4zOTM5VjYuNzVIMTEuMjVWMTEuMzkzOUg4LjkxNjY3TDEzIDE1LjQ5MTdMMTcuMDgzMyAxMS4zOTM5SDE0Ljc1Wk03Ljc1IDE2LjY2MjVWMTcuODMzM0gxOC4yNVYxNi42NjI1SDcuNzVWMTYuNjYyNVoiIGZpbGw9IiNBREFEQUQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi4zMSAxMS4wODlDMjYuMjkyOSAxMC43MzcgMjYuMjUyMyAxMC40NDc0IDI2LjE4ODEgMTAuMjJDMjYuMTIzOSA5Ljk5MjcxIDI2LjAzNjIgOS44MTMwNSAyNS45MjUgOS42ODEwNUMyNS44MTM4IDkuNTQ5MDUgMjUuNjgzMyA5LjQ1OTIyIDI1LjUzMzYgOS40MTE1NUMyNS4zODM5IDkuMzYzODggMjUuMjE0OSA5LjM0MDA1IDI1LjAyNjcgOS4zNDAwNUMyNC44MDQyIDkuMzQwMDUgMjQuNTk0NiA5LjM4NTg4IDI0LjM5NzggOS40Nzc1NUMyNC4yMDExIDkuNTY5MjIgMjQuMDMyMSA5LjcxNTg4IDIzLjg5MDkgOS45MTc1NUMyMy43NDk4IDEwLjExOTIgMjMuNjM4NSAxMC4zODUgMjMuNTU3MyAxMC43MTVDMjMuNDc2IDExLjA0NTEgMjMuNDM1MyAxMS40NDQ3IDIzLjQzNTMgMTEuOTE0QzIzLjQzNTMgMTIuMzkwNyAyMy40NzYgMTIuNzkyMiAyMy41NTczIDEzLjExODVDMjMuNjM4NSAxMy40NDQ5IDIzLjc0OTggMTMuNzA4OSAyMy44OTA5IDEzLjkxMDVDMjQuMDMyMSAxNC4xMTIyIDI0LjIwMTEgMTQuMjU4OSAyNC4zOTc4IDE0LjM1MDVDMjQuNTk0NiAxNC40NDIyIDI0LjgwNDIgMTQuNDg4IDI1LjAyNjcgMTQuNDg4QzI1LjI4MzMgMTQuNDg4IDI1LjQ5MDggMTQuNDQwNCAyNS42NDkxIDE0LjM0NUMyNS44MDc0IDE0LjI0OTcgMjUuOTMzNiAxNC4xMjMyIDI2LjAyNzcgMTMuOTY1NUMyNi4xMjE4IDEzLjgwNzkgMjYuMTg4MSAxMy42MjgyIDI2LjIyNjYgMTMuNDI2NUMyNi4yNjUxIDEzLjIyNDkgMjYuMjkyOSAxMy4wMTc3IDI2LjMxIDEyLjgwNUgyOC4zMTJDMjguMzEyIDEzLjI1OTcgMjguMjM3MSAxMy42ODE0IDI4LjA4NzQgMTQuMDdDMjcuOTM3NyAxNC40NTg3IDI3LjcxNzQgMTQuNzk5NyAyNy40MjY1IDE1LjA5M0MyNy4xMzU2IDE1LjM4NjQgMjYuNzc2MyAxNS42MTU1IDI2LjM0ODUgMTUuNzgwNUMyNS45MjA3IDE1Ljk0NTUgMjUuNDI4OCAxNi4wMjggMjQuODcyNyAxNi4wMjhDMjQuMzUwOCAxNi4wMjggMjMuODc4MSAxNS45NDM3IDIzLjQ1NDYgMTUuNzc1QzIzLjAzMTEgMTUuNjA2NCAyMi42Njk2IDE1LjM1MTYgMjIuMzcwMiAxNS4wMTA1QzIyLjA3MDcgMTQuNjY5NSAyMS44Mzk3IDE0LjI0MjQgMjEuNjc3MiAxMy43MjlDMjEuNTE0NiAxMy4yMTU3IDIxLjQzMzMgMTIuNjEwNyAyMS40MzMzIDExLjkxNEMyMS40MzMzIDExLjIyNDcgMjEuNTE0NiAxMC42MjE2IDIxLjY3NzIgMTAuMTA0NUMyMS44Mzk3IDkuNTg3NTUgMjIuMDcwNyA5LjE1ODU1IDIyLjM3MDIgOC44MTc1NUMyMi42Njk2IDguNDc2NTUgMjMuMDMxMSA4LjIyMTcyIDIzLjQ1NDYgOC4wNTMwNUMyMy44NzgxIDcuODg0MzggMjQuMzUwOCA3LjgwMDA1IDI0Ljg3MjcgNy44MDAwNUMyNS40NDU5IDcuODAwMDUgMjUuOTQ4NSA3Ljg4NDM4IDI2LjM4MDYgOC4wNTMwNUMyNi44MTI2IDguMjIxNzIgMjcuMTc0MSA4LjQ1NDU1IDI3LjQ2NSA4Ljc1MTU1QzI3Ljc1NTkgOS4wNDg1NSAyNy45NzE5IDkuMzk2ODggMjguMTEzMSA5Ljc5NjU1QzI4LjI1NDMgMTAuMTk2MiAyOC4zMjA2IDEwLjYyNyAyOC4zMTIgMTEuMDg5SDI2LjMxWk0zMC4zODI0IDEzLjM4OEMzMC4zOTk2IDEzLjc4NDEgMzAuNDk3OSAxNC4wNzc0IDMwLjY3NzYgMTQuMjY4QzMwLjg1NzMgMTQuNDU4NyAzMS4xNjEgMTQuNTU0IDMxLjU4ODggMTQuNTU0QzMxLjk0ODEgMTQuNTU0IDMyLjIyMTkgMTQuNDY3OSAzMi40MTAxIDE0LjI5NTVDMzIuNTk4MyAxNC4xMjMyIDMyLjY5MjQgMTMuODk0MSAzMi42OTI0IDEzLjYwOEMzMi42OTI0IDEzLjM4OCAzMi41OTE5IDEzLjIxMiAzMi4zOTA5IDEzLjA4QzMyLjE4OTggMTIuOTQ4IDMxLjkzNTMgMTIuODMyNSAzMS42MjczIDEyLjczMzVDMzEuMzE5MyAxMi42MzQ1IDMwLjk4OTkgMTIuNTMzNyAzMC42MzkxIDEyLjQzMUMzMC4yODgzIDEyLjMyODQgMjkuOTU4OSAxMi4xOTA5IDI5LjY1MDkgMTIuMDE4NUMyOS4zNDI5IDExLjg0NjIgMjkuMDg4NCAxMS42MjI2IDI4Ljg4NzQgMTEuMzQ3NUMyOC42ODYzIDExLjA3MjUgMjguNTg1OCAxMC43MTE0IDI4LjU4NTggMTAuMjY0QzI4LjU4NTggOS44OTAwNSAyOC42NTIxIDkuNTUwODggMjguNzg0NyA5LjI0NjU1QzI4LjkxNzMgOC45NDIyMSAyOS4xMDk4IDguNjgxODggMjkuMzYyMiA4LjQ2NTU1QzI5LjYxNDYgOC4yNDkyMSAyOS45MjA0IDguMDg0MjIgMzAuMjc5OCA3Ljk3MDU1QzMwLjYzOTEgNy44NTY4OCAzMS4wNDU1IDcuODAwMDUgMzEuNDk4OSA3LjgwMDA1QzMyLjM4MDIgNy44MDAwNSAzMy4wNjY3IDcuOTgxNTUgMzMuNTU4NyA4LjM0NDU1QzM0LjA1MDYgOC43MDc1NSAzNC4zNjkzIDkuMjgxMzggMzQuNTE0OCAxMC4wNjZIMzIuNjE1NEMzMi41OTgzIDkuNzk0NzEgMzIuNDk5OSA5LjU4MDIyIDMyLjMyMDMgOS40MjI1NUMzMi4xNDA2IDkuMjY0ODggMzEuODkyNSA5LjE4NjA1IDMxLjU3NTkgOS4xODYwNUMzMS4yNjc5IDkuMTg2MDUgMzEuMDI2MyA5LjI3MDM4IDMwLjg1MDkgOS40MzkwNUMzMC42NzU1IDkuNjA3NzIgMzAuNTg3OCA5LjgxMzA1IDMwLjU4NzggMTAuMDU1QzMwLjU4NzggMTAuMjg5NyAzMC42ODgzIDEwLjQ3MTIgMzAuODg5NCAxMC41OTk1QzMxLjA5MDQgMTAuNzI3OSAzMS4zNDQ5IDEwLjg0MTUgMzEuNjUyOSAxMC45NDA1QzMxLjk2MDkgMTEuMDM5NSAzMi4yOTAzIDExLjE0MDQgMzIuNjQxMSAxMS4yNDNDMzIuOTkxOSAxMS4zNDU3IDMzLjMyMTMgMTEuNDkwNSAzMy42MjkzIDExLjY3NzVDMzMuOTM3MyAxMS44NjQ1IDM0LjE5MTggMTIuMTEyIDM0LjM5MjkgMTIuNDJDMzQuNTkzOSAxMi43MjgxIDM0LjY5NDQgMTMuMTMxNCAzNC42OTQ0IDEzLjYzQzM0LjY5NDQgMTQuMDA0MSAzNC42MTUzIDE0LjMzNzcgMzQuNDU3IDE0LjYzMUMzNC4yOTg4IDE0LjkyNDQgMzQuMDgwNiAxNS4xNzU1IDMzLjgwMjUgMTUuMzg0NUMzMy41MjQ1IDE1LjU5MzUgMzMuMTkyOSAxNS43NTMgMzIuODA3OSAxNS44NjNDMzIuNDIyOSAxNS45NzMgMzIuMDAzNyAxNi4wMjggMzEuNTUwMyAxNi4wMjhDMzAuNDYzNyAxNi4wMjggMjkuNjcyMyAxNS43OTUyIDI5LjE3NjEgMTUuMzI5NUMyOC42Nzk5IDE0Ljg2MzkgMjguNDMxOCAxNC4yMTY3IDI4LjQzMTggMTMuMzg4SDMwLjM4MjRaTTM4LjcwMjcgMTUuODk2TDQxLjI5NTEgNy45MzIwNUgzOS40NzI3TDM3Ljg4MTQgMTMuNDFIMzcuODU1N0wzNi4yOTAxIDcuOTMyMDVIMzQuMzkwN0wzNi45ODMxIDE1Ljg5NkgzOC43MDI3WiIgZmlsbD0iI0FEQURBRCIvPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjIzIiByeD0iMy41IiBzdHJva2U9IiM5Nzk3OTciLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 29413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGYxMDZkYi1mOWQ1LTRkNWItYjg1Mi01N2E4OWQ4N2NiODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM0RjAyQzM1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM0RjAyQzI1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzM1ZWVmNC1mYjZhLTRkNzctOWI5MS0yZDViNTU2OTE4YTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRmMTA2ZGItZjlkNS00ZDViLWI4NTItNTdhODlkODdjYjgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xFhE8QAAA2NJREFUeNrMl0tIVGEUx//fd2fm3nGaZHwkA+KjFylBWG5amG10GRGW9AKjRVFRCSJEQUPRokioNulCAhFsV2LiKogIwl7SoiyVsdJ8Vb5G5z3f1/luumk12lynw2WGy1zm/L7z+J9zmZRy4u1gIs/XEV78OC5g0xjostwSEojTR6mXw3fYcO3aok2y15/j83suL7rBgeI8bj4opfUwbOnAw5MCoOv5DVdAG8luvPR1RuqbCUSsAcTfluNmmA5J+MdFlA8Q2cZcjrhAWkz5Vf4VB3dQgUik15R/xcFV7mSaaZR/xcH/9U9SeRDbarpAUJ5HpgVkhO6X4pyZzZDjYogl1ghG04DpRYm5XxKHKm3YV26HywkMjAnc64nBPyxQULh6eUgahpOPnwGJBYrGk6sZ2LvDhukFIEhtWbWToa5Kx/nmEDpexFDs5dZGJhKTCISBRw1OE+Ts/RAePIubVWfYgYcXDbRecELjEh29CRR4Vt6lSR9hbFbi+G4NVWU2HL0dRHtXFN4sIN8D2DWJGl8IbwYTuFLrhJ2OGFuFbvGkW4+iUlvhwMB3gc6XceQVa9BtzJxluW6OGNVO0+MICjYwVJdwTAWkNTBqqAkHQyZ1y3xQQvw1TNUYcdDvs4t/ALLWUVfFLYqMjZ5iVDOfRhIo26TByABmCIovAdmpyySlsWKbRrUFvKKu8mRYBKPMlcnQ1B2lAgVaTuoI07rhnxCYmJMY9gtkehnqDxjo7o2i/wvdZzDruimXQt9PJ/a1h+E7ZmB7iw3NPREMEFRlqYb6/QZ0BzA+Q3pE7R+MSLh0tqJNYEWil0/6cas7ZgLcrHPi7imnOXVVeNueRjFFqWo8qMPjAk7fCUN4AbfBTMVOKYzqKFU7RTkMne/i6Hq/gHJS2zxKX983gbFRWgGoXlQdNdTocFOxn2kNmxEy7Cz1kVmW+CLaP9QM+kAR6hsF1uu0JRJYiIr8WlsEBqXrRLWOwuwohmhPUaKY1NwrOReYp293qlbJWFzS5gZku1R6JBykRUnOqQBHCk05tZNzDwlgMCrNhUlaVcBJAxGEqT1W6cxaGF9e+dJpy6svj9LgSTOL6V9x8K30vuT/IUwNSYcpv8q/4uDXjxj08gIM0ZxR4VqrlC37Un6Vf8XB/qd37d8CDAAmlWmEg71//QAAAABJRU5ErkJggg==");

/***/ }),

/***/ 13890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtY29sdW1uPC90aXRsZT4gLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Mi4wMDAwMDAsIC0zMDMxLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iYXBwbGljYXRpb24taWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMjM0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1jb2x1bW4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4wMDAwMDAsIDY4NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgNC4wMDAwMDApIiBpZD0iU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwwIEwwLDE2IEwyMCwxNiBMMjAsMCBMMCwwIFogTTEyLDIgTDEyLDE0IEw4LDE0IEw4LDIgTDEyLDIgWiBNMiwyIEw2LDIgTDYsMTQgTDIsMTQgTDIsMiBaIE0xOCwxNCBMMTQsMTQgTDE0LDIgTDE4LDIgTDE4LDE0IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 31511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

/***/ }),

/***/ 47228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII=");

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