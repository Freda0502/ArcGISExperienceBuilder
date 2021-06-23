System.register(["esri/layers/FeatureLayer","jimu-arcgis","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__) {
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, __WEBPACK_EXTERNAL_MODULE_jimu_core__;
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__ = module;
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./your-extensions/widgets/add-layers/src/runtime/widget.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./your-extensions/widgets/add-layers/src/runtime/widget.tsx":
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/runtime/widget.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/** @jsx jsx */\nvar jimu_core_1 = __webpack_require__(/*! jimu-core */ \"jimu-core\");\nvar jimu_arcgis_1 = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\nvar FeatureLayer = __webpack_require__(/*! esri/layers/FeatureLayer */ \"esri/layers/FeatureLayer\");\nvar Widget = /** @class */ (function (_super) {\n    __extends(Widget, _super);\n    function Widget() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.state = {\n            jimuMapView: null,\n        };\n        _this.activeViewChangeHandler = function (jmv) {\n            if (jmv) {\n                _this.setState({\n                    jimuMapView: jmv,\n                });\n            }\n        };\n        _this.formSubmit = function (evt) {\n            evt.preventDefault();\n            var layer = new FeatureLayer({\n                url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0',\n            });\n            // Add the layer to the map (accessed through the Experience Builder JimuMapView data source)\n            _this.state.jimuMapView.view.map.add(layer);\n        };\n        return _this;\n    }\n    Widget.prototype.render = function () {\n        return (jimu_core_1.jsx(\"div\", { className: 'widget-starter jimu-widget' },\n            this.props.hasOwnProperty('useMapWidgetIds') &&\n                this.props.useMapWidgetIds &&\n                this.props.useMapWidgetIds[0] && (jimu_core_1.jsx(jimu_arcgis_1.JimuMapViewComponent, { useMapWidgetIds: this.props.useMapWidgetIds, onActiveViewChange: this.activeViewChangeHandler })),\n            jimu_core_1.jsx(\"form\", { onSubmit: this.formSubmit },\n                jimu_core_1.jsx(\"div\", null,\n                    jimu_core_1.jsx(\"button\", null, \"Add Layer\")))));\n    };\n    return Widget;\n}(jimu_core_1.React.PureComponent));\nexports.default = Widget;\n// import { React, AllWidgetProps, css, jsx } from 'jimu-core'\n// import {\n//   loadArcGISJSAPIModules,\n//   JimuMapViewComponent,\n//   JimuMapView,\n// } from 'jimu-arcgis'\n// import { IMConfig } from '../config'\n// import defaultMessages from './translations/default'\n// interface IState {\n//   featureServiceUrlInput: string\n//   jimuMapView: JimuMapView\n// }\n// export default class Widget extends React.PureComponent<\n//   AllWidgetProps<IMConfig>,\n//   IState\n// > {\n//   // Give types to the modules we import from the ArcGIS API for JavaScript\n//   // to tell TypeScript what types they are.\n//   FeatureLayer: typeof __esri.FeatureLayer\n//   Query: typeof __esri.Query\n//   SpatialReference: typeof __esri.SpatialReference\n//   state = {\n//     featureServiceUrlInput: '',\n//     jimuMapView: null,\n//   }\n//   // Every time the input box value changes, this function gets called.\n//   // We set our component's state so we can use the value in the formSubmit function.\n//   handleFeatureServiceUrlInputChange = (event) => {\n//     this.setState({\n//       featureServiceUrlInput: event.target.value,\n//     })\n//   }\n//   formSubmit = (evt) => {\n//     evt.preventDefault()\n//     // Error cases\n//     if (!this.state.jimuMapView) {\n//       // Data Source was not configured - we cannot do anything.\n//       console.error('Please configure a Data Source with the widget.')\n//       return\n//     }\n//     if (this.state.featureServiceUrlInput == '') {\n//       // Nothing was typed into the box!\n//       alert('Please copy/paste in a FeatureService URL')\n//       return\n//     }\n//     // Lazy-loading (only load if/when needed) the ArcGIS API for JavaScript modules\n//     // that we need - only once the \"Add Layer\" button is pressed.\n//     loadArcGISJSAPIModules([\n//       'esri/layers/FeatureLayer',\n//       'esri/tasks/support/Query',\n//       'esri/geometry/SpatialReference',\n//     ]).then((modules) => {\n//       ;[this.FeatureLayer, this.Query, this.SpatialReference] = modules\n//       // First create the Feature Layer from the URL that is in the box.\n//       const layer = new this.FeatureLayer({\n//         url: this.state.featureServiceUrlInput,\n//       })\n//       // Add the layer to the map (accessed through the Experience Builder Data Source)\n//       this.state.jimuMapView.view.map.add(layer)\n//       // After the layer is created, zoom to the layer's extent, if the setting is set for that.\n//       layer.on('layerview-create', (event) => {\n//         if (\n//           this.props.config.hasOwnProperty('zoomToLayer') &&\n//           this.props.config.zoomToLayer === true\n//         ) {\n//           const query = new this.Query()\n//           query.where = '1=1'\n//           query.outSpatialReference = new this.SpatialReference({\n//             wkid: 102100,\n//           })\n//           layer.queryExtent(query).then((results) => {\n//             this.state.jimuMapView.view.extent = results.extent\n//           })\n//         }\n//         // Process of adding the layer is complete - remove the layer URL from the box so we can add another\n//         this.setState({\n//           featureServiceUrlInput: '',\n//         })\n//       })\n//     })\n//   }\n//   render() {\n//     const style = css`\n//       form > div {\n//         display: flex;\n//         justify-content: space-between;\n//         input {\n//           width: 100%;\n//         }\n//         button {\n//           min-width: 100px;\n//         }\n//       }\n//     `\n//     return (\n//       <div className='widget-addLayers jimu-widget p-2' css={style}>\n//         {this.props.hasOwnProperty('useMapWidgetIds') &&\n//           this.props.useMapWidgetIds &&\n//           this.props.useMapWidgetIds.length === 1 && (\n//             <JimuMapViewComponent\n//               useMapWidgetIds={this.props.useMapWidgetIds}\n//               onActiveViewChange={(jmv: JimuMapView) => {\n//                 this.setState({\n//                   jimuMapView: jmv,\n//                 })\n//               }}\n//             />\n//           )}\n//         <p>{defaultMessages.instructions}</p>\n//         <form onSubmit={this.formSubmit}>\n//           <div>\n//             <input\n//               type='text'\n//               placeholder={defaultMessages.featureServiceUrl}\n//               value={this.state.featureServiceUrlInput}\n//               onChange={this.handleFeatureServiceUrlInputChange}\n//             />\n//             <button>{defaultMessages.addLayer}</button>\n//           </div>\n//         </form>\n//       </div>\n//     )\n//   }\n// }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9ydW50aW1lL3dpZGdldC50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9ydW50aW1lL3dpZGdldC50c3g/ZmQwZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBBbGxXaWRnZXRQcm9wcywgY3NzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcblxuaW1wb3J0IHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBmZWF0dXJlU2VydmljZVVybElucHV0OiBzdHJpbmdcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3XG59XG5cbmltcG9ydCAqIGFzIEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG4gIEFsbFdpZGdldFByb3BzPElNQ29uZmlnPixcbiAgYW55XG4+IHtcbiAgc3RhdGUgPSB7XG4gICAgamltdU1hcFZpZXc6IG51bGwsXG4gIH1cbiAgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgIGlmIChqbXYpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBqaW11TWFwVmlldzogam12LFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZm9ybVN1Ym1pdCA9IChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICB1cmw6XG4gICAgICAgICdodHRwczovL3NlcnZpY2VzMy5hcmNnaXMuY29tL0dWZ2JKYnFtOGhYQVNWWWkvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvVHJhaWxoZWFkc19TdHlsZWQvRmVhdHVyZVNlcnZlci8wJyxcbiAgICB9KVxuXG4gICAgLy8gQWRkIHRoZSBsYXllciB0byB0aGUgbWFwIChhY2Nlc3NlZCB0aHJvdWdoIHRoZSBFeHBlcmllbmNlIEJ1aWxkZXIgSmltdU1hcFZpZXcgZGF0YSBzb3VyY2UpXG4gICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobGF5ZXIpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkZ2V0LXN0YXJ0ZXIgamltdS13aWRnZXQnPlxuICAgICAgICB7dGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndXNlTWFwV2lkZ2V0SWRzJykgJiZcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdICYmIChcbiAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxuICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmZvcm1TdWJtaXR9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uPkFkZCBMYXllcjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gaW1wb3J0IHsgUmVhY3QsIEFsbFdpZGdldFByb3BzLCBjc3MsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcbi8vIGltcG9ydCB7XG4vLyAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsXG4vLyAgIEppbXVNYXBWaWV3Q29tcG9uZW50LFxuLy8gICBKaW11TWFwVmlldyxcbi8vIH0gZnJvbSAnamltdS1hcmNnaXMnXG5cbi8vIGltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG4vLyBpbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5cbi8vIGludGVyZmFjZSBJU3RhdGUge1xuLy8gICBmZWF0dXJlU2VydmljZVVybElucHV0OiBzdHJpbmdcbi8vICAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG4vLyAgIEFsbFdpZGdldFByb3BzPElNQ29uZmlnPixcbi8vICAgSVN0YXRlXG4vLyA+IHtcbi8vICAgLy8gR2l2ZSB0eXBlcyB0byB0aGUgbW9kdWxlcyB3ZSBpbXBvcnQgZnJvbSB0aGUgQXJjR0lTIEFQSSBmb3IgSmF2YVNjcmlwdFxuLy8gICAvLyB0byB0ZWxsIFR5cGVTY3JpcHQgd2hhdCB0eXBlcyB0aGV5IGFyZS5cbi8vICAgRmVhdHVyZUxheWVyOiB0eXBlb2YgX19lc3JpLkZlYXR1cmVMYXllclxuLy8gICBRdWVyeTogdHlwZW9mIF9fZXNyaS5RdWVyeVxuLy8gICBTcGF0aWFsUmVmZXJlbmNlOiB0eXBlb2YgX19lc3JpLlNwYXRpYWxSZWZlcmVuY2VcblxuLy8gICBzdGF0ZSA9IHtcbi8vICAgICBmZWF0dXJlU2VydmljZVVybElucHV0OiAnJyxcbi8vICAgICBqaW11TWFwVmlldzogbnVsbCxcbi8vICAgfVxuXG4vLyAgIC8vIEV2ZXJ5IHRpbWUgdGhlIGlucHV0IGJveCB2YWx1ZSBjaGFuZ2VzLCB0aGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkLlxuLy8gICAvLyBXZSBzZXQgb3VyIGNvbXBvbmVudCdzIHN0YXRlIHNvIHdlIGNhbiB1c2UgdGhlIHZhbHVlIGluIHRoZSBmb3JtU3VibWl0IGZ1bmN0aW9uLlxuLy8gICBoYW5kbGVGZWF0dXJlU2VydmljZVVybElucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4vLyAgICAgICBmZWF0dXJlU2VydmljZVVybElucHV0OiBldmVudC50YXJnZXQudmFsdWUsXG4vLyAgICAgfSlcbi8vICAgfVxuXG4vLyAgIGZvcm1TdWJtaXQgPSAoZXZ0KSA9PiB7XG4vLyAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcblxuLy8gICAgIC8vIEVycm9yIGNhc2VzXG4vLyAgICAgaWYgKCF0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4vLyAgICAgICAvLyBEYXRhIFNvdXJjZSB3YXMgbm90IGNvbmZpZ3VyZWQgLSB3ZSBjYW5ub3QgZG8gYW55dGhpbmcuXG4vLyAgICAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgY29uZmlndXJlIGEgRGF0YSBTb3VyY2Ugd2l0aCB0aGUgd2lkZ2V0LicpXG4vLyAgICAgICByZXR1cm5cbi8vICAgICB9XG4vLyAgICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZVNlcnZpY2VVcmxJbnB1dCA9PSAnJykge1xuLy8gICAgICAgLy8gTm90aGluZyB3YXMgdHlwZWQgaW50byB0aGUgYm94IVxuLy8gICAgICAgYWxlcnQoJ1BsZWFzZSBjb3B5L3Bhc3RlIGluIGEgRmVhdHVyZVNlcnZpY2UgVVJMJylcbi8vICAgICAgIHJldHVyblxuLy8gICAgIH1cblxuLy8gICAgIC8vIExhenktbG9hZGluZyAob25seSBsb2FkIGlmL3doZW4gbmVlZGVkKSB0aGUgQXJjR0lTIEFQSSBmb3IgSmF2YVNjcmlwdCBtb2R1bGVzXG4vLyAgICAgLy8gdGhhdCB3ZSBuZWVkIC0gb25seSBvbmNlIHRoZSBcIkFkZCBMYXllclwiIGJ1dHRvbiBpcyBwcmVzc2VkLlxuLy8gICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuLy8gICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcicsXG4vLyAgICAgICAnZXNyaS90YXNrcy9zdXBwb3J0L1F1ZXJ5Jyxcbi8vICAgICAgICdlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2UnLFxuLy8gICAgIF0pLnRoZW4oKG1vZHVsZXMpID0+IHtcbi8vICAgICAgIDtbdGhpcy5GZWF0dXJlTGF5ZXIsIHRoaXMuUXVlcnksIHRoaXMuU3BhdGlhbFJlZmVyZW5jZV0gPSBtb2R1bGVzXG5cbi8vICAgICAgIC8vIEZpcnN0IGNyZWF0ZSB0aGUgRmVhdHVyZSBMYXllciBmcm9tIHRoZSBVUkwgdGhhdCBpcyBpbiB0aGUgYm94LlxuLy8gICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgdGhpcy5GZWF0dXJlTGF5ZXIoe1xuLy8gICAgICAgICB1cmw6IHRoaXMuc3RhdGUuZmVhdHVyZVNlcnZpY2VVcmxJbnB1dCxcbi8vICAgICAgIH0pXG5cbi8vICAgICAgIC8vIEFkZCB0aGUgbGF5ZXIgdG8gdGhlIG1hcCAoYWNjZXNzZWQgdGhyb3VnaCB0aGUgRXhwZXJpZW5jZSBCdWlsZGVyIERhdGEgU291cmNlKVxuLy8gICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobGF5ZXIpXG5cbi8vICAgICAgIC8vIEFmdGVyIHRoZSBsYXllciBpcyBjcmVhdGVkLCB6b29tIHRvIHRoZSBsYXllcidzIGV4dGVudCwgaWYgdGhlIHNldHRpbmcgaXMgc2V0IGZvciB0aGF0LlxuLy8gICAgICAgbGF5ZXIub24oJ2xheWVydmlldy1jcmVhdGUnLCAoZXZlbnQpID0+IHtcbi8vICAgICAgICAgaWYgKFxuLy8gICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmhhc093blByb3BlcnR5KCd6b29tVG9MYXllcicpICYmXG4vLyAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuem9vbVRvTGF5ZXIgPT09IHRydWVcbi8vICAgICAgICAgKSB7XG4vLyAgICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgdGhpcy5RdWVyeSgpXG4vLyAgICAgICAgICAgcXVlcnkud2hlcmUgPSAnMT0xJ1xuLy8gICAgICAgICAgIHF1ZXJ5Lm91dFNwYXRpYWxSZWZlcmVuY2UgPSBuZXcgdGhpcy5TcGF0aWFsUmVmZXJlbmNlKHtcbi8vICAgICAgICAgICAgIHdraWQ6IDEwMjEwMCxcbi8vICAgICAgICAgICB9KVxuLy8gICAgICAgICAgIGxheWVyLnF1ZXJ5RXh0ZW50KHF1ZXJ5KS50aGVuKChyZXN1bHRzKSA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZXh0ZW50ID0gcmVzdWx0cy5leHRlbnRcbi8vICAgICAgICAgICB9KVxuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgLy8gUHJvY2VzcyBvZiBhZGRpbmcgdGhlIGxheWVyIGlzIGNvbXBsZXRlIC0gcmVtb3ZlIHRoZSBsYXllciBVUkwgZnJvbSB0aGUgYm94IHNvIHdlIGNhbiBhZGQgYW5vdGhlclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcbi8vICAgICAgICAgICBmZWF0dXJlU2VydmljZVVybElucHV0OiAnJyxcbi8vICAgICAgICAgfSlcbi8vICAgICAgIH0pXG4vLyAgICAgfSlcbi8vICAgfVxuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBjb25zdCBzdHlsZSA9IGNzc2Bcbi8vICAgICAgIGZvcm0gPiBkaXYge1xuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgICAgIGlucHV0IHtcbi8vICAgICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBidXR0b24ge1xuLy8gICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICBgXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQtYWRkTGF5ZXJzIGppbXUtd2lkZ2V0IHAtMicgY3NzPXtzdHlsZX0+XG4vLyAgICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd1c2VNYXBXaWRnZXRJZHMnKSAmJlxuLy8gICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXG4vLyAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcbi8vICAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuLy8gICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxuLy8gICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4vLyAgICAgICAgICAgICAgICAgICBqaW11TWFwVmlldzogam12LFxuLy8gICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgIH19XG4vLyAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICl9XG5cbi8vICAgICAgICAgPHA+e2RlZmF1bHRNZXNzYWdlcy5pbnN0cnVjdGlvbnN9PC9wPlxuXG4vLyAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmZvcm1TdWJtaXR9PlxuLy8gICAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICA8aW5wdXRcbi8vICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbi8vICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2RlZmF1bHRNZXNzYWdlcy5mZWF0dXJlU2VydmljZVVybH1cbi8vICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmVhdHVyZVNlcnZpY2VVcmxJbnB1dH1cbi8vICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmVhdHVyZVNlcnZpY2VVcmxJbnB1dENoYW5nZX1cbi8vICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICA8YnV0dG9uPntkZWZhdWx0TWVzc2FnZXMuYWRkTGF5ZXJ9PC9idXR0b24+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZm9ybT5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vICAgfVxuLy8gfVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQW9CQTtBQW5CQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/add-layers/src/runtime/widget.tsx\n");

/***/ }),

/***/ "esri/layers/FeatureLayer":
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCI/YTI0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfRmVhdHVyZUxheWVyX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///esri/layers/FeatureLayer\n");

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1hcmNnaXMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW11LWFyY2dpc1wiPzlmMWMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-arcgis\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1jb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltdS1jb3JlXCI/YzY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-core\n");

/***/ })

/******/ })
			);
		}
	};
});