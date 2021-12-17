<template>
  <div class="inline-block w-auto code-input">
    <label :for="`code-input-${_uid}`" class="sr-only"></label>
    <input
      v-model="inputValue"
      class="code-input-field focus:animate-none animate-pulse"
      :class="`${color}`"
      :size="inputSize()"
      spellcheck="false"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :id="`code-input-${_uid}`"
    >
  </div>
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
    },
    placeholder: {
      type: String,
      default: ''
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
      let size = this.inputValue.length ;

      if (size < this.minSize) {
        size = this.minSize;
      }

      return size > 0 ? size : 2;
    }
  }
}
</script>

<style>

</style>