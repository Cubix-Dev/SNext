// --> Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const path = require("Path")

// --> Keep a global reference of the window object, if you don't, the window will
// --> be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

var IMG_DIR = /icons/

function createWindow () {
    // --> Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        frame: false,
        backgroundColor: '#FFF',
        icon: path.join(__dirname, IMG_DIR, snextlogo.png),
        webPreferences: {
            nodeIntegration: true
        }
    });

    // --> and load the index.html of the app.
    mainWindow.loadFile('index.html');

    // --> Open the DevTools.
    // --> mainWindow.webContents.openDevTools();

    // --> Create the window
    app.on('ready', createWindow)



    // --> Emitted when the window is closed.
    mainWindow.on('closed', () => {
        if(ProcessingInstruction.platform !== 'darwin'){
            app.quit();
        }
    });

}

// --> Retrieve focused window
var theWindow = BrowserWindow.getFocusedWindow();

// --> Execute common tasks
// --> Minimize
theWindow.minimize();
// --> Maximize app
theWindow.maximize();
// --> Close app
theWindow.close();