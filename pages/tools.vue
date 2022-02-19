<template>
  <div class="container space-y-16 text-black dark:text-white">
    <div class="space-y-2">
      <h1 class="heading-2">Tools</h1>
      <p class="code-block">// Apps, setup, whatever I use all the time.</p>
    </div>

    <div>
      <h2>Apps</h2>
      <p>I use these apps almost every day for work and life.</p>

      <ul>
        <li v-for="app, index in apps" :key="index">
          <a :href="`${app.url}?ref=iambrent.com`" target="_blank" rel="noopener" title="View website">{{ app.name }}</a>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Tools',
  data() {
    return {
      apps: {
        vs_code: {
          name: 'VS Code',
          url: 'https://code.visualstudio.com',
        },
        craft: {
          name: 'Craft',
          url: 'https://www.craft.do',
        },
        figma: {
          name: 'Figma',
          url: 'https://www.figma.com/',
        }
      }
    }
  }
}
</script>

<style>

</style>