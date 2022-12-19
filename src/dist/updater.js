// @ts-nocheck
var isDev = require('electron-is-dev');
var _a = require('electron'), app = _a.app, autoUpdater = _a.autoUpdater;
var server = "";
var url = "".concat(server, "/update/").concat(process.platform, "/").concat(app.getVersion());
if (isDev) {
    console.log("Running in development. Normally we'd update every few minutes");
}
else {
    console.log("Running in production. We'll be updating on intervals");
    autoUpdater.setFeedURL({ url: url });
}
setInterval(function () {
    autoUpdater.checkForUpdates();
}, 60000);
autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName) {
    var dialogOpts = {
        type: 'info',
        buttons: ['Restart', 'Later'],
        title: 'A system update is available.',
        message: process.platform === 'win32' ? releaseNotes : releaseName,
        detail: "SNext is getting better! A new update is available. You can restart to apply it now or have it apply the next you open the Console."
    };
    dialog.showMessageBox(dialogOpts).then(function (returnValue) {
        if (returnValue.response === 0)
            autoUpdater.quitAndInstall();
    });
});
autoUpdater.on('error', function (message) {
    console.error('There was a problem updating SNext. If the issue persists, contact support.');
    console.error(message);
});
