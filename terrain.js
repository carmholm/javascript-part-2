/*Create a constructor function called `Tile` that can create new tiles. 
This function will take parameters `x` and `y` and create an object that has these properties:
    * `x`: the value that was passed to the constructor
    * `y`: the value that was passed to the constructor
    * `height`: a random number between 1 and 3
    * `type`: a random word between `grass`, `rocks` or `water`
    * `condition`: a random word between `burning`, `normal` or `frozen`
  * In addition to that, every object that gets created should have the following methods:
    * `freeze`: if the object is burning, then its condition should change to `normal`. 
    if the object is normal then its condition should change to `frozen` and 
    if it is `frozen`, its `height` should increment by 1
    * `burn`: if the object is frozen, then it will become normal. 
    if the object is normal, then it should change to `burning`. 
    if it is already burning, then its height should decrement by 1 until it gets to 0.
  * Write a piece of code that will use the `Tile` constructor to create a 20x20 map of `Tile`s. The map will be a 2D array (array inside array).
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
