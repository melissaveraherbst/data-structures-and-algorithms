// SLIDING WINDOW CHALLENGE

// MAX SUBARRAY SUM

// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray (the length of the subarray is determined by the number argument passed to the function).

function maxSubarraySum(arr, n) {
    // validate array
    if (arr.length < 0) {
        return null;
    }
    
    // check that 'n' is not longer than the length of the array
    if ((arr.length - 1) < n) {
        return null;
    }

    // declare variables to track the maximum sum
    let maxSum = 0;
    let currentSum = 0;

    // add the first 'n' amount of numbers together and set it to the maxSum and currentSum variables
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
        currentSum = maxSum;
    }

    // Loop through the rest of the array (starting at index of n, because we already added the sum of the elements up to the nth element)
    for (let i = n; i < arr.length; i++) {
        currentSum = currentSum - arr[i - n] + arr[i]; // currentSum = 300 - 100 + 300 = 500 (2nd window)
        console.log(arr[i - n]);
        // Math.max() returns the larger of a set of supplied numeric expressions
        maxSum = Math.max(currentSum, maxSum); 
    };

    return maxSum;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 300 + 400 = 700
// [100 + 200] = 300  // 1st window is set to maxSum and currentSum
// [200 + 300] = 500 // 2nd window
// [300 + 400] = 700 // 3rd window

// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 4 + 2 + 10 + 23 = 39
// console.log(maxSubarraySum([2, 3], 3)); // null


