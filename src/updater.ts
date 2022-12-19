// @ts-nocheck
const isDev = require('electron-is-dev');
const { app, autoUpdater } = require('electron')
const server = ""
const url = `${server}/update/${process.platform}/${app.getVersion()}`

if (isDev) {
	console.log("Running in development. Normally we'd update every few minutes");
} else {
	console.log("Running in production. We'll be updating on intervals");
    autoUpdater.setFeedURL({ url })
}

setInterval(() => {
    autoUpdater.checkForUpdates()
  }, 60000)

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
    const dialogOpts = {
      type: 'info',
      buttons: ['Restart', 'Later'],
      title: 'A system update is available.',
      message: process.platform === 'win32' ? releaseNotes : releaseName,
      detail: "SNext is getting better! A new update is available. You can restart to apply it now or have it apply the next you open the Console."
    }
  
    dialog.showMessageBox(dialogOpts).then((returnValue) => {
      if (returnValue.response === 0) autoUpdater.quitAndInstall()
    })
})

autoUpdater.on('error', message => {
  console.error('There was a problem updating SNext. If the issue persists, contact support.')
  console.error(message)
})