---
prev:
  text: 'Use BlurFloatingButtonView'
  link: './BlurFloatingButtonView'
next: false
---

# BlurBottomNavigationView

::: warning
Para usar esta visualização, certifique-se de integrar as dependências de `navigation`:

```groovy :no-line-numbers
dependencies {
    // Dependência BottomNavigationView
    implementation '{{GROUP_ID}}:navigation:{{VERSION}}'
}
```

:::

### Use na estrutura XML

```xml
<com.qmdeve.blurview.widget.BlurBottomNavigationView
    android:id="@+id/bottomnav"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:item_iconSize="24dp"
    app:item_textBold="true"
    app:item_textSize="12dp"
    app:menu="@menu/bottom_nav_menu"
    app:navOverlayColor="#AAFFFFFF"
    app:navSelectedColor="#0161F2"
    app:navUnselectedColor="#000"
    android:layout_alignParentBottom="true" />
```

### Referência da API

| Method Name               | Descrição                              |
| ------------------------- | -------------------------------------- |
| `bind(Object)`            | Vincula ao `ViewPager` ou `ViewPagerN` |
| `setMenu(int)`            | Define o menu                          |
| `setSelectedTab(int)`     | Define a aba selecionada               |
| `setSelectedColor(int)`   | Define a cor de selecionado            |
| `setUnselectedColor(int)` | Define a cor de não selecionado        |
| `setIconSize(float)`      | Define o tamanho do ícone              |
| `setTextSize(float)`      | Define o tamanho do texto              |
| `setTextBold(boolean)`    | Define o texto em negrito              |

### Descrição dos Atributos

| Nome do Atributo         | Tipo        | Valor padrão | Descrição                       |
| ------------------------ | ----------- | ------------ | ------------------------------- |
| `app:navBlurRadius`      | `dimension` | `25dp`       | Define o raio de desfoque       |
| `app:navOverlayColor`    | `color`     | `#AAFFFFFF`  | Define a cor de sobreposição    |
| `app:menu`               | `reference` | `null`       | Define o menu                   |
| `app:navSelectedColor`   | `color`     | `BLUE`       | Define a cor de selecionado     |
| `app:navUnselectedColor` | `color`     | `GRAY`       | Define a cor de não selecionado |
| `app:item_iconSize`      | `dimension` | `24dp`       | Define o tamanho do ícone       |
| `app:item_textSize`      | `dimension` | `12dp`       | Define o tamanho do texto       |
| `app:item_textBold`      | `boolean`   | `false`      | Define o texto em negrito       |
