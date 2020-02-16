webpackHotUpdate("static/development/pages/rooms/[id].js",{

/***/ "./src/components/presentational/StayDescription.js":
/*!**********************************************************!*\
  !*** ./src/components/presentational/StayDescription.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (({
  description,
  space,
  access,
  note
}) => {
  const [display, setDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const renderDescription = description => {
    const wordArray = description.split(' ');

    if (wordArray.length < 50) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-gray-750"
      }, "description");
    } else {
      const wordArray = description.split(' ');
      const newArray = [];

      for (let i = 0; i < 50; i++) {
        newArray.push(wordArray[i]);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "text-gray-750"
      }, `${newArray.join(' ')}...`, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: () => setDisplay(true),
        style: {
          fontFamily: 'airbnb-book'
        },
        className: "hover:border-green-850 border-b text-green-850 border-transparent",
        href: "/#"
      }, "Read More")));
    }
  };

  renderDescription(description);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, display ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750"
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "mb-3"
  }, "The space"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750"
  }, space)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "mb-3"
  }, "Guest access"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750"
  }, access)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      fontFamily: 'airbnb-medium'
    },
    className: "mb-3"
  }, "Other things to note"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750"
  }, note))) : null);
});

/***/ })

})
//# sourceMappingURL=[id].js.27e36327863562ad7dc7.hot-update.js.map