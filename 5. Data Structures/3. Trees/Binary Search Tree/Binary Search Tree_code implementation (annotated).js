// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// DATA STRUCTURES

// BINARY SEARCH TREE (BST)

/*
DEFINITION
A Binary Search Tree is a node-based binary tree data structure which has the following properties: 
	- The left subtree of a node contains only nodes with values lesser than the node's value. 
	- The right subtree of a node contains only nodes with values greater than the node's value.
*/

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree { 
	constructor() {
		this.root = null;
	}
	insert(val) {
		// 1.  a new node
		let node = new Node(val);
		// 2. If there is no root, set the root to the new node
		if (!this.root) {
			this.root = node;
			return this;
		}
		// 3. If there is a root, check if the value of the new node is greater or less than the value of the root.
		// 4. If it is greater:
		//    - Check if there is a right child node.
		//    -- If yes, move on to that node and repeat the steps for comparing the new node's value with that of the current node.
		//    -- If no, set the new node to be the right child node.
		// 5. If it is less, repeat the steps in #4 on the left child node.
		let current = this.root;
		while (current !== node) {
			if (node.val > current.val) {
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
			// Refactored:
			// let direction = node.val > current.val ? "right" : "left";
			// if (!current[direction]) {
			// 	current[direction] = node;
			// }
			// current = current[direction];
		}
		return this;
	}
	find(val) {
		if (!this.root) return undefined;
		let current = this.root;
		while (current) {
			if (current.val === val) break;
			let direction = val > current.val ? "right" : "left";
			current = current[direction];
		}
		// return the node if found or undefined if the node is not found.
		return current || undefined;
	}
	delete() {
		// Delete was not covered in the course.
		// Visit the following webpages for detailed explanations for deleting in Binary Trees/Binary Search Trees
		// https://www.geeksforgeeks.org/deletion-binary-tree/
		// https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/
	}
}


// new tree instance
let tree = new BinarySearchTree();

// inserting nodes into the tree
tree.insert(20).insert(15).insert(11).insert(10).insert(12).insert(18).insert(17);
tree.insert(35).insert(33).insert(27).insert(21).insert(39).insert(37).insert(40);

// Visual representation of the tree:
//
//                     (root)  
//                       20           
//            15                  35
//       11       18          33      39  
//     10  12   17          27      37  40
//                        21  