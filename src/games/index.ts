// Loop throught the GameMemory Folder and append the library.html accordingly
const rem = require('@electron/remote');
const win = rem.getCurrentWindow();


function mainmenu() {
    win.loadFile("./index.html")
}