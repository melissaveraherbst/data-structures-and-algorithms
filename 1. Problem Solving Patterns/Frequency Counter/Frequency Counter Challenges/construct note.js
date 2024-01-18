// FREQUENCY COUNTER CHALLENGE

// CONTRUCT NOTE

// Write a function, called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters. Each letter can only be used once.

// Examples:

// constructNote('aa', 'abc'); // false
// constructNote('abc', 'dcba'); // true
// constructNote('aabbcc', 'bcabcaddff'); // true

function constructNote(str1, str2) {
    let str1Frequency = {}, str2Frequency = {};

    // build frequency counter object for str1
    for (let i = 0; i < str1.length; i++) {
        str1Frequency[str1[i]] = str1Frequency[str1[i]] + 1 || 1;
    }

    // build frequency counter object for str2
    for (let i = 0; i < str2.length; i++) {
        str2Frequency[str2[i]] = str2Frequency[str2[i]] + 1 || 1;
    }

    // check that the str2 frequency object has enough letters to construct the str1
    for (const key in str1Frequency) {
        return str2Frequency[key] >= str1Frequency[key];
    }  
}

console.log(constructNote('aa', 'abc')); // false
console.log(constructNote('abc', 'dcba')); // true
console.log(constructNote('aabbcc', 'bcabcaddff')); // true


// function constructNote(str1, str2) {
    
//     if (!str1) return true; 
    
//     let str1Frequency = {}, str2Frequency = {};

//     // build frequency counter object for str1
//     for (let i = 0; i < str1.length; i++) {
//         str1Frequency[str1[i]] = str1Frequency[str1[i]] + 1 || 1;
//     }

//     // build frequency counter object for str2
//     for (let i = 0; i < str2.length; i++) {
//         str2Frequency[str2[i]] = str2Frequency[str2[i]] + 1 || 1;
//     }

//     // check that the str2 frequency object has enough letters to construct the str1
//     for (const key in str1Frequency) {
//         return str2Frequency[key] >= str1Frequency[key];
//     } 
// }