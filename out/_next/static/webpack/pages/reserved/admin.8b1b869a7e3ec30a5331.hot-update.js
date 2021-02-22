webpackHotUpdate_N_E("pages/reserved/admin",{

/***/ "./src/content/modules/accordion/accordion.tsx":
/*!*****************************************************!*\
  !*** ./src/content/modules/accordion/accordion.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/button/Button */ "./src/content/components/button/Button.tsx");
/* harmony import */ var _components_typography_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/typography/Typography */ "./src/content/components/typography/Typography.tsx");


var _jsxFileName = "C:\\Users\\trust\\myFlow\\activity\\project\\Current\\oriabure-farms-unlimited\\src\\content\\modules\\accordion\\accordion.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Accordion = function Accordion(_ref) {
  _s();

  var audioUrl = _ref.audioUrl,
      pictureUrl = _ref.pictureUrl,
      text = _ref.text,
      videoUrl = _ref.videoUrl;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isCollapse = _useState[0],
      setIsCollapse = _useState[1];

  var collapse = function collapse() {
    setIsCollapse(function (prevState) {
      return !prevState;
    });
  };

  var myDate = new Date().toLocaleDateString();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "accordion",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "accordion__button",
      onClick: collapse,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_typography_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        tag: "span",
        variant: "para",
        para: "body1",
        children: myDate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_typography_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        tag: "span",
        variant: "para",
        para: "body1",
        children: ["submited by: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "trust"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 24
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "accordion__content ".concat(isCollapse ? "" : "active"),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_typography_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "accordion__item",
        tag: "p",
        variant: "para",
        para: "body1",
        children: [text, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa, temporibus quia dolorem voluptatum maiores expedita obcaecati fugiat! Rem, adipisci. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quae enim explicabo error cupiditate quo voluptate quod unde numquam, quia quisquam tempora. Hic mollitia facilis officia ipsam optio debitis maxime."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "outline",
        size: "sm",
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaDownload"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "danger",
        size: "sm",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaRegTrashAlt"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        variant: "outline",
        size: "sm",
        children: "label"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_s(Accordion, "KjJ35rrlU7lKNbn3fCNsbm0u97c=");

_c = Accordion;
/* harmony default export */ __webpack_exports__["default"] = (Accordion);

var _c;

$RefreshReg$(_c, "Accordion");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRlbnQvbW9kdWxlcy9hY2NvcmRpb24vYWNjb3JkaW9uLnRzeCJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJhdWRpb1VybCIsInBpY3R1cmVVcmwiLCJ0ZXh0IiwidmlkZW9VcmwiLCJ1c2VTdGF0ZSIsImlzQ29sbGFwc2UiLCJzZXRJc0NvbGxhcHNlIiwiY29sbGFwc2UiLCJwcmV2U3RhdGUiLCJteURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFTQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFxRDtBQUFBOztBQUFBLE1BQWxEQyxRQUFrRCxRQUFsREEsUUFBa0Q7QUFBQSxNQUF4Q0MsVUFBd0MsUUFBeENBLFVBQXdDO0FBQUEsTUFBNUJDLElBQTRCLFFBQTVCQSxJQUE0QjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7O0FBQUEsa0JBQ2pDQyxzREFBUSxDQUFDLElBQUQsQ0FEeUI7QUFBQSxNQUM5REMsVUFEOEQ7QUFBQSxNQUNsREMsYUFEa0Q7O0FBR3JFLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJELGlCQUFhLENBQUMsVUFBQ0UsU0FBRDtBQUFBLGFBQWUsQ0FBQ0EsU0FBaEI7QUFBQSxLQUFELENBQWI7QUFDRCxHQUZEOztBQUdBLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxJQUFKLEdBQVdDLGtCQUFYLEVBQWY7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBbUMsYUFBTyxFQUFFSixRQUE1QztBQUFBLDhCQUNFLHFFQUFDLHlFQUFEO0FBQVksV0FBRyxFQUFDLE1BQWhCO0FBQXVCLGVBQU8sRUFBQyxNQUEvQjtBQUFzQyxZQUFJLEVBQUMsT0FBM0M7QUFBQSxrQkFDR0U7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSxxRUFBQyx5RUFBRDtBQUFZLFdBQUcsRUFBQyxNQUFoQjtBQUF1QixlQUFPLEVBQUMsTUFBL0I7QUFBc0MsWUFBSSxFQUFDLE9BQTNDO0FBQUEsaURBQ2U7QUFBQSxvQkFBUztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFTRTtBQUFLLGVBQVMsK0JBQXdCSixVQUFVLEdBQUcsRUFBSCxHQUFRLFFBQTFDLENBQWQ7QUFBQSw4QkFDRSxxRUFBQyx5RUFBRDtBQUNFLGlCQUFTLEVBQUMsaUJBRFo7QUFFRSxXQUFHLEVBQUMsR0FGTjtBQUdFLGVBQU8sRUFBQyxNQUhWO0FBSUUsWUFBSSxFQUFDLE9BSlA7QUFBQSxtQkFNR0gsSUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWNFLHFFQUFDLGlFQUFEO0FBQVEsZUFBTyxFQUFDLFNBQWhCO0FBQTBCLFlBQUksRUFBQyxJQUEvQjtBQUFBLG1CQUNHLEdBREgsZUFFRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGLGVBa0JFLHFFQUFDLGlFQUFEO0FBQVEsZUFBTyxFQUFDLFFBQWhCO0FBQXlCLFlBQUksRUFBQyxJQUE5QjtBQUFBLCtCQUNFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEJGLGVBc0JFLHFFQUFDLGlFQUFEO0FBQVEsZUFBTyxFQUFDLFNBQWhCO0FBQTBCLFlBQUksRUFBQyxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNDRCxDQTdDRDs7R0FBTUgsUzs7S0FBQUEsUztBQStDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2ZWQvYWRtaW4uOGIxYjg2OWE3ZTNlYzMwYTUzMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGYURvd25sb2FkLCBGYVJlZ1RyYXNoQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZW51L01lbnVcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgdmlkZW9Vcmw/OiBzdHJpbmc7XHJcbiAgYXVkaW9Vcmw/OiBzdHJpbmc7XHJcbiAgcGljdHVyZVVybD86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQWNjb3JkaW9uID0gKHsgYXVkaW9VcmwsIHBpY3R1cmVVcmwsIHRleHQsIHZpZGVvVXJsIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2lzQ29sbGFwc2UsIHNldElzQ29sbGFwc2VdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGNvbGxhcHNlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNDb2xsYXBzZSgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcclxuICB9O1xyXG4gIGNvbnN0IG15RGF0ZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX19idXR0b25cIiBvbkNsaWNrPXtjb2xsYXBzZX0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdGFnPVwic3BhblwiIHZhcmlhbnQ9XCJwYXJhXCIgcGFyYT1cImJvZHkxXCI+XHJcbiAgICAgICAgICB7bXlEYXRlfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB0YWc9XCJzcGFuXCIgdmFyaWFudD1cInBhcmFcIiBwYXJhPVwiYm9keTFcIj5cclxuICAgICAgICAgIHN1Ym1pdGVkIGJ5OiA8c3Ryb25nPntcInRydXN0XCJ9PC9zdHJvbmc+XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BhY2NvcmRpb25fX2NvbnRlbnQgJHtpc0NvbGxhcHNlID8gXCJcIiA6IFwiYWN0aXZlXCJ9YH0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9faXRlbVwiXHJcbiAgICAgICAgICB0YWc9XCJwXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJwYXJhXCJcclxuICAgICAgICAgIHBhcmE9XCJib2R5MVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RleHR9IExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICBBY2N1c2FudGl1bSBjdWxwYSwgdGVtcG9yaWJ1cyBxdWlhIGRvbG9yZW0gdm9sdXB0YXR1bSBtYWlvcmVzIGV4cGVkaXRhXHJcbiAgICAgICAgICBvYmNhZWNhdGkgZnVnaWF0ISBSZW0sIGFkaXBpc2NpLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFxyXG4gICAgICAgICAgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIFZlbGl0IHF1YWUgZW5pbSBleHBsaWNhYm8gZXJyb3JcclxuICAgICAgICAgIGN1cGlkaXRhdGUgcXVvIHZvbHVwdGF0ZSBxdW9kIHVuZGUgbnVtcXVhbSwgcXVpYSBxdWlzcXVhbSB0ZW1wb3JhLiBIaWNcclxuICAgICAgICAgIG1vbGxpdGlhIGZhY2lsaXMgb2ZmaWNpYSBpcHNhbSBvcHRpbyBkZWJpdGlzIG1heGltZS5cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgPEZhRG93bmxvYWQgLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXJcIiBzaXplPVwic21cIj5cclxuICAgICAgICAgIDxGYVJlZ1RyYXNoQWx0IC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwic21cIj5cclxuICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==