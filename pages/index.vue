<template>
  <div>
    <div class="flex flex-col h-screen">
      <hero />
    </div>

    <div class="container mx-auto mt-40">
      <div class="w-10/12 mx-auto">
        <h2 class="relative flex items-center text-lg font-bold tracking-wider uppercase text-secondary-500">
          <dots class="absolute left-0 -mt-4 -ml-16 -z-1" />
          Projects
        </h2>
        <h3 class="mb-12 text-5xl font-semibold text-primary-500">
          Some of my favorites
        </h3>
      </div>
    </div>

    <div v-dragscroll @dragscrollstart="onDragStart" @click.capture="onDragClick" class="overflow-hidden overflow-x-auto">
      <div class="container mx-auto">
        <div class="w-10/12 mx-auto">
          <ul class="flex mb-12">
            <li
              v-for="project in projects"
              :key="project.slug"
              class="relative flex flex-shrink-0 w-5/12 mr-8 overflow-hidden bg-no-repeat bg-cover rounded-lg h-100 bg-secondary-50"
              :style="{
                backgroundImage: project.image ? `url(${project.image})` : '',
              }"
            >
              <nuxt-link class="relative flex flex-col justify-end w-full h-full p-8 z-1" :to="`projects/${project.slug}`">
                <h4 class="mb-2 text-2xl font-bold leading-tight" :class="project.image ? 'text-white' : 'text-primary-500'">
                  {{ project.title }}
                </h4>
                <p :class="project.image ? 'text-light-secondary' : 'text-dark-secondary'">
                  {{ project.description }}
                </p>
              </nuxt-link>
              <div v-if="project.image" class="absolute top-0 left-0 w-full h-full bg-g-black blend-multiply"></div>
            </li>

            <li class="relative flex flex-shrink-0 w-2/12"></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container mx-auto mt-12 mb-40">
      <div class="w-10/12 mx-auto">
        <nuxt-link to="/projects" class="inline-flex items-center px-6 py-3 text-lg font-bold text-primary-500 bg-accent-500">
          See all of my projects
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 ml-4">
            <path class="text-primary-500" d="M14.59 13H7a1 1 0 010-2h7.59l-2.3-2.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4l2.3-2.3z" />
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  data: () => ({
    dragged: false,
    dragTimeout: null,
  }),
  methods: {
    onDragStart() {
      clearTimeout(this.dragTimeout);

      this.dragged = false;
      this.dragTimeout = setTimeout(() => {
        this.dragged = true;
      }, 100); // Minimal delay to be regarded as drag instead of click
    },
    onDragClick(e) {
      if (this.dragged) {
        e.preventDefault();
      }

      this.dragged = false;
    },
  },
  computed: {
    projects() {
      return this.$store.state.projects.filter((project) => project.featured);
    },
  },
};
</script>
