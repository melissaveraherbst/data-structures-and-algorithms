// DATA STRUCTURES AND ALGORITHMS

// DATA STRUCTURES

// BINARY SEARCH TREE (BST)

// Challenge Objective: Check that the BFS is in balance. 

// Note:
// Checking for balance is checking to see if the absolute value of the difference between the left side of the tree and the right side of the tree is less than or equal to 1

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right - null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(val) {
		let node = new Node(val);
		if (!this.root) {
			this.root = node;
			return this;
		}
		let current = this.root;
		while (current !== node) {
			if (node.val >= current.val) {
				if (!current.right) {
					current.right = node;
				}
				current = current.right;
			}
			if (node.val < current.val) {
				if (!current.left) {
					current.left = node;
				}
				current = current.left;
			}
		}
		return this;
	}
	// The isBalanced() method is implemented with DFS Post-Order Tree Traversal as a foundation
	isBalanced() {
		let root = this.root;

		// lH and rH keep track of the left height and right height
		let lH = 0;
		let rH = 0;

		function traverse(node) {
			if (!node) return;
			if (node.left) {
				lH++;
				traverse(node.left);
			};
			if (node.right) {
				rH++;
				traverse(node.right);
			};

			return (Math.abs(lH - rH) <= 1);
		}

		return traverse(root);

	}
}

var tree = new BinarySearchTree();

tree.insert(15).insert(20).insert(10).insert(12);
console.log(tree.isBalanced()); // true

// var tree = new BinarySearchTree();
// tree.insert(5);
// console.log(tree.isBalanced()); // true
// tree.insert(6);
// console.log(tree.isBalanced()); // true
// tree.insert(7);
// console.log(tree.isBalanced()); // false