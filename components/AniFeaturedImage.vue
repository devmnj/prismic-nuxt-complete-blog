<template>
  <div>
    <div :class="[clsCard]">
      <h2 :class="[clsTrans]">
        {{ headline }}
      </h2>
      <p>{{ content }}</p>
      <div :class="[clsCtaCont, clsTrans]">
        <a :href="`${link}`" class="cta"> {{ linkCaption }} </a>
      </div>
      <div :class="[clsCardCircle, clsTrans]"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FImgCard",
  created() {},
  data() {
    return {
      clsCardh2smHover: "cardsmh2sm",
      clsCard: "card",
      clsTrans: "transition",
      clsCtaCont: "cta-container",
      clsCardCircle: "card_circle",
      clsCta: "cta",
      clsCtaHover: "ctahover"
    };
  },

  props: {
    headline: {
      type: String,
      default: "Awesome Headline"
    },
    content: {
      type: String,
      default:
        "Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla."
    },
    link: {
      type: String,
      default: "http://manojap.github.com"
    },
    linkCaption: {
      type: String,
      default: "Read More"
    }
  },
  methods: {},
  watch: {
    isFocused1() {
      console.log("Focused : " + this.isFocused);
      return this.isFocused;
    }
  }
};
/**
 * @author Manoj AP <http://github.com/manojap>
 */
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,200");

.transition {
  transition: 0.3s cubic-bezier(0.3, 0, 0, 1.3);
}
.card {
  background-color: #fff;
  bottom: 0;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
  height: 300px;
  left: 0;
  margin: auto;
  overflow: hidden;
  /* position: absolute; */
  right: 0;
  top: 0;
  width: 300px;
}
/* .card:hover { */
.card:hover {
  height: 450px;
  width: 300px;
}
.card:hover .cta-container {
  /* .cardconthover { */
  display: inline;
  margin-top: 380px;
}

.card:hover .card_circle {
  /* .cardCirlehover { */
  background-size: cover;
  border-radius: 0;
  margin-top: -130px;
}
/* .card:hover h2 { */
.card:hover h2 {
  background: #3487f7;
  color: #fff;
  margin-top: 100px;
  padding: 5px;
}

.card:hover h2 smal {
  color: #fff;
}

.card:hover p {
  /* .cardhoverp { */
  margin-top: 300px;
}
.card_circle {
  background: url("http://lorempixel.com/400/200") no-repeat center bottom;
  background-color: #3487f7;
  background-size: cover;
  border-radius: 50%;
  height: 400px;
  margin-left: -75px;
  margin-top: -270px;
  position: absolute;
  width: 450px;
}
h2 {
  color: #000040;
  font-family: "Raleway", sans-serif;
  font-size: 24px;
  font-weight: 1300;
  margin-top: 150px;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 9999;
}
p {
  color: rgba(0, 0, 0, 0.6);
  font-family: "Raleway", sans-serif;
  font-size: 100%;
  font-weight: normal;
  margin-top: 200px;
  position: absolute;
  text-align: center;
  z-index: 9999;
}
.cta-container {
  display: none;
  margin-left: 1px;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 9999;
}
.cta {
  -moz-border-radius: 2px;
  -moz-transition: 0.2s ease-out;
  -ms-transition: 0.2s ease-out;
  -o-transition: 0.2s ease-out;
  -webkit-border-radius: 2px;
  -webkit-transition: 0.2s ease-out;
  background-clip: padding-box;
  border: 2px solid #37fbb1;
  border-radius: 3px;
  color: #000000;
  /* display: inline-block; */
  font-family: "Raleway", sans-serif;
  font-size: 17px;
  font-weight: 800;
  background-color: #37fbb1;

  height: 36px;
  letter-spacing: 0.5px;
  line-height: 36px;
  margin-bottom: 2px;
  padding: 0 2rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.2s ease-out;
}

.cta:hover {
  background-color: #3487f7;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: #fff;
  -moz-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
