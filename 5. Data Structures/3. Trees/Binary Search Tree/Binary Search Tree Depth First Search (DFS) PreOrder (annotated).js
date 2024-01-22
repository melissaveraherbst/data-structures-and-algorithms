// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// DATA STRUCTURES

// BINARY SEARCH TREE DEPTH FIRST SEARCH: PRE-ORDER TRAVERSAL

// Objective: Visit each node in a Binary Search Tree (BST) at least once


// -----------------------------------------------------------------------------
// DFS PRE-ORDER RECURSIVE SOLUTION

// Given a Binary Tree, write a recursive function to print the Preorder traversal of the given binary tree.
// 1) Create a variable which stores the visited nodes in an array.
// 2) Store the root of the BST in a variable.
// 3) Write a helper function which accepts a node.
// .. a) In the helper function, push the value of the node to the variable which stores the visited nodes.
// .. b) If the node has a left property, call the helper function with the left property on the node.
// .. c) If the node has a right property, call the helper function with the right property on the node.
// 4) Invoke the helper function with the current variable passed in as an argument.
// 5) Return the variable with the visited nodes.


// -----------------------------------------------------------------------------
// DFS PRE-ORDER ITERATIVE SOLUTION

// Given a Binary Tree, write an iterative function to print the Preorder traversal of the given binary tree.
// 1) Create a variable which stores the visited nodes in an array.
// 2) Create an empty stack and push root node to stack. 
// 3) Do the following while the stack is not empty. 
// .. a) Pop an item from the stack and print it. 
// .. b) Push right child of a popped item to stack 
// .. c) Push left child of a popped item to stack
// 4) Return the variable with the visited nodes.
// The right child is pushed before the left child to make sure that the left subtree is processed first.


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
	DFSPreOrderRecursive() {
		let visited = [];
		let root = this.root;

		function traverse(node) {
			if (!node) return;
			visited.push(node.val);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}

		traverse(root);
		
		return visited;
	}
	DFSPreOrderIterative() {
		// a Stack is a LIFO data structure.
		let stack = [];
		let visited = [];

		if (!this.root) return visited;
		
		let root = this.root;

		stack.push(root);

		while (stack.length) {
			let node = stack.pop();
			visited.push(node.val);
			if (node.right) stack.push(node.right);
			if (node.left) stack.push(node.left);
		}
		
		return visited;
	}
}


// new tree instance
let tree = new BinarySearchTree();


// inserting nodes into the tree
tree.insert(20).insert(15).insert(11).insert(10).insert(12).insert(18).insert(17).insert(35).insert(33).insert(27).insert(21).insert(39).insert(37).insert(40);


// Visual representation of the tree:
//                   (root)  
//                     20
//            15                35
//       11       18        33      39  
//     10  12   17        27      37  40
//                      21          


console.log(tree.DFSPreOrderRecursive());
console.log(tree.DFSPreOrderIterative());

// Expected output:
// visited [20, 15, 11, 10, 12, 18, 17, 35, 33, 21, 27, 39, 37, 40]

// Order of traversal:
// root, right, left

// Visualise iterative solution:
// iteration #1
// stack [20]		(start with the root)
// visited []
// -----------------------------------------------
// iteration #2
// stack [35, 15]	(if the popped node has a right and/or left child, they get pushed onto the stack)
// node = 20 		(the node is popped from the stack)
// visited [20] 	(the popped node is pushed to our visited array)
// -----------------------------------------------
// iteration #3
// stack [35, 18, 11]
// node = 15
// visited [20, 15]
// -----------------------------------------------
// iteration #4
// stack [35, 18, 12, 10]
// node = 11
// visited [20, 15, 11]
// -----------------------------------------------
// iteration #5
// stack [35, 18, 12]
// node = 10
// visited [20, 15, 11, 10]
// -----------------------------------------------
// iteration #6
// stack [35, 18]
// node = 12
// visited [20, 15, 11, 10, 12]
// -----------------------------------------------
// iteration #7
// stack [35, 17]
// node = 18
// visited [20, 15, 11, 10, 12, 18]
// -----------------------------------------------
// iteration #8
// stack [35]
// node = 17
// visited [20, 15, 11, 10, 12, 18, 17]
// -----------------------------------------------
// iteration #9
// stack [39, 33]
// node = 35
// visited [20, 15, 11, 10, 12, 18, 17, 35]
// -----------------------------------------------
// iteration #10
// stack [39, 27]
// node = 33
// visited [20, 15, 11, 10, 12, 18, 17, 35, 33]
// -----------------------------------------------
// iteration #11
// stack [39, 21]
// node = 27
// visited [20, 15, 11, 10, 12, 18, 17, 35, 33, 27]
// -----------------------------------------------
// iteration #12
// stack [39]
// node = 21
// visited [20, 15, 11, 10, 12, 18, 17, 35, 33, 27, 21]
// -----------------------------------------------
// iteration #13
// stack [40, 37]
// node = 39
// visited [20, 15, 11, 10, 12, 18, 17, 35, 33, 27, 21, 39]
// -----------------------------------------------
// iteration #14
// stack [40]
// node = 37
// visited [20, 15, 11, 10, 12, 18, 17, 35, 33, 27, 21, 39, 37]
// -----------------------------------------------
// iteration #14
// stack []
// node = 40
// visited [20, 15, 11, 10, 12, 18, 17, 35, 33, 27, 21, 39, 37, 40]
// -----------------------------------------------


// /////////////////////////////////////////////////////////////////////////////
// create a copy of the existing tree
let nodes = tree.DFSPreOrderRecursive();
let copy = new BinarySearchTree();
while (nodes.length) {
	copy.insert(nodes.shift());
}
console.log(copy.DFSPreOrderIterative());
// /////////////////////////////////////////////////////////////////////////////