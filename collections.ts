const findMostFrequentElement = (array: number[]): string => {
    let result = 0;
    let resultFoundTimes = 0;

    array.forEach((value) => {
        const amount = array.filter((num) => num === value).length;
        if (amount > resultFoundTimes) {
            resultFoundTimes = amount;
            result = value;
        }
    });

    return `The most frequent number in the array is ${result}, it is found ${resultFoundTimes} times`;
}

console.log(findMostFrequentElement([7, 2, 2, 2, 3, 7, 7, 7, 7, 3, 5, 9, 7]));
