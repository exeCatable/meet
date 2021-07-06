(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(21),s=n.n(o),c=(n(28),n(7)),i=n.n(c),l=n(8),u=n(2),h=n(6),d=n(4),f=n(3),p=(n(30),n(0)),v=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showMore:!1},e.handleShowHideButton=function(){!0===e.state.showMore?e.setState({showMore:!1}):e.setState({showMore:!0})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;new Date(t.start.dateTime).toDateString();return Object(p.jsxs)("div",{className:"event",children:[Object(p.jsx)("h1",{className:"name",children:t.summary}),Object(p.jsxs)("p",{className:"EventDate",children:["Start: ",t.start.dateTime," - Time Zone: ",t.start.timeZone]}),Object(p.jsxs)("p",{children:["@ ",t.summary," / ",t.location]}),this.state.showMore&&Object(p.jsxs)("div",{className:"event-details",children:[Object(p.jsx)("h2",{children:"About event:"}),Object(p.jsx)("a",{href:t.htmlLink,children:"See Details on Google Calendar"}),Object(p.jsx)("p",{children:t.description})]}),Object(p.jsx)("button",{className:"details-btn",onClick:function(){return e.handleShowHideButton()},children:this.state.showMore?"Hide Details":"Show Details"})]})}}]),n}(r.Component),m=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(p.jsxs)("ul",{className:"EventList",children:[console.log("event list call"),e.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(v,{event:e})},e.id)}))]})}}]),n}(r.Component),b=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color}},r.color=null,r}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"Alert",children:Object(p.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),g=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).color="blue",r}return n}(b),j=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).color="red",r}return n}(b),w=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).color="orange",r}return n}(b),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var r=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==r.length)return e.setState({query:n,suggestions:r,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e.state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)(g,{text:this.state.infoText}),Object(p.jsx)("input",{type:"text",className:"city",value:this.state.query,placeholder:"Enter City",onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(p.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[console.log("map"),console.log(this.state),this.state.suggestions.map((function(t){return Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(p.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(r.Component),x=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={numberOfEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;return n<1||n>32?e.setState({errorText:"Please choose a number between 1 and 32",numberOfEvents:""}):(e.setState({numberOfEvents:n,errorText:""}),void e.props.updateEvents("",n))},e}return Object(h.a)(n,[{key:"render",value:function(){this.state.numberOfEvents;return Object(p.jsxs)("div",{className:"numberOfEvents",children:[Object(p.jsxs)("form",{children:[Object(p.jsx)("label",{htmlFor:"numberOfEvent",children:"Number of Events"}),Object(p.jsx)("input",{type:"number",className:"EventsNumber",value:this.state.numberOfEvents,onChange:this.handleInputChanged})]}),Object(p.jsx)(j,{text:this.state.errorText})]})}}]),n}(r.Component);n(32);var y=function(e){return e.showWelcomeScreen?Object(p.jsxs)("div",{className:"WelcomeScreen",children:[Object(p.jsx)("h1",{children:"Welcome to the Meet app"}),Object(p.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(p.jsx)("div",{className:"button_cont",align:"center",children:Object(p.jsxs)("div",{class:"google-btn",children:[Object(p.jsx)("div",{class:"google-icon-wrapper",children:Object(p.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\r\no.svg",alt:"Google sign-in"})}),Object(p.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(p.jsx)("b",{children:"Sign in with google"})})]})}),Object(p.jsx)("a",{href:"https://Minatore0712.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},k=n(23),S=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],T=n(11),E=n.n(T),C=n(9),W=n.n(C),N=function(e){console.log("api call");var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},Z=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,a,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return W.a.done(),e.abrupt("return",S);case 4:if(t=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},navigator.onLine){e.next=10;break}return n=localStorage.getItem("lastEvents"),W.a.done(),console.log(n),e.abrupt("return",n?JSON.parse(n).events:[]);case 10:return e.next=12,I();case 12:if(!(r=e.sent)){e.next=22;break}return t(),a="https://jecxbj0rsh.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+r,e.next=18,E.a.get(a);case 18:return(o=e.sent).data&&(s=N(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(s))),W.a.done(),e.abrupt("return",o.data.events);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://jecxbj0rsh.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return r=e.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,a,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,Z(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,E.a.get("https://jecxbj0rsh.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",a&&A(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=(n(50),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={events:[],locations:[],numberOfEvents:32,currentCity:"all",warningText:"",showWelcomeScreen:void 0},e.updateEvents=function(t,n){var r;M().then((function(a){"all"===t&&0===n?r=a:"all"!==t&&0===n?r=a.filter((function(e){return e.location===t})):""===t&&n>0?r=a.slice(0,n):""===t&&""===n&&(r=a),e.setState({events:r,numberOfEvents:n})}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,a,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,Z(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,r=new URLSearchParams(window.location.search),a=r.get("code"),this.setState({showWelcomeScreen:!(a||n)}),navigator.onLine?this.setState({warningText:""}):this.setState({warningText:"Cached data is being displayed."}),(a||n)&&this.mounted&&M().then((function(e){o.mounted&&o.setState({events:e.slice(0,o.state.numberOfEvents),locations:N(e)})}));case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"updateNumberOfEvents",value:function(e){this.setState({numberOfEvents:e});var t=this.state.currentCity;this.updateEvents(t,e)}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(p.jsx)("div",{className:"App"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("p",{className:"title",children:[Object(p.jsx)("span",{children:"meet"})," App"]}),Object(p.jsx)(w,{text:this.state.warningText}),Object(p.jsx)(O,{locations:this.state.locations,updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(p.jsx)(x,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(p.jsx)(m,{events:this.state.events}),Object(p.jsx)(y,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){I()}})]})}}]),n}(r.Component)),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),o(e),s(e)}))},J=n(22);s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");D?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):q(t,e)}))}}(),B(),J.config("8bbbc742ccd3403cbbfb82585e977757").install()}},[[52,1,2]]]);
//# sourceMappingURL=main.eaf4255c.chunk.js.map