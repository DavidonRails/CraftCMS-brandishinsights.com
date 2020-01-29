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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("\n// $(document).ready(function() {\n//     $('img[src$=\".svg\"]').each(function() {\n//         var $img = jQuery(this);\n//         var imgURL = $img.attr('src');\n//         var attributes = $img.prop(\"attributes\");\n\n//         $.get(imgURL, function(data) {\n//             // Get the SVG tag, ignore the rest\n//             var $svg = jQuery(data).find('svg');\n\n//             // Remove any invalid XML tags\n//             $svg = $svg.removeAttr('xmlns:a');\n\n//             // Loop through IMG attributes and apply on SVG\n//             $.each(attributes, function() {\n//                 $svg.attr(this.name, this.value);\n//             });\n\n//             // Replace IMG with SVG\n//             $img.replaceWith($svg);\n//         }, 'xml');\n//     });\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdGhlbWUuanM/OTllMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbi8vICAgICAkKCdpbWdbc3JjJD1cIi5zdmdcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICB2YXIgJGltZyA9IGpRdWVyeSh0aGlzKTtcbi8vICAgICAgICAgdmFyIGltZ1VSTCA9ICRpbWcuYXR0cignc3JjJyk7XG4vLyAgICAgICAgIHZhciBhdHRyaWJ1dGVzID0gJGltZy5wcm9wKFwiYXR0cmlidXRlc1wiKTtcblxuLy8gICAgICAgICAkLmdldChpbWdVUkwsIGZ1bmN0aW9uKGRhdGEpIHtcbi8vICAgICAgICAgICAgIC8vIEdldCB0aGUgU1ZHIHRhZywgaWdub3JlIHRoZSByZXN0XG4vLyAgICAgICAgICAgICB2YXIgJHN2ZyA9IGpRdWVyeShkYXRhKS5maW5kKCdzdmcnKTtcblxuLy8gICAgICAgICAgICAgLy8gUmVtb3ZlIGFueSBpbnZhbGlkIFhNTCB0YWdzXG4vLyAgICAgICAgICAgICAkc3ZnID0gJHN2Zy5yZW1vdmVBdHRyKCd4bWxuczphJyk7XG5cbi8vICAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBJTUcgYXR0cmlidXRlcyBhbmQgYXBwbHkgb24gU1ZHXG4vLyAgICAgICAgICAgICAkLmVhY2goYXR0cmlidXRlcywgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgJHN2Zy5hdHRyKHRoaXMubmFtZSwgdGhpcy52YWx1ZSk7XG4vLyAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgLy8gUmVwbGFjZSBJTUcgd2l0aCBTVkdcbi8vICAgICAgICAgICAgICRpbWcucmVwbGFjZVdpdGgoJHN2Zyk7XG4vLyAgICAgICAgIH0sICd4bWwnKTtcbi8vICAgICB9KTtcbi8vIH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9qcy90aGVtZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Nzcy9pbmRleC5zY3NzPzM3NDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvc2Nzcy9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Nzcy9tYWluLnNjc3M/ODIzMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9zY3NzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);