// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// PATTERN SEARCH ALGORITHMS

// LINEAR SEARCH (NUMBERS)

// Linear Search
// 1) Create a function which accepts an array and a value (where value is the searched value).
// 2) Check if any of the array elements are equal to the value.
// 3) If found, return the index at which the element is found or return -1 if it is not found.

const linearSearch = (arr, val) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) return i;
	}

	return -1;
};

const result = linearSearch([55, 125, 8, 122, 2, 36, 100], 122);
console.log(result);
