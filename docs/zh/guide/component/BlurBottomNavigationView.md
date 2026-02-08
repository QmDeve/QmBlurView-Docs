---
prev: 
  text: '使用 BlurFloatingButtonView'
  link: './BlurFloatingButtonView'
next: false
---

# BlurBottomNavigationView

::: warning
在使用 `BlurBottomNavigationView` 之前，请确保您已经集成了 NavigationView 依赖。
```groovy
dependencies {
    // BottomNavigationView Dependencies
    implementation '{{GROUP_ID}}:navigation:{{VERSION}}'
}
```
:::

### 在XML布局中使用
```xml
<com.qmdeve.blurview.widget.BlurBottomNavigationView
    android:id="@+id/bottomnav"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:item_iconSize="24dp"
    app:item_textBold="true"
    app:item_textSize="12dp"
    app:menu="@menu/bottom_nav_menu"
    app:navOverlayColor="#AAFFFFFF"
    app:navSelectedColor="#0161F2"
    app:navUnselectedColor="#000"
    android:layout_alignParentBottom="true" />
```

### API 参考
| 方法名                | 描述                 |
|----------------------|----------------------|
| `bind(Object)`       | `绑定 ViewPager 或 ViewPager2` |
| `setMenu(int)`       |          `设置菜单`          |
| `setSelectedTab(int)`| `设置选中的标签`             |
| `setSelectedColor(int)`    | `设置选中的颜色`             |
| `setUnselectedColor(int)`  | `设置未选中的颜色`           |
| `setIconSize(float)`         | `设置图标大小`               |
| `setTextSize(float)`         | `设置文字大小`               |
| `setTextBold(boolean)`       | `设置文字加粗`           |

### 属性说明
| 属性名              | 类型       | 默认值      | 描述 |
|---------------------------|------------|--------------------|-------------|
|`app:navBlurRadius`          | `dimension`| `25dp`             | 设置模糊半径 |
|`app:navOverlayColor`        | `color`    | `#AAFFFFFF`        | 设置覆盖颜色 |
|`app:menu`                   | `reference`| `null`             | 设置菜单资源 |
|`app:navSelectedColor`       | `color`    | `BLUE`             | 设置选中颜色 |
|`app:navUnselectedColor`     | `color`    | `GRAY`             | 设置未选中颜色 |
|`app:item_iconSize`          | `dimension`| `24dp`             | 设置图标大小 |
|`app:item_textSize`          | `dimension`| `12dp`             | 设置文字大小 |
|`app:item_textBold`          | `boolean`  | `false`            | 设置文字加粗 |