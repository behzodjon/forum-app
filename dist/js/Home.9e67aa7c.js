(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{"0481":function(t,e,r){"use strict";var a=r("23e7"),c=r("a2bf"),n=r("7b0b"),s=r("50c4"),o=r("a691"),i=r("65f0");a({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=n(this),r=s(e.length),a=i(e,0);return a.length=c(a,e,e,r,0,void 0===t?1:o(t)),a}})},4069:function(t,e,r){var a=r("44d2");a("flat")},8708:function(t,e,r){"use strict";r("a4d3"),r("e01a"),r("b0c0");var a=r("7a23"),c=Object(a["X"])("data-v-0b3e7786");Object(a["A"])("data-v-0b3e7786");var n={class:"col-full"},s={class:"forum-list"},o={class:"list-title"},i={key:1},u={class:"forum-details"},d={class:"threads-count"},l={class:"count"},f=Object(a["k"])("div",{class:"last-thread"},null,-1);Object(a["y"])();var b=c((function(t,e,r,b,j,O){var h=Object(a["F"])("router-link");return Object(a["x"])(),Object(a["f"])("div",n,[Object(a["k"])("div",s,[Object(a["k"])("h2",o,[r.categoryId?(Object(a["x"])(),Object(a["f"])(h,{key:0,to:{name:"Category",params:{id:r.categoryId}}},{default:c((function(){return[Object(a["j"])(Object(a["K"])(r.title),1)]})),_:1},8,["to"])):(Object(a["x"])(),Object(a["f"])("span",i,Object(a["K"])(r.title),1))]),(Object(a["x"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(r.forums,(function(t){var e;return Object(a["x"])(),Object(a["f"])("div",{class:"forum-listing",key:t.id},[Object(a["k"])("div",u,[Object(a["k"])(h,{to:{name:"Forum",params:{id:t.id}},class:"text-xlarge"},{default:c((function(){return[Object(a["j"])(Object(a["K"])(t.name),1)]})),_:2},1032,["to"]),Object(a["k"])("p",null,Object(a["K"])(t.description),1)]),Object(a["k"])("div",d,[Object(a["k"])("p",null,[Object(a["k"])("span",l,Object(a["K"])(null===(e=t.threads)||void 0===e?void 0:e.length),1),Object(a["j"])(" "+Object(a["K"])(O.forumThreadsWord(t)),1)])]),f])})),128))])])})),j={props:{forums:{required:!0,type:Array},title:{type:String,default:"Forums"},categoryId:{required:!1,type:String}},methods:{forumThreadsWord:function(t){var e;return null!==(e=t.threads)&&void 0!==e&&e.length?t.threads.length>1?"threads":"thread":"no threads"}}};j.render=b,j.__scopeId="data-v-0b3e7786";e["a"]=j},a2bf:function(t,e,r){"use strict";var a=r("e8b5"),c=r("50c4"),n=r("0366"),s=function(t,e,r,o,i,u,d,l){var f,b=i,j=0,O=!!d&&n(d,l,3);while(j<o){if(j in r){if(f=O?O(r[j],j,e):r[j],u>0&&a(f))b=s(t,e,f,c(f.length),b,u-1)-1;else{if(b>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[b]=f}b++}j++}return b};t.exports=s},bc13:function(t,e,r){"use strict";r.r(e);var a=r("7a23"),c={key:0,class:"container"},n=Object(a["k"])("h1",{class:"push-top"},"Welcome to the Vue.js 3 Master Class Forum",-1);function s(t,e,r,s,o,i){var u=Object(a["F"])("CategoryList");return t.asyncDataStatus_ready?(Object(a["x"])(),Object(a["f"])("div",c,[n,Object(a["k"])(u,{categories:i.categories},null,8,["categories"])])):Object(a["g"])("",!0)}r("0481"),r("d81d"),r("4069"),r("96cf");var o=r("1da1"),i=r("5530"),u=(r("b0c0"),Object(a["X"])("data-v-5156fc25")),d=u((function(t,e,r,c,n,s){var o=Object(a["F"])("ForumList");return Object(a["x"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(r.categories,(function(t){return Object(a["x"])(),Object(a["f"])(o,{key:t.id,forums:s.getForumsForCategory(t),title:t.name,"category-id":t.id},null,8,["forums","title","category-id"])})),128)})),l=(r("4de4"),r("8708")),f={components:{ForumList:l["a"]},props:{categories:{required:!0,type:Array}},methods:{getForumsForCategory:function(t){return this.$store.state.forums.items.filter((function(e){return e.categoryId===t.id}))}}};f.render=d,f.__scopeId="data-v-5156fc25";var b=f,j=r("5502"),O=r("cae2"),h={components:{CategoryList:b},mixins:[O["a"]],computed:{categories:function(){return this.$store.state.categories.items}},methods:Object(i["a"])(Object(i["a"])({},Object(j["b"])("categories",["fetchAllCategories"])),Object(j["b"])("forums",["fetchForums"])),created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchAllCategories();case 2:return r=e.sent,a=r.map((function(t){return t.forums})).flat(),e.next=6,t.fetchForums({ids:a});case 6:t.asyncDataStatus_fetched();case 7:case"end":return e.stop()}}),e)})))()}};h.render=s;e["default"]=h},cae2:function(t,e,r){"use strict";e["a"]={data:function(){return{asyncDataStatus_ready:!1}},methods:{asyncDataStatus_fetched:function(){this.asyncDataStatus_ready=!0,this.$emit("ready")}}}}}]);
//# sourceMappingURL=Home.9e67aa7c.js.map