/* Write a piece of code that will use the `Tile` constructor to create a 20x20 map of `Tile`s. 
The map will be a 2D array (array inside array).
  * Output the map to the console in the following way:
    * For each tile, output the height of the tile as an "icon" for that tile
  * Go thru all the map again, randomly burning and freezing some tiles. Then, re-output the map in the same way again */

function Tile(x, y) {

    var randomType = ["grass", "rocks", "water"];
    var randomCondition = ["burning", "normal", "frozen"]

    this.x = x;
    this.y = y;
    this.height = Math.floor((Math.random() * 3) + 1);
    this.type = randomType[Math.floor(Math.random() * 3)];
    this.condition = randomCondition[Math.floor(Math.random() * 3)];
};

Tile.prototype = {

    freeze: function(a) {
        if (a === "burning") {
            return (this.condition = "normal");
        }
        else if (a === "normal") {
            return (this.condition = "frozen");
        }
        else {
            return (this.height + 1);
        }
    },

    burn: function(a) {
        if (a === "frozen") {
            return (this.condition = "normal");
        }
        else if (a === "normal") {
            return (this.condition = "burning");
        }
        else {
            while (this.height > 0) {
                this.height--;
            }
        }
    }
};


function createWorld(){
    var world = [];
    for(var i = 0; i <= 20; i++){
        var row = [];
        for(var j = 0; j <= 20; j++){
            var tile = new Tile(i, j);
            row.push(tile)
        }
        world.push(row);
    }
    return world;
}
function displayWorld(map){
    var newWorld = [];
    map.forEach(function(row){
        var newRow = []
        row.forEach(function(tile){
            newRow.push(tile.height);
        })
        newWorld.push(newRow);
    })
    return newWorld;
}
console.log(displayWorld(createWorld()));