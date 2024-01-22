// COIN CHANGE PROBLEM - MINIMUM COINS NEEDED TO REACH TARGET VALUE

// Write a function, called coinChange, which accepts two parameters: 1. an array of coin denominations; 2. a target value.
// The function should return the least amount of coins needed to obtain the value from the given array of denominations. If the target value cannot be made up by any combination of the given coins, return -1.

// You may assume that you have an infinite number of each coin.

// Code Logic:
// Start with the largest denomination
// Once the total can not use the largest, move to the second largest.
// Work your way down until there is no more change.

function coinChange(denominations, target) {
    let result = [];

    // select the largest denomination
    let coin = denominations[denominations.length - 1];

    let total = 0;

    while (denominations.length) {
        if (total === target) break;
        if (total + coin <= target) {
            total += coin;
            result.push(coin);
        } else {
            // remove current coin
            denominations.pop();
            // update coin to next largest denomination
            coin = denominations[denominations.length - 1];
        }
    }

    // we have run out of coins and the target value has not been met
    if (!denominations.length && total !== target) return -1;

    return result.length;
}

console.log(coinChange([2], 3)); // -1