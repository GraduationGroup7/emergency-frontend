(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,a,t){e.exports=t(252)},183:function(e,a,t){},252:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),l=t.n(c),o=(t(183),t(19)),s=t(15),i=t(9),m=t.n(i),u=t(17),d=t(6),b=t(318),f=t(295),p=t(317),E=t(85),g=t(131),v=t.n(g),h=function(){var e=Object(u.a)(m.a.mark(function e(a,t,n,r){var c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({method:a.toLowerCase(),url:"".concat(E.api,"/").concat(t),headers:{Accept:"*/*","Content-Type":r||"application/json",Authorization:localStorage.getItem("authToken")?"Bearer "+localStorage.getItem("authToken"):""},data:n});case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}},e)}));return function(a,t,n,r){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(m.a.mark(function e(a,t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("post","chat_rooms/".concat(a,"/"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(m.a.mark(function e(a){var t,n,r=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:{},n=new URLSearchParams(t).toString(),e.next=4,h("get","chat_rooms/".concat(a,"/messages?").concat(n));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("post","auth/customer/verify",a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("get","admin/tables");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("get","user/emergencies");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("post","auth/login",a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("post","emergencies",a,"multipart/form-data");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(m.a.mark(function e(a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("post","auth/customer/register",a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("get","user");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(m.a.mark(function e(a,t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("get","".concat(a,"?").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}();function I(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)(function(){Object(u.a)(m.a.mark(function e(){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:a=e.sent,c(a.data.data.map(function(e,a){return console.log(e),r.a.createElement(o.b,{key:a,to:"tables/".concat(e.name)},"".concat(e.name))}));case 4:case"end":return e.stop()}},e)}))()},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{bg:"light",expand:"lg"},r.a.createElement(f.a,null,r.a.createElement(b.a.Brand,{href:"/"},"React-Bootstrap"),r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"me-auto"},t)))),r.a.createElement(s.a,null))}var A=t(296),P=t(297);function T(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{variant:"danger"},r.a.createElement(A.a.Heading,null,"Permission Error!"),r.a.createElement("p",null,"You don't have permission to view that page, you can press the button below to Login or Register!"),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement(o.b,{to:"/"},r.a.createElement(P.a,{onClick:function(){},variant:"outline-danger"},"Authenticate me!")))))}function B(){var e=Object(s.f)().pathname.split("/")[2];localStorage.getItem("authToken");return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex flex-column main-area-minus-bot-nav m-auto overflow-auto"},r.a.createElement(s.a,null))," ",r.a.createElement(b.a,{bg:"light",expand:"lg",fixed:"bottom",className:"user-bottom-navbar"},r.a.createElement(p.a,{className:"navbar__item__container",id:"change-flex-to-row"},r.a.createElement(p.a.Item,{className:(e?"":"nav__item__active")+" nav__item"},r.a.createElement(o.b,{to:"",className:"link__dark"},r.a.createElement("i",{className:(e?"bi-house":"bi-house-fill")+" bi  fa-lg"}))),r.a.createElement(p.a.Item,{className:("chat"===e?"nav__item__active":"")+" nav__item"},r.a.createElement(o.b,{to:"chat",className:"link__dark"},r.a.createElement("i",{className:("chat"===e?"bi-chat-left-dots-fill":"bi-chat-left-dots")+" bi  fa-lg"}))),r.a.createElement(p.a.Item,{className:("profile"===e?"nav__item__active":"")+" nav__item"},r.a.createElement(o.b,{to:"profile",className:"link__dark"},r.a.createElement("i",{className:"bi bi-person-circle fa-lg"}))),r.a.createElement(p.a.Item,{className:("call-help"===e?"nav__item__active":"")+" nav__item"},r.a.createElement(o.b,{to:"call-help",className:"link__dark"},r.a.createElement("i",{className:"bi-upload bi  fa-lg"}))),r.a.createElement(p.a.Item,{className:"nav__item"},r.a.createElement(o.b,{to:"/",className:"link__dark"},r.a.createElement("i",{className:"bi bi-box-arrow-right fa-lg"})))))," "))}var F=t(298),L=t(255);function D(){var e=Object(s.g)(),a=Object(n.useState)([{name:"New Reports",path:"",icon:"bi bi-exclamation-circle"},{name:"Archive",path:"archive",icon:"bi bi-inboxes"}]),t=Object(d.a)(a,2),c=t[0],l=(t[1],Object(n.useState)(!1)),i=Object(d.a)(l,2),m=i[0],u=i[1],b=Object(s.f)().pathname.split("/")[1];return r.a.createElement("div",{className:"sidebar__container"},r.a.createElement("div",{className:"sidebar__main__content"},r.a.createElement("div",{className:"logo__container"},r.a.createElement("img",{className:"logo__image",src:"/Images/logo-svg.svg",alt:""}),r.a.createElement("div",{className:"logo__text"},"YARDIM")),r.a.createElement("div",{className:"username__container d-flex align-items-center"},r.a.createElement(F.a,{className:"username__avatar",bg:"primary"},"AA"),r.a.createElement("div",null,"Admin Adminson")),r.a.createElement("div",{className:"page__section__container"},r.a.createElement("div",{className:"page__section__title"},"PAGES")),c.map(function(e,a){return r.a.createElement(o.b,{to:e.path,className:(e.path===b||""===e.path&&"authority"===b?"sidebar__link__active":"")+" sidebar__link d-flex",key:a},r.a.createElement("i",{className:e.icon+" sidebar__link__icon"}),r.a.createElement("div",null,"".concat(e.name)))}),r.a.createElement("div",{className:"page__section__container"},r.a.createElement("div",{className:"page__section__title"},"AGENT OPERATIONS")),r.a.createElement("div",{onClick:function(){return u(!m)},"aria-expanded":m,"aria-controls":"sidebar__agents__collapse",className:(m?"sidebar__link__collapse__toggle__open":"")+" sidebar__link d-flex align-items-center"},r.a.createElement("i",{className:"bi bi-exclamation-circle sidebar__link__icon"}),r.a.createElement("div",null,"Agents"),r.a.createElement("i",{className:(m?"side__link__arrow__open ":"side__link__arrow__closed ")+"bi bi-chevron-right sidebar__link__icon side__link__arrow"})),r.a.createElement("div",{className:"sidebar__link__collapse"},r.a.createElement(L.a,{in:m},r.a.createElement("div",{id:"sidebar__agents__collapse"},r.a.createElement(o.b,{to:"create-agent",className:"sidebar__link d-flex align-items-center"},r.a.createElement("i",{className:"bi bi-circle sidebar__link__icon__circle"}),r.a.createElement("div",null,"Create Agent")),r.a.createElement(o.b,{to:"agent-list",className:"sidebar__link d-flex align-items-center"},r.a.createElement("i",{className:"bi bi-circle sidebar__link__icon__circle"}),r.a.createElement("div",null,"All Agents")))))),r.a.createElement("div",{onClick:function(){return e("/")},className:"logout__area__container d-flex"},r.a.createElement("i",{className:"bi bi-box-arrow-right logout__icon"}),r.a.createElement("div",null,"Logout")))}function G(){return r.a.createElement("div",{className:"authority__container"},r.a.createElement(D,null),r.a.createElement(s.a,null))}var R=t(316),M=t(37),H=t(8),U=t(91),W=Object(U.b)({name:"userInfo",initialState:{value:{}},reducers:{updateUser:function(e,a){e.value=Object(H.a)({},e.value,a.payload)}}}),Y=W.actions.updateUser,z=W.reducer,q=Object(U.b)({name:"errorInfo",initialState:{value:{}},reducers:{updateError:function(e,a){e.value=a.payload}}}),J=q.actions.updateError,V=q.reducer;function $(){var e=Object(M.c)(function(e){return e.errorInfo.value}),a=Object(M.b)();return r.a.createElement(A.a,{show:void 0!=e.techError,variant:"danger",onClose:function(){return a(J({}))},dismissible:!0},r.a.createElement(A.a.Heading,null,"Oh snap! You got an error!"),r.a.createElement("p",null,"".concat(e.techError,", ").concat(e.descriptiveError," ")))}var K=function(){var e=Object(s.g)(),a=Object(M.b)(),t=Object(M.c)(function(e){return e.userInfo.value}),c=Object(n.useState)(""),l=Object(d.a)(c,2),i=l[0],b=l[1],f=Object(n.useState)(""),p=Object(d.a)(f,2),E=p[0],g=p[1];Object(n.useEffect)(function(){localStorage.removeItem("authToken")},[]);var v=function(){var n=Object(u.a)(m.a.mark(function n(r){var c,l;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,n.next=4,w({email:i,password:E});case 4:return c=(c=n.sent).data,console.log("this is the response: ",c),localStorage.setItem("authToken",c.accessToken),n.next=10,S();case 10:l=(l=n.sent).data,a(Y(l.data)),Ye.subscribe("private-notification.".concat(t.id)).bind("notification",function(e){console.log("I am insideeeee"),console.log("bind data ",e),new Notification("Message",{body:"this finally worked"})}),e("/".concat(c.userData.type,"/")),console.log("Login was Successful"),n.next=23;break;case 19:n.prev=19,n.t0=n.catch(1),console.log("unsuccesful Login Attempt ",n.t0),a(J({techError:n.t0.message,descriptiveError:n.t0.response.data.data}));case 23:case"end":return n.stop()}},n,null,[[1,19]])}));return function(e){return n.apply(this,arguments)}}();return r.a.createElement("div",{className:"login__parent__container"},r.a.createElement("div",{className:"login__container"},r.a.createElement("img",{src:"/Images/logo-svg.svg",alt:"",className:"logo"}),r.a.createElement("div",{className:"login__form__container"},r.a.createElement("div",{className:"main__header"},r.a.createElement("h1",{className:"main__header__title"},"Login"),r.a.createElement("p",{className:"main-header__text"},"Enter your login details to sign in to your account")),r.a.createElement(R.a,{className:"form",onSubmit:v},r.a.createElement(R.a.Group,{className:"mb-3",controlId:"formBasicEmail"},r.a.createElement(R.a.Label,{className:"form__label"},"Email address"),r.a.createElement(R.a.Control,{className:"form__input",type:"email",placeholder:"Enter email",value:i,onChange:function(e){return b(e.target.value)}}),r.a.createElement(R.a.Text,{className:"text-muted form__label"},"We'll never share your email with anyone else.")),r.a.createElement(R.a.Group,{className:"mb-3",controlId:"formBasicPassword"},r.a.createElement(R.a.Label,{className:"form__label"},"Password"),r.a.createElement(R.a.Control,{className:"form__input",type:"password",placeholder:"Password",value:E,onChange:function(e){return g(e.target.value)}})),r.a.createElement(P.a,{className:"mb-2 submit__button",variant:"primary",type:"submit"},"Submit"),r.a.createElement(P.a,{className:"mb-2 submit__button",variant:"primary",onClick:function(e){console.log(Notification.permission),Notification.requestPermission(),"granted"===Notification.permission&&console.log("notification access is granted")}},"Get Notifications")),r.a.createElement(o.b,{to:"/user/register",className:"link__register"},r.a.createElement("p",null,"Register a New User")))))};function Q(){return r.a.createElement("div",null,"Page 404")}var X=t(221),Z=t.n(X),ee=t(321);function ae(){var e=Object(s.g)(),a=Object(n.useState)([]),t=Object(d.a)(a,2),c=t[0],l=t[1];Object(n.useEffect)(function(){Object(u.a)(m.a.mark(function e(){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:a=e.sent,l(a.data.data),console.log(a.data.data);case 5:case"end":return e.stop()}},e)}))()},[]);var o=c.map(function(a){return r.a.createElement(ee.a,{key:a.id,border:"dark",style:{width:"18rem"},onClick:function(t){e("/user/chatroom/".concat(a.chat_room_id))}},r.a.createElement(ee.a.Header,null,"Emergency Chat Room"),r.a.createElement(ee.a.Body,null,r.a.createElement(ee.a.Title,null,"Emergency ".concat(a.id)),r.a.createElement(ee.a.Text,null,a.description)))});return r.a.createElement(r.a.Fragment,null,o)}function te(){var e=Object(M.c)(function(e){return e.userInfo.value});return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,{style:{width:"100vw"}},r.a.createElement(ee.a.Header,null,"User Profile"),r.a.createElement(ee.a.Body,null,r.a.createElement(ee.a.Title,null,e.name),r.a.createElement("hr",null),r.a.createElement("dl",{className:"row"},r.a.createElement("dt",{className:"col-3"},"Email"),r.a.createElement("dd",{className:"col-9"},e.email),r.a.createElement("dt",{className:"col-3"},"Type"),r.a.createElement("dd",{className:"col-9"},e.type)))))}function ne(){var e=Object(M.b)(),a=Object(n.useState)(""),t=Object(d.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)(""),i=Object(d.a)(o,2),b=i[0],f=i[1],p=Object(n.useState)(""),E=Object(d.a)(p,2),g=E[0],v=E[1],h=Object(n.useState)(""),_=Object(d.a)(h,2),y=_[0],j=_[1],N=Object(n.useState)(""),O=Object(d.a)(N,2),w=O[0],x=O[1],S=Object(n.useState)(""),C=Object(d.a)(S,2),I=C[0],A=C[1],T=Object(s.g)();Object(n.useEffect)(function(){},[]);var B=function(){var a=Object(u.a)(m.a.mark(function a(t){var n,r;return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),n={first_name:y,last_name:w,email:c,password:b,phone_number:g,password_confirmation:b,dob:I,type:"user"},a.prev=2,a.next=5,k(n);case 5:r=(r=a.sent).data,T("/user/sms-verify/".concat(r.data.request_id,"/").concat(r.data.user.id)),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(2),console.log("error",a.t0),e(J({techError:a.t0.message,descriptiveError:a.t0.response.data.data}));case 14:case"end":return a.stop()}},a,null,[[2,10]])}));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"general-mobile-container registration-form-container"},r.a.createElement("h1",{className:"registration-form-title"},"Create an Account"),r.a.createElement(R.a,{onSubmit:B},r.a.createElement(R.a.Group,{className:"mb-3",controlId:"formBasicEmail"},r.a.createElement(R.a.Label,null,"Email address"),r.a.createElement(R.a.Control,{type:"email",placeholder:"Enter email",value:c,onChange:function(e){l(e.target.value)}}),r.a.createElement(R.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(R.a.Group,{className:"mb-3",controlId:"formBasicFirstName"},r.a.createElement(R.a.Label,null,"First Name"),r.a.createElement(R.a.Control,{type:"text",placeholder:"Enter First Name",value:y,onChange:function(e){j(e.target.value)}})),r.a.createElement(R.a.Group,{className:"mb-3",controlId:"formBasicLastName"},r.a.createElement(R.a.Label,null,"Last Name"),r.a.createElement(R.a.Control,{type:"text",placeholder:"Enter Last Name",value:w,onChange:function(e){return x(e.target.value)}})),r.a.createElement(R.a.Group,{className:"mb-3",controlId:"formBasicPhoneNumber"},r.a.createElement(R.a.Label,null,"Phone Number"),r.a.createElement(R.a.Control,{type:"number",placeholder:"Enter Phone Number",value:g,onChange:function(e){return v(e.target.value)}}),r.a.createElement(R.a.Text,null,"Make sure the number starts with 90")),r.a.createElement(R.a.Group,{className:"mb-3",controlId:"formBasicPassword"},r.a.createElement(R.a.Label,null,"Password"),r.a.createElement(R.a.Control,{type:"password",placeholder:"Password",value:b,onChange:function(e){return f(e.target.value)}})),r.a.createElement(R.a.Group,{className:"mb-3",controlId:"formBasicDoB"},r.a.createElement(R.a.Label,null,"Date of Birth"),r.a.createElement(R.a.Control,{type:"date",placeholder:"Enter Date",value:I,onChange:function(e){return A(e.target.value)}})),r.a.createElement(P.a,{variant:"primary",type:"submit"},"Register"))))}var re=t(3),ce=t(319);function le(e){return r.a.createElement(ce.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",keyboard:!1}),r.a.createElement(ce.a.Header,{closeButton:!0},r.a.createElement(ce.a.Title,{id:"contained-modal-title-vcenter"},"Operation Success!")),r.a.createElement(ce.a.Body,null,r.a.createElement("p",null,"Your operation was performed successfully. You can now close this prompt!")),r.a.createElement(ce.a.Footer,null,r.a.createElement(P.a,{onClick:e.onHide},"Close")))}t(223);var oe=t(161),se=t(222),ie=t(253);function me(e,a){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,a){if(!e)return;if("string"===typeof e)return ue(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ue(e,a)}(e))||a&&e&&"number"===typeof e.length){t&&(e=t);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,o=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){o=!0,c=e},f:function(){try{l||null==t.return||t.return()}finally{if(o)throw c}}}}function ue(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var de=["Fire","Medical","Crime","Accidents","Other"];t(131).default;function be(){var e=Object(n.useState)(!1),a=Object(d.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),o=Object(d.a)(l,2),s=(o[0],o[1],Object(n.useState)(!1)),i=Object(d.a)(s,2),b=i[0],f=i[1],p=Object(n.useState)([]),E=Object(d.a)(p,2),g=E[0],v=E[1],h=Object(n.useState)(""),_=Object(d.a)(h,2),y=_[0],j=_[1],N=Object(n.useState)(0),O=Object(d.a)(N,2),w=O[0],k=O[1],S=Object(n.useState)(""),C=Object(d.a)(S,2),I=C[0],T=C[1],B=r.a.useState({lat:null,lng:null}),F=Object(d.a)(B,2),L=F[0];F[1];Object(n.useEffect)(function(){console.log(g)},[g]);var D=Object(oe.a)(),G=D.register,M=D.handleSubmit,H=function(){var e=Object(u.a)(m.a.mark(function e(a){var t,n,r,l,o,s,i;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a),n=new Date,r=new FormData,l=me(g);try{for(l.s();!(o=l.n()).done;)s=o.value,console.log(s),r.append(s.name,s)}catch(m){l.e(m)}finally{l.f()}return t={latitude:L.lat,longitude:L.lng},Object(re.a)(t,"latitude",1),Object(re.a)(t,"longitude",2),Object(re.a)(t,"description",y),Object(re.a)(t,"time",n.getTime()),Object(re.a)(t,"emergency_type_id",w),i=t,Object.keys(i).forEach(function(e){r.append(e,i[e])}),e.prev=7,e.next=10,x(r);case 10:f(!0),c(!1),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(7),console.log(e.t0),c(!1),T(e.t0.message);case 19:case"end":return e.stop()}},e,null,[[7,14]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,I&&r.a.createElement(A.a,{variant:"danger",onClose:function(){return T("")},dismissible:!0},r.a.createElement(A.a.Heading,null,"Oh snap! You got an error!"),r.a.createElement("p",null,"detailed error is: ",I)),r.a.createElement("div",{className:"main-content d-flex justify-content-center flex-column align-items-center m-auto"},r.a.createElement("h1",null,"Emergency Assitance Needed?"),r.a.createElement("h5",null,"Press the button to report an emergency"),r.a.createElement(P.a,{variant:"primary",onClick:function(){return c(!0)},className:"main-content__button"},"Report an Emergency")),r.a.createElement(le,{show:b,onHide:function(){return f(!1)}}),r.a.createElement(ie.a,{show:t,onHide:function(){return c(!1)},placement:"bottom",className:"h-auto"},r.a.createElement(ie.a.Header,{closeButton:!0},r.a.createElement(ie.a.Title,null,"Send Report")),r.a.createElement(ie.a.Body,null,r.a.createElement(R.a,{onSubmit:M(H)},r.a.createElement(R.a.Group,{className:"mb-3"},r.a.createElement(R.a.Select,{"aria-label":"Default select example",value:w,onChange:function(e){return k(e.target.value)}},de.map(function(e,a){return r.a.createElement("option",{key:Object(se.a)(),value:a},e)})),r.a.createElement(R.a.Text,null,"Choose the Kind of Emergency")),r.a.createElement(R.a.Group,{controlId:"formFileMultiple",className:"mb-3"},r.a.createElement(R.a.Control,Object.assign({type:"file",multiple:!0},G("files"),{onChange:function(e){return v(e.target.files)}})),r.a.createElement(R.a.Text,null,"You can Upload Multiple files")),r.a.createElement(R.a.Group,{className:"mb-3",controlId:"formBasicDescription"},r.a.createElement(R.a.Control,{type:"text",placeholder:"Emergency Description",value:y,onChange:function(e){return j(e.target.value)}}),r.a.createElement(R.a.Text,null,"Please be as descriptive as possible")),r.a.createElement(P.a,{type:"submit"},"Submit form"))))))}function fe(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],c=a[1],l=Object(s.g)(),i=Object(n.useState)(""),b=Object(d.a)(i,2),f=b[0],p=b[1],E=Object(s.h)(),g=E.id,v=E.request_id;function h(){return(h=Object(u.a)(m.a.mark(function e(a){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={request_id:v,code:t,id:g},e.prev=2,e.next=5,j(n);case 5:e.sent,l("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),p(e.t0.response.data?"".concat(e.t0.message,", ").concat(e.t0.response.data.message):e.t0.message);case 12:case"end":return e.stop()}},e,null,[[2,9]])}))).apply(this,arguments)}return r.a.createElement("div",{className:"general-mobile-container sms-verify-container"},r.a.createElement($,{errorMsg:f,setErrorMsg:p}),r.a.createElement("img",{src:"/Images/logo-svg.svg",alt:"",className:"logo"}),r.a.createElement(R.a,{onSubmit:function(e){return h.apply(this,arguments)}},r.a.createElement(R.a.Group,{className:"mb-3",controlId:"formBasicSmsVerification"},r.a.createElement(R.a.Label,null,"Enter The Code You Recieved"),r.a.createElement(R.a.Control,{type:"number",placeholder:"Enter Code",value:t,onChange:function(e){return c(e.target.value)}})),r.a.createElement(P.a,{variant:"primary",type:"submit"},"Verify and Sign-up")),r.a.createElement(o.b,{className:"label acct-label",to:"/"},"Cancel"))}function pe(){var e=Object(s.f)().pathname.split("/")[2];return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null),r.a.createElement(b.a,{bg:"light",expand:"lg",fixed:"bottom",className:"user-bottom-navbar w-100"},r.a.createElement(p.a,{className:"navbar__item__container",id:"change-flex-to-row"},r.a.createElement(p.a.Item,{className:(e?"":"nav__item__active")+" nav__item"},r.a.createElement(o.b,{to:"",className:"link__dark"},r.a.createElement("i",{className:(e?"bi-house":"bi-house-fill")+" bi  fa-lg"}))),r.a.createElement(p.a.Item,{className:("chat"===e?"nav__item__active":"")+" nav__item"},r.a.createElement(o.b,{to:"chat",className:"link__dark"},r.a.createElement("i",{className:("chat"===e?"bi-chat-left-dots-fill":"bi-chat-left-dots")+" bi  fa-lg"}))),r.a.createElement(p.a.Item,{className:("profile"===e?"nav__item__active":"")+" nav__item"},r.a.createElement(o.b,{to:"profile",className:"link__dark"},r.a.createElement("i",{className:"bi bi-person-circle fa-lg"}))),r.a.createElement(p.a.Item,{className:("call-help"===e?"nav__item__active":"")+" nav__item"},r.a.createElement(o.b,{to:"call-help",className:"link__dark"},r.a.createElement("i",{className:("call-help"===e?"bi-telephone-fill":"bi-telephone")+" bi  fa-lg"}))),r.a.createElement(p.a.Item,{className:"nav__item"},r.a.createElement(o.b,{to:"/",className:"link__dark"},r.a.createElement("i",{className:"bi bi-box-arrow-right fa-lg"})))))," "),")")}var Ee=t(299),ge=t(220),ve=t(162),he=t.n(ve),_e=t(135),ye=t.n(_e),je=t(230),Ne=t.n(je),Oe=t(231),we=t.n(Oe),xe=t(163),ke=t.n(xe),Se=t(233),Ce=t.n(Se),Ie=t(234),Ae=t.n(Ie),Pe=t(232),Te=t.n(Pe);function Be(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"m-auto"},r.a.createElement("h1",{className:"text-center mb-5"},"Emergency Numbers"),r.a.createElement(f.a,{className:"d-grid justify-content-center"},r.a.createElement(Ee.a,null,r.a.createElement(ge.a,null,r.a.createElement(P.a,{className:"d-flex justify-content-center align-items-center",href:"tel:155",variant:"secondary"},r.a.createElement(he.a,{className:"emergency-number-icons"})),r.a.createElement("p",null,"Police")),r.a.createElement(ge.a,null,r.a.createElement(P.a,{className:"d-flex justify-content-center align-items-center",href:"tel:199",variant:"secondary"},r.a.createElement(ye.a,{className:"emergency-number-icons"})),r.a.createElement("p",null,"Fire"))),r.a.createElement(Ee.a,{className:"gy-5"},r.a.createElement(ge.a,null,r.a.createElement(P.a,{className:"d-flex justify-content-center align-items-center",href:"tel:112",variant:"secondary"},r.a.createElement(Ne.a,{className:"emergency-number-icons"})),r.a.createElement("p",null,"Ambulance")),r.a.createElement(ge.a,null,r.a.createElement(P.a,{className:"d-flex justify-content-center align-items-center",href:"tel:177",variant:"secondary"},r.a.createElement(we.a,{className:"emergency-number-icons"})),r.a.createElement("p",null,"Forest Fires"))),r.a.createElement(Ee.a,null,r.a.createElement(ge.a,null,r.a.createElement(P.a,{className:"d-flex justify-content-center align-items-center",href:"tel:158",variant:"secondary"},r.a.createElement(ke.a,{className:"emergency-number-icons"})),r.a.createElement("p",null,"Coast Guard")),r.a.createElement(ge.a,null,r.a.createElement(P.a,{className:"d-flex justify-content-center align-items-center",href:"tel:166",variant:"secondary"},r.a.createElement(Te.a,{className:"emergency-number-icons"})),r.a.createElement("p",null,"Meteorology"))),r.a.createElement(Ee.a,null,r.a.createElement(ge.a,null,r.a.createElement(P.a,{className:"d-flex justify-content-center align-items-center",href:"tel:188",variant:"secondary"},r.a.createElement(Ce.a,{className:"emergency-number-icons"})),r.a.createElement("p",null,"Electrical Faults")),r.a.createElement(ge.a,null,r.a.createElement(P.a,{className:"d-flex justify-content-center align-items-center",href:"tel:161",variant:"secondary"},r.a.createElement(Ae.a,{className:"emergency-number-icons"})),r.a.createElement("p",null,"Phone issues"))))))}var Fe=t(16),Le=t(235);function De(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),o=Object(d.a)(l,2),i=o[0],b=o[1],f=Object(n.useState)({page:1,perPage:0,total:0}),p=Object(d.a)(f,2),E=p[0],g=p[1];Object(M.c)(function(e){return e.userInfo});Object(n.useEffect)(function(){return Ye.subscribe("private-chat.".concat(v)).bind("message",function(e){var a,t;console.log("I got called"),a=e.user.name,t=e.chatMessage.message,c(function(e){return[{user_name:a,message:t}].concat(Object(Fe.a)(e))})}),console.log(Ye),function(){Ye.unsubscribe("chat.".concat(v))}},[]);var v=Object(s.h)().chatroom_id;function h(){return(h=Object(u.a)(m.a.mark(function e(){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(H.a)({},E,{page:E.page+1}),e.prev=1,e.next=4,y(v,a);case 4:n=(n=e.sent).data.data,console.log(n),c([].concat(Object(Fe.a)(t),Object(Fe.a)(n.data))),g({page:n.current_page,perPage:n.per_page,total:n.total}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[1,11]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){Object(u.a)(m.a.mark(function e(){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(v);case 3:a=(a=e.sent).data.data,console.log(a),c(a.data),g({page:a.current_page,perPage:a.per_page,total:a.total}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}))()},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"scrollableDiv",style:{overflow:"auto",display:"flex",flexDirection:"column-reverse"}},r.a.createElement(Le.a,{dataLength:t.length,next:function(){return h.apply(this,arguments)},style:{display:"flex",flexDirection:"column-reverse"},hasMore:t.length<E.total,loader:r.a.createElement("h4",null,"Loading..."),scrollableTarget:"scrollableDiv",inverse:!0},t.map(function(e,a){return r.a.createElement("div",{key:a},"".concat(e.user_name,": ").concat(e.message," ").concat(e.id?e.id:a))}))),r.a.createElement(R.a,{onSubmit:function(e){e.preventDefault(),_(v,{message:i})}},r.a.createElement(R.a.Group,{className:"mb-3",controlId:"formBasicPassword"},r.a.createElement(R.a.Control,{type:"text",placeholder:"Enter your Msg here",value:i,onChange:function(e){b(e.target.value)}})),r.a.createElement(P.a,{variant:"primary",type:"submit"},"Submit")))}function Ge(){var e=function(){var e=Object(M.c)(function(e){return e.userInfo.value}),a=localStorage.getItem("authToken"),t=Object(s.f)().pathname.split("/"),n=t[1];return console.log(t),console.log(n),""!==n&&"login"!==n&&"register"!==n&&n?a?e.type===n||(console.log("user is trying to access a page he is not allowed to"),!1):(console.log("user doesnt have an authToken"),!1):(console.log("pages that dont require authentication"),!0)}(),a=Object(n.useState)(e),t=Object(d.a)(a,2),c=t[0],l=t[1];return Object(n.useEffect)(function(){l(e)},[e]),r.a.createElement(r.a.Fragment,null,c?r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(s.a,null)):r.a.createElement(T,null))}var Re=t(219),Me=t(315);function He(e){var a=e.route,t=Object(n.useState)([]),c=Object(d.a)(t,2),l=c[0],o=c[1],i=Object(n.useState)([]),b=Object(d.a)(i,2),f=b[0],p=b[1],E=Object(n.useState)(1),g=Object(d.a)(E,2),v=g[0],h=g[1],_=Object(n.useState)({}),y=Object(d.a)(_,2),j=y[0],N=y[1],O=Object(n.useState)({page:v}),w=Object(d.a)(O,2),x=w[0],k=w[1],S=Object(s.g)(),I=Object(s.h)().table_name;console.log(I);var A=Object(n.useState)(!0),P=Object(d.a)(A,2),T=P[0],B=P[1];return Object(n.useEffect)(function(){console.log("i ran"),Object(u.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),t=new URLSearchParams(Object(H.a)({},x,{page:v},j)).toString(),e.next=5,C(a||I,t);case 5:n=e.sent,p(n.data.data),console.log("NO of Rows "+n.data.data.length),o(n.data.columns),k(Object(H.a)({},n.data.meta,{perPage:parseInt(n.data.meta.per_page),page:v})),B(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[0,13]])}))()},[v,j,I]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w-100",style:{height:"93%"}},r.a.createElement(Me.a,{rows:f,columns:l,pageSize:15,rowsPerPageOptions:[15],checkboxSelection:!0,paginationMode:"server",loading:T,sortingMode:"server",onSortModelChange:function(e,a){console.log("model",e),console.log("details",a),N({orderBy:e[0].field,orderByDirection:e[0].sort})},onRowClick:function(e,a,t){console.log("rowParams",e),S("/".concat(I,"/").concat(e.id))},rowCount:x.total,onPageChange:function(e,a){h(e+1)}})))}function Ue(){return r.a.createElement("div",{className:"dashboard__container"},r.a.createElement("div",{className:"authority__card card__height"},r.a.createElement("div",{className:"d-flex align-items-center mb-3 justify-content-between"},r.a.createElement("div",{className:"authority__card__title"},"DASHBOARD"),r.a.createElement("div",{className:"search__area__container d-flex"},r.a.createElement(Re.a,{size:"sm"}),r.a.createElement(P.a,{className:"table__search__button",variant:"secondary",size:"sm"},"Search"))),r.a.createElement(He,{route:"emergencies"})))}function We(){return r.a.createElement("div",null,"EmergencyAssignment")}var Ye=new Z.a("f06fc2e0e3a78a7ca79b",{cluster:"eu",encrypted:!0,authEndpoint:"".concat(E.api,"/pusher/auth"),auth:{headers:{Authorization:localStorage.getItem("authToken")?"Bearer "+localStorage.getItem("authToken"):""}}});var ze=function(){return Object(n.useEffect)(function(){console.log("App rerendered")},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",element:r.a.createElement(Ge,null)},r.a.createElement(s.b,{index:!0,element:r.a.createElement(K,null)}),r.a.createElement(s.b,{path:"login",element:r.a.createElement(K,null)}),r.a.createElement(s.b,{path:"register",element:r.a.createElement(ne,null)}),r.a.createElement(s.b,{path:"user/sms-verify/:request_id/:id",element:r.a.createElement(fe,null)}),r.a.createElement(s.b,{path:"user",element:r.a.createElement(pe,null)},r.a.createElement(s.b,{index:!0,element:r.a.createElement(be,null)}),r.a.createElement(s.b,{path:"profile",element:r.a.createElement(te,null)}),r.a.createElement(s.b,{path:"call-help",element:r.a.createElement(Be,null)}),r.a.createElement(s.b,{path:"chat",element:r.a.createElement(ae,null)}),r.a.createElement(s.b,{path:"chatroom/:chatroom_id",element:r.a.createElement(De,null)}),r.a.createElement(s.b,{path:"*",element:r.a.createElement(Q,null)})),r.a.createElement(s.b,{path:"agent",element:r.a.createElement(B,null)},r.a.createElement(s.b,{index:!0,element:r.a.createElement(We,null)}),r.a.createElement(s.b,{path:"profile",element:r.a.createElement(te,null)}),r.a.createElement(s.b,{path:"report",element:r.a.createElement(be,null)}),r.a.createElement(s.b,{path:"chat",element:r.a.createElement(ae,null)}),r.a.createElement(s.b,{path:"chatroom/:chatroom_id",element:r.a.createElement(De,null)}),r.a.createElement(s.b,{path:"*",element:r.a.createElement(Q,null)})),r.a.createElement(s.b,{path:"authority",element:r.a.createElement(G,null)},r.a.createElement(s.b,{index:!0,element:r.a.createElement(Ue,null)})),r.a.createElement(s.b,{path:"admin",element:r.a.createElement(I,null)},r.a.createElement(s.b,{path:"tables/:table_name",element:r.a.createElement(He,null)})),r.a.createElement(s.b,{path:"*",element:r.a.createElement(Q,null)})))))},qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Je(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(248);var Ve=t(237),$e=t.n(Ve),Ke=t(43),Qe=t(72),Xe={key:"root",storage:$e.a},Ze=Object(Ke.b)({errorInfo:V,userInfo:z}),ea=Object(Qe.g)(Xe,Ze),aa=Object(U.a)({reducer:ea,middleware:function(e){return e({serializableCheck:{ignoredActions:[Qe.a,Qe.f,Qe.b,Qe.c,Qe.d,Qe.e]}})}}),ta=t(238),na=Object(Qe.h)(aa);l.a.render(r.a.createElement(o.a,{basename:"/emergency-frontend"},r.a.createElement(M.a,{store:aa},r.a.createElement(ta.a,{persistor:na},r.a.createElement(ze,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/emergency-frontend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/emergency-frontend","/service-worker.js");qe?(function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Je(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):Je(a,e)})}}()},85:function(e){e.exports={api:"https://bashar.rocks",kaanApi:"http://192.168.57.224:8000/api"}}},[[176,2,1]]]);
//# sourceMappingURL=main.19f2cd89.chunk.js.map