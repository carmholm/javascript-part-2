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

console.log(longestStr);

