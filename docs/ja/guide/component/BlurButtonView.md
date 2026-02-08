---
prev: 
  text: 'Use BlurView'
  link: './BlurView'
next: 
  text: 'Use ProgressiveBlurView'
  link: './ProgressiveBlurView'
---

# BlurButtonView

### Use in XML layout
```xml
<com.qmdeve.blurview.widget.BlurButtonView
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Button Test"
    app:buttonCornerRadius="12dp"
    app:buttonIconPadding="8dp"
    app:buttonIconSize="24dp"
    app:buttonTextBold="true"
    aap:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    android:icon="?android:attr/actionModeWebSearchDrawable"
    app:buttonIconTint="@color/black"/>
```

### API Reference
| Method | Description |
|------|---|
| `setText` | Set text |
| `setButtonCornerRadius`     | Set button corner radius |
| `setTextSize`               | Set text size |
| `setTextColor`              | Set text color |
| `setTextBold`               | Set text bold |
| `setIcon` `setIconResource` | Set icon |
| `setIconSize`               | Set icon size |
| `setIconPadding`            | Set icon padding |
| `setIconTint`               | Set icon tint |

### Attribute Description

| Attribute Name  | Type | Description |
|-------------------------------|------|-------------|
| `app:buttonCornerRadius`      | `dimension` | Set button corner radius |
| `app:buttonIconPadding`       | `dimension` | Set icon padding |
| `app:buttonIconSize`          | `dimension` | Set icon size |
| `app:buttonTextBold`          | `boolean` | Set text bold |
| `app:blurRadius`              | `dimension` | Set blur radius |
| `app:overlayColor`            | `color` | Set overlay color |
| `app:buttonIconTint`          | `color`| Set icon tint |
| `android:icon`                | - | Set icon |
| `android:text`                | - | Set text |
| `android:textSize`            | - | Set text size |

---