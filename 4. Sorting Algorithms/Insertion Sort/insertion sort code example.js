// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// SORTING ALGORITHMS

// INSERTION SORT

// ALGORITHM
// 1) Start with the second element in the array 
// 2) Compare this second element with the one before it and swap if needed
// 3) Continue to the next element. If it is in the incorrect position, iterate through the sorted portion (left side) and place the element in the correct position.

let numbers = [5, 3, 2, 8, 6, 12, 7];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];

        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j];
                arr[j] = temp;
            } else break;
        }
    }
    
    return arr;
}

insertionSort(numbers);

// Step-by-step breakdown:
// Initial array: [5, 3, 2, 8, 6, 12, 7]

// Iteration 1_(i = 1):

// Current element: 3
// Compare with 5, swap: [3, 5, 2, 8, 6, 12, 7]
// Iteration 2_(i = 2):

// Current element: 2
// Compare with 5, swap: [3, 2, 5, 8, 6, 12, 7]
// Compare with 3, swap: [2, 3, 5, 8, 6, 12, 7]
// Iteration 3_(i = 3):

// Current element: 8(no swaps needed)
// Iteration 4_(i = 4):

// Current element: 6
// Compare with 8, swap: [2, 3, 5, 6, 8, 12, 7]
// Iteration 5_(i = 5):

// Current element: 12(no swaps needed)
// Iteration 6_(i = 6):

// Current element: 7
// Compare with 12, swap: [2, 3, 5, 6, 8, 7, 12]
// Compare with 8, swap: [2, 3, 5, 6, 7, 8, 12]

// Final sorted array: [2, 3, 5, 6, 7, 8, 12];
