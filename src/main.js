let status = ''; // tracks global status for these steps

function updateStatus(status) {
    console.clear();
    switch(status) {
        case 'conv':
            console.log("Converting project....");
            break;
    }
}

function grabVersionInfo(gameName) {
    // TODO: can't complete until game file grabbing's done
}

// TODO: add system to grab game files from server

async function convToJS(fileURL, fileName) {
    status = 'conv';
    updateStatus();

    const { Project } = require("../sb-edit");
    const fs = require("fs");
    const path = require("path");

    const file = fs.readFileSync(path.join(fileURL, fileName));
    const project = await Project.fromSb3(file);

    console.log(project);

}

convToJS("src\\exampleProject\\", "LemonAttack;1.0.sb3");

