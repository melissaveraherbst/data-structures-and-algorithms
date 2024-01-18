// MULTIPLE POINTERS CHALLENGE

// ARE THERE DUPLICATES

// Implement a function called, areThereDuplicates, which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. 

/*
Sample input:
areThereDuplicates(1, 2, 3) // false;
areThereDuplicates(1, 2, 2) // true;
areThereDuplicates("a", "b", "c", "c") // true;
*/

function areThereDuplicates(...args) {
    // pointers (index position variables)
    let i = 0;
    let j = 1;

    for (j; j < args.length; j++) {
        if (args[i] === args[j]) {
            return true;
        }
        i++;
    }

    return false;
}

// console.log(areThereDuplicates("a", "b", "c", "c", "a"));
