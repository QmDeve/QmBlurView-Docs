---
prev:
  text: '使用 BlurView'
  link: './BlurView'
next:
  text: '使用 BlurButtonView'
  link: './BlurButtonView'
---

# BlurViewGroup

`BlurViewGroup` 是一个支持模糊渲染的容器组件。它会先对容器区域进行实时模糊，再在其上绘制子视图。

### 使用组件

::: code-group

```xml [在 XML 布局中]
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

```java [在 Java 中]
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

```kotlin [在 Kotlin 中]
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

### 属性说明

| 属性名                           | 类型        | 默认值         | 说明                                               |
| -------------------------------- | ----------- | -------------- | -------------------------------------------------- |
| `app:blurRadius`                 | `dimension` | `10dp`         | 容器模糊半径。                                     |
| `app:overlayColor`               | `color`     | `#AAFFFFFF`    | 绘制在模糊背景上的覆盖色。                         |
| `app:cornerRadius`               | `dimension` | `0dp`          | 全局圆角半径。                                     |
| `app:topLeftCornerRadius`        | `dimension` | `cornerRadius` | 左上角圆角覆盖值。                                 |
| `app:topRightCornerRadius`       | `dimension` | `cornerRadius` | 右上角圆角覆盖值。                                 |
| `app:bottomLeftCornerRadius`     | `dimension` | `cornerRadius` | 左下角圆角覆盖值。                                 |
| `app:bottomRightCornerRadius`    | `dimension` | `cornerRadius` | 右下角圆角覆盖值。                                 |
| `app:downsampleFactor`           | `float`     | `0`            | 下采样系数。`0` 表示自动下采样。                   |
| `android:layout_gravity`（子项） | `enum`      | `top/start`    | 子项在 `BlurViewGroup.LayoutParams` 中的对齐方式。 |

### API 参考

| 方法名                              | 说明                   |
| ----------------------------------- | ---------------------- |
| `setBlurRadius(float)`              | 设置模糊半径。         |
| `setBlurRounds(int)`                | 设置原生模糊迭代次数。 |
| `getBlurRounds()`                   | 获取原生模糊迭代次数。 |
| `setDownsampleFactor(float)`        | 设置下采样系数。       |
| `setOverlayColor(int)`              | 设置覆盖色。           |
| `setCornerRadius(float)`            | 一次性设置四个角圆角。 |
| `setTopLeftCornerRadius(float)`     | 设置左上角圆角。       |
| `setTopRightCornerRadius(float)`    | 设置右上角圆角。       |
| `setBottomLeftCornerRadius(float)`  | 设置左下角圆角。       |
| `setBottomRightCornerRadius(float)` | 设置右下角圆角。       |
| `getTopLeftCornerRadius()`          | 获取左上角圆角。       |
| `getTopRightCornerRadius()`         | 获取右上角圆角。       |
| `getBottomLeftCornerRadius()`       | 获取左下角圆角。       |
| `getBottomRightCornerRadius()`      | 获取右下角圆角。       |
| `getOverlayColor()`                 | 获取覆盖色。           |
| `getBlurredBitmap()`                | 获取最近一次模糊位图。 |
| `release()`                         | 释放模糊资源。         |
