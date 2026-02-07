<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  try {
    window.addAds()
    console.log('AdUnit loaded')
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <div class="gads">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-format="fluid"
         data-ad-layout-key="-f9+4w+7x-eg+3a"
         data-ad-client="ca-pub-1263219814762561"
         data-ad-slot="7838095868"></ins>
  </div>
</template>