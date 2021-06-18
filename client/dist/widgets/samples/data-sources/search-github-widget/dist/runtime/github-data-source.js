System.register(["jimu-core/data-source"],(function(t){var e;return{setters:[function(t){e=t}],execute:function(){t(function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=348)}({348:function(t,e,r){"use strict";r.r(e),r.d(e,"DataSourceTypes",(function(){return o})),r.d(e,"GithubRepositoryDataSource",(function(){return a}));var n,o,u=r(48),i=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});!function(t){t.GitHubRepository="GITHUB_REPOSITORY"}(o||(o={}));var c=function(){function t(){}return t.prototype.createDataSource=function(t){var e=t.dataSourceJson;if(e.type===o.GitHubRepository)return new a(t);console.error("Unimplemented data source type.",e.type)},t}();e.default=c;var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.load=function(e,r){return t.prototype.load.call(this,e,r)},e.prototype.doQuery=function(t){var e=this;return window.fetch(this.url+"?q="+t.q).then((function(t){return t.json()})).then((function(r){return{queryParams:t,records:r.items.map((function(t){return new u.SimpleDataRecordImpl(t,e)}))}}))},e.prototype.getConfigQueryParams=function(){return null},e.prototype.getRemoteQueryParams=function(){return null},e.prototype.doQueryCount=function(t){return Promise.resolve({queryParams:t,count:0})},e.prototype.doQueryById=function(t){return Promise.reject("todo: query by id")},e.prototype.mergeQueryParams=function(t,e){return null},e.prototype.setJsonData=function(t){var e=this;this.records=t.map((function(t){return new u.SimpleDataRecordImpl(t,e)}))},e.prototype.doAdd=function(t){return Promise.resolve(t)},e}(u.AbstractQueriableDataSource)},48:function(t,r){t.exports=e}}))}}}));