// DATA STRUCTURES AND ALGORITHMS

// RECURSIVE FUNCTIONS

// PRODUCT OF ARRAY

// Write a function that accepts an array of numbers and returns the product of all numbers in the array.

function productOfArry(arr) {
    let product = 1;

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return product;
        } else {
            product *= helperInput[0];
        };

        helper(helperInput.slice(1));
    }

    helper(arr);

    return product;
};

productOfArry([1, 2, 3]);