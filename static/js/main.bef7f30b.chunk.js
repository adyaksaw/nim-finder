(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(10),i=a.n(u),l=(a(18),a(1)),s=a(2),c=a(4),o=a(3),m=a(5),h=(a(19),a(6)),d=a(11),p=a.n(d),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={username:a.props.username,formName:"",formPass:""},a.updateName=a.updateName.bind(Object(h.a)(a)),a.updatePassword=a.updatePassword.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"createBody",value:function(){return"username="+this.state.formName+"&password="+this.state.formPass}},{key:"buildRequest",value:function(){return{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:this.createBody()}}},{key:"updateName",value:function(e){this.setState({formName:e.target.value})}},{key:"updatePassword",value:function(e){this.setState({formPass:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){return e.props.handleSubmit(t,e.buildRequest(),e.state.formName)}},"Nama:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:this.state.formName,onChange:this.updateName}),r.a.createElement("br",null),"Password:",r.a.createElement("br",null),r.a.createElement("input",{type:"password",value:this.state.formPass,onChange:this.updatePassword}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:this.props.type})),r.a.createElement("br",null)))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e,t,a){return console.log(e),e.preventDefault(),fetch("https://api.stya.net/nim/register",t).then(function(e){return e.json()}).then(function(e){0===e.code?alert("Username has been registered!"):alert(e.status)}),!1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{handleSubmit:this.handleSubmit,type:"Register"}))}}]),t}(r.a.Component),y=a(8),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e,t,a){var n=this,r=new y.a;return e.preventDefault(),fetch("https://api.stya.net/nim/login",t).then(function(e){return e.json()}).then(function(e){0===e.code?(alert("Login successfull!"),n.props.updateAuthUser(a,e.token),r.set("token",e.token,{expires:new Date(Date.now()+36e5)}),r.set("username",a,{expires:new Date(Date.now()+36e5)}),n.props.removeTab()):alert(e.status)}),!1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{handleSubmit:this.handleSubmit,type:"Login"}))}}]),t}(r.a.Component),E=function(e){function t(e){return Object(l.a)(this,t),Object(c.a)(this,Object(o.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null==this.props.data?null:r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nama"),r.a.createElement("th",null,"NIM TPB"),r.a.createElement("th",null,"NIM Jurusan"),r.a.createElement("th",null,"Prodi"))),r.a.createElement("tbody",null,this.props.data.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",{key:e.name},e.name),r.a.createElement("td",{key:e.nim_tpb},e.nim_tpb),r.a.createElement("td",{key:e.nim_jur+e.nim_tpb},e.nim_jur),r.a.createElement("td",{key:e.nim_tpb+e.prodi},e.prodi))})));return r.a.createElement("div",null,e)}}]),t}(r.a.Component),g=(a(20),["https://api.stya.net/nim/byid","https://api.stya.net/nim/byname"]),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).changeQueryType=function(e){return function(){a.setState({queryType:e})}},a.nextPage=function(){a.setState({currentPage:a.state.currentPage+1}),a.handleQuery(a.state.currentPage)},a.prevPage=function(){a.setState({currentPage:a.state.currentPage-1}),a.handleQuery(a.state.currentPage)},a.state={isTyped:!1,isQueried:!1,query:"",currentPage:0,queriedData:[],queryType:0},a.prepareQuery=a.prepareQuery.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"buildRequest",value:function(){return{method:"GET",headers:{"Auth-Token":this.props.token}}}},{key:"buildEndPoint",value:function(e,t,a,n){return e+"?query="+t+"&count="+a+"&page="+n}},{key:"handleQuery",value:function(e){var t=this;(!this.state.isQueried||e>0)&&(this.setState({isQueried:!0}),this.timerId=null,this.setState({queriedData:null}),fetch(this.buildEndPoint(g[this.state.queryType],this.state.query,10,e),this.buildRequest()).then(function(e){return e.json()}).then(function(e){"OK"===e.status?t.setState({queriedData:e.payload.slice(0)}):alert(e.code)}))}},{key:"prepareQuery",value:function(e){var t=this;this.setState({query:e.target.value}),this.setState({isQueried:!1}),this.timerId=setInterval(function(){return t.handleQuery(0)},300)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return console.log(this.state.queriedData),r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{type:"radio",name:"queryType",value:"nim",onChange:this.changeQueryType(0)})," By NIM",r.a.createElement("br",null),r.a.createElement("input",{type:"radio",name:"queryType",value:"name",onChange:this.changeQueryType(1)})," By Name",r.a.createElement("br",null)),r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:this.state.query,onChange:this.prepareQuery}),r.a.createElement("br",null)),this.state.isQueried?r.a.createElement("div",null,r.a.createElement(E,{data:this.state.queriedData}),this.state.currentPage>0?r.a.createElement("button",{class:"btn",onClick:this.prevPage},"Previous"):null,null!=this.state.queriedData&&this.state.queriedData.length<10&&this.state.isQueried?null:r.a.createElement("button",{class:"btn",onClick:this.nextPage},"Next")):null)}}]),t}(r.a.Component),k=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).logout=function(){var e=new y.a;a.setState({username:"Guest"}),a.setState({token:""}),e.remove("token"),e.remove("username"),a.setState({activeTab:0})},a.updateTab=function(e){return function(){a.setState({activeTab:e})}},a.remoteTab=function(){a.setState({activeTab:0})};var n=new y.a;return a.state={username:null==n.get("token")?"Guest":n.get("username"),activeTab:0,token:n.get("token")},a.updateAuthUser=a.updateAuthUser.bind(Object(h.a)(a)),a.updateTab=a.updateTab.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"updateAuthUser",value:function(e,t){this.setState({username:e}),this.setState({token:t})}},{key:"isLogin",value:function(){return!("Guest"===this.state.username)}},{key:"render",value:function(){var e,t=this.isLogin();return 1===this.state.activeTab?e=r.a.createElement(v,null):2===this.state.activeTab?e=r.a.createElement(f,{updateAuthUser:this.updateAuthUser,removeTab:this.remoteTab}):3===this.state.activeTab&&(e=r.a.createElement(j,{token:this.state.token})),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",null,r.a.createElement("b",null,t?this.state.username:"Please register before using this this nim-finder")),t?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{class:"btn",onClick:this.updateTab(3)},"Query")),r.a.createElement("div",null,r.a.createElement("button",{class:"btn",onClick:this.logout},"Logout"))):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{class:"btn",onClick:this.updateTab(1)},"Register")),r.a.createElement("div",null,r.a.createElement("button",{class:"btn",onClick:this.updateTab(2)},"Login"))),e))}}]),t}(r.a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.bef7f30b.chunk.js.map