// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// SORTING ALGORITHMS

// BUBBLE SORT

// NOTES:
// To minimize the amount of iterations, the function includes the following code:
// 1. outer loop: iterates through the array from end to beginning
// 2. inner loop: loops from beginning to i + 1 (minimizes amount of iterations.)
// 3. a "swapped" variable: sets a boolean value used as a short circuit when if no swaps occured in the last iteration, then we are done sorting and we want to break out of the balance of the loops left.


// helper function to swap elements at the provided indices in an array.
function swap(arr, index1, index2) {
   let temp = arr[index1];
   arr[index1] = arr[index2];
   arr[index2] = temp;
}

// bubble sort algorithm function
function bubbleSort(arr) {
   // outer loop
   for (let i = arr.length - 1; i >= 0; i--) {
      let swapped = -1;

      // inner loop
      for (let j = 0; j < i + 1; j++) {
         if (arr[j] > arr[j+1]) {
            swap(arr, j, j+1)
            swapped = 1;
         }
      }

      // After the inner loop, if no swaps were made (!swapped), it means the array is already sorted, and the function breaks out of the outer loop.
      if (!swapped) break;
   }

   console.log(arr);
   return arr;
}


let numbers = [8, 6, 7, 9, 5, 4, 1, 2, 3];
bubbleSort(numbers);