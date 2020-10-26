module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/api/graphql.js":
/*!******************************!*\
  !*** ./pages/api/graphql.js ***!
  \******************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apollo/schema */ \"./apollo/schema.js\");\n\n\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__[\"ApolloServer\"]({\n  schema: _apollo_schema__WEBPACK_IMPORTED_MODULE_1__[\"schema\"],\n\n  context(ctx) {\n    return ctx;\n  }\n\n});\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (apolloServer.createHandler({\n  path: '/api/graphql'\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ3JhcGhxbC5qcz83NDI2Il0sIm5hbWVzIjpbImFwb2xsb1NlcnZlciIsIkFwb2xsb1NlcnZlciIsInNjaGVtYSIsImNvbnRleHQiLCJjdHgiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwiY3JlYXRlSGFuZGxlciIsInBhdGgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHLElBQUlDLGdFQUFKLENBQWlCO0FBQ3BDQywrREFEb0M7O0FBRXBDQyxTQUFPLENBQUNDLEdBQUQsRUFBTTtBQUNYLFdBQU9BLEdBQVA7QUFDRDs7QUFKbUMsQ0FBakIsQ0FBckI7QUFPTyxNQUFNQyxNQUFNLEdBQUc7QUFDcEJDLEtBQUcsRUFBRTtBQUNIQyxjQUFVLEVBQUU7QUFEVDtBQURlLENBQWY7QUFNUVAsMkVBQVksQ0FBQ1EsYUFBYixDQUEyQjtBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUEzQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2dyYXBocWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tICdhcG9sbG8tc2VydmVyLW1pY3JvJ1xuaW1wb3J0IHsgc2NoZW1hIH0gZnJvbSAnLi4vLi4vYXBvbGxvL3NjaGVtYSdcblxuY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gIHNjaGVtYSxcbiAgY29udGV4dChjdHgpIHtcbiAgICByZXR1cm4gY3R4XG4gIH0sXG59KVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBvbGxvU2VydmVyLmNyZWF0ZUhhbmRsZXIoeyBwYXRoOiAnL2FwaS9ncmFwaHFsJyB9KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/graphql.js\n");

/***/ }),

/***/ 6:
/*!************************************!*\
  !*** multi ./pages/api/graphql.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/qintao.yao/tman/TestDemo2/nextJS_project/next-create1/pages/api/graphql.js */"./pages/api/graphql.js");


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

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v4\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkL3Y0XCI/ZDE1YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1dWlkL3Y0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZC92NFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///uuid/v4\n");

/***/ })

/******/ });