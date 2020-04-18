import { app, BrowserWindow } from 'electron';
import { join } from 'path';


let win: BrowserWindow | undefined;

function showWindow() {
    function onClose() {
        win = undefined;
        app.exit()
    }
    
    function createWindow() {
        win = new BrowserWindow({
            width: 320,
            height: 300,
            webPreferences: {
                preload: join(__dirname, 'bridge.js'),
                nodeIntegration: false,
                nodeIntegrationInWorker: false,
            }
        });
    }

    createWindow();
    win.on('close', onClose);
    win.loadURL('http://localhost:4200/');

}


app.allowRendererProcessReuse = true;
app.on('ready', showWindow);
