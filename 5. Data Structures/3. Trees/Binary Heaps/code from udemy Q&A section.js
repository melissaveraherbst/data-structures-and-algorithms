let arr = this.values;

// No need to swap if there is only one node in the array
if (arr.length <= 1) {
    return;
}

// initial swap
let removedNode = arr[0];
let temp = arr[arr.length - 1];
arr.pop();
arr[0] = temp;

// variables for loop
let parent = 0;
let left = 2 * parent + 1;
let right = 2 * parent + 2;

while ((arr[left] && arr[parent].priority > arr[left].priority) ||
    (arr[right] && arr[parent].priority > arr[right].priority)) {
    // if the left is NOT out of bound but right is out of bound OR left's priority is less than right's priority
    if (arr[left] && !arr[right] || arr[left].priority < arr[right].priority) {
        // swap left
        let temp = arr[parent];
        arr[parent] = arr[left];
        arr[left] = temp;
        parent = left;
    }
    // if the right is NOT out of bound but left is out of bound OR right's priority is less than left's priority
    else if (arr[right] && !arr[left] || arr[right].priority < arr[left].priority) {
        // swap right
        let temp = arr[parent];
        arr[parent] = arr[right];
        arr[right] = temp;
        parent = right;
    }
    // update left , right
    left = 2 * parent + 1;
    right = 2 * parent + 2;

    // when left or right are out of bound, break the loop
    if (left > arr.length && right > arr.length) {
        break;
    }
}

return removedNode;