---
prev:
  text: 'Visão Geral'
  link: './overview'
next:
  text: 'Use BlurView'
  link: './component/BlurView'
---

# Vamos Começar

### Obrigatoriedades do Projeto

| SDK Mínimo | SDK Compilador | Versão do Java |
| ---------- | -------------- | -------------- |
| `API 21+`  | `API 34+`      | `Java 11+`     |

## Integração

### Adicionando dependêncies <Badge type="tip" text="v{{VERSION}}" />

Adicione a dependência no arquivo `build.gradle`:

::: code-group

```groovy [build.gradle]
dependencies {
   // Núcleo da Biblioteca (Obrigatório)
   implementation '{{GROUP_ID}}:core:{{VERSION}}'

   // Suporte a Navegação (Opcional)
   implementation '{{GROUP_ID}}:navigation:{{VERSION}}'

   // Transformações de Carregamento de Imagem (Opcional - Glide/Picasso)
   implementation '{{GROUP_ID}}:transform:{{VERSION}}'
}
```

```kotlin [build.gradle.kts]
dependencies {
   // Núcleo da Biblioteca (Obrigatório)
   implementation("{{GROUP_ID}}:core:{{VERSION}}")

   // Suporte a Navegação (Opcional)
   implementation("{{GROUP_ID}}:navigation:{{VERSION}}")

   // Transformações de Carregamento de Imagem (Opcional - Glide/Picasso)
   implementation("{{GROUP_ID}}:transform:{{VERSION}}")
}
```

:::

<AdUnit />
