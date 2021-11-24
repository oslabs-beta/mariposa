/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/electron.ts":
/*!*************************!*\
  !*** ./src/electron.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar electron_1 = __webpack_require__(/*! electron */ \"electron\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar url = __webpack_require__(/*! url */ \"url\");\n// require('electron-reload')(__dirname);\nfunction createWindow() {\n    var win = new electron_1.BrowserWindow({\n        width: 1000,\n        height: 800,\n        webPreferences: {\n            nodeIntegration: true,\n            // enableRemoteModule: true,\n        }\n    });\n    if (true) {\n        win.loadURL(\"http://localhost:3000\");\n    }\n    else {}\n}\n// Will be called when Electron has finished initialization\nelectron_1.app.whenReady().then(function () { return createWindow(); });\n// Quit when all windows are closed, except for MacOS (darwin)\nelectron_1.app.on('window-all-closed', function () {\n    if (process.platform !== 'darwin') {\n        electron_1.app.quit();\n    }\n});\n// On macOS it's common to re-create a window in the app when the\n// dock icon is clicked and there are no other windows open.\nelectron_1.app.on('activate', function () {\n    if (electron_1.BrowserWindow.getAllWindows().length === 0) {\n        createWindow();\n    }\n});\n\n\n//# sourceURL=webpack://mariposa/./src/electron.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/electron.ts");
/******/ 	
/******/ })()
;