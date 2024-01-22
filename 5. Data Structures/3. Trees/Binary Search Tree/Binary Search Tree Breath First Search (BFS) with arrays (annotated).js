// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// DATA STRUCTURES

// BINARY SEARCH TREE BREATH FIRST SEARCH (BFS)

// Objective: Visit each node in a Binary Search tree (BST) at least once

// Breath First Search (BFS) (iterative solution)
// 1. create a queue (this can be an array or a queue data structure).
// 2. create a variable to store the values of nodes visited (array).
// 3. add the root node to the queue.
// 4. loop as long as there is something in the queue:
// 		-- dequeue a node from the queue and push the value of that node into the variable which stores the visited nodes.
// 		-- if there is a left property on the dequeued node, add it to the queue.
// 		-- if there is a right property on the dequeued node, add it to the queue.
// 5. return the variable that stores the values of the visited nodes.


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
		}
		return this;
	}
	bfs() {
		let queue = [];
		let visited = [];
		
		queue.push(this.root);
		
		// first in, first out.
		while (queue.length) {
			// The shift() method returns the shifted element
			let node = queue.shift();
			
			visited.push(node.val);
			
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
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
//                   (root)  
//                     20
//            15                35
//       11       18        33      39  
//     10  12   17        27      37  40
//                      21 


console.log(tree.bfs());

// Expected output:
// [20, 15, 35, 11, 18, 33, 39, 10, 12, 17, 27, 37, 40, 21]