<template>
  <div class="container">
    <div class="grid max-w-screen-lg gap-4 mx-auto space-y-10 sm:grid-cols-2 sm:space-y-0">

      <div class="space-y-4">
        <p class="code-block">// Check out my code</p>
        <ul class="space-y-4 text-4xl font-medium dark:text-white">
          <li><a class="link" href="https://github.com/BrentWMiller/" target="_blank" rel="noreferrer">github</a></li>
          <li><a class="link" href="https://codepen.io/BrentWMiller/" target="_blank" rel="noreferrer">codepen</a></li>
        </ul>
      </div>

      <client-only placeholder="Loading...">
        <contact-form class="md:pt-16"/>
      </client-only>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>