<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

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
