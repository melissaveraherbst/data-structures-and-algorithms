// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// DATA STRUCTURES

// LINKED LISTS

// DOUBLY LINKED LIST

// A Doubly Linked List (DLL) contains an extra pointer, typically called the previous pointer, together with the next pointer and data which are there in the singly linked list.

/*
Advantages of DLL over the singly linked list:
- A DLL can be traversed in both forward and backward directions. 
- The delete operation in DLL is more efficient if a pointer to the node to be deleted is given. 
- We can quickly insert a new node before a given node. 
- In a singly linked list, to delete a node, a pointer to the previous node is needed.To get this previous node, sometimes the list is traversed. In DLL, we can get the previous node using the previous pointer. 
*/

// https://www.geeksforgeeks.org/doubly-linked-list/


// ------------------------------------------------------------

class Node {
	constructor(val) {
		this.val = val;
		this.prev = null;
		this.next = null;
	}
}

// ------------------------------------------------------------

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	// ------------------------------
	// Insert a node at the end of the DDL
	push(val) {
		let node = new Node(val);
		
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
		}

		this.length++;

		return this;
	}
	// ------------------------------
	// remove a node from the end of the DDL
	pop() {
		if (!this.length) return undefined;	

		if (this.length === 1) {
			this.tail = null;
			this.head = null;
		} else {
			// update the current tail to be the previous node
			this.tail = this.tail.prev;
			// set the new tail's 'next' property to null
			this.tail.next = null;
		}
		
		this.length--;
		return this;
	}
	// ------------------------------
	// add a new node in the beginning of the list
	unshift(val) {
		let node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}
		this.length++;
		return this;
	}
	// ------------------------------
	// remove a node from the start of the list(the head)
	shift() {
		if (!this.length) return undefined;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			// set the new head to be the 'next' property of the current head 
			this.head = this.head.next;
			this.head.prev = null;
		}
		this.length--;
		return this;
	}
	// ------------------------------
	get(position) {
		if (position > this.length - 1 || position < 0) return undefined;

		let current, i;
		
		// if the position is less than or equal to half the length of the list, it means that the position is closer to the head of the list. Thus we start to iterate up to the position from the head.
		if (position <= ((this.length - 1) / 2)) {
			current = this.head;
			for (i = 0; i < position; i++) {
				current = current.next;
			}
		} 
		// if the position is greater than half the length of the list, it means that the position is closer to the tail of the list. Thus we start to iterate up to the position from the tail.
		if (position > ((this.length - 1) / 2)) {
			current = this.tail;
			for (i = this.length - 1; i > position; i--) {
				current = current.prev;
			}
		}

		return current;
	}
	// ------------------------------
	set(position, val) {
		if (position > this.length - 1 || position < 0) return undefined;
		this.get(position).val = val;
		return this;
	}
	// ------------------------------
	insert(position, val) {
		// A ------- B ------- new ------- C ------- D ------- E ------ F
		//           n-1                   n
		if (position > this.length - 1 || position < 0) return undefined;
		if (position === 0) return this.unshift(val);
		if (position === this.length - 1) return this.push(val);
		if (position > 0 && position < this.length - 1) {
			let node = new Node(val);
			// set the new node's next property to the node at position 'n'
			node.next = this.get(position);
			// set the new node's prev property to the node at position 'n - 1'
			node.prev = this.get(position - 1)
			// set the prev property of the node at position 'n' to the newly created node
			this.get(position).prev = node;
			// set the next property of the node at position 'n - 1' to the newly created node
			this.get(position - 1).next = node;
			this.length++;	
			return this;
		}
	}
	// ------------------------------
	remove(position) {
		if (position > this.length - 1 || position < 0) return undefined;
		// n-1       n         n+1
		// A ------- B ------- C ------- D ------- E ------ F
		// next = n+1          prev = n-1
		if (position === 0) return this.shift();
		if (position === this.length - 1) return this.pop();
		if (position > 0 && position < this.length - 1) {
			this.get(position + 1).prev = this.get(position - 1);
			this.get(position - 1).next = this.get(position + 1);
			this.length--;
			return this;
		}
	}
	// ------------------------------
	reverse() {
		if (!this.length) return undefined; 
		if (this.length === 1) return this;
		
		let current = this.head;
        let previous, next;
		let i = 0;
		
		while (i !== this.length) {
			console.log(current)
			// save the current node's "prev" and "next" properties to variables.
			previous = current.prev;
			next = current.next;
			// set the current node's "next" property to it's "prev" property and it's "prev" property to it's "next" property. This is where the actual reversal takes place.  
			current.prev = next;
			current.next = previous;
			// move the current node up one step to the saved "next" variable.
			current = next;
			i++;
		}

		// swap the original head and tail
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;
		
		return this;
	}
}


let list = new DoublyLinkedList();

list.push("A");
list.push("B");
list.push("C");
list.push("D");
list.push("E");
list.push("F");

// ------------------------------------------------------------
// BIG-O of Doubly Linked Lists

// Insertion: O(1)
// Removal: O(1)
// Searching: O(n) (even though we optimized this with the divide and conquer approach).  
// Accessing: O(n)

// A use case example for a doubly linked list in real life can be a browser's history. You can easily go back and forth between your previous and currently visited web pages.