(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Forum"],{"038d":function(e,t,a){"use strict";a.r(t);a("a4d3"),a("e01a"),a("b0c0");var r=a("7a23"),c=Object(r["X"])("data-v-352e3a63");Object(r["A"])("data-v-352e3a63");var s={key:0,class:"col-full"},n={key:0,class:"col-full push-top"},u={class:"forum-header"},i={class:"forum-details"},d={class:"text-lead"},o=Object(r["j"])(" Start a thread "),l={class:"col-full push-top"};Object(r["y"])();var b=c((function(e,t,a,b,j,O){var f=Object(r["F"])("AppHead"),p=Object(r["F"])("router-link"),h=Object(r["F"])("ThreadList"),m=Object(r["F"])("v-pagination");return e.asyncDataStatus_ready?(Object(r["x"])(),Object(r["f"])("div",s,[O.forum?(Object(r["x"])(),Object(r["f"])("div",n,[Object(r["k"])(f,null,{default:c((function(){var e,t,a;return[Object(r["k"])("title",null,Object(r["K"])(null===(e=O.forum)||void 0===e?void 0:e.name),1),Object(r["k"])("meta",{property:"og:title",content:null===(t=O.forum)||void 0===t?void 0:t.name},null,8,["content"]),Object(r["k"])("meta",{name:"twitter:title",content:null===(a=O.forum)||void 0===a?void 0:a.name},null,8,["content"])]})),_:1}),Object(r["k"])("div",u,[Object(r["k"])("div",i,[Object(r["k"])("h1",null,Object(r["K"])(O.forum.name),1),Object(r["k"])("p",d,Object(r["K"])(O.forum.description),1)]),Object(r["k"])(p,{to:{name:"ThreadCreate",params:{forumId:O.forum.id}},class:"btn-green btn-small"},{default:c((function(){return[o]})),_:1},8,["to"])])])):Object(r["g"])("",!0),Object(r["k"])("div",l,[Object(r["k"])(h,{threads:O.threads},null,8,["threads"]),Object(r["k"])(m,{modelValue:j.page,"onUpdate:modelValue":t[1]||(t[1]=function(e){return j.page=e}),pages:O.totalPages,"active-color":"#57AD8D"},null,8,["modelValue","pages"])])])):Object(r["g"])("",!0)})),j=(a("4de4"),a("d81d"),a("96cf"),a("1da1")),O=a("5530"),f=Object(r["X"])("data-v-4f03f21e");Object(r["A"])("data-v-4f03f21e");var p={class:"col-full"},h={class:"thread-list"},m=Object(r["k"])("h2",{class:"list-title"},"Threads",-1),v={key:0},k={class:"text-faded text-xsmall"},g=Object(r["j"])(" By "),y={href:"#"},x=Object(r["j"])(", "),w=Object(r["j"])(". "),I={class:"activity"},_={class:"replies-count"},A={class:"text-xsmall"},F={href:"#"},D={class:"text-xsmall text-faded"},B={key:0,style:{padding:"10px","text-align":"center"}},P=Object(r["k"])("em",null,"No Threads Available",-1);Object(r["y"])();var S=f((function(e,t,a,c,s,n){var u=Object(r["F"])("router-link"),i=Object(r["F"])("AppDate"),d=Object(r["F"])("AppAvatarImg");return Object(r["x"])(),Object(r["f"])("div",p,[Object(r["k"])("div",h,[m,a.threads.length?(Object(r["x"])(),Object(r["f"])("div",v,[(Object(r["x"])(!0),Object(r["f"])(r["a"],null,Object(r["D"])(a.threads,(function(e){return Object(r["x"])(),Object(r["f"])("div",{key:e.id,class:"thread"},[Object(r["k"])("div",null,[Object(r["k"])("p",null,[Object(r["k"])(u,{to:{name:"ThreadShow",params:{id:e.id}}},{default:f((function(){return[Object(r["j"])(Object(r["K"])(e.title),1)]})),_:2},1032,["to"])]),Object(r["k"])("p",k,[g,Object(r["k"])("a",y,Object(r["K"])(n.userById(e.userId).name),1),x,Object(r["k"])(i,{timestamp:e.publishedAt},null,8,["timestamp"]),w])]),Object(r["k"])("div",I,[Object(r["k"])("p",_,Object(r["K"])(e.repliesCount)+" replies ",1),Object(r["k"])(d,{class:"avatar-medium",src:n.userById(e.userId).avatar},null,8,["src"]),Object(r["k"])("div",null,[Object(r["k"])("p",A,[Object(r["k"])("a",F,Object(r["K"])(n.userById(e.userId).name),1)]),Object(r["k"])("p",D,[Object(r["k"])(i,{timestamp:e.publishedAt},null,8,["timestamp"])])])])])})),128))])):Object(r["g"])("",!0)]),a.threads.length?Object(r["g"])("",!0):(Object(r["x"])(),Object(r["f"])("div",B,[P]))])})),T=a("ce96"),$={props:{threads:{type:Array,required:!0}},computed:{posts:function(){return this.$store.state.posts.items},users:function(){return this.$store.state.users.items}},methods:{postById:function(e){return Object(T["c"])(this.posts,e)},userById:function(e){return Object(T["c"])(this.users,e)||{}}}};$.render=S,$.__scopeId="data-v-4f03f21e";var K=$,C=a("5502"),q=a("cae2"),R={components:{ThreadList:K},mixins:[q["a"]],props:{id:{required:!0,type:String}},data:function(){return{page:parseInt(this.$route.query.page)||1,perPage:10}},computed:{forum:function(){return Object(T["c"])(this.$store.state.forums.items,this.id)},threads:function(){var e=this;return this.forum?this.$store.state.threads.items.filter((function(t){return t.forumId===e.forum.id})).map((function(t){return e.$store.getters["threads/thread"](t.id)})):[]},threadCount:function(){var e;return(null===(e=this.forum.threads)||void 0===e?void 0:e.length)||0},totalPages:function(){return this.threadCount?Math.ceil(this.threadCount/this.perPage):0}},methods:Object(O["a"])(Object(O["a"])(Object(O["a"])({},Object(C["b"])("forums",["fetchForum"])),Object(C["b"])("threads",["fetchThreadsByPage"])),Object(C["b"])("users",["fetchUsers"])),created:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchForum({id:e.id});case 2:return a=t.sent,t.next=5,e.fetchThreadsByPage({ids:a.threads,page:e.page,perPage:e.perPage});case 5:return r=t.sent,t.next=8,e.fetchUsers({ids:r.map((function(e){return e.userId}))});case 8:e.asyncDataStatus_fetched();case 9:case"end":return t.stop()}}),t)})))()},watch:{page:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$router.push({query:{page:t.page}});case 1:case"end":return e.stop()}}),e)})))()}}};R.render=b,R.__scopeId="data-v-352e3a63";t["default"]=R},cae2:function(e,t,a){"use strict";t["a"]={data:function(){return{asyncDataStatus_ready:!1}},methods:{asyncDataStatus_fetched:function(){this.asyncDataStatus_ready=!0,this.$emit("ready")}}}}}]);
//# sourceMappingURL=Forum.a61424e6.js.map