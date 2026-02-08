---
prev: false
next: 
  text: 'Picasso'
  link: './picasso'
---

# Glide

::: warning
使用 `Transform` 之前，请确保你已经集成 `QmBlurView` 的 `transform` 和 `Glide` 库。
```groovy
dependencies {
    // QmBlurView Transform dependency
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'

    // Glide dependency
    implementation 'com.github.bumptech.glide:glide:5.0.5'
}
```
:::

### 导入类
```java :no-line-numbers
// Glide 类
import com.bumptech.glide.Glide;

// QmBlurView 模糊转换类
import com.qmdeve.blurview.transform.glide.BlurTransformation;
```

### Usage Example
```java :no-line-numbers
Glide.with(this)
    .load(R.drawable.image)
    .apply(new RequestOptions().transform(
           new CenterCrop(),

         /**
          * 使用模糊转换
          * new BlurTransformation() // 默认模糊半径25f，圆角0
          * new BlurTransformation(float blurRadius) // 自定义模糊半径，无圆角
          * new BlurTransformation(float blurRadius, float roundedCorners) // 自定义模糊半径和圆角
          */
           new BlurTransformation(24f, 50)
       ))
    .into(imageView);
```

### 构造函数
| 构造函数                                 | 描述               |
|----------------------------------------|------------------|
| `BlurTransformation()`                  | 创建一个默认模糊半径为25f且无圆角的模糊转换 |
| `BlurTransformation(float blurRadius)`  | 创建一个自定义模糊半径且无圆角的模糊转换 |
| `BlurTransformation(float blurRadius, float roundedCorners)` | 创建一个自定义模糊半径和自定义圆角的模糊转换 |