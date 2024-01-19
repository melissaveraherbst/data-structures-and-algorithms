# Merge Sort Algorithm

Merge Sort is a divide-and-conquer algorithm that recursively divides an array into two halves until each sub-array has only one element.
After the array is divided, the individual elements are then merged in a sorted manner to produce a sorted array.

### Identifying Problems Suitable for Merge Sort

Merge Sort is suitable for problems that exhibit the following characteristics:

- **Divide-and-Conquer Structure:** The problem can be broken down into smaller sub-problems that can be solved independently.
- **Recursive Approach:** The solution to the larger problem can be constructed by combining solutions to its sub-problems.
- **Efficient Merge Operation:** Merging two sorted solutions can be done efficiently.

### Basic Steps to Perform Merge Sort

- **Divide:** Split the unsorted array into two halves.
- **Conquer:** Recursively sort each half.
- **Merge:** Merge the sorted halves to produce a single sorted array.

### Possible Use Cases

1. **Sorting:**
   - Primary use case is for sorting arrays efficiently.

2. **External Sorting:**
   - Useful for sorting large datasets that do not fit entirely into memory.

3. **File Merging:**
   - Merging multiple sorted files into a single sorted file.

4. **Inversion Count Problem:**
   - Counting the number of inversions in an array.

### Time and Space Complexity

- **Time Complexity:** O(n log n)
  - The recursive division of the array takes O(log n) time, and the merging step takes O(n) time. The combination results in O(n log n) time complexity.

- **Space Complexity:** O(n)
  - Additional space is required for the merging step. The space complexity is O(n) due to the need for temporary storage of elements during the merge process.

Merge Sort is a stable sorting algorithm, meaning that it maintains the relative order of equal elements in the sorted output. It is widely used due to its efficiency and predictable performance.

### Useful Resources

[visualgo.net - visualising data structures and algorithms through animation](https://visualgo.net/en/sorting)
