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

/***/ "./public/img/high/airbnb-background.jpg":
/*!***********************************************!*\
  !*** ./public/img/high/airbnb-background.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/airbnb-background-b8b3c94eb622e8a6083c338facb6c4fd.jpg";

/***/ }),

/***/ "./public/img/high/shield.png":
/*!************************************!*\
  !*** ./public/img/high/shield.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shield-a0dfe55987a114e9479b7b633f4dd3f1.png";

/***/ }),

/***/ "./public/img/high/staydetail2.jpg":
/*!*****************************************!*\
  !*** ./public/img/high/staydetail2.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/staydetail2-d675f41ab81426830a59e747f25def75.jpg";

/***/ }),

/***/ "./public/img/high/staydetail3.jpg":
/*!*****************************************!*\
  !*** ./public/img/high/staydetail3.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/staydetail3-3f01324ba796db32863bdb65d011b647.jpg";

/***/ }),

/***/ "./public/img/high/staydetail4.jpg":
/*!*****************************************!*\
  !*** ./public/img/high/staydetail4.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/staydetail4-d125675c1fb3c36316811b93bce691dc.jpg";

/***/ }),

/***/ "./public/img/high/staydetail5.jpg":
/*!*****************************************!*\
  !*** ./public/img/high/staydetail5.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/staydetail5-7012bd4430f2ebc4689d0d2dc4f4fe97.jpg";

/***/ }),

/***/ "./public/img/high/todonear1.jpg":
/*!***************************************!*\
  !*** ./public/img/high/todonear1.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/todonear1-80fc8d15b577926c599e89c0fb13d576.jpg";

/***/ }),

/***/ "./src/components/containers/Characteristics.tsx":
/*!*******************************************************!*\
  !*** ./src/components/containers/Characteristics.tsx ***!
  \*******************************************************/
/*! exports provided: Characteristics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Characteristics", function() { return Characteristics; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_CharacteristicCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/CharacteristicCard */ "./src/components/presentational/CharacteristicCard.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Characteristics.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Components


const Characteristics = ({
  host_is_superhost,
  host_name
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_presentational_CharacteristicCard__WEBPACK_IMPORTED_MODULE_1__["CharacteristicCard"], {
    type: "home",
    title: "Entire Home",
    description: "You will have the house to yourself.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(_presentational_CharacteristicCard__WEBPACK_IMPORTED_MODULE_1__["CharacteristicCard"], {
    type: "clean",
    title: "Sparkling clean",
    guestnumber: 13,
    description: "recent guests said this place was sparkling clean.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), host_is_superhost === 't' ? __jsx(_presentational_CharacteristicCard__WEBPACK_IMPORTED_MODULE_1__["CharacteristicCard"], {
    type: "superhost",
    hostName: host_name,
    title: "is a Superhost",
    description: "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }) : null, __jsx(_presentational_CharacteristicCard__WEBPACK_IMPORTED_MODULE_1__["CharacteristicCard"], {
    type: "location",
    title: "Great location",
    percentage: 90,
    description: "of recent guests gave the location a 5-star rating.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./src/components/containers/HostedBy.tsx":
/*!************************************************!*\
  !*** ./src/components/containers/HostedBy.tsx ***!
  \************************************************/
/*! exports provided: HostedBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostedBy", function() { return HostedBy; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/HostedBy.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // // Loading
// import LazyImage from 'react-lazy-progressive-image';
// Image

const shield1 = __webpack_require__(/*! ../../../public/img/high/shield.png */ "./public/img/high/shield.png");

const renderContent = content => {
  const wordArray = content.split(' ');
  const newArray = [];

  for (let i = 0; i < 20; i++) {
    newArray.push(wordArray[i]);
  }

  return newArray;
};

const HostedBy = ({
  host_name,
  host_is_superhost,
  hostDescription,
  host_since,
  duringStay,
  reviews_per_month,
  host_picture_url,
  host_response_time,
  host_response_rate
}) => {
  const {
    0: descriptionDisplay,
    1: setDescriptionDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: stayDisplay,
    1: setStayDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const defaultDescription = renderContent(hostDescription);
  const defaultDuringStay = renderContent(duringStay);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "py-10 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-start flex-wrap mb-8 lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("img", {
    className: "mr-6 h-16 w-16 rounded-full",
    src: host_picture_url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 text-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Hosted By ", host_name), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Joined in ", host_since)))), __jsx("div", {
    className: "flex justify-start items-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:w-25/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-start pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("div", {
    className: "pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-3 w-3",
    viewBox: "0 0 37.286 37.287",
    style: {
      fill: '#E61E4D',
      marginBottom: 0.5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  })))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, reviews_per_month, " Reviews")), __jsx("div", {
    className: "ml-2 pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("div", {
    className: "pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 512.02797 512",
    className: "h-3 w-3",
    style: {
      fill: '#E61E4D'
    },
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("path", {
    d: "m441.644531 247.59375-11.457031-32.554688-123.582031 123.585938c-12.074219 12.097656-28.160157 18.75-45.25 18.75-17.085938 0-33.171875-6.652344-45.246094-18.75l-90.667969-90.667969c-12.097656-12.074219-18.753906-28.160156-18.753906-45.246093 0-17.089844 6.65625-33.175782 18.753906-45.25 12.074219-12.09375 28.160156-18.75 45.246094-18.75 17.089844 0 33.175781 6.65625 45.25 18.75l45.417969 45.398437 121.6875-121.683594-8.195313-23.253906-3.773437-22.570313c-2.367188-14.464843-11.90625-26.453124-25.453125-32.066406-13.609375-5.652344-28.796875-3.902344-40.722656 4.652344l-59.285157 42.921875-59.949219-43.03125c-12.03125-8.488281-27.261718-10.175781-40.789062-4.5-13.4375 5.632813-22.890625 17.601563-25.257812 31.980469l-11.605469 72.253906-72.683594 12.074219c-14.441406 2.371093-26.429687 11.90625-32.0625 25.453125-5.632813 13.589844-3.882813 28.820312 4.671875 40.746094l42.902344 59.285156-43.03125 59.945312c-8.46875 12.03125-10.175782 27.285156-4.5 40.789063 5.652344 13.441406 17.597656 22.890625 31.976562 25.261719l72.257813 11.625 12.074219 72.660156c2.347656 14.421875 11.820312 26.390625 25.257812 32.023437 13.546875 5.671875 28.800781 3.988281 40.941406-4.609375l59.285156-42.921875 59.796876 42.921875c7.316406 5.226563 15.828124 7.914063 24.46875 7.914063 5.480468 0 10.984374-1.066407 16.253906-3.261719 13.570312-5.632812 23.085937-17.621094 25.453125-32.023438l11.625-72.253906 72.660156-12.074218c14.421875-2.371094 26.371094-11.820313 32.023437-25.261719 5.675782-13.503907 3.988282-28.757813-4.609374-40.9375zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }), __jsx("path", {
    d: "m261.355469 314.710938c-5.460938 0-10.921875-2.089844-15.082031-6.25l-90.667969-90.667969c-8.339844-8.339844-8.339844-21.824219 0-30.164063 8.34375-8.34375 21.824219-8.34375 30.167969 0l75.582031 75.582032 214.25-214.25c8.34375-8.339844 21.824219-8.339844 30.167969 0 8.339843 8.339843 8.339843 21.824218 0 30.164062l-229.335938 229.335938c-4.160156 4.160156-9.621094 6.25-15.082031 6.25zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "Verified"))), __jsx("div", {
    className: "ml-2 pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, host_is_superhost === 't' ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-3 w-3",
    style: {
      fill: '#E61E4D'
    },
    viewBox: "0 0 511.999 511.999",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx("g", {
    "clip-rule": "evenodd",
    "fill-rule": "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx("path", {
    d: "m345.999 174.051v-52.052h-180v52.052c26.942-14.077 57.555-22.053 90-22.053s63.058 7.975 90 22.053z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }), __jsx("path", {
    d: "m330.999 91.994v-76.994c0-8.284-6.716-15-15-15h-120c-8.284 0-15 6.716-15 15v76.994c-.033 0-.064.005-.097.005h150.193c-.032-.001-.064-.005-.096-.005z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }), __jsx("path", {
    d: "m271.572 324.382-15.572-23.478-15.572 23.478c-1.993 3.005-5.003 5.192-8.478 6.16l-27.142 7.555 17.517 22.066c2.242 2.825 3.392 6.363 3.238 9.966l-1.201 28.147 26.398-9.841c1.689-.63 3.465-.945 5.239-.945s3.55.315 5.239.945l26.398 9.841-1.201-28.147c-.153-3.603.996-7.141 3.238-9.966l17.517-22.065-27.142-7.555c-3.474-.969-6.483-3.156-8.476-6.161z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }), __jsx("path", {
    d: "m255.999 181.998c-90.879 0-165 74.121-165 165s74.121 165 165 165 165-74.121 165-165-74.121-165-165-165zm88.748 157.039-28.101 35.398 1.928 45.155c.215 5.023-2.103 9.82-6.17 12.775-2.6 1.889-5.693 2.865-8.817 2.865-1.765 0-3.538-.311-5.238-.945l-42.35-15.787-42.35 15.787c-4.707 1.755-9.987 1.036-14.056-1.92-4.067-2.955-6.385-7.752-6.17-12.775l1.928-45.155-28.101-35.398c-3.126-3.938-4.071-9.18-2.518-13.961s5.399-8.467 10.243-9.815l43.541-12.121 24.981-37.664c2.778-4.19 7.473-6.709 12.5-6.709s9.722 2.519 12.5 6.709l24.981 37.664 43.541 12.121c4.844 1.349 8.689 5.034 10.243 9.815s.611 10.023-2.515 13.961z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  })))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, "Superhost")) : null))), __jsx("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, descriptionDisplay ? __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, hostDescription) : __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, `${defaultDescription.join(' ')}...`, __jsx("button", {
    onClick: () => setDescriptionDisplay(true),
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-green-850 border-b text-green-850 border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, "Read More"))), duringStay ? __jsx("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, "During your stay"), stayDisplay ? __jsx("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, duringStay)) : __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, `${defaultDuringStay.join(' ')}...`, __jsx("button", {
    onClick: () => setStayDisplay(true),
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-green-850 border-b text-green-850 border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }, "Read More"))) : null, host_is_superhost == 't' ? __jsx("div", {
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-850 py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, host_name, " is a Superhost"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.")) : null)), __jsx("div", {
    className: "lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: undefined
  }, __jsx("div", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, __jsx("p", {
    className: "text-gray-750 pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  }, "Languages:\xA0", __jsx("span", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }, "English, Espanol")), __jsx("p", {
    className: "text-gray-750 pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, "Response rate:\xA0", __jsx("span", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }, host_response_rate)), __jsx("p", {
    className: "text-gray-750 pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  }, "Response time:\xA0", __jsx("span", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  }, host_response_time)))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  }, __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "w-full lg:w-auto mb-4 border border-black rounded-lg py-3 px-5 text-gray-850 text-sm mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: undefined
  }, "Contact Host"), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, __jsx("img", {
    src: shield1,
    className: "h-full w-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: undefined
  })), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full  lg:w-15/31 ml-4 text-xs text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }, "To protect your payment, never transfer money or communicate outside of the Airbnb website or app.")))))));
};

/***/ }),

/***/ "./src/components/containers/KeepInMind.tsx":
/*!**************************************************!*\
  !*** ./src/components/containers/KeepInMind.tsx ***!
  \**************************************************/
