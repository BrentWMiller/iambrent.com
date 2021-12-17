<template>
  <section
    class="container space-y-4"
  >
    <p class="code-block">
      hello()<br />
      let buzzword = "<code-input :initial-value="buzzword" @update="setBuzzword"/>"<br />
    </p>

    <h1 class="max-w-4xl dark:text-white heading-1">
      Building <span class="text-lightula-green dark:text-darkula-green">{{ buzzword }}</span> websites and apps.
    </h1>
    <p class="code-block">with the team at <a href="https://www.skycatchfire.com/" rel="noreferrer" class="button dark:hover:text-darkula-green hover:text-lightula-green">SKYCATCHFIRE</a></p>
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