---
prev:
  text: '快速开始'
  link: '../getting-started'
next: 
  text: '使用 BlurButtonView'
  link: './BlurButtonView'
---

# BlurView

#### 在XML布局中使用
```xml
<com.qmdeve.blurview.widget.BlurView
    android:id="@+id/blurView"
    android:layout_width="match_parent"
    android:layout_height="100dp"
    app:blurRadius="20dp"
    app:overlayColor="#66FFFFFF" 
    app:cornerRadius="24dp"/>
```

#### 使用代码设置视图

```java
BlurView blurView = findViewById(R.id.blurView);
blurView.setBlurRadius(20f);
blurView.setOverlayColor(0x66FFFFFF);
blurView.setCornerRadius(20);
```

#### 属性说明

| 属性名         | 类型 | 默认值 | 描述 |
|------------------------|------|--------|-------------|
| `app:blurRadius`       | `dimension` | `10` | 模糊半径 |
| `app:overlayColor`     | `color` | `#AAFFFFFF` | 覆盖颜色 |
| `app:cornerRadius`     | `dimension` | `0` | 视图的圆角半径 |
| `app:setDownsampleFactor` | `float` | `0` | 降采样因子，较高值意味着更好的性能但较差的模糊效果 |

### API 参考
| 方法名               | 描述       |
|--------------------------|------------------|
| `setBlurRadius(float)`    | 设置模糊半径   |
| `setOverlayColor(int)`    | 设置覆盖颜色 |
| `setCornerRadius(float)`  | 设置圆角半径 |
| `setDownsampleFactor(float)` | 设置降采样因子 |