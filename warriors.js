/*  * Create a constructor function called `Warrior` that can create new warriors. This function will take parameters `name`, and `gender`. `name` can be any string, `gender` can be `M` or `F`. It should create a warrior that has these properties:
    * `name`: the value that was passed to the constructor
    * `gender`: the value that was passed to the constructor
    * `level`: 1
    * `weapon`: wooden sword
    * `power`: a random number between 1 and 100
  * In addition to that, every object that gets created should have the following methods:
    * `fight`: will output to the console: "<name> rushes to the arena with <his/her> <weapon>"
    * `faceoff`: faceoff takes one argument called `opponent`. Based on the `power` of each opponent, 
    this method should output to the console which player won the fight based on their power. 
  * Finally, create a bunch of warriors and make them fight together.*/
  
  
function Warrior (name, gender) {
      this.name = name;
      this.gender = gender;
      this.level = 1;
      this.weapon = "wooden sword";
      this.power = Math.floor((Math.random()*100)+1)
  }
  
Warrior.prototype = {
    fight:function(){
        console.log(this.name + " rushes to the arena with " + this.gender + " " + this.weapon);
    },
    faceoff:function (opponent) {
        if (opponent.power < this.power){
            console.log(this.name + " won! " + this.name + " , you are a beast! Have a shot!");
        }
        else if (opponent.power === this.power){
            console.log("Look at those muscles! Stop this nonsense and go talk things out over a beer!");
        }
        else {
            console.log("Sorry " + this.name + ", you lost. Go drink alone.")
        }
    }
};

var xena = new Warrior ("Xena","her");
var carmen = new Warrior ("Carmen", "her");
var trump = new Warrior ("Donald", "his");
var watson = new Warrior ("Watson", "his");

console.log(xena.fight());