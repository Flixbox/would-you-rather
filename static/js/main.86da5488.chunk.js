(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,n){e.exports=n(289)},289:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(33),i=n.n(o),c=n(11),s=n(12),u=n(14),l=n(13),h=n(15),d=n(19),m=n(8),p=n(48),v=n.n(p),b=n(23),f=n(37),g=n(3),w="SET_AUTHED_USER";function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:w,id:e}}var O=n(35),y=n(36),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handleLogoutClick=function(){(0,n.props.dispatch)(function(e){e(j())})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.authedUser,o=t.users.users[a.id].avatarURL;return r.a.createElement("div",null,r.a.createElement("div",{className:n.root},r.a.createElement(g.a,{position:"static"},r.a.createElement(g.g,{className:n.navBar},r.a.createElement(b.b,{to:"/",replace:!0,className:n.menuButton},r.a.createElement(g.e,{color:"inherit"},"Would You Rather?")),r.a.createElement(b.b,{to:"/new",replace:!0,className:n.menuButton},r.a.createElement(g.e,{color:"inherit"},"New Question")),r.a.createElement(b.b,{to:"/leaderboard",replace:!0,className:n.menuButton},r.a.createElement(g.e,{color:"inherit"},"Leaderboard")),r.a.createElement("div",{className:n.grow}),r.a.createElement(b.b,{to:"/profile",replace:!0,className:n.menuButton},r.a.createElement(g.e,{color:"inherit"},a.id),r.a.createElement(g.b,{alt:"avatar",src:o,className:n.avatar})),r.a.createElement(g.e,{color:"inherit",onClick:function(){return e.handleLogoutClick()}},r.a.createElement(O.a,{icon:y.c}))))))}}]),t}(a.Component);var x=Object(m.withStyles)(function(e){return{menuButton:{marginLeft:-12,marginRight:20,textDecoration:"none",color:"white",maxHeight:"100%"},avatar:{maxHeight:"100%",float:"right"},grow:{flexGrow:1}}})(E),q=Object(d.b)(function(e){return{users:e.users,authedUser:e.authedUser}})(x),U=n(50),k=n(16),N=n(4),T={catherinegregory:{id:"catherinegregory",name:"Catherine Gregory",avatarURL:"https://randomuser.me/api/portraits/women/82.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},edwincarr:{id:"edwincarr",name:"Edwin Carr",avatarURL:"https://randomuser.me/api/portraits/men/36.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},danoliver:{id:"danoliver",name:"Dan Oliver",avatarURL:"https://randomuser.me/api/portraits/men/24.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},C={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"catherinegregory",timestamp:1467166872634,optionOne:{votes:["catherinegregory"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"danoliver",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["danoliver","catherinegregory"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"catherinegregory",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["catherinegregory"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"edwincarr",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["catherinegregory"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"edwincarr",timestamp:1489579767190,optionOne:{votes:["edwincarr"],text:"find $50 yourself"},optionTwo:{votes:["danoliver"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"danoliver",timestamp:1493579767190,optionOne:{votes:["danoliver"],text:"write JavaScript"},optionTwo:{votes:["edwincarr"],text:"write Swift"}}};function Q(e){return function(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise(function(e,r){setTimeout(function(){T=Object(N.a)({},T,Object(k.a)({},t,Object(N.a)({},T[t],{answers:Object(N.a)({},T[t].answers,Object(k.a)({},n,a))}))),C=Object(N.a)({},C,Object(k.a)({},n,Object(N.a)({},C[n],Object(k.a)({},a,Object(N.a)({},C[n][a],{votes:C[n][a].votes.concat([t])}))))),e()},500)})}({authedUser:e.authedUser,qid:e.qid,answer:e.answer})}var A="RECEIVE_QUESTIONS",S="RETRIEVE_NEW_QUESTION",z="SAVE_QUESTION_ANSWER";function L(e){return function(t){t(function(e){return{type:S,authedUser:e}}(e))}}function R(e){var t=e.authedUser,n=e.qid,a=e.answer;return function(e){return e(function(e){var t=e.authedUser,n=e.qid,a=e.answer;return{type:z,authedUser:t,qid:n,answer:a}}({authedUser:t.id,qid:n,answer:a})),Q({authedUser:t.id,qid:n,answer:a}).catch(function(e){console.warn("Error in handleQuestionAnswer: ",e)})}}var B=Object(m.createMuiTheme)({palette:{type:"dark"},overrides:{MuiToolbar:{regular:{"&&":{minHeight:"".concat(56,"px"),height:"".concat(56,"px"),maxHeight:"".concat(56,"px")}}},MuiBottomNavigation:{root:{minHeight:"".concat(56,"px"),height:"".concat(56,"px"),maxHeight:"".concat(56,"px"),position:"absolute",bottom:0,left:0,right:0}}},typography:{useNextVariants:!0}}),W=n(18),I=n.n(W),P=n(92),H=n.n(P),V={main:{flex:"1 0 auto",width:"50%",height:"100%",padding:"5px"},choseThisOption:{backgroundColor:B.palette.secondary.main},optionButton:{height:"100%",width:"100%",textTransform:"none"},optionButtonVoted:{height:"50%",width:"100%",textTransform:"none"},chartContainer:{maxHeight:"50%"},chart:{maxWidth:"20vh"}},_=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).renderPieChart=function(){var e=n.props,t=e.classes,a=(e.authedUser,e.text,e.votes),o=(e.option,e.opposite),i=a.length,c=o.votes.length;return r.a.createElement(g.f,{item:!0,xs:12,className:t.chartContainer,align:"center"},r.a.createElement(H.a,{className:t.chart,data:[{title:"This option",value:i,color:B.palette.primary.main}],animate:!0,label:!0,labelStyle:{fill:B.palette.primary.contrastText},totalValue:c+i}))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.authedUser,a=e.text,o=e.votes,i=e.option,c=e.handleQuestionAnswer,s=e.opposite,u=o.includes(n.id),l=s.votes.includes(n.id)||u;return r.a.createElement(g.f,{container:!0,className:I()(t.main,u?t.choseThisOption:null)},r.a.createElement(g.e,{className:l?t.optionButtonVoted:t.optionButton,disabled:l,align:"center",onClick:function(){return c(i)}},r.a.createElement(g.f,{container:!0},r.a.createElement(g.f,{item:!0,xs:12,className:t.answerContainer},r.a.createElement(g.h,{variant:"h3"},a)))),l?this.renderPieChart():null)}}]),t}(a.Component),M=Object(m.withStyles)(V)(_),D={main:{height:"calc(100% - ".concat(168,"px)")},option:{flex:"1 0 auto",width:"50%",height:"100%"},questionContainer:{width:"100%",padding:"5px",height:"".concat(56,"px")},icon:{marginBottom:"5px"}},J=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handleQuestionAnswer=function(e){var t=n.props;(0,t.dispatch)(R({authedUser:t.authedUser,qid:t.match.params.question,answer:e}))},n.getPreviousQuestion=function(e,t){var a=n.getQuestionArray(t),r=a.indexOf(t[e]);return r<=0?t[e].id:a[r-1].id},n.getNextQuestion=function(e,t){var a=n.getQuestionArray(t),r=a.indexOf(t[e]);return r>=a.length-1?t[e].id:a[r+1].id},n.getQuestionArray=function(e){var t=[];for(var n in e)t.push(e[n]);return t.sort(function(e,t){return e.timestamp-t.timestamp}),t},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.authedUser,o=e.match.params.question,i=this.props.questions.questions;if(!o||!i[o])return r.a.createElement(g.f,{container:!0,justify:"center",alignItems:"center",className:t.main},r.a.createElement(g.h,{variant:"h1"},"Loading question..."),r.a.createElement(g.h,{variant:"body1"},'If this text stays up long enough for you to read it, question "',o,"\" probably doesn't exist."),r.a.createElement(b.b,{to:"/"},r.a.createElement(g.e,null,"Take me back!")));var c=i[o],s=(c.id,c.author),u=c.optionOne,l=c.optionTwo,h=this.getPreviousQuestion(o,i),d=this.getNextQuestion(o,i);return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:t.questionContainer},r.a.createElement(g.h,{variant:"h3",align:"center"},"Would you rather...")),r.a.createElement(g.f,{container:!0,className:t.main},r.a.createElement(M,Object.assign({},u,{option:"optionOne",handleQuestionAnswer:this.handleQuestionAnswer,authedUser:n,opposite:l})),r.a.createElement(M,Object.assign({},l,{option:"optionTwo",handleQuestionAnswer:this.handleQuestionAnswer,authedUser:n,opposite:u}))),r.a.createElement(g.c,{showLabels:!0},r.a.createElement(g.d,{component:b.b,to:"/questions/".concat(h),label:"Previous",icon:r.a.createElement(O.a,{icon:y.a,className:t.icon})}),r.a.createElement(g.d,{label:s,icon:r.a.createElement(O.a,{icon:y.d,className:t.icon})}),r.a.createElement(g.d,{component:b.b,to:"/questions/".concat(d),label:"Next",icon:r.a.createElement(O.a,{icon:y.b,className:t.icon})})))}}]),t}(a.Component);var $=Object(m.withStyles)(D)(J),G=Object(d.b)(function(e){return{authedUser:e.authedUser,questions:e.questions}})($),F=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){n.props.questions.currentQuestion||n.retrieveNewQuestion()},n.retrieveNewQuestion=function(){var e=n.props;(0,e.dispatch)(L(e.authedUser))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.questions.currentQuestion;return e?r.a.createElement(f.a,{to:"questions/".concat(e)}):r.a.createElement(g.f,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(g.h,{variant:"h1"},"Loading question..."))}}]),t}(a.Component);var Y=Object(d.b)(function(e){return{authedUser:e.authedUser,questions:e.questions}})(F),K=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"NewQuestion")}}]),t}(a.Component),X=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Leaderboard")}}]),t}(a.Component),Z=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).handleLoginClick=function(e){(0,n.props.dispatch)(function(e){return function(t){t(j(e))}}(e))},n.renderUser=function(e){var t=e.id,a=n.props.classes;return r.a.createElement(g.f,{item:!0,key:t},r.a.createElement(g.e,{onClick:function(){return n.handleLoginClick(t)}},r.a.createElement(g.b,{alt:e.name,src:e.avatarURL,className:a.avatar}),r.a.createElement(g.h,{align:"center"},e.name)))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.users.users,n=this.props.classes;return t?r.a.createElement(g.f,{container:!0,justify:"center",alignItems:"center",className:n.main,spacing:32},Object.entries(t).map(function(t){var n=Object(U.a)(t,2),a=(n[0],n[1]);return e.renderUser(a)})):r.a.createElement(g.f,{container:!0,justify:"center",alignItems:"center",className:n.main},r.a.createElement(g.h,null,"Loading users..."))}}]),t}(a.Component);var ee=Object(m.withStyles)({main:{height:"100vh",maxWidth:"100vw"},avatar:{margin:10,width:100,height:100}})(Z),te=Object(d.b)(function(e){return{users:e.users}})(ee),ne="RECEIVE_USERS";function ae(){return function(e){return Promise.all([new Promise(function(e,t){setTimeout(function(){return e(Object(N.a)({},T))},1e3)}),new Promise(function(e,t){setTimeout(function(){return e(Object(N.a)({},C))},1e3)})]).then(function(e){var t=Object(U.a)(e,2);return{users:t[0],questions:t[1]}}).then(function(t){var n=t.users,a=t.questions;e(function(e){return{type:ne,users:e}}(n)),e(function(e){return{type:A,questions:e}}(a))})}}var re=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(ae())}},{key:"render",value:function(){var e=this.props.authedUser,t=0!==Object.entries(e).length&&e.id;return r.a.createElement(m.MuiThemeProvider,{theme:B},r.a.createElement(v.a,null),t?r.a.createElement(b.a,null,r.a.createElement(q,null),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",component:Y}),r.a.createElement(f.b,{path:"/new",component:K}),r.a.createElement(f.b,{path:"/leaderboard",component:X}),r.a.createElement(f.b,{path:"/questions/:question",component:G}))):r.a.createElement(te,null))}}]),t}(a.Component);var oe=Object(d.b)(function(e){return{authedUser:e.authedUser}})(re),ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var se=n(32),ue=Object(se.combineReducers)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(N.a)({},e,{id:t.id});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(N.a)({},e,{users:t.users});case z:var n=t.authedUser,a=t.qid,r=t.answer,o=Object(N.a)({},e.users,Object(k.a)({},n,Object(N.a)({},e.users[n],{answers:Object(N.a)({},e.users[n].answers,Object(k.a)({},a,r))})));return Object(N.a)({},e,o);default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(N.a)({},e,{questions:t.questions});case S:for(var n in e.questions){var a=e.questions[n],r=a.optionOne.votes.concat(a.optionTwo.votes),o=!1;for(var i in r)r[i]===t.authedUser.id&&(o=!0);if(!o)return Object(N.a)({},e,{currentQuestion:n})}return Object(N.a)({},e,{currentQuestion:null});case z:var c=t.authedUser,s=t.qid,u=t.answer,l=Object(N.a)({},e.questions,Object(k.a)({},s,Object(N.a)({},e.questions[s],Object(k.a)({},u,Object(N.a)({},e.questions[s][u],{votes:e.questions[s][u].votes.concat([c])})))));return Object(N.a)({},e,{questions:Object(N.a)({},l)});default:return e}}}),le=n(93),he=n(94),de=Object(he.composeWithDevTools)(Object(se.applyMiddleware)(le.a)),me=Object(se.createStore)(ue,de);i.a.render(r.a.createElement(d.a,{store:me},r.a.createElement(oe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/would-you-rather",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/would-you-rather","/service-worker.js");ie?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ce(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ce(t,e)})}}()}},[[189,1,2]]]);
//# sourceMappingURL=main.86da5488.chunk.js.map