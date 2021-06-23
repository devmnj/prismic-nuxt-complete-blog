<template>
  <div>
    <!-- <div v-html="$prismic.asHtml(document.data.example_rich_text, optionalHtmlSerializer)" /> -->
     <prismic-rich-text :field="slice.primary.ritch_text_field" />
  </div>
</template>

<script>
export default {
name:'TextSlice',
  props: {
    slice: Object,
  },
};
</script>
