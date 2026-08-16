---
prev:
  text: 'Use BlurButtonView'
  link: './BlurButtonView'
next:
  text: 'Use ProgressiveBlurViewGroup'
  link: './ProgressiveBlurViewGroup'
---

# ProgressiveBlurView

### Use Component

::: code-group

```xml [In Xml Layout]
<com.qmdeve.blurview.widget.ProgressiveBlurView
    android:layout_width="match_parent"
    android:layout_height="150dp"
    app:progressiveOverlayColor="#AAFFFFFF"
    app:progressiveDirection="topToBottom"
    app:progressiveBlurRadius="25dp" />
```

```java [In Java]
ProgressiveBlurView progressive = new ProgressiveBlurView(context);
progressive.setGradientDirection(ProgressiveBlurView.DIRECTION_TOP_TO_BOTTOM);
progressive.setBlurRadius(25f);
progressive.setOverlayColor(0xAAFFFFFF);
```

```kotlin [In Kotlin]
val progressive = ProgressiveBlurView(context)
progressive.setGradientDirection(ProgressiveBlurView.DIRECTION_TOP_TO_BOTTOM)
progressive.setBlurRadius(25f)
progressive.setOverlayColor(0xAAFFFFFF.toInt())
```

:::

### Attribute Description

| Attribute Name                | Type        | Default Value | Description                                                                             |
| ----------------------------- | ----------- | ------------- | --------------------------------------------------------------------------------------- |
| `app:progressiveOverlayColor` | `color`     | `#AAFFFFFF`   | Overlay gradient color.                                                                 |
| `app:progressiveDirection`    | `enum`      | `topToBottom` | Gradient direction. Values: `topToBottom`, `bottomToTop`, `leftToRight`, `rightToLeft`. |
| `app:progressiveBlurRadius`   | `dimension` | `25dp`        | Base blur radius used by the progressive renderer.                                      |
| `app:progressiveLayers`       | `integer`   | -             | Declared in attrs, currently not consumed by the implementation.                        |

### API Reference

| Method                              | Description                                                                                                                               |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `setGradientDirection(int)`         | Set direction with constants: `DIRECTION_TOP_TO_BOTTOM`, `DIRECTION_BOTTOM_TO_TOP`, `DIRECTION_LEFT_TO_RIGHT`, `DIRECTION_RIGHT_TO_LEFT`. |
| `setOverlayColor(int)`              | Set progressive overlay color.                                                                                                            |
| `setOverlayColorRes(@ColorRes int)` | Set progressive overlay color from a color resource.                                                                                      |
| `setBlurRadius(float)`              | Set progressive blur radius.                                                                                                              |
| `setCornerRadius(float)`            | Overridden to keep corner radius at `0` for this view.                                                                                    |
