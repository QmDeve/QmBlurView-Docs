---
prev:
  text: '使用 BlurButtonView'
  link: './BlurButtonView'
next:
  text: '使用 ProgressiveBlurViewGroup'
  link: './ProgressiveBlurViewGroup'
---

# ProgressiveBlurView

### 使用组件

::: code-group

```xml [在 XML 布局中]
<com.qmdeve.blurview.widget.ProgressiveBlurView
    android:layout_width="match_parent"
    android:layout_height="150dp"
    app:progressiveOverlayColor="#AAFFFFFF"
    app:progressiveDirection="topToBottom"
    app:progressiveBlurRadius="25dp" />
```

```java [在 Java 中]
ProgressiveBlurView progressive = new ProgressiveBlurView(context);
progressive.setGradientDirection(ProgressiveBlurView.DIRECTION_TOP_TO_BOTTOM);
progressive.setBlurRadius(25f);
progressive.setOverlayColor(0xAAFFFFFF);
```

```kotlin [在 Kotlin 中]
val progressive = ProgressiveBlurView(context)
progressive.setGradientDirection(ProgressiveBlurView.DIRECTION_TOP_TO_BOTTOM)
progressive.setBlurRadius(25f)
progressive.setOverlayColor(0xAAFFFFFF.toInt())
```

:::

### 属性说明

| 属性名                        | 类型        | 默认值        | 说明                                                                         |
| ----------------------------- | ----------- | ------------- | ---------------------------------------------------------------------------- |
| `app:progressiveOverlayColor` | `color`     | `#AAFFFFFF`   | 渐变覆盖色。                                                                 |
| `app:progressiveDirection`    | `enum`      | `topToBottom` | 渐变方向。可选：`topToBottom`、`bottomToTop`、`leftToRight`、`rightToLeft`。 |
| `app:progressiveBlurRadius`   | `dimension` | `25dp`        | 渐变模糊使用的基础半径。                                                     |
| `app:progressiveLayers`       | `integer`   | -             | 已在 attrs 中声明，当前实现暂未使用。                                        |

### API 参考

| 方法名                              | 说明                                                                                                                       |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `setGradientDirection(int)`         | 设置方向常量：`DIRECTION_TOP_TO_BOTTOM`、`DIRECTION_BOTTOM_TO_TOP`、`DIRECTION_LEFT_TO_RIGHT`、`DIRECTION_RIGHT_TO_LEFT`。 |
| `setOverlayColor(int)`              | 设置渐变覆盖色。                                                                                                           |
| `setOverlayColorRes(@ColorRes int)` | 通过颜色资源设置渐变覆盖色。                                                                                               |
| `setBlurRadius(float)`              | 设置渐变模糊半径。                                                                                                         |
| `setCornerRadius(float)`            | 在该组件中被重写为固定 `0`（不支持圆角模糊裁切）。                                                                         |
