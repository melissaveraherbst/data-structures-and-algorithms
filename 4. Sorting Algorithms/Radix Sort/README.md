# Radix Sort Algorithm

Radix Sort is a non-comparative sorting algorithm that works by distributing elements into buckets based on their individual digits or radix. The sorting process is repeated for each digit position, moving from the least significant digit to the most significant digit.

### Identifying Problems Suitable for Radix Sort

**Suitable Problems:**

- Radix Sort is particularly useful when sorting integers with a fixed number of digits.
- It's effective when the range of numbers is not significantly larger than the number of elements in the input.

**Unsuitable Problems:**

- It is not suitable for sorting floating-point numbers or strings directly.
- It's not as efficient for sorting numbers with varying numbers of digits.

### Basic Steps to Perform Radix Sort

1. **Find the Maximum Number of Digits (`max`):**
   - Determine the maximum number of digits among all the elements in the array.

2. **Iterate Through Digits (from least significant to most significant):**
   - For each digit position (from the rightmost to the leftmost):
   - Create buckets for each digit (0 to 9).
   - Distribute elements into buckets based on the current digit.
   - Reconstruct the array by concatenating the elements from all buckets.

3. **Repeat the Process:**
   - Repeat the above steps for each digit position.

4. **Final Result:**
   - After processing all digits, the array is sorted.

### Possible Use Cases

1. **Integer Sorting:**
   - Sorting a collection of integers with a fixed number of digits.

2. **Radix Sort for Strings:**
   - When applied to strings, it can sort them based on individual character positions.

3. **External Sorting:**
   - Radix Sort is often used as a component in external sorting algorithms when dealing with large datasets that don't fit entirely in memory.

### Time and Space Complexity

- **Time Complexity:** O(k * n)
  - k: The number of digits in the maximum number.
  - n: The number of elements in the array.

- **Space Complexity:** O(n + k)
  - n: The number of elements in the array.
  - k: The number of buckets (10 for base-10 digits).

The time complexity of Radix Sort can be linear in many practical scenarios, making it efficient for certain types of data. However, it's important to note that the constant factors in the time complexity can be relatively high, and it may not always outperform other algorithms for smaller datasets or when dealing with variable-length numbers.

### Useful Resources

[Programiz - Bucket Sort Algorithm](https://www.programiz.com/dsa/bucket-sort)  
[Programiz - Radix Sort Algorithm](https://www.programiz.com/dsa/radix-sort)  
[visualgo.net - visualising data structures and algorithms through animation](https://visualgo.net/en/sorting)