/*! exports provided: KeepInMind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeepInMind", function() { return KeepInMind; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/KeepInMind.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const KeepInMind = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "py-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-2xl text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Things to know")), __jsx("div", {
    className: "flex justify-start items-start flex-wrap w-full border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("h3", {
    className: "text-gray-750 pb-2 ",
    style: {
      fontFamily: 'airbnb-bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "House Rules"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex item-center justify-start w-1/2 py-2 bg-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 384 384",
    style: {
      fill: '#484848'
    },
    className: "h-5 w-5",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("path", {
    d: "m343.59375 101.039062c-7.953125 3.847657-11.28125 13.417969-7.433594 21.367188 10.511719 21.714844 15.839844 45.121094 15.839844 69.59375 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c36.558594 0 70.902344 11.9375 99.328125 34.519531 6.894531 5.503907 16.976563 4.351563 22.480469-2.566406 5.503906-6.914063 4.351562-16.984375-2.570313-22.480469-33.652343-26.746094-76-41.472656-119.238281-41.472656-105.863281 0-192 86.136719-192 192s86.136719 192 192 192 192-86.136719 192-192c0-29.335938-6.40625-57.449219-19.039062-83.527344-3.839844-7.96875-13.441407-11.289062-21.367188-7.433594zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx("path", {
    d: "m192 64c-8.832031 0-16 7.167969-16 16v112c0 8.832031 7.167969 16 16 16h80c8.832031 0 16-7.167969 16-16s-7.167969-16-16-16h-64v-96c0-8.832031-7.167969-16-16-16zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Check-in: 3:00 p.m.-10:00 p.m.")), __jsx("div", {
    className: "flex item-center justify-start w-1/2 py-2 bg-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 384 384",
    style: {
      fill: '#484848'
    },
    className: "h-5 w-5",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("path", {
    d: "m343.59375 101.039062c-7.953125 3.847657-11.28125 13.417969-7.433594 21.367188 10.511719 21.714844 15.839844 45.121094 15.839844 69.59375 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c36.558594 0 70.902344 11.9375 99.328125 34.519531 6.894531 5.503907 16.976563 4.351563 22.480469-2.566406 5.503906-6.914063 4.351562-16.984375-2.570313-22.480469-33.652343-26.746094-76-41.472656-119.238281-41.472656-105.863281 0-192 86.136719-192 192s86.136719 192 192 192 192-86.136719 192-192c0-29.335938-6.40625-57.449219-19.039062-83.527344-3.839844-7.96875-13.441407-11.289062-21.367188-7.433594zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx("path", {
    d: "m192 64c-8.832031 0-16 7.167969-16 16v112c0 8.832031 7.167969 16 16 16h80c8.832031 0 16-7.167969 16-16s-7.167969-16-16-16h-64v-96c0-8.832031-7.167969-16-16-16zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Checkout: 11:00 a.m.")), __jsx("div", {
    className: "flex item-center justify-start w-1/2 py-2 bg-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("svg", {
    style: {
      fill: '#484848',
      marginLeft: 2
    },
    className: "h-5 w-5",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("path", {
    d: "m331 242c-29.021 0-55.931 9.206-77.967 24.849-7.349-33.545-27.97-63.113-57.033-80.693v-171.156c0-8.284-6.716-15-15-15h-60c-8.284 0-15 6.716-15 15v171.156c-36.731 22.219-60 63.58-60 107.926v202.918c0 8.284 6.716 15 15 15h180c8.284 0 15-6.716 15-15v-7.806c21.466 14.397 47.268 22.806 75 22.806 74.439 0 135-60.561 135-135s-60.561-135-135-135zm-255 89.99h127.722c-4.994 14.092-7.722 29.238-7.722 45.01s2.728 30.918 7.722 45h-127.722zm60-241.99h30v30h-30zm30-60v30h-30v-30zm-38.292 178.417c5.082-2.542 8.292-7.735 8.292-13.417v-45h30v45c0 5.682 3.21 10.875 8.292 13.417 30.412 15.206 50.996 48.747 51.676 83.875-2.526 3.126-4.918 6.363-7.162 9.708h-142.806v-7.918c0-35.775 20.78-70.202 51.708-85.665zm-51.708 273.583v-30.01h142.806c2.253 3.37 4.656 6.62 7.194 9.758v20.252zm255 0c-57.897 0-105-47.103-105-105s47.103-105 105-105 105 47.103 105 105-47.103 105-105 105z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), __jsx("path", {
    d: "m384.033 323.967c-5.857-5.858-15.355-5.858-21.213 0l-31.82 31.82-31.82-31.82c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l31.82 31.82-31.82 31.82c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.859 21.213 0l31.82-31.82 31.82 31.82c5.857 5.858 15.355 5.859 21.213 0 5.858-5.858 5.858-15.355 0-21.213l-31.82-31.82 31.82-31.82c5.858-5.858 5.858-15.355 0-21.213z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "No parties or events")), __jsx("div", {
    className: "flex item-center justify-start w-1/2 py-2 bg-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      fill: '#484848'
    },
    className: "h-5 w-5",
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("path", {
    d: "M180.365,289.615c7.521-7.531,11.646-18.938,11.635-32.094c0-4.677-0.531-9.531-1.583-14.427 C184.26,214.438,162.198,192,140.177,192c-10.125,0-19.083,4.615-25.229,12.99c-5.427,7.385-8.292,17.125-8.281,28.156 c0,4.667,0.531,9.51,1.583,14.417v0.01c6.156,28.656,28.219,51.094,50.24,51.094 C166.885,298.667,174.448,295.531,180.365,289.615z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), __jsx("path", {
    d: "M371.823,192c-22.021,0-44.083,22.438-50.24,51.094c-1.052,4.896-1.583,9.75-1.583,14.417 c-0.01,13.167,4.115,24.573,11.635,32.104c5.917,5.917,13.479,9.052,21.875,9.052c22.021,0,44.083-22.438,50.24-51.094v-0.01 c1.052-4.906,1.583-9.75,1.583-14.406c0.01-11.042-2.854-20.781-8.281-28.167C390.906,196.615,381.948,192,371.823,192z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }), __jsx("path", {
    d: "M350.76,161.99v-0.01c0.729-3.854,1.125-7.594,1.219-11.188c0.354-14.063-3.823-26.313-11.781-34.479 c-6.156-6.313-14.021-9.646-22.76-9.646c-22.302,0-44.063,22.552-49.531,51.354c-0.729,3.854-1.125,7.594-1.219,11.188 c-0.354,14.063,3.823,26.313,11.781,34.479c6.156,6.313,14.021,9.646,22.76,9.646C323.531,213.333,345.292,190.781,350.76,161.99 z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }), __jsx("path", {
    d: "M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M256,469.333 c-117.635,0-213.333-95.698-213.333-213.333c0-51.151,18.125-98.126,48.249-134.918l128.119,128.118 c-9.776,9.96-14.715,22.969-18.19,32.57c-1.531,4.219-3.427,9.479-4.74,11.042c-4.365,5.26-9.729,10.135-15.417,15.292 c-14.531,13.177-31,28.115-31.354,52.479c-0.177,12.896,3.802,23.854,11.521,31.688c8.427,8.542,20.906,13.063,36.073,13.063 c17.073,0,27.823-5.677,36.458-10.24c7.396-3.906,13.229-6.99,22.604-6.99c9.385,0,15.229,3.083,22.625,6.99 c8.635,4.563,19.396,10.24,36.458,10.24c15.167,0,27.646-4.521,36.073-13.063c1.835-1.862,3.426-3.927,4.832-6.126l34.94,34.94 C354.126,451.208,307.151,469.333,256,469.333z M421.085,390.918L310.693,280.526c-5.811-16.014-15.572-40.298-44.879-44.879 l-32.142-32.142c7.854-8.167,11.992-20.328,11.641-34.276c-0.094-3.615-0.49-7.354-1.219-11.219 c-5.469-28.792-27.229-51.344-49.531-51.344c-8.74,0-16.604,3.333-22.76,9.646c-4.203,4.313-7.273,9.815-9.255,16.068 l-41.465-41.465C157.874,60.792,204.849,42.667,256,42.667c117.635,0,213.333,95.698,213.333,213.333 C469.333,307.151,451.208,354.126,421.085,390.918z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  })))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "No pets allowed"))), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx("p", {
    className: "py-4",
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, "Show all"), __jsx("div", {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx("svg", {
    style: {
      fill: '#222222'
    },
    viewBox: "0 0 18 18",
    className: "h-3 w-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("path", {
    d: "m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }))))))), __jsx("div", {
    className: "w-full mt-6 lg:mt-0 lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, __jsx("h3", {
    className: "text-gray-750 pb-2",
    style: {
      fontFamily: 'airbnb-bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, "Cancellation policy"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, "Free cancellation for 48 hours"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, "After that, cancel up to 7 days before check-in and get a 50% refund, minus the service fee."), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx("p", {
    className: "py-4",
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, "Show all"), __jsx("div", {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx("svg", {
    style: {
      fill: '#222222'
    },
    viewBox: "0 0 18 18",
    className: "h-3 w-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx("path", {
    d: "m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  })))))));
};

/***/ }),

/***/ "./src/components/containers/MoreHomes.tsx":
/*!*************************************************!*\
  !*** ./src/components/containers/MoreHomes.tsx ***!
  \*************************************************/
/*! exports provided: MoreHomes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreHomes", function() { return MoreHomes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_HomeCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/HomeCard */ "./src/components/presentational/HomeCard.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/MoreHomes.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Component


const MoreHomes = () => {
  return __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl w-featured w-full md:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:w-1/3 pb-5 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_presentational_HomeCard__WEBPACK_IMPORTED_MODULE_1__["HomeCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full lg:w-1/3 pb-5 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_presentational_HomeCard__WEBPACK_IMPORTED_MODULE_1__["HomeCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full lg:w-1/3 pb-5 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(_presentational_HomeCard__WEBPACK_IMPORTED_MODULE_1__["HomeCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }))))));
};

/***/ }),

/***/ "./src/components/containers/MoreLocations.tsx":
/*!*****************************************************!*\
  !*** ./src/components/containers/MoreLocations.tsx ***!
  \*****************************************************/
/*! exports provided: MoreLocations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreLocations", function() { return MoreLocations; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/MoreLocations.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const MoreLocations = () => {
  return __jsx("div", {
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "mb-4 flex items-center justify-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "More place to stay in Penafiel:"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-650 lg:ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Apartments\xA0\xB7\xA0Bed and breakfasts")), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "w-full flex items-start justify-between flex-wrap text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/2 lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("ul", {
    className: "flex-col flex leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Playa del Carmen")), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Merida")), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Santa Monica")), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Oswestry")), __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Phillip")))), __jsx("div", {
    className: "w-1/2 lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("ul", {
    className: "flex-col flex leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Cancun")), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Nanpean")), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Bridgewater")), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Hangzhou")), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Eagle Bay")))), __jsx("div", {
    className: "w-1/2 lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("ul", {
    className: "flex-col flex leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "Cancun")), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "Nanpean")), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Bridgewater")), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "Hangzhou")), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, "Eagle Bay")))), __jsx("div", {
    className: "w-1/2 lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx("ul", {
    className: "flex-col flex leading-loose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, "Tulum")), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "Mellieha")), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "Dresden")), __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("li", {
    className: "inline-block hover:border-gray-600 border-b border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "New South Wales"))))));
};

/***/ }),

/***/ "./src/components/containers/Reviews.tsx":
/*!***********************************************!*\
  !*** ./src/components/containers/Reviews.tsx ***!
  \***********************************************/
/*! exports provided: Reviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reviews", function() { return Reviews; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_ReviewCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/ReviewCard */ "./src/components/presentational/ReviewCard.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/Reviews.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Components


