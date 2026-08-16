---
prev:
  text: '使用 BlurSwitchButtonView'
  link: './BlurSwitchButtonView'
next:
  text: '使用 BlurBottomNavigationView'
  link: './BlurBottomNavigationView'
---

# BlurFloatingButtonView

### 使用组件

::: code-group

```xml [在 XML 布局中]
<com.qmdeve.blurview.widget.BlurFloatingButtonView
    android:id="@+id/blurFloatingButton"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```

```java [在 Java 中]
BlurFloatingButtonView fab = new BlurFloatingButtonView(context);
fab.setPosition(BlurFloatingButtonView.POSITION_RIGHT);
fab.setIcon(R.drawable.ic_add);
fab.setIconTint(0xFF333333);
fab.setButtonSize(55f);
fab.setOnLongPressListener(view -> {
    // 处理长按
});
```

```kotlin [在 Kotlin 中]
val fab = BlurFloatingButtonView(context)
fab.setPosition(BlurFloatingButtonView.POSITION_RIGHT)
fab.setIcon(R.drawable.ic_add)
fab.setIconTint(0xFF333333.toInt())
fab.setButtonSize(55f)
fab.setOnLongPressListener {
    // 处理长按
}
```

:::

### 默认属性

| 属性     | 默认值              |
| -------- | ------------------- |
| 位置     | `POSITION_RIGHT`    |
| 按钮尺寸 | `55dp`              |
| 图标尺寸 | `30dp`              |
| 图标颜色 | `#FF333333`         |
| 圆角     | `12dp`              |
| 模糊半径 | `16dp`              |
| 覆盖色   | 白色，约 72% 透明度 |

### API 参考

| 方法名                                        | 说明                                                    |
| --------------------------------------------- | ------------------------------------------------------- |
| `setPosition(int)`                            | 设置左右停靠位置：`POSITION_LEFT` 或 `POSITION_RIGHT`。 |
| `setIcon(@DrawableRes int)`                   | 通过资源 ID 设置图标。                                  |
| `setIconDrawable(Drawable)`                   | 直接设置图标 Drawable。                                 |
| `setIconTint(int)`                            | 设置图标着色（内部会应用 80% alpha）。                  |
| `setIconSize(float)`                          | 设置图标大小（dp）。                                    |
| `setButtonSize(float)`                        | 设置按钮大小（dp）。                                    |
| `setCornerRadius(float)`                      | 设置圆角并同步更新 Ripple 蒙版。                        |
| `setOverlayColor(int)`                        | 设置覆盖色（内部会限制为 72% alpha）。                  |
| `setOnLongPressListener(OnLongPressListener)` | 设置长按回调。                                          |
| `setOnClickListener(View.OnClickListener)`    | 设置点击回调（继承自 `View`）。                         |
