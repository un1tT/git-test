const findMostFrequentElement = (array: number[]): string => {
    let result = 0;
    let resultFound = 0;

    array.forEach((value) => {
        const amount = array.filter((num) => num === value).length;

        if (amount > resultFound) {
            resultFound = amount;
            result = value;
        }
    });

    return `The most frequent number in the array is ${result}, it is found ${resultFound} times`;
}

console.log(findMostFrequentElement([7, 2, 2, 2, 3, 7, 7, 7, 7, 3, 5, 9, 7]));
