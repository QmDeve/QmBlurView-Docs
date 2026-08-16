import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'QmBlurView',
  titleTemplate: 'Gaussian Blur Component Library for Android',
  description:
    'Android UI component library that provides real-time, dynamic Gaussian blur effects. It uses native C++ code for efficient blur processing and provides a set of blur UI components to enhance your application design',
  sitemap: {
    hostname: 'https://blurview.qmdeve.com',
  },
  head: [
    ['link', { rel: 'icon', href: '/hero.jpg' }],
    [
      'meta',
      { name: 'msvalidate.01', content: '3B3196CCE3689B59560B015D922104EE' },
    ],
    [
      'meta',
      {
        name: 'google-site-verification',
        content: '2hFUKgXRhlWwjVnt_m5PN0IA00LaSYJBs0ZK1RjBzQY',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-gAdMnbR875' }],
  ],

  appearance: false,
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    logo: '/hero.jpg',
    search: {
      provider: 'local',
      options: {
        locales: {
          en: {
            translations: {
              button: {
                buttonText: 'Search Docs',
                buttonAriaLabel: 'Search Docs',
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate',
                },
              },
            },
          },
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },

    editLink: {
      pattern: 'https://github.com/QmDeve/QmBlurView-Docs/edit/main/docs/:path',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/QmDeve/QmBlurView' },
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/QmDeve/QmBlurView/blob/master/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2025-2026 <a href="https://github.com/QmDeve">Donny Yang</a>',
    },
  },

  locales: {
    root: {
      title: 'QmBlurView',
      titleTemplate: 'Gaussian Blur Component Library for Android',
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Overview', link: '/guide/overview' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          {
            text: 'Components',
            items: [
              { text: 'BlurView', link: '/guide/component/BlurView' },
              { text: 'BlurViewGroup', link: '/guide/component/BlurViewGroup' },
              {
                text: 'BlurButtonView',
                link: '/guide/component/BlurButtonView',
              },
              {
                text: 'ProgressiveBlurView',
                link: '/guide/component/ProgressiveBlurView',
              },
              {
                text: 'ProgressiveBlurViewGroup',
                link: '/guide/component/ProgressiveBlurViewGroup',
              },
              {
                text: 'BlurTitlebarView',
                link: '/guide/component/BlurTitlebarView',
              },
              {
                text: 'BlurSwitchButtonView',
                link: '/guide/component/BlurSwitchButtonView',
              },
              {
                text: 'BlurFloatingButtonView',
                link: '/guide/component/BlurFloatingButtonView',
              },
              {
                text: 'BlurBottomNavigationView',
                link: '/guide/component/BlurBottomNavigationView',
              },
            ],
          },
          {
            text: 'Blur Transformation',
            items: [
              {
                text: 'Glide Integration',
                link: '/guide/transformation/glide',
              },
              {
                text: 'Picasso Integration',
                link: '/guide/transformation/picasso',
              },
            ],
          },
          { text: 'Update Log', link: '/update-log' },
        ],
      },
    },
    zh: {
      title: 'QmBlurView',
      titleTemplate: 'Android 高斯模糊组件库',
      label: '简体中文',
      lang: 'zh',
      link: '/zh',
      themeConfig: {
        socialLinks: [
          { icon: 'github', link: 'https://github.com/QmDeve/QmBlurView' },
        ],
        nav: [
          { text: '首页', link: '/zh' },
          { text: '概览', link: '/zh/guide/overview' },
          { text: '快速开始', link: '/zh/guide/getting-started' },
          {
            text: '组件',
            items: [
              { text: 'BlurView', link: '/zh/guide/component/BlurView' },
              {
                text: 'BlurViewGroup',
                link: '/zh/guide/component/BlurViewGroup',
              },
              {
                text: 'BlurButtonView',
                link: '/zh/guide/component/BlurButtonView',
              },
              {
                text: 'ProgressiveBlurView',
                link: '/zh/guide/component/ProgressiveBlurView',
              },
              {
                text: 'ProgressiveBlurViewGroup',
                link: '/zh/guide/component/ProgressiveBlurViewGroup',
              },
              {
                text: 'BlurTitlebarView',
                link: '/zh/guide/component/BlurTitlebarView',
              },
              {
                text: 'BlurSwitchButtonView',
                link: '/zh/guide/component/BlurSwitchButtonView',
              },
              {
                text: 'BlurFloatingButtonView',
                link: '/zh/guide/component/BlurFloatingButtonView',
              },
              {
                text: 'BlurBottomNavigationView',
                link: '/zh/guide/component/BlurBottomNavigationView',
              },
            ],
          },
          {
            text: 'Blur Transformation',
            items: [
              { text: 'Glide 集成', link: '/zh/guide/transformation/glide' },
              {
                text: 'Picasso 集成',
                link: '/zh/guide/transformation/picasso',
              },
            ],
          },
          { text: '更新日志', link: '/update-log.md' },
        ],
      },
    },
  },
});
