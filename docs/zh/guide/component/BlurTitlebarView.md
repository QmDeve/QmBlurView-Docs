---
prev:
  text: '使用 ProgressiveBlurViewGroup'
  link: './ProgressiveBlurViewGroup'
next:
  text: '使用 BlurSwitchButtonView'
  link: './BlurSwitchButtonView'
---

# BlurTitlebarView

### 使用组件

::: code-group

```xml [在 XML 布局中]
<com.qmdeve.blurview.widget.BlurTitlebarView
    android:id="@+id/blurTitlebar"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:blurRadius="25dp"
    app:overlayColor="#D1FFFFFF"
    app:titleText="Title"
    app:subtitleText="Subtitle"
    app:showBack="true"
    app:menuText="Edit"
    app:centerTitle="false" />
```

```java [在 Java 中]
BlurTitlebarView titlebar = new BlurTitlebarView(context);
titlebar.setTitle("Title");
titlebar.setSubtitle("Subtitle");
titlebar.setShowBack(true);
titlebar.setMenuText("Edit");
titlebar.setCenterTitle(true);
```

```kotlin [在 Kotlin 中]
val titlebar = BlurTitlebarView(context)
titlebar.setTitle("Title")
titlebar.setSubtitle("Subtitle")
titlebar.setShowBack(true)
titlebar.setMenuText("Edit")
titlebar.setCenterTitle(true)
```

:::

### 属性说明

| 属性名                  | 类型        | 默认值        | 说明                                        |
| ----------------------- | ----------- | ------------- | ------------------------------------------- |
| `app:titleText`         | `string`    | `null`        | 标题文本。                                  |
| `app:subtitleText`      | `string`    | `null`        | 副标题文本。                                |
| `app:titleTextColor`    | `color`     | `transparent` | 标题颜色。透明时会根据 overlay 自动计算。   |
| `app:subtitleTextColor` | `color`     | `transparent` | 副标题颜色。透明时会根据 overlay 自动计算。 |
| `app:showBack`          | `boolean`   | `false`       | 是否显示返回区域/图标。                     |
| `app:backIcon`          | `reference` | `null`        | 返回图标资源。                              |
| `app:backIconTint`      | `color`     | `transparent` | 返回图标着色。透明时自动计算。              |
| `app:menuText`          | `string`    | `null`        | 右侧菜单文本。                              |
| `app:menuTextColor`     | `color`     | `transparent` | 菜单文本颜色。透明时自动计算。              |
| `app:menuIcon`          | `reference` | `null`        | 右侧菜单图标资源。                          |
| `app:menuIconTint`      | `color`     | `transparent` | 菜单图标着色。透明时自动计算。              |
| `app:centerTitle`       | `boolean`   | `false`       | 是否将标题/副标题动画过渡到居中布局。       |
| `app:blurRadius`        | `dimension` | `25dp`        | 继承自 `BlurView` 的模糊半径。              |
| `app:overlayColor`      | `color`     | `#AAFFFFFF`   | 继承自 `BlurView` 的覆盖色。                |

### API 参考

| 方法名                                        | 说明                               |
| --------------------------------------------- | ---------------------------------- |
| `setCenterTitle(boolean)`                     | 动画切换标题对齐（居中/左对齐）。  |
| `setTitle(String)`                            | 设置标题文本。                     |
| `setSubtitle(String)`                         | 设置副标题文本。                   |
| `setShowBack(boolean)`                        | 显示或隐藏返回区域。               |
| `setBackIcon(Drawable)`                       | 设置返回图标。                     |
| `setBackIconTint(int)`                        | 设置返回图标着色。                 |
| `setMenuText(String)`                         | 设置右侧菜单文本。                 |
| `setMenuIcon(Drawable)`                       | 设置右侧菜单图标。                 |
| `setMenuIconTint(int)`                        | 设置右侧菜单图标着色。             |
| `setOnBackClickListener(OnBackClickListener)` | 设置返回点击回调。                 |
| `setOnMenuClickListener(OnMenuClickListener)` | 设置菜单点击回调。                 |
| `setBlurRadius(float)`                        | 继承自 `BlurView` 的模糊半径接口。 |
| `setOverlayColor(int)`                        | 继承自 `BlurView` 的覆盖色接口。   |
