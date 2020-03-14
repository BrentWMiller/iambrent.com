<template>
  <div>
    <div class="flex flex-col h-screen">
      <Hero />
    </div>
  </div>
</template>

<script>
import Hero from '~/components/Hero'

export default {
  components: {
    Hero
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>
