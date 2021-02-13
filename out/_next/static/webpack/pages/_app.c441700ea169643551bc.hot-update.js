webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/content/modules/Navbar/index.tsx":
/*!**********************************************!*\
  !*** ./src/content/modules/Navbar/index.tsx ***!
  \**********************************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_navcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/navcontext */ "./src/context/navcontext.tsx");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Logo */ "./src/content/components/Logo/index.tsx");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Menu */ "./src/content/components/Menu/index.tsx");
/* harmony import */ var _navlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navlist */ "./src/content/modules/navlist/index.tsx");


var _jsxFileName = "C:\\Users\\trust\\myFlow\\activity\\project\\Current\\oriabure-farms-unlimited\\src\\content\\modules\\Navbar\\index.tsx",
    _s = $RefreshSig$();






function Navbar(_ref) {
  _s();

  var variant = _ref.variant;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_navcontext__WEBPACK_IMPORTED_MODULE_2__["NavContext"]),
      isCollapse = _useContext.isCollapse,
      setIsCollapse = _useContext.setIsCollapse;

  var collapse = function collapse() {
    setIsCollapse(function (prevstate) {
      return !prevstate;
    });
  };

  if (variant === "mobile") {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "m-nav ".concat(isCollapse && 'active'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "m-nav__bar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
            variant: "medium"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "m-menu",
            collapse: isCollapse,
            onClick: collapse
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navlist__WEBPACK_IMPORTED_MODULE_5__["default"], {
            variant: variant
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "d-nav",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-nav__bar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
            variant: "small"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navlist__WEBPACK_IMPORTED_MODULE_5__["default"], {
            variant: variant
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
            collapse: isCollapse,
            onClick: collapse
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this);
  }
}

_s(Navbar, "mkofOzRVpOyVthUMK2wupFLgTIc=");

_c = Navbar;

var _c;

$RefreshReg$(_c, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRlbnQvbW9kdWxlcy9OYXZiYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInZhcmlhbnQiLCJ1c2VDb250ZXh0IiwiTmF2Q29udGV4dCIsImlzQ29sbGFwc2UiLCJzZXRJc0NvbGxhcHNlIiwiY29sbGFwc2UiLCJwcmV2c3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sU0FBU0EsTUFBVCxPQUFrRDtBQUFBOztBQUFBLE1BQWhDQyxPQUFnQyxRQUFoQ0EsT0FBZ0M7O0FBQUEsb0JBQ2pCQyx3REFBVSxDQUFDQyw4REFBRCxDQURPO0FBQUEsTUFDL0NDLFVBRCtDLGVBQy9DQSxVQUQrQztBQUFBLE1BQ25DQyxhQURtQyxlQUNuQ0EsYUFEbUM7O0FBRXZELE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJELGlCQUFhLENBQUMsVUFBQ0UsU0FBRDtBQUFBLGFBQXdCLENBQUNBLFNBQXpCO0FBQUEsS0FBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxNQUFJTixPQUFPLEtBQUssUUFBaEIsRUFBMEI7QUFDeEIsd0JBQ0U7QUFBSyxlQUFTLGtCQUFXRyxVQUFVLElBQUksUUFBekIsQ0FBZDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxrQ0FDRSxxRUFBQyx3REFBRDtBQUFNLG1CQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUscUVBQUMsd0RBQUQ7QUFBTSxxQkFBUyxFQUFDLFFBQWhCO0FBQXlCLG9CQUFRLEVBQUVBLFVBQW5DO0FBQStDLG1CQUFPLEVBQUVFO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFJRSxxRUFBQyxnREFBRDtBQUFTLG1CQUFPLEVBQUVMO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQWFELEdBZEQsTUFjTztBQUNMLHdCQUNFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0UscUVBQUMsd0RBQUQ7QUFBTSxtQkFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLHFFQUFDLGdEQUFEO0FBQVMsbUJBQU8sRUFBRUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFLHFFQUFDLHdEQUFEO0FBQU0sb0JBQVEsRUFBRUcsVUFBaEI7QUFBNEIsbUJBQU8sRUFBRUU7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBV0Q7QUFDRjs7R0FqQ2VOLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jNDQxNzAwZWExNjk2NDM1NTFiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvbmF2Y29udGV4dFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2dvXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lbnVcIjtcclxuaW1wb3J0IE5hdmxpc3QgZnJvbSBcIi4uL25hdmxpc3RcIjtcclxuaW1wb3J0IHsgUHJvcHMgfSBmcm9tIFwiLi9Qcm9wc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdmJhcih7IHZhcmlhbnQgfTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IHsgaXNDb2xsYXBzZSwgc2V0SXNDb2xsYXBzZSB9ID0gdXNlQ29udGV4dChOYXZDb250ZXh0KTtcclxuICBjb25zdCBjb2xsYXBzZSA9ICgpID0+IHtcclxuICAgIHNldElzQ29sbGFwc2UoKHByZXZzdGF0ZTogYm9vbGVhbikgPT4gIXByZXZzdGF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHZhcmlhbnQgPT09IFwibW9iaWxlXCIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbS1uYXYgJHtpc0NvbGxhcHNlICYmICdhY3RpdmUnfWB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tbmF2X19iYXJcIj5cclxuICAgICAgICAgICAgPExvZ28gdmFyaWFudD1cIm1lZGl1bVwiIC8+XHJcbiAgICAgICAgICAgIDxNZW51IGNsYXNzTmFtZT1cIm0tbWVudVwiIGNvbGxhcHNlPXtpc0NvbGxhcHNlfSBvbkNsaWNrPXtjb2xsYXBzZX0gLz5cclxuXHJcbiAgICAgICAgICAgIDxOYXZsaXN0IHZhcmlhbnQ9e3ZhcmlhbnR9IC8+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5hdlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbmF2X19iYXJcIj5cclxuICAgICAgICAgICAgPExvZ28gdmFyaWFudD1cInNtYWxsXCIgLz5cclxuICAgICAgICAgICAgPE5hdmxpc3QgdmFyaWFudD17dmFyaWFudH0gLz5cclxuICAgICAgICAgICAgPE1lbnUgY29sbGFwc2U9e2lzQ29sbGFwc2V9IG9uQ2xpY2s9e2NvbGxhcHNlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==