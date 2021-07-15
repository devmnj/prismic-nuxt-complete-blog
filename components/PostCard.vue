<template>
  <div class="flex-col group mb-8 md:mb-0">
    <nuxt-link :to="`/blog/${article.uid}`" v-if="article.data">
      <div class="relative h-64">
        <img
          :src="article.data.featured_img_link.url"
          alt=" "
          class="object-cover object-center rounded-t-lg"
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="bg-green-200 p-8 border-2 border-t-0 rounded-b-lg">
        <div
          class="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose"
        >
          <slot name="subtitle"></slot>
        </div>
        <div class="border-b-2 border-primary-500 w-8"></div>
        <div class="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
          <slot name="postdate">  {{ new Date(article.last_publication_date).toDateString() }}</slot>
        </div>
        <h2
          class="text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300"
        >
          <prismic-rich-text :field="article.data.post_excerpt" />
          <!-- <prismic-rich-text :field="article.post_excerpt" /> post_excerpt -->
        </h2>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {};
  },
  props: {
    article: {
      type: Object,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
