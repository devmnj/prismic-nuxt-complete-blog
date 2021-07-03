<template>
  <div class="flex-grow">
    <!-- {{this.$store.state.categories.categories}} -->
    <div class="text-2xl relative px-8 mb-8 text-center font-bold text-purple-900">
      Code Snippets

      <p class="text-xl text-green-700">
        Wanna more ? Look at these
        <a class="text-red-600" href="https://github.com/manojap?tab=repositories"> repos </a> and
        <a class="text-red-600" href="https://gist.github.com/manojap">gists</a> @ GitHub
      </p>
    </div>
    <dir>
      <div>
        <div class="relative px-8 mb-12">
          <div class="max-w-screen-xl mx-auto">
            <div class="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <span v-for="snippet in snippets.results" :key="snippet.id">
                <nuxt-link :to="`/snippets/${snippet.uid}`">
                  <!-- {{snippet}} -->
                  <LBox
                    :title="snippet.uid"
                    :description="
                      snippet.data.body.filter(
                        (s) => s.slice_type === 'paragraph_slice'
                      )[0].primary.paragraph_rich_text_field[0].text
                    "
                  />
                </nuxt-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </dir>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Code Snippets",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Code snippets for Javascript applications ",
        },
      ],
    };
  },
   
   computed: {
    snippets() {
      return this.$store.state.snippet.snippets;
    }
  },
  components: {},

  mounted() {
     this.$store.dispatch('snippet/loadSnippets');

  },
};
</script>
