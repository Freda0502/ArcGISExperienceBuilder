System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime"],(function(e){var t,n,r;return{setters:[function(e){t=e},function(e){n=e},function(e){r=e}],execute:function(){e(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=420)}({0:function(e,n){e.exports=t},1:function(e,t){e.exports=n},331:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H1v12a1 1 0 001 1h12a1 1 0 001-1V2zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1 3h4a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm0 1v4h4V4H3zm7 5h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3a1 1 0 011-1zm0 1v3h3v-3h-3z" fill="#000" fill-rule="nonzero"></path></svg>'},420:function(e,t,n){"use strict";n.r(t);var r,o=n(0),u=n(5),i="Fixed Panel",a=n(1),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=n(331),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.layouts,n=e.id,r=e.intl,l=e.builderSupportModules,c=window.jimuConfig.isInBuilder?l.widgetModules.LayoutBuilder:u.FixedLayoutViewer;if(!c)return Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},"No layout component!");var f=Object.keys(t)[0];return Object(o.jsx)("div",{className:"widget-fixed-layout d-flex w-100 h-100"},Object(o.jsx)(c,{layouts:t[f],isInWidget:!0,style:{overflow:"auto",minHeight:"none"}},Object(o.jsx)(a.WidgetPlaceholder,{icon:s,widgetId:n,style:{border:"none"},message:r.formatMessage({id:"tips",defaultMessage:i})})))},t}(o.React.PureComponent);t.default=c},5:function(e,t){e.exports=r}}))}}}));