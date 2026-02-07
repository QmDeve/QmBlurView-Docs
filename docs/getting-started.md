---
prev: false
next: 
  text: 'Use BlurView'
  link: '/quick-start/BlurView.md'
---

# Quick Start

## Screenshot
|                                BlurView                                |                              BlurButtonView                              |                                ProgressiveBlurView                                |
|:----------------------------------------------------------------------:|:------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:|
| <img src="https://cloud.qmdeve.com/f/eqsn/BlurView.jpeg" alt="Image" style="border-radius: 8px;" /> | <img src="https://cloud.qmdeve.com/f/YyT3/BlurButton.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/xYug/ProgressiveBlurView.jpeg" alt="Image" style="border-radius: 10px;" /> |

|                                BlurTitleBarView                                |                                BlurSwitchButtonView                                 |                              BlurBottomNavigationView                              |
|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|
| <img src="https://cloud.qmdeve.com/f/Rbhn/BlurTitlebarView.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/3Nfl/BlurSwitchButton_true.jpeg" alt="Image" style="border-radius: 14px;" /> | <img src="https://cloud.qmdeve.com/f/gecr/BlurBottomNavigation.jpeg" alt="Image" style="border-radius: 10px;" /> |

### Project Requirements
|  Min SDK  | Compile SDK |  Java Version  |
|-----------|-------------|----------------|
| `API 21+` | `API 34+`      | `Java 11+` |

## Integration

### Adding Dependencies <Badge type="tip" text="v{{VERSION}}" />

Add the dependency in the module's `build.gradle` file:

::: code-group

```groovy [build.gradle]
dependencies {
   // Core Library (Required)
   implementation '{{GROUP_ID}}:core:{{VERSION}}'

   // Navigation Support (Optional)
   implementation '{{GROUP_ID}}:navigation:{{VERSION}}'

   // Image Loading Transformations (Optional - Glide/Picasso)
   implementation '{{GROUP_ID}}:transform:{{VERSION}}'
}
```

```kotlin [build.gradle.kts]
dependencies {
   // Core Library (Required)
   implementation("{{GROUP_ID}}:core:{{VERSION}}")

   // Navigation Support (Optional)
   implementation("{{GROUP_ID}}:navigation:{{VERSION}}")

   // Image Loading Transformations (Optional - Glide/Picasso)
   implementation("{{GROUP_ID}}:transform:{{VERSION}}")
}
```
:::

<AdUnit />