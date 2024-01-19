// DATA STRUCTURES AND ALGORITHMS

// RECURSIVE FUNCTIONS

// SUM OF RANGE

// Recursion is a technique used to solve computer problems by creating a function that calls itself until your program achieves the desired result.
/* Recursion functions must have:
** a base case (a stopping condition)
** a return value
*/

// SUM OF RANGE FROM ZERO TO N

// Write a function which accepts a number. This function should add up all the numbers from 0 up to the number passed into the function.

// Recursive solution
function sumRange1(n) {
    // base case
    if (n === 1) return 1;
    // return value
    return n + sumRange(n - 1);
};

// sumRange(4) // 10 (4 + 3 + 2 + 1 = 10);
// 1st return value:
// 4 + sumRange(4 - 1);
// 2nd return value:
// 3 + sumRange(3 - 1);
// 3rd return value:
// 2 + sumRange(2 - 1);
// final return value:
// 1

// Iterative solution
function sumRange2(n) {
    let sum = 0;
    while (n > 0) {
        sum = sum + n;
        n--;
    }
    return sum;
};

sumRange2(4);
