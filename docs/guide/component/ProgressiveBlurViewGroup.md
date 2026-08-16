---
prev:
  text: 'Use ProgressiveBlurView'
  link: './ProgressiveBlurView'
next:
  text: 'Use BlurTitlebarView'
  link: './BlurTitlebarView'
---

# ProgressiveBlurViewGroup

`ProgressiveBlurViewGroup` is a blur-enabled container that applies a directional progressive blur mask across the group area.

### Use Component

::: code-group

```xml [In Xml Layout]
<com.qmdeve.blurview.widget.ProgressiveBlurViewGroup
    android:id="@+id/progressiveContainer"
    android:layout_width="match_parent"
    android:layout_height="240dp"
    app:progressiveDirection="topToBottom"
    app:progressiveOverlayColor="#AAFFFFFF"
    app:progressiveBlurRadius="25dp">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:text="Progressive Blur Group" />

</com.qmdeve.blurview.widget.ProgressiveBlurViewGroup>
```

```java [In Java]
ProgressiveBlurViewGroup group = new ProgressiveBlurViewGroup(context);
group.setGradientDirection(ProgressiveBlurViewGroup.DIRECTION_TOP_TO_BOTTOM);
group.setBlurRadius(25f);
group.setOverlayColor(0xAAFFFFFF);
```

```kotlin [In Kotlin]
val group = ProgressiveBlurViewGroup(context)
group.setGradientDirection(ProgressiveBlurViewGroup.DIRECTION_TOP_TO_BOTTOM)
group.setBlurRadius(25f)
group.setOverlayColor(0xAAFFFFFF.toInt())
```

:::

### Attribute Description

| Attribute Name                | Type        | Default Value | Description                                                                             |
| ----------------------------- | ----------- | ------------- | --------------------------------------------------------------------------------------- |
| `app:progressiveOverlayColor` | `color`     | `#AAFFFFFF`   | Overlay gradient color.                                                                 |
| `app:progressiveDirection`    | `enum`      | `topToBottom` | Gradient direction. Values: `topToBottom`, `bottomToTop`, `leftToRight`, `rightToLeft`. |
| `app:progressiveBlurRadius`   | `dimension` | `25dp`        | Base blur radius for progressive blur rendering.                                        |
| `app:progressiveLayers`       | `integer`   | -             | Declared in attrs, currently not consumed by this implementation.                       |

### API Reference

| Method Name                         | Description                              |
| ----------------------------------- | ---------------------------------------- |
| `setGradientDirection(int)`         | Set gradient direction.                  |
| `setOverlayColor(int)`              | Set progressive overlay color.           |
| `setOverlayColorRes(@ColorRes int)` | Set overlay color from resource.         |
| `setBlurRadius(float)`              | Set progressive blur radius.             |
| `setCornerRadius(float)`            | Overridden to keep corner radius at `0`. |
| `setBlurRounds(int)`                | Inherited: set native blur iterations.   |
| `getBlurRounds()`                   | Inherited: get native blur iterations.   |
| `setDownsampleFactor(float)`        | Inherited: set downsample factor.        |
| `setTopLeftCornerRadius(float)`     | Inherited API for corner control.        |
| `setTopRightCornerRadius(float)`    | Inherited API for corner control.        |
| `setBottomLeftCornerRadius(float)`  | Inherited API for corner control.        |
| `setBottomRightCornerRadius(float)` | Inherited API for corner control.        |
| `getBlurredBitmap()`                | Inherited: get latest blurred bitmap.    |
| `release()`                         | Inherited: release blur resources.       |
