import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "QmBlurView",
  titleTemplate: "Gaussian Blur Component Library for Android",
  description: "Android UI component library that provides real-time, dynamic Gaussian blur effects. It uses native C++ code for efficient blur processing and provides a set of blur UI components to enhance your application design",
  sitemap: {
    hostname: 'https://blurview.qmdeve.com'
  },
  head: [
    ['link', { rel: 'icon', href: '/hero.jpg' }],
    ['meta', { name: 'msvalidate.01', content: '3B3196CCE3689B59560B015D922104EE' }],
    ['meta', { name: 'google-site-verification', content: '2hFUKgXRhlWwjVnt_m5PN0IA00LaSYJBs0ZK1RjBzQY' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-gAdMnbR875' }],
    ['script', { async: 'async', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1263219814762561', crossorigin: 'anonymous' }],
    ['script', {}, `window["addAds"] = function () {(adsbygoogle = window.adsbygoogle || []).push({});}`],
  ],

  appearance: false,
  markdown: {
    config: (md) => {
      const originalFence = md.renderer.rules.fence
      md.renderer.rules.fence = (...args) => {
        const [tokens, idx] = args
        let content = tokens[idx].content

        content = content
          .replace(/{{VERSION}}/g, '1.1.4')
          .replace(/{{GROUP_ID}}/g, 'com.qmdeve.blurview')

        tokens[idx].content = content

        return originalFence ? originalFence(...args) : ''
      }

      const originalInline = md.renderer.renderInline
      md.renderer.renderInline = function (tokens, options, env) {
        tokens.forEach(token => {
          if (token.content) {
            token.content = token.content
              .replace(/{{VERSION}}/g, '1.1.4')
              .replace(/{{GROUP_ID}}/g, 'com.qmdeve.blurview')
          }
        })

        return originalInline.call(this, tokens, options, env)
      }
    },
    image: {
      lazyLoading: true
    }
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
                buttonAriaLabel: 'Search Docs'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate'
                }
              }
            }
          },
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          },
          ru: {
            translations: {
              button: {
                buttonText: 'Искать в документах',
                buttonAriaLabel: 'Искать в документах'
              },
              modal: {
                noResultsText: 'Не найдено результатов',
                resetButtonTitle: 'Очистить запрос',
                footer: {
                  selectText: 'Выбрать',
                  navigateText: 'Переключить'
                }
              }
            }
          },
          ja: {
            translations: {
              button: {
                buttonText: 'ドキュメントを検索',
                buttonAriaLabel: 'ドキュメントを検索'
              },
              modal: {
                noResultsText: '結果が見つかりません',
                resetButtonTitle: 'クエリをクリア',
                footer: {
                  selectText: '選択',
                  navigateText: '移動'
                }
              }
            }
          },
          ko: {
            translations: {
              button: {
                buttonText: '문서 검색',
                buttonAriaLabel: '문서 검색'
              },
              modal: {
                noResultsText: '결과를 찾을 수 없습니다',
                resetButtonTitle: '쿼리 지우기',
                footer: {
                  selectText: '선택',
                  navigateText: '이동'
                }
              }
            }
          },
          fr: {
            translations: {
              button: {
                buttonText: 'Rechercher dans la documentation',
                buttonAriaLabel: 'Rechercher dans la documentation'
              },
              modal: {
                noResultsText: 'Aucun résultat trouvé',
                resetButtonTitle: 'Effacer la requête',
                footer: {
                  selectText: 'Sélectionner',
                  navigateText: 'Naviguer'
                }
              }
            }
          },
          ar: {
            translations: {
              button: {
                buttonText: 'بحث في الوثائق',
                buttonAriaLabel: 'بحث في الوثائق'
              },
              modal: {
                noResultsText: 'لم يتم العثور على نتائج',
                resetButtonTitle: 'مسح الاستعلام',
                footer: {
                  selectText: 'اختر',
                  navigateText: 'تنقل'
                }
              }
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/QmDeve/QmBlurView-Docs/edit/main/docs/:path'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/QmDeve/QmBlurView' },
      { icon: 'telegram', link: 'https://t.me/qmdeve' }
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/QmDeve/QmBlurView/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2025-2026 <a href="https://github.com/QmDeve">Donny Yale</a>'
    }
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
          { text: 'Quick Start', link: '/getting-started' },
          {
            text: 'Blur Components',
            items: [
              { text: 'BlurView', link: '/quick-start/BlurView.md' },
              { text: 'BlurButtonView', link: '/quick-start/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/quick-start/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/quick-start/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/quick-start/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/quick-start/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/quick-start/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'Blur Transformation',
            items: [
              { text: 'Glide Integration', link: '/quick-start/blur-transformation/glide-integration.md' },
              { text: 'Picasso Integration', link: '/quick-start/blur-transformation/picasso-integration.md' }
            ]
          },
          { text: 'Update Log', link: '/update-log.md' }
        ]
      }
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
          { icon: 'qq', link: 'https://qm.qq.com/q/9O8Dzxch1u' },
          { icon: 'telegram', link: 'https://t.me/qmdeve' }
        ],
        nav: [
          { text: '首页', link: '/zh' },
          { text: '快速开始', link: '/zh/getting-started' },
          {
            text: '模糊组件',
            items: [
              { text: 'BlurView', link: '/zh/quick-start/BlurView.md' },
              { text: 'BlurButtonView', link: '/zh/quick-start/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/zh/quick-start/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/zh/quick-start/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/zh/quick-start/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/zh/quick-start/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/zh/quick-start/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'Blur Transformation',
            items: [
              { text: 'Glide 集成', link: '/zh/quick-start/blur-transformation/glide-integration.md' },
              { text: 'Picasso 集成', link: '/zh/quick-start/blur-transformation/picasso-integration.md' }
            ]
          },
          { text: '更新日志', link: '/update-log.md' }
        ]
      }
    },
    ru: {
      title: 'QmBlurView',
      titleTemplate: 'Библиотека компонентов Gaussian Blur для Android',
      label: 'Русский',
      lang: 'ru',
      link: '/ru',
      themeConfig: {
        nav: [
          { text: 'Домашняя страница', link: '/ru' },
          { text: 'Начинай быстро', link: '/ru/getting-started' },
          {
            text: 'Нечеткие компоненты',
            items: [
              { text: 'BlurView', link: '/ru/quick-start/BlurView.md' },
              { text: 'BlurButtonView', link: '/ru/quick-start/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/ru/quick-start/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/ru/quick-start/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/ru/quick-start/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/ru/quick-start/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/ru/quick-start/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'Blur Transformation',
            items: [
              { text: 'Интеграция Glide', link: '/ru/quick-start/blur-transformation/glide-integration.md' },
              { text: 'Интеграция Picasso', link: '/ru/quick-start/blur-transformation/picasso-integration.md' }
            ]
          },
          { text: 'Инструкции по обновлению', link: '/update-log.md' }
        ]
      }
    },
    ja: {
      title: 'QmBlurView',
      titleTemplate: 'Android用ガウスブラーコンポーネントライブラリ',
      label: '日本語',
      lang: 'ja',
      link: '/ja',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja' },
          { text: 'クイックスタート', link: '/ja/getting-started' },
          {
            text: 'ブラーコンポーネント',
            items: [
              { text: 'BlurView', link: '/ja/quick-start/BlurView.md' },
              { text: 'BlurButtonView', link: '/ja/quick-start/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/ja/quick-start/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/ja/quick-start/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/ja/quick-start/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/ja/quick-start/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/ja/quick-start/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'Blur Transformation',
            items: [
              { text: 'Glide 統合', link: '/ja/quick-start/blur-transformation/glide-integration.md' },
              { text: 'Picasso 統合', link: '/ja/quick-start/blur-transformation/picasso-integration.md' }
            ]
          },
          { text: '更新ログ', link: '/update-log.md' }
        ]
      }
    },
    ko: {
      title: 'QmBlurView',
      titleTemplate: 'Android용 가우시안 블러 컴포넌트 라이브러리',
      label: '한국어',
      lang: 'ko',
      link: '/ko',
      themeConfig: {
        nav: [
          { text: '홈', link: '/ko' },
          { text: '빠른 시작', link: '/ko/getting-started' },
          {
            text: '블러 컴포넌트',
            items: [
              { text: 'BlurView', link: '/ko/quick-start/BlurView.md' },
              { text: 'BlurButtonView', link: '/ko/quick-start/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/ko/quick-start/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/ko/quick-start/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/ko/quick-start/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/ko/quick-start/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/ko/quick-start/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'Blur Transformation',
            items: [
              { text: 'Glide 통합', link: '/ko/quick-start/blur-transformation/glide-integration.md' },
              { text: 'Picasso 통합', link: '/ko/quick-start/blur-transformation/picasso-integration.md' }
            ]
          },
          { text: '업데이트 로그', link: '/update-log.md' }
        ]
      }
    },
    fr: {
      title: 'QmBlurView',
      titleTemplate: 'Bibliothèque de composants Gaussian Blur pour Android',
      label: 'Français',
      lang: 'fr',
      link: '/fr',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr' },
          { text: 'Démarrage rapide', link: '/fr/getting-started' },
          {
            text: 'Composants flous',
            items: [
              { text: 'BlurView', link: '/fr/quick-start/BlurView.md' },
              { text: 'BlurButtonView', link: '/fr/quick-start/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/fr/quick-start/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/fr/quick-start/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/fr/quick-start/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/fr/quick-start/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/fr/quick-start/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'Blur Transformation',
            items: [
              { text: 'Intégration Glide', link: '/fr/quick-start/blur-transformation/glide-integration.md' },
              { text: 'Intégration Picasso', link: '/fr/quick-start/blur-transformation/picasso-integration.md' }
            ]
          },
          { text: 'Journal des mises à jour', link: '/update-log.md' }
        ]
      }
    },
    ar: {
      title: 'QmBlurView',
      titleTemplate: 'مكتبة مكونات Gaussian Blur لـ Android',
      label: 'العربية',
      lang: 'ar',
      link: '/ar',
      themeConfig: {
        nav: [
          { text: 'الصفحة الرئيسية', link: '/ar' },
          { text: 'البدء السريع', link: '/ar/getting-started' },
          {
            text: 'المكونات غير واضحة',
            items: [
              { text: 'BlurView', link: '/ar/quick-start/BlurView.md' },
              { text: 'BlurButtonView', link: '/ar/quick-start/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/ar/quick-start/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/ar/quick-start/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/ar/quick-start/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/ar/quick-start/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/ar/quick-start/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'Blur Transformation',
            items: [
              { text: 'دمج Glide', link: '/ar/quick-start/blur-transformation/glide-integration.md' },
              { text: 'دمج Picasso', link: '/ar/quick-start/blur-transformation/picasso-integration.md' }
            ]
          },
          { text: 'سجل التحديث', link: '/update-log.md' }
        ]
      }
    }
  }
})