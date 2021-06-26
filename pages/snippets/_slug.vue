<template>
  <div class="">
    <div class="box flex-grow space-x-12">
      <section
        class="bg-purple-100 border-2 shadow-md border-purple-200 rounded md:py-0 sm:w-auto md:w-4/6 w-5/6 h-auto"
      >
        <Snippet v-if="document !== undefined" :snippet="document" />
      </section>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  created() {},
  components: {},
  head() {
    return {
       title: 'Code Snippets / Gists',
      meta: [
        {
          hid: "description",
          name: "description",
           content: this.document.data.uid,
        },
      ],
    };
  },
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID("snippet_type", params.slug);
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
