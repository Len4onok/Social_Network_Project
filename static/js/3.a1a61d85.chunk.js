(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{246:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__2IbM-"}},247:function(e,t,s){e.exports={dialogItem:"Dialog_dialogItem__1vgAu",active:"Dialog_active__3509g",img:"Dialog_img__125_u"}},248:function(e,t,s){e.exports={messageItem:"Message_messageItem__yGxIU"}},249:function(e,t,s){e.exports={error:"DialogsForm_error__3Keu5"}},255:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(22),c=s(33),r=s(106),o=s(3),j=s(4),m=s(5),u=s(10),d=s(11),l=s(7),g=s(1),b=function(e){return{isAuth:e.auth.isAuth}},x=s(246),p=s.n(x),O=s(247),h=s.n(O),f=s(17),v=function(e){return Object(g.jsxs)(f.b,{to:"/dialogs/"+e.id,activeClassName:h.a.active,className:h.a.dialogItem,children:[Object(g.jsx)("span",{children:Object(g.jsx)("img",{className:h.a.img,src:e.image})}),e.name]},e.id)},_=s(248),I=s.n(_),N=function(e){return Object(g.jsx)("div",{children:Object(g.jsx)("span",{id:e.id,className:I.a.messageItem,children:e.message})},e.id)},M=s(27),S=s(74),w=s(249),y=s.n(w),A=function(e){var t=Object(S.a)(5);return Object(g.jsx)(M.d,{initialValues:{newText:""},onSubmit:function(t){var s;s=t.newText,e.onSendMessage(s)},validationSchema:t,children:Object(g.jsxs)(M.c,{children:[Object(g.jsx)(M.b,{component:"textarea",name:"newText"}),Object(g.jsx)(M.a,{className:y.a.error,name:"newText",component:"div"}),Object(g.jsx)("button",{type:"submit",children:"Send Message"})]})})},D=function(e){var t=e.state.dialogs.map((function(e){return Object(g.jsx)(v,{id:e.id,name:e.name,image:e.srcAva})})),s=e.state.messages.map((function(e){return Object(g.jsx)(N,{id:e.id,message:e.message})}));return Object(g.jsxs)("div",{className:p.a.dialogs,children:[Object(g.jsx)("div",{className:p.a.dialogsItems,children:t}),Object(g.jsxs)("div",{className:p.a.messages,children:[s,Object(g.jsx)(A,{onSendMessage:e.onSendMessage})]})]})};t.default=Object(c.c)(Object(i.b)((function(e){return{state:e.dialogsPage}}),{onSendMessage:r.b}),(function(e){var t=function(t){Object(u.a)(a,t);var s=Object(d.a)(a);function a(){return Object(j.a)(this,a),s.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(g.jsx)(e,Object(o.a)({},this.props)):Object(g.jsx)(l.a,{to:"/login"})}}]),a}(n.a.Component);return Object(i.b)(b)(t)}))(D)}}]);
//# sourceMappingURL=3.a1a61d85.chunk.js.map