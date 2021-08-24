<template>
  <div>
    <h3 class="flex flex-col items-center md:space-x-4 lg:flex-row">
      <span :class="`block text-8xl font-bold text-${stat.color}`">
        {{ stat.value }}{{ stat.suffix }}
      </span>
      <span class="font-medium dark:text-white max-w-[5.75rem] block md:text-left text-center">{{ stat.label }}</span>
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