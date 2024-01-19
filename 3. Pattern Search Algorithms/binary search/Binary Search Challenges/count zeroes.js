// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// PATTERN SEARCH ALGORITHMS

// BINARY SEARCH CHALLENGE

function countZeroes(arr) {
    let total = 0;

    let L = 0, R = arr.length - 1; M = Math.floor((L + R )/ 2);

    while (L < R) {
        if (arr[M] > 0) L = M;

        if (arr[L] === 0) total += 1;
        
        if (arr[R] === 0) total += 1;
        
        L++;
        R--;

        if (L === R) {
            if (arr[L] === 0) total += 1;
        }
    }

    return total;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0