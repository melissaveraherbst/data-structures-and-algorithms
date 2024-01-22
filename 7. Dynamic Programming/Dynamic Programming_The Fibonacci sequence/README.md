# Dynamic Programming

Dynamic programming is a technique that breaks the problems into sub-problems, and saves the result for future purposes so that we do not need to compute the result again.

The main limitation of dynamic programming is that it can only be applied to problems divided into sub-problems. Furthermore, each of the sub-problems should be solvable on its own.

Most of the Dynamic Programming problems are solved in two ways:

1. Tabulation (Bottom-Up): Accelerates performance and space complexity (O(1)) by storing the result of a previous result in a "table" (usually an array/hash table). Tabulation is usually done using iteration.
2. Memoization (Top-Down): Accelerates performance by storing the return values of expensive function calls, and retrieving that same information from the next time it's needed instead of computing it again. Memoization is usually done using recursion

The best way to demonstrate the functionality and benefits of dynamic programming is to apply it in the 'nth Fibonacci Number' algorithm.

The Fibonacci sequence is the series of numbers where each number is the sum of the two preceding numbers. For example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, …

Sample outputs:

```JavaScript
fib(6) // 8
fib(10) // 55
```

## Basic Recursive Solution

Time Complexity of O(2^n) (‼️ VERY BAD)

```JavaScript
function fib(n) {
    // base cases
    if (n <= 1) return n;
    // recursive calls
    let result = fib(n - 1) + fib(n - 2);
    return result;
}

// for tracking how long the operation takes
console.time("recursive fib function");
console.log(fib(30)); // 45+ will take +- 10 secs and more to compute
console.timeEnd("recursive fib function");
```

### Recursive Solution with Memoization

Time Complexity of O(n) (👍🏼 GOOD!)

<br>

<div align=center>
<img src="https://github.com/melissaveraherbst/javascript-data-structures-and-algorithms/assets/84316275/4aa1fdc9-171b-43a7-9eca-aa2a749b8b95" alt="Fibonacci Sequence Illustration" width=75%>
</div>

<br>

To calculate fib(6) we need to make a lot of expensive repeated function calls (colored in red). These extra calls increase the computation time.

To make our code more efficient, we add an array (hash table) cache to store the calculated results. At each recursion, we first check if the result has already been calculated. If yes, we return the cached result, cache[n]. If no, we calculate it, save it to our cache array and finally return it.

```JavaScript
let cache = [];
// reminder that the array should not be in the recursive function's scope block because it will reset the array on each function call

function fibMemoized(n) {
    if (n <= 1) return n;
    if (!cache[n]) {
        let result = fibMemoized(n - 1) + fibMemoized(n - 2);
        cache[n] = result;
    }
    return cache[n];
}

// for tracking how long the operation takes 
console.time("memoized");
console.log(fibMemoized(100));
console.timeEnd("memoized");
```

OR

```JavaScript
function fibMemoized(n) {
    let cache = [];
    function recurse(num) {
        if (cache[num]) return cache[num];
        if (num <= 1) return num;
        let result = recurse(num - 1) + recurse(num - 2);
        cache[num] = result;
        return result;
    }
    return recurse(n);
}

// for tracking how long the operation takes 
console.time("memoization");
console.log(fibMemoized(100));
console.timeEnd("memoization");
```
 
### 📒 Notes

- Memoization can potentially increase performance by caching the results of previous function calls.
- Memoized functions store a cache which is indexed by their input arguments. If the arguments exist in the cache, then the cached value is returned. Otherwise, the function is executed and the newly computed value is added to the cache.
- Object arguments should be stringified before using as an index.
- Memoization can only be applied to referentially transparent functions. A function is considered referentially transparent if its output depends only on its inputs, and it does not cause any side effects. A call to a referentially transparent function can be replaced by its return value without changing the semantics of the program. The Fibonacci function is referentially transparent because it depends solely on the value of “n”.
- Memoization may not be ideal for infrequently called or fast executing functions.

## Iterative Solution with Tabulation

Time Complexity of O(n) (👍🏼 GOOD!)

```JavaScript
function fibTabulated(n) {
    // our "table"
    let sequence = [];

    // define the first two elements in the array because we know the values are 0 and 1
    sequence[0] = 0;
    sequence[1] = 1;

    let i = 0, j = 1;

    while (sequence.length - 1 !== n) {
        sequence.push(sequence[i] + sequence[j]);
        i++;
        j++;
    }

    return sequence[n];
}

// for tracking how long the operation takes 
console.time("tabulation");
console.log(fibTabulated(100));
console.timeEnd("tabulation");
```
