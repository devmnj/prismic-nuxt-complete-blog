<template>
  <div class="">
    <!-- {{ document }} -->
    <!-- {{ this.$store.state.blog.posts }} -->
    <div class="box flex-grow space-x-12">
      <section
        class="bg-purple-100 border-2 shadow-md border-purple-200 rounded md:py-0 sm:w-auto md:w-4/6 w-5/6 h-auto"
      >
        <Article v-if="document !== undefined" :article="document" />
      </section>
      <div>

        

      </div>

    </div>
  </div>
</template>
<script>
import { Disqus } from "vue-disqus";
export default {
  created() {},
  components: {
    Disqus,
  },
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
