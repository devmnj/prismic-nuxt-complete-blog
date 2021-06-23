<template>
  <div   class="py-2">
    <content-holder>
      <template v-slot:thumbnail>
        <img
          :src="document.data.hero_img.url"
          alt="_"
          class="rounded-lg object-cover object-center"
          style="width: 588px; height: 420px"
        />
      </template>

      <template v-slot:title>
        <h2
          class="font-display text-3xl font-blue text-secondary-500 lg:text-3xl tracking-wide text-center mt-4 lg:leading-tight md:text-left"
        >
          <!-- title -->
           <prismic-rich-text
        :field="document.data.title"
        class="font-black text-3xl"
      />
        </h2>
      </template>
      <template v-slot:content>
        <p class="pb-6 leading-relaxed">
 <!-- Body of the hero -->
  <prismic-rich-text
        :field="document.data.body"
        class="font-semibold text-lg"
      />
        </p>
      </template>
    </content-holder>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {};
  },
  props: {
    document:Object
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
