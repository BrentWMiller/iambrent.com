<template>
  <div class="flex flex-col justify-between min-h-screen dark:bg-site">
    <site-header />

    <main class="my-20 space-y-64">
      <intro />

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
