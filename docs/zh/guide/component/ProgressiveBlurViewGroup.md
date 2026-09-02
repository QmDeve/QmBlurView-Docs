---
prev:
  text: '使用 ProgressiveBlurView'
  link: './ProgressiveBlurView'
next:
  text: '使用 BlurTitlebarView'
  link: './BlurTitlebarView'
---

# ProgressiveBlurViewGroup

`ProgressiveBlurViewGroup` 是带有方向渐进效果的模糊容器组件，可在整个容器区域内应用渐变强度的模糊遮罩。

### 使用组件

::: code-group

```xml [在 XML 布局中]
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

```java [在 Java 中]
ProgressiveBlurViewGroup group = new ProgressiveBlurViewGroup(context);
group.setGradientDirection(ProgressiveBlurViewGroup.DIRECTION_TOP_TO_BOTTOM);
group.setBlurRadius(25f);
group.setOverlayColor(0xAAFFFFFF);
```

```kotlin [在 Kotlin 中]
val group = ProgressiveBlurViewGroup(context)
group.setGradientDirection(ProgressiveBlurViewGroup.DIRECTION_TOP_TO_BOTTOM)
group.setBlurRadius(25f)
group.setOverlayColor(0xAAFFFFFF.toInt())
```

:::

### 属性说明

| 属性名                        | 类型        | 默认值        | 说明                                                                         |
| ----------------------------- | ----------- | ------------- | ---------------------------------------------------------------------------- |
| `app:progressiveOverlayColor` | `color`     | `#AAFFFFFF`   | 渐变覆盖色。                                                                 |
| `app:progressiveDirection`    | `enum`      | `topToBottom` | 渐变方向。可选：`topToBottom`、`bottomToTop`、`leftToRight`、`rightToLeft`。 |
| `app:progressiveBlurRadius`   | `dimension` | `25dp`        | 渐进模糊使用的基础半径。                                                     |
| `app:progressiveLayers`       | `integer`   | -             | 已在 attrs 中声明，当前实现暂未使用。                                        |

### API 参考

| 方法名                              | 说明                         |
| ----------------------------------- | ---------------------------- |
| `setGradientDirection(int)`         | 设置渐变方向。               |
| `setOverlayColor(int)`              | 设置渐变覆盖色。             |
| `setOverlayColorRes(@ColorRes int)` | 通过颜色资源设置覆盖色。     |
| `setBlurRadius(float)`              | 设置渐进模糊半径。           |
| `setCornerRadius(float)`            | 在该组件中被重写为固定 `0`。 |
| `setBlurRounds(int)`                | 继承：设置原生模糊迭代次数。 |
| `getBlurRounds()`                   | 继承：获取原生模糊迭代次数。 |
| `setDownsampleFactor(float)`        | 继承：设置下采样系数。       |
| `setTopLeftCornerRadius(float)`     | 继承：圆角控制接口。         |
| `setTopRightCornerRadius(float)`    | 继承：圆角控制接口。         |
| `setBottomLeftCornerRadius(float)`  | 继承：圆角控制接口。         |
| `setBottomRightCornerRadius(float)` | 继承：圆角控制接口。         |
| `getBlurredBitmap()`                | 继承：获取最近一次模糊位图。 |
| `release()`                         | 继承：释放模糊资源。         |
