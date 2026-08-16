---
prev:
  text: 'Use BlurViewGroup'
  link: './BlurViewGroup'
next:
  text: 'Use ProgressiveBlurView'
  link: './ProgressiveBlurView'
---

# BlurButtonView

### Use Component

::: code-group

```xml [In Xml Layout]
<com.qmdeve.blurview.widget.BlurButtonView
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Button Test"
    android:textSize="16sp"
    android:textColor="#111111"
    android:icon="?android:attr/actionModeWebSearchDrawable"
    android:gravity="center"
    app:blurRadius="20dp"
    app:overlayColor="#AAFFFFFF"
    app:buttonCornerRadius="12dp"
    app:buttonTextColorPressed="#111111"
    app:buttonTextColorDisabled="#80111111"
    app:buttonTextBold="true"
    app:buttonIconSize="24dp"
    app:buttonIconPadding="8dp"
    app:buttonIconTint="#111111" />
```

```java [In Java]
BlurButtonView button = new BlurButtonView(context);
button.setText("Button Text");
button.setButtonCornerRadius(12f);
button.setTextSize(16f);
button.setTextColor(0xFF111111);
button.setIconResource(R.drawable.ic_search);
button.setIconSize(24);
button.setIconPadding(8);
```

```kotlin [In Kotlin]
val button = BlurButtonView(context)
button.setText("Button Text")
button.setButtonCornerRadius(12f)
button.setTextSize(16f)
button.setTextColor(0xFF111111.toInt())
button.setIconResource(R.drawable.ic_search)
button.setIconSize(24)
button.setIconPadding(8)
```

:::

### Attribute Description

| Attribute Name                | Type        | Default Value            | Description                              |
| ----------------------------- | ----------- | ------------------------ | ---------------------------------------- |
| `android:text`                | `string`    | `null`                   | Button text.                             |
| `android:textSize`            | `dimension` | `16sp`                   | Text size.                               |
| `android:textColor`           | `color`     | `#FF000000`              | Text color.                              |
| `android:icon`                | `reference` | `null`                   | Icon drawable.                           |
| `android:gravity`             | `integer`   | `center`                 | Content gravity.                         |
| `app:buttonCornerRadius`      | `dimension` | `0dp`                    | Button corner radius.                    |
| `app:buttonTextColorPressed`  | `color`     | `android:textColor`      | Text color when pressed.                 |
| `app:buttonTextColorDisabled` | `color`     | `50% alpha of textColor` | Text color when disabled.                |
| `app:buttonTextBold`          | `boolean`   | `true`                   | Bold text style.                         |
| `app:buttonIconSize`          | `dimension` | `24dp`                   | Icon size.                               |
| `app:buttonIconPadding`       | `dimension` | `8dp`                    | Spacing between icon and text.           |
| `app:buttonIconTint`          | `color`     | `null`                   | Icon tint color state list.              |
| `app:blurRadius`              | `dimension` | `25dp`                   | Inherited blur radius from `BlurView`.   |
| `app:overlayColor`            | `color`     | `#AAFFFFFF`              | Inherited overlay color from `BlurView`. |

::: info
The styleable also declares `app:buttonBlurRadius` and `app:buttonOverlayColor`, but the current implementation uses the inherited `app:blurRadius` and `app:overlayColor` values.
:::

### API Reference

| Method                                                  | Description                                  |
| ------------------------------------------------------- | -------------------------------------------- |
| `setText(CharSequence)` / `getText()`                   | Set or get button text.                      |
| `setButtonCornerRadius(float)`                          | Set button corner radius.                    |
| `setTextSize(float)`                                    | Set text size (sp).                          |
| `setTextColor(int)`                                     | Set normal text color.                       |
| `setTextColorPressed(int)`                              | Set pressed text color.                      |
| `setTextBold(boolean)`                                  | Set text bold state.                         |
| `setIcon(Drawable)` / `setIconResource(int)`            | Set icon drawable.                           |
| `setIconSize(int)`                                      | Set icon size (dp).                          |
| `setIconPadding(int)`                                   | Set icon padding (dp).                       |
| `setIconTint(ColorStateList)` / `setIconTintColor(int)` | Set icon tint.                               |
| `setGravity(int)`                                       | Set content gravity.                         |
| `setOnClickListener(View.OnClickListener)`              | Set click callback.                          |
| `setBlurRadius(float)`                                  | Inherited blur radius API from `BlurView`.   |
| `setOverlayColor(int)`                                  | Inherited overlay color API from `BlurView`. |
