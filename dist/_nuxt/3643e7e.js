(window.webpackJsonp=window.webpackJsonp||[]).push([[17,4,10,16],{222:function(t,e,r){var content=r(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("6d2ea0ee",content,!0,{sourceMap:!1})},223:function(t,e,r){t.exports=r.p+"img/hero1.095b14c.jpg"},224:function(t,e,r){"use strict";r.r(e);var l={name:"VueButton",props:{link:{type:String,default:"#"},caption:{type:String,default:"Button"}}},n=r(21),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a",{staticClass:"vue-btn",attrs:{href:"link"}},[t._v(t._s(t.caption))])])}),[],!1,null,null,null);e.default=component.exports},225:function(t,e,r){"use strict";r.r(e);var l={props:{}},n=r(21),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"flex gap-2 mx-3  w-auto rounded-lg"},[t._t("image",(function(){return[l("img",{staticClass:"rounded-md object-contain w-2/6",attrs:{src:r(223),alt:""}})]})),t._v(" "),l("div",{},[t._t("content",(function(){return[l("h1",{staticClass:"font-semibold text-2xl m-6"},[t._v("e-Fruit basket")]),t._v(" "),l("p",{staticClass:"m-6 w-auto truncate",attrs:{id:"content"}},[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Partim cursu et\n        peragratione laetantur,\n      ")]),t._v(" "),l("a",{staticClass:"vue-btn ml-6",attrs:{id:"button-wrapper ",href:"#"}},[t._v("Read more")])]}))],2)],2)}),[],!1,null,null,null);e.default=component.exports},227:function(t,e,r){"use strict";r(222)},228:function(t,e,r){var l=r(55)((function(i){return i[1]}));l.push([t.i,".box{display:flex;align-items:center;justify-content:center}",""]),l.locals={},t.exports=l},229:function(t,e,r){"use strict";r.r(e),r.d(e,"TextSlice",(function(){return c})),r.d(e,"Hero1",(function(){return f})),r.d(e,"ParagraphSlice",(function(){return x})),r.d(e,"HeadingSlice",(function(){return _})),r.d(e,"CodeSlice",(function(){return y})),r.d(e,"ListSlice",(function(){return w}));var l={name:"TextSlice",props:{slice:Object}},n=r(21),c=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("prismic-rich-text",{attrs:{field:t.slice.primary.ritch_text_field}})],1)}),[],!1,null,null,null).exports,o={props:{slice:Object}},d=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex h-3/6 w-4/6 mx-5"},[r("Hero",{staticClass:"border-2 h-3/6 border-gray-500",scopedSlots:t._u([{key:"content",fn:function(){return[r("div",{staticClass:"relative"},[r("h1",[r("prismic-rich-text",{staticClass:"font-bold text-left mx-4",attrs:{field:t.slice.primary.title}})],1),t._v(" "),r("p",{staticClass:"text-xl font-semibold mx-4"},[r("prismic-rich-text",{attrs:{field:t.slice.primary.details}})],1),t._v(" "),r("div",{staticClass:"absolute bottom-0 left-0  mx-4"},[r("VueButton",{staticClass:"text-xl",attrs:{caption:"meet @ Github"}})],1)])]},proxy:!0},{key:"image",fn:function(){return[r("prismic-image",{attrs:{field:t.slice.primary.image}})]},proxy:!0}])})],1)}),[],!1,null,null,null),f=d.exports;installComponents(d,{VueButton:r(224).default,Hero:r(225).default});var m={methods:{},props:{slice:Object}},x=Object(n.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("prismic-rich-text",{staticClass:"text-xl p-3",attrs:{field:t.slice.primary.paragraph_rich_text_field}})],1)}),[],!1,null,null,null).exports,v={methods:{},props:{slice:Object}},_=Object(n.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("prismic-rich-text",{staticClass:"font-black text-xl",attrs:{field:t.slice.primary.header_rich_text_field}})],1)}),[],!1,null,null,null).exports,h=r(234),C=(r(235),r(236),r(237),{components:{VueCodeHighlight:h.a},props:{slice:{}}}),y=(r(227),Object(n.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap m-3 box"},[r("vue-code-highlight",{attrs:{language:"javascript"}},[r("prismic-rich-text",{staticClass:"text-xl p-3",attrs:{field:t.slice.primary.cod_text_field}})],1)],1)}),[],!1,null,null,null).exports),j=(r(117),{name:"TextSlice",props:{slice:Object},methods:{htmlSerializer:function(t,element,content,e){return"list-item"===t?'<li class="example-class">'.concat(e.join(""),"</li>"):null}}}),w=Object(n.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-3 text-lg"},[r("prismic-rich-text",{staticClass:"leading-8",attrs:{field:t.slice.primary.list_ritch_text_field,HtmlSerializer:"htmlSerializer"}})],1)}),[],!1,null,null,null).exports},240:function(t,e,r){var content=r(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("2ef1019a",content,!0,{sourceMap:!1})},251:function(t,e,r){"use strict";r.r(e);r(41);var l=r(238),n=r(229),c={data:function(){return{}},components:{SliceZone:l.a},methods:{resolver:function(t){var e=t.sliceName;t.slice,t.i;return n[e]}},props:{article:{type:[Object]}}},o=r(21),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"elative px-2 font-serif"},[r("prismic-rich-text",{staticClass:"font-black text-purple-900 text-4xl",attrs:{field:t.article.data.title}}),t._v(" "),r("div",{},[r("img",{staticClass:"rounded my-3 h-48 w-full mb-4 object-cover",attrs:{src:t.article.data.featured_img_link.url}})]),t._v(" "),r("div",{staticClass:"purple-blue-300 text-red-800 font-bold italic py-4 text-center rounded-md"},[r("prismic-rich-text",{staticClass:"font-semibold text-lg",attrs:{field:t.article.data.post_excerpt}})],1),t._v(" "),r("div",{staticClass:"font-bold flex justify-between"},[r("span",{staticClass:"flex justify-left text-purple-800"},[t._v("\n      "+t._s(new Date(t.article.last_publication_date).toDateString())+"\n      ")])]),t._v(" "),r("slice-zone",{attrs:{slices:t.article.data.body,resolver:t.resolver,c:""}}),t._v(" "),r("div",{staticClass:"font-bold flex justify-between"}),t._v(" "),r("p",{staticClass:"text-xl"})],1)}),[],!1,null,null,null);e.default=component.exports},254:function(t,e,r){"use strict";r(240)},255:function(t,e,r){var l=r(55)((function(i){return i[1]}));l.push([t.i,".box{display:flex;align-items:center;justify-content:center}",""]),l.locals={},t.exports=l},284:function(t,e,r){"use strict";r.r(e);var l=r(2),n=(r(27),{created:function(){},head:function(){return{title:this.document.data.title[0].text,meta:[{hid:"description",name:"description",content:this.document.data.post_excerpt[0].text}]}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$prismic,l=t.params,n=t.error,e.next=3,r.api.getByUID("post_type",l.slug);case 3:if(!(c=e.sent)){e.next=8;break}return e.abrupt("return",{document:c});case 8:n({statusCode:404,message:"Page not found"});case 9:case"end":return e.stop()}}),e)})))()},mounted:function(){},computed:{},props:{},data:function(){return{}}}),c=(r(254),r(21)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",{staticClass:"box flex-grow place-item-center space-x-12"},[r("section",{staticClass:"bg-purple-100 border-2 shadow-md border-purple-200 rounded py-3 w-3/6 h-auto"},[void 0!==t.document?r("Article",{attrs:{article:t.document}}):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Article:r(251).default})}}]);