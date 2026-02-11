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
    app:baseColor="#0161F2" />
```

```java [In Java]
// Create BlurSwitchButtonView instance
BlurSwitchButtonView blurSwitch = new BlurSwitchButtonView(context);

// Set layout parameters
FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(
    FrameLayout.LayoutParams.WRAP_CONTENT,
    FrameLayout.LayoutParams.WRAP_CONTENT
);
blurSwitch.setLayoutParams(params);

// Set attributes
blurSwitch.setBaseColor(0xFF0161F2);

// Add BlurSwitchButtonView to parent layout
parentLayout.addView(blurSwitch);

blurSwitch.setOnCheckedChangeListener(isChecked -> {
    // Handle switch state change
});
```

```kotlin [In Kotlin]
// Create BlurSwitchButtonView instance
val blurSwitch = BlurSwitchButtonView(context)

// Set layout parameters
val params = FrameLayout.LayoutParams(
    FrameLayout.LayoutParams.WRAP_CONTENT,
    FrameLayout.LayoutParams.WRAP_CONTENT
)
blurSwitch.layoutParams = params

// Set attributes
blurSwitch.setBaseColor(0xFF0161F2)

// Add BlurSwitchButtonView to parent layout
parentLayout.addView(blurSwitch)

blurSwitch.setOnCheckedChangeListener { isChecked ->
    // Handle switch state change
}
```
:::

### Attribute Description
| Attribute Name             | Type      | Default Value | Description                                          |
|------------------------------|---------|-----|---------------------------------------------|
| `app:baseColor` | `color` | `#0161F2` | Base Color (you only need to set one color value, and it will automatically calculate the color of `on` and `off` states) |
| `app:useSolidColorMode` | `boolean` | `false` | `-` |
| `app:solidOnColor` | `color` | `-` | `-` |
| `app:solidOffColor` | `color` | `-` | `-` |

::: warning
**`BlurSwitchButtonView` You only need to set the Base Color, and it will automatically calculate the color of the on and off state**
:::