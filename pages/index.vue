<template>
  <div class="container">
    <!-- {{page}} -->
    <div class="flex">
      <slice-zone class="subtitle" :slices="page.data.body1" :resolver="resolver" />
    </div>
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";
import * as Slices from "@/slices";
// import * as Slices from 'vue-essential-slices'
export default {
  head() {
    return {
      title: this.$store.state.config.siteConfig.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content:  this.$store.state.config.siteConfig.title ,
        },
      ],
    };
  },
  mounted() {},
  async asyncData({ $prismic }) {
    return {
      page: await $prismic.api.getSingle("home"),
    };
  },
  components: {
    SliceZone,
  },
  head() {
    return {
      title: this.$store.state.config.siteConfig.title,
      meta: [
        {
          hid: "description",
          name: "description",
           content:this.$store.state.config.siteConfig.title,
        },
      ],
    };
  },
  data() {
    return {
      headerData: {},
    };
  },
  methods: {
    resolver({ sliceName, slice, i }) {
      return Slices[sliceName];
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
