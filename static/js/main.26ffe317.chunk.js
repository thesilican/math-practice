(this["webpackJsonpmath-practice"]=this["webpackJsonpmath-practice"]||[]).push([[0],{118:function(e,t,n){e.exports=n(239)},123:function(e,t,n){},126:function(e,t){},128:function(e,t){},161:function(e,t){},162:function(e,t){},19:function(e,t,n){e.exports=n.p+"static/media/cross.b5d66db1.svg"},204:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){},238:function(e,t,n){},239:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(115),r=n.n(i),o=n(5),l=n(6),u=n(8),c=n(7),m=n(9),h=(n(123),n(19)),d=n.n(h),p=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleExit",value:function(){var e=!0;null!==this.props.exitPrompt&&(e=window.confirm(this.props.exitPrompt)),e&&this.props.onExit()}},{key:"render",value:function(){var e=this.props.title,t=this.props.children,n=this.props.showExit;return s.a.createElement("div",{className:"AppContainer"},s.a.createElement("div",{className:"AppContainer-topbar"},s.a.createElement("span",null,e),n?s.a.createElement("button",{onClick:this.handleExit.bind(this)},s.a.createElement("img",{src:d.a,alt:"X"})):null),s.a.createElement("div",{className:"AppContainer-container"},t))}}]),t}(s.a.Component),f=n(35),v=n.n(f),g=new(n(116).a),y={random:function(){return g.realZeroToOneExclusive()},randInt:function(e,t){return void 0===t&&(t=e,e=0),Math.floor(y.random()*(t-e))+e},randChoice:function(e){return e[y.randInt(0,e.length)]},range:function(e,t){return v.a.range(e,t+1)},clone:function(e){return v.a.cloneDeep(e)},shuffle:function(e){e=e.slice();for(var t=0;t<e.length;t++){var n=y.randInt(0,e.length),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e},extend:function(e,t){return v.a.extend(e,t)},plural:function(e,t){return e+" "+t+(1===e?"":"s")},formatSeconds:function(e){return Math.round(e/100)/10+"s"},formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(new Date).getTime(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["January","Februrary","March","April","May","June","July","August","September","October","November","December"],s=new Date(e),i=(t-e)/6e4,r=Math.round(i),o=Math.round(i/60),l=Math.round(i/60/24);return i<1&&i>0?"Just now":i<60?y.plural(r,"minute")+" ago":i<1440?y.plural(o,"minute")+" ago":i<4320?y.plural(l,"minute")+" ago":i<10080?"Last "+n[s.getDay()]+" ("+y.plural(l,"day")+" ago)":a[s.getMonth()]+" "+s.getDate()+"("+y.plural(l,"days")+" ago)"}},S=["add","sub","mul","div"],E=["add","sub","mul","div","mix","sqr"],b={add:"+",sub:"\u2212",mul:"\xd7",div:"\xf7"},k={add:"Addition",sub:"Subtraction",mul:"Multiplication",div:"Division",mix:"Mixed",sqr:"Squares"},w={min:1,max:12},N={generateQuestion:function(e,t,n){if("add"===n)return{num1:e,num2:t,oper:n,ans:e+t};if("sub"===n)return{num1:e+t,num2:t,oper:n,ans:e};if("mul"===n)return{num1:e,num2:t,oper:n,ans:e*t};if("div"===n)return{num1:e*t,num2:t,oper:n,ans:e};throw Error()},generateQuestionsRandom:function(e,t,n,a){for(var s,i,r,o=[],l=0;l<a;l++){"mix"===e?(r=y.randChoice(S),s=y.randChoice(t),i=y.randChoice(n)):"sqr"===e?(r="mul",i=s=y.randChoice(t)):(r=e,s=y.randChoice(t),i=y.randChoice(n));var u=N.generateQuestion(s,i,r);o.push(u)}return o},generateQuestionsOrdered:function(e,t,n){for(var a,s,i,r=[],o=0;o<t.length;o++)for(var l=0;l<n.length;l++){if("mix"===e)i=y.randChoice(S),a=t[o],s=n[l];else if("sqr"===e){if(i="mul",(a=t[o])!==(s=n[l]))continue}else i=e,a=t[o],s=n[l];var u=N.generateQuestion(a,s,i);r.push(u)}return r},generateSession:function(e){var t,n,a,s=e.type,i=[],r=e.isDefault;e.useRange?(t=y.range(e.range.min,e.range.max),n=y.range(e.range.min,e.range.max)):(t=y.clone(e.pool1),n=y.clone(null!==(a=e.pool2)&&void 0!==a?a:e.pool1));return"random"===e.order?i=N.generateQuestionsRandom(s,t,n,e.numQuestions):"all"===e.order?i=N.generateQuestionsOrdered(s,t,n):"all-shuffle"===e.order&&(i=N.generateQuestionsOrdered(s,t,n),i=y.shuffle(i)),{timeStarted:0,type:s,questions:i,times:[],progress:0,total:i.length,isDefault:r}},generateDefaultSessionOptions:function(e){return{type:e,useRange:!0,range:y.clone(w),order:"all-shuffle",isDefault:!0}},generateSessionResults:function(e){var t=e.timeStarted,n=e.type,a=e.times.reduce((function(e,t){return e+t}),0),s=N.generateSessionIndividualResults(e);return{date:t,type:n,totalTime:a,numQuestions:e.total,individual:s}},generateSessionIndividualResults:function(e){if(e.isDefault&&S.includes(e.type)){for(var t=e.type,n=y.clone(w),a=[],s=n.min;s<=n.max;s++){for(var i=[],r=n.min;r<=n.max;r++)i.push(0);a.push(i)}for(var o=0;o<e.questions.length;o++){var l=e.questions[o],u=e.times[o],c=void 0,m=void 0;["sub","div"].includes(l.oper)?(c=l.ans,m=l.num2):(c=l.num1,m=l.num2);var h=c-n.min,d=m-n.min;a[h][d]=u}return{oper:t,range:n,times:a}}},startSession:function(e){return e.timeStarted=(new Date).getTime(),e}},T=(n(204),{filterType:function(e,t){return e.filter((function(e){return e.type===t}))},getLatestDefault:function(e,t){for(var n=e.length-1;n>=0;n--)if(e[n].type===t)return e[n];return null},getHistorySorted:function(e){return e.slice().sort((function(e,t){return e.date-t.date}))},getFastest:function(e,t){for(var n=e.individual,a=[],s=0;s<n.times.length;s++)for(var i=0;i<n.times.length;i++){var r=n.times[s][i];(a.length<t||a[a.length-1].time>r)&&(a.push({question:N.generateQuestion(s+n.range.min,i+n.range.min,e.type),time:r}),a.sort((function(e,t){return e.time-t.time})),a.splice(t))}return a},getSlowest:function(e,t){for(var n=e.individual,a=[],s=0;s<n.times.length;s++)for(var i=0;i<n.times.length;i++){var r=n.times[s][i];(a.length<t||a[a.length-1].time<r)&&(a.push({question:N.generateQuestion(s+n.range.min,i+n.range.min,e.type),time:r}),a.sort((function(e,t){return t.time-e.time})),a.splice(t))}return a},getIndividualAverage:function(e,t,n,a,s){var i=T.filterType(e,t),r=0,o=0,l=!0,u=!1,c=void 0;try{for(var m,h=i[Symbol.iterator]();!(l=(m=h.next()).done);l=!0){var d=m.value;void 0!==d.individual&&(r+=1,o+=d.individual.times[n-w.min][a-w.min])}}catch(p){u=!0,c=p}finally{try{l||null==h.return||h.return()}finally{if(u)throw c}}return 0===r?null:o/r}}),x=function(e){function t(e){var n;Object(o.a)(this,t),n=Object(u.a)(this,Object(c.a)(t).call(this,e));var a,s=T.getHistorySorted(e.history);return a=0===s.length?"add":s[s.length-1].type,n.state={sessionType:a},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleStartClick",value:function(){this.props.onStartPractice(this.state.sessionType)}},{key:"handleNavigate",value:function(e){"select"===e?this.props.onNavigateSelectSession():"stats"===e?this.props.onNavigateStats():this.props.onNavigateSettings()}},{key:"handleSelectType",value:function(e){var t=e.target.value;this.setState({sessionType:t})}},{key:"render",value:function(){var e=this,t=this.state.sessionType;return s.a.createElement("div",{className:"Home"},s.a.createElement("button",{className:"Home-start",onClick:this.handleStartClick.bind(this)},"Start",s.a.createElement("br",null),"Practice"),s.a.createElement("select",{className:"Home-start-type",value:t,onChange:this.handleSelectType.bind(this)},E.map((function(e){return s.a.createElement("option",{value:e,key:e},k[e])}))),s.a.createElement("span",{className:"link",onClick:function(){return e.handleNavigate("select")}},"Custom Session"),s.a.createElement("span",{className:"link",onClick:function(){return e.handleNavigate("stats")}},"User Stats"),s.a.createElement("span",{className:"link",onClick:function(){return e.handleNavigate("settings")}},"Settings"))}}]),t}(s.a.Component),C=(n(205),["range","pool"]),O={range:"Range",pool:"Pool"},R=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={rangeType:"range",range:{min:1,max:12},pool1:y.range(1,12),pool2:y.range(1,12),type:"add",shuffle:!0,random:!1,numberQuestions:20},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleStartSession",value:function(){this.props.onStartSession({type:this.state.type,useRange:"range"===this.state.rangeType,range:this.state.range,pool1:this.state.pool1,pool2:this.state.pool2,order:this.state.random?"random":this.state.shuffle?"all-shuffle":"all",numQuestions:this.state.numberQuestions,isDefault:!1})}},{key:"handleStartSessionTemplate",value:function(e){var t=this.props.sessionTemplates[e];this.props.onStartSession(t.options)}},{key:"handleSaveTemplate",value:function(){var e={type:this.state.type,useRange:"range"===this.state.rangeType,range:this.state.range,pool1:this.state.pool1,pool2:this.state.pool2,order:this.state.random?"random":this.state.shuffle?"all-shuffle":"all",numQuestions:this.state.numberQuestions,isDefault:!1},t=window.prompt("Please enter a name for your session:");null!==t&&this.props.onAddSessionTemplate({options:e,name:t})}},{key:"handleRemoveTemplate",value:function(e){this.props.onRemoveSessionTemplate(e)}},{key:"handleSelectRangeType",value:function(e){var t=e.target.value;this.setState({rangeType:t})}},{key:"handleInputRangeAmount",value:function(e,t){var n=parseInt(e.target.value,10);n<0&&(n=1);var a=y.clone(this.state.range);t?a.min=n:a.max=n,this.setState({range:a})}},{key:"handleValidateRangeAmount",value:function(e,t){var n=parseInt(e.target.value,10);Number.isNaN(n)&&(n=NaN),n=Math.min(Math.max(n,1),1e3);var a=y.clone(this.state.range);t?(a.min=n,a.max<a.min&&(a.max=a.min)):(a.max=n,a.min>a.max&&(a.min=a.max)),this.setState({range:a})}},{key:"handleToggleRangePool",value:function(e,t){var n=e?this.state.pool1:this.state.pool2,a=n.indexOf(t);-1===a?n.push(t):n.splice(a,1),e?this.setState({pool1:n}):this.setState({pool2:n})}},{key:"handleSelectType",value:function(e){var t=e.target.value;this.setState({type:t})}},{key:"handleToggleShuffle",value:function(){this.setState({shuffle:!this.state.shuffle})}},{key:"handleToggleRandom",value:function(){this.setState({random:!this.state.random})}},{key:"handleSelectNumberQuestions",value:function(e){this.setState({numberQuestions:e})}},{key:"render",value:function(){var e,t,n=this,a=this.props.sessionTemplates,i=this.state.rangeType,r=this.state.range,o=this.state.pool1,l=this.state.pool2,u=this.state.type,c=this.state.random,m=this.state.shuffle,h=this.state.numberQuestions;return"range"===i?e=s.a.createElement("div",{className:"Select-range-range"},s.a.createElement("input",{type:"number",pattern:"[0-9]*",min:1,value:Number.isNaN(r.min)?"":r.min,onChange:function(e){return n.handleInputRangeAmount(e,!0)},onBlur:function(e){return n.handleValidateRangeAmount(e,!0)}}),s.a.createElement("input",{type:"number",pattern:"[0-9]*",min:1,value:Number.isNaN(r.max)?"":r.max,onChange:function(e){return n.handleInputRangeAmount(e,!1)},onBlur:function(e){return n.handleValidateRangeAmount(e,!1)}})):"pool"===i&&(e=[s.a.createElement(j,{key:1,pool:o,onToggleNum:function(e){return n.handleToggleRangePool(!0,e)}}),s.a.createElement(j,{key:2,pool:l,onToggleNum:function(e){return n.handleToggleRangePool(!1,e)}})]),t=c?s.a.createElement("div",{className:"Select-order-random"},[20,50,100].map((function(e){return[s.a.createElement("input",{type:"radio",value:e,checked:e===h,onChange:function(){return n.handleSelectNumberQuestions(e)}}),s.a.createElement("label",{onClick:function(){return n.handleSelectNumberQuestions(e)}},e," Questions"),s.a.createElement("br",null)]}))):s.a.createElement("div",{className:"Select-order-shuffle"},s.a.createElement("input",{type:"checkbox",checked:m,onChange:this.handleToggleShuffle.bind(this)}),s.a.createElement("label",{onClick:this.handleToggleShuffle.bind(this)},"Shuffle?")),s.a.createElement("div",{className:"Select"},s.a.createElement("div",{className:"Select-templates"},a.map((function(e,t){return s.a.createElement(I,{name:e.name,key:e.name,onStart:function(){return n.handleStartSessionTemplate(t)},onRemove:function(){return n.handleRemoveTemplate(t)}})}))),s.a.createElement("div",{className:"Select-options"},s.a.createElement("div",{className:"Select-rangetype"},s.a.createElement("select",{value:i,onChange:this.handleSelectRangeType.bind(this)},C.map((function(e){return s.a.createElement("option",{key:e,value:e},O[e])})))),e,s.a.createElement("div",{className:"Select-type"},s.a.createElement("span",null,"Type: "),s.a.createElement("select",{value:u,onChange:this.handleSelectType.bind(this)},E.map((function(e){return s.a.createElement("option",{key:e,value:e},k[e])})))),s.a.createElement("div",{className:"Select-order"},s.a.createElement("input",{type:"checkbox",checked:c,onChange:this.handleToggleRandom.bind(this)}),s.a.createElement("label",{onClick:this.handleToggleRandom.bind(this)},"Random?")),t,s.a.createElement("div",{className:"Select-submit"},s.a.createElement("button",{onClick:this.handleStartSession.bind(this)},"Start Practice"),s.a.createElement("span",{className:"link",onClick:this.handleSaveTemplate.bind(this)},"Save Settings"))))}}]),t}(s.a.Component);function I(e){return s.a.createElement("div",{className:"SessionTemplate"},s.a.createElement("button",{className:"SessionTemplate-start",onClick:e.onStart},"Start"),s.a.createElement("span",{className:"SessionTemplate-name"},e.name),s.a.createElement("button",{className:"SessionTemplate-remove",onClick:function(){window.confirm("Are you sure you want to remove this template?")&&e.onRemove()}},s.a.createElement("img",{src:d.a,alt:"X"})))}function j(e){var t=e.pool,n=e.onToggleNum;return s.a.createElement("div",{className:"RangePool"},y.range(1,20).map((function(e){return s.a.createElement("button",{key:e,className:"RangePool-button "+(t.includes(e)?"RangePool-selected":""),onClick:function(){return n(e)}},e)})))}n(206);var D=n(59),A=n.n(D),M=n(117),P=n(60),Q=n.n(P),q=n(61),B=n.n(q),H=n(62),F=n.n(H),U={version:"v2.0.0",history:[],templates:[],settings:{showProgressBar:!1}},W={verifyData:function(e){return"object"===typeof e&&void 0!==e.version&&"v2.0.0"===e.version&&void 0!==e.history&&Array.isArray(e.history)&&void 0!==e.templates&&Array.isArray(e.templates)&&void 0!==e.settings&&"object"===typeof e.settings},serialize:function(e){var t=Q.a.encode(e),n=B.a.deflateRaw(t),a=F.a.encode(n);return a},deserialize:function(e){var t;try{var n=F.a.decode(e),a=B.a.inflateRaw(n);t=Q.a.decode(a)}catch(s){throw Error("Could not parse data")}if(this.verifyData(t))return t;throw Error("Invalid data")},load:function(){var e=window.localStorage.getItem("v2.0.0");if(null===e)return y.clone(U);try{return W.deserialize(e)}catch(t){return y.clone(U)}},save:function(e){return Object(M.a)(A.a.mark((function t(){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=W.serialize(e),window.localStorage.setItem("v2.0.0",n);case 2:case"end":return t.stop()}}),t)})))()}},z=(n(236),function(e){function t(e){var n;Object(o.a)(this,t),n=Object(u.a)(this,Object(c.a)(t).call(this,e));var a=N.generateSession(e.options);return N.startSession(a),n.state={session:a,input:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleInput",value:function(e){var t=this;if(this.state.session.progress!==this.state.session.total){var n=e.target.value,a=parseInt(n,10),s=this.state.input;s=Number.isNaN(a)?null:a,this.setState({input:s},(function(){return setTimeout((function(){var e=t.state.session;if(t.state.session.progress!==t.state.session.total&&s===e.questions[e.progress].ans){var n=e.timeStarted,a=e.times.reduce((function(e,t){return e+t}),0),i=(new Date).getTime()-n-a;if(i=Math.min(i,9900),e.times.push(i),e.progress+=1,e.progress===e.total){var r=N.generateSessionResults(e);t.props.onFinishSession(r)}else t.setState({session:e,input:null})}}),100)}))}}},{key:"render",value:function(){var e=this.props.settings,t=this.state.input,n=this.state.session,a=n.questions[n.progress];return s.a.createElement("div",{className:"Math"},s.a.createElement("div",{className:"Math-session"},s.a.createElement("div",{className:"Math-question"},s.a.createElement("span",{className:"Math-oper"},b[a.oper]),s.a.createElement("div",{className:"Math-numbers"},s.a.createElement("span",null,a.num1),s.a.createElement("span",null,a.num2))),s.a.createElement("div",{className:"Math-answer"},s.a.createElement("input",{autoFocus:!0,placeholder:"?",maxLength:3,size:3,value:null!==t&&void 0!==t?t:"",onChange:this.handleInput.bind(this),type:"number"}))),e.showProgressBar?s.a.createElement("div",{className:"Math-progress"},s.a.createElement("div",{style:{width:n.progress/n.total*100+"%"}})):null)}}]),t}(s.a.Component)),L=(n(237),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={showImport:!1,showExport:!1,importText:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleToggleShowProgressBar",value:function(){var e=this.props.settings;e.showProgressBar=!e.showProgressBar,this.props.onUpdateSettings(e)}},{key:"handleImportExportToggle",value:function(e){var t=this.state.showImport,n=this.state.showExport;e?(t=!t,n=!1):(t=!1,n=!n),this.setState({showImport:t,showExport:n})}},{key:"handleExportBlur",value:function(){this.setState({showImport:!1,showExport:!1})}},{key:"handleImportEdit",value:function(e){var t=e.target.value;this.setState({importText:t})}},{key:"handleImportSettings",value:function(e){var t=this,n=e.target.value;""!==n&&(this.props.onImportSettings(n)?this.setState({importText:"Successfully imported data!"},(function(){setTimeout((function(){t.setState({showImport:!1,showExport:!1})}),5e3)})):this.setState({importText:"Invalid input"}))}},{key:"handleImportSettingsKeypress",value:function(e){13===e.keyCode&&this.handleImportSettings(e)}},{key:"handleClearData",value:function(){window.confirm("Are you sure you want to delete all your session data?\n(This cannot be undone)")&&this.props.onImportSettings(W.serialize(U))}},{key:"handleAboutClick",value:function(){alert("Math Practice was coded by MrSiliconGuy\nwith the React.js framework")}},{key:"render",value:function(){var e=this,t=this.props.settings,n=this.state.showImport,a=this.state.showExport,i=W.serialize(this.props.data);return s.a.createElement("div",{className:"Settings"},s.a.createElement("fieldset",{className:"Settings-fieldset"},s.a.createElement("legend",null,"Math Session"),s.a.createElement("input",{type:"checkbox",checked:t.showProgressBar,onChange:this.handleToggleShowProgressBar.bind(this)}),s.a.createElement("label",{onClick:this.handleToggleShowProgressBar.bind(this)},"Show Progress Bar")),s.a.createElement("fieldset",{className:"Settings-fieldset"},s.a.createElement("legend",null,"Import/Export"),s.a.createElement("span",{className:"link",onClick:function(){return e.handleImportExportToggle(!0)}},"Import"),s.a.createElement("span",{className:"link",onClick:function(){return e.handleImportExportToggle(!1)}},"Export"),s.a.createElement("span",{className:"link",onClick:this.handleClearData.bind(this)},"Clear Data"),s.a.createElement("br",null),a?s.a.createElement("textarea",{readOnly:!0,cols:25,rows:4,className:"Settings-import-export-box",onClick:function(e){return e.target.select()},onBlur:this.handleExportBlur.bind(this),value:i}):n?s.a.createElement("textarea",{cols:25,rows:4,onClick:function(e){return e.target.select()},onChange:this.handleImportEdit.bind(this),onKeyPress:this.handleImportSettingsKeypress.bind(this),onBlur:this.handleImportSettings.bind(this),className:"Settings-import-export-box",value:this.state.importText}):null),s.a.createElement("fieldset",{className:"Settings-fieldset"},s.a.createElement("legend",null,"Other"),s.a.createElement("span",{className:"link",onClick:this.handleAboutClick.bind(this)},"About"),s.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.github.com/mrsiliconguy/math-practice"},"GitHub")))}}]),t}(s.a.Component)),V=n(63),J=(n(238),function(e){function t(e){var n;Object(o.a)(this,t),n=Object(u.a)(this,Object(c.a)(t).call(this,e));var a=T.getHistorySorted(e.history)[e.history.length-1];return n.state={view:void 0===a?"add":a.type},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleChangeView",value:function(e){var t=e.target.value;this.setState({view:t})}},{key:"handleRemoveHistory",value:function(e){this.props.onRemoveHistory(e)}},{key:"render",value:function(){var e=this.state.view,t=this.props.history;return s.a.createElement("div",{className:"StatsView"},s.a.createElement("select",{value:e,onChange:this.handleChangeView.bind(this)},E.map((function(e){return s.a.createElement("option",{key:e,value:e},k[e])}))),s.a.createElement("span",null,k[e]," Attempts: ",T.filterType(t,e).length),s.a.createElement("span",null,"Total Attempts: ",t.length),s.a.createElement("div",{className:"StatsView-tables"},s.a.createElement(X,Object.assign({},this.state,this.props)),s.a.createElement(K,Object.assign({},this.state,this.props,{onRemoveHistory:this.handleRemoveHistory.bind(this)})),S.includes(e)?s.a.createElement(G,Object.assign({},this.state,this.props)):null))}}]),t}(s.a.Component));function X(e){var t=e.history,n=T.getLatestDefault(t,e.view),a=null===n||void 0===n.individual?null:s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("b",null,"Fastest Times:"),s.a.createElement("ul",null,T.getFastest(n,5).map((function(e,t){return s.a.createElement("li",{key:t},e.question.num1+b[e.question.oper]+e.question.num2+" - "+y.formatSeconds(e.time))})))),s.a.createElement("td",null,s.a.createElement("b",null,"Slowest Times:"),s.a.createElement("ul",null,T.getSlowest(n,5).map((function(e,t){return s.a.createElement("li",{key:t},e.question.num1+b[e.question.oper]+e.question.num2+" - "+y.formatSeconds(e.time))})))));return s.a.createElement("table",{className:"RecentStats"},s.a.createElement("caption",null,"Latest Session:"),s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Date"),s.a.createElement("th",null,"Time"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,null===n?"None":y.formatDate(n.date)),s.a.createElement("td",null,null===n?"None":y.formatSeconds(n.totalTime))),a))}function K(e){var t=e.history,n=T.getHistorySorted(t),a=T.filterType(n,e.view),i=a.filter((function(e){return void 0!==e.individual})),r=a.filter((function(e){return void 0===e.individual}));function o(n){window.confirm("Are you sure you want to remove this session?")&&e.onRemoveHistory(t.findIndex((function(e){return e.date===n})))}return s.a.createElement("table",{className:"TotalStats"},s.a.createElement("caption",null,"All Sessions"),s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"\xa0"),s.a.createElement("th",null,"Date"),s.a.createElement("th",null,"Time"),s.a.createElement("th",null,"Questions"),s.a.createElement("th",null,"\xa0"))),s.a.createElement("tbody",null,i.map((function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,t+1,")"),s.a.createElement("td",null,y.formatDate(e.date)),s.a.createElement("td",null,y.formatSeconds(e.totalTime)),s.a.createElement("td",null,void 0!==e.individual?"default":e.numQuestions),s.a.createElement("td",null,s.a.createElement("button",{onClick:function(){return o(e.date)}},s.a.createElement("img",{src:d.a,alt:"X"}))))})),r.map((function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,t+1,")"),s.a.createElement("td",null,y.formatDate(e.date)),s.a.createElement("td",null,y.formatSeconds(e.totalTime)),s.a.createElement("td",null,void 0!==e.individual?"default":e.numQuestions),s.a.createElement("td",null,s.a.createElement("button",{onClick:function(){return o(e.date)}},s.a.createElement("img",{src:d.a,alt:"X"}))))}))))}function G(e){var t=e.history,n=e.view,a=y.range(w.min,w.max),i=a.map((function(e){return a.map((function(a){return T.getIndividualAverage(t,n,e,a,5)}))})),r=i.reduce((function(e,t){return e.concat(t)}),[]).filter((function(e){return null!==e})).sort((function(e,t){return t-e})),o=(Math.min.apply(Math,Object(V.a)(r)),Math.max.apply(Math,Object(V.a)(r)),function(e){if(null===e)return"#777777";var t=1-Math.min(1,e/4e3),n=Math.round(160*t);return"hsl(".concat(n,", 100%, 50%)")}),l=a.map((function(e){return s.a.createElement("tr",null,s.a.createElement("th",{className:"IndividualStats-header"},e),a.map((function(t){return function(){var n=i[e-w.min][t-w.min];return s.a.createElement("td",{className:"IndividualStats-data",style:{backgroundColor:o(n)}},null===n?"N/A":(n/1e3).toFixed(1))}()})))}));return s.a.createElement("table",{className:"IndividualStats"},s.a.createElement("caption",null,"Individual Stats (Average of 5)"),s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,b[n]),a.map((function(e){return s.a.createElement("th",null,e)}))),l))}var Z=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={view:"home",data:W.load(),sessionOptions:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"updateData",value:function(e){this.setState({data:e}),W.save(e)}},{key:"handleNavigate",value:function(e){this.setState({view:e})}},{key:"handleStartDefaultSession",value:function(e){var t=N.generateDefaultSessionOptions(e);this.handleStartSession(t)}},{key:"handleTemplateAdd",value:function(e){var t=y.clone(this.state.data);t.templates.push(e),this.updateData(t)}},{key:"handleTemplateRemove",value:function(e){var t=y.clone(this.state.data);t.templates.splice(e,1),this.updateData(t)}},{key:"handleStartSession",value:function(e){this.setState({view:"math",sessionOptions:e})}},{key:"handleFinishSession",value:function(e){alert("Finished session in "+y.formatSeconds(e.totalTime));var t=this.state.data;t.history.push(e),this.setState({view:"stats",data:t}),this.updateData(t)}},{key:"handleRemoveHistory",value:function(e){var t=y.clone(this.state).data;t.history.splice(e,1),this.updateData(t)}},{key:"handleUpdateSettings",value:function(e){var t=this.state.data;t.settings=e,this.updateData(t)}},{key:"handleImportData",value:function(e){try{var t=W.deserialize(e);return this.updateData(t),!0}catch(n){return!1}}},{key:"render",value:function(){var e,t=this,n=this.state.data,a=this.state.sessionOptions,i=this.state.data.settings,r="",o=!1,l=null;return"home"===this.state.view?(r="Math Practice",o=!1,e=s.a.createElement(x,{history:n.history,onStartPractice:this.handleStartDefaultSession.bind(this),onNavigateSelectSession:function(){return t.handleNavigate("select")},onNavigateStats:function(){return t.handleNavigate("stats")},onNavigateSettings:function(){return t.handleNavigate("settings")}})):"select"===this.state.view?(r="Custom Practice",o=!0,e=s.a.createElement(R,{sessionTemplates:n.templates,onAddSessionTemplate:this.handleTemplateAdd.bind(this),onRemoveSessionTemplate:this.handleTemplateRemove.bind(this),onStartSession:this.handleStartSession.bind(this)})):"math"===this.state.view?(r=k[a.type],o=!0,l="Are you sure you want to quit practice now?",e=s.a.createElement(z,{settings:i,options:a,onFinishSession:this.handleFinishSession.bind(this)})):"stats"===this.state.view?(r="User Statistics",o=!0,e=s.a.createElement(J,{onRemoveHistory:this.handleRemoveHistory.bind(this),history:n.history})):"settings"===this.state.view&&(r="Settings",o=!0,e=s.a.createElement(L,{data:n,settings:i,onUpdateSettings:this.handleUpdateSettings.bind(this),onImportSettings:this.handleImportData.bind(this)})),s.a.createElement(p,{title:r,exitPrompt:l,onExit:function(){return t.handleNavigate("home")},showExit:o},e)}}]),t}(s.a.Component),$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(s.a.createElement(Z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/math-practice",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/math-practice","/service-worker.js");$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(t,e)}))}}()}},[[118,1,2]]]);
//# sourceMappingURL=main.26ffe317.chunk.js.map