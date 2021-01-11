<template>
  <div
    id="app"
    class="app flex flex-col justify-between"
    :class="{ 'app--gradient': isAuthorized }"
  >
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
  },
  computed: {
    isAuthorized (): boolean {
      return true
    }
  }
})
</script>

<style lang="scss">
.app {
  height: 100vh;
  font-family: Roboto, sans-serif;

  &--gradient {
    background: linear-gradient(to right, #212842 0%, #212842 20%, #161b2f 20%, #161b2f 100%);
  }

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
