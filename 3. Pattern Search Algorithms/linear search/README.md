# Linear Search Algorithm

### Identifying Applicable Problems

1. **Unordered List Search:**
   - When the elements in the list are not sorted, and you need to find a specific element.

2. **Checking Presence:**
   - To determine if a particular element is present in an array or list.

3. **Finding First Occurrence:**
   - When you need to find the first occurrence of a specific element.

4. **Sequential Search:**
   - Problems where you need to go through a list one element at a time, in a sequential manner.

### Basic Steps

1. **Iterate Through the Sequence:**
   - Start from the beginning of the sequence and check each element one by one.

2. **Compare with Target:**
   - Compare the current element with the target element you are searching for.

3. **Match Found?**
   - If a match is found, return the index (or position) of the element.

4. **End of Sequence:**
   - If you reach the end of the sequence without finding a match, return a special value (commonly -1) to indicate that the element is not present.

### Time Complexity

The time complexity of the linear search algorithm is O(n), where "n" is the number of elements in the list or array.  
The linear time complexity indicates that the time required to complete the search operation grows linearly with the size of the input data.

### Example Code

```javascript
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }
    }

    return -1; // Return -1 if the target is not found in the array
}

const array = [5, 8, 12, 6, 2, 10, 7];
const targetValue = 6;

const result = linearSearch(array, targetValue);
console.log(result); // Output: 3 (index of the target element)
```

In this example, the linear search function looks for the `targetValue` in the `array`. It returns the index if the target is found and -1 if it's not present in the array.
