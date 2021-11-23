function grabVersionInfo(gameName) {
    // TODO: can't complete until game file grabbing's done
}

// TODO: add system to grab game files from server

async function convToJS(fileURL, fileName) {
    console.log("Converting project....");

    const { Project } = require("sb-edit");
    const fs = require("fs");
    const path = require("path");

    const file = fs.readFileSync(path.join(fileURL, fileName));
    const project = await Project.fromSb3(file);

    console.log(project);

}

convToJS("src\\exampleProject\\", "LemonAttack;1.0.sb3");

