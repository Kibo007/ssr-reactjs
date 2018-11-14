exports.id = "main";
exports.modules = {

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/store/configureStore */ "./src/common/store/configureStore.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/helpers */ "./src/common/helpers/index.js");
/* harmony import */ var _common_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/routes */ "./src/common/routes/index.js");

var _jsxFileName = '/Users/nenjotsu/Documents/github/ssr-reactjs/src/server/index.js';


// import App from '../common/containers/App';


// import LocaleProvider from 'antd/lib/locale-provider';
// import enUS from 'antd/lib/locale-provider/en_US';


// import { fetchCounter } from '../common/api/counter';
// import qs from 'qs';






var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");
var server = express__WEBPACK_IMPORTED_MODULE_6___default()();

server.disable('x-powered-by').use(compression__WEBPACK_IMPORTED_MODULE_1___default()()).use(express__WEBPACK_IMPORTED_MODULE_6___default.a.static("/Users/nenjotsu/Documents/github/ssr-reactjs/public")).get('/*', function (req, res) {
  Object(react_router__WEBPACK_IMPORTED_MODULE_2__["match"])({ routes: Object(_common_routes__WEBPACK_IMPORTED_MODULE_10__["default"])(), location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      var context = {};

      var preloadedState = Object(_common_helpers__WEBPACK_IMPORTED_MODULE_9__["loadStateFromSessionStorage"])();

      // Create a new Redux store instance
      var store = Object(_common_store_configureStore__WEBPACK_IMPORTED_MODULE_5__["default"])(preloadedState);
      var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_7__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"],
        { store: store, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["RouterContext"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, renderProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }))
      ));

      var finalState = store.getState();

      if (context.url) {
        res.redirect(context.url);
      } else {
        // Render the component to a string

        // Grab the initial state from our Redux store

        // store.subscribe(() => {
        //   debugger;
        //   saveStateToSessionStorage(finalState);
        // });

        res.send('<!doctype html>\n              <html lang="">\n              <head>\n                  <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n                  <meta charSet=\'utf-8\' />\n                  <title>Razzle Redux Example</title>\n                  <meta name="viewport" content="width=device-width, initial-scale=1">\n                  ' + (assets.client.css ? '<link rel="stylesheet" href="' + assets.client.css + '">' : '') + '\n                    ' + ( false ? undefined : '<script src="' + assets.client.js + '" defer crossorigin></script>') + '\n              </head>\n              <body>\n                  <div id="root">' + markup + '</div>\n                  <script>\n                    window.__PRELOADED_STATE__ = ' + serialize_javascript__WEBPACK_IMPORTED_MODULE_8___default()(finalState) + '\n                  </script>\n              </body>\n          </html>');
      }
    } else {
      res.status(404).send('Not found');
    }
  });
  // fetchCounter(apiResult => {
  //   // Read the counter from the request, if provided
  //   const params = qs.parse(req.query);
  //   const counter = parseInt(params.counter, 10) || apiResult || 0;

  // Compile an initial state
});

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=main.99c0ebdf52845ac0d7bb.hot-update.js.map