---
layout: home

hero:
  name: "QmBlurView"
  text: "Bibliothèque de composants blur pour Android"
  image:
    src: /icon.jpg
    alt: QmBlurView Logo
  actions:
    - theme: mimicry-brand
      text: Démarrage rapide
      link: ./guide/overview
    - theme: mimicry
      text: View on GitHub
      link: https://github.com/QmDeve/QmBlurView
    - theme: mimicry
      text: Télécharger la démo
      link: https://github.com/QmDeve/QmBlurView/blob/master/app/release/app-release.apk?raw=true

features:
  - title: Haute performance
    details: Algorithme de flou natif implémenté en C/C++ pour garantir une vitesse et une fluidité maximales.
  - title: Composants riches
    details: Composants incluant plusieurs types d'effets de flou.
  - title: Support de chargement d'images
    details: Transformations intégrées pour Glide et Picasso pour ajouter facilement des effets de flou aux images.
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/QmDeve.png',
    name: 'Donny Yale',
    title: 'Créateur',
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
    title: 'Contributeur',
    links: [
      { icon: 'github', link: 'https://github.com/sbaiahmed1' }
    ]
  }
]

const projects = [
  {
    title: 'AndroidLiquidGlassView',
    description: 'Imitation Android de leffet verre liquide iOS 26, la bibliothèque AndroidLiquidGlassView a un effet de réfraction et de dispersion réel',
    link: 'https://liquidglass.qmdeve.com',
    tags: ['Android Lib', 'LiquidGlass', 'iOS 26']
  }
]
</script>

<VPTeamMembers size="small" :members />

## Histoire des étoiles

[![Star History](https://starchart.qmdeve.com/QmDeve/QmBlurView.svg?variant=adaptive)](https://starchart.qmdeve.com/QmDeve/QmBlurView)

## Discussion

Telegram: <a href="https://t.me/qmdeve" target="_blank">QmDeve</a>

## Licence

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

## Mes autres projets

<MyProjects :projects="projects" />