// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// SORTING ALGORITHMS

// MERGE SORT WITH A COMPARATOR

// Including a comparator function allows for the sorting to be customized based on different criteria.This is particularly useful when sorting elements of diverse types or when a specific ordering is required.

// Algorithm:
// 1. Break up the array into halves until all smaller arrays have a length of 0 or 1, so that one value can be compared with another.
// 2. To achieve the goal in 1., the function calls itself recursively on each half of the array. 
// 3 Once you have smaller sorted arrays, merge those arrays with other sorted pairs until you are back at the full length of the array

// As before, the function should default to sorting numbers in ascending order. If you pass in a comparator function as a third argument, this comparator is what will be used. 

// Note that the input arrays will always be sorted according to the comparator.


// =============================================================================

/*
** helper function: comp()
** The comp function takes two arguments(a and b) and compares them based on their types.
** If both a and b are numbers, it performs a numerical comparison(a - b).
** If both are strings, it performs a lexicographical comparison using the standard string comparison logic.
** The comparator returns a negative value if a is less than b, a positive value if a is greater than b, and 0 if they are equal.
*/
function comp(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        if (a < b) return -1;
        else if (a > b) return 1;
        return 0;
    }
};

/*
** helper function: merge() (modified)
** The merge function now takes an additional parameter, comparator, which is optional.
** If comparator is not provided or is falsy, the function performs the comparison using the regular less-than (<) operator.
** If comparator is provided, it uses the comparator function for comparisons.
*/
function merge(arr1, arr2, comparator) {
    // return merged and sorted array
    let result = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (!comparator) {
            if (arr1[i] < arr2[j]) {
                result.push(arr1[i]);
                i++;
            } else {
                result.push(arr2[j]);
                j++;
            }
        } else {
            if (comparator(arr1[i], arr2[j]) < 0) {
                result.push(arr1[i]);
                i++;
            } else {
                result.push(arr2[j]);
                j++;
            }
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
};


/*
Sorting function (modified)
** The mergeSort function now takes an additional parameter, comparator, which is optional.
** The comparator is passed down to the merge function during the merging step.
** During the merging step, the comparator is used for element comparisons. 
*/
function mergeSort(arr, comparator) {
    if (arr.length <= 1) return arr;

    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle), comparator);
    let right = mergeSort(arr.slice(middle), comparator);

    return merge(left, right, comparator);
}


// Examples
let nums = [-2, -1, 18, 32, 35, 3, 4, -6, 5, 22];
console.log(mergeSort(nums, comp));; // -6, -2, -1,  3,  4, 5, 18, 22, 32, 35

let cats = ["Lancelot", "Blue", "Penny", "8-Ball", "Buttons", "Timothy", "Cadbury", "Mars"];
console.log(mergeSort(cats, comp));; // [ '8-Ball', 'Blue', 'Buttons', 'Cadburry', 'Lancelot', 'Mars', 'Penny', 'Timothy' ]