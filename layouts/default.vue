<template>
  <div class="flex flex-col min-h-screen font-body text-dark-primary">
    <navigation />
    <nuxt class="flex-grow" />
    <footer class="w-full py-12 bg-primary h-half">
      <div class="container flex justify-between mx-auto text-xs text-secondary-500">
        <span>Built with Vue, Tailwind CSS, and some sweet tunes</span>
        <span>&copy; Brent Miller</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>
