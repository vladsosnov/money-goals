<template>
  <header class="app-header container py-3 px-2 sm:px-4 flex justify-between items-center">
    <router-link :to="{ name: 'Index' }">
      <img
        src="@/assets/images/shared/logo.png"
        alt="Site Logo"
        class="app-header__logo"
      >
    </router-link>
    <nav>
      <ul class="flex items-center space-x-4 sm:space-x-8">
        <li>
          <router-link
            exact
            :to="{ name: 'Index' }"
            class="text-alto hover:text-gray-slate font-medium"
            active-class="font-bold"
          >
            Main
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Goals' }"
            class="text-alto hover:text-gray-slate font-medium"
            active-class="font-bold"
          >
            Goals
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Login' }">
            <img
              src="@/assets/images/shared/account.svg"
              alt="Account"
            >
          </router-link>
        </li>
        <li v-if="isAuthorized">
          <router-link
            :to="{ name: 'Login' }"
            class="
              py-3 sm:py-4 px-4 sm:px-10
              flex justify-center items-center
              text-white text-base sm:text-xl font-semibold
              bg-green hover:bg-green-active rounded-10
              transition duration-200 ease-in
            "
          >
            Join now
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppHeader',
  computed: {
    isAuthorized (): boolean {
      return true
    }
  }
})
</script>

<style lang="scss" scoped>
.app-header {
  &__logo {
    max-width: 50px;

    @media (min-width: 640px) {
      max-width: 60px;
    }
  }
}
</style>
