// MULTIPLE POINTERS CHALLENGE

// COUNT UNIQUE VALUES

// Implement a function called countUniqueValues, which accepts a *sorted* array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
    // accumulator
    let count = 0;
    // pointers (index position variables)
    let i = 0;
    let j = 1;

    if (!arr.length) {
        count = 0;
    }

    while (i < arr.length) {
        if (arr[i] === arr[j]) {
            i++;
            j++;
        } else {
            count += 1;
            i++;
            j++;
        }
    }
    return count;
}

// console.log(countUniqueValues([1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9]));


// =======================================================================================
// The following block of code is not related to the Multiple Pointers problem solving pattern. It is a different approach to find unique values in an array. The 'Set' object lets you store unique values of any type. The "size" property can be used to retrieve the length of the set.
function countUniqueValuesWithSet(arr) {
    return new Set(arr).size;
}

// console.log(countUniqueValuesWithSet([1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9]));