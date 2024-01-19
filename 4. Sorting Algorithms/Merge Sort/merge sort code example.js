// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// SORTING ALGORITHMS

// MERGE SORT
// Merge Sort is a divide - and - conquer algorithm that recursively divides the input array into halves, sorts each half, and then merges the sorted halves to produce a sorted result.

// Algorithm:
// 1. Break up the array into halves until all smaller arrays have a length of 0 or 1, so that one value can be compared with another.
// 2. To achieve the goal in 1., the function calls itself recursively on each half of the array. 
// 3. Once you have smaller sorted arrays, merge those arrays with other sorted pairs until you are back at the full length of the array


// Helper function
// merges two sorted arrays into a single sorted array
function merge(arr1, arr2) {
    let result = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
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


// Sorting function
function mergeSort(arr) {
    // base case
    // if the array has 1 or fewer elements, it is considered sorted, and the original array is returned.
    if (arr.length <= 1) return arr;

    // calculate the middle index of the array and recursively apply mergeSort to the left and right halves of the array
    // middle point of the array
    let middle = Math.floor(arr.length / 2);
    // left and right halves of the array
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));

    // the sorted left and right halves are merged using the helper function
    return merge(left, right);
}


// Data
// adding '-50' to include negative numbers in the numbers array
let numbers = Array(20).fill().map((el) => el = Math.floor(Math.random() * 100) - 50);

mergeSort(numbers);