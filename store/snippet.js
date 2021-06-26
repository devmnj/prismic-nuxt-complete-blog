export const state = () => ({
  snippets: Object,
  isLoaded: false,
})

export const actions = {
 async loadSnippets({ commit }) {
    const document = await this.$prismic.api.query(
      this.$prismic.predicates.at("document.type", "snippet_type")
    );

    commit('setSnippet', document);
    commit('setLoaded', true);
  }
}


export const mutations = {
  setSnippet(state, code) {
    state.snippets = code
  },
  setLoaded(state, loaded) {
    state.isLoaded = loaded
  }
}
