<template>
  <div>
    <!-- {{document}} -->
 <PHero :document="document"/>

  </div>
</template>
<script>
export default {

async asyncData({ $prismic, error }) {
    const document = await $prismic.api.getByUID('heropage', 'about')
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: "About",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$store.state.config.siteConfig.title,
        },
      ],
    };
  },

};
</script>
