---
prev: false
next:
  text: 'Picasso'
  link: './picasso'
---

# Glide

::: warning
Antes de usar `Transform`, certifique-se de ter integrado a biblioteca Glide.

```groovy :no-line-numbers
dependencies {
    // Dependência de Transformação do QmBlurView
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'

    // Biblioteca Glide
    implementation 'com.github.bumptech.glide:glide:5.0.5'
}
```

:::

### Importe as Classes

```java :no-line-numbers
// Importação da Biblioteca Picasso
import com.bumptech.glide.Glide;

// Importação da Biblioteca do QmBlurView
import com.qmdeve.blurview.transform.glide.BlurTransformation;
```

### Exemplo de Uso

```java :no-line-numbers
Glide.with(this)
    .load(R.drawable.image)
    .apply(new RequestOptions().transform(
           new CenterCrop(),

         /**
          * Usando transformação de desfoque
          * new BlurTransformation() // Por padrão o raio de desfoque é de 25f e sem os cantos arredondados
          * new BlurTransformation(float blurRadius) // Raio de desfoque customizado e sem os cantos arredondados
          * new BlurTransformation(float blurRadius, float roundedCorners) // Raio de desfoque e cantos arredondados customizados
          */
           new BlurTransformation(24f, 50)
       ))
    .into(imageView);
```

### Construtores

| Construtor                                                   | Descrição                                                                                          |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| `BlurTransformation()`                                       | Cria uma transformação de desfoque com o raio de desfoque de `25f` e sem os cantos arredondados    |
| `BlurTransformation(float blurRadius)`                       | Cria uma transformação de desfoque com o raio de desfoque customizado e sem os cantos arredondados |
| `BlurTransformation(float blurRadius, float roundedCorners)` | Cria uma transformação de desfoque com o raio de desfoque e cantos arredondados customizados       |
