---
prev: 
  text: 'Use ProgressiveBlurView'
  link: './ProgressiveBlurView'
next: 
  text: 'Use BlurSwitchButtonView'
  link: './BlurSwitchButtonView'
---

# BlurTitlebarView
### Use Component
::: code-group

```xml [In Xml Layout]
<com.qmdeve.blurview.widget.BlurTitlebarView
    android:id="@+id/blurTitlebar1"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:overlayColor="#D1FFFFFF"
    app:blurRadius="30dp"
    app:showBack="true"
    app:menuIcon="?android:attr/actionModeWebSearchDrawable"
    app:titleText="Title Test"
    app:subtitleText="Subheading Test"
    app:centerTitle="false"/>
```

```java [In Java]
// Create BlurTitlebarView instance
BlurTitlebarView blurTitlebarView = new BlurTitlebarView(context);

// Set layout parameters
FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(
    FrameLayout.LayoutParams.MATCH_PARENT,
    FrameLayout.LayoutParams.WRAP_CONTENT
);
blurTitlebarView.setLayoutParams(params);

// Set attributes
blurTitlebarView.setTitleText("Title Text");
blurTitlebarView.setSubtitleText("Subtitle Text");
//...

// Add BlurTitlebarView to parent layout
parentLayout.addView(blurTitlebarView);
```

```kotlin [In Kotlin]
// Create BlurTitlebarView instance
val blurTitlebarView = BlurTitlebarView(context)

// Set layout parameters
val params = FrameLayout.LayoutParams(
    FrameLayout.LayoutParams.MATCH_PARENT,
    FrameLayout.LayoutParams.WRAP_CONTENT
)
blurTitlebarView.layoutParams = params

// Set attributes
blurTitlebarView.setTitleText("Title Text")
blurTitlebarView.setSubtitleText("Subtitle Text")
//...

// Add BlurTitlebarView to parent layout
parentLayout.addView(blurTitlebarView)
```
:::

### Attribute Description

| Attribute Name               | Type       |
|------------------------------|------------|
| `app:titleText`              | `string`   |
| `app:subtitleText`           | `string`   |
| `app:titleTextColor`         | `color`    |
| `app:subtitleTextColor`      | `color`    |
| `app:showBack`               | `boolean`  |
| `app:backIcon`               | `reference`|
| `app:backIconTint`           | `color`    |
| `app:menuText`               | `string`   |
| `app:menuTextColor`          | `color`    |
| `app:menuIcon`               | `reference`|
| `app:menuIconTint`           | `color`    |
| `app:centerTitle`            | `boolean`  |