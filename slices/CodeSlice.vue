<template>
  <div class="">

    <vue-code-highlight  class="" language="javascript">
       <prismic-rich-text

      :field="slice.primary.cod_text_field"
    />

    </vue-code-highlight>
  </div>
</template>

<script>
import { component as VueCodeHighlight } from "vue-code-highlight";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
import "highlight.js/styles/default.css";
export default {
  components: {
    VueCodeHighlight,
  },
  props: {
    slice: {},
  },
};
</script>
<style>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
