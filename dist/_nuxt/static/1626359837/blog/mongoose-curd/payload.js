__NUXT_JSONP__("/blog/mongoose-curd", (function(a,b,c,d,e,f){return {data:[{document:{id:"YM170RIAACsAUEfi",uid:c,url:a,type:"post_type",href:"https:\u002F\u002Fjsuu.cdn.prismic.io\u002Fapi\u002Fv2\u002Fdocuments\u002Fsearch?ref=YPBHuBIAAC0A8DHG&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YM170RIAACsAUEfi%22%29+%5D%5D",tags:[],first_publication_date:d,last_publication_date:d,slugs:[c],linked_documents:[],lang:"en-us",alternate_languages:[],data:{title:[{type:"heading1",text:"Mongoose CURD",spans:[]}],post_excerpt:[{type:b,text:"How to create Mongoose models for CURD",spans:[]}],featured_img_link:{link_type:"Web",url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1547658719-da2b51169166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"},categories:{link_type:"Document"},sticky_post:a,body:[{slice_type:"paragraph_slice",slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"Mongoose allow us to perform CURD operation using REST full Modals. A Modal is basically is an object\u002Fclass which define all fields with validation and also connected to your MongoDB.",spans:[]},{type:b,text:"To perform operation ,create variables of the modal and call the save\u002F create method. Following is a sample Modal class",spans:[{start:e,end:f,type:"em"},{start:e,end:f,type:"strong"}]}]}},{slice_type:"code_slice",slice_label:a,items:[{}],primary:{cod_text_field:[{type:"preformatted",text:"const mongoose = require('mongoose');\n const UserSchema = new mongoose.Schema({\n     name :{\n         type:String,\n         required: '{PATH} is required!'\n     },\n     bio: {\n         type:String\n     },\n     email:{\n         type:String\n     },\n     website:{\n         type:String\n     },\n     password:{type:String,required: '{PATH} is required!',default:\"123\"},\n `posts : [     {type: mongoose.Schema.Types.ObjectId,ref:'Post'} ]`\n },{\n     timestamps: true\n })\n module.exports = mongoose.model('User',UserSchema);\n\nIn the modal class you can store another document using **_ObjectID_** .Here is an example for the _**create**_ document using the modal class\n\nconst user = await User.create({\n             name,\n             email,\n             bio,\n             website\n         })",spans:[]}]}}]}}}],fetch:{},mutations:[]}}(null,"paragraph","mongoose-curd","2021-06-19T05:08:37+0000",65,77)));