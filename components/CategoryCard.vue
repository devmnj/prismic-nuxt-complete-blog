<template>
  <div class="flex-col bg-yellow-200 group mb-8 md:mb-0">
    <nuxt-link :to="`/blog/category/${category.slugs[0]}`" v-if="category.data">
      <div v-if="category.data.img_link_field.url  " class="relative h-64">
        <img
          :src="category.data.img_link_field.url"
          alt=" "
          class="object-cover object-center rounded-t-lg"
          style="width: 100%; height: 100%"
        />
      </div>
      <div  v-else class="relative h-64">
        <img
          src="@/assets/walling.png"
          alt=" "
          class="object-cover object-center rounded-t-lg"
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="bg-purple-300 p-8 border-2 border-t-0 rounded-b-lg">
        <div
          class="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose"
        >
          <slot name="subtitle"></slot>
        </div>
        <div class="border-b-2 border-primary-500 w-8"></div>
        <div class="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
          <!-- <slot name="postdate">Post Date</slot> -->
        </div>
        <h2
          class="text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300"
        >
          <prismic-rich-text v-if="category.data.description" :field="category.data.description" />
          <prismic-rich-text v-else :field="category.data.name" />
        </h2>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {};
  },
  props: {
    category: {
      type: Object,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
