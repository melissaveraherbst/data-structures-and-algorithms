// FREQUENCY COUNTER CHALLENGE

// ARE THERE DUPLICATES?

// Implement a function called, areThereDuplicates, which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. 
/*
Sample input:
areThereDuplicates(1, 2, 3) // false;
areThereDuplicates(1, 2, 2) // true;
areThereDuplicates("a", "b", "c", "c") // true;
*/

function areThereDuplicates(...args) {
    if (!args.length) {
        return false;
    }

    let frequencyCounter = {};

    for (const val of args) {
        frequencyCounter[val] = frequencyCounter[val] + 1 || 1;
    }

    for (const key in frequencyCounter) {
        if (frequencyCounter[key] > 1) {
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 5)); // false
console.log(areThereDuplicates("a", "b", "c", "c")); // true

// ///////////////////////////////////////////////////////////////////////
// ARE THERE DUPLICATES SOLUTION WITH SET
/*
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}
*/
// ///////////////////////////////////////////////////////////////////////