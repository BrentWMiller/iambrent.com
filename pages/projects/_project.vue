<template>
  <div class="mt-24">
    <div class="container w-8/12 mx-auto mb-20 text-left">
      <h2 class="mb-2 text-lg font-semibold uppercase text-secondary-500">{{ project.title }}</h2>
      <h3 class="mb-4 text-4xl font-semibold leading-tight text-primary">{{ project.description }}</h3>
      <p class="text-dark-primary" v-if="project.body" v-html="$md.render(project.body)"></p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ params, payload }) {
    if (payload) return { project: payload };
    else
      return {
        project: await require(`~/assets/content/project/${params.project}.json`),
      };
  },
};
</script>
