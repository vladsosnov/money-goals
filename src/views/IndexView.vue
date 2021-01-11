<template>
  <main class="index-view">
    <index-hero />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import IndexHero from '@/components/Index/IndexHero.vue'

export default Vue.extend({
  name: 'IndexView',
  components: {
    IndexHero
  }
})
</script>
