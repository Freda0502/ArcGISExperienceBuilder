System.register(["jimu-core","jimu-ui","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-layouts/layout-runtime","jimu-layouts/layout-builder"],(function(e){var t,n,o,i,r,a;return{setters:[function(e){t=e},function(e){n=e},function(e){o=e},function(e){i=e},function(e){r=e},function(e){a=e}],execute:function(){e(function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=112)}({0:function(e,n){e.exports=t},1:function(e,t){e.exports=n},112:function(e,t,n){"use strict";n.r(t);var o,i,r=n(0),a=n(2),s=n(1),l=n(3),c=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},u=Object(r.css)(o||(o=c(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"],["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"])));function d(e,t,n){return Object(r.css)(i||(i=c(["\n    ",";\n    overflow: auto;\n\n    .content-section {\n      height: 100%;\n      width: 100%;\n      overflow: auto;\n    }\n\n    .content {\n      padding: 1.5rem;\n      margin: 0 auto;\n    }\n\n    .top-section {\n      margin-top: 5px;\n    }\n\n    .page-name {\n      color: ",";\n    }\n\n    .body-section {\n      width: 100%;\n      display: flex;\n      margin-top: 5px;\n      overflow: visible;\n      position: relative;\n      align-items: center;\n      // box-shadow: 0 2px 5px 1px rgba(0,0,0,0.15);\n\n      .device-frame {\n        position: relative;\n        overflow: hidden;\n        height: ",";\n        flex-grow: 0;\n        flex-shrink: 0;\n\n        &.center-origin {\n          transform-origin: top center;\n          align-self: center;\n        }\n        &.left-origin {\n          transform-origin: top left;\n          align-self: flex-start;\n        }\n\n        iframe {\n          width: 100%;\n          // height: 100%;\n          border: none;\n          position: relative;\n          overflow: visible;\n        }\n      }\n    }\n  "],["\n    ",";\n    overflow: auto;\n\n    .content-section {\n      height: 100%;\n      width: 100%;\n      overflow: auto;\n    }\n\n    .content {\n      padding: 1.5rem;\n      margin: 0 auto;\n    }\n\n    .top-section {\n      margin-top: 5px;\n    }\n\n    .page-name {\n      color: ",";\n    }\n\n    .body-section {\n      width: 100%;\n      display: flex;\n      margin-top: 5px;\n      overflow: visible;\n      position: relative;\n      align-items: center;\n      // box-shadow: 0 2px 5px 1px rgba(0,0,0,0.15);\n\n      .device-frame {\n        position: relative;\n        overflow: hidden;\n        height: ",";\n        flex-grow: 0;\n        flex-shrink: 0;\n\n        &.center-origin {\n          transform-origin: top center;\n          align-self: center;\n        }\n        &.left-origin {\n          transform-origin: top left;\n          align-self: flex-start;\n        }\n\n        iframe {\n          width: 100%;\n          // height: 100%;\n          border: none;\n          position: relative;\n          overflow: visible;\n        }\n      }\n    }\n  "])),e?u:"",n.colors.palette.dark[200],t>0?t+"px":"auto")}var p=n(4),g=n(6),f=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((o=o.apply(e,t||[])).next())}))},m=function(e,t){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};function h(e,t,n){return f(this,void 0,Promise,(function(){var o,i,r,a;return m(this,(function(s){switch(s.label){case 0:o=[],(i=function(n){for(var r,a=e.layouts[n],s=null!==(r=a.order)&&void 0!==r?r:[],l=0;l<s.length;l++){var c=a.content[s[l]];if(c.widgetId){var u=e.widgets[c.widgetId];if("widgets/layout/row/"===(null==u?void 0:u.uri)&&o.push({layoutId:n,layoutItemId:s[l]}),null==u?void 0:u.layouts)for(var d in u.layouts){var p=u.layouts[d][t];i(p)}}}})(n),r=e,a=0,s.label=1;case 1:return a<o.length?[4,v(r,t,o[a])]:[3,4];case 2:r=s.sent(),s.label=3;case 3:return a++,[3,1];case 4:return[2,Promise.resolve(r)]}}))}))}function v(e,t,n){var o,i,r,s,l,c;return f(this,void 0,Promise,(function(){var u,d,g,f,h,v,w,x,j,O,I,S,C,M,A,P,z;return m(this,(function(m){switch(m.label){case 0:return u=n.layoutId,d=n.layoutItemId,g=null===(i=null===(o=e.layouts[u])||void 0===o?void 0:o.content[d])||void 0===i?void 0:i.widgetId,f=e.widgets[g],h=Object.keys(null!==(r=null==f?void 0:f.layouts)&&void 0!==r?r:{})[0],(v=null===(l=null===(s=null==f?void 0:f.layouts)||void 0===s?void 0:s[h])||void 0===l?void 0:l[t])?(w=e.layouts[v],x=Object.keys(null!==(c=w.content)&&void 0!==c?c:{}).sort((function(e,t){return parseInt(w.content[e].bbox.left,10)-parseInt(w.content[t].bbox.left,10)})),[4,y(e,t,v)]):[2,Promise.resolve(e)];case 1:for(j=m.sent(),O=j.embedLayoutId,I=j.updatedAppConfig,S=0;S<x.length;S+=1)C=I.layouts[v].content[x[S]],M=p.utils.calHeightOfLayoutItem(200,C),A=b(I,{layoutId:v,layoutItemId:x[S]},O),P=A.layoutInfo,I=A.appConfig,(z=Object(a.getAppConfigAction)(I)).editLayoutItemBBox(P,{width:"auto",height:M.height}).editLayoutItemSetting(P,M.setting),I=z.appConfig;return I=I.setIn(["layouts",u,"content",d,"setting","autoHeight"],!0).setIn(["layouts",u,"content",d,"setting","autoProps","height"],p.LayoutItemSizeModes.Auto),[2,Promise.resolve(I)]}}))}))}function b(e,t,n){var o,i=t.layoutId,r=t.layoutItemId,a=e.layouts[i].content[r],s=e.layouts[n],l=""+(p.utils.getMaximumId(s)+1),c=a.set("id",l).setIn(["setting","autoProps","width"],p.LayoutItemSizeModes.Auto),u=e.setIn(["layouts",n,"content",l],c).setIn(["layouts",n,"order"],[].concat(null!==(o=s.order)&&void 0!==o?o:[],l)),d=e.layouts[i],g=[].concat(d.order),f=g.indexOf(r);return g.splice(f,1),d=d.set("content",d.content.without(r)).set("order",g),{appConfig:u=u.setIn(["layouts",i],d),layoutInfo:{layoutId:n,layoutItemId:l}}}function y(e,t,n){return f(this,void 0,Promise,(function(){var o,i,s,l,c,u,d,g,f,h;return m(this,(function(m){switch(m.label){case 0:return o=Object(a.getAppConfigAction)(e),i=a.appConfigUtils.getUniqueId(e,"widget"),s={uri:"widgets/layout/column/",id:i},[4,a.AppWidgetManager.getInstance().handleNewWidgetJson(s)];case 1:return l=m.sent(),o.createWidget(Object(r.Immutable)(l)),c=Object(r.Immutable)({bbox:{left:0,width:12},id:""+(p.utils.getMaximumId(e.layouts[n])+1),type:r.LayoutItemType.Widget,widgetId:s.id,setting:{autoProps:{height:p.LayoutItemSizeModes.Auto},autoHeight:!0}}),u=o.appConfig.widgets[i],d=Object.keys(u.layouts)[0],g=u.layouts[d][t],f=e.layouts[n].order,h=o.appConfig.setIn(["layouts",n,"content",c.id],c).setIn(["layouts",n,"order"],[].concat(null!=f?f:[],c.id)),[2,{widgetId:i,embedLayoutId:g,updatedAppConfig:h}]}}))}))}function w(e){var t,n,o,i;if((null===(n=null===(t=Object(r.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo)||void 0===n?void 0:n.appMode)===r.AppMode.Design){var s,l=e.layoutId,c=e.layoutItemId,u=Object(a.getAppConfigAction)().appConfig,d=u.layouts[l].content[c];if(d)null!==(i=null===(o=u.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==i&&i?d.type===r.LayoutItemType.Widget&&d.widgetId&&function(e,t){Object(a.getAppConfigAction)().updateLayoutItem(e,"widgetId",void 0).removeWidget(t).exec()}(e,d.widgetId):d.type===r.LayoutItemType.Widget?d.widgetId?function(e,t){var n=Object(a.getAppConfigAction)(),o=p.searchUtils.findParentLayoutItem(e,n.appConfig,Object(g.getRootLayoutId)(),p.utils.getCurrentSizeMode());n.removeWidget(t).exec(),a.builderAppSync.publishChangeSelectionToApp(o)}(e,d.widgetId):function(e){var t=Object(a.getAppConfigAction)(),n=p.searchUtils.findParentLayoutItem(e,t.appConfig,Object(g.getRootLayoutId)(),p.utils.getCurrentSizeMode());t.removeLayoutItem(e,!1).exec(),a.builderAppSync.publishChangeSelectionToApp(n)}(e):d.type===r.LayoutItemType.Section?function(e,t){var n=Object(a.getAppConfigAction)(),o=p.searchUtils.findParentLayoutItem(e,n.appConfig,Object(g.getRootLayoutId)(),p.utils.getCurrentSizeMode());n.removeSection(t).exec(),a.builderAppSync.publishChangeSelectionToApp(o)}(e,d.sectionId):d.type===r.LayoutItemType.ScreenGroup&&(s=d.screenGroupId,Object(a.getAppConfigAction)().removeScreenGroup(s).exec(),a.builderAppSync.publishChangeSelectionToApp(null))}}var x,j,O,I,S,C,M,A,P,z,k=(x=function(e,t){return(x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}x(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),L=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},R=n(19),T=function(e){function t(t){var n=e.call(this,t)||this;return n.handleCloseBtn=function(){n.isOkClick=!1,n.setState({isOpen:!1});var e=n.props,t=e.toggle;void 0!==e.isOpen&&t&&t()},n.handleOkClick=function(){n.isOkClick=!0,n.setState({isOpen:!1});var e=n.props,t=e.toggle;void 0!==e.isOpen&&t&&t()},n.handleToggle=function(){n.setState({isOpen:!n.state.isOpen});var e=n.props,t=e.toggle;void 0!==e.isOpen&&t&&t()},n.onModalClosed=function(){var e=n.props.onClosed;e&&e(n.isOkClick),n.isOkClick=!1},n.formatMessage=function(e){return n.props.formatMessage(e)},n.getStyle=function(){return Object(r.css)(j||(j=L(["\n      .modal-body{\n        overflow-y: auto;\n        max-height: 360px;\n        padding: 0;\n      }\n      .modal-content{\n        width: auto;\n        background: var(--light-300);\n        padding: 30px;\n        border: none;\n      }\n      .modal-footer{\n        padding: 0;\n        margin-top: 30px;\n        .btn {\n          min-width: 80px;\n          + .btn {\n            margin-left: 10px;\n          }\n        }\n      }\n      &.modal-dialog{\n        width: auto;\n      }\n      .choose-template-description{\n        width: 100%;\n        font-size: ","rem;\n        user-select:none;\n      }\n\n      .title-icon {\n        padding: 0 6px;\n      }\n      .title-label {\n        font-size: 1rem;\n        color: var(--black);\n      }\n\n      .message {\n        color: var(--dark-800);\n        margin-left: 36px;\n        margin-top: 1rem;\n      }\n    "],["\n      .modal-body{\n        overflow-y: auto;\n        max-height: 360px;\n        padding: 0;\n      }\n      .modal-content{\n        width: auto;\n        background: var(--light-300);\n        padding: 30px;\n        border: none;\n      }\n      .modal-footer{\n        padding: 0;\n        margin-top: 30px;\n        .btn {\n          min-width: 80px;\n          + .btn {\n            margin-left: 10px;\n          }\n        }\n      }\n      &.modal-dialog{\n        width: auto;\n      }\n      .choose-template-description{\n        width: 100%;\n        font-size: ","rem;\n        user-select:none;\n      }\n\n      .title-icon {\n        padding: 0 6px;\n      }\n      .title-label {\n        font-size: 1rem;\n        color: var(--black);\n      }\n\n      .message {\n        color: var(--dark-800);\n        margin-left: 36px;\n        margin-top: 1rem;\n      }\n    "])),14/17)},n.state={isOpen:!!t.isOpen},n}return k(t,e),t.prototype.render=function(){var e=this.props.isOpen;return e=void 0===e?this.state.isOpen:e,Object(r.jsx)(s.Modal,{css:this.getStyle(),modalClassName:"toc-add-page-modal",backdropClassName:"toc-add-page-modal",isOpen:e,onClosed:this.onModalClosed,toggle:this.handleToggle,centered:!0},Object(r.jsx)(s.ModalBody,null,Object(r.jsx)("div",{className:"d-flex align-items-center"},Object(r.jsx)("div",{className:"title-icon"},Object(r.jsx)(s.Icon,{icon:R,size:24,color:"var(--info-500)"})),Object(r.jsx)("div",{className:"title-label"},this.props.title)),Object(r.jsx)("div",{className:"message font-body2"},this.props.children)),Object(r.jsx)(s.ModalFooter,null,Object(r.jsx)(s.Button,{type:"primary",onClick:this.handleOkClick},this.formatMessage("certainly")),Object(r.jsx)(s.Button,{onClick:this.handleCloseBtn},this.formatMessage("cancel"))))},t}(r.React.PureComponent),B=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),_=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},W=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((o=o.apply(e,t||[])).next())}))},N=function(e,t){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},D=function(e){function t(t){var n=e.call(this,t)||this;return n.formatMessage=function(e,t){return n.props.formatMessage(e,t)},n.toggleLayoutMode=function(){n.props.isAuto?n.handleToggleCustomConfirm():n.handleToggleAutoConfirm()},n.handleToggleAutoConfirm=function(){n.setState({showAutoConfirm:!n.state.showAutoConfirm})},n.autoConfirmClosed=function(e){e&&(n.props.isHeader?n.resetHeader():n.props.isFooter?n.resetFooter():n.resetPageBody())},n.handleToggleCustomConfirm=function(){n.setState({showCustomConfirm:!n.state.showCustomConfirm})},n.customConfirmClosed=function(e){e&&(n.props.isHeader?n.unLockHeaderLayout():n.props.isFooter?n.unLockFooterLayout():n.unLockPageBodyLayout())},n.unLockFooterLayout=function(){var e=n.props,t=e.browserSizeMode,o=e.mainSizeMode;Object(a.getAppConfigAction)().createLayoutForSizeModeForFooter(t,o).exec()},n.unLockHeaderLayout=function(){var e=n.props,t=e.browserSizeMode,o=e.mainSizeMode;Object(a.getAppConfigAction)().createLayoutForSizeModeForHeader(t,o).exec()},n.unLockPageBodyLayout=function(){return W(n,void 0,void 0,(function(){var e,t,n,o,i,s,l,c;return N(this,(function(u){switch(u.label){case 0:return e=this.props,t=e.browserSizeMode,n=e.mainSizeMode,o=e.pageId,i=Object(a.getAppConfigAction)(),s=i.appConfig.pages[o],i.createLayoutForSizeModeForPageBody(t,n,o),l=i.appConfig,s.mode!==r.PageMode.AutoScroll||t!==r.BrowserSizeMode.Small?[3,2]:(c=l.pages[o].layout[t],[4,h(l,t,c)]);case 1:l=u.sent(),u.label=2;case 2:return Object(a.getAppConfigAction)(l).exec(),[2]}}))}))},n.resetHeader=function(){var e=n.props.browserSizeMode;Object(a.getAppConfigAction)().removeSizeModeLayoutFromHeader(e).exec()},n.resetFooter=function(){var e=n.props.browserSizeMode;Object(a.getAppConfigAction)().removeSizeModeLayoutFromFooter(e).exec()},n.resetPageBody=function(){var e=n.props,t=e.browserSizeMode,o=e.pageId;Object(a.getAppConfigAction)().removeSizeModeLayoutFromPageBody(o,t).exec()},n.state={showAutoConfirm:!1,showCustomConfirm:!1},n}return B(t,e),t.prototype.getStyle=function(){var e,t=this.props,n=t.isAuto,o=t.isHeader,i=t.isFooter;return i?e=Object(r.css)(O||(O=_(["position: absolute;"],["position: absolute;"]))):o||i||(e=Object(r.css)(I||(I=_(["\n        position: sticky;\n        transform: translateZ(1px);\n      "],["\n        position: sticky;\n        transform: translateZ(1px);\n      "])))),Object(r.css)(S||(S=_(["\n      ",";\n      .state-toggle-btn{\n        cursor: pointer;\n        position: relative;\n        padding: 0 1rem;\n        overflow: hidden;\n        background: var(--light-500);\n        border-radius: 2px;\n      }\n      .toggle-part {\n        height: 30px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 1;\n      }\n      .toggle-highlight {\n        position: absolute;\n        height: 30px;\n        left: 0;\n        right: 0;\n        background-color: var(--primary);\n        transition: 0.2s;\n        top: ","px;\n      }\n    "],["\n      ",";\n      .state-toggle-btn{\n        cursor: pointer;\n        position: relative;\n        padding: 0 1rem;\n        overflow: hidden;\n        background: var(--light-500);\n        border-radius: 2px;\n      }\n      .toggle-part {\n        height: 30px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 1;\n      }\n      .toggle-highlight {\n        position: absolute;\n        height: 30px;\n        left: 0;\n        right: 0;\n        background-color: var(--primary);\n        transition: 0.2s;\n        top: ","px;\n      }\n    "])),e,n?0:30)},t.prototype.getSizeModeNls=function(e){switch(e){case r.BrowserSizeMode.Small:return this.formatMessage("smallScreen");case r.BrowserSizeMode.Medium:return this.formatMessage("mediumScreen");default:return this.formatMessage("largeScreen")}},t.prototype.render=function(){var e=this.props,t=e.isAuto,n=e.theme,o=e.mainSizeMode,i=this.getSizeModeNls(o);return Object(r.jsx)("div",{style:this.props.style,css:this.getStyle()},Object(r.jsx)("div",{className:"d-flex flex-column state-toggle-btn",onClick:this.toggleLayoutMode,title:t?this.formatMessage("autoEnabledTip",{label:i})+" "+this.formatMessage("customDisabledTip"):this.formatMessage("customEnabledTip")+" "+this.formatMessage("autoDisabledTip")},Object(r.jsx)("div",{className:"toggle-part text-nowrap"},this.formatMessage("auto")),Object(r.jsx)("div",{className:"toggle-part text-nowrap"},this.formatMessage("custom")),Object(r.jsx)("div",{className:"toggle-highlight"})),Object(r.jsx)(T,{theme:n,toggle:this.handleToggleAutoConfirm,onClosed:this.autoConfirmClosed,title:this.formatMessage("enableConfirm"),isOpen:this.state.showAutoConfirm,formatMessage:this.props.formatMessage},Object(r.jsx)("div",null,Object(r.jsx)("div",null,this.formatMessage("autoConfirmMsg",{label:i})))),Object(r.jsx)(T,{theme:n,toggle:this.handleToggleCustomConfirm,onClosed:this.customConfirmClosed,title:this.formatMessage("enableConfirm"),isOpen:this.state.showCustomConfirm,formatMessage:this.props.formatMessage},Object(r.jsx)("div",null,Object(r.jsx)("div",null,this.formatMessage("customConfirmMsg1")),Object(r.jsx)("div",{css:Object(r.css)(C||(C=_(["margin-top: 1rem;"],["margin-top: 1rem;"])))},this.formatMessage("customConfirmMsg2")))))},t}(r.React.PureComponent),F={certainly:"OK",autoEnabledTip:"Auto layout is enabled. Widgets are synced with those on the {label} and arranged automatically.",autoDisabledTip:"Click to enable auto layout.",customEnabledTip:"Custom layout is enabled. Widgets added in other device modes will not be automatically added here. Alternatively, you can manually add them from the pending list on the Insert panel.",customDisabledTip:"Click to enable custom layout.",confirm:"Confirm",enableConfirm:"Are you sure you want to enable it?",autoConfirmMsg:"By enabling this option, the widgets will be synced with those on the {label} and arranged automatically.",customConfirmMsg1:"By enabling this option, you can manually arrange widgets for this device mode.",customConfirmMsg2:"However, widgets added in other device modes will not be automatically added here. Alternatively, you can manually add them from the pending list on the Insert panel.",dragToResize:"Drag to resize",largeScreen:"Large screen device",mediumScreen:"Medium screen device",smallScreen:"Small screen device",deleteWarning:'Deleting a widget will remove it from all devices views. Use "Move to the pending list" button to remove it from current device view and preserve it in the others.',confirmDelete:"Are you sure you want to delete this widget from all devices?"},U=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},H=n(19);function E(){return r.utils.getLocalStorageAppKey()+"-confirm-delete-widget"}function q(){return"false"!==localStorage.getItem(E())}function G(e){var t=e.activePagePart,n=e.currentPageId,o=e.formatMessage,i=r.React.useRef(),l=r.ReactRedux.useSelector((function(e){var t;return null===(t=e.builder)||void 0===t?void 0:t.contentToDelete}),r.ReactRedux.shallowEqual),c=r.React.useCallback((function(){if(!l)return!1;if(!q())return!1;if(!function(e){var t;if(!e)return!1;var n=Object(a.getAppConfigAction)().appConfig,o=e.layoutId,i=e.layoutItemId,s=n.layouts[o].content[i];return!!s&&(s.type===r.LayoutItemType.Section||!(s.type!==r.LayoutItemType.Widget||!s.widgetId)&&(null===(t=n.widgets[s.widgetId].manifest)||void 0===t?void 0:t.widgetType)!==r.WidgetType.Layout)}(l))return!1;var e=Object(a.getAppConfigAction)().appConfig;if(t===r.PagePart.Header){var o=e.header;return Object.keys((null==o?void 0:o.layout)||{}).length>1}if(t===r.PagePart.Footer){var i=e.footer;return Object.keys((null==i?void 0:i.layout)||{}).length>1}if(t===r.PagePart.Body){var s=e.pages[n];return Object.keys(s.layout).length>1}return!1}),[t,n,l]);r.React.useEffect((function(){l&&!c()&&(Object(r.getAppStore)().dispatch(a.builderActions.confirmDeleteContentChanged(null)),w({layoutId:l.layoutId,layoutItemId:l.layoutItemId}))}),[l,c]);var u=r.React.useCallback((function(){Object(r.getAppStore)().dispatch(a.builderActions.confirmDeleteContentChanged(null))}),[]),d=r.React.useCallback((function(){var e;e=!i.current.checked,localStorage.setItem(E(),""+e),Object(r.getAppStore)().dispatch(a.builderActions.confirmDeleteContentChanged(null)),w({layoutId:l.layoutId,layoutItemId:l.layoutItemId})}),[l]);return c()?Object(r.jsx)(s.Modal,{isOpen:!0,centered:!0,css:Object(r.css)(M||(M=U(["\n    .modal-body{\n      overflow-y: auto;\n      max-height: 360px;\n      padding: 0;\n    }\n    .modal-content{\n      width: auto;\n      background: var(--light-300);\n      padding: 30px;\n      border: none;\n    }\n    .modal-footer{\n      padding: 0;\n      margin-top: 30px;\n      .btn {\n        min-width: 80px;\n        + .btn {\n          margin-left: 10px;\n        }\n      }\n    }\n    &.modal-dialog{\n      width: auto;\n    }\n\n    .title-icon {\n      padding: 0 6px;\n    }\n    .title-label {\n      font-size: 1rem;\n      color: var(--black);\n    }\n\n    .message {\n      margin-left: 36px;\n      margin-top: 1rem;\n    }\n  "],["\n    .modal-body{\n      overflow-y: auto;\n      max-height: 360px;\n      padding: 0;\n    }\n    .modal-content{\n      width: auto;\n      background: var(--light-300);\n      padding: 30px;\n      border: none;\n    }\n    .modal-footer{\n      padding: 0;\n      margin-top: 30px;\n      .btn {\n        min-width: 80px;\n        + .btn {\n          margin-left: 10px;\n        }\n      }\n    }\n    &.modal-dialog{\n      width: auto;\n    }\n\n    .title-icon {\n      padding: 0 6px;\n    }\n    .title-label {\n      font-size: 1rem;\n      color: var(--black);\n    }\n\n    .message {\n      margin-left: 36px;\n      margin-top: 1rem;\n    }\n  "])))},Object(r.jsx)(s.ModalBody,null,Object(r.jsx)("div",{className:"d-flex align-items-start"},Object(r.jsx)("div",{className:"title-icon"},Object(r.jsx)(s.Icon,{icon:H,size:24,color:"var(--danger)"})),Object(r.jsx)("div",{className:"title-label"},o("confirmDelete"))),Object(r.jsx)("div",{className:"message"},Object(r.jsx)("div",{"data-testid":"confirmDeleteMessage",className:"font-body2",css:Object(r.css)(A||(A=U(["\n            color: var(--dark-800);\n          "],["\n            color: var(--dark-800);\n          "])))},o("deleteWarning")),Object(r.jsx)("div",{css:Object(r.css)(P||(P=U(["margin-top: 1.5rem;"],["margin-top: 1.5rem;"])))},Object(r.jsx)(s.Label,{check:!0,className:"justify-content-start align-items-start",css:Object(r.css)(z||(z=U(["\n              color: var(--black);\n            "],["\n              color: var(--black);\n            "])))},Object(r.jsx)(s.Checkbox,{"data-testid":"dontShowAgain",style:{cursor:"pointer"},className:"mr-2",checked:!1,ref:i}),o("dialogPreventDisplayAgainDefaultText"))))),Object(r.jsx)(s.ModalFooter,null,Object(r.jsx)(s.Button,{"data-testid":"deleteBtn",type:"danger",onClick:d},o("delete")),Object(r.jsx)(s.Button,{"data-testid":"cancelBtn",onClick:u},o("cancel")))):null}var Z,K,V=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),J=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Q=function(){return(Q=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},X=function(e){function t(t){var n=e.call(this,t)||this;return n.resizeIframe=function(){var e=n.props,t=e.viewportSize,o=e.pageMode,i=e.appMode,a=e.currentDialogId;if(i!==r.AppMode.Design||a)n.deviceRef.current.style.height=t.height+"px";else if(o===r.PageMode.AutoScroll){var s=n.appIframe.contentWindow.document.documentElement.querySelector("div#app > div.page-renderer");if(s){var l=s.getBoundingClientRect(),c=Math.round(Math.max(l.height,t.height));n.deviceRef.current.style.height=c+"px"}}},n.formatMessage=function(e,t){return n.props.intl.formatMessage({id:e,defaultMessage:F[e]},t)},n.onChooseWidget=function(e){var t={id:r.appConfigUtils.getUniqueId(n.props.appConfig,"widget"),uri:e,context:r.appConfigUtils.getWidgetContext(e)};a.AppWidgetManager.getInstance().handleNewWidgetJson(t).then((function(e){n.props.dispatch(a.builderActions.closeChooseWidgetPopup())}))},n.clearSelectionInApp=function(){a.builderAppSync.publishChangeSelectionToApp(null)},n.state={appUrl:null,isPortrait:!0},n.resizeRef=r.React.createRef(),n.deviceRef=r.React.createRef(),n.contentRef=r.React.createRef(),n.debounceResizeIframe=r.lodash.debounce(n.resizeIframe,200),n}return V(t,e),t.prototype.componentDidMount=function(){var e=this;this.setAppUrl(),r.lodash.defer((function(){return e.resizeIframe()}))},t.prototype.componentDidUpdate=function(e){this.setAppUrl();var t=this.props,n=t.viewportSize,o=t.zoomScale,i=t.appMode;this.viewportWidth===n.width&&Math.round(10*this.zoomScale)===Math.round(10*o)||(this.viewportWidth=n.width,this.zoomScale=o,this.applyZoomScale(this.props.zoomScale)),i!==e.appMode&&i===r.AppMode.Run&&this.contentRef.current&&(this.contentRef.current.scrollTop=0),this.debounceResizeIframe()},t.prototype.setAppUrl=function(){var e=r.urlUtils.getAppIdPageIdFromUrl().pageId;if(!e||"default"===e){var t,n=window.jimuConfig.mountPath+"experience/",o=this.props.queryObject,i={draft:"true"};if(o.id?(t=o.id,window.jimuConfig.useStructuralUrl?n+=this.props.queryObject.id+"/":i.id=this.props.queryObject.id):o.app_config&&(t=o.app_config,i.config=o.app_config),i=Object.assign(i,o.without("id","config","views","theme")),n+="?"+r.queryString.stringify(i),this.state.appUrl!==n){if(this.props.currentAppId!==t){var s=a.AppResourceManager.getInstance();s.clearResources(this.props.currentAppId),s.clearResources(t),a.WidgetSettingManager.getInstance().deleteAllWidgetSettingClasses()}this.setState({appUrl:n})}this.props.currentAppId!==t&&this.props.dispatch(a.appStateActions.inAppAppStateChanged(null))}},t.prototype.calAvailableWidth=function(){var e=this.contentRef.current.getBoundingClientRect(),t=parseFloat(s.styleUtils.remToPixel("3rem"));return isNaN(t)&&(t=48),e.width-t},t.prototype.applyZoomScale=function(e,t){var n=this.props.viewportSize;(null!=t?t:this.calAvailableWidth())<n.width?(this.deviceRef.current.classList.add("left-origin"),this.deviceRef.current.classList.remove("center-origin")):(this.deviceRef.current.classList.add("center-origin"),this.deviceRef.current.classList.remove("left-origin")),this.deviceRef.current.style.transform="scale("+e+")"},t.prototype.getButtonGroupStyle=function(){return Object(r.css)(Z||(Z=J(["\n      position: absolute !important;\n      right: 20px;\n      top: 15px;\n      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);\n      button {\n        background: white !important;\n        border: none !important;\n      }\n\n      button:focus {\n        box-shadow: none !important;\n      }\n\n      button.active {\n        background: #00a6b6 !important;\n      }\n    "],["\n      position: absolute !important;\n      right: 20px;\n      top: 15px;\n      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);\n      button {\n        background: white !important;\n        border: none !important;\n      }\n\n      button:focus {\n        box-shadow: none !important;\n      }\n\n      button.active {\n        background: #00a6b6 !important;\n      }\n    "])))},t.prototype.syncLayoutHandler=function(){var e,t,n,o=this.props,i=o.appConfig,a=o.appMode,s=o.currentPageId,l=o.browserSizeMode,c=o.viewportSize;if(!i||a!==r.AppMode.Design)return null;var u,d=i.mainSizeMode;if(l===d)return null;u=(null===(t=null===(e=this.deviceRef)||void 0===e?void 0:e.current)||void 0===t?void 0:t.classList.contains("center-origin"))?"calc(50% + "+(c.width/2+10)+"px)":c.width+10+"px";var p=null===(n=i.pages)||void 0===n?void 0:n[s],g=i.header&&p.header&&(i.header.height[l]||i.header.height[d])||0;return Object(r.jsx)("div",{css:Object(r.css)(K||(K=J(["\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: ",";\n        "],["\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: ",";\n        "])),u),className:"d-flex flex-column sync-layout-handler"},p.header&&Object(r.jsx)(D,{isAuto:!i.header.layout[l],formatMessage:this.formatMessage,theme:this.props.theme,pageId:s,browserSizeMode:l,mainSizeMode:i.mainSizeMode,isHeader:!0}),Object(r.jsx)(D,{isAuto:!p.layout[l],formatMessage:this.formatMessage,theme:this.props.theme,browserSizeMode:l,mainSizeMode:i.mainSizeMode,pageId:s,style:{marginTop:Math.max(+g-60,20)+"px",top:20}}),p.footer&&Object(r.jsx)(D,{isAuto:!i.footer.layout[l],formatMessage:this.formatMessage,theme:this.props.theme,browserSizeMode:l,mainSizeMode:i.mainSizeMode,pageId:s,isFooter:!0,style:{bottom:30}}))},t.prototype.render=function(){var e,t=this,n=this.props,o=n.appConfig,i=n.theme,c=n.pageMode,u=n.viewportSize,p=c===r.PageMode.FitWindow,g=this.getScaledViewportSize(),f=null!==(e=null==u?void 0:u.height)&&void 0!==e?e:0;return Object(r.jsx)("div",{css:d(p,f,i),onClick:this.clearSelectionInApp,className:"jimu-widget widget-builder-app-loader"},!o&&r.ReactDOM.createPortal(Object(r.jsx)(s.Loading,{type:s.LoadingType.Primary}),document.body),Object(r.jsx)("div",{className:"content-section",ref:this.contentRef},Object(r.jsx)("div",{className:"content",style:{minHeight:p?g.height+100:null,minWidth:"100%",width:"calc("+g.width+"px + 3rem)"}},Object(r.jsx)("div",{ref:this.resizeRef,className:Object(r.classNames)("body-section d-flex flex-column justify-content-start")},Object(r.jsx)("div",{ref:this.deviceRef,className:Object(r.classNames)("device-frame shadow d-flex flex-grow-1",{invisible:!o}),style:Q(Q({},this.getDeviceSize()),{overflow:"visible"})},Object(r.jsx)("iframe",{allowFullScreen:!0,name:r.APP_FRAME_NAME_IN_BUILDER,src:this.state.appUrl,className:"config-preview",ref:function(e){return t.appIframe=e}}),this.syncLayoutHandler())),this.props.showChooseWidgetPopup&&Object(r.jsx)(l.WidgetSelector,{onOK:this.onChooseWidget,title:"Choose Widget",onCancel:function(){return t.props.dispatch(a.builderActions.closeChooseWidgetPopup())}}))),Object(r.jsx)(G,{formatMessage:this.formatMessage,activePagePart:this.props.activePagePart,currentPageId:this.props.currentPageId}))},t.prototype.getDeviceSize=function(){var e=this.props,t=e.pageMode,n=e.viewportSize,o=e.appMode,i=e.currentDialogId;return t===r.PageMode.FitWindow||o!==r.AppMode.Design||t===r.PageMode.AutoScroll&&i?n:{width:n.width}},t.prototype.getScaledViewportSize=function(){var e=this.props.viewportSize,t=this.props.zoomScale;return{width:e.width*t,height:e.height*t}},t.mapExtraStateProps=function(e,t){var n,o,i,a,s,l,c,u,d,p,g,f,m,h,v,b,y,w,x,j,O,I=null===(o=null===(n=e.appStateInBuilder)||void 0===n?void 0:n.appRuntimeInfo)||void 0===o?void 0:o.currentPageId,S=(null===(i=e.appStateInBuilder)||void 0===i?void 0:i.browserSizeMode)||r.BrowserSizeMode.Large;I&&(O=null===(c=null===(l=null===(s=null===(a=e.appStateInBuilder)||void 0===a?void 0:a.appConfig)||void 0===s?void 0:s.pages)||void 0===l?void 0:l[I])||void 0===c?void 0:c.mode);var C=r.utils.findViewportSize(null===(u=e.appStateInBuilder)||void 0===u?void 0:u.appConfig,S);return{showChooseWidgetPopup:e.builder.showChooseWidgetPopup,currentDialogId:null===(p=null===(d=e.appStateInBuilder)||void 0===d?void 0:d.appRuntimeInfo)||void 0===p?void 0:p.currentDialogId,currentPageId:I,pageMode:O,viewportSize:C,appConfig:null===(g=e.appStateInBuilder)||void 0===g?void 0:g.appConfig,currentAppId:e.builder.currentAppId,browserSizeMode:S,appMode:null===(m=null===(f=e.appStateInBuilder)||void 0===f?void 0:f.appRuntimeInfo)||void 0===m?void 0:m.appMode,zoomScale:null!==(b=null===(v=null===(h=e.appStateInBuilder)||void 0===h?void 0:h.appRuntimeInfo)||void 0===v?void 0:v.zoomScale)&&void 0!==b?b:1,widgetsRuntimeInfo:null===(y=e.appStateInBuilder)||void 0===y?void 0:y.widgetsRuntimeInfo,activePagePart:null===(x=null===(w=e.appStateInBuilder)||void 0===w?void 0:w.appRuntimeInfo)||void 0===x?void 0:x.activePagePart,isRTL:null===(j=e.appContext)||void 0===j?void 0:j.isRTL,queryObject:e.queryObject}},t}(r.React.PureComponent);t.default=X},19:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 118 0a8 8 0 010 16zm-.5-4.5v-5H7a.5.5 0 010-1h1.5v6H9a.5.5 0 010 1H7a.5.5 0 010-1h.5zm.5-7a.5.5 0 110-1 .5.5 0 010 1z" fill="#000" fill-rule="nonzero"></path></svg>'},2:function(e,t){e.exports=o},3:function(e,t){e.exports=i},4:function(e,t){e.exports=r},6:function(e,t){e.exports=a}}))}}}));