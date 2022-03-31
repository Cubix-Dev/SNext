// File for loading games and then adding them to to the console.
var fs = require('fs');
const { isContext } = require('vm');

var files = fs.readdirSync("games");
var element;

console.log(files);

for (var i;i<files.length;i++) {
    console.log(files[i]);
    // element='<div id="game" style="width: 150px; height: 175px; display: inline-block; margin-left: 20px;" data-number="1"><img src="Image Link" style="width: 150px; height: 150px;" id="ID"><p id="'+files[i]+'"style="font-family: "Segoe UI Bold"; font-size: 15px; text-align: center; margin-top: -3px">'+files[i]+'</p></div>';
    element = files[i];
    document.getElementById('games').innerHTML += element;
}

//          \(*O*)/