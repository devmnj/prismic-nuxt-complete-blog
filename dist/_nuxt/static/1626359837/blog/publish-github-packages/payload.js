__NUXT_JSONP__("/blog/publish-github-packages", (function(a,b,c,d,e,f,g,h,i,j,k){return {data:[{document:{id:"YPA3rxIAACoA7-ik",uid:i,url:a,type:"post_type",href:"https:\u002F\u002Fjsuu.cdn.prismic.io\u002Fapi\u002Fv2\u002Fdocuments\u002Fsearch?ref=YPBHuBIAAC0A8DHG&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YPA3rxIAACoA7-ik%22%29+%5D%5D",tags:[],first_publication_date:"2021-07-15T13:27:17+0000",last_publication_date:"2021-07-15T14:35:36+0000",slugs:[i],linked_documents:[],lang:j,alternate_languages:[],data:{title:[{type:d,text:"Publish GitHub packages",spans:[]}],post_excerpt:[{type:b,text:"How to publish packages on a github repository",spans:[]}],featured_img_link:{link_type:"Web",url:"https:\u002F\u002Fdevclass.com\u002Fwp-content\u002Fuploads\u002F2020\u002F03\u002Fshutterstock_1049969747.jpg"},categories:{id:"YM24NBIAAC4AUVIu",type:"post_category",tags:[],slug:"how-to",lang:j,first_publication_date:"2021-06-19T09:26:17+0000",last_publication_date:"2021-06-19T11:15:52+0000",uid:"how-to-everything",link_type:"Document",isBroken:false},sticky_post:true,body:[{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"In Github every repository can publish packages, which can be used as dependencies in other projects.  ",spans:[]}]}},{slice_type:e,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:d,text:"Naming rule ",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"Name of the package should include organization\u002Fusername and will look like ",spans:[]}]}},{slice_type:f,slice_label:a,items:[{}],primary:{cod_text_field:[{type:g,text:"@organization\u002Fname_of_the_pacakage",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"So adjust name in package.json ",spans:[{start:10,end:14,type:k}]}]}},{slice_type:e,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:d,text:"Repository",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"Don' forget to publish the repository and add it to the package file as follows",spans:[]}]}},{slice_type:f,slice_label:a,items:[{}],primary:{cod_text_field:[{type:g,text:"\"repository\":{\r\n  \"url\": \"git:\u002F\u002Fgithub.com\u002Forg_name\u002Fsome_repo.git\"\r\n}",spans:[]}]}},{slice_type:e,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:d,text:"Access Token",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"We have to use the personal access token to authenticate, we can add the secret to the .npmrc file, so that need not authenticate manually.",spans:[]}]}},{slice_type:e,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:d,text:".npmrc",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"This file can contain the registry information and authentication secrets, we need not expose this file to repository, so that add the file to the .gitignore",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"In the .npmrc include the registry information along with organization \u002F owner .",spans:[{start:7,end:13,type:h}]}]}},{slice_type:f,slice_label:a,items:[{}],primary:{cod_text_field:[{type:g,text:"@owner:registry=https:\u002F\u002Fnpm.pkg.github.com\nnpm.pkg.github.com\u002F:_authToken=TOKEN",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"Replace the owner with user\u002Forg and TOKEN with personal token generated.",spans:[{start:23,end:31,type:h},{start:36,end:41,type:h}]}]}},{slice_type:f,slice_label:a,items:[{}],primary:{cod_text_field:[{type:g,text:"\u002F\u002F.gitignore\n​\n.npmrc\nnode_modules",spans:[]}]}},{slice_type:e,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:d,text:"Publish ",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"Let's jump into terminal issue the npm publish command and it will take few minutes to update. The package will list on the repository as well as on user\u002Forg profile page.",spans:[{start:35,end:46,type:k}]}]}},{slice_type:e,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:d,text:"Update ",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"How to update package ? Can't do that ! instead publish new version by change the version in package.json and publish new one. ",spans:[]}]}},{slice_type:e,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:d,text:"Remove",spans:[]}]}},{slice_type:c,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"For removing, there is dedicated delete button in relevant package.",spans:[]}]}}]}}}],fetch:{},mutations:[]}}(null,"paragraph","paragraph_slice","heading1","heading_slice","code_slice","preformatted","strong","publish-github-packages","en-us","em")));