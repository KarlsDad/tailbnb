webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/layout/BottomNav.jsx":
/*!*********************************************!*\
  !*** ./src/components/layout/BottomNav.jsx ***!
  \*********************************************/
/*! exports provided: BottomNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomNav", function() { return BottomNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/layout/BottomNav.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var BottomNav = function BottomNav() {
  return __jsx("div", {
    className: "bg-white absolute bottom-0 z-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }, "hello");
};

/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Header */ "./src/components/layout/Header.tsx");
/* harmony import */ var _components_functions_FrontLines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/functions/FrontLines */ "./src/components/functions/FrontLines.jsx");
/* harmony import */ var _components_containers_Explore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/containers/Explore */ "./src/components/containers/Explore.tsx");
/* harmony import */ var _components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/NewFooter */ "./src/components/layout/NewFooter.tsx");
/* harmony import */ var _components_modals_MenuModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modals/MenuModal */ "./src/components/modals/MenuModal.jsx");
/* harmony import */ var _components_functions_Notice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/functions/Notice */ "./src/components/functions/Notice.jsx");
/* harmony import */ var _components_layout_BottomNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout/BottomNav */ "./src/components/layout/BottomNav.jsx");
var _this = undefined,
    _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

 // Component







 // // Next
// import { NextPage } from 'next';

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuModal = _useState[0],
      setMenuModal = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    switchMenuModal: function switchMenuModal() {
      return setMenuModal(!menuModal);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), menuModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_modals_MenuModal__WEBPACK_IMPORTED_MODULE_5__["MenuModal"], {
    switchMenuModal: function switchMenuModal() {
      return setMenuModal(!menuModal);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  })) : null, __jsx(_components_functions_FrontLines__WEBPACK_IMPORTED_MODULE_2__["FrontLines"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx(_components_functions_Notice__WEBPACK_IMPORTED_MODULE_6__["Notice"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx(_components_containers_Explore__WEBPACK_IMPORTED_MODULE_3__["Explore"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx(_components_layout_NewFooter__WEBPACK_IMPORTED_MODULE_4__["NewFooter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(_components_layout_BottomNav__WEBPACK_IMPORTED_MODULE_7__["BottomNav"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.a11c52ef6f184e5c7a1b.hot-update.js.map