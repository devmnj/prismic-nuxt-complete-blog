(window.webpackJsonp=window.webpackJsonp||[]).push([[23,8,15],{243:function(t,e,r){"use strict";r.r(e);var n={created:function(){},data:function(){return{}},props:{link:{type:String,default:"#"},linklabel:{type:String,default:"Read More"}},methods:{}},o=r(22),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",{staticClass:"flex flex-col sm:flex-row max-w-screen-xl mx-auto pt-8 group"},[r("div",{staticClass:"sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg relative"},[t._t("thumbnail",(function(){return[t._v("Some image")]}))],2),t._v(" "),r("div",{staticClass:"sm:w-1/2 lg:w-1/3 bg-gray-300 p-8 border-2 border-t-0 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 relative"},[r("div",{staticClass:"font-display uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content"},[t._t("category",(function(){return[t._v("Travel Guide ")]}))],2),t._v(" "),r("div",{staticClass:"border-b-2 border-primary-500 w-8"}),t._v(" "),r("div",{staticClass:"mt-4 uppercase text-gray-600 italic font-semibold text-xs"},[t._t("postdate",(function(){return[t._v("Posted on (Date)")]}))],2),t._v(" "),r("h2",{staticClass:"font-display text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300"},[t._t("title",(function(){return[t._v("title ")]}))],2),t._v(" "),r("div",{staticClass:"text-sm mt-3 leading-loose text-gray-600 font-medium"},[r("p",[t._t("content",(function(){return[t._v("Some content")]}))],2)])])])])}),[],!1,null,"fcda2084",null);e.default=component.exports},244:function(t,e,r){"use strict";r.r(e);var n={created:function(){},data:function(){return{}},props:{article:{type:Object}},methods:{}},o=r(22),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-col group mb-8 md:mb-0"},[t.article.data?r("nuxt-link",{attrs:{to:"/blog/"+t.article.uid}},[r("div",{staticClass:"relative h-64"},[r("img",{staticClass:"object-cover object-center rounded-t-lg",staticStyle:{width:"100%",height:"100%"},attrs:{src:t.article.data.featured_img_link.url,alt:" "}})]),t._v(" "),r("div",{staticClass:"bg-green-200 p-8 border-2 border-t-0 rounded-b-lg"},[r("div",{staticClass:"uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose"},[t._t("subtitle")],2),t._v(" "),r("div",{staticClass:"border-b-2 border-primary-500 w-8"}),t._v(" "),r("div",{staticClass:"mt-4 uppercase text-gray-600 italic font-semibold text-xs"},[t._t("postdate",(function(){return[t._v("Post Date")]}))],2),t._v(" "),r("h2",{staticClass:"text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300"},[r("prismic-rich-text",{attrs:{field:t.article.data.post_excerpt}})],1)])]):t._e()],1)}),[],!1,null,"29a29470",null);e.default=component.exports},295:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(20),r(87),r(28),{head:function(){return{title:"Blog posts",meta:[{hid:"description",name:"description",content:"Blog posts and tutorials on Vuejs,Vuex,Nuxt,JavaScript"}]}},mounted:function(){this.$store.commit("blog/setPosts",this.document),this.$store.commit("blog/setLoaded",!0)},data:function(){},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$prismic,n=t.error,e.next=3,r.api.query(r.predicates.at("document.type","post_type"));case 3:if(!(o=e.sent)){e.next=8;break}return e.abrupt("return",{document:o});case 8:n({statusCode:404,message:"Page not found"});case 9:case"end":return e.stop()}}),e)})))()},computed:{posts:function(t){return t.document?t.document.results:null},stickyPost:function(){var t=this.document.results.filter((function(p){return!0===p.data.sticky_post}));return t.length?t[0]:null}}}),l=r(22),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-grow"},[r("div",[r("div",[r("section",{staticClass:"relative px-8 mb-8"},[t.stickyPost?r("nuxt-link",{attrs:{to:"/blog/"+t.stickyPost.uid}},[r("featured-post",{scopedSlots:t._u([{key:"thumbnail",fn:function(){return[r("div",{staticClass:"h-64 sm:h-96 relative"},[r("img",{staticClass:"object-cover object-center rounded-t-lg sm:rounded-l-lg sm:rounded-t-none h-full",staticStyle:{height:"100%",width:"100%"},attrs:{src:t.stickyPost.data.featured_img_link.url,layout:"fullWidth"}})])]},proxy:!0},{key:"category",fn:function(){return[t._v(" Special ")]},proxy:!0},{key:"postdate",fn:function(){},proxy:!0},{key:"title",fn:function(){return[r("nuxt-link",{attrs:{to:t.document}},[r("prismic-rich-text",{attrs:{field:t.stickyPost.data.title}})],1)]},proxy:!0},{key:"content",fn:function(){return[r("div",{staticClass:"text-lg"},[r("prismic-rich-text",{attrs:{field:t.stickyPost.data.post_excerpt}})],1)]},proxy:!0}],null,!1,755187223)})],1):t._e()],1),t._v(" "),r("div",[r("div",{staticClass:"relative px-8 mb-12"},[r("div",{staticClass:"max-w-screen-xl mx-auto"},[r("div",{staticClass:"sm:grid sm:gap-7 sm:grid-cols-2 lg:grid-cols-3"},t._l(t.posts,(function(article){return r("span",{key:article._uid},[article.data?r("post-card",{attrs:{article:article}}):r("p",[t._v("\n                  This content loads on save.\n                  "),r("strong",[t._v("Save the entry & reload.")])])],1)})),0)])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FeaturedPost:r(243).default,PostCard:r(244).default})}}]);