---
prev: 
  text: '概览'
  link: './overview'
next: 
  text: '使用 BlurView'
  link: './component/BlurView'
---

# 快速开始

### 项目要求
|  Min SDK  | Compile SDK |  Java Version  |
|-----------|-------------|----------------|
| `API 21+` | `API 37+`      | `Java 11+` |

## 集成

### 添加依赖项 <Badge type="tip" text="v1.3.0" />
在模块的 `build.gradle` 文件中添加依赖项：
::: code-group
```groovy [build.gradle]
dependencies {
   // 核心依赖（必须）
   implementation 'com.qmdeve.blurview:core:1.3.0'

   // 导航依赖（可选）
   implementation 'com.qmdeve.blurview:navigation:1.3.0'

   // 图像加载 Transform（可选）
   implementation 'com.qmdeve.blurview:transform:1.3.0'
}
```

```kotlin [build.gradle.kts]
dependencies {
   // 核心依赖（必须）
   implementation("com.qmdeve.blurview:core:1.3.0")

   // 导航依赖（可选）
   implementation("com.qmdeve.blurview:navigation:1.3.0")

   // 图像加载 Transform（可选）
   implementation("com.qmdeve.blurview:transform:1.3.0")
}
```
:::