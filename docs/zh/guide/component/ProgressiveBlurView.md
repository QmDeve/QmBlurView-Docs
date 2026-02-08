---
prev: 
  text: '使用 BlurButtonView'
  link: './BlurButtonView'
next: 
  text: '使用 BlurTitlebarView'
  link: './BlurTitlebarView'
---

# ProgressiveBlurView
### 在XML布局中使用
```xml
<com.qmdeve.blurview.widget.ProgressiveBlurView
    android:layout_width="match_parent"
    android:layout_height="150dp"
    app:blurRadius="20dp"
    app:progressiveDirection="topToBottom"
    app:progressiveLayers="5"
    app:progressiveOverlayColor="#80FFFFFF" />
```

### 属性说明
| 属性名                         | 类型     |  描述       |
|------------------------------|------------|-------------|
| `app:progressiveOverlayColor` | `color`    | 覆盖颜色 |
| `app:progressiveDirection`    | `enum`     | 渐变方向，支持以下值：`topToBottom`、`bottomToTop`、`leftToRight`、`rightToLeft` |
| `app:progressiveLayers`       | `integer`  | 层数，表示渐变模糊的层数，值越大，渐变效果越平滑 |
| `app:progressiveBlurRadius`   | `dimension`| 渐变模糊的模糊半径 |

---