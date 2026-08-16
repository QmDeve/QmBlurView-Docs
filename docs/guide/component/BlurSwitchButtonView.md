---
prev:
  text: 'Use BlurTitlebarView'
  link: './BlurTitlebarView'
next:
  text: 'Use BlurFloatingButtonView'
  link: './BlurFloatingButtonView'
---

# BlurSwitchButtonView

### Use Component

::: code-group

```xml [In Xml Layout]
<com.qmdeve.blurview.widget.BlurSwitchButtonView
    android:layout_width="65dp"
    android:layout_height="wrap_content"
    app:baseColor="#0161F2"
    app:useSolidColorMode="false" />
```

```java [In Java]
BlurSwitchButtonView blurSwitch = new BlurSwitchButtonView(context);
blurSwitch.setBaseColor(0xFF0161F2);
blurSwitch.setChecked(true, true);
blurSwitch.setOnCheckedChangeListener(isChecked -> {
    // Handle state change
});
```

```kotlin [In Kotlin]
val blurSwitch = BlurSwitchButtonView(context)
blurSwitch.setBaseColor(0xFF0161F2.toInt())
blurSwitch.setChecked(true, true)
blurSwitch.setOnCheckedChangeListener { isChecked ->
    // Handle state change
}
```

:::

### Attribute Description

| Attribute Name          | Type      | Default Value  | Description                                                   |
| ----------------------- | --------- | -------------- | ------------------------------------------------------------- |
| `app:baseColor`         | `color`   | `#0161F2`      | Base color used to derive on/off track colors.                |
| `app:useSolidColorMode` | `boolean` | `false`        | Enable solid color mode instead of blur-derived track colors. |
| `app:solidOnColor`      | `color`   | auto-generated | Explicit ON color used in solid color mode.                   |
| `app:solidOffColor`     | `color`   | auto-generated | Explicit OFF color used in solid color mode.                  |

### API Reference

| Method                                                | Description                                  |
| ----------------------------------------------------- | -------------------------------------------- |
| `setOnCheckedChangeListener(OnCheckedChangeListener)` | Listen for checked state changes.            |
| `toggle()`                                            | Toggle current checked state with animation. |
| `isChecked()`                                         | Get checked state.                           |
| `setChecked(boolean, boolean)`                        | Set checked state with optional animation.   |
| `setBaseColor(int)`                                   | Set base color and regenerate track colors.  |
| `setUseSolidColorMode(boolean)`                       | Enable or disable solid color mode.          |
| `isUseSolidColorMode()`                               | Get current solid color mode state.          |
| `setSolidColors(int, int)`                            | Set explicit ON/OFF colors for solid mode.   |
| `getSolidOnColor()`                                   | Get current solid ON color.                  |
| `getSolidOffColor()`                                  | Get current solid OFF color.                 |

::: warning
For most use cases, setting only `app:baseColor` is enough. The view can derive ON/OFF colors automatically.
:::
