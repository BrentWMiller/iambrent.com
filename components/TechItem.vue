<template>
  <div class="flex flex-col items-center justify-center space-y-6 bg-gray-900 tech-item rounded-2xl">
    <div class="flex items-center h-20">
      <img :src="tech.svg" />
    </div>
    <p class="text-base dark:text-white">{{ tech.label }}</p>
  </div>
</template>

<script>
export default {
  name: 'TechItem',
  props: {
    tech: {
      type: Object
    },
  }
}
</script>

<style scoped>
.tech-item {
  width: 135px;
  height: 150px;
}
</style>