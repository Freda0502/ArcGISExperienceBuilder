System.register(["jimu-core","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__, __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = module;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./your-extensions/widgets/add-layers/src/setting/setting.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./your-extensions/widgets/add-layers/src/setting/setting.tsx":
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/setting/setting.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/** @jsx jsx */\nvar jimu_core_1 = __webpack_require__(/*! jimu-core */ \"jimu-core\");\nvar setting_components_1 = __webpack_require__(/*! jimu-ui/advanced/setting-components */ \"jimu-ui/advanced/setting-components\");\nvar Setting = /** @class */ (function (_super) {\n    __extends(Setting, _super);\n    function Setting() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.onMapWidgetSelected = function (useMapWidgetIds) {\n            _this.props.onSettingChange({\n                id: _this.props.id,\n                useMapWidgetIds: useMapWidgetIds,\n            });\n        };\n        return _this;\n    }\n    Setting.prototype.render = function () {\n        return (jimu_core_1.jsx(\"div\", { className: 'widget-setting-demo' },\n            jimu_core_1.jsx(setting_components_1.JimuMapViewSelector, { useMapWidgetIds: this.props.useMapWidgetIds, onSelect: this.onMapWidgetSelected })));\n    };\n    return Setting;\n}(jimu_core_1.React.PureComponent));\nexports.default = Setting;\n// import { React, FormattedMessage, css, jsx } from 'jimu-core'\n// import { AllWidgetSettingProps } from 'jimu-for-builder'\n// import { Switch } from 'jimu-ui'\n// import {\n//   JimuMapViewSelector,\n//   SettingSection,\n//   SettingRow,\n// } from 'jimu-ui/advanced/setting-components'\n// import { IMConfig } from '../config'\n// import defaultMessages from './translations/default'\n// export default class Setting extends React.PureComponent<\n//   AllWidgetSettingProps<IMConfig>,\n//   any\n// > {\n//   onZoomToLayerPropertyChange = (evt: React.FormEvent<HTMLInputElement>) => {\n//     this.props.onSettingChange({\n//       id: this.props.id,\n//       config: this.props.config.set('zoomToLayer', evt.currentTarget.checked),\n//     })\n//   }\n//   onMapWidgetSelected = (useMapWidgetIds: string[]) => {\n//     this.props.onSettingChange({\n//       id: this.props.id,\n//       useMapWidgetIds: useMapWidgetIds,\n//     })\n//   }\n//   render() {\n//     const style = css`\n//       .widget-setting-addLayers {\n//         .checkbox-row {\n//           display: flex;\n//           justify-content: space-between;\n//           margin-bottom: 8px;\n//         }\n//       }\n//     `\n//     return (\n//       <div css={style}>\n//         <div className='widget-setting-addLayers'>\n//           <SettingSection\n//             className='map-selector-section'\n//             title={this.props.intl.formatMessage({\n//               id: 'mapWidgetLabel',\n//               defaultMessage: defaultMessages.selectMapWidget,\n//             })}\n//           >\n//             {/*\n//             <SettingRow>\n//               <div className=\"map-selector-descript\">{this.props.intl.formatMessage({id: 'sourceDescript', defaultMessage: 'set an interactive map **'})}</div>\n//             </SettingRow>\n//             */}\n//             <SettingRow>\n//               <JimuMapViewSelector\n//                 onSelect={this.onMapWidgetSelected}\n//                 useMapWidgetIds={this.props.useMapWidgetIds}\n//               />\n//             </SettingRow>\n//           </SettingSection>\n//           <SettingSection\n//             title={this.props.intl.formatMessage({\n//               id: 'settingsLabel',\n//               defaultMessage: defaultMessages.settings,\n//             })}\n//           >\n//             <SettingRow>\n//               <div className='w-100 addLayers'>\n//                 <div className='checkbox-row'>\n//                   <label>\n//                     <FormattedMessage\n//                       id='zoomToLayer'\n//                       defaultMessage={defaultMessages.zoomToLayer}\n//                     />\n//                   </label>\n//                   <Switch\n//                     checked={\n//                       (this.props.config && this.props.config.zoomToLayer) ||\n//                       false\n//                     }\n//                     onChange={this.onZoomToLayerPropertyChange}\n//                   />\n//                 </div>\n//               </div>\n//             </SettingRow>\n//           </SettingSection>\n//         </div>\n//       </div>\n//     )\n//   }\n// }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYWRkLWxheWVycy9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeD83N2IxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInXG5pbXBvcnQgeyBKaW11TWFwVmlld1NlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG4gIEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4sXG4gIGFueVxuPiB7XG4gb25NYXBXaWRnZXRTZWxlY3RlZCA9ICh1c2VNYXBXaWRnZXRJZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkcyxcbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZGdldC1zZXR0aW5nLWRlbW8nPlxuICAgICAgIDxKaW11TWFwVmlld1NlbGVjdG9yXG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc31cbiAgICAgICAgICBvblNlbGVjdD17dGhpcy5vbk1hcFdpZGdldFNlbGVjdGVkfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gaW1wb3J0IHsgUmVhY3QsIEZvcm1hdHRlZE1lc3NhZ2UsIGNzcywganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuLy8gaW1wb3J0IHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcbi8vIGltcG9ydCB7IFN3aXRjaCB9IGZyb20gJ2ppbXUtdWknXG4vLyBpbXBvcnQge1xuLy8gICBKaW11TWFwVmlld1NlbGVjdG9yLFxuLy8gICBTZXR0aW5nU2VjdGlvbixcbi8vICAgU2V0dGluZ1Jvdyxcbi8vIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG4vLyBpbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbi8vIGltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcblxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG4vLyAgIEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4sXG4vLyAgIGFueVxuLy8gPiB7XG4vLyAgIG9uWm9vbVRvTGF5ZXJQcm9wZXJ0eUNoYW5nZSA9IChldnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuLy8gICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbi8vICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuLy8gICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ3pvb21Ub0xheWVyJywgZXZ0LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCksXG4vLyAgICAgfSlcbi8vICAgfVxuXG4vLyAgIG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xuLy8gICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbi8vICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuLy8gICAgICAgdXNlTWFwV2lkZ2V0SWRzOiB1c2VNYXBXaWRnZXRJZHMsXG4vLyAgICAgfSlcbi8vICAgfVxuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBjb25zdCBzdHlsZSA9IGNzc2Bcbi8vICAgICAgIC53aWRnZXQtc2V0dGluZy1hZGRMYXllcnMge1xuLy8gICAgICAgICAuY2hlY2tib3gtcm93IHtcbi8vICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICBgXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXYgY3NzPXtzdHlsZX0+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQtc2V0dGluZy1hZGRMYXllcnMnPlxuLy8gICAgICAgICAgIDxTZXR0aW5nU2VjdGlvblxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPSdtYXAtc2VsZWN0b3Itc2VjdGlvbidcbi8vICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XG4vLyAgICAgICAgICAgICAgIGlkOiAnbWFwV2lkZ2V0TGFiZWwnLFxuLy8gICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnNlbGVjdE1hcFdpZGdldCxcbi8vICAgICAgICAgICAgIH0pfVxuLy8gICAgICAgICAgID5cbi8vICAgICAgICAgICAgIHsvKlxuLy8gICAgICAgICAgICAgPFNldHRpbmdSb3c+XG4vLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLXNlbGVjdG9yLWRlc2NyaXB0XCI+e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ3NvdXJjZURlc2NyaXB0JywgZGVmYXVsdE1lc3NhZ2U6ICdzZXQgYW4gaW50ZXJhY3RpdmUgbWFwICoqJ30pfTwvZGl2PlxuLy8gICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxuLy8gICAgICAgICAgICAgKi99XG4vLyAgICAgICAgICAgICA8U2V0dGluZ1Jvdz5cbi8vICAgICAgICAgICAgICAgPEppbXVNYXBWaWV3U2VsZWN0b3Jcbi8vICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vbk1hcFdpZGdldFNlbGVjdGVkfVxuLy8gICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHN9XG4vLyAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XG4vLyAgICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cblxuLy8gICAgICAgICAgIDxTZXR0aW5nU2VjdGlvblxuLy8gICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcbi8vICAgICAgICAgICAgICAgaWQ6ICdzZXR0aW5nc0xhYmVsJyxcbi8vICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5zZXR0aW5ncyxcbi8vICAgICAgICAgICAgIH0pfVxuLy8gICAgICAgICAgID5cbi8vICAgICAgICAgICAgIDxTZXR0aW5nUm93PlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgYWRkTGF5ZXJzJz5cbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hlY2tib3gtcm93Jz5cbi8vICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbi8vICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Vcbi8vICAgICAgICAgICAgICAgICAgICAgICBpZD0nem9vbVRvTGF5ZXInXG4vLyAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRNZXNzYWdlcy56b29tVG9MYXllcn1cbi8vICAgICAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4vLyAgICAgICAgICAgICAgICAgICA8U3dpdGNoXG4vLyAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuLy8gICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy56b29tVG9MYXllcikgfHxcbi8vICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uWm9vbVRvTGF5ZXJQcm9wZXJ0eUNoYW5nZX1cbi8vICAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxuLy8gICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICB9XG4vLyB9XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVVBO0FBVEE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./your-extensions/widgets/add-layers/src/setting/setting.tsx\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1jb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltdS1jb3JlXCI/YzY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-core\n");

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiP2RlZTIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-ui/advanced/setting-components\n");

/***/ })

/******/ })
			);
		}
	};
});