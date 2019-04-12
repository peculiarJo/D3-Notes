(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(254)},250:function(e,t,a){},252:function(e,t,a){},254:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(14),i=(a(24),a(26),a(1)),r=a(2),c=a(4),o=a(3),m=a(5),d=(a(28),a(30),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(o.a)(t).call(this))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"home",style:{backgroundImage:"url(/images/home.jpg)",marginLeft:"-20px",marginTop:0}},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row",style:{minHeight:"500px"}},l.a.createElement("div",{className:"col align-self-center col-sm-6 welcome-banner"},l.a.createElement("h1",null,"D3.js"),l.a.createElement("h2",null,"Data visiualization in web application")))))}}]),t}(l.a.Component)),u=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(o.a)(t).call(this))).state={collapse:!1},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"animate-box section-header","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"font-note"},"About"),l.a.createElement("h2",{className:"header"},"What is D3.js")),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("p",null,"D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3\u2019s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation."))))}}]),t}(l.a.Component),h=a(7),p=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(o.a)(t).call(this))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"workWithD3"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"animate-box section-header","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"font-note"},"Work With D3"),l.a.createElement("h2",{className:"header"},"Pros & Cons")),l.a.createElement("div",{className:"container-fluid timeline"},l.a.createElement("h4",null,"Advantages"),l.a.createElement(h.Timeline,null,l.a.createElement(h.TimelineEvent,{title:"Full Control of Data's Visual Results",icon:l.a.createElement("i",{className:"fa fa-thumbs-o-up"}),titleStyle:{fontSize:"16px",fontWeight:"bold"},style:{fontSize:"15px"}},l.a.createElement("p",null,"D3 does not follow the template model some other visualization toolkits use. Instead, D3 allows you to bind arbitrary data to a Document Object Model (DOM). It provides helper functions that work at a more general level. Data presentation in terms of style, manipulation and interactions is completely up to you. Great flexibility is guaranteed in the visualizing process.")),l.a.createElement(h.TimelineEvent,{title:"Fast And Dynamic",icon:l.a.createElement("i",{className:"fa fa-thumbs-o-up"}),titleStyle:{fontSize:"16px",fontWeight:"bold"},style:{fontSize:"15px"}},l.a.createElement("p",null,"D3 is fast, supports large datasets and dynamic behaviours for interaction and animation.")),l.a.createElement(h.TimelineEvent,{title:"Open Source & Resourceful Ecosystem",icon:l.a.createElement("i",{className:"fa fa-thumbs-o-up"}),titleStyle:{fontSize:"16px",fontWeight:"bold"},style:{fontSize:"15px"}},l.a.createElement("p",null,"It is free. It has been forked more than 20,000 times and received over 80,000 starts on Github. There are plenty of cool examples available on the internet.")),l.a.createElement(h.TimelineEvent,{title:"Componentised",icon:l.a.createElement("i",{className:"fa fa-thumbs-o-up"}),titleStyle:{fontSize:"16px",fontWeight:"bold"},style:{fontSize:"15px"}},l.a.createElement("p",null,"D3 modules cann be used individually. You can created reuseable code for same type of visualization.")))),l.a.createElement("div",{className:"container-fluid timeline"},l.a.createElement("h4",null,"Caveats"),l.a.createElement(h.Timeline,null,l.a.createElement(h.TimelineEvent,{title:"Learning Curve",icon:l.a.createElement("i",{className:"fa fa-thumbs-o-down"}),titleStyle:{fontSize:"16px",fontWeight:"bold"},style:{fontSize:"15px"}},l.a.createElement("p",null,"Prerequisites to use D3 include JavaScript, HTML, CSS and SVG. Since there's no templates and the design is left to the user entirely, user needs to have and understanding of how to create good designs. And D3 has its own syntax and functions that user has to master.")),l.a.createElement(h.TimelineEvent,{title:"Can Be Overkill",icon:l.a.createElement("i",{className:"fa fa-thumbs-o-down"}),titleStyle:{fontSize:"16px",fontWeight:"bold"},style:{fontSize:"15px"}},l.a.createElement("p",null,"D3 may not be the best choice for static data or any regular visual formats that can be achieved with other high level libraries."))))))}}]),t}(l.a.Component),f=a(258),E=a(257),g=a(6),v=(a(37),a(9)),b=a.n(v),y=(a(41),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(o.a)(t).call(this))).state={activePane:0,tags:["apple","mango","banana","orange"],dataset:[15,8,42,4]},e.select='d3.select("p");',e.selectAll='d3.selectAll("p");',e.selectEx='d3.selectAll("p").select("b");',e.selectAllEx='d3.selectAll("p").selectAll("b");',e.selectStyleDynamic='d3.selectAll("p").style("color", function(d, i) \n{\n    return i % 2 ? "#fff" : "#eee";\n});\nd3.selectAll("p").classed("foo", () => Math.random() > 0.5);',e.selectStyleStatic='d3.selectAll("p").selectAll("b").style("color", "blue");        \nd3.selectAll("p").classed("foo bar", true);',e.selectAppend='d3.select("body").append("div");',e.selectAllAppend='d3.selectAll("div").append("h1");',e.selectInsert='d3.select("body").insert("div",":first-child");',e.selectRemove='d3.selectAll("i").remove();',e.selectEnterHtml='<ul id="demo-update"></ul>',e.selectEnterJs='var fruits=[\'apple\',\'mango\',\'banana\',\'orange\'];\nd3.select("#demo-enter")\n.selectAll("li")\n.style("color", "black")\n.data(fruits)\n.enter()\n.append(\'li\')\n.text(function(d) {return d;})\n.style("color","red");',e.selectUpdateHtml='<ul id="demo-enter">\n<li></li>\n<li></li>\n<li></li>\n<li></li>\n</ul>',e.selectUpdateJs='var fruits=[\'apple\',\'mango\',\'banana\',\'orange\'];\nd3.select("#demo-update")\n.selectAll("li")\n.style("color", "black")\n.data(fruits)\n.text(function(d) {return d;})\n.style("color","red");',e.selectExitHtml='<ul id="demo-exit">\n<li>apple</li>\n<li>mango</li>\n<li>banana</li>\n<li>orange</li>\n</ul>',e.selectExitJs="var fruits=['apple','mango','banana'];\nd3.select('#demo-exit')\n.selectAll('li')\n.style(\"color\", \"black\")\n.data(fruits)\n.exit()\n.remove();",e.drawBarHtml='<div id="single-bar"><div>\n<div id="single-circle"><div>',e.drawBarJs="//draw a bar\nvar bar = { width: 100, height: 200 };\nd3.select('#single-bar').append('svg').attr('width', 100).attr('height', 200)\n.append('rect')\n.attr('width', bar.width)\n.attr('height', bar.height)\n.style('fill','blue')\n.style('opacity',0.1);\n//draw a circle\nvar circle = { cx: 102, cy: 102,r:100 };\nd3.select('#single-circle').append('svg').attr('width', 205).attr('height', 205)\n.append('circle')\n.attr('cx', circle.cx)\n.attr('cy', circle.cy)\n.attr('r',circle.r)\n.style('fill','none')\n.style('stroke','red')\n.style('stroke-width','3')\n.style('opacity',0.1);",e.barChartHtml='<svg id="chart" width="400" height="300"></svg>',e.barChartJs="setup() {\n    var margin = { top: 20, left: 20, bottom: 20 },\n        height = 300;\n    var svg = d3.select(\"#chart\");\n    svg.append(\"g\").attr('class', 'shapeArea')\n        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');\n    svg.append(\"g\").attr('class', 'axis-x')\n        .attr(\"transform\", \"translate(\" + margin.left + \",\" + (height - margin.bottom) + \")\");\n    svg.append(\"g\").attr('class', 'axis-y')\n        .attr(\"transform\", \"translate(\" + margin.left + \",\" + (margin.bottom) + \")\");\n}\nupdate() {\n    var _this = this,\n        xScale = d3.scaleBand().padding(0.1),\n        yScale = d3.scaleLinear(),\n        height = 300 - 20 - 20;\n    var svg = d3.select(\"#chart\");\n    var selection = svg.select('.shapeArea')\n        .selectAll(\"rect\").data(this.state.dataset);\n    var label = svg.select('.shapeArea')\n        .selectAll(\"text\").data(this.state.dataset);\n    xScale.rangeRound([0, 400]);\n    yScale.rangeRound([height, 0]);\n    xScale.domain(this.state.dataset.map((d, i) => i));\n    yScale.domain([0, d3.max(this.state.dataset, (d) => d)]);\n\n    // Enter selection: Create new DOM elements for added \n    // data items, resize and position them and attach a \n    // mouse click handler.\n    selection.enter()\n        .append(\"rect\").attr(\"class\", \"bar\")\n        .attr('y', function (d) { return yScale(d); })\n        .attr('x', function (d, i) { return xScale(i); })\n        .attr('height', function (d) { return height - yScale(d); })\n        .attr('width', xScale.bandwidth());\n    label.enter().append('text')\n        .attr('y', function (d) { return yScale(d); })\n        .attr('x', function (d, i) { return xScale(i) + xScale.bandwidth() / 2.5; })\n        .text((d) => d);\n\n    selection.attr('y', function (d) { return yScale(d); })//.attr('transform','translate(0,10)')\n        .attr('x', function (d, i) { return xScale(i); })\n        .attr('height', function (d) { return height - yScale(d) })\n        .attr('width', xScale.bandwidth());\n\n    label.attr('y', function (d) { return yScale(d); })\n        .attr('x', function (d, i) { return xScale(i) + xScale.bandwidth() / 2.5; })\n        .text((d) => d);\n    // Exit selection: Remove elements without data from the DOM\n    selection.exit().remove();\n    label.exit().remove();\n    svg.selectAll('rect').selectAll('text')\n    svg.select('.axis-x')//.attr('transform','translate(0,'+height+')')\n        .call(d3.axisBottom(xScale));\n    svg.select('.axis-y').call(d3.axisLeft(yScale).ticks(5));\n\n    // Print underlying data array\n    d3.select(\"#dataset\").text(this.state.dataset);\n}",e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setup()}},{key:"toggle",value:function(e){e==this.state.activePane&&(e=null),this.setState({activePane:e})}},{key:"enterList",value:function(){g.f("#demo-enter").selectAll("li").style("color","black").data(this.state.tags).enter().append("li").text(function(e){return e}).style("color","red")}},{key:"updateList",value:function(){g.f("#demo-update").selectAll("li").style("color","black").data(this.state.tags).text(function(e){return e}).style("color","red")}},{key:"exitList",value:function(){g.f("#demo-exit").selectAll("li").style("color","black").data(this.state.tags).exit().remove(),g.f("#demo-exit").selectAll("li").data(this.state.tags).text(function(e){return e})}},{key:"handleChange",value:function(e){this.setState({tags:e})}},{key:"createShape",value:function(){var e=100,t=200;g.f("#single-bar").append("svg").attr("width",100).attr("height",200).append("rect").attr("width",e).attr("height",t).style("fill","blue").style("opacity",.1);var a=102,n=102,l=100;g.f("#single-circle").append("svg").attr("width",205).attr("height",205).append("circle").attr("cx",a).attr("cy",n).attr("r",l).style("fill","none").style("stroke","red").style("stroke-width","3").style("opacity",.1)}},{key:"setup",value:function(){var e=20,t=20,a=20,n=g.f("#chart");n.append("g").attr("class","shapeArea").attr("transform","translate("+t+","+e+")"),n.append("g").attr("class","axis-x").attr("transform","translate("+t+","+(300-a)+")"),n.append("g").attr("class","axis-y").attr("transform","translate("+t+","+a+")")}},{key:"update",value:function(){var e=g.d().padding(.1),t=g.e(),a=g.f("#chart"),n=a.select(".shapeArea").selectAll("rect").data(this.state.dataset),l=a.select(".shapeArea").selectAll("text").data(this.state.dataset);e.rangeRound([0,400]),t.rangeRound([260,0]),e.domain(this.state.dataset.map(function(e,t){return t})),t.domain([0,g.c(this.state.dataset,function(e){return e})]),n.enter().append("rect").attr("class","bar").attr("y",function(e){return t(e)}).attr("x",function(t,a){return e(a)}).attr("height",function(e){return 260-t(e)}).attr("width",e.bandwidth()),l.enter().append("text").attr("y",function(e){return t(e)}).attr("x",function(t,a){return e(a)+e.bandwidth()/2.5}).text(function(e){return e}),n.attr("y",function(e){return t(e)}).attr("x",function(t,a){return e(a)}).attr("height",function(e){return 260-t(e)}).attr("width",e.bandwidth()),l.attr("y",function(e){return t(e)}).attr("x",function(t,a){return e(a)+e.bandwidth()/2.5}).text(function(e){return e}),n.exit().remove(),l.exit().remove(),a.selectAll("rect").selectAll("text"),a.select(".axis-x").call(g.a(e)),a.select(".axis-y").call(g.b(t).ticks(5)),g.f("#dataset").text(this.state.dataset)}},{key:"handleChangeNum",value:function(e){var t=this;this.setState({dataset:e},function(){t.update()})}},{key:"render",value:function(){return l.a.createElement("section",{id:"features"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"animate-box section-header","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"font-note"},"Features"),l.a.createElement("h2",{className:"header"},"What Can D3.js Do")),l.a.createElement("div",{className:"panel panel-default section-content"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h2",{className:"panel-title"},l.a.createElement("button",{className:"btn btn-block",onClick:this.toggle.bind(this,0)},"Selections",l.a.createElement("i",{className:0!=this.state.activePane?"fa fa-plus pull-right":"fa fa-minus pull-right"})))),l.a.createElement("div",{className:0==this.state.activePane?"panel-body":"collapse"},l.a.createElement("div",{className:"container"},l.a.createElement("h5",null,"To select elements"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},"First element that matches the selector",l.a.createElement(f.a,{language:"javascript",style:E.a},this.select),"All element that matches the selector",l.a.createElement(f.a,{language:"javascript",style:E.a},this.selectAll)),l.a.createElement("div",{className:"col-sm"},"==>extend",l.a.createElement(f.a,{language:"javascript",style:E.a},this.selectEx),"==>extend",l.a.createElement(f.a,{language:"javascript",style:E.a},this.selectAllEx)))),l.a.createElement("hr",null),l.a.createElement("div",{className:"container"},l.a.createElement("h5",null,"To modify elements"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},"To style",l.a.createElement(f.a,{language:"javascript",style:E.a},this.selectStyleStatic),l.a.createElement(f.a,{language:"javascript",style:E.a},this.selectStyleDynamic)),l.a.createElement("div",{className:"col-sm"},"To add",l.a.createElement(f.a,{language:"javascript",style:E.a},this.selectAppend),l.a.createElement(f.a,{language:"javascript",style:E.a},this.selectAllAppend),l.a.createElement(f.a,{language:"javascript",style:E.a},this.selectInsert),l.a.createElement(f.a,{language:"javascript",style:E.a},this.selectAllAppend)))))),l.a.createElement("div",{className:"panel panel-default section-content"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h2",{className:"panel-title"},l.a.createElement("button",{className:"btn btn-block",onClick:this.toggle.bind(this,1)},"Data Binding",l.a.createElement("i",{className:1!=this.state.activePane?"fa fa-plus pull-right":"fa fa-minus pull-right"})))),l.a.createElement("div",{className:1==this.state.activePane?"panel-body":"collapse"},l.a.createElement("div",{className:"container"},l.a.createElement("h5",null,"Update"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},"To bind data to existing DOM elements and update selected elements",l.a.createElement(f.a,{language:"html",style:E.a},this.selectUpdateHtml),l.a.createElement(f.a,{language:"javascript",style:E.a},this.selectUpdateJs)),l.a.createElement("div",{className:"col-sm"},l.a.createElement("button",{className:"btn btn-outline-info",onClick:this.updateList.bind(this)},"Run"),l.a.createElement("div",{className:"container"},l.a.createElement(b.a,{value:this.state.tags,onChange:this.handleChange.bind(this)}),l.a.createElement("div",{className:"container"},"My fruit List",l.a.createElement("ul",{id:"demo-update"},l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null))))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"container"},l.a.createElement("h5",null,"Enter"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},"To bind NEW data to non-existing DOM elements. Since DOM elements do not exist, enter will create DOM elements then bind the data.",l.a.createElement(f.a,{language:"html",style:E.a},this.selectEnterHtml),l.a.createElement(f.a,{language:"javascript",style:E.a},this.selectEnterJs)),l.a.createElement("div",{className:"col-sm"},l.a.createElement("button",{className:"btn btn-outline-info",onClick:this.enterList.bind(this)},"Run"),l.a.createElement("div",{className:"container"},l.a.createElement(b.a,{value:this.state.tags,onChange:this.handleChange.bind(this)}),l.a.createElement("div",{className:"container"},"My fruit List",l.a.createElement("ul",{id:"demo-enter"})))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"container"},l.a.createElement("h5",null,"Exit"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},"To select elements whose data has been removed",l.a.createElement(f.a,{language:"html",style:E.a},this.selectExitHtml),l.a.createElement(f.a,{language:"javascript",style:E.a},this.selectExitJs)),l.a.createElement("div",{className:"col-sm"},l.a.createElement("button",{className:"btn btn-outline-info",onClick:this.exitList.bind(this)},"Run"),l.a.createElement("div",{className:"container"},l.a.createElement(b.a,{value:this.state.tags,onChange:this.handleChange.bind(this)}),l.a.createElement("div",{className:"container"},"My fruit List",l.a.createElement("ul",{id:"demo-exit"},l.a.createElement("li",null,"apple"),l.a.createElement("li",null,"mango"),l.a.createElement("li",null,"banana"),l.a.createElement("li",null,"orange"))))))))),l.a.createElement("div",{className:"panel panel-default section-content"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h2",{className:"panel-title"},l.a.createElement("button",{className:"btn btn-block",onClick:this.toggle.bind(this,2)},"SVG Elements",l.a.createElement("i",{className:2!=this.state.activePane?"fa fa-plus pull-right":"fa fa-minus pull-right"})))),l.a.createElement("div",{className:2==this.state.activePane?"panel-body":"collapse"},l.a.createElement("div",{className:"container"},l.a.createElement("h5",null,"Creat shapes"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},"Draw a bar",l.a.createElement(f.a,{language:"html",style:E.a},this.drawBarHtml),l.a.createElement(f.a,{language:"javascript",style:E.a},this.drawBarJs)),l.a.createElement("div",{className:"col-sm"},l.a.createElement("button",{className:"btn btn-outline-info",onClick:this.createShape.bind(this)},"Run"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"container",id:"single-bar"}),l.a.createElement("div",{className:"container",id:"single-circle"}))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"container"},l.a.createElement("h5",null,"Creat a bar chart"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm",style:{width:"50%",maxHeight:"500px",overflowY:"scroll"}},"Draw a bar chart",l.a.createElement(f.a,{language:"html",style:E.a},this.barChartHtml),l.a.createElement(f.a,{language:"javascript",style:E.a},this.barChartJs)),l.a.createElement("div",{className:"col-sm"},l.a.createElement("button",{className:"btn btn-outline-info",onClick:this.update.bind(this)},"Run"),l.a.createElement("div",{className:"container"},l.a.createElement(b.a,{value:this.state.dataset,onChange:this.handleChangeNum.bind(this)}),l.a.createElement("svg",{id:"chart",width:"400",height:"300"})))))))))}}]),t}(l.a.Component)),x=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(o.a)(t).call(this))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"fun",style:{minHeight:"500px"}},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"animate-box section-header","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"font-note"},"More"),l.a.createElement("h2",{className:"header"},"Useful D3 Sites"))),l.a.createElement("div",{className:"container-fluid"},"D3 official site: ",l.a.createElement("a",{href:"https://d3js.org/",target:"_blank"},"D3.js - Data-Driven Documents"),l.a.createElement("br",null),"A D3 wrapper: ",l.a.createElement("a",{href:"https://vega.github.io/vega/",target:"_blank"},"Vega \u2013 A Visualization Grammar"),l.a.createElement("br",null),"Great blog: ",l.a.createElement("a",{href:"https://www.d3-graph-gallery.com/",target:"_blank"},"The D3 Graph Gallery \u2013 Simple charts made with d3.js")))}}]),t}(l.a.Component),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={open:!0,freeBookmark:!1,hiring:!0,data:[],loading:!1},a.toggleOpenClosed=function(){a.setState(function(e){return{open:!e.open}})},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1").then(function(e){return e.json()}).then(function(t){return e.setState({data:t,loading:!1})})}},{key:"componentDidUpdate",value:function(){console.log("The component just updated")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(u,null),l.a.createElement(y,null),l.a.createElement(p,null),l.a.createElement(x,null))}}]),t}(l.a.Component);N.defaultProps={books:[{title:"Tahoe Tales",author:"Chet Whitley",pages:1e3}]};var w=N,S=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"avatar",style:{backgroundImage:"url(/images/avatar.jpg)"},height:100}),l.a.createElement("h1",null,"D3.js"),l.a.createElement("span",{className:"title"},"Data-Driven Documents"))},j=a(18),k=a.n(j),D=function(){return l.a.createElement("nav",{className:"navbar",role:"navigation",id:"myMenuNav"},l.a.createElement(k.a,{items:["home","about","features","workWithD3","fun"],currentClassName:"active",offset:-250},l.a.createElement("li",null,l.a.createElement("a",{href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#features"},"Features")),l.a.createElement("li",null,l.a.createElement("a",{href:"#workWithD3"},"Work With D3")),l.a.createElement("li",null,l.a.createElement("a",{href:"#fun"},"More"))))},A=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",{style:{marginTop:"20px"}},l.a.createElement("small",null,"@Copyright template by Colorib ")))},O=(a(250),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"text-center"},l.a.createElement(S,null),l.a.createElement(D,null),l.a.createElement(A,null))}}]),t}(l.a.Component)),C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(o.a)(t).call(this))).updateDimensions=function(){e.setState({width:window.innerWidth})},e.componentWillMount=function(){e.updateDimensions()},e.componentDidMount=function(){window.addEventListener("resize",e.updateDimensions)},e.componentWillUnmount=function(){window.removeEventListener("resize",e.updateDimensions)},e.state={open:!1},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){return l.a.createElement("div",{className:"content-wrap"},l.a.createElement("i",{className:this.state.open?"menu-collapse fa-2x fa-angle-double-left fa":"fa fa-2x fa-bars menu-open",onClick:this.toggle.bind(this)}),l.a.createElement("div",{className:this.state.open||this.state.width>767?"side":"collapse"},l.a.createElement(O,null)),l.a.createElement("div",{className:"content"},l.a.createElement(w,null)))}}]),t}(l.a.Component);a(252);Object(s.render)(l.a.createElement(C,null),document.getElementById("root"))},28:function(e,t,a){},30:function(e,t,a){}},[[19,2,1]]]);
//# sourceMappingURL=main.fabd7a7f.chunk.js.map