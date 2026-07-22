---
prev: 
  text: 'Overview'
  link: './overview'
next: 
  text: 'Use BlurView'
  link: './component/BlurView'
---

# Getting Started

### Project Requirements
|  Min SDK  | Compile SDK |  Java Version  |
|-----------|-------------|----------------|
| `API 21+` | `API 37+`      | `Java 11+` |

## Integration

### Adding Dependencies <Badge type="tip" text="v1.3.0" />

Add the dependency in the module's `build.gradle` file:

::: code-group

```groovy [build.gradle]
dependencies {
   // Core Library (Required)
   implementation 'com.qmdeve.blurview:core:1.3.0'

   // Navigation Support (Optional)
   implementation 'com.qmdeve.blurview:navigation:1.3.0'

   // Image Loading Transformations (Optional - Glide/Picasso)
   implementation 'com.qmdeve.blurview:transform:1.3.0'
}
```

```kotlin [build.gradle.kts]
dependencies {
   // Core Library (Required)
   implementation("com.qmdeve.blurview:core:1.3.0")

   // Navigation Support (Optional)
   implementation("com.qmdeve.blurview:navigation:1.3.0")

   // Image Loading Transformations (Optional - Glide/Picasso)
   implementation("com.qmdeve.blurview:transform:1.3.0")
}
```
:::