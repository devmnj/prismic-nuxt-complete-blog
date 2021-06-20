<template>
 <div class="flex-grow">
    <!-- {{document}} -->
    <!-- <h1>Sticky</h1> -->
    <!-- <br> -->
    <!-- {{stickyPost}} -->
    <div>
      <div>
        <section class="relative px-8 mb-8">
          <nuxt-link :to="`/blog/${stickyPost.uid}`" v-if="stickyPost">
            <featured-post>
              <template v-slot:thumbnail>
                <div class="h-64 sm:h-96 relative">
                  <img
                    :src="stickyPost.data.featured_img_link.url"
                    layout="fullWidth"
                    class="object-cover object-center rounded-t-lg sm:rounded-l-lg sm:rounded-t-none h-full"
                    style="height: 100%; width: 100%"
                  />
                  <!-- <prismic-image calss=" w-64/6 h-4/6 object-cover object-center rounded-t-lg sm:rounded-l-lg sm:rounded-t-none h-full " :field="document.results[0].data.featured_img_field" /> -->
                </div>
              </template>
              <template v-slot:category> Special </template>
              <template v-slot:postdate>
                <!-- {{new Date(stories[0].published_at).toDateString()}}} -->
              </template>
              <template v-slot:title>
                <nuxt-link :to="document">
                  <prismic-rich-text :field="stickyPost.data.title" />
                </nuxt-link>
              </template>
              <template v-slot:content>
                <div class="text-lg">
                  <prismic-rich-text :field="stickyPost.data.post_excerpt" /></div
              ></template>
            </featured-post>
          </nuxt-link>
        </section>
        <div>
          <div class="relative px-8 mb-12">
            <div class="max-w-screen-xl mx-auto">
              <div class="sm:grid sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
                <span v-for="article in posts" :key="article._uid">
                  <!-- <span>{{article}}</span> -->
                  <post-card v-if="article.data" :article="article"> </post-card>
                  <p v-else>
                    This content loads on save.
                    <strong>Save the entry & reload.</strong>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
computed: {
    posts(context) {
      if (context.document) {
        return context.document.results.filter((p) => p.data.sticky_post !== true && p.data.category);
      } else {
        return null;
      }
    },
    stickyPost() {
      var res = this.document.results.filter((p) => p.data.sticky_post === true);
      return res.length ? res[0] : null;
    },
  },
head() {
    return {
      title: '',
      meta: [
        {
          hid: "description",
          name: "description",
          content: '',
        },
      ],
    };
  },
   async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.query(
      $prismic.predicates.at("document.type", "post_type"),
      // $prismic.predicates.at('my.post_type.post_category.post_category.name',params.slug)
    );

    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
