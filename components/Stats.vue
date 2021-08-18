<template>
  <div class="container">

    <div class="max-w-screen-lg mx-auto">
      <p class="mb-8 ml-8 code-block">for stat in stats</p>
      
      <ul class="grid grid-cols-3 gap-24">
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
          color: 'text-darkula-green'
        },
        {
          value: 50,
          label: "Websites",
          color: 'text-darkula-yellow'
        },
        {
          value: 5,
          label: "Web apps",
          color: 'text-darkula-pink'
        },
      ]
    }
  }
}
</script>

<style>

</style>