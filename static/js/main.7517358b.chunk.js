(this["webpackJsonpmath-practice"]=this["webpackJsonpmath-practice"]||[]).push([[0],{126:function(e,t,n){e.exports=n(294)},132:function(e,t,n){},135:function(e,t){},137:function(e,t){},168:function(e,t){},169:function(e,t){},211:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){},23:function(e,t,n){e.exports=n.p+"static/media/cross.b5d66db1.svg"},239:function(e,t){},241:function(e,t){},275:function(e,t){},276:function(e,t){},291:function(e,t,n){},292:function(e,t,n){},293:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(124),i=n.n(s),l=n(4),o=n.n(l),u=n(13),c=n(8),h=n(9),m=n(11),d=n(10),p=n(12),f=(n(132),n(23)),v=n.n(f),g=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleExit",value:function(){var e=!0;null!==this.props.exitPrompt&&(e=window.confirm(this.props.exitPrompt)),e&&this.props.onExit()}},{key:"render",value:function(){var e=this.props.title,t=this.props.children,n=this.props.showExit;return r.a.createElement("div",{className:"AppContainer"},r.a.createElement("div",{className:"AppContainer-topbar"},r.a.createElement("span",null,e),n?r.a.createElement("button",{onClick:this.handleExit.bind(this)},r.a.createElement("img",{src:v.a,alt:"X"})):null),r.a.createElement("div",{className:"AppContainer-container"},t))}}]),t}(r.a.Component),y=n(35),b=n.n(y),S=new(n(125).a),k={random:function(){return S.realZeroToOneExclusive()},randInt:function(e,t){return void 0===t&&(t=e,e=0),Math.floor(k.random()*(t-e))+e},randChoice:function(e){return e[k.randInt(0,e.length)]},range:function(e,t){return b.a.range(e,t+1)},clone:function(e){return b.a.cloneDeep(e)},shuffle:function(e){e=e.slice();for(var t=0;t<e.length;t++){var n=k.randInt(0,e.length),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e},extend:function(e,t){return b.a.extend(e,t)},plural:function(e,t){return e+" "+t+(1===e?"":"s")},formatSeconds:function(e){return Math.round(e/100)/10+"s"},formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(new Date).getTime(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["January","Februrary","March","April","May","June","July","August","September","October","November","December"],r=new Date(e),s=(t-e)/6e4,i=Math.round(s),l=Math.round(s/60),o=Math.round(s/60/24);return s<1&&s>0?"Just now":s<60?k.plural(i,"minute")+" ago":s<1440?k.plural(l,"hour")+" ago":s<4320?k.plural(o,"day")+" ago":s<10080?"Last "+n[r.getDay()]+" ("+k.plural(o,"day")+" ago)":a[r.getMonth()]+" "+r.getDate()+"("+k.plural(o,"day")+" ago)"},compare:function(e,t){return b.a.isEqual(e,t)}},E=["add","sub","mul","div"],w=["add","sub","mul","div","mix","sqr"],N={add:"+",sub:"\u2212",mul:"\xd7",div:"\xf7"},x={add:"Addition",sub:"Subtraction",mul:"Multiplication",div:"Division",mix:"Mixed",sqr:"Squares"},T={min:1,max:12},C={generateQuestion:function(e,t,n){if("add"===n)return{num1:e,num2:t,oper:n,ans:e+t};if("sub"===n)return{num1:e+t,num2:t,oper:n,ans:e};if("mul"===n)return{num1:e,num2:t,oper:n,ans:e*t};if("div"===n)return{num1:e*t,num2:t,oper:n,ans:e};throw Error()},generateQuestionsRandom:function(e,t,n,a){for(var r,s,i,l=[],o=0;o<a;o++){"mix"===e?(i=k.randChoice(E),r=k.randChoice(t),s=k.randChoice(n)):"sqr"===e?(i="mul",s=r=k.randChoice(t)):(i=e,r=k.randChoice(t),s=k.randChoice(n));var u=C.generateQuestion(r,s,i);l.push(u)}return l},generateQuestionsOrdered:function(e,t,n){for(var a,r,s,i=[],l=0;l<t.length;l++)for(var o=0;o<n.length;o++){if("mix"===e)s=k.randChoice(E),a=t[l],r=n[o];else if("sqr"===e){if(s="mul",(a=t[l])!==(r=n[o]))continue}else s=e,a=t[l],r=n[o];var u=C.generateQuestion(a,r,s);i.push(u)}return i},generateSession:function(e){var t,n,a,r=e.type,s=[],i=e.isDefault;e.useRange?(t=k.range(e.range.min,e.range.max),n=k.range(e.range.min,e.range.max)):(t=k.clone(e.pool1),n=k.clone(null!==(a=e.pool2)&&void 0!==a?a:e.pool1));return"random"===e.order?s=C.generateQuestionsRandom(r,t,n,e.numQuestions):"all"===e.order?s=C.generateQuestionsOrdered(r,t,n):"all-shuffle"===e.order&&(s=C.generateQuestionsOrdered(r,t,n),s=k.shuffle(s)),{timeStarted:0,type:r,questions:s,times:[],progress:0,total:s.length,isDefault:i}},generateDefaultSessionOptions:function(e){return{type:e,useRange:!0,range:k.clone(T),order:"all-shuffle",isDefault:!0}},generateSessionResults:function(e){var t=e.timeStarted,n=e.type,a=e.times.reduce((function(e,t){return e+t}),0),r=C.generateSessionIndividualResults(e);return{date:t,type:n,totalTime:a,numQuestions:e.total,individual:r}},generateSessionIndividualResults:function(e){if(e.isDefault&&E.includes(e.type)){for(var t=e.type,n=k.clone(T),a=[],r=n.min;r<=n.max;r++){for(var s=[],i=n.min;i<=n.max;i++)s.push(0);a.push(s)}for(var l=0;l<e.questions.length;l++){var o=e.questions[l],u=e.times[l],c=void 0,h=void 0;["sub","div"].includes(o.oper)?(c=o.ans,h=o.num2):(c=o.num1,h=o.num2);var m=c-n.min,d=h-n.min;a[m][d]=u}return{oper:t,range:n,times:a}}},startSession:function(e){return e.timeStarted=(new Date).getTime(),e}},O=(n(211),{filterType:function(e,t){return e.filter((function(e){return e.type===t}))},getLatestDefault:function(e,t){for(var n=e.length-1;n>=0;n--)if(e[n].type===t)return e[n];return null},getHistorySorted:function(e){return e.slice().sort((function(e,t){return e.date-t.date}))},getFastest:function(e,t){for(var n=e.individual,a=[],r=0;r<n.times.length;r++)for(var s=0;s<n.times.length;s++){var i=n.times[r][s];(a.length<t||a[a.length-1].time>i)&&(a.push({question:C.generateQuestion(r+n.range.min,s+n.range.min,e.type),time:i}),a.sort((function(e,t){return e.time-t.time})),a.splice(t))}return a},getSlowest:function(e,t){for(var n=e.individual,a=[],r=0;r<n.times.length;r++)for(var s=0;s<n.times.length;s++){var i=n.times[r][s];(a.length<t||a[a.length-1].time<i)&&(a.push({question:C.generateQuestion(r+n.range.min,s+n.range.min,e.type),time:i}),a.sort((function(e,t){return t.time-e.time})),a.splice(t))}return a},getIndividualAverage:function(e,t,n,a,r){var s=O.filterType(e,t),i=0,l=0,o=!0,u=!1,c=void 0;try{for(var h,m=s[Symbol.iterator]();!(o=(h=m.next()).done);o=!0){var d=h.value;void 0!==d.individual&&(i+=1,l+=d.individual.times[n-T.min][a-T.min])}}catch(p){u=!0,c=p}finally{try{o||null==m.return||m.return()}finally{if(u)throw c}}return 0===i?null:l/i}}),D=function(e){function t(e){var n;Object(c.a)(this,t),n=Object(m.a)(this,Object(d.a)(t).call(this,e));var a,r=O.getHistorySorted(e.history);return a=0===r.length?"add":r[r.length-1].type,n.state={sessionType:a},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleStartClick",value:function(){this.props.onStartPractice(this.state.sessionType)}},{key:"handleNavigate",value:function(e){"select"===e?this.props.onNavigateSelectSession():"stats"===e?this.props.onNavigateStats():this.props.onNavigateSettings()}},{key:"handleSelectType",value:function(e){var t=e.target.value;this.setState({sessionType:t})}},{key:"render",value:function(){var e=this,t=this.state.sessionType;return r.a.createElement("div",{className:"Home"},r.a.createElement("button",{className:"Home-start",onClick:this.handleStartClick.bind(this)},"Start",r.a.createElement("br",null),"Practice"),r.a.createElement("select",{className:"Home-start-type",value:t,onChange:this.handleSelectType.bind(this)},w.map((function(e){return r.a.createElement("option",{value:e,key:e},x[e])}))),r.a.createElement("span",{className:"link",onClick:function(){return e.handleNavigate("select")}},"Custom Session"),r.a.createElement("span",{className:"link",onClick:function(){return e.handleNavigate("stats")}},"User Stats"),r.a.createElement("span",{className:"link",onClick:function(){return e.handleNavigate("settings")}},"Settings"))}}]),t}(r.a.Component),j=(n(212),["range","pool"]),A={range:"Range",pool:"Pool"},R=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={rangeType:"range",range:{min:1,max:12},pool1:k.range(1,12),pool2:k.range(1,12),type:"add",shuffle:!0,random:!1,numberQuestions:20},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleStartSession",value:function(){this.props.onStartSession({type:this.state.type,useRange:"range"===this.state.rangeType,range:this.state.range,pool1:this.state.pool1,pool2:this.state.pool2,order:this.state.random?"random":this.state.shuffle?"all-shuffle":"all",numQuestions:this.state.numberQuestions,isDefault:!1})}},{key:"handleStartSessionTemplate",value:function(e){var t=this.props.sessionTemplates[e];this.props.onStartSession(t.options)}},{key:"handleSaveTemplate",value:function(){var e={type:this.state.type,useRange:"range"===this.state.rangeType,range:this.state.range,pool1:this.state.pool1,pool2:this.state.pool2,order:this.state.random?"random":this.state.shuffle?"all-shuffle":"all",numQuestions:this.state.numberQuestions,isDefault:!1},t=window.prompt("Please enter a name for your session:");null!==t&&this.props.onAddSessionTemplate({options:e,name:t})}},{key:"handleRemoveTemplate",value:function(e){this.props.onRemoveSessionTemplate(e)}},{key:"handleSelectRangeType",value:function(e){var t=e.target.value;this.setState({rangeType:t})}},{key:"handleInputRangeAmount",value:function(e,t){var n=parseInt(e.target.value,10);n<0&&(n=1);var a=k.clone(this.state.range);t?a.min=n:a.max=n,this.setState({range:a})}},{key:"handleValidateRangeAmount",value:function(e,t){var n=parseInt(e.target.value,10);Number.isNaN(n)&&(n=NaN),n=Math.min(Math.max(n,1),1e3);var a=k.clone(this.state.range);t?(a.min=n,a.max<a.min&&(a.max=a.min)):(a.max=n,a.min>a.max&&(a.min=a.max)),this.setState({range:a})}},{key:"handleToggleRangePool",value:function(e,t){var n=e?this.state.pool1:this.state.pool2,a=n.indexOf(t);-1===a?n.push(t):n.splice(a,1),e?this.setState({pool1:n}):this.setState({pool2:n})}},{key:"handleSelectType",value:function(e){var t=e.target.value;this.setState({type:t})}},{key:"handleToggleShuffle",value:function(){this.setState({shuffle:!this.state.shuffle})}},{key:"handleToggleRandom",value:function(){this.setState({random:!this.state.random})}},{key:"handleSelectNumberQuestions",value:function(e){this.setState({numberQuestions:e})}},{key:"render",value:function(){var e,t,n=this,a=this.props.sessionTemplates,s=this.state.rangeType,i=this.state.range,l=this.state.pool1,o=this.state.pool2,u=this.state.type,c=this.state.random,h=this.state.shuffle,m=this.state.numberQuestions;return"range"===s?e=r.a.createElement("div",{className:"Select-range-range"},r.a.createElement("input",{type:"number",pattern:"[0-9]*",min:1,value:Number.isNaN(i.min)?"":i.min,onChange:function(e){return n.handleInputRangeAmount(e,!0)},onBlur:function(e){return n.handleValidateRangeAmount(e,!0)}}),r.a.createElement("input",{type:"number",pattern:"[0-9]*",min:1,value:Number.isNaN(i.max)?"":i.max,onChange:function(e){return n.handleInputRangeAmount(e,!1)},onBlur:function(e){return n.handleValidateRangeAmount(e,!1)}})):"pool"===s&&(e=[r.a.createElement(I,{key:1,pool:l,onToggleNum:function(e){return n.handleToggleRangePool(!0,e)}}),r.a.createElement(I,{key:2,pool:o,onToggleNum:function(e){return n.handleToggleRangePool(!1,e)}})]),t=c?r.a.createElement("div",{className:"Select-order-random"},[20,50,100].map((function(e){return[r.a.createElement("input",{type:"radio",value:e,checked:e===m,onChange:function(){return n.handleSelectNumberQuestions(e)}}),r.a.createElement("label",{onClick:function(){return n.handleSelectNumberQuestions(e)}},e," Questions"),r.a.createElement("br",null)]}))):r.a.createElement("div",{className:"Select-order-shuffle"},r.a.createElement("input",{type:"checkbox",checked:h,onChange:this.handleToggleShuffle.bind(this)}),r.a.createElement("label",{onClick:this.handleToggleShuffle.bind(this)},"Shuffle?")),r.a.createElement("div",{className:"Select"},r.a.createElement("div",{className:"Select-templates"},a.map((function(e,t){return r.a.createElement(M,{name:e.name,key:e.name,onStart:function(){return n.handleStartSessionTemplate(t)},onRemove:function(){return n.handleRemoveTemplate(t)}})}))),r.a.createElement("div",{className:"Select-options"},r.a.createElement("div",{className:"Select-rangetype"},r.a.createElement("select",{value:s,onChange:this.handleSelectRangeType.bind(this)},j.map((function(e){return r.a.createElement("option",{key:e,value:e},A[e])})))),e,r.a.createElement("div",{className:"Select-type"},r.a.createElement("span",null,"Type: "),r.a.createElement("select",{value:u,onChange:this.handleSelectType.bind(this)},w.map((function(e){return r.a.createElement("option",{key:e,value:e},x[e])})))),r.a.createElement("div",{className:"Select-order"},r.a.createElement("input",{type:"checkbox",checked:c,onChange:this.handleToggleRandom.bind(this)}),r.a.createElement("label",{onClick:this.handleToggleRandom.bind(this)},"Random?")),t,r.a.createElement("div",{className:"Select-submit"},r.a.createElement("button",{onClick:this.handleStartSession.bind(this)},"Start Practice"),r.a.createElement("span",{className:"link",onClick:this.handleSaveTemplate.bind(this)},"Save Settings"))))}}]),t}(r.a.Component);function M(e){return r.a.createElement("div",{className:"SessionTemplate"},r.a.createElement("button",{className:"SessionTemplate-start",onClick:e.onStart},"Start"),r.a.createElement("span",{className:"SessionTemplate-name"},e.name),r.a.createElement("button",{className:"SessionTemplate-remove",onClick:function(){window.confirm("Are you sure you want to remove this template?")&&e.onRemove()}},r.a.createElement("img",{src:v.a,alt:"X"})))}function I(e){var t=e.pool,n=e.onToggleNum;return r.a.createElement("div",{className:"RangePool"},k.range(1,20).map((function(e){return r.a.createElement("button",{key:e,className:"RangePool-button "+(t.includes(e)?"RangePool-selected":""),onClick:function(){return n(e)}},e)})))}n(213);var P=n(60),Q=n(42),q=n.n(Q),L="v3.0.0-beta",H="mrsiliconguy-mental-math-practice-save.json",U={version:L,history:[],templates:[],settings:{showProgressBar:!1}},B={verifyData:function(e){return"object"===typeof e&&void 0!==e.version&&e.version===L&&void 0!==e.history&&Array.isArray(e.history)&&void 0!==e.templates&&Array.isArray(e.templates)&&void 0!==e.settings&&"object"===typeof e.settings},serialize:function(e){return JSON.stringify(e)},deserialize:function(e){var t;try{t=JSON.parse(e)}catch(n){throw Error("Could not parse data")}if(this.verifyData(t))return t;throw Error("Invalid data")},load:function(e){return Object(u.a)(o.a.mark((function t(){var n,a,r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,null!==e){t.next=3;break}return t.abrupt("return",null);case 3:return n=new q.a({token:e.token}),t.next=6,n.get(e.gist);case 6:if(a=t.sent,r=a.body.files[H].content,s=B.deserialize(r),!B.verifyData(s)){t.next=15;break}return t.next=12,B.updateLastSynced(new Date);case 12:return t.abrupt("return",s);case 15:return t.abrupt("return",null);case 16:t.next=21;break;case 18:return t.prev=18,t.t0=t.catch(0),t.abrupt("return",null);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))()},save:function(e,t){return Object(u.a)(o.a.mark((function n(){var a,r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=B.serialize(t),r=new q.a({token:e.token}),n.next=5,r.edit(e.gist,{files:Object(P.a)({},H,{content:a})});case 5:return n.next=7,B.updateLastSynced(new Date);case 7:return n.abrupt("return",!0);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error saving data"),n.abrupt("return",!1);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))()},verifyAuth:function(e){return"object"===typeof e&&void 0!==e.token&&"string"===typeof e.token&&void 0!==e.username&&"string"===typeof e.username&&void 0!==e.gist&&"string"===typeof e.gist},loadAuth:function(){var e=window.localStorage.getItem(L);if(null===e)return null;try{var t=JSON.parse(e);return B.verifyAuth(t)?t:null}catch(n){return null}},saveAuth:function(e){return Object(u.a)(o.a.mark((function t(){var n,a,r,s,i,l,u,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=new q.a({token:e}),"2020-01-01T00:00:00Z",a=[],t.next=6,n.all("2020-01-01T00:00:00Z");case 6:t.sent.pages.forEach((function(e){return a=a.concat(e.body)})),r="",s="",i=0;case 11:if(!(i<a.length)){t.next=20;break}if(!Object.keys(a[i].files).includes(H)){t.next=17;break}return r=a[i].id,s=a[i].owner.login,t.abrupt("break",20);case 17:i++,t.next=11;break;case 20:if(""!==r){t.next=26;break}return t.next=23,n.create({description:"Mental Math Practice save data (https://mrsiliconguy.github.io/math-practice/)",public:!1,files:Object(P.a)({},H,{content:"Save data will be uploaded here"})});case 23:l=t.sent,r=l.id,s=l.owner.login;case 26:return u={token:e,gist:r,username:s,lastSynced:-1},c=JSON.stringify(u),window.localStorage.setItem(L,c),t.abrupt("return",u);case 32:return t.prev=32,t.t0=t.catch(0),console.log(t.t0),console.log("Error saving auth"),t.abrupt("return",null);case 37:case"end":return t.stop()}}),t,null,[[0,32]])})))()},updateLastSynced:function(e){return Object(u.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null!==(n=B.loadAuth())&&(n.lastSynced=e.getTime(),a=JSON.stringify(n),window.localStorage.setItem(L,a));case 2:case"end":return t.stop()}}),t)})))()},clearAuth:function(){return Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.removeItem(L);case 1:case"end":return e.stop()}}),e)})))()}},F=(n(291),function(e){function t(e){var n;Object(c.a)(this,t),n=Object(m.a)(this,Object(d.a)(t).call(this,e));var a=C.generateSession(e.options);return C.startSession(a),n.state={session:a,input:null},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleInput",value:function(e){var t=this;if(this.state.session.progress!==this.state.session.total){var n=e.target.value,a=parseInt(n,10),r=this.state.input;r=Number.isNaN(a)?null:a,this.setState({input:r},(function(){return setTimeout((function(){var e=t.state.session;if(t.state.session.progress!==t.state.session.total&&r===e.questions[e.progress].ans){var n=e.timeStarted,a=e.times.reduce((function(e,t){return e+t}),0),s=(new Date).getTime()-n-a;if(s=Math.min(s,9900),e.times.push(s),e.progress+=1,e.progress===e.total){var i=C.generateSessionResults(e);t.props.onFinishSession(i)}else t.setState({session:e,input:null})}}),100)}))}}},{key:"render",value:function(){var e=this.props.settings,t=this.state.input,n=this.state.session,a=n.questions[n.progress];return r.a.createElement("div",{className:"Math"},r.a.createElement("div",{className:"Math-session"},r.a.createElement("div",{className:"Math-question"},r.a.createElement("span",{className:"Math-oper"},N[a.oper]),r.a.createElement("div",{className:"Math-numbers"},r.a.createElement("span",null,a.num1),r.a.createElement("span",null,a.num2))),r.a.createElement("div",{className:"Math-answer"},r.a.createElement("input",{autoFocus:!0,placeholder:"?",maxLength:3,size:3,value:null!==t&&void 0!==t?t:"",onChange:this.handleInput.bind(this),type:"number"}))),e.showProgressBar?r.a.createElement("div",{className:"Math-progress"},r.a.createElement("div",{style:{width:n.progress/n.total*100+"%"}})):null)}}]),t}(r.a.Component)),J=(n(292),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={token:""},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleToggleShowProgressBar",value:function(){var e=this.props.settings;e.showProgressBar=!e.showProgressBar,this.props.onUpdateSettings(e)}},{key:"handleInputAuthData",value:function(e){var t=e.target.value;this.setState({token:t})}},{key:"handleLinkDataClick",value:function(){""===this.state.token?alert("Please enter a token"):this.props.onAddAuth(this.state.token)}},{key:"handleCheckSync",value:function(){this.props.onCheckSync().then((function(e){!0===e?alert("Data is up to date with gist"):alert("Data is not synced with gist! Try manually saving")}))}},{key:"handleManualSave",value:function(){this.props.onManualSave().then((function(e){!0===e?alert("Successfully saved to gist"):alert("Error saving to gist!")}))}},{key:"handleManualLoad",value:function(){this.props.onManualLoad().then((function(e){!0===e?alert("Successfully loaded from gist"):alert("Error loaindg from gist!")}))}},{key:"handleUnlink",value:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Are you sure you want to unlink?")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.props.onUnlink();case 4:if(!e.sent){e.next=8;break}alert("Unlinked data from Github"),e.next=9;break;case 8:alert("Unable to unlink for some reason");case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleAboutClick",value:function(){alert("Math Practice was coded by MrSiliconGuy\nwith the React.js framework")}},{key:"render",value:function(){var e=this,t=this.props.settings,n=this.state,a=this.props.authData;return r.a.createElement("div",{className:"Settings"},r.a.createElement("fieldset",{className:"Settings-fieldset"},r.a.createElement("legend",null,"Math Session"),r.a.createElement("input",{type:"checkbox",checked:t.showProgressBar,onChange:this.handleToggleShowProgressBar.bind(this)}),r.a.createElement("label",{onClick:this.handleToggleShowProgressBar.bind(this)},"Show Progress Bar")),r.a.createElement("fieldset",{className:"Settings-fieldset"},r.a.createElement("legend",null,"Github Gist Linking"),null===a?r.a.createElement("div",null,r.a.createElement("span",null,"Data not yet linked"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Github Token",value:n.token,onChange:function(t){return e.handleInputAuthData(t)}}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleLinkDataClick.bind(this)},"Link Data"),r.a.createElement("span",{className:"link"},"help")):r.a.createElement("div",null,r.a.createElement("span",null,"Data linked with",r.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://gist.github.com/".concat(a.username,"/").concat(a.gist)},a.username),"on Github"),r.a.createElement("br",null),r.a.createElement("span",null,"Last synced: ",-1===a.lastSynced?"Never":k.formatDate(a.lastSynced)),r.a.createElement("br",null),r.a.createElement("span",{className:"link",onClick:this.handleCheckSync.bind(this)},"Check Sync"),r.a.createElement("span",{className:"link",onClick:this.handleManualSave.bind(this)},"Save"),r.a.createElement("span",{className:"link",onClick:this.handleManualLoad.bind(this)},"Load"),r.a.createElement("span",{className:"link",onClick:this.handleUnlink.bind(this)},"Unlink"))),r.a.createElement("fieldset",{className:"Settings-fieldset"},r.a.createElement("legend",null,"Other"),r.a.createElement("span",{className:"link",onClick:this.handleAboutClick.bind(this)},"About"),r.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.github.com/mrsiliconguy/math-practice"},"GitHub")))}}]),t}(r.a.Component)),G=(n(293),function(e){function t(e){var n;Object(c.a)(this,t),n=Object(m.a)(this,Object(d.a)(t).call(this,e));var a=O.getHistorySorted(e.history)[e.history.length-1];return n.state={view:void 0===a?"add":a.type},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleChangeView",value:function(e){var t=e.target.value;this.setState({view:t})}},{key:"handleRemoveHistory",value:function(e){this.props.onRemoveHistory(e)}},{key:"render",value:function(){var e=this.state.view,t=this.props.history;return r.a.createElement("div",{className:"StatsView"},r.a.createElement("select",{value:e,onChange:this.handleChangeView.bind(this)},w.map((function(e){return r.a.createElement("option",{key:e,value:e},x[e])}))),r.a.createElement("span",null,x[e]," Attempts: ",O.filterType(t,e).length),r.a.createElement("span",null,"Total Attempts: ",t.length),r.a.createElement("div",{className:"StatsView-tables"},r.a.createElement(V,Object.assign({},this.state,this.props)),r.a.createElement(z,Object.assign({},this.state,this.props,{onRemoveHistory:this.handleRemoveHistory.bind(this)})),E.includes(e)?r.a.createElement(X,Object.assign({},this.state,this.props)):null))}}]),t}(r.a.Component));function V(e){var t=e.history,n=O.getLatestDefault(t,e.view),a=null===n||void 0===n.individual?null:r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Fastest Times:"),r.a.createElement("ul",null,O.getFastest(n,5).map((function(e,t){return r.a.createElement("li",{key:t},e.question.num1+N[e.question.oper]+e.question.num2+" - "+k.formatSeconds(e.time))})))),r.a.createElement("td",null,r.a.createElement("b",null,"Slowest Times:"),r.a.createElement("ul",null,O.getSlowest(n,5).map((function(e,t){return r.a.createElement("li",{key:t},e.question.num1+N[e.question.oper]+e.question.num2+" - "+k.formatSeconds(e.time))})))));return r.a.createElement("table",{className:"RecentStats"},r.a.createElement("caption",null,"Latest Session:"),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Time"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,null===n?"None":k.formatDate(n.date)),r.a.createElement("td",null,null===n?"None":k.formatSeconds(n.totalTime))),a))}function z(e){var t=e.history,n=O.getHistorySorted(t),a=O.filterType(n,e.view),s=a.filter((function(e){return void 0!==e.individual})),i=a.filter((function(e){return void 0===e.individual}));function l(n){window.confirm("Are you sure you want to remove this session?")&&e.onRemoveHistory(t.findIndex((function(e){return e.date===n})))}return r.a.createElement("table",{className:"TotalStats"},r.a.createElement("caption",null,"All Sessions"),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\xa0"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Time"),r.a.createElement("th",null,"Questions"),r.a.createElement("th",null,"\xa0"))),r.a.createElement("tbody",null,s.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1,")"),r.a.createElement("td",null,k.formatDate(e.date)),r.a.createElement("td",null,k.formatSeconds(e.totalTime)),r.a.createElement("td",null,void 0!==e.individual?"default":e.numQuestions),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return l(e.date)}},r.a.createElement("img",{src:v.a,alt:"X"}))))})),i.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1,")"),r.a.createElement("td",null,k.formatDate(e.date)),r.a.createElement("td",null,k.formatSeconds(e.totalTime)),r.a.createElement("td",null,void 0!==e.individual?"default":e.numQuestions),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return l(e.date)}},r.a.createElement("img",{src:v.a,alt:"X"}))))}))))}function X(e){var t=e.history,n=e.view,a=k.range(T.min,T.max),s=a.map((function(e){return a.map((function(a){return O.getIndividualAverage(t,n,e,a,5)}))})),i=function(e){if(null===e)return"#777777";var t=1-Math.min(1,e/4e3),n=Math.round(160*t);return"hsl(".concat(n,", 100%, 50%)")},l=a.map((function(e){return r.a.createElement("tr",null,r.a.createElement("th",{className:"IndividualStats-header"},e),a.map((function(t){return function(){var n=s[e-T.min][t-T.min];return r.a.createElement("td",{className:"IndividualStats-data",style:{backgroundColor:i(n)}},null===n?"N/A":(n/1e3).toFixed(1))}()})))}));return r.a.createElement("table",{className:"IndividualStats"},r.a.createElement("caption",null,"Individual Stats (Average of 5)"),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,N[n]),a.map((function(e){return r.a.createElement("th",null,e)}))),l))}var W=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={view:"loading",data:k.clone(U),authData:B.loadAuth(),sessionOptions:null},null!==n.state.authData?B.load(n.state.authData).then((function(e){e?n.setState({view:"home",data:e}):(alert("Unable to load from gist"),n.setState({view:"home",data:k.clone(U)}))})):n.state=k.extend(n.state,{view:"home"}),n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"updateData",value:function(e){this.setState({data:e}),this.state.authData&&B.save(this.state.authData,e)}},{key:"handleNavigate",value:function(e){this.setState({view:e})}},{key:"handleStartDefaultSession",value:function(e){var t=C.generateDefaultSessionOptions(e);this.handleStartSession(t)}},{key:"handleTemplateAdd",value:function(e){var t=k.clone(this.state.data);t.templates.push(e),this.updateData(t)}},{key:"handleTemplateRemove",value:function(e){var t=k.clone(this.state.data);t.templates.splice(e,1),this.updateData(t)}},{key:"handleStartSession",value:function(e){this.setState({view:"math",sessionOptions:e})}},{key:"handleFinishSession",value:function(e){alert("Finished session in "+k.formatSeconds(e.totalTime));var t=this.state.data;t.history.push(e),this.setState({view:"stats",data:t}),this.updateData(t)}},{key:"handleRemoveHistory",value:function(e){var t=k.clone(this.state).data;t.history.splice(e,1),this.updateData(t)}},{key:"handleUpdateSettings",value:function(e){var t=this.state.data;t.settings=e,this.updateData(t)}},{key:"handleAddAuth",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.saveAuth(t);case 2:null===(n=e.sent)?alert("Invalid Github auth token"):(alert("Successfully linked auth data"),this.setState({authData:n}));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleCheckSync",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.authData){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,B.load(this.state.authData);case 4:if(t=e.sent,!k.compare(t,this.state.data)){e.next=9;break}return e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleManualSave",value:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.authData){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,B.save(this.state.authData,this.state.data);case 4:if(!1!==e.sent){e.next=9;break}return e.abrupt("return",!1);case 9:return this.setState({authData:B.loadAuth()}),e.abrupt("return",!0);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleManualLoad",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.authData){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,B.load(this.state.authData);case 4:if(null!==(t=e.sent)){e.next=9;break}return e.abrupt("return",!1);case 9:return this.setState({data:t}),e.abrupt("return",!0);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleUnlink",value:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B.clearAuth(),this.setState({authData:null}),e.abrupt("return",!0);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,n=this.state.data,a=this.state.authData,s=this.state.sessionOptions,i=this.state.data.settings,l="",o=!1,u=null;return"home"===this.state.view?(l="Math Practice!",o=!1,e=r.a.createElement(D,{history:n.history,onStartPractice:this.handleStartDefaultSession.bind(this),onNavigateSelectSession:function(){return t.handleNavigate("select")},onNavigateStats:function(){return t.handleNavigate("stats")},onNavigateSettings:function(){return t.handleNavigate("settings")}})):"select"===this.state.view?(l="Custom Practice",o=!0,e=r.a.createElement(R,{sessionTemplates:n.templates,onAddSessionTemplate:this.handleTemplateAdd.bind(this),onRemoveSessionTemplate:this.handleTemplateRemove.bind(this),onStartSession:this.handleStartSession.bind(this)})):"math"===this.state.view?(l=x[s.type],o=!0,u="Are you sure you want to quit practice now?",e=r.a.createElement(F,{settings:i,options:s,onFinishSession:this.handleFinishSession.bind(this)})):"stats"===this.state.view?(l="User Statistics",o=!0,e=r.a.createElement(G,{onRemoveHistory:this.handleRemoveHistory.bind(this),history:n.history})):"settings"===this.state.view?(l="Settings",o=!0,e=r.a.createElement(J,{authData:a,data:n,settings:i,onUpdateSettings:this.handleUpdateSettings.bind(this),onAddAuth:this.handleAddAuth.bind(this),onCheckSync:this.handleCheckSync.bind(this),onManualSave:this.handleManualSave.bind(this),onManualLoad:this.handleManualLoad.bind(this),onUnlink:this.handleUnlink.bind(this)})):"loading"===this.state.view&&(l="Loading...",o=!1,e=r.a.createElement("div",null)),r.a.createElement(g,{title:l,exitPrompt:u,onExit:function(){return t.handleNavigate("home")},showExit:o},e)}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[126,1,2]]]);
//# sourceMappingURL=main.7517358b.chunk.js.map