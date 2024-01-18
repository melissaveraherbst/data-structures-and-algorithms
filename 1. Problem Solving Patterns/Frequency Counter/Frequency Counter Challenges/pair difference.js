// FREQUENCY COUNTER CHALLENGE

// PAIR DIFFERENCE OF N

// Given an unsorted array, arr, and a number, n, find a pair of elements in the array whose difference is n. This function should return true if a pair exists or false if it does not.

// function findPair(arr, n) {
//     const hash = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (hash[arr[i]]) {
//             return true;
//         }
//         // findPair([6, 1, 4, 10, 2, 4], 2)
//         // hash[6 - 2] = 1;
//         // hash[6 + 2] = 1;
//         hash[arr[i] - n] = 1;
//         hash[arr[i] + n] = 1;
//     }
//     return false;
// }

function findPair(arr, n) {
    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i] - Math.abs(n)] ) {
            return true;
        } else hash[arr[i]] = 1;
    }

    return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22));// false
console.log(findPair([], 0)); // false
console.log(findPair([5, 5], 0)); // true
console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true