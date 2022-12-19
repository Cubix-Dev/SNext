// @ts-nocheck
var path = require('path');
var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow, ipcMain = _a.ipcMain, nativeTheme = _a.nativeTheme;
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
}
// --> for the renderer
var remote = require('@electron/remote/main');
var mainWindow;
var createWindow = function () {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    //mainWindow.webContents.openDevTools();
    // For downloading games. What should happen is games get downloaded into that myGames folder
    var ses = mainWindow.webContents.session;
    ses.setDownloadPath(path.join(__dirname, "myGames"));
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
app.on("ready", function () {
    createWindow();
    app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required"); // Make Startup Autoplay Work
    remote.initialize();
    remote.enable(mainWindow.webContents);
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
