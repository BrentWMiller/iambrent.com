<template>
  <p class="code-block">
    let theme = THEMES.<button @click="switchTheme()" class="code-button">{{ themeColor }}</button>
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
      this.themeColor = this.themeColor === 'dark' ? 'light' : 'dark';

      if (this.themeColor === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  }
}
</script>

<style>

</style>