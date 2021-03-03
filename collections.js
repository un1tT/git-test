var findMostFrequentElement = function (array) {
    var uniqueElements = new Set(array.slice());
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
var findElementWithLoops = function (array) {
    var uniqueSet = new Set(array);
    var result = 0;
    var resultFound = 0;
    for (var _i = 0, _a = new Array(...uniqueSet); _i < _a.length; _i++) {
        var value = _a[_i];
        var amount = 0;
        for (var _b = 0; _b < array.length; _b++) {
            var num = array[_b];
            (num === value) && amount++;
        }
        if (amount > resultFound) {
            resultFound = amount;
            result = value;
        }
    }
    return "The most frequent number in the array is " + result + ", it is found " + resultFound + " times";
};
var TEST_ARRAY = [7, 2, 2, 2, 3, 7, 7, 7, 7, 3, 5, 9, 7];
console.log('USING ARRAY METHODS: ', findMostFrequentElement(TEST_ARRAY));
console.log('USING LOOPS: ', findElementWithLoops(TEST_ARRAY));
