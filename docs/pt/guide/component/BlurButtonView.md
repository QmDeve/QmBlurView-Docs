---
prev:
  text: 'Use BlurView'
  link: './BlurView'
next:
  text: 'Use ProgressiveBlurView'
  link: './ProgressiveBlurView'
---

# BlurButtonView

### Use na estrutura XML

```xml
<com.qmdeve.blurview.widget.BlurButtonView
    android:id="@+id/button"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Button Test"
    app:buttonCornerRadius="12dp"
    app:buttonIconPadding="8dp"
    app:buttonIconSize="24dp"
    app:buttonTextBold="true"
    aap:blurRadius="12dp"
    app:overlayColor="#80FFFFFF"
    android:icon="?android:attr/actionModeWebSearchDrawable"
    app:buttonIconTint="@color/black"/>
```

### Referência da API

| Método                         | Descrição                       |
| ------------------------------ | ------------------------------- |
| `setButtonCornerRadius`        | Define raio do canto do botão   |
| `setIconPadding`               | Define o preenchimento do ícone |
| `setIconSize`                  | Define o tamanho do ícone       |
| `setIconTint`                  | Define a tonalidade do ícone    |
| `setIcon` ou `setIconResource` | Define o próprio ícone          |
| `setText`                      | Define o próprio texto          |
| `setTextSize`                  | Define o tamanho do texto       |
| `setTextColor`                 | Define a cor do texto           |
| `setTextBold`                  | Define o texto em negrito       |

### Descrição dos Atributos

| Nome do Atributo         | Tipo        | Descrição                       |
| ------------------------ | ----------- | ------------------------------- |
| `app:buttonCornerRadius` | `dimension` | Define raio do canto do botão   |
| `app:buttonIconPadding`  | `dimension` | Define o preenchimento do ícone |
| `app:buttonIconSize`     | `dimension` | Define o tamanho do ícone       |
| `app:buttonTextBold`     | `boolean`   | Define o texto em negrito       |
| `app:blurRadius`         | `dimension` | Define o raio de desfoque       |
| `app:overlayColor`       | `color`     | Define a cor de sobreposição    |
| `app:buttonIconTint`     | `color`     | Define a tonalidade do ícone    |
| `android:icon`           | -           | Define o próprio ícone          |
| `android:text`           | -           | Define o próprio texto          |
| `android:textSize`       | -           | Define o tamanho do texto       |

---
