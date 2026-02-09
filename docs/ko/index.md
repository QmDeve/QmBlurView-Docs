---
layout: home

hero:
  name: "QmBlurView"
  text: "Android 블러 컴포넌트 라이브러리"
  image:
    src: /icon.jpg
    alt: QmBlurView Logo
  actions:
    - theme: mimicry-brand
      text: 빠른 시작
      link: ./guide/overview
    - theme: mimicry
      text: View on GitHub
      link: https://github.com/QmDeve/QmBlurView
    - theme: mimicry
      text: 데모 다운로드
      link: https://github.com/QmDeve/QmBlurView/blob/master/app/release/app-release.apk?raw=true

features:
  - title: 고성능
    details: C/C++로 구현된 네이티브 블러 알고리즘으로 최대 속도와 부드러움을 보장합니다.
  - title: 풍부한 컴포넌트
    details: 다양한 유형의 블러 효과를 포함하는 컴포넌트입니다.
  - title: 이미지 로딩 지원
    details: Glide 및 Picasso용 내장 변환을 통해 이미지에 쉽게 블러 효과를 추가할 수 있습니다.
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
      { icon: 'telegram', link: 'https://t.me/donny_yale' }
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
    description: 'iOS 26 액체 유리 효과의 Android 모방, AndroidLiquidGlassView 라이브러리는 실제 굴절 및 분산 효과를 가지고 있습니다',
    link: 'https://liquidglass.qmdeve.com',
    tags: ['Android Lib', 'LiquidGlass', 'iOS 26']
  }
]
</script>

<VPTeamMembers size="small" :members />

## Star History

[![Star History](https://starchart.qmdeve.com/QmDeve/QmBlurView.svg?variant=adaptive)](https://starchart.qmdeve.com/QmDeve/QmBlurView)

## 토론

Telegram: <a href="https://t.me/qmdeve" target="_blank">QmDeve</a>

## 라이선스

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

## 다른 프로젝트

<MyProjects :projects="projects" />