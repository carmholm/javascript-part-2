//Read about the Array.prototype.sort method. Create a function that can be used with sort. This function should take two strings, and return a value that sort can use to determine which is the longest string. Finally, create an array of strings and try to get it sorted using your new function.

var stringArray = ["I am a string", "I am an even longer string","I am a longer string"]

stringArray.sort(function (a, b){
    if (a.length > b.length){
        return 1;
    }
    else if (b.length > a.length) {
        return -1;
    }
    else {
        return 0;
    }
});

var longestStr = stringArray[stringArray.length-1];

//console.log(longestStr);

// Create an array of objects (don’t need to use new here, just regular object literals). These objects will contain a name and email property. Then, run some code that will sort your array by the longest name. Then, run some code that will sort your array by e-mail address in alphabetical order.

var array = [{name: "tom", email: "tom@mail.com"},{name: "george", email: "george@mail.com"},{name: "evel", email: "evel@mail.com"},{name: "poop", email: "poop@mail.com"}]

array.sort(function (a, b){
    if (a.name.length > b.name.length){
        return 1;
    }
    else if (b.name.length > a.name.length) {
        return -1;
    }
    else {
        return 0;
    }
});

//console.log(array);

array.sort(function (a, b){
    if (a.email > b.email){
        return 1;
    }
    else if (b.email > a.email) {
        return -1;
    }
    else {
        return 0;
    }
});

//console.log(array);

//Create a function that can be used with Array.prototype.map. This function should take a number and return its square. Then, use this function with map on an array of numbers to check the result.

var array = [2,3,4,5,6];

function square (num){
    return num * num;
}

var returnSquare = array.map(square);

//console.log(returnSquare);

//Create a function that can be used with Array.prototype.map. This function should be able to take an object and square its “num” property. Then, use this function with map on an array of objects each containing a “num” property.

var listOfObjects = [{name:"Carmen", age: 29},{name:"Holmes", age: 4},{name:"Amelia", age: 66}]

function squareNum (object){
    return object.age * object.age;
}

var squareAge = listOfObjects.map(squareNum);

//console.log(squareAge);

//  Create a function called operationMaker that takes only a string called operation as argument. This string could be “add”, “subtract”, “mult” or “div”. Your function will return a function that will take two numbers and return the result of running operation on these numbers. The end result should let me do something like this:
//var adder = operationMaker(“add”); var sum = adder(5, 10); //15
//var multiplier = operationMaker(“mult”); var product = mult(5, 10); // 50

function operationMaker(operation) {
    if (operation === "add"){
        return function(a,b){
            return a + b;
        };
    }
    else if (operation === "subtract"){
        return function(a,b){
        return (a - b);
        };
    }
    else if (operation === "mult"){
        return function(a,b){
        return (a * b);
        };
    }
    else if (operation === "div"){
        return function(a,b){
        return (a / b);
        };
    }
    else {
        return 0;
    }
}

var adder = operationMaker("add");
var subtract = operationMaker("subtract");
var mult = operationMaker("mult");
var div = operationMaker("div");

var sum = adder(5,10);
var difference = subtract(9,3);
var product = mult(4,4);
var quotient = div(10,2);

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);


