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
          },
          hi: {
            translations: {
              button: {
                buttonText: 'दस्तावेज़ खोजें',
                buttonAriaLabel: 'दस्तावेज़ खोजें'
              },
              modal: {
                noResultsText: 'कोई परिणाम नहीं मिला',
                resetButtonTitle: 'क्वेरी साफ़ करें',
                footer: {
                  selectText: 'चुनें',
                  navigateText: 'नेविगेट करें'
                }
              }
            }
          },
          es: {
            translations: {
              button: {
                buttonText: 'Buscar en los documentos',
                buttonAriaLabel: 'Buscar en los documentos'
              },
              modal: {
                noResultsText: 'No se han encontrado resultados',
                resetButtonTitle: 'Borrar consulta',
                footer: {
                  selectText: 'Seleccionar',
                  navigateText: 'Navegar'
                }
              }
            }
          },
          pt: {
            translations: {
              button: {
                buttonText: 'Pesquisar nos documentos',
                buttonAriaLabel: 'Pesquisar nos documentos'
              },
              modal: {
                noResultsText: 'Nenhum resultado encontrado',
                resetButtonTitle: 'Limpar consulta',
                footer: {
                  selectText: 'Selecionar',
                  navigateText: 'Navegar'
                }
              }
            }
          },
          vi: {
            translations: {
              button: {
                buttonText: 'Tìm kiếm Tài liệu',
                buttonAriaLabel: 'Tìm kiếm Tài liệu'
              },
              modal: {
                noResultsText: 'Không tìm thấy kết quả',
                resetButtonTitle: 'Xóa truy vấn',
                footer: {
                  selectText: 'Chọn',
                  navigateText: 'Điều hướng'
                }
              }
            }
          },
          th: {
            translations: {
              button: {
                buttonText: 'ค้นหาเอกสาร',
                buttonAriaLabel: 'ค้นหาเอกสาร'
              },
              modal: {
                noResultsText: 'ไม่พบผลลัพธ์',
                resetButtonTitle: 'ล้างคำค้นหา',
                footer: {
                  selectText: 'เลือก',
                  navigateText: 'นำทาง'
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
          { text: 'Overview', link: '/guide/overview' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          {
            text: 'Blur Components',
            items: [
              { text: 'BlurView', link: '/guide/component/BlurView' },
              { text: 'BlurButtonView', link: '/guide/component/BlurButtonView' },
              { text: 'ProgressiveBlurView', link: '/guide/component/ProgressiveBlurView' },
              { text: 'BlurTitlebarView', link: '/guide/component/BlurTitlebarView' },
              { text: 'BlurSwitchButtonView', link: '/guide/component/BlurSwitchButtonView' },
              { text: 'BlurFloatingButtonView', link: '/guide/component/BlurFloatingButtonView' },
              { text: 'BlurBottomNavigationView', link: '/guide/component/BlurBottomNavigationView' }
            ]
          },
          {
            text: 'Blur Transformation',
            items: [
              { text: 'Glide Integration', link: '/guide/transformation/glide' },
              { text: 'Picasso Integration', link: '/guide/transformation/picasso' }
            ]
          },
          { text: 'Update Log', link: '/update-log' }
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
          { text: '概览', link: '/zh/guide/overview' },
          { text: '快速开始', link: '/zh/guide/getting-started' },
          {
            text: '模糊组件',
            items: [
              { text: 'BlurView', link: '/zh/guide/component/BlurView' },
              { text: 'BlurButtonView', link: '/zh/guide/component/BlurButtonView' },
              { text: 'ProgressiveBlurView', link: '/zh/guide/component/ProgressiveBlurView' },
              { text: 'BlurTitlebarView', link: '/zh/guide/component/BlurTitlebarView' },
              { text: 'BlurSwitchButtonView', link: '/zh/guide/component/BlurSwitchButtonView' },
              { text: 'BlurFloatingButtonView', link: '/zh/guide/component/BlurFloatingButtonView' },
              { text: 'BlurBottomNavigationView', link: '/zh/guide/component/BlurBottomNavigationView' }
            ]
          },
          {
            text: 'Blur Transformation',
            items: [
              { text: 'Glide 集成', link: '/zh/guide/transformation/glide' },
              { text: 'Picasso 集成', link: '/zh/guide/transformation/picasso' }
            ]
          },
          { text: '更新日志', link: '/update-log.md' },
          { text: '广告', link: '/zh/advertising.md' }
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
          { text: 'Обзор', link: '/ru/guide/overview' },
          { text: 'Начинай быстро', link: '/ru/guide/getting-started' },
          {
            text: 'Нечеткие компоненты',
            items: [
              { text: 'BlurView', link: '/ru/guide/component/BlurView' },
              { text: 'BlurButtonView', link: '/ru/guide/component/BlurButtonView' },
              { text: 'ProgressiveBlurView', link: '/ru/guide/component/ProgressiveBlurView' },
              { text: 'BlurTitlebarView', link: '/ru/guide/component/BlurTitlebarView' },
              { text: 'BlurSwitchButtonView', link: '/ru/guide/component/BlurSwitchButtonView' },
              { text: 'BlurFloatingButtonView', link: '/ru/guide/component/BlurFloatingButtonView' },
              { text: 'BlurBottomNavigationView', link: '/ru/guide/component/BlurBottomNavigationView' }
            ]
          },
          {
            text: 'Blur Transformation',
            items: [
              { text: 'Интеграция Glide', link: '/ru/guide/transformation/glide' },
              { text: 'Интеграция Picasso', link: '/ru/guide/transformation/picasso' }
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
          { text: '概要', link: '/ja/guide/overview' },
          { text: 'クイックスタート', link: '/ja/guide/getting-started' },
          {
            text: 'ブラーコンポーネント',
            items: [
              { text: 'BlurView', link: '/ja/guide/component/BlurView.md' },
              { text: 'BlurButtonView', link: '/ja/guide/component/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/ja/guide/component/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/ja/guide/component/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/ja/guide/component/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/ja/guide/component/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/ja/guide/component/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'Blur Transformation',
            items: [
              { text: 'Glide 統合', link: '/ja/guide/transformation/glide.md' },
              { text: 'Picasso 統合', link: '/ja/guide/transformation/picasso.md' }
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
          { text: '개요', link: '/ko/guide/overview' },
          { text: '빠른 시작', link: '/ko/guide/getting-started' },
          {
            text: '블러 컴포넌트',
            items: [
              { text: 'BlurView', link: '/ko/guide/component/BlurView.md' },
              { text: 'BlurButtonView', link: '/ko/guide/component/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/ko/guide/component/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/ko/guide/component/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/ko/guide/component/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/ko/guide/component/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/ko/guide/component/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'Blur Transformation',
            items: [
              { text: 'Glide 통합', link: '/ko/guide/transformation/glide.md' },
              { text: 'Picasso 통합', link: '/ko/guide/transformation/picasso.md' }
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
          { text: 'Vue d\'ensemble', link: '/fr/guide/overview' },
          { text: 'Démarrage rapide', link: '/fr/guide/getting-started' },
          {
            text: 'Composants flous',
            items: [
              { text: 'BlurView', link: '/fr/guide/component/BlurView.md' },
              { text: 'BlurButtonView', link: '/fr/guide/component/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/fr/guide/component/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/fr/guide/component/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/fr/guide/component/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/fr/guide/component/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/fr/guide/component/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'Blur Transformation',
            items: [
              { text: 'Intégration Glide', link: '/fr/guide/transformation/glide.md' },
              { text: 'Intégration Picasso', link: '/fr/guide/transformation/picasso.md' }
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
      dir: 'rtl',
      themeConfig: {
        nav: [
          { text: 'الصفحة الرئيسية', link: '/ar' },
          { text: 'البدء السريع', link: '/ar/getting-started' },
          {
            text: 'المكونات غير واضحة',
            items: [
              { text: 'BlurView', link: '/ar/guide/component/BlurView.md' },
              { text: 'BlurButtonView', link: '/ar/guide/component/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/ar/guide/component/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/ar/guide/component/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/ar/guide/component/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/ar/guide/component/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/ar/guide/component/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'Blur Transformation',
            items: [
              { text: 'دمج Glide', link: '/ar/guide/transformation/glide.md' },
              { text: 'دمج Picasso', link: '/ar/guide/transformation/picasso.md' }
            ]
          },
          { text: 'سجل التحديث', link: '/update-log.md' }
        ]
      }
    },
    hi: {
      title: 'QmBlurView',
      titleTemplate: 'Android के लिए Gaussian Blur कंपोनेंट लाइब्रेरी',
      label: 'हिन्दी',
      lang: 'hi',
      link: '/hi',
      themeConfig: {
        nav: [
          { text: 'होमपेज', link: '/hi' },
          { text: 'अवलोकन', link: '/hi/guide/overview' },
          { text: 'शीघ्र आरंभ करें', link: '/hi/guide/getting-started' },
          {
            text: 'ब्लर घटक',
            items: [
              { text: 'BlurView', link: '/hi/guide/component/BlurView.md' },
              { text: 'BlurButtonView', link: '/hi/guide/component/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/hi/guide/component/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/hi/guide/component/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/hi/guide/component/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/hi/guide/component/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/hi/guide/component/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'ब्लर ट्रांसफॉर्मेशन',
            items: [
              { text: 'Glide एकीकरण', link: '/hi/guide/transformation/glide.md' },
              { text: 'Picasso एकीकरण', link: '/hi/guide/transformation/picasso.md' }
            ]
          },
          { text: 'अपडेट लॉग', link: '/update-log.md' }
        ]
      }
    },
    es: {
      title: 'QmBlurView',
      titleTemplate: 'Biblioteca de componentes Gaussian Blur para Android',
      label: 'Español',
      lang: 'es',
      link: '/es',
      themeConfig: {
        nav: [
          { text: 'Inicio', link: '/es' },
          { text: 'Descripción general', link: '/es/guide/overview' },
          { text: 'Comenzando', link: '/es/guide/getting-started' },
          {
            text: 'Componentes de desenfoque',
            items: [
              { text: 'BlurView', link: '/es/guide/component/BlurView.md' },
              { text: 'BlurButtonView', link: '/es/guide/component/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/es/guide/component/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/es/guide/component/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/es/guide/component/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/es/guide/component/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/es/guide/component/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'Transformación de desenfoque',
            items: [
              { text: 'Integración Glide', link: '/es/guide/transformation/glide.md' },
              { text: 'Integración Picasso', link: '/es/guide/transformation/picasso.md' }
            ]
          },
          { text: 'Registro de actualizaciones', link: '/update-log.md' }
        ]
      }
    },
    pt: {
      title: 'QmBlurView',
      titleTemplate: 'Biblioteca de Componentes Gaussian Blur para Android',
      label: 'Português',
      lang: 'pt',
      link: '/pt',
      themeConfig: {
        nav: [
          { text: 'Início', link: '/pt' },
          { text: 'Visão geral', link: '/pt/guide/overview' },
          { text: 'Primeiros passos', link: '/pt/guide/getting-started' },
          {
            text: 'Componentes de desfoque',
            items: [
              { text: 'BlurView', link: '/pt/guide/component/BlurView.md' },
              { text: 'BlurButtonView', link: '/pt/guide/component/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/pt/guide/component/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/pt/guide/component/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/pt/guide/component/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/pt/guide/component/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/pt/guide/component/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'Transformação de desfoque',
            items: [
              { text: 'Integração Glide', link: '/pt/guide/transformation/glide.md' },
              { text: 'Integração Picasso', link: '/pt/guide/transformation/picasso.md' }
            ]
          },
          { text: 'Registro de atualizações', link: '/update-log.md' }
        ]
      }
    },
    vi: {
      title: 'QmBlurView',
      titleTemplate: 'Thư viện thành phần Gaussian Blur cho Android',
      label: 'Tiếng Việt',
      lang: 'vi',
      link: '/vi',
      themeConfig: {
        nav: [
          { text: 'Trang chủ', link: '/vi' },
          { text: 'Tổng quan', link: '/vi/guide/overview' },
          { text: 'Bắt đầu nhanh', link: '/vi/guide/getting-started' },
          {
            text: 'Các thành phần mờ',
            items: [
              { text: 'BlurView', link: '/vi/guide/component/BlurView.md' },
              { text: 'BlurButtonView', link: '/vi/guide/component/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/vi/guide/component/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/vi/guide/component/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/vi/guide/component/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/vi/guide/component/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/vi/guide/component/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'Biến đổi mờ',
            items: [
              { text: 'Tích hợp Glide', link: '/vi/guide/transformation/glide.md' },
              { text: 'Tích hợp Picasso', link: '/vi/guide/transformation/picasso.md' }
            ]
          },
          { text: 'Nhật ký cập nhật', link: '/update-log.md' }
        ]
      }
    },
    th: {
      title: 'QmBlurView',
      titleTemplate: 'ไลบรารีคอมโพเนนต์ Gaussian Blur สำหรับ Android',
      label: 'ภาษาไทย',
      lang: 'th',
      link: '/th',
      themeConfig: {
        nav: [
          { text: 'หน้าแรก', link: '/th' },
          { text: 'ภาพรวม', link: '/th/guide/overview' },
          { text: 'เริ่มต้นอย่างรวดเร็ว', link: '/th/guide/getting-started' },
          {
            text: 'คอมโพเนนต์เบลอ',
            items: [
              { text: 'BlurView', link: '/th/guide/component/BlurView.md' },
              { text: 'BlurButtonView', link: '/th/guide/component/BlurButtonView.md' },
              { text: 'ProgressiveBlurView', link: '/th/guide/component/ProgressiveBlurView.md' },
              { text: 'BlurTitlebarView', link: '/th/guide/component/BlurTitlebarView.md' },
              { text: 'BlurSwitchButtonView', link: '/th/guide/component/BlurSwitchButtonView.md' },
              { text: 'BlurFloatingButtonView', link: '/th/guide/component/BlurFloatingButtonView.md' },
              { text: 'BlurBottomNavigationView', link: '/th/guide/component/BlurBottomNavigationView.md' }
            ]
          },
          {
            text: 'การแปลงเบลอ',
            items: [
              { text: 'การผสานรวม Glide', link: '/th/guide/transformation/glide.md' },
              { text: 'การผสานรวม Picasso', link: '/th/guide/transformation/picasso.md' }
            ]
          },
          { text: 'บันทึกการอัปเดต', link: '/update-log.md' }
        ]
      }
    }
  }
})