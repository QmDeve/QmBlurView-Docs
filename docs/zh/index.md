---
layout: home

hero:
  name: "QmBlurView"
  text: "Android 高斯模糊组件库"
  image:
    src: /icon.jpg
    alt: QmBlurView Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/getting-started
    - theme: brand
      text: GitHub
      link: https://github.com/QmDeve/QmBlurView
    - theme: alt
      text: 下载 Demo
      link: https://github.com/QmDeve/QmBlurView/blob/master/app/release/app-release.apk?raw=true

features:
  - title: 高性能
    details: 使用 C/C++ 实现的原生模糊算法，确保最大的速度和流畅度。
  - title: 丰富的组件
    details: 包含多种模糊效果的组件。
  - title: 图片加载支持
    details: 内置针对 Glide 和 Picasso 的变换支持，轻松为图片添加模糊效果。
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/QmDeve.png',
    name: 'Donny Yale',
    title: 'Creator',
    org: 'QmDeve',
    orgLink: 'https://qmdeve.com',
    links: [
      { icon: 'github', link: 'https://github.com/QmDeve' },
      { icon: 'gmail', link: 'mailto:donny@qmdeve.com' },
      { icon: 'telegram', link: 'https://t.me/donny_yale' },
      { icon: 'qq', link: 'https://qm.qq.com/q/l2ahC820iQ' },
      { icon: 'twitter', link: 'https://x.com/qmdeve' }
    ]
  },
  {
    avatar: 'https://www.github.com/sbaiahmed1.png',
    name: 'Ahmed Sbai',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/sbaiahmed1' }
    ]
  }
]

const projects = [
  {
    title: 'AndroidLiquidGlassView',
    description: 'Android 仿 iOS 26 液体玻璃效果，AndroidLiquidGlassView 库具有真实的折射和色散效果',
    link: 'https://liquidglass.qmdeve.com',
    tags: ['Android Lib', 'LiquidGlass', 'iOS 26']
  },
  {
    title: 'Qm Authenticator',
    description: '一个为Android开发的开源、安全、离线的双因素身份验证（2FA）应用程序。它可以帮助您为您的在线帐户添加额外的安全层',
    link: 'https://github.com/Rouneant/Qm-Authenticator-for-Android',
    tags: ['Android', 'Security', 'Material Design 3']
  }
]
</script>

<VPTeamMembers size="small" :members />

## Star History

[![Star History](https://starchart.qmdeve.com/QmDeve/QmBlurView.svg?variant=adaptive)](https://starchart.qmdeve.com/QmDeve/QmBlurView)

## 交流讨论
<a href="https://t.me/QmDeve" target="_blank">
  <img src="https://img.shields.io/badge/Telegram%20Group-@QmDeve-blue?style=for-the-badge&logo=telegram" style="border-radius: 8px;">
</a><br><a href="https://qm.qq.com/q/NBHRYhce4y" target="_blank">
  <img src="https://img.shields.io/badge/QQ%20Group-1054049593-blue?style=for-the-badge&logo=qq" style="border-radius: 8px;">
</a>

## 开源许可证

```
Copyright ©️ 2025-2026 Donny Yale

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


## 我的其他项目

<MyProjects :projects="projects" />