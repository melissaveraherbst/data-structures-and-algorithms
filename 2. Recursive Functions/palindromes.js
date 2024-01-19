// DATA STRUCTURES AND ALGORITHMS

// RECURSIVE FUNCTIONS

// PALINDROMES

// Write a recursive function which returns true if the string passed to it is a palindrome or else returns false. 
// A palindrome reads the same forward and backward.

// isPalindrome('awesome') // false
// isPalindrome('tacocat') // true

function isPalindrome(str) {
    let result = true;
    
    function helper(helperInput) {
        if (helperInput.length <= 0) {
            return;
        };

        if (helperInput[0] !== helperInput[helperInput.length - 1]) {
            result = false;
        };

        helper(helperInput.slice(1, helperInput.length - 1));
    }

    helper(str);
    
    return result;
};

isPalindrome('awesome');
isPalindrome('racecar');