// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// PROBLEM SOLVING PATTERN: SLIDING WINDOW

// CODE EXAMPLE

/* Write a function called maxSubarraySum, which accepts
** 1) an array of integers and
** 2) a number called n
** i.e. maxSubarraySum(arr, n). 
** The function should calculate the maximum sum of 'n' consecutive elements in the array.
*/

/* 
Input Example:
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)

Output:
10

Explanation:
First window:   [1, 2], 5, 2, 8, 1, 5 // 3
Second window:  1, [2, 5], 2, 8, 1, 5 // 7
Third window:   1, 2, [5, 2], 8, 1, 5 // 7
Fourth window:  1, 2, 5, [2, 8], 1, 5 // 10 <<<
Fifth window:   1, 2, 5, 2, [8, 1], 5 // 9
Sixth window:   1, 2, 5, 2, 8, [1, 5] // 6
*/

// -----------------------------------------------------------------------------

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
        currentSum = currentSum - arr[i - n] + arr[i]; // currentSum = 6 - (1) + 4 // 9 *
        console.log(arr[i - n]);
        // Math.max() returns the larger of a set of supplied numeric expressions
        maxSum = Math.max(currentSum, maxSum); 
    };

    return maxSum;
}

//                          *  *  *
console.log(maxSubarraySum([1, 2, 3, 4, 5], 3));
//                          0  1  2  3  4 
//                         i-n       i


// [1 + 2 + 3] = 6     // 1st window is set to maxSum and currentSum
// [2 + 3 + 4] = 9     // 2nd window
// [3 + 4 + 5] = 12    // 3rd window