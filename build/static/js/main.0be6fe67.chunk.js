(this["webpackJsonpwould-you-rather"]=this["webpackJsonpwould-you-rather"]||[]).push([[0],{48:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(23),i=n.n(c),s=(n(48),n(15)),a=n(3),u=n(2),d=n(42),j=n(4),l=n(1),b=["component"];var p,h=Object(a.i)((function(e){var t=e.component,n=Object(d.a)(e,b),o=Object(j.c)((function(e){return e.authedUser.authedUser})),r=Object(a.f)(),c=Object(a.g)();return Object(l.jsx)(a.a,Object(u.a)(Object(u.a)({},n),{},{render:function(e){return null!==o?Object(l.jsx)(t,Object(u.a)({},e)):r.replace("/signin?next=".concat(c.pathname))}}))})),O=n(6),x=n(7),f="SIGN_IN_USER",v="SIGN_OUT_USER";function m(e){return function(t){t({type:f,authedUser:e})}}function g(){return function(e){e({type:v})}}var w=x.a.nav(p||(p=Object(O.a)(["\n  width: 100vw;\n  height: 12vh;\n  color: #fff;\n  background-color: #272727;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  div.links {\n    width: 40%;\n    display: flex;\n    justify-content: space-evenly;\n  }\n  a:link,\n  a:visited {\n    padding: 7px 20px;\n    color: #fff;\n    text-decoration: none;\n  }\n  .user-profile {\n    height: 50px;\n    width: 10%;\n    display: flex;\n    align-items: center;\n    img {\n      border-radius: 50%;\n      margin-right: 5px;\n    }\n  }\n  button.logout {\n    cursor: pointer;\n    margin-left: 10px;\n    margin-right: 10px;\n    font-size: smaller;\n    color: #fff;\n    background-color: #272727;\n    border: none;\n  }\n  a.current {\n    background-color: #fff;\n    color: #272727;\n    border-radius: 16px;\n  }\n"])));var y=function(){var e=Object(j.c)((function(e){return e.authedUser.authedUser})),t=Object(j.b)(),n=Object(a.f)();return Object(l.jsxs)(w,{children:[Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)(s.c,{exact:!0,activeClassName:"current",to:"/",children:"Home"}),Object(l.jsx)(s.c,{activeClassName:"current",to:"/leaderboard",children:"Leaderboard"}),Object(l.jsx)(s.c,{activeClassName:"current",to:"/add",children:"Create Poll"})]}),Object(l.jsx)("div",{className:"user-profile",children:e&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{width:"40",height:"40",src:e.avatarURL,alt:"user pic"}),Object(l.jsx)("p",{children:e.id})]})}),Object(l.jsx)("button",{className:"logout",onClick:function(o){o.preventDefault(),t(g()),e||n.replace("/signin")},children:"Logout"})]})},q=n(16),U=n.n(q),T=n(21),k=n(8),S={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"/assets/saraedo.jpeg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"/assets/tylermcginis.jpeg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"/assets/danabramov.jpeg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},E={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function N(e){return new Promise((function(t,n){var o=e.author,r=function(e){var t=e.optionOneText,n=e.optionTwoText,o=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:o,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){E=Object(u.a)(Object(u.a)({},E),{},Object(k.a)({},r.id,r)),S=Object(u.a)(Object(u.a)({},S),{},Object(k.a)({},o,Object(u.a)(Object(u.a)({},S[o]),{},{questions:S[o].questions.concat([r.id])}))),t(r)}),1e3)}))}function _(e){var t=e.authedUser,n=e.qid,o=e.answer;return new Promise((function(e,r){setTimeout((function(){S=Object(u.a)(Object(u.a)({},S),{},Object(k.a)({},t,Object(u.a)(Object(u.a)({},S[t]),{},{answers:Object(u.a)(Object(u.a)({},S[t].answers),{},Object(k.a)({},n,o))}))),E=Object(u.a)(Object(u.a)({},E),{},Object(k.a)({},n,Object(u.a)(Object(u.a)({},E[n]),{},Object(k.a)({},o,Object(u.a)(Object(u.a)({},E[n][o]),{},{votes:E[n][o].votes.concat([t])}))))),e()}),500)}))}var z="GET_QUESTIONS",I="GET_QUESTIONS_FAILURE",R="GET_QUESTIONS_SUCCESS",C="SAVE_QUESTION",L="SAVE_QUESTIONS_ANSWER",D=function(){return{type:z}};var P=function(e){var t=e.authedUser,n=e.qid,o=e.answer;return{type:L,authedUser:t,qid:n,answer:o}};var A=function(e){return{type:C,question:e}};var G=n(34),F=n(35),Q=n(43),W=n(40),M=function(e){Object(Q.a)(n,e);var t=Object(W.a)(n);function n(e){var o;return Object(G.a)(this,n),(o=t.call(this,e)).componentDidCatch=function(e,t){o.setState({error:e,info:t})},o.state={hasError:!1,error:{message:"",stack:""},info:{componentStack:""}},o}return Object(F.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Page no dey jare"}):this.props.children}}]),n}(r.a.Component);M.getDerivedStateFromError=function(e){return{hasError:!0}};var J,V,Y,$,B=M,H=x.a.div(J||(J=Object(O.a)(["\n  width: 100%;\n  height: 180px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  overflow: hidden;\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.3);\n  margin-bottom: 10px;\n\n  .options {\n    width: 100%;\n    height: 120px;\n    display: flex;\n  }\n\n  .option {\n    width: 50%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n  }\n  .option--one {\n    background-color: #249cff;\n  }\n  .option--two {\n    background-color: #ff0000;\n    color: #fff;\n  }\n"]))),K=function(e){var t=e.queId,n=e.questions;return Object(l.jsx)(B,{children:Object(l.jsxs)(H,{children:[Object(l.jsx)("h3",{children:"Would you rather...?"}),Object(l.jsx)("b",{children:"OR"}),Object(l.jsxs)("div",{className:"options",children:[Object(l.jsx)("p",{className:"option option--one",children:n[t].optionOne.text}),Object(l.jsx)("p",{className:"option option--two",children:n[t].optionTwo.text})]})]})})},X=n(20),Z=(n(57),x.a.div(V||(V=Object(O.a)(["\n  margin-top: 30px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  .tab-container {\n    width: 50%;\n  }\n  a:link,\n  a:visited,\n  a:active {\n    text-decoration: none;\n    color: #272727;\n  }\n"])))),ee=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.authedUser.authedUser})),n=Object(j.c)((function(e){return e.questions.questions})),r=Object.keys(n);return Object(o.useEffect)((function(){e(function(){var e=Object(T.a)(U.a.mark((function e(t){var n,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(D),e.prev=1,e.next=4,new Promise((function(e,t){setTimeout((function(){return e(Object(u.a)({},E))}),1e3)}));case 4:return n=e.sent,e.next=7,n;case 7:o=e.sent,t({type:R,questions:o}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:I});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(l.jsx)(Z,{children:Object(l.jsxs)(X.d,{className:"tab-container",children:[Object(l.jsxs)(X.b,{children:[Object(l.jsx)(X.a,{children:Object(l.jsx)("h3",{children:"Unanswered"})}),Object(l.jsx)(X.a,{children:Object(l.jsx)("h3",{children:"Answered"})})]}),Object(l.jsx)(X.c,{children:Object(l.jsx)("div",{children:r.filter((function(e){return!n[e].optionOne.votes.includes(t.id)&&!n[e].optionTwo.votes.includes(t.id)})).sort((function(e,t){return n[t].timestamp-n[e].timestamp})).map((function(e){return Object(l.jsx)(s.b,{to:"/questions/".concat(e),children:Object(l.jsx)(K,{queId:e,questions:n})},e)}))})}),Object(l.jsx)(X.c,{children:Object(l.jsx)("div",{children:r.filter((function(e){return n[e].optionOne.votes.includes(t.id)||n[e].optionTwo.votes.includes(t.id)})).sort((function(e,t){return n[t].timestamp-n[e].timestamp})).map((function(e){return Object(l.jsx)(s.b,{to:"/questions/".concat(e),children:Object(l.jsx)(K,{queId:e,questions:n})},e)}))})})]})})},te=function(){var e=Object(a.f)(),t=Object(j.c)((function(e){return e.authedUser.authedUser}));return Object(o.useEffect)((function(){t||e.replace("/signin")})),Object(l.jsxs)("div",{children:[Object(l.jsx)(y,{}),Object(l.jsx)(B,{children:Object(l.jsx)(ee,{})})]})},ne=x.a.div(Y||(Y=Object(O.a)(["\n  width: 550px;\n  height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: #fff;\n  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);\n  border-radius: 3px;\n  margin-bottom: 2rem;\n\n  img {\n    width: 70px;\n    height: 70px;\n    display: block;\n    border-radius: 50%;\n  }\n"]))),oe=function(e){var t=e.users,n=e.userId,o=t[n].name;return Object(l.jsxs)(ne,{children:[Object(l.jsx)("img",{src:t[n].avatarURL,alt:t[n]}),Object(l.jsx)("p",{className:"name",children:o}),Object(l.jsxs)("div",{className:"stats",children:[Object(l.jsxs)("p",{children:["Number of questions answered:",Object(l.jsx)("strong",{children:Object.keys(t[n].answers).length})]}),Object(l.jsxs)("p",{children:["Number of questions asked:",Object(l.jsx)("strong",{children:t[n].questions.length})]})]})]})},re=function(){var e=Object(j.c)((function(e){return e.users.users})),t=Object.keys(e);return Object(l.jsx)(l.Fragment,{children:t.sort((function(t,n){return e[n].questions.length+Object.keys(e[n].answers).length-(e[t].questions.length+Object.keys(e[t].answers).length)})).map((function(t){return Object(l.jsx)(oe,{userId:t,users:e},t)}))})},ce=x.a.div($||($=Object(O.a)(["\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 50px 0;\n"])));var ie,se=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{}),Object(l.jsxs)(ce,{children:[Object(l.jsx)("h2",{children:"Leaderboard"}),Object(l.jsx)(re,{})]})]})},ae=n(19),ue=x.a.div(ie||(ie=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    width: 450px;\n    height: 500px;\n    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);\n\n    * {\n      width: 70%;\n      padding: 15px 5px;\n      margin-bottom: 20px;\n    }\n    input:focus {\n      outline: 0;\n      border: 0;\n      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);\n    }\n    h2 {\n      padding: 0;\n    }\n    span {\n      padding: 0;\n    }\n    button {\n      cursor: pointer;\n      width: 100%;\n      border: 0;\n      border-radius: 3px;\n      background-color: #249cff;\n      font-weight: bold;\n      color: #fff;\n      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n    }\n    button:hover {\n      transform: translateY(-1px);\n    }\n  }\n"]))),de=function(){var e=Object(j.c)((function(e){return e.authedUser.authedUser})).id,t=Object(j.b)(),n=Object(o.useState)(""),r=Object(ae.a)(n,2),c=r[0],i=r[1],s=Object(o.useState)(""),u=Object(ae.a)(s,2),d=u[0],b=u[1],p=Object(a.f)();return Object(l.jsx)(ue,{children:Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(function(e){var t=e.author,n=e.optionOneText,o=e.optionTwoText;return function(){var e=Object(T.a)(U.a.mark((function e(r){var c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N({author:t,optionOneText:n,optionTwoText:o});case 3:c=e.sent,r(A(c)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}({author:e,optionOneText:c,optionTwoText:d})),p.push("/"),i(""),b("")},children:[Object(l.jsx)("h2",{children:"Would you rather...?"}),Object(l.jsx)("input",{type:"text",onChange:function(e){e.preventDefault(),i(e.target.value)},value:c,placeholder:"Option 1",required:!0}),Object(l.jsx)("span",{children:"OR"}),Object(l.jsx)("input",{type:"text",onChange:function(e){e.preventDefault(),b(e.target.value)},value:d,placeholder:"Option 2",required:!0}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{children:"Post Question"})})]})})};var je,le,be,pe,he=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{}),Object(l.jsx)("h2",{children:"Create New Poll"}),Object(l.jsx)(de,{})]})},Oe=function(e){var t=e.question_id,n=Object(j.c)((function(e){return e.questions.questions})),o=Object(j.c)((function(e){return e.authedUser.authedUser})),r=n[t];return Object(l.jsxs)("div",{className:"options",children:[Object(l.jsxs)("div",{className:"option option--one",children:[r.optionOne.votes.includes(o.id)?Object(l.jsx)(ve,{children:"\u2714"}):"",Object(l.jsx)("p",{className:"option__text",children:r.optionOne.text}),Object(l.jsxs)("p",{children:[r.optionOne.votes.length," ",r.optionTwo.votes.length<=1?" person ":" people ","voted this option"]}),Object(l.jsxs)("p",{children:[Math.round(r.optionOne.votes.length/(r.optionOne.votes.length+r.optionTwo.votes.length)*100),"% of the people voted this option"]})]}),Object(l.jsxs)("div",{className:"option option--two",children:[r.optionTwo.votes.includes(o.id)?Object(l.jsx)(ve,{children:"\u2714"}):"",Object(l.jsx)("p",{className:"option__text",children:r.optionTwo.text}),Object(l.jsxs)("p",{children:[r.optionTwo.votes.length,r.optionTwo.votes.length<=1?" person ":" people ","voted this option"]}),Object(l.jsxs)("p",{children:[Math.round(r.optionTwo.votes.length/(r.optionTwo.votes.length+r.optionOne.votes.length)*100),"% of the people voted this option"]})]})]})},xe=function(e){var t=e.question_id,n=Object(j.c)((function(e){return e.authedUser.authedUser})).id,o=Object(j.c)((function(e){return e.questions.questions})),r=t,c=o[t],i=Object(j.b)();function s(e){e.preventDefault();var t=e.target.value;console.log(typeof n,r,t),i(function(e){var t=e.authedUser,n=e.qid,o=e.answer;return function(){var e=Object(T.a)(U.a.mark((function e(r){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_({authedUser:t,qid:n,answer:o});case 3:r(P({authedUser:t,qid:n,answer:o})),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}({authedUser:n,qid:r,answer:t})),console.log("hi there")}return Object(l.jsxs)("div",{className:"options",children:[Object(l.jsxs)("div",{className:"option option--one",children:[Object(l.jsx)("p",{className:"option__text",children:c.optionOne.text}),Object(l.jsx)("button",{value:"optionOne",onClick:s,className:"vote--btn",children:"vote"})]}),Object(l.jsxs)("div",{className:"option option--two",children:[Object(l.jsx)("p",{className:"option__text",children:c.optionTwo.text}),Object(l.jsx)("button",{value:"optionTwo",onClick:s,className:"vote--btn",children:"vote"})]})]})},fe=x.a.div(je||(je=Object(O.a)(["\n  width: 100%;\n  height: 90vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  .options {\n    width: 60%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    border-radius: 3px;\n    overflow-y: hidden;\n    .option {\n      position: relative;\n      width: 50%;\n      height: 200px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n\n      .vote--btn {\n        cursor: pointer;\n        width: 50%;\n        padding: 10px;\n      }\n    }\n    .option__text {\n      font-weight: bold;\n      text-transform: uppercase;\n    }\n    .option--one {\n      background-color: #249cff;\n    }\n    .option--two {\n      background-color: #ff0000;\n      color: #fff;\n    }\n  }\n\n  .user-profile > img {\n    border-radius: 50%;\n    margin-top: 5px;\n  }\n"]))),ve=x.a.span(le||(le=Object(O.a)(["\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  color: green;\n\n  border-radius: 50%;\n"]))),me=function(){var e=Object(a.h)().question_id,t=Object(j.c)((function(e){return e.authedUser.authedUser})),n=Object(j.c)((function(e){return e.questions.questions})),r=Object(j.c)((function(e){return e.users.users})),c=n[e];return Object(o.useEffect)((function(){if(!c)throw new Error("Page not found")})),Object(l.jsxs)("div",{children:[Object(l.jsx)(y,{}),Object(l.jsxs)(fe,{children:[Object(l.jsx)("h2",{children:"Would You Rather...?"}),c.optionOne.votes.includes(t.id)||c.optionTwo.votes.includes(t.id)?Object(l.jsx)(Oe,{questions:n,question_id:e,authedUser:t}):Object(l.jsx)(xe,{question_id:e}),Object(l.jsx)("small",{children:"Posted by:"}),Object(l.jsx)("div",{className:"user-profile",children:Object(l.jsx)("img",{width:"40",height:"40",src:r[c.author].avatarURL,alt:"user pic"})})]})]})},ge="GET_USERS",we="GET_USERS_FAILURE",ye="GET_USERS_SUCCESS",qe="SAVE_QUESTIONS_ANSWER",Ue="SAVE_QUESTION",Te=x.a.div(be||(be=Object(O.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n"]))),ke=x.a.div(pe||(pe=Object(O.a)(["\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: inherit;\n  border-radius: 3px;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  * {\n    width: 50%;\n    padding: 10px 20px;\n  }\n  select {\n    margin-bottom: 10px;\n  }\n\n  button {\n    cursor: pointer;\n    color: #272727;\n    font-size: 16px;\n    font-weight: bold;\n    border: none;\n    border-radius: 16px;\n    background-color: #00d4ff;\n    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  }\n"])));var Se=function(){var e=Object(o.useState)(""),t=Object(ae.a)(e,2),n=t[0],r=t[1],c=Object(j.c)((function(e){return e.authedUser.authedUser})),i=Object(j.b)(),s=Object(a.f)(),d=(function(e){if(0!==e.indexOf("?"))return null;var t={};return e.slice(1).split("&").forEach((function(e){var n=e.split("="),o=Object(ae.a)(n,2),r=o[0],c=o[1];t[r]=c})),t}(Object(a.g)().search)||{}).next,b=Object(j.c)((function(e){return e.users.users})),p=Object.keys(b);return Object(o.useEffect)((function(){i(function(){var e=Object(T.a)(U.a.mark((function e(t){var n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:ge}),e.prev=1,e.next=4,new Promise((function(e,t){setTimeout((function(){return e(Object(u.a)({},S))}),1e3)}));case 4:n=e.sent,t({type:ye,users:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:we});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[i]),Object(o.useEffect)((function(){c&&s.replace(d||"/")})),Object(l.jsxs)(Te,{children:[Object(l.jsx)("h1",{children:"Would You Rather?"}),Object(l.jsx)("p",{children:"Kindly Sign In to play"}),Object(l.jsxs)(ke,{children:[Object(l.jsxs)("select",{onChange:function(e){return r(e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"Select User"}),p.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))]}),Object(l.jsx)("button",{onClick:function(){i(m(b[n]))},children:"Sign In"})]})]})},Ee=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{children:"Oops! You missed your way"})})};var Ne=function(){return Object(l.jsx)(B,{children:Object(l.jsx)(s.a,{children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{exact:!0,path:"/signin",component:Se}),Object(l.jsx)(h,{exact:!0,path:"/",component:te}),Object(l.jsx)(h,{exact:!0,path:"/leaderboard",component:se}),Object(l.jsx)(h,{exact:!0,path:"/add",component:he}),Object(l.jsx)(h,{exact:!0,path:"/questions/:question_id",component:me}),Object(l.jsx)(a.a,{component:Ee})]})})})},_e=n(14),ze=n(28),Ie=n(36),Re=n.n(Ie),Ce=n(37),Le=n(38),De=n(39),Pe={authedUser:null};var Ae=n(41),Ge={users:{},loading:!1};var Fe={questions:{},loading:!1};var Qe=Object(_e.combineReducers)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(u.a)(Object(u.a)({},e),{},{authedUser:t.authedUser});case v:return Object(u.a)(Object(u.a)({},e),{},{authedUser:null});default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case R:return{questions:t.questions,loading:!1};case I:return Object(u.a)(Object(u.a)({},e),{},{loading:!1});case L:var n=e.questions[t.qid];return Object(u.a)(Object(u.a)({},e),{},{questions:Object(u.a)(Object(u.a)({},e.questions),{},Object(k.a)({},t.qid,Object(u.a)(Object(u.a)({},n),{},Object(k.a)({},t.answer,Object(u.a)(Object(u.a)({},n[t.answer]),{},{votes:n[t.answer].votes.concat(t.authedUser)})))))});case C:return Object(u.a)(Object(u.a)({},e),{},{questions:Object(u.a)(Object(u.a)({},e.questions),{},Object(k.a)({},t.question.id,t.question))});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case ye:return{users:t.users,loading:!1};case we:return Object(u.a)(Object(u.a)({},e),{},{loading:!1});case qe:return Object(u.a)(Object(u.a)({},e),{},{users:Object(u.a)(Object(u.a)({},e.users),{},Object(k.a)({},t.authedUser,Object(u.a)(Object(u.a)({},e.users[t.authedUser]),{},{answers:Object(u.a)(Object(u.a)({},e.users[t.authedUser].answers),{},Object(k.a)({},t.qid,t.answer))})))});case Ue:return Object(u.a)(Object(u.a)({},e),{},{users:Object(u.a)(Object(u.a)({},e.users),{},Object(k.a)({},t.question.author,Object(u.a)(Object(u.a)({},e.users[t.question.author]),{},{questions:[].concat(Object(Ae.a)(e.users[t.question.author].questions),[t.question.id])})))});default:return e}}}),We=Qe,Me={key:"root",storage:Re.a},Je=Object(ze.a)(Me,We),Ve=Object(_e.createStore)(Je,Object(Le.composeWithDevTools)(Object(_e.applyMiddleware)(De.a))),Ye=Object(ze.b)(Ve);i.a.render(Object(l.jsx)(j.a,{store:Ve,children:Object(l.jsx)(Ce.a,{loading:null,persistor:Ye,children:Object(l.jsx)(Ne,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.0be6fe67.chunk.js.map