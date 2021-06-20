<template>
  <div class="px-3 text-lg">
    <!-- <div v-html="$prismic.asHtml(document.data.example_rich_text, optionalHtmlSerializer)" /> -->

    <prismic-rich-text class="leading-8"  :field="slice.primary.list_ritch_text_field"  HtmlSerializer="htmlSerializer" />

  </div>
</template>

<script>
export default {
name:'TextSlice',
  props: {
    slice: Object,
  },
  methods:{
    htmlSerializer(type, element, content, children) {
      // If element is a list item,
      if (type === "list-item") {
        // return some customized HTML.
        return `<li class="example-class">${children.join("")}</li>`;
      }
      /// Otherwise, return null.
      return null;
    }
  }
};
</script>
