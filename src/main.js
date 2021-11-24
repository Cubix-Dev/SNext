function grabVersionInfo(gameName) {
    let gName = gameName.substr(0, gameName.length - 4);
    const gameInfo = gName.split(';');
    
    // TODO: add thing that grabs version number from server, for now this is a placeholder
    let latestVerNumber = 27;
    if (latestVerNumber > gameInfo[1]) {
        console.log("Game version number outdated!");
        // TODO: add auto-updating
    }
    return;
    
}

// TODO: add system to grab game files from server

/* async function convToJS(fileURL, fileName) {
    console.log("Converting project....");

    const { Project } = require("sb-edit");
    const fs = require("fs");
    const path = require("path");

    const file = fs.readFileSync(path.join(fileURL, fileName));
    const project = await Project.fromSb3(file);

    console.log(project);

} */

grabVersionInfo("LemonAttack;27.sb3");
// convToJS("src\\exampleProject\\", "LemonAttack;1.0.sb3");

