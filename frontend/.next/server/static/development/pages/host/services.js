module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/img/high/findteam-quote.jpg":
/*!********************************************!*\
  !*** ./public/img/high/findteam-quote.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/findteam-quote-fb64bae420ce56c0ce112355a2613254.jpg";

/***/ }),

/***/ "./public/img/high/host-covered.jpg":
/*!******************************************!*\
  !*** ./public/img/high/host-covered.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/host-covered-04f7c8cc6b5aeb57e461fb6fc942b0b1.jpg";

/***/ }),

/***/ "./public/img/high/peaceofmind.jpg":
/*!*****************************************!*\
  !*** ./public/img/high/peaceofmind.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/peaceofmind-c1270a3220e2647b8995b384521903f1.jpg";

/***/ }),

/***/ "./public/img/high/ready-connect.jpg":
/*!*******************************************!*\
  !*** ./public/img/high/ready-connect.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ready-connect-9ffbc3e9c8d5949ed7756a44ced6eb7e.jpg";

/***/ }),

/***/ "./src/components/functions/NewFooter.tsx":
/*!************************************************!*\
  !*** ./src/components/functions/NewFooter.tsx ***!
  \************************************************/
/*! exports provided: NewFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFooter", function() { return NewFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/functions/NewFooter.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const NewFooter = () => {
  return __jsx("div", {
    className: "block bg-white w-full border-t border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:px-20 px-5 xl:px-0 lg:max-w-6xl xl:max-w-5.5xl mx-auto py-6 sm:py-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "hidden md:block lg:flex lg:flex-wrap lg:items-start lg::w-full md:mx-6 lg:mx-0 md:justify-between md:pb-1 lg:pb-10 lg:border-b md:border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:w-1/4 md:border-b border-gray-300 lg:border-none pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-900 text-xs mb-2 uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "About"), __jsx("ul", {
    className: "leading-7 md:flex flex-wrap lg:block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Diversity & Belonging")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Accessibility")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Trust & Safety")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "Airbnb Citizen")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Newsroom")))), __jsx("div", {
    className: "lg:w-1/4 md:border-b border-gray-300 lg:border-none md:pt-6 md:pb-4 lg:pt-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-900 text-xs mb-2 uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Community"), __jsx("ul", {
    className: "leading-7 md:flex flex-wrap lg:block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Airbnb Magazine")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Airbnb for Work")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "Invite friends")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Careers")))), __jsx("div", {
    className: "lg:w-1/4 md:border-b border-gray-300 lg:border-none md:pt-6 md:pb-4 lg:pt-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-900 text-xs mb-2 uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, "Host"), __jsx("ul", {
    className: "leading-7 md:flex flex-wrap lg:block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, "Host your home")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, "Host an experience")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "Responsible hosting")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, "Refer hosts")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, "Open homes")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "Olympics")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, "Responsible hosting")))), __jsx("div", {
    className: "lg:w-1/4 md:border-b border-gray-300 lg:border-none md:pt-6 md:pb-4 lg:pt-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-900 text-xs mb-2 uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, "Support"), __jsx("ul", {
    className: "leading-7 md:flex flex-wrap lg:block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, "Help Centre")), __jsx("li", {
    className: "md:w-1/3 lg:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, "Neighbourhood Support"))))), __jsx("div", {
    className: "md:mt-8 w-full flex flex-col-reverse lg:flex-row md:justify-center lg:justify-between lg:mt-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, __jsx("div", {
    className: "md:flex md:flex-col md:items-center md:items-start lg:flex-row lg:justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, __jsx("div", {
    className: "hidden lg:block h-5 w-5 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "h-full w-full",
    style: {
      fill: '#222222'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, "AirBnb"), __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }, "2020 Airbnb, Inc. All rights reserved")), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "flex md:justify-center text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }, __jsx("p", {
    className: "hidden lg:block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, "\xA0\xB7\xA0"), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  }, "Privacy"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }, "\xA0\xB7\xA0"), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }, "Terms"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, "\xA0\xB7\xA0"), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, "Sitemap"))), __jsx("div", {
    className: "mb-3 lg:mb-0 flex md:justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "flex text-gray-850 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex mx-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-4 h-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  }, __jsx("svg", {
    className: "relative self-center h-full w-full",
    style: {
      fill: '#222222',
      right: 5,
      top: 2
    },
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: undefined
  }, __jsx("path", {
    d: "m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: undefined
  }, "English (CA)"))), __jsx("div", {
    className: "flex mx-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }, __jsx("div", {
    className: "mr-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }, "$"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, "CAD")))), __jsx("div", {
    className: "hidden md:flex ml-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-5 w-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-full w-full",
    viewBox: "0 0 512 512",
    style: {
      fill: '#484848'
    },
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: undefined
  }, __jsx("path", {
    d: "m297.277344 508.667969c-2.132813.347656-4.273438.667969-6.421875.960937 2.148437-.292968 4.289062-.613281 6.421875-.960937zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  }), __jsx("path", {
    d: "m302.398438 507.792969c-1.019532.1875-2.039063.359375-3.058594.535156 1.019531-.175781 2.039062-.347656 3.058594-.535156zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }), __jsx("path", {
    d: "m285.136719 510.339844c-2.496094.28125-5.007813.53125-7.527344.742187 2.519531-.210937 5.03125-.460937 7.527344-.742187zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  }), __jsx("path", {
    d: "m290.054688 509.738281c-1.199219.160157-2.40625.308594-3.609376.449219 1.203126-.140625 2.410157-.289062 3.609376-.449219zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: undefined
  }), __jsx("path", {
    d: "m309.367188 506.410156c-.898438.191406-1.800782.382813-2.703126.566406.902344-.183593 1.804688-.375 2.703126-.566406zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: undefined
  }), __jsx("path", {
    d: "m326.664062 502.113281c-.726562.207031-1.453124.402344-2.179687.605469.726563-.203125 1.453125-.398438 2.179687-.605469zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: undefined
  }), __jsx("path", {
    d: "m321.433594 503.542969c-.789063.207031-1.582032.417969-2.375.617187.792968-.199218 1.585937-.40625 2.375-.617187zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: undefined
  }), __jsx("path", {
    d: "m314.589844 505.253906c-.835938.195313-1.679688.378906-2.523438.566406.84375-.1875 1.6875-.371093 2.523438-.566406zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: undefined
  }), __jsx("path", {
    d: "m277.527344 511.089844c-1.347656.113281-2.695313.214844-4.046875.304687 1.351562-.089843 2.699219-.191406 4.046875-.304687zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: undefined
  }), __jsx("path", {
    d: "m512 256c0-141.363281-114.636719-256-256-256s-256 114.636719-256 256 114.636719 256 256 256c1.503906 0 3-.03125 4.5-.058594v-199.285156h-55v-64.097656h55v-47.167969c0-54.703125 33.394531-84.476563 82.191406-84.476563 23.367188 0 43.453125 1.742188 49.308594 2.519532v57.171875h-33.648438c-26.546874 0-31.6875 12.617187-31.6875 31.128906v40.824219h63.476563l-8.273437 64.097656h-55.203126v189.453125c107.003907-30.675781 185.335938-129.257813 185.335938-246.109375zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: undefined
  }), __jsx("path", {
    d: "m272.914062 511.429688c-2.664062.171874-5.339843.308593-8.023437.398437 2.683594-.089844 5.359375-.226563 8.023437-.398437zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: undefined
  }), __jsx("path", {
    d: "m264.753906 511.835938c-1.414062.046874-2.832031.082031-4.25.105468 1.417969-.023437 2.835938-.058594 4.25-.105468zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: undefined
  }))), __jsx("div", {
    className: "h-5 w-5 ml-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-full w-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      fill: '#484848',
      marginRight: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: undefined
  }, __jsx("path", {
    d: "M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016 c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992 c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056 c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152 c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792 c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44 C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568 C480.224,136.96,497.728,118.496,512,97.248z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  })))), __jsx("div", {
    className: "w-5 h-5 ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-full h-full",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      fill: '#484848'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: undefined
  }, __jsx("path", {
    d: "M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: undefined
  }, __jsx("circle", {
    cx: "393.6",
    cy: "118.4",
    r: "17.056",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: undefined
  }))))))))));
};

/***/ }),

