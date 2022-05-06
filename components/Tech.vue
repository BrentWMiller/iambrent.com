<template>
  <div class="container relative items-center lg:space-x-10 lg:flex">
    <h2 class="mb-10 lg:mb-0 lg:-mt-20 tech-title heading-2 dark:text-white">
      Using an ever-growing stack of technologies.
    </h2>

    <pre
      class="absolute hidden -right-4 sm:right-0 top-16 sm:-top-10 lg:top-0 md:-right-20 code-block sm:block"
      aria-hidden="true"
    >
/**
 * cms
 * libraries
 * frameworks
 * workflows
 * testing
 * design
**/
</pre
    >

    <div class="relative z-10 flex-shrink-0 tech-grid">
      <div class="mb-8 lg:-ml-10 code-block">const frequentTech =</div>
      <div
        v-if="techItems && techItems.length > 0"
        class="grid grid-cols-2 gap-4 mx-auto sm:grid-cols-4 md:grid-cols-5"
      >
        <tech-item
          v-for="tech in techItems"
          :key="tech.id"
          :tech="tech"
          :visible="
            currentFilter === 'all' ? true : tech.type === currentFilter
          "
        />
      </div>

      <div class="flex items-end justify-between mt-6">
        <p class="lg:ml-12 code-block" aria-hidden="true">
          <span class="text-4xl">...</span>
        </p>

        <p class="code-block">
          frequentTech.filter("<button
            @click="filterTech(currentFilter)"
            class="button button-code"
            type="button"
            aria-label="Filter tech"
          >
            {{ currentFilter }}</button
          >")
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const TECH_ITEMS = [
  {
    id: "wordpress",
    label: "WordPress",
    svg: require("@/assets/icons/wordpress.svg"),
    svgLight: require("@/assets/icons/wordpress-light.svg"),
    type: "cms",
    width: "61",
    height: "61",
  },
  {
    id: "drupal",
    label: "Drupal",
    svg: require("@/assets/icons/drupal.svg"),
    svgLight: require("@/assets/icons/drupal-light.svg"),
    type: "cms",
    width: "50",
    height: "67",
  },
  {
    id: "shopify",
    label: "Shopify",
    svg: require("@/assets/icons/shopify.svg"),
    svgLight: require("@/assets/icons/shopify-light.svg"),
    type: "cms",
    width: "61",
    height: "69",
  },
  {
    id: "tailwind",
    label: "Tailwind",
    svg: require("@/assets/icons/tailwind.svg"),
    svgLight: require("@/assets/icons/tailwind-light.svg"),
    type: "framework",
    width: "53",
    height: "31",
  },
  {
    id: "bootstrap",
    label: "Bootstrap",
    svg: require("@/assets/icons/bootstrap.svg"),
    svgLight: require("@/assets/icons/bootstrap-light.svg"),
    type: "framework",
    width: "61",
    height: "49",
  },
  {
    id: "firebase",
    label: "Firebase",
    svg: require("@/assets/icons/firebase.svg"),
    svgLight: require("@/assets/icons/firebase-light.svg"),
    type: "workflow",
    width: "51",
    height: "69",
  },
  {
    id: "vue",
    label: "Vue",
    svg: require("@/assets/icons/vue.svg"),
    svgLight: require("@/assets/icons/vue-light.svg"),
    type: "framework",
    width: "65",
    height: "57",
  },
  {
    id: "react",
    label: "React",
    svg: require("@/assets/icons/react.svg"),
    svgLight: require("@/assets/icons/react-light.svg"),
    type: "library",
    width: "65",
    height: "59",
  },
  {
    id: "angular",
    label: "Angular",
    svg: require("@/assets/icons/angular.svg"),
    svgLight: require("@/assets/icons/angular-light.svg"),
    type: "framework",
    width: "61",
    height: "65",
  },
  {
    id: "git",
    label: "Git",
    svg: require("@/assets/icons/git.svg"),
    svgLight: require("@/assets/icons/git-light.svg"),
    type: "workflow",
    width: "61",
    height: "61",
  },
  {
    id: "cypress",
    label: "Cypress",
    svg: require("@/assets/icons/cypress.svg"),
    svgLight: require("@/assets/icons/cypress-light.svg"),
    type: "testing",
    width: "69",
    height: "68",
  },
  {
    id: "figma",
    label: "Figma",
    svg: require("@/assets/icons/figma.svg"),
    svgLight: require("@/assets/icons/figma-light.svg"),
    type: "design",
    width: "45",
    height: "67",
  },
  {
    id: "mongodb",
    label: "MongoDB",
    svg: require("@/assets/icons/mongodb.svg"),
    svgLight: require("@/assets/icons/mongodb-light.svg"),
    type: "workflow",
    width: "31",
    height: "65",
  },
];

export default {
  data() {
    return {
      currentFilter: "all",
      techItems: TECH_ITEMS,
      techItemsFiltered: TECH_ITEMS,
      filterTypes: [
        "all",
        "cms",
        "library",
        "framework",
        "workflow",
        "testing",
        "design",
      ],
    };
  },
  methods: {
    filterTech(type) {
      const nextFilter = this.filterTypes[this.filterTypes.indexOf(type) + 1];
      this.currentFilter = nextFilter ? nextFilter : "all";

      this.techItemsFiltered =
        this.currentFilter === "all"
          ? this.techItems
          : this.techItems.filter((tech) => tech.type === this.currentFilter);
    },
  },
};
</script>

<style scoped lang="postcss">
.tech-title {
  max-width: 400px;
}

.tech-grid {
  @media (max-width: 1024px) {
    max-width: 885px;
  }
}
</style>
