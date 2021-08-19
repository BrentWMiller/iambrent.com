<template>
  <div class="flex flex-col justify-between min-h-screen overflow-hidden bg-site dark:bg-site-dark">
    <site-header />

    <main class="my-12 space-y-32 md:my-20 md:space-y-64">
      <intro />

      <tech />

      <stats />

      <tasks />

      <social-and-contact />
    </main>

    <site-footer />
  </div>
</template>

<script>
export default {
  beforeMount() {
    document.body.classList.add('dark');
  }
}
</script>
