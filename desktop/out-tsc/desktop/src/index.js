"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = require("path");
let win;
let splash;
function showWindow() {
    function onClose() {
        win = undefined;
        electron_1.app.exit();
    }
    function createWindow() {
        win = new electron_1.BrowserWindow({
            title: 'Titulo do App',
            width: 320,
            height: 300,
            show: false,
            webPreferences: {
                preload: path_1.join(__dirname, 'bridge.js'),
                nodeIntegration: false,
                nodeIntegrationInWorker: false,
            }
        });
        splash = new electron_1.BrowserWindow({
            frame: false,
            width: 200,
            height: 200,
            center: true,
            transparent: true,
            resizable: false,
            alwaysOnTop: true,
            hasShadow: false,
            titleBarStyle: 'default',
            thickFrame: true
        });
    }
    createWindow();
    splash.loadFile(path_1.join(__dirname, 'splash.html'));
    setTimeout(() => {
        splash.destroy();
        win.loadURL('http://localhost:4200/');
        // win.loadFile(join(__dirname, 'splash.html'))
        win.show();
    }, 4000);
    win.on('close', onClose);
    // win.loadURL('http://localhost:4200/');
}
electron_1.app.allowRendererProcessReuse = true;
electron_1.app.on('ready', showWindow);
//# sourceMappingURL=index.js.map