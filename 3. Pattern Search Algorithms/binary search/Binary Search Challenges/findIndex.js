// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// PATTERN SEARCH ALGORITHMS

// BINARY SEARCH CHALLENGE

function findRotatedIndex(arr, num) {
    // add whatever parameters you deem necessary - good luck!
    let L = 0, R = arr.length - 1, M = Math.floor((L + R) / 2);

    let index;

    while (L < R) {
        if (arr[M] === num) index = M;

        if (arr[L] === num) index = L;
        if (arr[R] === num) index = R;

        L++;
        R--;

        if (L === R) {
            if (arr[L] === num) {
                index = L;
            }
        }
    }

    return index || -1;

}

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12); // -1
findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16); // 5