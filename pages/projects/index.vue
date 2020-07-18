<template>
  <div>
    <ul class="w-1/2 mx-auto my-24">
      <li v-for="project in projects" :key="project.slug">
        <nuxt-link :to="`projects/${project.slug}`">{{ project.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>
