// Given a value, sum, if we want to make change for sum cents, and we have an infinite supply of each of coins[] = { coins1, coins2, .. , coinsn }, how many ways can we make the change? The order of coins doesn’t matter.

// Examples:

// Input: sum = 4, coins[] = { 1, 2, 3},
// Output: 4;
// Explanation: there are four solutions: { 1, 1, 1, 1; }, { 1, 1, 2 }, { 2, 2 }, { 1, 3 }.

// Input: sum = 10, coins[] = { 2, 5, 3, 6};
// Output: 5;
// Explanation: There are five solutions:
// { 2, 2, 2, 2, 2 }, { 2, 2, 3, 3 }, { 2, 2, 6 }, { 2, 3, 5 } and { 5, 5 }.

// https://www.geeksforgeeks.org/coin-change-dp-7/
// https://www.geeksforgeeks.org/understanding-the-coin-change-problem-with-dynamic-programming/


function getNumberOfWays(coins, n) {
    // create the ways array with a length of 1 plus the amount to stop overflow
    let ways = new Array(n + 1);

    for (let i = 0; i < n + 1; i++) {
        ways[i] = 0;
    }
    // set the first way equal to 1 because its 0 and there is 1 way to make 0 with 0 coins
    ways[0] = 1;

    // loop the coins array from the 0th index
    for (let i = 0; i < coins.length; i++) {

        // make a comparison between the current coin value and each index value of the ways array
        for (let j = 0; j < ways.length; j++) {
            if (coins[i] <= j) {
                // update the ways array
                ways[j] += ways[(j - coins[i])];
            }
        }
    }

    // return the value at the nth position of the ways array.  
    return ways[n];
}