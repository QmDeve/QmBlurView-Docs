---
prev:
  text: 'Vamos Começar'
  link: '../getting-started'
next:
  text: 'Use BlurButtonView'
  link: './BlurButtonView'
---

# BlurView

### Use na estrutura XML

```xml
<com.qmdeve.blurview.widget.BlurView
    android:id="@+id/blurView"
    android:layout_width="match_parent"
    android:layout_height="100dp"
    app:blurRadius="20dp"
    app:overlayColor="#66FFFFFF"
    app:cornerRadius="24dp"/>
```

### Use o código para definir as propriedades

```java
BlurView blurView = findViewById(R.id.blurView);
blurView.setBlurRadius(20f);
blurView.setOverlayColor(0x66FFFFFF);
blurView.setCornerRadius(20);
```

### Referência da API

| Método                       | Descrição                       |
| ---------------------------- | ------------------------------- |
| `setBlurRadius(float)`       | Define o raio de desfoque       |
| `setOverlayColor(int)`       | Define a cor de sobreposição    |
| `setCornerRadius(float)`     | Define o raio de curva          |
| `setDownsampleFactor(float)` | Define o fator de subamostragem |

### Descrição dos Atributos

| Nome do Atributo          | Tipo        | Valor padrão | Descrição                                                                                                    |
| ------------------------- | ----------- | ------------ | ------------------------------------------------------------------------------------------------------------ |
| `app:blurRadius`          | `dimension` | `10`         | Define o raio de desfoque                                                                                    |
| `app:overlayColor`        | `color`     | `#AAFFFFFF`  | Define a cor de sobreposição                                                                                 |
| `app:cornerRadius`        | `dimension` | `0`          | Define o raio de curva da vista                                                                              |
| `app:setDownsampleFactor` | `float`     | `0`          | Define o fator de subamostragem, um valor mais alto significa melhor desempenho, mas pior efeito de desfoque |
