// DATA STRUCTURES AND ALGORITHMS

// RECURSIVE FUNCTIONS

// COLLECT ODDS

// Pure Recursion Function
// function collectOdds(arr) {
//     let odds = [];

//     if (arr.length === 0) {
//         return odds;
//     }

//     if (arr[0] % 2 !== 0) {
//         odds.push(arr[0]);
//     }

//     odds = odds.concat(collectOdds(arr.slice(1)));
//     return odds;
// };

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// collectOdds(numbers);

/* Pure Recursion Tips
** For arrays, use methods like slice, concat, and the spread operator which do not mutate the arrays.
** Strings are immutable. Use methods like slice, substr, and substring to make copies of strings.
*/

// =======================================================================================
// Helper Recursion Function
function collectOdds(arr) {
    let odds = [];

    // The helper function calls itself
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return odds;
        }

        if (helperInput[0] % 2 !== 0) {
            odds.push(helperInput[0]);
        }

        // the helper function calls itself within it's own code
        helper(helperInput.slice(1)); 
    }

    // the main function calls the helper function instead of calling itself in it's own code
    helper(arr);

    // return value
    return odds;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

collectOdds(numbers);
