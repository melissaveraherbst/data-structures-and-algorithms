class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
        // smaller number → higher priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    _swap(arr, index1, index2) {
        return [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }

    enqueue(val, priority) {
        let values = this.values;
        
        let node = new Node(val, priority);
        values.push(node);

        if (values.length > 1) {
            let child = values.length - 1;
            let parent = Math.floor((child - 1) / 2);
            while (values[child]['priority'] < values[parent]['priority']) {
                this._swap(values, child, parent);
                child = parent;
                parent = Math.floor((child - 1) / 2);
                if (parent < 0) break;
            }
        }
        return values;
    }

    dequeue() {
        let values = this.values;

        let min = values[0];

        if (!values.length) return "The queue is empty";
        
        if (values.length > 1) {
            this._swap(values, 0, values.length - 1);
            values.pop();
            let parent = 0;
            let left = (2 * parent) + 1;
            let right = (2 * parent) + 2;
            while (values[left] && values[right]) {
                if (values[left]['priority'] < values[parent]['priority'] || values[right]['priority'] < values[parent]['priority']) {
                    if (values[left]['priority'] < values[right]['priority']) {
                        this._swap(values, parent, left);
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
    
    peek() {
        let min = this.values.length ? this.values[0] : "the queue is empty"; 
        return min;
    }
}

module.exports.PriorityQueue = PriorityQueue;