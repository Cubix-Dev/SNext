/* this class contains some attributes that each game has. at any time, the front end can reference this class and display it on screen. */

class Game
{
    constructor(name, openID, imgURL) {
        this.name = name;
        this.openID = openID;
        this.imgURL = imgURL;
    }

    
}

export { Game }