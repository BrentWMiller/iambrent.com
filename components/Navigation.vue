<template>
  <div class="absolute z-10 w-full">
    <header class="container flex justify-between pt-4 mx-auto text-primary">
      <nuxt-link to="/" class="text-xl font-semibold logo">
        <img src="~/assets/svgs/logo.svg" />
        <div class="sr-only">I am Brent</div>
      </nuxt-link>
      <nav class="flex">
        <ul class="flex">
          <li class="px-4 py-2">
            <nuxt-link to="/projects" class="text-base font-bold tracking-wider uppercase">Projects</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.logo {
  max-width: 40px;
}
</style>
