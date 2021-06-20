__NUXT_JSONP__("/blog/in-our-base-app-tutorial-we-have-seen-how-to-create", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return {data:[{document:{id:"YM19bxIAACwAUE8P",uid:"in-our-base-app-tutorial-we-have-seen-how-to-create",url:b,type:"post_type",href:"https:\u002F\u002Fjsuu.cdn.prismic.io\u002Fapi\u002Fv2\u002Fdocuments\u002Fsearch?ref=YM7SWhIAAC4AVipW&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YM19bxIAACwAUE8P%22%29+%5D%5D",tags:[],first_publication_date:"2021-06-19T05:15:31+0000",last_publication_date:"2021-06-20T05:14:49+0000",slugs:["route-with-oak-in-deno"],linked_documents:[],lang:h,alternate_languages:[],data:{title:[{type:f,text:"Route with Oak in Deno",spans:[]}],post_excerpt:[{type:a,text:"About creating advanced routes in Deno",spans:[]}],featured_img_link:{link_type:g,url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"},category:{id:"YM22iRIAACoAUUqx",type:"post_category",tags:[],slug:"deno",lang:h,uid:"deno-type-script-web-development",link_type:"Document",isBroken:false},sticky_post:true,body:[{slice_type:e,slice_label:b,items:[{}],primary:{paragraph_rich_text_field:[{type:a,text:"In our base app tutorial we have seen how to create default page for our app. It is not a route, it's middle-ware. In this example we create some basic routes using oak Router and add it as middle ware using the use method.",spans:[{start:i,end:j,type:c},{start:i,end:j,type:d},{start:k,end:l,type:c},{start:k,end:l,type:d}]}]}},{slice_type:m,slice_label:b,items:[{}],primary:{header_rich_text_field:[{type:f,text:"Oak routes",spans:[]}]}},{slice_type:e,slice_label:b,items:[{}],primary:{paragraph_rich_text_field:[{type:a,text:"We can create Oak router for our app in the same file. But as the application develop, the code become large, so in order to make it simple and easy to handle we keep routes in separate file and later include them as middle-ware to the main application.",spans:[{start:167,end:173,type:c},{start:217,end:228,type:c}]},{type:a,text:"In a folder called routes create a file route.ts",spans:[{start:19,end:25,type:d},{start:40,end:n,type:c}]}]}},{slice_type:o,slice_label:b,items:[{}],primary:{cod_text_field:[{type:p,text:"import { Router } from \"https:\u002F\u002Fdeno.land\u002Fx\u002Foak\u002Fmod.ts\";\n\nconst router = new Router()\n\nrouter.get('\u002F', (ctx) =\u003E {\n  ctx.response.body = 'Home Page'\n  ctx.response.status = 200\n\n})\n\nrouter.get('\u002Fabout', (ctx) =\u003E {\n  ctx.response.body = 'About Page'\n  ctx.response.status = 200\n\n})\n\nrouter.get('\u002Fproducts', (ctx) =\u003E {\n  ctx.response.body = 'Products Page'\n  ctx.response.status = 200\n\n})\n\nexport default router;",spans:[]}]}},{slice_type:e,slice_label:b,items:[{}],primary:{paragraph_rich_text_field:[{type:a,text:"In the first line we import the Router from the Oak module, which is used to create our basic site routes. Then we export the router and will call the routers in the main.ts as follows.",spans:[]},{type:a,text:"Here '\u002F' route is the default page \u002F index page of our app.",spans:[{start:5,end:8,type:d}]}]}},{slice_type:m,slice_label:b,items:[{}],primary:{header_rich_text_field:[{type:f,text:"Arrow function",spans:[]}]}},{slice_type:o,slice_label:b,items:[{}],primary:{cod_text_field:[{type:p,text:"\u002F\u002Fmain.ts\nimport { Application } from \"https:\u002F\u002Fdeno.land\u002Fx\u002Foak\u002Fmod.ts\";\nimport router from '.\u002Froutes\u002Froute.ts'\nconst app = new Application();\n\napp.use(router.routes())\napp.use((ctx) =\u003E {\n    ctx.response.body = \"Not found\";\n});\n\napp.listen({ port: 8000 });\nconsole.log('Server running on port 8000')",spans:[]}]}},{slice_type:e,slice_label:b,items:[{}],primary:{paragraph_rich_text_field:[{type:a,text:"In the main.ts we added the route as middle ware, lets run the app with net permission.",spans:[{start:7,end:14,type:c},{start:72,end:75,type:c}]},{type:a,text:"deno run --allow-net main.ts",spans:[]},{type:a,text:"Now jump into the browser access your route http:\u002F\u002F127.0.0.1\u002F.",spans:[{start:44,end:61,type:q,data:{link_type:g,url:"http:\u002F\u002F127.0.0.1\u002F"}}]},{type:a,text:"To stop the running server use Ctrl+C",spans:[{start:31,end:37,type:d}]},{type:a,text:"All of my Deno projects will be published on my GitHub Repo, so keep watching.",spans:[{start:n,end:59,type:q,data:{link_type:g,url:"https:\u002F\u002Fgithub.com\u002Fmanojap"}}]}]}}]}}}],fetch:{},mutations:[]}}("paragraph",null,"em","strong","paragraph_slice","heading1","Web","en-us",165,175,212,215,"heading_slice",48,"code_slice","preformatted","hyperlink")));