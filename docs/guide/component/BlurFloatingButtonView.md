---
prev:
  text: 'Use BlurSwitchButtonView'
  link: './BlurSwitchButtonView'
next:
  text: 'Use BlurBottomNavigationView'
  link: './BlurBottomNavigationView'
---

# BlurFloatingButtonView

### Use Component

::: code-group

```xml [In Xml Layout]
<com.qmdeve.blurview.widget.BlurFloatingButtonView
    android:id="@+id/blurFloatingButton"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```

```java [In Java]
BlurFloatingButtonView fab = new BlurFloatingButtonView(context);
fab.setPosition(BlurFloatingButtonView.POSITION_RIGHT);
fab.setIcon(R.drawable.ic_add);
fab.setIconTint(0xFF333333);
fab.setButtonSize(55f);
fab.setOnLongPressListener(view -> {
    // Handle long press
});
```

```kotlin [In Kotlin]
val fab = BlurFloatingButtonView(context)
fab.setPosition(BlurFloatingButtonView.POSITION_RIGHT)
fab.setIcon(R.drawable.ic_add)
fab.setIconTint(0xFF333333.toInt())
fab.setButtonSize(55f)
fab.setOnLongPressListener {
    // Handle long press
}
```

:::

### Default Properties

| Property      | Default               |
| ------------- | --------------------- |
| Position      | `POSITION_RIGHT`      |
| Button size   | `55dp`                |
| Icon size     | `30dp`                |
| Icon tint     | `#FF333333`           |
| Corner radius | `12dp`                |
| Blur radius   | `16dp`                |
| Overlay color | White with ~72% alpha |

### API Reference

| Method                                        | Description                                                      |
| --------------------------------------------- | ---------------------------------------------------------------- |
| `setPosition(int)`                            | Set horizontal anchor using `POSITION_LEFT` or `POSITION_RIGHT`. |
| `setIcon(@DrawableRes int)`                   | Set icon from drawable resource ID.                              |
| `setIconDrawable(Drawable)`                   | Set icon drawable directly.                                      |
| `setIconTint(int)`                            | Set icon tint color (internally uses 80% alpha).                 |
| `setIconSize(float)`                          | Set icon size in dp.                                             |
| `setButtonSize(float)`                        | Set button size in dp.                                           |
| `setCornerRadius(float)`                      | Set corner radius and update ripple mask.                        |
| `setOverlayColor(int)`                        | Set overlay color (internally clamped to 72% alpha).             |
| `setOnLongPressListener(OnLongPressListener)` | Set long press callback.                                         |
| `setOnClickListener(View.OnClickListener)`    | Set click callback (inherited from `View`).                      |
