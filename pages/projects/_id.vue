<template>
  <div>
    <div class="container w-5/12 mx-auto mb-20 text-center">
      <h2 class="mb-2 text-lg font-semibold uppercase text-secondary-500">{{ project.tag }}</h2>
      <h3 class="mb-4 text-4xl font-semibold leading-tight text-primary">{{ project.title }}</h3>
      <p class="text-dark-primary">{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      id: this.$route.params.id,
      projects: [
        {
          id: 'test-project',
          title: 'This is a test project',
          tag: 'consectetur in aliquet',
          description:
            'Arcu at hac leo tortor lacus, arcu nulla. Ut consectetur in aliquet et. Curabitur non eget eu interdum orci magna ac netus risus. Urna platea sem urna, dui ullamcorper.'
        }
      ]
    }
  },
  computed: {
    project() {
      return this.projects.find((project) => project.id === this.id)
    }
  }
}
</script>
