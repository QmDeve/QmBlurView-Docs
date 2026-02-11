---
prev:
  text: 'Getting Started'
  link: '../getting-started'
next: 
  text: 'Use BlurButtonView'
  link: './BlurButtonView'
---

# BlurView

### Use Component
::: code-group

```xml [In Xml Layout]
<com.qmdeve.blurview.widget.BlurView
    android:id="@+id/blurView"
    android:layout_width="match_parent"
    android:layout_height="100dp"
    app:blurRadius="20dp"
    app:overlayColor="#80FFFFFF" 
    app:cornerRadius="24dp"/>
```
```java [In Java]
// Create BlurView instance
BlurView blurView = new BlurView(context);

// Set layout parameters
FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(
    FrameLayout.LayoutParams.MATCH_PARENT,
    100
);
blurView.setLayoutParams(params);

// Set attributes
blurView.setBlurRadius(20f);
blurView.setOverlayColor(0x66FFFFFF);
blurView.setCornerRadius(24f);

// Add BlurView to parent layout
parentLayout.addView(blurView);
```

```kotlin [In Kotlin]
// Create BlurView instance
val blurView = BlurView(context)

// Set layout parameters
val params = FrameLayout.LayoutParams(
    FrameLayout.LayoutParams.MATCH_PARENT,
    100
)
blurView.layoutParams = params

// Set attributes
blurView.setBlurRadius(20f)
blurView.setOverlayColor(0x66FFFFFF)
blurView.setCornerRadius(24f)

// Add BlurView to parent layout
parentLayout.addView(blurView)
```
:::

#### Attribute Description

| Attribute Name         | Type | Default value | Explanation |
|------------------------|------|--------|-------------|
| `app:blurRadius`       | `dimension` | `10` | Blur radius |
| `app:overlayColor`     | `color` | `#AAFFFFFF` | Overlay color |
| `app:cornerRadius`     | `dimension` | `0` | Corner radius of the view |
| `app:setDownsampleFactor` | `float` | `0` | Downsample factor, higher value means better performance but worse blur effect |

### API Reference
| Method Name               | Description       |
|--------------------------|------------------|
| `setBlurRadius(float)`    | Set blur radius   |
| `setOverlayColor(int)`    | Set overlay color |
| `setCornerRadius(float)`  | Set corner radius |
| `setDownsampleFactor(float)` | Set downsample factor |

<AdUnit />