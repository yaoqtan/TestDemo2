module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/signout.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apollo/client.js":
/*!**************************!*\
  !*** ./apollo/client.js ***!
  \**************************/
/*! exports provided: withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withApollo\", function() { return withApollo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-client */ \"apollo-client\");\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ \"apollo-cache-inmemory\");\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/qintao.yao/tman/TestDemo2/nextJS_project/next-create1/apollo/client.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nlet globalApolloClient = null;\n/**\n * Creates and provides the apolloContext\n * to a next.js PageTree. Use it by wrapping\n * your PageComponent via HOC pattern.\n * @param {Function|Class} PageComponent\n * @param {Object} [config]\n * @param {Boolean} [config.ssr=true]\n */\n\nfunction withApollo(PageComponent, {\n  ssr = true\n} = {}) {\n  const WithApollo = (_ref) => {\n    let {\n      apolloClient,\n      apolloState\n    } = _ref,\n        pageProps = _objectWithoutProperties(_ref, [\"apolloClient\", \"apolloState\"]);\n\n    const client = apolloClient || initApolloClient(undefined, apolloState);\n    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"ApolloProvider\"], {\n      client: client,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }\n    }, __jsx(PageComponent, _extends({}, pageProps, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }\n    })));\n  }; // Set the correct displayName in development\n\n\n  if (true) {\n    const displayName = PageComponent.displayName || PageComponent.name || 'Component';\n\n    if (displayName === 'App') {\n      console.warn('This withApollo HOC only works with PageComponents.');\n    }\n\n    WithApollo.displayName = `withApollo(${displayName})`;\n  }\n\n  if (ssr || PageComponent.getInitialProps) {\n    WithApollo.getInitialProps = async ctx => {\n      const {\n        AppTree\n      } = ctx; // Initialize ApolloClient, add it to the ctx object so\n      // we can use it in `PageComponent.getInitialProp`.\n\n      const apolloClient = ctx.apolloClient = initApolloClient({\n        res: ctx.res,\n        req: ctx.req\n      }); // Run wrapped getInitialProps methods\n\n      let pageProps = {};\n\n      if (PageComponent.getInitialProps) {\n        pageProps = await PageComponent.getInitialProps(ctx);\n      } // Only on the server:\n\n\n      if (true) {\n        // When redirecting, the response is finished.\n        // No point in continuing to render\n        if (ctx.res && ctx.res.finished) {\n          return pageProps;\n        } // Only if ssr is enabled\n\n\n        if (ssr) {\n          try {\n            // Run all GraphQL queries\n            const {\n              getDataFromTree\n            } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @apollo/react-ssr */ \"@apollo/react-ssr\", 7));\n            await getDataFromTree(__jsx(AppTree, {\n              pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {\n                apolloClient\n              }),\n              __self: this,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 15\n              }\n            }));\n          } catch (error) {\n            // Prevent Apollo Client GraphQL errors from crashing SSR.\n            // Handle them in components via the data.error prop:\n            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error\n            console.error('Error while running `getDataFromTree`', error);\n          } // getDataFromTree does not call componentWillUnmount\n          // head side effect therefore need to be cleared manually\n\n\n          next_head__WEBPACK_IMPORTED_MODULE_1___default.a.rewind();\n        }\n      } // Extract query data from the Apollo store\n\n\n      const apolloState = apolloClient.cache.extract();\n      return _objectSpread(_objectSpread({}, pageProps), {}, {\n        apolloState\n      });\n    };\n  }\n\n  return WithApollo;\n}\n/**\n * Always creates a new apollo client on the server\n * Creates or reuses apollo client in the browser.\n * @param  {Object} initialState\n */\n\nfunction initApolloClient(ctx, initialState) {\n  // Make sure to create a new client for every server-side request so that data\n  // isn't shared between connections (which would be bad)\n  if (true) {\n    return createApolloClient(ctx, initialState);\n  } // Reuse client on the client-side\n\n\n  if (!globalApolloClient) {\n    globalApolloClient = createApolloClient(ctx, initialState);\n  }\n\n  return globalApolloClient;\n}\n/**\n * Creates and configures the ApolloClient\n * @param  {Object} [initialState={}]\n */\n\n\nfunction createApolloClient(ctx = {}, initialState = {}) {\n  const ssrMode = true;\n  const cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__[\"InMemoryCache\"]().restore(initialState); // Check out https://github.com/vercel/next.js/pull/4611 if you want to use the AWSAppSyncClient\n\n  return new apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"ApolloClient\"]({\n    ssrMode,\n    link: createIsomorphLink(ctx),\n    cache\n  });\n}\n\nfunction createIsomorphLink(ctx) {\n  if (true) {\n    const {\n      SchemaLink\n    } = __webpack_require__(/*! apollo-link-schema */ \"apollo-link-schema\");\n\n    const {\n      schema\n    } = __webpack_require__(/*! ./schema */ \"./apollo/schema.js\");\n\n    return new SchemaLink({\n      schema,\n      context: ctx\n    });\n  } else {}\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG8vY2xpZW50LmpzP2FkYjQiXSwibmFtZXMiOlsiZ2xvYmFsQXBvbGxvQ2xpZW50Iiwid2l0aEFwb2xsbyIsIlBhZ2VDb21wb25lbnQiLCJzc3IiLCJXaXRoQXBvbGxvIiwiYXBvbGxvQ2xpZW50IiwiYXBvbGxvU3RhdGUiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJpbml0QXBvbGxvQ2xpZW50IiwidW5kZWZpbmVkIiwiZGlzcGxheU5hbWUiLCJuYW1lIiwiY29uc29sZSIsIndhcm4iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJBcHBUcmVlIiwicmVzIiwicmVxIiwiZmluaXNoZWQiLCJnZXREYXRhRnJvbVRyZWUiLCJlcnJvciIsIkhlYWQiLCJyZXdpbmQiLCJjYWNoZSIsImV4dHJhY3QiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwiSW5NZW1vcnlDYWNoZSIsInJlc3RvcmUiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiY3JlYXRlSXNvbW9ycGhMaW5rIiwiU2NoZW1hTGluayIsInJlcXVpcmUiLCJzY2hlbWEiLCJjb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxrQkFBa0IsR0FBRyxJQUF6QjtBQUVBOzs7Ozs7Ozs7QUFRTyxTQUFTQyxVQUFULENBQW9CQyxhQUFwQixFQUFtQztBQUFFQyxLQUFHLEdBQUc7QUFBUixJQUFpQixFQUFwRCxFQUF3RDtBQUM3RCxRQUFNQyxVQUFVLEdBQUcsVUFBaUQ7QUFBQSxRQUFoRDtBQUFFQyxrQkFBRjtBQUFnQkM7QUFBaEIsS0FBZ0Q7QUFBQSxRQUFoQkMsU0FBZ0I7O0FBQ2xFLFVBQU1DLE1BQU0sR0FBR0gsWUFBWSxJQUFJSSxnQkFBZ0IsQ0FBQ0MsU0FBRCxFQUFZSixXQUFaLENBQS9DO0FBQ0EsV0FDRSxNQUFDLGtFQUFEO0FBQWdCLFlBQU0s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QUFKLEdBQW9CQyxPQUFwQixDQUE0QkosWUFBNUIsQ0FBZCxDQUZ1RCxDQUl2RDs7QUFDQSxTQUFPLElBQUlLLDBEQUFKLENBQWlCO0FBQ3RCSCxXQURzQjtBQUV0QkksUUFBSSxFQUFFQyxrQkFBa0IsQ0FBQ2xCLEdBQUQsQ0FGRjtBQUd0QlM7QUFIc0IsR0FBakIsQ0FBUDtBQUtEOztBQUVELFNBQVNTLGtCQUFULENBQTRCbEIsR0FBNUIsRUFBaUM7QUFDL0IsWUFBbUM7QUFDakMsVUFBTTtBQUFFbUI7QUFBRixRQUFpQkMsbUJBQU8sQ0FBQyw4Q0FBRCxDQUE5Qjs7QUFDQSxVQUFNO0FBQUVDO0FBQUYsUUFBYUQsbUJBQU8sQ0FBQyxvQ0FBRCxDQUExQjs7QUFDQSxXQUFPLElBQUlELFVBQUosQ0FBZTtBQUFFRSxZQUFGO0FBQVVDLGFBQU8sRUFBRXRCO0FBQW5CLEtBQWYsQ0FBUDtBQUNELEdBSkQsTUFJTyxFQU9OO0FBQ0YiLCJmaWxlIjoiLi9hcG9sbG8vY2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCdcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknXG5cbmxldCBnbG9iYWxBcG9sbG9DbGllbnQgPSBudWxsXG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcHJvdmlkZXMgdGhlIGFwb2xsb0NvbnRleHRcbiAqIHRvIGEgbmV4dC5qcyBQYWdlVHJlZS4gVXNlIGl0IGJ5IHdyYXBwaW5nXG4gKiB5b3VyIFBhZ2VDb21wb25lbnQgdmlhIEhPQyBwYXR0ZXJuLlxuICogQHBhcmFtIHtGdW5jdGlvbnxDbGFzc30gUGFnZUNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtjb25maWcuc3NyPXRydWVdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aXRoQXBvbGxvKFBhZ2VDb21wb25lbnQsIHsgc3NyID0gdHJ1ZSB9ID0ge30pIHtcbiAgY29uc3QgV2l0aEFwb2xsbyA9ICh7IGFwb2xsb0NsaWVudCwgYXBvbGxvU3RhdGUsIC4uLnBhZ2VQcm9wcyB9KSA9PiB7XG4gICAgY29uc3QgY2xpZW50ID0gYXBvbGxvQ2xpZW50IHx8IGluaXRBcG9sbG9DbGllbnQodW5kZWZpbmVkLCBhcG9sbG9TdGF0ZSlcbiAgICByZXR1cm4gKFxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgPFBhZ2VDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgKVxuICB9XG5cbiAgLy8gU2V0IHRoZSBjb3JyZWN0IGRpc3BsYXlOYW1lIGluIGRldmVsb3BtZW50XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgZGlzcGxheU5hbWUgPVxuICAgICAgUGFnZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBQYWdlQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCdcblxuICAgIGlmIChkaXNwbGF5TmFtZSA9PT0gJ0FwcCcpIHtcbiAgICAgIGNvbnNvbGUud2FybignVGhpcyB3aXRoQXBvbGxvIEhPQyBvbmx5IHdvcmtzIHdpdGggUGFnZUNvbXBvbmVudHMuJylcbiAgICB9XG5cbiAgICBXaXRoQXBvbGxvLmRpc3BsYXlOYW1lID0gYHdpdGhBcG9sbG8oJHtkaXNwbGF5TmFtZX0pYFxuICB9XG5cbiAgaWYgKHNzciB8fCBQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIFdpdGhBcG9sbG8uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgICAgY29uc3QgeyBBcHBUcmVlIH0gPSBjdHhcblxuICAgICAgLy8gSW5pdGlhbGl6ZSBBcG9sbG9DbGllbnQsIGFkZCBpdCB0byB0aGUgY3R4IG9iamVjdCBzb1xuICAgICAgLy8gd2UgY2FuIHVzZSBpdCBpbiBgUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcGAuXG4gICAgICBjb25zdCBhcG9sbG9DbGllbnQgPSAoY3R4LmFwb2xsb0NsaWVudCA9IGluaXRBcG9sbG9DbGllbnQoe1xuICAgICAgICByZXM6IGN0eC5yZXMsXG4gICAgICAgIHJlcTogY3R4LnJlcSxcbiAgICAgIH0pKVxuXG4gICAgICAvLyBSdW4gd3JhcHBlZCBnZXRJbml0aWFsUHJvcHMgbWV0aG9kc1xuICAgICAgbGV0IHBhZ2VQcm9wcyA9IHt9XG4gICAgICBpZiAoUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IG9uIHRoZSBzZXJ2ZXI6XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gV2hlbiByZWRpcmVjdGluZywgdGhlIHJlc3BvbnNlIGlzIGZpbmlzaGVkLlxuICAgICAgICAvLyBObyBwb2ludCBpbiBjb250aW51aW5nIHRvIHJlbmRlclxuICAgICAgICBpZiAoY3R4LnJlcyAmJiBjdHgucmVzLmZpbmlzaGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHBhZ2VQcm9wc1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25seSBpZiBzc3IgaXMgZW5hYmxlZFxuICAgICAgICBpZiAoc3NyKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFJ1biBhbGwgR3JhcGhRTCBxdWVyaWVzXG4gICAgICAgICAgICBjb25zdCB7IGdldERhdGFGcm9tVHJlZSB9ID0gYXdhaXQgaW1wb3J0KCdAYXBvbGxvL3JlYWN0LXNzcicpXG4gICAgICAgICAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUoXG4gICAgICAgICAgICAgIDxBcHBUcmVlXG4gICAgICAgICAgICAgICAgcGFnZVByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAuLi5wYWdlUHJvcHMsXG4gICAgICAgICAgICAgICAgICBhcG9sbG9DbGllbnQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gUHJldmVudCBBcG9sbG8gQ2xpZW50IEdyYXBoUUwgZXJyb3JzIGZyb20gY3Jhc2hpbmcgU1NSLlxuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZW0gaW4gY29tcG9uZW50cyB2aWEgdGhlIGRhdGEuZXJyb3IgcHJvcDpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWFwb2xsby5odG1sI2dyYXBocWwtcXVlcnktZGF0YS1lcnJvclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hpbGUgcnVubmluZyBgZ2V0RGF0YUZyb21UcmVlYCcsIGVycm9yKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGdldERhdGFGcm9tVHJlZSBkb2VzIG5vdCBjYWxsIGNvbXBvbmVudFdpbGxVbm1vdW50XG4gICAgICAgICAgLy8gaGVhZCBzaWRlIGVmZmVjdCB0aGVyZWZvcmUgbmVlZCB0byBiZSBjbGVhcmVkIG1hbnVhbGx5XG4gICAgICAgICAgSGVhZC5yZXdpbmQoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEV4dHJhY3QgcXVlcnkgZGF0YSBmcm9tIHRoZSBBcG9sbG8gc3RvcmVcbiAgICAgIGNvbnN0IGFwb2xsb1N0YXRlID0gYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wYWdlUHJvcHMsXG4gICAgICAgIGFwb2xsb1N0YXRlLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBXaXRoQXBvbGxvXG59XG5cbi8qKlxuICogQWx3YXlzIGNyZWF0ZXMgYSBuZXcgYXBvbGxvIGNsaWVudCBvbiB0aGUgc2VydmVyXG4gKiBDcmVhdGVzIG9yIHJldXNlcyBhcG9sbG8gY2xpZW50IGluIHRoZSBicm93c2VyLlxuICogQHBhcmFtICB7T2JqZWN0fSBpbml0aWFsU3RhdGVcbiAqL1xuZnVuY3Rpb24gaW5pdEFwb2xsb0NsaWVudChjdHgsIGluaXRpYWxTdGF0ZSkge1xuICAvLyBNYWtlIHN1cmUgdG8gY3JlYXRlIGEgbmV3IGNsaWVudCBmb3IgZXZlcnkgc2VydmVyLXNpZGUgcmVxdWVzdCBzbyB0aGF0IGRhdGFcbiAgLy8gaXNuJ3Qgc2hhcmVkIGJldHdlZW4gY29ubmVjdGlvbnMgKHdoaWNoIHdvdWxkIGJlIGJhZClcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUFwb2xsb0NsaWVudChjdHgsIGluaXRpYWxTdGF0ZSlcbiAgfVxuXG4gIC8vIFJldXNlIGNsaWVudCBvbiB0aGUgY2xpZW50LXNpZGVcbiAgaWYgKCFnbG9iYWxBcG9sbG9DbGllbnQpIHtcbiAgICBnbG9iYWxBcG9sbG9DbGllbnQgPSBjcmVhdGVBcG9sbG9DbGllbnQoY3R4LCBpbml0aWFsU3RhdGUpXG4gIH1cblxuICByZXR1cm4gZ2xvYmFsQXBvbGxvQ2xpZW50XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgY29uZmlndXJlcyB0aGUgQXBvbGxvQ2xpZW50XG4gKiBAcGFyYW0gIHtPYmplY3R9IFtpbml0aWFsU3RhdGU9e31dXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudChjdHggPSB7fSwgaW5pdGlhbFN0YXRlID0ge30pIHtcbiAgY29uc3Qgc3NyTW9kZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG4gIGNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKGluaXRpYWxTdGF0ZSlcblxuICAvLyBDaGVjayBvdXQgaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3B1bGwvNDYxMSBpZiB5b3Ugd2FudCB0byB1c2UgdGhlIEFXU0FwcFN5bmNDbGllbnRcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGUsXG4gICAgbGluazogY3JlYXRlSXNvbW9ycGhMaW5rKGN0eCksXG4gICAgY2FjaGUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlzb21vcnBoTGluayhjdHgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3QgeyBTY2hlbWFMaW5rIH0gPSByZXF1aXJlKCdhcG9sbG8tbGluay1zY2hlbWEnKVxuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSByZXF1aXJlKCcuL3NjaGVtYScpXG4gICAgcmV0dXJuIG5ldyBTY2hlbWFMaW5rKHsgc2NoZW1hLCBjb250ZXh0OiBjdHggfSlcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IEh0dHBMaW5rIH0gPSByZXF1aXJlKCdhcG9sbG8tbGluay1odHRwJylcblxuICAgIHJldHVybiBuZXcgSHR0cExpbmsoe1xuICAgICAgdXJpOiAnL2FwaS9ncmFwaHFsJyxcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgIH0pXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./apollo/client.js\n");

