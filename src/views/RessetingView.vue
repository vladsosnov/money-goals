<template>
  <main>
    <resseting-form />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import RessetingForm from '@/components/Auth/RessetingForm.vue'

export default Vue.extend({
  name: 'LoginView',
  components: {
    RessetingForm
  }
})
</script>
