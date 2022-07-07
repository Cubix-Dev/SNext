// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const remote = require('electron').remote;

const win = remote.getCurrentWindow(); /* Note this is different to the html global `window` variable */

// When document has loaded, initialise
document.onreadystatechange = (event) => {
    if (document.readyState == "complete") {
        handleGameLoading();
    }
};

window.onbeforeunload = (event) => {
    /* If window is reloaded, remove win event listeners
    (DOM element listeners get auto garbage collected but not
    Electron win listeners as the win is not dereferenced unless closed) */
    win.removeAllListeners();
}

// --> Instead of having one messy function trying to handle everything what if we instead have 100 tiny functions that can run better?
function getGames() {
    win.loadFile("games/library.html")
}

function geteShop() {
    win.loadURL("https://cube-enix.github.io/eShop/")
}

function handleGameLoading() {
    // Load a game when it is clicked. Games will be stored on a Google Drive.
    // --> Games will usually be local but a system for cloud loading can be made for games that require an internet connection.
    // --> Lets also work on making this system less painfulby making a getElementById for every game. That way new games can load after a system update. All scheduled games can get their ID from dev portal
    document.getElementById('gameIcon1').addEventListener("click", event => {
        win.loadFile("games/myGame.html") //Path to game relative to this file
    })
    document.getElementById('system-box').addEventListener("click", event => {
        // Open the system settings
        win.loadFile("settings.js")
    })
    

}


