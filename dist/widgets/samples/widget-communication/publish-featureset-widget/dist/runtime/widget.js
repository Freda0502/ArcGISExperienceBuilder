System.register(["jimu-core","esri/tasks/support/Query"],(function(e){var t,n;return{setters:[function(e){t=e},function(e){n=e}],execute:function(){e(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=358)}({0:function(e,n){e.exports=t},358:function(e,t,n){"use strict";n.r(t);var r,o=n(0),a=n(43),u=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={query:{}},t.showOnMap=function(e){var n={records:e.getRecords()};o.MessageManager.getInstance().publishMessage(new o.DataRecordSetCreateMessage(t.props.id,"fs1",n))},t.onFeatureSelectionChanged=function(e){o.MessageManager.getInstance().publishMessage(new o.DataRecordsSelectionChangeMessage(t.props.id,[e]))},t.showOnMap2=function(e){var n={records:e.getRecords()};o.MessageManager.getInstance().publishMessage(new o.DataRecordSetCreateMessage(t.props.id,"fs2",n))},t}return u(t,e),t.prototype.componentDidMount=function(){var e=new a({where:"1 = 1",outFields:["*"],returnGeometry:!0});this.setState({query:e})},t.prototype.render=function(){var e=this;return o.React.createElement("div",null,o.React.createElement(o.DataSourceComponent,{useDataSource:this.props.useDataSources[0],query:this.state.query,widgetId:this.props.id},(function(t,n){var r=n.status===o.DataSourceStatus.Loaded?t.getRecords().map((function(t,n){return n<10?o.React.createElement("div",{key:n,onClick:function(){e.onFeatureSelectionChanged(t)}},t.getData().CITY_NAME):null})):null;return o.React.createElement("div",null,o.React.createElement("h5",null,"This widget will publish ",o.React.createElement("b",null,"DATA_RECORD_SET_CREATE")," message"),o.React.createElement("button",{onClick:function(){return e.showOnMap(t)}},"display and zoomto features"),o.React.createElement("div",null,"query state: ",n.status),r)})),o.React.createElement(o.DataSourceComponent,{useDataSource:this.props.useDataSources[1],query:this.state.query,widgetId:this.props.id},(function(t,n){var r=n.status===o.DataSourceStatus.Loaded?t.getRecords().map((function(t,n){return n<10?o.React.createElement("div",{key:n,onClick:function(){e.onFeatureSelectionChanged(t)}},t.getData().name):null})):null;return o.React.createElement("div",null,o.React.createElement("h5",null,"This widget will publish ",o.React.createElement("b",null,"DATA_RECORD_SET_CREATE")," message2"),o.React.createElement("button",{onClick:function(){return e.showOnMap2(t)}},"display and zoomto features"),o.React.createElement("div",null,"query state: ",n.status),r)})))},t}(o.React.PureComponent);t.default=c},43:function(e,t){e.exports=n}}))}}}));