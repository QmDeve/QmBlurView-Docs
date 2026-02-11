---
prev: 
  text: 'Use BlurButtonView'
  link: './BlurButtonView'
next: 
  text: 'Use BlurTitlebarView'
  link: './BlurTitlebarView'
---

# ProgressiveBlurView
### Use Component
::: code-group
```xml [In Xml Layout]
<com.qmdeve.blurview.widget.ProgressiveBlurView
    android:layout_width="match_parent"
    android:layout_height="150dp"
    app:blurRadius="20dp"
    app:progressiveDirection="topToBottom"
    app:progressiveLayers="5"
    app:progressiveOverlayColor="#80FFFFFF" />
```

```java [In Java]
// Create ProgressiveBlurView instance
ProgressiveBlurView progressiveBlurView = new ProgressiveBlurView(context);

// Set layout parameters
FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(
    FrameLayout.LayoutParams.MATCH_PARENT,
    150
);
progressiveBlurView.setLayoutParams(params);

// Set attributes
progressiveBlurView.setBlurRadius(20f);
progressiveBlurView.setGradientDirection(ProgressiveBlurView.DIRECTION_TOP_TO_BOTTOM);
progressiveBlurView.setOverlayColor(0x66FFFFFF);

// Add ProgressiveBlurView to parent layout
parentLayout.addView(progressiveBlurView);
```

```kotlin [In Kotlin]
// Create ProgressiveBlurView instance
val progressiveBlurView = ProgressiveBlurView(context)

// Set layout parameters
val params = FrameLayout.LayoutParams(
    FrameLayout.LayoutParams.MATCH_PARENT,
    150
)
progressiveBlurView.layoutParams = params

// Set attributes
progressiveBlurView.setBlurRadius(20f)
progressiveBlurView.setGradientDirection(ProgressiveBlurView.DIRECTION_TOP_TO_BOTTOM)
progressiveBlurView.setOverlayColor(0x66FFFFFF)

// Add ProgressiveBlurView to parent layout
parentLayout.addView(progressiveBlurView)
```
:::

### Attribute Description
| Attribute Name                         | Type     |
|------------------------------|------------|
| `app:progressiveOverlayColor` | `color`    |
| `app:progressiveDirection`    | `enum`     |
| `app:progressiveBlurRadius`   | `dimension`|

---