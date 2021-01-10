<template>
  <div id="app">
    <app-header />
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
    <app-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppHeader from '@/components/Shared/AppHeader.vue'
import AppFooter from '@/components/Shared/AppFooter.vue'

export default Vue.extend({
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
})
</script>

<style lang="scss">
#app {
  font-family: Roboto, sans-serif;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
}
</style>
