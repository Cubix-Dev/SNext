// --> Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const path = require("path")

// --> Keep a global reference of the window object, if you don't, the window will
// --> be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

var IMG_DIR = "icons"

// Fix launch issues?
app.disableHardwareAcceleration()

function createWindow () {
    // --> Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        frame: true,
        backgroundColor: '#FFF',
        icon: path.join(__dirname, IMG_DIR, "snextlogo.png"),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // --> and load the index.html of the app.
    mainWindow.loadFile('index.html');

    // --> Open the DevTools.
    // --> mainWindow.webContents.openDevTools();
    
    // --> Emitted when the window is closed.
    mainWindow.on('closed', () => {
        if(process.platform !== 'darwin'){
            app.quit();
        }
    });

}

app.on('ready', () => {
    createWindow()
});

// --> Retrieve focused window
var theWindow = BrowserWindow.getFocusedWindow();