const Reviews = ({
  reviews_per_month,
  number_of_reviews
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "my-4 lg:border-b lg:border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    className: "py-4 flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("svg", {
    style: {
      fill: '#E61E4D',
      marginBottom: 1
    },
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 37.286 37.287",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })))), __jsx("p", {
    id: "line",
    className: "text-2xl text-gray-850 ml-3",
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, reviews_per_month)), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "ml-1 text-2xl text-gray-850 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "(", number_of_reviews, " reviews)"))), __jsx("div", {
    className: "mt-3 flex flex-wrap items-start justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "py-1 flex items-center justify-between w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Location"), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 pr-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "5.0"))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "py-1 flex items-center justify-between w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Communication"), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 pr-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "4.9"))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "py-1 flex items-center justify-between w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "Cleanliness"), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 pr-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "4.9"))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "py-1 flex items-center justify-between w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "Check-in"), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 pr-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, "4.9"))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "py-1 flex items-center justify-between w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Accuracy"), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 pr-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "4.8"))), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "py-1 flex items-center justify-between w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, "Value"), __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 pr-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "4.8")))), __jsx("div", {
    className: "flex items-start justify-start flex-wrap w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:w-1/2 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx(_presentational_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["ReviewCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full lg:w-1/2 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx(_presentational_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["ReviewCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full lg:w-1/2 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx(_presentational_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["ReviewCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full lg:w-1/2 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, __jsx(_presentational_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["ReviewCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full lg:w-1/2 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx(_presentational_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["ReviewCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full lg:w-1/2 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx(_presentational_ReviewCard__WEBPACK_IMPORTED_MODULE_1__["ReviewCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }))), __jsx("div", {
    className: "py-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "py-3 px-5 rounded-xl border border-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, "Show all 387 reviews"))));
};

/***/ }),

/***/ "./src/components/containers/SleepingArrangements.tsx":
/*!************************************************************!*\
  !*** ./src/components/containers/SleepingArrangements.tsx ***!
  \************************************************************/
/*! exports provided: SleepingArrangements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleepingArrangements", function() { return SleepingArrangements; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_SleepingArrangementsCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/SleepingArrangementsCard */ "./src/components/presentational/SleepingArrangementsCard.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/SleepingArrangements.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Components


const SleepingArrangements = () => {
  return __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl w-featured w-full md:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:w-1/3 pb-5 mr-2 border border-gray-300 rounded-xl flex justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_presentational_SleepingArrangementsCard__WEBPACK_IMPORTED_MODULE_1__["SleepingArrangementsCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full lg:w-1/3 pb-5 mr-2 border border-gray-300 rounded-xl flex justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_presentational_SleepingArrangementsCard__WEBPACK_IMPORTED_MODULE_1__["SleepingArrangementsCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full lg:w-1/3 pb-5 mr-2 border border-gray-300 rounded-xl flex justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(_presentational_SleepingArrangementsCard__WEBPACK_IMPORTED_MODULE_1__["SleepingArrangementsCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }))))));
};

/***/ }),

/***/ "./src/components/containers/ToDoNear.tsx":
/*!************************************************!*\
  !*** ./src/components/containers/ToDoNear.tsx ***!
  \************************************************/
/*! exports provided: ToDoNear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoNear", function() { return ToDoNear; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_HeartExperienceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/HeartExperienceCard */ "./src/components/presentational/HeartExperienceCard.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/containers/ToDoNear.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Components


const ToDoNear = () => {
  return __jsx("div", {
    className: "overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full h-full overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-full scroller",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "scrollable sm:inset-x-0 flex items-start justify-start py-2 rounded-xl w-featured w-full md:w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full lg:w-1/3 pb-5 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_presentational_HeartExperienceCard__WEBPACK_IMPORTED_MODULE_1__["HeartExperienceCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full lg:w-1/3 pb-5 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_presentational_HeartExperienceCard__WEBPACK_IMPORTED_MODULE_1__["HeartExperienceCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full lg:w-1/3 pb-5 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(_presentational_HeartExperienceCard__WEBPACK_IMPORTED_MODULE_1__["HeartExperienceCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full lg:w-1/3 pb-5 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_presentational_HeartExperienceCard__WEBPACK_IMPORTED_MODULE_1__["HeartExperienceCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full lg:w-1/3 pb-5 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_presentational_HeartExperienceCard__WEBPACK_IMPORTED_MODULE_1__["HeartExperienceCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))))));
};

/***/ }),

/***/ "./src/components/layout/ExploreHeader.tsx":
/*!*************************************************!*\
  !*** ./src/components/layout/ExploreHeader.tsx ***!
  \*************************************************/
/*! exports provided: ExploreHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreHeader", function() { return ExploreHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/ExploreHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const ExploreHeader = ({
  type
}) => {
  return __jsx("div", {
    className: "flex items-center justify-between relative border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-start w-full md:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "ml-6 mr-6 md:mr-8 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
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
      fill: '#FF6368'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })))), __jsx("div", {
    className: "w-full md:max-w-100 flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    id: "hoverbox",
    className: "flex w-full md:w-120 items-center justify-start mr-7 py-3 px-4 shadow-md rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 16 16",
    style: {
      height: 18,
      width: 18
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("path", {
    d: "m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })), __jsx("p", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "text-gray-750 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Anywhere ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, " \xB7 "), " ", type)))), __jsx("nav", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "hidden xl:block xl:flex items-center justify-around flex-wrap text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("div", {
    className: "border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "flex items-center justify-start text-sm mx-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("svg", {
    className: "relative self-center h-3 w-3",
    style: {
      fill: '#484848',
      right: 5
    },
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("path", {
    d: "m256 0c-141.160156 0-256 114.839844-256 256s114.839844 256 256 256 256-114.839844 256-256-114.839844-256-256-256zm-15 125.65625c-22.820312-.980469-45.410156-4.1875-66.980469-9.402344 3.445313-8.164062 7.183594-16.003906 11.214844-23.433594 16.539063-30.476562 36.84375-51.863281 55.765625-59.609374zm0 30.023438v85.320312h-93.691406c1.320312-33.300781 6.996094-66.359375 16.382812-96.429688 24.875 6.265626 50.988282 10.058594 77.308594 11.109376zm0 115.320312v85.320312c-26.320312 1.050782-52.433594 4.84375-77.308594 11.109376-9.386718-30.070313-15.0625-63.128907-16.382812-96.429688zm0 115.34375v92.445312c-18.921875-7.746093-39.226562-29.132812-55.765625-59.609374-4.03125-7.429688-7.769531-15.269532-11.214844-23.433594 21.570313-5.214844 44.15625-8.421875 66.980469-9.402344zm30 0c22.820312.980469 45.410156 4.1875 66.980469 9.402344-3.445313 8.164062-7.183594 16.003906-11.214844 23.433594-16.539063 30.476562-36.84375 51.863281-55.765625 59.609374zm0-30.023438v-85.320312h93.691406c-1.320312 33.300781-6.996094 66.359375-16.382812 96.429688-24.875-6.265626-50.988282-10.058594-77.308594-11.109376zm0-115.320312v-85.320312c26.320312-1.050782 52.433594-4.84375 77.308594-11.109376 9.386718 30.070313 15.0625 63.128907 16.382812 96.429688zm0-115.34375v-92.445312c18.921875 7.746093 39.226562 29.132812 55.765625 59.609374 4.03125 7.429688 7.769531 15.269532 11.214844 23.433594-21.570313 5.214844-44.160157 8.421875-66.980469 9.402344zm82.132812-47.144531c-7.511718-13.84375-15.671874-26.046875-24.273437-36.457031 29.992187 10.242187 57.160156 26.628906 80.007813 47.644531-13.03125 6.980469-27.074219 13.042969-41.847657 18.109375-4.191406-10.179688-8.824219-19.972656-13.886719-29.296875zm-194.265624 0c-5.0625 9.324219-9.695313 19.117187-13.886719 29.296875-14.773438-5.066406-28.816407-11.132813-41.847657-18.109375 22.847657-21.015625 50.015626-37.402344 80.007813-47.644531-8.601563 10.410156-16.757813 22.609374-24.273437 36.457031zm-24.035157 57.492187c-10.238281 32.753906-16.257812 68.460938-17.554687 104.996094h-86.765625c3.210937-48.753906 21.933593-93.339844 51.292969-128.832031 16.292968 9.34375 34.136718 17.335937 53.027343 23.835937zm-17.554687 134.996094c1.296875 36.539062 7.316406 72.242188 17.554687 104.996094-18.890625 6.5-36.734375 14.492187-53.027343 23.835937-29.359376-35.492187-48.082032-80.078125-51.292969-128.832031zm27.703125 133.191406c4.191406 10.179688 8.824219 19.972656 13.886719 29.296875 7.515624 13.84375 15.671874 26.046875 24.273437 36.457031-29.992187-10.242187-57.160156-26.628906-80.003906-47.644531 13.023437-6.976562 27.070312-13.042969 41.84375-18.109375zm208.152343 29.296875c5.0625-9.324219 9.695313-19.117187 13.886719-29.296875 14.773438 5.066406 28.816407 11.132813 41.847657 18.109375-22.847657 21.015625-50.015626 37.402344-80.007813 47.644531 8.601563-10.410156 16.757813-22.609374 24.273437-36.457031zm24.035157-57.492187c10.238281-32.753906 16.257812-68.460938 17.554687-104.996094h86.765625c-3.210937 48.753906-21.933593 93.339844-51.292969 128.832031-16.292968-9.34375-34.136718-17.335937-53.027343-23.835937zm17.554687-134.996094c-1.296875-36.539062-7.316406-72.242188-17.554687-104.996094 18.890625-6.5 36.734375-14.492187 53.027343-23.835937 29.359376 35.492187 48.082032 80.078125 51.292969 128.832031zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "English(CA)"))), __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "$CAD")), __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Become a host")), __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Help")), __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Sign up")), __jsx("div", {
    className: "mx-3 flex items-center justify-center border-transparent border-b-2 hover:border-white py-6 px-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "text-sm tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Log in"))));
};

/***/ }),

/***/ "./src/components/layout/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/layout/Footer.tsx ***!
  \******************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterContent */ "./src/components/layout/FooterContent.tsx");
/* harmony import */ var _FooterInducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterInducer */ "./src/components/layout/FooterInducer.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/Footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Component