/***/ "./src/components/hostservices/functions/FindTeamCard.jsx":
/*!****************************************************************!*\
  !*** ./src/components/hostservices/functions/FindTeamCard.jsx ***!
  \****************************************************************/
/*! exports provided: FindTeamCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindTeamCard", function() { return FindTeamCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostservices/functions/FindTeamCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // interface Props {
//   description: string;
// }

const FindTeamCard = ({
  description
}) => {
  return __jsx("div", {
    className: "md:w-90p mb-6 lg:mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "flex text-gray-750 items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-4 w-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("svg", {
    style: {
      fill: '#008489'
    },
    className: "h-full w-full",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("path", {
    d: "m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }))), __jsx("div", {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, description))));
};

/***/ }),

/***/ "./src/components/hostservices/functions/GetStartedCard.tsx":
/*!******************************************************************!*\
  !*** ./src/components/hostservices/functions/GetStartedCard.tsx ***!
  \******************************************************************/
/*! exports provided: GetStartedCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedCard", function() { return GetStartedCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostservices/functions/GetStartedCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const GetStartedCard = ({
  icon,
  title,
  description,
  last
}) => {
  const renderIcon = type => {
    switch (type) {
      case 'connected':
        return __jsx("img", {
          className: "w-full h-full",
          src: "https://a0.muscache.com/pictures/b611b345-a32a-48af-a3db-13ac0ad47d95.jpg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: undefined
        });

      case 'handshake':
        return __jsx("img", {
          className: "w-full h-full",
          src: "https://a0.muscache.com/pictures/7834e234-3a9f-46a6-8e22-f521312f715f.jpg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: undefined
        });

      case 'money':
        return __jsx("img", {
          className: "w-full h-full",
          src: "https://a0.muscache.com/pictures/0fca42d5-7287-449d-9c24-2f76864ee5d2.jpg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: undefined
        });
    }
  };

  return __jsx("div", {
    className: "md:w-full lg:w-1/3 mb-12 lg:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, last ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, icon === 'handshake' ? __jsx("div", {
    className: "h-12 w-24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, renderIcon(icon)) : __jsx("div", {
    className: "h-12 w-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, renderIcon(icon)), __jsx("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, title)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 md:leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, description))) : __jsx("div", {
    className: "md:w-85p lg:w-90p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, icon === 'handshake' ? __jsx("div", {
    className: "h-12 w-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, renderIcon(icon)) : __jsx("div", {
    className: "h-12 w-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, renderIcon(icon)), __jsx("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, title)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 md:leading-loose lg:leading-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, description))));
};

/***/ }),

