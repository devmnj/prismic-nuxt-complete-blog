__NUXT_JSONP__("/blog/when-it-come-to-chart-i-should-mention-morris-chart", (function(a,b,c,d,e,f,g,h,i){return {data:[{document:{id:"YM1kMxIAACoAT-CG",uid:"when-it-come-to-chart-i-should-mention-morris-chart",url:a,type:"post_type",href:"https:\u002F\u002Fjsuu.cdn.prismic.io\u002Fapi\u002Fv2\u002Fdocuments\u002Fsearch?ref=YPGR3RIAACoA9fO4&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YM1kMxIAACoAT-CG%22%29+%5D%5D",tags:[],first_publication_date:"2021-06-19T03:27:52+0000",last_publication_date:"2021-06-20T16:08:48+0000",slugs:["charts-for-vue"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{title:[{type:f,text:"Charts for Vue",spans:[]}],post_excerpt:[{type:b,text:"Popular chart libraries for Vuejs applications",spans:[]}],featured_img_link:{link_type:c,url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=702&q=80"},categories:{link_type:"Document"},sticky_post:false,body:[{slice_type:d,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"When it come to chart I should mention Morris chart which I start developing my very first Python Flask app. It offer pretty nice charts. But for Vue I recommend you to use Chartjs.",spans:[{start:39,end:51,type:e,data:{link_type:c,url:"https:\u002F\u002Fmorrisjs.github.io\u002Fmorris.js\u002F"}}]}]}},{slice_type:g,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:"heading2",text:"Vue-Chartjs",spans:[]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"Chartjs has Vue wrapper variant (opensource) which is based on Original Chartjs. It is JavaScript library you can use either CDN or NPM version. I going to use it with NPM, it is so easy.",spans:[{start:0,end:7,type:e,data:{link_type:c,url:"https:\u002F\u002Fwww.chartjs.org\u002F"}},{start:12,end:23,type:e,data:{link_type:c,url:"https:\u002F\u002Fgithub.com\u002Fapertureless\u002Fvue-chartjs\u002F"}}]}]}},{slice_type:h,slice_label:a,items:[{}],primary:{cod_text_field:[{type:i,text:"npm install vue-chartjs chart.js --save",spans:[]}]}},{slice_type:g,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:f,text:"Example",spans:[]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"Here is a simple TypeScript example ( provided by the official GitHub repository)",spans:[]}]}},{slice_type:h,slice_label:a,items:[{}],primary:{cod_text_field:[{type:i,text:"\u002F\u002F CommitChart.ts\nimport { Component, Mixins } from 'vue-property-decorator'\nimport { Bar, mixins } from 'vue-chartjs';\nimport { Component } from 'vue-property-decorator';\n\n@Component({\n    extends: Bar, \u002F\u002F this is important to add the functionality to your component\n    mixins: \\[mixins.reactiveProp\\]\n})\nexport default class CommitChart extends Mixins(mixins.reactiveProp, Bar) {\n  mounted () {\n    \u002F\u002F Overwriting base render method with actual data.\n    this.renderChart({\n      labels: \\['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'\\],\n      datasets: \\[\n        {\n          label: 'GitHub Commits',\n          backgroundColor: '#f87979',\n          data: \\[40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11\\]\n        }\n      \\]\n    })\n  }\n}",spans:[]}]}},{slice_type:g,slice_label:a,items:[{}],primary:{header_rich_text_field:[{type:f,text:"What Next ?",spans:[]}]}},{slice_type:d,slice_label:a,items:[{}],primary:{paragraph_rich_text_field:[{type:b,text:"lol, create custom component for charting , so that you can use them in other projects.",spans:[]},{type:b,text:"One of the key point to remember that the chart component class doesn't have a CSS and Template section. According to documentation it can't have template section. So you have to use another component using the above component.",spans:[{start:118,end:131,type:e,data:{link_type:c,url:"https:\u002F\u002Fvue-chartjs.org\u002Fguide\u002F#introduction"}},{start:146,end:154,type:"strong"}]}]}}]}}}],fetch:{},mutations:[]}}(null,"paragraph","Web","paragraph_slice","hyperlink","heading1","heading_slice","code_slice","preformatted")));