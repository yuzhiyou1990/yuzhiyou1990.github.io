(function(t){function e(e){for(var n,c,o=e[0],i=e[1],l=e[2],h=0,p=[];h<o.length;h++)c=o[h],s[c]&&p.push(s[c][0]),s[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var i=a[o];0!==s[i]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},r=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00c3":function(t,e,a){"use strict";var n=a("260e"),s=a.n(n);s.a},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},1:function(t,e){},2:function(t,e){},"260e":function(t,e,a){},3:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],c={name:"app",components:{}},o=c,i=(a("034f"),a("2877")),l=Object(i["a"])(o,s,r,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,h=(a("3055"),a("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.alertShowing?n("v-alert",{attrs:{type:t.alertType,message:t.alertMessage,"show-icon":""}}):t._e(),n("v-row",[n("v-col",{attrs:{span:"24"}},[n("div",{staticClass:"search-box",on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.enterClick(e):null}}},[n("v-input",{staticClass:"search-input",attrs:{size:"large",placeholder:"请输入 EOS 账户"},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),n("v-button",{staticClass:"search",attrs:{type:"primary",shape:"circle",icon:"search"},on:{click:t.seachClick}})],1)])],1),"query"===t.searchStatus?n("v-row",[n("v-col",{attrs:{span:"24"}},[n("div",{staticClass:"card"},[n("v-spin",{attrs:{tip:"查询中."}})],1)])],1):"success"===t.searchStatus?[n("v-row",{attrs:{type:"flex",align:"middle"}},[n("v-col",{attrs:{span:"10"}},[n("div",{staticClass:"card"},[n("h3",{staticClass:"h3-red"},[t._v(t._s(t.eosAccountName))]),n("span",[t._v(t._s(t.eosAccountBalance))])])]),n("v-col",{attrs:{span:"4"}},[n("img",{staticClass:"right-arrow",attrs:{src:a("6b3a")}})]),n("v-col",{attrs:{span:"10"}},[n("div",{staticClass:"card"},[n("h3",{staticClass:"h3-red"},[t._v(t._s(t.bosAccountName))]),n("span",[t._v(t._s(t.bosAccountBalance))])])])],1),n("v-row",{attrs:{type:"flex",justify:"start"}},[n("v-col",{attrs:{span:"24"}},[n("div",{staticClass:"card card-bottom"},[n("h3",{staticClass:"left-h3"},[t._v("Owner")]),n("span",{staticClass:"span—permission"},[t._v(t._s(t.owner_key))]),n("h3",{staticClass:"left-h3"},[t._v("Active")]),n("span",{staticClass:"span—permission"},[t._v(t._s(t.active_key))])])])],1)]:"fail"===t.searchStatus?n("v-row",[n("v-col",{attrs:{span:"24"}},[n("div",{staticClass:"card"},[n("h3",[t._v("未查询到相关账户")])])])],1):n("v-row",[n("v-col",{attrs:{span:"24"}},[n("v-button",{attrs:{type:"primary"},on:{click:t.scatterLoginClick}},[t._v("Scatter 登录")])],1)],1),n("v-row",{attrs:{type:"flex",justify:"start"}},[n("v-col",{attrs:{span:"24"}},[n("div",{staticClass:"card card-bottom"},[n("h3",{staticClass:"left-h3"},[t._v("BOS 快照说明")]),n("span",{staticClass:"span-rule"},[t._v("\n\t\t\t\t\t\t时间："),n("span",{staticClass:"span-rule span-red"},[t._v("2019-01-01 17:50:00")]),t._v("\n\t\t\t\t\t\t比例："),n("span",{staticClass:"span-rule span-red"},[t._v("20 EOS : 1 BOS")]),n("span",[t._v("小于 0.5 EOS，则为 0.5 BOS")])])])])],1)],2)},f=[],d=a("a745"),v=a.n(d),A=(a("7f7f"),a("7514"),a("f499")),b=a.n(A),g={name:"home",data:function(){return{alertShowing:!1,alertType:"error",alertMessage:"message",searchText:"",searchStatus:"default",eosAccountName:"",bosAccountName:"",eosAccountBalance:"",bosAccountBalance:"",owner_key:"",active_key:"",isBlockchainEOS:!0}},mounted:function(){var t=ScatterJS.Network.fromJson({blockchain:"eos",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",host:"eosmainnet.medishares.net",port:443,protocol:"https"});if(mathwallet.isMath()){var e=this;mathwallet.getWalletType().then(function(a){"EOS"!=a?(t=ScatterJS.Network.fromJson({blockchain:"eos",chainId:"d5a3d18fbb3c084e3b1f3fa98c21014b5f3db536cc15d08f9f6479517c6a3d86",host:"bosnet.medishares.net",port:443,protocol:"https"}),e.isBlockchainEOS=!1):e.isBlockchainEOS=!0,e.scatterConnecting(t)})}else this.isBlockchainEOS=!0,this.scatterConnecting(t)},methods:{hideAlert:function(){this.alertShowing=!1},showAlert:function(t,e){this.alertShowing=!0,this.alertType=t,this.alertMessage=e},scatterConnecting:function(t){var e=this;ScatterJS.connect("BOSMapping",{network:t}).then(function(t){t?e.scatterLoginClick():e.showAlert("warning","Scatter connect failed!")}).catch(function(t){e.showAlert("error",b()(t))})},scatterLoginClick:function(){var t=this;ScatterJS.login().then(function(e){var a=ScatterJS.identity.accounts.find(function(t){return"eos"===t.blockchain});t.isBlockchainEOS?(t.searchText=a.name,t.seachClick()):t.showAlert("warning","请切换到 EOS 钱包或输入 EOS 账户查询")}).catch(function(e){t.showAlert("error",b()(e))})},enterClick:function(){this.seachClick()},seachClick:function(){if(0!=this.searchText.length){this.searchStatus="query";var t=this;this.$http({method:"get",url:"http://market.jiazechen.com/site/jsonp?url=https://api.boslaoge.me/"+this.searchText,headers:{"Access-Control-Allow-Credentials":!0}}).then(function(e){v()(e.data)&&e.data.length>0?(t.searchStatus="success",t.eosAccountName=e.data[0].eos_account,t.bosAccountName=e.data[0].bos_account,t.eosAccountBalance=e.data[0].eos_balance,t.bosAccountBalance=e.data[0].bos_balance,t.active_key=e.data[0].active_key,t.owner_key=e.data[0].owner_key):(t.searchStatus="fail",console.log("No Search Result!"))}).catch(function(e){t.searchStatus="fail",t.showAlert("error","查询 BOS 快照出现网络异常！")})}}}},w=g,m=(a("00c3"),Object(i["a"])(w,p,f,!1,null,"d18c186e",null));m.options.__file="Home.vue";var C=m.exports;n["default"].use(h["a"]);var S=new h["a"]({routes:[{path:"/",name:"home",component:C}]}),k=(a("76fe"),a("9012")),y=a.n(k),_=a("bc3a"),O=a.n(_),B=a("a7fe"),E=a.n(B),x=a("76b0"),j=a.n(x),T=a("876a"),Q=a.n(T);n["default"].use(y.a),n["default"].use(E.a,O.a),j.a.plugins(new Q.a),n["default"].config.productionTip=!1,new n["default"]({router:S,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,a){},"6b3a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAwCAYAAABE1blzAAAAAXNSR0IArs4c6QAAAxlJREFUaAXVmluITWEUx+fMmAZjaEyGXApTLiWUaEQSkQeTKPGElAfJgxQPlOSBlDwpzYPkifEkeSEllxIpJKGMIXfjaDAuB3P8Vp2m3fKdXXv6tNZZ9e/stb691/r/Zs9lX6aqyjCKxeIS9ATl0X6UM7QTfzRAb1AyTpLUxJ9k0BGQavQ1SVfa7uCz1sBS/JGA7AgASuk8qos/0aAjILuEKBCXqNUbWIo/EpBtqC8AeZ3a8PgTDToCsgn9CUDepjbSwFL8kYCsQ78CkPepjY4/0aAjIG3oRwDyMbXxBpbijwRkGeoNQD6jNjn+RIOOgCxEPUjHKwrTDCzFHwnIXPRRE5K/R7PiTzToCMhM9A7pkOvXeQaW4o8EZCp6qQnJP6NF8ScadARkEupEOr5RWG5gKf5IQMahR5qQXP6srIo/0aAjIM3oHtIhFwjrDSzFHwlII7qlCcnlUm9z/IkGHQFpQFeRDrlo325gKf5IQIaii5qwlG+JP9GgIzB16FwAskBtioGl+CMBGYROByDbcxTbGLkHyZW656daefydyOVyR/n8J+CQh1XX0PzE4nMB7KbQlCh632wBsjNkEpbd1A8l1grVJAdQT6LodbOAsXbUlWJwgVrL939LQj+Mxf5c7egh7eXM9ZUzgn85UXvV+hmVV2YK3BEUitbKJCq5hkh+hxwPkVE7WOlwNUCcKgN3jLrnH7f0rz3ma9HZMnCH0492vgrUYHShDNw+5/bT7QFVjy6XgduZfrTzVaBGoBsBOLl72Orcfro9AJrQnQDcb2ob0o92vgrAGPQgACd3C2ud20+3B8AEJK+4dXynsDL9aOerALSgLk1GLm+Flzq3n24PgOnoNdIhj/L1BXV6M2+rAMxG8mheRzeFOd78ZvIDQCv6pMnI36IZmZp52xmAxegL0vGCQmU/WwFgBZJH8DqeUpjo7WRk8gPAavRTk5E/RGMzNfO2MwBrUOid/F3qo7z5zeQHALlZ/YB03KTQmKmZx52BkH/lkvd7ybhC0uDR74A8AbMRyasviQ40ZECNPB8ElNzjNf8vj38BJYYOER0iOQUAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.1a1d28c0.js.map