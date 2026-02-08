---
prev: 
  text: 'Glide'
  link: './glide'
next: false
---

# Picasso

::: warning
Before using `Transform`, make sure you have integrated the Picasso library.
```groovy :no-line-numbers
dependencies {
    // QmBlurView Transform dependency
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'

    // Picasso dependency
    implementation 'com.squareup.picasso:picasso:2.8'
}
```
:::

### Import Class
```java :no-line-numbers
// Picasso main class
import com.squareup.picasso.Picasso;

// QmBlurView blur transformation class
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
            * Using blur transformation
            * Import class: com.qmdeve.blurview.transform.picasso.BlurTransformation
            *
            * new BlurTransformation() // Default blur radius 25f, rounded corners 0
            * new BlurTransformation(float blurRadius) // Custom blur radius, no rounded corners
            * new BlurTransformation(float blurRadius, float roundedCorners) // Custom blur radius and rounded corners
            */
            new BlurTransformation(25f, 50)
         )
         .into(imageView);
```

### Constructors
| Constructor                                 | Description               |
|----------------------------------------|------------------|
| `BlurTransformation()`                  | Creates a blur transformation with the default blur radius 25f, no rounded corners |
| `BlurTransformation(float blurRadius)`  | Creates a blur transformation with a custom blur radius, no rounded corners |
| `BlurTransformation(float blurRadius, float roundedCorners)` | Creates a blur transformation with a custom blur radius and custom rounded corners |