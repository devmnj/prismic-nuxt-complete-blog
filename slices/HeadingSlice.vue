<template>
  <div class="">
    <prismic-rich-text class="font-black text-xl" :field="slice.primary.header_rich_text_field" />
  </div>
</template>

<script>
export default {
  methods: {},
  props: {
    slice: Object,
  },
};
</script>