/***/ "./src/components/hostservices/functions/PeaceOfMindCard.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/hostservices/functions/PeaceOfMindCard.tsx ***!
  \*******************************************************************/
/*! exports provided: PeaceOfMindCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeaceOfMindCard", function() { return PeaceOfMindCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostservices/functions/PeaceOfMindCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const PeaceOfMindCard = ({
  title,
  description,
  link,
  last
}) => {
  return __jsx("div", {
    className: "md:w-full lg:w-1/2 mb-12 lg:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, last ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-12 w-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-full w-full",
    viewBox: "0 0 32 32",
    style: {
      fill: '#484848'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("path", {
    d: "m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))), __jsx("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, title)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 md:leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, description)), link ? __jsx("div", {
    className: "mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-green-850",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Learn more about Airbnb's Host Guarantee")) : null) : __jsx("div", {
    className: "md:w-85p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-12 w-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-full w-full",
    viewBox: "0 0 32 32",
    style: {
      fill: '#484848'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("path", {
    d: "m16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15m0-31c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16m5.71 12.29c.39.39.39 1.02 0 1.41l-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }))), __jsx("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, title)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 md:leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, description)), link ? __jsx("div", {
    className: "mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-green-850",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "Learn more about Airbnb's Host Guarantee")) : null));
};

/***/ }),

