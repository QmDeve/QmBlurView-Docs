---
prev: 
  text: 'Use BlurTitlebarView'
  link: './BlurTitlebarView'
next: 
  text: 'Use BlurFloatingButtonView'
  link: './BlurFloatingButtonView'
---

# BlurSwitchButtonView

### Used in XML layout
```xml
<com.qmdeve.blurview.widget.BlurSwitchButtonView
    android:layout_width="65dp"
    android:layout_height="wrap_content"
    app:baseColor="#0161F2" />
```

### Attribute Description
| Attribute Name             | Type      | Default Value | Description                                          |
|------------------------------|---------|-----|---------------------------------------------|
| `app:baseColor` | `color` | `#0161F2` | Base Color (you only need to set one color value, and it will automatically calculate the color of `on` and `off` states) |
| `app:useSolidColorMode` | `boolean` | `false` | `-` |
| `app:solidOnColor` | `color` | `-` | `-` |
| `app:solidOffColor` | `color` | `-` | `-` |

### Use the code
```java
BlurSwitchButtonView blurSwitch = findViewById(R.id.blurSwitch);

// Callback on and off status
blurSwitch.setOnCheckedChangeListener(is -> {
    if (is) {
        
    }
});

// Set Base Color
blurSwitch.setBaseColor(0xFF0161F2);

// The first parameter sets the status, and the second parameter determines whether an animation is needed
blurSwitch.setChecked(false, false);

// Use the solid color mode
blurSwitch.setUseSolidColorMode(true);

// Is it in solid color mode
blurSwitch.isUseSolidColorMode();

// Set the color of the solid color mode
blurSwitch.setSolidColors();
```

::: warning
**`BlurSwitchButtonView` You only need to set the Base Color, and it will automatically calculate the color of the on and off state**
:::