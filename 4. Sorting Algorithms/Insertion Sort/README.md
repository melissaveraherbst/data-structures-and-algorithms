# Insertion Sort Algorithm

Insertion Sort  builds the final sorted array one element at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort has several advantages, including its simplicity, low overhead, and stability.

### Identifying Problems Suitable for Insertion Sort

Insertion Sort is suitable for small datasets or partially sorted datasets. It performs well when the dataset is almost sorted, as it makes only a few comparisons and swaps. If the dataset is small, and the overhead of more complex algorithms is not justified, insertion sort can be a good choice.

### Basic Steps to Perform Insertion Sort

1. **Start:** Begin with the second element (index 1) assuming the first element (index 0) is already sorted.

2. **Compare and Swap:** Compare the current element with the elements to its left, moving elements greater than the current one to the right. Swap elements as needed to maintain sorted order.

3. **Continue:** Move to the next unsorted element and repeat the comparison and swap process until the entire array is sorted.

4. **End:** The array is now sorted.

### Time Complexity

The time complexity of insertion sort is O(n^2) in the worst case, where 'n' is the number of elements in the array. The best-case time complexity occurs when the array is already sorted, resulting in O(n) time complexity for comparisons. However, the average time complexity is O(n^2).

Despite its quadratic time complexity, insertion sort can outperform other algorithms for small datasets or partially sorted datasets due to its simplicity and low overhead.

### Useful Resources

[visualgo.net - visualising data structures and algorithms through animation](https://visualgo.net/en/sorting)
