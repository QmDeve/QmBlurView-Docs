---
prev:
  text: 'Getting Started'
  link: '../getting-started'
next:
  text: 'Use BlurViewGroup'
  link: './BlurViewGroup'
---

# BlurView

### Use Component

::: code-group

```xml [In Xml Layout]
<com.qmdeve.blurview.widget.BlurView
    android:id="@+id/blurView"
    android:layout_width="match_parent"
    android:layout_height="100dp"
    app:blurRadius="25dp"
    app:overlayColor="#AAFFFFFF"
    app:cornerRadius="16dp"
    app:topLeftCornerRadius="24dp"
    app:topRightCornerRadius="24dp"
    app:bottomLeftCornerRadius="8dp"
    app:bottomRightCornerRadius="8dp"
    app:downsampleFactor="2.5" />
```

```java [In Java]
BlurView blurView = new BlurView(context, null);
blurView.setBlurRadius(25f);
blurView.setOverlayColor(0xAAFFFFFF);
blurView.setCornerRadius(16f);
blurView.setTopLeftCornerRadius(24f);
blurView.setDownsampleFactor(2.5f);
```

```kotlin [In Kotlin]
val blurView = BlurView(context, null)
blurView.setBlurRadius(25f)
blurView.setOverlayColor(0xAAFFFFFF.toInt())
blurView.setCornerRadius(16f)
blurView.setTopLeftCornerRadius(24f)
blurView.setDownsampleFactor(2.5f)
```

:::

### Attribute Description

| Attribute Name                | Type        | Default Value  | Description                                                            |
| ----------------------------- | ----------- | -------------- | ---------------------------------------------------------------------- |
| `app:blurRadius`              | `dimension` | `25dp`         | Blur radius.                                                           |
| `app:overlayColor`            | `color`     | `#AAFFFFFF`    | Overlay color drawn over the blurred bitmap.                           |
| `app:cornerRadius`            | `dimension` | `0dp`          | Global corner radius for all corners.                                  |
| `app:topLeftCornerRadius`     | `dimension` | `cornerRadius` | Top-left corner radius override.                                       |
| `app:topRightCornerRadius`    | `dimension` | `cornerRadius` | Top-right corner radius override.                                      |
| `app:bottomLeftCornerRadius`  | `dimension` | `cornerRadius` | Bottom-left corner radius override.                                    |
| `app:bottomRightCornerRadius` | `dimension` | `cornerRadius` | Bottom-right corner radius override.                                   |
| `app:downsampleFactor`        | `float`     | `0`            | Downsample factor. `0` enables automatic downsampling for performance. |

### API Reference

| Method Name                         | Description                                                  |
| ----------------------------------- | ------------------------------------------------------------ |
| `setBlurRadius(float)`              | Set blur radius.                                             |
| `setBlurRounds(int)`                | Set native blur iterations (stronger blur with more rounds). |
| `getBlurRounds()`                   | Get current native blur iterations.                          |
| `setDownsampleFactor(float)`        | Set downsample factor.                                       |
| `setOverlayColor(int)`              | Set overlay color.                                           |
| `setCornerRadius(float)`            | Set all corner radii at once.                                |
| `setTopLeftCornerRadius(float)`     | Set top-left corner radius.                                  |
| `setTopRightCornerRadius(float)`    | Set top-right corner radius.                                 |
| `setBottomLeftCornerRadius(float)`  | Set bottom-left corner radius.                               |
| `setBottomRightCornerRadius(float)` | Set bottom-right corner radius.                              |
| `getTopLeftCornerRadius()`          | Get top-left corner radius.                                  |
| `getTopRightCornerRadius()`         | Get top-right corner radius.                                 |
| `getBottomLeftCornerRadius()`       | Get bottom-left corner radius.                               |
| `getBottomRightCornerRadius()`      | Get bottom-right corner radius.                              |
| `getCornerRadius()`                 | Get global corner radius value.                              |
| `getOverlayColor()`                 | Get overlay color.                                           |
| `getBlurredBitmap()`                | Get the most recently blurred bitmap.                        |
| `release()`                         | Release blur resources when no longer needed.                |