/***/ }),

/***/ "./apollo/resolvers.js":
/*!*****************************!*\
  !*** ./apollo/resolvers.js ***!
  \*****************************/
/*! exports provided: resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return resolvers; });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid/v4 */ \"uuid/v4\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst JWT_SECRET = next_config__WEBPACK_IMPORTED_MODULE_3___default()().serverRuntimeConfig.JWT_SECRET;\nconst users = [];\n\nfunction createUser(data) {\n  const salt = bcrypt__WEBPACK_IMPORTED_MODULE_4___default.a.genSaltSync();\n  return {\n    id: uuid_v4__WEBPACK_IMPORTED_MODULE_5___default()(),\n    email: data.email,\n    hashedPassword: bcrypt__WEBPACK_IMPORTED_MODULE_4___default.a.hashSync(data.password, salt)\n  };\n}\n\nfunction validPassword(user, password) {\n  return bcrypt__WEBPACK_IMPORTED_MODULE_4___default.a.compareSync(password, user.hashedPassword);\n}\n\nconst resolvers = {\n  Query: {\n    async viewer(_parent, _args, context, _info) {\n      var _context$req$headers$;\n\n      const {\n        token\n      } = cookie__WEBPACK_IMPORTED_MODULE_1___default.a.parse((_context$req$headers$ = context.req.headers.cookie) !== null && _context$req$headers$ !== void 0 ? _context$req$headers$ : '');\n\n      if (token) {\n        try {\n          const {\n            id,\n            email\n          } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(token, JWT_SECRET);\n          return users.find(user => user.id === id && user.email === email);\n        } catch {\n          throw new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__[\"AuthenticationError\"]('Authentication token is invalid, please log in');\n        }\n      }\n    }\n\n  },\n  Mutation: {\n    async signUp(_parent, args, _context, _info) {\n      const user = createUser(args.input);\n      users.push(user);\n      return {\n        user\n      };\n    },\n\n    async signIn(_parent, args, context, _info) {\n      const user = users.find(user => user.email === args.input.email);\n\n      if (user && validPassword(user, args.input.password)) {\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign({\n          email: user.email,\n          id: user.id,\n          time: new Date()\n        }, JWT_SECRET, {\n          expiresIn: '6h'\n        });\n        context.res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_1___default.a.serialize('token', token, {\n          httpOnly: true,\n          maxAge: 6 * 60 * 60,\n          path: '/',\n          sameSite: 'lax',\n          secure: false\n        }));\n        return {\n          user\n        };\n      }\n\n      throw new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__[\"UserInputError\"]('Invalid email and password combination');\n    },\n\n    async signOut(_parent, _args, context, _info) {\n      context.res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_1___default.a.serialize('token', '', {\n        httpOnly: true,\n        maxAge: -1,\n        path: '/',\n        sameSite: 'lax',\n        secure: false\n      }));\n      return true;\n    }\n\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG8vcmVzb2x2ZXJzLmpzPzY5YzQiXSwibmFtZXMiOlsiSldUX1NFQ1JFVCIsImdldENvbmZpZyIsInNlcnZlclJ1bnRpbWVDb25maWciLCJ1c2VycyIsImNyZWF0ZVVzZXIiLCJkYXRhIiwic2FsdCIsImJjcnlwdCIsImdlblNhbHRTeW5jIiwiaWQiLCJ2NCIsImVtYWlsIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoU3luYyIsInBhc3N3b3JkIiwidmFsaWRQYXNzd29yZCIsInVzZXIiLCJjb21wYXJlU3luYyIsInJlc29sdmVycyIsIlF1ZXJ5Iiwidmlld2VyIiwiX3BhcmVudCIsIl9hcmdzIiwiY29udGV4dCIsIl9pbmZvIiwidG9rZW4iLCJjb29raWUiLCJwYXJzZSIsInJlcSIsImhlYWRlcnMiLCJqd3QiLCJ2ZXJpZnkiLCJmaW5kIiwiQXV0aGVudGljYXRpb25FcnJvciIsIk11dGF0aW9uIiwic2lnblVwIiwiYXJncyIsIl9jb250ZXh0IiwiaW5wdXQiLCJwdXNoIiwic2lnbkluIiwic2lnbiIsInRpbWUiLCJEYXRlIiwiZXhwaXJlc0luIiwicmVzIiwic2V0SGVhZGVyIiwic2VyaWFsaXplIiwiaHR0cE9ubHkiLCJtYXhBZ2UiLCJwYXRoIiwic2FtZVNpdGUiLCJzZWN1cmUiLCJVc2VySW5wdXRFcnJvciIsInNpZ25PdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUdDLGtEQUFTLEdBQUdDLG1CQUFaLENBQWdDRixVQUFuRDtBQUVBLE1BQU1HLEtBQUssR0FBRyxFQUFkOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3hCLFFBQU1DLElBQUksR0FBR0MsNkNBQU0sQ0FBQ0MsV0FBUCxFQUFiO0FBRUEs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Q0Q7O0FBRUQsWUFBTSxJQUFJcUMsa0VBQUosQ0FBbUIsd0NBQW5CLENBQU47QUFDRCxLQXBDTzs7QUFxQ1IsVUFBTUMsT0FBTixDQUFjakMsT0FBZCxFQUF1QkMsS0FBdkIsRUFBOEJDLE9BQTlCLEVBQXVDQyxLQUF2QyxFQUE4QztBQUM1Q0QsYUFBTyxDQUFDc0IsR0FBUixDQUFZQyxTQUFaLENBQ0UsWUFERixFQUVFcEIsNkNBQU0sQ0FBQ3FCLFNBQVAsQ0FBaUIsT0FBakIsRUFBMEIsRUFBMUIsRUFBOEI7QUFDNUJDLGdCQUFRLEVBQUUsSUFEa0I7QUFFNUJDLGNBQU0sRUFBRSxDQUFDLENBRm1CO0FBRzVCQyxZQUFJLEVBQUUsR0FIc0I7QUFJNUJDLGdCQUFRLEVBQUUsS0FKa0I7QUFLNUJDLGNBQU07QUFMc0IsT0FBOUIsQ0FGRjtBQVdBLGFBQU8sSUFBUDtBQUNEOztBQWxETztBQWpCYSxDQUFsQiIsImZpbGUiOiIuL2Fwb2xsby9yZXNvbHZlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoZW50aWNhdGlvbkVycm9yLCBVc2VySW5wdXRFcnJvciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbWljcm8nXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0J1xuaW1wb3J0IHY0IGZyb20gJ3V1aWQvdjQnXG5cbmNvbnN0IEpXVF9TRUNSRVQgPSBnZXRDb25maWcoKS5zZXJ2ZXJSdW50aW1lQ29uZmlnLkpXVF9TRUNSRVRcblxuY29uc3QgdXNlcnMgPSBbXVxuXG5mdW5jdGlvbiBjcmVhdGVVc2VyKGRhdGEpIHtcbiAgY29uc3Qgc2FsdCA9IGJjcnlwdC5nZW5TYWx0U3luYygpXG5cbiAgcmV0dXJuIHtcbiAgICBpZDogdjQoKSxcbiAgICBlbWFpbDogZGF0YS5lbWFpbCxcbiAgICBoYXNoZWRQYXNzd29yZDogYmNyeXB0Lmhhc2hTeW5jKGRhdGEucGFzc3dvcmQsIHNhbHQpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkUGFzc3dvcmQodXNlciwgcGFzc3dvcmQpIHtcbiAgcmV0dXJuIGJjcnlwdC5jb21wYXJlU3luYyhwYXNzd29yZCwgdXNlci5oYXNoZWRQYXNzd29yZClcbn1cblxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICBhc3luYyB2aWV3ZXIoX3BhcmVudCwgX2FyZ3MsIGNvbnRleHQsIF9pbmZvKSB7XG4gICAgICBjb25zdCB7IHRva2VuIH0gPSBjb29raWUucGFyc2UoY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgPz8gJycpXG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IGlkLCBlbWFpbCB9ID0gand0LnZlcmlmeSh0b2tlbiwgSldUX1NFQ1JFVClcblxuICAgICAgICAgIHJldHVybiB1c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLmlkID09PSBpZCAmJiB1c2VyLmVtYWlsID09PSBlbWFpbClcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgdGhyb3cgbmV3IEF1dGhlbnRpY2F0aW9uRXJyb3IoXG4gICAgICAgICAgICAnQXV0aGVudGljYXRpb24gdG9rZW4gaXMgaW52YWxpZCwgcGxlYXNlIGxvZyBpbidcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBNdXRhdGlvbjoge1xuICAgIGFzeW5jIHNpZ25VcChfcGFyZW50LCBhcmdzLCBfY29udGV4dCwgX2luZm8pIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBjcmVhdGVVc2VyKGFyZ3MuaW5wdXQpXG5cbiAgICAgIHVzZXJzLnB1c2godXNlcilcblxuICAgICAgcmV0dXJuIHsgdXNlciB9XG4gICAgfSxcblxuICAgIGFzeW5jIHNpZ25JbihfcGFyZW50LCBhcmdzLCBjb250ZXh0LCBfaW5mbykge1xuICAgICAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuZW1haWwgPT09IGFyZ3MuaW5wdXQuZW1haWwpXG5cbiAgICAgIGlmICh1c2VyICYmIHZhbGlkUGFzc3dvcmQodXNlciwgYXJncy5pbnB1dC5wYXNzd29yZCkpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihcbiAgICAgICAgICB7IGVtYWlsOiB1c2VyLmVtYWlsLCBpZDogdXNlci5pZCwgdGltZTogbmV3IERhdGUoKSB9LFxuICAgICAgICAgIEpXVF9TRUNSRVQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZXhwaXJlc0luOiAnNmgnLFxuICAgICAgICAgIH1cbiAgICAgICAgKVxuXG4gICAgICAgIGNvbnRleHQucmVzLnNldEhlYWRlcihcbiAgICAgICAgICAnU2V0LUNvb2tpZScsXG4gICAgICAgICAgY29va2llLnNlcmlhbGl6ZSgndG9rZW4nLCB0b2tlbiwge1xuICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgICBtYXhBZ2U6IDYgKiA2MCAqIDYwLFxuICAgICAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICAgICAgc2FtZVNpdGU6ICdsYXgnLFxuICAgICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4geyB1c2VyIH1cbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IFVzZXJJbnB1dEVycm9yKCdJbnZhbGlkIGVtYWlsIGFuZCBwYXNzd29yZCBjb21iaW5hdGlvbicpXG4gICAgfSxcbiAgICBhc3luYyBzaWduT3V0KF9wYXJlbnQsIF9hcmdzLCBjb250ZXh0LCBfaW5mbykge1xuICAgICAgY29udGV4dC5yZXMuc2V0SGVhZGVyKFxuICAgICAgICAnU2V0LUNvb2tpZScsXG4gICAgICAgIGNvb2tpZS5zZXJpYWxpemUoJ3Rva2VuJywgJycsIHtcbiAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgICBtYXhBZ2U6IC0xLFxuICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICBzYW1lU2l0ZTogJ2xheCcsXG4gICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gIH0sXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo/resolvers.js\n");

