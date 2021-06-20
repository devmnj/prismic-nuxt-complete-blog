<template>
  <div class="flex-grow">
    <div class="text-2xl relative px-8 mb-8 text-center font-bold text-purple-900">
      Category Posts
    </div>
    <dir>
      <div>
        <div class="relative px-8 mb-12">
          <div class="max-w-screen-xl mx-auto">
            <div class="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <span v-for="category in document.results" :key="category.id">
                <!-- <CategoryCard :category="category"> </CategoryCard> -->
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
  components: {  },
  async asyncData({ $prismic, error }) {
    const document = await $prismic.api.query(
      $prismic.predicates.at("document.type", "post_category")
    );

    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  mounted() {},
};
</script>
