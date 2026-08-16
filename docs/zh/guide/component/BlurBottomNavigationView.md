---
prev:
  text: '使用 BlurFloatingButtonView'
  link: './BlurFloatingButtonView'
next: false
---

# BlurBottomNavigationView

::: warning
使用该组件前，请添加 navigation 依赖：

```groovy :no-line-numbers
dependencies {
    implementation 'com.qmdeve.blurview:navigation:1.3.0'
}
```

:::

### 在 XML 布局中使用

```xml
<com.qmdeve.blurview.widget.BlurBottomNavigationView
    android:id="@+id/bottomnav"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:menu="@menu/bottom_nav_menu"
    app:navBlurRadius="25dp"
    app:navOverlayColor="#AAFFFFFF"
    app:navSelectedColor="#0161F2"
    app:navUnselectedColor="#808080"
    app:item_iconSize="24dp"
    app:item_textSize="12dp"
    app:item_textBold="false" />
```

### 属性说明

| 属性名                   | 类型        | 默认值       | 说明                       |
| ------------------------ | ----------- | ------------ | -------------------------- |
| `app:navBlurRadius`      | `dimension` | `25dp`       | 模糊半径。                 |
| `app:navOverlayColor`    | `color`     | `#AAFFFFFF`  | 覆盖色。                   |
| `app:menu`               | `reference` | `0`          | 用于构建标签页的菜单资源。 |
| `app:navSelectedColor`   | `color`     | `Color.BLUE` | 选中项颜色。               |
| `app:navUnselectedColor` | `color`     | `Color.GRAY` | 未选中项颜色。             |
| `app:item_iconSize`      | `dimension` | `24dp`       | 图标大小。                 |
| `app:item_textSize`      | `dimension` | `12dp`       | 文本大小。                 |
| `app:item_textBold`      | `boolean`   | `false`      | 文本是否加粗。             |

### API 参考

| 方法名                                            | 说明                                                   |
| ------------------------------------------------- | ------------------------------------------------------ |
| `bind(Object)`                                    | 绑定 `ViewPager` 或 `ViewPager2`，同步页面与标签状态。 |
| `setMenu(int)`                                    | 设置菜单资源 ID。                                      |
| `setSelectedTab(int)`                             | 按索引选中标签。                                       |
| `setSelectedColor(int)`                           | 设置选中颜色。                                         |
| `setUnselectedColor(int)`                         | 设置未选中颜色。                                       |
| `setIconSize(float)`                              | 设置图标大小。                                         |
| `setTextSize(float)`                              | 设置文本大小。                                         |
| `setTextBold(boolean)`                            | 设置文本是否加粗。                                     |
| `setOnTabSelectedListener(OnTabSelectedListener)` | 设置标签选中监听。                                     |
| `getCurrentSelected()`                            | 获取当前选中索引。                                     |
| `getSelectedColor()`                              | 获取选中颜色。                                         |
| `getUnselectedColor()`                            | 获取未选中颜色。                                       |
| `getTextSize()`                                   | 获取当前文本大小。                                     |
| `isTextBold()`                                    | 获取文本是否加粗。                                     |
| `release()`                                       | 释放模糊资源并清理内部列表。                           |
