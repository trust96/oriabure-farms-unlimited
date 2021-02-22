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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaPlus"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRlbnQvbW9kdWxlcy9hY2NvcmRpb24vYWNjb3JkaW9uLnRzeCJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJhdWRpb1VybCIsInBpY3R1cmVVcmwiLCJ0ZXh0IiwidmlkZW9VcmwiLCJ1c2VTdGF0ZSIsImlzQ29sbGFwc2UiLCJzZXRJc0NvbGxhcHNlIiwiY29sbGFwc2UiLCJwcmV2U3RhdGUiLCJteURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFTQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFxRDtBQUFBOztBQUFBLE1BQWxEQyxRQUFrRCxRQUFsREEsUUFBa0Q7QUFBQSxNQUF4Q0MsVUFBd0MsUUFBeENBLFVBQXdDO0FBQUEsTUFBNUJDLElBQTRCLFFBQTVCQSxJQUE0QjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7O0FBQUEsa0JBQ2pDQyxzREFBUSxDQUFDLElBQUQsQ0FEeUI7QUFBQSxNQUM5REMsVUFEOEQ7QUFBQSxNQUNsREMsYUFEa0Q7O0FBR3JFLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJELGlCQUFhLENBQUMsVUFBQ0UsU0FBRDtBQUFBLGFBQWUsQ0FBQ0EsU0FBaEI7QUFBQSxLQUFELENBQWI7QUFDRCxHQUZEOztBQUdBLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxJQUFKLEdBQVdDLGtCQUFYLEVBQWY7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBbUMsYUFBTyxFQUFFSixRQUE1QztBQUFBLDhCQUNFLHFFQUFDLHlFQUFEO0FBQVksV0FBRyxFQUFDLE1BQWhCO0FBQXVCLGVBQU8sRUFBQyxNQUEvQjtBQUFzQyxZQUFJLEVBQUMsT0FBM0M7QUFBQSxrQkFDR0U7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSxxRUFBQyx5RUFBRDtBQUFZLFdBQUcsRUFBQyxNQUFoQjtBQUF1QixlQUFPLEVBQUMsTUFBL0I7QUFBc0MsWUFBSSxFQUFDLE9BQTNDO0FBQUEsaURBQ2U7QUFBQSxvQkFBUztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFTRTtBQUFLLGVBQVMsK0JBQXdCSixVQUFVLEdBQUcsRUFBSCxHQUFRLFFBQTFDLENBQWQ7QUFBQSw4QkFDRSxxRUFBQyx5RUFBRDtBQUNFLGlCQUFTLEVBQUMsaUJBRFo7QUFFRSxXQUFHLEVBQUMsR0FGTjtBQUdFLGVBQU8sRUFBQyxNQUhWO0FBSUUsWUFBSSxFQUFDLE9BSlA7QUFBQSxtQkFNR0gsSUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWNFLHFFQUFDLGlFQUFEO0FBQVEsZUFBTyxFQUFDLFNBQWhCO0FBQTBCLFlBQUksRUFBQyxJQUEvQjtBQUFBLG1CQUNHLEdBREgsZUFFRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGLGVBa0JFLHFFQUFDLGlFQUFEO0FBQVEsZUFBTyxFQUFDLFFBQWhCO0FBQXlCLFlBQUksRUFBQyxJQUE5QjtBQUFBLCtCQUNFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEJGLGVBc0JFLHFFQUFDLGlFQUFEO0FBQVEsZUFBTyxFQUFDLFNBQWhCO0FBQTBCLFlBQUksRUFBQyxJQUEvQjtBQUFBLCtCQUNFLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0NELENBN0NEOztHQUFNSCxTOztLQUFBQSxTO0FBK0NTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNlcnZlZC9hZG1pbi5lZGMxNzRkZTc1M2I4MmNlMWRhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZhRG93bmxvYWQsIEZhUGx1cywgRmFSZWdUcmFzaEFsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVudS9NZW51XCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3R5cG9ncmFwaHkvVHlwb2dyYXBoeVwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0ZXh0Pzogc3RyaW5nO1xyXG4gIHZpZGVvVXJsPzogc3RyaW5nO1xyXG4gIGF1ZGlvVXJsPzogc3RyaW5nO1xyXG4gIHBpY3R1cmVVcmw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEFjY29yZGlvbiA9ICh7IGF1ZGlvVXJsLCBwaWN0dXJlVXJsLCB0ZXh0LCB2aWRlb1VybCB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtpc0NvbGxhcHNlLCBzZXRJc0NvbGxhcHNlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBjb2xsYXBzZSA9ICgpID0+IHtcclxuICAgIHNldElzQ29sbGFwc2UoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XHJcbiAgfTtcclxuICBjb25zdCBteURhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbl9fYnV0dG9uXCIgb25DbGljaz17Y29sbGFwc2V9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHRhZz1cInNwYW5cIiB2YXJpYW50PVwicGFyYVwiIHBhcmE9XCJib2R5MVwiPlxyXG4gICAgICAgICAge215RGF0ZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdGFnPVwic3BhblwiIHZhcmlhbnQ9XCJwYXJhXCIgcGFyYT1cImJvZHkxXCI+XHJcbiAgICAgICAgICBzdWJtaXRlZCBieTogPHN0cm9uZz57XCJ0cnVzdFwifTwvc3Ryb25nPlxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWNjb3JkaW9uX19jb250ZW50ICR7aXNDb2xsYXBzZSA/IFwiXCIgOiBcImFjdGl2ZVwifWB9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb25fX2l0ZW1cIlxyXG4gICAgICAgICAgdGFnPVwicFwiXHJcbiAgICAgICAgICB2YXJpYW50PVwicGFyYVwiXHJcbiAgICAgICAgICBwYXJhPVwiYm9keTFcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0ZXh0fSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgQWNjdXNhbnRpdW0gY3VscGEsIHRlbXBvcmlidXMgcXVpYSBkb2xvcmVtIHZvbHVwdGF0dW0gbWFpb3JlcyBleHBlZGl0YVxyXG4gICAgICAgICAgb2JjYWVjYXRpIGZ1Z2lhdCEgUmVtLCBhZGlwaXNjaS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcclxuICAgICAgICAgIGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBWZWxpdCBxdWFlIGVuaW0gZXhwbGljYWJvIGVycm9yXHJcbiAgICAgICAgICBjdXBpZGl0YXRlIHF1byB2b2x1cHRhdGUgcXVvZCB1bmRlIG51bXF1YW0sIHF1aWEgcXVpc3F1YW0gdGVtcG9yYS4gSGljXHJcbiAgICAgICAgICBtb2xsaXRpYSBmYWNpbGlzIG9mZmljaWEgaXBzYW0gb3B0aW8gZGViaXRpcyBtYXhpbWUuXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwic21cIj5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDxGYURvd25sb2FkIC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICA8RmFSZWdUcmFzaEFsdCAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICA8RmFQbHVzIC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==