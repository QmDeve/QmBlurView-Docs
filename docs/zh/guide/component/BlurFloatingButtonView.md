---
prev:
  text: '使用 BlurSwitchButtonView'
  link: './BlurSwitchButtonView'
next:
  text: '使用 BlurBottomNavigationView'
  link: './BlurBottomNavigationView'
---

# BlurFloatingButtonView

### 在XML布局中使用
```xml
<com.qmdeve.blurview.widget.BlurFloatingButtonView 
    android:id="@+id/blurFloatingButton"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```

### Use the code
```java
BlurFloatingButtonView floatingButtonView = findViewById(R.id.blurFloatingButton);

// 设置点击事件
floatingButtonView.setOnClickListener(view -> {
    Toast.makeText(BlurFloatingButtonActivity.this, "Click", Toast.LENGTH_SHORT).show();
});

// 设置长按事件
floatingButtonView.setOnLongPressListener(view -> {
    Toast.makeText(this, "Long Press", Toast.LENGTH_SHORT).show();
});

// 设置位置
floatingButtonView.setPosition(BlurFloatingButtonView.POSITION_RIGHT);

// 设置图标
floatingButtonView.setIcon();

// 设置图标着色
floatingButtonView.setIconTint();

// 设置图标大小
floatingButtonView.setIconSize();

// 设置悬浮按钮大小
floatingButtonView.setButtonSize();

// 设置叠层颜色
floatingButtonView.setOverlayColor();

// 设置圆角半径
floatingButtonView.setCornerRadius();
```