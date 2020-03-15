<template>
  <div>
    <div class="flex flex-col h-screen">
      <hero />
    </div>

    <div class="container mx-auto my-40">
      <div class="w-10/12 mx-auto">
        <h2
          class="relative flex items-center text-lg font-bold tracking-wider uppercase text-secondary-500"
        >
          <dots class="absolute left-0 -mt-4 -ml-16 -z-1" />Projects
        </h2>
        <h3 class="mb-12 text-5xl font-semibold text-primary">Some of my favorites</h3>

        <ul class="grid grid-cols-3 gap-8">
          <li v-for="project in projects" :key="project.slug">
            <nuxt-link class="block p-10 bg-secondary-300" :to="`projects/${project.slug}`">
              <h4 class="mb-4 text-2xl font-bold leading-tight text-primary">{{ project.title }}</h4>
              <p class="text-dark-secondary">{{ project.description }}</p>
            </nuxt-link>
          </li>
        </ul>

        <nuxt-link
          to="/projects"
          class="inline-flex items-center px-6 py-3 mt-12 text-lg font-bold text-primary bg-accent"
        >
          See all of my projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-8 ml-4"
          >
            <path
              class="text-primary"
              d="M14.59 13H7a1 1 0 010-2h7.59l-2.3-2.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4l2.3-2.3z"
            />
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import hero from '~/components/Hero'
import dots from '~/components/Dots'

export default {
  components: {
    hero,
    dots
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
