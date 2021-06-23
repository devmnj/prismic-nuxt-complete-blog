import Vue from "vue";
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: process.env.GID}, //measurement ID G-LL1HBDMH8D,
  params: {
    send_page_view: false
  }
});
