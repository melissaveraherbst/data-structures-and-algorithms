// FREQUENCY COUNTER CHALLENGE

// SAME DIGITS FREQUENCY

// Write a function called sameFrequency. Given two positive integers, determine if the two numbers have the same frequency of digits.

/*
Sample input:
sameFrequency(182, 281) // true
sameFrequency(3589578, 5973858) // true
sameFrequency(34, 14) // false
*/

function sameFrequency(x, y) {
    // check if the inputs are numbers
    if (typeof x !== "number" || typeof y !== "number") {
        return false;
    }

    // build frequency counter for x
    let num1 = x.toString(); // numbers in JS are not iterable, so we need to convert the numbers to iterable objects first.
    let frequencyCounter1 = {};
    for (const val of num1) {
        if (frequencyCounter1[val]) {
            frequencyCounter1[val] += 1;
        } else {
            frequencyCounter1[val] = 1;
        }
    }

    // build frequency counter for y
    let num2 = y.toString();
    let frequencyCounter2 = {};
    for (const val of num2) {
        if (frequencyCounter2[val]) {
            frequencyCounter2[val] += 1;
        } else {
            frequencyCounter2[val] = 1;
        }
    }

    for (const key in frequencyCounter1) {
        // checks if the key exists
        if (!frequencyCounter2[key]) {
            return false;
        }
        // checks if the values match
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }

    // returns true if none of the conditions above are true
    return true;
}

// console.log(sameFrequency(123, 321));