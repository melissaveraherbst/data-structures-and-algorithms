// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// PATTERN SEARCH ALGORITHMS

// IMPROVED STRING SEARCH WITH SLIDING WINDOW PROBLEM SOLVING

// String Pattern Search using the sliding window problem solving pattern and the substring() method in JavaScript

/**
 * stringSearch
 * @param {String} str - the string to check for substrings
 * @param {String} pattern - the pattern/substring to search for
 * @returns {Number} - the amount of times the pattern occurs in the string
 */

function stringSearch(str, pattern) {
	if (str === pattern) return 1;

	let matches = 0;
	let start = 0;
	let end = pattern.length;

	while (end <= str.length) {
		if (str.substring(start, end) === pattern) matches++;
		start++;
		end++;
	}

	return matches;
};

stringSearch('berrytartcranberryblueberrycheeseberrycake', 'berry');

// The substring() method returns the part of the string from the start to (not including) the end indexes, or to the end of the string if not end is defined.

// loop 1
// b e r r y t a r t c r a n b e r r y . . .
// 0 1 2 3 4 5 6 7 8 9
// S       E
// -----------------------------------------
// loop 2
// b e r r y t a r t c r a n b e r r y . . .
// 0 1 2 3 4 5 6 7 8 9  
//   S       E
// -----------------------------------------
// loop 3
// b e r r y t a r t c r a n b e r r y . . .
// 0 1 2 3 4 5 6 7 8 9  
//     S       E
// ...