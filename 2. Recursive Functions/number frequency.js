// DATA STRUCTURES AND ALGORITHMS

// RECURSIVE FUNCTIONS

// NUMBER FREQUENCY

// Given an array and a number, write a function called numberFrequency that counts the occurrences of the number in the array

// RECURSIVE SOLUTION
function numberFrequency(array, num) {
    // add whatever parameters you deem necessary - good luck!
    // function returns -1 if num is out of bounds (applies to a sorted array only)
    if (array[0] > num || array[array.length - 1] < num) {
        return -1;
    }

    // recursive function
    // the goal is to split the original array into smaller arrays until the length of the smaller arrays each reach 1 element. Finally we compare this 1 element to the k value. We return 1 if they match and 0 if not. The 1's and 0's are added to determine the frequency of k in the original array.
    function recurse(arr, k) {
        // base cases
        if (arr.length === 1 && arr[0] === k) {
            return 1;
        }
        if (arr.length === 1 && arr[0] !== k) {
            return 0;
        }

        // left, right and middle index pointers
        let L = 0, R = arr.length, M = Math.floor((L + R) / 2);
        // we are splitting the original array in 2 using the built-in slice method, which returns selected elements in an array, as a new array.
        // the left side is split from the left index up to the middle index pointer
        // the right side is split from the middle index up to the right index pointer
        let arrL = [], arrR = [];

        // slice the left and right sides
        arrL = arr.slice(L, M);
        arrR = arr.slice(M, R);

        // function calls
        return recurse(arrL, k) + recurse(arrR, k);
    }

    let frequency = recurse(array, num);

    // function returns frequency if it is a positive integer or -1 (num does not exist in the array)
    return frequency || -1;
}

console.log(numberFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4 
console.log(numberFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1 
console.log(numberFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2 
console.log(numberFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1