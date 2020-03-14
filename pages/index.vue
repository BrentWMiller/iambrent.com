<template>
  <div>
    <div class="flex flex-col h-screen mb-32">
      <hero class="flex-grow" />
    </div>
    <div class="container w-5/12 mx-auto mb-20 text-center">
      <h2 class="mb-2 text-lg font-semibold uppercase text-secondary-500">
        Eget pretium congue
      </h2>
      <h3 class="mb-4 text-4xl font-semibold leading-tight text-primary">
        Eget elementum nullam dolor ornare rutrum. Nibh eget mi eget lorem.
      </h3>
      <p class="text-dark-primary">
        Arcu at hac leo tortor lacus, arcu nulla. Ut consectetur in aliquet et.
        Curabitur non eget eu interdum orci magna ac netus risus. Urna platea
        sem urna, dui ullamcorper.
      </p>
    </div>
  </div>
</template>

<script>
import hero from '~/components/hero/hero.vue'

export default {
  components: {
    hero
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>