/***/ }),

/***/ "./apollo/schema.js":
/*!**************************!*\
  !*** ./apollo/schema.js ***!
  \**************************/
/*! exports provided: schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"schema\", function() { return schema; });\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _type_defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-defs */ \"./apollo/type-defs.js\");\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ \"./apollo/resolvers.js\");\n\n\n\nconst schema = Object(graphql_tools__WEBPACK_IMPORTED_MODULE_0__[\"makeExecutableSchema\"])({\n  typeDefs: _type_defs__WEBPACK_IMPORTED_MODULE_1__[\"typeDefs\"],\n  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_2__[\"resolvers\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG8vc2NoZW1hLmpzPzUwNDQiXSwibmFtZXMiOlsic2NoZW1hIiwibWFrZUV4ZWN1dGFibGVTY2hlbWEiLCJ0eXBlRGVmcyIsInJlc29sdmVycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTUEsTUFBTSxHQUFHQywwRUFBb0IsQ0FBQztBQUN6Q0MsK0RBRHlDO0FBRXpDQyxpRUFBU0E7QUFGZ0MsQ0FBRCxDQUFuQyIsImZpbGUiOiIuL2Fwb2xsby9zY2hlbWEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlRXhlY3V0YWJsZVNjaGVtYSB9IGZyb20gJ2dyYXBocWwtdG9vbHMnXG5pbXBvcnQgeyB0eXBlRGVmcyB9IGZyb20gJy4vdHlwZS1kZWZzJ1xuaW1wb3J0IHsgcmVzb2x2ZXJzIH0gZnJvbSAnLi9yZXNvbHZlcnMnXG5cbmV4cG9ydCBjb25zdCBzY2hlbWEgPSBtYWtlRXhlY3V0YWJsZVNjaGVtYSh7XG4gIHR5cGVEZWZzLFxuICByZXNvbHZlcnMsXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./apollo/schema.js\n");

