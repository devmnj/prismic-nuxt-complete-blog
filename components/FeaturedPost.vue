<template>
  <div class="">
    <div class="flex flex-col sm:flex-row max-w-screen-xl mx-auto pt-8 group">
      <div class="sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg relative">
<slot name="thumbnail">Some image</slot>
        <!-- <a href="/blog/virtual-tours-ways-to-travel-from-home" class="cursor-pointer"
          ><div class="h-64 sm:h-96 relative">
            <img
              src="https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg"
              layout="fullWidth"
              class="object-cover object-center rounded-t-lg sm:rounded-l-lg sm:rounded-t-none h-full"
              style="height: 100%; width: 100%"
            /></div
        ></a> -->
      </div>
      <div
        class="sm:w-1/2 lg:w-1/3 bg-gray-300 p-8 border-2 border-t-0 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 relative"
      >
        <div
            class="font-display uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content"
          >
<slot name="category">Travel Guide </slot>

          </div>
          <div class="border-b-2 border-primary-500 w-8"></div>
          <div class="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
<slot name="postdate">Posted on (Date)</slot>

          </div>
          <h2
            class="font-display text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300"
          >
           <slot name="title">title </slot>
          </h2>
          <div class="text-sm mt-3 leading-loose text-gray-600 font-medium">
            <p>
<slot name="content">Some content</slot>


            </p>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  created() {},
  data() {
    return {};
  },
  props: {
    link: {
      type: String,
      default: "#",
    },

    linklabel: {
      type: String,
      default: "Read More",
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
