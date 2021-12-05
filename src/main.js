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

grabVersionInfo("LemonAttack;27.sb3");