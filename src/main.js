// --> Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const path = require("path");
// --> for the renderer
const remote = require('@electron/remote/main')
// --> For rich presense
const DiscordRPC = require("discord-rpc");
const { Console } = require("console");

// --> Keep a global reference of the window object, if you don't, the window will
// --> be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// --> Make the icon path usable
var IMG_DIR = "icons";

function createWindow() {
  // --> Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: true,
    backgroundColor: "#000",
    icon: path.join(__dirname, IMG_DIR, "snextlogo.png"),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "renderer.js"),
    },
  });

  // --> and load the index.html of the app. This will change once the startup page is done.
  mainWindow.loadFile("index.html");

  // --> Open the DevTools.
  // --> mainWindow.webContents.openDevTools();

  // --> Emitted when the window is closed.
  mainWindow.on("closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
}

app.on("ready", () => {
  createWindow();
  remote.initialize();
  remote.enable(mainWindow.webContents)
  app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required"); // Make Startup Autoplay Work
  Console.Log("Ready");
});

// --> Retrieve focused window
var theWindow = BrowserWindow.getFocusedWindow();

// --> For 1-Click Install
const ses = mainWindow.webContents.session
ses.setDownloadPath(path.join(__dirname, "games"))

// --> Rich Presense Stuff
const clientId = "976863727443910766";

const rpc = new DiscordRPC.Client({ transport: "ipc" });
const startTimestamp = new Date();

async function setActivity() {
    console.log("We're live!");
  if (!rpc || mainWindow) {
    return;
  }

  rpc.setActivity({
    details: "Using SNext",
    state: "Online",
    startTimestamp,
    instance: false
  });
}

rpc.on('ready',() => {
    setActivity();

    setInterval(() => {
        setActivity();
    }, 15e3);
})

rpc.login({ clientId }).catch(console.error)