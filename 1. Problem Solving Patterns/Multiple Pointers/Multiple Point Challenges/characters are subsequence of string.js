// MULTIPLE POINTERS CHALLENGE

// CHARACTERS OF STRINGS ARE SUBSEQUENCE

// Write a function called isSubsequence, which takes two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. I.e. the function should check if the characters in the first string appear somewhere in the second string, without their order of appearance changing.

/*
Sample Inputs:
isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'stings') // true
isSubsequence('abc', 'abracadabra') // true
isSubsequence('abc', 'acb') // false (order matters)
*/

function isSubsequence(str1, str2) {
    if (!str1.length) {
        return false;
    }

    if (str1.length > str2.length) {
        return false;
    }

    let i = 0;
    let j = 0;

    let subsequenceStr = "";

    for (i; i < str2.length; i++) {
        if (str1[j] === str2[i]) {
            subsequenceStr += str2[i];
            j++;
        }
    }

    if (str1 === subsequenceStr) {
        return true;
    }
    
    return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'stings'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
