__NUXT_JSONP__("/blog/redirect-to-a-set-of-routes-in-vuejs", (function(a,b,c,d,e,f,g,h,i,j,k){return {data:[{document:{id:"YM2IJhIAAC8AUH5g",uid:d,url:a,type:"post_type",href:"https:\u002F\u002Fjsuu.cdn.prismic.io\u002Fapi\u002Fv2\u002Fdocuments\u002Fsearch?ref=YPBHuBIAAC0A8DHG&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YM2IJhIAAC8AUH5g%22%29+%5D%5D",tags:[],first_publication_date:e,last_publication_date:e,slugs:[d],linked_documents:[],lang:"en-us",alternate_languages:[],data:{title:[{type:"heading1",text:"Redirect to a set of routes in Vuejs",spans:[]}],post_excerpt:[{type:b,text:"How to redirect a route to a set of routes",spans:[]}],featured_img_link:{link_type:"Web",url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1541695226403-a09aa08e5135?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=756&q=80"},categories:{link_type:"Document"},sticky_post:a,body:[{slice_type:f,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"do when want to redirect same route against a bunch of routes ?. Here the alias came into picture",spans:[{start:65,end:97,type:c}]},{type:b,text:"alias can be used in our index route file to redirect a route \u002F a set of route to specific route. The following example will clarify this",spans:[{start:g,end:h,type:c},{start:g,end:h,type:i}]}]}},{slice_type:"code_slice",slice_label:a,items:[{}],primary:{cod_text_field:[{type:"preformatted",text:"import Vue from \"vue\";\n ......\nVue.use(VueRouter);\nconst routes = \\[\n  {\n    path: \"\u002F\",\n    name: \"Line\",\n    component: LineChart,\n     },   \n  {\n    \u002F\u002F The redirect can also be targeting a named route:\n    path: \"\u002Fhelp\",\n    redirect: { name: 'About' }\n  },\n  {\n    \u002F\u002Fredirect with aliad\n    path: \"\u002Fdoughnut\",\n    name: \"Doughnut\",\n    component: Doughnut,\n    alias: \\['\u002Fdonut', '\u002Fdot'\\]\n\n  }, \n\\];\nconst router = new VueRouter({\n  routes\n});\n\nexport default router;",spans:[]}]}},{slice_type:f,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"In the above router configuration I have a route doughnut which shows the doughnut chart. All I want to different routes set to this route. we redirect \u002Fdoughnut route to the \u002Fdonut, \u002Fdot routes. As a result all the routes are working",spans:[{start:j,end:k,type:c},{start:j,end:k,type:i}]}]}}]}}}],fetch:{},mutations:[]}}(null,"paragraph","em","redirect-to-a-set-of-routes-in-vuejs","2021-06-19T06:05:21+0000","paragraph_slice",0,5,"strong",49,57)));