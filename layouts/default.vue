<template>
  <div class="flex flex-col h-screen font-body text-dark-primary">
    <navigation />
    <div class="flex-grow">
      <nuxt />
    </div>
  </div>
</template>

<script>
import navigation from '~/components/navigation/navigation.vue'

export default {
  components: {
    navigation
  }
}
</script>
