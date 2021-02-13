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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navlist__WEBPACK_IMPORTED_MODULE_5__["default"], {
            variant: variant
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
            collapse: isCollapse,
            onClick: collapse
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
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
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navlist__WEBPACK_IMPORTED_MODULE_5__["default"], {
            variant: variant
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
            collapse: isCollapse,
            onClick: collapse
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRlbnQvbW9kdWxlcy9OYXZiYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInZhcmlhbnQiLCJ1c2VDb250ZXh0IiwiTmF2Q29udGV4dCIsImlzQ29sbGFwc2UiLCJzZXRJc0NvbGxhcHNlIiwiY29sbGFwc2UiLCJwcmV2c3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sU0FBU0EsTUFBVCxPQUFrRDtBQUFBOztBQUFBLE1BQWhDQyxPQUFnQyxRQUFoQ0EsT0FBZ0M7O0FBQUEsb0JBQ2pCQyx3REFBVSxDQUFDQyw4REFBRCxDQURPO0FBQUEsTUFDL0NDLFVBRCtDLGVBQy9DQSxVQUQrQztBQUFBLE1BQ25DQyxhQURtQyxlQUNuQ0EsYUFEbUM7O0FBRXZELE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJELGlCQUFhLENBQUMsVUFBQ0UsU0FBRDtBQUFBLGFBQXdCLENBQUNBLFNBQXpCO0FBQUEsS0FBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxNQUFJTixPQUFPLEtBQUssUUFBaEIsRUFBMEI7QUFDeEIsd0JBQ0U7QUFBSyxlQUFTLGtCQUFXRyxVQUFVLElBQUksUUFBekIsQ0FBZDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxrQ0FDRSxxRUFBQyx3REFBRDtBQUFNLG1CQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUscUVBQUMsZ0RBQUQ7QUFBUyxtQkFBTyxFQUFFSDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0UscUVBQUMsd0RBQUQ7QUFBTSxvQkFBUSxFQUFFRyxVQUFoQjtBQUE0QixtQkFBTyxFQUFFRTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFZRCxHQWJELE1BYU87QUFDTCx3QkFDRTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGtDQUNFLHFFQUFDLHdEQUFEO0FBQU0sbUJBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRSxxRUFBQyxnREFBRDtBQUFTLG1CQUFPLEVBQUVMO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRSxxRUFBQyx3REFBRDtBQUFNLG9CQUFRLEVBQUVHLFVBQWhCO0FBQTRCLG1CQUFPLEVBQUVFO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQVdEO0FBQ0Y7O0dBaENlTixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDk3YTc0OWVhMTg2YjFhMTdkNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2Q29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L25hdmNvbnRleHRcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9nb1wiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZW51XCI7XHJcbmltcG9ydCBOYXZsaXN0IGZyb20gXCIuLi9uYXZsaXN0XCI7XHJcbmltcG9ydCB7IFByb3BzIH0gZnJvbSBcIi4vUHJvcHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZiYXIoeyB2YXJpYW50IH06IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICBjb25zdCB7IGlzQ29sbGFwc2UsIHNldElzQ29sbGFwc2UgfSA9IHVzZUNvbnRleHQoTmF2Q29udGV4dCk7XHJcbiAgY29uc3QgY29sbGFwc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0NvbGxhcHNlKChwcmV2c3RhdGU6IGJvb2xlYW4pID0+ICFwcmV2c3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIGlmICh2YXJpYW50ID09PSBcIm1vYmlsZVwiKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG0tbmF2ICR7aXNDb2xsYXBzZSAmJiAnYWN0aXZlJ31gfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLW5hdl9fYmFyXCI+XHJcbiAgICAgICAgICAgIDxMb2dvIHZhcmlhbnQ9XCJtZWRpdW1cIiAvPlxyXG4gICAgICAgICAgICA8TmF2bGlzdCB2YXJpYW50PXt2YXJpYW50fSAvPlxyXG4gICAgICAgICAgICA8TWVudSBjb2xsYXBzZT17aXNDb2xsYXBzZX0gb25DbGljaz17Y29sbGFwc2V9IC8+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5hdlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbmF2X19iYXJcIj5cclxuICAgICAgICAgICAgPExvZ28gdmFyaWFudD1cInNtYWxsXCIgLz5cclxuICAgICAgICAgICAgPE5hdmxpc3QgdmFyaWFudD17dmFyaWFudH0gLz5cclxuICAgICAgICAgICAgPE1lbnUgY29sbGFwc2U9e2lzQ29sbGFwc2V9IG9uQ2xpY2s9e2NvbGxhcHNlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==