<template>
  <div class="">
    <!-- {{ document }} -->
    <!-- {{ this.$store.state.blog.posts }} -->
    <div class="box flex-grow place-item-center space-x-12">
      <section
        class="bg-purple-100 border-2 shadow-md border-purple-200 rounded py-3 w-3/6 h-auto"
      >
        <Article v-if="document !== undefined" :article="document" />
      </section>
    </div>
  </div>
</template>
<script>
export default {
  created() {},
  head() {
    return {
      title: this.document.data.title[0].text,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.document.data.post_excerpt[0].text,
        },
      ],
    };
  },
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID("post_type", params.slug);
    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  mounted() {},

  computed: {
    //   post() {
    //     if (this.$store.state.blog.posts.results !== undefined) {
    //       const p = this.$store.state.blog.posts.results.filter(
    //         (p) => p.uid === this.$route.params.slug
    //       );
    //       return p;
    //     } else {
    //       this.$store.dispatch("setPosts");
    //       const p = this.$store.state.blog.posts.results.filter(
    //         (p) => p.uid === this.$route.params.slug
    //       );
    //       return p;
    //     }
    //   },
  },

  props: {},
  data() {
    return {};
  },
};
</script>
>

<style>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
