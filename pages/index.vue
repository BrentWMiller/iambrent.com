<template>
  <div class="my-12 space-y-32 md:my-20 lg:space-y-64">
    <intro />

    <tech />

    <stats />

    <tasks />

    <social-and-contact />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'I am Brent',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Building kick ass websites and apps. Using an ever-growing stack of technologies.'
        }
      ]
    }
  }
}
</script>
