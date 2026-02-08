---
layout: home

hero:
  name: "QmBlurView"
  text: "Android Blur Component Library"
  image:
    src: /icon.jpg
    alt: QmBlurView Logo
  actions:
    - theme: mimicry-brand
      text: Get Started
      link: ./guide/overview
    - theme: mimicry
      text: View on GitHub
      link: https://github.com/QmDeve/QmBlurView
    - theme: mimicry
      text: Download Demo
      link: https://github.com/QmDeve/QmBlurView/blob/master/app/release/app-release.apk?raw=true

features:
  - title: High Performance
    details: Native blur algorithm implemented in C/C++ to ensure maximum speed and smoothness.
  - title: Rich Component
    details: Component that includes multiple types of blur effects.
  - title: Image Loading Support
    details: Built-in transformations for Glide and Picasso to easily add blur effects to images.
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
    description: 'Android imitation of iOS 26 liquid glass effect, AndroidLiquidGlassView library has real refraction and dispersion effect',
    link: 'https://liquidglass.qmdeve.com',
    tags: ['Android Lib', 'LiquidGlass', 'iOS 26']
  },
  {
    title: 'Qm Authenticator',
    description: 'An open-source, secure, offline two-factor authentication (2FA) application developed for Android. It helps you add an extra layer of security to your online account',
    link: 'https://github.com/Rouneant/Qm-Authenticator-for-Android',
    tags: ['Android', 'Security', 'Material Design 3']
  }
]
</script>

<VPTeamMembers size="small" :members />

## Star History

[![Star History](https://starchart.qmdeve.com/QmDeve/QmBlurView.svg?variant=adaptive)](https://starchart.qmdeve.com/QmDeve/QmBlurView)

## Discuss Groups
Telegram: <a href="https://t.me/qmdeve" target="_blank">QmDeve</a>

## License

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

## My Other Projects

<MyProjects :projects="projects" />