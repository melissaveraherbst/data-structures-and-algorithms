// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// DATA STRUCTURES

// LINKED LISTS: DOUBLY LINKED LIST

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
	pop() {
		if (!this.length) return undefined;	

		if (this.length === 1) {
			this.tail = null;
			this.head = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
		}
		
		this.length--;
		return this;
	}
	// ------------------------------
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
	shift() {
		if (!this.length) return undefined;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
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
		
		if (position <= ((this.length - 1) / 2)) {
			current = this.head;
			for (i = 0; i < position; i++) {
				current = current.next;
			}
		}

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
		if (position > this.length - 1 || position < 0) return undefined;
		if (position === 0) return this.unshift(val);
		if (position === this.length - 1) return this.push(val);
		if (position > 0 && position < this.length - 1) {

			let node = new Node(val);

			node.next = this.get(position);

			node.prev = this.get(position - 1)

			this.get(position).prev = node;

			this.get(position - 1).next = node;
			this.length++;	
			return this;
		}
	}
	// ------------------------------
	remove(position) {
		if (position > this.length - 1 || position < 0) return undefined;
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
			previous = current.prev;
			next = current.next;

			current.prev = next;
			current.next = previous;

			current = next;
			i++;
		}

		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;
		
		return this;
	}
}


let list = new DoublyLinkedList();