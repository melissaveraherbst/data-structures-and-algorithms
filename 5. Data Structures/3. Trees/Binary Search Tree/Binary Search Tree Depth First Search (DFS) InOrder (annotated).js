// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// DATA STRUCTURES

// BINARY SEARCH TREE DEPTH FIRST SEARCH: IN-ORDER TRAVERSAL

// Objective: Visit each node in a Binary Search tree (BST) at least once

// ORDER OF TRAVERSAL:
// left, root, right

// -----------------------------------------------------------------------------
// DFS IN-ORDER RECURSIVE SOLUTION

// Given a Binary Tree, write a recursive function to print the InOrder traversal of the given binary tree.
// 1) Create a variable which stores the visited nodes in an array.
// 2) Store the root of the BST in a variable.
// 3) Write a helper function which accepts a node, then:
//    a) If the node has a left property, call the helper function with the left property on the node.
//    b) Push the value of the node to the variable which stores the visited nodes.
//    c) If the node has a right property, call the helper function with the right property on the node.
// 4) Invoke the helper function with the root variable passed in as an argument.
// 5) Return the variable with the visited nodes.

// -----------------------------------------------------------------------------
// DFS IN-ORDER ITERATIVE SOLUTION (WITH A STACK)

// Given a Binary Tree, write a recursive function to print the InOrder traversal of the given binary tree.
// 1) Create a variable which stores the visited nodes in an array.
// 2) Create an empty stack.
// 3) Initialize current node as root
// 4) Push the current node to the stack and set current = current.left until current is NULL
// 5) If current is NULL and stack is not empty then 
//      a) Pop the top item from stack.
//      b) Print the popped_item, set current = popped_item.right 
//      c) Go to step 4.
// 5) If current is NULL and stack is empty then we are done. Return the variable with the visited nodes.


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
				} else current = current.right;			 
			}
			if (node.val < current.val) {
				if (!current.left) {
					current.left = node;
				} else current = current.left;
			}
		}
		return this;
	}
	DFSInorderRecursive() {
		if (!this.root) return undefined;
		
		let visited = [];
		let root = this.root;
		
		function traverse(node) {
			if (!node) return;
			if (node.left) traverse(node.left);
			visited.push(node.val);
			if (node.right) traverse(node.right);
		}
		
		traverse(root);
		
		return visited;
	}
	DFSInorderIterative() {
		if (!this.root) return unndefined;
		
		let visited = [];
		let stack = []; // Last In First Out data structure
		
		let current = this.root;

		while(current || stack.length) {
			if (current) {
			stack.push(current);
			current = current.left;
			} else {
				let popped = stack.pop();
				visited.push(popped.val);
				if (popped.right) current = popped.right;
			}
		}
		return visited;
	}
}

// new tree instance
let tree = new BinarySearchTree();

// inserting nodes into the tree
tree.insert(20).insert(15).insert(11).insert(10).insert(12).insert(18).insert(17);
tree.insert(35).insert(33).insert(27).insert(21).insert(39).insert(37).insert(40);

// Visual representation of the tree:
//
//                   (root)  
//                     20
//            15                35
//       11       18        33      39  
//     10  12   17        27      37  40
//                      21          

console.log(tree.DFSInorderRecursive());
console.log(tree.DFSInorderIterative());
// Expected output:
// [10, 11, 12, 15, 17, 18, 20, 21, 27, 33, 35, 37, 39, 40];
// * The nodes will be sorted from smallest to largest if we traverse a BST with this method.
