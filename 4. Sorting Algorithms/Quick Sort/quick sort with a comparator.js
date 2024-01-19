// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// SORTING ALGORITHMS

// QUICK SORT WITH A COMPARATOR

// Pivot Helper Functions
// Comparator
function comp(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.length - b.length;
    }
};

// swap the position of 2 array elements 
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Pivot Function
function pivot(arr, comparator, startIdx = 0, endIdx = arr.length - 1) {

    const pivot = arr[startIdx];
    let pivotidx = startIdx;

    for (let i = startIdx + 1; i <= endIdx; i++) {
        if (!comparator) {
            if (pivot > arr[i]) {
                pivotidx++;
                swap(arr, i, pivotidx);
            }
        } else {
            if (comparator(pivot, arr[i]) > 0) {
                pivotidx++;
                swap(arr, i, pivotidx);
            }
        }
    }

    swap(arr, startIdx, pivotidx);

    return pivotidx;
}

let nums = [50, 100, -3, 4, 20, 65, 99, 12, 0, 15, 16, 80];
console.log(pivot(nums, comp));  // 7
console.log(nums);               // [16, -3,  4, 20, 12, 0, 15, 50, 65, 99, 100, 80]  

let cats = ["Lancelot", "Blue", "Leo", "8-Ball", "Buttons", "Timothy", "Pumpkin"];
console.log(pivot(cats, comp)); // 6
console.log(cats);              // ['Pumpkin', 'Blue', 'Leo', '8-Ball', 'Buttons', 'Timothy', 'Lancelot']


// -----------------------------------------------------------------------------
// Quick Sort Function
// Recursive Solution
function quickSort(arr, comparator, startIdx = 0, endIdx = arr.length - 1) {
    if (startIdx < endIdx) {
        let pivotIdx = pivot(arr, comparator, startIdx, endIdx);

        // left side of the pivot
        quickSort(arr, comparator, startIdx, pivotIdx - 1);

        // right side of the pivot
        quickSort(arr, comparator, pivotIdx + 1, endIdx);
    };

    return arr;
};


console.log(quickSort(nums));   // [-3, 0, 4, 12, 15, 16, 20, 50, 65, 80, 99, 100];
console.log(quickSort(cats));   // ['8-Ball', 'Blue', 'Buttons', 'Lancelot', 'Leo', 'Pumpkin', 'Timothy']