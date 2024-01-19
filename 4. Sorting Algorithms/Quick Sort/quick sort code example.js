// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// SORTING ALGORITHMS

// QUICK SORT

// Quick Sort is a divide - and - conquer sorting algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub - arrays according to whether they are less than or greater than the pivot.The process is then applied recursively to the sub - arrays.

// --------------------
// PIVOT FUNCTION

/* 
The pivot function is responsible for taking an array, setting the pivot value, and mutating the array so that all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it.

It's also helpful if this helper returns the index of where the pivot value winds up.

For example, if we decide the pivot will always be the first element in the array, it should behave in the following way:

var arr = [4, 2, 5, 3, 6];
pivot(arr); // pivot index = 2
arr; // [3, 2, 4, 5, 6];

In this code, the specifics of how the arr variable gets mutated are not important (it does not need to be sorted exactly). All that matters is that 4 winds up at index 2, with 3 and 2 to the left of it (in any order), and with 5 and 6 to the right of it (in any order).
*/

/* 
PSEUDO CODE:
1. Store the pivot in a variable from the start of the array (We are assuming the pivot is always the first element - however, note that it is best practice to grab a pivot from somewhere in the middle of an array).
2. Store the pivot's index in a variable to keep track of where the pivot will end up in the array.
3. Loop through the array
--3.1 Inside the loop, if the current element is smaller than the pivot:
---a. Increment the pivot index variable
---b. Swap the current element with the element positioned at the value of the pivot index variable.
4. Swap the starting pivot with the element positioned at the value of the pivot index variable.
5. Return the pivot's new index
*/


function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
    
    function swap(arr, i, j) {
        return [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    const pivot = arr[startIdx];
    
    let pivotidx = startIdx;
    
    for (let i = startIdx + 1; i <= endIdx; i++) {
        if (pivot > arr[i]) {
            pivotidx++;
            swap(arr, i, pivotidx);
        }
    }
    
    swap(arr, startIdx, pivotidx);
    
    return pivotidx;
}

let arr = [50, 100, -3, 4, 20, 65, 99, 12, 0, 15, 16, 80]; // pivot = arr[0]
console.log(pivot(arr));    // 7
console.log(arr);;          // [16, -3,  4, 20, 12, 0, 15, 50, 65, 99, 100, 80] 

// --------------------
// QUICK SORT FUNCTION
// Recursive Solution
function quickSort(arr, startIdx = 0, endIdx = arr.length - 1) {
    if (startIdx < endIdx) {
        let pivotIdx = pivot(arr, startIdx, endIdx);
        // left side of the pivot
        quickSort(arr, startIdx, pivotIdx - 1);
        // right side of the pivot
        quickSort(arr, pivotIdx + 1, endIdx);
    };
    return arr;
};

console.log(quickSort([50, 100, -3, 4, 20, 65, 99, 12, 0, 15, 16, 80])); // [-3, 0, 4, 12, 15, 16, 20, 50, 65, 80, 99, 100];