<template>
  <input
    v-model="inputValue"
    class="code-input focus:animate-none animate-pulse"
    :class="`${color}`"
    :size="inputSize()"
    spellcheck="false"
    :type="type"
    :name="name"
  >
</template>

<script>
export default {
  props: {
    initialValue: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
    },
    minSize: {
      type: [String, Number],
      default: 1
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

      if (size < this.minSize) {
        size = this.minSize;
      }

      return size > 0 ? size : 1;
    }
  }
}
</script>

<style>

</style>