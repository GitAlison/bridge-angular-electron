"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = require("path");
let win;
function showWindow() {
    function onClose() {
        win = undefined;
        electron_1.app.exit();
    }
    function createWindow() {
        win = new electron_1.BrowserWindow({
            width: 320,
            height: 300,
            webPreferences: {
                preload: path_1.join(__dirname, 'bridge.js'),
                nodeIntegration: false,
                nodeIntegrationInWorker: false,
            }
        });
    }
    createWindow();
    win.on('close', onClose);
    win.loadURL('http://localhost:4200/');
}
electron_1.app.allowRendererProcessReuse = true;
electron_1.app.on('ready', showWindow);
//# sourceMappingURL=index.js.map