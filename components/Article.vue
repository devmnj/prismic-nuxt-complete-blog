<template>
  <div class="elative px-2 font-serif">
    <!-- {{ article }} -->
    <prismic-rich-text
      :field="article.data.title"
      class="font-black text-purple-900 text-4xl"
    />
    <div class="" >
      <img
        class="rounded my-3 h-48 w-full mb-4 object-cover"
        :src="article.data.featured_img_link.url"
      />

    </div>
    <div
      class="purple-blue-300 text-red-800 font-bold italic py-4 text-center rounded-md"
    >
      <prismic-rich-text
        :field="article.data.post_excerpt"
        class="font-semibold text-lg"
      />
    </div>
    <div class="font-bold flex justify-between">
      <span class="flex justify-left text-purple-800">
        {{ new Date(article.last_publication_date).toDateString()}}
        <!-- {{  $prismic.asDate(article.last_publication_date)  }} -->
      </span>
      <!-- <span >Filed Under: <span class="italic text-green-500">
        </span> </span> -->
      <!-- <span class="" v-for="cat in blok.content.categories" :key="cat._uid">{{cat.name}},</span> -->
    </div>

    <slice-zone :slices="article.data.body" :resolver="resolver" c />

    <div class="font-bold flex justify-between"></div>

    <p class="text-xl">
      <!-- <rich-text-renderer :document="blok.content.body" /> -->
    </p>
    <!-- <span class="font-bold">Tags:Vuejs</span> -->
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";
import * as Slices from "@/slices";
export default {
  data() {
    return {};
  },
  components: {
    SliceZone,
  },
  methods: {
    resolver({ sliceName, slice, i }) {
      return Slices[sliceName];
    },
  },
  props: {
    article: {
      type: [Object],
    },
  },
};
</script>
