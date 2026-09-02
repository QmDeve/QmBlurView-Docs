---
prev:
  text: 'Use ProgressiveBlurViewGroup'
  link: './ProgressiveBlurViewGroup'
next:
  text: 'Use BlurSwitchButtonView'
  link: './BlurSwitchButtonView'
---

# BlurTitlebarView

### Use Component

::: code-group

```xml [In Xml Layout]
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

```java [In Java]
BlurTitlebarView titlebar = new BlurTitlebarView(context);
titlebar.setTitle("Title");
titlebar.setSubtitle("Subtitle");
titlebar.setShowBack(true);
titlebar.setMenuText("Edit");
titlebar.setCenterTitle(true);
```

```kotlin [In Kotlin]
val titlebar = BlurTitlebarView(context)
titlebar.setTitle("Title")
titlebar.setSubtitle("Subtitle")
titlebar.setShowBack(true)
titlebar.setMenuText("Edit")
titlebar.setCenterTitle(true)
```

:::

### Attribute Description

| Attribute Name          | Type        | Default Value | Description                                                         |
| ----------------------- | ----------- | ------------- | ------------------------------------------------------------------- |
| `app:titleText`         | `string`    | `null`        | Title text.                                                         |
| `app:subtitleText`      | `string`    | `null`        | Subtitle text.                                                      |
| `app:titleTextColor`    | `color`     | `transparent` | Title text color. Auto-calculated from overlay when transparent.    |
| `app:subtitleTextColor` | `color`     | `transparent` | Subtitle text color. Auto-calculated from overlay when transparent. |
| `app:showBack`          | `boolean`   | `false`       | Whether to show the back area/icon.                                 |
| `app:backIcon`          | `reference` | `null`        | Back icon drawable resource.                                        |
| `app:backIconTint`      | `color`     | `transparent` | Back icon tint. Auto-calculated from overlay when transparent.      |
| `app:menuText`          | `string`    | `null`        | Right-side menu text.                                               |
| `app:menuTextColor`     | `color`     | `transparent` | Menu text color. Auto-calculated from overlay when transparent.     |
| `app:menuIcon`          | `reference` | `null`        | Right-side menu icon drawable resource.                             |
| `app:menuIconTint`      | `color`     | `transparent` | Menu icon tint. Auto-calculated from overlay when transparent.      |
| `app:centerTitle`       | `boolean`   | `false`       | Animate title/subtitle to centered mode.                            |
| `app:blurRadius`        | `dimension` | `25dp`        | Inherited blur radius from `BlurView`.                              |
| `app:overlayColor`      | `color`     | `#AAFFFFFF`   | Inherited overlay color from `BlurView`.                            |

### API Reference

| Method                                        | Description                                          |
| --------------------------------------------- | ---------------------------------------------------- |
| `setCenterTitle(boolean)`                     | Animate title/subtitle alignment to center or start. |
| `setTitle(String)`                            | Set title text.                                      |
| `setSubtitle(String)`                         | Set subtitle text.                                   |
| `setShowBack(boolean)`                        | Show or hide back area.                              |
| `setBackIcon(Drawable)`                       | Set back icon drawable.                              |
| `setBackIconTint(int)`                        | Set back icon tint color.                            |
| `setMenuText(String)`                         | Set right-side menu text.                            |
| `setMenuIcon(Drawable)`                       | Set right-side menu icon drawable.                   |
| `setMenuIconTint(int)`                        | Set right-side menu icon tint color.                 |
| `setOnBackClickListener(OnBackClickListener)` | Set back click callback.                             |
| `setOnMenuClickListener(OnMenuClickListener)` | Set menu click callback.                             |
| `setBlurRadius(float)`                        | Inherited blur radius API from `BlurView`.           |
| `setOverlayColor(int)`                        | Inherited overlay color API from `BlurView`.         |
