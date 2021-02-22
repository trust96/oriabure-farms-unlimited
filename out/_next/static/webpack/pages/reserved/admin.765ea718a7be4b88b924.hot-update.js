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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "accordion__icons",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "accordion__icon",
          variant: "outline",
          size: "sm",
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaDownload"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "accordion__icon",
          variant: "outline-danger",
          size: "sm",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaRegTrashAlt"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "accordion__icon",
          variant: "primary",
          size: "sm",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaPlus"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRlbnQvbW9kdWxlcy9hY2NvcmRpb24vYWNjb3JkaW9uLnRzeCJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJhdWRpb1VybCIsInBpY3R1cmVVcmwiLCJ0ZXh0IiwidmlkZW9VcmwiLCJ1c2VTdGF0ZSIsImlzQ29sbGFwc2UiLCJzZXRJc0NvbGxhcHNlIiwiY29sbGFwc2UiLCJwcmV2U3RhdGUiLCJteURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFTQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFxRDtBQUFBOztBQUFBLE1BQWxEQyxRQUFrRCxRQUFsREEsUUFBa0Q7QUFBQSxNQUF4Q0MsVUFBd0MsUUFBeENBLFVBQXdDO0FBQUEsTUFBNUJDLElBQTRCLFFBQTVCQSxJQUE0QjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7O0FBQUEsa0JBQ2pDQyxzREFBUSxDQUFDLElBQUQsQ0FEeUI7QUFBQSxNQUM5REMsVUFEOEQ7QUFBQSxNQUNsREMsYUFEa0Q7O0FBR3JFLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJELGlCQUFhLENBQUMsVUFBQ0UsU0FBRDtBQUFBLGFBQWUsQ0FBQ0EsU0FBaEI7QUFBQSxLQUFELENBQWI7QUFDRCxHQUZEOztBQUdBLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxJQUFKLEdBQVdDLGtCQUFYLEVBQWY7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBbUMsYUFBTyxFQUFFSixRQUE1QztBQUFBLDhCQUNFLHFFQUFDLHlFQUFEO0FBQVksV0FBRyxFQUFDLE1BQWhCO0FBQXVCLGVBQU8sRUFBQyxNQUEvQjtBQUFzQyxZQUFJLEVBQUMsT0FBM0M7QUFBQSxrQkFDR0U7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSxxRUFBQyx5RUFBRDtBQUFZLFdBQUcsRUFBQyxNQUFoQjtBQUF1QixlQUFPLEVBQUMsTUFBL0I7QUFBc0MsWUFBSSxFQUFDLE9BQTNDO0FBQUEsaURBQ2U7QUFBQSxvQkFBUztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFTRTtBQUFLLGVBQVMsK0JBQXdCSixVQUFVLEdBQUcsRUFBSCxHQUFRLFFBQTFDLENBQWQ7QUFBQSw4QkFDRSxxRUFBQyx5RUFBRDtBQUNFLGlCQUFTLEVBQUMsaUJBRFo7QUFFRSxXQUFHLEVBQUMsR0FGTjtBQUdFLGVBQU8sRUFBQyxNQUhWO0FBSUUsWUFBSSxFQUFDLE9BSlA7QUFBQSxtQkFNR0gsSUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWNFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLGdDQUNFLHFFQUFDLGlFQUFEO0FBQVEsbUJBQVMsRUFBQyxpQkFBbEI7QUFBb0MsaUJBQU8sRUFBQyxTQUE1QztBQUFzRCxjQUFJLEVBQUMsSUFBM0Q7QUFBQSxxQkFDRyxHQURILGVBRUUscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRSxxRUFBQyxpRUFBRDtBQUNFLG1CQUFTLEVBQUMsaUJBRFo7QUFFRSxpQkFBTyxFQUFDLGdCQUZWO0FBR0UsY0FBSSxFQUFDLElBSFA7QUFBQSxpQ0FLRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQWFFLHFFQUFDLGlFQUFEO0FBQVEsbUJBQVMsRUFBQyxpQkFBbEI7QUFBb0MsaUJBQU8sRUFBQyxTQUE1QztBQUFzRCxjQUFJLEVBQUMsSUFBM0Q7QUFBQSxpQ0FDRSxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRDRCxDQW5ERDs7R0FBTUgsUzs7S0FBQUEsUztBQXFEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2ZWQvYWRtaW4uNzY1ZWE3MThhN2JlNGI4OGI5MjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGYURvd25sb2FkLCBGYVBsdXMsIEZhUmVnVHJhc2hBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9idXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lbnUvTWVudVwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90eXBvZ3JhcGh5L1R5cG9ncmFwaHlcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgdGV4dD86IHN0cmluZztcclxuICB2aWRlb1VybD86IHN0cmluZztcclxuICBhdWRpb1VybD86IHN0cmluZztcclxuICBwaWN0dXJlVXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBBY2NvcmRpb24gPSAoeyBhdWRpb1VybCwgcGljdHVyZVVybCwgdGV4dCwgdmlkZW9VcmwgfTogUHJvcHMpID0+IHtcclxuICBjb25zdCBbaXNDb2xsYXBzZSwgc2V0SXNDb2xsYXBzZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgY29sbGFwc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0NvbGxhcHNlKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG4gIH07XHJcbiAgY29uc3QgbXlEYXRlID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb25cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb25fX2J1dHRvblwiIG9uQ2xpY2s9e2NvbGxhcHNlfT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB0YWc9XCJzcGFuXCIgdmFyaWFudD1cInBhcmFcIiBwYXJhPVwiYm9keTFcIj5cclxuICAgICAgICAgIHtteURhdGV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHRhZz1cInNwYW5cIiB2YXJpYW50PVwicGFyYVwiIHBhcmE9XCJib2R5MVwiPlxyXG4gICAgICAgICAgc3VibWl0ZWQgYnk6IDxzdHJvbmc+e1widHJ1c3RcIn08L3N0cm9uZz5cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGFjY29yZGlvbl9fY29udGVudCAke2lzQ29sbGFwc2UgPyBcIlwiIDogXCJhY3RpdmVcIn1gfT5cclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX19pdGVtXCJcclxuICAgICAgICAgIHRhZz1cInBcIlxyXG4gICAgICAgICAgdmFyaWFudD1cInBhcmFcIlxyXG4gICAgICAgICAgcGFyYT1cImJvZHkxXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGV4dH0gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgIEFjY3VzYW50aXVtIGN1bHBhLCB0ZW1wb3JpYnVzIHF1aWEgZG9sb3JlbSB2b2x1cHRhdHVtIG1haW9yZXMgZXhwZWRpdGFcclxuICAgICAgICAgIG9iY2FlY2F0aSBmdWdpYXQhIFJlbSwgYWRpcGlzY2kuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XHJcbiAgICAgICAgICBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gVmVsaXQgcXVhZSBlbmltIGV4cGxpY2FibyBlcnJvclxyXG4gICAgICAgICAgY3VwaWRpdGF0ZSBxdW8gdm9sdXB0YXRlIHF1b2QgdW5kZSBudW1xdWFtLCBxdWlhIHF1aXNxdWFtIHRlbXBvcmEuIEhpY1xyXG4gICAgICAgICAgbW9sbGl0aWEgZmFjaWxpcyBvZmZpY2lhIGlwc2FtIG9wdGlvIGRlYml0aXMgbWF4aW1lLlxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbl9faWNvbnNcIj5cclxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYWNjb3JkaW9uX19pY29uXCIgdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwic21cIj5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8RmFEb3dubG9hZCAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9faWNvblwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGYVJlZ1RyYXNoQWx0IC8+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImFjY29yZGlvbl9faWNvblwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgIDxGYVBsdXMgLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=