const Footer = () => {
  const {
    0: display,
    1: setDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const changeDisplay = () => {
    setDisplay(!display);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, display ? __jsx(_FooterContent__WEBPACK_IMPORTED_MODULE_1__["FooterContent"], {
    swap: changeDisplay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }) : __jsx(_FooterInducer__WEBPACK_IMPORTED_MODULE_2__["FooterInducer"], {
    swap: changeDisplay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./src/components/layout/FooterContent.tsx":
/*!*************************************************!*\
  !*** ./src/components/layout/FooterContent.tsx ***!
  \*************************************************/
/*! exports provided: FooterContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterContent", function() { return FooterContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/FooterContent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const FooterContent = ({
  swap
}) => {
  return __jsx("div", {
    className: "hidden md:block fixed bottom-0 bg-white w-full border-t border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:px-20 px-5 xl:px-0 lg:max-w-6xl xl:max-w-5.5xl mx-auto py-6 sm:py-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "hidden md:flex md:flex-wrap md:items-start md:w-full md:justify-between md:pb-6 md:border-b md:border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-gray-900 text-sm mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Airbnb"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Careers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "News")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Policies")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Diversity & Belonging")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Accessibility")))), __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-gray-900 text-sm mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Discover"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Trust & Safety")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Travel Credit")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Airbnb Citizen")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Business Travel")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "Things To Do")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Airbnbmag")))), __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-gray-905 text-sm mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "Hosting"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "Why Host")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Hospitality")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "Responsible Hosting")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "Community Centre")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, "Host an Experience")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("a", {
    className: "text-gray-650 font-semibold text-sm",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Open Homes")))), __jsx("div", {
    className: "lg:w-1/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("h3", {
    className: "font-semibold text-sm mb-2 text-gray-900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "Support"), __jsx("ul", {
    className: "leading-relaxed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx("a", {
    className: "font-semibold text-sm text-gray-650",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "Help")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx("a", {
    className: "font-semibold text-sm text-gray-650",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, "Neighbourhood Support"))))), __jsx("div", {
    className: "flex flex-wrap items-center justify-between sm:pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex flex-wrap items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    className: "h-5 w-5 block",
    style: {
      fill: '#767676'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, "AirBnb"), __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  })), __jsx("p", {
    className: "pl-2 text-sm  text-gray-650 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "\xA9 2020 Airbnb, Inc. All rights reserved."), __jsx("div", {
    className: "hidden md:flex md:flex-wrap md:justify-between md:items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, __jsx("p", {
    className: "text-sm text-gray-650 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, "\u3000\u2744\uFE0F Cloned by"), __jsx("a", {
    className: "text-sm text-gray-650 font-semibold",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, "\xA0Ken"))), __jsx("div", {
    className: "hidden lg:flex lg:items-center lg:justify-start lg:flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-5 w-5",
    viewBox: "0 0 512 512",
    width: "512pt",
    style: {
      fill: '#767676'
    },
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, __jsx("path", {
    d: "m297.277344 508.667969c-2.132813.347656-4.273438.667969-6.421875.960937 2.148437-.292968 4.289062-.613281 6.421875-.960937zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }), __jsx("path", {
    d: "m302.398438 507.792969c-1.019532.1875-2.039063.359375-3.058594.535156 1.019531-.175781 2.039062-.347656 3.058594-.535156zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }), __jsx("path", {
    d: "m285.136719 510.339844c-2.496094.28125-5.007813.53125-7.527344.742187 2.519531-.210937 5.03125-.460937 7.527344-.742187zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }), __jsx("path", {
    d: "m290.054688 509.738281c-1.199219.160157-2.40625.308594-3.609376.449219 1.203126-.140625 2.410157-.289062 3.609376-.449219zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }), __jsx("path", {
    d: "m309.367188 506.410156c-.898438.191406-1.800782.382813-2.703126.566406.902344-.183593 1.804688-.375 2.703126-.566406zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }), __jsx("path", {
    d: "m326.664062 502.113281c-.726562.207031-1.453124.402344-2.179687.605469.726563-.203125 1.453125-.398438 2.179687-.605469zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }), __jsx("path", {
    d: "m321.433594 503.542969c-.789063.207031-1.582032.417969-2.375.617187.792968-.199218 1.585937-.40625 2.375-.617187zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }), __jsx("path", {
    d: "m314.589844 505.253906c-.835938.195313-1.679688.378906-2.523438.566406.84375-.1875 1.6875-.371093 2.523438-.566406zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }), __jsx("path", {
    d: "m277.527344 511.089844c-1.347656.113281-2.695313.214844-4.046875.304687 1.351562-.089843 2.699219-.191406 4.046875-.304687zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }), __jsx("path", {
    d: "m512 256c0-141.363281-114.636719-256-256-256s-256 114.636719-256 256 114.636719 256 256 256c1.503906 0 3-.03125 4.5-.058594v-199.285156h-55v-64.097656h55v-47.167969c0-54.703125 33.394531-84.476563 82.191406-84.476563 23.367188 0 43.453125 1.742188 49.308594 2.519532v57.171875h-33.648438c-26.546874 0-31.6875 12.617187-31.6875 31.128906v40.824219h63.476563l-8.273437 64.097656h-55.203126v189.453125c107.003907-30.675781 185.335938-129.257813 185.335938-246.109375zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }), __jsx("path", {
    d: "m272.914062 511.429688c-2.664062.171874-5.339843.308593-8.023437.398437 2.683594-.089844 5.359375-.226563 8.023437-.398437zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }), __jsx("path", {
    d: "m264.753906 511.835938c-1.414062.046874-2.832031.082031-4.25.105468 1.417969-.023437 2.835938-.058594 4.25-.105468zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  })), __jsx("svg", {
    className: "h-5 w-5 ml-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      fill: '#767676',
      marginRight: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }, __jsx("path", {
    d: "M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016 c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992 c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056 c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152 c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792 c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44 C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568 C480.224,136.96,497.728,118.496,512,97.248z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }))), __jsx("svg", {
    className: "w-5 h-5 ml-3",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      fill: '#767676'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, __jsx("path", {
    d: "M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, __jsx("circle", {
    cx: "393.6",
    cy: "118.4",
    r: "17.056",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }))))))), __jsx("button", {
    onClick: swap,
    className: "flex items-center justify-start hover:bg-gray-100 bg-white z-10 shadow-xl fixed bottom-0 lg:right-0 ml-4 lg:mr-4 mb-3 rounded-lg py-2 px-4 font-semibold text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      marginBottom: 1
    },
    className: "h-3 w-3 mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }, __jsx("path", {
    d: "M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892 L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999 c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998 c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850 ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: undefined
  }, "Close")));
};

/***/ }),

/***/ "./src/components/layout/FooterInducer.tsx":
/*!*************************************************!*\
  !*** ./src/components/layout/FooterInducer.tsx ***!
  \*************************************************/
/*! exports provided: FooterInducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterInducer", function() { return FooterInducer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/FooterInducer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const FooterInducer = ({
  swap
}) => {
  return __jsx("button", {
    onClick: swap,
    className: "hidden md:block hover:bg-gray-100 md:flex md:items-center justify-start fixed bottom-0 md:ml-3 md:mb-3 lg:right-0  lg:mr-3 z-50 bg-white text-sm py-2 px-4 rounded-lg shadow-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    style: {
      marginBottom: 1
    },
    className: "h-4 w-4 mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,0C114.51,0,0,114.497,0,256c0,141.49,114.497,256,256,256c141.49,0,256-114.497,256-256C512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133S477.867,133.663,477.867,256 S378.337,477.867,256,477.867z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("path", {
    d: "M255.997,209.777c-9.425,0-17.067,7.641-17.067,17.067v143.969c0,9.425,7.641,17.067,17.067,17.067 s17.067-7.641,17.067-17.067V226.843C273.063,217.417,265.422,209.777,255.997,209.777z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("path", {
    d: "M256,124.122c-18.821,0-34.133,15.312-34.133,34.133s15.312,34.133,34.133,34.133s34.133-15.312,34.133-34.133 S274.821,124.122,256,124.122z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Terms, privacy, & more"));
};

/***/ }),

/***/ "./src/components/presentational/AmenityCard.tsx":
/*!*******************************************************!*\
  !*** ./src/components/presentational/AmenityCard.tsx ***!
  \*******************************************************/
/*! exports provided: AmenityCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenityCard", function() { return AmenityCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/AmenityCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const AmenityCard = ({
  type,
  title
}) => {
  const renderIcon = type => {
    if (type == 'wifi') {
      return __jsx("svg", {
        style: {
          fill: '#484848'
        },
        className: "h-4 w-4",
        viewBox: "0 0 511.99945 511",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: undefined
      }, __jsx("path", {
        d: "m210.125 310c-25.234375 25.226562-25.238281 66.132812-.011719 91.367188 25.226563 25.234374 66.132813 25.242187 91.363281.015624 25.234376-25.226562 25.242188-66.132812.015626-91.367187-.003907-.003906-.007813-.007813-.015626-.015625-25.550781-24.421875-65.796874-24.421875-91.351562 0zm68.515625 68.515625c-12.777344 12.207031-32.898437 12.207031-45.675781 0-12.617188-12.613281-12.621094-33.066406-.007813-45.683594 12.613281-12.617187 33.066407-12.621093 45.683594-.007812s12.621094 33.066406.007813 45.683593c-.003907.003907-.007813.003907-.007813.007813zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: undefined
      }), __jsx("path", {
        d: "m141.59375 241.472656c-6.414062 6.195313-6.589844 16.421875-.394531 22.835938 6.195312 6.417968 16.421875 6.59375 22.835937.398437.136719-.128906.269532-.261719.398438-.398437 50.496094-50.375 132.238281-50.375 182.738281 0 6.414063 6.199218 16.640625 6.019531 22.835937-.394532 6.046876-6.261718 6.046876-16.183593 0-22.441406-63.113281-62.976562-165.296874-62.976562-228.414062 0zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: undefined
      }), __jsx("path", {
        d: "m255.800781 97.253906c-68.574219-.1875-134.371093 27.070313-182.71875 75.703125-6.042969 6.5625-5.617187 16.78125.945313 22.820313 6.183594 5.691406 15.695312 5.691406 21.875 0 88.300781-88.308594 231.472656-88.316406 319.78125-.015625.007812.007812.011718.011719.015625.015625 6.199219 6.417968 16.421875 6.597656 22.839843.398437 6.417969-6.195312 6.59375-16.421875.398438-22.835937-.132812-.136719-.261719-.269532-.398438-.398438-48.355468-48.628906-114.160156-75.886718-182.738281-75.6875zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: undefined
      }), __jsx("path", {
        d: "m507.070312 104.410156c-138.863281-138.546875-363.671874-138.546875-502.535156 0-6.199218 6.417969-6.019531 16.640625.394532 22.839844 6.261718 6.042969 16.183593 6.042969 22.441406 0 126.257812-125.921875 330.601562-125.921875 456.859375 0 6.195312 6.414062 16.421875 6.59375 22.839843.394531 6.414063-6.195312 6.59375-16.421875.394532-22.835937-.128906-.136719-.261719-.269532-.394532-.398438zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: undefined
      }));
    } else if (type == 'laptop') {
      return __jsx("svg", {
        style: {
          fill: '#484848'
        },
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-4 w-4",
        viewBox: "0 0 512 512",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: undefined
      }, __jsx("g", {
        id: "Laptop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: undefined
      }, __jsx("path", {
        d: "M496,344H471.039L472,144a40.045,40.045,0,0,0-40-40H80a40.037,40.037,0,0,0-40,39.962L39.038,344H16a8,8,0,0,0-8,8v32a40.045,40.045,0,0,0,40,40H464a40.045,40.045,0,0,0,40-40V352A8,8,0,0,0,496,344ZM56,144a24.027,24.027,0,0,1,24-24H432a24.019,24.019,0,0,1,24,23.962L455.039,344h-400ZM293.439,360l-4.5,16H222.246l-4-16ZM488,384a24.027,24.027,0,0,1-24,24H48a24.027,24.027,0,0,1-24-24V360H201.754l6.485,25.94A8,8,0,0,0,216,392h79a8,8,0,0,0,7.7-5.834L310.06,360H488Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: undefined
      }), __jsx("path", {
        d: "M448,328V136a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V328a8,8,0,0,0,8,8H440A8,8,0,0,0,448,328Zm-16-8H80V144H432Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: undefined
      }), __jsx("path", {
        d: "M104,368H48a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: undefined
      }), __jsx("path", {
        d: "M136,368h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: undefined
      })));
    } else if (type == 'kitchen') {
      return __jsx("svg", {
        style: {
          fill: '#484848'
        },
        className: "h-4 w-4",
        viewBox: "0 0 512.244 512.244",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: undefined
      }, __jsx("path", {
        d: "m366.975 447.593-5.242-84.695c-1.359-21.986-2.711-38.991-3.903-53.994-2.068-26.015-3.854-48.482-4.823-86.042-.268-10.392 2.527-18.021 8.543-23.325 30.253-26.671 44.957-69.759 39.332-115.259-5.037-40.752-26.631-84.278-72.12-84.278-.047 0-.088 0-.137 0-45.497 0-67.097 43.529-72.133 84.276-.571 4.615-.937 9.304-1.088 13.938-.135 4.14 3.112 7.605 7.252 7.74 4.118.13 7.605-3.112 7.74-7.252.137-4.183.467-8.417.982-12.585 2.063-16.688 12.283-71.117 57.263-71.117h.106c44.958 0 55.185 54.43 57.247 71.117 5.017 40.581-7.83 78.774-34.365 102.167-9.42 8.305-14.001 20.068-13.617 34.963.979 37.961 2.779 60.614 4.864 86.844 1.188 14.941 2.533 31.876 3.886 53.731l5.224 84.433.021.314c.113 1.735.23 3.52.333 5.34.226 3.992 3.533 7.077 7.481 7.077.143 0 .286-.004.43-.012 4.136-.234 7.299-3.776 7.065-7.912-.106-1.863-.225-3.692-.341-5.469z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: undefined
      }), __jsx("path", {
        d: "m358.86 481.421c-3.761-1.743-8.217-.105-9.957 3.654-1.195 2.581-2.658 4.778-4.473 6.718-3.61 3.861-11.26 5.64-15.376 5.434-.246-.013-.49-.013-.736 0-4.118.204-11.766-1.573-15.376-5.435-9.723-10.396-8.538-28.5-7.586-43.046l5.255-84.923c1.353-21.854 2.698-38.79 3.886-53.731 2.085-26.229 3.886-48.882 4.864-86.844.384-14.896-4.197-26.659-13.617-34.963-16.124-14.214-27.323-33.854-32.39-56.797-.893-4.044-4.892-6.601-8.94-5.707-4.045.893-6.6 4.896-5.706 8.941 5.756 26.07 18.591 48.483 37.116 64.815 6.016 5.303 8.811 12.933 8.543 23.325-.969 37.56-2.755 60.027-4.822 86.042-1.193 15.003-2.545 32.008-3.904 53.994l-5.221 84.381-.031.488c-1.081 16.514-2.561 39.131 11.598 54.271 6.958 7.441 18.612 10.481 26.701 10.187.35.013.706.019 1.068.019 8.008 0 18.976-3.086 25.631-10.205 2.88-3.079 5.278-6.666 7.128-10.66 1.74-3.759.104-8.217-3.655-9.958z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: undefined
      }), __jsx("path", {
        d: "m216.716 0h-2.232c-9.935 0-18.018 8.083-18.018 18.018v100.104c0 1.515-1.232 2.748-2.748 2.748-1.515 0-2.747-1.232-2.747-2.748v-100.104c0-9.935-8.083-18.018-18.018-18.018h-.495c-9.935 0-18.018 8.083-18.018 18.018v100.104c0 1.515-1.232 2.748-2.748 2.748h-.494c-1.516 0-2.748-1.232-2.748-2.748v-100.104c0-9.935-8.083-18.018-18.017-18.018h-2.233c-9.935 0-18.018 8.083-18.018 18.018v115.703c0 25.197 10.583 49.064 29.064 65.508l.349.308c6.017 5.305 8.811 12.934 8.542 23.325-.969 37.563-2.755 60.032-4.822 86.048-1.192 15.002-2.544 32.005-3.903 53.988l-5.222 84.382-.032.496c-1.079 16.512-2.558 39.125 11.598 54.263 6.959 7.441 18.616 10.46 26.703 10.187.35.012.705.019 1.068.019 8.008 0 18.976-3.086 25.633-10.206 14.155-15.138 12.677-37.751 11.598-54.263l-5.253-84.877c-1.36-21.988-2.712-38.993-3.904-53.997-1.122-14.124-2.183-27.464-3.049-42.435-.238-4.135-3.769-7.3-7.921-7.054-4.135.239-7.293 3.785-7.054 7.92.875 15.132 1.941 28.55 3.07 42.757 1.188 14.942 2.534 31.878 3.887 53.734l5.223 84.433.033.497c.95 14.544 2.134 32.645-7.587 43.039-3.611 3.862-11.255 5.64-15.378 5.435-.246-.013-.492-.013-.736 0-4.116.204-11.766-1.573-15.376-5.435-9.721-10.395-8.537-28.495-7.587-43.039l5.257-84.93c1.353-21.852 2.698-38.785 3.886-53.726 2.084-26.231 3.885-48.885 4.863-86.849.386-14.895-4.196-26.658-13.634-34.979l-.311-.273c-15.256-13.574-24.005-33.356-24.005-54.275v-115.704c0-1.664 1.354-3.018 3.018-3.018h2.232c1.664 0 3.018 1.354 3.018 3.018v100.104c0 9.786 7.962 17.748 17.748 17.748h.494c9.786 0 17.748-7.961 17.748-17.748v-100.104c0-1.664 1.354-3.018 3.018-3.018h.495c1.664 0 3.018 1.354 3.018 3.018v100.104c0 9.786 7.961 17.748 17.747 17.748s17.748-7.961 17.748-17.748v-100.104c0-1.664 1.354-3.018 3.018-3.018h2.232c1.664 0 3.018 1.354 3.018 3.018v115.703c0 20.918-8.749 40.701-24.011 54.28l-.321.284c-9.42 8.305-14.001 20.068-13.617 34.963.078 3.054.162 6.006.251 8.867.128 4.14 3.544 7.383 7.728 7.265 4.14-.128 7.393-3.588 7.265-7.728-.087-2.836-.171-5.763-.249-8.79-.268-10.392 2.527-18.022 8.538-23.321l.383-.339c18.451-16.417 29.034-40.284 29.034-65.48v-115.704c-.002-9.935-8.085-18.018-18.019-18.018z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: undefined
      }));
    } else if (type == 'iron') {
      return __jsx("svg", {
        className: "h-4 w-4",
        style: {
          fill: '#484848'
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: undefined
      }, __jsx("path", {
        d: "M404.211,180.547c0-22.289-18.132-40.421-40.421-40.421H212.884c-22.289,0-40.421,18.132-40.421,40.421 s18.132,40.421,40.421,40.421h150.905C386.078,220.968,404.211,202.836,404.211,180.547z M312.589,204.8h-48.505v-16.168h48.505 V204.8z M363.789,204.8h-35.032v-24.253c0-4.465-3.618-8.084-8.084-8.084H256c-4.465,0-8.084,3.62-8.084,8.084V204.8h-35.032 c-13.373,0-24.253-10.879-24.253-24.253c0-13.373,10.879-24.253,24.253-24.253h150.905c13.372,0,24.253,10.879,24.253,24.253 C388.042,193.921,377.162,204.8,363.789,204.8z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: undefined
      }), __jsx("path", {
        d: "M384.269,317.979c13.372,0,24.253-10.879,24.253-24.253s-10.88-24.253-24.253-24.253s-24.253,10.879-24.253,24.253 S370.897,317.979,384.269,317.979z M384.269,285.642c4.458,0,8.084,3.626,8.084,8.084s-3.626,8.084-8.084,8.084 s-8.084-3.626-8.084-8.084S379.811,285.642,384.269,285.642z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: undefined
      }), __jsx("path", {
        d: "M447.326,248.376v-78.608c0-40.119-32.639-72.758-72.758-72.758H220.032c-40.172,0-77.362,23.401-94.745,59.617 L24.556,366.484h-0.303C10.879,366.484,0,377.363,0,390.737c0,13.373,10.879,24.253,24.253,24.253h420.379 c13.372,0,24.253-10.879,24.253-24.253c0-13.373-10.88-24.253-24.253-24.253H42.49l23.283-48.505h233.344 c22.289,0,40.421-18.132,40.421-40.421c0-22.289-18.132-40.421-40.421-40.421H137.432c-4.465,0-8.084,3.62-8.084,8.084 c0,4.465,3.62,8.084,8.084,8.084h161.684c13.372,0,24.253,10.879,24.253,24.253c0,13.373-10.88,24.253-24.253,24.253H73.534 l0.004-0.01l66.324-138.176c14.709-30.645,46.177-50.445,80.168-50.445h154.538c31.203,0,56.589,25.385,56.589,56.589v161.684 c0,4.465,3.618,8.084,8.084,8.084c4.466,0,8.084-3.62,8.084-8.084v-66.781c27.386,3.935,48.505,27.544,48.505,56.003 c0,4.465,3.619,8.084,8.084,8.084c4.466,0,8.084-3.62,8.084-8.084C512,283.288,483.654,252.412,447.326,248.376z M444.632,382.653c4.458,0,8.084,3.626,8.084,8.084c0,4.458-3.626,8.084-8.084,8.084H24.253c-4.458,0-8.084-3.626-8.084-8.084 c0-4.458,3.626-8.084,8.084-8.084h5.345c0.013,0,0.058,0,0.068,0H444.632z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: undefined
      })))));
    }
  };

  return __jsx("div", {
    className: "flex items-center justify-start p-2 w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, renderIcon(type), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pl-2 text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, title));
};

/***/ }),

