<template>
  <div class="container space-y-8">
    <p class="code-block">
      // just some tasks i've helped tackle<br />
      const tasks =
    </p>

    <ul class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="task, index in tasks" :key="index" class="text-2xl text-white">
        {{ task.copy }}
      </li>
    </ul>

    <p class="code-block">
      tasks.sort("random")
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          copy: "built a powerful section-based theme template for drupal and wordpress"
        },
        {
          copy: "converted a college’s entire course catalog into dynamic web pages via importing",
        },
        {
          copy: "built a fully custom e-commerce solution for a hardware store"
        },
        {
          copy: "built a custom order management system"
        },
        {
          copy: "built dozens of fully custom themes for drupal and wordpress"
        },
        {
          copy: "redesigned and built a nationwide hospital equipment service system"
        }
      ]
    }
  }
}
</script>

<style>

</style>