<template>
  <div class="absolute top-0 right-0 z-50">
    <button
      v-show="visible"
      @click="closeNav"
      class="fixed top-0 left-0 w-screen h-screen transition-opacity duration-150 bg-white dark:bg-black"
      :class="`${visible ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`"
    />

    <div
      class="fixed top-0 right-0 flex flex-col w-full h-screen max-w-xl p-10 space-y-4 transition-transform duration-200 transform bg-site dark:bg-site-dark"
      :class="`${visible ? 'translate-x-1 pointer-events-auto' : 'translate-x-full pointer-events-auto'}`"
    >
      <div class="flex-grow">
        <p class="mb-8 code-block">menuVisible = <button @click="closeNav" class="code-button">{{ visible }}</button></p>
        <p class="text-black dark:text-white">Thanks for checking out the site. It's still a work in progress, but I hope you enjoyed it.</p>
      </div>

      <theme-switcher class="block md:hidden" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeNav() {
      this.$store.dispatch('menu/setMenuVisibility', false);
    }
  }
}
</script>

<style>

</style>