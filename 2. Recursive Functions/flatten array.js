// DATA STRUCTURES AND ALGORITHMS

// RECURSIVE FUNCTIONS

// FLATTEN ARRAY

// Write a function which accepts an array of arrays (i.e. nested array) and returns a new array with all values flattened.

// function flatten(arr) {
//     let results = [];

//     function helper(helperArr) {
//         if (helperArr.length === 0) return;
        
//         if (Array.isArray(helperArr[0])) {  // if it is an array then it is nested
//             results.push(...flatten(helperArr[0]));
//         } else {
//             results.push(helperArr[0]);
//         }

//         // The slice() method returns selected elements in an array, as a new array.
//         // A new array is returned excluding the 0th element (the array is sliced and returned from the 1st to the last element)
//         return helper(helperArr.slice(1));   
//     }
    
//     helper(arr);
    
//     return results;
// }

// let nestedArr = [[[[1]]], 2, 3, [[[[[[[[[[4, 5]]]]]]]]]], 6, 7, [8], 9];
// console.log(flatten(nestedArr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

function flatten(arr) {
    let results = [];

    function helper(helperArr) {
        if (helperArr.length === 0) return;

        if (Array.isArray(helperArr[0])) {    // if it is an array then it is nested
            results.push(...flatten(helperArr[0]));    // recursively flattens the 0th element until eventually it is no longer an array
        } else {
            results.push(helperArr[0]);
        }

        // The slice() method returns selected elements in an array, as a new array.
        // A new array is returned excluding the 0th element (the array is sliced and returned from the 1st to the last element)
        return helper(helperArr.slice(1));  
    }

    helper(arr);

    return results;
}

let nestedArr = [[[[1]]], 2, 3, [[[[[[[[[[4, 5]]]]]]]]]], 6, 7, [8], 9];
console.log(flatten(nestedArr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Iterative Solution

// loop while array has length
// slice to decrease array length