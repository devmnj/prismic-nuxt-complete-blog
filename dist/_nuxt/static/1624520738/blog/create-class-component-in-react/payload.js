__NUXT_JSONP__("/blog/create-class-component-in-react", (function(a,b,c,d,e,f,g,h,i,j,k,l,m){return {data:[{document:{id:"YMtpthIAAC8AR3XU",uid:e,url:a,type:"post_type",href:"https:\u002F\u002Fjsuu.cdn.prismic.io\u002Fapi\u002Fv2\u002Fdocuments\u002Fsearch?ref=YNQnuBIAACkAcitp&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YMtpthIAAC8AR3XU%22%29+%5D%5D",tags:[],first_publication_date:"2021-06-17T15:44:12+0000",last_publication_date:"2021-06-18T15:12:00+0000",slugs:[e],linked_documents:[],lang:"en-us",alternate_languages:[],data:{title:[{type:f,text:"Create class component in react",spans:[]}],post_excerpt:[{type:b,text:"Get started with React class component",spans:[]}],featured_img_link:{link_type:"Web",url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},categories:{link_type:"Document"},sticky_post:a,body:[{slice_type:"heading_slice",slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:f,text:"Class component",spans:[]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"Unlike functional component, class component in React have state which means they can update UI with new value \u002F . Suppose you have \u003Cbutton\u003E element which showing how many time I clicked, can dynamically update value.",spans:[]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"Lets create a simple class component with a message ​  ",spans:[{start:21,end:36,type:c}]}]}},{slice_type:g,slice_label:a,items:[{}],primary:{cod_text_field:[{type:h,text:"import React,{Component} from \"react\";  \n​  \nclass Message extends Component {  \n    constructor(props) {  \n        super(props)  \n    }  \n    render() {  \n        return (  \n\n            \u003Cdiv\u003E  \n                Hi Mr.  \u003Ci\u003E{this.props.name}\u003C\u002Fi\u003E how are you  \n            \u003C\u002Fdiv\u003E  \n\n        )  \n    }  \n}  \n​  \nexport default Message  ",spans:[]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"Lets export default Message  to the  the App.js and the code block will look like",spans:[{start:20,end:29,type:c}]}]}},{slice_type:g,slice_label:a,items:[{}],primary:{cod_text_field:[{type:h,text:"import logo from '.\u002Flogo.svg';  \nimport Message from '.\u002Fcomponents\u002FMessage'  \n\n  \nfunction App() {  \n    return ( \u003Cdiv className = \"App\" \u003E  \n \u003CMessage name=\"Ramesh\"\u002F\u003E  \n \u003CMessage name='Tommy'\u002F\u003E  \n        \u003C\u002Fdiv\u003E  \n    );  \n}  ",spans:[]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"The class don't' use the state here. It only show how to use props in class component. ",spans:[{start:61,end:66,type:c},{start:i,end:j,type:c},{start:i,end:j,type:k}]},{type:b,text:"",spans:[]}]}},{slice_type:"list_slice",slice_label:a,items:[{}],primary:{list_ritch_text_field:[{type:l,text:"The props has been passed to the component using constructor.",spans:[{start:m,end:10,type:c}]},{type:l,text:"The super is used to pass the value to Component class. ",spans:[{start:m,end:9,type:c}]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"Also note that all component class are derived from type Component which is a React object.",spans:[{start:57,end:67,type:c},{start:78,end:84,type:k}]}]}}]}}}],fetch:{},mutations:[]}}(null,"paragraph","strong","paragraph_slice","create-class-component-in-react","heading1","code_slice","preformatted",70,85,"em","list-item",4)));