/***/ "./src/components/presentational/CharacteristicCard.tsx":
/*!**************************************************************!*\
  !*** ./src/components/presentational/CharacteristicCard.tsx ***!
  \**************************************************************/
/*! exports provided: CharacteristicCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacteristicCard", function() { return CharacteristicCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/CharacteristicCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const CharacteristicCard = ({
  type,
  title,
  description,
  guestnumber,
  hostName,
  percentage
}) => {
  const {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const setSkeleton = async seconds => {
    await sleep(seconds);
    setLoaded(true);
  };

  setSkeleton(4000);

  const renderIcon = type => {
    if (type === 'home') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, loaded ? __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-3 w-3",
        viewBox: "0 0 512.001 512.001",
        style: {
          fill: '#484848'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: undefined
      }, __jsx("path", {
        d: "M503.402,228.885L273.684,19.567c-10.083-9.189-25.288-9.188-35.367-0.001L8.598,228.886 c-8.077,7.36-10.745,18.7-6.799,28.889c3.947,10.189,13.557,16.772,24.484,16.772h36.69v209.721 c0,8.315,6.742,15.057,15.057,15.057h125.914c8.315,0,15.057-6.741,15.057-15.057V356.932h74.002v127.337 c0,8.315,6.742,15.057,15.057,15.057h125.908c8.315,0,15.057-6.741,15.057-15.057V274.547h36.697 c10.926,0,20.537-6.584,24.484-16.772C514.147,247.585,511.479,236.246,503.402,228.885z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: undefined
      }))), __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: undefined
      }, __jsx("path", {
        d: "M445.092,42.73H343.973l116.176,105.636v-90.58C460.149,49.471,453.408,42.73,445.092,42.73z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: undefined
      })))) : __jsx("div", {
        className: "w-4 h-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: undefined
      }, __jsx(SSkeletonPulse1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: undefined
      })));
    } else if (type === 'clean') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, loaded ? __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-3 w-3",
        viewBox: "0 0 512 512",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: undefined
      }, __jsx("path", {
        d: "M407.335,74.217l-29.654-44.481C365.295,11.159,344.445,0,322.116,0H207.595h-50.087c-9.22,0-16.696,7.475-16.696,16.696 v33.391c0,9.22,7.475,16.696,16.696,16.696H190.9v16.696c0,17.065-6.653,33.12-18.717,45.195l-9.783,9.783 c-6.521,6.521-6.521,17.087,0,23.609c3.261,3.261,7.533,4.892,11.804,4.892s8.544-1.631,11.804-4.892l9.794-9.783 c14.369-14.387,23.663-32.48,27.04-52.108h1.448c18.442,0,33.391,14.949,33.391,33.391v33.391h-5.564 c-27.619,0-50.087,22.468-50.087,50.087v66.783c0,9.206-7.49,16.696-16.696,16.696h-33.391c-27.619,0-50.087,22.468-50.087,50.087 v16.696v94.609c0,27.619,22.468,50.087,50.087,50.087h200.348c27.619,0,50.087-22.468,50.087-50.087v-94.609V217.043 c0-27.619-22.468-50.087-50.087-50.087h-27.826v-33.391c0-18.442,14.949-33.391,33.391-33.391h35.587 c6.163,0,11.804-3.38,14.718-8.826C411.074,85.912,410.759,79.348,407.335,74.217z M268.813,367.304H135.248v-16.696 c0-9.206,7.49-16.696,16.696-16.696h33.391c27.619,0,50.087-22.468,50.087-50.087v-66.783c0-9.206,7.49-16.696,16.696-16.696 h16.696V367.304z M352.291,200.348c9.206,0,16.696,7.49,16.696,16.696v150.261h-66.783V200.348H352.291z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: undefined
      })))) : __jsx("div", {
        className: "w-4 h-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: undefined
      }, __jsx(SSkeletonPulse1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: undefined
      })));
    } else if (type === 'superhost') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, loaded ? __jsx("svg", {
        className: "h-3 w-3",
        viewBox: "0 0 511.999 511.999",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: undefined
      }, __jsx("g", {
        clipRule: "evenodd",
        fillRule: "evenodd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: undefined
      }, __jsx("path", {
        d: "m345.999 174.051v-52.052h-180v52.052c26.942-14.077 57.555-22.053 90-22.053s63.058 7.975 90 22.053z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: undefined
      }), __jsx("path", {
        d: "m330.999 91.994v-76.994c0-8.284-6.716-15-15-15h-120c-8.284 0-15 6.716-15 15v76.994c-.033 0-.064.005-.097.005h150.193c-.032-.001-.064-.005-.096-.005z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: undefined
      }), __jsx("path", {
        d: "m271.572 324.382-15.572-23.478-15.572 23.478c-1.993 3.005-5.003 5.192-8.478 6.16l-27.142 7.555 17.517 22.066c2.242 2.825 3.392 6.363 3.238 9.966l-1.201 28.147 26.398-9.841c1.689-.63 3.465-.945 5.239-.945s3.55.315 5.239.945l26.398 9.841-1.201-28.147c-.153-3.603.996-7.141 3.238-9.966l17.517-22.065-27.142-7.555c-3.474-.969-6.483-3.156-8.476-6.161z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: undefined
      }), __jsx("path", {
        d: "m255.999 181.998c-90.879 0-165 74.121-165 165s74.121 165 165 165 165-74.121 165-165-74.121-165-165-165zm88.748 157.039-28.101 35.398 1.928 45.155c.215 5.023-2.103 9.82-6.17 12.775-2.6 1.889-5.693 2.865-8.817 2.865-1.765 0-3.538-.311-5.238-.945l-42.35-15.787-42.35 15.787c-4.707 1.755-9.987 1.036-14.056-1.92-4.067-2.955-6.385-7.752-6.17-12.775l1.928-45.155-28.101-35.398c-3.126-3.938-4.071-9.18-2.518-13.961s5.399-8.467 10.243-9.815l43.541-12.121 24.981-37.664c2.778-4.19 7.473-6.709 12.5-6.709s9.722 2.519 12.5 6.709l24.981 37.664 43.541 12.121c4.844 1.349 8.689 5.034 10.243 9.815s.611 10.023-2.515 13.961z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: undefined
      }))) : __jsx("div", {
        className: "w-4 h-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: undefined
      }, __jsx(SSkeletonPulse1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: undefined
      })));
    } else if (type === 'location') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, loaded ? __jsx("svg", {
        className: "h-3 w-3",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: undefined
      }, __jsx("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: undefined
      }, __jsx("path", {
        d: "M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: undefined
      })))) : __jsx("div", {
        className: "w-4 h-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: undefined
      }, __jsx(SSkeletonPulse1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: undefined
      })));
    }
  };

  return __jsx("div", {
    className: "flex items-start justify-start my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      paddingTop: 5
    },
    className: "mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, renderIcon(type)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, loaded ? __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, hostName, " ", title) : __jsx("div", {
    className: "w-40v h-3 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, __jsx(SSkeletonPulse1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  })), loaded ? __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, guestnumber ? guestnumber : null, percentage ? `${percentage}%` : null, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, " "), description) : __jsx("div", {
    className: "w-60v h-5 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, __jsx(SSkeletonPulse1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }))));
};
const SSkeletonPulse = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
const SSkeletonPulse1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(SSkeletonPulse)`
  animation: pulse 1.2s ease-in-out infinite;
`;

/***/ }),

