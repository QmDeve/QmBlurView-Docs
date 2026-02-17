---
prev:
  text: 'Use BlurSwitchButtonView'
  link: './BlurSwitchButtonView'
next:
  text: 'Use BlurBottomNavigationView'
  link: './BlurBottomNavigationView'
---

# BlurFloatingButtonView

### Use na estrutura XML

```xml
<com.qmdeve.blurview.widget.BlurFloatingButtonView
    android:id="@+id/blurFloatingButton"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```

### Use o código

```java
BlurFloatingButtonView floatingButtonView = findViewById(R.id.blurFloatingButton);

floatingButtonView.setOnClickListener(view -> {
    Toast.makeText(BlurFloatingButtonActivity.this, "Clique", Toast.LENGTH_SHORT).show();
});

floatingButtonView.setOnLongPressListener(view -> {
    Toast.makeText(this, "Pressão Longa", Toast.LENGTH_SHORT).show();
});

floatingButtonView.setPosition(BlurFloatingButtonView.POSITION_RIGHT);

floatingButtonView.setIcon();

floatingButtonView.setIconTint();

floatingButtonView.setIconSize();

floatingButtonView.setButtonSize();

floatingButtonView.setOverlayColor();

floatingButtonView.setCornerRadius();
```