/***/ "./src/components/hostservices/layout/FindTeam.jsx":
/*!*********************************************************!*\
  !*** ./src/components/hostservices/layout/FindTeam.jsx ***!
  \*********************************************************/
/*! exports provided: FindTeam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindTeam", function() { return FindTeam; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_FindTeamCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/FindTeamCard */ "./src/components/hostservices/functions/FindTeamCard.jsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostservices/layout/FindTeam.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Functions

 // Images

const covered = __webpack_require__(/*! ../../../../public/img/high/host-covered.jpg */ "./public/img/high/host-covered.jpg"); // Images


const quote = __webpack_require__(/*! ../../../../public/img/high/findteam-quote.jpg */ "./public/img/high/findteam-quote.jpg");

const FindTeam = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto pt-4 pb-4 md:pb-16 lg:pb-0 md:pt-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "my-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "mb-4 md:mb-10 flex md:justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      width: 70,
      height: 2
    },
    className: "bg-gray-650 rounded-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })), __jsx("div", {
    className: "flex md:justify-center mb-12 mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 text-4xl lg:text-6xl tracking-tight leading-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Find a local hosting team")), __jsx("div", {
    className: "lg:flex lg:mt-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("div", {
    className: "md:w-full lg:w-1/2 flex items-center",
    style: {
      fontFamily: 'airbnb-book'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:w-85p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("div", {
    className: "text-gray-750 leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("div", {
    className: "my-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Now you can provide high-quality hospitality and earn money with help from a hosting team.")), __jsx("div", {
    className: "my-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Hosting teams are separate businesses that provide professional hosting services to help you manage your listing. If you qualify, we\u2019ll match you with a hosting team in your area.")), __jsx("div", {
    className: "my-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "For a fee\u2014generally around 20% per booking\u2014hosting teams will manage everything from setup and booking to checkout and cleaning."))))), __jsx("div", {
    className: "md:w-full lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(_functions_FindTeamCard__WEBPACK_IMPORTED_MODULE_1__["FindTeamCard"], {
    description: "Guest check-in and checkout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx(_functions_FindTeamCard__WEBPACK_IMPORTED_MODULE_1__["FindTeamCard"], {
    description: "Housekeeping and maintenance between stays",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx(_functions_FindTeamCard__WEBPACK_IMPORTED_MODULE_1__["FindTeamCard"], {
    description: "Laundering and replacing linens",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx(_functions_FindTeamCard__WEBPACK_IMPORTED_MODULE_1__["FindTeamCard"], {
    description: "24/7 guest support",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx(_functions_FindTeamCard__WEBPACK_IMPORTED_MODULE_1__["FindTeamCard"], {
    description: "Listing creation with competitive pricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx(_functions_FindTeamCard__WEBPACK_IMPORTED_MODULE_1__["FindTeamCard"], {
    description: "Booking request management",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), __jsx(_functions_FindTeamCard__WEBPACK_IMPORTED_MODULE_1__["FindTeamCard"], {
    description: "Professional photography",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto lg:pt-32 pb-8 md:pb-16 flex flex-col md:flex-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full md:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("img", {
    className: "h-full w-full",
    src: quote,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full md:w-1/2 relative flex items-center md:justify-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("div", {
    className: "md:w-85p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("div", {
    id: "quote__findteam",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'circular-std-medium'
    },
    className: "text-6xl md:text-7xl lg:text-10xl text-yellow-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "\u201C")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx("div", {
    className: "mt-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("div", {
    className: "md:w-85p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("p", {
    id: "quote-description",
    style: {
      fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important'
    },
    className: "text-lg lg:text-3xl text-gray-750 leading-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "We probably wouldn't host on Airbnb if we didn't have a hosting team."))), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm md:text-base text-gray-650 my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "Sophie and Mason host in New York to earn extra income")), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("div", {
    className: "py-3 px-5 border-2 border-gray-850 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Learn more"))))))));
};

/***/ }),

/***/ "./src/components/hostservices/layout/GetStarted.jsx":
/*!***********************************************************!*\
  !*** ./src/components/hostservices/layout/GetStarted.jsx ***!
  \***********************************************************/
/*! exports provided: GetStarted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStarted", function() { return GetStarted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_GetStartedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/GetStartedCard */ "./src/components/hostservices/functions/GetStartedCard.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostservices/layout/GetStarted.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Functions


const GetStarted = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "w-full px-6 md:px-0 md:max-w-xl lg:max-w-5xl mx-auto pt-8 pb-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "my-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "mb-4 md:mb-0 flex md:justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      width: 70,
      height: 2
    },
    className: "bg-gray-650 rounded-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })), __jsx("div", {
    className: "flex md:justify-center mb-12 mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 text-4xl lg:text-6xl tracking-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "How to get started")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_functions_GetStartedCard__WEBPACK_IMPORTED_MODULE_1__["GetStartedCard"], {
    icon: "connected",
    title: "Get connected",
    description: "Tell us a little about your needs and we\u2019ll see if we can match you with a hosting team in your area. Then your local team will reach out to gather info about your space, determine the right plan for you, and go over pricing.",
    last: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(_functions_GetStartedCard__WEBPACK_IMPORTED_MODULE_1__["GetStartedCard"], {
    icon: "handshake",
    title: "Let a specialist do the work",
    description: "Your dedicated hosting team will usually take care of everything\u2014from creating your listing to communicating with guests and ensuring that your place is cleaned between rentals.",
    last: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx(_functions_GetStartedCard__WEBPACK_IMPORTED_MODULE_1__["GetStartedCard"], {
    icon: "money",
    title: "Start earning money",
    description: "With the hosting logistics taken care of, all that\u2019s left is to collect the earnings from your space. Talk to your hosting team about easy payout options.",
    last: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }))))));
};

