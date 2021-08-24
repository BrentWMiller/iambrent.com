<template>
  <div>
    <h3 class="flex flex-col items-center space-x-4 lg:flex-row">
      <span :class="`block text-8xl font-bold text-${stat.color}`">{{ stat.value }}+</span>
      <span class="font-medium dark:text-white min-w-[6.75rem] block">{{ stat.label }}</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Stat',
  props: {
    stat: {
      type: Object
    },
  }
}
</script>

<style>

</style>