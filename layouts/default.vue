<template>
  <div>
    <Navigation />
    <div class="font-body text-dark-primary">
      <nuxt />
    </div>
    <footer
      class="container flex justify-between w-full py-3 mx-auto text-xs text-gray-500 h-half"
    >
      <span>Built with Vue, Tailwind CSS, and some sweet tunes</span>
      <span>&copy; Brent Miller</span>
    </footer>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'

export default {
  components: {
    Navigation
  }
}
</script>
