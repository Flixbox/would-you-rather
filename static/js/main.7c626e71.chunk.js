(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,n){e.exports=n(289)},289:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(32),i=n.n(o),c=n(14),s=n(15),u=n(17),l=n(16),h=n(18),d=n(22),m=n(8),p=n(48),v=n.n(p),b=n(35),f=n(34),g=n(3),w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.authedUser,a=e.users.users[n.id].avatarURL;return r.a.createElement("div",null,r.a.createElement("div",{className:t.root},r.a.createElement(g.a,{position:"static"},r.a.createElement(g.g,{className:t.navBar},r.a.createElement(b.b,{to:"/",replace:!0,className:t.menuButton},r.a.createElement(g.e,{color:"inherit"},"Would You Rather?")),r.a.createElement(b.b,{to:"/new",replace:!0,className:t.menuButton},r.a.createElement(g.e,{color:"inherit"},"New Question")),r.a.createElement(b.b,{to:"/leaderboard",replace:!0,className:t.menuButton},r.a.createElement(g.e,{color:"inherit"},"Leaderboard")),r.a.createElement("div",{className:t.grow}),r.a.createElement(b.b,{to:"/profile",replace:!0,className:t.menuButton},r.a.createElement(g.e,{color:"inherit"},n.id),r.a.createElement(g.b,{alt:"avatar",src:a,className:t.avatar}))))))}}]),t}(a.Component);var j=Object(m.withStyles)(function(e){return{menuButton:{marginLeft:-12,marginRight:20,textDecoration:"none",color:"white",maxHeight:"100%"},avatar:{maxHeight:"100%",float:"right"}}})(w),O=Object(d.b)(function(e){return{users:e.users,authedUser:e.authedUser}})(j),y=n(50),E=n(11),x=n(4),q={catherinegregory:{id:"catherinegregory",name:"Catherine Gregory",avatarURL:"https://randomuser.me/api/portraits/women/82.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},edwincarr:{id:"edwincarr",name:"Edwin Carr",avatarURL:"https://randomuser.me/api/portraits/men/36.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},danoliver:{id:"danoliver",name:"Dan Oliver",avatarURL:"https://randomuser.me/api/portraits/men/24.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},U={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"catherinegregory",timestamp:1467166872634,optionOne:{votes:["catherinegregory"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"danoliver",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["danoliver","catherinegregory"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"catherinegregory",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["catherinegregory"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"edwincarr",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["catherinegregory"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"edwincarr",timestamp:1489579767190,optionOne:{votes:["edwincarr"],text:"find $50 yourself"},optionTwo:{votes:["danoliver"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"danoliver",timestamp:1493579767190,optionOne:{votes:["danoliver"],text:"write JavaScript"},optionTwo:{votes:["edwincarr"],text:"write Swift"}}};function N(e){return function(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise(function(e,r){setTimeout(function(){q=Object(x.a)({},q,Object(E.a)({},t,Object(x.a)({},q[t],{answers:Object(x.a)({},q[t].answers,Object(E.a)({},n,a))}))),U=Object(x.a)({},U,Object(E.a)({},n,Object(x.a)({},U[n],Object(E.a)({},a,Object(x.a)({},U[n][a],{votes:U[n][a].votes.concat([t])}))))),e()},500)})}({authedUser:e.authedUser,qid:e.qid,answer:e.answer})}var T="RECEIVE_QUESTIONS",k="RETRIEVE_NEW_QUESTION",C="SAVE_QUESTION_ANSWER";function S(e){return function(t){t(function(e){return{type:k,authedUser:e}}(e))}}function Q(e){var t=e.authedUser,n=e.qid,a=e.answer;return function(e){return e(function(e){var t=e.authedUser,n=e.qid,a=e.answer;return{type:C,authedUser:t,qid:n,answer:a}}({authedUser:t.id,qid:n,answer:a})),N({authedUser:t.id,qid:n,answer:a}).catch(function(e){console.warn("Error in handleQuestionAnswer: ",e)})}}var z=Object(m.createMuiTheme)({palette:{type:"dark"},overrides:{MuiToolbar:{regular:{"&&":{minHeight:"".concat(56,"px"),height:"".concat(56,"px"),maxHeight:"".concat(56,"px")}}},MuiBottomNavigation:{root:{minHeight:"".concat(56,"px"),height:"".concat(56,"px"),maxHeight:"".concat(56,"px"),position:"absolute",bottom:0,left:0,right:0}}},typography:{useNextVariants:!0}}),A=(n(12),n(39)),R=n(40),L=n(92),B=n.n(L),W=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).renderPieChart=function(){var e=n.props,t=e.classes,a=(e.authedUser,e.text,e.votes),o=(e.option,e.opposite),i=a.length,c=o.votes.length;return r.a.createElement(g.f,{item:!0,xs:12,className:t.chartContainer,align:"center"},r.a.createElement(B.a,{className:t.chart,data:[{title:"This option",value:i,color:z.palette.primary.main}],animate:!0,label:!0,labelStyle:{fill:z.palette.primary.contrastText},totalValue:c+i}))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.authedUser,a=e.text,o=e.votes,i=e.option,c=e.handleQuestionAnswer,s=e.opposite.votes.includes(n.id)||o.includes(n.id);return r.a.createElement(g.f,{container:!0,className:t.main},r.a.createElement(g.e,{className:s?t.optionButtonVoted:t.optionButton,align:"center",onClick:function(){return c(i)}},r.a.createElement(g.f,{container:!0},r.a.createElement(g.f,{item:!0,xs:12,className:t.answerContainer},r.a.createElement(g.h,{variant:"h3"},a)))),s?this.renderPieChart():null)}}]),t}(a.Component),I=Object(m.withStyles)({main:{flex:"1 0 auto",width:"50%",height:"100%",padding:"5px"},optionButton:{height:"100%",width:"100%",textTransform:"none"},optionButtonVoted:{height:"50%",width:"100%",textTransform:"none"},chartContainer:{maxHeight:"50%"},chart:{maxWidth:"20vh"}})(W),P={main:{height:"calc(100% - ".concat(168,"px)")},option:{flex:"1 0 auto",width:"50%",height:"100%"},questionContainer:{width:"100%",padding:"5px",height:"".concat(56,"px")},icon:{marginBottom:"5px"}},H=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){n.props.questions.currentQuestion||n.retrieveNewQuestion()},n.retrieveNewQuestion=function(){var e=n.props;(0,e.dispatch)(S(e.authedUser))},n.handleQuestionAnswer=function(e){var t=n.props;(0,t.dispatch)(Q({authedUser:t.authedUser,qid:n.props.questions.currentQuestion,answer:e}))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.authedUser,o=this.props.questions,i=o.currentQuestion,c=o.questions;if(!i)return r.a.createElement(g.f,{container:!0,justify:"center",alignItems:"center",className:t.main},r.a.createElement(g.h,null,"Loading question..."));var s=c[i],u=(s.id,s.author),l=s.optionOne,h=s.optionTwo;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:t.questionContainer},r.a.createElement(g.h,{variant:"h3",align:"center"},"Would you rather...")),r.a.createElement(g.f,{container:!0,className:t.main},r.a.createElement(I,Object.assign({},l,{option:"optionOne",handleQuestionAnswer:this.handleQuestionAnswer,authedUser:n,opposite:h})),r.a.createElement(I,Object.assign({},h,{option:"optionTwo",handleQuestionAnswer:this.handleQuestionAnswer,authedUser:n,opposite:l}))),r.a.createElement(g.c,{showLabels:!0},r.a.createElement(g.d,{label:"Previous",icon:r.a.createElement(A.a,{icon:R.a,className:t.icon})}),r.a.createElement(g.d,{label:u,icon:r.a.createElement(A.a,{icon:R.c,className:t.icon})}),r.a.createElement(g.d,{label:"Next",icon:r.a.createElement(A.a,{icon:R.b,className:t.icon})})))}}]),t}(a.Component);var V=Object(m.withStyles)(P)(H),_=Object(d.b)(function(e){return{authedUser:e.authedUser,questions:e.questions}})(V),M=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"NewQuestion")}}]),t}(a.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Leaderboard")}}]),t}(a.Component),J="SET_AUTHED_USER";function $(e){return function(t){t(function(e){return{type:J,id:e}}(e))}}var F=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).handleLoginClick=function(e){(0,n.props.dispatch)($(e))},n.renderUser=function(e){var t=e.id,a=n.props.classes;return r.a.createElement(g.f,{item:!0,key:t},r.a.createElement(g.e,{onClick:function(){return n.handleLoginClick(t)}},r.a.createElement(g.b,{alt:e.name,src:e.avatarURL,className:a.avatar}),r.a.createElement(g.h,{align:"center"},e.name)))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.users.users,n=this.props.classes;return t?r.a.createElement(g.f,{container:!0,justify:"center",alignItems:"center",className:n.main,spacing:32},Object.entries(t).map(function(t){var n=Object(y.a)(t,2),a=(n[0],n[1]);return e.renderUser(a)})):r.a.createElement(g.f,{container:!0,justify:"center",alignItems:"center",className:n.main},r.a.createElement(g.h,null,"Loading users..."))}}]),t}(a.Component);var G=Object(m.withStyles)({main:{height:"100vh",maxWidth:"100vw"},avatar:{margin:10,width:100,height:100}})(F),Y=Object(d.b)(function(e){return{users:e.users}})(G),K="RECEIVE_USERS";function X(){return function(e){return Promise.all([new Promise(function(e,t){setTimeout(function(){return e(Object(x.a)({},q))},1e3)}),new Promise(function(e,t){setTimeout(function(){return e(Object(x.a)({},U))},1e3)})]).then(function(e){var t=Object(y.a)(e,2);return{users:t[0],questions:t[1]}}).then(function(t){var n=t.users,a=t.questions;e(function(e){return{type:K,users:e}}(n)),e(function(e){return{type:T,questions:e}}(a))})}}var Z=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(X())}},{key:"render",value:function(){var e=this.props.authedUser,t=0!==Object.entries(e).length;return r.a.createElement(m.MuiThemeProvider,{theme:z},r.a.createElement(v.a,null),t?r.a.createElement(b.a,null,r.a.createElement(O,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:_}),r.a.createElement(f.a,{path:"/new",component:M}),r.a.createElement(f.a,{path:"/leaderboard",component:D}))):r.a.createElement(Y,null))}}]),t}(a.Component);var ee=Object(d.b)(function(e){return{authedUser:e.authedUser}})(Z),te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ae=n(31),re=Object(ae.combineReducers)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(x.a)({},e,{id:t.id});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(x.a)({},e,{users:t.users});case C:var n=t.authedUser,a=t.qid,r=t.answer,o=Object(x.a)({},e.users,Object(E.a)({},n,Object(x.a)({},e.users[n],{answers:Object(x.a)({},e.users[n].answers,Object(E.a)({},a,r))})));return Object(x.a)({},e,o);default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(x.a)({},e,{questions:t.questions});case k:for(var n in e.questions){var a=e.questions[n],r=a.optionOne.votes.concat(a.optionTwo.votes),o=!1;for(var i in r)r[i]===t.authedUser.id&&(o=!0);if(!o)return Object(x.a)({},e,{currentQuestion:n})}return Object(x.a)({},e,{currentQuestion:null});case C:var c=t.authedUser,s=t.qid,u=t.answer,l=Object(x.a)({},e.questions,Object(E.a)({},s,Object(x.a)({},e.questions[s],Object(E.a)({},u,Object(x.a)({},e.questions[s][u],{votes:e.questions[s][u].votes.concat([c])})))));return Object(x.a)({},e,{questions:Object(x.a)({},l)});default:return e}}}),oe=n(93),ie=n(94),ce=Object(ie.composeWithDevTools)(Object(ae.applyMiddleware)(oe.a)),se=Object(ae.createStore)(re,ce);i.a.render(r.a.createElement(d.a,{store:se},r.a.createElement(ee,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/would-you-rather",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/would-you-rather","/service-worker.js");te?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ne(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ne(t,e)})}}()}},[[189,1,2]]]);
//# sourceMappingURL=main.7c626e71.chunk.js.map