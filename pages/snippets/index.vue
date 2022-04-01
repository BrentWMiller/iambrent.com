<template>
  <div class="container space-y-16 text-black dark:text-white">
    <div class="space-y-2">
      <h1 class="heading-2">Snippets</h1>
      <p class="code-block">// Helpful code snippets for things I'm always forgetting.</p>
    </div>

    <div>
      <label for="snipper-search" class="sr-only">Search snippets</label>
      <code-input type="text" placeholder="Search snippets" name="snippet-search" min-size="30" @keyup="updateQuery"/>
    </div>
    
    <ul v-if="snippets" class="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
      <li class="space-y-3" v-for="snippet, index, in filteredSnippets" :key="index">
        <h2 class="text-lg font-medium">{{ snippet.title }}</h2>
        <pre class="p-4 bg-soft-white-100 dark:bg-gray-900">{{ snippet.code }}</pre>
        <p class="code-block">
          // <span v-for="tag, index in snippet.tags" :key="index">{{ tag }}<span v-if="index < snippet.tags.length - 1">, </span></span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Snippets',
  head() {
    return {
      title: 'I am Brent | Snippets',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Helpful code snippets for things I\'m always forgetting.'
        }
      ]
    }
  },
  data() {
    return {
      snippetQuery: '',
      snippets: [
        {
          title: "Find & replace all ACF timestamps in VS Code using regex.",
          code: "(?<=\"modified\": ).*$",
          tags: ['regex', 'acf', 'vscode']
        },
        {
          title: "Remove cached items from .gitignore",
          code: "git rm -r --cached .",
          tags: ['git']
        },
        {
          title: "Remove Composer memory limit",
          code: "COMPOSER_MEMORY_LIMIT=-1",
          tags: ['composer', 'drupal']
        },
        {
          title: "Self-update Composer to any version",
          code: "composer self-update --{version_#}",
          tags: ['composer', 'drupal']
        },
        {
          title: "Run terminal in Rosetta 2",
          code: "arch -x86_64 zsh",
          tags: ['terminal']
        },
        {
          title: "Delete config files via drush",
          code: "drush config-delete module_name.settings",
          tags: ['drupal', 'drush']
        }
      ]
    }
  },
  computed: {
    filteredSnippets() {
      const search = this.snippetQuery.toLowerCase();
      return this.snippets.filter(
        snippet => snippet.title.toLowerCase().includes(search)
        || snippet.code.toLowerCase().includes(search)
        || snippet.tags.some(tag => tag.toLowerCase().includes(search))
      );
    }
  },
  methods: {
    updateQuery(event) {
      this.snippetQuery = event.target.value;
    }
  }
}
</script>

<style>

</style>
