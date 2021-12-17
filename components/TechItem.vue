<template>
  <div
    class="flex flex-col items-center justify-center space-y-6 bg-soft-white-100 dark:bg-gray-900 rounded-2xl w-full sm:w-[135px] h-[150px] transition-opacity duration-250"
    :class="`${visible ? 'opacity-100' : 'opacity-25'}`"
  >
    <div class="flex items-center h-10 sm:h-20">
      <img class="hidden image dark:block md:max-w-none max-w-[35px]" :src="tech.svg" :width="tech.width" :height="tech.height" :alt="tech.label" />
      <img class="block image dark:hidden" :src="tech.svgLight" :width="tech.width" :height="tech.height" :alt="tech.label" />
    </div>
    <p class="text-base text-black dark:text-white">{{ tech.label }}</p>
  </div>
</template>

<script>
export default {
  name: 'TechItem',
  props: {
    tech: {
      type: Object
    },
    visible: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
</style>