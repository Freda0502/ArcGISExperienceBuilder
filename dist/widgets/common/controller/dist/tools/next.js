System.register(["jimu-core","jimu-ui"],(function(t){var e,n;return{setters:[function(t){e=t},function(t){n=t}],execute:function(){t(function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=214)}({0:function(t,n){t.exports=e},1:function(t,e){t.exports=n},214:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(1),i=function(){function t(){this.index=2,this.id="controller-roll-list-next",this.classes={}}return t.prototype.visible=function(t){var e=Object(o.getAppStore)().getState().widgetsState[t.layoutItem.widgetId];return!(null==e?void 0:e.hideArrow)},t.prototype.disabled=function(t){var e=Object(o.getAppStore)().getState().widgetsState[t.layoutItem.widgetId];return null==e?void 0:e.disableNext},t.prototype.getGroupId=function(){return null},t.prototype.getTitle=function(){var t=o.i18n.getIntl("_jimu");return t?t.formatMessage({id:"next",defaultMessage:r.defaultMessages.next}):"Next"},t.prototype.getIcon=function(){var t,e=null===(t=Object(o.getAppStore)().getState().appContext)||void 0===t?void 0:t.isRTL;return n(e?52:61)},t.prototype.onClick=function(t){var e,n=t.layoutItem.widgetId,r=Object(o.getAppStore)().getState().widgetsState[t.layoutItem.widgetId];if(null==r?void 0:r.onArrowClick){r.onArrowClick(!1,!1);var i=null!==(e=null==r?void 0:r.version)&&void 0!==e?e:0;Object(o.getAppStore)().dispatch(o.appActions.widgetStatePropChange(n,"version",++i))}},t.prototype.getSettingPanel=function(t){return null},t}();e.default=i},52:function(t,e){t.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M4.916 7l5.052 5.125c.31.315.31.825 0 1.14a.786.786 0 01-1.123 0L3.232 7.568a.814.814 0 010-1.138L8.845.736a.786.786 0 011.123 0c.31.314.31.824 0 1.139L4.916 7z" fill="#000"></path><path d="M0 0h14v14H0z"></path></g></svg>'},61:function(t,e){t.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M8.784 7L3.732 1.875a.814.814 0 010-1.14.786.786 0 011.123 0l5.613 5.696c.31.314.31.824 0 1.138l-5.613 5.695a.786.786 0 01-1.123 0 .814.814 0 010-1.139L8.784 7z" fill="#000"></path><path d="M0 0h14v14H0z"></path></g></svg>'}}))}}}));