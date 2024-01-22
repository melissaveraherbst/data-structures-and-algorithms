// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// DATA STRUCTURES

// LINKED LISTS

// LINKED LIST
// A data structure which contains a head, tail and length property.
// The list does not have indexes.
// Linked lists consist of nodes. Each node has a value and a pointer to another node or null (null after the tail(end)).

// SINGLY LINKED LIST
// Singly Linked Lists are n excellent alternative to arrays when insertion (beginning or end) and deletion (beginning only) are frequently required. See push(), shift(), and unshift() methods. Time complexity for these methods is O(1).
// Time complexity increases to O(n) for random access methods (basically, any of the methods in which the list needs to be traversed to add or access an existing value).

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

// ------------------------------------------------------------

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	// ------------------------------
	// add a new node to the end of the list
	push(val) {
		let node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}

		this.length++;

		return this;
	}
	// ------------------------------	
	// remove a node from the end of the list (the tail)
	pop() {

		// visual representation for when we are at the last node in the list:
		// A --------- B --------- C --------- D --------- null
		//                    secondLast   current	   current.next
		//                    (new tail)  (new null)

		if (this.length < 1) return undefined;

		// current refers to the node that we are currently pointing at
		// secondLast refers to the node before the tail which will become the new tail
		let current, secondLast;
		
		current = this.head;

		if (this.length === 1) {
			// set head and tail references to null
			this.head = null;
			this.tail = null;
			// decrement the list's length by 1
			this.length--;
			return current.val;
		}

		// traverse the list
		while (current) {
			// check if the current node has a next
			// if yes:	- set the secondLast to the current node
			// 			- move the current node up to the next node
			// if no:	- set the new tail to be the secondLast
			// 			- set the new tail's next to null
			// 			- decrement the list's length

			if (current.next) {
				secondLast = current;
				current = current.next;
			} else {
				this.tail = secondLast;
				this.tail.next = null;
				this.length--;
				return current.val;
			}
		}
	}
	// ------------------------------
	// remove a node from the start of the list (the head)
	shift() {
		if (!this.length) return undefined;

		// store the current head
		let temp = this.head;

		// set the new head to the current head's next
		this.head = temp.next;

		if (this.head === null) {
			this.tail = null;
		}

		// decrement the list's length
		this.length--;

		return this;
	}
	// ------------------------------
	// add a new node in the beginning of the list
	unshift(val) {
		// create a new node instance
		let node = new Node(val);

		// check if there is a head
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}

		// increment the list's length 
		this.length++;

		return this;
	}
	// ------------------------------
	// find and return the nth node in the list
	get(position) {
		// counter which keep track of the nth node in the list
		let n = 0;

		// starting node
		let current = this.head;

		// check that the position is not out of bounds
		if (position > this.length || position < 0) return null;

		// traverse the list until the counter variable's value and the position match
		while (position >= n) {
			if (position === n) {
				return current;
			} else {
				n++;
				current = current.next;
			}
		}
	}
	// ------------------------------
	// set the value of the nth node in the list
	set(val, position) {
		let node = this.get(position);
		if (!node) return undefined;
		else node.val = val;
		return this;
	}
	// ------------------------------
	// insert a value at the nth position
	insert(val, position) {

		// visual representation for when we are inserting the new node into the list:
		// 0           1           2         insert at 3         3 (old 3)
		// A --------- B --------- C --------- Jupiter --------- D --------- null
		//                     previous        newNode	      current
		//

		// counter variable 
		let n = 0;

		// check that the position is within bounds
		if (position < 0 || position > this.length) return undefined;

		// code to insert the new node
		if (position === 0) return this.unshift(val);

		if (position === this.length - 1) return this.push(val);

		while (position > n) {
			if (position === n) {
				let previous = this.get(position - 1);
				let current = this.get(position);
				let newNode = new Node(val);

				previous.next = newNode;
				newNode.next = current;
				this.length++;
			}
			else {
				n++;
			}
		}
		
		return this;
	}
	// ------------------------------
	// remove a node at the nth position
	remove(position) {

		// visual representation for when we are removing the 2nd node:
		// 0           1           2           3         
		// A --------- B --------- C --------- D --------- null
		//         previous     removed      next
		//                     

		// check that the position is within bounds
		if (position > this.length || position < 0) return undefined;

		// code to remove the node
		if (position === 0) return this.shift();
		if (position === this.length) return this.pop();

		let removed = this.get(position);
		let previous = this.get(position - 1);
		let next = removed.next;

		previous.next = next;
		this.length--;

		return this;
	}
	// ------------------------------
	reverse() {                                                           

		if (!this.length) return undefined;

		if (this.length === 1) return this;

		let current = this.head;
		let previous, next;

		// swap the original head and tail
		this.head = this.tail;
		this.tail = current;

		while (current) {
			// store the current node's next property
			next = current.next;

			// the following is where reversing the nodes actually happen
			// 1. change the next property of current to previous
			current.next = previous || null;
			// 2. move previous and current one step forward
			previous = current;
			current = next;
		}

		return this;
	}
	// ------------------------------
	// collect and print all node values in an array
	print() {
		if (!this.root) return undefined;

		let values = [];
		let current = this.root;

		while (current) {
			values.push(current.val);
			current = current.next;
		}

		return values;
	} 
}

// ------------------------------------------------------------
let list = new SinglyLinkedList();

list.push("A");
list.push("B");
list.push("C");
list.push("D");
list.push("E");
list.push("F");
list.push("G");

// ------------------------------------------------------------

// NOTES FROM THE Q&A SECTION ON UDEMY

/*
Q: WHY DOES THE HEAD ALSO CHANGE WHEN WE MAKE A CHANGE TO TAIL? (See the push() method)

A: Because 'node' is an object. In JavaScript, objects are a reference type. So when we change it in one place it changes everywhere. When we changed this.tail.next - we changed the object in this.head.next as well. 

To visualize:

const node = {
	val: 10,
	next: null
}

const list = {
	head: node,
	tail: node,
	length: 0
}

list.tail.val = 999;

console.log(list.head.val) // Output: 999
console.log(list.tail.val) // Output: 999

Above, the head and tail properties are equal to the same node object we created.
*/


/*
Q: HOW ARE THE NEW NODES CREATED?
(See the push() method)

A: Let's say, "tail", is just a label we use to point to a certain node.
"tail", is currently pointing to the value 78. We then assign a new node (with value 99) to "this.tail.next".
This is to say: we are assigning the new value to a property, called next, of the current node, and with that, we have the new node in the list.
35 ------> 62 ------> 78 ------> 99 ------> null
					 tail     tail.next 

We update the label, "tail", to point to the new node created
35 ------> 62 ------> 78 ------> 99
								tail

Thus, to access an entire linked list, the only thing you need is the first node. From there, the next node is just another property that we happened to call 'next' in our example. 
That node has its own next property, and so on. When you work with a linked list, you really only "see" one node at any given time rather than "seeing" the entire list at once.
*/