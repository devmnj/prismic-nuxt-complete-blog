<template>
  <div class="testimotionals">
    <div class="card">
      <div class="layer"></div>
      <div class="content">
        <slot name="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto
            ea tenetur quas facere minima obcaecati mollitia sed ipsum quod,
            eius repellat nihil quos. Saepe ipsa veritatis magni voluptates
            voluptatum.
          </p>
          <div class="image">
            <img
              width="100px"
              src="https://vignette.wikia.nocookie.net/supernatural-diaries/images/b/b2/Cara-delevingne-profile.jpg/revision/latest?cb=20140217060511"
              alt=""
            />
          </div>
        </slot>

        <div class="details">
          <slot name="details">
            <h2>
              Someone famous <br />
              <span>Backend developer</span>
            </h2>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @file Colorful Profile Card
 * @author Manoj AP <manojap@outlook.com>* @
 * @license GNU
 */

export default {
  name: "PCard",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {}
};
</script>

<style scoped>
.testimotionals {
  width: 350px;
  display: inline-block;
  margin-left: 50px;
  margin-top: 50px;
}

.testimotionals .card {
  position: relative;
  overflow: hidden;
  width: 350px;
  margin: 0 auto;
  background: #333;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}
.testimotionals .card .layer {
  z-index: 1;
  position: absolute;
  top: calc(100% - 2px);
  height: 100%;
  width: 100%;
  left: 0;
  background: linear-gradient(to left, orange, tomato);
  transition: 0.5s;
}

.testimotionals .card .content {
  z-index: 2;
  position: relative;
}

.testimotionals .card:hover .layer {
  top: 0;
}

.testimotionals .card .content p {
  font-size: 14px;
  line-height: 24px;
  color: #fff;
}
.testimotionals .card .content .image {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.testimotionals .card .conte nt .details h2 {
  font-size: 18px;
  color: white;
}
.testimotionals .card .content .details h2 span {
  font-size: 18px;
  color: purple;
  transition: 0.5s;
}
.testimotionals .card:hover .content .details h2 span {
  color: white;
  position: relative;
}

body {
  margin-bottom: 20px;
}
</style>
