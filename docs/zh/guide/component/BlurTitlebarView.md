---
prev: 
  text: '使用 ProgressiveBlurView'
  link: './ProgressiveBlurView'
next: 
  text: '使用 BlurSwitchButtonView'
  link: './BlurSwitchButtonView'
---

# BlurTitlebarView
### 在XML布局中使用
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

### 属性说明

| 属性名               | 类型       |  描述  |
|------------------------------|------------|-------------|
| `app:titleText`              | `string`   | 标题文本 |
| `app:subtitleText`           | `string`   | 副标题文本 |
| `app:titleTextColor`         | `color`    | 标题颜色 |
| `app:subtitleTextColor`      | `color`    | 副标题颜色 |
| `app:showBack`               | `boolean`  | 是否显示返回按钮 |
| `app:backIcon`               | `reference`| 返回图标资源 |
| `app:backIconTint`           | `color`    | 返回图标着色 |
| `app:menuText`               | `string`   | 菜单文本 |
| `app:menuTextColor`          | `color`    | 菜单文本颜色 |
| `app:menuIcon`               | `reference`| 菜单图标资源引用 |
| `app:menuIconTint`           | `color`    | 菜单图标着色 |
| `app:centerTitle`            | `boolean`  | 标题居中显示 |

### 使用代码设置标题居中显示
```java
blurTitlebarView.setCenterTitle(true);
```