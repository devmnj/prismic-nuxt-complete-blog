<template>
  <div class="px-2 font-serif">
    <!-- {{snippet}} -->
    <slice-zone   :slices="snippet.data.body"
    :resolver="resolver" />
    <section
      class="m-4 px-3 pt-3 rounded bg-purple-200 comments"
      aria-labelledby="comment"
    >
      <h2 id="comment">Comments</h2>
      <Disqus shortname="developerm" />
    </section>
  </div>
</template>

<script>
import { Disqus } from "vue-disqus";
import SliceZone from "vue-slicezone";
import * as Slices from "@/slices";
export default {
  data() {
    return {
    };
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
  props: {
    snippet: {
      type: [Object],
    },
  },
};
</script>
