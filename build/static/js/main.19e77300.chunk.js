(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{24:function(e,t,n){e.exports={auth:"AuthForm_auth__MPw6W",control:"AuthForm_control__2fVSU",actions:"AuthForm_actions__1VNhY",toggle:"AuthForm_toggle__21tnB"}},32:function(e,t,n){e.exports={form:"ProfileForm_form__2xGgc",control:"ProfileForm_control__2YUZH",action:"ProfileForm_action__opJ_6"}},36:function(e,t,n){e.exports={header:"MainNavigation_header__2lqQ1",logo:"MainNavigation_logo__1TgMx"}},41:function(e,t,n){e.exports={profile:"UserProfile_profile__gQOnH"}},50:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c,r=n(38),a=n.n(r),s=(n(50),n(0)),o=n(11),i=n(16),u=n(4),d="GET_ITEMS_FETCH",j="GET_ITEMS_SUCCESS",l="GET_ITEMS_FAILURE",b="POST_ITEM_FETCH",O="POST_ITEM_SUCCESS",p="POST_ITEM_FAILURE",h="PUT_ITEM_FETCH",f="PUT_ITEM_SUCCESS",m="PUT_ITEM_FAILURE",x="DELETE_ITEM_FETCH",g="DELETE_ITEM_SUCCESS",y="DELETE_ITEM_FAILURE",v="SIGN_IN_FETCH",_="SIGN_IN_SUCCESS",k="SIGN_IN_FAILURE",E="SIGN_UP_FETCH",S="SIGN_UP_SUCCESS",T="SIGN_UP_FAILURE",C="CHANGE_PASSWORD_FETCH",N="CHANGE_PASSWORD_SUCCESS",w="CHANGE_PASSWORD_FAILURE",L="GET_USER_DATA_FETCH",I="GET_USER_DATA_SUCCESS",P="GET_USER_DATA_FAILURE",R="LOG_OUT",U="CLEAR_USER_RESPONSE",F=function(e){return{type:h,payload:e}},A={type:R},D=n(36),M=n.n(D),H=n(1),G=function(){var e=Object(o.c)((function(e){return e.usersReducer.isLoggedIn})),t=Object(o.b)();return Object(H.jsxs)("header",{className:M.a.header,children:[Object(H.jsx)(i.a,{to:"/",children:Object(H.jsx)("div",{className:M.a.logo,children:"Habit Tracker"})}),Object(H.jsx)("nav",{children:Object(H.jsxs)("ul",{children:[!e&&Object(H.jsx)("li",{children:Object(H.jsx)(i.a,{to:"/auth",children:"Login"})}),e&&Object(H.jsx)("li",{children:Object(H.jsx)(i.a,{to:"/profile",children:"Profile"})}),e&&Object(H.jsx)("li",{children:Object(H.jsx)("button",{onClick:function(){document.cookie="token=; expires=Sat, 20 Jan 1980 12:00:00 UTC",t(A)},children:"Logout"})})]})})]})},q=function(e){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(G,{}),Object(H.jsx)(u.b,{})]})},J=n(8),Y=n(32),B=n.n(Y),W=function(){var e=Object(o.c)((function(e){return e.usersReducer.token})),t=Object(o.c)((function(e){return e.usersReducer.isLoading})),n=Object(o.c)((function(e){return e.usersReducer.response})),c=Object(s.useState)(e),r=Object(J.a)(c,1)[0],a=Object(o.b)(),i=Object(u.p)(),d=Object(s.useState)(null),j=Object(J.a)(d,2),l=j[0],b=j[1],O=Object(s.useState)(!1),p=Object(J.a)(O,2),h=p[0],f=p[1];Object(s.useEffect)((function(){if(r!==e){f(!0);setTimeout((function(){i("/")}),1e3)}}),[e,i]);var m=Object(s.useRef)(),x=Object(s.useRef)();return Object(H.jsxs)(H.Fragment,{children:[n.error&&Object(H.jsxs)("h3",{children:["Error: ",n.error.message]}),l&&Object(H.jsx)("h3",{children:l}),t||h&&Object(H.jsx)("h3",{children:" "}),h&&Object(H.jsx)("h3",{children:"Password has been changed."}),Object(H.jsxs)("form",{className:B.a.form,children:[Object(H.jsxs)("div",{className:B.a.control,children:[Object(H.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(H.jsx)("input",{type:"password",id:"new-password",minLength:"7",ref:m}),Object(H.jsx)("label",{htmlFor:"new-password-confirm",children:"Confirm New Password"}),Object(H.jsx)("input",{type:"password",id:"new-password-confirm",minLength:"7",ref:x})]}),Object(H.jsx)("div",{className:B.a.action,children:t?"Working on it...":Object(H.jsx)("button",{onClick:function(t){if(t.preventDefault(),m.current.value===x.current.value){b(null);var n={token:e,password:m.current.value};a({type:C,payload:n})}else b("Passwords entered in the fields must be same")},children:"Change Password"})})]})]})},z=n(41),V=n.n(z),K=function(){return Object(H.jsxs)("section",{className:V.a.profile,children:[Object(H.jsx)("h2",{children:"Your User Profile"}),Object(H.jsx)(W,{})]})},Q=n(24),Z=n.n(Q),X=function(){var e=Object(o.c)((function(e){return e.usersReducer.isLoggedIn})),t=Object(o.c)((function(e){return e.usersReducer.isLoading})),n=Object(o.c)((function(e){return e.usersReducer.response})),c=Object(o.b)(),r=Object(s.useState)(!0),a=Object(J.a)(r,2),i=a[0],d=a[1],j=Object(u.p)(),l=Object(s.useRef)(),b=Object(s.useRef)();return Object(s.useEffect)((function(){e&&j("/")}),[e,j]),Object(H.jsxs)("section",{className:Z.a.auth,children:[Object(H.jsx)("h1",{children:n.error&&"Error: ".concat(n.error.message)}),e?Object(H.jsx)("h1",{children:"Logged In. Redirecting..."}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("h1",{children:i?"Login":"Sign Up"}),Object(H.jsxs)("form",{children:[Object(H.jsxs)("div",{className:Z.a.control,children:[Object(H.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(H.jsx)("input",{type:"email",id:"email",required:!0,ref:l})]}),Object(H.jsxs)("div",{className:Z.a.control,children:[Object(H.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(H.jsx)("input",{type:"password",id:"password",required:!0,ref:b})]}),Object(H.jsxs)("div",{className:Z.a.actions,children:[t?Object(H.jsx)("h1",{children:"Loading..."}):Object(H.jsx)("button",{onClick:function(e){e.preventDefault();var t={email:l.current.value,password:b.current.value};c(i?{type:v,payload:t}:function(e){return{type:E,payload:e}}(t))},children:i?"Login":"Create Account"}),Object(H.jsx)("button",{type:"button",className:Z.a.toggle,onClick:function(){d((function(e){return!e}))},children:i?"Create new account":"Login with existing account"})]})]})]})]})},$=function(){return Object(H.jsx)(X,{})},ee=n(9),te=n.n(ee),ne=n(14),ce=[{id:"1",name:"Mon"},{id:"2",name:"Tue"},{id:"3",name:"Wed"},{id:"4",name:"Thu"},{id:"5",name:"Fri"},{id:"6",name:"Sat"},{id:"7",name:"Sun"}],re=function(e){var t=e.style,n=e.method,c=e.setIsEdit,r=e.id,a=e.item,i=Object(o.c)((function(e){return e.usersReducer.uid})),u=Object(o.c)((function(e){return e.usersReducer.token})),d=Object(o.c)((function(e){return e.itemsReducer.isLoading})),j=Object(o.c)((function(e){return e.itemsReducer.response})),l=Object(o.b)(),O=Object(s.useState)(!1),p=Object(J.a)(O,2),h=p[0],f=p[1],m=Object(s.useState)([]),x=Object(J.a)(m,2),g=x[0],y=x[1],v=Object(s.useState)(!1),_=Object(J.a)(v,2),k=_[0],E=_[1],S=Object(s.useRef)(),T=ce,C=function(){S.current.value.length<3?E(!1):E(!0)},N=function(e){if(e.preventDefault(),k&&g.length>0)switch(n){case"POST":var t={method:"POST",uid:i,token:u,content:S.current.value,days:g};return l({type:b,payload:t});case"EDIT":var c={method:"EDIT",name:r,uid:i,token:u,content:S.current.value,days:g};return l(F(c))}},w=function(e){f(!h),y(T.map((function(e){return e.name}))),h&&y([]),C()},L=function(e){var t=e.target,n=t.name,c=t.checked;y(c?[].concat(Object(ne.a)(g),[n]):g.filter((function(e){return e!==n}))),C()};Object(s.useEffect)((function(){void 0!==a&&(y(Object.values(a)[0].days),S.current.value=Object.values(a)[0].content,7===Object.values(a)[0].days.length&&f(!0))}),[]);var I=Object(s.useRef)(!1);return Object(s.useEffect)((function(){I.current&&c&&!d&&c(!1),I.current=!0}),[d]),Object(H.jsx)(H.Fragment,{children:"WIDE"===t?Object(H.jsxs)("section",{className:"".concat(te.a.control," ").concat(te.a.formborder),children:[d&&Object(H.jsx)("span",{children:"Loading..."}),j.error&&Object(H.jsx)("span",{children:"Error: ".concat(j.error.message)}),Object(H.jsxs)("form",{children:[Object(H.jsxs)("div",{className:te.a.control,children:[Object(H.jsx)("label",{htmlFor:"content",children:"Habit Name"}),Object(H.jsx)("input",{type:"content",id:"content",required:!0,ref:S,onChange:C})]}),Object(H.jsxs)("div",{className:te.a.control,children:[Object(H.jsx)("div",{className:te.a.dcall,children:Object(H.jsxs)("div",{className:te.a.dcheckbox,children:[Object(H.jsx)("label",{htmlFor:"check-all",children:"Select All Days"}),Object(H.jsx)("input",{id:"check-all",type:"checkbox",onChange:w,checked:7===g.length})]})}),Object(H.jsx)("div",{className:te.a.dchecklist,children:T.map((function(e){return Object(H.jsxs)("div",{className:te.a.dcheckbox,children:[Object(H.jsx)("label",{htmlFor:e.id,children:e.name}),Object(H.jsx)("input",{id:e.id,name:e.name,type:"checkbox",onChange:L,checked:g.includes(e.name)})]},e.id)}))})]}),Object(H.jsx)("div",{className:te.a.actions,children:d?Object(H.jsx)("h1",{children:"Loading..."}):Object(H.jsx)("button",{onClick:N,disabled:!k||g.length<1,children:"SUBMIT"})})]})]}):Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)("form",{children:[Object(H.jsxs)("div",{className:te.a.control,children:[Object(H.jsx)("label",{htmlFor:"content",children:"Habit Name"}),Object(H.jsx)("input",{type:"content",id:"content",placeholder:Object.values(a)[0].content,onChange:C,required:!0,ref:S})]}),Object(H.jsxs)("div",{className:te.a.control,children:[Object(H.jsx)("div",{className:te.a.dcall,children:Object(H.jsxs)("div",{className:te.a.dcheckbox,children:[Object(H.jsx)("label",{htmlFor:"check-all",children:"Select All Days"}),Object(H.jsx)("input",{id:"check-all",type:"checkbox",onChange:w,checked:7===g.length})]})}),Object(H.jsx)("div",{className:te.a.dchecklist,children:T.map((function(e){return Object(H.jsxs)("div",{className:te.a.dcheckbox,children:[Object(H.jsx)("label",{htmlFor:e.id,children:e.name}),Object(H.jsx)("input",{id:e.id,name:e.name,type:"checkbox",onChange:L,checked:g.includes(e.name)})]},e.id)}))})]}),Object(H.jsx)("div",{className:"".concat(te.a.actions," ").concat(te.a.flex," ").concat(te.a.center),children:d?Object(H.jsx)("h1",{children:"Loading..."}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("button",{onClick:function(e){e.preventDefault(),c((function(e){return!e}))},style:{margin:"1rem 0"},children:"CANCEL"}),Object(H.jsx)("button",{onClick:N,disabled:!k||g.length<1,style:{margin:"1rem 0"},children:"SUBMIT"})]})})]})})})},ae=["title","titleId"];function se(){return se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},se.apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ie(e,t){var n=e.title,r=e.titleId,a=oe(e,ae);return s.createElement("svg",se({ref:t,"aria-labelledby":r},a),n?s.createElement("title",{id:r},n):null,c||(c=s.createElement("path",{d:"M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"})))}var ue=s.forwardRef(ie),de=(n.p,function(e){var t=e.deleteMethod,n=e.id,c=e.setIsMenuOpen,r=e.setIsEdit;return Object(H.jsx)("div",{className:te.a.popup,children:Object(H.jsxs)("div",{className:"".concat(te.a.actions),children:[Object(H.jsx)("button",{onClick:function(){t(n),c(!1)},children:"Delete"}),Object(H.jsx)("button",{onClick:function(){r((function(e){return!e})),c(!1)},children:"Edit"})]})})}),je=function(e){var t,n=e.element,c=e.i,r=Object(o.c)((function(e){return e.usersReducer.uid})),a=Object(o.c)((function(e){return e.usersReducer.token})),i=(new Date).toDateString(),u=Object(s.useState)(!1),d=Object(J.a)(u,2),j=d[0],l=d[1],b=Object(s.useState)(!1),O=Object(J.a)(b,2),p=O[0],h=O[1],f=Object(o.b)();return Object(H.jsx)("div",{className:te.a.control,children:Object(H.jsx)("div",{className:te.a.entries,children:j?Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(re,{style:"SLIM",method:"EDIT",setIsEdit:l,item:n,id:Object.keys(n)[0]})}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)("div",{className:te.a.left,children:[Object(H.jsx)("input",{id:Object.keys(n)[0],type:"checkbox",onChange:function(){var e,t,c;return t=Object.keys(n)[0],c=null===(e=n[Object.keys(n)])||void 0===e?void 0:e.completion,void f(F(c===i?{uid:r,token:a,name:[t],method:"COMPLETION",completion:" "}:{uid:r,token:a,name:[t],method:"COMPLETION",completion:[i]}))},checked:(null===(t=n[Object.keys(n)])||void 0===t?void 0:t.completion)===i}),Object(H.jsxs)("label",{htmlFor:Object.keys(n)[0],children:[n[Object.keys(n)].content,Object(H.jsx)("div",{className:te.a.days,children:n[Object.keys(n)].days.map((function(e,t){return Object(H.jsx)("span",{children:e},t)}))})]})]}),Object(H.jsxs)("div",{className:te.a.right,children:[Object(H.jsx)("button",{onClick:function(){return h((function(e){return!e}))},children:Object(H.jsx)(ue,{})}),p&&Object(H.jsx)(de,{deleteMethod:function(e){f({type:x,payload:{uid:r,token:a,name:[e]}})},id:Object.keys(n)[0],setIsMenuOpen:h,setIsEdit:l})]})]})},c)},c)},le=function(e){var t=e.items;return Object(H.jsx)(H.Fragment,{children:t.map((function(e,t){return Object(H.jsx)(je,{element:e},t)}))})},be=function(){var e=Object(o.c)((function(e){return e.itemsReducer.items})),t=Object(o.c)((function(e){return e.usersReducer.uid})),n=Object(o.c)((function(e){return e.usersReducer.token})),c=(Object(o.c)((function(e){return e.usersReducer.isLoggedIn})),Object(o.c)((function(e){return e.itemsReducer.response}))),r=Object(o.c)((function(e){return e.itemsReducer.isLoading})),a=new Date,i=a.toDateString(),u=Object(s.useState)(!1),j=Object(J.a)(u,2),l=j[0],b=j[1],O=Object(s.useState)([]),p=Object(J.a)(O,2),h=p[0],f=p[1],m=Object(s.useState)("UNCOMPLETED"),x=Object(J.a)(m,2),g=x[0],y=x[1],v=a.toDateString().split(" ")[0],_=Object(o.b)();Object(s.useEffect)((function(){setTimeout((function(){_({type:d,payload:{uid:t,token:n}})}),100)}),[_]),Object(s.useEffect)((function(){switch(g){case"ALL":return f(e);case"UNCOMPLETED":var t=e.filter((function(e){var t;return(null===(t=e[Object.keys(e)])||void 0===t?void 0:t.completion)!==i}));return t=t.filter((function(e){var t;return null===(t=e[Object.keys(e)])||void 0===t?void 0:t.days.includes(v)})),f(t);case"COMPLETED":return f(e.filter((function(e){var t;return(null===(t=e[Object.keys(e)])||void 0===t?void 0:t.completion)===i})))}}),[e,g]);var k=navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language,E=k||"en-us",S=a.toLocaleDateString(E,{weekday:"long",year:"numeric",month:"long",day:"numeric"});return Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)("section",{className:te.a.starting,children:[Object(H.jsxs)("div",{className:te.a.message,children:[Object(H.jsx)("h1",{children:"Hello! Today:"})," ",Object(H.jsx)("h2",{children:S})]}),r&&Object(H.jsx)("div",{className:te.a.boxes,children:Object(H.jsx)("div",{className:te.a.control,children:Object(H.jsx)("label",{children:"Loading..."})})}),c.error&&Object(H.jsx)("div",{className:te.a.boxes,children:Object(H.jsx)("div",{className:te.a.control,children:Object(H.jsx)("label",{children:"Error: ".concat(c.error.message)})})}),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)("div",{className:te.a.boxes,children:[Object(H.jsxs)("div",{className:"".concat(te.a.actions," ").concat(te.a.flex," ").concat(te.a.spacebetween),children:[Object(H.jsxs)("div",{className:te.a.flex,children:[Object(H.jsx)("button",{onClick:function(){y("UNCOMPLETED"===g?"COMPLETED":"UNCOMPLETED")},children:"UNCOMPLETED"===g?"Completed Entries":"Uncompleted Entries"}),Object(H.jsx)("button",{onClick:function(){y("ALL")},children:"All Entries"})]}),Object(H.jsx)("div",{className:te.a.flex,children:Object(H.jsx)("button",{onClick:function(){return b((function(e){return!e}))},children:l?"Close":"Add a New Entry"})})]}),l&&Object(H.jsx)(re,{style:"WIDE",method:"POST"})]}),Object(H.jsxs)("div",{className:te.a.boxes,children:[Object(H.jsx)("div",{className:te.a.control,children:0===e.length&&Object(H.jsx)("span",{children:"No entires yet. Add some to start now."})}),Object(H.jsx)(le,{items:h})]})]})]})})},Oe=function(){var e=Object(o.c)((function(e){return e.usersReducer.isLoggedIn}));return Object(H.jsx)(H.Fragment,{children:e?Object(H.jsx)(be,{}):Object(H.jsx)("section",{className:te.a.starting,children:Object(H.jsx)("div",{style:{margin:"5rem auto"},className:te.a.boxes,children:Object(H.jsxs)("div",{className:te.a.control,children:[Object(H.jsx)("h1",{children:"Hi there!"}),Object(H.jsx)("span",{children:"This is a very basic, easy to use and easy to understand app to gain new habits and track them."}),Object(H.jsx)("span",{children:"If you already have an account, login to proceed. Otherwise, you can create a free account just in seconds."}),Object(H.jsx)("div",{style:{margin:"2rem"},className:te.a.actions,children:Object(H.jsx)(i.a,{to:"/auth",children:Object(H.jsx)("button",{children:"Login or SignUp"})})})]})})})})},pe=function(){return Object(H.jsx)(Oe,{})},he=function(){var e=Object(o.c)((function(e){return e.usersReducer.isLoggedIn})),t=Object(i.b)(Object(u.k)(Object(H.jsxs)(u.c,{path:"/",element:Object(H.jsx)(q,{}),children:[Object(H.jsx)(u.c,{path:"/",element:Object(H.jsx)(pe,{})}),Object(H.jsx)(u.c,{path:"/auth",element:e?Object(H.jsx)(u.a,{replace:!0,to:"/"}):Object(H.jsx)($,{})}),Object(H.jsx)(u.c,{path:"/profile",element:e?Object(H.jsx)(K,{}):Object(H.jsx)(u.a,{replace:!0,to:"/auth"})}),Object(H.jsx)(u.c,{path:"*",element:Object(H.jsx)(u.a,{replace:!0,to:"/"})})]}))),n=Object(o.b)(),c=function(){var e=function(){var e=document.cookie,t="token=",n=e.indexOf("; token=");if(-1===n){if(0!==(n=e.indexOf(t)))return null}else{n+=2;var c=document.cookie.indexOf(";",n);-1===c&&(c=e.length)}return decodeURI(e.substring(n+t.length,c))}();null!==e&&void 0!==e&&"undefined"!==e&&n({type:L,payload:e})};return Object(s.useEffect)((function(){c()}),[c]),Object(H.jsx)(u.e,{router:t})},fe=n(23),me=n(42),xe=n(5),ge=n(13),ye=n(10),ve=Object(xe.a)().mark(Ae),_e=Object(xe.a)().mark(Me),ke=Object(xe.a)().mark(Ge),Ee=Object(xe.a)().mark(Je),Se=Object(xe.a)().mark(Ye),Te=Object(xe.a)().mark(ze),Ce=Object(xe.a)().mark(Ve),Ne=Object(xe.a)().mark(Qe),we=Object(xe.a)().mark(Ze),Le=Object(xe.a)().mark($e),Ie=Object(xe.a)().mark(et),Pe=Object(xe.a)().mark(nt),Re=Object(xe.a)().mark(ct),Ue=Object(xe.a)().mark(rt),Fe=function(e){return fetch("https://react-http-2ff0f-default-rtdb.europe-west1.firebasedatabase.app/users/".concat(e.payload.uid,"/items.json?auth=").concat(e.payload.token)).then((function(e){return e.json()}))};function Ae(e){var t,n,c;return Object(xe.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(ye.a)((function(){return Fe(e)}));case 2:if(null!==(t=r.sent)){r.next=9;break}return n=[],r.next=7,Object(ye.c)({type:j,items:n});case 7:case 12:r.next=18;break;case 9:if(!t.error){r.next=14;break}return r.next=12,Object(ye.c)({type:l,response:t});case 14:return c=(c=Object.entries(t).map((function(e){return Object(ge.a)({},e[0],e[1])}))).reverse(),r.next=18,Object(ye.c)({type:j,items:c});case 18:case"end":return r.stop()}}),ve)}var De=function(e){return fetch("https://react-http-2ff0f-default-rtdb.europe-west1.firebasedatabase.app/users/".concat(e.payload.uid,"/items.json?auth=").concat(e.payload.token),{method:"POST",body:JSON.stringify({content:e.payload.content,days:e.payload.days,completion:" "}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))};function Me(e){var t,n,c;return Object(xe.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(ye.a)((function(){return De(e)}));case 2:if(!(t=r.sent).error){r.next=8;break}return r.next=6,Object(ye.c)({type:p,response:t});case 6:r.next=12;break;case 8:return n=t.name,c=Object(ge.a)({},n,{content:e.payload.content,days:e.payload.days,completion:null}),r.next=12,Object(ye.c)({type:O,item:c});case 12:case"end":return r.stop()}}),_e)}var He=function(e){switch(e.payload.method){case"EDIT":return fetch("https://react-http-2ff0f-default-rtdb.europe-west1.firebasedatabase.app/users/".concat(e.payload.uid,"/items/").concat(e.payload.name,".json?auth=").concat(e.payload.token),{method:"PUT",body:JSON.stringify({content:e.payload.content,days:e.payload.days,completion:" "}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case"COMPLETION":return fetch("https://react-http-2ff0f-default-rtdb.europe-west1.firebasedatabase.app/users/".concat(e.payload.uid,"/items/").concat(e.payload.name,".json?auth=").concat(e.payload.token),{method:"PATCH",body:JSON.stringify({completion:e.payload.completion[0]}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}};function Ge(e){var t,n;return Object(xe.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(ye.a)((function(){return He(e)}));case 2:if(!(t=c.sent).error){c.next=9;break}return console.log("error",t),c.next=7,Object(ye.c)({type:m,response:t});case 7:c.next=20;break;case 9:c.t0=e.payload.method,c.next="EDIT"===c.t0?12:"COMPLETION"===c.t0?16:20;break;case 12:return n={method:"EDIT",name:e.payload.name,content:t.content,days:t.days,completion:t.completion},c.next=15,Object(ye.c)({type:f,res:n});case 15:case 19:return c.abrupt("return",c.sent);case 16:return n={method:"COMPLETION",completion:t.completion,name:e.payload.name},c.next=19,Object(ye.c)({type:f,res:n});case 20:case"end":return c.stop()}}),ke)}var qe=function(e){return fetch("https://react-http-2ff0f-default-rtdb.europe-west1.firebasedatabase.app/users/".concat(e.payload.uid,"/items/").concat(e.payload.name,".json?auth=").concat(e.payload.token),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))};function Je(e){var t,n;return Object(xe.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(ye.a)((function(){return qe(e)}));case 2:if(null!==(t=c.sent)){c.next=9;break}return n=e.payload.name[0],c.next=7,Object(ye.c)({type:g,name:n});case 7:c.next=12;break;case 9:if(!t.error){c.next=12;break}return c.next=12,Object(ye.c)({type:y,response:t});case 12:case"end":return c.stop()}}),Ee)}function Ye(){return Object(xe.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.d)(d,Ae);case 2:return e.next=4,Object(ye.d)(b,Me);case 4:return e.next=6,Object(ye.d)(h,Ge);case 6:return e.next=8,Object(ye.d)(x,Je);case 8:case"end":return e.stop()}}),Se)}var Be=function(e){var t=new Date;t.setTime(t.getTime+24*e.exdays*60*60*1e3);var n="expires"+t.toUTCString();document.cookie=e.cname+"="+e.cvalue+";"+n+";path=/"},We=function(e){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA_N6qTpBueVt_Ryh0uU493RqbPKen-_SY",{method:"POST",body:JSON.stringify({email:e.payload.email,password:e.payload.password,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))};function ze(e){var t;return Object(xe.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ye.a)((function(){return We(e)}));case 2:if(!(t=n.sent).error){n.next=8;break}return n.next=6,Object(ye.c)({type:k,response:t});case 6:n.next=12;break;case 8:return n.next=10,Object(ye.c)({type:_,response:t});case 10:return n.next=12,Object(ye.a)((function(){return Be({cname:"token",cvalue:t.idToken,exdays:3})}));case 12:case"end":return n.stop()}}),Te)}function Ve(){return Object(xe.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.d)(v,ze);case 2:case"end":return e.stop()}}),Ce)}var Ke=function(e){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_N6qTpBueVt_Ryh0uU493RqbPKen-_SY",{method:"POST",body:JSON.stringify({email:e.payload.email,password:e.payload.password,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))};function Qe(e){var t;return Object(xe.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ye.a)((function(){return Ke(e)}));case 2:if(!(t=n.sent).error){n.next=8;break}return n.next=6,Object(ye.c)({type:T,response:t});case 6:n.next=12;break;case 8:return n.next=10,Object(ye.c)({type:S,response:t});case 10:return n.next=12,Object(ye.a)((function(){return Be({cname:"token",cvalue:t.idToken,exdays:3})}));case 12:case"end":return n.stop()}}),Ne)}function Ze(){return Object(xe.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.d)(E,Qe);case 2:case"end":return e.stop()}}),we)}var Xe=function(e){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyA_N6qTpBueVt_Ryh0uU493RqbPKen-_SY",{method:"POST",body:JSON.stringify({idToken:e.payload}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))};function $e(e){var t;return Object(xe.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ye.a)((function(){return Xe(e)}));case 2:if(!(t=n.sent).error){n.next=7;break}console.log(t.error),n.next=10;break;case 7:return t=t.users[0],n.next=10,Object(ye.c)({type:I,response:t});case 10:case"end":return n.stop()}}),Le)}function et(){return Object(xe.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.d)(L,$e);case 2:case"end":return e.stop()}}),Ie)}var tt=function(e){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA_N6qTpBueVt_Ryh0uU493RqbPKen-_SY",{method:"POST",body:JSON.stringify({idToken:e.payload.token,password:e.payload.password,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))};function nt(e){var t;return Object(xe.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ye.a)((function(){return tt(e)}));case 2:if(!(t=n.sent).error){n.next=8;break}return n.next=6,Object(ye.c)({type:w,response:t});case 6:n.next=10;break;case 8:return n.next=10,Object(ye.c)({type:N,response:t});case 10:case"end":return n.stop()}}),Pe)}function ct(){return Object(xe.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.d)(C,nt);case 2:case"end":return e.stop()}}),Re)}function rt(){return Object(xe.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.b)(Ye);case 2:return e.next=4,Object(ye.b)(Ve);case 4:return e.next=6,Object(ye.b)(Ze);case 6:return e.next=8,Object(ye.b)(et);case 8:return e.next=10,Object(ye.b)(ct);case 10:case"end":return e.stop()}}),Ue)}var at=n(6),st=Object(me.a)(),ot=Object(fe.b)({itemsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{items:[],response:{},isLoading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(at.a)(Object(at.a)({},e),{},{isLoading:!0});case j:return Object(at.a)(Object(at.a)({},e),{},{items:t.items,isLoading:!1});case l:return Object(at.a)(Object(at.a)({},e),{},{response:t.response,isLoading:!1});case b:return Object(at.a)(Object(at.a)({},e),{},{isLoading:!0});case O:return Object(at.a)(Object(at.a)({},e),{},{items:[t.item].concat(Object(ne.a)(e.items)),isLoading:!1});case p:return Object(at.a)(Object(at.a)({},e),{},{response:t.response,isLoading:!1});case h:return Object(at.a)(Object(at.a)({},e),{},{isLoading:!0});case f:var n,c=Object(ne.a)(e.items);return"COMPLETION"===t.res.method&&((n=c.find((function(e){return!(null===e||void 0===e||!e[t.res.name[0]])}))[t.res.name[0]]).completion=t.res.completion),"EDIT"===t.res.method&&((n=c.find((function(e){return!(null===e||void 0===e||!e[t.res.name])}))[t.res.name]).content=t.res.content,n.completion=t.res.completion,n.days=t.res.days),Object(at.a)(Object(at.a)({},e),{},{items:c,isLoading:!1});case m:return Object(at.a)(Object(at.a)({},e),{},{response:t.response,isLoading:!1});case x:return Object(at.a)(Object(at.a)({},e),{},{isLoading:!0});case g:var r=Object(ne.a)(e.items);return r=r.filter((function(e){return Object.keys(e)[0]!==t.name})),Object(at.a)(Object(at.a)({},e),{},{items:r,isLoading:!1});case y:return Object(at.a)(Object(at.a)({},e),{},{response:t.response,isLoading:!1});default:return e}},usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{email:"",token:"",uid:"",response:{},isLoggedIn:!1,isLoading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(at.a)(Object(at.a)({},e),{},{isLoading:!0});case _:return Object(at.a)(Object(at.a)({},e),{},{email:t.response.email,token:t.response.idToken,uid:t.response.localId,response:t.response,isLoggedIn:!0,isLoading:!1});case k:return Object(at.a)(Object(at.a)({},e),{},{response:t.response,isLoading:!1});case E:return Object(at.a)(Object(at.a)({},e),{},{isLoading:!0});case S:return Object(at.a)(Object(at.a)({},e),{},{email:t.response.email,token:t.response.idToken,uid:t.response.localId,response:t.response,isLoggedIn:!0,isLoading:!1});case T:return Object(at.a)(Object(at.a)({},e),{},{response:t.response,isLoading:!1});case L:return Object(at.a)(Object(at.a)({},e),{},{token:t.payload});case I:return Object(at.a)(Object(at.a)({},e),{},{email:t.response.email,uid:t.response.localId,response:t.response,isLoggedIn:!0,isLoading:!1});case P:return Object(at.a)({},e);case C:return Object(at.a)(Object(at.a)({},e),{},{isLoading:!0});case N:return Object(at.a)(Object(at.a)({},e),{},{token:t.response.idToken,response:t.response,isLoading:!1});case w:return Object(at.a)(Object(at.a)({},e),{},{response:t.response,isLoading:!1});case U:return Object(at.a)(Object(at.a)({},e),{},{response:{}});case R:return Object(at.a)(Object(at.a)({},e),{},{email:"",token:"",uid:"",response:{},isLoggedIn:!1,isLoading:!1});default:return e}}}),it=Object(fe.d)(ot,Object(fe.a)(st));st.run(rt);var ut=it;a.a.createRoot(document.getElementById("root")).render(Object(H.jsx)(o.a,{store:ut,children:Object(H.jsx)(he,{})}))},9:function(e,t,n){e.exports={starting:"StartingPageContent_starting__kwCvL",message:"StartingPageContent_message__IEFGk",boxes:"StartingPageContent_boxes__2EDJj",control:"StartingPageContent_control__I-Jus",entries:"StartingPageContent_entries__5Zgsd",left:"StartingPageContent_left__1gHYc",right:"StartingPageContent_right__32mtX",days:"StartingPageContent_days__1pUte",actions:"StartingPageContent_actions__mDbak",toggle:"StartingPageContent_toggle__2czRd",flex:"StartingPageContent_flex__-vZr7",spacebetween:"StartingPageContent_spacebetween__1mfr4",center:"StartingPageContent_center__3N7I9",formborder:"StartingPageContent_formborder__2OgOF",popup:"StartingPageContent_popup__3HYDR",textcenter:"StartingPageContent_textcenter__1s1aQ",dchecklist:"StartingPageContent_dchecklist__3xduR",dcheckbox:"StartingPageContent_dcheckbox__3GEOE",dcall:"StartingPageContent_dcall__rBMEX"}}},[[57,1,2]]]);
//# sourceMappingURL=main.19e77300.chunk.js.map