/***/ "./src/components/presentational/CheckInCard.tsx":
/*!*******************************************************!*\
  !*** ./src/components/presentational/CheckInCard.tsx ***!
  \*******************************************************/
/*! exports provided: CheckInCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInCard", function() { return CheckInCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners/PulseLoader */ "react-spinners/PulseLoader");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/CheckInCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CheckInCard = ({
  loading
}) => {
  const {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const setSleep = async seconds => {
    await sleep(seconds);
    setLoaded(false);
  };

  setSleep(5000);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "shadow-4xl lg:shadow-none left-0 w-full z-50 fixed bottom-0 py-2 lg:py-0 bg-white w-full lg:block lg:w-25/31 lg:sticky lg:top-0 flex lg:justify-center lg:mt-5 lg:ml-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full mx-5 items-center flex lg:flex-col justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, loading ? __jsx("div", {
    className: "flex justify-start w-full mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    width: 300,
    height: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })) : __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-md lg:w-full py-5 lg:text-2xl text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Add dates for prices"), loaded ? __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "flex justify-center px-4 lg:px-0 lg:w-full bg-pink-850 text-white rounded-lg py-3 whitespace-no-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 10,
    color: '#ffffff',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  })) : __jsx("button", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "px-4 lg:px-0 lg:w-full bg-pink-850 text-white rounded-lg py-3 whitespace-no-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Check Availability"))));
};

/***/ }),

/***/ "./src/components/presentational/HeartExperienceCard.tsx":
/*!***************************************************************!*\
  !*** ./src/components/presentational/HeartExperienceCard.tsx ***!
  \***************************************************************/
/*! exports provided: HeartExperienceCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartExperienceCard", function() { return HeartExperienceCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/HeartExperienceCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Images

const img1 = __webpack_require__(/*! ../../../public/img/high/todonear1.jpg */ "./public/img/high/todonear1.jpg");

const HeartExperienceCard = () => {
  return __jsx("div", {
    className: "w-64",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "pt-2 pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      height: 30,
      width: 30
    },
    className: "flex items-center justify-center absolute z-10 right-0 mr-2 mt-2 mr-1 bg-gray-300 shadow-lg rounded-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-4 w-4",
    viewBox: "0 -50 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("path", {
    d: "m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }))), __jsx("img", {
    className: "w-full rounded",
    src: img1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx("div", {
    className: "flex flex-wrap items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("p", {
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Porto Taste Discoveries Tour"), __jsx("p", {
    className: "text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "From $105 CAD/night"));
};

/***/ }),

/***/ "./src/components/presentational/HomeCard.tsx":
/*!****************************************************!*\
  !*** ./src/components/presentational/HomeCard.tsx ***!
  \****************************************************/
/*! exports provided: HomeCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCard", function() { return HomeCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/HomeCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Images

const img1 = __webpack_require__(/*! ../../../public/img/high/airbnb-background.jpg */ "./public/img/high/airbnb-background.jpg");

const HomeCard = () => {
  return __jsx("div", {
    className: "w-30/31",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-full rounded",
    src: img1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("div", {
    className: "flex flex-wrap items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Entire House", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, " \xB7 "), "9 beds"), __jsx("div", {
    className: "flex items-center justify-center flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "13",
    viewBox: "0 0 37.286 37.287",
    style: {
      fill: '#F5385D'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }))), __jsx("p", {
    className: "pl-1 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "4.71"), __jsx("p", {
    className: "text-xs text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "(205)"))), __jsx("p", {
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Central House with garden"), __jsx("p", {
    className: "tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("span", {
    className: "font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "$349 CAD"), "/night"));
};

/***/ }),

/***/ "./src/components/presentational/ImagePanel.tsx":
/*!******************************************************!*\
  !*** ./src/components/presentational/ImagePanel.tsx ***!
  \******************************************************/
/*! exports provided: ImagePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePanel", function() { return ImagePanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/ImagePanel.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const ImagePanel = ({
  img1,
  img2,
  img3,
  img4,
  img5
}) => {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const setSleep = async seconds => {
    await sleep(seconds);
    setLoading(false);
  };

  setSleep(2000);
  return __jsx("div", {
    id: "zoomwrapper",
    className: "w-full flex justify-start h-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, loading ? __jsx("div", {
    className: "w-full lg:w-1/2 h-57v relative rounded border-r-4 border-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(SSkeletonPulse1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })) : __jsx("div", {
    className: "w-full lg:w-1/2 border-r-4 border-white relative bg-cover bg-no-repeat overflow-hidden  rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("img", {
    src: img1,
    id: "zoom",
    className: "w-full bg-cover bg-no-repeat ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })), __jsx("div", {
    className: "hidden lg:block w-1/2 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full h-full flex items-start justify-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, loading ? __jsx("div", {
    className: "w-full md:w-1/2 h-1/2 relative border-l-4 border-b-4 border-r-4 border-white rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(SSkeletonPulse2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })) : __jsx("div", {
    className: "rounded w-full border-l-4 border-b-4 border-r-4 border-white md:w-1/2 h-1/2 relative overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("img", {
    src: img2,
    id: "zoom",
    className: "w-full bg-cover bg-no-repeat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  })), loading ? __jsx("div", {
    className: "w-full md:w-1/2 h-1/2 relative border-l-4 border-b-4 border-r-4 border-white rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(SSkeletonPulse3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  })) : __jsx("div", {
    className: "rounded w-full border-l-4 border-b-4 border-white md:w-1/2 h-1/2 relative overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("img", {
    src: img3,
    id: "zoom",
    className: "w-full bg-cover bg-no-repeat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })), loading ? __jsx("div", {
    className: "w-full md:w-1/2 h-1/2 relative border-l-4 border-t-4 border-r-4 border-white rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx(SSkeletonPulse4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  })) : __jsx("div", {
    className: "rounded w-full border-l-4 border-t-4 border-r-4 border-white md:w-1/2 h-1/2 relative overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("img", {
    src: img4,
    id: "zoom",
    className: "w-full bg-cover bg-no-repeat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  })), loading ? __jsx("div", {
    className: "w-full md:w-1/2 h-1/2 relative border-l-4 border-t-4 border-white rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx(SSkeletonPulse5, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  })) : __jsx("div", {
    className: "rounded w-full border-l-4 border-t-4 border-white md:w-1/2 h-1/2 relative overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("img", {
    src: img5,
    id: "zoom",
    className: "w-full bg-cover bg-no-repeat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  })))));
};
const SSkeletonPulse = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
const SSkeletonPulse1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(SSkeletonPulse)`
  animation: pulse 1.2s ease-in-out infinite;
`;
const SSkeletonPulse2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(SSkeletonPulse)`
  animation: pulse 1.5s ease-in-out infinite;
`;
const SSkeletonPulse3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(SSkeletonPulse)`
  animation: pulse 1.8s ease-in-out infinite;
`;
const SSkeletonPulse4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(SSkeletonPulse)`
  animation: pulse 2.1s ease-in-out infinite;
`;
const SSkeletonPulse5 = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(SSkeletonPulse)`
  animation: pulse 2.4s ease-in-out infinite;
`;

/***/ }),

/***/ "./src/components/presentational/ReviewCard.tsx":
/*!******************************************************!*\
  !*** ./src/components/presentational/ReviewCard.tsx ***!
  \******************************************************/
/*! exports provided: ReviewCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewCard", function() { return ReviewCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/ReviewCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
 // Image

const img1 = __webpack_require__(/*! ../../../public/img/high/airbnb-background.jpg */ "./public/img/high/airbnb-background.jpg");

