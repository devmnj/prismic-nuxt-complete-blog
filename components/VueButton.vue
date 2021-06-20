<template>
  <div>
    <a class="vue-btn" href="link">{{ caption }}</a>
  </div>
</template>
<script>
export default {
  name:'VueButton', 
   props: {
    link: {
      type: String,
      default: "#",
    },
    caption: {
      type: String,
      default: "Button",
    },
  },
};
</script>
