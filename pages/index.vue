<template>
  <div>
    <div class="flex flex-col h-screen">
      <hero />
    </div>

    <ul class="container mx-auto my-24">
      <li v-for="project in projects" :key="project.slug">
        <nuxt-link :to="`projects/${project.slug}`">{{ project.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import hero from '~/components/Hero'

export default {
  components: {
    hero
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects
    }
  }
}
</script>
