<template>
  <div class="box">

    <div :class="getClass[0]">
      <p>
        <prismic-rich-text :field="category.data.name" />
      </p>
    </div>
    <div :class="getClass[1]">
    <nuxt-link :to="`/blog/category/${category.slugs[0]}`" v-if="category.data">

        <h1><prismic-rich-text :field="category.data.name" /></h1>
        <p>
          <prismic-rich-text :field="category.data.description" />
        </p>
    </nuxt-link>
    </div>

  </div>
</template>

<script>
/**
 * Hover Box
 * @author Manoj AP <manojap@outlook.com>
 */

export default {
  name: "HBox",
  created() {},

  data() {
    return {};
  },
  props: {
    category: Object,
  },
  computed: {
    getClass() {
      var contClass = "";
      var aniClass = "";
      switch (this.effect) {
        case "box-out":
          contClass = "content";
          aniClass = "content-hover";
          break;
        default:
          contClass = "content";
          aniClass = "content-hover2";
          break;
      }
      return [contClass, aniClass];
    },
  },
  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Patua+One");
body {
  text-align: center;
}
body .container {
  padding-top: 1%;
  padding-bottom: 4%;
}
body h1 {
  margin-top: 4%;
  margin-bottom: 4%;
  font-family: "Patua One", cursive;
}
body .box2 {
  max-height: 350px;
  height: 150px;
  background-color: #63D8B5;
  background-size: cover;
  background-position: center center;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-content: center;
  justify-content: center;
}
body .box2 .hover {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: flex;
  justify-content: center;
  flex-flow: column;
  transition: all 0.5s ease-in-out;
  padding: 2em 2em;
}
body .box2 .hover h1 {
  color: #ffffff;
  font-size: 1.8em;
  text-transform: uppercase;
  font-family: "Patua One", cursive;
}
body .box2 .hover p {
  color: #ffffff;
}
body .box2:hover {
  filter: grayscale(100%);
}
body .box2:hover .hover {
  opacity: 1;
  cursor: pointer;
}
body .box {
  position: relative;
  max-height: 255px;
  height: 100px;
  background-color: #eeeeee;
  display: flex;
  align-content: center;
  justify-content: center;
  overflow: hidden;
}
body .box .content-hover2 {
  transform: scale(0, 0);
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #47C299;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 2em 2em;
}
body .box .content-hover2 h1 {
  color: #ffffff;
  font-size: 1.5em;
  text-transform: uppercase;
  font-family: "Patua One", cursive;
  font-style: italic;
}
body .box .content-hover2 p {
  color: #ffffff;
}
body .box .content-hover {
  transform: scale(0, 0);
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #252525;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 2em 2em;
}
body .box .content-hover h1 {
  color: #ffffff;
  font-size: 1.5em;
  text-transform: uppercase;
  font-family: "Patua One", cursive;
  font-style: italic;
}
body .box .content-hover p {
  color: #ffffff;
}
body .box .content {
  display: flex;
  justify-content: center;
  flex-flow: column;
}
body .box .content img {
  width: 160px;
}
body .box .content p {
  font-size: 1.2em;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: -2em;
}
body .box:hover > .content-hover,
body .box:hover > .content-hover2 {
  transform: scale(1, 1);
  cursor: pointer;
}
</style>
