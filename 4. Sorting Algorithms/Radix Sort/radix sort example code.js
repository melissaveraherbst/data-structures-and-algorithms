// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// SORTING ALGORITHMS

// RADIX SORT

// Radix Sort is a non-comparative sorting algorithm that works by distributing elements into buckets according to their individual digits or, more generally, their radix (base). It processes the digits or characters of the numbers, typically starting from the least significant digit (LSD) to the most significant digit (MSD) or vice versa. Radix sort can be applied to integers, strings, or other data types where the concept of digits or characters makes sense.

/*
Pseudocode:
1. Determine how many digits the largest number in the list has
2. Create an outer loop from n = 0 to this largest number of digits
3. For each iteration:
-- Create a bucket for each digit (0 - 9). Ideally, create an array and then add the buckets as subarrays
-- Place each number in its corresponding bucket based on it's nth digit.
4. Create an inner loop, to replace our existing array with the values in our buckets from 0 to 9.
5. Return the sorted array
*/

// --------------------
// HELPER FUNCTIONS

// Returns the number of digits in a given number
function digitCount(num) {
	return Math.abs(num).toString().length;
};

// Returns the maximum number of digits among all the numbers in the array
function mostDigits(arr) {
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		max = Math.max(max, digitCount(arr[i]));
	}
	return max;
}

// Returns the digit at the specified index (i) from the right in the given number (num)
function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

// --------------------
// SORTING FUNCTION
/*
1. `max` is initialized with the maximum number of digits among all the numbers in the array using the mostDigits function.
2. The outer loop runs for each digit position, from the least significant to the most significant digit.
3. Inside the outer loop, a 2D array (buckets) is created to represent 10 buckets (0 to 9) for each possible digit.
4. The inner loop iterates over the elements in the array and distributes them into buckets based on the current digit position using the getDigit function.
5. After distributing elements into buckets, the array is reconstructed by concatenating the elements from all buckets. This process is repeated for each digit position.
6. The final sorted array is returned.
*/
function radixSort(arr) {
	const max = mostDigits(arr);

	for (let n = 0; n < max; n++) {
		let buckets = Array.from({ length: 10 }, () => []);

		for (let i = 0; i < arr.length; i++) {
			let bucketIdx = getDigit(arr[i], n);
			buckets[bucketIdx].push(arr[i]);
		};

		arr = [].concat(...buckets);
	};

	return arr;
};

radixSort([8, 6, 1, 12]); // [1, 6, 8, 12]
radixSort([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 86]);
// [4, 7, 29, 86, 408, 902, 1556, 3556, 8157, 9637]


// =-=-=-=-=-=-=-=-=-=- 
// RADIX SORT WITH MIXED INTEGERS ARRAY LOGIC

// 1.
// Logically, the first one we should create is to check whether the array passed into the radix sort function has a mix of both positive and negative numbers. And to reduce the time it takes to do this, return true once it encounters a mix.

// Note: The following code is written in the Ruby Language

// RUBY CODE:
// function isMixedArr(arr)
//     positive = 0
//     negative = 0
//     for a in arr do
//         if a>=0
//             positive += 1
//         else 
//             negative += 1
//         end
//         if positive>0 && negative >0
//             return true
//             break
//         end
//     end
//     return false 
// end

// -----------------------------------------------------------------------------
// 2.
// If we do encounter a mixed array, the best thing to do is to split the array into two separate arrays and deal with them individually.

// def split(arr)
//     positive = []
//     negative = []
//     for a in arr do 
//         if a>=0
//             positive.push(a)
//         else 
//             negative.push(a)
//         end
//     end
//     return [positive, negative]
// end

// -----------------------------------------------------------------------------
// 3.
// But how should we deal with this in our code if there is a mix without creating additional logic, conditionals, and redundant code? We’ll just call #radix_sort recursively.

// def radix_sort(arr)
//     if contains_mixed(arr) 
//         mixed_array = split(arr)
//         positive = radix_sort(mixed_array[0])
//         negative = radix_sort(mixed_array[1])
//  return negative.concat(positive)

