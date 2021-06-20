export default async function (context) {
  //Grab the siteconfig stories
    const document = await context.app.$prismic.api.query(
      context.app.$prismic.predicates.at("document.type", "post_type")
    );
    context.store.commit("blog/setPosts", document);
    context.store.commit("blog/setLoaded", true);
  };
