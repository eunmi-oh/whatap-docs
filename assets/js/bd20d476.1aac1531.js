"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[93724],{

/***/ 89512:
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
	id: 'report',
	title: '서버 보고서',
	description: '서버 모니터링 보고서 메뉴를 안내합니다.',
	tags: [
		'Server',
		'보고서',
		'분석하기',
		'UI'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "server/report",
  "title": "서버 보고서",
  "description": "서버 모니터링 보고서 메뉴를 안내합니다.",
  "source": "@site/docs/server/report.mdx",
  "sourceDirName": "server",
  "slug": "/server/report",
  "permalink": "/whatap-docs/server/report",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/server/report.mdx",
  "tags": [
    {
      "label": "Server",
      "permalink": "/whatap-docs/tags/server"
    },
    {
      "label": "보고서",
      "permalink": "/whatap-docs/tags/보고서"
    },
    {
      "label": "분석하기",
      "permalink": "/whatap-docs/tags/분석하기"
    },
    {
      "label": "UI",
      "permalink": "/whatap-docs/tags/ui"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "report",
    "title": "서버 보고서",
    "description": "서버 모니터링 보고서 메뉴를 안내합니다.",
    "tags": [
      "Server",
      "보고서",
      "분석하기",
      "UI"
    ]
  },
  "sidebar": "serverSidebar",
  "previous": {
    "title": "보고서",
    "permalink": "/whatap-docs/server/report-intro"
  },
  "next": {
    "title": "통합 보고서",
    "permalink": "/whatap-docs/server/integrated-report"
  }
};
const assets = {

};

/*>

0907
일문 화면 내 보고서 요건이 영문 표기 상태

*/


const toc = [{
  "value": "<em><strong>일간 서버 보고서</strong></em>",
  "id": "일간-서버-보고서",
  "level": 2
}, {
  "value": "개요",
  "id": "개요",
  "level": 3
}, {
  "value": "서버 목록",
  "id": "서버-목록",
  "level": 3
}, {
  "value": "알림 기록",
  "id": "알림-기록",
  "level": 3
}, {
  "value": "<em><strong>주간 서버 보고서</strong></em>",
  "id": "주간-서버-보고서",
  "level": 2
}, {
  "value": "전체 자원 사용 목록",
  "id": "전체-자원-사용-목록",
  "level": 3
}, {
  "value": "CPU",
  "id": "cpu",
  "level": 4
}, {
  "value": "메모리",
  "id": "메모리",
  "level": 4
}, {
  "value": "디스크",
  "id": "디스크",
  "level": 4
}, {
  "value": "<em><strong>월간 서버 보고서</strong></em>",
  "id": "월간-서버-보고서",
  "level": 2
}, {
  "value": "개요",
  "id": "개요-1",
  "level": 3
}, {
  "value": "서버 정보",
  "id": "서버-정보",
  "level": 3
}, {
  "value": "알림 내역",
  "id": "알림-내역",
  "level": 3
}, {
  "value": "서버 사용 목록",
  "id": "서버-사용-목록",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "보고서"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 모니터링 서비스 초기 화면에서 프로젝트를 선택한 다음 프로젝트 메뉴 하위에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "보고서"
        })
      }), "를 선택하세요. 보고서 화면에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "down-arrow",
        src: (__webpack_require__(56582)/* ["default"] */ .A) + "",
        width: "24",
        height: "24"
      }), " 버튼을 클릭하면 일간, 주간, 월간으로 분류된 각종 분석 보고서를 확인할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "일간-서버-보고서",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "일간 서버 보고서"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "일간 서버 보고서"
        })
      }), "는 하루 동안의 서버 자원 사용량을 확인할 수 있는 보고서입니다. 시작일, 시작 시간, 종료 시간을 직접 설정하여 조회할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "개요",
      children: "개요"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "server_daily_report_01.png",
      desc: "일간 서버 보고서 개요"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "프로젝트 이름과 호스트 수, 발생한 알림 건수를 요약해서 볼 수 있습니다. 호스트 건수와 알림 건수의 경우 전날과 비교하여 얼마나 변동이 있었는지를 함께 확인할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "호스트 건수"
        }), " : 조회 기간 동안의 총 서버 개수입니다."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "알림 건수"
        }), " : 조회 기간 동안 발생한 알림의 전체 건수입니다."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "서버-목록",
      children: "서버 목록"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "server_daily_report_02.png",
      desc: "일간 서버 보고서 서버 목록"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "서버별로 일간 주요 지표들을 확인할 수 있습니다. CPU 최댓값(CPU Max)과 메모리 최댓값(MEM Max)의 경우 해당 수치가 발생된 시간을 함께 표시합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "알림 건수는 7일 전, 1일 전, 조회 당일을 함께 조회하여 비교해 볼 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["CPU, 메모리의 평균, 최댓값이 90% 이상인 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "loger",
          children: "빨간색"
        }), "으로 표시됩니다."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "알림-기록",
      children: "알림 기록"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "server_daily_report_03.png",
      desc: "알림 목록"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["조회한 시간 동안 발생한 알림 기록에 대해 발생 시간, 등급, 발생한 서버 이름, 해당 알림이 발생한 원인을 확인할 수 있습니다.\n각 알림에 대한 상세 정보는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "경고 알림"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "이벤트 기록"
        })
      }), " 메뉴에서 조회할 수 있습니다.\n해당 프로젝트에 대해 알림 기록이 없는 경우 '해당 기간에 데이터가 존재하지 않습니다'라는 안내 문구가 뜰 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["알림의 레벨에 따라 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "loger",
          children: "Critical"
        }), "은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "loger",
          children: "빨간색"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "wer",
          children: "Warning"
        }), "은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "wer",
          children: "주황색"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "mstop",
          children: "Info"
        }), "는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "mstop",
          children: "회색"
        }), "으로 표시됩니다."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "주간-서버-보고서",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "주간 서버 보고서"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "주간 서버 보고서"
        })
      }), "는 일주일간 서버의 CPU, Memory 사용량을 확인할 수 있는 보고서입니다.\n시작일을 직접 설정할 수 있으며, 조회 당일 기준 7일 전부터 조회 가능합니다.\n시작일로부터 7일간의 데이터를 조회합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "전체-자원-사용-목록",
      children: "전체 자원 사용 목록"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "cpu",
      children: "CPU"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "server_weekly_report_cpu.png",
      desc: "주간 전체 자원 사용 목록 CPU"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "조회 기간 동안 각 서버의 CPU 사용률을 일별로 조회합니다.\n조회되는 항목으로는 CPU 평균, 최대 95%, 최댓값이 있으며, 각 수치는 백분율로 표시됩니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "최대 95%"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "상위 5% 데이터를 제외한 최댓값을 의미합니다. 서버 재기동 등의 이유로 인해 순간적으로 높게 나온 수치를 제외하고 보기 위함입니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "메모리",
      children: "메모리"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "server_weekly_report_memory.png",
      desc: "주간 전체 자원 사용 목록 메모리"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "조회 기간 동안 각 서버의 메모리 사용량을 일별로 조회합니다.\n조회되는 항목으로는 메모리 사용 평균값, 최댓값이 있으며, 각 수치는 백분율로 표시됩니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "디스크",
      children: "디스크"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "server_weekly_report_disk.png",
      desc: "주간 전체 자원 사용 목록 디스크"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "조회 기간 동안 각 서버에 마운트 된 파일 시스템별 지표입니다.\n마운트 위치와 전체 디스크, 사용률을 조회하며 각 수치는 백분율로 표시됩니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["수치가 90% 이상인 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "loger",
            children: "빨간색"
          }), "으로 표시됩니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["그룹명에는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "okindName"
          }), "이 표시되며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "okindName"
          }), "을 설정하지 않은 경우 빈칸으로 표시될 수 있습니다."]
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "월간-서버-보고서",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "월간 서버 보고서"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "월간 서버 보고서"
        })
      }), "는 한 달 동안의 서버의 자원 사용량 및 정보를 확인할 수 있는 보고서입니다.\n시작일을 직접 설정할 수 있으며, 조회 당일 기준 30일 전부터 조회 가능합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "개요-1",
      children: "개요"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "server_monthly_report_01.png",
      desc: "월간 서버 보고서 개요"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "한 달 동안 서버의 전체 자원 사용 내역을 취합하여 볼 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "전체 호스트"
        }), " : 조회 기간 동안의 총 서버 개수입니다."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "전체 코어"
        }), " : 조회 기간 동안 사용된 총 코어 개수입니다."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "전체 디스크"
        }), " : 조회 기간 동안 마운트 된 총 파일 시스템 크기입니다."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "전체 알림"
        }), " : 조회 기간 동안 발생한 알림의 전체 건수입니다."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "서버-정보",
      children: "서버 정보"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "server_monthly_report_02.png",
      desc: "서버 정보"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "조회 기간 동안 가동된 서버의 IP 주소, OS 정보, CPU 정보, 메모리 사용량을 보여줍니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "알림-내역",
      children: "알림 내역"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "server_monthly_report_03.png",
      desc: "알림 내역"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "조회 기간의 전체 서버에 대한 총 알림 건수를 확인할 수 있으며, 서버별로 발생한 알림을 주 단위로 나누어 볼 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "서버-사용-목록",
      children: "서버 사용 목록"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "server_monthly_report_04.png",
      desc: "서버 사용 목록"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "서버별 CPU 평균, 최댓값과 메모리 평균, 최댓값을 일자별로 한눈에 확인할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["수치가 90% 이상인 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "loger",
          children: "빨간색"
        }), "으로 표시됩니다."]
      })
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

/***/ 56582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxMnB4O2hlaWdodDogMTJweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZG93bjwvdGl0bGU+IC0tPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUyLjAwMDAwMCwgLTE2NC4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImRpcmVjdGlvbmFsLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDExOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1kb3duIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTEuMzAwMDAwLCA0NC4zMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgOC4wMDAwMDApIiBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS40MTQyMTM1NiwxMy40MzUwMjg4IEw0LDEyLjAyMDgxNTMgTDExLjA3MSw0Ljk0OTQ2NjA5IEw0LC0yLjEyMTMyMDM0IEw1LjQxNDIxMzU2LC0zLjUzNTUzMzkxIEwxMy44OTk0OTQ5LDQuOTQ5NzQ3NDcgTDUuNDE0MjEzNTYsMTMuNDM1MDI4OCBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4Ljk0OTc0NywgNC45NDk3NDcpIHNjYWxlKDEsIC0xKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC04Ljk0OTc0NywgLTQuOTQ5NzQ3KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

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