/***/ }),

/***/ "./apollo/type-defs.js":
/*!*****************************!*\
  !*** ./apollo/type-defs.js ***!
  \*****************************/
/*! exports provided: typeDefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typeDefs\", function() { return typeDefs; });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n\nconst typeDefs = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  type User {\n    id: ID!\n    email: String!\n  }\n\n  input SignUpInput {\n    email: String!\n    password: String!\n  }\n\n  input SignInInput {\n    email: String!\n    password: String!\n  }\n\n  type SignUpPayload {\n    user: User!\n  }\n\n  type SignInPayload {\n    user: User!\n  }\n\n  type Query {\n    user(id: ID!): User!\n    users: [User]!\n    viewer: User\n  }\n\n  type Mutation {\n    signUp(input: SignUpInput!): SignUpPayload!\n    signIn(input: SignInInput!): SignInPayload!\n    signOut: Boolean!\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG8vdHlwZS1kZWZzLmpzPzBhNmEiXSwibmFtZXMiOlsidHlwZURlZnMiLCJncWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxRQUFRLEdBQUdDLGtEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFyQiIsImZpbGUiOiIuL2Fwb2xsby90eXBlLWRlZnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXG4gIHR5cGUgVXNlciB7XG4gICAgaWQ6IElEIVxuICAgIGVtYWlsOiBTdHJpbmchXG4gIH1cblxuICBpbnB1dCBTaWduVXBJbnB1dCB7XG4gICAgZW1haWw6IFN0cmluZyFcbiAgICBwYXNzd29yZDogU3RyaW5nIVxuICB9XG5cbiAgaW5wdXQgU2lnbkluSW5wdXQge1xuICAgIGVtYWlsOiBTdHJpbmchXG4gICAgcGFzc3dvcmQ6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgU2lnblVwUGF5bG9hZCB7XG4gICAgdXNlcjogVXNlciFcbiAgfVxuXG4gIHR5cGUgU2lnbkluUGF5bG9hZCB7XG4gICAgdXNlcjogVXNlciFcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIHVzZXIoaWQ6IElEISk6IFVzZXIhXG4gICAgdXNlcnM6IFtVc2VyXSFcbiAgICB2aWV3ZXI6IFVzZXJcbiAgfVxuXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgIHNpZ25VcChpbnB1dDogU2lnblVwSW5wdXQhKTogU2lnblVwUGF5bG9hZCFcbiAgICBzaWduSW4oaW5wdXQ6IFNpZ25JbklucHV0ISk6IFNpZ25JblBheWxvYWQhXG4gICAgc2lnbk91dDogQm9vbGVhbiFcbiAgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./apollo/type-defs.js\n");

/***/ }),

