/* all of this is just boilerplate to get electron working, no touchy please */

const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600, 
    backgroundColor: '#FFF',
    webPreferences: {
        nodeIntegration: true
    }
  })

  win.setMenuBarVisibility(false) // hides menu bar but not the exit/minimize buttons

  win.loadFile('ui/main.html')
}

// when this promise is resolved (which should be kinda fast), the window will open.
app.whenReady().then(() => {
  createWindow()

  // for macos; opens a window if there aren't any open on boot (how macos handles windows is weird dont blame me)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// for windows and linux; ends the process if all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

