# Selection Sort Algorithm

Selection Sort works by dividing the array into a sorted and an unsorted region. In each iteration, the algorithm finds the smallest (or largest, depending on the desired order) element in the unsorted region and swaps it with the first element in the unsorted region. This process is repeated until the entire array is sorted.

### Identifying Problems Suitable for Selection Sort

Selection Sort is suitable for small datasets or partially sorted datasets. It's not efficient for large datasets due to its quadratic time complexity.

### Basic Steps to Perform Selection Sort

1. Initialize an index for the sorted region at the beginning (initially set to 0).
2. Find the minimum element in the unsorted region.
3. Swap the minimum element with the first element of the unsorted region.
4. Move the boundary between the sorted and unsorted regions one position to the right.
5. Repeat steps 2-4 until the entire array is sorted.

### Possible Use Cases

- Small Datasets: Selection Sort can be useful for small datasets or situations where simplicity and ease of implementation are more critical than efficiency.
- Educational Purposes: It's often used in educational settings to teach the concept of sorting algorithms due to its simplicity.

### Time Complexity

The time complexity of Selection Sort is O(n^2) in the worst case, where 'n' is the number of elements in the array.
The algorithm has nested loops. In each iteration of the outer loop, the inner loop iterates through the unsorted region, making a constant number of comparisons and swaps.

### Advantages

Simple to understand and implement.
In-place sorting (requires only a constant amount of additional memory space).

### Disadvantages

Inefficient for large datasets due to its quadratic time complexity.
Not stable; does not maintain the relative order of equal elements.

### Useful Resources

[visualgo.net - visualising data structures and algorithms through animation](https://visualgo.net/en/sorting)
