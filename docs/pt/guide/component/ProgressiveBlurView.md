---
prev: 
  text: 'Use BlurButtonView'
  link: './BlurButtonView'
next: 
  text: 'Use BlurTitlebarView'
  link: './BlurTitlebarView'
---

# ProgressiveBlurView
### Use in XML layout
```xml
<com.qmdeve.blurview.widget.ProgressiveBlurView
    android:layout_width="match_parent"
    android:layout_height="150dp"
    app:blurRadius="20dp"
    app:progressiveDirection="topToBottom"
    app:progressiveLayers="5"
    app:progressiveOverlayColor="#80FFFFFF" />
```

### Attribute Description
| Attribute Name                         | Type     |
|------------------------------|------------|
| `app:progressiveOverlayColor` | `color`    |
| `app:progressiveDirection`    | `enum`     |
| `app:progressiveLayers`       | `integer`  |
| `app:progressiveBlurRadius`   | `dimension`|

---