/***/ }),

/***/ "./src/components/hostservices/layout/HostServicesBanner.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/hostservices/layout/HostServicesBanner.jsx ***!
  \*******************************************************************/
/*! exports provided: HostServicesBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostServicesBanner", function() { return HostServicesBanner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostservices/layout/HostServicesBanner.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const HostServicesBanner = () => {
  return __jsx("div", {
    className: "w-full max-w-7xl mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:mt-16 lg:mb-10 flex justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/2 flex flex-col justify-center items-start text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-90p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-6xl leading-16 tracking-tighter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Hosting handled for you")), __jsx("div", {
    className: "my-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-2xl leading-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "With hosting services, you get the benefits of sharing your space\u2014without the work"))), __jsx("div", {
    className: "mt-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("button", {
    className: "border-2 border-gray-750 rounded py-2 px-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Check availability")))), __jsx("div", {
    className: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("video", {
    type: "video/mp4",
    autoPlay: true,
    loop: true,
    className: "h-full w-full",
    src: "https://cdn.dribbble.com/users/3419830/videos/23722/cyclists.mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }))));
};

/***/ }),

/***/ "./src/components/hostservices/layout/HostServicesHeader.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/hostservices/layout/HostServicesHeader.tsx ***!
  \*******************************************************************/
/*! exports provided: HostServicesHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostServicesHeader", function() { return HostServicesHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostservices/layout/HostServicesHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const HostServicesHeader = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    style: {
      top: 30,
      left: 0
    },
    className: "lg:hidden flex items-center justify-start absolute z-50 top-0 left-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "ml-6 mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Airbnb"), __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "block",
    style: {
      height: 34,
      width: 34,
      fill: '#ffffff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "px-4 md:px-0 flex bg-white w-full border-b border-gray-300 items-center justify-end lg:justify-between fixed bottom-0 border-t lg:sticky lg:top-0 z-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: "hidden lg:flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    className: "ml-6 mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Airbnb"), __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "block",
    style: {
      height: 34,
      width: 34,
      fill: '#008489'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "flex text-sm text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("div", {
    className: "mx-4 border-green-850 border-b-2 py-8 text-green-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Hosting services")))), __jsx("div", {
    className: "w-full lg:w-auto flex items-center py-3 lg:py-0 justify-between md:justify-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex flex-col-reverse md:flex-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Monthly potential")), __jsx("div", {
    className: "h-3 w-3 mx-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("svg", {
    className: "w-full h-full",
    viewBox: "0 0 24 24",
    style: {
      fill: '#484848'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("path", {
    d: "m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  })))), __jsx("div", {
    className: "md:mx-1",
    id: "monthly-potential",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-sm md:text-xl lg:text-2xl text-gray-750 lg:text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "$1,162"))), __jsx("div", {
    className: "px-1 ml-2 md:mr-10 lg:mr-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "py-2 pl-4 px-4 rounded bg-red-600 text-white text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Get started")))));
};

/***/ }),

