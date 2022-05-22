// File for loading games and then adding them to to the console.
var fs = require('fs');
var JSZip = require("jszip");
const { isContext } = require('vm');

var files = fs.readdirSync("games");
var element;

console.log(files);

for (var i;i<files.length;i++) {
    console.log(files[i]);
    // element='<div id="game" style="width: 150px; height: 175px; display: inline-block; margin-left: 20px;" data-number="1"><img src="Image Link" style="width: 150px; height: 150px;" id="ID"><p id="'+files[i]+'"style="font-family: "Segoe UI Bold"; font-size: 15px; text-align: center; margin-top: -3px">'+files[i]+'</p></div>';
    fs.readFile(i, function(err, data) {
        if (err) throw err;
        JSZip.loadAsync(data).then(function (zip) {
        files = Object.keys(zip.files);
        // --> Move the files to the correct location so the console can load it
        const dir = 'GameMemory/' + i
        try {
            // first check if directory already exists
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
                console.log("Directory is created.");
            } else {
                console.log("Directory already exists.");
            }
        } catch (err) {
            console.log(err);
        }
        // --> Stack overflow ftw. Tbh idk if this will actually work. 
        Object.keys(contents.files).forEach(function(filename) {
            zip.file(filename).async('nodebuffer').then(function(content) {
                fs.writeFileSync(dir, content);
            });
        });        
        console.log(files);
        });
    });
}

//          \(*O*)/
/* JSZip code ship wanted - Electro

var targetfile = "testfile.zip";

fs.readFile(targetfile, function(err, data) {
    if (err) throw err;
    JSZip.loadAsync(data).then(function (zip) {
      files = Object.keys(zip.files);
      console.log(files);
    });
});

*/
