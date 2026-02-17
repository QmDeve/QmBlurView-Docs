---
prev:
  text: 'Use ProgressiveBlurView'
  link: './ProgressiveBlurView'
next:
  text: 'Use BlurSwitchButtonView'
  link: './BlurSwitchButtonView'
---

# BlurTitlebarView

### Use na estrutura XML

```xml
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

### Descrição dos Atributos

| Nome do Atributo        | Tipo        |
| ----------------------- | ----------- |
| `app:titleText`         | `string`    |
| `app:subtitleText`      | `string`    |
| `app:titleTextColor`    | `color`     |
| `app:subtitleTextColor` | `color`     |
| `app:showBack`          | `boolean`   |
| `app:backIcon`          | `reference` |
| `app:backIconTint`      | `color`     |
| `app:menuText`          | `string`    |
| `app:menuTextColor`     | `color`     |
| `app:menuIcon`          | `reference` |
| `app:menuIconTint`      | `color`     |
| `app:centerTitle`       | `boolean`   |

### Use o código para alternar dinamicamente a posição do título

```java
blurTitlebarView.setCenterTitle(true);
```
