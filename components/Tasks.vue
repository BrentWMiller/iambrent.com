<template>
  <div class="container relative space-y-8">
    <p class="code-block">
      // Tasks I've helped undertake and launch<br />
      
    </p>
    <p class="code-block" aria-hidden="true">
      const tasks =
    </p>

    <ul v-if="sortedTasks" class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="task, index in sortedTasks" :key="index" class="text-2xl font-medium dark:text-white">
        <p>{{ task }}</p>
      </li>
      <li class="text-2xl text-soft-white-500 dark:text-gray-700">
        <a href="#contact" class="button button-code">Let's build something awesome together</a>
      </li>
    </ul>

    <p class="code-block">
      tasks.sort("<button @click="changeSort(currentSort)" class="button button-code" type="button" aria-label="Sort tasks">{{ currentSort }}</button>")
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
        "Built a powerful section-based starter theme template for Drupal and Wordpress",
        "Converted a university's entire course catalog into dynamic web pages during daily import",
        "Designed and developed a bespoke e-commerce solution for a hardware store",
        "Developed a custom white-label order management system",
        "Redesigned and built a nationwide hospital's equipment service system",
        "Developed dozens of fully custom themes for Drupal and Wordpress",
        "Designed and developed a custom integration to connect time-tracking with a payroll system",
        "Created several custom modules/plugins for Drupal and Wordpress",
        "Developed custom software to run an interactive game show"
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