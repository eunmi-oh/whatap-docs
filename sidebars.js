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
            id: 'apm/intro-java'
          },
          items: [
            {
              type: 'doc',
              id: 'apm/supported-spec'
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
              ]
            },
            {
              type: 'doc',
              label: '설치 시 문제 해결',
              id: 'apm/java-agent-troubleshooting'
            },
            {
              type: 'doc',
              label: '에이전트 설정',
              id: 'apm/java-set-agent'
            },
            {
              type: 'doc',
              label: '에이전트 설치 파일 구성',
              id: 'apm/java-agent-files'
            },
            {
              type: 'doc',
              label: '에이전트 로그',
              id: 'apm/java-agent-log'
            }
            ,
            {
              type: 'doc',
              label: '에이전트 이름 식별',
              id: 'apm/java-agent-name'
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
                'apm/php-os/alpine-linux',
                'apm/php-os/freebsd',
                'apm/php-os/gcae',
                'apm/php-os/aws-eb'
              ]
            },
            {
              type: 'doc',
              label: '설치 시 문제 해결',
              id: 'apm/php-agent-troubleshooting'
            },
            {
              type: 'doc',
              label: '에이전트 설정',
              id: 'apm/php-set-agent'
            },
            {
              type: 'doc',
              label: '에이전트 설치 파일 구성',
              id: 'apm/php-agent-files'
            },
            {
              type: 'doc',
              label: '에이전트 로그',
              id: 'apm/php-agent-log'
            },
            {
              type: 'doc',
              label: '에이전트 이름 식별',
              id: 'apm/php-agent-name'
            }
          ]
        }
      ]
    }
  ]
};

module.exports = sidebars;
