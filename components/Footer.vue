<template>
  <div> <footer class="relative px-8 py-6 md:py-4 mt-8 bg-green-100">
    <div class="max-w-screen-xl mx-auto md:flex md:items-center">
      <div class="text-center mb-4 md:mb-0 md:text-left flex-shrink-0 relative">

      </div>
      <div class="flex-grow mb-4 md:mb-0">
        <p
          class="text-center md:text-left text-gray-600 text-xs md:ml-8 md:max-w-3xl"
        >
          Powered by Prismic and Nuxt.
          <a
            href="https://github.com/manojap"
            title="View on GitHub"
            target="_blank"
            rel="noreferrer"
            class="text-gray-600 mr-2 border-b border-gray-600"
          >
            Developr @ GitHub
          </a>
          <a
            href="https://javascriptsu.wordpress.com"
            title="Help Center"
            target="_blank"
            rel="noreferrer"
            class="text-gray-600 mr-1 border-b border-gray-600"
          >
            FAQ and Blog
          </a>

        </p>
      </div>
      <div class="flex-1-grow">
        <ul class="flex justify-center md:justify-start">
          <li class="mx-4 md:mx-0">
            <a
              href="https://www.twitter.com/codehat_"
              title="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <fa
                class="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300"
                :icon="['fab', 'twitter']"
              />
            </a>
          </li>
          <li class="mx-4 md:mx-0">
            <a
              href="https://www.instagram.com/flowersandmacros"
              title="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <fa
                class="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300"
                :icon="['fab', 'instagram']"
              />
            </a>
          </li>


        </ul>
      </div>
    </div>
  </footer></div>
</template>

<script>
export default {
  
  created() {},
  data() {
    return {
socials:[]
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
