(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SignIn"],{"4fc8":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"flex-grid justify-center"},c={class:"col-2"},s=Object(r["k"])("h1",{class:"text-center"},"Login",-1),o=Object(r["k"])("div",{class:"push-top"},[Object(r["k"])("button",{type:"submit",class:"btn-blue btn-block"},"Log in")],-1),i={class:"form-actions text-right"},u=Object(r["j"])("Create an account?"),l={class:"push-top text-center"},d=Object(r["k"])("i",{class:"fa fa-google fa-btn"},null,-1),m=Object(r["j"])("Sign in with Google ");function b(e,t,n,b,f,p){var h=Object(r["F"])("AppFormField"),j=Object(r["F"])("router-link"),g=Object(r["F"])("VeeForm");return Object(r["x"])(),Object(r["f"])("div",a,[Object(r["k"])("div",c,[Object(r["k"])(g,{onSubmit:p.signIn,class:"card card-form"},{default:Object(r["T"])((function(){return[s,Object(r["k"])(h,{label:"Email",name:"email",type:"email",modelValue:f.form.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.form.email=e}),rules:"required|email"},null,8,["modelValue"]),Object(r["k"])(h,{label:"Password",name:"password",type:"password",modelValue:f.form.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return f.form.password=e}),rules:"required"},null,8,["modelValue"]),o,Object(r["k"])("div",i,[Object(r["k"])(j,{to:{name:"Register"}},{default:Object(r["T"])((function(){return[u]})),_:1})])]})),_:1},8,["onSubmit"]),Object(r["k"])("div",l,[Object(r["k"])("button",{onClick:t[3]||(t[3]=function(){return p.signInWithGoogle&&p.signInWithGoogle.apply(p,arguments)}),class:"btn-red btn-xsmall"},[d,m])])])])}var f=n("5530"),p=(n("96cf"),n("1da1")),h={data:function(){return{form:{email:"",password:""}}},methods:{signIn:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("auth/signInWithEmailAndPassword",Object(f["a"])({},e.form));case 3:e.successRedirect(),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),alert(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},signInWithGoogle:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("auth/signInWithGoogle");case 2:e.successRedirect();case 3:case"end":return t.stop()}}),t)})))()},successRedirect:function(){var e=this.$route.query.redirectTo||{name:"Home"};this.$router.push(e)}},created:function(){this.$emit("ready")}};h.render=b;t["default"]=h}}]);
//# sourceMappingURL=SignIn.d7fe4490.js.map