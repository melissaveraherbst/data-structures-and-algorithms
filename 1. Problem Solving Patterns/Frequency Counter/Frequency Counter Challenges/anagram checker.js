// FREQUENCY COUNTER CHALLENGE

// ANAGRAM CHECKER

// An anagram is a word or phrase that's formed by rearranging the letters of another word or phrase. For example, the letters that make up “A decimal point” can be turned into the anagram “I'm a dot in place.”

// The goal of the challenge is to use a Frequency Counter problem solving pattern to determine if two strings are anagrams.

function frequencyCounter(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    // build frequency counter objects
    let frequencyCounter1 = {};

    for (const val of string1) {
        frequencyCounter1[val] = frequencyCounter1[val] + 1 || 1;
    }

    let frequencyCounter2 = {};

    for (const val of string2) {
        frequencyCounter2[val] = frequencyCounter2[val] + 1 || 1;
    }

    // check if the two frequency counters match
    for (const key in frequencyCounter1) {
        if (!frequencyCounter2[key]) {
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    // returns true if above conditions are passed
    return true;
}

// test frequencyCounter function 
let word1 = "night";
let word2 = "thing";

// console.log(frequencyCounter(word1, word2));