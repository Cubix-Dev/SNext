// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// --> Old method got depricated. Lets use the new method so stuff actually loads
const remote = require('@electron/remote');
const win = remote.getCurrentWindow();

// --> Instead of having one messy function trying to handle everything what if we instead have 100 tiny functions that can run better?
function getGames() {
    win.loadFile("games/library.html")
}


// --> Boot the eShop
function geteShop() {
    win.loadURL("https://cube-enix.github.io/eShop/")
}