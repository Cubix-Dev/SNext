// @ts-nocheck
const path = require('path');
const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}
// --> for the renderer
const remote = require('@electron/remote/main')
var mainWindow

// const scan = require("./gameHandler");

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      // preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  //mainWindow.webContents.openDevTools();
  // For downloading games. What should happen is games get downloaded into that myGames folder
  const ses = mainWindow.webContents.session
  ses.setDownloadPath(path.join(__dirname, "games"))

  // Dark Mode stuff
  // ipcMain.handle('dark-mode:toggle', () => {
  //   if (nativeTheme.shouldUseDarkColors) {
  //     nativeTheme.themeSource = 'light'
  //   } else {
  //     nativeTheme.themeSource = 'dark'
  //   }
  //   return nativeTheme.shouldUseDarkColors
  // })

  // ipcMain.handle('dark-mode:system', () => {
  //   nativeTheme.themeSource = 'system'
  // })
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  createWindow();
  app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required"); // Make Startup Autoplay Work
  remote.initialize();
  remote.enable(mainWindow.webContents)
  // scan()
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
