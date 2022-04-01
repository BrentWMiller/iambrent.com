<template>
  <div id="app-container" class="dark">
    <div
      class="relative z-10 flex flex-col justify-between min-h-screen overflow-hidden transition-colors duration-150 bg-site dark:bg-site-dark"
    >
      <site-header />

      <main class="flex-grow">
        <nuxt />
      </main>

      <site-footer />
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      lms: null
    }
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch('menu/setMenuVisibility', false);
    }
  }
}
</script>

<style>

</style>