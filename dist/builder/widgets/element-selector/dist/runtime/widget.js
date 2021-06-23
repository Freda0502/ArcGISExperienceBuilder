System.register(["jimu-core","jimu-ui","jimu-for-builder","jimu-layouts/layout-runtime"],(function(e){var t,n,i,o;return{setters:[function(e){t=e},function(e){n=e},function(e){i=e},function(e){o=e}],execute:function(){e(function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=110)}({0:function(e,n){e.exports=t},1:function(e,t){e.exports=n},110:function(e,t,n){"use strict";n.r(t);var i,o,r=n(0),a=n(1),s=(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},c=function(){return(c=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e){function t(t){var n=e.call(this,t)||this;return n.onSelectItem=function(e){n.stopBubble(e),n.props.onSelect&&n.props.onSelect(n.props.item)},n.beginDrag=function(e){if(n.props.appMode===r.AppMode.Design){var t=n.props.item;if(e.dataTransfer&&e.dataTransfer.setData("exbWidget",t.name||t.id),window._dragging_widget_item=c(c({},t),{count:n.uniqueId}),n.uniqueId++,!n.appFrameDoc){var i=document.querySelector('iframe[name="'+r.APP_FRAME_NAME_IN_BUILDER+'"]');n.appFrameDoc=i.contentDocument||i.contentWindow.document}n.appFrameDoc&&n.appFrameDoc.documentElement.classList.add("exb-h5-dragging")}},n.endDrag=function(e){window._dragging_widget_item=null,n.appFrameDoc&&n.appFrameDoc.documentElement.classList.remove("exb-h5-dragging")},n.MemoChildFunctionComponent=r.React.memo((function(e){var t=e.item,i=e.fullLine;return n.props.children?Object(r.jsx)("div",{className:"w-100 h-100"},n.props.children(t,i)):null})),n.uniqueId=0,n}return s(t,e),t.prototype.stopBubble=function(e){e&&e.stopPropagation?e.stopPropagation():window.event&&(window.event.cancelBubble=!0)},t.prototype.maskStyle=function(){return Object(r.css)(o||(o=l(["\n      position: absolute;\n      user-select: none;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      background: transparent;\n      cursor: default;\n\n      &.can-drag {\n        cursor: pointer;\n\n        &:active {\n          cursor: grabbing;\n        }\n      }\n    "],["\n      position: absolute;\n      user-select: none;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      background: transparent;\n      cursor: default;\n\n      &.can-drag {\n        cursor: pointer;\n\n        &:active {\n          cursor: grabbing;\n        }\n      }\n    "])))},t.prototype.render=function(){var e,t=this.props,n=t.item,i=t.fullLine,o=t.appMode,a=this.MemoChildFunctionComponent;return Object(r.jsx)("div",{className:Object(r.classNames)((e={"col-6":!i,col:i},e[this.props.className]=!!this.props.className,e)),draggable:o===r.AppMode.Design,onClick:this.onSelectItem,onDragStart:this.beginDrag,onDragEnd:this.endDrag,key:n.name,title:n.label,"data-widget-name":n.name},"function"==typeof this.props.children?Object(r.jsx)(a,{item:n,fullLine:i}):this.props.children,Object(r.jsx)("div",{className:Object(r.classNames)({"can-drag":o===r.AppMode.Design}),css:this.maskStyle()}))},t}(r.React.PureComponent),d=n(2),u="This area lists widgets that have been configured but not on the current canvas. They may exist in other device modes.",m="Insert widget",g="New",f="Pending",h="Placeholder",b="Basic",v="Layout",j="About this widget",w="Take a tour",x=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},y=function(){var e={color:"#fff",bg:"#5f5fff",shadow:"0 2px 12px 0 rgba(95,95,255,0.40)"},t={color:"#fff",bg:"#4949ff"};return Object(r.css)(O||(O=x(["\n    width: 240px;\n    padding: 1rem;\n    h1, h2, h3, h4, h5, h6 {\n      color: var(--dark-600);\n    }\n    .btn-primary {\n      min-width: 100px;\n      color: ",";\n      background-color: ",";\n      border: 1px solid transparent;\n      box-shadow: ",";\n      &:hover {\n        color: ",";\n        background-color: ",";\n        border: 1px solid transparent;\n      }\n    }\n  "],["\n    width: 240px;\n    padding: 1rem;\n    h1, h2, h3, h4, h5, h6 {\n      color: var(--dark-600);\n    }\n    .btn-primary {\n      min-width: 100px;\n      color: ",";\n      background-color: ",";\n      border: 1px solid transparent;\n      box-shadow: ",";\n      &:hover {\n        color: ",";\n        background-color: ",";\n        border: 1px solid transparent;\n      }\n    }\n  "])),e.color,e.bg,e.shadow,t.color,t.bg)};var O,I=Object(r.injectIntl)((function(e){var t,i,o=e.widgetItem,s=e.intl,l=r.React.useState(!1),c=l[0],p=l[1],u=r.React.useRef(),m=r.React.useMemo((function(){return s.formatMessage({id:"widgetHelpIconLabel",defaultMessage:j})}),[s]),g=r.React.useMemo((function(){return s.formatMessage({id:"widgetGuideStart",defaultMessage:w})}),[s]);return Object(r.jsx)(r.React.Fragment,null,Object(r.jsx)(a.Button,{type:"tertiary",className:"widget-help-btn",icon:!0,size:"sm",title:m,onClick:function(){p(!c)},ref:u},Object(r.jsx)(a.Icon,{icon:n(27),size:12}),Object(r.jsx)("span",{className:"sr-only"},g),Object(r.jsx)(a.Popper,{showArrow:!0,css:y,open:c,placement:"right",offset:[0,10],reference:u.current,toggle:function(){p(!1)}},Object(r.jsx)("h5",null,null==o?void 0:o.label),Object(r.jsx)("p",null,null==o?void 0:o.desription),(null===(i=null===(t=null==o?void 0:o.manifest)||void 0===t?void 0:t.properties)||void 0===i?void 0:i.hasGuide)&&Object(r.jsx)(a.Button,{className:"float-right",type:"primary",size:"sm",onClick:function(e){Object(r.getAppStore)().dispatch(d.builderActions.startGuide(o.uri)),p(!1)}},g))))})),S=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),M=function(e){function t(t){return e.call(this,t)||this}return S(t,e),t.prototype.render=function(){var e,t,n,i,o=this.props,s=o.item,l=o.hideLabel;return Object(r.jsx)("div",{className:Object(r.classNames)("d-flex justify-content-center w-100 h-100 widget-card-item-content",{"align-items-start":!l,"align-items-center":l,"pt-0":l}),key:s.name},Object(r.jsx)("div",{className:Object(r.classNames)("d-flex flex-column",{"h-100":!l})},(null===(t=null===(e=s.manifest)||void 0===e?void 0:e.properties)||void 0===t?void 0:t.hasGuide)&&Object(r.jsx)(I,{widgetItem:s}),Object(r.jsx)("div",{className:"d-flex justify-content-center"},Object(r.jsx)("div",{className:"widget-card-image"},Object(r.jsx)(a.Icon,{className:"w-100",icon:s.icon,size:20,autoFlip:null===(i=null===(n=s.manifest)||void 0===n?void 0:n.properties)||void 0===i?void 0:i.flipIcon}))),!l&&Object(r.jsx)("div",{className:Object(r.classNames)("widget-card-name flex-grow-1 d-flex align-items-center mt-0"),title:s.label},Object(r.jsx)("span",{className:"text-center text-truncate widget-card-name-content",title:s.label},s.label))))},t}(r.React.PureComponent);function P(e,t){return!!e&&(!t||e.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1)}function N(e){var t,n,i;return"insert"===(Object.keys((null===(t=null==e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.sectionNavInfos)||{}).map((function(t){var n;return null===(n=e.appRuntimeInfo.sectionNavInfos[t])||void 0===n?void 0:n.currentViewId}))[0]||"insert")&&(null===(i=null===(n=null==e?void 0:e.widgetsState)||void 0===n?void 0:n["left-sidebar"])||void 0===i?void 0:i.collapse)}var _=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),L=function(e){function t(t){var n=e.call(this,t)||this;return n.sectionList=[{itemType:r.LayoutItemType.Section,label:n.props.intl.formatMessage({id:"section",defaultMessage:r.defaultMessages.section}),uri:"",manifest:{properties:{},defaultSize:{width:500,height:500}},icon:"./widgets/element-selector/dist/runtime/assets/section.svg",name:"section"}],n.placeholder={itemType:r.LayoutItemType.Widget,label:n.props.intl.formatMessage({id:"placeholder",defaultMessage:h}),uri:null,manifest:{defaultSize:{width:300,height:300}},icon:"./widgets/element-selector/dist/runtime/assets/placeholder.svg",name:"placeholder"},n.getListItemJSX=function(e,t,i,o){return e?Object(r.jsx)(p,{item:e,fullLine:o,className:"widget-card-item mt-2",appMode:n.props.appMode,onSelect:n.onSelectItem,key:t},(function(e,t){return Object(r.jsx)(M,{item:e,hideLabel:i})})):Object(r.jsx)("div",{className:"col-6",style:{visibility:"hidden"},key:t})},n.onSelectItem=function(e){var t=e.name;n.setState({selectedItemName:t})},n.state={selectedItemName:""},n}return _(t,e),t.prototype.isLoading=function(){return!this.props.widgetList},t.prototype.render=function(){var e=this,t=this.props.widgetList||[],n=[],i=[],o=[],a=[],s=[];return t&&t.length>0&&(t.forEach((function(t){P(t.label,e.props.searchValue)&&(t.manifest.widgetType===r.WidgetType.Layout?n=n.concat(t):"navigator"===t.manifest.name?i=i.concat(t):1===t.group?o=o.concat(t):2===t.group?a=a.concat(t):s=s.concat(t))})),P(this.placeholder.label,this.props.searchValue)&&(n=n.concat(this.placeholder)),this.sectionList.every((function(t){return P(t.label,e.props.searchValue)}))&&(i=this.sectionList.concat(i))),Object(r.jsx)("div",{className:"flex-column bg-light-300 d-flex"},Object(r.jsx)("div",{className:"jimu-builder-panel--content choose-widget-popup-content text-black",onClick:function(){e.setState({selectedItemName:""})}},this.isLoading()?Object(r.jsx)("div",{className:"jimu-secondary-loading"}):Object(r.jsx)("div",null,(o.length>0||a.length>0||s.length>0)&&Object(r.jsx)("section",{className:"mb-18 px-3"},Object(r.jsx)("h4",{className:"new-elements-title text-break"},this.props.intl.formatMessage({id:"basicWidget",defaultMessage:b})),o.length>0&&Object(r.jsx)("div",{className:"container-fluid p-0 mb-10"},Object(r.jsx)("div",{className:"row no-gutters"},o.map((function(t,n){return e.getListItemJSX(t,n)})))),a.length>0&&Object(r.jsx)("div",{className:"container-fluid p-0 mb-10"},Object(r.jsx)("div",{className:"row no-gutters"},a.map((function(t,n){return e.getListItemJSX(t,n)})))),s.length>0&&Object(r.jsx)("div",{className:"container-fluid p-0"},Object(r.jsx)("div",{className:"row no-gutters"},s.map((function(t,n){return e.getListItemJSX(t,n)}))))),n.length>0&&Object(r.jsx)("section",{className:"mb-18 px-3"},Object(r.jsx)("h4",{className:"new-elements-title text-break"},this.props.intl.formatMessage({id:"layoutWidget",defaultMessage:v})),Object(r.jsx)("div",{className:"container-fluid p-0"},Object(r.jsx)("div",{className:"row no-gutters"},n.map((function(t,n){return e.getListItemJSX(t,n)}))))),i.length>0&&Object(r.jsx)("section",{className:"mb-4 mt-2 px-3"},Object(r.jsx)("h4",{className:"new-elements-title text-break"},this.props.intl.formatMessage({id:"section",defaultMessage:r.defaultMessages.section})),Object(r.jsx)("div",{className:"container-fluid p-0"},Object(r.jsx)("div",{className:"row no-gutters"},i.map((function(t,n){return e.getListItemJSX(t,n)}))))))))},t}(r.React.PureComponent),k=r.themeUtils.withTheme(L),z=n(4),T=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),C=function(e){function t(t){var n=e.call(this,t)||this;return n.getListItemJSX=function(e){if(!e)return Object(r.jsx)("div",{className:"col-6",style:{visibility:"hidden"}});var t=n.Item;return Object(r.jsx)("div",{key:e.name||e.id},Object(r.jsx)(p,{item:e,fullLine:!0,appMode:n.props.appMode,className:"dragable-element p-0 mb-12"},(function(){return Object(r.jsx)(t,{item:e})})))},n.Item=function(e){var t,n,i=e.item,o="string"==typeof i.icon?i.icon:i.icon&&i.icon.svg,s="string"==typeof i.icon?null:i.icon&&i.icon.properties&&i.icon.properties.color;return Object(r.jsx)("div",{title:i.label,className:"d-flex align-items-center pendding-elements-item px-2"},Object(r.jsx)("div",{className:"pendding-elements-item-icon-container d-flex justify-content-center align-items-center"},Object(r.jsx)(a.Icon,{className:"pendding-elements-item-icon",icon:o,color:s,autoFlip:null===(n=null===(t=i.manifest)||void 0===t?void 0:t.properties)||void 0===n?void 0:n.flipIcon})),Object(r.jsx)("div",{className:"text-truncate pendding-elements-item-label"},i.label))},n}return T(t,e),t.prototype.render=function(){return Object(r.jsx)("div",{className:"w-100"},this.getListItemJSX(this.props.item))},t}(r.React.PureComponent),R=r.themeUtils.withTheme(C),D=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),B=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.convertLayoutItemToElementItem=function(e,n){var i,o,a=t.props.layouts[e.layoutId].content[e.layoutItemId],s=null===(i=Object(r.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appConfig,l=z.searchUtils.getWidgetIdThatUseTheLayoutId(s,e.layoutId);if(a.type===r.LayoutItemType.Widget){var c=a.widgetId,p=t.props.widgets[c],d=void 0;d=l&&t.props.widgets[l].manifest.widgetType!==r.WidgetType.Layout?Object.keys(t.props.widgets[l].layouts).length>1&&t.props.layouts[e.layoutId].label?t.props.widgets[l].label+"-"+t.props.layouts[e.layoutId].label+"-"+p.label:t.props.widgets[l].label+"-"+p.label:p.label;var u=p&&p.icon?"string"==typeof p.icon?p.icon:p.icon.asMutable({deep:!0}):"./widgets/element-selector/dist/runtime/assets/section.svg";return{id:a.widgetId,itemType:r.LayoutItemType.Widget,layoutInfo:e,isFromCurrentSizeMode:n,label:d,uri:p&&p.uri,icon:u,manifest:p&&p.manifest&&p.manifest.asMutable({deep:!0})}}if(a.type===r.LayoutItemType.Section){var m=a.sectionId,g=null===(o=t.props.sections)||void 0===o?void 0:o[m];u=g&&g.icon?"string"==typeof g.icon?g.icon:g.icon.asMutable({deep:!0}):"./widgets/element-selector/dist/runtime/assets/section.svg";return{id:m,itemType:r.LayoutItemType.Section,layoutInfo:e,isFromCurrentSizeMode:n,label:g&&g.label,uri:"",icon:u,manifest:{properties:{}}}}return null},t}return D(t,e),t.prototype.render=function(){var e,t,n,i,o,a,s,l,c,p,d,m=this;if(!this.props.currentPageId||!(null===(e=this.props.pages)||void 0===e?void 0:e[this.props.currentPageId])||(null===(n=null===(t=this.props.pages)||void 0===t?void 0:t[this.props.currentPageId])||void 0===n?void 0:n.type)!==r.PageType.Normal)return null;if(this.props.activeOptsSectionViewId&&"insert"!==this.props.activeOptsSectionViewId)return null;var g,f=null===(i=Object(r.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appConfig;if(!f)return null;this.props.activePagePart===r.PagePart.Header?g=null===(a=null===(o=f.header)||void 0===o?void 0:o.layout)||void 0===a?void 0:a[this.props.browserSizeMode]:this.props.activePagePart===r.PagePart.Footer?g=null===(l=null===(s=f.footer)||void 0===s?void 0:s.layout)||void 0===l?void 0:l[this.props.browserSizeMode]:this.props.activePagePart===r.PagePart.Body&&(g=null===(d=null===(p=null===(c=f.pages)||void 0===c?void 0:c[this.props.currentPageId])||void 0===p?void 0:p.layout)||void 0===d?void 0:d[this.props.browserSizeMode]);var h=g?z.searchUtils.getPendingLayoutItemsFromOtherSizeModeInPage(f,this.props.currentPageId,this.props.browserSizeMode,this.props.activePagePart):[],b=g?z.searchUtils.getPendingLayoutItemsFromOtherSizeModeInDialog(f,this.props.currentDialogId,this.props.browserSizeMode):[],v=h.map((function(e){return m.convertLayoutItemToElementItem(e,!1)})).concat(b.map((function(e){return m.convertLayoutItemToElementItem(e,!1)}))),j=g?z.searchUtils.getPendingLayoutItemsInPage(f,this.props.currentPageId,this.props.browserSizeMode,this.props.activePagePart):[],w=g?z.searchUtils.getPendingLayoutItemsInDialog(f,this.props.currentDialogId,this.props.browserSizeMode):[],x=j.map((function(e){return m.convertLayoutItemToElementItem(e,!0)})).concat(w.map((function(e){return m.convertLayoutItemToElementItem(e,!0)}))),y=v.concat(x).filter((function(e){return P(e.label,m.props.searchValue)}));return Object(r.jsx)("div",{className:"flex-column bg-light-300 d-flex px-3 pb-3"},0===y.length&&Object(r.jsx)("div",{className:"pt-1 text-white-50 text-left text-break"},this.props.intl.formatMessage({id:"pendingElementsInfo",defaultMessage:u})),y.map((function(e){return Object(r.jsx)(R,{key:e.id,item:e,appMode:m.props.appMode})})))},t}(r.React.PureComponent);var A,V=r.ReactRedux.connect((function(e){var t,n,i,o,r,a,s,l,c,p,d,u,m,g,f,h;return N(e)?{currentPageId:null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentPageId,currentDialogId:null===(n=e.appStateInBuilder)||void 0===n?void 0:n.appRuntimeInfo.currentDialogId,appMode:null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo.appMode,browserSizeMode:null===(o=e.appStateInBuilder)||void 0===o?void 0:o.browserSizeMode,activePagePart:null===(r=e.appStateInBuilder)||void 0===r?void 0:r.appRuntimeInfo.activePagePart,layouts:null===(s=null===(a=e.appStateInBuilder)||void 0===a?void 0:a.appConfig)||void 0===s?void 0:s.layouts,widgets:null===(c=null===(l=e.appStateInBuilder)||void 0===l?void 0:l.appConfig)||void 0===c?void 0:c.widgets,pages:null===(d=null===(p=e.appStateInBuilder)||void 0===p?void 0:p.appConfig)||void 0===d?void 0:d.pages,sections:null===(m=null===(u=e.appStateInBuilder)||void 0===u?void 0:u.appConfig)||void 0===m?void 0:m.sections,activeOptsSectionViewId:null===(h=null===(f=null===(g=e.appRuntimeInfo)||void 0===g?void 0:g.sectionNavInfos)||void 0===f?void 0:f["opts-section"])||void 0===h?void 0:h.currentViewId}:{}}))(r.themeUtils.withTheme(B)),E=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};var F=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),X=n(14),W=function(e){function t(t){var n=e.call(this,t)||this;return n.onSearchIconClick=function(e){n.setState({isSearchInputShown:!n.state.isSearchInputShown})},n.onSearchValueChange=function(e){n.setState({searchValue:e.target.value})},n.MemoNewElements=r.React.memo((function(e){return Object(r.jsx)(k,{widgetList:e.widgetList,appMode:e.appMode,intl:e.intl,searchValue:e.searchValue})})),n.MemoPendingElements=r.React.memo((function(e){return Object(r.jsx)(V,{intl:e.intl,searchValue:e.searchValue})})),n.state={widgetList:null,isSearchInputShown:!1,searchValue:""},n}return F(t,e),t.prototype.componentDidMount=function(){this.getWidgetListInfo()},t.prototype.componentDidUpdate=function(e,t){t.isSearchInputShown!==this.state.isSearchInputShown&&this.state.isSearchInputShown&&this.searchInput&&(this.searchInput.focus(),this.searchInput.select())},t.prototype.getWidgetListInfo=function(){var e=this;fetch(r.moduleLoader.resolveModuleFullPath("widgets/")+"/widgets-info.json").then((function(e){return e.json()})).then((function(t){var n=t.map((function(e){var t,n;e.manifest=r.appConfigUtils.addWidgetManifestProperties(e.manifest);var i=r.i18n.findLocale(Object(r.getAppStore)().getState().appContext.locale,e.manifest.translatedLocales);return{itemType:r.LayoutItemType.Widget,name:e.name,label:(null===(t=e.i18nLabel)||void 0===t?void 0:t[i])||e.manifest.label||e.name,desription:(null===(n=e.i18nDescription)||void 0===n?void 0:n[i])||e.manifest.desription||e.name,uri:e.uri,manifest:e.manifest,icon:"../"+e.icon,group:e.group}}));e.setState({widgetList:n})}))},t.prototype.render=function(){var e,t=this,n=this.MemoNewElements,i=this.MemoPendingElements;return Object(r.jsx)("div",{css:(e=this.props.theme,Object(r.css)(A||(A=E(["\n  .widget-builder-header-insert-elements {\n    .text-dark-600{\n      color: ",";\n    }\n    .mb-10{\n      margin-bottom: ",";\n    }\n    .mb-18{\n      margin-bottom: ",";\n    }\n    .mb-12{\n      margin-bottom: ",";\n    }\n    .title{\n      padding: 18px 16px 8px 16px !important;\n      font-size: 1rem !important;\n      font-weight: 500;\n      .search-icon{\n        cursor: pointer;\n        width: 30px;\n      }\n    }\n    .search-input{\n      height: 26px;\n      border-radius: 2px;\n    }\n    width: 100%;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    text-align: left;\n    /* border-right: 1px solid ","; */\n    .collapse-btn{\n      cursor: pointer;\n      .jimu-icon{\n        vertical-align: top;\n      }\n    }\n    .jimu-nav{\n      flex-shrink: 0;\n      flex-grow: 0;\n    }\n    .new-elements-title{\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      margin-bottom: ",";\n    }\n    .jimu-nav{\n      height: "," !important;\n    }\n    .jimu-tab{\n      height: calc(100% - 50px);\n    }\n    .with-search-input.jimu-tab{\n      height: calc(100% - 90px);\n    }\n    .tab-content{\n      overflow: auto;\n      padding-top: ",";\n    }\n\n    .dragable-element:hover{\n      .pendding-elements-item{\n        background-color: ",";\n      }\n    }\n\n    .pendding-elements-item{\n      height: ",";\n      background: ",";\n\n      .pendding-elements-item-icon-container{\n        margin-right: ",";\n        .pendding-elements-item-icon{\n          width: ",";\n          height: ",";\n          color: ",";\n        }\n      }\n      .pendding-elements-item-label{\n        max-width: ",";\n        color: ",";\n        line-height: ",";\n        font-size: ",";\n      }\n    }\n\n    .btn{\n      .jimu-icon{\n        margin: 0;\n      }\n    }\n    .jimu-builder-panel--header {\n      padding: "," ",";\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      h3 {\n        margin: 0;\n        line-height: 1.5;\n        flex-grow: 1;\n      }\n    }\n    .jimu-builder-panel--content {\n      height: 100%;\n      overflow: auto;\n      .widget-card-item{\n        height: 80px;\n        font-size: 13px;\n\n        user-select: none;\n        cursor: pointer;\n        .widget-card-item-content{\n          position: relative;\n          padding-top: 16px;\n          background-color: ",";\n        }\n        &:hover .widget-card-item-content{\n          background-color: ",";\n        }\n        .widget-card-image{\n          width: 20px;\n          height: 20px;\n          &:after{\n            display: none;\n          }\n        }\n\n        .widget-card-name{\n          max-width: 90px;\n          margin: 0 auto;\n          .widget-card-name-content{\n            line-height: 1rem;\n            max-height:2rem;\n            white-space: normal;\n          }\n        }\n\n        .widget-help-btn {\n          position: absolute;\n          top: 0;\n          right: 0;\n          z-index: 1;\n        }\n      }\n\n      .row {\n        .col-6:nth-of-type(2n) {\n          padding-left: ",";\n        }\n        .col-6:nth-of-type(2n+1) {\n          padding-right: ",";\n        }\n\n        .col {\n          flex-basis: 100%;\n        }\n      }\n    }\n    &.widget-popup-hide-animation{\n      transition: transform 0.3s ease-out;\n      &.from-left {\n        transform: translateX(-100%);\n      }\n      &.from-right {\n        transform: translateX(100%);\n      }\n    }\n    &.widget-popup-show-animation{\n      transition: transform 0.3s ease-in;\n      &.from-left {\n        transform: translateX(0%);\n      }\n      &.from-right {\n        transform: translateX(0%);\n      }\n    }\n    &.from-left {\n      left: 0;\n    }\n    &.from-right {\n      right: 0;\n    }\n  }"],["\n  .widget-builder-header-insert-elements {\n    .text-dark-600{\n      color: ",";\n    }\n    .mb-10{\n      margin-bottom: ",";\n    }\n    .mb-18{\n      margin-bottom: ",";\n    }\n    .mb-12{\n      margin-bottom: ",";\n    }\n    .title{\n      padding: 18px 16px 8px 16px !important;\n      font-size: 1rem !important;\n      font-weight: 500;\n      .search-icon{\n        cursor: pointer;\n        width: 30px;\n      }\n    }\n    .search-input{\n      height: 26px;\n      border-radius: 2px;\n    }\n    width: 100%;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    text-align: left;\n    /* border-right: 1px solid ","; */\n    .collapse-btn{\n      cursor: pointer;\n      .jimu-icon{\n        vertical-align: top;\n      }\n    }\n    .jimu-nav{\n      flex-shrink: 0;\n      flex-grow: 0;\n    }\n    .new-elements-title{\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      margin-bottom: ",";\n    }\n    .jimu-nav{\n      height: "," !important;\n    }\n    .jimu-tab{\n      height: calc(100% - 50px);\n    }\n    .with-search-input.jimu-tab{\n      height: calc(100% - 90px);\n    }\n    .tab-content{\n      overflow: auto;\n      padding-top: ",";\n    }\n\n    .dragable-element:hover{\n      .pendding-elements-item{\n        background-color: ",";\n      }\n    }\n\n    .pendding-elements-item{\n      height: ",";\n      background: ",";\n\n      .pendding-elements-item-icon-container{\n        margin-right: ",";\n        .pendding-elements-item-icon{\n          width: ",";\n          height: ",";\n          color: ",";\n        }\n      }\n      .pendding-elements-item-label{\n        max-width: ",";\n        color: ",";\n        line-height: ",";\n        font-size: ",";\n      }\n    }\n\n    .btn{\n      .jimu-icon{\n        margin: 0;\n      }\n    }\n    .jimu-builder-panel--header {\n      padding: "," ",";\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      h3 {\n        margin: 0;\n        line-height: 1.5;\n        flex-grow: 1;\n      }\n    }\n    .jimu-builder-panel--content {\n      height: 100%;\n      overflow: auto;\n      .widget-card-item{\n        height: 80px;\n        font-size: 13px;\n\n        user-select: none;\n        cursor: pointer;\n        .widget-card-item-content{\n          position: relative;\n          padding-top: 16px;\n          background-color: ",";\n        }\n        &:hover .widget-card-item-content{\n          background-color: ",";\n        }\n        .widget-card-image{\n          width: 20px;\n          height: 20px;\n          &:after{\n            display: none;\n          }\n        }\n\n        .widget-card-name{\n          max-width: 90px;\n          margin: 0 auto;\n          .widget-card-name-content{\n            line-height: 1rem;\n            max-height:2rem;\n            white-space: normal;\n          }\n        }\n\n        .widget-help-btn {\n          position: absolute;\n          top: 0;\n          right: 0;\n          z-index: 1;\n        }\n      }\n\n      .row {\n        .col-6:nth-of-type(2n) {\n          padding-left: ",";\n        }\n        .col-6:nth-of-type(2n+1) {\n          padding-right: ",";\n        }\n\n        .col {\n          flex-basis: 100%;\n        }\n      }\n    }\n    &.widget-popup-hide-animation{\n      transition: transform 0.3s ease-out;\n      &.from-left {\n        transform: translateX(-100%);\n      }\n      &.from-right {\n        transform: translateX(100%);\n      }\n    }\n    &.widget-popup-show-animation{\n      transition: transform 0.3s ease-in;\n      &.from-left {\n        transform: translateX(0%);\n      }\n      &.from-right {\n        transform: translateX(0%);\n      }\n    }\n    &.from-left {\n      left: 0;\n    }\n    &.from-right {\n      right: 0;\n    }\n  }"])),e.colors.palette.dark[600],r.polished.rem(10),r.polished.rem(18),r.polished.rem(12),e.colors.palette.light[800],e.colors.palette.dark[400],r.polished.rem(8),r.polished.rem(43),r.polished.rem(18),e.colors.palette.light[600],r.polished.rem(32),e.colors.secondary,r.polished.rem(8),r.polished.rem(16),r.polished.rem(16),e.colors.palette.dark[800],r.polished.rem(180),e.colors.palette.dark[800],r.polished.rem(32),r.polished.rem(13),e.sizes[2],e.sizes[3],e.colors.palette.light[500],e.colors.palette.light[600],e.sizes[1],e.sizes[1]))},Object(r.jsx)("div",{className:"jimu-builder-panel widget-builder-header-insert-elements from-left flex-column bg-light-300"},Object(r.jsx)("div",{className:"jimu-builder-panel--header d-flex flex-row justify-content-between text-dark-600 title"},Object(r.jsx)("div",{className:"flex-grow-1 m-0 text-truncate text-left"},this.props.intl.formatMessage({id:"element",defaultMessage:m})),Object(r.jsx)("div",{className:"search-icon d-flex align-items-start justify-content-end",onClick:this.onSearchIconClick,title:this.props.intl.formatMessage({id:"search",defaultMessage:r.defaultMessages.search})},Object(r.jsx)(a.Button,{size:"sm",icon:!0,type:"tertiary"},Object(r.jsx)(a.Icon,{icon:X,size:16})))),Object(r.jsx)("div",{className:"w-100 px-3"},this.state.isSearchInputShown&&Object(r.jsx)(a.TextInput,{value:this.state.searchValue,onChange:this.onSearchValueChange,className:"search-input my-2",placeholder:this.props.intl.formatMessage({id:"search",defaultMessage:r.defaultMessages.search}),ref:function(e){return t.searchInput=e}})),Object(r.jsx)(a.Tabs,{underline:!0,fill:!0,className:Object(r.classNames)({"with-search-input":this.state.isSearchInputShown})},Object(r.jsx)(a.Tab,{id:"new",className:"w-50",title:this.props.intl.formatMessage({id:"new",defaultMessage:g}),defaultActive:!0},Object(r.jsx)(n,{widgetList:this.state.widgetList,appMode:this.props.appMode,intl:this.props.intl,searchValue:this.state.searchValue})),Object(r.jsx)(a.Tab,{id:"pending",className:"w-50",title:this.props.intl.formatMessage({id:"pending",defaultMessage:f})},Object(r.jsx)(i,{intl:this.props.intl,searchValue:this.state.searchValue})))))},t.mapExtraStateProps=function(e){var t,n,i;return N(e)?{appMode:null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.appMode,appPath:e.appPath,browserSizeMode:null===(n=e.appStateInBuilder)||void 0===n?void 0:n.browserSizeMode,activePagePart:null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo.activePagePart}:{}},t}(r.React.PureComponent);t.default=W},14:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7 1a6 6 0 100 12A6 6 0 007 1zm0 13a7 7 0 115.621-2.828l-.222.284 3.405 3.404a.668.668 0 01-.944.944L11.456 12.4A6.974 6.974 0 017 14z" fill="#000" fill-rule="evenodd"></path></svg>'},2:function(e,t){e.exports=i},27:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 11A5 5 0 106 1a5 5 0 000 10zm0 1A6 6 0 116 0a6 6 0 010 12zm-.5-7.5h1v4H7a.5.5 0 010 1H5a.5.5 0 010-1h.5v-3H5a.5.5 0 010-1h.5zm.5-1a.5.5 0 110-1 .5.5 0 010 1z" fill="#000" fill-rule="nonzero"></path></svg>'},4:function(e,t){e.exports=o}}))}}}));