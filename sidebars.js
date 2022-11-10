/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  indexSidebar: [
    {
      type: 'link',
      label: '애플리케이션 모니터링',
      href: 'apm/application-agent' 
    },
    {
      type: 'category',
      label: '애플리케이션별 에이전트 설치',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'Java 에이전트',
          href: 'apm/java'
        },
        {
          type: 'link',
          label: 'PHP 에이전트',
          href: 'apm/php'
        },
        {
          type: 'link',
          label: 'Node.js 에이전트',
          href: 'apm/nodejs-install-agent',
        },
        {
          type: 'link',
          label: 'Python 에이전트',
          href: 'python-install-agent',
        },
        {
          type: 'link',
          label: '.NET 에이전트',
          href: 'dotnet-install-agent',
        },
        {
          type: 'link',
          label: 'Golang 에이전트',
          href: 'golang-install-agent',
        }
      ]
    }
  ],
  // whatapSidebar: [
  //   {
  //     type: 'category',
  //     label: '시작하기',
  //     collapsible: false,
  //     collapsed: false,
  //     items: [ 
  //       'getting-started/support-env',
  //       'getting-started/create-account',
  //       {
  //         type: 'category',
  //         label: '에이전트 적용하기',
  //         collapsible: true,
  //         collapsed: true,
  //         items: [
  //           'apm/application-agent',
  //           'getting-started/server-agent',
  //           'getting-started/database-agent',
  //           'getting-started/k8-agent',
  //           'getting-started/telegraf-agent',
  //           'getting-started/focus-agent',
  //           'getting-started/integration-agent',
  //         ]
  //       },
  //     ],
  //   },
  // ],
  apmSidebar: [
    {
      type: 'category',
      label: '애플리케이션 모니터링',
      collapsible: false,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'apm/application-agent',
      },
      items: [ 
        {
          type: 'category',
          label: 'JAVA 모니터링',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'apm/java-intro'
          },
          items: [
            {
              type: 'doc',
              label: '지원 환경',
              id: 'apm/java-supported-spec',
            },
            {
              type: 'category',
              label: '에이전트 설치',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'apm/java',
              },
              items: [
                'apm/add-jvm-opt/tomcat',
                'apm/add-jvm-opt/jboss',
                'apm/add-jvm-opt/jeus',
                'apm/add-jvm-opt/weblogic',
                'apm/add-jvm-opt/websphere',
                'apm/add-jvm-opt/resin',
                'apm/add-jvm-opt/liberty',
                'apm/add-jvm-opt/jetty',
                'apm/add-jvm-opt/spring-boot',
                'apm/add-jvm-opt/play2',
                'apm/add-jvm-opt/ibm-bluemix',
                'apm/add-jvm-opt/elastic-beanstalk',
                'apm/add-jvm-opt/docker',
                'apm/add-jvm-opt/batch-app',
                'apm/add-jvm-opt/java-under-ver',
              ]
            },
            'apm/java-after-install-agent',
            {
              type: 'doc',
              label: '설치 문제 해결',
              id: 'apm/java-agent-troubleshooting'
            },
            {
              type: 'category',
              label: '설정하기',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'apm/java-set-agent',
              },
              items: [
                {
                  type: 'doc',
                  label: '에이전트 이름 식별',
                  id: 'apm/java-agent-name'
                },
                'apm/java-agent-control-function',
                {
                  type: 'doc',
                  label: '사용량 수집',
                  id: 'apm/java-agent-usage',
                },
                'apm/java-agent-network',
                'apm/java-agent-performance',
                {
                  type: 'doc',
                  label: '에이전트 로그',
                  id: 'apm/java-agent-log'
                },
                {
                  type: 'doc',
                  label: 'GC 로그 모니터링',
                  id: 'apm/java-agent-gc-log'
                },
                'apm/java-agent-transaction',
                'apm/java-agent-dbsql',
                'apm/java-agent-httpcapicall',
                {
                  type: 'category',
                  label: '에이전트 플러그인',
                  items: [
                    {
                      type: 'doc',
                      label: '스크립트 플러그인',
                      id: 'apm/java-script-plugin'
                    },
                    {
                      type: 'doc',
                      label: '위빙 플러그인',
                      id: 'apm/java-weaving-plugin'
                    },
                  ]
                },
                'apm/java-agent-number-of-user',
                'apm/java-agent-load-amount',
                'apm/java-agent-notification',
                'apm/java-agent-apdex',
                'apm/java-agent-static',
                'apm/java-agent-toplogy',
                'apm/java-agent-additional-option'
              ]
            },
            {
              type: 'category',
              label: '관리하기',
              items: [
                {
                  type: 'doc',
                  label: '에이전트 업데이트 및 삭제',
                  id: 'apm/java-update-agent'
                },
                'apm/java-msa-group',
                'apm/java-aes-256-encryption',
                'apm/java-scale-in-auto-delete',
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'PHP 모니터링',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'apm/intro-php'
          },
          items: [
            {
              type: 'doc',
              id: 'apm/supported-spec-php'
            },
            {
              type: 'category',
              label: '에이전트 설치',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'apm/php',
              },
              items: [
                'apm/php-os/redhat-centos',
                'apm/php-os/debian-ubuntu',
                'apm/php-os/amazon-linux',
                'apm/php-os/freebsd',
                'apm/php-os/alpine-linux',
                'apm/php-os/gcae',
                'apm/php-os/aws-eb'
              ]
            },
            {
              type: 'doc',
              label: '설치 점검',
              id: 'apm/php-install-check'
            },
            {
              type: 'doc',
              label: '설치 문제 해결',
              id: 'apm/php-agent-troubleshooting'
            },
            {
              type: 'category',
              label: '설정하기',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'apm/php-set-agent'
              },
              items: [               
                {
                  type: 'doc',
                  label: '에이전트 이름 식별',
                  id: 'apm/php-agent-name'
                },
                {
                  type: 'doc',
                  label: '에이전트 기능 제어',
                  id: 'apm/php-control-function'
                },
                {
                  type: 'doc',
                  label: '에이전트 통신 설정',
                  id: 'apm/php-agent-com'
                },
                {
                  type: 'doc',
                  label: '에이전트 성능 설정',
                  id: 'apm/php-agent-tx'
                },
                {
                  type: 'doc',
                  label: '에이전트 트랜잭션',
                  id: 'apm/php-transaction'
                },
                {
                  type: 'doc',
                  label: '에이전트 로그',
                  id: 'apm/php-agent-log'
                },
                {
                  type: 'doc',
                  label: 'DB와 SQL',
                  id: 'apm/php-db-sql'
                },
                {
                  type: 'doc',
                  label: 'HTTPC와 API Call',
                  id: 'apm/php-httpc-api'
                },
                {
                  type: 'doc',
                  label: '사용자 수',
                  id: 'apm/php-collect-user'
                },
                {
                  type: 'doc',
                  label: 'Apdex',
                  id: 'apm/php-apdex'
                },
                {
                  type: 'doc',
                  label: '통계',
                  id: 'apm/php-stat'
                },
                {
                  type: 'doc',
                  label: '토폴로지 맵',
                  id: 'apm/php-tp-map'
                },
                {
                  type: 'doc',
                  label: '공유 메모리',
                  id: 'apm/php-shm'
                }
              ]
            },
            {
              type: 'category',
              label: '관리하기',
              items: [
                {
                  type: 'doc',
                  label: '패키지 업데이트',
                  id: 'apm/php-agent-update'
                },
                'apm/php-agent-temp-st',
                'apm/php-agent-remove'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Node.js 모니터링',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'apm/nodejs-intro'
          },
          items: [
            {
              type: 'doc',
              label: '지원 환경',
              id: 'apm/nodejs-supported-spec'
            },
            {
              type: 'doc',
              label: '에이전트 설치',
              id: 'apm/nodejs-install-agent',
            },
            {
              type: 'doc',
              label: '설치 점검',
              id: 'apm/nodejs-after-install-agent',
            },
            {
              type: 'category',
              label: '설정하기',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'apm/nodejs-set-agent'
              },
              items: [
                {
                  type: 'doc',
                  label: '에이전트 이름 식별',
                  id: 'apm/nodejs-agent-name',
                },
                'apm/nodejs-agent-control-function',
                'apm/nodejs-agent-network',
                'apm/nodejs-agent-log',
                'apm/nodejs-agent-transaction',
                'apm/nodejs-agent-dbsql',
                'apm/nodejs-agent-httpcapicall',
                'apm/nodejs-agent-number-of-user',
                'apm/nodejs-agent-static',
                'apm/nodejs-agent-topology',
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Python 모니터링',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'apm/python-intro'
          },
          items: [
            {
              type: 'doc',
              label: '지원 환경',
              id: 'apm/python-supported-spec'
            },
            {
              type: 'doc',
              label: '에이전트 설치',
              id: 'apm/python-install-agent',
            },
            {
              type: 'doc',
              label: '설치 점검',
              id: 'apm/python-after-install-agent',
            },
            {
              type: 'doc',
              label: '설치 문제 해결',
              id: 'apm/python-agent-troubleshooting',
            },
            {
              type: 'category',
              label: '설정하기',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'apm/python-set-agent'
              },
              items: [
                {
                  type: 'doc',
                  label: '에이전트 이름 식별',
                  id: 'apm/python-agent-name'
                },
                {
                  type: 'doc',
                  label: '에이전트 기능 제어',
                  id: 'apm/python-control-function'
                },
                {
                  type: 'doc',
                  label: '에이전트 통신 설정',
                  id: 'apm/python-agent-com'
                },
                {
                  type: 'doc',
                  label: '에이전트 트랜잭션',
                  id: 'apm/python-transaction'
                },
                {
                  type: 'doc',
                  label: '에이전트 로그',
                  id: 'apm/python-agent-log'
                },
                {
                  type: 'doc',
                  label: 'DB와 SQL',
                  id: 'apm/python-db-sql'
                },
                {
                  type: 'doc',
                  label: 'HTTPC와 API Call',
                  id: 'apm/python-httpc-api'
                },
                {
                  type: 'doc',
                  label: '사용자 수',
                  id: 'apm/python-collect-user'
                },
                {
                  type: 'doc',
                  label: '통계',
                  id: 'apm/python-stat'
                }
              ]
            },
            {
              type: 'doc',
              label: '고급 기능',
              id: 'apm/python-adf',
            },
            {
              type: 'category',
              label: '관리하기',
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  label: '에이전트 삭제',
                  id: 'apm/python-remove'
                },
                {
                  type: 'doc',
                  label: '패키지 관리',
                  id: 'apm/python-pkg'
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: '.NET 모니터링',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'apm/dotnet-intro'
          },
          items: [
            {
              type: 'doc',
              label: '지원 환경',
              id: 'apm/dotnet-supported-spec'
            },
            {
              type: 'doc',
              label: '에이전트 설치',
              id: 'apm/dotnet-install-agent',
            },
            {
              type: 'doc',
              label: '설치 점검',
              id: 'apm/dotnet-after-install'
            },
            {
              type: 'doc',
              label: '설치 문제 해결',
              id: 'apm/dotnet-agent-troubleshooting',
            },
            {
              type: 'category',
              label: '설정하기',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'apm/dotnet-set-agent'
              },
              items: [
                'apm/dotnet-agent-name',
                'apm/dotnet-control-function',
                'apm/dotnet-agent-network',
                'apm/dotnet-agent-performance',
                'apm/dotnet-agent-log',
                'apm/dotnet-agent-transaction',
                'apm/dotnet-agent-dbsql',
                'apm/dotnet-agent-httpcapicall',
                'apm/dotnet-agent-number-of-user',
                'apm/dotnet-agent-static',
                'apm/dotnet-agent-topology',
              ]
            },
            {
              type: 'doc',
              label: '관리하기',
              id: 'apm/dotnet-agent-manage'
            }
          ]
        },
        {
          type: 'category',
          label: 'Golang 모니터링',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'apm/golang-intro'
          },
          items: [
            {
              type: 'doc',
              label: '지원 환경',
              id: 'apm/golang-supported-spec'
            },
            {
              type: 'doc',
              label: '에이전트 설치',
              id: 'apm/golang-install-agent'
            },
            {
              type: 'doc',
              label: '설치 점검',
              id: 'apm/golang-after-install-agent'
            },
            {
              type: 'category',
              label: '설정하기',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'apm/golang-set-agent'
              },
              items: [
                'apm/golang-agent-name',
                'apm/golang-agent-transaction',
                'apm/golang-agent-dbsql',
                'apm/golang-agent-httpcall',
                'apm/golang-agent-method',
                'apm/golang-agent-number-of-user'
              ]
            },
            {
              type: 'doc',
              label: '관리하기',
              id: 'apm/golang-agent-manage'
            }
          ]
        },
        {
          type: 'category',
          label: '주요 메뉴 알아보기',
          collapsible: true,
          collapsed: false,
          link: {
            type: 'doc',
            id: 'apm/learn-apm-main-menu'
          },
          items: [
            {
              type: 'category',
              label: '대시보드',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'dashboard/dashboard-intro'
              },
              items: [
                'dashboard/apm-dashboard',
                'dashboard/dashboard-active-transaction',
              ],
            },
            {
              type: 'category',
              label: 'Flex 보드',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'dashboard/flex-board',
              },
              items: [
                'dashboard/flexboard-template',
                'dashboard/flexboard-create',
                'dashboard/flexboard-metric-widget',
                'dashboard/flexboard-widget-manage',
                'dashboard/flexboard-mode',
                'dashboard/flexboard-share',
              ],
            },
            {
              type: 'category',
              label: '토폴로지',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'topology/apm-topology',
              },
              items: [
                'topology/topology-basic',
                'topology/topology-type',
                'topology/topology-add-function',
                'topology/topology-settings'
              ],
            },
            {
              type: 'category',
              label: '트랜잭션',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'track-transactions/track-transactions-intro'
              },
              items: [
                'track-transactions/trs-view',
                'track-transactions/trs-profile',
                'track-transactions/active-transactions',
                'track-transactions/collect-stacks',
                'track-transactions/trs-multi-trace',
                'track-transactions/trs-endpoint-setting',

              ]
            },
            {
              type: 'category',
              label: '메트릭스',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'metrics/metrics-intro'
              },
              items: [
                'metrics/metrics-app',
                'metrics/metrics-performance-counter',
              ]
            },
            {
              type: 'category',
              label: '분석하기',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'analysis/analysis-report-intro'
              },
              items: [
                'analysis/cube',
                'analysis/analysis-apm',
                'analysis/analysis-apm-trs',
                {
                  type: 'category',
                  label: '보고서',
                  collapsible: true,
                  collapsed: true,
                  link: {
                    type: 'doc',
                    id: 'analysis/report-intro'
                  },
                  items: [
                    'analysis/report-apm',
                    'analysis/intergrated-report',
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: '알림 설정하기',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'notification/apm-set-notics',
              },
              items: [
                'notification/apm-warning-notice',
                'notification/metric-warning-notice',
                'notification/heatmap-notice',
                'notification/set-event-detect-anomal',
                'notification/set-event-log',
                'notification/set-receive-event',
                'notification/set-event-history',
                'notification/set-event-title-message',
              ],
            },
            {
              type: 'category',
              label: 'Open API',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'apidoc/openapi-intro'
              },
              items: [
                // {
                //   type: 'link',
                //   label: '애플리케이션 Open API',
                //   href: 'https://guide.whatap.io/whatap_guide/use_guide/integration/pages/open_api_application.html',
                // },
                // 'apidoc/apm-openapi'
              ],
            }
          ]
        }
      ]
    }
  ]
};

module.exports = sidebars;
