// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// PATTERN SEARCH ALGORITHMS

// BINARY SEARCH CHALLENGE

function numberFrequency(arr, num) {
    let frequency = 0;

    let L = 0, R = arr.length - 1; M = Math.floor((L + R )/ 2);

    while (L < R) {
        // applies to a sorted array
        if (arr[M] < num) L = M;
        if (arr[M] > num) R = M;
        
        if (arr[L] === num) frequency += 1;
        
        if (arr[R] === num) frequency += 1;

        L++;
        R--;        
    }
    
    if (L === R) {
        if (arr[L] === num) frequency += 1;
    }

    return frequency || -1;
}

console.log(numberFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(numberFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(numberFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(numberFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1