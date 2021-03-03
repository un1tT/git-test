const findMostFrequentElement = (array: number[]): string => {
    const uniqueElements = new Set([...array]);

    let result = 0;
    let resultFound = 0;

    uniqueElements.forEach((value) => {
        const amount = array.filter((num) => num === value).length;

        if (amount > resultFound) {
            resultFound = amount;
            result = value;
        }
    });

    return `The most frequent number in the array is ${result}, it is found ${resultFound} times`;
}

const findElementWithLoops = (array: number[]): string => {
    const uniqueSet = new Set(array);
    let result = 0;
    let resultFound = 0;

    for (const value of new Array(...uniqueSet)) {
        let amount = 0;

        for (const num of array) {
           (num === value) && amount++;
        }

        if (amount > resultFound) {
            resultFound = amount;
            result = value;
        }
    }

    return `The most frequent number in the array is ${result}, it is found ${resultFound} times`;
}

const TEST_ARRAY = [7, 2, 2, 2, 3, 7, 7, 7, 7, 3, 5, 9, 7];

console.log('USING ARRAY METHODS: ', findMostFrequentElement(TEST_ARRAY));
console.log('USING LOOPS: ', findElementWithLoops(TEST_ARRAY));
