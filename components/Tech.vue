<template>
  <div class="container relative items-center lg:space-x-10 lg:flex">
    <h2 class="mb-10 lg:mb-0 lg:-mt-20 tech-title heading-2 dark:text-white">Using an ever-growing list of technology.</h2>

<pre class="absolute -right-4 sm:right-0 top-16 sm:-top-10 lg:top-0 md:-right-20 code-block">
/**
 * cms
 * libraries
 * frameworks
 * workflows
**/
</pre>

    <div class="relative flex-shrink-0 tech-grid">

      <div class="mb-8 lg:-ml-10 code-block">const frequentTech =</div>
      <div class="flex flex-wrap gap-4 mx-auto sm:grid sm:grid-cols-4 md:grid-cols-5">
        <tech-item
          v-for="tech in techItems"
          :key="tech.id"
          :tech="tech"
        />
      </div>

      <div class="flex items-end justify-between mt-6">
        <p class="lg:ml-12 code-block" aria-hidden="true">
          <span class="text-4xl">...</span>
        </p>

        <p class="code-block">
          frequentTech.filter("<button @click="true" class="code-button">{{ currentFilter }}</button>")
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentFilter: 'all',
      techItems: [
        {
          id: 'wordpress',
          label: 'WordPress',
          svg: require('@/assets/icons/wordpress.svg'),
          svgLight: require('@/assets/icons/wordpress-light.svg')
        },
        {
          id: 'drupal',
          label: 'Drupal',
          svg: require('@/assets/icons/drupal.svg'),
          svgLight: require('@/assets/icons/drupal-light.svg')
        },
        {
          id: 'firebase',
          label: 'Firebase',
          svg: require('@/assets/icons/firebase.svg'),
          svgLight: require('@/assets/icons/firebase-light.svg')
        },
        {
          id: 'tailwind',
          label: 'Tailwind',
          svg: require('@/assets/icons/tailwind.svg'),
          svgLight: require('@/assets/icons/tailwind-light.svg')
        },
        {
          id: 'shopify',
          label: 'Shopify',
          svg: require('@/assets/icons/shopify.svg'),
          svgLight: require('@/assets/icons/shopify-light.svg')
        },
        {
          id: 'vue',
          label: 'Vue',
          svg: require('@/assets/icons/vue.svg'),
          svgLight: require('@/assets/icons/vue-light.svg')
        },
        {
          id: 'react',
          label: 'React',
          svg: require('@/assets/icons/react.svg'),
          svgLight: require('@/assets/icons/react-light.svg')
        },
        {
          id: 'angular',
          label: 'Angular',
          svg: require('@/assets/icons/angular.svg'),
          svgLight: require('@/assets/icons/angular-light.svg')
        },
        {
          id: 'bootstrap',
          label: 'Bootstrap',
          svg: require('@/assets/icons/bootstrap.svg'),
          svgLight: require('@/assets/icons/bootstrap-light.svg')
        },
        {
          id: 'git',
          label: 'Git',
          svg: require('@/assets/icons/git.svg'),
          svgLight: require('@/assets/icons/git-light.svg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="postcss">
.tech-title {
  max-width: 400px;
}

.tech-grid {
  @media (max-width: 1024px) {
    max-width: 885px;
  }
}
</style>