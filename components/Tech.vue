<template>
  <div class="container relative flex items-center space-x-10">
    <h2 class="-mt-20 tech-title heading-2 dark:text-white">Using an ever-growing list of technology.</h2>

    <div class="tech-grid">
<pre class="absolute top-0 -right-20 code-block">
/**
 * cms
 * libraries
 * frameworks
 * workflows
**/
</pre>

      <div class="mb-8 -ml-10 code-block">const frequentTech =</div>
      <div class="grid grid-cols-5 gap-4">
        <tech-item
          v-for="tech in techItems"
          :key="tech.id"
          :tech="tech"
        />
      </div>

      <div class="flex items-end justify-between mt-6">
        <p class="ml-12 code-block" aria-hidden="true">
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

<style scoped>
.tech-title {
  max-width: 400px;
}

.tech-grid {
  max-width: 885px;
}
</style>