/***/ "./src/components/hostservices/layout/PeaceOfMind.tsx":
/*!************************************************************!*\
  !*** ./src/components/hostservices/layout/PeaceOfMind.tsx ***!
  \************************************************************/
/*! exports provided: PeaceOfMind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeaceOfMind", function() { return PeaceOfMind; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_PeaceOfMindCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/PeaceOfMindCard */ "./src/components/hostservices/functions/PeaceOfMindCard.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostservices/layout/PeaceOfMind.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Functions

 // Images

const peaceofmind = __webpack_require__(/*! ../../../../public/img/high/peaceofmind.jpg */ "./public/img/high/peaceofmind.jpg");

const PeaceOfMind = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "w-full px-6 md:px-0 md:max-w-xl lg:max-w-5xl mx-auto pt-8 pb-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "my-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: "mb-4 md:mb-0 flex md:justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      width: 70,
      height: 2
    },
    className: "bg-gray-650 rounded-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })), __jsx("div", {
    className: "flex md:justify-center mb-12 mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 text-4xl lg:text-6xl tracking-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Complete peace of mind")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_functions_PeaceOfMindCard__WEBPACK_IMPORTED_MODULE_1__["PeaceOfMindCard"], {
    title: "Stay in control",
    description: "Whether you\u2019re a few doors down or a continent away, using a hosting team can help you stay informed and list your space confidently. Your hosting team will usually be on call to provide you with information, updates, and assistance when you need it.",
    link: false,
    last: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx(_functions_PeaceOfMindCard__WEBPACK_IMPORTED_MODULE_1__["PeaceOfMindCard"], {
    title: "$1,000,000 property damage protection",
    description: "Airbnb\u2019s Host Guarantee provides free protection of up to $1,000,000 USD in property damage for every booking, every time. Plus, your hosting team can usually help you handle any claims that need to be filed.",
    link: true,
    last: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "w-full max-w-5xl mx-auto py-4 md:py-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:h-112",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("img", {
    className: "h-full w-full object-cover",
    src: peaceofmind,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }))));
};

/***/ }),

/***/ "./src/components/hostservices/layout/QuestionsAnswered.tsx":
/*!******************************************************************!*\
  !*** ./src/components/hostservices/layout/QuestionsAnswered.tsx ***!
  \******************************************************************/
/*! exports provided: QuestionsAnswered */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsAnswered", function() { return QuestionsAnswered; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostservices/layout/QuestionsAnswered.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const QuestionsAnswered = () => {
  return __jsx("div", {
    className: "w-full px-6 md:px-0 md:max-w-2xl lg:max-w-5xl mx-auto py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex md:justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      width: 70,
      height: 2
    },
    className: "bg-gray-650 rounded-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  })), __jsx("div", {
    className: "flex md:justify-center md:mb-12 mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 text-4xl lg:text-6xl tracking-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Your questions answered")), __jsx("div", {
    className: "lg:flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "md:w-full lg:w-1/2 text-green-850 md:text-lg flex lg:justify-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:w-95p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Who will my hosting team be?")), __jsx("div", {
    className: "my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Am I covered if something goes wrong?")), __jsx("div", {
    className: "md:mt-10 lg:my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Am I eligible for hosting services?")))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "md:w-full lg:w-1/2 text-green-850 md:text-lg flex lg:justify-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:w-95p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: "mt-10 lg:my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "What do I do with my personal belongings?")), __jsx("div", {
    className: "my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "I run a hosting team. Can I offer hosting services through Airbnb?"))))));
};

/***/ }),

