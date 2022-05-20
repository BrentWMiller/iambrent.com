<template>
  <div class="container space-y-16 text-black dark:text-white">
    <div class="space-y-2">
      <h1 class="heading-2">Snippets</h1>
      <p class="code-block">
        // Helpful code snippets for things I'm always forgetting.
      </p>
    </div>

    <div>
      <label for="snipper-search" class="sr-only">Search snippets</label>
      <code-input
        type="text"
        placeholder="Search snippets"
        name="snippet-search"
        min-size="30"
        @keyup="updateQuery"
      />
    </div>

    <ul
      v-if="snippets && snippets.length > 0"
      class="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3"
    >
      <li
        class="space-y-3"
        v-for="(snippet, index) in filteredSnippets"
        :key="index"
      >
        <h2 class="text-lg font-medium">{{ snippet.title }}</h2>
        <button
          @click="copyToClipBoard(snippet.code)"
          type="button"
          class="block w-full text-left"
        >
          <pre
            class="p-4 overflow-hidden overflow-x-auto bg-soft-white-100 dark:bg-gray-900"
            >{{ snippet.code }}</pre
          >
        </button>
        <p class="block code-block">
          //
          <span v-for="(tag, index) in snippet.tags" :key="index"
            >{{ tag
            }}<span v-if="index < snippet.tags.length - 1">, </span></span
          >
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Snippets",
  head() {
    return {
      title: "I am Brent | Snippets",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Helpful code snippets for things I'm always forgetting.",
        },
      ],
    };
  },
  data() {
    return {
      snippetQuery: "",
    };
  },
  async fetch() {
    const { store } = this.$nuxt.context;
    try {
      await store.dispatch("snippets/getSnippets");
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    ...mapState("snippets", ["snippets"]),

    filteredSnippets() {
      const search = this.snippetQuery.toLowerCase();
      return this.snippets.filter(
        (snippet) =>
          snippet.title.toLowerCase().includes(search) ||
          snippet.code.toLowerCase().includes(search) ||
          snippet.tags.some((tag) => tag.toLowerCase().includes(search))
      );
    },
  },
  methods: {
    updateQuery(event) {
      this.snippetQuery = event.target.value;
    },
    async copyToClipBoard(code) {
      try {
        await navigator.clipboard.writeText(code);
        console.log("Copying to clipboard was successful!");
      } catch (error) {
        console.error("Could not copy code: ", error);
      }
    },
  },
};
</script>

<style></style>
