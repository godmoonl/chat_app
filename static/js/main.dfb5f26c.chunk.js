(this.webpackJsonpchat_app=this.webpackJsonpchat_app||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(50),c=n.n(r),s=n(14),i=n(36),u=n(17),o=n(0),j=n.n(o),l=n(2),b=n(34);n(60),n(72),n(71);b.a.initializeApp({apiKey:"AIzaSyC1H2F1ylsYE-YoQAvHn8FtT8Rzy3asTak",authDomain:"chat-app-3a2ea.firebaseapp.com",projectId:"chat-app-3a2ea",storageBucket:"chat-app-3a2ea.appspot.com",messagingSender:"1007657319956",appId:"1:1007657319956:web:400de36691e6b7dc99b101",measurementId:"G-8XBER76MS9"});var d=b.a,h=b.a.auth(),p=b.a.firestore(),O=b.a.storage(),f=n(9),x=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),u=i[0],o=i[1],b=Object(a.useState)(""),d=Object(s.a)(b,2),p=d[0],O=d[1],x=Object(a.useState)(!0),m=Object(s.a)(x,2),v=m[0],g=m[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&o(a)},y=function(){var e=Object(l.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!v){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),O(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:y,children:[Object(f.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:w}),Object(f.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:w}),Object(f.jsx)("button",{type:"sumbit",children:v?"Create Account":"Sign In"}),p]}),Object(f.jsxs)("span",{onClick:function(){return g((function(e){return!e}))},children:[" ",v?"Sign In":"Create Account"]})]})},m=n(42),v=n(43),g=function(){var e=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new d.auth.GoogleAuthProvider:"github"===n&&(a=new d.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(a);case 4:r=e.sent,console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{classsName:"authContainer",children:[Object(f.jsx)(x,{}),Object(f.jsxs)("div",{className:"authBtns",children:[Object(f.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google",Object(f.jsx)(m.a,{icon:v.b})]}),Object(f.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github",Object(f.jsx)(m.a,{icon:v.a})]})]})]})},w=n(51),y=function(e){var t=e.chatObj,n=e.isOwner,r=Object(a.useState)(!1),c=Object(s.a)(r,2),i=c[0],u=c[1],o=Object(a.useState)(t.text),b=Object(s.a)(o,2),d=b[0],h=b[1],x=function(){var e=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this chat?")){e.next=6;break}return e.next=4,p.doc("chats/".concat(t.id)).delete();case 4:return e.next=6,O.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return u((function(e){return!e}))},v=function(){var e=Object(l.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,p.doc("chats/".concat(t.id)).update({text:d});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{children:i?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:v,children:[Object(f.jsx)("input",{onChange:function(e){var t=e.target.value;h(t)},type:"text",placeholder:"Edit your chat",value:d,required:!0}),Object(f.jsx)("input",{type:"submit",value:"Update Chat"})]}),Object(f.jsx)("button",{onClick:m,children:"Cancel"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(f.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{onClick:x,children:"Delete Chat"}),Object(f.jsx)("button",{onClick:m,children:"Edit Chat"})]})]})})},C=n(75),S=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],u=Object(a.useState)(""),o=Object(s.a)(u,2),b=o[0],d=o[1],h=function(){var e=Object(l.a)(j.a.mark((function e(n){var a,r,s,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a="",""===c){e.next=10;break}return r=O.ref().child("".concat(t.uid,"/").concat(Object(C.a)())),e.next=6,r.putString(c,"data_url");case 6:return s=e.sent,e.next=9,s.ref.getDownloadURL();case 9:a=e.sent;case 10:return u={text:b,createdAt:Date.now(),createrId:t.uid,attachmentUrl:a},e.next=13,p.collection("chats").add(u);case 13:d(""),i("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:h,children:[Object(f.jsx)("input",{value:b,onChange:function(e){var t=e.target.value;d(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(f.jsx)("input",{type:"file",accpet:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;i(t)},n.readAsDataURL(t)}}),Object(f.jsx)("button",{type:"submit",children:"Chat"}),c&&Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:c,width:"50px",height:"50px"}),Object(f.jsx)("button",{onClick:function(e){return i(null)},children:"clear"})]})]})})},k=function(e){var t=e.userObj,n=Object(a.useState)([]),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){p.collection("chats").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)(S,{userObj:t}),Object(f.jsx)("div",{children:c.map((function(e){return Object(f.jsx)(y,{chatObj:e,isOwner:e.createrId===t.uid},e.id)}))})]})},U=n(52),I=function(e){var t=e.refreshUser,n=e.userObj,r=Object(u.f)(),c=Object(a.useState)([]),i=Object(s.a)(c,2),o=(i[0],i[1],Object(a.useState)(n.displayName)),b=Object(s.a)(o,2),d=b[0],O=b[1],x=function(){var e=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.collection("chats").where("creatorId","==",n.uid).orderBy("createdAt").get();case 2:Object(U.a)("chats");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===d){e.next=5;break}return e.next=4,n.updateProfile({displayName:d});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){x()}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:m,children:[Object(f.jsx)("input",{onChange:function(e){var t=e.target.value;O(t)},type:"text",placeholder:"Display name",value:d}),Object(f.jsx)("input",{type:"submit",value:"Update Profile"})]}),Object(f.jsx)("button",{onClick:function(){h.signOut(),r.push("/")},children:"Log Out"})]})},A=function(e){var t=e.userObj;return Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsxs)(i.b,{to:"/profile",children:[t.displayName,"\uc758 Profile"]})})]})})},P=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(f.jsxs)(i.a,{children:[n&&Object(f.jsx)(A,{userObj:a}),Object(f.jsx)(u.c,{children:n?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u.a,{exact:!0,path:"/",children:Object(f.jsx)(k,{userObj:a})}),Object(f.jsx)(u.a,{exact:!0,path:"/profile",children:Object(f.jsx)(I,{userObj:a,refreshUser:t})})]}):Object(f.jsx)(u.a,{exact:!0,path:"/",children:Object(f.jsx)(g,{})})})]})};var N=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(s.a)(c,2),u=i[0],o=i[1],j=Object(a.useState)(null),l=Object(s.a)(j,2),b=l[0],d=l[1];return Object(a.useEffect)((function(){h.onAuthStateChanged((function(e){e?(o(!0),d({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):o(!1),r(!0)}))}),[]),Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)(P,{refreshUser:function(){d({displayName:h.currentUser.displayName,uid:h.currentUser.uid,updateProfile:function(e){return h.currentUser.updateProfile(e)}})},isLoggedIn:u,userObj:b}):"Initializing..."})};n(69);c.a.render(Object(f.jsx)(N,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.dfb5f26c.chunk.js.map