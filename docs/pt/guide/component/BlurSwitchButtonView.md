---
prev:
  text: 'Use BlurTitlebarView'
  link: './BlurTitlebarView'
next:
  text: 'Use BlurFloatingButtonView'
  link: './BlurFloatingButtonView'
---

# BlurSwitchButtonView

### Use na estrutura XML

```xml
<com.qmdeve.blurview.widget.BlurSwitchButtonView
    android:layout_width="65dp"
    android:layout_height="wrap_content"
    app:baseColor="#0161F2" />
```

### Descrição dos Atributos

| Nome do Atributo        | Tipo      | Valor padrão | Descrição                                                                                                      |
| ----------------------- | --------- | ------------ | -------------------------------------------------------------------------------------------------------------- |
| `app:baseColor`         | `color`   | `#0161F2`    | Cor base (basta definir um valor de cor e o programa calculará automaticamente a cor dos estados `on` e `off`) |
| `app:useSolidColorMode` | `boolean` | `false`      | `-`                                                                                                            |
| `app:solidOnColor`      | `color`   | `-`          | `-`                                                                                                            |
| `app:solidOffColor`     | `color`   | `-`          | `-`                                                                                                            |

### Use o código

```java
BlurSwitchButtonView blurSwitch = findViewById(R.id.blurSwitch);

// Função que observa os estados de on e off
blurSwitch.setOnCheckedChangeListener(is -> {
    if (is) {

    }
});

// Define a cor base
blurSwitch.setBaseColor(0xFF0161F2);

// O primeiro parâmetro define o estado e o segundo parâmetro determina se uma animação é necessária
blurSwitch.setChecked(false, false);

// Use o modo de cor sólida
blurSwitch.setUseSolidColorMode(true);

// Está em modo de cor sólida?
blurSwitch.isUseSolidColorMode();

// Defina a cor do modo de cor sólida
blurSwitch.setSolidColors();
```

::: warning
**`BlurSwitchButtonView` Basta definir a Cor Base e o programa calculará automaticamente a cor dos estados ligado e desligado**
:::
