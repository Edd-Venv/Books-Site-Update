(this.webpackJsonpbook=this.webpackJsonpbook||[]).push([[0],{13:function(e,t,a){e.exports=a(30)},18:function(e,t,a){},20:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(9),c=a.n(l),o=(a(18),a(3)),s=a.n(o),i=a(4),m=a(2),u=(a(20),a(5)),d=function(e){var t=Object(n.useContext)(J),a=Object(m.a)(t,1)[0],l=Object(n.useState)(""),c=Object(m.a)(l,2),o=c[0],u=c[1];function d(){return(d=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.accesstoken){e.next=15;break}return e.prev=1,e.next=4,fetch("http://localhost:4000/userName",{method:"GET",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(a.accesstoken)}});case 4:return e.next=6,e.sent.json();case 6:t=e.sent,u(t.name),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:e.next=16;break;case 15:return e.abrupt("return",u("GUEST"));case 16:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[a.accesstoken]),r.a.createElement("span",null,r.a.createElement("i",{style:{fontSize:"1.5rem",color:"black",fontWeight:"bold",paddingLeft:"0.5rem"}},o))},p=a(11),b=function(e){var t=e.logOutCallback,a=Object(n.useContext)(J),l=Object(m.a)(a,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav",style:{fontSize:"1.7rem"}},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(u.a,{className:"nav-link",to:"/"},"Home",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(u.a,{className:"nav-link",to:"/protected"},"MyBooks",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item active"},l.accesstoken?null:r.a.createElement(u.a,{className:"nav-link",to:"/login"},"Login",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item active"},l.accesstoken?null:r.a.createElement(u.a,{className:"nav-link",to:"/register"},"Register",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item active"},l.accesstoken?r.a.createElement("p",{className:"nav-link",onClick:t,style:{paddingTop:"1.3rem"},id:"logoutButton"},"LogOut"):null),r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"https://github.com/Edd-Venv/Book-App",target:"_blank",rel:"noopener noreferrer"},"GitHub",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item active"},l.accesstoken?r.a.createElement(u.a,{className:"nav-link",to:"/settings"},r.a.createElement(p.a,null)):null))),r.a.createElement("h4",{style:{color:"black"}},r.a.createElement("i",null,"Welcome"),r.a.createElement(d,null))))},E=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(m.a)(c,2),d=o[0],p=o[1],E=function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://18.222.115.53:4000/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({person_name:a,password:d})});case 3:return e.next=5,e.sent.json();case 5:(n=e.sent).error?console.log(n.error):(console.log(n.message),Object(u.c)("/"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){"name"===e.currentTarget.name?l(e.currentTarget.value.toUpperCase()):p(e.currentTarget.value)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{displayLogin:"dontDisplayLoginForm"}),r.a.createElement("div",{className:"login-wrapper"},r.a.createElement("form",{onSubmit:E,style:{width:"30%",margin:"0 auto",font:"2rem"}},r.a.createElement("h3",{style:{textAlign:"center"}},"REGISTER"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"USER NAME"),r.a.createElement("input",{className:"form-control",value:a,onChange:h,type:"text",name:"name",placeholder:"User Name",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"PASSWORD"),r.a.createElement("input",{className:"form-control",value:d,onChange:h,type:"password",name:"password",autoComplete:"current-password",placeholder:"Password",required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Register"))))},h=function(){var e=Object(n.useContext)(J),t=Object(m.a)(e,1)[0],a=Object(n.useState)([]),l=Object(m.a)(a,2),c=l[0],o=l[1];function u(){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://18.222.115.53:4000/protected",{method:"GET",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t.accesstoken)}});case 2:return e.next=4,e.sent.json();case 4:(a=e.sent).data&&o([a.data]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return E.apply(this,arguments)}function E(){return(E=Object(i.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t.accesstoken){e.next=4;break}return e.next=4,fetch("http://18.222.115.53:4000/protected",{method:"POST",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(t.accesstoken)},body:JSON.stringify({book_title:a[0],book_key:a[1]})});case 4:u(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){u()}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{displayLogin:"dontDisplayLoginForm"}),r.a.createElement("br",null),t.accesstoken?t.accesstoken&&void 0===c[0]?r.a.createElement("div",{className:"spinner-grow text-dark",role:"status",style:{margin:"auto"}},r.a.createElement("span",{className:"sr-only"},"Loading...")):t.accesstoken&&0===c[0].length?r.a.createElement("h2",{style:{textAlign:"center",fontWeight:"bold"}},"You Don't Have Books Saved."):r.a.createElement("div",{className:"flex-container-header"},c[0].map((function(e){return r.a.createElement("div",{key:e.book_key,style:{width:"20%"}},r.a.createElement("img",{alt:"loading",src:e.book_image,className:"img-thumbnail",style:{width:"100%"},id:"box"}),r.a.createElement("button",{onClick:p.bind(void 0,[e.book_title,e.book_key])},"Delete"))}))):r.a.createElement("h2",{style:{textAlign:"center",fontWeight:"bold"}},"You need to login"))},f=r.a.memo((function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),l=a[0],c=a[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onAddSearch(l),c("")},style:{marginLeft:"38%"}},r.a.createElement("span",{className:"form-inline"},r.a.createElement("input",{className:"form-control",type:"text/number",onChange:function(e){c(e.target.value)},value:l,placeholder:"Book Title",style:{width:"35%",fontSize:"1.5rem"},id:"input",required:!0}),r.a.createElement("button",{className:"btn btn-dark",type:"submit"},r.a.createElement("i",{className:"fas fa-search"}))))})),g=function(e,t){switch(t.type){case"SEARCH":return{isLoaded:!0,summary:t.summary,data:t.data,display:"show"};case"DISPLAY":return{isLoaded:!1,summary:e.summary,data:[],display:t.display};default:throw new Error}},v=function(e,t){switch(t.type){case"GET":return{isLoaded:t.isLoaded,data:t.data};default:throw new Error("History Error")}},y=function(e,t){switch(t.type){case"GET":return{isLoaded:t.isLoaded,data:t.data,ContainerVisibilty:t.ContainerVisibilty};default:throw new Error("Best Seller Error")}},N=function(e,t){switch(t.type){case"GET":return{isLoaded:t.isLoaded,data:t.data};default:throw new Error}},O=r.a.memo((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{color:"white",marginLeft:"30%",width:"5%",height:"auto",font:"1.3rem"}},"Sorry, Book Not In DataBase"))})),k=r.a.memo((function(e){var t=e.summary,a=e.data;return r.a.createElement("div",{style:{width:"60%",marginLeft:"30%",height:"auto"}},r.a.createElement("div",{className:"card mb-3",style:{paddingLeft:"1.5%",maxWidth:"100%",height:"auto"}},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{style:{width:"30%",margin:"0 0.4rem"}},r.a.createElement("img",{src:a.coverUrl,className:"img-thumbnail",alt:"...loading",style:{width:"100%"}})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title",style:{marginLeft:"2%"}},a.name),r.a.createElement("p",{className:"card-text",style:{fontSize:"1.3rem",width:"100%"}},r.a.createElement("strong",null,"Description : "),t,"."),r.a.createElement("p",{className:"card-text",style:{fontSize:"1.3rem",width:"100%"}},r.a.createElement("strong",null,"Release Date : "),a.onsale),r.a.createElement("p",{className:"card-text",style:{fontSize:"1.3rem",width:"100%"}},r.a.createElement("strong",null,"ISBN : "),a.isbnDisplay))))))})),w=function(){var e=Object(n.useReducer)(g,{isLoaded:!1,summary:"Dummy DATA",data:[],display:"hide"}),t=Object(m.a)(e,2),a=t[0],l=t[1],c=a.display,o=a.isLoaded,u=a.summary,d=a.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{onAddSearch:function(e){!function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://18.222.115.53:4000/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({search_text:e})}).then((function(e){return e.json()})).then((function(e){l({type:"SEARCH",isLoaded:!0,data:e.data.data.results[0],summary:e.data.data.results[0].flapCopy.replace(/<p>/g," ").replace(/<b>/g," ").replace(/p>/g," ").replace(/</g," ").replace(/i>/g," ").replace(/b>/g," ").replace(/br> br>/g," ").replace(/--/g," ").replace(/&#160;&#160;/g," ").replace(/&#8212;/g," ").replace(/&rsquo;/g," ").replace(/&ldquo;/g," ").replace(/&rdquo;/g," ").replace(/&mdash;/g," ").replace(/&#160;/g," ").replace(/&bull;/g," ").replace(/,&#160; /g," ").replace(/;&#160;/g," ").replace(/&bull;&#160;/g," ").substring(0,250),display:"show"})}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("div",{className:c},r.a.createElement("span",{onClick:function(){l({type:"DISPLAY",display:"hide"})},className:"close",style:{color:"red",fontWeight:"bold",fontSize:"3em",marginRight:"29%"}},"\xd7"),!0===o&&void 0===d?r.a.createElement(O,null):r.a.createElement(k,{isLoaded:o,summary:u,data:d}))))},j={isLoaded:!1,data:[],ContainerVisibilty:""},x=Object(n.createContext)(j),S=function(e){var t=e.children,a=Object(n.useReducer)(y,j),l=Object(m.a)(a,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){fetch("http://18.222.115.53:4000/bestSellers").then((function(e){return e.json()})).then((function(e){o({type:"GET",isLoaded:!0,data:e.data.data.titles.slice(6,9),ContainerVisibilty:""})}))}),[]),r.a.createElement(x.Provider,{value:{isLoaded:c.isLoaded,data:c.data,ContainerVisibilty:c.ContainerVisibilty}},t)},C=(a(27),function(){var e=Object(n.useContext)(x),t=e.isLoaded,a=e.data;return r.a.createElement(r.a.Fragment,null,!1===t?r.a.createElement("div",{className:"spinner-grow text-dark",role:"status",style:{margin:"0 auto"}},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",{className:"flex-container-best-sellers"},a.map((function(e){return r.a.createElement("div",{className:"container",key:e.isbn},r.a.createElement("img",{alt:"loading",src:e._links[1].href,className:"img-thumbnail",style:{width:"100%"},id:"box"}),r.a.createElement("div",{className:"overlay-container"},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"text"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),e.author,r.a.createElement("hr",{style:{margin:"0 auto"}}),"Pages: ",e.pages,r.a.createElement("br",null),"Price: ",e.price[1].amount," ",e.price[1].currencyCode,r.a.createElement("br",null),e.consumerFormat,r.a.createElement("br",null),e.version))))}))))}),L={isLoaded:!1,data:[]},T=Object(n.createContext)(L),D=function(e){var t=e.children,a=Object(n.useReducer)(v,L),l=Object(m.a)(a,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){fetch("http://18.222.115.53:4000/history").then((function(e){return e.json()})).then((function(e){o({type:"GET",isLoaded:!0,data:e.data.data.titles})}))}),[]),r.a.createElement(T.Provider,{value:{isLoaded:c.isLoaded,data:c.data.slice(0,4)}},t)},P=(a(28),r.a.memo((function(){var e=Object(n.useContext)(T),t=e.isLoaded,a=e.data,l=Object(n.useContext)(J),c=Object(m.a)(l,1)[0];function o(e){return u.apply(this,arguments)}function u(){return(u=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.accesstoken){e.next=4;break}return e.abrupt("return",console.log("You need to login to Save Book."));case 4:return e.next=6,fetch("http://18.222.115.53:4000/",{method:"POST",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(c.accesstoken)},body:JSON.stringify({book_image:t[0],book_key:t[1],book_title:t[2],book_author:t[3],book_price:t[4],book_currencyCode:t[5],book_pages:t[6]})});case 6:return e.next=8,e.sent.json();case 8:(a=e.sent).error?console.log(a.error):console.log(a.message);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,!1===t?r.a.createElement("div",{className:"spinner-grow text-dark",role:"status",style:{margin:"0 auto"}},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",{className:"flex-container-header"},a.map((function(e){return r.a.createElement("div",{key:e.isbn,style:{width:"20%"}},r.a.createElement("img",{alt:"loading",src:e._links[1].href,className:"img-thumbnail",style:{width:"100%"},id:"box"}),r.a.createElement("button",{onClick:o.bind(void 0,[e._links[1].href,e.isbn,e.title,e.author,e.price[0].amount,e.price[0].currencyCode,e.pages])},"save"))}))))}))),A={isLoaded:!1,data:[]},_=Object(n.createContext)(A),R=function(e){var t=e.children,a=Object(n.useReducer)(N,A),l=Object(m.a)(a,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){fetch("http://18.222.115.53:4000/sundayReads").then((function(e){return e.json()})).then((function(e){o({type:"GET",isLoaded:!0,data:e.data.data.titles.slice(0,5)})}))}),[]),r.a.createElement(_.Provider,{value:{isLoaded:c.isLoaded,data:c.data}},t)},F=(a(29),function(){var e=Object(n.useContext)(_),t=e.isLoaded,a=e.data;return r.a.createElement(r.a.Fragment,null,!1===t?r.a.createElement("div",{className:"spinner-grow text-dark",role:"status",style:{margin:"0 auto"}},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",{className:"flex-container-top-six"},a.map((function(e){return r.a.createElement("div",{key:e.isbn,style:{width:"30%",margin:"0 0.2em"}},r.a.createElement("img",{alt:"loading",src:e._links[1].href,className:"img-thumbnail",style:{width:"100%"},id:"box"}))}))))});var B=r.a.memo((function(){return r.a.createElement("div",{style:{maxWidth:"1200px",minWidth:"50%",margin:"0 auto"}},r.a.createElement(w,null),r.a.createElement("br",null),r.a.createElement("h2",{style:{textAlign:"center",fontSize:"2.1rem",fontWeight:"bolder",color:"whitesmoke"}},"BEST SELLER TITLES",r.a.createElement("hr",{style:{width:"22.5%",margin:"0 auto"}})),r.a.createElement("br",null),r.a.createElement(S,null,r.a.createElement(C,null)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",{style:{textAlign:"center",margin:"0 auto",fontSize:"2.1rem",fontWeight:"bolder",color:"whitesmoke"}},"HISTORY TITLES",r.a.createElement("hr",{style:{width:"22.5%",margin:"0 auto"}})),r.a.createElement("br",null),r.a.createElement(D,null,r.a.createElement(P,null)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",{style:{textAlign:"center",fontSize:"2.1rem",fontWeight:"bolder",color:"whitesmoke"}},"SUNDAY READS",r.a.createElement("hr",{style:{width:"22.5%",margin:"0 auto"}})),r.a.createElement("br",null),r.a.createElement(R,null,r.a.createElement(F,null)))})),z=r.a.memo((function(e){return e.loading?r.a.createElement("div",null,"Loading ..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{path:"/",logOutCallback:e.logOutCallback}),r.a.createElement(B,null))})),W=a(12);var U=function(e){var t=Object(n.useContext)(J),a=Object(m.a)(t,1)[0],l=Object(n.useState)(""),c=Object(m.a)(l,2),o=c[0],u=c[1],d=Object(n.useState)(""),p=Object(m.a)(d,2),b=p[0],E=p[1],h=function(){var t=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("http://18.222.115.53:4000/settings/changeName",{method:"POST",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(a.accesstoken)},body:JSON.stringify({old_name:o,new_name:b})});case 3:return t.next=5,t.sent.json();case 5:(r=t.sent).error?console.log(r.error):console.log(r.message),e.logOutCallback();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(e){"old Name"===e.target.name?u(e.target.value.toUpperCase()):E(e.target.value.toUpperCase())};return r.a.createElement("form",{onSubmit:h,style:{width:"30%",margin:"0 auto",font:"2rem"}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"old Name"},"OLD USERNAME"),r.a.createElement("input",{className:"form-control",value:o,type:"text/number",name:"old Name",placeholder:"Old Name",onChange:f,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"new Name"},"NEW USERNAME"),r.a.createElement("input",{className:"form-control",value:b,type:"text/number",name:"new Name",placeholder:"New Name",onChange:f,required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))};var q=function(e){var t=Object(n.useContext)(J),a=Object(m.a)(t,1)[0],l=Object(n.useState)(""),c=Object(m.a)(l,2),o=c[0],u=c[1],d=Object(n.useState)(""),p=Object(m.a)(d,2),b=p[0],E=p[1],h=function(){var t=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("http://18.222.115.53:4000/settings/changePassword",{method:"POST",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(a.accesstoken)},body:JSON.stringify({old_password:o,new_password:b})});case 3:return t.next=5,t.sent.json();case 5:(r=t.sent).error?console.log(r.error):console.log(r.message),e.logOutCallback();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(e){"old password"===e.target.name?u(e.target.value):E(e.target.value)};return r.a.createElement("form",{onSubmit:h,style:{width:"30%",margin:"0 auto",font:"2rem"}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"old password"},"OLD PASSWORD"),r.a.createElement("input",{className:"form-control",value:o,placeholder:"Old Password",type:"password",onChange:f,name:"old password",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"new password"},"NEW PASSWORD"),r.a.createElement("input",{className:"form-control",name:"new password",value:b,placeholder:"New Password",type:"password",onChange:f,required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))};var G=function(e){var t=Object(n.useContext)(J),a=Object(m.a)(t,1)[0],l=function(){var t=Object(i.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://18.222.115.53:4000/deleteUser",{method:"POST",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(a.accesstoken)}});case 2:return t.next=4,t.sent.json();case 4:(n=t.sent).error?console.log(n.error):console.log(n.message),e.logOutCallback();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c={textAlign:"center"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement("h3",{style:c},"Change Name"),r.a.createElement(U,{logOutCallback:e.logOutCallback}),r.a.createElement("h3",{style:c},"Change Password"),r.a.createElement(q,{logOutCallback:e.logOutCallback}),r.a.createElement("h3",null,"DELETE Profile"),r.a.createElement("button",{className:"btn btn-primary",onClick:l},"DELETE USER",r.a.createElement(W.a,null)))},I=r.a.memo((function(e){var t=Object(n.useContext)(J),a=Object(m.a)(t,2),l=(a[0],a[1]),c=Object(n.useState)(""),o=Object(m.a)(c,2),d=o[0],p=o[1],E=Object(n.useState)(""),h=Object(m.a)(E,2),f=h[0],g=h[1],v=function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://18.222.115.53:4000/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({person_name:d,password:f})});case 3:return e.next=5,e.sent.json();case 5:(a=e.sent).accesstoken?(l({accesstoken:a.accesstoken}),Object(u.c)("/")):console.log(a.error);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){"name"===e.target.name?p(e.target.value.toUpperCase()):g(e.target.value)},N=e.displayLogin;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement("div",{className:N},r.a.createElement("form",{onSubmit:v,style:{width:"30%",margin:"0 auto",font:"2rem"}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"USER NAME"),r.a.createElement("input",{className:"form-control",value:d,onChange:y.bind(void 0),type:"text",name:"name",placeholder:"User Name",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"PASSWORD"),r.a.createElement("input",{className:"form-control",value:f,onChange:y,type:"password",name:"password",autoComplete:"current-password",placeholder:"Password",required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login"))))})),J=r.a.createContext([]);var H=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),o=Object(m.a)(c,2),d=o[0],p=o[1],b=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://18.222.115.53:4000/logout",{method:"POST",credentials:"include"});case 2:l({}),Object(u.c)("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://18.222.115.53:4000/refresh_token",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}});case 2:return e.next=4,e.sent.json();case 4:t=e.sent,l({accesstoken:t.accesstoken}),p(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),d?r.a.createElement("div",{className:"spinner-grow text-dark",role:"status",style:{margin:"auto"}},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(r.a.Fragment,null,r.a.createElement(J.Provider,{value:[a,l]},r.a.createElement("div",{className:"app"},r.a.createElement(u.b,{id:"router"},r.a.createElement(I,{path:"login"}),r.a.createElement(E,{path:"register"}),r.a.createElement(h,{path:"protected"}),r.a.createElement(G,{path:"settings",logOutCallback:b}),r.a.createElement(z,{path:"/",loading:d,logOutCallback:b})))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d7fdf294.chunk.js.map