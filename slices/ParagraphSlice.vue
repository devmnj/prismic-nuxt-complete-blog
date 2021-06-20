<template>
  <div class="">
    <prismic-rich-text
      class="text-justify text-xl py-3"
      :field="slice.primary.paragraph_rich_text_field"
    />
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
