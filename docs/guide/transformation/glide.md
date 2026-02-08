---
prev: false
next: 
  text: 'Picasso'
  link: './picasso'
---

# Glide

::: warning
Before using `Transform`, make sure you have integrated the Glide library.
```groovy :no-line-numbers
dependencies {
    // QmBlurView Transform dependency
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'

    // Glide dependency
    implementation 'com.github.bumptech.glide:glide:5.0.5'
}
```
:::

### Import Class
```java :no-line-numbers
// Glide main class
import com.bumptech.glide.Glide;

// QmBlurView blur transformation class
import com.qmdeve.blurview.transform.glide.BlurTransformation;
```

### Usage Example
```java :no-line-numbers
Glide.with(this)
    .load(R.drawable.image)
    .apply(new RequestOptions().transform(
           new CenterCrop(),

         /**
          * Use blur transformation
          * new BlurTransformation() // Default blur radius 25f, no rounded corners
          * new BlurTransformation(float blurRadius) // Custom blur radius, no rounded corners
          * new BlurTransformation(float blurRadius, float roundedCorners) // Custom blur radius and rounded corners
          */
           new BlurTransformation(24f, 50)
       ))
    .into(imageView);
```

### Constructors
| Constructor                                 | Description               |
|----------------------------------------|------------------|
| `BlurTransformation()`                  | Creates a blur transformation with the default blur radius of 25f and no rounded corners |
| `BlurTransformation(float blurRadius)`  | Creates a blur transformation with a custom blur radius and no rounded corners |
| `BlurTransformation(float blurRadius, float roundedCorners)` | Creates a blur transformation with a custom blur radius and custom rounded corners |