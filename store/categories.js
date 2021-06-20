export const state = () => ({
  categories: Object,
  isLoaded: false,
})

export const actions = {
 async loadCategories({ commit }) {
    const document = await this.$prismic.api.query(
      this.$prismic.predicates.at("document.type", "post_category")
    );

    commit('setCategory', document);
    commit('setLoaded', true);
  }
}

export const getters = {
  getCategory(state, id) {
  return state.categories.results.filter((c)=c.id === id);
  }
}

export const mutations = {
  setCategory(state, cat) {
    state.categories = cat
  },
  setLoaded(state, loaded) {
    state.isLoaded = loaded
  }
}
