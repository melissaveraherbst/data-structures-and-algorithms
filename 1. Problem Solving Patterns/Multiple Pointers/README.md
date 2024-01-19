# Multiple Pointers

The Multiple Pointers pattern involves maintaining multiple pointers or references to elements in a data structure (usually a **sorted** array or linked list) and manipulating their positions to solve a problem efficiently.

### Identifying Applicable Problems

- Problems suitable for the Multiple Pointers technique often involve searching, comparing, or traversing elements in a sequence (e.g., arrays, linked lists) and require linear time complexity.

### Basic Steps

- **Initialize Pointers:** Start with two or more pointers pointing to different elements in the data structure.
- **Move Pointers:** Adjust the pointers based on certain conditions or criteria.
- **Iterate or Terminate:** Continue moving pointers until a solution is found or a specific condition is met.

### Example Implementation (using Python)

Suppose you have a sorted array, and you need to find a pair of elements that sum to a specific target.

```python
def pair_sum(arr, target):
    left, right = 0, len(arr) - 1
    
    while left < right:
        current_sum = arr[left] + arr[right]
        
        if current_sum == target:
            return [arr[left], arr[right]]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    
    return None

# Example usage
arr = [2, 5, 8, 12, 16, 23]
target_sum = 20
result = pair_sum(arr, target_sum)
print(result)  # Output: [5, 15]
```

### Use Cases

- **Pairs or Triplets:** Finding pairs or triplets with a certain property (e.g., sum, difference).
- **Sorted Array/Linked List:** Searching for elements in a sorted sequence efficiently.
- **Palindrome Check:** Checking if a sequence is a palindrome.
- **Intersection or Union:** Identifying common or unique elements between two sorted arrays.

### Important

The effectiveness of the Multiple Pointers pattern relies on the SORTED nature of the data structure, as it allows for efficient movement of pointers based on comparisons.
