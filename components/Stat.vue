<template>
  <div>
    <h3 class="flex items-center space-x-4">
      <span :class="`block text-8xl font-bold ${stat.color}`">{{ stat.value }}+</span>
      <span class="font-medium dark:text-white max-w-[6.75rem] block">{{ stat.label }}</span>
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