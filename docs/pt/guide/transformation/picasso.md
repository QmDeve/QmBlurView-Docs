---
prev:
  text: 'Glide'
  link: './glide'
next: false
---

# Picasso

::: warning
Antes de usar `Transform`, certifique-se de ter integrado a biblioteca Picasso.

```groovy :no-line-numbers
dependencies {
    // Dependência de Transformação do QmBlurView
    implementation '{{GROUP_ID}}:transform:{{VERSION}}'

    // Biblioteca Picasso
    implementation 'com.squareup.picasso:picasso:2.8'
}
```

:::

### Importe as Classes

```java :no-line-numbers
// Importação da Biblioteca Picasso
import com.squareup.picasso.Picasso;

// Importação da Biblioteca do QmBlurView
import com.qmdeve.blurview.transform.picasso.BlurTransformation;
```

### Exemplo de Uso

```java :no-line-numbers
Picasso.get()
         .load(R.drawable.image)
         .fit()
         .centerCrop()
         .transform(

            /**
            * Usando transformação de desfoque
            * Import class: com.qmdeve.blurview.transform.picasso.BlurTransformation
            *
            * new BlurTransformation() // Por padrão o raio de desfoque é de 25f e os cantos arredondados são de 0
            * new BlurTransformation(float blurRadius) // Raio de desfoque customizado e sem os cantos arredondados
            * new BlurTransformation(float blurRadius, float roundedCorners) // Raio de desfoque e cantos arredondados customizados
            */
            new BlurTransformation(25f, 50)
         )
         .into(imageView);
```

### Construtores

| Construtor                                                   | Descrição                                                                                          |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| `BlurTransformation()`                                       | Cria uma transformação de desfoque com o raio de desfoque de `25f` e sem os cantos arredondados    |
| `BlurTransformation(float blurRadius)`                       | Cria uma transformação de desfoque com o raio de desfoque customizado e sem os cantos arredondados |
| `BlurTransformation(float blurRadius, float roundedCorners)` | Cria uma transformação de desfoque com o raio de desfoque e cantos arredondados customizados       |
