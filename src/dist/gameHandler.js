// Use details to change things onClick
function scanContents() {
    // Get details about the session
    var remote = require('@electron/remote');
    // const win = remote.getCurrentWindow();
    // Get the file system
    var fs = require('fs');
    var path = require('path');
    console.log("Welcome to SNext Update Next");
    var files;
    try {
        files = fs.readdirSync(path.join(__dirname, "myGames"));
    }
    catch (err) {
        console.log("myGames doesn't exist, so let's make one!");
        fs.mkdirSync(path.join(__dirname, "myGames"));
        files = fs.readdirSync(path.join(__dirname, "myGames"));
    }
    if (files.length != 0) {
        files.forEach(readFile);
    }
    else {
        console.log("No files. :(");
    }
}
function readFile(item) {
    var path = require('path');
    console.log(path.basename(item));
    var item = path.basename(item);
    var ext = item.slice((item.lastIndexOf(".") - 1 >>> 0) + 2);
    var itemName = path.parse(item).name;
    console.log(ext);
    if (ext == "html") {
        var icon = (path.join(__dirname, "myGames/gameIcons/costume1.png"));
        // Add a new button with an image if the file is a game.
        var newElement = document.createElement("div");
        newElement.className = "card border border-5";
        // newElement.style = "width: 18rem;" 
        newElement.innerHTML =
            "<img src=\"".concat(icon, "\" class=\"card-img-top\" alt=\"...\"><div>class=\"card-body\"</div><h5 class=\"card-title> ").concat(itemName, " </h5><p class=\"card-text\">Isn't example text exciting? - TeleKiwi </p><a onclick=\"loadGame('").concat(item.toString(), "')\" class=\"btn btn-primary>Go somewhere</a></div>\"");
        document.getElementById("Games").appendChild(newElement);
    }
}
function geteShop() {
    var remote = require('@electron/remote');
    var win = remote.getCurrentWindow();
    win.loadURL("https://cube-enix.github.io/eShop/");
}
function loadGame(params) {
    var path = require('path');
    console.log(params);
    var remote = require('@electron/remote');
    var win = remote.getCurrentWindow();
    win.loadFile(path.join(__dirname, "myGames", params));
}