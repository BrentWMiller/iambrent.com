<template>
  <div class="flex flex-col justify-between min-h-screen bg-site dark:bg-site-dark">
    <site-header />

    <main class="my-20 space-y-64">
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