/***/ "./src/components/hostservices/layout/ReadyConnect.tsx":
/*!*************************************************************!*\
  !*** ./src/components/hostservices/layout/ReadyConnect.tsx ***!
  \*************************************************************/
/*! exports provided: ReadyConnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyConnect", function() { return ReadyConnect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostservices/layout/ReadyConnect.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Images

const ready = __webpack_require__(/*! ../../../../public/img/high/ready-connect.jpg */ "./public/img/high/ready-connect.jpg");

const ReadyConnect = () => {
  return __jsx("div", {
    className: "w-full md:max-w-4xl lg:max-w-7xl mx-auto mt-8 mb-12 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full h-96 md:h-112",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("img", {
    className: "h-full w-full object-cover",
    src: ready,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx("div", {
    id: "ready",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-40p mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-white text-4xl md:text-6xl tracking-tighter leading-18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Ready to connect with a hosting team?")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("button", {
    className: "mt-8 bg-white py-3 px-5 rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Check availability")))));
};

/***/ }),

/***/ "./src/pages/host/services.jsx":
/*!*************************************!*\
  !*** ./src/pages/host/services.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hostservices_layout_HostServicesHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/hostservices/layout/HostServicesHeader */ "./src/components/hostservices/layout/HostServicesHeader.tsx");
/* harmony import */ var _components_hostservices_layout_HostServicesBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/hostservices/layout/HostServicesBanner */ "./src/components/hostservices/layout/HostServicesBanner.jsx");
/* harmony import */ var _components_hostservices_layout_FindTeam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hostservices/layout/FindTeam */ "./src/components/hostservices/layout/FindTeam.jsx");
/* harmony import */ var _components_hostservices_layout_GetStarted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hostservices/layout/GetStarted */ "./src/components/hostservices/layout/GetStarted.jsx");
/* harmony import */ var _components_hostservices_layout_PeaceOfMind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hostservices/layout/PeaceOfMind */ "./src/components/hostservices/layout/PeaceOfMind.tsx");
/* harmony import */ var _components_hostservices_layout_QuestionsAnswered__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hostservices/layout/QuestionsAnswered */ "./src/components/hostservices/layout/QuestionsAnswered.tsx");
/* harmony import */ var _components_hostservices_layout_ReadyConnect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/hostservices/layout/ReadyConnect */ "./src/components/hostservices/layout/ReadyConnect.tsx");
/* harmony import */ var _components_functions_NewFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/functions/NewFooter */ "./src/components/functions/NewFooter.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/host/services.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];










const services = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_hostservices_layout_HostServicesHeader__WEBPACK_IMPORTED_MODULE_1__["HostServicesHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx(_components_hostservices_layout_HostServicesBanner__WEBPACK_IMPORTED_MODULE_2__["HostServicesBanner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx(_components_hostservices_layout_FindTeam__WEBPACK_IMPORTED_MODULE_3__["FindTeam"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx(_components_hostservices_layout_GetStarted__WEBPACK_IMPORTED_MODULE_4__["GetStarted"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(_components_hostservices_layout_PeaceOfMind__WEBPACK_IMPORTED_MODULE_5__["PeaceOfMind"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx(_components_hostservices_layout_QuestionsAnswered__WEBPACK_IMPORTED_MODULE_6__["QuestionsAnswered"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx(_components_hostservices_layout_ReadyConnect__WEBPACK_IMPORTED_MODULE_7__["ReadyConnect"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(_components_functions_NewFooter__WEBPACK_IMPORTED_MODULE_8__["NewFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (services);

/***/ }),

/***/ 4:
/*!*******************************************!*\
  !*** multi ./src/pages/host/services.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ken/Desktop/nextbnb/frontend/src/pages/host/services.jsx */"./src/pages/host/services.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=services.js.map