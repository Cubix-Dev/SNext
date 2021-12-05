function grabVersionInfo(gameName) {
    let gName = gameName.substr(0, gameName.length - 4);
    const gameInfo = gName.split(';');
    
    // TODO: add thing that grabs version number from server, for now this is a placeholder
    let latestVerNumber = 27;
    if (latestVerNumber > gameInfo[1]) {
        console.log("Game version number outdated!");
        // TODO: add auto-updating
    } else {
        return;
    }
    
}

// TODO: add system to grab game files from server
function getGameFiles(gameName) {
    // i yoinked this from the front end team, just gonna be honest
    var app = require('express')();
    var multer = require('multer');
    var upload = multer();
    var f = require('fs');
    let gamePath = "";

    switch(gameName) {
        case "MegaManScratchWars":
            gamePath = "games/MegaManScratchWars;0.017.sb3";
            break;
        case "SonicEvo":
            gamePath = "games/SonicEvo;1.1.2.sb3";
            break;
        case "SonicUnleashed":
            gamePath = "games/SonicUnleased;0.3.0.sb3";
            break;
    }

    const https = require('https')
    const options = {
    hostname: 'replit.com/@Simple21/ScratchNext-GameBase',
    port: 3000,
    path: gamePath,
    method: 'GET'
    };
}
grabVersionInfo("LemonAttack;27.sb3"); // when using this function, make sure to include the full file name!!!!
getGameFiles("MegaManScratchWars"); // when using *this* function, type the full game name in PascalCase!