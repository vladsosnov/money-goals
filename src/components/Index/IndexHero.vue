<template>
  <section class="index-hero container px-2 sm:px-4 flex justify-between items-center flex-col-reverse lg:flex-row">
    <ul class="space-y-0 lg:space-y-6 space-x-4 lg:space-x-0 flex flex-row lg:flex-col items-center">
      <li>
        <a
          href="https://www.instagram.com/vlade4ek_s/"
          rel="noopener nofollow"
          target="_blank"
        >
          <img
            src="@/assets/images/index/instagram.svg"
            alt="Instagram logo"
            class="w-6"
          >
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/Vlad39913765"
          rel="noopener nofollow"
          target="_blank"
        >
          <img
            src="@/assets/images/index/twitter.svg"
            alt="Twitter logo"
            class="w-6"
          >
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vladsosnov"
          rel="noopener nofollow"
          target="_blank"
        >
          <img
            src="@/assets/images/index/github.svg"
            alt="GitHub logo"
            class="w-6"
          >
        </a>
      </li>
    </ul>
    <div class="max-w-md ml-0 lg:ml-12 text-center lg:text-left">
      <h2 class="mb-6 text-base md:text-xl lg:text-2xl font-bold text-gray uppercase">
        Vlad Sosnov
      </h2>
      <h1 class="mb-6 md:mb-12 text-2xl lg:text-2xxl font-bold text-gray">
        Do your
        <span class="text-gray-polo">
          money goals <br>
        </span>
        with ease
      </h1>
      <img
        src="@/assets/images/index/hero.jpg"
        srcset="@/assets/images/index/hero.jpg 1x, @/assets/images/index/hero@2x.jpg 2x"
        alt="Hero image"
        class="mb-6 block lg:hidden rounded-8"
      >
      <button
        class="
          mx-auto lg:mx-0 mb-6 lg:mb-0
          py-3 sm:py-4 px-4 sm:px-10
          flex justify-center items-center
          text-white text-base sm:text-xl font-semibold
          bg-green hover:bg-green-active rounded-10
          transition duration-200 ease-in
          focus:outline-none
        "
        @click="onJoinNow"
      >
        Join now
      </button>
    </div>
    <div>
      <img
        src="@/assets/images/index/hero.jpg"
        srcset="@/assets/images/index/hero.jpg 1x, @/assets/images/index/hero@2x.jpg 2x"
        alt="Hero image"
        class="index-hero__image mx-auto rounded-8"
      >
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexHero',
  methods: {
    onJoinNow () {
      this.$emit('on-join-now')
    }
  }
})
</script>

<style lang="scss" scoped>
.index-hero {
  &__image {
    max-width: 75%;
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }

    @media (min-width: 1280px) {
      max-width: 100%;
    }
  }
}
</style>
