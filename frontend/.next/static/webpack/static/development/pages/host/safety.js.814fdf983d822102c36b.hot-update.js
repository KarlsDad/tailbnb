webpackHotUpdate("static/development/pages/host/safety.js",{

/***/ "./src/components/hostsafety/functions/HostConfidenceCard.jsx":
/*!********************************************************************!*\
  !*** ./src/components/hostsafety/functions/HostConfidenceCard.jsx ***!
  \********************************************************************/
/*! exports provided: HostConfidenceCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostConfidenceCard", function() { return HostConfidenceCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Desktop/nextbnb/frontend/src/components/hostsafety/functions/HostConfidenceCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var renderIcon = function renderIcon(icon) {
  switch (icon) {
    case 'protection':
      return __jsx("div", {
        className: "w-12 h-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, __jsx("svg", {
        viewBox: "0 0 48 48",
        className: "w-full h-full",
        style: {
          fill: '#FF5A5F'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, __jsx("path", {
        d: "M9,42 C9,42.5527344 8.5522461,43 8,43 L7,43 L7,44 C7,44.5527344 6.5522461,45 6,45 C5.4477539,45 5,44.5527344 5,44 L5,43 L4,43 C3.4477539,43 3,42.5527344 3,42 C3,41.4472656 3.4477539,41 4,41 L5,41 L5,40 C5,39.4472656 5.4477539,39 6,39 C6.5522461,39 7,39.4472656 7,40 L7,41 L8,41 C8.5522461,41 9,41.4472656 9,42 Z M12,47 C12.5522804,47 13,46.5522842 13,46 C13,45.4477158 12.5522804,45 12,45 C11.4477196,45 11,45.4477158 11,46 C11,46.5522842 11.4477196,47 12,47 Z M44,5 L43,5 L43,4 C43,3.4477539 42.5527344,3 42,3 C41.4472656,3 41,3.4477539 41,4 L41,5 L40,5 C39.4472656,5 39,5.4477539 39,6 C39,6.5522461 39.4472656,7 40,7 L41,7 L41,8 C41,8.5522461 41.4472656,9 42,9 C42.5527344,9 43,8.5522461 43,8 L43,7 L44,7 C44.5527344,7 45,6.5522461 45,6 C45,5.4477539 44.5527344,5 44,5 Z M39.4555092,15.3392181 C39.4004097,15.0270004 39.1509018,14.7855415 38.83704,14.7406997 C34.0175782,14.0522117 28.2416096,11.2711906 25.3185406,8.3481216 C24.8565693,7.8861504 24,8.3466682 24,9 L24.0666695,41 C24.0666695,41.5630684 24.8229103,42.1706619 25.3185406,41.953125 C35.1391602,37.6428223 41.589489,27.4317608 39.4555092,15.3392181 Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), __jsx("path", {
        style: {
          fill: '#FFFFFF'
        },
        d: "M24,13.5 L33,21 L33,26 C33,30.30476 33,32.7142906 33,33.228569 C33,33.7428589 32.6666718,34 32,34 C22,34 16.6666698,34 16,34 C15.3333302,34 15,33.7428589 15,33.228569 L15,21 L24,13.5 Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), __jsx("path", {
        style: {
          fill: '#484848'
        },
        d: "M24,47 C23.8671875,47 23.7338867,46.9736328 23.6088867,46.9199219 C8.1191406,40.3398438 1.8642578,28.6962891 5.0180664,12.3110352 C5.0996094,11.8881836 5.4423828,11.5649414 5.8696289,11.5087891 C13.175293,10.5473633 19.015625,7.4707031 23.2285156,2.3637695 C23.6083984,1.902832 24.3916015,1.902832 24.7714844,2.3637695 C28.984375,7.4707031 34.8251953,10.5473633 42.1308594,11.508789 C42.5576172,11.5649413 42.9003906,11.8881835 42.9824219,12.3110351 C46.1357422,28.696289 39.8798828,40.3398437 24.3911133,46.9199218 C24.2661133,46.9736328 24.1328125,47 24,47 Z M6.8525391,13.3891602 C4.1875,28.4189453 9.8022461,38.7382812 24,44.9111328 C38.1972656,38.7382812 43.8125,28.4189453 41.1474609,13.3891601 C34.0878906,12.3193359 28.328125,9.34375 24,4.5317383 C19.6728516,9.34375 13.9125977,12.3193359 6.8525391,13.3891602 Z M36.1367188,22.2290039 L31,17.9856567 L31,14.5 C31,13.9477539 30.5527344,13.5 30,13.5 C29.4472656,13.5 29,13.9477539 29,14.5 L29,16.3334351 L24.6367188,12.7290039 C24.2675782,12.4233398 23.7324219,12.4233398 23.3632813,12.7290039 L11.8632813,22.2290039 C11.4375001,22.5805664 11.3774415,23.2109375 11.729004,23.6367187 C12.0810548,24.0639648 12.7119142,24.1235351 13.1367188,23.770996 L14,23.0578613 L14,33.5 C14,34.3271484 14.6728516,35 15.5,35 L32.5,35 C33.3271484,35 34,34.3271484 34,33.5 L34,23.0578613 L34.8632812,23.7709961 C35.0498047,23.9248047 35.2753906,24 35.4990234,24 C35.7871093,24 36.0732422,23.8764648 36.2705078,23.6367188 C36.6230469,23.2109375 36.5625,22.5805664 36.1367188,22.2290039 Z M32,33 L28,33 L28,29 C28,27.8953857 27.1045532,27 26,27 C24.8954468,27 24,27.8953857 24,29 L24,33 L16,33 L16,21.4056396 L24,14.796875 L32,21.4056396 L32,33 Z M20.5,25 C21.3284302,25 22,24.3284302 22,23.5 C22,22.6715698 21.3284302,22 20.5,22 C19.6715698,22 19,22.6715698 19,23.5 C19,24.3284302 19.6715698,25 20.5,25 Z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      })));

    case 'insurance':
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "insurance");
  }
};

var HostConfidenceCard = function HostConfidenceCard(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      description = _ref.description;
  return __jsx("div", {
    className: "w-full lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "w-90p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, renderIcon(icon)), __jsx("div", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h3", {
    style: {
      fontFamily: 'airbnb-bold'
    },
    className: "leading-8 text-gray-750 text-2xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, title)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "text-gray-750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, description)), __jsx("div", {
    style: {
      fontFamily: 'airbnb-book'
    },
    className: "my-6 text-green-850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Learn more about Airbnb's Host Guarantee"))));
};

/***/ })

})
//# sourceMappingURL=safety.js.814fdf983d822102c36b.hot-update.js.map