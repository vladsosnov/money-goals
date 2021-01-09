<template>
  <main>
    <register-form />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import RegisterForm from '@/components/Auth/RegisterForm.vue'

export default Vue.extend({
  name: 'LoginView',
  components: {
    RegisterForm
  }
})
</script>
