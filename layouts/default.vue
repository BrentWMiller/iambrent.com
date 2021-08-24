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
      
      <div class="transition-colors duration-150 dark:opacity-75 -z-1 dark:text-accent-dark text-accent">
        <background-accent class="absolute top-0 left-0"/>
        <background-accent class="absolute bottom-0 right-0"/>
      </div>
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
  mounted() {
    // this.lms = new this.LocomotiveScroll({
    //   el: document.querySelector("#app-container"),
    //   smooth: true
    // });
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