// MULTIPLE POINTER CHALLENGE

// PAIR DIFFERENCE OF N

// Given an unsorted array, arr, and a number, n, find a pair of elements in the array whose difference is n. This function should return true if a pair exists or false if it does not.

// Notes:
// -- The array must be sorted to use the Multiple Pointer problem solving pattern
// -- To sort the array, we are using the built in array.sort method with an average time complexity of Θ(n log(n)). This is similar to the majority of available sorting algorithms.  

function findPair(arr, n) {

    if (!arr.length) return false;

    // sort the original array
    arr.sort((a, b) => a - b);

    // index pointers
    let i = 0, j = 1;

    // take absolute value of n
    n = Math.abs(n);

    while (i < j) {
        // take absolute value of the difference between the current pair
        let diff = Math.abs(arr[i] - arr[j]);

        if (diff === n) {
            return true;
        }

        if (diff < n) j++;
        else i++;

    }

    // return false by default unless a pair is found above
    return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 0)); // false
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5, 5], 0)); // true
console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true