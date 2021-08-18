<template>
  <section class="container space-y-4">
    <p class="code-block">
      let buzzword = "<code-input :initial-value="buzzword" @update="setBuzzword"/>"<br />
      hello()
    </p>

    <h1 class="max-w-4xl text-white heading-1">
      Building <span class="text-darkula-green">{{ buzzword }}</span> websites and apps.
    </h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      buzzword: 'kick_ass'
    }
  },
  methods: {
    setBuzzword(value) {
      this.buzzword = value;
    }
  }
}
</script>

<style>

</style>