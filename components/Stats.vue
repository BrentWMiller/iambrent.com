<template>
  <div class="container relative pt-0 md:pt-36">

    <h2 class="max-w-lg mx-auto text-center mb-14 heading-2 dark:text-white">With the experience to back it up.</h2>

<div class="absolute -left-20 top-36 md:-top-64 code-block">
const stats = [
<template v-for="stat, index in stats"><pre :key="index">
  {
    value: <code-input :color="stat.color" :initial-value="stat.value" @update="updateStat($event, index)" />,
    label: {{ stat.label }}
  }<span v-if="index < stats.length - 1">,</span>
</pre></template>
]
</div>

<pre class="absolute top-0 -right-12 sm:right-0 code-block">
{
  value: Number,
  label: String
}
</pre>

    <div class="relative z-10 max-w-screen-lg mx-auto">
      <ul v-if="stats" class="flex flex-col items-center justify-center space-y-16 md:flex-row md:space-y-0 md:space-x-12 lg:space-x-24">
        <li v-for="stat, index in stats" :key="index">
          <stat :stat="stat" />
        </li>
      </ul>
      <p class="mt-8 ml-8 code-block">for stat in stats</p>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        {
          value: new Date().getFullYear() - 2015,
          label: "Years of Experiece",
          color: 'text-lightula-green dark:text-darkula-green',
          suffix: ''
        },
        {
          value: 50,
          label: "Websites",
          color: 'text-lightula-yellow dark:text-darkula-yellow',
          suffix: '+'
        },
        {
          value: 5,
          label: "Web apps",
          color: 'text-lightula-pink dark:text-darkula-pink',
          suffix: '+'
        },
      ]
    }
  },
  methods: {
    updateStat(value, index) {
      console.log(value, index);
      this.stats[index].value = value ? value : 0;
    }
  }
}
</script>

<style>

</style>