<template>
  <div class="box2" style="background-image: url(`bimg`)">
    <div class="hover">
      <slot name="content">
        <h1>Hjemmeværnet</h1>
        <p>The site is based on parallax ribbons and is fully responsive.</p>
      </slot>
    </div>
  </div>
</template>

<script>
/**
 * Hover Box
 * @author Manoj AP <manojap@outlook.com>
 */

export default {
  name: "FBox",
  created() {},

  data() {
    return {};
  },
  props: {
    bimg: {
      trpe: String,
      default: "https://www.e-bureauet.dk/media/1351/case-hjv.jpg"
    }
  },

  methods: {}
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
  height: 350px;
  background-color: #eeeeee;
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
  height: 255px;
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
  background-color: #d32222;
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
body .box-tech {
  position: relative;
  max-height: 255px;
  height: 255px;
  background-color: #eeeeee;
  display: flex;
  align-content: center;
  justify-content: center;
  overflow: hidden;
  padding: 2em;
}
body .box-tech .content {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-flow: column;
  padding-top: 5em;
  transition: all 0.2s ease-in-out;
}
body .box-tech .content img {
  width: 140px;
  transition: all 0.2s ease-in-out;
  filter: grayscale(100%) brightness(75%);
}
body .box-tech .content p {
  font-size: 1.2em;
  font-weight: 700;
  color: #8e8e8e;
  text-transform: uppercase;
  margin-top: 0em;
  transition: all 0.2s ease-in-out;
}
body .box-tech .content .desc {
  transform: scale(0, 0);
  transition: all 0.2s ease-in-out;
}
body .box-tech .content .desc .line {
  border-top: 1px solid #000000;
  width: 0px;
  margin-top: 0em;
  margin-bottom: 1em;
  transition: all 0.2s ease-in-out;
}
body .box-tech .content .desc p {
  font-size: 1em !important;
  font-weight: 600;
  text-transform: none;
  margin-top: 0em;
}
body .box-tech:hover .content {
  padding-top: 0em;
  cursor: pointer;
}
body .box-tech:hover .content img {
  width: 60px;
  filter: none;
}
body .box-tech:hover .content p {
  color: #111111;
}
body .box-tech:hover .content .desc {
  display: block !important;
  transform: scale(1, 1);
}
body .box-tech:hover .content .desc .line {
  width: 50px;
}
</style>
