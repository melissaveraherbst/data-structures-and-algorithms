// DATA STRUCTURES AND ALGORITHMS

// RECURSIVE FUNCTIONS

// FACTORIAL

// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four(4) is equal to 24, because 4 * 3 * 2 * 1 equals 24. Factorial zero(0) is always 1.

// function factorial(n) {
//     let total = 1;
//     while (n > 0) {
//         total = total * n;
//         n--;
//     };
//     return total;
// };

// factorial(4);

// RECURSIVE EXAMPLE
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    let result = n * factorial(n - 1);
    return result;
}

factorial(5);

// ---------------------------------------------------------
// Breakdown of factorial(5)

// n * factorial(n - 1)

// 5 * factorial(4)
// 5 * 24 = 120 // where "24" is the result from "4 * 6"

// 4 * factorial(3)
// 4 * 6 = 24 // where the "6" is the result from "3 * 2"

// 3 * factorial(2) 
// 3 * 2 = 6 // where the "2" is the result from "2 * 1"

// 2 * factorial(1)
// 2 * 1 = 2 // where the "1" is the result from "1 * 1"

// base case is reached
// 1 * factorial(0)
// 1 * 1 = 1;
// ---------------------------------------------------------





