---
prev: 
  text: 'Use BlurFloatingButtonView'
  link: './BlurFloatingButtonView'
next: false
---

# BlurBottomNavigationView

::: warning
To use this view, make sure to integrate `navigation` Dependencies:
```groovy :no-line-numbers
dependencies {
    // BottomNavigationView Dependencies
    implementation '{{GROUP_ID}}:navigation:{{VERSION}}'
}
```
:::

### Use in XML layout
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

### API Description
| Method Name                | Description                 |
|----------------------------|-----------------------------|
| `bind(Object)`             | `Bind ViewPager or ViewPager2` |
| `setMenu(int)`             |          `Set menu`          |
| `setSelectedTab(int)`      | `Set selected tab`             |
| `setSelectedColor(int)`    | `Set selected color`             |
| `setUnselectedColor(int)`  | `Set unselected color`           |
| `setIconSize(float)`         | `Set icon size`               |
| `setTextSize(float)`         | `Set text size`               |
| `setTextBold(boolean)`       | `Set text bold`           |

### Attribute Description
| Attribute Name              | Type       | Default Value      | Description |
|---------------------------|------------|--------------------|-------------|
|`app:navBlurRadius`          | `dimension`| `25dp`             | Set blur radius |
|`app:navOverlayColor`        | `color`    | `#AAFFFFFF`        | Set overlay color |
|`app:menu`                   | `reference`| `null`             | Set menu resource |
|`app:navSelectedColor`       | `color`    | `BLUE`             | Set selected color |
|`app:navUnselectedColor`     | `color`    | `GRAY`             | Set unselected color |
|`app:item_iconSize`          | `dimension`| `24dp`             | Set icon size |
|`app:item_textSize`          | `dimension`| `12dp`             | Set text size |
|`app:item_textBold`          | `boolean`  | `false`            | Set text bold |