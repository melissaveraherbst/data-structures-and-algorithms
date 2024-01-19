# Quick Sort Algorithm

Quick Sort is a divide-and-conquer sorting algorithm that efficiently sorts an array or list. It works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The process is then applied recursively to the sub-arrays.

### Identifying Problems Suitable for Quick Sort

Quick Sort is particularly well-suited for problems where:

- Sorting is required.
- Random access to elements is available (e.g., arrays).
- In-place sorting is desirable (minimal additional memory usage).

### Basic Steps to Perform Quick Sort

1. **Pivot Selection:** Choose a pivot element from the array (commonly the first or last element).
2. **Partitioning:** Rearrange the array elements such that elements less than the pivot are on its left, and elements greater than the pivot are on its right.
3. **Recursive Sort:** Apply the Quick Sort algorithm recursively to the sub-arrays on the left and right of the pivot.
4. **Combine:** No additional combining step is needed as the array is sorted in-place during the partitioning step.

### Possible Use Cases

Quick Sort is commonly used in situations where fast sorting is crucial. Some use cases include:

- General-purpose sorting applications.
- Implementations of programming languages (e.g., JavaScript's `Array.prototype.sort()` often uses a variant of Quick Sort).
- File systems for efficient file sorting.

### Time and Space Complexity

**Time Complexity:**

- **Average Case:** O(n log n)
- **Worst Case:** O(n^2) - This occurs when the pivot selection consistently results in unbalanced partitions.
- **Best Case:** O(n log n) - This occurs when the pivot selection consistently results in balanced partitions.

**Space Complexity:**

- Quick Sort is an in-place sorting algorithm, meaning it doesn't require additional memory proportional to the input size. Its space complexity is O(log n) due to the recursive call stack.

In practice, Quick Sort often outperforms other sorting algorithms like Merge Sort and Heap Sort due to its cache-friendly and in-place nature. However, its worst-case behavior can be a concern, and variations, such as the random pivot selection or using the median-of-three strategy, are employed to mitigate this.

### Useful Resources

[visualgo.net - visualising data structures and algorithms through animation](https://visualgo.net/en/sorting)
