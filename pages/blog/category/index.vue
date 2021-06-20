<template>
  <div class="flex-grow">
    <!-- {{this.$store.state.categories.categories}} -->
    <div class="text-2xl relative px-8 mb-8 text-center font-bold text-purple-900">
      Category Posts
    </div>
    <dir>
      <div>
        <div class="relative px-8 mb-12">
          <div class="max-w-screen-xl mx-auto">
            <div class="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <span v-for="category in document.results" :key="category.id">
                <HBox :category="category" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </dir>
  </div>
</template>
<script>

export default {
  head() {
    return {
       title: 'Blog posts',
      meta: [
        {
          hid: "description",
          name: "description",
          content: 'Blog posts and tutorials on Vuejs,Vuex,Nuxt,JavaScript',
        },
      ],
    };
  },

  computed: {
    document() {
      return this.$store.state.categories.categories;
    }
  },
  components: {},

  mounted() {
    if (this.$store.state.categories.isLoaded !== true){
     this.$store.dispatch('categories/loadCategories');
    }
  },
};
</script>
