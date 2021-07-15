<template>
  <div class="px-2 font-serif">
    <!-- {{ article }} -->
    <prismic-rich-text
      :field="article.data.title"
      class="p-3 font-black text-purple-800 text-4xl"
    />
    <!-- <div class="block mt-2 rounded h-48 w-auto object" :style="{backgroundImage:`url(${article.data.featured_img_link.url})`}" > -->
    <!--
       <img
        class="rounded my-3 h-2/6 w-full mb-4 object-contain"
        :src="article.data.featured_img_link.url"

      /> -->
    <prismic-image
      class="rounded my-3 h-1/12 w-full mb-4 object-contain"
      :field="article.data.featured_img_link"
    />
    <!-- </div> -->
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
        {{ new Date(article.last_publication_date).toDateString() }}
        <!-- {{  article.data.category  }} -->
      </span>
    </div>

    <slice-zone :slices="article.data.body" :resolver="resolver" c />

    <section
      class="m-4 px-3 pt-3 rounded bg-purple-200 comments"
      aria-labelledby="comment"
    >
      <h2 id="comment">Comments</h2>
     
      <Disqus shortname="disq_handle" />
    </section>
  </div>
</template>

<script>
import { Disqus } from "vue-disqus";
import SliceZone from "vue-slicezone";
import * as Slices from "@/slices";
export default {
  data() {
    return {};
  },
  components: {
    SliceZone,
    Disqus,
  },
  methods: {
    resolver({ sliceName, slice, i }) {
      return Slices[sliceName];
    },
  },
  computed:{
disq_handle(){
  return process.env.DISQ;
}
  },
  props: {
    article: {
      type: [Object],
    },
  },
};
</script>
