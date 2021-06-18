"use strict";var __awaiter=this&&this.__awaiter||function(r,i,u,a){return new(u=u||Promise)(function(t,e){function n(r){try{o(a.next(r))}catch(r){e(r)}}function s(r){try{o(a.throw(r))}catch(r){e(r)}}function o(r){var e;r.done?t(r.value):((e=r.value)instanceof u?e:new u(function(r){r(e)})).then(n,s)}o((a=a.apply(r,i||[])).next())})},__generator=this&&this.__generator||function(t,n){var s,o,i,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},r={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function e(e){return function(r){return function(e){if(s)throw new TypeError("Generator is already executing.");for(;u;)try{if(s=1,o&&(i=2&e[0]?o.return:e[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,e[1])).done)return i;switch(o=0,i&&(e=[2&e[0],i.value]),e[0]){case 0:case 1:i=e;break;case 4:return u.label++,{value:e[1],done:!1};case 5:u.label++,o=e[1],e=[0];continue;case 7:e=u.ops.pop(),u.trys.pop();continue;default:if(!(i=0<(i=u.trys).length&&i[i.length-1])&&(6===e[0]||2===e[0])){u=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){u.label=e[1];break}if(6===e[0]&&u.label<i[1]){u.label=i[1],i=e;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(e);break}i[2]&&u.ops.pop(),u.trys.pop();continue}e=n.call(t,u)}catch(r){e=[6,r],o=0}finally{s=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,r])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkUrl=exports.ApiResult=exports.ApiError=void 0;var url=require("url"),cross_fetch_1=require("cross-fetch");require("../../global");var utils_1=require("../../utils"),ApiError=function(){function r(){}return r.invalidCookie={errCode:1e3,errMessage:"Invalid cookie"},r.invalidParam={errCode:1001,errMessage:"Invalid Param"},r.invalidUrl={errCode:1002,errMessage:"Invalid Url"},r.fetchUrlError={errCode:1101,errMessage:"Fetch url error"},r}();exports.ApiError=ApiError;var ApiResult=function(){var e=this;this.success=!0,this.setError=function(r){e.success=!1,e.error=r}};function checkUrl(i,u){return __awaiter(this,void 0,void 0,function(){var e,t,n,s,o;return __generator(this,function(r){switch(r.label){case 0:return(e=new ApiResult,t=i.request.body||{},global.isDevEdition)?(n=utils_1.checkCookie(i),[3,3]):[3,1];case 1:return[4,utils_1.checkToken(null==t?void 0:t.token)];case 2:n=r.sent(),r.label=3;case 3:return n?[3,5]:(e.setError(ApiError.invalidCookie),responseResult(i,e),[4,u()]);case 4:return r.sent(),[2];case 5:return(s=!!t.url&&isUrlSecurity(t.url),t.url&&s)?[3,7]:(setApiResultError(e,ApiError.invalidParam),responseResult(i,e),[4,u()]);case 6:return r.sent(),[2];case 7:return[4,fetchUrlInfo(t.url).catch(function(r){})];case 8:return(o=r.sent())?e.data=o:setApiResultError(e,ApiError.fetchUrlError),responseResult(i,e),[4,u()];case 9:return r.sent(),[2]}})})}function fetchUrlInfo(n){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(r){switch(r.label){case 0:return t={url:n},process.env.NODE_TLS_REJECT_UNAUTHORIZED="0",[4,cross_fetch_1.default(n,{method:"HEAD"}).catch(function(r){})];case 1:return(e=r.sent())?(t.status=e.status,t.statusText=e.statusText,400<=e.status||(t.headers={},e.headers&&e.headers.forEach(function(r,e){t.headers[e]=r})),[2,Promise.resolve(t)]):[2,Promise.resolve(null)]}})})}function setApiResultError(r,e){r.success=!1,r.error=e}function responseResult(r,e){r.type="json",r.body=JSON.stringify(e)}function isUrlSecurity(r){if(!r)return!1;try{var e=url.parse(r),t=null==e?void 0:e.protocol,n=null==e?void 0:e.hostname,s="https:"!==t?!1:!0;return 0==n.indexOf("localhost")&&(s=!1),(0==n.indexOf("127")||"169.254.169.254"==n||-1<r.indexOf("::1"))&&(s=!1),s}catch(r){return!1}}exports.ApiResult=ApiResult,exports.checkUrl=checkUrl;