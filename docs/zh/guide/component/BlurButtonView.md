---
prev:
  text: '使用 BlurViewGroup'
  link: './BlurViewGroup'
next:
  text: '使用 ProgressiveBlurView'
  link: './ProgressiveBlurView'
---

# BlurButtonView

### 使用组件

::: code-group

```xml [在 XML 布局中]
<com.qmdeve.blurview.widget.BlurButtonView
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Button Test"
    android:textSize="16sp"
    android:textColor="#111111"
    android:icon="?android:attr/actionModeWebSearchDrawable"
    android:gravity="center"
    app:blurRadius="20dp"
    app:overlayColor="#AAFFFFFF"
    app:buttonCornerRadius="12dp"
    app:buttonTextColorPressed="#111111"
    app:buttonTextColorDisabled="#80111111"
    app:buttonTextBold="true"
    app:buttonIconSize="24dp"
    app:buttonIconPadding="8dp"
    app:buttonIconTint="#111111" />
```

```java [在 Java 中]
BlurButtonView button = new BlurButtonView(context);
button.setText("Button Text");
button.setButtonCornerRadius(12f);
button.setTextSize(16f);
button.setTextColor(0xFF111111);
button.setIconResource(R.drawable.ic_search);
button.setIconSize(24);
button.setIconPadding(8);
```

```kotlin [在 Kotlin 中]
val button = BlurButtonView(context)
button.setText("Button Text")
button.setButtonCornerRadius(12f)
button.setTextSize(16f)
button.setTextColor(0xFF111111.toInt())
button.setIconResource(R.drawable.ic_search)
button.setIconSize(24)
button.setIconPadding(8)
```

:::

### 属性说明

| 属性名                        | 类型        | 默认值                    | 说明                           |
| ----------------------------- | ----------- | ------------------------- | ------------------------------ |
| `android:text`                | `string`    | `null`                    | 按钮文本。                     |
| `android:textSize`            | `dimension` | `16sp`                    | 文本大小。                     |
| `android:textColor`           | `color`     | `#FF000000`               | 文本颜色。                     |
| `android:icon`                | `reference` | `null`                    | 图标资源。                     |
| `android:gravity`             | `integer`   | `center`                  | 内容对齐方式。                 |
| `app:buttonCornerRadius`      | `dimension` | `0dp`                     | 按钮圆角半径。                 |
| `app:buttonTextColorPressed`  | `color`     | `android:textColor`       | 按下态文本颜色。               |
| `app:buttonTextColorDisabled` | `color`     | `textColor 的 50% 透明度` | 禁用态文本颜色。               |
| `app:buttonTextBold`          | `boolean`   | `true`                    | 文本是否加粗。                 |
| `app:buttonIconSize`          | `dimension` | `24dp`                    | 图标大小。                     |
| `app:buttonIconPadding`       | `dimension` | `8dp`                     | 图标与文本间距。               |
| `app:buttonIconTint`          | `color`     | `null`                    | 图标着色（ColorStateList）。   |
| `app:blurRadius`              | `dimension` | `25dp`                    | 继承自 `BlurView` 的模糊半径。 |
| `app:overlayColor`            | `color`     | `#AAFFFFFF`               | 继承自 `BlurView` 的覆盖色。   |

::: info
`styleable` 中声明了 `app:buttonBlurRadius` 和 `app:buttonOverlayColor`，但当前实现实际读取的是继承属性 `app:blurRadius` 与 `app:overlayColor`。
:::

### API 参考

| 方法名                                                  | 说明                               |
| ------------------------------------------------------- | ---------------------------------- |
| `setText(CharSequence)` / `getText()`                   | 设置或获取按钮文本。               |
| `setButtonCornerRadius(float)`                          | 设置按钮圆角。                     |
| `setTextSize(float)`                                    | 设置文本大小（sp）。               |
| `setTextColor(int)`                                     | 设置普通态文本颜色。               |
| `setTextColorPressed(int)`                              | 设置按下态文本颜色。               |
| `setTextBold(boolean)`                                  | 设置文本加粗状态。                 |
| `setIcon(Drawable)` / `setIconResource(int)`            | 设置图标。                         |
| `setIconSize(int)`                                      | 设置图标大小（dp）。               |
| `setIconPadding(int)`                                   | 设置图标间距（dp）。               |
| `setIconTint(ColorStateList)` / `setIconTintColor(int)` | 设置图标着色。                     |
| `setGravity(int)`                                       | 设置内容对齐方式。                 |
| `setOnClickListener(View.OnClickListener)`              | 设置点击回调。                     |
| `setBlurRadius(float)`                                  | 继承自 `BlurView` 的模糊半径接口。 |
| `setOverlayColor(int)`                                  | 继承自 `BlurView` 的覆盖色接口。   |
