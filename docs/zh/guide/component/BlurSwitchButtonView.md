---
prev: 
  text: '使用 BlurTitlebarView'
  link: './BlurTitlebarView'
next: 
  text: '使用 BlurFloatingButtonView'
  link: './BlurFloatingButtonView'
---

# BlurSwitchButtonView

### 在XML布局中使用
```xml
<com.qmdeve.blurview.widget.BlurSwitchButtonView
    android:layout_width="65dp"
    android:layout_height="wrap_content"
    app:baseColor="#0161F2" />
```

### 属性说明
| 属性名             | 类型      | 默认值 | 描述                                          |
|------------------------------|---------|-----|---------------------------------------------|
| `app:baseColor` | `color` | `#0161F2` | 基础颜色 (你只需要设置一个颜色值，它会自动计算 `on` 和 `off` 状态的颜色) |
| `app:useSolidColorMode` | `boolean` | `false` | `-` |
| `app:solidOnColor` | `color` | `-` | `-` |
| `app:solidOffColor` | `color` | `-` | `-` |

### Use the code
```java
BlurSwitchButtonView blurSwitch = findViewById(R.id.blurSwitch);

// 设置回调监听器
blurSwitch.setOnCheckedChangeListener(is -> {
    if (is) {
        
    }
});

// 设置基础颜色
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
**`BlurSwitchButtonView` 你只需要设置基础颜色，会自动计算 `on` 和 `off` 状态的颜色**
:::