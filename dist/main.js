(()=>{"use strict";var e={17:e=>{e.exports=require("path")},310:e=>{e.exports=require("url")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}(()=>{const e=require("electron");function t(){new e.BrowserWindow({width:1e3,height:800,webPreferences:{nodeIntegration:!0,contextIsolation:!1}}).loadURL("http://localhost:3000")}r(17),r(310),e.app.whenReady().then((function(){return t()})),e.app.on("window-all-closed",(function(){"darwin"!==process.platform&&e.app.quit()})),e.app.on("activate",(function(){0===e.BrowserWindow.getAllWindows().length&&t()}))})()})();
//# sourceMappingURL=main.js.map