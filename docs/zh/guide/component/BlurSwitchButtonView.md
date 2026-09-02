---
prev:
  text: '使用 BlurTitlebarView'
  link: './BlurTitlebarView'
next:
  text: '使用 BlurFloatingButtonView'
  link: './BlurFloatingButtonView'
---

# BlurSwitchButtonView

### 使用组件

::: code-group

```xml [在 XML 布局中]
<com.qmdeve.blurview.widget.BlurSwitchButtonView
    android:layout_width="65dp"
    android:layout_height="wrap_content"
    app:baseColor="#0161F2"
    app:useSolidColorMode="false" />
```

```java [在 Java 中]
BlurSwitchButtonView blurSwitch = new BlurSwitchButtonView(context);
blurSwitch.setBaseColor(0xFF0161F2);
blurSwitch.setChecked(true, true);
blurSwitch.setOnCheckedChangeListener(isChecked -> {
    // 处理状态变化
});
```

```kotlin [在 Kotlin 中]
val blurSwitch = BlurSwitchButtonView(context)
blurSwitch.setBaseColor(0xFF0161F2.toInt())
blurSwitch.setChecked(true, true)
blurSwitch.setOnCheckedChangeListener { isChecked ->
    // 处理状态变化
}
```

:::

### 属性说明

| 属性名                  | 类型      | 默认值    | 说明                                   |
| ----------------------- | --------- | --------- | -------------------------------------- |
| `app:baseColor`         | `color`   | `#0161F2` | 基础色，用于计算开关轨道开/关颜色。    |
| `app:useSolidColorMode` | `boolean` | `false`   | 是否启用纯色模式（不使用模糊派生色）。 |
| `app:solidOnColor`      | `color`   | 自动计算  | 纯色模式下的开启颜色。                 |
| `app:solidOffColor`     | `color`   | 自动计算  | 纯色模式下的关闭颜色。                 |

### API 参考

| 方法名                                                | 说明                             |
| ----------------------------------------------------- | -------------------------------- |
| `setOnCheckedChangeListener(OnCheckedChangeListener)` | 监听选中状态变化。               |
| `toggle()`                                            | 切换当前状态（带动画）。         |
| `isChecked()`                                         | 获取当前是否选中。               |
| `setChecked(boolean, boolean)`                        | 设置状态，并可指定是否播放动画。 |
| `setBaseColor(int)`                                   | 设置基础色并重新计算轨道颜色。   |
| `setUseSolidColorMode(boolean)`                       | 开启或关闭纯色模式。             |
| `isUseSolidColorMode()`                               | 获取当前纯色模式状态。           |
| `setSolidColors(int, int)`                            | 设置纯色模式下的开/关颜色。      |
| `getSolidOnColor()`                                   | 获取纯色模式下开启颜色。         |
| `getSolidOffColor()`                                  | 获取纯色模式下关闭颜色。         |

::: warning
大多数场景只需设置 `app:baseColor`，组件会自动计算开/关状态颜色。
:::
