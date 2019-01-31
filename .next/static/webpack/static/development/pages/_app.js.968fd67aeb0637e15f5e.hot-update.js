webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/withApollo.tsx":
/*!****************************!*\
  !*** ./lib/withApollo.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _initApollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initApollo */ "./lib/initApollo.ts");
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isBrowser */ "./lib/isBrowser.ts");
/* harmony import */ var _constants_frontEndConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/frontEndConstants */ "./constants/frontEndConstants.ts");

var _jsxFileName = "/Users/jasonjones/GitHubData/BenAwad/typescript-nextjs-graphql-series/lib/withApollo.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // isomorphic cookie parser used by App class 

function parseCookies(req) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return cookie__WEBPACK_IMPORTED_MODULE_1___default.a.parse(req ? req.headers.cookie || "" : document.cookie, options);
} // WithData is HOC wrapping App to provide 


/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithData, _React$Component);

    _createClass(WithData, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
          var Component, router, _ctx$ctx, req, res, apollo, appProps, apolloState;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  Component = ctx.Component, router = ctx.router, _ctx$ctx = ctx.ctx, req = _ctx$ctx.req, res = _ctx$ctx.res;
                  apollo = Object(_initApollo__WEBPACK_IMPORTED_MODULE_6__["default"])({}, {
                    getToken: function getToken() {
                      return parseCookies(req)["".concat(_constants_frontEndConstants__WEBPACK_IMPORTED_MODULE_8__["COOKIE_NAME"])];
                    } // [] in lieu of .name

                  });
                  ctx.ctx.apolloClient = apollo;
                  appProps = {};

                  if (!App.getInitialProps) {
                    _context.next = 8;
                    break;
                  }

                  _context.next = 7;
                  return App.getInitialProps(ctx);

                case 7:
                  appProps = _context.sent;

                case 8:
                  if (!(res && res.finished)) {
                    _context.next = 10;
                    break;
                  }

                  return _context.abrupt("return", {});

                case 10:
                  if (_isBrowser__WEBPACK_IMPORTED_MODULE_7__["isBrowser"]) {
                    _context.next = 20;
                    break;
                  }

                  _context.prev = 11;
                  _context.next = 14;
                  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_5__["getDataFromTree"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(App, _extends({}, appProps, {
                    Component: Component,
                    router: router,
                    apolloClient: apollo,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 56
                    },
                    __self: this
                  })));

                case 14:
                  _context.next = 19;
                  break;

                case 16:
                  _context.prev = 16;
                  _context.t0 = _context["catch"](11);
                  // Prevent Apollo Client GraphQL errors from crashing SSR.
                  // Handle them in components via the data.error prop:
                  // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                  console.error("Error while running `getDataFromTree`", _context.t0);

                case 19:
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  next_head__WEBPACK_IMPORTED_MODULE_2___default.a.rewind();

                case 20:
                  // Extract query data from the Apollo's store
                  apolloState = apollo.cache.extract();
                  return _context.abrupt("return", _objectSpread({}, appProps, {
                    apolloState: apolloState
                  }));

                case 22:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[11, 16]]);
        }));

        function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    // props could be anything
    function WithData(props) {
      var _this;

      _classCallCheck(this, WithData);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WithData).call(this, props)); // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline

      _this.apolloClient = Object(_initApollo__WEBPACK_IMPORTED_MODULE_6__["default"])(props.apolloState, {
        getToken: function getToken() {
          return parseCookies().token;
        }
      });
      return _this;
    }

    _createClass(WithData, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(App, _extends({}, this.props, {
          apolloClient: this.apolloClient,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }));
      }
    }]);

    return WithData;
  }(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component), _defineProperty(_class, "displayName", "WithData(".concat(App.displayName, ")")), _defineProperty(_class, "propTypes", {
    apolloState: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
  }), _temp;
});

/***/ })

})
//# sourceMappingURL=_app.js.968fd67aeb0637e15f5e.hot-update.js.map