const ReviewCard = () => {
  const renderDescription = description => {
    const wordArray = description.split(' ');

    if (wordArray.length < 50) {
      return __jsx("p", {
        className: "text-gray-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: undefined
      }, "description");
    } else {
      const wordArray = description.split(' ');
      const newArray = [];

      for (let i = 0; i < 50; i++) {
        newArray.push(wordArray[i]);
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-gray-750",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: undefined
      }, `${newArray.join(' ')}...`, __jsx("a", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "hover:border-green-850 border-b text-green-850 border-transparent",
        href: "/#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: undefined
      }, "Read More")));
    }
  };

  const description = "As we pulled into the driveway, we knew it was an incredible place. Maria and Alberto were the perfect hosts and toured us around their beautiful property. I'm not sure you will believe how amazing it is. We have spent 10 days in Portugal and the time in Penafiel has been the...";
  return __jsx("div", {
    className: "lg:w-25/31 py-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-start pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("img", {
    className: "h-14 w-14 rounded-full",
    src: img1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("div", {
    className: "ml-4 pb-4 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex flex-col items-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Maureen"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-sm text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "October 2019")))), renderDescription(description));
};

/***/ }),

/***/ "./src/components/presentational/SleepingArrangementsCard.tsx":
/*!********************************************************************!*\
  !*** ./src/components/presentational/SleepingArrangementsCard.tsx ***!
  \********************************************************************/
/*! exports provided: SleepingArrangementsCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleepingArrangementsCard", function() { return SleepingArrangementsCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/SleepingArrangementsCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const SleepingArrangementsCard = () => {
  return __jsx("div", {
    className: "w-48 p-2 pl-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "pt-2 pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 480 480",
    className: "h-6 w-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("path", {
    d: "M472,272h-8v-24c-0.021-15.886-9.44-30.254-24-36.608V88c-0.002-3.18-1.886-6.056-4.8-7.328 c3.121-5.002,4.783-10.776,4.8-16.672c0-17.673-14.327-32-32-32c-17.673,0-32,14.327-32,32c0.033,5.634,1.569,11.157,4.448,16 H99.552c2.879-4.843,4.415-10.366,4.448-16c0-17.673-14.327-32-32-32S40,46.327,40,64c0.017,5.896,1.679,11.67,4.8,16.672 C41.886,81.944,40.002,84.82,40,88v123.392C25.44,217.746,16.021,232.114,16,248v24H8c-4.418,0-8,3.582-8,8v112 c0,4.418,3.582,8,8,8h8v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-40h352v40c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8 v-40h8c4.418,0,8-3.582,8-8V280C480,275.582,476.418,272,472,272z M408,48c8.837,0,16,7.163,16,16s-7.163,16-16,16 s-16-7.163-16-16S399.163,48,408,48z M72,48c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S63.163,48,72,48z M56,96h368 v112h-32.208c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64c-22.08,0.026-39.974,17.92-40,40v16 c0.029,8.684,2.914,17.117,8.208,24h-48.416c5.294-6.883,8.179-15.316,8.208-24v-16c-0.026-22.08-17.92-39.974-40-40h-64 c-22.08,0.026-39.974,17.92-40,40v16c0.029,8.684,2.914,17.117,8.208,24H56V96z M384,168v16c0,13.255-10.745,24-24,24h-64 c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C373.255,144,384,154.745,384,168z M208,168v16 c0,13.255-10.745,24-24,24h-64c-13.255,0-24-10.745-24-24v-16c0-13.255,10.745-24,24-24h64C197.255,144,208,154.745,208,168z M32,248c0-13.255,10.745-24,24-24h368c13.255,0,24,10.745,24,24v24H32V248z M48,432H32v-32h16V432z M448,432h-16v-32h16V432z M464,384H16v-96h448V384z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("path", {
    d: "M72,352H40c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S76.418,352,72,352z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }))), __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("path", {
    d: "M440,352H104c-4.418,0-8,3.582-8,8s3.582,8,8,8h336c4.418,0,8-3.582,8-8S444.418,352,440,352z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }))))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-gray-750 pt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Bedroom 1"), __jsx("p", {
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "1 double bed"));
};

/***/ }),

/***/ "./src/components/presentational/StayDescription.tsx":
/*!***********************************************************!*\
  !*** ./src/components/presentational/StayDescription.tsx ***!
  \***********************************************************/
/*! exports provided: StayDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StayDescription", function() { return StayDescription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/presentational/StayDescription.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const StayDescription = ({
  description,
  space,
  access,
  note,
  changeLength
}) => {
  const {
    0: display,
    1: setDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const renderDescription = description => {
    const wordArray = description.split(' ');
    const newArray = [];

    for (let i = 0; i < 45; i++) {
      newArray.push(wordArray[i]);
    }

    return newArray;
  };

  const newArray = renderDescription(description);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, display ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, description), __jsx("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "The space"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, space)), __jsx("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Guest access"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, access)), __jsx("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Other things to note"), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, note))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, `${newArray.join(' ')}...`, __jsx("button", {
    onClick: () => {
      setDisplay(true);
      changeLength();
    },
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "hover:border-green-850 border-b text-green-850 border-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Read More"))));
};

/***/ }),

/***/ "./src/components/wrapper/DetailSection.tsx":
/*!**************************************************!*\
  !*** ./src/components/wrapper/DetailSection.tsx ***!
  \**************************************************/
/*! exports provided: DetailSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailSection", function() { return DetailSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/wrapper/DetailSection.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const DetailSection = ({
  title,
  children
}) => {
  return __jsx("div", {
    className: "border-b border-gray-300 pt-4 pb-14 w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "pb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-2xl my-4 text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, title), children));
};

/***/ }),

/***/ "./src/components/wrapper/DetailSectionOverflow.tsx":
/*!**********************************************************!*\
  !*** ./src/components/wrapper/DetailSectionOverflow.tsx ***!
  \**********************************************************/
/*! exports provided: DetailSectionOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailSectionOverflow", function() { return DetailSectionOverflow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/wrapper/DetailSectionOverflow.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const DetailSectionOverflow = ({
  title,
  phrase,
  children
}) => {
  function renderPhrase(phrase) {
    if (phrase) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "scrollable text-gray-850 text-2xl pt-3 w-5/6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, title), __jsx("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "scrollable text-md mb-5 text-gray-850 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, phrase));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("h3", {
        style: {
          fontFamily: 'airbnb-medium'
        },
        className: "text-2xl my-4 text-gray-850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, title));
    }
  }

  return __jsx("div", {
    className: "border-b border-gray-300 pt-4 pb-14 w-full mx-auto overflow-x-hidden overflow-y-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("div", {
    className: "pb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, renderPhrase(phrase), children));
};

/***/ }),

/***/ "./src/pages/stays/[id].tsx":
/*!**********************************!*\
  !*** ./src/pages/stays/[id].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spinners/PulseLoader */ "react-spinners/PulseLoader");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.tsx");
