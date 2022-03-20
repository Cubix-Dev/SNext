// File for loading games and then adding them to to the console.
var fs = require('fs');

var files = fs.readdirSync("games");

console.log(files);

for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
}
