In this article, we will write a function **frequencyCounter**, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency values must be the same.

## Why use a frequency counter pattern?

The advantage is that it will usually have big O of O(n) time complexity compared to other approaches, such as a nested loop solution, that will have big O of O(n²).

Solution using nested loops:

```jsx
function nestedLoops(array1, array2) {
    // check if the arrays have the same length
    if (array1.length !== array2.length) {
        return false;
    }
    // 2. compare the values in the two arrays
    for (let i = 0; i < array1.length; i++) {
        // The indexOf() method returns the position of the first occurrence of a value
        let indexOfMatch = array2.indexOf(array1[i] ** 2);
        // the indexOf() method returns -1 if the value is not found
        if (indexOfMatch === -1) {
            return false;
        }
        // we must use the splice method to remove the occurrence of the match, since the indexOf() method will return true on the same index if we do not remove it
        array2.splice(indexOfMatch, 1);
    }
    return true;
}
```

Solution using the Frequency Counter pattern:

```jsx
function frequencyCounter(array1, array2) {
    // check if the arrays have the same length
    if (array1.length !== array2.length) {
        return false;
    }

    /*
    Convert the array elements to objects respectively, setting the object keys equal to the array elements and the object values equal to the frequency of each array element.
    */
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of array1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of array2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    // check that the frequency values is the same
    for (let key in frequencyCounter1) {
        if (!frequencyCounter2[key ** 2]) {
            return false;
        }            
        if (frequencyCounter1[key] !== frequencyCounter2[key**2]) {
            return false;
        }
        return true;
    }
}
```

In the Frequency Counter Pattern we use objects to collect multiple inputs with their count. A thing to keep in mind is that object keys are always unique.
