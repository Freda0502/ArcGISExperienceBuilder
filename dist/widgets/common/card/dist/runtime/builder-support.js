System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime","jimu-for-builder","jimu-layouts/layout-builder","jimu-core/dnd"],(function(e){var t,o,n,r,i,u;return{setters:[function(e){t=e},function(e){o=e},function(e){n=e},function(e){r=e},function(e){i=e},function(e){u=e}],execute:function(){e(function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=415)}({0:function(e,o){e.exports=t},1:function(e,t){e.exports=o},19:function(e,t){e.exports=i},415:function(e,t,o){"use strict";o.r(t);var n,r=o(0),i=o(54),u=o(1),s=o(5),a=o(8),p=o(19),l=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=function(e){function t(t){var o=e.call(this,t)||this;o.onDropDownToggle=function(e){e.stopPropagation();var t=o.props,n=t.isDropDownOpen,r=t.onDropDownOpenChange;if(void 0!==n)r&&r(!n);else{var i=o.state.isOpen;o.setState({isOpen:!i})}},o.onItemClick=function(e,t){var n=o.props,r=n.isDropDownOpen,i=n.onDropDownOpenChange;void 0!==r?i&&i(!1):o.setState({isOpen:!1}),t.event(e,t),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},o.onDropDownMouseClick=function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},o.state={isOpen:!1};var n=t.withBuilderStyle;return o.MyDropdown=n?n(u.Dropdown):u.Dropdown,o.MyDropdownToggle=n?n(u.DropdownToggle):u.DropdownToggle,o.MyDropdownMenu=n?n(u.DropdownMenu):u.DropdownMenu,o.MyDropdownItem=n?n(u.DropdownItem):u.DropdownItem,o}return l(t,e),t.prototype.render=function(){var e=this,t=this.props,o=t.items,n=t.toggleContent,i=t.caret,u=t.toggleType,s=t.menuContent,a=t.modifiers,p=t.toggleIsIcon,l=t.theme,c=t.isDropDownOpen,d=t.size,f=t.appendToBody,y=t.toggleTitle,g=t.direction,m=t.menuCss,w=t.className,h=t.showActive,I=t.activeLabel,D=t.fluid,O=this.state.isOpen;O=void 0===c?O:c;var v=this.MyDropdown,S=this.MyDropdownToggle,_=this.MyDropdownMenu,b=this.MyDropdownItem;return Object(r.jsx)(v,{size:d,toggle:this.onDropDownToggle,direction:g,fluid:D,isOpen:O,className:"my-dropdown "+w},n&&Object(r.jsx)(S,{icon:p,title:y,size:d,type:u,caret:i},n&&n(l)),Object(r.jsx)(_,{appendToBody:f,modifiers:a,css:m&&m(l)},s?s(l):o&&o.asMutable().map((function(t,o){return!t.hide&&Object(r.jsx)(b,{key:o,className:"no-user-select",active:h&&t.label===I,onClick:function(o){return e.onItemClick(o,t)}},t.label)}))))},t}(r.React.PureComponent),d=function(){return(d=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},f=r.themeUtils.withBuilderStyle,y=r.themeUtils.withBuilderTheme,g={ButtonGroup:u.ButtonGroup,interact:i.interact,searchUtils:s.searchUtils,getAppConfigAction:a.getAppConfigAction,GLOBAL_DRAGGING_CLASS_NAME:p.GLOBAL_DRAGGING_CLASS_NAME,GLOBAL_RESIZING_CLASS_NAME:p.GLOBAL_RESIZING_CLASS_NAME,GLOBAL_H5_DRAGGING_CLASS_NAME:p.GLOBAL_H5_DRAGGING_CLASS_NAME,withBuilderStyle:f,withBuilderTheme:y,BuilderDropDown:y((function(e){return r.React.createElement(c,d({},e,{withBuilderStyle:f}))})),BuilderPopper:f(u.Popper),BuilderButton:f(u.Button),selectionIsSelf:function(e,t,o){if(!e||!e.layoutItemId||!e.layoutId)return!1;var n=s.searchUtils.findLayoutItem(o,e);return!(!n||!n.widgetId||n.widgetId!==t)},selectionInCard:function(e,t,o,n){return void 0===n&&(n=!0),!!(e&&e.layoutItemId&&e.layoutId)&&(n?i=s.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(o,e,t,Object(r.getAppStore)().getState().browserSizeMode):((i=[]).push.apply(i,s.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(o,e,t,r.BrowserSizeMode.Large)),i.push.apply(i,s.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(o,e,t,r.BrowserSizeMode.Medium)),i.push.apply(i,s.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(o,e,t,r.BrowserSizeMode.Small))),i.length>0);var i}};t.default=g},5:function(e,t){e.exports=n},54:function(e,t){e.exports=u},8:function(e,t){e.exports=r}}))}}}));