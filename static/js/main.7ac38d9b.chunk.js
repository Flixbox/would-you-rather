(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,n){e.exports=n(289)},289:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(32),i=n.n(o),c=n(13),s=n(14),u=n(16),l=n(15),h=n(17),d=n(22),m=n(8),p=n(48),v=n.n(p),b=n(37),f=n(36),w=n(3),g=n(34),j=n(35),O=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.authedUser,a=e.users.users[n.id].avatarURL;return r.a.createElement("div",null,r.a.createElement("div",{className:t.root},r.a.createElement(w.a,{position:"static"},r.a.createElement(w.g,{className:t.navBar},r.a.createElement(b.b,{to:"/",replace:!0,className:t.menuButton},r.a.createElement(w.e,{color:"inherit"},"Would You Rather?")),r.a.createElement(b.b,{to:"/new",replace:!0,className:t.menuButton},r.a.createElement(w.e,{color:"inherit"},"New Question")),r.a.createElement(b.b,{to:"/leaderboard",replace:!0,className:t.menuButton},r.a.createElement(w.e,{color:"inherit"},"Leaderboard")),r.a.createElement("div",{className:t.grow}),r.a.createElement(b.b,{to:"/profile",replace:!0,className:t.menuButton},r.a.createElement(w.e,{color:"inherit"},n.id),r.a.createElement(w.b,{alt:"avatar",src:a,className:t.avatar})),r.a.createElement(w.e,{color:"inherit"},r.a.createElement(g.a,{icon:j.c}))))))}}]),t}(a.Component);var y=Object(m.withStyles)(function(e){return{menuButton:{marginLeft:-12,marginRight:20,textDecoration:"none",color:"white",maxHeight:"100%"},avatar:{maxHeight:"100%",float:"right"},grow:{flexGrow:1}}})(O),E=Object(d.b)(function(e){return{users:e.users,authedUser:e.authedUser}})(y),x=n(50),q=n(11),U=n(4),N={catherinegregory:{id:"catherinegregory",name:"Catherine Gregory",avatarURL:"https://randomuser.me/api/portraits/women/82.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},edwincarr:{id:"edwincarr",name:"Edwin Carr",avatarURL:"https://randomuser.me/api/portraits/men/36.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},danoliver:{id:"danoliver",name:"Dan Oliver",avatarURL:"https://randomuser.me/api/portraits/men/24.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},T={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"catherinegregory",timestamp:1467166872634,optionOne:{votes:["catherinegregory"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"danoliver",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["danoliver","catherinegregory"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"catherinegregory",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["catherinegregory"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"edwincarr",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["catherinegregory"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"edwincarr",timestamp:1489579767190,optionOne:{votes:["edwincarr"],text:"find $50 yourself"},optionTwo:{votes:["danoliver"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"danoliver",timestamp:1493579767190,optionOne:{votes:["danoliver"],text:"write JavaScript"},optionTwo:{votes:["edwincarr"],text:"write Swift"}}};function k(e){return function(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise(function(e,r){setTimeout(function(){N=Object(U.a)({},N,Object(q.a)({},t,Object(U.a)({},N[t],{answers:Object(U.a)({},N[t].answers,Object(q.a)({},n,a))}))),T=Object(U.a)({},T,Object(q.a)({},n,Object(U.a)({},T[n],Object(q.a)({},a,Object(U.a)({},T[n][a],{votes:T[n][a].votes.concat([t])}))))),e()},500)})}({authedUser:e.authedUser,qid:e.qid,answer:e.answer})}var C="RECEIVE_QUESTIONS",S="RETRIEVE_NEW_QUESTION",Q="SAVE_QUESTION_ANSWER";function z(e){return function(t){t(function(e){return{type:S,authedUser:e}}(e))}}function A(e){var t=e.authedUser,n=e.qid,a=e.answer;return function(e){return e(function(e){var t=e.authedUser,n=e.qid,a=e.answer;return{type:Q,authedUser:t,qid:n,answer:a}}({authedUser:t.id,qid:n,answer:a})),k({authedUser:t.id,qid:n,answer:a}).catch(function(e){console.warn("Error in handleQuestionAnswer: ",e)})}}var R=Object(m.createMuiTheme)({palette:{type:"dark"},overrides:{MuiToolbar:{regular:{"&&":{minHeight:"".concat(56,"px"),height:"".concat(56,"px"),maxHeight:"".concat(56,"px")}}},MuiBottomNavigation:{root:{minHeight:"".concat(56,"px"),height:"".concat(56,"px"),maxHeight:"".concat(56,"px"),position:"absolute",bottom:0,left:0,right:0}}},typography:{useNextVariants:!0}}),L=(n(18),n(92)),B=n.n(L),W=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).renderPieChart=function(){var e=n.props,t=e.classes,a=(e.authedUser,e.text,e.votes),o=(e.option,e.opposite),i=a.length,c=o.votes.length;return r.a.createElement(w.f,{item:!0,xs:12,className:t.chartContainer,align:"center"},r.a.createElement(B.a,{className:t.chart,data:[{title:"This option",value:i,color:R.palette.primary.main}],animate:!0,label:!0,labelStyle:{fill:R.palette.primary.contrastText},totalValue:c+i}))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.authedUser,a=e.text,o=e.votes,i=e.option,c=e.handleQuestionAnswer,s=e.opposite.votes.includes(n.id)||o.includes(n.id);return r.a.createElement(w.f,{container:!0,className:t.main},r.a.createElement(w.e,{className:s?t.optionButtonVoted:t.optionButton,align:"center",onClick:function(){return c(i)}},r.a.createElement(w.f,{container:!0},r.a.createElement(w.f,{item:!0,xs:12,className:t.answerContainer},r.a.createElement(w.h,{variant:"h3"},a)))),s?this.renderPieChart():null)}}]),t}(a.Component),I=Object(m.withStyles)({main:{flex:"1 0 auto",width:"50%",height:"100%",padding:"5px"},optionButton:{height:"100%",width:"100%",textTransform:"none"},optionButtonVoted:{height:"50%",width:"100%",textTransform:"none"},chartContainer:{maxHeight:"50%"},chart:{maxWidth:"20vh"}})(W),P={main:{height:"calc(100% - ".concat(168,"px)")},option:{flex:"1 0 auto",width:"50%",height:"100%"},questionContainer:{width:"100%",padding:"5px",height:"".concat(56,"px")},icon:{marginBottom:"5px"}},H=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){n.props.questions.currentQuestion||n.retrieveNewQuestion()},n.retrieveNewQuestion=function(){var e=n.props;(0,e.dispatch)(z(e.authedUser))},n.handleQuestionAnswer=function(e){var t=n.props;(0,t.dispatch)(A({authedUser:t.authedUser,qid:n.props.questions.currentQuestion,answer:e}))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.authedUser,o=this.props.questions,i=o.currentQuestion,c=o.questions;if(!i)return r.a.createElement(w.f,{container:!0,justify:"center",alignItems:"center",className:t.main},r.a.createElement(w.h,null,"Loading question..."));var s=c[i],u=(s.id,s.author),l=s.optionOne,h=s.optionTwo;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:t.questionContainer},r.a.createElement(w.h,{variant:"h3",align:"center"},"Would you rather...")),r.a.createElement(w.f,{container:!0,className:t.main},r.a.createElement(I,Object.assign({},l,{option:"optionOne",handleQuestionAnswer:this.handleQuestionAnswer,authedUser:n,opposite:h})),r.a.createElement(I,Object.assign({},h,{option:"optionTwo",handleQuestionAnswer:this.handleQuestionAnswer,authedUser:n,opposite:l}))),r.a.createElement(w.c,{showLabels:!0},r.a.createElement(w.d,{label:"Previous",icon:r.a.createElement(g.a,{icon:j.a,className:t.icon})}),r.a.createElement(w.d,{label:u,icon:r.a.createElement(g.a,{icon:j.d,className:t.icon})}),r.a.createElement(w.d,{label:"Next",icon:r.a.createElement(g.a,{icon:j.b,className:t.icon})})))}}]),t}(a.Component);var V=Object(m.withStyles)(P)(H),_=Object(d.b)(function(e){return{authedUser:e.authedUser,questions:e.questions}})(V),M=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"NewQuestion")}}]),t}(a.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Leaderboard")}}]),t}(a.Component),J="SET_AUTHED_USER";function $(e){return function(t){t(function(e){return{type:J,id:e}}(e))}}var G=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).handleLoginClick=function(e){(0,n.props.dispatch)($(e))},n.renderUser=function(e){var t=e.id,a=n.props.classes;return r.a.createElement(w.f,{item:!0,key:t},r.a.createElement(w.e,{onClick:function(){return n.handleLoginClick(t)}},r.a.createElement(w.b,{alt:e.name,src:e.avatarURL,className:a.avatar}),r.a.createElement(w.h,{align:"center"},e.name)))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.users.users,n=this.props.classes;return t?r.a.createElement(w.f,{container:!0,justify:"center",alignItems:"center",className:n.main,spacing:32},Object.entries(t).map(function(t){var n=Object(x.a)(t,2),a=(n[0],n[1]);return e.renderUser(a)})):r.a.createElement(w.f,{container:!0,justify:"center",alignItems:"center",className:n.main},r.a.createElement(w.h,null,"Loading users..."))}}]),t}(a.Component);var F=Object(m.withStyles)({main:{height:"100vh",maxWidth:"100vw"},avatar:{margin:10,width:100,height:100}})(G),Y=Object(d.b)(function(e){return{users:e.users}})(F),K="RECEIVE_USERS";function X(){return function(e){return Promise.all([new Promise(function(e,t){setTimeout(function(){return e(Object(U.a)({},N))},1e3)}),new Promise(function(e,t){setTimeout(function(){return e(Object(U.a)({},T))},1e3)})]).then(function(e){var t=Object(x.a)(e,2);return{users:t[0],questions:t[1]}}).then(function(t){var n=t.users,a=t.questions;e(function(e){return{type:K,users:e}}(n)),e(function(e){return{type:C,questions:e}}(a))})}}var Z=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(X())}},{key:"render",value:function(){var e=this.props.authedUser,t=0!==Object.entries(e).length;return r.a.createElement(m.MuiThemeProvider,{theme:R},r.a.createElement(v.a,null),t?r.a.createElement(b.a,null,r.a.createElement(E,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:_}),r.a.createElement(f.a,{path:"/new",component:M}),r.a.createElement(f.a,{path:"/leaderboard",component:D}))):r.a.createElement(Y,null))}}]),t}(a.Component);var ee=Object(d.b)(function(e){return{authedUser:e.authedUser}})(Z),te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ae=n(31),re=Object(ae.combineReducers)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(U.a)({},e,{id:t.id});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(U.a)({},e,{users:t.users});case Q:var n=t.authedUser,a=t.qid,r=t.answer,o=Object(U.a)({},e.users,Object(q.a)({},n,Object(U.a)({},e.users[n],{answers:Object(U.a)({},e.users[n].answers,Object(q.a)({},a,r))})));return Object(U.a)({},e,o);default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(U.a)({},e,{questions:t.questions});case S:for(var n in e.questions){var a=e.questions[n],r=a.optionOne.votes.concat(a.optionTwo.votes),o=!1;for(var i in r)r[i]===t.authedUser.id&&(o=!0);if(!o)return Object(U.a)({},e,{currentQuestion:n})}return Object(U.a)({},e,{currentQuestion:null});case Q:var c=t.authedUser,s=t.qid,u=t.answer,l=Object(U.a)({},e.questions,Object(q.a)({},s,Object(U.a)({},e.questions[s],Object(q.a)({},u,Object(U.a)({},e.questions[s][u],{votes:e.questions[s][u].votes.concat([c])})))));return Object(U.a)({},e,{questions:Object(U.a)({},l)});default:return e}}}),oe=n(93),ie=n(94),ce=Object(ie.composeWithDevTools)(Object(ae.applyMiddleware)(oe.a)),se=Object(ae.createStore)(re,ce);i.a.render(r.a.createElement(d.a,{store:se},r.a.createElement(ee,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/would-you-rather",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/would-you-rather","/service-worker.js");te?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ne(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ne(t,e)})}}()}},[[189,1,2]]]);
//# sourceMappingURL=main.7ac38d9b.chunk.js.map