<template>
  <header class="container flex justify-between py-10 space-x-4">
    <logo />

    <div class="flex items-center space-x-12">
      <theme-switcher class="hidden md:block" />

      <button type="button" class="button button-function" @click="toggleMenu">
        toggleMenu<span class="text-lightula-blue dark:text-darkula-blue">()</span>
      </button>
    </div>

    <site-menu :visible="menuVisible" />
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState('menu', ['menuVisible'])
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('menu/setMenuVisibility', !this.menuVisible);
    }
  }
}
</script>

<style>

</style>