(function(t){function e(e){for(var a,o,i=e[0],c=e[1],u=e[2],p=0,l=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(l.length)l.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},r={app:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-14d04d3c":"21918878","chunk-4ea5bfa8":"e9af2bb9"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-14d04d3c":1,"chunk-4ea5bfa8":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-14d04d3c":"4d2b8798","chunk-4ea5bfa8":"4c4e5e45"}[t]+".css",r=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],p=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(p===a||p===r))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],p=u.getAttribute("data-href");if(p===a||p===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete o[t],d.parentNode.removeChild(d),n(s)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=s);var u,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=i(t);var l=new Error;u=function(e){p.onerror=p.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:p})}),12e4);p.onerror=p.onload=u,document.head.appendChild(p)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/test_task/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=p;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{color:"light-blue lighten-5",app:"","content-class":"elevation-0"}},[n("v-img",{staticClass:"mx-2",attrs:{src:"https://i.imgur.com/qgGY4tB.png","max-height":"40","max-width":"40",contain:""}}),n("v-toolbar-title",{staticClass:"ml-2",attrs:{"content-class":"elevation-0"}},[t._v(" Test Project ")])],1),n("v-content",[n("v-main",{staticClass:"pt-0"},[n("router-view")],1)],1)],1)},r=[],s={name:"App"},i=s,c=(n("034f"),n("2877")),u=n("6544"),p=n.n(u),l=n("7496"),d=n("40dc"),f=n("a75b"),m=n("adda"),h=n("f6c4"),v=n("2a7f"),y=Object(c["a"])(i,o,r,!1,null,null,null),g=y.exports;p()(y,{VApp:l["a"],VAppBar:d["a"],VContent:f["a"],VImg:m["a"],VMain:h["a"],VToolbarTitle:v["a"]});n("d3b7"),n("3ca3"),n("ddb0");var w=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pl-0",attrs:{fluid:""}},[n("v-col",{staticClass:"d-flex justify-center align-center login_block px-0",attrs:{cols:"12"}},[n("v-col",{staticClass:"left_side px-0",attrs:{cols:"3"}}),n("v-col",{staticClass:"right_side d-flex justify-center",attrs:{cols:"9"}},[n("v-col",{attrs:{cols:"6"}},[n("v-form",{ref:"form",staticClass:"form_login",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{"prepend-icon":"person",name:"Username",label:"Username",rules:t.nameRules,counter:10,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{staticClass:"my-2",attrs:{"prepend-icon":"lock",name:"Password",label:"Password",type:"password",rules:t.passwordRules,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("v-btn",{attrs:{disabled:!t.valid,color:"yellow"},on:{click:t.submit,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}}},[t._v(" submit ")]),n("v-btn",{attrs:{color:""},on:{click:t.clear}},[t._v("clear")])],1)],1)],1)],1)],1)},b=[],k=(n("2b3d"),n("bc3a")),P=n.n(k),_={name:"Login",data:function(){return{valid:!0,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=10||"Name must be less than 10 characters"}],password:"",passwordRules:[function(t){return!!t||"password is required"},function(t){return t&&t.length>=4||"password must be less than 10 characters"}]}},methods:{submit:function(){var t=this;if(this.$refs.form.validate()){var e="https://app.postmypartytest.com/token",n=new URLSearchParams;n.append("grant_type","password"),n.append("username","test_project_dev@mailinator.com"),n.append("password","123456"),P.a.post(e,n).then((function(e){window.localStorage.setItem("token",e.data.access_token),t.$router.push({name:"Home"})})).catch((function(t){reject(t)}))}},clear:function(){this.$refs.form.reset()}}},L=_,E=(n("f47e"),n("8336")),S=n("62ad"),O=n("a523"),x=n("4bd4"),C=n("8654"),A=Object(c["a"])(L,T,b,!1,null,"bdc7b24c",null),j=A.exports;p()(A,{VBtn:E["a"],VCol:S["a"],VContainer:O["a"],VForm:x["a"],VTextField:C["a"]});var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"d-flex align-center body"},[n("svg",{attrs:{width:"380px",height:"500px",viewBox:"0 0 837 1045",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:sketch":"http://www.bohemiancoding.com/sketch/ns"}},[n("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","sketch:type":"MSPage"}},[n("path",{attrs:{d:"M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z",id:"Polygon-1",stroke:"#007FB2","stroke-width":"6","sketch:type":"MSShapeGroup"}}),n("path",{attrs:{d:"M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z",id:"Polygon-2",stroke:"#EF4A5B","stroke-width":"6","sketch:type":"MSShapeGroup"}}),n("path",{attrs:{d:"M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z",id:"Polygon-3",stroke:"#795D9C","stroke-width":"6","sketch:type":"MSShapeGroup"}}),n("path",{attrs:{d:"M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z",id:"Polygon-4",stroke:"#F2773F","stroke-width":"6","sketch:type":"MSShapeGroup"}}),n("path",{attrs:{d:"M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z",id:"Polygon-5",stroke:"#36B455","stroke-width":"6","sketch:type":"MSShapeGroup"}})])]),n("div",{staticClass:"message-box"},[n("h1",[t._v("404")]),n("p",[t._v("Page not found")]),n("div",{staticClass:"buttons-con"},[n("div",{staticClass:"action-link-wrap"},[n("a",{staticClass:"link-button link-back-button",attrs:{onclick:"history.back(-1)"}},[t._v("Go Back")]),n("router-link",{staticClass:"link-button",attrs:{to:"/"}},[t._v("Go to Home Page")])],1)])])])},I=[],M={name:"NotFound"},B=M,D=(n("5ad8"),Object(c["a"])(B,N,I,!1,null,"2e6d24d3",null));D.exports;p()(D,{VContainer:O["a"]});var V=function(t,e,n){window.localStorage.getItem("token")?n():window.location.href="/login"};a["a"].use(w["a"]);var J=[{path:"/",name:"Home",component:function(){return n.e("chunk-4ea5bfa8").then(n.bind(null,"bb51"))},beforeEnter:function(t,e,n){V(t,e,n)}},{path:"/login",name:"Login",component:j},{path:"/post",name:"post",component:function(){return n.e("chunk-14d04d3c").then(n.bind(null,"1f6c"))},beforeEnter:function(t,e,n){V(t,e,n)}}],K=new w["a"]({mode:"history",base:"/test_task//test_task",routes:J}),F=K,G=(n("7db0"),n("d81d"),n("a434"),n("2f62"));a["a"].use(G["a"]);var z=new G["a"].Store({state:{List:[],pageOfList:1,Posts:[],TOKEN:"3RAvJBNoPtLP-Hw_TknxB4skuIZxdnCp5vyCm9UH1lAkAQKL9gpsAHA_kHMzLDZOw_NnN4Py2m1kocpl_natr7k-xHe3l8wuiDAYuyXUfiyFo9NCYDyOX-tNJVnBun67eiPmnwYVhKuO9k86a71AhaW-80JU26LQQuhCzlGE9riJ-SWJJxskWIh-PKVXAMce0IQlywwdRkCrlWT4hw_Z82djgVMyycJhmFuBctTXM1WATlnv-kI4YarMKw4EBTm_E-as29iMx75dwCFh_PVgljkyjXCZwdSddSWErFByjwjOzEFYJ03ThNuAWnBjYYlqlUp4aGQkULu7vMQPIft_U7BF55tmz7aSSw7hxoqm8vqEnWSef3CiZffANE61EiPxdrUcMiuTmTwGO94LgxatkXRsjA0dSwKuttUYDeyMdnh8LbYnyIIU_M647M78cuVfqPuSWAVdG6lXKfXVx-kDOtS3iouzZ8IKLYEc8cAfUtRJohpGq47bVF-ruIB9haDx"},getters:{getList:function(t){return t.List},getListPage:function(t){return t.pageOfList},getPosts:function(t){return t.Posts}},mutations:{ADD_LIST:function(t,e){t.List.unshift(e)},EDIT_TITLE:function(t,e){t.List.find((function(t){return t.Id===e.Id?t.Name=e.Name:""}))},DELETE_TITLE:function(t,e){var n;t.List.map((function(t,a){t.Id===e&&(n=a)})),t.List.splice(n,1)},SET_TEMP_VALS:function(t,e){t.List=e},SET_TEMP_PAGE:function(t,e){t.pageOfList=e},ADD_POST:function(t,e){t.Posts.unshift(e)},EDIT_POST:function(t,e){var n;t.Posts.map((function(t,a){t.Id===e.Id&&(n=a)})),a["a"].set(t.Posts,n,e)},SET_POSTS_VALS:function(t,e){t.Posts=e},DELETE_POST:function(t,e){var n;t.Posts.map((function(t,a){t.Id===e&&(n=a)})),t.Posts.splice(n,1)}},actions:{addTemplates:function(t,e){var n=this,a=t.commit;return new Promise((function(t,o){var r="https://app.postmypartytest.com/api/Templates",s={headers:{Authorization:"Bearer ".concat(n.state.TOKEN),"Content-Type":"application/json"}},i=e;P.a.post(r,i,s).then((function(t){a("ADD_LIST",t.data)})).catch((function(t){o(t)}))}))},editTemplates:function(t,e){var n=this,a=t.commit;return new Promise((function(t,o){var r="https://app.postmypartytest.com/api/Templates/".concat(e.Id),s={headers:{Authorization:"Bearer ".concat(n.state.TOKEN),"Content-Type":"application/json"}},i=e;P.a.put(r,i,s).then((function(){a("EDIT_TITLE",e),t("success")})).catch((function(t){o(t)}))}))},deleteTemplates:function(t,e){var n=this,a=t.commit;return new Promise((function(t,o){var r="https://app.postmypartytest.com/api/Templates/".concat(e),s={headers:{Authorization:"Bearer ".concat(n.state.TOKEN),"Content-Type":"application/json"}};P.a.delete(r,s).then((function(n){a("DELETE_TITLE",e),t("success")})).catch((function(t){o(t)}))}))},getTemplates:function(t){var e=this,n=t.commit;return new Promise((function(t,a){var o="https://app.postmypartytest.com/api/Templates",r={headers:{Authorization:"Bearer ".concat(e.state.TOKEN),"Content-Type":"application/json"}},s={params:{grant_type:"password",username:"test_project_dev@mailinator.com",password:123456}};P.a.get(o,r,s).then((function(t){n("SET_TEMP_VALS",JSON.parse(JSON.stringify(t.data.Data))),n("SET_TEMP_PAGE",JSON.parse(JSON.stringify(t.data.NumberOfPages)))})).catch((function(t){a(t)}))}))},getPosts:function(t,e){var n=this,a=t.commit;return new Promise((function(t,o){var r="https://app.postmypartytest.com/api/Templates/".concat(e,"/Posts"),s={headers:{Authorization:"Bearer ".concat(n.state.TOKEN),"Content-Type":"application/json"}},i={params:{grant_type:"password",username:"test_project_dev@mailinator.com",password:123456}};P.a.get(r,s,i).then((function(t){a("SET_POSTS_VALS",JSON.parse(JSON.stringify(t.data.Data)))})).catch((function(t){o(t)}))}))},addPosts:function(t,e){var n=this,a=t.commit;return new Promise((function(t,o){var r="https://app.postmypartytest.com/api/Templates/".concat(e.id,"/Posts"),s={headers:{Authorization:"Bearer ".concat(n.state.TOKEN),"Content-Type":"application/json"}},i=e.val;P.a.post(r,i,s).then((function(t){a("ADD_POST",t.data)})).catch((function(t){o(t)}))}))},editPosts:function(t,e){var n=this,a=t.commit;return new Promise((function(t,o){var r="https://app.postmypartytest.com/api/TemplatePosts/".concat(e.Id),s={headers:{Authorization:"Bearer ".concat(n.state.TOKEN),"Content-Type":"application/json"}},i=e;P.a.put(r,i,s).then((function(e){a("EDIT_POST",i),t("success")})).catch((function(t){o(t)}))}))},deletePosts:function(t,e){var n=this,a=t.commit;return new Promise((function(t,o){var r="https://app.postmypartytest.com/api/TemplatePosts/".concat(e),s={headers:{Authorization:"Bearer ".concat(n.state.TOKEN),"Content-Type":"application/json"}};P.a.delete(r,s).then((function(n){a("DELETE_POST",e),t("success")})).catch((function(t){o(t)}))}))}}}),U=n("f309");a["a"].use(U["a"]);var q=new U["a"]({}),Y=(n("d1e78"),n("2106")),Z=n.n(Y);a["a"].use(Z.a,P.a),a["a"].config.productionTip=!1,new a["a"]({router:F,store:z,vuetify:q,render:function(t){return t(g)}}).$mount("#app")},"5ad8":function(t,e,n){"use strict";n("7d96")},"7d96":function(t,e,n){},"85ec":function(t,e,n){},f47e:function(t,e,n){"use strict";n("f665")},f665:function(t,e,n){}});
//# sourceMappingURL=app.fc0e2902.js.map