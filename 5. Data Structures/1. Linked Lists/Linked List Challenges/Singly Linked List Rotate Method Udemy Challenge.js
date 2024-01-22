class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

// ////////////////////////////////////////////////////////////////////////////

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	// ==============================================
	// add a new node to the end of the list
	push(val) {
		let node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node; // ** see notes below
			this.tail = node;
		}

		this.length++;

		return this;
	}
	// remove a node from the beginning of the list
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
	// ==============================================
	// move a section of the list to the end starting at the index provided.
	// negative index numbers are also valid (where -1 points to the last element in the current list, etc.)
	rotate(index) {
		if (index === 0 || index === this.length - 1) {
			return this;
		}

		// negative index
		if (index < 0) {
			index = index + this.length;
		}

		// index is out of bounds
		if (index > this.length - 1) {
			return this;
		}
		
		let n = 0;
		let current = this.head;
		
		while (n < index) {
			this.push(current.val)
			this.shift();
			n++;
			current = current.next;
		}

		return this;
	}
}

// just a function that adds the values of the nodes to an array and then logs the array to the console.
function print(list) {
	let values = [];

	let current = list.head;
	let n = 0;

	while (n < list.length) {
		values.push(current.val);
		current = current.next;
		n++;
	}

	console.log(values);
}

let list = new SinglyLinkedList();

list.push(5);
list.push(10);
list.push(15);
list.push(20);
list.push(25);

// test 1
// list.rotate(3); // 20 25 5 10 15
// print(list);

// test 2
// list.rotate(-1); // 25 5 10 15 20
// print(list); 

// test 3
list.rotate(1000); // 5 10 15 20 25
print(list); 