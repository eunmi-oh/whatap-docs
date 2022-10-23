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
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
  whatapSidebar: [
    {
      type: 'category',
      label: '시작하기',
      collapsible: false,
      collapsed: false,
      items: [ 
        'getting-started/support-env',
        'getting-started/create-account',
        {
          type: 'category',
          label: '에이전트 적용하기',
          collapsible: true,
          collapsed: true,
          // link: {
          //   type: 'doc',
          //   id: 'getting-started/install-agent',
          // },
          items: [
            'apm/application-agent',
            'getting-started/server-agent',
            'getting-started/database-agent',
            'getting-started/k8-agent',
            'getting-started/telegraf-agent',
            'getting-started/focus-agent',
            'getting-started/integration-agent',
          ]
        },
      ],
    },
  ],
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
              items: [
                'apm/java-set-agent',
                {
                  type: 'doc',
                  label: '에이전트 로그',
                  id: 'apm/java-agent-log'
                },
                {
                  type: 'doc',
                  label: '에이전트 이름 식별',
                  id: 'apm/java-agent-name'
                },
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
                'apm/java-agent-adv-settings'
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
              type: 'category',
              label: '에이전트 설치',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'apm/nodejs-install-agent'
              },
              items: [
                
              ]
            }
          ]
        },
        {
          type: 'category',
          label: '주요 메뉴 알아보기',
          collapsible: true,
          collapsed: true,
          items: [
            'apm/apm-dashboard',
            'apm/apm-transaction',
            'apm/apm-topology',
            'apm/apm-metrics',
            'apm/apm-analyze',
            'apm/apm-set-notics',
            'apm/apm-openapi'
          ]
        }
      ]
    }
  ]
};

module.exports = sidebars;
