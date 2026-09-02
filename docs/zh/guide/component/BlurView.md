---
prev:
  text: '快速开始'
  link: '../getting-started'
next:
  text: '使用 BlurViewGroup'
  link: './BlurViewGroup'
---

# BlurView

### 使用组件

::: code-group

```xml [在 XML 布局中]
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

```java [在 Java 中]
BlurView blurView = new BlurView(context, null);
blurView.setBlurRadius(25f);
blurView.setOverlayColor(0xAAFFFFFF);
blurView.setCornerRadius(16f);
blurView.setTopLeftCornerRadius(24f);
blurView.setDownsampleFactor(2.5f);
```

```kotlin [在 Kotlin 中]
val blurView = BlurView(context, null)
blurView.setBlurRadius(25f)
blurView.setOverlayColor(0xAAFFFFFF.toInt())
blurView.setCornerRadius(16f)
blurView.setTopLeftCornerRadius(24f)
blurView.setDownsampleFactor(2.5f)
```

:::

### 属性说明

| 属性名                        | 类型        | 默认值         | 说明                                       |
| ----------------------------- | ----------- | -------------- | ------------------------------------------ |
| `app:blurRadius`              | `dimension` | `25dp`         | 模糊半径。                                 |
| `app:overlayColor`            | `color`     | `#AAFFFFFF`    | 绘制在模糊结果上的覆盖色。                 |
| `app:cornerRadius`            | `dimension` | `0dp`          | 全局圆角半径。                             |
| `app:topLeftCornerRadius`     | `dimension` | `cornerRadius` | 左上角圆角覆盖值。                         |
| `app:topRightCornerRadius`    | `dimension` | `cornerRadius` | 右上角圆角覆盖值。                         |
| `app:bottomLeftCornerRadius`  | `dimension` | `cornerRadius` | 左下角圆角覆盖值。                         |
| `app:bottomRightCornerRadius` | `dimension` | `cornerRadius` | 右下角圆角覆盖值。                         |
| `app:downsampleFactor`        | `float`     | `0`            | 下采样系数。`0` 表示自动下采样以平衡性能。 |

### API 参考

| 方法名                              | 说明                                       |
| ----------------------------------- | ------------------------------------------ |
| `setBlurRadius(float)`              | 设置模糊半径。                             |
| `setBlurRounds(int)`                | 设置原生模糊迭代次数（次数越高模糊越强）。 |
| `getBlurRounds()`                   | 获取当前原生模糊迭代次数。                 |
| `setDownsampleFactor(float)`        | 设置下采样系数。                           |
| `setOverlayColor(int)`              | 设置覆盖色。                               |
| `setCornerRadius(float)`            | 一次性设置四个角的圆角。                   |
| `setTopLeftCornerRadius(float)`     | 设置左上角圆角。                           |
| `setTopRightCornerRadius(float)`    | 设置右上角圆角。                           |
| `setBottomLeftCornerRadius(float)`  | 设置左下角圆角。                           |
| `setBottomRightCornerRadius(float)` | 设置右下角圆角。                           |
| `getTopLeftCornerRadius()`          | 获取左上角圆角。                           |
| `getTopRightCornerRadius()`         | 获取右上角圆角。                           |
| `getBottomLeftCornerRadius()`       | 获取左下角圆角。                           |
| `getBottomRightCornerRadius()`      | 获取右下角圆角。                           |
| `getCornerRadius()`                 | 获取全局圆角值。                           |
| `getOverlayColor()`                 | 获取覆盖色。                               |
| `getBlurredBitmap()`                | 获取最近一次模糊结果位图。                 |
| `release()`                         | 释放模糊相关资源。                         |
