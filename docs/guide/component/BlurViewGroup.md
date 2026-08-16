---
prev:
  text: 'Use BlurView'
  link: './BlurView'
next:
  text: 'Use BlurButtonView'
  link: './BlurButtonView'
---

# BlurViewGroup

`BlurViewGroup` is a blur-enabled container component. It applies real-time blur behind its own content and then renders child views on top.

### Use Component

::: code-group

```xml [In Xml Layout]
<com.qmdeve.blurview.widget.BlurViewGroup
    android:id="@+id/blurContainer"
    android:layout_width="match_parent"
    android:layout_height="220dp"
    app:blurRadius="10dp"
    app:overlayColor="#AAFFFFFF"
    app:cornerRadius="16dp"
    app:downsampleFactor="2.5">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:text="Blur Container"
        android:textStyle="bold" />

</com.qmdeve.blurview.widget.BlurViewGroup>
```

```java [In Java]
BlurViewGroup blurGroup = new BlurViewGroup(context, null);
blurGroup.setBlurRadius(10f);
blurGroup.setOverlayColor(0xAAFFFFFF);
blurGroup.setCornerRadius(16f);
blurGroup.setDownsampleFactor(2.5f);

TextView child = new TextView(context);
child.setText("Blur Container");
BlurViewGroup.LayoutParams params = new BlurViewGroup.LayoutParams(
    BlurViewGroup.LayoutParams.WRAP_CONTENT,
    BlurViewGroup.LayoutParams.WRAP_CONTENT
);
params.gravity = Gravity.CENTER;
blurGroup.addView(child, params);
```

```kotlin [In Kotlin]
val blurGroup = BlurViewGroup(context, null)
blurGroup.setBlurRadius(10f)
blurGroup.setOverlayColor(0xAAFFFFFF.toInt())
blurGroup.setCornerRadius(16f)
blurGroup.setDownsampleFactor(2.5f)

val child = TextView(context).apply {
    text = "Blur Container"
}
val params = BlurViewGroup.LayoutParams(
    BlurViewGroup.LayoutParams.WRAP_CONTENT,
    BlurViewGroup.LayoutParams.WRAP_CONTENT
).apply {
    gravity = Gravity.CENTER
}
blurGroup.addView(child, params)
```

:::

### Attribute Description

| Attribute Name                   | Type        | Default Value  | Description                                            |
| -------------------------------- | ----------- | -------------- | ------------------------------------------------------ |
| `app:blurRadius`                 | `dimension` | `10dp`         | Blur radius used by the container renderer.            |
| `app:overlayColor`               | `color`     | `#AAFFFFFF`    | Overlay color drawn over the blurred background.       |
| `app:cornerRadius`               | `dimension` | `0dp`          | Global corner radius.                                  |
| `app:topLeftCornerRadius`        | `dimension` | `cornerRadius` | Top-left corner radius override.                       |
| `app:topRightCornerRadius`       | `dimension` | `cornerRadius` | Top-right corner radius override.                      |
| `app:bottomLeftCornerRadius`     | `dimension` | `cornerRadius` | Bottom-left corner radius override.                    |
| `app:bottomRightCornerRadius`    | `dimension` | `cornerRadius` | Bottom-right corner radius override.                   |
| `app:downsampleFactor`           | `float`     | `0`            | Downsample factor. `0` enables automatic downsampling. |
| `android:layout_gravity` (child) | `enum`      | `top/start`    | Child gravity used by `BlurViewGroup.LayoutParams`.    |

### API Reference

| Method Name                         | Description                     |
| ----------------------------------- | ------------------------------- |
| `setBlurRadius(float)`              | Set blur radius.                |
| `setBlurRounds(int)`                | Set native blur iterations.     |
| `getBlurRounds()`                   | Get native blur iterations.     |
| `setDownsampleFactor(float)`        | Set downsample factor.          |
| `setOverlayColor(int)`              | Set overlay color.              |
| `setCornerRadius(float)`            | Set all corner radii at once.   |
| `setTopLeftCornerRadius(float)`     | Set top-left corner radius.     |
| `setTopRightCornerRadius(float)`    | Set top-right corner radius.    |
| `setBottomLeftCornerRadius(float)`  | Set bottom-left corner radius.  |
| `setBottomRightCornerRadius(float)` | Set bottom-right corner radius. |
| `getTopLeftCornerRadius()`          | Get top-left corner radius.     |
| `getTopRightCornerRadius()`         | Get top-right corner radius.    |
| `getBottomLeftCornerRadius()`       | Get bottom-left corner radius.  |
| `getBottomRightCornerRadius()`      | Get bottom-right corner radius. |
| `getOverlayColor()`                 | Get overlay color.              |
| `getBlurredBitmap()`                | Get the latest blurred bitmap.  |
| `release()`                         | Release blur resources.         |
