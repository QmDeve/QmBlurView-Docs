---
prev: 
  text: '使用 BlurView'
  link: './BlurView'
next: 
  text: '使用 ProgressiveBlurView'
  link: './ProgressiveBlurView'
---

# BlurButtonView

### 在XML布局中使用
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

### API 参考
| 方法名 | 描述 |
|------|---|
| `setText` | 设置文本 |
| `setButtonCornerRadius`     | 设置按钮圆角半径 |
| `setTextSize`               | 设置文本大小 |
| `setTextColor`              | 设置文本颜色 |
| `setTextBold`               | 设置文本加粗 |
| `setIcon` `setIconResource` | 设置图标 |
| `setIconSize`               | 设置图标大小 |
| `setIconPadding`            | 设置图标内边距 |
| `setIconTint`               | 设置图标着色 |

### 属性说明

| 属性名  | 类型 | 描述 |
|-------------------------------|------|-------------|
| `app:buttonCornerRadius`      | `dimension` | 设置按钮圆角半径 |
| `app:buttonIconPadding`       | `dimension` | 设置图标内边距 |
| `app:buttonIconSize`          | `dimension` | 设置图标大小 |
| `app:buttonTextBold`          | `boolean` | 设置文本加粗 |
| `app:blurRadius`              | `dimension` | 设置模糊半径 |
| `app:overlayColor`            | `color` | 设置覆盖颜色 |
| `app:buttonIconTint`          | `color`| 设置图标着色 |
| `android:icon`                | - | 设置图标 |
| `android:text`                | - | 设置文本 |
| `android:textSize`            | - | 设置文本大小 |

---