// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// DATA STRUCTURES

// ============================================================
// STACK DATA STRUCTURE

// DEFINITION
// A Stack is a Last In First Out (LIFO) data structure. The last element added to the stack will be the first element to be removed. 

// USE CASES
// - Managing function invocations. This data structure is applied in the call stack of the browser.
// - Undo/Redo functionality
// - Storing a history of things. An everyday example is the browser history/pages visited.
// - Used in other data structures like graphs and trees.

// Note: Some programming languages have stack data types built in. JS does not.

// IMPLEMENTATING STACKS
// Stack implementation with an Array
// Add/remove array elements using the push/pop methods. 
// The shift/unshift methods involve re-indexing array elements and it can be a slow process. Thus, the push/pop methods are preferred when time complexity is considered.

// IMPLEMENTING STACKS WITH LINKED LISTS
// 1. A Stack data structure can be implemented with either a Singly or a Doubly Linked List. In this example, we will be using a Singly Linked List data structure.
// 2. In our example below, we are implementing the shift/unshift methods because these methods are instant time to add/remove elements in the start of the list (whereas a pop method requires traversing the list from the start to the end). 
// 3. #2 applies to the Singly Linked List data structure only as in a Doubly Linked List, we can pop the last element from a list without traversal. 

// * Reminder: Adding/removing elements in a Linked List data structure is done faster than in an array when time complexity is considered. It is for this reason that constructing a Stack using a Linked List data structure is recommended.

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.start = null;
		this.end = null;
		this.length = 0;
	}
	shift(val){
		let node = new Node(val);
		if (!this.length) {
			this.start = node;
			this.end = node;
		} else {
			node.next = this.start;
			this.start = node;	
		}
		this.length++;
		return this.length;
	}
	unshift(){
		if (!this.length) return null;
		if (this.length === 1) {
			this.start = null;
			this.end = null;
		} else {
			// set start to point to the next property of the current start
			this.start = this.start.next;
		}
		this.length--;
		return this.length;
	}
}

let stack = new Stack();


// ============================================================
// QUEUE DATA STRUCTURE

// DEFINITION
// A Queue is a First In First Out (FIFO) data structure. The first element added to the stack will be the first element to be removed.

// IMPLEMENTING A QUEUE WITH AN ARRAY
// Add/remove array elements pairing the push/shift methods or the unshift/pop methods.

/*
IMPLEMENTING A QUEUE WITH A LINKED LIST
1. In this section of code, we are re-using the the Node class declared in the Stacks section above. 
2. We want a constant time complexity, O(1), for queue our methods. To achieve this, we will pair the push/shift methods. We cannot pair the unshift/pop methods because we must traverse the list if using the pop method. 
3. #2 applies to the Singly Linked List data structure only as in a Doubly Linked List, we can pop the last element from a list without traversal. 
4. In our Queue class, we will use the terminology "enqueue" and "dequeue" to name our methods instead of "push" and "shift". 
*/

// REMINDER *
// Adding/removing elements in a Linked List data structure is done faster than in an array when time complexity is considered. It is for this reason that constructing a Queue using a Linked List data structure is recommended.

class Queue {
	constructor() {
		this.start = null;
		this.end = null;
		this.length = 0;
	}
	enqueue(val) {
		let node = new Node(val);
		if (!this.length) {
			this.start = node;
			this.end = node;
		} else {
			this.end.next = node;
			this.end = this.end.next;
		}
		this.length++;
		return node;
	}
	dequeue() {
		if (!this.length) return null;

		// store the node to be removed
		let removed = this.start;
		
		if (this.length === 1) {
			this.start = null;
			this.end = null;
		} else {
			this.start = this.start.next;
		}	
		this.length--;
		return removed;
	}
}

let queue = new Queue();