<template>
  <div class="flex-grow">
    <div> 
      <div>
        <div class="relative px-8">
          <div
            class="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center"
          >
            <div class="md:w-6/12 flex-shrink-0 relative">
              <slot name="thumbnail">Image place holder</slot>
            </div>
            <div class="md:w-6/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first">
              <div class="g:py-8 text-center md:text-left">
                <span
                  class="font-bold text-primary-500 text-sm text-center md:text-left uppercase"
                >
                  <slot name="subtitle">  </slot>
                </span>
                <h2
                  class="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left"
                >
                  <slot name="title">Have a great title</slot>
                </h2>
                <p
                  class="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200"
                >
                  <slot name="content">some content</slot>
                </p>
<slot name="link"> </slot>

              </div>
            </div>
          </div>
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
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
