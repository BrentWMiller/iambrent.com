<template>
  <p class="code-block">
    theme = THEMES.<button @click="switchTheme()" class="code-button">{{ themeColor }}</button>
  </p>
</template>

<script>
export default {
  data() {
    return {
      themeColor: 'dark'
    }
  },
  methods: {
    switchTheme() {
      const app = document.getElementById('app-container');
      this.themeColor = this.themeColor === 'dark' ? 'light' : 'dark';

      if (this.themeColor === 'dark') {
        app.classList.add('dark');
      } else {
        app.classList.remove('dark');
      }
    }
  }
}
</script>

<style>

</style>