<template>
  <div class="container space-y-16 text-black dark:text-white">
    <div class="space-y-2">
      <h1 class="heading-2">Snippets</h1>
      <p class="code-block">// Helpful code snippets for things I'm always forgetting.</p>
    </div>
    
    <ul v-if="snippets" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <li class="space-y-3" v-for="snippet, index, in snippets" :key="index">
        <h2 class="text-lg font-medium">{{ snippet.title }}</h2>
        <pre class="p-4 bg-soft-white-100 dark:bg-gray-900">{{ snippet.code }}</pre>
        <p class="code-block">{{ snippet.tags }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Snippets',
  data() {
    return {
      snippets: [
        {
          title: "Find & replace all ACF timestamps in VS Code using regex.",
          code: "(?<=\"modified\": ).*$",
          tags: "// regex, vs code"
        },
        {
          title: "Remove cached items from .gitignore",
          code: "git rm -r --cached ."
          tags: "// git"
        },
        {
          title: "Remove composer memory limit",
          code: "COMPOSER_MEMORY_LIMIT=-1"
          tags: "// composer, drupal"
        }
      ]
    }
  }
}
</script>

<style>

</style>
