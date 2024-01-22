// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// DATA STRUCTURES

// LINKED LISTS: SINGLY LINKED LIST

// ------------------------------------------------------------

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
	pop() {
		if (!this.length) return undefined;

		let current, secondToLast, popped;

		current = this.head;

		if (!this.head.next) {
			this.head = null;
			this.tail = null;
			this.length--;
			popped = current;
			return popped;
		}

		while (current) {
			if (!current.next) {
				this.tail = secondToLast;
				this.tail.next = null;
				this.length--;
				popped = current;
				return popped;
			}
			secondToLast = current;
			current = current.next;
		}
	}
	// ------------------------------
	shift() {
		if (!this.length) return undefined;

		let temp = this.head;
		this.head = temp.next;
		this.length--;

		if (!this.head) {
			this.tail = null;
		}

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
			this.head = node;
		}

		this.length++;

		return this;
	}
	// ------------------------------
	get(index) {
		let n = 0;
		let current = this.head;

		if (index < 0 || index > this.length - 1) return null;

		while (index >= n) {
			if (index === n) {
				return current;
			} else {
				n++;
				current = current.next;
			}
		}
	}
	// ------------------------------
	set(index, val) {
		let node = this.get(index);
		if (!node) return null;
		else node.val = val;
		return this;
	}
	// ------------------------------
	insert(index, val) {
		let n = 0;

		if (index < 0 || index > this.length) return undefined;

		if (index === 0) this.unshift(val);

		if (index === this.length) this.push(val);

		while (index >= n) {
			if (index === n) {
				let previous, current, newNode;

				previous = this.get(index - 1);
				current = this.get(index);
				newNode = new Node(val);

				previous.next = newNode;
				newNode.next = current;
				this.length++;
				return this;
			}
			else {
				n++;
			}
		}

		return this;

	}
	// ------------------------------
	remove(index) {

		if (index > this.length || index < 0) return undefined;

		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let previous = this.get(index - 1);
		let nextNode = this.get(index + 1);
		previous.next = nextNode;
		this.length--;

		return this;
	}
	// ------------------------------
	reverse() {
		if (!this.length) return undefined;

		if (this.length === 1) return this;

		let current = this.head;
		let previous, nextNode;

		this.head = this.tail;
		this.tail = current;

		while (current) {
			nextNode = current.next;
			current.next = previous || null;
			previous = current;
			current = nextNode;
		}
		return this;
	}
	// ------------------------------
	print() {
		let values = [];
		let current = this.head;

		while (current) {
			values.push(current.val);
			current = current.next;
		}

		console.log(values);
		return values;
	}
}

let list = new SinglyLinkedList();

list.push("A");
list.push("B");
list.push("C");
list.push("D");
list.push("E");
list.push("F");
list.push("G");

list.print();