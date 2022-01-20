<template>
  <div id="nav">
    <TheProduct />
  </div>
  <router-view/>
</template>
<script>
import TheProduct from '@/components/TheProduct.vue'
export default {
  components: {
    TheProduct
  }
}
</script>
