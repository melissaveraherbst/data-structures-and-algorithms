// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// PROBLEM SOLVING PATTERN: FREQUENCY COUNTER

// This pattern uses objects or sets to collect frequencies of values.

/* Why use a frequency counter pattern ?

The frequency counter pattern is best applied to situations where we are comparing data and are interested the frequency of occurance. Use cases can be:
* Given two positive integers, find out if the two numbers have the same frequency of digits.
* Given two strings, determine if the second string is an anagram of the first.
* Determine if there are duplicates in a set of data.

The advantage is that it will usually have big O of O(n) time complexity compared to other approaches, such as a nested loop solution, that will have big O of O(n²). */


// CODE EXAMPLE
// In the following code, we will write a function, frequencyCounter, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency values must be the same.

// -----------------------------------------------------------------------------
// SOLUTION WITH NESTED LOOPS
// Time Complexity: O(n²)

function isSquared(array1, array2) {
    // check if the arrays have the same length
    if (array1.length !== array2.length) {
        return false;
    }
    // compare the values in the two arrays
    for (let i = 0; i < array1.length; i++) {
        // checking if the squared value of an element in array1 exists in array2
        // The indexOf() method returns the position of the first occurrence of a value or -1 if the value is not found
        let indexOfMatch = array2.indexOf(array1[i] ** 2);
        if (indexOfMatch === -1) {
            return false;
        }
        // we must use the splice method to remove the occurrence of the match, since the indexOf() method will return true on the same index if we do not remove it in case of duplicate values
        array2.splice(indexOfMatch, 1);
    }
    return true;
}

// -----------------------------------------------------------------------------
// SOLUTION WITH THE FRQUENCY COUNTER PATTERN
// Time Complexity: O(n)

function frequencyCounter(array1, array2) {
    // check if the arrays have the same length
    if (array1.length !== array2.length) {
        return false;
    }
    // Here we use objects to collect multiple inputs with their count (a thing to keep in mind is that object keys are always unique. We can also use a Set).
    // Convert the array elements to objects respectively, setting the object keys equal to the array elements and the object values equal to the frequency of each array element.
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    array1.forEach((val) => {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        // frequencyCounter1 = { '1': 1, '2': 1, '3': 1, '4': 1, '5': 2 };
    })
    array2.forEach((val) => {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
        // frequencyCounter2 = { '1': 1, '4': 1, '9': 1, '16': 1, '25': 2 };
    })
    // check that the frequency values is the same
    for (let key in frequencyCounter1) {
        if (!frequencyCounter2[key ** 2]) {
            return false;
        }            
        if (frequencyCounter1[key] !== frequencyCounter2[key**2]) {
            return false;
        }
    }
    return true;
}


// TEST DATA 1
const array1 = [1, 2, 3, 4, 5, 5];
const array2 = [1, 4, 9, 16, 25, 25];


// TEST DATA 2
// const array1 = [1, 2, 3, 4, 5, 5];
// const array2 = [1, 4, 9, 16, 25, 100];


console.log(isSquared(array1, array2));
// console.log(frequencyCounter(array1, array2));