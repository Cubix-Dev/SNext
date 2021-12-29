// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const remote = require('electron').remote;

const win = remote.getCurrentWindow(); /* Note this is different to the html global `window` variable */

// When document has loaded, initialise
document.onreadystatechange = (event) => {
    if (document.readyState == "complete") {
        handleWindowControls();
        handleGameLoading();


    }
};

window.onbeforeunload = (event) => {
    /* If window is reloaded, remove win event listeners
    (DOM element listeners get auto garbage collected but not
    Electron win listeners as the win is not dereferenced unless closed) */
    win.removeAllListeners();
}

function handleWindowControls() {
    // Make minimise/maximise/restore/close buttons work when they are clicked
    document.getElementById('min-button').addEventListener("click", event => {
        win.minimize();
    });

    document.getElementById('max-button').addEventListener("click", event => {
        win.maximize();
    });

    document.getElementById('restore-button').addEventListener("click", event => {
        win.unmaximize();
    });

    document.getElementById('close-button').addEventListener("click", event => {
        win.close();
    });

    // Toggle maximise/restore buttons when maximisation/unmaximisation occurs
    toggleMaxRestoreButtons();
    win.on('maximize', toggleMaxRestoreButtons);
    win.on('unmaximize', toggleMaxRestoreButtons);

    function toggleMaxRestoreButtons() {
        if (win.isMaximized()) {
            document.body.classList.add('maximized');
        } else {
            document.body.classList.remove('maximized');
        }
    }
}

function handleGameLoading() {
    // Load a game when it is clicked. Games will be stored on a Google Drive.
    document.getElementById('gameIcon').addEventListener("click", event => {
        
        const fs = require("fs");

        /* function downloadGame() {
            const https = require("https");
            

            const file = fs.createWriteStream("../testgame/Lemon Attack.html");
            const request = https.get("https://replit.com/@Simple21/SNext-GameBase#games/Lemon%20Attack.html", function(response) {
                response.pipe(file);
            })
        } 
        
        if(fs.existsSync("../testgame/Lemon Attack.html")) {
            win.loadFile("../testgame/Lemon Attack.html");
        } else {
            downloadGame();
        } */

        // temp 
        win.loadFile("../testgame/LOCAL Lemon Attack.html");

    })
}