/***/ "./pages/signout.js":
/*!**************************!*\
  !*** ./pages/signout.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apollo/client */ \"./apollo/client.js\");\nvar _jsxFileName = \"/Users/qintao.yao/tman/TestDemo2/nextJS_project/next-create1/pages/signout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst SignOutMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`\n  mutation SignOutMutation {\n    signOut\n  }\n`;\n\nfunction SignOut() {\n  const client = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useApolloClient\"])();\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  const [signOut] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useMutation\"])(SignOutMutation);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    signOut().then(() => {\n      client.resetStore().then(() => {\n        router.push('/signin');\n      });\n    });\n  }, [signOut, router, client]);\n  return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 10\n    }\n  }, \"Signing out...\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__[\"withApollo\"])(SignOut));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWdub3V0LmpzP2U5YmUiXSwibmFtZXMiOlsiU2lnbk91dE11dGF0aW9uIiwiZ3FsIiwiU2lnbk91dCIsImNsaWVudCIsInVzZUFwb2xsb0NsaWVudCIsInJvdXRlciIsInVzZVJvdXRlciIsInNpZ25PdXQiLCJ1c2VNdXRhdGlvbiIsInVzZUVmZmVjdCIsInRoZW4iLCJyZXNldFN0b3JlIiwicHVzaCIsIndpdGhBcG9sbG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsZUFBZSxHQUFHQyxrREFBSTs7OztDQUE1Qjs7QUFNQSxTQUFTQyxPQUFULEdBQW1CO0FBQ2pCLFFBQU1DLE1BQU0sR0FBR0MsMkVBQWUsRUFBOUI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTSxDQUFDQyxPQUFELElBQVlDLHVFQUFXLENBQUNSLGVBQUQsQ0FBN0I7QUFFQVMseURBQVMsQ0FBQyxNQUFNO0FBQ2RGLFdBQU8sR0FBR0csSUFBVixDQUFlLE1BQU07QUFDbkJQLFlBQU0sQ0FBQ1EsVUFBUCxHQUFvQkQsSUFBcEIsQ0FBeUIsTUFBTTtBQUM3QkwsY0FBTSxDQUFDTyxJQUFQLENBQVksU0FBWjtBQUNELE9BRkQ7QUFHRCxLQUpEO0FBS0QsR0FOUSxFQU1OLENBQUNMLE9BQUQsRUFBVUYsTUFBVixFQUFrQkYsTUFBbEIsQ0FOTSxDQUFUO0FBUUEsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFQO0FBQ0Q7O0FBRWNVLGdJQUFVLENBQUNYLE9BQUQsQ0FBekIiLCJmaWxlIjoiLi9wYWdlcy9zaWdub3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlQXBvbGxvQ2xpZW50IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tICcuLi9hcG9sbG8vY2xpZW50J1xuXG5jb25zdCBTaWduT3V0TXV0YXRpb24gPSBncWxgXG4gIG11dGF0aW9uIFNpZ25PdXRNdXRhdGlvbiB7XG4gICAgc2lnbk91dFxuICB9XG5gXG5cbmZ1bmN0aW9uIFNpZ25PdXQoKSB7XG4gIGNvbnN0IGNsaWVudCA9IHVzZUFwb2xsb0NsaWVudCgpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtzaWduT3V0XSA9IHVzZU11dGF0aW9uKFNpZ25PdXRNdXRhdGlvbilcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNpZ25PdXQoKS50aGVuKCgpID0+IHtcbiAgICAgIGNsaWVudC5yZXNldFN0b3JlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvc2lnbmluJylcbiAgICAgIH0pXG4gICAgfSlcbiAgfSwgW3NpZ25PdXQsIHJvdXRlciwgY2xpZW50XSlcblxuICByZXR1cm4gPHA+U2lnbmluZyBvdXQuLi48L3A+XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oU2lnbk91dClcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signout.js\n");

