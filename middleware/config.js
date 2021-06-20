export default async function (context) {
  // console.log('MW running');
  if (context.store.state.config.isLoaded === false) {
    const document = await context.app.$prismic.api.getSingle("settings")
    context.store.commit('config/setConfig', {title: document.data.site_title[0].text,logo:document.data.logo_link.link})
    context.store.commit('config/setLoaded', true)

  }
}
