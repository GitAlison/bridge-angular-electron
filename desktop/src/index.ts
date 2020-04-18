import { app, BrowserWindow } from 'electron';
import { join } from 'path';


let win: BrowserWindow | undefined;
let splash: BrowserWindow | undefined;

function showWindow() {
    function onClose() {
        win = undefined;
        app.exit()
    }

    function createWindow() {
        win = new BrowserWindow({
            title: 'Titulo do App',
            width: 320,
            height: 300,
            show: false,
            webPreferences: {
                preload: join(__dirname, 'bridge.js'),
                nodeIntegration: false,
                nodeIntegrationInWorker: false,
            }
        });
        splash = new BrowserWindow({
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
        })
    }



    createWindow();
    splash.loadFile(join(__dirname, 'splash.html'))

    setTimeout(() => {
        splash.destroy()
        win.loadURL('http://localhost:4200/');

        // win.loadFile(join(__dirname, 'splash.html'))
        win.show()
    }, 4000);
    win.on('close', onClose);
    // win.loadURL('http://localhost:4200/');


}


app.allowRendererProcessReuse = true;
app.on('ready', showWindow);
