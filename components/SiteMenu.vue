<template>
  <div class="absolute top-0 right-0 z-50">
    <button
      type="button"
      v-show="visible"
      @click="closeNav"
      class="fixed top-0 left-0 w-screen h-screen transition-opacity duration-150 bg-white dark:bg-black"
      :class="`${visible ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`"
    />

    <div
      class="fixed top-0 right-0 flex flex-col w-full h-screen max-w-xl p-10 space-y-4 transition-transform duration-200 transform bg-site dark:bg-site-dark"
      :class="`${visible ? 'translate-x-1 pointer-events-auto' : 'translate-x-full pointer-events-auto'}`"
    >
      <div class="flex-grow">
        <div class="items-center justify-between mb-8 md:space-x-4 md:flex">
          <p class="code-block">menuVisible = <button @click="closeNav" class="button button-code">{{ visible }}</button></p>
          <theme-switcher />
        </div>
        
        <p class="text-black dark:text-white">Thanks for checking out the site. It's still a work in progress, but I hope you enjoyed it.</p>

        <div class="my-12 space-y-2">
          <p class="code-block">const menu = [</p>
          <nav class="ml-4">
            <ul class="space-y-2">
              <li v-for="link, index in links" :key="index">
                <nuxt-link :to="link.to" class="text-xl text-black dark:text-white link">
                  {{ link.label }}<span v-if="index !== links.length - 1">,</span>
                </nuxt-link>
              </li>
            </ul>
          </nav>
          <p class="code-block">]</p>
        </div>
      </div>

      <div class="flex space-x-2 code-block">
        <p aria-hidden="true" class="dark:text-darkula-green text-lightula-green">✔</p>
        <div>
          <p class="dark:text-darkula-green text-lightula-green">Website</p>
          <p>Compiled successfully at {{ dateTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      links: [
        {
          label: 'Home',
          to: '/'
        },
        {
          label: 'Snippets',
          to: '/snippets'
        },
        // {
        //   label: 'Tools',
        //   to: '/tools'
        // }
      ]
    }
  },
  mounted() {
    // check if key is escape
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        this.closeNav()
      }
    })
  },
  unmounted() {
    document.removeEventListener('keydown', this.closeNav);
  },
  methods: {
    closeNav() {
      this.$store.dispatch('menu/setMenuVisibility', false);
    }
  },
  computed: {
    dateTime() {
      // convert date to mm/dd/yyyy hh:mm
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      // add leading zero to hours, minutes and seconds
      const zero = (value) => {
        if (value < 10) {
          return `0${value}`;
        }
        return value;
      };

      return `${month}/${day}/${year} ${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
    }
  }
}
</script>

<style>

</style>