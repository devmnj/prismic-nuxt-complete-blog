export const state = () => ({
  posts: [Object],
  isLoaded: false,
})

export const actions = {
  async loadPosts({ commit }) {
    const document = await this.$prismic.api.getByUID("post_type", slug);
    commit('setPosts', document);
    commit('setLoaded', true);
  },
}
export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setLoaded(state, loaded) {
    state.isLoaded = loaded
  }

}
