var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var findMostFrequentElement = function (array) {
    var uniqueElements = new Set(__spreadArray([], array));
    var result = 0;
    var resultFound = 0;
    uniqueElements.forEach(function (value) {
        var amount = array.filter(function (num) { return num === value; }).length;
        if (amount > resultFound) {
            resultFound = amount;
            result = value;
        }
    });
    return "The most frequent number in the array is " + result + ", it is found " + resultFound + " times";
};
console.log(findMostFrequentElement([7, 2, 2, 2, 3, 7, 7, 7, 7, 3, 5, 9, 7]));
