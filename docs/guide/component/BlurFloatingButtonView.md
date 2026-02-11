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
// Create BlurFloatingButtonView instance
BlurFloatingButtonView floatingButtonView = new BlurFloatingButtonView(context);

// Set layout parameters
FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(
    FrameLayout.LayoutParams.WRAP_CONTENT,
    FrameLayout.LayoutParams.WRAP_CONTENT
);
floatingButtonView.setLayoutParams(params);

// Add BlurFloatingButtonView to parent layout
parentLayout.addView(floatingButtonView);
```

```kotlin [In Kotlin]
// Create BlurFloatingButtonView instance
val floatingButtonView = BlurFloatingButtonView(context)

// Set layout parameters
val params = FrameLayout.LayoutParams(
    FrameLayout.LayoutParams.WRAP_CONTENT,
    FrameLayout.LayoutParams.WRAP_CONTENT
)
floatingButtonView.layoutParams = params

// Add BlurFloatingButtonView to parent layout
parentLayout.addView(floatingButtonView)
```
:::

### API Reference
| Method | Description |
|------|---|
| `setOnClickListener` | Set click listener |
| `setOnLongPressListener` | Set long press listener |
| `setPosition` | Set button position |
| `setIcon` | Set button icon |
| `setIconTint` | Set icon tint |
| `setIconSize` | Set icon size |
| `setButtonSize` | Set button size |
| `setOverlayColor` | Set overlay color |
| `setCornerRadius` | Set button corner radius |

---