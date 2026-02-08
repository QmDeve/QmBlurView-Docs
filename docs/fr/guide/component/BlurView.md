---
prev:
  text: 'Getting Started'
  link: '../getting-started'
next: 
  text: 'Use BlurButtonView'
  link: './BlurButtonView'
---

# BlurView

#### Use in XML layout
```xml
<com.qmdeve.blurview.widget.BlurView
    android:id="@+id/blurView"
    android:layout_width="match_parent"
    android:layout_height="100dp"
    app:blurRadius="20dp"
    app:overlayColor="#66FFFFFF" 
    app:cornerRadius="24dp"/>
```

#### Use code to set view properties

```java
BlurView blurView = findViewById(R.id.blurView);
blurView.setBlurRadius(20f);
blurView.setOverlayColor(0x66FFFFFF);
blurView.setCornerRadius(20);
```

#### Attribute Description

| Attribute Name         | Type | Default value | Explanation |
|------------------------|------|--------|-------------|
| `app:blurRadius`       | `dimension` | `10` | Blur radius |
| `app:overlayColor`     | `color` | `#AAFFFFFF` | Overlay color |
| `app:cornerRadius`     | `dimension` | `0` | Corner radius of the view |
| `app:setDownsampleFactor` | `float` | `0` | Downsample factor, higher value means better performance but worse blur effect |

### API Reference
| Method Name               | Description       |
|--------------------------|------------------|
| `setBlurRadius(float)`    | Set blur radius   |
| `setOverlayColor(int)`    | Set overlay color |
| `setCornerRadius(float)`  | Set corner radius |
| `setDownsampleFactor(float)` | Set downsample factor |