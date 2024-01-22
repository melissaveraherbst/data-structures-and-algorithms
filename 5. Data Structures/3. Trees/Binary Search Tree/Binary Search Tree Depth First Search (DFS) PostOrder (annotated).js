// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// DATA STRUCTURES

// BINARY SEARCH TREE DEPTH FIRST SEARCH: POST-ORDER TRAVERSAL

// Objective: Visit each node in a Binary Search tree (BST) at least once

// Order of traversal:
// left, right, root

// -----------------------------------------------------------------------------
// DFS POST-ORDER RECURSIVE SOLUTION

// Given a Binary Tree, write a recursive function to print the Preorder traversal of the given binary tree.
// 1) Create a variable which stores the visited nodes in an array.
// 2) Store the root of the BST in a variable.
// 3) Write a helper function which accepts a node.
// .. a) If the node has a left property, call the helper function with the left property on the node.
// .. b) If the node has a right property, call the helper function with the right property on the node.
// .. c) Push the value of the node to the variable which stores the visited nodes.
// 4) Invoke the helper function with the root variable passed in as an argument.
// 5) Return the variable with the visited nodes.

// -----------------------------------------------------------------------------
// DFS POST-ORDER ITERATIVE SOLUTION (WITH STACKS)

// Given a Binary Tree, write an iterative function to print the Postorder traversal of the given binary tree.
// Postorder traversal can easily be done using two stacks. The idea is to push reverse postorder traversal to a stack. 
// Once we have the reversed postorder traversal in a stack, we can just pop all items one by one 
// from the stack and print them; this order of printing will be in postorder because of the LIFO 
// property of stacks. 
// Steps:
// 1) Push root to first stack.
// 2) Loop while first stack is not empty
//    2.1) Pop a node from first stack and push it to second stack
//    2.2) Push left and right children of the popped node to first stack
// 3) Print contents of second stack


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
	DFSPostOrderRecursive() {
		let visited = [];
		let root = this.root;

		function traverse(node) {
			if (!node) return;
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			visited.push(node.val);

		}

		traverse(root);

		return visited;
	}
	DFSPostOrderIterative() {
		// Stack: LIFO data structure.
		let stack1 = [];
		let stack2 = [];
		let visited = [];

		if (!this.root) return visited;

		let root = this.root;

		stack1.push(root);

		while (stack1.length) {
			let node = stack1.pop();
			stack2.push(node);
			if (node.left) stack1.push(node.left);
			if (node.right) stack1.push(node.right);
		};

		while (stack2.length) {
			visited.push(stack2.pop().val);
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
//                   (root)  
//                     20
//            15                35
//       11       18        33      39  
//     10  12   17        27      37  40
//                      21          

// Order of traversal:
// left, right, root

console.log(tree.DFSPostOrderRecursive());
console.log(tree.DFSPostOrderIterative());

// Expected output:
// [10, 12, 11, 17, 18, 15, 21, 27, 33, 37, 40, 39, 35, 20];

// JUST FOR FUN
// This code section creates a copy of the tree using the result from a DFS Post-order method 
let copy = new BinarySearchTree();

let nodes = tree.DFSPostOrderIterative();

while (nodes.length) {
	copy.insert(nodes.pop());	
}