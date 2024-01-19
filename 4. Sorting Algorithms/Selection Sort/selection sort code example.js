// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// SORTING ALGORITHMS

// SELECTION SORT

// Algorithm:
// 1) Create an outer loop
// 2) Create a variable which stores the minimum value as the first element's index (position 0) inside the outer loop
// 3) Create an inner loop
// 4) If a smaller value(s) is found within the inner loop, set the smaller value as the new minimum value.
// 5) if the minimum's index is not the same as the index of the current outer loop's index, swap the two elements.

// helper function to swap elements at the provided indices in an array.
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};

// selection sort algorithm function
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // initial index value of the smallest value at the start of the loop
        let smallest = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            };
        }

        if (i !== smallest) {
            swap(arr, i, smallest);
        }
    }

    return arr;
}

console.log(selectionSort([32, 45, 26, 2, -20, 12, 17, -1])); // [-20, -1, 2, 12, 17, 26, 32, 45]

