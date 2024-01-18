// MULTIPLE POINTERS CHALLENGE

// AVERAGE PAIR

// Write a function called averagePair. Given a SORTED array of integers and a target average. Determine if there is a pair of values in the array where the average of a pair is equal to the target average.

function averagePair(arr, targetAverage) {
    if (!arr.length) {
        return false;
    }

    // pointers (index position variables)
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let pairAverage = (arr[i] + arr[j]) / 2;
        if (pairAverage === targetAverage) {
            return true;
        }
        if (pairAverage < targetAverage) {
            i++;
        }
        if (pairAverage > targetAverage) {
            j--;
        }
    }

    return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false
// console.log(averagePair([1, 2, 3, 4, 35, 69, 99], 84)) // true