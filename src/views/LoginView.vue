<template>
  <main>
    <login-form />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import LoginForm from '@/components/Auth/LoginForm.vue'

export default Vue.extend({
  name: 'LoginView',
  components: {
    LoginForm
  }
})
</script>
