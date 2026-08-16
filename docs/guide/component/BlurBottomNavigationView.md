---
prev:
  text: 'Use BlurFloatingButtonView'
  link: './BlurFloatingButtonView'
next: false
---

# BlurBottomNavigationView

::: warning
To use this component, add the navigation artifact:

```groovy :no-line-numbers
dependencies {
    implementation 'com.qmdeve.blurview:navigation:1.3.0'
}
```

:::

### Use in XML Layout

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

### Attribute Description

| Attribute Name           | Type        | Default Value | Description                       |
| ------------------------ | ----------- | ------------- | --------------------------------- |
| `app:navBlurRadius`      | `dimension` | `25dp`        | Blur radius.                      |
| `app:navOverlayColor`    | `color`     | `#AAFFFFFF`   | Overlay color.                    |
| `app:menu`               | `reference` | `0`           | Menu resource used to build tabs. |
| `app:navSelectedColor`   | `color`     | `Color.BLUE`  | Selected tab color.               |
| `app:navUnselectedColor` | `color`     | `Color.GRAY`  | Unselected tab color.             |
| `app:item_iconSize`      | `dimension` | `24dp`        | Tab icon size.                    |
| `app:item_textSize`      | `dimension` | `12dp`        | Tab text size.                    |
| `app:item_textBold`      | `boolean`   | `false`       | Tab text bold state.              |

### API Reference

| Method Name                                       | Description                                                         |
| ------------------------------------------------- | ------------------------------------------------------------------- |
| `bind(Object)`                                    | Bind `ViewPager` or `ViewPager2` for synchronized page/tab changes. |
| `setMenu(int)`                                    | Set menu resource ID.                                               |
| `setSelectedTab(int)`                             | Select tab by index.                                                |
| `setSelectedColor(int)`                           | Set selected tab color.                                             |
| `setUnselectedColor(int)`                         | Set unselected tab color.                                           |
| `setIconSize(float)`                              | Set icon size.                                                      |
| `setTextSize(float)`                              | Set text size.                                                      |
| `setTextBold(boolean)`                            | Set text bold state.                                                |
| `setOnTabSelectedListener(OnTabSelectedListener)` | Listen to tab selection changes.                                    |
| `getCurrentSelected()`                            | Get current selected index.                                         |
| `getSelectedColor()`                              | Get selected color.                                                 |
| `getUnselectedColor()`                            | Get unselected color.                                               |
| `getTextSize()`                                   | Get current text size.                                              |
| `isTextBold()`                                    | Check whether text is bold.                                         |
| `release()`                                       | Release blur resources and clear internal lists.                    |
