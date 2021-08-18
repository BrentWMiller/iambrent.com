<template>
  <input class="code-input focus:animate-none animate-pulse" v-model="inputValue" :size="inputSize()" spellcheck="false">
</template>

<script>
export default {
  props: {
    initialValue: {
      type: String
    }
  },
  data() {
    return {
      inputValue: this.initialValue ? this.initialValue : ''
    }
  },
  watch: {
    inputValue(value) {
      this.$emit('update', value);
    }
  },
  methods: {
    inputSize() {
      let size = this.inputValue.length - 4;

      return size > 0 ? size : 1;
    }
  }
}
</script>

<style>

</style>