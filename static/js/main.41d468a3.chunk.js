(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(e,t,n){e.exports=n(356)},356:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),i=n.n(o),s=n(20),c=n(21),u=n(24),l=n(22),h=n(25),d=n(23),m=n(15),p=n(60),f=n.n(p),v=n(27),b=n(37),g=n(3),w="SET_AUTHED_USER";function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:w,id:e}}var j="SET_FILTER";function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(t){t(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:j,id:e}}(e))}}var y=n(49),x=n(50),q=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null},n.filterTexts=["All questions","Unanswered","Answered"],n.handleLogoutClick=function(){(0,n.props.dispatch)(function(e){e(O())})},n.handleClick=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(e){var t=n.props.dispatch;n.setState({anchorEl:null}),"object"!==typeof e&&t(E(e))},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.authedUser,o=t.users,i=t.filter,s=this.state.anchorEl,c=o[a.id].avatarURL;return r.a.createElement("div",null,r.a.createElement("div",{className:n.root},r.a.createElement(g.a,{position:"static"},r.a.createElement(g.n,{className:n.navBar},r.a.createElement(v.b,{to:"/",replace:!0,className:n.menuButton},r.a.createElement(g.e,{color:"inherit"},"Would You Rather?")),r.a.createElement(v.b,{to:"/new",replace:!0,className:n.menuButton},r.a.createElement(g.e,{color:"inherit"},"New Question")),r.a.createElement(v.b,{to:"/leaderboard",replace:!0,className:n.menuButton},r.a.createElement(g.e,{color:"inherit"},"Leaderboard")),r.a.createElement("div",{className:n.grow}),r.a.createElement(g.e,{"aria-owns":s?"filter-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick,className:n.menuButton},this.filterTexts[i]||"Filter"),r.a.createElement(g.k,{id:"filter-menu",anchorEl:s,open:Boolean(s),onClose:this.handleClose},this.filterTexts.map(function(t,n){return r.a.createElement(g.l,{onClick:function(){return e.handleClose(n)},key:t},t)})),r.a.createElement(v.b,{to:"/",replace:!0,className:n.menuButton},r.a.createElement(g.e,{color:"inherit"},a.id),r.a.createElement(g.b,{alt:"avatar",src:c,className:n.avatar})),r.a.createElement(g.e,{color:"inherit",onClick:function(){return e.handleLogoutClick()}},r.a.createElement(y.a,{icon:x.c}))))))}}]),t}(a.Component);var T=Object(m.withStyles)(function(e){return{menuButton:{marginLeft:-12,marginRight:20,textDecoration:"none",color:"white",maxHeight:"100%"},avatar:{maxHeight:"100%",float:"right"},grow:{flexGrow:1}}})(q),U=Object(d.b)(function(e){return{users:e.users,authedUser:e.authedUser,filter:e.filter}})(T),k=n(94),C=n(19),N=n(10),S=n(62),A={catherinegregory:{id:"catherinegregory",name:"Catherine Gregory",avatarURL:"https://randomuser.me/api/portraits/women/82.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},edwincarr:{id:"edwincarr",name:"Edwin Carr",avatarURL:"https://randomuser.me/api/portraits/men/36.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},danoliver:{id:"danoliver",name:"Dan Oliver",avatarURL:"https://randomuser.me/api/portraits/men/24.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},Q={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"catherinegregory",timestamp:1467166872634,optionOne:{votes:["catherinegregory"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"danoliver",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["danoliver","catherinegregory"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"catherinegregory",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["catherinegregory"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"edwincarr",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["catherinegregory"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"edwincarr",timestamp:1489579767190,optionOne:{votes:["edwincarr"],text:"find $50 yourself"},optionTwo:{votes:["danoliver"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"danoliver",timestamp:1493579767190,optionOne:{votes:["danoliver"],text:"write JavaScript"},optionTwo:{votes:["edwincarr"],text:"write Swift"}}};function L(e){return new Promise(function(t,n){var a=e.author,r=function(e){var t=e.optionOneText,n=e.optionTwoText,a=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:a,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout(function(){Q=Object(N.a)({},Q,Object(C.a)({},r.id,r)),A=Object(N.a)({},A,Object(C.a)({},a,Object(N.a)({},A[a],{questions:A[a].questions.concat([r.id])}))),t(r)},1e3)})}function R(e){return function(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise(function(e,r){setTimeout(function(){A=Object(N.a)({},A,Object(C.a)({},t,Object(N.a)({},A[t],{answers:Object(N.a)({},A[t].answers,Object(C.a)({},n,a))}))),Q=Object(N.a)({},Q,Object(C.a)({},n,Object(N.a)({},Q[n],Object(C.a)({},a,Object(N.a)({},Q[n][a],{votes:Q[n][a].votes.concat([t])}))))),e()},500)})}({authedUser:e.authedUser,qid:e.qid,answer:e.answer})}var z="RECEIVE_QUESTIONS",B="RETRIEVE_NEW_QUESTION",W="SAVE_QUESTION_ANSWER";function I(e){return{type:z,questions:e}}function P(e){return function(t){t(function(e){return{type:B,authedUser:e}}(e))}}function M(e){var t=e.authedUser,n=e.qid,a=e.answer;return function(e){return e(function(e){var t=e.authedUser,n=e.qid,a=e.answer;return{type:W,authedUser:t,qid:n,answer:a}}({authedUser:t.id,qid:n,answer:a})),R({authedUser:t.id,qid:n,answer:a}).catch(function(e){console.warn("Error in handleQuestionAnswer: ",e)})}}function _(e){var t=e.optionOne,n=e.optionTwo,a=e.author;return function(e){return(r={optionOneText:t,optionTwoText:n,author:a},L(r)).catch(function(e){console.warn("Error in handleNewQuestion: ",e)}).then(function(t){e(I(Object(C.a)({},t.id,Object(N.a)({},t))))});var r}}var H=n(6),V=n.n(H),D=n(143),F=n.n(D),J=Object(m.createMuiTheme)({palette:{type:"dark"},overrides:{MuiToolbar:{regular:{"&&":{minHeight:"".concat(56,"px"),height:"".concat(56,"px"),maxHeight:"".concat(56,"px")}}},MuiBottomNavigation:{root:{minHeight:"".concat(56,"px"),height:"".concat(56,"px"),maxHeight:"".concat(56,"px"),position:"absolute",bottom:0,left:0,right:0}}},typography:{useNextVariants:!0}}),$={main:{flex:"1 0 auto",width:"50%",height:"100%",padding:"5px"},choseThisOption:{backgroundColor:J.palette.secondary.main},optionButton:{height:"100%",width:"100%",textTransform:"none"},optionButtonVoted:{height:"50%",width:"100%",textTransform:"none"},chartContainer:{maxHeight:"50%"},chart:{maxWidth:"20vh"}},G=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).renderPieChart=function(){var e=n.props,t=e.classes,a=e.votes,o=e.opposite,i=a.length,s=o.votes.length+i,c=Math.round(i/s*100);return r.a.createElement(g.f,{item:!0,xs:12,className:t.chartContainer,align:"center"},r.a.createElement(F.a,{className:t.chart,data:[{title:"This option",value:i,color:J.palette.primary.main}],animate:!0,label:!0,labelStyle:{fill:J.palette.primary.contrastText},totalValue:s}),r.a.createElement(g.o,{variant:"body1"},c,"%"))},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.authedUser,a=e.text,o=e.votes,i=e.option,s=e.handleQuestionAnswer,c=e.opposite,u=o.includes(n.id),l=c.votes.includes(n.id)||u;return r.a.createElement(g.f,{container:!0,className:V()(t.main,u?t.choseThisOption:null)},r.a.createElement(g.e,{className:l?t.optionButtonVoted:t.optionButton,disabled:l,align:"center",onClick:function(){return s(i)}},r.a.createElement(g.f,{container:!0},r.a.createElement(g.f,{item:!0,xs:12,className:t.answerContainer},r.a.createElement(g.o,{variant:"h3"},a)))),l?this.renderPieChart():null)}}]),t}(a.Component),Y=Object(m.withStyles)($)(G),K={main:{height:"calc(100% - ".concat(168,"px)")},option:{flex:"1 0 auto",width:"50%",height:"100%"},questionContainer:{width:"100%",padding:"5px",height:"".concat(56,"px")},icon:{marginBottom:"5px"},avatar:{marginBottom:"5px",height:"20px",width:"20px"}},X=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handleQuestionAnswer=function(e){var t=n.props;(0,t.dispatch)(M({authedUser:t.authedUser,qid:t.match.params.question,answer:e}))},n.getPreviousQuestion=function(e,t){var a=n.getQuestionArray(t),r=a.indexOf(t[e]);return r<=0?t[e].id:a[r-1].id},n.getNextQuestion=function(e,t){var a=n.getQuestionArray(t),r=a.indexOf(t[e]);return r>=a.length-1?t[e].id:a[r+1].id},n.getQuestionArray=function(e){var t=n.props,a=t.filter,r=t.authedUser,o=[];for(var i in e){var s=[].concat(Object(k.a)(e[i].optionOne.votes),Object(k.a)(e[i].optionTwo.votes));switch(a){case 0:o.push(e[i]);break;case 2:s.includes(r.id)&&o.push(e[i]);break;default:s.includes(r.id)||o.push(e[i])}}return o.sort(function(e,t){return e.timestamp-t.timestamp}),o},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.authedUser,o=e.match,i=e.users,s=o.params.question,c=this.props.questions.questions;if(!s||!c[s])return r.a.createElement(g.f,{container:!0,justify:"center",alignItems:"center",className:t.main},r.a.createElement(g.o,{variant:"h1"},"Loading question..."),r.a.createElement(g.o,{variant:"body1"},'If this text stays up long enough for you to read it, question "',s,"\" probably doesn't exist."),r.a.createElement(v.b,{to:"/"},r.a.createElement(g.e,null,"Take me back!")));var u=c[s],l=u.author,h=u.optionOne,d=u.optionTwo,m=this.getPreviousQuestion(s,c),p=this.getNextQuestion(s,c);return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:t.questionContainer},r.a.createElement(g.o,{variant:"h3",align:"center"},"Would you rather...")),r.a.createElement(g.f,{container:!0,className:t.main},r.a.createElement(Y,Object.assign({},h,{option:"optionOne",handleQuestionAnswer:this.handleQuestionAnswer,authedUser:n,opposite:d})),r.a.createElement(Y,Object.assign({},d,{option:"optionTwo",handleQuestionAnswer:this.handleQuestionAnswer,authedUser:n,opposite:h}))),r.a.createElement(g.c,{showLabels:!0},r.a.createElement(g.d,{component:v.b,to:"/questions/".concat(m),label:"Previous",icon:r.a.createElement(y.a,{icon:x.a,className:t.icon}),disabled:m===s}),r.a.createElement(g.d,{component:v.b,to:"/leaderboard",label:l,icon:r.a.createElement(g.b,{alt:"avatar",src:i[l].avatarURL,className:t.avatar})}),r.a.createElement(g.d,{component:v.b,to:"/questions/".concat(p),label:"Next",icon:r.a.createElement(y.a,{icon:x.b,className:t.icon}),disabled:p===s})))}}]),t}(a.Component);var Z=Object(m.withStyles)(K)(X),ee=Object(d.b)(function(e){return{authedUser:e.authedUser,questions:e.questions,filter:e.filter,users:e.users}})(Z),te=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){n.props.questions.currentQuestion||n.retrieveNewQuestion()},n.retrieveNewQuestion=function(){var e=n.props;(0,e.dispatch)(P(e.authedUser))},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.questions.currentQuestion;return e?r.a.createElement(b.a,{to:"questions/".concat(e)}):r.a.createElement(g.f,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(g.o,{variant:"h1"},"Loading question..."))}}]),t}(a.Component);var ne=Object(d.b)(function(e){return{authedUser:e.authedUser,questions:e.questions}})(te),ae=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={optionOne:"",optionTwo:""},n.updateOption=function(e,t){n.setState(function(n){return Object(N.a)({},n,Object(C.a)({},e,t))})},n.submit=function(){var e=n.state,t=e.optionOne,a=e.optionTwo,r=n.props,o=r.authedUser;(0,r.dispatch)(_({optionOne:t,optionTwo:a,author:o.id})),n.props.history.push("/")},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(g.f,{container:!0,justify:"center",spacing:24,className:t.main},r.a.createElement(g.f,{item:!0,xs:10},r.a.createElement(g.o,{variant:"h3",align:"center"},"Would you rather...")),r.a.createElement(g.f,{item:!0,xs:10},r.a.createElement(g.m,{required:!0,id:"optionOne",name:"optionOne",label:"Option 1",fullWidth:!0,autoComplete:"optionOne",onChange:function(t){return e.updateOption("optionOne",t.target.value)},value:this.state.optionOne})),r.a.createElement(g.f,{item:!0,xs:10},r.a.createElement(g.m,{required:!0,id:"optionTwo",name:"optionTwo",label:"Option 2",fullWidth:!0,autoComplete:"optionTwo",onChange:function(t){return e.updateOption("optionTwo",t.target.value)},value:this.state.optionTwo})),r.a.createElement(g.f,{item:!0,xs:10},r.a.createElement(g.e,{onClick:function(t){return e.submit()}},"Submit")))}}]),t}(a.Component);var re=Object(b.f)(ae),oe=Object(m.withStyles)({main:{width:"100%",margin:0}})(re),ie=Object(d.b)(function(e){return{authedUser:e.authedUser}})(oe),se=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).renderListItem=function(e){return r.a.createElement(g.h,{alignItems:"flex-start",key:e.id},r.a.createElement(g.i,null,r.a.createElement(g.b,{alt:e.name,src:e.avatarURL})),r.a.createElement(g.j,{primary:e.name,secondary:r.a.createElement(a.Fragment,null,r.a.createElement(g.o,{component:"span"},"".concat(n.getAnsweredQuestions(e)," questions answered")),r.a.createElement(g.o,{component:"span"},"".concat(n.getAskedQuestions(e)," questions asked")))}))},n.getSortedUsers=function(e){var t=[];return Object.keys(e).map(function(n){return t.push(e[n])}),t.sort(function(e,t){return n.getUserScore(t)-n.getUserScore(e)})},n.getUserScore=function(e){var t=0;return t+=n.getAskedQuestions(e),t+=n.getAnsweredQuestions(e)},n.getAnsweredQuestions=function(e){return Object.keys(e.answers).length},n.getAskedQuestions=function(e){return e.questions.length},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.users,n=this.getSortedUsers(t);return r.a.createElement(g.f,{container:!0,justify:"center"},r.a.createElement(g.g,null,n.map(function(t){return e.renderListItem(t)})))}}]),t}(a.Component);var ce=Object(d.b)(function(e){return{users:e.users}})(se),ue=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).handleLoginClick=function(e){(0,n.props.dispatch)(function(e){return function(t){t(O(e))}}(e))},n.renderUser=function(e){var t=e.id,a=n.props.classes;return r.a.createElement(g.f,{item:!0,key:t},r.a.createElement(g.e,{onClick:function(){return n.handleLoginClick(t)}},r.a.createElement(g.b,{alt:e.name,src:e.avatarURL,className:a.avatar}),r.a.createElement(g.o,{align:"center"},e.name)))},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.users,a=t.classes;return n?r.a.createElement(g.f,{container:!0,justify:"center",alignItems:"center",className:a.main,spacing:32},Object.entries(n).map(function(t){var n=Object(S.a)(t,2),a=(n[0],n[1]);return e.renderUser(a)})):r.a.createElement(g.f,{container:!0,justify:"center",alignItems:"center",className:a.main},r.a.createElement(g.o,null,"Loading users..."))}}]),t}(a.Component);var le=Object(m.withStyles)({main:{height:"100vh",maxWidth:"100vw"},avatar:{margin:10,width:100,height:100}})(ue),he=Object(d.b)(function(e){return{users:e.users}})(le),de="RECEIVE_USERS";function me(){return function(e){return Promise.all([new Promise(function(e,t){setTimeout(function(){return e(Object(N.a)({},A))},1e3)}),new Promise(function(e,t){setTimeout(function(){return e(Object(N.a)({},Q))},1e3)})]).then(function(e){var t=Object(S.a)(e,2);return{users:t[0],questions:t[1]}}).then(function(t){var n=t.users,a=t.questions;e(function(e){return{type:de,users:e}}(n)),e(I(a))})}}var pe=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(me())}},{key:"render",value:function(){var e=this.props.authedUser,t=0!==Object.entries(e).length&&e.id;return r.a.createElement(m.MuiThemeProvider,{theme:J},r.a.createElement(f.a,null),t?r.a.createElement(v.a,null,r.a.createElement(U,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:ne}),r.a.createElement(b.b,{path:"/new",component:ie}),r.a.createElement(b.b,{path:"/leaderboard",component:ce}),r.a.createElement(b.b,{path:"/questions/:question",component:ee}))):r.a.createElement(he,null))}}]),t}(a.Component);var fe=Object(d.b)(function(e){return{authedUser:e.authedUser}})(pe),ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ge=n(33),we=Object(ge.combineReducers)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(N.a)({},e,{id:t.id});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return t.users;case W:var n=t.authedUser,a=t.qid,r=t.answer;return Object(N.a)({},e,Object(C.a)({},n,Object(N.a)({},e[n],{answers:Object(N.a)({},e[n].answers,Object(C.a)({},a,r))})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(N.a)({},e,{questions:Object(N.a)({},e.questions,t.questions)});case B:for(var n in e.questions){var a=e.questions[n],r=a.optionOne.votes.concat(a.optionTwo.votes),o=!1;for(var i in r)r[i]===t.authedUser.id&&(o=!0);if(!o)return Object(N.a)({},e,{currentQuestion:n})}return Object(N.a)({},e,{currentQuestion:null});case W:var s=t.authedUser,c=t.qid,u=t.answer,l=Object(N.a)({},e.questions,Object(C.a)({},c,Object(N.a)({},e.questions[c],Object(C.a)({},u,Object(N.a)({},e.questions[c][u],{votes:e.questions[c][u].votes.concat([s])})))));return Object(N.a)({},e,{questions:Object(N.a)({},l)});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.id;default:return e}}}),Oe=n(144),je=n(145),Ee=Object(je.composeWithDevTools)(Object(ge.applyMiddleware)(Oe.a)),ye=Object(ge.createStore)(we,Ee);i.a.render(r.a.createElement(d.a,{store:ye},r.a.createElement(fe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/would-you-rather",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/would-you-rather","/service-worker.js");ve?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):be(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):be(t,e)})}}()}},[[216,1,2]]]);
//# sourceMappingURL=main.41d468a3.chunk.js.map