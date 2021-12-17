<template>
  <div class="container relative space-y-8">
    <p class="code-block">
      // just some tasks i've helped tackle<br />
      const tasks =
    </p>

    <ul v-if="sortedTasks" class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="task, index in sortedTasks" :key="index" class="text-2xl font-medium dark:text-white">
        {{ task }}
      </li>
    </ul>

    <p class="code-block">
      tasks.sort("<button @click="changeSort(currentSort)" class="button-code" type="button">{{ currentSort }}</button>")
    </p>

    <p class="absolute right-0 text-4xl -bottom-10 text-lightula-pink dark:text-darkula-pink">===</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSort: 'random',
      tasks: [
        "built a powerful section-based theme template for drupal and wordpress",
        "converted a college’s entire course catalog into dynamic web pages via importing",
        "built a fully custom e-commerce solution for a hardware store",
        "built a custom order management system",
        "built dozens of fully custom themes for drupal and wordpress",
        "redesigned and built a nationwide hospital equipment service system",
      ],
    }
  },
  computed: {
    sortedTasks() {
      return this.tasks;
    }
  },
  methods: {
    changeSort(type) {
      switch (type) {
        case 'random':
          this.tasks = this.tasks.sort((a,b) => a.length - b.length);
          this.currentSort = 'length';
          break;

        case 'length':
          this.tasks = this.shuffle(this.tasks);
          this.currentSort = 'random';
          break;
      
        default:
          break;
      }
    },
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  }
}
</script>

<style>

</style>