System.register(["jimu-core","jimu-arcgis"],(function(e){var t,r;return{setters:[function(e){t=e},function(e){r=e}],execute:function(){e(function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=133)}({0:function(e,r){e.exports=t},133:function(e,t,r){"use strict";r.r(t);var n,a=r(0),o=r(4),i=r(27),u=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.filterMessageType=function(e,t){return e===a.MessageType.DataRecordSetCreate||e===a.MessageType.DataRecordSetUpdate||e===a.MessageType.DataRecordsSelectionChange||e===a.MessageType.ExtentChange},t.prototype.filterMessage=function(e){return!0},t.prototype.getSettingComponentUri=function(e,t){return"Map"===(Object(a.getAppStore)().getState().appStateInBuilder?Object(a.getAppStore)().getState().appStateInBuilder.appConfig:Object(a.getAppStore)().getState().appConfig).widgets[t].manifest.label&&e===a.MessageType.DataRecordsSelectionChange?"message-actions/pan-to-action-setting":null},t.prototype.onExecute=function(e,t){var r=this;return Object(o.loadArcGISJSAPIModules)(["esri/Graphic"]).then((function(n){var o;switch(o=n[0],e.type){case a.MessageType.DataRecordSetCreate:var u=e,s={};if(u.dataRecordSet&&u.dataRecordSet.records){for(var c=[],l=0;l<u.dataRecordSet.records.length;l++){(h=u.dataRecordSet.records[l].feature)&&c.push(Object(i.f)(h,o).geometry)}s={features:c}}a.MutableStoreManager.getInstance().updateStateValue(r.widgetId,"panToActionValue.value",s);break;case a.MessageType.DataRecordSetUpdate:var f=e,d={};if(f.dataRecordSet&&f.dataRecordSet.records){for(c=[],l=0;l<f.dataRecordSet.records.length;l++){(h=f.dataRecordSet.records[l].feature)&&c.push(Object(i.f)(h,o).geometry)}d={features:c}}a.MutableStoreManager.getInstance().updateStateValue(r.widgetId,"panToActionValue.value",d);break;case a.MessageType.DataRecordsSelectionChange:if(t){var p={},g=[];if((y=e).records){if(y.records[0]&&(!t.useDataSource||y.records[0].dataSource.getMainDataSource().id!==t.useDataSource.mainDataSourceId))break;for(l=0;l<y.records.length;l++){(h=y.records[l].feature)&&g.push(Object(i.f)(h,o).geometry)}}p={features:g},a.MutableStoreManager.getInstance().updateStateValue(r.widgetId,"panToActionValue.value",p);break}var y;p={},g=[];if((y=e).records)for(l=0;l<y.records.length;l++){var h;(h=y.records[l].feature)&&g.push(Object(i.f)(h,o).geometry)}p={features:g},a.MutableStoreManager.getInstance().updateStateValue(r.widgetId,"panToActionValue.value",p);break;case a.MessageType.ExtentChange:var m=e;if(m.getRelatedWidgetIds().indexOf(r.widgetId)>-1)break;var v={value:{features:[m.extent]},relatedWidgets:m.getRelatedWidgetIds()};a.MutableStoreManager.getInstance().updateStateValue(r.widgetId,"panToActionValue",v)}return!0}))},t}(a.AbstractMessageAction);t.default=s},27:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"l",(function(){return i})),r.d(t,"k",(function(){return s})),r.d(t,"g",(function(){return c})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return d})),r.d(t,"f",(function(){return h})),r.d(t,"i",(function(){return m})),r.d(t,"h",(function(){return v})),r.d(t,"a",(function(){return b})),r.d(t,"e",(function(){return S})),r.d(t,"j",(function(){return w}));var n=r(0),a=r(4);function o(e,t){var r=[];return t&&Object.keys(t).forEach((function(n){e.map.layers.find((function(e){return e.id===n}))?console.warn("the feature layer is already created"):r.push(u(e,t[n],n))})),0===r.length?null:Promise.all(r)}function i(e,t){var r=[];return t&&Object.keys(t).forEach((function(n){var a=e.map.layers.find((function(e){return e.id===n}));a&&(e.map.remove(a),r.push(u(e,t[n],n)))})),0===r.length?null:Promise.all(r)}function u(e,t,r){return new Promise((function(n,o){return Object(a.loadArcGISJSAPIModules)(["esri/layers/FeatureLayer"]).then((function(a){if(t.features.length<1)return n();var o=void 0;o=a[0];for(var i=t.features[0].layer,u=[],s={},c=0;c<i.fields.length;c++){var l=(g=i.fields[c],void 0,{name:g.name.replace(/\./g,"_").replace(/\(/g,"_").replace(/\)/g,"_"),alias:g.alias,type:g.type});s[i.fields[c].name]=l.name,u.push(l)}var f=[];for(var d in t.features[0].attributes)if(s[d]){l={fieldName:s[d],label:d};f.push(l)}var p=[];t.features.forEach((function(e,t){var r=e;if(r.attributes){for(var n in r.attributes)r.attributes[s[n]]=r.attributes[n];r.attributes.exbfid=t}else r.attributes={exbfid:t};p.push(r)}));var g,y=new o({id:r,title:i.title,source:p,fields:u,outFields:["*"],objectIdField:"exbfid",renderer:i.renderer,popupEnabled:!0,popupTemplate:{title:"information",content:[{type:"fields",fieldInfos:f}]}});e.map.add(y),y.on("layerview-create",(function(e){return n()}))}))}))}function s(e,t,r){var n=r,a=null,o=null;if(n||(o=t instanceof Array?t[0]:t)&&(n=o.layer&&o.layer.id),n){for(var i=e.allLayerViews,u=0;u<i.length;u++)i.getItemAt(u).layer.id===n&&(a=i.getItemAt(u));return a?{layerId:n,handle:a.highlight(t)}:null}}function c(e,t){var r=t,n=e;if(r instanceof Array){if(0===r.length)return Promise.resolve();if(r[0].geometry){for(var a=[],o=0;o<r.length;o++)a.push(r[o].geometry);return l(a).then((function(e){return n.goTo(e.center)}))}return l(r).then((function(e){return n.goTo(e.center)}))}if(r.geometry){var i=r.geometry;return n.goTo(y(i))}return n.goTo(y(r))}function l(e){return Object(a.loadArcGISJSAPIModules)(["esri/geometry/Extent"]).then((function(t){var r;if(r=t[0],!e||!e.length)return Promise.resolve(null);var n,a=null,o=e.length;for(n=0;n<o;n++){var i=e[n];if(i){var u=i.extent;if(!u&&"point"===i.type){var s=i;s.x&&s.y&&(u=new r({xmax:s.x,xmin:s.x,ymax:s.y,ymin:s.y,zmax:s.z,zmin:s.z,spatialReference:s.spatialReference}))}u&&(a=a?a.union(u):u)}}return a.width<0&&a.height<0?Promise.resolve(null):Promise.resolve(a)}))}function f(e,t,r){if(t)for(var n=e.jimuLayerViews,o=Object.keys(n),i=0;i<o.length;i++){var u=n[o[i]];u&&u.layer&&u.layerDataSourceId===t&&u.type===a.LayerTypes.FeatureLayer&&u.setLocalDefinitionExpression(r)}}function d(e,t,r){if(t)for(var o=e.jimuLayerViews,i=Object.keys(o),u=function(u){var s=o[i[u]];if(s&&s.layer&&s.layerDataSourceId===t&&s.type===a.LayerTypes.FeatureLayer)if(s.view){var c=s.view;if(!c)return{value:null};Object(a.loadArcGISJSAPIModules)(["esri/tasks/support/Query","esri/Graphic"]).then((function(t){var n,a;n=t[0],a=t[1];var o=new n;o.where=r,o.outFields=["*"],o.returnGeometry=!0,c.layer.queryFeatures(o).then((function(t){if(t&&t.features&&t.features.length>0){var r=g(c.layer.geometryType);p(e.view,t.features,r,a)}}))}))}else Object(a.loadArcGISJSAPIModules)(["esri/tasks/support/Query","esri/layers/FeatureLayer","esri/Graphic"]).then((function(t){var a,o,i;a=t[0],o=t[1],i=t[2];var u=new a;u.where=r,u.outFields=["*"],u.returnGeometry=!0;var c=new o({url:n.dataSourceUtils.getUrlByLayer(s.layer)});c.load().then((function(){c.queryFeatures(u).then((function(t){if(t&&t.features&&t.features.length>0){var r=g(t.features[0].geometry.type);p(e.view,t.features,r,i)}}))}))}))},s=0;s<i.length;s++){var c=u(s);if("object"==typeof c)return c.value}}function p(e,t,r,n){!function(t,a){for(var o=[],i=0,u=0;u<t.length;u++){var s=new n({geometry:t[u].geometry,symbol:r,attributes:t[u].attributes});o.push(s)}var c=function(){e.graphics.addMany(o),setTimeout((function(){e.graphics.removeMany(o),(i+=1)<a&&setTimeout((function(){c()}),500)}),500)};c()}(t,3)}function g(e){return["point","multipoint"].indexOf(e)>-1?{type:"simple-marker",style:"circle",color:[255,255,0,.8],size:"16px",outline:{color:[255,255,0,.8],width:3}}:["polyline"].indexOf(e)>-1?{type:"simple-line",color:[255,255,0,.8],width:3,style:"solid"}:["polygon","extent"].indexOf(e)>-1?{type:"simple-fill",color:[255,255,0,.5],style:"solid",outline:{color:[255,255,0,.8],width:3}}:["mesh"].indexOf(e)>-1?{type:"mesh-3d",symbolLayers:[{type:"fill",material:{color:[255,255,0,.8]}}]}:null}function y(e){switch(e.type){case"point":return e;case"extent":return e.center;case"polygon":return e.centroid;case"polyline":return e.extent.center;default:return e&&e.extent?e.extent.center:void 0}}function h(e,t){var r=null;return e.clone?r=e.clone():(r=t.fromJSON(Object.assign({},e))).attributes=Object.assign({},e.attributes),r}function m(e,t){return e&&0!==e.length&&e[0]&&t.wkid!==e[0].spatialReference.wkid&&!t.equals(e[0].spatialReference)?t.isWebMercator&&e[0].spatialReference.isWGS84||t.isWGS84&&e[0].spatialReference.isWebMercator?Promise.resolve(e):a.geometryUtils.projectToSpatialReference(e,t):Promise.resolve(e)}function v(e,t,r){return e&&"3d"===e.type&&t&&t.queryFeatures&&r?Object(a.loadArcGISJSAPIModules)(["esri/tasks/support/Query"]).then((function(e){var n=new(0,e[0]);return n.returnGeometry=!0,n.outFields=["*"],n.objectIds=r.map((function(e){return e.attributes[t.objectIdField]})),t.queryFeatures(n).then((function(e){return e&&e.features&&e.features.length===r.length?Promise.resolve(e.features):Promise.resolve(r)}),(function(){return Promise.resolve(r)}))})):Promise.resolve(r)}function b(e){return!window.jimuConfig.isInBuilder||e!==n.AppMode.Design}function S(e){return{mapContainer:e.mapContainer,state:e.state,MapView:e.MapView,SceneView:e.SceneView,Extent:e.Extent,Viewpoint:e.Viewpoint,mapView:e.mapView,sceneView:e.sceneView,extentWatch:e.extentWatch,fatalErrorWatch:e.fatalErrorWatch,dsManager:e.dsManager,highLightHandles:e.highLightHandles,mapBaseViewEventHandles:e.mapBaseViewEventHandles,Color:e.Color,isRequestingMap:e.isRequestingMap}}function w(e,t){e.mapContainer=t.mapContainer,e.state=t.state,e.MapView=t.MapView,e.SceneView=t.SceneView,e.Extent=t.Extent,e.Viewpoint=t.Viewpoint,e.mapView=t.mapView,e.sceneView=t.sceneView,e.extentWatch=t.extentWatch,e.fatalErrorWatch=t.fatalErrorWatch,e.dsManager=t.dsManager,e.highLightHandles=t.highLightHandles,e.mapBaseViewEventHandles=t.mapBaseViewEventHandles,e.Color=t.Color,e.isRequestingMap=t.isRequestingMap}},4:function(e,t){e.exports=r}}))}}}));