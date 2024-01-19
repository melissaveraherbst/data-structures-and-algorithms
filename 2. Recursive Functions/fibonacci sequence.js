// DATA STRUCTURES AND ALGORITHMS

// RECURSIVE FUNCTIONS

// FIBONACCI SEQUENCE FUNCTION

// Write a recursive function which accepts a number and returns the nth number in the Fibonacci sequence.

// The Fibonacci sequence is the series of numbers where each number is the sum of the two preceding numbers. For example, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, …

// Sample outputs:
// fib(6) // 8
// fib(10) // 55

// RECURSIVE SOLUTION
function fibonacci(n) {
    // base cases
    if (n <= 1) return n;
    // return value
    let result = fibonacci(n - 1) + fibonacci(n - 2);
    return result;
}

console.time("recursive");
console.log(fibonacci(30)); // 45+ will take +- 10 secs to compute
console.timeEnd("recursive");

// fibonacci sequence numbers:      0   1   1   2   3   5   8   13   21  
//                                                 n-2 n-1  n
// index:                           0   1   2   3   4   5   6   7    8


// *************************************
// NOTE:
// The recursive solution for the fibonacci sequence has a Time Complexity of O(2^n) (VERY BAD!)
// *************************************


// =======================================================================================
// ITERATIVE SOLUTION

// visual example
//  0  1  2  3  4  5  6  7   8   9   10     // index
//                 i  j                     // pointers
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]    // array
// 5 + 8 = 13

function fibIterative(n) {
    let resultsArray = [];
    resultsArray[0] = 0;
    resultsArray[1] = 1;
    if (n <= 1) return resultsArray[n];
    while (resultsArray.length < n + 1) {
        let i = resultsArray[resultsArray.length - 1];
        let j = resultsArray[resultsArray.length - 2];
        resultsArray.push(i + j);
    }
    return resultsArray[n];
}

console.time("iterative");
console.log(fibIterative(1000));
console.timeEnd("iterative");

// =======================================================================================
// RECURSIVE SOLUTION WITH MEMOIZATION
// (refer to the section on Dynamic Programming of this course)

let cache = [];
function fibMemoized(n) {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];
    let result = fibMemoized(n - 1) + fibMemoized(n - 2);
    cache[n] = result;
    return result;
}

console.time("memoized");
console.log(fibMemoized(10465)); // n maximum before the call stack size is exceeded
console.timeEnd("memoized");

// OR
// function fibMemoized(n) {
//     let cache = [];
//     function recurse(num) {
//         if (cache[num]) return cache[num];
//         if (num <= 1) return num;
//         let result = recurse(num - 1) + recurse(num - 2);
//         cache[num] = result;
//         return result;
//     }
//     return recurse(n);
// }

// console.time("memoized");
// console.log(fibMemoized(30));
// console.timeEnd("memoized");

// =======================================================================================
// CONCLUSION
// The Iterative solution is the quickest in performance compared to both recursive solutions.
// The memoized recursive solution is a lot more efficient than the basic recurisive solution, but it can crash when it reaches the maximum call stack size because of all the recursive function calls. This cannot happen in the iterative solution


