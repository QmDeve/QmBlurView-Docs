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