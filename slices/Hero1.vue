<template>
  <div class="flex h-3/6 w-4/6 mx-5">
    <Hero class="border-2 h-3/6 border-gray-500">
      <template v-slot:content class="">
        <div class="relative">
          <h1>
            <prismic-rich-text
              class="font-bold text-left mx-4"
              :field="slice.primary.title"
            />
          </h1>
          <p class="text-xl font-semibold mx-4">
            <prismic-rich-text class="" :field="slice.primary.details" />
          </p>
          <div class="absolute bottom-0 left-0  mx-4">
<VueButton class="text-xl" caption="meet @ Github"/>
            <!-- <a href="#" class="text-sm h-6 w-12 vue-btn">Read more</a> -->
          </div>
        </div>
      </template>
      <template v-slot:image class="">
        <prismic-image class="" :field="slice.primary.image" />
      </template>
    </Hero>
  </div>
</template>

<script>
export default {
 
  props: {
    slice: Object,
  },
};
</script>
