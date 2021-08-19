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
          svg: require('@/assets/icons/wordpress.svg')
        },
        {
          id: 'drupal',
          label: 'Drupal',
          svg: require('@/assets/icons/drupal.svg')
        },
        {
          id: 'firebase',
          label: 'Firebase',
          svg: require('@/assets/icons/firebase.svg')
        },
        {
          id: 'tailwind',
          label: 'Tailwind',
          svg: require('@/assets/icons/tailwind.svg')
        },
        {
          id: 'shopify',
          label: 'Shopify',
          svg: require('@/assets/icons/shopify.svg')
        },
        {
          id: 'vue',
          label: 'Vue',
          svg: require('@/assets/icons/vue.svg')
        },
        {
          id: 'react',
          label: 'React',
          svg: require('@/assets/icons/react.svg')
        },
        {
          id: 'angular',
          label: 'Angular',
          svg: require('@/assets/icons/angular.svg')
        },
        {
          id: 'bootstrap',
          label: 'Bootstrap',
          svg: require('@/assets/icons/bootstrap.svg')
        },
        {
          id: 'git',
          label: 'Git',
          svg: require('@/assets/icons/git.svg')
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