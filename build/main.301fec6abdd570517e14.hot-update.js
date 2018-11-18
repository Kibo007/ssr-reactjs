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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loadable_webpack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loadable/webpack */ "react-loadable/webpack");
/* harmony import */ var react_loadable_webpack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loadable_webpack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _build_react_loadable_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../build/react-loadable.json */ "./build/react-loadable.json");
var _build_react_loadable_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/react-loadable.json */ "./build/react-loadable.json", 1);
/* harmony import */ var _common_store_configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/store/configureStore */ "./src/common/store/configureStore.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/helpers */ "./src/common/helpers/index.js");
/* harmony import */ var _common_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/routes */ "./src/common/routes/index.js");
var _jsxFileName = '/Users/nenjotsu/Documents/github/ssr-reactjs/src/server/index.js';








// import App from '../common/containers/App';

// import LocaleProvider from 'antd/lib/locale-provider';
// import enUS from 'antd/lib/locale-provider/en_US';


// import { fetchCounter } from '../common/api/counter';
// import qs from 'qs';






var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");
var server = express__WEBPACK_IMPORTED_MODULE_9___default()();

server.disable('x-powered-by').use(compression__WEBPACK_IMPORTED_MODULE_6___default()()).use(express__WEBPACK_IMPORTED_MODULE_9___default.a.static("/Users/nenjotsu/Documents/github/ssr-reactjs/public")).get('/*', function (req, res) {
  Object(react_router__WEBPACK_IMPORTED_MODULE_2__["match"])({ routes: Object(_common_routes__WEBPACK_IMPORTED_MODULE_13__["default"])(), location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var context = {};
      var modules = [];

      var preloadedState = Object(_common_helpers__WEBPACK_IMPORTED_MODULE_12__["loadStateFromSessionStorage"])();

      // Create a new Redux store instance
      var store = Object(_common_store_configureStore__WEBPACK_IMPORTED_MODULE_8__["default"])(preloadedState);
      var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_10__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"],
        { store: store, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_loadable__WEBPACK_IMPORTED_MODULE_3__["Capture"],
          { report: function report(moduleName) {
              return modules.push(moduleName);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"],
            { context: context, location: req.url, __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_routes__WEBPACK_IMPORTED_MODULE_13__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            })
          )
        )
      ));

      var finalState = store.getState();

      if (context.url) {
        res.redirect(context.url);
      } else {
        var bundles = Object(react_loadable_webpack__WEBPACK_IMPORTED_MODULE_4__["getBundles"])(_build_react_loadable_json__WEBPACK_IMPORTED_MODULE_7__, modules);
        var chunks = bundles.filter(function (bundle) {
          return bundle.file.endsWith('.js');
        });
        var styles = bundles.filter(function (bundle) {
          return bundle.file.endsWith('.css');
        });

        res.send('<!doctype html>\n              <html lang="en">\n              <head>\n                  <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n                  <meta charSet=\'utf-8\' />\n                  <title>Razzle Redux Example</title>\n                  <meta name="description" content="A page\'s description, \n  usually one or two sentences."/>\n                  <meta name="viewport" content="width=device-width, initial-scale=1">\n                   ' + (assets.client.css ? '<link rel="stylesheet" type="text/css" href="' + assets.client.css + '">' : '') + '\n                  ' + styles.map(function (style) {
          return '<link rel="stylesheet" type="text/css"s href="' + style.file + '">';
        }).join('\n') + '\n              </head>\n              <body>\n                <div id="root">' + markup + '</div>\n                <script>\n                  window.__PRELOADED_STATE__ = ' + serialize_javascript__WEBPACK_IMPORTED_MODULE_11___default()(finalState) + '\n                </script>\n                ' + ( false ? undefined : '<script src="' + assets.client.js + '" crossorigin></script>') + '\n                ' + chunks.map(function (chunk) {
          return  false ? undefined : '<script src="http://' + "localhost" + ':' + (parseInt("3000", 10) + 1) + '/' + chunk.file + '"></script>';
        }).join('\n') + '\n                <script>window.main();</script>\n              </body>\n          </html>');
      }
    } else {
      res.redirect('/404');
    }
  });
});

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=main.301fec6abdd570517e14.hot-update.js.map