// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// DATA STRUCTURES

// PRIORITY QUEUE

// Priority Queue Operations

// 1. Insertion
// When a new element is inserted in a priority queue, it moves to the empty slot from top to bottom and left to right. However, if the element is not in the correct place then it will be compared with the parent node. If the element is not in the correct order, the elements are swapped. The swapping process continues until all the elements are placed in the correct position.

// 2. Deletion
// As you know that in a max heap, the maximum element is the root node. And it will remove the element which has maximum priority first. Thus, you remove the root node from the queue. This removal creates an empty slot, which will be further filled with new insertion. Then, it compares the newly inserted element with all the elements inside the queue to maintain the heap invariant

// 3. Peek
// This operation helps to return the maximum element from Max Heap or the minimum element from Min Heap (this is always the first element) without deleting the node from the priority queue.

// How to Implement a Priority Queue
// Priority queue can be implemented using the following data structures: 
// Array
// Linked list
// Binary Heap (a Tree data structure)
// Binary Search Tree

// https://www.geeksforgeeks.org/priority-queue-set-1-introduction/

// ------------------------------------------------------------
// Priority Queue implemented using a Heap data structure

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
        // in this code example, a smaller number = higher priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    // ------------------------------
    // helper function which swap two values in an array
    _swap(arr, index1, index2) {
        return [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }

    // ------------------------------
    // makes a new node, and puts it in the right spot in the priority queue
    enqueue(val, priority) {
        let values = this.values;
        
        // create and add the new value to the end of the array
        let node = new Node(val, priority);
        values.push(node);

        if (values.length > 1) {
            // parent and child indexes
            let child = values.length - 1;
            let parent = Math.floor((child - 1) / 2);
            // while the child and parent indexes are not out of bounds and the child's priority is smaller than the parent's priority, swap them.
            while (values[child]['priority'] < values[parent]['priority']) {
                this._swap(values, child, parent);
                // update the child index to the parent index
                child = parent;
                // update the parent index
                parent = Math.floor((child - 1) / 2);
                if (parent < 0) break;
            }
        }
        return values;
    }

    // ------------------------------
    dequeue() {
        let values = this.values;

        let min = values[0];

        if (!values.length) return "The queue is empty";
        
        // restore the heap - compare the new root/parent to it's child(ren) and swap the values until the min-heap is restored
        if (values.length > 1) {
            // replace the root/min element with the most recently added element (last value in the array);
            this._swap(values, 0, values.length - 1);
            // remove the min value
            values.pop();
            // parent, left child and right child index pointers
            let parent = 0;
            let left = (2 * parent) + 1;
            let right = (2 * parent) + 2;
            // find the smallest among root, left child and right child
            while (values[left] && values[right]) {
                if (values[left]['priority'] < values[parent]['priority'] || values[right]['priority'] < values[parent]['priority']) {
                    if (values[left]['priority'] < values[right]['priority']) {
                        this._swap(values, parent, left);
                        // update the parent, left child and right child index pointers
                        parent = left;
                        left = (2 * parent) + 1;
                        right = (2 * parent) + 2;
                    }
                    else {
                        this._swap(values, parent, right);
                        parent = right;
                        left = (2 * parent) + 1;
                        right = (2 * parent) + 2;
                    }
                } else break;
            };
            if (!values[left] && values[right] && values[right]['priority'] < values[parent]['priority']) {
                this._swap(values, parent, right);
            };
            if (!values[right] && values[left] && values[left]['priority'] < values[parent]['priority']) {
                this._swap(values, parent, left);
            };
        }
        return min;
    }
    
    // ------------------------------
    peek() {
        let values = this.values;
        let min = values.length ? values[0] : "the queue is empty"; 
        return min;
    }
}

// create a new instance of a Priority Queue
let pq = new PriorityQueue();

// TEST PQ METHODS

// 1) pq.enqueue()
pq.enqueue("AAA", 4);
pq.enqueue("BBB", 1);
pq.enqueue("CCC", 1);
pq.enqueue("DDD", 5);
pq.enqueue("EEE", 2);
pq.enqueue("FFF", 5);
pq.enqueue("GGG", 2);
pq.enqueue("HHH", 6);
pq.enqueue("III", 3);
pq.enqueue("JJJ", 7);

// 2) pq.dequeue()
let i = 0;
let n = pq.values.length;
let dequeued = [];

while (i !== n) {
    i++;
    dequeued.push(pq.dequeue());
}

console.log("pq.dequeue() result(s): \n", dequeued);

// 3) pq.peek()
console.log("pq.peek() result(s): \n", pq.peek());