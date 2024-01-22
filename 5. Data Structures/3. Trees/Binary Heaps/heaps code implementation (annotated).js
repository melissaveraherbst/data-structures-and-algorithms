// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// DATA STRUCTURES

// HEAP DATA STRUCTURE

// Definition
// A Heap is a special Tree-based data structure in which the tree is a complete binary tree. Generally, Heaps can be of two types:
// 1. Max-Heap: In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.
// 2. Min-Heap: In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.

// Storing Heaps
// The first value in the array (at index of 0) is always the root node of the tree

// To find the children of the nth parent node, we need to do a little math.
// parent/root = n
// left child  = n * 2 + 1 or 2n + 1
// right child = n * 2 + 2 or 2n + 2

// To find a parent of the nth child node, the math is as follows:
// child node = n
// parent = Math.floor((n-1) / 2)


/*
// Max-Heap data structure illustrated as a tree:

				100
		19                 36
	17      12         25      5
   9  15   6  11     13  8    1 4 


array:  [100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8,  1,  4]
index:    0   1   2   3   4   5   6  7  8   9  10  11  12  13  14
					  *              *  *   
					  P              L  R
*/


class MaxBinaryHeap {
	constructor() {
		// empty linked list or array
		this.values = [];
	}
	// helper function
	_swap(arr, x, y) {
		[arr[x], arr[y]] = [arr[y], arr[x]];
	}
	insert(val) {
		let values = this.values;
		// insert a new value at the end of the array
		values.push(val);

		// child index
		let child = values.length - 1;
		// parent index
		let parent = Math.floor((child - 1) / 2);

		// while the child element is larger than the parent element, swap them.
		while (values[child] > values[parent]) {
			this._swap(values, child, parent);
			// update the child index to the parent index
			child = parent;
			// update the parent index
			parent = Math.floor((child - 1) / 2);
		}
		return values;
	}
	// extractMax: returns the node of maximum value from a max heap after removing it from the heap(a.k.a., pop)
	extractMax() {
		let values = this.values;

		let max = values[0];

		// replace the root/max element with the most recently added element (last value in the array);
		if (!values.length) return undefined;
		values[0] = values[values.length - 1];
		values.pop();

		// Indexes of parent and children elements
		let parent = 0;
		let left = (2 * parent) + 1;
		let right = (2 * parent) + 2;

		// restore the heap - compare the new root/parent to it's child(ren) and swap the values until the max-heap is restored
		while (values[left] > values[parent] || values[right] > values[parent]) {
			if (values[left] > values[right]) {
				this._swap(values, left, parent);
				parent = left;
				left = (2 * parent) + 1;
				right = (2 * parent) + 2;
			}
			if (values[right] > values[left]) {
				this._swap(values, right, parent);
				parent = right;
				left = (2 * parent) + 1;
				right = (2 * parent) + 2;
			}
			// there is a left value but not a right
			if (values[left] && !values[right]) {
				this._swap(values, left, parent);
			}
			// there is a right value but not a left
			if (values[right] && !values[left]) {
				this._swap(values, right, parent);
			}
		}
		console.log(max);
		return max;
	}
}

let heap = new MaxBinaryHeap();

let array = [41, 39, 33, 18, 27, 12, 55, 1, 45, 200];
array.forEach((element) => heap.insert(element));

