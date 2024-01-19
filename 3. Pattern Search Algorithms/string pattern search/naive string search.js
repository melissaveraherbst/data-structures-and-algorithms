// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// PATTERN SEARCH ALGORITHMS

// NAIVE STRING SEARCH

// Write a function which accepts two strings, string and pattern. Count how many times the pattern appears in the string.

function naiveStringSearch(str, pattern) {
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < pattern.length; j++) {
			if (str[i + j] !== pattern[j]) break;
			if (j === pattern.length - 1) count++;
		}
	}
	return count;
}

console.log(naiveStringSearch('blueberrystrawberry', 'berry')); // 2

// i:
// b  l  u  e  b  e  r  r  y  s  t  r  a  w  b  e  r  r  y   (value)
// 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18  (index)

// j:
// b  e  r  r  y
// 0  1  2  3  4

// str[i + j] !== pattern[j]
// str[0 + 0] !== pattern[0] // MATCH. The inner loop (j) continues 
// -------------------------------------------------------------
// str[0 + 1] !== pattern[1] // breaks because they do not match
// -------------------------------------------------------------
// str[1 + 0] !== pattern[0] // breaks because they do not match
// -------------------------------------------------------------
// str[2 + 0] !== pattern[0] // breaks because they do not match
// -------------------------------------------------------------
// str[3 + 0] !== pattern[0] // breaks because they do not match
// -------------------------------------------------------------
// str[4 + 0] !== pattern[0] // MATCH. The inner loop (j) continues
// -------------------------------------------------------------
// str[4 + 1] !== pattern[1] // MATCH. The inner loop (j) continues
// -------------------------------------------------------------
// str[4 + 2] !== pattern[2] // MATCH. The inner loop (j) continues
// -------------------------------------------------------------
// str[4 + 3] !== pattern[3] // MATCH. The inner loop (j) continues
// -------------------------------------------------------------
// str[4 + 4] !== pattern[4] // MATCH. The inner loop (j) continues
// -------------------------------------------------------------
// str[5 + 0] !== pattern[0] // breaks because they do not match... etc.
