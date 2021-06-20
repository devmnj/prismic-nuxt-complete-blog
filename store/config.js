export const state = () => ({
  siteConfig: Object,
  isLoaded: false,
})

export const mutations = {
  setConfig(state, config) {
    state.siteConfig = config
  },
  setLoaded(state, loaded) {
    state.isLoaded = loaded
  }
}
