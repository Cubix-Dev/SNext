// Loop throught the GameMemory Folder and append the library.html accordingly
var rem = require('@electron/remote');
var win = rem.getCurrentWindow();
function mainmenu() {
    win.loadFile("./index.html");
}
