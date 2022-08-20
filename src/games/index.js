// Loop throught the GameMemory Folder and append the library.html accordingly
const remote = require('@electron/remote');
const win = remote.getCurrentWindow();

function mainmenu() {
    win.loadFile("./index.html")
}