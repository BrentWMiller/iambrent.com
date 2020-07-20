<template>
  <div class="mt-24">
    <div class="container w-8/12 mx-auto mb-20">
      <h1>Style Guide</h1>
      <hr />

      <h2>Colors</h2>
      <ul class="grid grid-cols-4 gap-1">
        <li
          v-for="color in colors"
          :key="color"
          class="flex flex-col items-center justify-center w-full border"
          :class="`border-${color}`"
        >
          <span class="w-full h-16" :class="`bg-${color}`"></span>
          <span class="p-3">{{ color }}</span>
        </li>
      </ul>
      <hr />

      <h2>Typography</h2>
      <hr />
      <h1>Heading One</h1>
      <h2>Heading Two</h2>
      <h3>Heading Three</h3>
      <h4>Heading Four</h4>
      <h5>Heading Five</h5>
      <h6>Heading Six</h6>
    </div>
  </div>
</template>

<script>
import { theme } from '../tailwind.config.js';
export default {
  data() {
    return {};
  },
  computed: {
    colors() {
      return this.propertiesToArray(theme.extend.colors, '-');
    },
  },
  methods: {
    propertiesToArray(obj, delimiter = '.') {
      const isObject = (val) => typeof val === 'object' && !Array.isArray(val);

      const addDelimiter = (a, b) => (a ? `${a}${delimiter}${b}` : b);

      const paths = (obj = {}, head = '') => {
        return Object.entries(obj).reduce((product, [key, value]) => {
          let fullPath = addDelimiter(head, key);
          return isObject(value) ? product.concat(paths(value, fullPath)) : product.concat(fullPath);
        }, []);
      };

      return paths(obj);
    },
  },
};
</script>

<style></style>
