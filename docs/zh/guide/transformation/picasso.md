---
prev: 
  text: 'Glide'
  link: './glide'
next: false
---

# Picasso

::: warning
使用 `Transform` 之前，请确保你已经集成 `QmBlurView` 的 `transform` 和 `Picasso` 库。
```groovy :no-line-numbers
dependencies {
    // QmBlurView Transform dependency
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'
    
    // Picasso dependency
    implementation 'com.squareup.picasso:picasso:2.8'
}
```
:::

### 导入类
```java
// Picasso 类
import com.squareup.picasso.Picasso;

// QmBlurView 模糊转换类
import com.qmdeve.blurview.transform.picasso.BlurTransformation;
```

### Usage Example
```java :no-line-numbers
Picasso.get()
         .load(R.drawable.image)
         .fit()
         .centerCrop()
         .transform(

            /**
            * 使用模糊转换
            * Import class: com.qmdeve.blurview.transform.picasso.BlurTransformation
            *
            * new BlurTransformation() // 默认模糊半径25f，圆角0
            * new BlurTransformation(float blurRadius) // 自定义模糊半径，无圆角
            * new BlurTransformation(float blurRadius, float roundedCorners) // 自定义模糊半径和圆角
            */
            new BlurTransformation(25f, 50)
         )
         .into(imageView);
```

### 构造函数
| 构造函数                                 | 描述               |
|----------------------------------------|------------------|
| `BlurTransformation()`                  | 创建一个默认模糊半径为25f且无圆角的模糊转换 |
| `BlurTransformation(float blurRadius)`  | 创建一个自定义模糊半径且无圆角的模糊转换 |
| `BlurTransformation(float blurRadius, float roundedCorners)` | 创建一个自定义模糊半径和自定义圆角的模糊转换 |