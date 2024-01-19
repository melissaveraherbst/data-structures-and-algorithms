# Bubble Sort Algorithm

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

**Key Steps:**

1. **Repeatedly Traverse the List:**
   - Start from the beginning of the list.
   - Compare adjacent elements.
   - Swap them if they are in the wrong order.

2. **Repeat Until Sorted:**
   - Continue these steps until no swaps are needed (i.e., the list is sorted).

### Identifying Problems Suitable for Bubble Sort

Bubble Sort is suitable for small datasets or educational purposes due to its simplicity. It is not efficient for large datasets because of its quadratic time complexity. Use cases include scenarios where simplicity and ease of understanding are more important than efficiency.

### Basic Steps to Perform Bubble Sort

1. Initialize a loop that iterates through the array.
2. Inside the loop, initialize another loop for the comparisons.
3. Compare adjacent elements and swap if they are in the wrong order.
4. Continue until the entire array is sorted, and no swaps are needed.

### Possible Use Cases

1. **Educational Purposes:**
   - Bubble Sort is often used to teach sorting algorithms due to its simplicity.

2. **Small Datasets:**
   - When dealing with small datasets where simplicity is more important than efficiency.

### Time Complexity

The time complexity of Bubble Sort is O(n^2) in the worst and average cases. This is because, in the worst case, the algorithm needs to make comparisons and swaps for each pair of elements in the array. In the best case (when the array is already sorted), it can be O(n) if a check for swaps is incorporated.

### Summary

- **Pros:**
  - Simple and easy to understand.
  - Requires minimal space.

- **Cons:**
  - Inefficient for large datasets.
  - Quadratic time complexity.

### Useful Resources

[visualgo.net - visualising data structures and algorithms through animation](https://visualgo.net/en/sorting)