/* harmony import */ var _components_presentational_ImagePanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/presentational/ImagePanel */ "./src/components/presentational/ImagePanel.tsx");
/* harmony import */ var _components_containers_Reviews__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/containers/Reviews */ "./src/components/containers/Reviews.tsx");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/layout/Footer */ "./src/components/layout/Footer.tsx");
/* harmony import */ var _components_containers_HostedBy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/containers/HostedBy */ "./src/components/containers/HostedBy.tsx");
/* harmony import */ var _components_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/containers/KeepInMind */ "./src/components/containers/KeepInMind.tsx");
/* harmony import */ var _components_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/containers/MoreHomes */ "./src/components/containers/MoreHomes.tsx");
/* harmony import */ var _components_containers_Characteristics__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/containers/Characteristics */ "./src/components/containers/Characteristics.tsx");
/* harmony import */ var _components_presentational_CheckInCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/presentational/CheckInCard */ "./src/components/presentational/CheckInCard.tsx");
/* harmony import */ var _components_presentational_StayDescription__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/presentational/StayDescription */ "./src/components/presentational/StayDescription.tsx");
/* harmony import */ var _components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/presentational/AmenityCard */ "./src/components/presentational/AmenityCard.tsx");
/* harmony import */ var _components_containers_SleepingArrangements__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/containers/SleepingArrangements */ "./src/components/containers/SleepingArrangements.tsx");
/* harmony import */ var _components_wrapper_DetailSectionOverflow__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/wrapper/DetailSectionOverflow */ "./src/components/wrapper/DetailSectionOverflow.tsx");
/* harmony import */ var _components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/wrapper/DetailSection */ "./src/components/wrapper/DetailSection.tsx");
/* harmony import */ var _components_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/containers/ToDoNear */ "./src/components/containers/ToDoNear.tsx");
/* harmony import */ var _components_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/containers/MoreLocations */ "./src/components/containers/MoreLocations.tsx");
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/stays/[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




 // Dependencies

 // Loading


 // GraphQL

 // Components












 // Wrapper


 // Containers




// Images
// import detail1 from '../../../public/img/high/staydetail1.jpg';
const detail2 = __webpack_require__(/*! ../../../public/img/high/staydetail2.jpg */ "./public/img/high/staydetail2.jpg");

const detail3 = __webpack_require__(/*! ../../../public/img/high/staydetail3.jpg */ "./public/img/high/staydetail3.jpg");

const detail4 = __webpack_require__(/*! ../../../public/img/high/staydetail4.jpg */ "./public/img/high/staydetail4.jpg");

const detail5 = __webpack_require__(/*! ../../../public/img/high/staydetail5.jpg */ "./public/img/high/staydetail5.jpg");

const GET_STAY = apollo_boost__WEBPACK_IMPORTED_MODULE_7__["gql"]`
  query Stay($id: ID!) {
    stay(where: { id: $id }) {
      picture_url
      name
      street
      reviews_per_month
      number_of_reviews
      country
      size
      description
      space
      access
      notes
      host_name
      hostDescription
      host_since
      duringStay
      host_is_superhost
      host_thumbnail_url
      host_picture_url
      host_response_rate
      host_response_time
      accommodates
      beds
      bedrooms
      bathrooms
    }
  }
`;

const id = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    loading,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_STAY, {
    variables: {
      id: router.query.id
    }
  });
  const {
    0: length,
    1: setLength
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, loading ? __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "Vacation Rentals, Homes, Experiences & Places") : data && __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, data.stay.name), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/img/high/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  })), __jsx(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_8__["ExploreHeader"], {
    type: "stay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }), __jsx("div", {
    className: "px-5 md:px-10 lg:max-w-6xl xl:px-0 mx-auto py-5 flex items-start justify-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full flex flex-col-reverse lg:flex-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, loading ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    height: 30,
    width: 350,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }) : data && __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-3xl text-gray-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, data.stay.name), __jsx("div", {
    className: "flex items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, loading ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    height: 20,
    width: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }) : data && __jsx("div", {
    className: "flex items-center justify-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("svg", {
    style: {
      fill: '#E61E4D',
      marginBottom: 1
    },
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-3 w-3",
    viewBox: "0 0 37.286 37.287",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx("path", {
    d: "M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382 c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15 c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05 c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116 c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361 C37.425,15.013,37.226,15.808,36.683,16.339z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  })))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pl-1 text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, data.stay.reviews_per_month, " (", data.stay.number_of_reviews, ")"), __jsx("span", {
    className: "text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, "\xA0\xB7\xA0"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-3 w-3",
    style: {
      fill: '#E61E4D'
    },
    viewBox: "0 0 511.999 511.999",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, __jsx("g", {
    "clip-rule": "evenodd",
    "fill-rule": "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, __jsx("path", {
    d: "m345.999 174.051v-52.052h-180v52.052c26.942-14.077 57.555-22.053 90-22.053s63.058 7.975 90 22.053z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }), __jsx("path", {
    d: "m330.999 91.994v-76.994c0-8.284-6.716-15-15-15h-120c-8.284 0-15 6.716-15 15v76.994c-.033 0-.064.005-.097.005h150.193c-.032-.001-.064-.005-.096-.005z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }), __jsx("path", {
    d: "m271.572 324.382-15.572-23.478-15.572 23.478c-1.993 3.005-5.003 5.192-8.478 6.16l-27.142 7.555 17.517 22.066c2.242 2.825 3.392 6.363 3.238 9.966l-1.201 28.147 26.398-9.841c1.689-.63 3.465-.945 5.239-.945s3.55.315 5.239.945l26.398 9.841-1.201-28.147c-.153-3.603.996-7.141 3.238-9.966l17.517-22.065-27.142-7.555c-3.474-.969-6.483-3.156-8.476-6.161z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }), __jsx("path", {
    d: "m255.999 181.998c-90.879 0-165 74.121-165 165s74.121 165 165 165 165-74.121 165-165-74.121-165-165-165zm88.748 157.039-28.101 35.398 1.928 45.155c.215 5.023-2.103 9.82-6.17 12.775-2.6 1.889-5.693 2.865-8.817 2.865-1.765 0-3.538-.311-5.238-.945l-42.35-15.787-42.35 15.787c-4.707 1.755-9.987 1.036-14.056-1.92-4.067-2.955-6.385-7.752-6.17-12.775l1.928-45.155-28.101-35.398c-3.126-3.938-4.071-9.18-2.518-13.961s5.399-8.467 10.243-9.815l43.541-12.121 24.981-37.664c2.778-4.19 7.473-6.709 12.5-6.709s9.722 2.519 12.5 6.709l24.981 37.664 43.541 12.121c4.844 1.349 8.689 5.034 10.243 9.815s.611 10.023-2.515 13.961z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  })))), data.stay.host_is_superhost ? __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "pl-1 text-gray-650 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, "Superhost") : null, __jsx("span", {
    className: "text-gray-650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, "\xA0\xB7\xA0"), __jsx("a", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-sm text-gray-650 underline",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }, data.stay.street)), __jsx("div", {
    className: "hidden lg:inline-block flex items-start justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-start pl-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-3 w-3",
    style: {
      fill: '#484848'
    },
    viewBox: "0 0 512 512.00578",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, __jsx("path", {
    d: "m507.523438 148.890625-138.667969-144c-4.523438-4.691406-11.457031-6.164063-17.492188-3.734375-6.058593 2.453125-10.027343 8.320312-10.027343 14.847656v69.335938h-5.332032c-114.6875 0-208 93.3125-208 208v32c0 7.421875 5.226563 13.609375 12.457032 15.296875 1.175781.296875 2.347656.425781 3.519531.425781 6.039062 0 11.820312-3.542969 14.613281-9.109375 29.996094-60.011719 90.304688-97.28125 157.398438-97.28125h25.34375v69.332031c0 6.53125 3.96875 12.398438 10.027343 14.828125 5.996094 2.453125 12.96875.960938 17.492188-3.734375l138.667969-144c5.972656-6.207031 5.972656-15.976562 0-22.207031zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }), __jsx("path", {
    d: "m448.003906 512.003906h-384c-35.285156 0-63.99999975-28.710937-63.99999975-64v-298.664062c0-35.285156 28.71484375-64 63.99999975-64h64c11.796875 0 21.332032 9.535156 21.332032 21.332031s-9.535157 21.332031-21.332032 21.332031h-64c-11.777344 0-21.335937 9.558594-21.335937 21.335938v298.664062c0 11.777344 9.558593 21.335938 21.335937 21.335938h384c11.773438 0 21.332032-9.558594 21.332032-21.335938v-170.664062c0-11.796875 9.535156-21.335938 21.332031-21.335938 11.800781 0 21.335937 9.539063 21.335937 21.335938v170.664062c0 35.289063-28.714844 64-64 64zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "pl-2 text-sm text-gray-850 underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, "Share")), __jsx("div", {
    className: "flex items-center justify-start pl-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  }, __jsx("svg", {
    className: "h-3 w-3",
    style: {
      fill: '#484848',
      marginTop: 1
    },
    viewBox: "0 0 512.001 512",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }, __jsx("path", {
    d: "m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }))), __jsx("p", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "pl-2 text-sm text-gray-850 underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  }, "Save")))))), __jsx("div", {
    className: "w-full px-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }, loading ? __jsx("div", {
    className: "w-full lg:w-1/2 h-12 lg:h-57v relative rounded border-r-4 border-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  }, __jsx(SSkeletonPulse1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: undefined
  })) : data && __jsx(_components_presentational_ImagePanel__WEBPACK_IMPORTED_MODULE_9__["ImagePanel"], {
    img1: data.stay.picture_url,
    img2: detail2,
    img3: detail3,
    img4: detail4,
    img5: detail5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }))), __jsx("div", {
    className: "w-full lg:w-7/12 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-between border-b border-gray-200 mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex justify-start w-9/12 py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }, __jsx("div", {
    className: "mt-4 flex items-start justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex flex-col ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: undefined
  }, loading ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    height: 30,
    width: 100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: undefined
  }) : data && __jsx("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "text-md lg:text-2xl text-gray-850 leading-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: undefined
  }, data.stay.size, " hosted by ", data.stay.host_name), loading ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    height: 20,
    width: 200,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: undefined
  }) : data && __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750 pt-1 pb-3 flex justify-start items-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: undefined
  }, __jsx("div", {
    className: "mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }, data.stay.accommodates, ' ', data.stay.accommodates > 1 ? 'guests' : 'guest')), __jsx("div", {
    className: "mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: undefined
  }, data.stay.bedrooms, ' ', data.stay.bedrooms > 1 ? 'bedrooms' : 'bedroom')), __jsx("div", {
    className: "mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: undefined
  }, data.stay.beds, ' ', data.stay.beds > 1 ? 'beds' : 'bed')), __jsx("div", {
    className: "mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: undefined
  }, data.stay.bathrooms, ' ', data.stay.bathrooms > 1 ? 'baths' : 'bath')))))), __jsx("div", {
    className: "flex justify-end items-start w-3/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: undefined
  }, loading ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    circle: true,
    height: 60,
    width: 60,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: undefined
  }) : data && __jsx("img", {
    className: "h-16 w-16 rounded-full",
    src: data.stay.host_picture_url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: undefined
  }))), __jsx("div", {
    className: "my-6 border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: undefined
  }, loading ? __jsx("div", {
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: undefined
  }, __jsx(SSkeletonPulse1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: undefined
  })) : data && __jsx(_components_containers_Characteristics__WEBPACK_IMPORTED_MODULE_15__["Characteristics"], {
    host_is_superhost: data.stay.host_is_superhost,
    host_name: data.stay.host_name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: undefined
  })), loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: undefined
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_6___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: undefined
  })) : data && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: "border-b border-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: undefined
  }, __jsx("div", {
    className: "my-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: undefined
  }, __jsx(_components_presentational_StayDescription__WEBPACK_IMPORTED_MODULE_17__["StayDescription"], {
    description: data.stay.description,
    space: data.stay.space,
    access: data.stay.access,
    note: data.stay.notes,
    changeLength: () => setLength(!length),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: undefined
  }), __jsx("div", {
    className: "my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: undefined
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: undefined
  }, __jsx("p", {
    className: "",
    style: {
      fontFamily: 'airbnb-medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: undefined
  }, "Any questions for the host?")))), __jsx("div", {
    className: "mt-10 mb-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: undefined
  }, __jsx("a", {
    className: "py-3 px-6 border border-black rounded-lg",
    style: {
      fontFamily: 'airbnb-medium'
    },
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: undefined
  }, "Contact host")))), __jsx(_components_wrapper_DetailSectionOverflow__WEBPACK_IMPORTED_MODULE_20__["DetailSectionOverflow"], {
    title: "Sleeping arrangements",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: undefined
  }, __jsx(_components_containers_SleepingArrangements__WEBPACK_IMPORTED_MODULE_19__["SleepingArrangements"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: undefined
  })), __jsx(_components_wrapper_DetailSection__WEBPACK_IMPORTED_MODULE_21__["DetailSection"], {
    title: "Amenities",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-start justify-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: undefined
  }, __jsx(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_18__["AmenityCard"], {
    type: "wifi",
    title: "Wifi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: undefined
  }), __jsx(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_18__["AmenityCard"], {
    type: "laptop",
    title: "Laptop-friendly workspace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: undefined
  }), __jsx(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_18__["AmenityCard"], {
    type: "kitchen",
    title: "Kitchen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: undefined
  }), __jsx(_components_presentational_AmenityCard__WEBPACK_IMPORTED_MODULE_18__["AmenityCard"], {
    type: "iron",
    title: "Iron",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: undefined
  })), __jsx("div", {
    className: "mt-10 mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "py-3 px-6 rounded-xl border border-black ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: undefined
  }, "Show all 32 amenities"))))), length ? __jsx("div", {
    className: "lg:w-5/12 lg:h-100r",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: undefined
  }, __jsx(_components_presentational_CheckInCard__WEBPACK_IMPORTED_MODULE_16__["CheckInCard"], {
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: undefined
  })) : __jsx("div", {
    className: "lg:w-5/12 lg:h-80v",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: undefined
  }, __jsx(_components_presentational_CheckInCard__WEBPACK_IMPORTED_MODULE_16__["CheckInCard"], {
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: undefined
  })), loading ? __jsx("div", {
    className: "flex justify-center items-center w-full py-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: undefined
  }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_6___default.a, {
    size: 10,
    color: '#008489',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: undefined
  })) : data && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_containers_Reviews__WEBPACK_IMPORTED_MODULE_10__["Reviews"], {
    reviews_per_month: data.stay.reviews_per_month,
    number_of_reviews: data.stay.number_of_reviews,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: undefined
  }), __jsx(_components_containers_HostedBy__WEBPACK_IMPORTED_MODULE_12__["HostedBy"], {
    host_name: data.stay.host_name,
    hostDescription: data.stay.hostDescription,
    host_since: data.stay.host_since,
    duringStay: data.stay.duringStay,
    host_is_superhost: data.stay.host_is_superhost,
    reviews_per_month: data.stay.reviews_per_month,
    host_picture_url: data.stay.host_picture_url,
    host_thumbnail_url: data.stay.host_thumbnail_url,
    host_response_rate: data.stay.host_response_rate,
    host_response_time: data.stay.host_response_time,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: undefined
  }), __jsx(_components_containers_KeepInMind__WEBPACK_IMPORTED_MODULE_13__["KeepInMind"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: undefined
  }), __jsx(_components_wrapper_DetailSectionOverflow__WEBPACK_IMPORTED_MODULE_20__["DetailSectionOverflow"], {
    title: "More places to stay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: undefined
  }, __jsx(_components_containers_MoreHomes__WEBPACK_IMPORTED_MODULE_14__["MoreHomes"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: undefined
  })), __jsx(_components_wrapper_DetailSectionOverflow__WEBPACK_IMPORTED_MODULE_20__["DetailSectionOverflow"], {
    title: "Things to do nearby",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: undefined
  }, __jsx(_components_containers_ToDoNear__WEBPACK_IMPORTED_MODULE_22__["ToDoNear"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: undefined
  })), __jsx(_components_wrapper_DetailSectionOverflow__WEBPACK_IMPORTED_MODULE_20__["DetailSectionOverflow"], {
    title: "Explore other options in and around Penafiel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: undefined
  }, __jsx(_components_containers_MoreLocations__WEBPACK_IMPORTED_MODULE_23__["MoreLocations"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: undefined
  })))), __jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_11__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: undefined
  }));
};

const SSkeletonPulse = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
const SSkeletonPulse1 = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(SSkeletonPulse)`
  animation: pulse 1.2s ease-in-out infinite;
`;
/* harmony default export */ __webpack_exports__["default"] = (id);

/***/ }),

/***/ 4:
/*!****************************************!*\
  !*** multi ./src/pages/stays/[id].tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ken/Desktop/nextbnb/frontend/src/pages/stays/[id].tsx */"./src/pages/stays/[id].tsx");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-loading-skeleton":
/*!*****************************************!*\
  !*** external "react-loading-skeleton" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loading-skeleton");

/***/ }),

/***/ "react-spinners/PulseLoader":
/*!*********************************************!*\
  !*** external "react-spinners/PulseLoader" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners/PulseLoader");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map