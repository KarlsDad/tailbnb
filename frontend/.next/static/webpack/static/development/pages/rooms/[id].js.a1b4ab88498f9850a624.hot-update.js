webpackHotUpdate("static/development/pages/rooms/[id].js",{

/***/ "./src/pages/rooms/[id].js":
/*!*********************************!*\
  !*** ./src/pages/rooms/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/ExploreHeader */ "./src/components/layout/ExploreHeader.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");





const staydata = apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]`
  query getStay($id: ID!) {
    stay(id: $id) {
      title
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const {
    load,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(staydata, {
    variables: {
      id: 'ck6fjkv43site0b09wrzyhq4c'
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_ExploreHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-screen bg-blue"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, data.stay.title));
});

/***/ })

})
//# sourceMappingURL=[id].js.a1b4ab88498f9850a624.hot-update.js.map