__NUXT_JSONP__("/blog/graphql-is-modern-an-alternative-approach-for-the-rest", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{document:{id:"YQDAmhIAACoATecx",uid:"graphql-is-modern-an-alternative-approach-for-the-rest",url:a,type:"post_type",href:"https:\u002F\u002Fjsuu.cdn.prismic.io\u002Fapi\u002Fv2\u002Fdocuments\u002Fsearch?ref=YQDCKBIAAC8ATe4i&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YQDAmhIAACoATecx%22%29+%5D%5D",tags:[k,"graphql","appolo","Prisma","vue"],first_publication_date:"2021-07-28T02:27:49+0000",last_publication_date:"2021-07-28T02:34:16+0000",slugs:["graphql-api-in-nuxt-using-servermiddleware"],linked_documents:[],lang:l,alternate_languages:[],data:{title:[{type:h,text:"Graphql API in Nuxt using serverMiddleware",spans:[]}],post_excerpt:[{type:b,text:"Setup a graphql API (serverMiddleware) in Nuxt with Apollo + Express + Prisma ORM ",spans:[]}],featured_img_link:{link_type:j,url:"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--av-xJTRg--\u002Fc_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000\u002Fhttps:\u002F\u002Fpaper-attachments.dropbox.com\u002Fs_00AF37BD6AC8393E927CA91EEFB0A63999A7CA54EDBC5EFA45354BC6B94E1BB9_1613649658449_Prisma_x_Nuxt.png"},categories:{id:"YM218hIAACsAUUgF",type:"post_category",tags:[],slug:k,lang:l,first_publication_date:m,last_publication_date:m,uid:"nuxt-vuejs-development",link_type:"Document",isBroken:n},sticky_post:n,body:[{slice_type:d,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:h,text:"Awesome graphql",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"Graphql is modern an alternative approach for the REST API invented by Facebook. It is used for fetch data from a server and put data back to a server , just like the regular API does. ",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"The Graphql shines where you want to fetch few data (required), where REST API fetch a bunch of data, it may cause fetching too much data. API have multiple end points where graphql have one. One of the problem with graphql, it is not simple to create a graphql server, even though once it has been done ,using them is quiet simple. ",spans:[{start:225,end:268,type:g}]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:h,text:"Apollo, Express and Prisma",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"With Apollo server we can build and run a graphql server, for creating route for our graphql end point can utilize the node developers favorite express module",spans:[{start:144,end:151,type:g}]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"Prisma is a ORM for JavaScript and Typescript, it let developers easily configure, create \u002F migrate databases using models. One of the cool feature I love mostly is that , it can be configured with  few CLI commands like init, migrate",spans:[{start:221,end:234,type:g}]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"For initializing the Prisma install the developer dependency  npm i -d prisma and initialize Prisma with ",spans:[{start:62,end:77,type:i}]}]}},{slice_type:f,slice_label:a,items:[{}],primary:{cod_text_field:[{type:e,text:"npx prisma init",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"It will generate necessary files under Prisma folder, please open the file and configure database and models. For demonstration I have configured a Sqlite database, you can use other databases like mysql, postgres, Mongodb etc.",spans:[{start:39,end:45,type:g}]}]}},{slice_type:f,slice_label:a,items:[{}],primary:{cod_text_field:[{type:e,text:"\u002F\u002Fschema.prisma\r\n\r\ndatasource db {\r\n  provider = \"sqlite\"\r\n  url      = \"file:.\u002Fdev.db\"\r\n}\r\n\r\ngenerator client {\r\n  provider = \"prisma-client-js\"\r\n}\r\n\r\nmodel Contact{\r\n  id String @id @default(uuid())\r\n  name String\r\n  email String\r\n}\r\n  ",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"Note the id field in the model, it is a primary key and also auto filled by the uuid() function. One you done models go to generate the real database with migrate command",spans:[{start:o,end:11,type:g},{start:80,end:86,type:g},{start:155,end:170,type:i}]}]}},{slice_type:f,slice_label:a,items:[{}],primary:{cod_text_field:[{type:e,text:"npx prisam migrate dev --name init",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"This will generate the tables using the models we defined, to make sure we can use the Prisma studio which runs on the port 555, also a standalone studio app is available. ",spans:[]}]}},{slice_type:f,slice_label:a,items:[{}],primary:{cod_text_field:[{type:e,text:"\u002F\u002F run in new terminal\r\nnpmx prisma studio",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"In the Nuxtjs app we need the dependency @prisma\u002Fclient, let's add them to our project",spans:[]}]}},{slice_type:f,slice_label:a,items:[{}],primary:{cod_text_field:[{type:e,text:"nmp i -s @prisma\u002Fclient",spans:[]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:h,text:"Graphql API end point",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"In the Nuxt app , we can setup internal API for interacting with database using server middleware.In the project folder create a folder api and inside the folder create a file graphql.ts",spans:[{start:136,end:139,type:i},{start:p,end:186,type:i}]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"For create and run server routes, we can use the express framework the API should export the handler as in Nextjs.",spans:[]}]}},{slice_type:f,slice_label:a,items:[{}],primary:{cod_text_field:[{type:e,text:"const express = require('express');\r\nconst { ApolloServer, gql } = require('apollo-server-express');\r\nconst {PrismaClient} = require(\"@prisma\u002Fclient\") \r\nconst prisma = new PrismaClient();\r\nconst typeDefs = gql`\r\n\r\n   type Todo{\r\n        item:String!,        \r\n        id:String\r\n   }\r\n\r\n   type Query{\r\n       getAll: [Todo!]!\r\n   }\r\n\r\n   type Mutation{\r\n       newTodo(item :String!):Todo\r\n   } \r\n`;\r\n\r\nconst resolvers = {\r\n    Query: {\r\n        getAll() {\r\n            return   prisma.todo.findMany();\r\n        }\r\n    },\r\n\r\n    Mutation: {\r\n      async  newTodo(_parent: any, _args: any) {\r\n         \r\n          const newTodo = await prisma.todo.create({\r\n              data:_args\r\n          });\r\n            return newTodo;\r\n        }\r\n    }\r\n};\r\nconst server = new ApolloServer({\r\ntypeDefs,\r\nresolvers\r\n});\r\n\r\nconst app = express();\r\nserver.start().then((r: any) =\u003E {\r\n    server.applyMiddleware({ app });    \r\n});\r\n\r\nexport default {\r\n    path: \"\u002Fapi\",\r\n    handler: app\r\n  };\r\n ",spans:[]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:q,text:"typeDefs",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"typedefs constant contains graphql type definitions, Query and Mutations, it can be a user defined objects with multiple keys. For a complete data type list refer the official documentation.",spans:[{start:p,end:189,type:r,data:{link_type:j,url:"https:\u002F\u002Fgraphql.org\u002Flearn\u002F"}}]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:s,text:"Query",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"As the name suggest the query is used to fetch some data, it uses the array syntax to fetch data.",spans:[]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:s,text:"Mutations",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"Mutations are for defining graphql part of create, update, delete functions.",spans:[]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:q,text:"Resolvers",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"So the first part of our graphql is done with type, query and Mutations. But this is not enough, these are structures, we have to make them working, with resolver function. Resolvers are function to make the Query and Mutation in motion. ",spans:[]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{header_rich_text_field:[]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"The API would not work at this point, it also required setup a middleware in the dedicated Nuxt-config and for data fetching need to use PrismaClient object too. Let's  update config first",spans:[{start:91,end:102,type:i}]}]}},{slice_type:f,slice_label:a,items:[{}],primary:{cod_text_field:[{type:e,text:" export default {\r\n   \u002F\u002F Disable server-side rendering: https:\u002F\u002Fgo.nuxtjs.dev\u002Fssr-mode\r\n   ssr: false,\r\n   serverMiddleware:[\r\n     '~\u002Fapi\u002Fgraphql.ts',\r\n   ] ,  \r\n     .....",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:e,text:"and now the graphql playground  can be accessed at http:\u002F\u002Flocalhost:3000\u002Fapi\u002Fgraphql",spans:[]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:h,text:"Play with Code",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:" Here is CodesandBox version of the Project",spans:[{start:o,end:21,type:r,data:{link_type:j,url:"https:\u002F\u002Fcodesandbox.io\u002Fs\u002Fe7d2i"}}]}]}}]}}}],fetch:{},mutations:[]}}(null,"paragraph","paragraph_slice","heading_slice","preformatted","code_slice","em","heading1","strong","Web","nuxt","en-us","2021-06-19T09:16:39+0000",false,9,176,"heading2","hyperlink","heading3")));