/***/ }),

/***/ 9:
/*!********************************!*\
  !*** multi ./pages/signout.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/qintao.yao/tman/TestDemo2/nextJS_project/next-create1/pages/signout.js */"./pages/signout.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "@apollo/react-ssr":
/*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-ssr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LXNzclwiPzEyMzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9yZWFjdC1zc3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LXNzclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-ssr\n");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-cache-inmemory\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIj80YmQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1jYWNoZS1pbm1lbW9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-cache-inmemory\n");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCI/NDI3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-client\n");

/***/ }),

/***/ "apollo-link-schema":
/*!*************************************!*\
  !*** external "apollo-link-schema" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-schema\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1zY2hlbWFcIj9iZTEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1saW5rLXNjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rLXNjaGVtYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link-schema\n");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-micro\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLW1pY3JvXCI/MjM2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tc2VydmVyLW1pY3JvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1taWNyb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-server-micro\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIj9jZjljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJjcnlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcrypt\n");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWVcIj8yZDIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cookie\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRvb2xzXCI/MjRjYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJncmFwaHFsLXRvb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10b29sc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tools\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIj82NDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Impzb253ZWJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiP2Y4NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/config\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v4\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkL3Y0XCI/ZDE1YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1dWlkL3Y0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZC92NFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///uuid/v4\n");

/***/ })

/******/ });