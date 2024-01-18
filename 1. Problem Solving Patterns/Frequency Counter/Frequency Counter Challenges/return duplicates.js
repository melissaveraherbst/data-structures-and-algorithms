// FREQUENCY COUNTER CHALLENGE

// RETURN ALL DUPLICATES

// Given an array of positive integers, find all the elements that appear more than once in this array. You may return the elements in any order.

function findAllDuplicates(arr) {
    // add whatever parameters you deem necessary - good luck!
    let frequencyCounter = {};

    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        frequencyCounter[arr[i]] = frequencyCounter[arr[i]] + 1 || 1;
    }

    for (const key in frequencyCounter) {
        if (frequencyCounter[key] > 1) {
            duplicates.push(parseInt(key));
        }
    }

    return duplicates;
}


findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]); // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]); // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]); // array with 3, 2, and 1