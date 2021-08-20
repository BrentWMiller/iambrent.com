<template>
  <div class="container relative pt-0 md:pt-36">

<div class="absolute -left-10 top-36 md:-top-64 code-block">
const stats = [
<template v-for="stat, index in stats"><pre :key="index">
  {
    value: <code-input :initial-value="stat.value" @update="updateStat($event, index)" />,
    label: {{ stat.label }}
  }<span v-if="index < stats.length - 1">,</span>
</pre></template>
]
</div>

<pre class="absolute top-0 right-0 code-block">
{
  value: number,
  label: string
}
</pre>

    <div class="relative z-10 max-w-screen-lg mx-auto">
      <p class="mb-8 ml-8 code-block">for stat in stats</p>
      
      <ul class="grid grid-cols-1 gap-12 lg:gap-24 lg:grid-cols-3">
        <li v-for="stat, index in stats" :key="index">
          <stat :stat="stat" />
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        {
          value: 6,
          label: "Years of Experiece",
          color: 'text-lightula-green dark:text-darkula-green'
        },
        {
          value: 50,
          label: "Websites",
          color: 'text-lightula-yellow dark:text-darkula-yellow'
        },
        {
          value: 5,
          label: "Web apps",
          color: 'text-lightula-pink dark:text-darkula-pink'
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