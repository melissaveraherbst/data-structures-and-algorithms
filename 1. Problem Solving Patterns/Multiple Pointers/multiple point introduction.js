// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// PROBLEM SOLVING PATTERN: MULTIPLE POINTERS

// Create pointers or variables (e.g. var i or var j) that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

// CODE EXPAMPLE 1
// Write a function called sumZero, which accepts a sorted array of integers. The function should find the first pair where the sum is 0 (zero). Return an array that includes both integers that sum zero or else undefined if a pair does not exist.

/*
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
sumZero([-2, 0, 1, 2, 3]); // undefined
sumZero([1, 2, 3]); // undefined
*/

// =============================================================================
// NAÏVE NESTED LOOP SOLUTION
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function sumZeroNested(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }

    }
}

console.log(sumZeroNested([-3, -2, -1, 0, 1, 2, 3]));

// =============================================================================
// SOLUTION WITH MULTIPLE POINTERS
// Time Complexity: O(n)
// Space Complexity: O(1)

function sumZeroMultiplePointers(arr) {
    // pointers (index position variables)
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        }
        if (sum > 0) {
            right--;
        }
        if (sum < 0) {
            left++;
        }
    }
}

console.log(sumZeroMultiplePointers([-3, -2, -1, 0, 1, 2, 3]));